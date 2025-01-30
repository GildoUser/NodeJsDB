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

}
module.exports = new Users();
