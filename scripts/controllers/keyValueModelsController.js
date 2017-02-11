(function () {
    'use strict';
    app.controller('keyValueModelsController', function ($scope, $http) {
       
       $scope.KeyValueModels = [];
        $scope.GetProducts = function()
        {
            $http.get("http://localhost:4735/api/KeyValueModels").success(success).error(error)
        }

        var success = function(data){
            console.log(data);
            $scope.KeyValueModels = data;
        }

        var error = function(data){
            alert("Não foi possível carregar os produtos");
        }
        $scope.GetProducts();

    });
})();