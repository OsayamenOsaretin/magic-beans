import seeder from './seeder';
import { userData, questionsData, answersData, regionsData } from './seedData';

const encryptPassword = (password) => {
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  return hashedPassword;
};


export default function seedFunction(options) {
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