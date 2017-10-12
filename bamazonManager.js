var mysql = require("mysql");

var connect = require('./connect.js')

var connection = mysql.createConnection(connect.input);

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});


function start() {

var inquirer = require("inquirer");

inquirer.prompt([
	{
    type: "list",
    name: "command",
    message: "Which option",
    choices: ["View products for sale", "View low inventory", "Add to inventory", "Add new product"]
  },


]).then(function(user) {
	if(user.command === "View products for sale"){
		view();
	}
	if(user.command === "View low inventory"){
		low();
	}
	if(user.command === "Add to inventory"){
		addInventory();
	}
	if(user.command === "Add new product"){
		addProduct();
	}
})

}


function view() {
	connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
})
}

function low() {
	connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) {
    if (err) throw err;
    console.log(res);
})
}

function addInventory() {

	var inquirer = require("inquirer");

	inquirer.prompt([
	{
    type: "input",
    name: "id",
    message: "Which item id do you want to update"
  	},
  	{
  	type: "input",
  	name: "amount",
  	message: "how many of this item is currently available?"
  	}


]).then(function(user) {
	connection.query(
		"UPDATE products SET ? WHERE ?",
		[{
			stock_quantity: user.amount
		},
		{
			item_ID: user.id
		}]
		)
})

};


function addProduct() {

var inquirer = require("inquirer");

	inquirer.prompt([
	{
    type: "input",
    name: "new",
    message: "What item did you want to add"
  	},
  	{
  	type: "input",
  	name: "amount",
  	message: "how many of this item is currently available?"
  	},
  	{
  	type: "input",
  	name: "cost",
  	message: "Price of item?"
  	},
  	{
  	type: "input",
  	name: "department",
  	message: "Which department?"
  	}


]).then(function(user) {
	connection.query(
		"INSERT INTO products SET ?",
		{
			product_name: user.new,
			stock_quantity: user.amount,
			price: user.cost,
			department_name: user.department
		}
		);
})


}