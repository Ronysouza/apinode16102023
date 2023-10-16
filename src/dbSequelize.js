const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('r7webd73_r7block','r7webd73_r7blockUser','roteador35677', {
   host:'br1090.hostgator.com.br',
    dialect: 'mysql'
    //port:3306
  }); 

  sequelize.authenticate().then(()=>{
    console.log('conectado com o banco de dados com sucesso')

  }).catch(()=>{

    console.log('conexao com erro')

  })

  module.exports = sequelize

  //banco hostgator      r7webd73_r7block
  //usuario hostgator    r7webd73_r7blockUser
  //senha hostgator    roteador35677
  //senha hostgator    br1090