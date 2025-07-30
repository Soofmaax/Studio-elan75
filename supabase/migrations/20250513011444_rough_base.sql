/*
  # Add class schedules and capacity management

  1. New Tables
    - `class_schedules`
      - `id` (uuid, primary key)
      - `class_id` (text, references yoga classes)
      - `date` (date)
      - `time` (time)
      - `capacity` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on class_schedules table
    - Add policies for authenticated users to read schedules
*/

-- Create class schedules table
CREATE TABLE class_schedules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  capacity integer DEFAULT 15,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE class_schedules ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can read class schedules"
  ON class_schedules
  FOR SELECT
  TO authenticated
  USING (true);

-- Function to check class capacity
CREATE OR REPLACE FUNCTION check_class_capacity()
RETURNS trigger AS $$
BEGIN
  IF (
    SELECT COUNT(*)
    FROM bookings b
    WHERE b.class_id = NEW.class_id
    AND b.date = NEW.date
    AND b.time = NEW.time
    AND b.status = 'booked'
  ) >= 15 THEN
    RAISE EXCEPTION 'Class is full';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for capacity check
CREATE TRIGGER check_capacity_before_booking
  BEFORE INSERT ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION check_class_capacity();