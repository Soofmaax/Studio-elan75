/*
  # Initial Schema Setup

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `name` (text)
      - `credits` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `bookings`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `class_id` (text)
      - `date` (date)
      - `time` (time)
      - `status` (enum: booked, cancelled, attended)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `transactions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `type` (enum: purchase, debit)
      - `amount` (integer)
      - `description` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to:
      - Read and update their own profile
      - Read and create their own bookings
      - Read their own transactions
*/

-- Create custom types
CREATE TYPE booking_status AS ENUM ('booked', 'cancelled', 'attended');
CREATE TYPE transaction_type AS ENUM ('purchase', 'debit');

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users,
  name text,
  credits integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE,
  class_id text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  status booking_status DEFAULT 'booked',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create transactions table
CREATE TABLE transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE,
  type transaction_type NOT NULL,
  amount integer NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can read own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own transactions"
  ON transactions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, name)
  VALUES (new.id, new.raw_user_meta_data->>'name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();