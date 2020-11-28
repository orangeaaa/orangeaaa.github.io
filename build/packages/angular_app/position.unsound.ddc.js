define(['dart_sdk', 'packages/tuple/tuple'], (function load__packages__angular_app__position(dart_sdk, packages__tuple__tuple) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tuple = packages__tuple__tuple.tuple;
  var position = Object.create(dart.library);
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var Tuple2OfintL$intL = () => (Tuple2OfintL$intL = dart.constFn(tuple.Tuple2$(intL(), intL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_app/position.dart";
  position.Position = class Position extends core.Object {
    static locationOnBoard(position) {
      let rowPixel = position.item1;
      let columnPixel = position.item2;
      if (dart.dtest(dart.dsend(rowPixel, '<', [30])) || dart.dtest(dart.dsend(columnPixel, '<', [10])) || dart.dtest(dart.dsend(rowPixel, '>', [470])) || dart.dtest(dart.dsend(columnPixel, '>', [500]))) {
        return null;
      }
      let xAxisDestination = 50;
      let yAxisDestination = 30;
      if (dart.dtest(dart.dsend(rowPixel, '>', [80]))) {
        let pixelVariation = dart.dsend(dart.dsend(rowPixel, '-', [50]), '%', [50]);
        if (dart.dtest(dart.dsend(pixelVariation, '<', [20]))) {
          xAxisDestination = intL().as(dart.dsend(rowPixel, '-', [pixelVariation]));
        } else if (dart.dtest(dart.dsend(pixelVariation, '>', [30]))) {
          xAxisDestination = intL().as(dart.dsend(dart.dsend(rowPixel, '-', [pixelVariation]), '+', [50]));
        } else {
          return null;
        }
      }
      if (dart.dtest(dart.dsend(columnPixel, '>', [60]))) {
        let pixelVariation = dart.dsend(dart.dsend(columnPixel, '-', [30]), '%', [50]);
        if (dart.dtest(dart.dsend(pixelVariation, '<', [20]))) {
          yAxisDestination = intL().as(dart.dsend(columnPixel, '-', [pixelVariation]));
        } else if (dart.dtest(dart.dsend(pixelVariation, '>', [30]))) {
          yAxisDestination = intL().as(dart.dsend(dart.dsend(columnPixel, '-', [pixelVariation]), '+', [50]));
        } else {
          return null;
        }
      }
      return new (Tuple2OfintL$intL()).new(xAxisDestination, yAxisDestination);
    }
  };
  (position.Position.new = function() {
    ;
  }).prototype = position.Position.prototype;
  dart.addTypeTests(position.Position);
  dart.addTypeCaches(position.Position);
  dart.setLibraryUri(position.Position, L0);
  dart.trackLibraries("packages/angular_app/position", {
    "package:angular_app/position.dart": position
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["position.dart"],"names":[],"mappings":";;;;;;;;;;;;2BAOiD;AACzC,qBAAW,AAAS,QAAD;AACnB,wBAAc,AAAS,QAAD;AAG1B,qBAAa,WAAT,QAAQ,QAAG,oBACI,WAAZ,WAAW,QAAG,oBACL,WAAT,QAAQ,QAAG,qBACC,WAAZ,WAAW,QAAG;AACnB,cAAO;;AAGL,6BAAmB;AACnB,6BAAmB;AAGvB,qBAAa,WAAT,QAAQ,QAAG;AAET,6BAAgC,WAAL,WAAT,QAAQ,QAAG,YAAI;AACrC,uBAAoB,WAAf,cAAc,QAAG;AACwB,6BAA5C,UAA4B,WAAT,QAAQ,QAAG,cAAc;cACvC,gBAAmB,WAAf,cAAc,QAAG;AACuB,6BAAjD,UAA6C,WAAjB,WAAT,QAAQ,QAAG,cAAc,UAAG;;AAE/C,gBAAO;;;AAIX,qBAAgB,WAAZ,WAAW,QAAG;AAEZ,6BAAmC,WAAL,WAAZ,WAAW,QAAG,YAAI;AACxC,uBAAoB,WAAf,cAAc,QAAG;AAC2B,6BAA/C,UAA+B,WAAZ,WAAW,QAAG,cAAc;cAC1C,gBAAmB,WAAf,cAAc,QAAG;AAC0B,6BAApD,UAAgD,WAAjB,WAAZ,WAAW,QAAG,cAAc,UAAG;;AAElD,gBAAO;;;AAIX,YAAO,+BAAO,gBAAgB,EAAE,gBAAgB;IAClD;;;;EAEF","file":"position.unsound.ddc.js"}');
  // Exports:
  return {
    position: position
  };
}));

//# sourceMappingURL=position.unsound.ddc.js.map
