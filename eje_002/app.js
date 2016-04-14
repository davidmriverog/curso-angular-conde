angular.module('myApp',[])
  .controller('myController',['$scope',function($scope){
    
    $scope.alumno = {
      complete_name: 'David Miguel Rivero',
      age: 25,
      course: '6to semestre.'
    };
    
  }]);
