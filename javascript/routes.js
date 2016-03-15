angular.module('ecomWebsite')
.config(function($routeProvider) {
	$routeProvider
	.when("/stores", {
		templateUrl: "templates/pages/storeSelection.html",
		controller: "storeController",
		controllerAs: "store"
	})
	.when("/books", {
		templateUrl: "templates/pages/bookSelection.html",
		controller: "productController",
		controllerAs: "product"
	})
	.when("/confirmation", {
		templateUrl: "templates/pages/confirmation.html",
		controller: "confirmationController",
		controllerAs: "confirmation"
	})
	.otherwise({redirectTo:"/stores"});
});