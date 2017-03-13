(function() {
	'use strict'

	app.controller('mainCtrl', ['$scope', function($scope) {

		$scope.clear = function() {
			$scope.dt = null;
		};

		// Disable weekend selection
		$scope.disabled = function(date, mode) {
			return false;
			return(mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
		};

		$scope.toggleMin = function() {
			$scope.minDate = $scope.minDate ? null : new Date();
		};
		$scope.toggleMin();

		$scope.open = function($event) {
			$event.preventDefault();
			$event.stopPropagation();

			$scope.opened = !$scope.opened;
		};

		$scope.dateOptions = {
			formatYear: 'yy',
			startingDay: 1,
			class: 'datepicker'
		};
	}]);
})()