var app = angular.module('ecomWebsite', ['ngRoute']);

/* Some helper functions */

// return the item with the write id from collection of item
getItem = function(collection, id) {
	for(k in collection) {
		var item = collection[k];
		if(item.id === id)
			return item;
	}
}