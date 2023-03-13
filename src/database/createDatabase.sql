CREATE DATABASE IF NOT EXISTS cadastro;

USE cadastro;

CREATE TABLE `Usuarios` (
    `id` int NOT NULL AUTO_INCREMENT,
    `nome` varchar(255) DEFAULT NULL,
    `email` varchar(255) DEFAULT NULL,
    `fone` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

INSERT INTO
    `Usuarios`
VALUES
    (1, 'usuario teste', 'nome_teste@email.com', '81987654321');
    