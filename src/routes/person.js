const express = require("express");
const PersonController = require("../controller/person");
const validationMiddleware = require("../middleware/validate");
const {
  createUserValidation,
  getUserValidation,
  updateUserValidation,
  deleteUserValidation,
} = require("../validation/validation");

const personRoute = express.Router();

personRoute
  .route("/")
  .post(
    validationMiddleware(createUserValidation),
    PersonController.createPerson
  );
personRoute
  .route("/:id")
  .get(validationMiddleware(getUserValidation), PersonController.getperson)
  .put(
    validationMiddleware(updateUserValidation),
    PersonController.updatePersonDetails
  )
  .delete(
    validationMiddleware(deleteUserValidation),
    PersonController.deletedetails
  );

module.exports = personRoute;
