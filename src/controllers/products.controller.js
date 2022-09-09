const productsService = require('../services/products.service');
// const errorMap = 

const listProducts = async (_req, res) => {
   const { type, message } = await productsService.getProducts();

  // Linha de código responsável por gerar uma resposta em caso de erro no
  // processamento do componente de software da camada `Service`
  if (type) return res.status(type).json(message);

  res.status(200).json(message);
};

const listProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductById(id);

  if (type) return res.status(type).json({ message });
  
  res.status(200).json(message);
};

module.exports = {
  listProducts,
  listProductsById,
};