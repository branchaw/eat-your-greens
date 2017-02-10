'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, search) {
    $scope.search = search.query ();
  
    $scope.refreshSearch = function() {
        $scope.search = search.query({
            q: $scope.q
        });
    };
  
  });
