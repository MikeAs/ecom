angular.module('ecomWebsite')
.directive('titleDisplay', function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<h1 class="col-xs-12">{{pageTitle}}</h1>'
	}
});