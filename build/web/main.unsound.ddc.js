define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_app/app_component', 'packages/angular_app/app_component.template'], (function load__web__main(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular_app__app_component, packages__angular_app__app_component$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const run = packages__angular__src__bootstrap__modules.src__bootstrap__run;
  const app_component = packages__angular_app__app_component.app_component;
  const app_component$46template = packages__angular_app__app_component$46template.app_component$46template;
  var main = Object.create(dart.library);
  var AppComponentL = () => (AppComponentL = dart.constFn(dart.legacy(app_component.AppComponent)))();
  const CT = Object.create(null);
  main.main = function main$() {
    run.runApp(AppComponentL(), app_component$46template.AppComponentNgFactory);
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;AAIkC,IAAhC,4BAAU;EACZ","file":"main.unsound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.unsound.ddc.js.map
