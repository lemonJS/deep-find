'use strict';

const expect = require('chai').expect;
const deepFind = require('../index');

const simpleFixture = {
  'key': 'value'
};

const complexFixture = {
  'key1': {
    'key': 'value1'
  },
  'key2': {
    'key': 'value2'
  },
  'key3': {
    'key': 'value3'
  }
};

describe('deepFind', () => {

  it('should throw an error when given no object', () => {
    expect(() => deepFind(null, 'key')).to.throw('deepFind must be supplied an object');
  });

  it('should throw an error when given no key', () => {
    expect(() => deepFind({}, null)).to.throw('deepFind must be supplied a key');
  });

  it('should return an empty array when no key is found', () => {
    expect(deepFind({}, 'key')).to.be.an.array;
    expect(deepFind({}, 'key')).to.be.empty;
  });

  it('should return an array when one value matches', () => {
    expect(deepFind(simpleFixture, 'key')).to.be.an.array;
    expect(deepFind(simpleFixture, 'key')).to.deep.equal(['value']);
  });

  it('should return an array when multiple values match', () => {
    expect(deepFind(complexFixture, 'key')).to.be.an.array;
    expect(deepFind(complexFixture, 'key')).to.deep.equal(['value1', 'value2', 'value3'])
  });

});
