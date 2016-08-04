angular.module('namer', [])

// inject the Todo service factory into our controller
.controller('nameController', ['$scope', 'filterFilter', function($scope, filterFilter) {
	
	$scope.name = {
			"p2keys":"",
			"p2names":"",
			"p2abv":"hog"
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
			"boo" : false
		},
		{
			"name" : "Suit",
			"key" : "b",
			"boo" : false
		},
		{
			"name" : "Multi-tool",
			"key" : "c",
			"boo" : false
		},
		{
			"name" : "Blueprint",
			"key" : "d",
			"boo" : false
		},
		{
			"name" : "Trading",
			"key" : "e",
			"boo" : false
		}
	];

	$scope.resourceCombinations = [
		{
			"keys" : 'a',
			"abv" : 'shp',
		},
		{
			"keys" : 'b',
			"abv" : 'sut',
		},
		{
			"keys" : 'c',
			"abv" : 'mul',
		},
		{
			"keys" : 'd',
			"abv" : 'bup',
		},
		{
			"keys" : 'e',
			"abv" : 'tar',
		},
		{
			"keys" : 'ab',
			"abv" : 'shs',
		},
		{
			"keys" : 'ac',
			"abv" : 'shm',
		},
		{
			"keys" : 'ad',
			"abv" : 'sht',
		},
		{
			"keys" : 'ae',
			"abv" : 'shb',
		},
		{
			"keys" : 'bc',
			"abv" : 'sum',
		},
		{
			"keys" : 'bd',
			"abv" : 'str',
		},
		{
			"keys" : 'be',
			"abv" : 'sub',
		},
		{
			"keys" : 'cd',
			"abv" : 'mbl',
		},
		{
			"keys" : 'ce',
			"abv" : 'mtr',
		},
		{
			"keys" : 'de',
			"abv" : 'btr',
		},
		{
			"keys" : 'abce',
			"abv" : 'nth',
		},
		{
			"keys" : 'abcde',
			"abv" : 'bth',
		}
	];


	$scope.resourceChange = function(){
		$scope.name.p2keys = ""
		$scope.name.p2names = ""
		for (var resource in $scope.resources) {
			if($scope.resources[resource].boo) {
				if(!$scope.name.p2keys) {
					$scope.name.p2keys = $scope.resources[resource].key
					$scope.name.p2names = $scope.resources[resource].name
				}
				else {
					$scope.name.p2keys = $scope.name.p2keys + $scope.resources[resource].key
					$scope.name.p2names = $scope.name.p2names + "/" + $scope.resources[resource].name
				}
			};
		};
		for (var resourceCombination in $scope.resourceCombinations) {
			if($scope.resourceCombinations[resourceCombination].keys === $scope.p2keys) {
				$scope.name.p2abv = $scope.resourceCombinations[resourceCombination].abv
			}
			else if ($scope.resourceCombinations[resourceCombination].keys.length >= 3) {
				if($scope.resourceCombinations[resourceCombination].keys.indexOf('d') != -1) {
					$scope.name.p2abv = 'nth'
				}
				else {
					$scope.name.p2abv = 'bth'
				};
			};
		};
	}
}]);