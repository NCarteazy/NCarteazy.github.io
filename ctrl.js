angular.module('namer', [])

// inject the Todo service factory into our controller
.controller('nameController', ['$scope', function($scope) {

  $scope.date = new Date();

  $scope.name = {
    "cap1": {
      "tit": "Biome",
      "p": {
        "name": "Featureless",
        "abv": "Fe"
      }
    },
    "cap2": {
      "tit": "Resources",
      "p": {
        "keys": "",
        "name": "None",
        "abv": "zil"
      }
    },
    "cap3": {
      "tit": "Lifeforms",
      "p": {
        "key": "",
        "name": "None",
        "abv": "u"
      }
    },
    "cap4": {
      "tit": "Law",
      "p": {
        "name": "Lawless",
        "abv": "l"
      }
    },
    "cap5": {
      "tit": "Structures",
      "p": {
        "keys": "",
        "name": "None",
        "abv": "no"
      }
    },
    "cap6": {
      "tit": "Climate",
      "p": {
        "name": "Safe",
        "abv": "sa"
      }
    },
    "cap7": {
      "tit": "Direction",
      "p": {
        "name": "Going Toward Center",
        "abv": "GTC"
      }
    }
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
  };

  $scope.lawless = {
    "name": "Lawless",
    "abv": "l"
  };

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
    if ($scope.name.cap4.p.abv === "l") {
      $scope.name.cap4.p = $scope.sent;
    } else {
      $scope.name.cap4.p = $scope.lawless;
    };
  };

  $scope.resourceChange = function() {
    $scope.name.cap2.p.keys = ""
    $scope.name.cap2.p.name = ""
    for (var resource in $scope.resources) {
      if ($scope.resources[resource].boo) {
        if (!$scope.name.cap2.p.keys) {
          $scope.name.cap2.p.keys = $scope.resources[resource].key
          $scope.name.cap2.p.name = $scope.resources[resource].name
        } else {
          $scope.name.cap2.p.keys = $scope.name.cap2.p.keys + $scope.resources[resource].key
          $scope.name.cap2.p.name = $scope.name.cap2.p.name + "/" + $scope.resources[resource].name
        }
      };
    };
    for (var resourceCombination in $scope.resourceCombinations) {
      $scope.name.cap2.p.abv = ""
      if ($scope.resourceCombinations[resourceCombination].keys === $scope.name.cap2.p.keys) {
        $scope.name.cap2.p.abv = $scope.resourceCombinations[resourceCombination].abv
        break;
      } else if ($scope.name.cap2.p.keys.length >= 3) {
        if ($scope.name.cap2.p.keys.indexOf('d') == -1) {
          $scope.name.cap2.p.abv = 'nth'
          break;
        } else {
          $scope.name.cap2.p.abv = 'bth'
          break;
        };
      } else if ($scope.name.cap2.p.keys == 0) {
        $scope.name.cap2.p.name = "None"
        $scope.name.cap2.p.abv = 'zil'
        break;
      };
    };
  };

  $scope.lifeformChange = function() {
    $scope.name.cap3.p.key = ""
    $scope.name.cap3.p.name = ""
    for (var lifeform in $scope.lifeforms) {
      if ($scope.lifeforms[lifeform].boo) {
        if (!$scope.name.cap3.p.key) {
          $scope.name.cap3.p.key = $scope.lifeforms[lifeform].key
          $scope.name.cap3.p.name = $scope.lifeforms[lifeform].name
        } else {
          $scope.name.cap3.p.key = $scope.name.cap3.p.key + $scope.lifeforms[lifeform].key
          $scope.name.cap3.p.name = $scope.name.cap3.p.name + "/" + $scope.lifeforms[lifeform].name
        }
      };
    };
    for (var lifeform in $scope.lifeforms) {
      $scope.name.cap3.p.abv = ""
      if ($scope.lifeforms[lifeform].key === $scope.name.cap3.p.key) {
        $scope.name.cap3.p.abv = $scope.lifeforms[lifeform].abv
        break;
      } else if ($scope.name.cap3.p.key.length >= 2) {
        $scope.name.cap3.p.abv = 'a'
        break;
      } else if ($scope.name.cap3.p.key == 0) {
        $scope.name.cap3.p.name = "None"
        $scope.name.cap3.p.abv = 'u'
        break;
      };
    };
  };

  $scope.structureChange = function() {
    $scope.name.cap5.p.keys = ""
    $scope.name.cap5.p.name = ""
    for (var structure in $scope.structures) {
      if ($scope.structures[structure].boo) {
        if (!$scope.name.cap5.p.keys) {
          $scope.name.cap5.p.keys = $scope.structures[structure].key
          $scope.name.cap5.p.name = $scope.structures[structure].name
        } else {
          $scope.name.cap5.p.keys = $scope.name.cap5.p.keys + $scope.structures[structure].key
          $scope.name.cap5.p.name = $scope.name.cap5.p.name + "/" + $scope.structures[structure].name
        }
      };
    };
    for (var structureCombination in $scope.structureCombinations) {
      $scope.name.cap5.p.abv = ""
      if ($scope.structureCombinations[structureCombination].keys === $scope.name.cap5.p.keys) {
        $scope.name.cap5.p.abv = $scope.structureCombinations[structureCombination].abv
        break;
      }
    };
  };

}])

.directive('nameBox', function() {
  return {
    restrict: 'E',
    templateUrl: "name-box.html"
  }
})

.directive('myChoices', function() {
  return {
    restrict: 'E',
    templateUrl: "my-choices.html"
  }
})

.directive('pickChoice', function() {
  return {
    templateUrl: function(elem, attr) {
      return attr.type + '-choice.html';
    }
  }
});


function lister() {
  document.getElementById("biome").classList.add("hidden");
}