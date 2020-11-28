define(['dart_sdk', 'packages/tuple/tuple', 'packages/angular_app/button', 'packages/angular_app/button_validation_util'], (function load__packages__angular_app__chess_logic(dart_sdk, packages__tuple__tuple, packages__angular_app__button, packages__angular_app__button_validation_util) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tuple = packages__tuple__tuple.tuple;
  const button = packages__angular_app__button.button;
  const button_validation_util = packages__angular_app__button_validation_util.button_validation_util;
  var chess_logic = Object.create(dart.library);
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var Tuple2OfintL$intL = () => (Tuple2OfintL$intL = dart.constFn(tuple.Tuple2$(intL(), intL())))();
  var Tuple2LOfintL$intL = () => (Tuple2LOfintL$intL = dart.constFn(dart.legacy(Tuple2OfintL$intL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_app/chess_logic.dart";
  var _previousClickOnButton = dart.privateName(chess_logic, "_previousClickOnButton");
  var _validationUtil = dart.privateName(chess_logic, "_validationUtil");
  chess_logic.ChessLogic = class ChessLogic extends core.Object {
    clickOnButton(clickOnButton) {
      if (this[_previousClickOnButton] == null) {
        this[_previousClickOnButton] = clickOnButton;
        return;
      }
      if (dart.test(this.moveTo(clickOnButton.currentPosition))) {
        this[_validationUtil].updateMap(this[_previousClickOnButton].currentPosition, clickOnButton.currentPosition);
        this[_previousClickOnButton].setCurrentPosition(Tuple2LOfintL$intL().as(clickOnButton.currentPosition));
        clickOnButton.disableChess();
      }
      this[_previousClickOnButton] = null;
    }
    clickOnBoard(destination) {
      if (this[_previousClickOnButton] == null) {
        return;
      }
      if (dart.test(this.moveTo(destination))) {
        this[_validationUtil].updateMap(this[_previousClickOnButton].currentPosition, destination);
        this[_previousClickOnButton].setCurrentPosition(Tuple2LOfintL$intL().as(destination));
      }
      this[_previousClickOnButton] = null;
    }
    moveTo(destinationPosition) {
      switch (this[_previousClickOnButton].name) {
        case "车":
        {
          return this[_validationUtil].juValidation(this[_previousClickOnButton].currentPosition, destinationPosition);
        }
        case "马":
        {
          return this[_validationUtil].maValidation(this[_previousClickOnButton].currentPosition, destinationPosition);
        }
        case "象":
        {
          return this[_validationUtil].xiangValidation(this[_previousClickOnButton].currentPosition, destinationPosition, this[_previousClickOnButton].group);
        }
        case "士":
        {
          return this[_validationUtil].shiValidation(this[_previousClickOnButton].currentPosition, destinationPosition);
        }
        case "将":
        {
          return this[_validationUtil].shuaiValidation(this[_previousClickOnButton].currentPosition, destinationPosition);
        }
        case "帅":
        {
          return this[_validationUtil].shuaiValidation(this[_previousClickOnButton].currentPosition, destinationPosition);
        }
        default:
        {
          return false;
        }
      }
    }
    get previousClickOnButton() {
      return this[_previousClickOnButton];
    }
  };
  (chess_logic.ChessLogic.new = function(validationUtil) {
    this[_previousClickOnButton] = null;
    this[_validationUtil] = null;
    this[_validationUtil] = validationUtil;
  }).prototype = chess_logic.ChessLogic.prototype;
  dart.addTypeTests(chess_logic.ChessLogic);
  dart.addTypeCaches(chess_logic.ChessLogic);
  dart.setMethodSignature(chess_logic.ChessLogic, () => ({
    __proto__: dart.getMethods(chess_logic.ChessLogic.__proto__),
    clickOnButton: dart.fnType(dart.void, [dart.legacy(button.Button)]),
    clickOnBoard: dart.fnType(dart.void, [dart.legacy(tuple.Tuple2)]),
    moveTo: dart.fnType(dart.legacy(core.bool), [dart.legacy(tuple.Tuple2)])
  }));
  dart.setGetterSignature(chess_logic.ChessLogic, () => ({
    __proto__: dart.getGetters(chess_logic.ChessLogic.__proto__),
    previousClickOnButton: dart.legacy(button.Button)
  }));
  dart.setLibraryUri(chess_logic.ChessLogic, L0);
  dart.setFieldSignature(chess_logic.ChessLogic, () => ({
    __proto__: dart.getFields(chess_logic.ChessLogic.__proto__),
    [_previousClickOnButton]: dart.fieldType(dart.legacy(button.Button)),
    [_validationUtil]: dart.fieldType(dart.legacy(button_validation_util.ButtonValidationUtil))
  }));
  dart.trackLibraries("packages/angular_app/chess_logic", {
    "package:angular_app/chess_logic.dart": chess_logic
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["chess_logic.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;kBAW4B;AACxB,UAAI,AAAuB,gCAAG;AACU,QAAtC,+BAAyB,aAAa;AACtC;;AAGF,oBAAI,YAAO,AAAc,aAAD;AAC2E,QAAhG,AAAgB,gCAAU,AAAuB,8CAAiB,AAAc,aAAD;AACR,QAAxE,AAAuB,wEAAmB,AAAc,aAAD;AAC3B,QAA5B,AAAc,aAAD;;AAGc,MAA7B,+BAAyB;IAC3B;iBAEyB;AACvB,UAAI,AAAuB,gCAAG;AAC5B;;AAGF,oBAAI,YAAO,WAAW;AAC2D,QAA9E,AAAgB,gCAAU,AAAuB,8CAAiB,WAAW;AACvB,QAAtD,AAAuB,wEAAmB,WAAW;;AAE3B,MAA7B,+BAAyB;IAC3B;WAEmB;AACjB,cAAO,AAAuB;;;AAE1B,gBAAO,AAAgB,oCAAa,AAAuB,8CAAiB,mBAAmB;;;;AAE/F,gBAAO,AAAgB,oCAAa,AAAuB,8CAAiB,mBAAmB;;;;AAE/F,gBAAO,AAAgB,uCAAgB,AAAuB,8CAAiB,mBAAmB,EAAE,AAAuB;;;;AAE3H,gBAAO,AAAgB,qCAAc,AAAuB,8CAAiB,mBAAmB;;;;AAEhG,gBAAO,AAAgB,uCAAgB,AAAuB,8CAAiB,mBAAmB;;;;AAElG,gBAAO,AAAgB,uCAAgB,AAAuB,8CAAiB,mBAAmB;;;;AAEnG,gBAAO;;;IAEZ;;AAIoC;IAAsB;;yCApD1B;IAFzB;IACc;AAEa,IAAhC,wBAAkB,cAAc;EAClC","file":"chess_logic.unsound.ddc.js"}');
  // Exports:
  return {
    chess_logic: chess_logic
  };
}));

//# sourceMappingURL=chess_logic.unsound.ddc.js.map
