const Sequelize = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('images', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        filename: type.STRING,         
        type: type.STRING,
        size: type.FLOAT
    })
}