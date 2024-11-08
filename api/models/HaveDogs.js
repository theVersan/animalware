/* eslint-disable camelcase */
/**
 * Have_dogs.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

// Cria a estrutura pra o banco de dados envolvendo o tipo, o nome e se ela é obrigatória
module.exports = {

 
  attributes: {
    idUser: {
      model: 'User',
      required: true,
    },
    id_contact_users: {
      type: 'number',
      required: true,
    },
    dog_name: { //Nome do cão
      type: 'text',
      required: true,
    },
    dog_gender: { //Sexo do cão
      type: 'text',
      required: true,
    },
    onwer: { //De quem é o cão?
      type: 'string',
      required: true,
    },
    nautered: { //É castrado?
      type: 'string',
      required: true,
    },
    when_neutered: { // Se sim, quando foi castrado?
      type: 'string',
      required: false,
    },
    time_with_you: { //Tempo que está com você?
      type: 'text',
      required: true,
    },
    first_dog: { // É o primeiro cão?
      type: 'string',
      required: true,
    },
    pets_in_home:{ // Existem outros pets na casa? 
      type: 'text',
      required: true
    },
    //pergunta só aparece se a resposta da anterior for sim.
    how_many_dogs: { // quantos cachorros?
      type: 'string',
      required: false,
    },
    //pergunta só aparece se a resposta da anterior for sim.
    how_many_cats: { //quantos gatos?
      type: 'string',
      required: false,
    },
    dog_age: { //Idade do cão
      type: 'text',
      required: true,
    },
    dog_breed: { //É de raça definida, mistura de raças ou sem raça definida?
      type: 'string',
      required: true,
    },
    //pergunta só aparece se a resposta da anterior for "raça definida"
    what_breed: { //Qual é a raça?
      type: 'string',
      required: false
    },
    dog_origin: { //Onde conseguiu o cão?
      type: 'string',
      required: true
    },
    was_paid: { //Pagou para adquirir?
      type: 'string',
      required: true,
    },
    age_arrived: { //Idade que o cão chegou
      type: 'text',
      required: true,
    },
    dog_personality: { //Personalidade do cão
      type: 'text',
      required: true,
    },
    dog_reason:{ //Razão de ter um cão
      type: 'text',
      required: true,
    },
    favorite_dog_traits:{ //Caracteristicas favoritas 
      type: 'text',
      required: true,
    },
    people_in_decision:{ //Pessoas envolvidas na decisão
      type: 'text',
      required: true,
    },
    dog_not_home:{ //Se teve um cão que não pode manter
      type: 'string',
      required: true,
    },
    vet_frequency:{ //Levou o animal ao veterinário?
      type: 'text',
      required: true,
    },
    //pergunta só aparece se a resposta da anterior for sim.
    amount_of_vet_visit: { //Quantas vezes?
      type: 'string',
      required: false
    },
    dog_summary:{ //O que diria do cão
      type: 'text',
      required: true,
    },
  }
};

