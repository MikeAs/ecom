angular.module('ecomWebsite')
.controller('bookController', ['$scope', '$location', '$routeParams', 'getDatas', function($scope, $location, $routeParams, getDatas) {
	$scope.pageTitle = 'Step 2 : Sélection de produits';

	var that = this;
	this.datas = {};
	window.localStorage.cart = '';

	// get data from book json
	var promise = getDatas.books();
	promise.then(function(data) {
	    that.datas = data;
	});

	this.calcTotal = function() {
		var total = 0;
		for(key in that.datas) {
			var book = that.datas[key];
			book.total = book.price * parseInt(book.qty);
			total += book.total;
		}
		return total;
	}

	this.validForm = function() {
		window.localStorage.cart = JSON.stringify(that.datas);
		$location.path("/confirmation/store/" + $routeParams.storeId);
	}
}]);