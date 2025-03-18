const Users = require("../models/Users");

class ControllerByID{

    getDataBase(req,res){
      console.log("GET : /UsersDataBaseSimulation/Users/UsersList");

      const dataBase = Users.getDataBase();
        
      res.send(JSON.stringify(dataBase));
    
    }
    getUserByID(req,res){
        console.log("GET : /UsersDataBaseSimulation/Users/User")
        let user = Users.getUserByID(req.query.id)
        res.send(user)
        

    } 

    createNewUser(req,res){
        console.log("POST : /UsersDataBaseSimulation/Users/newUser");

        const newUser = Users.newUser({name: req.query.name});
        
        res.send(newUser)

    }
    updateUser(req,res){
        console.log("PUT : /UsersDataBaseSimulation/Users/updateUser");

        Users.updateUser({id: req.query.id, name: req.query.name});

        res.send("Usuário atualizado com sucesso");

    }
    deleteUser(req,res){
        console.log("DELETE : /UsersDataBaseSimulation/Users/deleteUser");
        
        let confirmationUserDeleted = Users.deleteUser({id: parseInt(req.query.id)});
        if(confirmationUserDeleted == false){
            res.status(404).send("Usuário não encontrado");
        }
        res.status(confirmationUserDeleted).send(confirmationUserDeleted);
    }

}



module.exports = new ControllerByID();