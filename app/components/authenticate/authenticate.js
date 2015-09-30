angular
  .module('app.authenticate', [])
  .controller('AuthenticateController', ['User', 'rootScope', '$state', AuthenticateController]);

// inject $state from ui-router as well so that we can redirect a user after successfully signing up or logging in

function AuthenticateController(User, $rootScope) {
  var authenticate = this;

  // create the objects for our forms
  authenticate.signupData = {};
  authenticate.loginData = {};

  // bind the functions to our controller
  authenticate.signup = signup;
  authenticate.login = login;

  // sign a user up and bind their info to $rootScope
  function signup() {
    User.signup(authenticate.signupData)
        .then(function(data) {
          if (data.get('_id')) {
            $rootScope.currentUser.id = data.get('_id');
            $rootScope.currentUser.name = data.get('displayName');
            $rootScope.currentUser.image = data.get('profileImg');

            // redirect the user
            $state.go('home');
          }
        });
  }

  // use the User factory to log a user in
  // bind the user's info to $rootScope
  function login() {
    User.login(authenticate.loginData)
        .then(function(data) {
          if (data.get('_id')) {
            $rootScope.currentUser.id = data.get('_id');
            $rootScope.currentUser.name = data.get('displayName');
            $rootScope.currentUser.image = data.get('profileImg');

            // redirect the user
            $state.go('home');
          }
        });
  }
}  // end AuthenticateController
