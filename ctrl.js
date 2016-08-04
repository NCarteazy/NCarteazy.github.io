angular.module('namer', [])

// inject the Todo service factory into our controller
.controller('nameController', ['$scope', 'filterFilter', function($scope, filterFilter) {
	
	$scope.name = {
			"pre":"dog"
			};

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

	$scope.resources = [
		{
			"name" : "Ship",
			"key" : "a",
			"boo" : 'false'
		},
		{
			"name" : "Suit",
			"key" : "b",
			"boo" : 'false'
		},
		{
			"name" : "Multi-tool",
			"key" : "c",
			"boo" : 'false'
		},
		{
			"name" : "Blueprint",
			"key" : "d",
			"boo" : 'false'
		},
		{
			"name" : "Trading",
			"key" : "e",
			"boo" : 'false'
		}
	];

	$scope.selectedResources = function selectedResources() {
		return filterFilter($scope.resources, {boo:true});
	};

	$scope.$watch('resource.boo|filter:{boo:true}', function () {
		$scope.p2 = resource.key;
	}, true);

}]);