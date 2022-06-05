CREATE DATABASE PrjDc;
USE PrjDc;

CREATE TABLE usuario(
idUser INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(65),
email VARCHAR(65),
heroiFav VARCHAR(65),
dataCadastro datetime default current_timestamp,
senha VARCHAR(65)
);

CREATE TABLE chat (
	id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUser)
);

select * from usuario;


-- Select que traz a quantidade de usuarios:
SELECT COUNT(idUser) AS 'QtdUsuarios' FROM usuario;

-- Select que traz o heroi mais escolhido no cadastro e a quantidade de vezes que ele foi escolhido:
SELECT COUNT(heroiFav) AS 'max_heroi', heroiFav AS 'HeroiMaisEscolhido' FROM usuario  group by heroiFav;
