angular.module('ecomWebsite')
.controller('storeController', ['$scope', 'getDatas', function($scope, getDatas) {
	$scope.pageTitle = 'Step 1 : Sélection d\'un magasin';

	var that = this;
	this.datas = {};
	this.current = 1;

	// get data from store json
	var promise = getDatas.stores();
	promise.then(function(data) {
	    that.datas = data;
	});

	// toogle store data
	this.toogleStore = function(storeId) {
		that.current = storeId;
	}
}]);