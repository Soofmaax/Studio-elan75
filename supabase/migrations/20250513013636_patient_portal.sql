/*
  # Add Google Calendar Integration

  1. Changes
    - Add `google_calendar_token` column to profiles table
    - Add `user_data` column to bookings table for additional booking information

  2. Security
    - Update RLS policies to handle new columns
*/

-- Add Google Calendar token to profiles
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS google_calendar_token text;

-- Add user data to bookings
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS user_data jsonb;

-- Update RLS policies for new columns
CREATE POLICY "Users can read own google_calendar_token"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own google_calendar_token"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);