(function () {
'use strict';

angular.module('LunchApp', [])
.controller('AssController', AssController);

AssController.$inject = ['$scope'];

function AssController($scope) {
  $scope.messageToDisplay = "";

  $scope.itemsInLunch="";

  $scope.displayMessage = function () {
    var msg = getMsg($scope.itemsInLunch);
    $scope.messageToDisplay=msg;
  };

  function getMsg(string){
   console.log(string);
    var arr=string.split(',');
    var returnMsg="";
    if(arr.length<=3){
      if(arr.length==1 && (string=="" || string==null)){

        returnMsg="Please Enter Data First";
      }

      else {
      returnMsg="Enjoy!";
      }
    }

    else if(arr.length>3){
      returnMsg="Too Much!";
    }
    else{
        returnMsg="";
    }
    return returnMsg;
  }
  };

})();