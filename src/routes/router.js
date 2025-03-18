let {Router} = require("express");
let router = new Router();
let ControllerByID = require("../controllers/ControllerByID");
//let sendMsg = require("../controllers/sendMessage")
//let User;

//router.get("/oi",sendMsg.getOi)
router.get("/UsersDataBaseSimulation/Users/UsersList", ControllerByID.getDataBase);
router.get("/UsersDataBaseSimulation/Users/User", ControllerByID.getUserByID);
router.post("/UsersDataBaseSimulation/Users/newUser", ControllerByID.createNewUser);
router.post("/UsersDataBaseSimulation/Users/updateUser", ControllerByID.updateUser);
router.delete("/UsersDataBaseSimulation/Users/deleteUser", ControllerByID.deleteUser);

router.get("/",(req,res)=>{
    res.send("Hello Node.Js!")
})
module.exports = router;