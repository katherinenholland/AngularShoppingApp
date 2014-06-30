function SampleCtrl($scope) {

	$scope.item = [];

	$scope.addItem = function() {

		var newItem = $scope.item.length;
		newItem++;

		$scope.item.push(
			{id: newItem}
		);
	};
};