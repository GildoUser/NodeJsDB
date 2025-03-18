let DefaultList =  [{id:0, name: "UserDefault"}]
class Users {

    constructor(){
        this.selectedDataBase = [];
        this.setDataBase(DefaultList);

    }

    setDataBase(dataBase){
        this.selectedDataBase = dataBase;
        console.log("DB OK...")

    }
    getDataBase(){
        return this.selectedDataBase;

    }
    getLastIDPlusOne(){
        let lastID = this.selectedDataBase[this.selectedDataBase.length - 1].id;
        return lastID + 1;

    }
    getUserByID(userID){
            let search = this.selectedDataBase.find(user => user.id == userID); //find(user => user.id == userID);
            if(search){
                return search;
            }
            else{
                return {"404": "Usuário não encontrado"}
            }

    }
    

    
    newUser(user){
        console.log("POST : /UsersDataBaseSimulation/Users/newUser")
        try{
            const newUserID = this.getLastIDPlusOne();
            const newUser = {id: newUserID, name: user.name};
            this.selectedDataBase.push(newUser);
            console.log("Novo usuario criado")
            console.log(newUser)
           return newUser;

        }
        catch(err){
            return {error:"Erro ao criar novo usuário. Verifique os dados enviados."}

        }

    }
    updateUser(user){
        console.log("PUT : /UsersDataBaseSimulation/Users/updateUser")
        let updateData = {id: user.id, name: user.name};
        let findUser = this.selectedDataBase.find(user => user.id == updateData.id);
        if(findUser){
            findUser.name = updateData.name;
            console.log("Usuário atualizado")
            console.log("novo Usuario ", findUser)
            return 200;
        }

        
    }
    deleteUser(userID){
        console.log("DELETE : /UsersDataBaseSimulation/Users/deleteUser");
        console.log(userID)
        console.log(this.selectedDataBase)
        //findIndex should return -1 when the user is not found;
        let userIndex = this.selectedDataBase.findIndex(user => user.id == userID.id);
        if(userIndex != -1){
            let deletedUser =this.selectedDataBase.splice(userIndex, 1);
            console.log({"Usuario deletado":{deletedUser}});
            return 200;
        }
        else{
            console.log("Usuário não encontrado");
            return 404;

    }
        
}
}


module.exports = new Users();
