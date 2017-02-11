(function () {
    'use strict';
    app.controller('loginController', function ($scope, $http, $localStorage, $location) {
        $scope.message = "You are on login.";

        $scope.Login = "";
        $scope.Password = "";

        $scope.Access = function()
        {
            var user = 
            {
                login : $scope.Login,
                password : $scope.Password
            }
            $http.post("http://localhost:3000" + '/login',user).success(success).error(error)
        }

        var success = function(result){
            if(result.success)
            {
                $localStorage.currentUser = { username: $scope.Login, token: result.data };
                $http.defaults.headers.common.Authorization = 'Bearer ' + result.data;
                 $location.path( "/products" );
            }
            else{
                alert("Acesso não autorizado");
            }
        }

        var error = function(data){
            alert(data);
        }
    });
})();