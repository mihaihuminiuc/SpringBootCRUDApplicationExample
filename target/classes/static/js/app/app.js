var app = angular.module('crudApp',['ui.router','ngStorage']);

app.constant('urls', {


    //for online usage
    /*
    BASE: 'https://evening-lake-666274.herokuapp.com/SpringBootCRUDApp',
    USER_SERVICE_API : 'https://evening-lake-666274.herokuapp.com/SpringBootCRUDApp/api/user/'
     */


    //for local usage

    BASE: 'http://localhost:8080/SpringBootCRUDApp',
    USER_SERVICE_API : 'http://localhost:8080/SpringBootCRUDApp/api/user/'

});

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/list',
                controller:'UserController',
                controllerAs:'ctrl',
                resolve: {
                    users: function ($q, UserService) {
                        console.log('Load all users');
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }]);