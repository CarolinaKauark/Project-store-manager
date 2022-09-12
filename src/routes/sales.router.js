const express = require('express');
const salesController = require('../controllers/sales.controller');

const validation = require('../middlewares/validationMiddleware');

const salesRouter = express.Router();

salesRouter.post('/',
  validation.validateProductId, validation.validateQuantity,
  salesController.addSales);

salesRouter.get('/', salesController.listSales);

salesRouter.get('/:id', salesController.listSaleById);

module.exports = salesRouter;