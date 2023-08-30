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

// Prducts routes

routes.get("/users", (req, res) => {
    users.fetchUsers(req, res);
  });
  
  routes.get("/user/:id", (req, res) => {
    users.fetchUser(req, res);
  });

module.exports = {
    express,
    routes
}