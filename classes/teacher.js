const Person = require('./person');

class Teacher extends Person {
  constructor (firstName, lastName, subject, yearsOfExperience) {
    super (firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    return teachers.reduce(
      (accumulator, currentValue) => accumulator + currentValue.yearsOfExperience, 0
    )
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}