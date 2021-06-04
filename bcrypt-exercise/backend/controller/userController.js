const { getUserById, getUserByRole, 
  changePassword, removeUser } = require('../model/operations');

function getUser(request, response) {
  const loggedInId = request.cookies.loggedIn;

  const user = getUserById(loggedInId);

  let result = { success: false };
  
  if (user) {
    result.success = true;
    result.user = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      role: user.role
    }
  }

  response.json(result);
}

function getAllUsers(request, response) {
  const allUsers = getUserByRole('user');

  response.json(allUsers);
}

function changeNewPassword(request, response) {
  const password = request.body.password;
  const loggedInId = request.cookies.loggedIn;

  const changedPassword = changePassword(loggedInId, password);

  let result = { success: false }

  if (changedPassword) {
    result.success = true;
  }

  response.json(result);
}

function removeAccount(request, response) {
  const loggedInId = request.cookies.loggedIn;

  const removedUser = removeUser(loggedInId);

  let result = { success: false }

  if (removedUser) {
    result.success = true;
  }

  response.json(result);
}

exports.getUser = getUser;
exports.getAllUsers = getAllUsers;
exports.changeNewPassword = changeNewPassword;
exports.removeAccount = removeAccount;