const express = require('express');
const salesController = require('../controllers/sales.controller');

const validation = require('../middlewares/validationMiddleware');

const salesRouter = express.Router();

salesRouter.post('/',
  validation.validateProductId, validation.validateQuantity,
  salesController.addSales);

salesRouter.get('/', salesController.listSales);

salesRouter.get('/:id', salesController.listSaleById);

salesRouter.put('/:id',
  validation.validateProductId, validation.validateQuantity, salesController.updateSaleById);

salesRouter.delete('/:id', salesController.deleteSaleById);

module.exports = salesRouter;