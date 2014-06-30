function SampleCtrl($scope) {

	$scope.list = [];

	$scope.addItem = function() {

		var newItem = $scope.list.length;
		newItem++;

		$scope.item.push(
			{id: newItem}
		);
	};
};