class loggerCompany {
  constructor() {
    this.users = {};
  }

  createNewUser(username, password) {
    this.users[username] = new user(username, password);
    return true;
  }

  loginUser(username, password) {
    let check = false;
    let user = this.users[username];
    if (user?.username == username)
      if (user?.password == password) check = true;
    return check;
  }

  updateUser(username, newPassword = null, newEmail = null, newAge = null) {
    if (!this.users[username]) return false;
    if (newPassword != null) this.users[username].password = newPassword;
    if (newEmail != null) this.users[username].email = newEmail;
    if (newAge != null) this.users[username].age = newAge;
    return true;
  }
  getUser(username) {
    return this.users[username];
  }
}

class user {
  constructor(username, password) {
    this.password = password;
    this.username = username;
    this.email = null;
    this.age = null;
  }
}

//comienzo
let loggerWow = new loggerCompany();

let _password = "1";
let _username = "1";
let _email = "1";
let _age = 1;

console.log(loggerWow.loginUser(_username, _password)); //false
console.log(loggerWow.createNewUser(_username, _password)); // true
console.log(loggerWow.loginUser(_username, _password)); //true
console.log(loggerWow.getUser(_username)); // {name:"",blah:""}

let _newPassword = "2";
let _newEmail = "2";
let _newAge = 2;

console.log(loggerWow.updateUser(_username, _newPassword, _newEmail, _newAge)); //true
console.log(loggerWow.getUser(_username)); // {name:"2",blah:"2"}
