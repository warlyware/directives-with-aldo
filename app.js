"use strict";

var app = angular.module('myTable', [])
.factory('tableService', ['$document', '$q', '$rootScope',
    function($document, $q, $rootScope){

    }
])
.controller("MainCtrl", [
'$scope',
'$http',
function($scope, $http){

  $scope.columns = [
    {label: "name",
    data_type: "string",
    header_name: "First Name of Person"
    },
    {label: "phone",
    data_type: "string",
    header_name: "Work Phone"
    },
    {label: "email",
     data_type: "string",
     header_name: "Work Email"
    }
    ];

  $scope.tableData = [
    {"name": "Aldo Briano",
     "phone": "6505551122",
     "email": "aldo@yiftee.com"
    },
    {"name": "Jon Smith",
     "phone": "6505551226",
     "email": "jsmith@gmail.com"
    },
    {"name": "Bob Mullen",
     "phone": "4085551122",
     "email": "bmullen@gmail.com"
    },
    {"name": "Carol Stone",
     "phone": "4155351124",
     "email": "cstone@gmail.com"
    },
    {"name": "Richard Tolbert",
     "phone": "6502351123",
     "email": "rt@gmail.com"
    },
    ];

}])
.directive('aTable', function(){
  return {
    restrict: 'E',
    scope: {
      tableData: "=",
      columns: "=",
      title: "@"
    },
    templateUrl: 'a_table.html',
    controller: ['$scope', '$window', '$filter', function($scope, $window, $filter){
      
      
      
    }]
    
  }
});