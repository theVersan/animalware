/* eslint-disable camelcase */
/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

// Cria a estrutura pra o banco de dados envolvendo o tipo, o nome e se ela é obrigatória
module.exports = {
  attributes: {
    idUser: {
      type: 'number',
      required: true,
    },
    full_name: { 
      type: 'string',
      required: true,
    },
    social_name: { 
      type: 'string',
      required: true,
    },
    phone: { 
      type: 'string',
      required: true,
    },
    email: { 
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
    },
  }
};
