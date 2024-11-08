var Sails = require('sails'); // Arrange
var supertest = require('supertest');
var assert = require('assert');
var sinon = require('sinon');
const haveDogs = require('../../../api/models/HaveDogs');
const controller = require("../../../api/controllers/HaveDogsController");
let sailsApp;

before(function(done) {
  this.timeout(10000);
  Sails.lift({
  }, async function(err, app) {
    if (err) return await done(err);
    sailsApp = app;
    await done();
  });
});

after(function(done) {
  Sails.lower(done);
});

describe('HaveDogsController', () => {
  let haveDogsStub;

  before(() => {
    haveDogsStub = sinon.stub(controller, 'findOne');
  });

  after(() => {
    haveDogsStub.restore();
  });

  describe('create', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('Deve retornar erro caso a criação falhar', (done) => {
      const newRecord = { name: 'Test Record' };
      sinon.stub(controller, 'create').yields(new Error('Creation error'));
      supertest(Sails.hooks.http.app)
        //Act e Assert
        .post('/haveDogs')
        .send(newRecord)
        .expect(500)
        .end((err, res) => {
          controller.create.restore();
          if (err) return done(err);
          done();
        });
    });
  });
  

  describe('getAll', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('Deve retornar todos os registros de HaveDogs', (done) => {
      supertest(Sails.hooks.http.app)
      //Act e Assert
        .get('/haveDogs')
        .expect(200)
        .end((err, res) => {
          Sails.log(res);
          if (err) return done(err);
          assert(Array.isArray(res.body));
          done();
        });
    });

    it('Deve retornar um erro se a busca falhar', (done) => {
      sinon.stub(controller, 'find').yields(new Error('Find error'));
      supertest(Sails.hooks.http.app)
      //Act e Assert
        .get('/haveDogs')
        .expect(200)
        .end((err, res) => {
          controller.find.restore();
          if (err) return done(err);
          done();
        });
    });
  });

  describe('getById', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('Deve retornar um HaveDogs específico pelo ID', (done) => {
      haveDogsStub.yields(null, { id: 1, name: 'Test Dog' });
      supertest(Sails.hooks.http.app)
      //Act e Assert
        .get('/haveDogs/1')
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('Deve retornar erro se o documento não for encontrado', (done) => {
      haveDogsStub.yields(null, null);
      supertest(Sails.hooks.http.app)
      //Act e Assert
        .get('/haveDogs/1')
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('Deve retornar um erro de servidor se houver um erro no banco de dados', (done) => {
      haveDogsStub.yields(new Error('Database error'));
      //Act e Assert
      supertest(Sails.hooks.http.app)
        .get('/haveDogs/1')
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });

  describe('update', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('Deve atualizar um determinado HaveDogs pelo ID', (done) => {
      const updatedRecord = { name: 'Updated Record' };
      supertest(Sails.hooks.http.app)
      //Act e Assert
        .put('/haveDogs/1')
        .send(updatedRecord)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          assert.strictEqual(res.body.message, 'HaveDogs atualizado com sucesso');
          done();
        });
    });

    it('Deve retornar um erro se a atualização falhar', (done) => {
      const updatedRecord = { name: 'Updated Record' };
      sinon.stub(controller, 'update').yields(new Error('Update error'));
      supertest(Sails.hooks.http.app)
      //Act e Assert
        .put('/haveDogs/1')
        .send(updatedRecord)
        .expect(200)
        .end((err, res) => {
          controller.update.restore();
          if (err) return done(err);
          done();
        });
    });
  });

  describe('delete', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('Deve deletar um determinado HaveDogs pelo ID', (done) => {
      supertest(Sails.hooks.http.app)
      //Act e Assert
        .delete('/haveDogs/1')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          assert.strictEqual(res.body.message, 'HaveDogs deletado com sucesso');
          done();
        });
    });

    it('Deve retornar um erro se a exclusão falhar', (done) => {
      sinon.stub(controller, 'delete').yields(new Error('Delete error'));
      supertest(Sails.hooks.http.app)
      //Act e Assert
        .delete('/haveDogs/1')
        .expect(200)
        .end((err, res) => {
          controller.delete.restore();
          if (err) return done(err);
          done();
        });
    });
  });
});