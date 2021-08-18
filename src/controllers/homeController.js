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
  //console.log(message);
  //console.log("-----------infomation data-----------------");
  //console.log(req.body);
  res.send("psot crud sucsessfull :))");
};
let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  // console.log("-----------------display data----------");
  // console.log(data);
  // console.log("-----------------display data----------");
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};
let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  console.log(userId);
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("Errol!");
  }
};
let putCRUD = async (req, res) => {
  let data = req.body;
  let allUser = await CRUDService.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUser,
  });
};
let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.send("Delete success");
  } else {
    return res.send("Delete errol");
  }
};
module.exports = {
  getHomePage: getHomePage,
  getTestapi: getTestapi,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
