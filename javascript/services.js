angular.module("ecomWebsite")
.service("getDatas", function($http, $q) {
    
	function fetch(type) {
		var deferred = $q.defer();
		$http({method: 'GET', url: 'data/'+type+'Data.json'})
		.then(function(response) {
			deferred.resolve(response.data);
		});
        return deferred.promise;
	}

	this.stores =  function() {
		return fetch('store');
	};
	
	this.books =  function() {
		return fetch('book');
	};
});