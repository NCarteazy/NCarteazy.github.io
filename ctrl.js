angular.module('namer', [])

// inject the Todo service factory into our controller
.controller('nameController', ['$scope', function($scope) {

  $scope.date = new Date();

  $scope.name = {
    "biome": {
      tit: "Biome",
      type: "biome",
      select: "r",
      pos: "0",
      p: {
        name: "Featureless",
        type: "biome",
        abv: "Fe"
      },
      list: [{
        name: "Featureless",
        type: "biome",
        abv: "Fe"
      }, {
        name: "Desert",
        type: "biome",
        abv: "De"
      }, {
        name: "Floating Islands",
        type: "biome",
        abv: "Fi"
      }, {
        name: "Grassy Areas/Plains",
        type: "biome",
        abv: "Ga"
      }, {
        name: "Lava",
        type: "biome",
        abv: "La"
      }, {
        name: "Liquid",
        type: "biome",
        abv: "Li"
      }, {
        name: "Mountains",
        type: "biome",
        abv: "Mo"
      }, {
        name: "Pillars",
        type: "biome",
        abv: "Pi"
      }, {
        name: "Rocky",
        type: "biome",
        abv: "Ro"
      }, {
        name: "Snow/Ice",
        type: "biome",
        abv: "Si"
      }, {
        name: "Weird Stuff",
        type: "biome",
        abv: "We"
      }]
    },
    "resource": {
      tit: "Resources",
      type: "resource",
      select: "c",
      pos: "1",
      p: {
        keys: "",
        name: "None",
        type: "resource",
        abv: "zil"
      },
      list: [{
        name: "Ship",
        type: "resource",
        key: "a",
        boo: false
      }, {
        name: "Suit",
        type: "resource",
        key: "b",
        boo: false
      }, {
        name: "Multi-tool",
        type: "resource",
        key: "c",
        boo: false
      }, {
        name: "Blueprint",
        type: "resource",
        key: "d",
        boo: false
      }, {
        name: "Trading",
        type: "resource",
        key: "e",
        boo: false
      }]
    },
    "lifeform": {
      tit: "Lifeforms",
      type: "lifeform",
      select: "c",
      pos: "2",
      p: {
        key: "",
        name: "None",
        type: "lifeform",
        abv: "u"
      },
      list: [{
        name: "Plants",
        type: "lifeform",
        key: "a",
        boo: false,
        abv: "e"
      }, {
        name: "Creatures",
        type: "lifeform",
        key: "b",
        boo: false,
        abv: "i"
      }, {
        name: "NPCs",
        type: "lifeform",
        key: "c",
        boo: false,
        abv: "o"
      }]
    },
    "law": {
      tit: "Law",
      type: "law",
      select: "r",
      pos: "3",
      p: {
        name: "Lawless",
        type: "law",
        abv: "l"
      },
      list: [{
        name: "Sentinels",
        type: "law",
        abv: "s"
      }, {
        name: "Lawless",
        type: "law",
        abv: "l"
      }]
    },
    "structure": {
      tit: "Structures",
      type: "structure",
      select: "c",
      pos: "4",
      p: {
        keys: "",
        name: "None",
        type: "structure",
        abv: "no"
      },
      list: [{
        name: "Buildings",
        type: "structure",
        key: "a",
        boo: false
      }, {
        name: "Monoliths",
        type: "structure",
        key: "b",
        boo: false
      }, {
        name: "Portals",
        type: "structure",
        key: "c",
        boo: false
      }]
    },
    "climate": {
      tit: "Climate",
      type: "climate",
      select: "r",
      pos: "5",
      p: {
        name: "Safe",
        type: "climate",
        abv: "sa"
      },
      list: [{
        name: "Safe",
        type: "climate",
        abv: "sa"
      }, {
        name: "Cold",
        type: "climate",
        abv: "co"
      }, {
        name: "Heat",
        type: "climate",
        abv: "me"
      }, {
        name: "Radiation",
        type: "climate",
        abv: "ra"
      }, {
        name: "Toxic",
        type: "climate",
        abv: "to"
      }]
    },
    "direction": {
      tit: "Direction",
      type: "direction",
      select: "r",
      pos: "6",
      p: {
        name: "Going Toward Center",
        type: "direction",
        abv: "GTC"
      },
      list: [{
        name: "Going Toward Center",
        type: "direction",
        abv: "GTC"
      }, {
        name: "Going Toward Edge",
        type: "direction",
        abv: "GTE"
      }, {
        name: "Moving Laterally",
        type: "direction",
        abv: "MOL"
      }, {
        name: "Staying In Solar System",
        type: "direction",
        abv: "SIS"
      }, {
        name: "Warping",
        type: "direction",
        abv: "WAR"
      }]
    }
  };

  $scope.biomes = [{
    name: "Featureless",
    type: "biome",
    abv: "Fe"
  }, {
    name: "Desert",
    type: "biome",
    abv: "De"
  }, {
    name: "Floating Islands",
    type: "biome",
    abv: "Fi"
  }, {
    name: "Grassy Areas/Plains",
    type: "biome",
    abv: "Ga"
  }, {
    name: "Lava",
    type: "biome",
    abv: "La"
  }, {
    name: "Liquid",
    type: "biome",
    abv: "Li"
  }, {
    name: "Mountains",
    type: "biome",
    abv: "Mo"
  }, {
    name: "Pillars",
    type: "biome",
    abv: "Pi"
  }, {
    name: "Rocky",
    type: "biome",
    abv: "Ro"
  }, {
    name: "Snow/Ice",
    type: "biome",
    abv: "Si"
  }, {
    name: "Weird Stuff",
    type: "biome",
    abv: "We"
  }];

  $scope.resources = [{
    name: "Ship",
    key: "a",
    boo: false
  }, {
    name: "Suit",
    key: "b",
    boo: false
  }, {
    name: "Multi-tool",
    key: "c",
    boo: false
  }, {
    name: "Blueprint",
    key: "d",
    boo: false
  }, {
    name: "Trading",
    key: "e",
    boo: false
  }];

  $scope.resourceCombinations = [{
    keys: 'a',
    abv: 'shp',
  }, {
    keys: 'b',
    abv: 'sut',
  }, {
    keys: 'c',
    abv: 'mul',
  }, {
    keys: 'd',
    abv: 'bup',
  }, {
    keys: 'e',
    abv: 'tar',
  }, {
    keys: 'ab',
    abv: 'shs',
  }, {
    keys: 'ac',
    abv: 'shm',
  }, {
    keys: 'ad',
    abv: 'sht',
  }, {
    keys: 'ae',
    abv: 'shb',
  }, {
    keys: 'bc',
    abv: 'sum',
  }, {
    keys: 'bd',
    abv: 'str',
  }, {
    keys: 'be',
    abv: 'sub',
  }, {
    keys: 'cd',
    abv: 'mbl',
  }, {
    keys: 'ce',
    abv: 'mtr',
  }, {
    keys: 'de',
    abv: 'btr',
  }, {
    keys: 'abce',
    abv: 'nth',
  }, {
    keys: 'abcde',
    abv: 'bth',
  }];

  $scope.lifeforms = [{
    name: "Plants",
    key: "a",
    boo: false,
    abv: "e"
  }, {
    name: "Creatures",
    key: "b",
    boo: false,
    abv: "i"
  }, {
    name: "NPCs",
    key: "c",
    boo: false,
    abv: "o"
  }];

  $scope.sent = {
    name: "Sentinels",
    abv: "s"
  };

  $scope.lawless = {
    name: "Lawless",
    abv: "l"
  };

  $scope.structures = [{
    name: "Buildings",
    key: "a",
    boo: false
  }, {
    name: "Monoliths",
    key: "b",
    boo: false
  }, {
    name: "Portals",
    key: "c",
    boo: false
  }];

  $scope.structureCombinations = [{
    keys: 'a',
    abv: 'bu',
  }, {
    keys: 'b',
    abv: 'mo',
  }, {
    keys: 'c',
    abv: 'po',
  }, {
    keys: 'ab',
    abv: 'ma',
  }, {
    keys: 'ac',
    abv: 'mu',
  }, {
    keys: 'bc',
    abv: 'po',
  }, {
    keys: 'abc',
    abv: 'sa',
  }, {
    keys: '',
    abv: 'no',
  }];

  $scope.climates = [{
    name: "Safe",
    type: "climate",
    abv: "sa"
  }, {
    name: "Cold",
    type: "climate",
    abv: "co"
  }, {
    name: "Heat",
    type: "climate",
    abv: "me"
  }, {
    name: "Radiation",
    type: "climate",
    abv: "ra"
  }, {
    name: "Toxic",
    type: "climate",
    abv: "to"
  }];

  $scope.directions = [{
    name: "Going Toward Center",
    type: "direction",
    abv: "GTC"
  }, {
    name: "Going Toward Edge",
    type: "direction",
    abv: "GTE"
  }, {
    name: "Moving Laterally",
    type: "direction",
    abv: "MOL"
  }, {
    name: "Staying In Solar System",
    type: "direction",
    abv: "SIS"
  }, {
    name: "Warping",
    type: "direction",
    abv: "WAR"
  }];

  $scope.changer = function(target, missile, t) {
    console.log(missile.name + " heads towards " + target);

    for (var resource in $scope.name) {
      if ($scope.name[resource].type === target) {
        if (t === "r") {
          $scope.name[resource].p = missile;
          console.log("missile reached");
          break;
        } else {
          $scope.name[resource].p.keys = "";
          $scope.name[resource].p.name = "";
          for (var choice in $scope.name[resource].list) {
            $scope.name[resource].list[choice].boo = !$scope.name[resource].list[choice].boo;
            if ($scope.name[resource].list[choice].boo) {
              if (!$scope.name[resource].p.keys) {
                $scope.name[resource].p.keys = $scope.name[resource].list[choice].key;
                $scope.name[resource].p.name = $scope.name[resource].list[choice].name;
              } else {
                $scope.name[resource].p.keys = $scope.name[resource].p.keys + $scope.name[resource].list[choice].key;
                $scope.name[resource].p.name = $scope.name[resource].p.name + "/" + $scope.name[resource].list[choice].name;
              }
            }
          }
          $scope.$digest();
        }
      }
    }
  };

  $scope.$watch('name.structure.p.keys', function(oldValue, newValue) {
    console.log("sup");
  });

  $scope.lister = function(type) {
    console.log(type);
    var idlist = document.getElementsByClassName(type);
    for(var ele in idlist) {
      console.log(idlist[ele].innerHTML);
      if(idlist[ele].classList.contains("hidden")){
        idlist[ele].classList.remove("hidden");
      }
      else{
        idlist[ele].classList.add("hidden");
      }
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