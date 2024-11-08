/* eslint-disable camelcase */
/**
 * Had_dogs_or_lived_with.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // id: {
    //   model: 'User',
    //   required: true,
    // },
    
    dog_name: { //nome
      type: 'string',
      required: true,
    },
    onwer: { //De quem é o cão?
      type: 'string',
      required: true,
    },
    dog_personality: { //personalidade que o cão tinha
      type: 'string',
      required: true,
    },
    time_with_the_dog: { //ficou quanto tempo com você?
      type: 'string',
      required: true,
    },
    first_dog_question: { //é o primeiro cão?
      type: 'string',
      required: true,
    },
    pets_in_home:{ // Existem outros pets na casa? 
      type: 'text',
      required: true
    },
    //pergunta só aparece se a resposta da anterior for sim.
    how_many_dogs: { // quantos cachorros?
      type: 'number',
      required: false,
    },
    //pergunta só aparece se a resposta da anterior for sim.
    how_many_cats: { //quantos gatos?
      type: 'number',
      required: false,
    },
    dog_arrived_age: { //idade ao ser incluido na casa
      type: 'string',
      required: true,
    },
    neutered: { // é castrado?
      type: 'string',
      required: true,
    },
    //pergunta só aparece se a resposta da anterior for sim.
    age_neutered: {
      type: 'string',
      required: false,
    },
    breed_defined: { //É de raça definida, mistura de raças ou sem raça definida?
      type: 'string',
      required: false,
    },
    //pergunta só aparece se a resposta da anterior for "raça definida"
    what_breed: { //Qual é a raça?
      type: 'string',
      required: false
    },
    dog_origin: { // de onde veio o cachorro?
      type: 'string',
      required: true,
    },
    other: { // caso a pessoa tenha selecionado "outro"
      type: 'string',
      required: false,
    },
    dog_price: { //preço pago pelo cão
      type: 'string', 
      required: true,
    },
    dog_reason: { //razão de ter tido o cão
      type: 'string',
      required: true,
    },
    reasons_last_contact: {
      type: 'string',
      required: true
    },
    other_reasons: { // outros motivos/circunstancias
      type: 'string',
      required: false,
    },
    dog_characteristics: { //características que fez vc mater o cão
      type: 'string',
      required: true,
    },
    people_in_decision: { // pessoas envolvidas na decisão
      type: 'string',
      required: true
    },
    other_people: { // quais outras pessoas?
      type: 'string',
      required: false,
    },
    most_like: { // o que gostava nele
      type: 'string',
      required: true,
    },
    dislike: { // o que não gostava nele
      type: 'string',
      required: true,
    },
    go_to_vet: { // levou ao vet?
      type: 'string',
      required: true,
    },
    // pergunta só aparece se a resposta da anterior for sim.
    vet_frequency: { // quantas vezes e motivo
      type: 'string',
      required: false,
    },
    last_contact: { // data que deixou de conviver
      type: 'string',
      required: true,
    },
    dog_age_in_last_contact: { // idade que ele tinha quando deixou de conviver
      type: 'string',
      required: true,
    },
    reasons_of_last_contact: { // por que deixou de conviver?
      type: 'string',
      required: true,
    },
    would_have_new_dog: { // teria um novo cão?
      type: 'string',
      required: true,
    },
    reason_yes: { // razão de ter um novo cão
      type: 'string',
      required: false,
    },
    reason_no: { // razão de ter um novo cão
      type: 'string',
      required: false,
    },
  }
};