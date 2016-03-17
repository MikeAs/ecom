angular.module('ecomWebsite')
.controller('bookController', ['$scope', '$location', '$routeParams', 'getDatas', function($scope, $location, $routeParams, getDatas) {
	$scope.pageTitle = 'Step 2 : Sélection de produits';

	var that = this;
	this.datas = {};
	this.cart = {};
	window.localStorage.cart = '';
	window.localStorage.storeId = '';

	// get data from book json
	var promise = getDatas.books();
	promise.then(function(data) {
	    that.datas = data;
	});


	this.calcTotal = function() {
		var total = 0;
		var cart = [];

		for(key in that.datas) {
			var book = that.datas[key];
			var price = book.price * parseInt(book.qty)
			total += price;

			if(price > 0) {
				cart.push(book);
			}
		}

		that.cart = cart;
		return total;
	}

	this.validForm = function() {
		window.localStorage.storeId = $routeParams.storeId;
		window.localStorage.cart = JSON.stringify(that.cart);
		$location.path("/confirmation");
	}
}]);