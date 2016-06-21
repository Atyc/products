'use strict';

// Declare app level module which depends on views, and components
angular.module('octApp', [
  'ngRoute',
  'octApp.view1',
  'octApp.view2',
  'octApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
