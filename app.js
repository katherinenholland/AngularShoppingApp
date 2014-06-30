function SampleCtrl($scope) {

	$scope.list = [];

	$scope.addItem = function() {

		var newItem = $scope.item.length;
		newItem++;

		$scope.item.push(
			{id: newItem}
		);
	};
};