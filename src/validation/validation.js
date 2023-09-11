const joi = require("joi");
const objectId = require("./custom");

const createUserValidation = {
  body: joi.object({
    name: joi.string().required().messages({
      "string.empty": "Name is required",
      "any.required": "Name is required",
    }),
  }),
};

const getUserValidation = {
  params: joi.object({
    id: joi
      .string()
      .custom(objectId)
      .required()
      .messages({
        "string.empty": "id is required",
        "any.required": "Nid is required",
      }),
  }),
};

const updateUserValidation = {
  params: joi.object({
    id: joi.string().custom(objectId).required(),
  }),
  body: joi.object({
    name: joi.string().required().messages({
      "string.empty": "Name is required",
      "any.required": "Name is required",
    }),
  }),
};

const deleteUserValidation = {
  params: joi.object({
    id: joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createUserValidation,
  getUserValidation,
  updateUserValidation,
  deleteUserValidation,
};
