const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }
  static compareGPA(student1, student2) {
    let betterStudent;
    if(student1.GPA === student2.GPA) {
      return "Both students have the same GPA"
    } else if (student1.GPA > student2.GPA) {
      betterStudent = student1;
    } else {
      betterStudent = student2;
    }
    return `${betterStudent.firstName} ${betterStudent.lastName} has the higher GPA.`
  }
}



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}