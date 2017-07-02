'use strict';

// Register `statusDetail` component, along with its associated controller and template
angular.
  module('statusDetail').
  component('statusDetail', {
    templateUrl: 'status-detail/status-detail.template.html',
    controller: ['$routeParams', 'Person',
      function StatusDetailController($routeParams, Person) {
        var self = this;
        self.person = Person.get({personUsername: $routeParams.personUsername}, function(person) {
          self.setImage(person.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });