// import {Sequelize} from "sequelize";

const sequelize = require("sequelize");

const db = new sequelize('buco_db', 'postgres', 'postgres',{
    host: "localhost",
    dialect: "postgres"
});

module.exports = db