define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/interpolate', 'packages/angular_app/chess_button', 'packages/angular_app/button.template', 'packages/angular_app/chess_logic.template', 'packages/angular/angular.template', 'packages/angular_app/chess_button.css.shim'], (function load__packages__angular_app__chess_button_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__interpolate, packages__angular_app__chess_button, packages__angular_app__button$46template, packages__angular_app__chess_logic$46template, packages__angular__angular$46template, packages__angular_app__chess_button$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const chess_button = packages__angular_app__chess_button.chess_button;
  const button$46template = packages__angular_app__button$46template.button$46template;
  const chess_logic$46template = packages__angular_app__chess_logic$46template.chess_logic$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const chess_button$46css$46shim = packages__angular_app__chess_button$46css$46shim.chess_button$46css$46shim;
  var chess_button$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $setProperty = dartx.setProperty;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var ButtonElementL = () => (ButtonElementL = dart.constFn(dart.legacy(html.ButtonElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ChessButtonComponentL = () => (ChessButtonComponentL = dart.constFn(dart.legacy(chess_button.ChessButtonComponent)))();
  var ComponentFactoryOfChessButtonComponentL = () => (ComponentFactoryOfChessButtonComponentL = dart.constFn(component_factory.ComponentFactory$(ChessButtonComponentL())))();
  var HostViewOfChessButtonComponentL = () => (HostViewOfChessButtonComponentL = dart.constFn(host_view.HostView$(ChessButtonComponentL())))();
  var HostViewLOfChessButtonComponentL = () => (HostViewLOfChessButtonComponentL = dart.constFn(dart.legacy(HostViewOfChessButtonComponentL())))();
  var VoidToHostViewLOfChessButtonComponentL = () => (VoidToHostViewLOfChessButtonComponentL = dart.constFn(dart.fnType(HostViewLOfChessButtonComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_app/chess_button.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(chess_button$46template.ViewChessButtonComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(chess_button$46template.viewFactory_ChessButtonComponentHost0, VoidToHostViewLOfChessButtonComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfChessButtonComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "chess-button"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_1 = dart.privateName(chess_button$46template, "_textBinding_1");
  var _expr_0 = dart.privateName(chess_button$46template, "_expr_0");
  var _expr_1 = dart.privateName(chess_button$46template, "_expr_1");
  var _el_0 = dart.privateName(chess_button$46template, "_el_0");
  var C0;
  chess_button$46template.ViewChessButtonComponent0 = class ViewChessButtonComponent0 extends component_view.ComponentView$(dart.legacy(chess_button.ChessButtonComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_app/lib/chess_button.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = ButtonElementL().as(dom_helpers.appendElement(doc, parentRenderNode, "button"));
      this.updateChildClass(this[_el_0], "button");
      this.addShimC(this[_el_0]);
      this[_el_0][$append](this[_textBinding_1].element);
      this[_el_0][$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'onClick')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.leftPixel;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "leftPixel", "package:angular_app/chess_button.html"))) {
        this[_el_0].style[$setProperty]("left", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.topPixel;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "topPixel", "package:angular_app/chess_button.html"))) {
        this[_el_0].style[$setProperty]("top", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.name));
    }
    static _debugClearComponentStyles() {
      chess_button$46template.ViewChessButtonComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = chess_button$46template.ViewChessButtonComponent0._componentStyles;
      if (styles == null) {
        chess_button$46template.ViewChessButtonComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(chess_button$46template.styles$ChessButtonComponent, chess_button$46template.ViewChessButtonComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (chess_button$46template.ViewChessButtonComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    chess_button$46template.ViewChessButtonComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("chess-button"));
  }).prototype = chess_button$46template.ViewChessButtonComponent0.prototype;
  dart.addTypeTests(chess_button$46template.ViewChessButtonComponent0);
  dart.addTypeCaches(chess_button$46template.ViewChessButtonComponent0);
  dart.setMethodSignature(chess_button$46template.ViewChessButtonComponent0, () => ({
    __proto__: dart.getMethods(chess_button$46template.ViewChessButtonComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(chess_button$46template.ViewChessButtonComponent0, L0);
  dart.setFieldSignature(chess_button$46template.ViewChessButtonComponent0, () => ({
    __proto__: dart.getFields(chess_button$46template.ViewChessButtonComponent0.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.ButtonElement))
  }));
  dart.defineLazy(chess_button$46template.ViewChessButtonComponent0, {
    /*chess_button$46template.ViewChessButtonComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  chess_button$46template._ViewChessButtonComponentHost0 = class _ViewChessButtonComponentHost0 extends host_view.HostView$(dart.legacy(chess_button.ChessButtonComponent)) {
    build() {
      this.componentView = new chess_button$46template.ViewChessButtonComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new chess_button.ChessButtonComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (chess_button$46template._ViewChessButtonComponentHost0.new = function() {
    chess_button$46template._ViewChessButtonComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = chess_button$46template._ViewChessButtonComponentHost0.prototype;
  dart.addTypeTests(chess_button$46template._ViewChessButtonComponentHost0);
  dart.addTypeCaches(chess_button$46template._ViewChessButtonComponentHost0);
  dart.setMethodSignature(chess_button$46template._ViewChessButtonComponentHost0, () => ({
    __proto__: dart.getMethods(chess_button$46template._ViewChessButtonComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(chess_button$46template._ViewChessButtonComponentHost0, L0);
  var C1;
  chess_button$46template.createChessButtonComponentFactory = function createChessButtonComponentFactory() {
    return new (ComponentFactoryOfChessButtonComponentL()).new("chess-button", C1 || CT.C1);
  };
  chess_button$46template.viewFactory_ChessButtonComponentHost0 = function viewFactory_ChessButtonComponentHost0() {
    return new chess_button$46template._ViewChessButtonComponentHost0.new();
  };
  chess_button$46template.initReflector = function initReflector() {
    if (dart.test(chess_button$46template._visited)) {
      return;
    }
    chess_button$46template._visited = true;
    reflector.registerComponent(dart.wrapType(ChessButtonComponentL()), chess_button$46template.createChessButtonComponentFactory());
    button$46template.initReflector();
    chess_logic$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.copyProperties(chess_button$46template, {
    get ChessButtonComponentNgFactory() {
      return chess_button$46template._ChessButtonComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(chess_button$46template, {
    /*chess_button$46template.styles$ChessButtonComponent*/get styles$ChessButtonComponent() {
      return [chess_button$46css$46shim.styles];
    },
    /*chess_button$46template._ChessButtonComponentNgFactory*/get _ChessButtonComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*chess_button$46template.styles$ChessButtonComponentHost*/get styles$ChessButtonComponentHost() {
      return C3 || CT.C3;
    },
    /*chess_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_app/chess_button.template", {
    "package:angular_app/chess_button.template.dart": chess_button$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["chess_button.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqCI,uBAAgB,2BAAY,4CAA4C;IAC1E;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,gBAAc;AAC+C,oBAA9D,oBAAQ,0BAAsB,GAAG,EAAE,gBAAgB,EAAE;AACf,MAA3C,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AAC2B,MAAzC,AAAM,qBAAY,AAAe;AACgC,MAAjE,AAAM,+BAAiB,SAAS,AAAK,6BAAmB,UAAL,IAAI;IAC9D;;AAIQ,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,aAAa;AACd,QAA1C,AAAM,AAAM,gCAAY,QAAQ,SAAS;AACtB,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,YAAY;AACd,QAAzC,AAAM,AAAM,gCAAY,OAAO,SAAS;AACrB,QAAnB,gBAAU,SAAS;;AAE4C,MAAjE,AAAe,gCAAW,+BAA4B,AAAK,IAAD;IACjE;;AAGyB,MAAvB,qEAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACyF,QAA7G,qEAAoB,SAAiC,2CAAO,qDAA6B;AACzF,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;oEAjDuC,YAAgB;IAL7B,uBAAyB;IAC/C;IACA;IACkB;AAEgD,+EAAM,UAAU,EAAE,WAAW;AACvE,IAA1B,AAAK;AAC4D,uBAA5D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;;MAJ+B,kEAAgB;;;;;;;AAmEU,MAAlD,qBAAgB,0DAA0B,MAAM;AAC/C,kBAAa,AAAc;AACc,MAA1C,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;;AAbE,UAAO,qDAAiB;EAC1B;;AAeE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,mCAAW;AAEwE,IAAnF,4BAAyB,wCAAsB;AAC1B,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAlCE,YAAO;IACT;;;;;;;MA/DoB,mDAA2B;YAAG,EAAS;;MA4DrD,sDAA8B;;;MAShB,uDAA+B;;;MAgB/C,gCAAQ;YAAG","file":"chess_button.template.unsound.ddc.js"}');
  // Exports:
  return {
    chess_button$46template: chess_button$46template
  };
}));

//# sourceMappingURL=chess_button.template.unsound.ddc.js.map
