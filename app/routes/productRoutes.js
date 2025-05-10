const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rutas para la API y Web (CRUD)
router.get('/', productController.getAllProducts);

// Rutas específicas para la web
router.get('/nuevo', productController.showCreateForm);
router.get('/:id/editar', productController.showEditForm);
router.get('/:id', productController.getProductById);

// Rutas para la API y formularios web
router.post('/', productController.createProduct);
router.post('/:id', productController.updateProduct); // Para formularios web
router.put('/:id', productController.updateProduct);  // Para API
router.delete('/:id', productController.deleteProduct);

module.exports = router;