// let mysql = require('mysql')

// let base = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'test_heroku'
// })
 const  Sequelize  = require("sequelize")

let sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialect:'postgres',
    protocol: 'postgres',
     dialectOptions: {
         ssl: {
             require: true,
             rejectUnauthorized: false
         }
     }
    // host:'localhost',
    // port:'5432'
})

// const pg = require('pg');
// require('dotenv').config();


// const isProduction = process.env.NODE_ENV === 'production';

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;


// const pool = new pg.Pool({
//   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//   ssl: isProduction,
// });

module.exports=sequelize;