var app = angular.module('myApp',[]);
/**
 * restrict: parameter have 4 options for different purpose of work style.
 * E: Element name
 * A: Attribute name
 * C: Class name
 * M: Comment name
 * Default value is : EA
 */
app.directive('mydirect',function(){
    return {
        //restrict:"A",
        template:"<h2>This is my First Directive test !!!</h2>"
    };
});

/** Controller $scope parameter is always available in the view and controller file */
app.controller('myCtrl',function($scope){
    $scope.name="Hello World !!";
});