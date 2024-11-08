require('../services/firebase');
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } = require('firebase/auth'); // Importações corrigidas

module.exports = {
  emailLogin: async function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    try{
      const result = await signInWithEmailAndPassword(getAuth(), email, password); // Método signInWithEmailAndPassword corrigido
      const user  = result.user;

      console.log(user);
      return res.json({user});
    } catch(erro){
      console.log(erro);
      return res.status(500).json({erro: erro.message});
    }
  },

  emailCadastro: async function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    try{
      const result = await createUserWithEmailAndPassword(getAuth(), email, password); // Método createUserWithEmailAndPassword corrigido
      const user  = result.user;

      return res.json({user});
    } catch(erro){
      console.log(erro);
      return res.status(500).json({erro: erro.message});
    }
  },

  recoverPassword: async function (req, res){
    const email = req.body.email;
    
    try{
      await sendPasswordResetEmail(getAuth(), email); // Método sendPasswordResetEmail corrigido
      return res.json({ message: "E-mail de recuperação enviado com sucesso" });
    } catch(erro){
      console.log(erro);
      return res.status(500).json({erro: erro.message});
    }
  }
};
