'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

const funcNames = ['map', 'filter', 'reduce', 'concat', 'splice', 'notFunctionFail'];

describe('Fp Module', () => {
  it('Should be type \"object\"', () => expect(fp).to.be.an('object'));
  funcNames.forEach((ele) => {
    describe(`#${ele}`, () => {
      it(`Should have ${ele} exist`, () => expect(fp).to.have.property(ele));
      it('Should be type \"function\"', () => expect(fp[ele]).to.be.a('function'));
    });
  });
});
