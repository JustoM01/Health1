-- -- Insert data into the 'users' table
-- INSERT INTO users (name, lastname, email, password)
-- VALUES
-- ('Juan', 'Doe', 'juan@example.com', '$2b$10$r9d5Za.WWbfSBO.bgM1ptujQdUhM0P8.0c6hvx9WQRQWiVNhaHdR.'),
-- ('Maria', 'Smith', 'maria@example.com', 'mariapassword456'),
-- ('Carlos', 'Lee', 'carlos@example.com', 'carlospassword789');

-- Make sure to end each command with a semicolon to avoid errors
SELECT * FROM users;

-- Insert data into the 'fitness_profiles' table
INSERT INTO fitness_profiles (user_id, age, weight, fitness_goal)
VALUES
(1, 28, 150, 'Muscle gain');  -- Assuming user ID 1 is Juan, and user data is correctly inserted

-- View the seeded data in 'fitness_profiles'
SELECT * FROM fitness_profiles;
