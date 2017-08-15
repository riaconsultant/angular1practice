/** Filter Example */
var app = angular.module('myApp',[]);

app.directive('myDirective',function(){

});
/** $rootScope example */
app.run(function($rootScope){

});

/** Controller define example */
app.controller('myCtrl',function($scope){
    $scope.name="Manoj kumar chaurasiya";
});
app.controller('nameCtrl',function($scope){
    $scope.names = [{name:'Manoj',age:32},{name:'Sonu',age:28},{name:'Meera',age:30},{name:'Mann',age:6},{name:'Jaanu',age:3}];
});
