define(['dart_sdk', 'packages/tuple/tuple', 'packages/angular_app/button'], (function load__packages__angular_app__button_validation_util(dart_sdk, packages__tuple__tuple, packages__angular_app__button) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tuple = packages__tuple__tuple.tuple;
  const button = packages__angular_app__button.button;
  var button_validation_util = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $remove = dartx.remove;
  var $containsKey = dartx.containsKey;
  var Tuple2L = () => (Tuple2L = dart.constFn(dart.legacy(tuple.Tuple2)))();
  var LinkedHashSetOfTuple2L = () => (LinkedHashSetOfTuple2L = dart.constFn(collection.LinkedHashSet$(Tuple2L())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var Tuple2OfintL$dynamic = () => (Tuple2OfintL$dynamic = dart.constFn(tuple.Tuple2$(intL(), dart.dynamic)))();
  var Tuple2Ofdynamic$intL = () => (Tuple2Ofdynamic$intL = dart.constFn(tuple.Tuple2$(dart.dynamic, intL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_app/button_validation_util.dart";
  var _positionToButtonMap = dart.privateName(button_validation_util, "_positionToButtonMap");
  button_validation_util.ButtonValidationUtil = class ButtonValidationUtil extends core.Object {
    updateMap(previousPosition, destination) {
      this[_positionToButtonMap][$_set](destination, this[_positionToButtonMap][$_get](previousPosition));
      this[_positionToButtonMap][$remove](previousPosition);
    }
    juValidation(currentPosition, destinationPosition) {
      let t0, t0$, t0$0;
      let availableDestination = LinkedHashSetOfTuple2L().new();
      for (let i = intL().as(currentPosition.item1); dart.notNull(i) >= 50; i = dart.notNull(i) - 50) {
        let tmpPosition = new (Tuple2OfintL$dynamic()).new(i, currentPosition.item2);
        availableDestination.add(tmpPosition);
        if (dart.test(this[_positionToButtonMap][$containsKey](tmpPosition)) && !tmpPosition._equals(currentPosition)) {
          break;
        }
      }
      for (let i = intL().as(currentPosition.item1); dart.notNull(i) <= 450; i = dart.notNull(i) + 50) {
        let tmpPosition = new (Tuple2OfintL$dynamic()).new(i, currentPosition.item2);
        availableDestination.add(tmpPosition);
        if (dart.test(this[_positionToButtonMap][$containsKey](tmpPosition)) && !tmpPosition._equals(currentPosition)) {
          break;
        }
      }
      for (let i = intL().as(currentPosition.item2); dart.notNull(i) >= 30; i = dart.notNull(i) - 50) {
        let tmpPosition = new (Tuple2Ofdynamic$intL()).new(currentPosition.item1, i);
        availableDestination.add(tmpPosition);
        if (dart.test(this[_positionToButtonMap][$containsKey](tmpPosition)) && !tmpPosition._equals(currentPosition)) {
          break;
        }
      }
      for (let i = intL().as(currentPosition.item2); dart.notNull(i) <= 480; i = dart.notNull(i) + 50) {
        let tmpPosition = new (Tuple2Ofdynamic$intL()).new(currentPosition.item1, i);
        availableDestination.add(tmpPosition);
        if (dart.test(this[_positionToButtonMap][$containsKey](tmpPosition)) && !tmpPosition._equals(currentPosition)) {
          break;
        }
      }
      let inSameGroup = (t0$0 = (t0 = this[_positionToButtonMap][$_get](destinationPosition), t0 == null ? null : t0.group) == (t0$ = this[_positionToButtonMap][$_get](currentPosition), t0$ == null ? null : t0$.group), t0$0 === null ? false : t0$0);
      return dart.test(availableDestination.contains(destinationPosition)) && !dart.test(inSameGroup);
    }
    maValidation(currentPosition, destinationPosition) {
      let t0, t0$, t0$0;
      let availableDestination = LinkedHashSetOfTuple2L().new();
      if (dart.dtest(dart.dsend(currentPosition.item1, '>=', [150])) && !dart.test(this[_positionToButtonMap][$containsKey](new tuple.Tuple2.new(dart.dsend(currentPosition.item1, '-', [50]), currentPosition.item2)))) {
        if (dart.dtest(dart.dsend(currentPosition.item2, '>=', [80]))) {
          availableDestination.add(new tuple.Tuple2.new(dart.dsend(currentPosition.item1, '-', [100]), dart.dsend(currentPosition.item2, '-', [50])));
        }
        if (dart.dtest(dart.dsend(currentPosition.item2, '<=', [430]))) {
          availableDestination.add(new tuple.Tuple2.new(dart.dsend(currentPosition.item1, '-', [100]), dart.dsend(currentPosition.item2, '+', [50])));
        }
      }
      if (dart.dtest(dart.dsend(currentPosition.item1, '<=', [350])) && !dart.test(this[_positionToButtonMap][$containsKey](new tuple.Tuple2.new(dart.dsend(currentPosition.item1, '+', [50]), currentPosition.item2)))) {
        if (dart.dtest(dart.dsend(currentPosition.item2, '>=', [80]))) {
          availableDestination.add(new tuple.Tuple2.new(dart.dsend(currentPosition.item1, '+', [100]), dart.dsend(currentPosition.item2, '-', [50])));
        }
        if (dart.dtest(dart.dsend(currentPosition.item2, '<=', [430]))) {
          availableDestination.add(new tuple.Tuple2.new(dart.dsend(currentPosition.item1, '+', [100]), dart.dsend(currentPosition.item2, '+', [50])));
        }
      }
      if (dart.dtest(dart.dsend(currentPosition.item2, '>=', [130])) && !dart.test(this[_positionToButtonMap][$containsKey](new tuple.Tuple2.new(currentPosition.item1, dart.dsend(currentPosition.item2, '-', [50]))))) {
        if (dart.dtest(dart.dsend(currentPosition.item1, '>=', [100]))) {
          availableDestination.add(new tuple.Tuple2.new(dart.dsend(currentPosition.item1, '-', [50]), dart.dsend(currentPosition.item2, '-', [100])));
        }
        if (dart.dtest(dart.dsend(currentPosition.item1, '<=', [400]))) {
          availableDestination.add(new tuple.Tuple2.new(dart.dsend(currentPosition.item1, '+', [50]), dart.dsend(currentPosition.item2, '-', [100])));
        }
      }
      if (dart.dtest(dart.dsend(currentPosition.item2, '<=', [380])) && !dart.test(this[_positionToButtonMap][$containsKey](new tuple.Tuple2.new(currentPosition.item1, dart.dsend(currentPosition.item2, '+', [50]))))) {
        if (dart.dtest(dart.dsend(currentPosition.item1, '>=', [100]))) {
          availableDestination.add(new tuple.Tuple2.new(dart.dsend(currentPosition.item1, '-', [50]), dart.dsend(currentPosition.item2, '+', [100])));
        }
        if (dart.dtest(dart.dsend(currentPosition.item1, '<=', [400]))) {
          availableDestination.add(new tuple.Tuple2.new(dart.dsend(currentPosition.item1, '+', [50]), dart.dsend(currentPosition.item2, '+', [100])));
        }
      }
      let inSameGroup = (t0$0 = (t0 = this[_positionToButtonMap][$_get](destinationPosition), t0 == null ? null : t0.group) == (t0$ = this[_positionToButtonMap][$_get](currentPosition), t0$ == null ? null : t0$.group), t0$0 === null ? false : t0$0);
      return dart.test(availableDestination.contains(destinationPosition)) && !dart.test(inSameGroup);
    }
    xiangValidation(currentPosition, destinationPosition, group) {
      let t0, t0$, t0$0;
      let availableDestination = LinkedHashSetOfTuple2L().new();
      let relativeCurrentPositionX = currentPosition.item1;
      let relativeCurrentPositionY = currentPosition.item2;
      let relativeDestinationPositionX = destinationPosition.item1;
      let relativeDestinationPositionY = destinationPosition.item2;
      if (group === 2) {
        relativeCurrentPositionY = 480 - dart.notNull(core.num.as(relativeCurrentPositionY)) + 30;
        relativeDestinationPositionY = 480 - dart.notNull(core.num.as(relativeDestinationPositionY)) + 30;
      }
      if (dart.dtest(dart.dsend(relativeCurrentPositionX, '>=', [150])) && dart.dtest(dart.dsend(relativeCurrentPositionY, '>=', [130])) && !dart.test(this[_positionToButtonMap][$containsKey](new tuple.Tuple2.new(dart.dsend(relativeCurrentPositionX, '-', [50]), dart.dsend(relativeCurrentPositionY, '-', [50]))))) {
        availableDestination.add(new tuple.Tuple2.new(dart.dsend(relativeCurrentPositionX, '-', [100]), dart.dsend(relativeCurrentPositionY, '-', [100])));
      }
      if (dart.dtest(dart.dsend(relativeCurrentPositionX, '<=', [350])) && dart.dtest(dart.dsend(relativeCurrentPositionY, '>=', [130])) && !dart.test(this[_positionToButtonMap][$containsKey](new tuple.Tuple2.new(dart.dsend(relativeCurrentPositionX, '+', [50]), dart.dsend(relativeCurrentPositionY, '-', [50]))))) {
        availableDestination.add(new tuple.Tuple2.new(dart.dsend(relativeCurrentPositionX, '+', [100]), dart.dsend(relativeCurrentPositionY, '-', [100])));
      }
      if (dart.dtest(dart.dsend(relativeCurrentPositionX, '>=', [150])) && dart.dtest(dart.dsend(relativeCurrentPositionY, '<=', [130])) && !dart.test(this[_positionToButtonMap][$containsKey](new tuple.Tuple2.new(dart.dsend(relativeCurrentPositionX, '-', [50]), dart.dsend(relativeCurrentPositionY, '+', [50]))))) {
        availableDestination.add(new tuple.Tuple2.new(dart.dsend(relativeCurrentPositionX, '-', [100]), dart.dsend(relativeCurrentPositionY, '+', [100])));
      }
      if (dart.dtest(dart.dsend(relativeCurrentPositionX, '<=', [350])) && dart.dtest(dart.dsend(relativeCurrentPositionY, '<=', [130])) && !dart.test(this[_positionToButtonMap][$containsKey](new tuple.Tuple2.new(dart.dsend(relativeCurrentPositionX, '+', [50]), dart.dsend(relativeCurrentPositionY, '+', [50]))))) {
        availableDestination.add(new tuple.Tuple2.new(dart.dsend(relativeCurrentPositionX, '+', [100]), dart.dsend(relativeCurrentPositionY, '+', [100])));
      }
      let inSameGroup = (t0$0 = (t0 = this[_positionToButtonMap][$_get](destinationPosition), t0 == null ? null : t0.group) == (t0$ = this[_positionToButtonMap][$_get](currentPosition), t0$ == null ? null : t0$.group), t0$0 === null ? false : t0$0);
      return dart.test(availableDestination.contains(new tuple.Tuple2.new(relativeDestinationPositionX, relativeDestinationPositionY))) && !dart.test(inSameGroup);
    }
    shiValidation(currentPosition, destinationPosition) {
      let t0, t0$, t0$0;
      let availableDestination = LinkedHashSetOfTuple2L().from([new tuple.Tuple2.new(200, 30), new tuple.Tuple2.new(300, 30), new tuple.Tuple2.new(250, 80), new tuple.Tuple2.new(200, 130), new tuple.Tuple2.new(300, 130), new tuple.Tuple2.new(200, 480), new tuple.Tuple2.new(300, 480), new tuple.Tuple2.new(250, 430), new tuple.Tuple2.new(200, 380), new tuple.Tuple2.new(300, 380)]);
      let inSameGroup = (t0$0 = (t0 = this[_positionToButtonMap][$_get](destinationPosition), t0 == null ? null : t0.group) == (t0$ = this[_positionToButtonMap][$_get](currentPosition), t0$ == null ? null : t0$.group), t0$0 === null ? false : t0$0);
      if (dart.equals(dart.dsend(dart.dsend(destinationPosition.item1, '-', [currentPosition.item1]), 'abs', []), 50) && dart.equals(dart.dsend(dart.dsend(destinationPosition.item2, '-', [currentPosition.item2]), 'abs', []), 50)) {
        return true && !dart.test(inSameGroup);
      }
      return false;
    }
    shuaiValidation(currentPosition, destinationPosition) {
      let t0, t0$, t0$0, t0$1, t0$2;
      let inSameGroup = (t0$0 = (t0 = this[_positionToButtonMap][$_get](destinationPosition), t0 == null ? null : t0.group) == (t0$ = this[_positionToButtonMap][$_get](currentPosition), t0$ == null ? null : t0$.group), t0$0 === null ? false : t0$0);
      if (dart.test(inSameGroup)) return false;
      if (dart.dtest(dart.dsend(destinationPosition.item1, '<=', [300])) && dart.dtest(dart.dsend(destinationPosition.item1, '>=', [200])) && dart.dtest(dart.dsend(destinationPosition.item2, '>=', [30])) && dart.dtest(dart.dsend(destinationPosition.item2, '<=', [130])) || dart.dtest(dart.dsend(destinationPosition.item1, '<=', [300])) && dart.dtest(dart.dsend(destinationPosition.item1, '>=', [200])) && dart.dtest(dart.dsend(destinationPosition.item2, '>=', [380])) && dart.dtest(dart.dsend(destinationPosition.item2, '<=', [480]))) {
        if (dart.equals(destinationPosition.item1, currentPosition.item1) && dart.equals(dart.dsend(dart.dsend(destinationPosition.item2, '-', [currentPosition.item2]), 'abs', []), 50)) {
          return true;
        }
        if (dart.equals(destinationPosition.item2, currentPosition.item2) && dart.equals(dart.dsend(dart.dsend(destinationPosition.item1, '-', [currentPosition.item1]), 'abs', []), 50)) {
          return true;
        }
      }
      if ((t0$1 = this[_positionToButtonMap][$_get](destinationPosition), t0$1 == null ? null : t0$1.name) === "将" || (t0$2 = this[_positionToButtonMap][$_get](destinationPosition), t0$2 == null ? null : t0$2.name) === "帅") {
        return true;
      }
      return false;
    }
  };
  (button_validation_util.ButtonValidationUtil.new = function(positionToButtonMap) {
    this[_positionToButtonMap] = null;
    this[_positionToButtonMap] = positionToButtonMap;
  }).prototype = button_validation_util.ButtonValidationUtil.prototype;
  dart.addTypeTests(button_validation_util.ButtonValidationUtil);
  dart.addTypeCaches(button_validation_util.ButtonValidationUtil);
  dart.setMethodSignature(button_validation_util.ButtonValidationUtil, () => ({
    __proto__: dart.getMethods(button_validation_util.ButtonValidationUtil.__proto__),
    updateMap: dart.fnType(dart.void, [dart.legacy(tuple.Tuple2), dart.legacy(tuple.Tuple2)]),
    juValidation: dart.fnType(dart.legacy(core.bool), [dart.legacy(tuple.Tuple2), dart.legacy(tuple.Tuple2)]),
    maValidation: dart.fnType(dart.legacy(core.bool), [dart.legacy(tuple.Tuple2), dart.legacy(tuple.Tuple2)]),
    xiangValidation: dart.fnType(dart.legacy(core.bool), [dart.legacy(tuple.Tuple2), dart.legacy(tuple.Tuple2), dart.legacy(core.int)]),
    shiValidation: dart.fnType(dart.legacy(core.bool), [dart.legacy(tuple.Tuple2), dart.legacy(tuple.Tuple2)]),
    shuaiValidation: dart.fnType(dart.legacy(core.bool), [dart.legacy(tuple.Tuple2), dart.legacy(tuple.Tuple2)])
  }));
  dart.setLibraryUri(button_validation_util.ButtonValidationUtil, L0);
  dart.setFieldSignature(button_validation_util.ButtonValidationUtil, () => ({
    __proto__: dart.getFields(button_validation_util.ButtonValidationUtil.__proto__),
    [_positionToButtonMap]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(tuple.Tuple2), dart.legacy(button.Button))))
  }));
  dart.trackLibraries("packages/angular_app/button_validation_util", {
    "package:angular_app/button_validation_util.dart": button_validation_util
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button_validation_util.dart"],"names":[],"mappings":"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","file":"button_validation_util.unsound.ddc.js"}');
  // Exports:
  return {
    button_validation_util: button_validation_util
  };
}));

//# sourceMappingURL=button_validation_util.unsound.ddc.js.map
