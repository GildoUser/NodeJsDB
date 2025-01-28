const { json } = require("express");
let usersList = require("../models/Users");

class ControllerByID{
    constructor(){
        this.setDataBase(usersList);
        this.getDataBase = this.getDataBase.bind(this);

    }
    setDataBase(dataBase){
  
        this.selectedDataBase = dataBase;
        console.log(this.selectedDataBase)


    }
    getDataBase(req,res){
     res.send(JSON.stringify(this.selectedDataBase))
    }
    
    create(id, nome){
        let newUser = {id:id, nome: nome};
        this.SelectedDataBase.push(newUser);
        console.log("Criado")
        console.log(this.SelectedDataBase)
    }
}

module.exports = new ControllerByID();