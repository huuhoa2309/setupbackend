import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouters from "./route/web";
require('dotenv').config();

let app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let port= process.env.PORT || 8081; //post === undefine => port 8081
app.listen( port, ()=>{
    console.log("Backend running in port:"+port);
}

)


viewEngine(app);
initWebRouters(app);

