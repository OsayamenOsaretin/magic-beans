var bcrypt = require('bcryptjs');
var seeder = require('./seeder');
var seedData = require('./seedData');

var userData = seedData.userData;
var questionsData = seedData.questionsData;
var answersData = seedData.answersData;
var regionsData = seedData.regionsData;

const encryptPassword = (password) => {
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  return hashedPassword;
};


module.exports = function seedFunction(options) {
  if (options.users) {
    // run users seed
    const updatedUserData = userData.map((user, key) => {
      const password = `hashPassword${key}`;
      user.hashedPassword = encryptPassword(password);
      return user;
    });
    seeder(userData, 'Users');
  }

  if (options.questions) {
    // run question seed
    seeder(questionsData, 'Questions');
  }

  if (options.answers) {
    // run answers seed
    seeder(answersData, 'Answers');
  }

  if (options.regions) {
    // run regions seed
    seeder(regionsData, 'Regions');
  }
}