const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require('../../../src/models/products.model');
const productService = require('../../../src/services/products.service');

const modelMock = require('../models/mock/products.model.mock');

describe('Testando a camada service do products', function () {
  it('testando a função getProducts', async function () {
    sinon.stub(productModel, 'findAllProducts').resolves(modelMock);

    const products = await productService.getProducts();

    expect(products.message).to.deep.equal(modelMock);
  });

  it('testando a função getProductById', async function () {
    sinon.stub(productModel, 'findProductById').resolves(modelMock[0]);

    const products = await productService.getProductById(1);

    expect(products.message).to.deep.equal(modelMock[0]);
  });

  it('testando a função retorna um erro com id inválido', async function () {
    sinon.stub(productModel, 'findProductById').resolves('Product not found');

    const products = await productService.getProductById(8);

    expect(products.message).to.deep.equal('Product not found');
  });

  afterEach(function () {
    sinon.restore();
  });
})