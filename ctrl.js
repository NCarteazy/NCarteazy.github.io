angular.module('namer', [])

// inject the Todo service factory into our controller
.controller('nameController', ['$scope', function($scope) {
	
	$scope.pre = "dog";
	
	$scope.biomes = [
		{
			"name":"Desert",
			"abv":"De"
		},
		{
			"name":"Featureless",
			"abv":"Fe"
		},
		{
			"name":"Floating Islands",
			"abv":"Fi"
		},
		{
			"name":"Grassy Areas/Plains",
			"abv":"Ga"
		},
		{
			"name":"Lava",
			"abv":"La"
		},
		{
			"name":"Liquid",
			"abv":"Li"
		},
		{
			"name":"Mountains",
			"abv":"Mo"
		},
		{
			"name":"Pillars",
			"abv":"Pi"
		},
		{
			"name":"Rocky",
			"abv":"Ro"
		},
		{
			"name":"Snow/Ice",
			"abv":"Si"
		},
		{
			"name":"Weird Stuff",
			"abv":"We"
		}
		];
}]);