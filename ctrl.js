angular.module('namer', [])

// inject the Todo service factory into our controller
.controller('nameController', ['$scope', function($scope) {

  $scope.date = new Date();
                     
  $scope.styleOne = {'color':'white', 'background-color': '#761A2D', 'border-radius': '3px'};
  $scope.styleTwo = {'background-color': 'initial'};

  $scope.name = {
    "p0": {
      tit: "Biome",
      persistentType: false,
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
    "p1": {
      tit: "Resources",
      persistentType: false,
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
    "p2": {
      tit: "Lifeforms",
      persistentType: false,
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
    "p3": {
      tit: "Law",
      persistentType: false,
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
    "p4": {
      tit: "Structures",
      persistentType: false,
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
    "p5": {
      tit: "Climate",
      persistentType: false,
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
    "p6": {
      tit: "Direction",
      persistentType: false,
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
  $scope.lifeforms = [{
    "name": "Plants",
    "keys": "a",
    "boo": false,
    "abv": "e"
  }, {
    "name": "Creatures",
    "keys": "b",
    "boo": false,
    "abv": "i"
  }, {
    "name": "NPCs",
    "keys": "c",
    "boo": false,
    "abv": "o"
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
  }, {
    keys: '',
    abv: 'zil',
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

  $scope.changer = function(target, missile, t) {
    for (var resource in $scope.name) {
      if ($scope.name[resource].type === target) {
        if (t === "r") {
          $scope.name[resource].p = missile;
          break;
        } else {
          $scope.name[resource].p.keys = "";
          $scope.name[resource].p.name = "None";
          for (var choice in $scope.name[resource].list) {
            if ($scope.name[resource].list[choice].name === missile.name) {
              $scope.name[resource].list[choice].boo = !$scope.name[resource].list[choice].boo;
            }
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
        }
      }
    }
  };

  $scope.$watch('name.p4.p.keys', function(newValue, oldValue) {
    for (var structureCombination in $scope.structureCombinations) {
      $scope.name.p4.p.abv = "";
      if ($scope.structureCombinations[structureCombination].keys === $scope.name.p4.p.keys) {
        $scope.name.p4.p.abv = $scope.structureCombinations[structureCombination].abv;
        break;
      }
    }
  });

  $scope.$watch('name.p1.p.keys', function(newValue, oldValue) {
    for (var resourceCombination in $scope.resourceCombinations) {
      $scope.name.p1.p.abv = "";
      if ($scope.name.p1.p.keys === 0) {
        $scope.name.p1.p.name = "None";
        $scope.name.p1.p.abv = 'zil';
        break;
      } else if ($scope.resourceCombinations[resourceCombination].keys === $scope.name.p1.p.keys) {
        $scope.name.p1.p.abv = $scope.resourceCombinations[resourceCombination].abv;
        break;
      } else if ($scope.name.p1.p.keys && $scope.name.p1.p.keys.length >= 3) {
        if ($scope.name.p1.p.keys.indexOf('d') == -1) {
          $scope.name.p1.p.abv = 'nth';
          break;
        } else {
          $scope.name.p1.p.abv = 'bth';
          break;
        }
      }
    }
  });

  $scope.$watch('name.p2.p.keys', function(newValue, oldValue) {
    for (var lf2 in $scope.lifeforms) {
      $scope.name.p2.p.abv = "";
      if ($scope.name.p2.p.keys === "") {
        $scope.name.p2.p.name = "None";
        $scope.name.p2.p.abv = 'u';
        break;
      } else if ($scope.lifeforms[lf2].keys === $scope.name.p2.p.keys) {
        $scope.name.p2.p.abv = $scope.lifeforms[lf2].abv;
        break;
      } else if ($scope.name.p2.p.keys && $scope.name.p2.p.keys.length >= 2) {
        $scope.name.p2.p.abv = 'a';
        break;
      }
    }
  });

  $scope.lister = function(type) {
    var idlist = document.getElementsByClassName(type);
    for (var ele in idlist) {
      if (idlist[ele].classList) {
        if (idlist[ele].classList.contains("hidden")) {
          idlist[ele].classList.remove("hidden");
        } else {
          idlist[ele].classList.add("hidden");
        }
      }
    }
  };


  $scope.moder = function() {
    BootstrapDialog.show({
            title: 'No Man\'s Sky Planet Namer',
            message: 'To use, click on one of the categories and then select whatever fits your planet. In some cases, multiple can be selected. The planet names are based off of this encoder: <img src="https://i.redd.it/pfanhavkwvcx.jpg">. Written by <a href="https://github.com/NCarteazy/NCarteazy.github.io">Nicholas Carter</a>',
            cssClass: 'posmodal',
            closable: true
        });
  }

  $scope.highlightType = function(resource, showColor) {
      resource.persistentType = showColor;
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
