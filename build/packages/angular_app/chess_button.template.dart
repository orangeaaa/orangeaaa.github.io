// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'chess_button.dart';
export 'chess_button.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'button.template.dart' as _ref0;
import 'chess_logic.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_app/chess_button.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'chess_button.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'dart:html' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/runtime/interpolate.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import12;

final List<dynamic> styles$ChessButtonComponent = [import0.styles];

class ViewChessButtonComponent0 extends import1.ComponentView<import2.ChessButtonComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  var _expr_0;
  var _expr_1;
  import4.ButtonElement _el_0;
  static import5.ComponentStyles _componentStyles;
  ViewChessButtonComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import4.document.createElement('chess-button');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_app/lib/chess_button.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import4.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import4.document;
    this._el_0 = import9.appendElement(doc, parentRenderNode, 'button');
    this.updateChildClass(this._el_0, 'button');
    this.addShimC(this._el_0);
    this._el_0.append(this._textBinding_1.element);
    this._el_0.addEventListener('click', this.eventHandler0(_ctx.onClick));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.leftPixel;
    if (import8.checkBinding(this._expr_0, currVal_0, 'leftPixel', 'package:angular_app/chess_button.html')) {
      this._el_0.style.setProperty('left', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.topPixel;
    if (import8.checkBinding(this._expr_1, currVal_1, 'topPixel', 'package:angular_app/chess_button.html')) {
      this._el_0.style.setProperty('top', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._textBinding_1.updateText(import10.interpolateString0(_ctx.name));
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$ChessButtonComponent, _debugComponentUrl));
      if (import8.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _ChessButtonComponentNgFactory = ComponentFactory<import2.ChessButtonComponent>('chess-button', viewFactory_ChessButtonComponentHost0);
ComponentFactory<import2.ChessButtonComponent> get ChessButtonComponentNgFactory {
  return _ChessButtonComponentNgFactory;
}

ComponentFactory<import2.ChessButtonComponent> createChessButtonComponentFactory() {
  return ComponentFactory('chess-button', viewFactory_ChessButtonComponentHost0);
}

final List<dynamic> styles$ChessButtonComponentHost = const [];

class _ViewChessButtonComponentHost0 extends import12.HostView<import2.ChessButtonComponent> {
  @override
  void build() {
    this.componentView = ViewChessButtonComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.ChessButtonComponent();
    this.initRootNode(_el_0);
  }
}

import12.HostView<import2.ChessButtonComponent> viewFactory_ChessButtonComponentHost0() {
  return _ViewChessButtonComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ChessButtonComponent, createChessButtonComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
