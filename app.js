(function (){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', Myfunction);
  Myfunction.$inject = ['$scope'];
  function Myfunction($scope){
    $scope.lunch;
  $scope.Checking = function(){
    var wordCount = $scope.lunch ? $scope.lunch.split(",") : 0;
    $scope.words = wordCount ? wordCount.length : 0;
    };

}


})();
