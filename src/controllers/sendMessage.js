class sendMsg{
    getOi(req,res){
        let nome = req.query.nome;
        console.log(nome)
        res.send("Hello "+nome)
    }
}
module.exports = new sendMsg();