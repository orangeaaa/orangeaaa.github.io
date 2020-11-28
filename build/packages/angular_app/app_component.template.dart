// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'button.template.dart' as _ref0;
import 'button_validation_util.template.dart' as _ref1;
import 'chess_button.template.dart' as _ref2;
import 'chess_logic.template.dart' as _ref3;
import 'package:angular/angular.template.dart' as _ref4;
import 'position.template.dart' as _ref5;
import 'package:angular_app/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'app_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'chess_button.template.dart' as import4;
import 'chess_button.dart' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/views/view.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/runtime/interpolate.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import14;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends import1.ComponentView<import2.AppComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  final import3.TextBinding _textBinding_12 = import3.TextBinding();
  import4.ViewChessButtonComponent0 _compView_3;
  import5.ChessButtonComponent _ChessButtonComponent_3_5;
  import4.ViewChessButtonComponent0 _compView_4;
  import5.ChessButtonComponent _ChessButtonComponent_4_5;
  import4.ViewChessButtonComponent0 _compView_5;
  import5.ChessButtonComponent _ChessButtonComponent_5_5;
  import4.ViewChessButtonComponent0 _compView_6;
  import5.ChessButtonComponent _ChessButtonComponent_6_5;
  import4.ViewChessButtonComponent0 _compView_7;
  import5.ChessButtonComponent _ChessButtonComponent_7_5;
  import4.ViewChessButtonComponent0 _compView_8;
  import5.ChessButtonComponent _ChessButtonComponent_8_5;
  import4.ViewChessButtonComponent0 _compView_9;
  import5.ChessButtonComponent _ChessButtonComponent_9_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  var _expr_13;
  static import6.ComponentStyles _componentStyles;
  ViewAppComponent0(import7.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import9.document.createElement('my-app');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_app/lib/app_component.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import9.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import9.document;
    final _el_0 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'name');
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    final _el_2 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_2, 'board');
    this.addShimC(_el_2);
    this._compView_3 = import4.ViewChessButtonComponent0(this, 3);
    final _el_3 = this._compView_3.rootElement;
    _el_2.append(_el_3);
    import11.setAttribute(_el_3, 'id', 'ju1');
    this.addShimC(_el_3);
    this._ChessButtonComponent_3_5 = import5.ChessButtonComponent();
    this._compView_3.create(this._ChessButtonComponent_3_5);
    this._compView_4 = import4.ViewChessButtonComponent0(this, 4);
    final _el_4 = this._compView_4.rootElement;
    _el_2.append(_el_4);
    import11.setAttribute(_el_4, 'id', 'ma1');
    this.addShimC(_el_4);
    this._ChessButtonComponent_4_5 = import5.ChessButtonComponent();
    this._compView_4.create(this._ChessButtonComponent_4_5);
    this._compView_5 = import4.ViewChessButtonComponent0(this, 5);
    final _el_5 = this._compView_5.rootElement;
    _el_2.append(_el_5);
    import11.setAttribute(_el_5, 'id', 'xiang1');
    this.addShimC(_el_5);
    this._ChessButtonComponent_5_5 = import5.ChessButtonComponent();
    this._compView_5.create(this._ChessButtonComponent_5_5);
    this._compView_6 = import4.ViewChessButtonComponent0(this, 6);
    final _el_6 = this._compView_6.rootElement;
    _el_2.append(_el_6);
    import11.setAttribute(_el_6, 'id', 'shi1');
    this.addShimC(_el_6);
    this._ChessButtonComponent_6_5 = import5.ChessButtonComponent();
    this._compView_6.create(this._ChessButtonComponent_6_5);
    this._compView_7 = import4.ViewChessButtonComponent0(this, 7);
    final _el_7 = this._compView_7.rootElement;
    _el_2.append(_el_7);
    import11.setAttribute(_el_7, 'id', 'shuai1');
    this.addShimC(_el_7);
    this._ChessButtonComponent_7_5 = import5.ChessButtonComponent();
    this._compView_7.create(this._ChessButtonComponent_7_5);
    this._compView_8 = import4.ViewChessButtonComponent0(this, 8);
    final _el_8 = this._compView_8.rootElement;
    _el_2.append(_el_8);
    import11.setAttribute(_el_8, 'id', 'jiang1');
    this.addShimC(_el_8);
    this._ChessButtonComponent_8_5 = import5.ChessButtonComponent();
    this._compView_8.create(this._ChessButtonComponent_8_5);
    this._compView_9 = import4.ViewChessButtonComponent0(this, 9);
    final _el_9 = this._compView_9.rootElement;
    _el_2.append(_el_9);
    import11.setAttribute(_el_9, 'id', 'xiang3');
    this.addShimC(_el_9);
    this._ChessButtonComponent_9_5 = import5.ChessButtonComponent();
    this._compView_9.create(this._ChessButtonComponent_9_5);
    final _el_10 = import11.appendElement(doc, _el_2, 'img');
    import11.setAttribute(_el_10, 'src', 'https://pic8.photophoto.cn/20080828/0020033092346353_b.jpg');
    this.addShimE(_el_10);
    final _el_11 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_11, 'name');
    this.addShimC(_el_11);
    _el_11.append(this._textBinding_12.element);
    _el_2.addEventListener('click', this.eventHandler1(_ctx.clickOnBoard));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = import2.AppComponent.buttonJu1;
    if (import10.checkBinding(this._expr_0, currVal_0, 'buttonJu1', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_3_5.button = currVal_0;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.chessLogic;
    if (import10.checkBinding(this._expr_1, currVal_1, 'chessLogic', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_3_5.chessLogic = currVal_1;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = import2.AppComponent.buttonMa1;
    if (import10.checkBinding(this._expr_2, currVal_2, 'buttonMa1', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_4_5.button = currVal_2;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.chessLogic;
    if (import10.checkBinding(this._expr_3, currVal_3, 'chessLogic', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_4_5.chessLogic = currVal_3;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = import2.AppComponent.buttonXiang1;
    if (import10.checkBinding(this._expr_4, currVal_4, 'buttonXiang1', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_5_5.button = currVal_4;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.chessLogic;
    if (import10.checkBinding(this._expr_5, currVal_5, 'chessLogic', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_5_5.chessLogic = currVal_5;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = import2.AppComponent.buttonShi1;
    if (import10.checkBinding(this._expr_6, currVal_6, 'buttonShi1', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_6_5.button = currVal_6;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.chessLogic;
    if (import10.checkBinding(this._expr_7, currVal_7, 'chessLogic', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_6_5.chessLogic = currVal_7;
      this._expr_7 = currVal_7;
    }
    final currVal_8 = import2.AppComponent.buttonShuai1;
    if (import10.checkBinding(this._expr_8, currVal_8, 'buttonShuai1', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_7_5.button = currVal_8;
      this._expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.chessLogic;
    if (import10.checkBinding(this._expr_9, currVal_9, 'chessLogic', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_7_5.chessLogic = currVal_9;
      this._expr_9 = currVal_9;
    }
    final currVal_10 = import2.AppComponent.buttonJiang1;
    if (import10.checkBinding(this._expr_10, currVal_10, 'buttonJiang1', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_8_5.button = currVal_10;
      this._expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.chessLogic;
    if (import10.checkBinding(this._expr_11, currVal_11, 'chessLogic', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_8_5.chessLogic = currVal_11;
      this._expr_11 = currVal_11;
    }
    final currVal_12 = import2.AppComponent.buttonXiang3;
    if (import10.checkBinding(this._expr_12, currVal_12, 'buttonXiang3', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_9_5.button = currVal_12;
      this._expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.chessLogic;
    if (import10.checkBinding(this._expr_13, currVal_13, 'chessLogic', 'package:angular_app/app_component.html')) {
      this._ChessButtonComponent_9_5.chessLogic = currVal_13;
      this._expr_13 = currVal_13;
    }
    this._textBinding_1.updateText(import12.interpolateString0(_ctx.topUser));
    this._textBinding_12.updateText(import12.interpolateString0(_ctx.bottomUser));
    this._compView_3.detectChanges();
    this._compView_4.detectChanges();
    this._compView_5.detectChanges();
    this._compView_6.detectChanges();
    this._compView_7.detectChanges();
    this._compView_8.detectChanges();
    this._compView_9.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_3.destroyInternalState();
    this._compView_4.destroyInternalState();
    this._compView_5.destroyInternalState();
    this._compView_6.destroyInternalState();
    this._compView_7.destroyInternalState();
    this._compView_8.destroyInternalState();
    this._compView_9.destroyInternalState();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import6.ComponentStyles.scoped(styles$AppComponent, _debugComponentUrl));
      if (import10.isDevMode) {
        import6.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _AppComponentNgFactory = ComponentFactory<import2.AppComponent>('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

ComponentFactory<import2.AppComponent> createAppComponentFactory() {
  return ComponentFactory('my-app', viewFactory_AppComponentHost0);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends import14.HostView<import2.AppComponent> {
  @override
  void build() {
    this.componentView = ViewAppComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.AppComponent();
    this.initRootNode(_el_0);
  }
}

import14.HostView<import2.AppComponent> viewFactory_AppComponentHost0() {
  return _ViewAppComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, createAppComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
