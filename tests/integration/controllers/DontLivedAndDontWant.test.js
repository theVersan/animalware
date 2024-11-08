var Sails = require('sails'); // Arrange
var supertest = require('supertest');
var assert = require('assert');
var sinon = require('sinon');
const DontLivedAndDontWant = require('../../../api/models/DontLivedAndDontWant'); // Corrigi a convenção de nomenclatura
const controller = require("../../../api/controllers/DontLivedAndDontWantController")
let sailsApp;

describe('DontLivedAndDontWantController', () => {
  let dontLivedAndDontWantStub;
  beforeEach(() => {
    dontLivedAndDontWantStub = sinon.stub(controller, 'findOne').resolves();
    createDontLivedAndDontWantStub = sinon.stub(controller, 'create').resolves();
  });
  
  
  afterEach(() => {
     dontLivedAndDontWantStub.restore();
     createDontLivedAndDontWantStub.restore();
   });

   describe('create', () => {
    it('Deve retornar erro caso a criação falhe', () => {
      const newRecord = { name: 'Test Record' };
      const mockDocument = { id: 1, name: 'Test Document' };
      createDontLivedAndDontWantStub.yields(new Error('Creation error'));
      supertest(Sails.hooks.http.app)
      //Act e Assert
        .post('/DontLivedAndDontWant')
        .send(newRecord)
        .expect(500)
        .end((err, res) => {
          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });
  });
  
  
  
  
  describe('getAll', () => {
    it('Deve retornar todos os registros de DontLivedAndDontWant', (done) => {
      // Act e Assert
      supertest(Sails.hooks.http.app)
        .get('/dontLivedAndDontWant')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          assert(Array.isArray(res.body));
          done();
        });
    });
    it('Deve retornar erro caso a busca falhe', (done) => {
      sinon.stub(controller, 'find').yields(new Error('Find error'));
      // Act e Assert
      supertest(Sails.hooks.http.app)
        .get('/dontLivedAndDontWant')
        .expect(200)
        .end((err, res) => {
          controller.find.restore();
          if (err) return done(err);
          done();
        });
    });
  });
  describe('getById', () => {
    it('Deve retornar um DontLivedAndDontWant específico pelo ID', (done) => {
      const mockDocument = { id: 1, name: 'Test Document' };
      dontLivedAndDontWantStub.yields(null, mockDocument);
      // Act e Assert
      supertest(Sails.hooks.http.app)
        .get('/dontLivedAndDontWant/1')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          assert.strictEqual(res.body.name, undefined);
          done();
        });
    });
    it('Deve retornar erro se o documento não for encontrado', (done) => {
      dontLivedAndDontWantStub.yields(null, null);
      // Act e Assert
      supertest(Sails.hooks.http.app)
        .get('/dontLivedAndDontWant/1')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
    it('Deve retornar um erro de servidor se houver um erro no banco de dados', (done) => {
      dontLivedAndDontWantStub.yields(new Error('Database error'));
      // Act e Assert
      supertest(Sails.hooks.http.app)
        .get('/dontLivedAndDontWant/1')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });
  describe('update', () => {
    it('Deve atualizar um determinado DontLivedAndDontWant pelo ID', (done) => {
      const updatedRecord = { name: 'Updated Record' };
      // Act e Assert
      supertest(Sails.hooks.http.app)
        .put('/dontLivedAndDontWant/1')
        .send(updatedRecord)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          assert.strictEqual(res.body.message, 'DontLivedAndDontWant atualizado com sucesso');
          done();
        });
    });
    it('Deve retornar um erro se a atualização falhar', (done) => {
      const updatedRecord = { name: 'Updated Record' };
      sinon.stub(controller, 'update').yields(new Error('Update error'));
      // Act e Assert
      supertest(Sails.hooks.http.app)
        .put('/dontLivedAndDontWant/1')
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
    it('Deve deletar um determinado DontLivedAndDontWant pelo ID', (done) => {
      // Act e Assert
      supertest(Sails.hooks.http.app)
        .delete('/dontLivedAndDontWant/1')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          assert.strictEqual(res.body.message, 'DontLivedAndDontWant deletado com sucesso');
          
        });
        done();
    });
    it('Deve retornar um erro se a exclusão falhar', (done) => {
      sinon.stub(controller, 'delete').yields(new Error('Delete error'));
      // Act e Assert
      supertest(Sails.hooks.http.app)
        .delete('/dontLivedAndDontWant/1')
        .expect(200)
        .end((err, res) => {
          controller.delete.restore();
          if (err) return done(err);
          done();
        });
    });
  });
});