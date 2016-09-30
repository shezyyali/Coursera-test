(function () {
'strict'
angular.module('myFirstapp',[])
.controller('Mycontroller', Mycontroller)
Mycontroller.$inject= ['$scope'];
function Mycontroller($scope){
	$scope.name = "walid";
	$scope.stateofbeing = "hungry";

$scope.feed = function (){
	$scope.stateofbeing = "fed";
};

}; 


})();