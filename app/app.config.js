'use strict';

angular.
  module('status-board').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/statusboard', {
          template: '<status-list></status-list>'
        }).
        when('/persons/:personUsername', {
          template: '<status-detail></status-detail>'
        }).
        otherwise('/statusboard');
    }
  ]);
