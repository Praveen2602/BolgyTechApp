const express = require("express");
const  {createCategory} = require("../../controllers/categories/categoriesController");

const isLoggedIn = require("../../middlewares/isLoggedIn");

const categoriesRouter = express.Router();
//!Create Category Route

categoriesRouter.post("/",isLoggedIn ,createCategory)

module.exports = categoriesRouter;