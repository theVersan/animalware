/**
 * DontHaveButWantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  // Cria a função para criar novos dados
  create: async function (req, res) {
    try {
      const newRecord = await DontHaveButWant.create(req.body).fetch();
      return res.json({ message: 'DontHaveButWant criado com sucesso', data: newRecord });
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Obtém todos os dados
  getAll: async function (req, res) {
    try {
      const allRecords = await DontHaveButWant.find();
      return res.json(allRecords);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Obtém dados por ID
  getById: async function (req, res) {
    try {
      const record = await DontHaveButWant.findOne({ id: req.params.id });
      if (!record) {
        return res.notFound();
      }
      return res.json(record);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Atualiza os dados
  update: async function (req, res) {
    try {
      const updatedRecord = await DontHaveButWant.updateOne({ id: req.params.id }).set(req.body);
      if (!updatedRecord) {
        return res.notFound();
      }
      return res.json({ message: 'DontHaveButWant atualizado com sucesso', data: updatedRecord });
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Deleta os dados
  delete: async function (req, res) {
    try {
      const deletedRecord = await DontHaveButWant.destroyOne({ id: req.params.id });
      if (!deletedRecord) {
        return res.notFound();
      }
      return res.json({ message: 'DontHaveButWant excluído com sucesso', data: deletedRecord });
    } catch (err) {
      return res.serverError(err);
    }
  },
};
