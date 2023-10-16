const UserService = require('../services/UserService')
 //const user = require('../models/User')



module.exports = {


    getUser: (req, res)=>{
        
        let json = {error:'teste nova api', result:[]};
        
        //let usuarios = await UserService.getUser() 
        
    console.log('json retornado no console')

        res.json(json)

 
    },



    
 
    



}
