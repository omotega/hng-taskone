const httpStatus = require("http-status");
const PersonService = require("../services/person");
const { errorResponse, handleError } = require("../utils/response");

class PersonController {
  static async createPerson(req, res) {
    try {
      const { name } = req.body;
      const response = await PersonService.createPerson(name);
      res
        .status(httpStatus.CREATED)
        .json({ message: "User created successfully", data: response });
    } catch (error) {
      handleError(req, error);
      errorResponse(res, httpStatus.INTERNAL_SERVER_ERROR, "something happend");
    }
  }

  static async getperson(req, res) {
    try {
      const { id } = req.params;
      const response = await PersonService.getPerson(id);
      res
        .status(httpStatus.OK)
        .json({ message: "User fetched successfully", data: response });
    } catch (error) {
      handleError(req, error);
      errorResponse(res, httpStatus.INTERNAL_SERVER_ERROR, "something happend");
    }
  }

  static async updatePersonDetails(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const response = await PersonService.updatePersonDetails(id, name);
      res
        .status(httpStatus.OK)
        .json({ message: "User Details updated successfully", data: response });
    } catch (error) {
      handleError(req, error);
      errorResponse(res, httpStatus.INTERNAL_SERVER_ERROR, "something happend");
    }
  }

  static async deletedetails(req, res) {
    try {
      const { id } = req.params;
      const response = await PersonService.deletePersonDetails(id);
      res
        .status(httpStatus.OK)
        .json({ message: "User deleted successfully", data: response });
    } catch (error) {
      handleError(req, error);
      errorResponse(res, httpStatus.INTERNAL_SERVER_ERROR, "something happend");
    }
  }
}

module.exports = PersonController;
