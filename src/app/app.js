const express = require("express");
const router = require("../routes/router");
class App {
    constructor(){
        this.server = new express();
        this.routes(router);
        this.middlewares()
    };
    
    routes(router){
        //rotes
        this.server.use(router)
    };
    middlewares(){
        this.server.use(express.json())
    };
};

module.exports = new App().server;