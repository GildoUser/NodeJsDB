let {Router} = require("express");
let router = new Router();
let ConstrollerByID = require("../controllers/ControllerByID");
//let sendMsg = require("../controllers/sendMessage")
//let User;

//router.get("/oi",sendMsg.getOi)
router.get("/UsersDataBaseSimulation/UsersList", ConstrollerByID.getDataBase)

router.get("/",(req,res)=>{
    res.send("Hello Node.Js!")
})
module.exports = router;