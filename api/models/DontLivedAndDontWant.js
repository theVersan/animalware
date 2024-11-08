/**
 * Dont_lived_and_dont_want.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

// Cria a estrutura pra o banco de dados envolvendo o tipo, o nome e se ela é obrigatória
module.exports = {

  attributes: {
    // eslint-disable-next-line camelcase
    idUser: {
      model: 'User',
      required: true,
    },
    // eslint-disable-next-line camelcase
    why_dont_want: { //motivo de não querer cachorro
      type: 'text',
      required: true,
    },
  },
};

