'use strict';

// Register `statusList` component, along with its associated controller and template
angular.
    module('statusList').
    component('statusList', {
        templateUrl: 'status-list/status-list.template.html',
        controller: ['Person',
                     function StatusListController(Person) {
                         this.persons = Person.query(function(persons) {
                             angular.forEach(persons, function(eachObj) {
                                 Person.get({personUsername: eachObj.username}, function(person) {
                                     //console.log(person);
                                     eachObj.status = person.status;
                                     eachObj.location = person.location;
                                     eachObj.etb = person.etb;
                                 });
                             });
                         });
                         this.orderProp = 'username';
                     }
                    ]
});