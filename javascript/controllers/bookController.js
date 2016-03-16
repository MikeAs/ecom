angular.module('ecomWebsite')
.controller('bookController', ['$scope', 'getDatas', function($scope, getDatas) {
	$scope.pageTitle = 'Step 2 : Sélection de produits';

	var that = this;
	this.datas = {};

	this.calcTotal = function() {
		var total = 0;
		for(key in that.datas) {
			var book = that.datas[key];
			total += book.price * parseInt(book.qty);
		}
		return total;
	}

	// get data from book json
	var promise = getDatas.books();
	promise.then(function(data) {
	    that.datas = data;
	});
}]);