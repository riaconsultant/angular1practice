var myApp = angular.module("myApp",[]);

myApp.controller('myCtrl',function($scope,CtrlSrv){
    $scope.name="Manoj Kumar";
    $scope.square = function(){
        $scope.result=CtrlSrv.squre($scope.number);
    }
});

myApp.factory('MainService',function(){
    var fact = {};
    fact.multiply = function(a,b){
        return a * b;
    }
    return fact;
});

myApp.service('CtrlSrv',function(MainService){
    this.squre = function(a){
       return  MainService.multiply(a,a);
    }
});