class userManager {
  createNewUser(username, password) {
    users[username] = new user(username, password);
    return true;
  }

  updateUser(username, newPassword = null, newEmail = null, newAge = null) {
    if (!users[username]) return false;
    if (newPassword != null) users[username].password = newPassword;
    if (newEmail != null) users[username].email = newEmail;
    if (newAge != null) users[username].age = newAge;
    return true;
  }
  getUser(username) {
    return users[username];
  }
}

class user {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.email = null;
    this.age = null;
  }
}

let myUserManager = new userManager();

// comienzo
let _password = "1";
let _username = "1";
let _email = "1";
let _age = 1;

console.log(myUserManager.createNewUser(_username, _password)); // true
console.log(myUserManager.loginUser(_username, _password)); //true
console.log(myUserManager.getUser(_username)); // {username:"1",email:null}

let _newPassword = "2";
let _newEmail = "2";
let _newAge = 2;

console.log(
  myUserManager.updateUser(_username, _newPassword, _newEmail, _newAge)
); //true
console.log(myUserManager.getUser(_username)); // {name:"2",email:"2"}
// fin

// PRUEBAS:
// login user
//   buen username & buen pass - true
//   mal username & buen pass - false
//   buen username & mal pass - false
//   mal username & mal pass - false
// get user
//   buen username - user
//   mal username - false
// update user
//   username doesnt exists - false
//   username exists
//      is updated - true
// create user
//   username doesnt exists - true
//   username exists - false

// console.log(myUserManager.updateUser("no existo", _newPassword, _newEmail, _newAge)); //false
// console.log(myUserManager.loginUser(_username, _password)); //false
