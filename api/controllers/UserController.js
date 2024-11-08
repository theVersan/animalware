/**
 * UserController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 * @docs        :: https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // Cria a função para criar novos dados
  create: async function (req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json({success: newUser});
      // Conferir aplicação (continua funcionando?)
      // Precisa colocar o status no json?
      // Ajustar o return do caso de erro
      //return res.status(201).json(newUser);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  // Get all users
  findAll: async function (req, res) {
    try {
      const users = await User.find(req.body);
      return res.json({success: users});
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Get a user by ID
  findOne: async function (req, res) {
    try {
      console.log("req ",req);
      const user = await User.findOne({ id: req.body.id });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.json({success: true});
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Update a user by ID
  update: async function (req, res) {
    try {
      console.log("req ",req);
      const user = await User.update({ id: req.body.id });
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

  // Delete a user by ID
  
  delete: async function (req, res) {
  try {
    const deletedUser = await User.destroyOne({ id: req.body.id });
    if (!deletedUser) {
      //return res.status(404).json({ error: "User not found" });
      return res.json({ error: "User not deleted" });
    }
    return res.json({success: true});
  } catch (err) {
    return res.json({ error: err.message});

  }
},
}
