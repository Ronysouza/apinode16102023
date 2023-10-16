const UserService = require('../services/UserService')
 const user = require('../models/User')



module.exports = {


    getUser: (req, res)=>{
        
        let json = {error:'novo teste com banco de dados', result:[]};
        
        //let usuarios = await UserService.getUser() 
        
    console.log('json retornado no console')

        res.json(json)

 
    },



    
 funcaoGetUse: async(req, res)=>{
            
              
          //let json = await UserService.funcaoGetUser(req, res)
          //console.log('resultado: ',json)
       //res.json(json) 

     let users = await user.findAll()
    
     res.send(JSON.stringify(users))
     console.log('result:',JSON.stringify(users)  )



    }

    



}
