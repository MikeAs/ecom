angular.module("ecomWebsite")
.filter("range", function() {
	return function(input, range, fromZero) {
		range = parseInt(range);

		for(var i = 0; i < range; i ++) {
			input.push(i);
		}

		if(fromZero)
			input.push(i);

		return input;
	}
})