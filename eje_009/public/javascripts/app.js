angular.module('myApp',[])
  .controller('myController',['$scope','$log',function($scope,$log){
    $scope.form = {};
    $scope.formVisibility = false;
    
    $scope.alumnos = [
      {nombres: "David Rivero",telefono: "+58(424)563.21.25",curso:"9no semestre"},
      {nombres: "Yrma Guite",telefono: "+58(416)125.05.23",curso:"8vo semestre"},
      {nombres: "Davidmar Rivero",telefono: "+58(426)145.25.25",curso:"7mo semestre"},
      {nombres: "David J. Rivero",telefono: "+58(412)145.25.23",curso:"6to semestre"},
      {nombres: "Leyla Pastran",telefono: "+58(412)745.89.56",curso:"5to semestre"}
    ];
    
    $scope.saved = function(){
      
      $scope.alumnos.push({
        nombres: $scope.form.nombres,
        telefono: $scope.form.telefono,
        curso: $scope.form.curso
      });
      
      $scope.form = {};
      $scope.formVisibility = false;
    };
    
    $scope.showForm = function(){
      $scope.formVisibility = true;
      $log.info($scope.formVisibility);
    };
    
  }]);
