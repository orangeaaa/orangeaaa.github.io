define(['dart_sdk', 'packages/tuple/tuple'], (function load__packages__angular_app__button(dart_sdk, packages__tuple__tuple) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tuple = packages__tuple__tuple.tuple;
  var button = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_app/button.dart";
  var _currentPosition = dart.privateName(button, "_currentPosition");
  var _name = dart.privateName(button, "_name");
  var _alive = dart.privateName(button, "_alive");
  var _group = dart.privateName(button, "_group");
  var _id = dart.privateName(button, "_id");
  button.Button = class Button extends core.Object {
    setCurrentPosition(newPosition) {
      this[_currentPosition] = newPosition;
    }
    disableChess() {
      this[_alive] = false;
    }
    get currentPosition() {
      return this[_currentPosition];
    }
    get name() {
      return this[_name];
    }
    get alive() {
      return this[_alive];
    }
    get group() {
      return this[_group];
    }
    get id() {
      return this[_id];
    }
  };
  (button.Button.new = function(currentPosition, id, opts) {
    let group = opts && 'group' in opts ? opts.group : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let alive = opts && 'alive' in opts ? opts.alive : true;
    this[_currentPosition] = null;
    this[_name] = null;
    this[_alive] = null;
    this[_group] = null;
    this[_id] = null;
    this[_currentPosition] = currentPosition;
    this[_name] = name;
    this[_alive] = alive;
    this[_group] = group;
    this[_id] = id;
  }).prototype = button.Button.prototype;
  dart.addTypeTests(button.Button);
  dart.addTypeCaches(button.Button);
  dart.setMethodSignature(button.Button, () => ({
    __proto__: dart.getMethods(button.Button.__proto__),
    setCurrentPosition: dart.fnType(dart.void, [dart.legacy(tuple.Tuple2$(dart.legacy(core.int), dart.legacy(core.int)))]),
    disableChess: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(button.Button, () => ({
    __proto__: dart.getGetters(button.Button.__proto__),
    currentPosition: dart.legacy(tuple.Tuple2),
    name: dart.legacy(core.String),
    alive: dart.legacy(core.bool),
    group: dart.legacy(core.int),
    id: dart.legacy(core.String)
  }));
  dart.setLibraryUri(button.Button, L0);
  dart.setFieldSignature(button.Button, () => ({
    __proto__: dart.getFields(button.Button.__proto__),
    [_currentPosition]: dart.fieldType(dart.legacy(tuple.Tuple2$(dart.legacy(core.int), dart.legacy(core.int)))),
    [_name]: dart.fieldType(dart.legacy(core.String)),
    [_alive]: dart.fieldType(dart.legacy(core.bool)),
    [_group]: dart.fieldType(dart.legacy(core.int)),
    [_id]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/angular_app/button", {
    "package:angular_app/button.dart": button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;uBAiB4C;AACV,MAA9B,yBAAmB,WAAW;IAChC;;AAGgB,MAAd,eAAS;IACX;;AAE8B;IAAgB;;AAC3B;IAAK;;AACN;IAAM;;AACP;IAAM;;AACN;IAAG;;gCApBI,iBAAwB;QAAS;QAAc;QAAW;IANjE;IACV;IACF;IACD;IACG;AAG6B,IAAlC,yBAAmB,eAAe;AACtB,IAAZ,cAAQ,IAAI;AACE,IAAd,eAAS,KAAK;AACA,IAAd,eAAS,KAAK;AACN,IAAR,YAAM,EAAE;EACV","file":"button.unsound.ddc.js"}');
  // Exports:
  return {
    button: button
  };
}));

//# sourceMappingURL=button.unsound.ddc.js.map
