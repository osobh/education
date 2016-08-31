angular.module("app", [])
  .controller("ShoppingController", function($scope) {
    
    // "public" data, can be accessed from the view
    $scope.availableItems = [
    	{id: 1, name: 'lamp', price: 595},
    	{id: 2, name: 'desk', price: 750},
    	{id: 3, name: 'chair', price: 2395},
    	{id: 3, name: 'Honda Civic', price: 1999995}
    ]

    $scope.totalCost = 0;
    $scope.currentItems = [];

    // "private" data, cannot be accessed by the view.
    var taxRate = .18;

    // "public" function, can be accessed from the view. 
    $scope.addItem = function (item) {
    	$scope.currentItems.push(item);
    	updatePrice();
    }

    // "private" function, cannot be accessed by the view.
    function updatePrice() {
    	var sum = 0;
    	for(var i = 0; i < $scope.currentItems.length; i++) {
    		sum += $scope.currentItems[i].price;
    	}

    	$scope.totalCost = sum + (sum * taxRate);
        $scope.totalCost = Math.floor($scope.totalCost);
        console.log($scope.totalCost);
    }
});	