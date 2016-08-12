'use strict';

/**
 * @ngdoc function
 * @name mytodoangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoangularApp
 */

angular.module('mytodoangularApp')
.controller('TodoCtrl',['$scope',TodoCtrl]);
function TodoCtrl($scope) {
  $scope.todos = [
    {text:'Learn AngularJS', done:false},         
    {text: 'Build an app', done:false}
  ];
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
  $scope.remove=function(){
  	var oldList = $scope.todos;
  	$scope.todos=[];
  	angular.forEach(oldList,function(x){
  		if(!x.done) $scope.todos.push(x);
  	});
  };

    // $scope.clearCompleted = function () {
    //     $scope.todos = _.filter($scope.todos, function(todo){
    //         return !todo.done;
    //     });
    // };
}


  //var app = angular.module('myApp',[]);
  // app.controller('todoCtrl',function($scope){
  // 	$scope.todoAdd = function(){
  // 		$scope.todoList.push({todoText:$scope.todoInput,done:false});
  // 		$scope.todoInput = "Do this";
  // 	};

  // 	$scope.remove = function(){
  // 		var oldList = $scope.todoList;
  // 		$scope.todoList=[];
  // 		angular.forEach(oldList,function(x){
  // 			if(!x.done) $scope.todoList.push(x);
  // 		});
  // 	};
  // });