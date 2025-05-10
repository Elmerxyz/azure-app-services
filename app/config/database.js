const { Sequelize } = require('sequelize');

console.log('Intentando conectar a:', {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  dialect: process.env.DB_DIALECT || 'mysql'
});

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
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