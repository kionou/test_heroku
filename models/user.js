const  Sequelize  = require("sequelize");
const sequelize = require("../others/data");



const users = sequelize.define('Users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nom:{
        type:Sequelize.STRING,
        allowNull:false,
            
    },
    prenom:{
        type:Sequelize.STRING,
        allowNull:false,
       
    },
  
     
})

module.exports=users;