/**
 * DontLivedAndDontWantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // Cria a função para criar novos dados
  create: async function (req, res) {
    DontLivedAndDontWant.create(req.body)
          .fetch()
          .exec((err) => {
            if (err) {return err;}
            return res.json({ message: 'DontLivedAndDontWant criado com sucesso'  });
          });
  },

  // Obtém todos os contatos
  getAll: async function (req, res) {
    DontLivedAndDontWant.find().exec((err, DontLivedAndDontWant) => {
      if (err) {return res.serverError(err);}
      return res.json(DontLivedAndDontWant);
    });
  },
  //Obtém dados por ID
  getBiId: async function (req, res) {
    DontLivedAndDontWant.findOne({ id: req.params.id }).exec((err, DontLivedAndDontWant) => {
      if (err) {return Res.serverError(err);}
      if (!DontLivedAndDontWant) {return res.norFound();}
      return res.json(DontLivedAndDontWant);
    });
  },
  // Atualiza os dados por ID
  update: async function (req, res) {
    DontLivedAndDontWant.update({ id: req.params.id }, req.body).exec((err) => {
      if (err) {return Res.serverError(err);}
      return res.json({ message: 'DontLivedAndDontWant atualizado com sucesso' });
    });
  },
  // Deleta os dados
  delete: async function (req, res) {
    DontLivedAndDontWant.destroy({ id: req.params.id }).exec((err) => {
      if (err) {return Res.serverError(err);}
      return res.json({ message: 'DontLivedAndDontWant deletado com sucesso' });
    });
  },
  findOne: async function (req, res) {
    return res.json({message: "teste"});
  },
  find: async function (req, res) {
    return res.json({message: "teste"});
  },
};