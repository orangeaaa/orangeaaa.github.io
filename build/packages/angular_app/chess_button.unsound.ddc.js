define(['dart_sdk', 'packages/angular_app/button', 'packages/angular_app/chess_logic'], (function load__packages__angular_app__chess_button(dart_sdk, packages__angular_app__button, packages__angular_app__chess_logic) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const button = packages__angular_app__button.button;
  const chess_logic = packages__angular_app__chess_logic.chess_logic;
  var chess_button = Object.create(dart.library);
  var $visibility = dartx.visibility;
  var $toString = dartx.toString;
  const CT = Object.create(null);
  var L0 = "package:angular_app/chess_button.dart";
  var button$ = dart.privateName(chess_button, "ChessButtonComponent.button");
  var chessLogic = dart.privateName(chess_button, "ChessButtonComponent.chessLogic");
  chess_button.ChessButtonComponent = class ChessButtonComponent extends core.Object {
    get button() {
      return this[button$];
    }
    set button(value) {
      this[button$] = value;
    }
    get chessLogic() {
      return this[chessLogic];
    }
    set chessLogic(value) {
      this[chessLogic] = value;
    }
    onClick() {
      this.chessLogic.clickOnButton(this.button);
      if (!dart.test(this.button.alive)) {
        core.print(this.button.id);
        html.document.querySelector("#" + dart.notNull(this.button.id)).style[$visibility] = "hidden";
      }
    }
    get leftPixel() {
      return dart.notNull(dart.toString(dart.dsend(this.button.currentPosition.item1, '-', [chess_button.ChessButtonComponent.buttonLeftVariation]))) + "px";
    }
    get topPixel() {
      return dart.notNull(dart.toString(dart.dsend(this.button.currentPosition.item2, '-', [chess_button.ChessButtonComponent.buttonTopVariation]))) + "px";
    }
    get name() {
      return this.button.name;
    }
    get currentLocation() {
      return dart.toString(this.button.currentPosition);
    }
  };
  (chess_button.ChessButtonComponent.new = function() {
    this[button$] = null;
    this[chessLogic] = null;
    ;
  }).prototype = chess_button.ChessButtonComponent.prototype;
  dart.addTypeTests(chess_button.ChessButtonComponent);
  dart.addTypeCaches(chess_button.ChessButtonComponent);
  dart.setMethodSignature(chess_button.ChessButtonComponent, () => ({
    __proto__: dart.getMethods(chess_button.ChessButtonComponent.__proto__),
    onClick: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(chess_button.ChessButtonComponent, () => ({
    __proto__: dart.getGetters(chess_button.ChessButtonComponent.__proto__),
    leftPixel: dart.legacy(core.String),
    topPixel: dart.legacy(core.String),
    name: dart.legacy(core.String),
    currentLocation: dart.legacy(core.String)
  }));
  dart.setLibraryUri(chess_button.ChessButtonComponent, L0);
  dart.setFieldSignature(chess_button.ChessButtonComponent, () => ({
    __proto__: dart.getFields(chess_button.ChessButtonComponent.__proto__),
    button: dart.fieldType(dart.legacy(button.Button)),
    chessLogic: dart.fieldType(dart.legacy(chess_logic.ChessLogic))
  }));
  dart.defineLazy(chess_button.ChessButtonComponent, {
    /*chess_button.ChessButtonComponent.buttonLeftVariation*/get buttonLeftVariation() {
      return 15;
    },
    /*chess_button.ChessButtonComponent.buttonTopVariation*/get buttonTopVariation() {
      return 15;
    }
  }, true);
  dart.trackLibraries("packages/angular_app/chess_button", {
    "package:angular_app/chess_button.dart": chess_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["chess_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAaS;;;;;;IAGI;;;;;;;AAMuB,MAAhC,AAAW,8BAAc;AACzB,qBAAK,AAAO;AACM,QAAhB,WAAM,AAAO;AACsD,QAAnE,AAAS,AAA+B,AAAM,4BAAvB,AAAI,mBAAE,AAAO,sCAAuB;;IAE/D;;AAGwB,YAAgE,cAAX,cAAvB,WAA7B,AAAO,AAAgB,yCAAQ,4DAAkC;IAAI;;AACvE,YAA+D,cAAX,cAAtB,WAA7B,AAAO,AAAgB,yCAAQ,2DAAiC;IAAI;;AACzE,YAAA,AAAO;IAAI;;AACA,YAAuB,eAAvB,AAAO;IAA0B;;;IApBxD;IAGI;;EAkBb;;;;;;;;;;;;;;;;;;;;;MAhBe,qDAAmB;YAAG;;MACtB,oDAAkB;YAAG","file":"chess_button.unsound.ddc.js"}');
  // Exports:
  return {
    chess_button: chess_button
  };
}));

//# sourceMappingURL=chess_button.unsound.ddc.js.map
