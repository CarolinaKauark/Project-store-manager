const productsModel = require('../models/products.model');
const salesModel = require('../models/sales.model');

const hasProductDb = async (sales) => {
  const findId = await Promise.all(
    sales.map(({ productId }) => productsModel.findProductById(productId)),
  );

  if (findId.some((id) => id === undefined)) {
    return { type: 404, message: 'Product not found' };
  }
};

const insertSales = async (sales) => {
  console.log('service sales');
  const result = await hasProductDb(sales);
  if (result) return result;

  const newSaleId = await salesModel.insertNewSale();
  await salesModel.insert(sales, newSaleId);

  return { type: null, message: { id: newSaleId, itemsSold: sales } }; // precisa retornar certo
};

module.exports = {
  insertSales,
};