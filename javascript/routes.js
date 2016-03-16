angular.module('ecomWebsite')
.config(function($routeProvider) {
	$routeProvider
	.when('/stores', {
		templateUrl: 'templates/pages/storeSelection.html',
		controller: 'storeController',
		controllerAs: 'stores'
	})
	.when('/stores/:storeId/books', {
		templateUrl: 'templates/pages/bookSelection.html',
		controller: 'bookController',
		controllerAs: 'books'
	})
	.when('/stores/:storeId/books/:bookId', {
		templateUrl: 'templates/pages/confirmation.html',
		controller: 'confirmationController',
		controllerAs: 'confirmation'
	})
	.otherwise({redirectTo:'/stores'});
});