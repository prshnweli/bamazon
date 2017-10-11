DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(11) NOT NULL AUTO_INCREMENT, 
	product_name VARCHAR(30), 
	department_name VARCHAR(30),
	price DECIMAL(10,2),
	stock_quantity INTEGER(10),
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Soap", "Home", 3.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-Shirt", "Clothing", 8.99, 56);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Watch", "Clothing", 70.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("XBox", "Electronics", 350.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sunglasses", "Clothing", 150.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 300.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shoes", "Clothing", 30.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Random Book", "Books", 15.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Random Movie", "Movies", 11.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Random Album", "Music", 6.99, 10);