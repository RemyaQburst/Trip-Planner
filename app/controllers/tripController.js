(function () {
    'use strict';
angular.module('tripApp')
        .controller('tripCtrl', tripCtrl);
tripCtrl.$inject = ["$scope","NgTableParams"];
function tripCtrl($scope,NgTableParams) {
	$scope.trip ={};
	$scope.drawTable = function(){
		$scope.tableData = [];
		var stopCount = $scope.trip.noofStops;
		for(var i=0;i<stopCount;i++) {
			$scope.tableData.push({});
		}
		$scope.tableData[0].boardingPoint = $scope.trip.boardingPoint;
		$scope.tableData[stopCount-1].destination = $scope.trip.destination;
		updateCount();
		$scope.tableParams = new NgTableParams({ sorting: { stop: "asc" } }, { dataset: $scope.tableData});
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
		updateCount();
		$scope.tableParams.reload();
	}
	$scope.delRow = function(trip,index) {
		if(index!=0) {
			$scope.tableData.splice( index, 1 );
			$scope.tableData[index-1].destination = trip.destination;
			updateCount();
			$scope.tableParams.reload();
		}
	}
	function updateCount() {
		for(var i=0;i<$scope.tableData.length;i++) {
			$scope.tableData[i].stop = i;
		}
	}
}

})();