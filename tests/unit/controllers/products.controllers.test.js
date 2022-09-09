const chai = require('chai');
const sinon = require('sinon');
// const sinonChai = require('sinon-chai');

const { expect } = chai;

const productService = require('../../../src/services/products.service');
const mockModel = require('../models/mock/products.model.mock');
const productsController = require('../../../src/controllers/products.controller');

describe('testando o controller do products', function () {
  afterEach(sinon.restore);

  it('Testando a função listProducts', async function () {
    const res = {};
    const req = {}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getProducts').resolves({ type: null, message: mockModel });

    await productsController.listProducts(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(mockModel)).to.be.true;
  });

  it('Testando a função listProductsById', async function () {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getProductById').resolves({ type: null, message: mockModel[0] });

    await productsController.listProductsById(req, res);

    expect(res.status.calledWith(200)).to.be.true;

    expect(res.json.calledWith(mockModel[0])).to.be.true;
  });
});
