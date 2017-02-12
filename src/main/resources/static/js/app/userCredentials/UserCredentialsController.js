/**
 * Created by mihai.huminiuc on 2/10/2017.
 */

'use strict';

angular.module('crudApp').controller('UserCredentialsController',
    ['UserCredentialsService', '$scope',  function( UserCredentialsService, $scope) {

        var self = this;
        self.userCredentials = {};

        self.submit = submit;
        self.createUser = createUser;
        self.updateUser = updateUser;
        self.removeUser = removeUser;
        self.editUser = editUser;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;



        function submit() {
            console.log('Submitting');
            if(self.userCredentials.id === undefined || self.userCredentials.id === null){
                console.log('Create UserCredentials');
                createUser(self.userCredentials);
            }else{
                updateUser(self.user,self.user.id);
                console.log('User update with id: ',self.userCredentials.id);
            }
        }



        function createUser(userCredentials) {
            console.log('About to create user');
            UserService.createUser(userCredentials)
                .then(
                function (response) {
                    console.log('User created successfully');
                    self.successMessage = 'User created successfully';
                    self.errorMessage='';
                    self.done = true;
                    self.userCredentials={};
                    $scope.myForm.$setPristine();
                },
                function (errResponse) {
                    console.error('Error while creating User');
                    self.errorMessage = 'Error while creating User: ' + errResponse.data.errorMessage;
                    self.successMessage='';
                }
            );
        }


        function updateUser(userCredentials, id){
            console.log('About to update user');
            UserCredentialsService.updateUser(userCredentials, id)
                .then(
                function (response){
                    console.log('User updated successfully');
                    self.successMessage='User updated successfully';
                    self.errorMessage='';
                    self.done = true;
                    $scope.myForm.$setPristine();
                },
                function(errResponse){
                    console.error('Error while updating User');
                    self.errorMessage='Error while updating User '+errResponse.data;
                    self.successMessage='';
                }
            );
        }


        function removeUser(id){
            console.log('About to remove User with id '+id);
            UserCredentialsService.removeUser(id)
                .then(
                function(){
                    console.log('User '+id + ' removed successfully');
                },
                function(errResponse){
                    console.error('Error while removing user '+id +', Error :'+errResponse.data);
                }
            );
        }


        function editUser(id) {
            self.successMessage='';
            self.errorMessage='';
            UserCredentialsService.getUser(id).then(
                function (user) {
                    self.user = user;
                },
                function (errResponse) {
                    console.error('Error while removing user ' + id + ', Error :' + errResponse.data);
                }
            );
        }

        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.userCredentials={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }
    ]);