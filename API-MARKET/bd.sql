-- SQLBook: Code
CREATE DATABASE market;
USE market;

CREATE TABLE persona (
    id_persona INT PRIMARY KEY AUTO_INCREMENT,
    cedula VARCHAR(15) NOT NULL,
    nombres VARCHAR(85) NOT NULL,
    apellidos VARCHAR(85) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(85) NOT NULL
);

CREATE TABLE roles (
    id_role INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(85) NOT NULL,
    descripcion VARCHAR(255) NOT NULL
);

CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    id_persona INT NOT NULL,
    correo VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    id_role INT NOT NULL,
    estado TINYINT(1) NOT NULL,
    FOREIGN KEY (id_persona) REFERENCES persona(id_persona),
    FOREIGN KEY (id_role) REFERENCES roles(id_role)
);

CREATE TABLE categorias (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(85) NOT NULL,
    descripcion VARCHAR(255) NOT NULL
);

CREATE TABLE productos (
    id_producto INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(85) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    id_categoria INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    fecha_vencimiento DATE NOT NULL ,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

CREATE TABLE stock (
    id_stock INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    lote VARCHAR(85) NOT NULL,
    estado TINYINT(1) NOT NULL,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
