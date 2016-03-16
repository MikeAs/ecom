angular.module('ecomWebsite')
.controller('bookController', ['$scope', 'getDatas', function($scope, getDatas) {
	$scope.pageTitle = 'Step 2 : Sélection de produits';

	var that = this;
	this.datas = {};

	// get data from book json
	var promise = getDatas.books();
	promise.then(function(data) {
	    that.datas = data;
	});
}]);