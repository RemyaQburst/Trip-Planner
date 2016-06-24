(function () {
    'use strict';
function tripCtrl($scope) {
	$scope.trip ={};
	$scope.drawTable = function(){
		$scope.tableData = [];
		var stopCount = $scope.trip.noofStops;
		for(var i=0;i<stopCount;i++) {
			$scope.tableData.push({});
		}
		$scope.tableData[0].boardingPoint = $scope.trip.boardingPoint;
		$scope.tableData[stopCount-1].destination = $scope.trip.destination;
		console.log($scope.tableData)
	}
	$scope.updateDestination = function(trip,index) {
		if(index!=0) {
			$scope.tableData[index-1].destination = trip.boardingPoint;
		}
	}
	$scope.updateBoarding = function(trip,index) {
		if(index!=$scope.tableData.length-1) {
			$scope.tableData[index+1].boardingPoint = trip.destination;
		}
	}
	$scope.addRow = function(trip,index) {
		console.log(trip,index);
		var dest = $scope.tableData[index].destination;
		if(dest==""&&dest==null) {
			dest="";
		}
		if(index!=$scope.tableData.length-1) {
			$scope.tableData.splice(index+1,0,{boardingPoint:dest,destination:""});
			$scope.tableData[index+2].boardingPoint = $scope.tableData[index+1].destination;
		}
		else {
			$scope.tableData[index].destination = "";
			$scope.tableData.splice(index+1,0,{boardingPoint:"",destination:dest});
		}
		console.log($scope.tableData)
	}
	$scope.delRow = function(trip,index) {
		if(index!=0) {
			//$scope.tableData[index].boardingPoint = "";
			//$scope.tableData[index-1].destination = "";
			$scope.tableData.splice( index, 1 );
			$scope.tableData[index-1].destination = trip.destination;
		}
	}
}
angular.module('tripApp')
        .controller('tripCtrl', tripCtrl);
})();