const { Sequelize } = require('sequelize');

 
const sequelize = new Sequelize(
  process.env.DB_NAME || 'productos_db',
  process.env.DB_USER  || 'adminuser',
  process.env.DB_PASS  || 'TuPasswordSegura',
  {
    host: process.env.DB_HOST || '20.106.206.184' ,
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false,
    dialectOptions: {
      connectTimeout: 60000 // aumentar timeout
    }
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error.message);
    console.error('Detalles del error:', JSON.stringify({
      code: error.original?.code,
      errno: error.original?.errno,
      sqlMessage: error.original?.sqlMessage,
      sqlState: error.original?.sqlState,
      fatal: error.original?.fatal
    }));
  }
};

testConnection();

module.exports = sequelize;