angular.module('SimpleDirectiveApp').directive('simpleCustomer', function() {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}} '
    };
  });