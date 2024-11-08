// api/controllers/ContactUserController.js

module.exports = {
  
  // Cria um novo contato
  create: async function(req, res) {
    try {
      const { full_name, phone, email } = req.body;
      
      // Cria um novo registro na tabela 'ContactUser'
      const newContact = await ContactUser.create({ full_name, phone, email })
      return res.json({ success: newContact });
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  // Obtém todos os contatos
  getAll: async function(req, res) {
    try {
      // Obtém todos os registros da tabela 'ContactUser'
      const contacts = await ContactUser.find(req.body);
      return res.json({success: contacts});
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Atualiza um contato existente
  update: async function (req, res) {
    try {
      console.log("req ",req);
      const user = await ContactUser.update({ id: req.body.id });
      if (!user) {
        // return res.status(404).json({ error: "User not found" });
        return res.json({ error: "User not found" });
      }
      return res.json({success: true});
    } catch (err) {
      // return res.status(500).json({ error: err.message });
      return res.json({ error: err.message });
    }
  },

  // Deleta um contato existente
  delete: async function (req, res) {
    try {
      const deletedContact = await ContactUser.destroyOne({ id: req.body.id });
      if (!deletedContact) {
        //return res.status(404).json({ error: "User not found" });
        return res.json({ error: "User not deleted" });
      }
      return res.json({success: true});
    } catch (err) {
      return res.json({ error: err.message});
  
    }
  },
};
