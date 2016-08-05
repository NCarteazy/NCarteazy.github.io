angular.module('namer', [])

// inject the Todo service factory into our controller
.controller('nameController', ['$scope', 'filterFilter', function($scope, filterFilter) {

  $scope.date = new Date();

  $scope.name = {
    "p1": {
      "name": "Featureless",
      "abv": "Fe"
    },
    "p2": {
      "keys": "",
      "name": "None",
      "abv": "zil"
    },
    "p3": {
      "key": "",
      "name": "None",
      "abv": "u"
    },
    "p4": {
      "name": "Lawless",
      "abv": "l"
    },
    "p5": {
      "keys": "",
      "name": "None",
      "abv": "no"
    },
    "p6": {
      "name": "Safe",
      "abv": "sa"
    },
    "p7": {
      "name": "Going Toward Center",
      "abv": "GTC"
    }
  };

	$scope.titles = {
  	"p1t": {
    	"tit": "Biome",
      "nameObject": $scope.name.p1.name
    },
    "p2t": {
    	"tit": "Resources",
      "nameObject": $scope.name.p2.name
    },
    "p3t": {
    	"tit": "Lifeforms",
      "nameObject": $scope.name.p3.name
    },
    "p4t": {
    	"tit": "Law",
      "nameObject": $scope.name.p4.name
    },
    "p5t": {
    	"tit": "Structures",
      "nameObject": $scope.name.p5.name
    },
    "p6t": {
    	"tit": "Climate",
      "nameObject": $scope.name.p6.name
    },
    "p7t": {
    	"tit": "Direction",
      "nameObject": $scope.name.p7.name
    },
  };

  $scope.biomes = [{
    "name": "Featureless",
    "abv": "Fe"
  }, {
    "name": "Desert",
    "abv": "De"
  }, {
    "name": "Floating Islands",
    "abv": "Fi"
  }, {
    "name": "Grassy Areas/Plains",
    "abv": "Ga"
  }, {
    "name": "Lava",
    "abv": "La"
  }, {
    "name": "Liquid",
    "abv": "Li"
  }, {
    "name": "Mountains",
    "abv": "Mo"
  }, {
    "name": "Pillars",
    "abv": "Pi"
  }, {
    "name": "Rocky",
    "abv": "Ro"
  }, {
    "name": "Snow/Ice",
    "abv": "Si"
  }, {
    "name": "Weird Stuff",
    "abv": "We"
  }];

  $scope.resources = [{
    "name": "Ship",
    "key": "a",
    "boo": false
  }, {
    "name": "Suit",
    "key": "b",
    "boo": false
  }, {
    "name": "Multi-tool",
    "key": "c",
    "boo": false
  }, {
    "name": "Blueprint",
    "key": "d",
    "boo": false
  }, {
    "name": "Trading",
    "key": "e",
    "boo": false
  }];

  $scope.resourceCombinations = [{
    "keys": 'a',
    "abv": 'shp',
  }, {
    "keys": 'b',
    "abv": 'sut',
  }, {
    "keys": 'c',
    "abv": 'mul',
  }, {
    "keys": 'd',
    "abv": 'bup',
  }, {
    "keys": 'e',
    "abv": 'tar',
  }, {
    "keys": 'ab',
    "abv": 'shs',
  }, {
    "keys": 'ac',
    "abv": 'shm',
  }, {
    "keys": 'ad',
    "abv": 'sht',
  }, {
    "keys": 'ae',
    "abv": 'shb',
  }, {
    "keys": 'bc',
    "abv": 'sum',
  }, {
    "keys": 'bd',
    "abv": 'str',
  }, {
    "keys": 'be',
    "abv": 'sub',
  }, {
    "keys": 'cd',
    "abv": 'mbl',
  }, {
    "keys": 'ce',
    "abv": 'mtr',
  }, {
    "keys": 'de',
    "abv": 'btr',
  }, {
    "keys": 'abce',
    "abv": 'nth',
  }, {
    "keys": 'abcde',
    "abv": 'bth',
  }];

  $scope.lifeforms = [{
    "name": "Plants",
    "key": "a",
    "boo": false,
    "abv": "e"
  }, {
    "name": "Creatures",
    "key": "b",
    "boo": false,
    "abv": "i"
  }, {
    "name": "NPCs",
    "key": "c",
    "boo": false,
    "abv": "o"
  }];

  $scope.sent = {
    "name": "Sentinels",
    "abv": "s"
  }
  $scope.lawless = {
    "name": "Lawless",
    "abv": "l"
  }

  $scope.structures = [{
    "name": "Buildings",
    "key": "a",
    "boo": false
  }, {
    "name": "Monoliths",
    "key": "b",
    "boo": false
  }, {
    "name": "Portals",
    "key": "c",
    "boo": false
  }];

  $scope.structureCombinations = [{
    "keys": 'a',
    "abv": 'bu',
  }, {
    "keys": 'b',
    "abv": 'mo',
  }, {
    "keys": 'c',
    "abv": 'po',
  }, {
    "keys": 'ab',
    "abv": 'ma',
  }, {
    "keys": 'ac',
    "abv": 'mu',
  }, {
    "keys": 'bc',
    "abv": 'po',
  }, {
    "keys": 'abc',
    "abv": 'sa',
  }, {
    "keys": '',
    "abv": 'no',
  }];

  $scope.climates = [{
    "name": "Safe",
    "abv": "sa"
  }, {
    "name": "Cold",
    "abv": "co"
  }, {
    "name": "Heat",
    "abv": "me"
  }, {
    "name": "Radiation",
    "abv": "ra"
  }, {
    "name": "Toxic",
    "abv": "to"
  }];

  $scope.directions = [{
    "name": "Going Toward Center",
    "abv": "GTC"
  }, {
    "name": "Going Toward Edge",
    "abv": "GTE"
  }, {
    "name": "Moving Laterally",
    "abv": "MOL"
  }, {
    "name": "Staying In Solar System",
    "abv": "SIS"
  }, {
    "name": "Warping",
    "abv": "WAR"
  }];

  $scope.lawChange = function() {
    if ($scope.name.p4.abv === "l") {
      $scope.name.p4 = $scope.sent
    } else {
      $scope.name.p4 = $scope.lawless
    }
  }

  $scope.resourceChange = function() {
    $scope.name.p2.keys = ""
    $scope.name.p2.name = ""
    for (var resource in $scope.resources) {
      if ($scope.resources[resource].boo) {
        if (!$scope.name.p2.keys) {
          $scope.name.p2.keys = $scope.resources[resource].key
          $scope.name.p2.name = $scope.resources[resource].name
        } else {
          $scope.name.p2.keys = $scope.name.p2.keys + $scope.resources[resource].key
          $scope.name.p2.name = $scope.name.p2.name + "/" + $scope.resources[resource].name
        }
      };
    };
    for (var resourceCombination in $scope.resourceCombinations) {
      $scope.name.p2.abv = ""
      if ($scope.resourceCombinations[resourceCombination].keys === $scope.name.p2.keys) {
        $scope.name.p2.abv = $scope.resourceCombinations[resourceCombination].abv
        break;
      } else if ($scope.name.p2.keys.length >= 3) {
        if ($scope.name.p2.keys.indexOf('d') == -1) {
          $scope.name.p2.abv = 'nth'
          break;
        } else {
          $scope.name.p2.abv = 'bth'
          break;
        };
      } else if ($scope.name.p2.keys == 0) {
        $scope.name.p2.name = "None"
        $scope.name.p2.abv = 'zil'
        break;
      };
    };
  };

  $scope.lifeformChange = function() {
    $scope.name.p3.key = ""
    $scope.name.p3.name = ""
    for (var lifeform in $scope.lifeforms) {
      if ($scope.lifeforms[lifeform].boo) {
        if (!$scope.name.p3.key) {
          $scope.name.p3.key = $scope.lifeforms[lifeform].key
          $scope.name.p3.name = $scope.lifeforms[lifeform].name
        } else {
          $scope.name.p3.key = $scope.name.p3.key + $scope.lifeforms[lifeform].key
          $scope.name.p3.name = $scope.name.p3.name + "/" + $scope.lifeforms[lifeform].name
        }
      };
    };
    for (var lifeform in $scope.lifeforms) {
      $scope.name.p3.abv = ""
      if ($scope.lifeforms[lifeform].key === $scope.name.p3.key) {
        $scope.name.p3.abv = $scope.lifeforms[lifeform].abv
        break;
      } else if ($scope.name.p3.key.length >= 2) {
        $scope.name.p3.abv = 'a'
        break;
      } else if ($scope.name.p3.key == 0) {
        $scope.name.p3.name = "None"
        $scope.name.p3.abv = 'u'
        break;
      };
    };
  };

  $scope.structureChange = function() {
    $scope.name.p5.keys = ""
    $scope.name.p5.name = ""
    for (var structure in $scope.structures) {
      if ($scope.structures[structure].boo) {
        if (!$scope.name.p5.keys) {
          $scope.name.p5.keys = $scope.structures[structure].key
          $scope.name.p5.name = $scope.structures[structure].name
        } else {
          $scope.name.p5.keys = $scope.name.p5.keys + $scope.structures[structure].key
          $scope.name.p5.name = $scope.name.p5.name + "/" + $scope.structures[structure].name
        }
      };
    };
    for (var structureCombination in $scope.structureCombinations) {
      $scope.name.p5.abv = ""
      if ($scope.structureCombinations[structureCombination].keys === $scope.name.p5.keys) {
        $scope.name.p5.abv = $scope.structureCombinations[structureCombination].abv
        break;
      }
    };
  };
  
}])

  .directive('myChoices', function() {
  	return {
    	restrict: 'E',
    	templateUrl: "my-choices.html"
      }
    });