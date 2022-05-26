CREATE DATABASE PrjDc;
USE PrjDc;

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(65),
email VARCHAR(65),
heroiFav VARCHAR(65),
dataCadastro datetime default current_timestamp,
senha VARCHAR(65)
);

SELECT nome AS 'Nome do usuario', dataCadastro AS 'Hora e data de cadastro no forum' FROM usuario WHERE id=03;


SELECT*FROM usuario;
CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
); 