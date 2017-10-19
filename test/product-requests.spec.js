//jshint esversion : 6

const chai = require('chai');
let expect = chai.expect;
let should = chai.should();
const assert = chai.assert;
const request = require('supertest');

const app = require('../server');

describe('GET smoke test', function () {
  it('smoke test', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(done);
  });

  it('get all products', function (done) {
    request(app)
      .get('/products')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect([{id : 1, title : 'Mulan', type: 'DVD'}])
      .end(done);
  });

  it('add new product', function (done) {
    request(app)
      .post('/products')
      .type('form')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({id : 2, title : 'IT', type: 'Streaming'})
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect(function (res) {
        return (res.body.id && typeof res.body.id === 'number');
      })
      .end(done);
  });
});