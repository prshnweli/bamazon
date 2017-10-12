var mysql = require("mysql");

var connect = require('./connect.js')

var connection = mysql.createConnection(connect.input);

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    start();
  });
}

function start() {

var inquirer = require("inquirer");

inquirer.prompt([

  {
    type: "input",
    name: "item_ID",
    message: "ID of item you wish to buy?"
  },
  {
    type: "input",
    name: "quantity",
    message: "How many?"
  }
]).then(function(user) {
  //console.log(user.quantity);
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    var item = parseInt(user.item_ID) - 1;
    var stock = res[item].stock_quantity;
    console.log(stock);

    var diff = stock - parseInt(user.quantity);
    console.log(diff);

    if(user.quantity > stock){
      console.log("Insufficient quantity")
    } else {
      connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: diff
          },
          {
            item_ID: user.item_ID
          }
        ]

        );
    }
    connection.end();
  });



})
};

