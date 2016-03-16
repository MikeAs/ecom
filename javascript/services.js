angular.module("ecomWebsite")
.service("getDatas", function($http, $q) {
	var deferred = $q.defer();
    
	this.stores =  function() {
		$http({method: 'GET', url: 'data/storeData.json'})
		.success(function(data) {
			deferred.resolve(data);
		});
        return deferred.promise;
	};
	
	this.books =  function() {
		$http({method: 'GET', url: 'data/bookData.json'})
		.success(function(data) {
			deferred.resolve(data);
		});
        return deferred.promise;
	};
});