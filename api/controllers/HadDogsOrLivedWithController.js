/* eslint-disable camelcase */
/**
 * HadDogsOrLivedWithController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 */

module.exports = {

  // Create a new record
  create: async function(req, res) {
    try {
      sails.log('Request Body:', req.body); // Adicione este log para verificar o conteúdo do req.body
      const newRecord = await HadDogsOrLivedWith.create(req.body).fetch();
      console.log('New Record Created:', newRecord); // Log para verificar se o registro foi criado
      return res.status(201).json(newRecord);
    } catch (error) {
      console.error('Error creating record:', error); // Log do erro
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a specific record by id
  findOne: async function(req, res) {
    try {
      const record = await HadDogsOrLivedWith.findOne({ id: req.params.id });
      if (!record) {
        return res.status(404).json({ error: 'Record not found' });
      }
      return res.json(record);
    } catch (error) {
      console.error('Error finding record:', error); // Log do erro
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a specific record by id
  update: async function(req, res) {
    try {
      const updatedRecord = await HadDogsOrLivedWith.updateOne({ id: req.params.id }).set(req.body);
      if (!updatedRecord) {
        return res.status(404).json({ error: 'Record not found' });
      }
      return res.json(updatedRecord);
    } catch (error) {
      console.error('Error updating record:', error); // Log do erro
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete a specific record by id
  destroy: async function(req, res) {
    try {
      const deletedRecord = await HadDogsOrLivedWith.destroyOne({ id: req.params.id });
      if (!deletedRecord) {
        return res.status(404).json({ error: 'Record not found' });
      }
      return res.status(204).send();
    } catch (error) {
      console.error('Error deleting record:', error); // Log do erro
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all records
  find: async function(req, res) {
    try {
      const records = await HadDogsOrLivedWith.find();
      return res.json(records);
    } catch (error) {
      console.error('Error finding records:', error); // Log do erro
      return res.status(500).json({ error: error.message });
    }
  }
};
