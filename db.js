/* Neste arquivo é definida a conexão com o banco de dados e a criação das tabelas é criada ou verificada */

const Sequelize = require('sequelize');

//DEFINIR RUTAS DE LOS MODELOS Y AGREGARLOS EN UNA CONSTANTE
const imagen = require('./models/imagen');

const sequelize = new Sequelize('solvimm', 'postgres', '1234', {
    port: '5434',
    host: 'localhost',
    dialect: 'postgres' 
})

const table1 = imagen(sequelize, Sequelize);

sequelize.sync({force: false})
    .then (() => {
        console.log('Tablas creadas y actualizadas');
})

module.exports = {
    table1
}