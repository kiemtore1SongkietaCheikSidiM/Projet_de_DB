source de documentation: https://sql.sh/cours

Mes requettes sur la base de donne en Sqlite(Base_de_donnee.db) fais sur mon terminal

CREATE TABLE Eleve(id INT PRIMARY KEY NOT NULL, Nom VARCHAR(100),Prenom VARCHAR(100), Classe VARCHAR(5),Numero_tel INT, email VARCHAR(100), Date_de_naissance DATE, Lieu_de_naissance VARCHAR(100), Sport_choisi VARCHAR(100));

INSERT INTO Eleve(id,Nom , Prenom,Classe, Numero_tel,email, Date_de_naissance, Lieu_de_naissance, Sport_choisi) VALUES (1,'Kiemtore','Firdaous','TleD',67883538,'kiemtorefirdaous@gmail.com',27/09/2007,'Niangoloko','Volleyball');

INSERT INTO Eleve(id,Nom , Prenom,Classe, Numero_tel,email, Date_de_naissance, Lieu_de_naissance, Sport_choisi)  VALUES (2,'Sory','Barakissa','3e',78962531,'sorybarakissa@gmail.com',12/07/2008,'Orodara','football');

INSERT INTO Eleve(id,Nom , Prenom,Classe, Numero_tel,email, Date_de_naissance, Lieu_de_naissance, Sport_choisi) VALUES (3,'Tou','Safoura','4e',75698745,'safouratou@gmail.com',12/12/2005,'Bobo Dioulasso','basketball'),(4,'Sawadogo','Abdoul','2nde',79521436,'abdoul5cfa@gmail.com',10/02/2000,'Banfora','Handball'),(5,'Barro','Keita','3e',77561234,'BarroKeita@gmail.com',14/10/2007,'Tiefora','football'),(6,'Kabore','Saydou','6e',710025921,'seydou145or@gmail.com',05/01/2003,'Mangodara','football'),(7,'Kone','Raoul','5e',73456897,'koneRaoul@gmail.com',05/10/2002,'Panga','cyclisme'),(8,'Da','Christine','1ere',72142536,'dachistine@gmail.com',02/10/2004,'Niangoloko','basketball');

INSERT INTO Eleve(id,Nom , Prenom,Classe, Numero_tel,email, Date_de_naissance, Lieu_de_naissance, Sport_choisi) VALUES (9,'Sawadogo','Issa','1ereD',71002536,Issa8boys@gmail.com',25/05/2011,'Sideradougou','football'),(10,'Barry','Salif','3eme',75698523,'Barry5Salif@gmail.com',25/01/2010,'Yedere','volleyball'),(11,'Barry','Malick','5eme',75456910,'Barry5maliki@gmail.com',27/05/2012,'Sindou','volleyball'),(12,'Sanogo','Cherif','6eme',60002531,'cherif1254@gmail.com',22/08/2015,'Douna','football'),(13,'Salouka','Yasmina','4eme',78256314,'Saloukayasmina1@gmail.com',19/02/2008,'Niangoloko','handball'),(14,'Sankara','Rollan','1ere',79586321,'sankararollan@gmail.com',01/01/2011,'Niangoloko','football');

CREATE TABLE Enseignant(id INT PRIMARY KEY NOT NULL, Nom VARCHAR(100), Prenom Varchar(100), Matiere VARCHAR(20));

INSERT INTO Enseignant(id, Nom, Prenom, Matiere) VALUES (1,'Sanfo','Boukari','SVT');

INSERT INTO Enseignant(id, Nom, Prenom, Matiere) VALUES (2,'Barro','Kassoum','Histoire_Geographie');