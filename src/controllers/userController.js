import userService from "../services/userService";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  // check emaill exits
  // compare password
  //return userInfo
  //access token:JWT
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameter",
    });
  }
  let userData = await userService.handleUserLogin(email, password);
  return res.status(200).json({
    // errCode: 0,
    // message: "test api",
    // yourEmail: email,
    // yourPassword: password,
    errCode: userData.errCode,
    message: userData.errMessage,
    userData,
  });
};

module.exports = {
  handleLogin: handleLogin,
};
