/**
 * HaveDogsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const HaveDogs = require("../models/HaveDogs");

module.exports = {
  // Cria a função para criar novos dados
  create: async function (req, res) {
    try {
      const newDog = await HaveDogs.create(req.body).fetch();
      return res.json({ message: 'HaveDogs criado com sucesso', data: newDog });
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Obtém todos os contatos
  getAll: async function (req, res) {
    HaveDogs.find().exec((err, HaveDogs) => {
      if (err) {return res.serverError(err);}
      return res.json(HaveDogs);
    });
  },
  // Obtém dados por ID
  getById: async function (req, res) {
    HaveDogs.findOne({ id: req.params.id }).exec((err, HaveDogs) => {
      if (err) {return Res.serverError(err);}
      if (!HaveDogs) {return res.notFound();}
      return res.json(HaveDogs);
    });
  },
  // Atualiza os dados
  update: async function (req, res) {
    HaveDogs.update({ id: req.params.id }, req.body).exec((err) => {
      if (err) {return Res.serverError(err);}
      return res.json({ message: 'HaveDogs atualizado com sucesso' });
    });
  },
  // Deleta os dados
  delete: async function (req, res) {
    HaveDogs.destroy({ id: req.params.id }).exec((err) => {
      if (err) {return Res.serverError(err);}
      return res.json({ message: 'HaveDogs deletado com sucesso' });
    });
  },
  findOne: async function (req, res) {
    return res.json({message: "teste"});
  },
  find: async function (req, res) {
    return res.json({message: "teste"});
  },
};