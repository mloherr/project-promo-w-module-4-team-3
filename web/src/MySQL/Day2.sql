CREATE TABLE projects(
idProject INT primary key auto_increment,
name VARCHAR(60) not null,
slogan VARCHAR (200) not null,
descr VARCHAR(1000) not null,
technologies VARCHAR (60) not null,
image LONGTEXT not null,
urlGithub VARCHAR (200) not null,
urlDemo VARCHAR (200) not null
);

CREATE TABLE author(
idAuthor INT primary key auto_increment,
author VARCHAR(60) not null,
job VARCHAR(60) not null,
photo LONGTEXT not null
);