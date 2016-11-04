var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('Items Controller (Version 1)', function() {
  it('should list ALL items on /items GET');
  it('should return a editable HTML page to add a new item on /items/new');
  it('should add a SINGLE item on /items POST');
  it('should list a SINGLE item on /items/:id GET');
  it('should return a editable HTML page to edit a SINGLE item on /items/:id/edit');
  it('should update a SINGLE item on /items/:id PUT');
  it('should delete a SINGLE article on /items/:id DELETE');
});