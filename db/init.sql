-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS docker;

-- Usar la base de datos
USE docker;

-- Crear la tabla users
CREATE TABLE IF NOT EXISTS alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL UNIQUE,
    edad INT NOT NULL
);

-- Insertar datos en la tabla users
insert into alumnos values (null, "Daniel", 27);
insert into alumnos values (null, "Noel", 33);
insert into alumnos values (null, "Alberto", 42);

