let handleLogin = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "missing parameter",
    });
  }
  return res.status(200).json({
    errCode: 0,
    message: "test api",
    yourEmail: email,
    yourPassword: password,
  });
};

module.exports = {
  handleLogin: handleLogin,
};
