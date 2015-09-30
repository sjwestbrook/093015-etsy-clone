angular.module ('etsyApp', [
  'ngStamplay',
  'ui.router',
  'app.routes',
  'app.admin',
  'app.authenticate',
  'app.checkout',
  'app.home',
  'app.product',
  'app.profile',
  'app.shop'
])
.controller('MainController', MainController);


/* The main controller for our application. */

function MainController() {
  var main = this;
}
