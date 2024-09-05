const financialController = require("../controllers/financial.controller");
const express = require("express");
const router = express.Router();

//create a naw financial
router.post("/", financialController.create);
//http://localhost:5000/api/v1/financial

//Retreive all financial records
router.get("/",financialController.findAll);

//Retreive all financial records by User Id
router.get("/user/:userID",financialController.findAllByUserId);

//get by id
router.get("/:id",financialController.getById);

//Upate
router.put("/:id",financialController.update);

//Delete a financial records with id
router.delete("/:id",financialController.delete);


module.exports = router