const { where } = require("sequelize");
const Financial = require("../models/financial.model");

//create a new Financial record
exports.create = async (req, res) => {
  const { userID, date, description, amount, category, paymentMethod } =
    req.body;
  const newRecord = {
    userID,
    date,
    description,
    amount,
    category,
    paymentMethod,
  };
  Financial.create(newRecord)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res
        .status(500)
        .send({
          message:
            error.message ||
            "Some error occured while saving th efinancial Record",
        });
    });
};

//Retreive all financial records
exports.findAll = async (req, res) => {
  await Financial.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Some error occured while saving th efinancial Record",
      });
    });
};

//Retreive all financial records by User Id
exports.findAllByUserId = async (req, res) => {
  const userId = req.params.userID;
  await Financial.findAll({ where: { userID: userId } })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "No fond Finacial with id" + id });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Something error occured while creating the record.",
      });
    });
};

//Find a single financial with an in
exports.getById = async (req, res) => {
  const id = req.params.id;
  await Financial.findByPk(id)
    .then((data) => {
      if (!data) {
        res, status(400).send({ message: "No found Restaurant with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Something error occurred creating the restaurant.",
      });
    });
};

//Update a financial records with id
exports.update = async (req, res) => {
  const id = req.params.id;
  await Financial.update(req.body, {
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Financial was update successfully" });
      } else {
        res.send({
          message:
            "Cannot update Financial with id =" +
            id +
            ".Maybe Financial was not foud or req.body is empty!",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something error occured while creating the Financial.",
      });
    });
};

//delete
exports.delete = async (req, res) => {
  const id = req.params.id;
  await Financial.destroy({ where: { id: id } })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "Financial was Delete successfully",
        });
      } else {
        res.send({
          message: "Cannot delete Financial with id =" + id + ".",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something error occured while creating the Financial.",
      });
    });
};