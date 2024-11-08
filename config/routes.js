/* eslint-disable linebreak-style */
module.exports.routes = {
  // VIEWS
  '/': { view: 'pages/homepage' },
  '/docs': { view: 'pages/docs' },
  '/formUser': { view: 'pages/formUser' },
  '/formFuturo': { view: 'pages/formFuturo' },
  '/formPresente': { view: 'pages/formPresente' },
  '/formContactUser': { view: 'pages/formContactUser' },
  '/formPassado': { view: 'pages/formPassado' },
  '/formNulo': { view: 'pages/formNulo' },
  '/selection': {view: 'pages/selecao'},
  '/final': {view: 'pages/tela_final'},
  '/admin': {view: 'pages/tela_admin'},

  // Login, cadastro e recuperar senha e variáveis
  '/login': { view: 'pages/tela_login' },
  '/pass_recover': { view: 'pages/pass_recover' },
  '/recoverPassword': 'AuthController.recoverPassword',
  'POST /logins': 'LoginsController.create',
  'GET /logins': 'LoginsController.getAll',
  'GET /logins/:id': 'LoginsController.getById',
  'PUT /logins/:id': 'LoginsController.update',
  'DELETE /logins/:id': 'LoginsController.delete',
  '/tela_cadastro': { view: 'pages/tela_cadastro' },
  'POST /authLogin': 'AuthController.emailLogin',
  'POST /authCadastro': 'AuthController.emailCadastro',
  'POST /recoverPassword': 'AuthController.recoverPassword',  // Adicione esta linha

  // endpoint para contact_user
  'POST /ContactUser/create': 'ContactuserController.create',
  'GET /ContactUser': 'ContactuserController.getAll',
  'GET /ContactUser/:id': 'ContactuserController.getById',
  'PUT /ContactUser/:id': 'ContactuserController.update',
  'DELETE /ContactUser/:id': 'ContactuserController.delete',

  // endpoint para dont_have_but_want
  'POST /DontHaveButWant/create': 'DontHaveButWantController.create',
  'GET /DontHaveButWant': 'DontHaveButWantController.getAll',
  'GET /DontHaveButWant/:id': 'DontHaveButWantController.getById',
  'PUT /DontHaveButWant/:id': 'DontHaveButWantController.update',
  'DELETE /DontHaveButWant/:id': 'DontHaveButWantController.delete',

  // endpoint para dont_lived_and_dont_want
  'POST /DontLivedAndDontWant/create': 'DontLivedAndDontWantController.create',
  'GET /DontLivedAndDontWant': 'DontLivedAndDontWantController.getAll',
  'GET /DontLivedAndDontWant/:id': 'DontLivedAndDontWantController.getById',
  'PUT /DontLivedAndDontWant/:id': 'DontLivedAndDontWantController.update',
  'DELETE /DontLivedAndDontWant/:id': 'DontLivedAndDontWantController.delete',

  // endpoint para had_dogs_or_lived_want
  'POST /HadDogsOrLivedWith/create': 'HadDogsOrLivedWithController.create',
  'GET /HadDogsOrLivedWith/:id': 'HadDogsOrLivedWithController.findOne',
  'PUT /HadDogsOrLivedWith/:id': 'HadDogsOrLivedWithController.update',
  'DELETE /HadDogsOrLivedWith/:id': 'HadDogsOrLivedWithController.destroy',
  'GET /HadDogsOrLivedWith': 'HadDogsOrLivedWithController.find',

  // endpoint para have_dogs
  'POST /HaveDogs/create': 'HaveDogsController.create',
  'GET /HaveDogs': 'HaveDogsController.getAll',
  'GET /HaveDogs/:id': 'HaveDogsController.getById',
  'PUT /HaveDogs/:id': 'HaveDogsController.update',
  'DELETE /HaveDogs/:id': 'HaveDogsController.delete',

  // endpoints para Users
  'POST /User/create': 'UserController.create',
  'GET /User': 'UserController.getAll',
  'GET /User/:id': 'UserController.getById',
  'PUT /User/:id': 'UserController.update',
  'DELETE /User/:id': 'UserController.delete',


  'GET /responses/count': 'GetDataController.getFormResponsesCount',
  'GET /responses/csv/donthavebutwant': 'GetDataController.csvDontHaveButWant',
  'GET /responses/csv/dontlivedanddontwant': 'GetDataController.csvDontLivedAndDontWant',
  'GET /responses/csv/haddogsorlivedwith': 'GetDataController.csvHadDogsOrLivedWith',
  'GET /responses/csv/havedogs': 'GetDataController.csvHaveDogs',
  'GET /responses/csv/all': 'GetDataController.csvAll',


};
