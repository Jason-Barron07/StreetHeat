const express = require("express");
const bodyParser = require("body-parser");
const {verifyAToken} = require('../middleware/AuthenticateUser')
const routes = express.Router();
//import all model's objects
const { users, products } = require("../model");

// User routes

routes.get("/users", (req,res)=>{
    users.fetchUsers(req,res);
})

routes.get("/user/:id", (req, res)=>{
    users.fetchUser(req,res)
})


routes.post("/register", bodyParser.json(), (req, res) => {
    users.register(req, res);
  });

  routes.post('/login', bodyParser.json(), (req, res)=>{
    users.login(req, res)
});

routes.delete("/user/:id", (req, res) => {
    users.deleteUser(req, res);
  });

  routes.patch("/user/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
  });

// Prducts routes

routes.get("/products", (req, res) => {
    products.fetchProducts(req, res);
  });
  
  routes.get("/product/:id", (req, res) => {
    products.fetchProduct(req, res);
  });

  routes.post("/product", bodyParser.json(), (req, res) => {
    products.addProduct(req, res)
  });

  routes.patch("/product/:id", bodyParser.json(), (req, res) => {
    products.updateProducts(req, res);
  });

  routes.delete("/product/:id", (req, res) => {
    products.deleteProducts(req, res);
  });



module.exports = {
    express,
    routes,
    verifyAToken
}