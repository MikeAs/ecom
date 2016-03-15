angular.module('ecomWebsite')
.directive("titleDisplay", function() {
	return {
		restrict: "E",
		templateUrl: "templates/views/titleView.html",
		controller: function($scope) {
			this.isPage = function(pageId) {
				return $scope.pageId === pageId;
			}
		},
		controllerAs: "title"
	}
});