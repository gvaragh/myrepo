angular.module('TodoApp',[]).controller('TodoCtrl',['$scope', function($scope){

$scope.todos = [{text:'Learn Angular JS', done:false},{text:'Build app',done:false}];

$scope.getTotalToDo = function()
{
	return $scope.todos.length;
};

$scope.addToDo = function()
{
	if($scope.formToDoText)
	{
		$scope.todos.push({text:$scope.formToDoText,done:false});
		$scope.formToDoText = '';
	}
};

$scope.clearCompleted = function()
{
	$scope.todos = _.filter($scope.todos, function(todo){
		return !todo.done;
	})
};

$scope.editToDo = function()
{
	 _.each($scope.todos, console.log, title );
};

}]);


