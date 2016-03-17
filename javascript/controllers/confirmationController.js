angular.module('ecomWebsite')
.controller('confirmationController', ['$scope', 'getDatas', function($scope, getDatas) {
	$scope.pageTitle = 'Step 3 : Confirmation';

	var that = this;

	// retrive store name
	var promise = getDatas.stores();
	promise.then(function(data) {
		var store = getItem(data, parseInt(window.localStorage.storeId));
		that.storeName = store.name;
	});

	this.cart = JSON.parse(window.localStorage.cart);

	this.calcTotal = function() {
		var total = 0;

		for(key in that.cart) {
			var book = that.cart[key];
			total += book.price * parseInt(book.qty);
		}

		return total;
	}
}]);