-- Seed data for the user table
INSERT INTO users (name, lastname, email, password)
VALUES
('Juan', 'Doe', 'juan@example.com', 'juanpassword123'),
('Maria', 'Smith', 'maria@example.com', 'mariapassword456'),
('Carlos', 'Lee', 'carlos@example.com', 'carlospassword789');

SELECT * FROM users;
