define(['dart_sdk', 'packages/angular_app/chess_logic', 'packages/angular_app/position', 'packages/tuple/tuple', 'packages/angular_app/button', 'packages/angular_app/button_validation_util'], (function load__packages__angular_app__app_component(dart_sdk, packages__angular_app__chess_logic, packages__angular_app__position, packages__tuple__tuple, packages__angular_app__button, packages__angular_app__button_validation_util) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const chess_logic = packages__angular_app__chess_logic.chess_logic;
  const position = packages__angular_app__position.position;
  const tuple = packages__tuple__tuple.tuple;
  const button = packages__angular_app__button.button;
  const button_validation_util = packages__angular_app__button_validation_util.button_validation_util;
  var app_component = Object.create(dart.library);
  var $offset = dartx.offset;
  var Tuple2L = () => (Tuple2L = dart.constFn(dart.legacy(tuple.Tuple2)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var Tuple2OfintL$intL = () => (Tuple2OfintL$intL = dart.constFn(tuple.Tuple2$(intL(), intL())))();
  var ButtonL = () => (ButtonL = dart.constFn(dart.legacy(button.Button)))();
  var LinkedMapOfTuple2L$ButtonL = () => (LinkedMapOfTuple2L$ButtonL = dart.constFn(_js_helper.LinkedMap$(Tuple2L(), ButtonL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_app/app_component.dart";
  var bottomUser = dart.privateName(app_component, "AppComponent.bottomUser");
  var topUser = dart.privateName(app_component, "AppComponent.topUser");
  var currentPosition = dart.privateName(app_component, "AppComponent.currentPosition");
  var chessLogic = dart.privateName(app_component, "AppComponent.chessLogic");
  app_component.AppComponent = class AppComponent extends core.Object {
    get bottomUser() {
      return this[bottomUser];
    }
    set bottomUser(value) {
      this[bottomUser] = value;
    }
    get topUser() {
      return this[topUser];
    }
    set topUser(value) {
      this[topUser] = value;
    }
    get currentPosition() {
      return this[currentPosition];
    }
    set currentPosition(value) {
      this[currentPosition] = value;
    }
    get chessLogic() {
      return this[chessLogic];
    }
    set chessLogic(value) {
      this[chessLogic] = value;
    }
    clickOnBoard(e) {
      this.currentPosition = position.Position.locationOnBoard(new tuple.Tuple2.new(e[$offset].x, e[$offset].y));
      if (this.currentPosition != null) {
        this.chessLogic.clickOnBoard(Tuple2L().as(this.currentPosition));
      }
    }
    get previous() {
      return this.chessLogic.previousClickOnButton.name;
    }
  };
  (app_component.AppComponent.new = function() {
    this[bottomUser] = "wdpwk";
    this[topUser] = "sbnhr";
    this[currentPosition] = null;
    this[chessLogic] = new chess_logic.ChessLogic.new(app_component.AppComponent.validationUtil);
    ;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  dart.addTypeCaches(app_component.AppComponent);
  dart.setMethodSignature(app_component.AppComponent, () => ({
    __proto__: dart.getMethods(app_component.AppComponent.__proto__),
    clickOnBoard: dart.fnType(dart.dynamic, [dart.legacy(html.MouseEvent)])
  }));
  dart.setGetterSignature(app_component.AppComponent, () => ({
    __proto__: dart.getGetters(app_component.AppComponent.__proto__),
    previous: dart.legacy(core.String)
  }));
  dart.setLibraryUri(app_component.AppComponent, L0);
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    bottomUser: dart.fieldType(dart.legacy(core.String)),
    topUser: dart.fieldType(dart.legacy(core.String)),
    currentPosition: dart.fieldType(dart.dynamic),
    chessLogic: dart.fieldType(dart.legacy(chess_logic.ChessLogic))
  }));
  dart.defineLazy(app_component.AppComponent, {
    /*app_component.AppComponent.buttonJu1*/get buttonJu1() {
      return new button.Button.new(new (Tuple2OfintL$intL()).new(50, 30), "ju1", {group: 1, name: "车"});
    },
    set buttonJu1(_) {},
    /*app_component.AppComponent.buttonMa1*/get buttonMa1() {
      return new button.Button.new(new (Tuple2OfintL$intL()).new(100, 30), "ma1", {group: 1, name: "马"});
    },
    set buttonMa1(_) {},
    /*app_component.AppComponent.buttonXiang1*/get buttonXiang1() {
      return new button.Button.new(new (Tuple2OfintL$intL()).new(150, 30), "xiang1", {group: 1, name: "象"});
    },
    set buttonXiang1(_) {},
    /*app_component.AppComponent.buttonShi1*/get buttonShi1() {
      return new button.Button.new(new (Tuple2OfintL$intL()).new(200, 30), "shi1", {group: 1, name: "士"});
    },
    set buttonShi1(_) {},
    /*app_component.AppComponent.buttonShuai1*/get buttonShuai1() {
      return new button.Button.new(new (Tuple2OfintL$intL()).new(250, 30), "shuai1", {group: 1, name: "帅"});
    },
    set buttonShuai1(_) {},
    /*app_component.AppComponent.buttonJiang1*/get buttonJiang1() {
      return new button.Button.new(new (Tuple2OfintL$intL()).new(250, 480), "jiang1", {group: 2, name: "将"});
    },
    set buttonJiang1(_) {},
    /*app_component.AppComponent.buttonXiang3*/get buttonXiang3() {
      return new button.Button.new(new (Tuple2OfintL$intL()).new(150, 480), "xiang3", {group: 2, name: "象"});
    },
    set buttonXiang3(_) {},
    /*app_component.AppComponent.positionToButtonMap*/get positionToButtonMap() {
      return new (LinkedMapOfTuple2L$ButtonL()).from([app_component.AppComponent.buttonJu1.currentPosition, app_component.AppComponent.buttonJu1, app_component.AppComponent.buttonMa1.currentPosition, app_component.AppComponent.buttonMa1, app_component.AppComponent.buttonXiang1.currentPosition, app_component.AppComponent.buttonXiang1, app_component.AppComponent.buttonXiang3.currentPosition, app_component.AppComponent.buttonXiang3, app_component.AppComponent.buttonShi1.currentPosition, app_component.AppComponent.buttonShi1, app_component.AppComponent.buttonJiang1.currentPosition, app_component.AppComponent.buttonJiang1, app_component.AppComponent.buttonShuai1.currentPosition, app_component.AppComponent.buttonShuai1]);
    },
    set positionToButtonMap(_) {},
    /*app_component.AppComponent.validationUtil*/get validationUtil() {
      return new button_validation_util.ButtonValidationUtil.new(app_component.AppComponent.positionToButtonMap);
    },
    set validationUtil(_) {}
  }, true);
  dart.trackLibraries("packages/angular_app/app_component", {
    "package:angular_app/app_component.dart": app_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IAmCM;;;;;;IACA;;;;;;IACA;;;;;;IAEO;;;;;;iBAEa;AACoD,MAA1E,uBAA2B,kCAAgB,qBAAO,AAAE,AAAO,CAAR,aAAW,AAAE,AAAO,CAAR;AAC/D,UAAI,wBAAmB;AACmB,QAAxC,AAAW,0CAAa;;IAE5B;;AAEuB,YAAA,AAAW,AAAsB;IAAI;;;IAbxD,mBAAa;IACb,gBAAQ;IACR;IAEO,mBAAa,+BAAW;;EAUrC;;;;;;;;;;;;;;;;;;;;MAjCgB,oCAAS;YAAG,uBAAO,8BAAO,IAAG,KAAK,eAAc,SAAS;;;MACzD,oCAAS;YAAG,uBAAO,8BAAO,KAAI,KAAK,eAAc,SAAS;;;MAC1D,uCAAY;YAAG,uBAAO,8BAAO,KAAI,KAAK,kBAAiB,SAAS;;;MAChE,qCAAU;YAAG,uBAAO,8BAAO,KAAI,KAAK,gBAAe,SAAS;;;MAC5D,uCAAY;YAAG,uBAAO,8BAAO,KAAI,KAAK,kBAAiB,SAAS;;;MAChE,uCAAY;YAAG,uBAAO,8BAAO,KAAI,MAAM,kBAAiB,SAAS;;;MACjE,uCAAY;YAAG,uBAAO,8BAAO,KAAI,MAAM,kBAAiB,SAAS;;;MAEpD,8CAAmB;YAAG,0CAC/C,AAAU,sDAAiB,sCAC3B,AAAU,sDAAiB,sCAC3B,AAAa,yDAAiB,yCAC9B,AAAa,yDAAiB,yCAC9B,AAAW,uDAAiB,uCAC5B,AAAa,yDAAiB,yCAC9B,AAAa,yDAAiB;;;MAEJ,yCAAc;YAAG,qDAAqB","file":"app_component.unsound.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
}));

//# sourceMappingURL=app_component.unsound.ddc.js.map
