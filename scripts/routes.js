(function () {
    'use strict';
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/login', {
                    templateUrl: 'templates/login.html',
                    controller: 'loginController'
                }).
                when('/keyValueModels', {
                    templateUrl: 'templates/keyValueModels.html',
                    controller: 'keyValueModelsController'
                }).
                otherwise({
                    redirectTo: '/keyValueModels'
                })
        }
    ]);
})();