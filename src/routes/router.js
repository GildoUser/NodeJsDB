let {Router} = require("express");
let sendMsg = require("../controllers/sendMessage")

let router = new Router();
router.get("/oi",sendMsg.getOi)
module.exports = router;