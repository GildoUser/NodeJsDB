let {Router} = require("express");
let sendMsg = require("../controllers/sendMessage")
let User

let router = new Router();
router.get("/oi",sendMsg.getOi)
router.get("/UsersDataBaseSimulation/UsersList",)
module.exports = router;