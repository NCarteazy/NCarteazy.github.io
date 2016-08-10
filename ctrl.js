angular.module('namer', [])

// inject the Todo service factory into our controller
.controller('nameController', ['$scope', function($scope) {

  $scope.date = new Date();

  $scope.name = {
    "biome": {
      "tit": "Biome",
      "type": "biome",
      "p": {
        "name": "Featureless",
        "abv": "Fe"
      }
    },
    "resource": {
      "tit": "Resources",
      "type": "resource",
      "p": {
        "keys": "",
        "name": "None",
        "abv": "zil"
      }
    },
    "lifeform": {
      "tit": "Lifeforms",
      "type": "lifeform",
      "p": {
        "key": "",
        "name": "None",
        "abv": "u"
      }
    },
    "law": {
      "tit": "Law",
      "type": "law",
      "p": {
        "name": "Lawless",
        "abv": "l"
      }
    },
    "structure": {
      "tit": "Structures",
      "type": "structure",
      "p": {
        "keys": "",
        "name": "None",
        "abv": "no"
      }
    },
    "climate": {
      "tit": "Climate",
      "type": "climate",
      "p": {
        "name": "Safe",
        "abv": "sa"
      }
    },
    "direction": {
      "tit": "Direction",
      "type": "direction",
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
    "type": "direction",
    "abv": "GTC"
  }, {
    "name": "Going Toward Edge",
    "type": "direction",
    "abv": "GTE"
  }, {
    "name": "Moving Laterally",
    "type": "direction",
    "abv": "MOL"
  }, {
    "name": "Staying In Solar System",
    "type": "direction",
    "abv": "SIS"
  }, {
    "name": "Warping",
    "type": "direction",
    "abv": "WAR"
  }];

  $scope.changer = function(target, missile) {
    console.log(missile.name + " heads towards " + target);
    for (var resource in $scope.name) {
      if(resource.type === target)
        {
          resource.p = missile;
          console.log("missile reached");
        }
      }
  };

  $scope.lister = function(type) {
  console.log(type);
  var dList = document.getElementById(type).classList;
  if(dList.contains("hidden")) {
    dList.remove("hidden");
  }
  else {
    dList.add("hidden");
  }
  };

  $scope.lawChange = function() {
    if ($scope.name.law.p.abv === "l") {
      $scope.name.law.p = $scope.sent;
    } else {
      $scope.name.law.p = $scope.lawless;
    }
  };

  $scope.resourceChange = function() {
    $scope.name.resource.p.keys = "";
    $scope.name.resource.p.name = "";
    for (var resource in $scope.resources) {
      if ($scope.resources[resource].boo) {
        if (!$scope.name.resource.p.keys) {
          $scope.name.resource.p.keys = $scope.resources[resource].key;
          $scope.name.resource.p.name = $scope.resources[resource].name;
        } else {
          $scope.name.resource.p.keys = $scope.name.resource.p.keys + $scope.resources[resource].key;
          $scope.name.resource.p.name = $scope.name.resource.p.name + "/" + $scope.resources[resource].name;
        }
      }
    }
    for (var resourceCombination in $scope.resourceCombinations) {
      $scope.name.resource.p.abv = "";
      if ($scope.resourceCombinations[resourceCombination].keys === $scope.name.resource.p.keys) {
        $scope.name.resource.p.abv = $scope.resourceCombinations[resourceCombination].abv;
        break;
      } else if ($scope.name.resource.p.keys.length >= 3) {
        if ($scope.name.resource.p.keys.indexOf('d') == -1) {
          $scope.name.resource.p.abv = 'nth';
          break;
        } else {
          $scope.name.resource.p.abv = 'bth';
          break;
        }
      } else if ($scope.name.resource.p.keys === 0) {
        $scope.name.resource.p.name = "None";
        $scope.name.resource.p.abv = 'zil';
        break;
      }
    }
  };

  $scope.lifeformChange = function() {
    $scope.name.lifeform.p.key = "";
    $scope.name.lifeform.p.name = "";
    for (var lf in $scope.lifeforms) {
      if ($scope.lifeforms[lf].boo) {
        if (!$scope.name.lifeform.p.key) {
          $scope.name.lifeform.p.key = $scope.lifeforms[lf].key;
          $scope.name.lifeform.p.name = $scope.lifeforms[lf].name;
        } else {
          $scope.name.lifeform.p.key = $scope.name.lifeform.p.key + $scope.lifeforms[lf].key;
          $scope.name.lifeform.p.name = $scope.name.lifeform.p.name + "/" + $scope.lifeforms[lf].name;
        }
      }
    }
    for (var lf2 in $scope.lifeforms) {
      $scope.name.lifeform.p.abv = "";
      if ($scope.lifeforms[lf2].key === $scope.name.lifeform.p.key) {
        $scope.name.lifeform.p.abv = $scope.lifeforms[lf2].abv;
        break;
      } else if ($scope.name.lifeform.p.key.length >= 2) {
        $scope.name.lifeform.p.abv = 'a';
        break;
      } else if ($scope.name.lifeform.p.key === 0) {
        $scope.name.lifeform.p.name = "None";
        $scope.name.lifeform.p.abv = 'u';
        break;
      }
    }
  };

  $scope.structureChange = function() {
    $scope.name.structure.p.keys = "";
    $scope.name.structure.p.name = "";
    for (var structure in $scope.structures) {
      if ($scope.structures[structure].boo) {
        if (!$scope.name.structure.p.keys) {
          $scope.name.structure.p.keys = $scope.structures[structure].key;
          $scope.name.structure.p.name = $scope.structures[structure].name;
        } else {
          $scope.name.structure.p.keys = $scope.name.structure.p.keys + $scope.structures[structure].key;
          $scope.name.structure.p.name = $scope.name.structure.p.name + "/" + $scope.structures[structure].name;
        }
      }
    }
    for (var structureCombination in $scope.structureCombinations) {
      $scope.name.structure.p.abv = "";
      if ($scope.structureCombinations[structureCombination].keys === $scope.name.structure.p.keys) {
        $scope.name.structure.p.abv = $scope.structureCombinations[structureCombination].abv;
        break;
      }
    }
  };

}])

.directive('nameBox', function() {
  return {
    restrict: 'E',
    templateUrl: "name-box.html"
  };
})

.directive('myChoices', function() {
  return {
    restrict: 'E',
    templateUrl: "my-choices.html"
  };
})

.directive('pickChoice', function() {
  return {
    templateUrl: function(elem, attr) {
      return attr.type + '-choice.html';
    }
  };
});
