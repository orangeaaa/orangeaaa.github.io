define(['dart_sdk', 'packages/angular_app/button.template', 'packages/angular_app/button_validation_util.template'], (function load__packages__angular_app__chess_logic_template(dart_sdk, packages__angular_app__button$46template, packages__angular_app__button_validation_util$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const button$46template = packages__angular_app__button$46template.button$46template;
  const button_validation_util$46template = packages__angular_app__button_validation_util$46template.button_validation_util$46template;
  var chess_logic$46template = Object.create(dart.library);
  const CT = Object.create(null);
  chess_logic$46template.initReflector = function initReflector() {
    if (dart.test(chess_logic$46template._visited)) {
      return;
    }
    chess_logic$46template._visited = true;
    button$46template.initReflector();
    button_validation_util$46template.initReflector();
  };
  dart.defineLazy(chess_logic$46template, {
    /*chess_logic$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_app/chess_logic.template", {
    "package:angular_app/chess_logic.template.dart": chess_logic$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["chess_logic.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,kCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,+BAAQ;YAAG","file":"chess_logic.template.unsound.ddc.js"}');
  // Exports:
  return {
    chess_logic$46template: chess_logic$46template
  };
}));

//# sourceMappingURL=chess_logic.template.unsound.ddc.js.map
