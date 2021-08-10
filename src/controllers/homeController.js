import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getTestapi = (req, res) => {
  return res.render("test/testapi.ejs");
};
let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  console.log("-----------infomation data-----------------");
  console.log(req.body);
  res.send("psot crud sucsessfull :))");
};
module.exports = {
  getHomePage: getHomePage,
  getTestapi: getTestapi,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
};
