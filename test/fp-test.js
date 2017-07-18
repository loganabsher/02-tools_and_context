'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

describe('Fp Module', () => {
  it('Should be type \"object\"', () => expect(fp).to.be.an('object'));
  describe('#map', () => {
    it('Should have map exist', () => expect(fp).to.have.property('map'));
    it('Should be type \"function\"', () => expect(fp.map).to.be.a('function'));
  });
  describe('#filter', () => {
    it('Should have filter exist', () => expect(fp).to.have.property('filter'));
    it('Should be type \"function\"', () => expect(fp.filter).to.be.a('function'));
  });
  describe('#reduce', () => {
    it('Should have reduce exist', () => expect(fp).to.have.property('reduce'));
    it('Should be type \"function\"', () => expect(fp.reduce).to.be.a('function'));
  });
  describe('#concat', () => {
    it('Should have concat exist', () => expect(fp).to.have.property('concat'));
    it('Should be type \"function\"', () => expect(fp.concat).to.be.a('function'));
  });
  describe('#splice', () => {
    it('Should have splice exist', () => expect(fp).to.have.property('splice'));
    it('Should be type \"function\"', () => expect(fp.splice).to.be.a('function'));
  });
});
