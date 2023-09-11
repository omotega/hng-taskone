const Person = require("../database/model/person");

class PersonService {
  static async createPerson(name) {
    const person = await Person.create({ name });
    if (!person) throw new Error("could not create person");
    return person;
  }

  static async getPerson(personId) {
    const person = await Person.findOne({ _id: personId });
    if (!person) throw new Error("User not found");
    return person;
  }

  static async updatePersonDetails(personId, name) {
    const person = await Person.findByIdAndUpdate(
      { _id: personId },
      { name: name }
    );
    if (!person) throw new Error("User not found");
    return person;
  }

  static async deletePersonDetails(personId) {
    const person = await Person.findOneAndDelete({ _id: personId });
    if (!person) throw new Error("User not found");
    return person;
  }
}

module.exports = PersonService;
