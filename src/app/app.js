const express = require("express");
const router = require("../routes/router");
class App {
    constructor(){
        this.server = new express();
        this.routes(router);
    };
    
    routes(router){
        //rotes
        this.server.use(router)
    };
    middlewares(){

    };
};

module.exports = new App().server;