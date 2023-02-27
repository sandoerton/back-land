CREATE DATABASE IF NOT EXISTS cadastro;

USE cadastro;

CREATE TABLE `Usuarios` (
    `id` int NOT NULL AUTO_INCREMENT,
    `nome` varchar(255) DEFAULT NULL,
    `email` varchar(255) DEFAULT NULL,
    `fone` int DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
    `Usuarios`
VALUES
    (
        1,
        'usuario teste',
        'nome_teste@email.com',
        81987654321
    );