const UserService = require('../services/UserService')
 const user = require('../models/User')



module.exports = {


    getUser: (req, res)=>{
        
        let json = {error:'novo teste com banco de dados', result:[]};
        
        //let usuarios = await UserService.getUser() 
        
    console.log('json retornado no console')

        res.json(json)

 
    },



    
 
    



}
