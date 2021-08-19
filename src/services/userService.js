import db from "../models/index";
import bcrypt from "bcryptjs";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExits = await checkUserEmail(email);
      if (isExits) {
        let user = await db.User.findOne({
          where: {
            email: email,
          },
        });
        if (user) {
          console.log("-----------render password ------------");
          console.log(`password in db(bcrypt):`, user.password);
          console.log(`password user input(no bcrypt):`, password);
          console.log("-----------render check value ------------");
          //let test = await bcrypt.compareSync("B4c0//", user.password);
          //console.log(test);
          let check = bcrypt.compare(password, user.password);
          if (check) {
            console.log("true");
          } else {
            console.log("false");
          }
          // console.log("-----------compare password ------------");
          // console(await bcrypt.compareSync(password, user.password));
          // console.log("-----------compare password ------------");
        } else {
          // case 2 if handle login true
          userData.errCode = 2;
          userData.errMessage = `user not found`;
        }

        // if (user) {
        //   let check = bcrypt.compareSync(password, user.password); // false
        //   if (check) {
        //     userData.errCode = 0;
        //     userData.errMessage = "Ok";
        //     userData.user = user;
        //   } else {
        //     userData.errCode = 3;
        //     userData.errMessage = "Wrong password";
        //   }
        // } else {
        //   userData.errCode = 2;
        //   userData.errMessage = `Your's user isn't exits`;
        // }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn't exits`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
};
