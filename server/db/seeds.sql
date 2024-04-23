


-- Seed data for the user table
INSERT INTO users (name, email, password)
VALUES
('Juan', 'juan@example.com', 'juanpassword123'),
('Maria', 'maria@example.com', 'mariapassword456'),
('Carlos', 'carlos@example.com', 'carlospassword789');

-- Checks that data has been inserted correctly
SELECT * FROM users;
