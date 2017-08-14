var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http){
    var obj = [{id:"1",name:"Manoj"},{id:"2",name:"Ashok"},{id:"3",name:"Suresh"}];
    /*$http({method:"JSONP",url:"http://localhost:3000/EmployeeId"}).success(function(response){
        console.log(response.data);
        debugger;
        $scope.str = response.data;
    }).error(function(data,status){
        console.log("Error"+status);
    })*/
    $scope.names =  obj;
    //var url="http://localhost:3000/EmployeeId";
    var url = "http://localhost/";
    $http.get(url).then(function mysuccess(res){
        console.log("Success"+res);
    },function myError(res){
        console.log("Error"+res);
    });
});