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
        when('/persons/:personId', {
          template: '<status-detail></status-detail>'
        }).
        otherwise('/statusboard');
    }
  ]);
