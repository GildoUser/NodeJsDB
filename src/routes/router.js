let {Router} = require("express");
let router = new Router();
let ControllerByID = require("../controllers/ControllerByID");
//let sendMsg = require("../controllers/sendMessage")
//let User;

//router.get("/oi",sendMsg.getOi)
router.get("/UsersDataBaseSimulation/Users/List", ControllerByID.getDataBase)
router.post("/UsersDataBaseSimulation/Users/newUser", ControllerByID.createNewUser)

router.get("/",(req,res)=>{
    res.send("Hello Node.Js!")
})
module.exports = router;