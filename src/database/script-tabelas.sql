-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

DROP DATABASE IF EXISTS basketic;

CREATE DATABASE basketic;

USE basketic;

-- CREATE TABLE empresa (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	razao_social VARCHAR(50),
-- 	cnpj CHAR(14),
-- 	codigo_ativacao VARCHAR(50)
-- );

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
	-- fk_empresa INT,
	-- FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE dados_usuario (
	id_dados INT PRIMARY KEY auto_increment,
	horas_jogadas INT,
	fk_usuario INT,
	qtd_cestas INT,
	taxa_acerto DECIMAL(5,2),
	qtd_partidas INT,
	qtd_vitorias INT,
	dt_jogo DATETIME DEFAULT NOW()
);

-- CREATE TABLE aviso (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	titulo VARCHAR(100),
-- 	descricao VARCHAR(150),
-- 	fk_usuario INT,
-- 	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
-- );

-- CREATE TABLE aquario (
-- /* em nossa regra de negócio, um aquario tem apenas um sensor */
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	descricao VARCHAR(300),
-- 	fk_empresa INT,
-- 	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
-- );

-- /* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

-- CREATE TABLE medida (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT,
-- 	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
-- );

-- INSERT INTO empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
-- INSERT INTO empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
-- INSERT INTO aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
-- INSERT INTO aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);

INSERT INTO usuario(nome, email, senha) VALUES 
('Victor', 'victor@gmail.com', 'qwerty123');

DROP USER inseridor@localhost;

CREATE USER 'inseridor'@'localhost' identified by 'basketicVictor';
GRANT INSERT ON basketic.* TO 'inseridor'@'localhost';

GRANT SELECT on basketic.* TO 'inseridor'@'localhost';
FLUSH PRIVILEGES;
