import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

function createUser(password,email, name) {
    const userID = Accounts.createUser({
      name: name,
      email: email,
      password: password,
    });
  }

  if (Meteor.users.find().count() === 0) {
    if (Meteor.settings.defaultAccounts) {
      console.log('Create user');
      Meteor.settings.defaultAccounts.map(({ password,email, name }) => createUser(password,email, name));
    } else {
      console.log('Error');
    }
  }  