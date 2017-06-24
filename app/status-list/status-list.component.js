'use strict';

// Register `statusList` component, along with its associated controller and template
angular.
  module('statusList').
  component('statusList', {
    templateUrl: 'status-list/status-list.template.html',
    controller: ['Person',
      function StatusListController(Person) {
        //console.log("before query");
	this.persons = Person.query();
	//console.log("after query");
        this.orderProp = 'age';
      }
    ]
  });
