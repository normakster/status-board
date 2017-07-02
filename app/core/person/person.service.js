'use strict';

angular.
  module('core.person').
  factory('Person', ['$resource',
    function($resource) {
      return $resource('persons/:personUsername.json', {}, {
        query: {
          method: 'GET',
          params: {personUsername: 'persons'},
          isArray: true
        }
      });
    }
  ]);