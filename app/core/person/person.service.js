'use strict';

angular.
  module('core.person').
  factory('Person', ['$resource',
    function($resource) {
      return $resource('persons/:personId.json', {}, {
        query: {
          method: 'GET',
          params: {personId: 'persons'},
          isArray: true
        }
      });
    }
  ]);
