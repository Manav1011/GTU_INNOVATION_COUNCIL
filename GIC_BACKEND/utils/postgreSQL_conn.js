// const { Sequelize } = require('sequelize');
// // require('dotenv').config()

// const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USER,process.env.DATABASE_PASSWORD, {
//   host: process.env.DOCKER_DB_SERVICE,
//   dialect: 'postgres',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });

// try{
//     sequelize.authenticate();
//     console.log("connection establish successfully")
// }
// catch(error){
//     console.log(error.message)
//     process.exit(-1)
// }
// module.exports = sequelize;
