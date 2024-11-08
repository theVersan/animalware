/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const { task } = require("grunt");
const { identity } = require("sails-postgresql");

// Cria a estrutura pra o banco de dados envolvendo o tipo, o nome e se ela é obrigatória
module.exports = {
  attributes: {
    
    age: { //idade
      type: 'ref', // Usamos 'ref' para tipos específicos como DATE
      columnType: 'date', // Define a coluna como DATE no PostgreSQL
      required: true,
    },
    gender: { //sexo que a pessoa se identifica
      type: 'string',
      required: true,
    },
    education:{ //grau de escolaridade
      type: 'string',
      required: true
    },
    country: { //País
      type: 'string',
      required: true,
    },
    state: { //Estado
      type: 'string',
      required: true
    },
    city: { //city
      type: 'string',
      required: true,
    },
    neighborhood: { //bairro
      type: 'string',
      required: true,
    },
    live_type: { //tipo de moradia
      type: 'string',
      required: true,
    },
    build_family: { //constituição familiar
      type: 'string',
      required: true,
    },
    income: { //renda
      type: 'string',
      required: true,
    },
    people_in_the_house: { //quantidade de pessoas na casa
      type: 'string',
      required: true,
    },
  },
};
