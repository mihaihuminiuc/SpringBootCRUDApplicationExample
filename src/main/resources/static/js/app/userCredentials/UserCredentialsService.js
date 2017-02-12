/**
 * Created by humin on 2/12/2017.
 */
'use strict';

angular.module('crudApp').factory('UserCredentialsService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                getUser: getUser,
                createUser: createUser,
                updateUser: updateUser,
                removeUser: removeUser
            };

            return factory;



            function getUser(id) {
                console.log('Fetching User with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_REGISTRATIONS_SERVICE_API + id)
                    .then(
                    function (response) {
                        console.log('Fetched successfully User with id :'+id);
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('Error while loading user with id :'+id);
                        deferred.reject(errResponse);
                    }
                );
                return deferred.promise;
            }

            function createUser(userCredentials) {
                console.log('Creating User');
                var deferred = $q.defer();
                $http.post(urls.USER_REGISTRATIONS_SERVICE_API, userCredentials)
                    .then(
                    function (response) {
                        loadAllUsers();
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('Error while creating User : '+errResponse.data.errorMessage);
                        deferred.reject(errResponse);
                    }
                );
                return deferred.promise;
            }

            function updateUser(user, id) {
                console.log('Updating User with id '+id);
                var deferred = $q.defer();
                $http.put(urls.USER_REGISTRATIONS_SERVICE_API + id, user)
                    .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('Error while updating User with id :'+id);
                        deferred.reject(errResponse);
                    }
                );
                return deferred.promise;
            }

            function removeUser(id) {
                console.log('Removing User with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.USER_REGISTRATIONS_SERVICE_API + id)
                    .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('Error while removing User with id :'+id);
                        deferred.reject(errResponse);
                    }
                );
                return deferred.promise;
            }

        }
    ]);