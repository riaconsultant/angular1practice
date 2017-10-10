var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$location,$http,$timeout,$interval){
    $scope.myUrl= $location.absUrl();
    $scope.counts= [255,251,200];
    console.log($location);
    // $http service
    $http.get("../sample.html").then(function(response){
        $scope.mypage = response.data;
    });
    // $timeout funcationlity
    $timeout(function(){
        $scope.myheader = "How are you doing Today ?";
    },2000)
    // $interval funcationlity
    var a=1;
    $interval(function(){
        $scope.myInterval = new Date().toLocaleTimeString();
        if(a<=10){
          console.log(a++);
        }
    },500);
    
});
app.controller('formCtrl',function($scope,$http){
    $scope.model1={};
    var mode1=[];
    $scope.showModel=function(model){
        mode1.push(model);
        $scope.model={};
        $scope.model1=mode1;
    }
    $http.get("data.json").then(function(res){
        $scope.jsonData=res.data.records;
    })
});


// Custom Service creation
app.filter('myFormat',['hexafy',function(hexafy){
    return function(x){
        return hexafy.myFunc(x);
    }
}]);

app.service('hexafy',function(){
    this.myFunc = function(x){
        return x.toString(16);
    }
});