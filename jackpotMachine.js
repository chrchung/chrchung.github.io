var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    $scope.bacteria = [];


    $scope.select = function (ob) {
    	$('#' + ob.target.id).addClass('selected');
    };


	for (var i = 1; i < 9; i ++) {
		$scope.bacteria.push([]);

		for (var j = 1; j < 5; j ++) {
			$scope.bacteria[i - 1].push({url: i + '' + j + '.png', id: (i + '' + j)});
		}
	}
});