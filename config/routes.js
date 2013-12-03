module.exports.routes = {
  '/' : {
    controller: 'main',
    action: 'index'
  },
  'post /signup' : {
    controller: 'main',
    action: 'signup'
  },
  '/login' : {
    controller: 'main',
    action: 'login'
  },
  '/chat' : {
    controller: 'main',
    action: 'chat'
  }
};
