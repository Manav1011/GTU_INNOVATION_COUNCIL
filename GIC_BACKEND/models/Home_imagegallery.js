const sequelize = require('../utils/postgreSQL_conn')
const { DataTypes } = require('sequelize')

const Home_imageGallery = sequelize.define('Home_imagegallery',{
    id : {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    image : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    slug : {
        type : DataTypes.STRING(50),
        allowNull:true,
        unique : true
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'Home_imagegallery'
})

module.exports = Home_imageGallery