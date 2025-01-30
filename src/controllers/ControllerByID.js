
const Users = require("../models/Users");

class ControllerByID{

    getDataBase(req,res){
        const dataBase = Users.getDataBase();
        console.log("GET : /UsersDataBaseSimulation/Users/List")
        
        res.send(JSON.stringify(dataBase));
    
    }
    createNewUser(req,res){
        console.log("POST : /UsersDataBaseSimulation/Users/newUser");
        const newUserData = {name: req.query.name};
        const newUser = Users.newUser(newUserData);
        
        res.send(newUser)

    }

}

module.exports = new ControllerByID();