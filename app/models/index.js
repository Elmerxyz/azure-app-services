const sequelize = require('../config/database');
const Product = require('./product');

// Sincronizar todos los modelos con la base de datos
const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados con la base de datos');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
};

syncModels();

module.exports = {
  Product
};