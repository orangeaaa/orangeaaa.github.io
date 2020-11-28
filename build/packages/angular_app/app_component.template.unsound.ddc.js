define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_app/chess_button.template', 'packages/angular_app/chess_button', 'packages/angular_app/app_component', 'packages/angular/src/runtime/interpolate', 'packages/angular_app/button.template', 'packages/angular_app/button_validation_util.template', 'packages/angular_app/chess_logic.template', 'packages/angular/angular.template', 'packages/angular_app/position.template', 'packages/angular_app/app_component.css.shim'], (function load__packages__angular_app__app_component_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_app__chess_button$46template, packages__angular_app__chess_button, packages__angular_app__app_component, packages__angular__src__runtime__interpolate, packages__angular_app__button$46template, packages__angular_app__button_validation_util$46template, packages__angular_app__chess_logic$46template, packages__angular__angular$46template, packages__angular_app__position$46template, packages__angular_app__app_component$46css$46shim) {
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
  const chess_button$46template = packages__angular_app__chess_button$46template.chess_button$46template;
  const chess_button = packages__angular_app__chess_button.chess_button;
  const app_component = packages__angular_app__app_component.app_component;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const button$46template = packages__angular_app__button$46template.button$46template;
  const button_validation_util$46template = packages__angular_app__button_validation_util$46template.button_validation_util$46template;
  const chess_logic$46template = packages__angular_app__chess_logic$46template.chess_logic$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const position$46template = packages__angular_app__position$46template.position$46template;
  const app_component$46css$46shim = packages__angular_app__app_component$46css$46shim.app_component$46css$46shim;
  var app_component$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var AppComponentL = () => (AppComponentL = dart.constFn(dart.legacy(app_component.AppComponent)))();
  var ComponentFactoryOfAppComponentL = () => (ComponentFactoryOfAppComponentL = dart.constFn(component_factory.ComponentFactory$(AppComponentL())))();
  var HostViewOfAppComponentL = () => (HostViewOfAppComponentL = dart.constFn(host_view.HostView$(AppComponentL())))();
  var HostViewLOfAppComponentL = () => (HostViewLOfAppComponentL = dart.constFn(dart.legacy(HostViewOfAppComponentL())))();
  var VoidToHostViewLOfAppComponentL = () => (VoidToHostViewLOfAppComponentL = dart.constFn(dart.fnType(HostViewLOfAppComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_app/app_component.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(app_component$46template.ViewAppComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(app_component$46template.viewFactory_AppComponentHost0, VoidToHostViewLOfAppComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfAppComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "my-app"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_1 = dart.privateName(app_component$46template, "_textBinding_1");
  var _textBinding_12 = dart.privateName(app_component$46template, "_textBinding_12");
  var _compView_3 = dart.privateName(app_component$46template, "_compView_3");
  var _ChessButtonComponent_3_5 = dart.privateName(app_component$46template, "_ChessButtonComponent_3_5");
  var _compView_4 = dart.privateName(app_component$46template, "_compView_4");
  var _ChessButtonComponent_4_5 = dart.privateName(app_component$46template, "_ChessButtonComponent_4_5");
  var _compView_5 = dart.privateName(app_component$46template, "_compView_5");
  var _ChessButtonComponent_5_5 = dart.privateName(app_component$46template, "_ChessButtonComponent_5_5");
  var _compView_6 = dart.privateName(app_component$46template, "_compView_6");
  var _ChessButtonComponent_6_5 = dart.privateName(app_component$46template, "_ChessButtonComponent_6_5");
  var _compView_7 = dart.privateName(app_component$46template, "_compView_7");
  var _ChessButtonComponent_7_5 = dart.privateName(app_component$46template, "_ChessButtonComponent_7_5");
  var _compView_8 = dart.privateName(app_component$46template, "_compView_8");
  var _ChessButtonComponent_8_5 = dart.privateName(app_component$46template, "_ChessButtonComponent_8_5");
  var _compView_9 = dart.privateName(app_component$46template, "_compView_9");
  var _ChessButtonComponent_9_5 = dart.privateName(app_component$46template, "_ChessButtonComponent_9_5");
  var _expr_0 = dart.privateName(app_component$46template, "_expr_0");
  var _expr_1 = dart.privateName(app_component$46template, "_expr_1");
  var _expr_2 = dart.privateName(app_component$46template, "_expr_2");
  var _expr_3 = dart.privateName(app_component$46template, "_expr_3");
  var _expr_4 = dart.privateName(app_component$46template, "_expr_4");
  var _expr_5 = dart.privateName(app_component$46template, "_expr_5");
  var _expr_6 = dart.privateName(app_component$46template, "_expr_6");
  var _expr_7 = dart.privateName(app_component$46template, "_expr_7");
  var _expr_8 = dart.privateName(app_component$46template, "_expr_8");
  var _expr_9 = dart.privateName(app_component$46template, "_expr_9");
  var _expr_10 = dart.privateName(app_component$46template, "_expr_10");
  var _expr_11 = dart.privateName(app_component$46template, "_expr_11");
  var _expr_12 = dart.privateName(app_component$46template, "_expr_12");
  var _expr_13 = dart.privateName(app_component$46template, "_expr_13");
  var C0;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends component_view.ComponentView$(dart.legacy(app_component.AppComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_app/lib/app_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "name");
      this.addShimC(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      let _el_2 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_2, "board");
      this.addShimC(_el_2);
      this[_compView_3] = new chess_button$46template.ViewChessButtonComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootElement;
      _el_2[$append](_el_3);
      dom_helpers.setAttribute(_el_3, "id", "ju1");
      this.addShimC(_el_3);
      this[_ChessButtonComponent_3_5] = new chess_button.ChessButtonComponent.new();
      this[_compView_3].create(this[_ChessButtonComponent_3_5]);
      this[_compView_4] = new chess_button$46template.ViewChessButtonComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      _el_2[$append](_el_4);
      dom_helpers.setAttribute(_el_4, "id", "ma1");
      this.addShimC(_el_4);
      this[_ChessButtonComponent_4_5] = new chess_button.ChessButtonComponent.new();
      this[_compView_4].create(this[_ChessButtonComponent_4_5]);
      this[_compView_5] = new chess_button$46template.ViewChessButtonComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootElement;
      _el_2[$append](_el_5);
      dom_helpers.setAttribute(_el_5, "id", "xiang1");
      this.addShimC(_el_5);
      this[_ChessButtonComponent_5_5] = new chess_button.ChessButtonComponent.new();
      this[_compView_5].create(this[_ChessButtonComponent_5_5]);
      this[_compView_6] = new chess_button$46template.ViewChessButtonComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootElement;
      _el_2[$append](_el_6);
      dom_helpers.setAttribute(_el_6, "id", "shi1");
      this.addShimC(_el_6);
      this[_ChessButtonComponent_6_5] = new chess_button.ChessButtonComponent.new();
      this[_compView_6].create(this[_ChessButtonComponent_6_5]);
      this[_compView_7] = new chess_button$46template.ViewChessButtonComponent0.new(this, 7);
      let _el_7 = this[_compView_7].rootElement;
      _el_2[$append](_el_7);
      dom_helpers.setAttribute(_el_7, "id", "shuai1");
      this.addShimC(_el_7);
      this[_ChessButtonComponent_7_5] = new chess_button.ChessButtonComponent.new();
      this[_compView_7].create(this[_ChessButtonComponent_7_5]);
      this[_compView_8] = new chess_button$46template.ViewChessButtonComponent0.new(this, 8);
      let _el_8 = this[_compView_8].rootElement;
      _el_2[$append](_el_8);
      dom_helpers.setAttribute(_el_8, "id", "jiang1");
      this.addShimC(_el_8);
      this[_ChessButtonComponent_8_5] = new chess_button.ChessButtonComponent.new();
      this[_compView_8].create(this[_ChessButtonComponent_8_5]);
      this[_compView_9] = new chess_button$46template.ViewChessButtonComponent0.new(this, 9);
      let _el_9 = this[_compView_9].rootElement;
      _el_2[$append](_el_9);
      dom_helpers.setAttribute(_el_9, "id", "xiang3");
      this.addShimC(_el_9);
      this[_ChessButtonComponent_9_5] = new chess_button.ChessButtonComponent.new();
      this[_compView_9].create(this[_ChessButtonComponent_9_5]);
      let _el_10 = dom_helpers.appendElement(doc, _el_2, "img");
      dom_helpers.setAttribute(_el_10, "src", "https://pic8.photophoto.cn/20080828/0020033092346353_b.jpg");
      this.addShimE(_el_10);
      let _el_11 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_11, "name");
      this.addShimC(_el_11);
      _el_11[$append](this[_textBinding_12].element);
      _el_2[$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'clickOnBoard')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = app_component.AppComponent.buttonJu1;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "buttonJu1", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_3_5].button = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.chessLogic;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "chessLogic", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_3_5].chessLogic = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = app_component.AppComponent.buttonMa1;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "buttonMa1", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_4_5].button = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.chessLogic;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "chessLogic", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_4_5].chessLogic = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = app_component.AppComponent.buttonXiang1;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "buttonXiang1", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_5_5].button = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.chessLogic;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "chessLogic", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_5_5].chessLogic = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = app_component.AppComponent.buttonShi1;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "buttonShi1", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_6_5].button = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.chessLogic;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "chessLogic", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_6_5].chessLogic = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = app_component.AppComponent.buttonShuai1;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "buttonShuai1", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_7_5].button = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.chessLogic;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "chessLogic", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_7_5].chessLogic = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = app_component.AppComponent.buttonJiang1;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "buttonJiang1", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_8_5].button = currVal_10;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.chessLogic;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "chessLogic", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_8_5].chessLogic = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = app_component.AppComponent.buttonXiang3;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "buttonXiang3", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_9_5].button = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.chessLogic;
      if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "chessLogic", "package:angular_app/app_component.html"))) {
        this[_ChessButtonComponent_9_5].chessLogic = currVal_13;
        this[_expr_13] = currVal_13;
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.topUser));
      this[_textBinding_12].updateText(interpolate.interpolateString0(_ctx.bottomUser));
      this[_compView_3].detectChanges();
      this[_compView_4].detectChanges();
      this[_compView_5].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_7].detectChanges();
      this[_compView_8].detectChanges();
      this[_compView_9].detectChanges();
    }
    destroyInternal() {
      this[_compView_3].destroyInternalState();
      this[_compView_4].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_compView_7].destroyInternalState();
      this[_compView_8].destroyInternalState();
      this[_compView_9].destroyInternalState();
    }
    static _debugClearComponentStyles() {
      app_component$46template.ViewAppComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = app_component$46template.ViewAppComponent0._componentStyles;
      if (styles == null) {
        app_component$46template.ViewAppComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(app_component$46template.styles$AppComponent, app_component$46template.ViewAppComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_textBinding_12] = new text_binding.TextBinding.new();
    this[_compView_3] = null;
    this[_ChessButtonComponent_3_5] = null;
    this[_compView_4] = null;
    this[_ChessButtonComponent_4_5] = null;
    this[_compView_5] = null;
    this[_ChessButtonComponent_5_5] = null;
    this[_compView_6] = null;
    this[_ChessButtonComponent_6_5] = null;
    this[_compView_7] = null;
    this[_ChessButtonComponent_7_5] = null;
    this[_compView_8] = null;
    this[_ChessButtonComponent_8_5] = null;
    this[_compView_9] = null;
    this[_ChessButtonComponent_9_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("my-app"));
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.addTypeCaches(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(app_component$46template.ViewAppComponent0, L0);
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_12]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_3]: dart.fieldType(dart.legacy(chess_button$46template.ViewChessButtonComponent0)),
    [_ChessButtonComponent_3_5]: dart.fieldType(dart.legacy(chess_button.ChessButtonComponent)),
    [_compView_4]: dart.fieldType(dart.legacy(chess_button$46template.ViewChessButtonComponent0)),
    [_ChessButtonComponent_4_5]: dart.fieldType(dart.legacy(chess_button.ChessButtonComponent)),
    [_compView_5]: dart.fieldType(dart.legacy(chess_button$46template.ViewChessButtonComponent0)),
    [_ChessButtonComponent_5_5]: dart.fieldType(dart.legacy(chess_button.ChessButtonComponent)),
    [_compView_6]: dart.fieldType(dart.legacy(chess_button$46template.ViewChessButtonComponent0)),
    [_ChessButtonComponent_6_5]: dart.fieldType(dart.legacy(chess_button.ChessButtonComponent)),
    [_compView_7]: dart.fieldType(dart.legacy(chess_button$46template.ViewChessButtonComponent0)),
    [_ChessButtonComponent_7_5]: dart.fieldType(dart.legacy(chess_button.ChessButtonComponent)),
    [_compView_8]: dart.fieldType(dart.legacy(chess_button$46template.ViewChessButtonComponent0)),
    [_ChessButtonComponent_8_5]: dart.fieldType(dart.legacy(chess_button.ChessButtonComponent)),
    [_compView_9]: dart.fieldType(dart.legacy(chess_button$46template.ViewChessButtonComponent0)),
    [_ChessButtonComponent_9_5]: dart.fieldType(dart.legacy(chess_button.ChessButtonComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends host_view.HostView$(dart.legacy(app_component.AppComponent)) {
    build() {
      this.componentView = new app_component$46template.ViewAppComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new app_component.AppComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function() {
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.addTypeCaches(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(app_component$46template._ViewAppComponentHost0, L0);
  var C1;
  app_component$46template.createAppComponentFactory = function createAppComponentFactory() {
    return new (ComponentFactoryOfAppComponentL()).new("my-app", C1 || CT.C1);
  };
  app_component$46template.viewFactory_AppComponentHost0 = function viewFactory_AppComponentHost0() {
    return new app_component$46template._ViewAppComponentHost0.new();
  };
  app_component$46template.initReflector = function initReflector() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(AppComponentL()), app_component$46template.createAppComponentFactory());
    button$46template.initReflector();
    button_validation_util$46template.initReflector();
    chess_button$46template.initReflector();
    chess_logic$46template.initReflector();
    angular$46template.initReflector();
    position$46template.initReflector();
  };
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [app_component$46css$46shim.styles];
    },
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return C3 || CT.C3;
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_app/app_component.template", {
    "package:angular_app/app_component.template.dart": app_component$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.unsound.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template
  };
}));

//# sourceMappingURL=app_component.template.unsound.ddc.js.map
