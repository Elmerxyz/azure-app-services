const { Product } = require('../models');

// Mostrar todos los productos (vista)
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    
    // Determina si la solicitud espera JSON o HTML
    if (req.path.startsWith('/api')) {
      return res.status(200).json(products);
    }
    
    res.render('products/index', { 
      title: 'Listado de Productos',
      products 
    });
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ message: 'Error al obtener productos', error: error.message });
  }
};

// Mostrar formulario para crear producto
exports.showCreateForm = (req, res) => {
  res.render('products/create', { title: 'Nuevo Producto' });
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, imagen } = req.body;
    
    const newProduct = await Product.create({
      nombre,
      descripcion,
      precio,
      stock,
      imagen
    });
    
    // Determina si la solicitud espera JSON o HTML
    if (req.path.startsWith('/api')) {
      return res.status(201).json(newProduct);
    }
    
    res.redirect('/productos');
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ message: 'Error al crear producto', error: error.message });
  }
};

// Mostrar detalles de un producto
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    
    if (!product) {
      if (req.path.startsWith('/api')) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      return res.redirect('/productos');
    }
    
    // Determina si la solicitud espera JSON o HTML
    if (req.path.startsWith('/api')) {
      return res.status(200).json(product);
    }
    
    res.render('products/show', { 
      title: 'Detalles del Producto',
      product 
    });
  } catch (error) {
    console.error('Error al obtener producto:', error);
    res.status(500).json({ message: 'Error al obtener producto', error: error.message });
  }
};

// Mostrar formulario para editar producto
exports.showEditForm = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    
    if (!product) {
      return res.redirect('/productos');
    }
    
    res.render('products/edit', { 
      title: 'Editar Producto',
      product 
    });
  } catch (error) {
    console.error('Error al obtener producto para editar:', error);
    res.status(500).send('Error al cargar el formulario de edición');
  }
};

// Actualizar un producto
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, imagen } = req.body;
    
    const product = await Product.findByPk(id);
    
    if (!product) {
      if (req.path.startsWith('/api')) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      return res.redirect('/productos');
    }
    
    await product.update({
      nombre,
      descripcion,
      precio,
      stock,
      imagen
    });
    
    // Determina si la solicitud espera JSON o HTML
    if (req.path.startsWith('/api')) {
      return res.status(200).json(product);
    }
    
    res.redirect('/productos');
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ message: 'Error al actualizar producto', error: error.message });
  }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    
    if (!product) {
      if (req.path.startsWith('/api')) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      return res.redirect('/productos');
    }
    
    await product.destroy();
    
    // Determina si la solicitud espera JSON o HTML
    if (req.path.startsWith('/api')) {
      return res.status(200).json({ message: 'Producto eliminado correctamente' });
    }
    
    res.redirect('/productos');
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ message: 'Error al eliminar producto', error: error.message });
  }
};