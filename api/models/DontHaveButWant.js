/* eslint-disable camelcase */
/**
 * Dont_have_but_want.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

// Cria a estrutura pra o banco de dados envolvendo o tipo, o nome e se ela é obrigatória
module.exports = {


  attributes: {

    // idUser: {
    //   model: 'User',
    //   required: true,
    // },
    // id_contact_users: {
    //   type: 'number',
    //   required: true,
    // },
    dog_size: { //Porte do cão
      type: 'string',
      required: true,
    },
    dog_coat: { //pelagem do cão
      type: 'string',
      required: true,
    },
    color: { //cor da pelagem
      type: 'string',
      required: true
    },
    dog_gender: { //sexo do cão
      type: 'string',
      required: true,
    },
    dog_age: { //idade
      type: 'string',
      required: true,
    },
    dog_breed: { //raça
      type: 'string',
      required: true,
    },
    dog_reason: { //razão de ter um cão
      type: 'text',
      required: true,
    },
    other_reasons: { // outros motivos/circunstancias
      type: 'string',
      required: false,
    },
    thought_a_DogName: { //já pensou em um nome?
      type: 'string',
      required: true,
    },
    //pergunta só aparece se a resposta da anterior for sim.
    dog_name: { //nome e motivo
      type: 'string',
      required: false,
    },
    prefer_Adopt_or_buy: { // adotar ou comprar?
      type: 'string',
      required: true,
    },
    When_will_recive_the_dog: { //Quando vai receber o cão?
      type: 'string',
      required: true,
    },
    Personality_you_expect: { //personalidade esperada
      type: 'text',
      required: true,
    },
    Know_about_costs: { // sabe sobre os custos com o cão?
      type: 'string',
      required: true,
    },
    //pergunta só aparece se a resposta da anterior for sim.
    how_much: { //quanto?
      type: 'string',
      required: false,
    },
  }
};



