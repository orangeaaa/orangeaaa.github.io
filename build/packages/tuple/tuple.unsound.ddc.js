define(['dart_sdk', 'packages/quiver/core'], (function load__packages__tuple__tuple(dart_sdk, packages__quiver__core) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hash = packages__quiver__core.src__core__hash;
  var tuple = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $hashCode = dartx.hashCode;
  var $toString = dartx.toString;
  var $_equals = dartx._equals;
  var Tuple2L = () => (Tuple2L = dart.constFn(dart.legacy(tuple.Tuple2)))();
  var Tuple3L = () => (Tuple3L = dart.constFn(dart.legacy(tuple.Tuple3)))();
  var Tuple4L = () => (Tuple4L = dart.constFn(dart.legacy(tuple.Tuple4)))();
  var Tuple5L = () => (Tuple5L = dart.constFn(dart.legacy(tuple.Tuple5)))();
  var Tuple6L = () => (Tuple6L = dart.constFn(dart.legacy(tuple.Tuple6)))();
  var Tuple7L = () => (Tuple7L = dart.constFn(dart.legacy(tuple.Tuple7)))();
  const CT = Object.create(null);
  var L0 = "package:tuple/tuple.dart";
  const _is_Tuple2_default = Symbol('_is_Tuple2_default');
  var item1$ = dart.privateName(tuple, "Tuple2.item1");
  var item2$ = dart.privateName(tuple, "Tuple2.item2");
  tuple.Tuple2$ = dart.generic((T1, T2) => {
    var T1L = () => (T1L = dart.constFn(dart.legacy(T1)))();
    var Tuple2OfT1L$T2L = () => (Tuple2OfT1L$T2L = dart.constFn(tuple.Tuple2$(T1L(), T2L())))();
    var T2L = () => (T2L = dart.constFn(dart.legacy(T2)))();
    class Tuple2 extends core.Object {
      get item1() {
        return this[item1$];
      }
      set item1(value) {
        super.item1 = value;
      }
      get item2() {
        return this[item2$];
      }
      set item2(value) {
        super.item2 = value;
      }
      static fromList(items) {
        if (items[$length] !== 2) {
          dart.throw(new core.ArgumentError.new("items must have length 2"));
        }
        return new (tuple.Tuple2$(dart.legacy(T1), dart.legacy(T2))).new(dart.legacy(T1).as(items[$_get](0)), dart.legacy(T2).as(items[$_get](1)));
      }
      withItem1(v) {
        T1L().as(v);
        return new (Tuple2OfT1L$T2L()).new(v, this.item2);
      }
      withItem2(v) {
        T2L().as(v);
        return new (Tuple2OfT1L$T2L()).new(this.item1, v);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : false;
        return core.List.from([this.item1, this.item2], {growable: growable});
      }
      toString() {
        return "[" + dart.str(this.item1) + ", " + dart.str(this.item2) + "]";
      }
      _equals(other) {
        if (other == null) return false;
        return Tuple2L().is(other) && dart.equals(other.item1, this.item1) && dart.equals(other.item2, this.item2);
      }
      get hashCode() {
        return hash.hash2(dart.hashCode(this.item1), dart.hashCode(this.item2));
      }
    }
    (Tuple2.new = function(item1, item2) {
      this[item1$] = item1;
      this[item2$] = item2;
      ;
    }).prototype = Tuple2.prototype;
    dart.addTypeTests(Tuple2);
    Tuple2.prototype[_is_Tuple2_default] = true;
    dart.addTypeCaches(Tuple2);
    dart.setMethodSignature(Tuple2, () => ({
      __proto__: dart.getMethods(Tuple2.__proto__),
      withItem1: dart.fnType(dart.legacy(tuple.Tuple2$(dart.legacy(T1), dart.legacy(T2))), [dart.legacy(core.Object)]),
      withItem2: dart.fnType(dart.legacy(tuple.Tuple2$(dart.legacy(T1), dart.legacy(T2))), [dart.legacy(core.Object)]),
      toList: dart.fnType(dart.legacy(core.List), [], {growable: dart.legacy(core.bool)}, {}),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
    }));
    dart.setGetterSignature(Tuple2, () => ({
      __proto__: dart.getGetters(Tuple2.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(Tuple2, L0);
    dart.setFieldSignature(Tuple2, () => ({
      __proto__: dart.getFields(Tuple2.__proto__),
      item1: dart.finalFieldType(dart.legacy(T1)),
      item2: dart.finalFieldType(dart.legacy(T2))
    }));
    dart.defineExtensionMethods(Tuple2, ['toString', '_equals']);
    dart.defineExtensionAccessors(Tuple2, ['hashCode']);
    return Tuple2;
  });
  tuple.Tuple2 = tuple.Tuple2$();
  dart.addTypeTests(tuple.Tuple2, _is_Tuple2_default);
  const _is_Tuple3_default = Symbol('_is_Tuple3_default');
  var item1$0 = dart.privateName(tuple, "Tuple3.item1");
  var item2$0 = dart.privateName(tuple, "Tuple3.item2");
  var item3$ = dart.privateName(tuple, "Tuple3.item3");
  tuple.Tuple3$ = dart.generic((T1, T2, T3) => {
    var T1L = () => (T1L = dart.constFn(dart.legacy(T1)))();
    var Tuple3OfT1L$T2L$T3L = () => (Tuple3OfT1L$T2L$T3L = dart.constFn(tuple.Tuple3$(T1L(), T2L(), T3L())))();
    var T2L = () => (T2L = dart.constFn(dart.legacy(T2)))();
    var T3L = () => (T3L = dart.constFn(dart.legacy(T3)))();
    class Tuple3 extends core.Object {
      get item1() {
        return this[item1$0];
      }
      set item1(value) {
        super.item1 = value;
      }
      get item2() {
        return this[item2$0];
      }
      set item2(value) {
        super.item2 = value;
      }
      get item3() {
        return this[item3$];
      }
      set item3(value) {
        super.item3 = value;
      }
      static fromList(items) {
        if (items[$length] !== 3) {
          dart.throw(new core.ArgumentError.new("items must have length 3"));
        }
        return new (tuple.Tuple3$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3))).new(dart.legacy(T1).as(items[$_get](0)), dart.legacy(T2).as(items[$_get](1)), dart.legacy(T3).as(items[$_get](2)));
      }
      withItem1(v) {
        T1L().as(v);
        return new (Tuple3OfT1L$T2L$T3L()).new(v, this.item2, this.item3);
      }
      withItem2(v) {
        T2L().as(v);
        return new (Tuple3OfT1L$T2L$T3L()).new(this.item1, v, this.item3);
      }
      withItem3(v) {
        T3L().as(v);
        return new (Tuple3OfT1L$T2L$T3L()).new(this.item1, this.item2, v);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : false;
        return core.List.from([this.item1, this.item2, this.item3], {growable: growable});
      }
      toString() {
        return "[" + dart.str(this.item1) + ", " + dart.str(this.item2) + ", " + dart.str(this.item3) + "]";
      }
      _equals(other) {
        if (other == null) return false;
        return Tuple3L().is(other) && dart.equals(other.item1, this.item1) && dart.equals(other.item2, this.item2) && dart.equals(other.item3, this.item3);
      }
      get hashCode() {
        return hash.hash3(dart.hashCode(this.item1), dart.hashCode(this.item2), dart.hashCode(this.item3));
      }
    }
    (Tuple3.new = function(item1, item2, item3) {
      this[item1$0] = item1;
      this[item2$0] = item2;
      this[item3$] = item3;
      ;
    }).prototype = Tuple3.prototype;
    dart.addTypeTests(Tuple3);
    Tuple3.prototype[_is_Tuple3_default] = true;
    dart.addTypeCaches(Tuple3);
    dart.setMethodSignature(Tuple3, () => ({
      __proto__: dart.getMethods(Tuple3.__proto__),
      withItem1: dart.fnType(dart.legacy(tuple.Tuple3$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3))), [dart.legacy(core.Object)]),
      withItem2: dart.fnType(dart.legacy(tuple.Tuple3$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3))), [dart.legacy(core.Object)]),
      withItem3: dart.fnType(dart.legacy(tuple.Tuple3$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3))), [dart.legacy(core.Object)]),
      toList: dart.fnType(dart.legacy(core.List), [], {growable: dart.legacy(core.bool)}, {}),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
    }));
    dart.setGetterSignature(Tuple3, () => ({
      __proto__: dart.getGetters(Tuple3.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(Tuple3, L0);
    dart.setFieldSignature(Tuple3, () => ({
      __proto__: dart.getFields(Tuple3.__proto__),
      item1: dart.finalFieldType(dart.legacy(T1)),
      item2: dart.finalFieldType(dart.legacy(T2)),
      item3: dart.finalFieldType(dart.legacy(T3))
    }));
    dart.defineExtensionMethods(Tuple3, ['toString', '_equals']);
    dart.defineExtensionAccessors(Tuple3, ['hashCode']);
    return Tuple3;
  });
  tuple.Tuple3 = tuple.Tuple3$();
  dart.addTypeTests(tuple.Tuple3, _is_Tuple3_default);
  const _is_Tuple4_default = Symbol('_is_Tuple4_default');
  var item1$1 = dart.privateName(tuple, "Tuple4.item1");
  var item2$1 = dart.privateName(tuple, "Tuple4.item2");
  var item3$0 = dart.privateName(tuple, "Tuple4.item3");
  var item4$ = dart.privateName(tuple, "Tuple4.item4");
  tuple.Tuple4$ = dart.generic((T1, T2, T3, T4) => {
    var T1L = () => (T1L = dart.constFn(dart.legacy(T1)))();
    var Tuple4OfT1L$T2L$T3L$T4L = () => (Tuple4OfT1L$T2L$T3L$T4L = dart.constFn(tuple.Tuple4$(T1L(), T2L(), T3L(), T4L())))();
    var T2L = () => (T2L = dart.constFn(dart.legacy(T2)))();
    var T3L = () => (T3L = dart.constFn(dart.legacy(T3)))();
    var T4L = () => (T4L = dart.constFn(dart.legacy(T4)))();
    class Tuple4 extends core.Object {
      get item1() {
        return this[item1$1];
      }
      set item1(value) {
        super.item1 = value;
      }
      get item2() {
        return this[item2$1];
      }
      set item2(value) {
        super.item2 = value;
      }
      get item3() {
        return this[item3$0];
      }
      set item3(value) {
        super.item3 = value;
      }
      get item4() {
        return this[item4$];
      }
      set item4(value) {
        super.item4 = value;
      }
      static fromList(items) {
        if (items[$length] !== 4) {
          dart.throw(new core.ArgumentError.new("items must have length 4"));
        }
        return new (tuple.Tuple4$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4))).new(dart.legacy(T1).as(items[$_get](0)), dart.legacy(T2).as(items[$_get](1)), dart.legacy(T3).as(items[$_get](2)), dart.legacy(T4).as(items[$_get](3)));
      }
      withItem1(v) {
        T1L().as(v);
        return new (Tuple4OfT1L$T2L$T3L$T4L()).new(v, this.item2, this.item3, this.item4);
      }
      withItem2(v) {
        T2L().as(v);
        return new (Tuple4OfT1L$T2L$T3L$T4L()).new(this.item1, v, this.item3, this.item4);
      }
      withItem3(v) {
        T3L().as(v);
        return new (Tuple4OfT1L$T2L$T3L$T4L()).new(this.item1, this.item2, v, this.item4);
      }
      withItem4(v) {
        T4L().as(v);
        return new (Tuple4OfT1L$T2L$T3L$T4L()).new(this.item1, this.item2, this.item3, v);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : false;
        return core.List.from([this.item1, this.item2, this.item3, this.item4], {growable: growable});
      }
      toString() {
        return "[" + dart.str(this.item1) + ", " + dart.str(this.item2) + ", " + dart.str(this.item3) + ", " + dart.str(this.item4) + "]";
      }
      _equals(other) {
        if (other == null) return false;
        return Tuple4L().is(other) && dart.equals(other.item1, this.item1) && dart.equals(other.item2, this.item2) && dart.equals(other.item3, this.item3) && dart.equals(other.item4, this.item4);
      }
      get hashCode() {
        return hash.hash4(dart.hashCode(this.item1), dart.hashCode(this.item2), dart.hashCode(this.item3), dart.hashCode(this.item4));
      }
    }
    (Tuple4.new = function(item1, item2, item3, item4) {
      this[item1$1] = item1;
      this[item2$1] = item2;
      this[item3$0] = item3;
      this[item4$] = item4;
      ;
    }).prototype = Tuple4.prototype;
    dart.addTypeTests(Tuple4);
    Tuple4.prototype[_is_Tuple4_default] = true;
    dart.addTypeCaches(Tuple4);
    dart.setMethodSignature(Tuple4, () => ({
      __proto__: dart.getMethods(Tuple4.__proto__),
      withItem1: dart.fnType(dart.legacy(tuple.Tuple4$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4))), [dart.legacy(core.Object)]),
      withItem2: dart.fnType(dart.legacy(tuple.Tuple4$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4))), [dart.legacy(core.Object)]),
      withItem3: dart.fnType(dart.legacy(tuple.Tuple4$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4))), [dart.legacy(core.Object)]),
      withItem4: dart.fnType(dart.legacy(tuple.Tuple4$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4))), [dart.legacy(core.Object)]),
      toList: dart.fnType(dart.legacy(core.List), [], {growable: dart.legacy(core.bool)}, {}),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
    }));
    dart.setGetterSignature(Tuple4, () => ({
      __proto__: dart.getGetters(Tuple4.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(Tuple4, L0);
    dart.setFieldSignature(Tuple4, () => ({
      __proto__: dart.getFields(Tuple4.__proto__),
      item1: dart.finalFieldType(dart.legacy(T1)),
      item2: dart.finalFieldType(dart.legacy(T2)),
      item3: dart.finalFieldType(dart.legacy(T3)),
      item4: dart.finalFieldType(dart.legacy(T4))
    }));
    dart.defineExtensionMethods(Tuple4, ['toString', '_equals']);
    dart.defineExtensionAccessors(Tuple4, ['hashCode']);
    return Tuple4;
  });
  tuple.Tuple4 = tuple.Tuple4$();
  dart.addTypeTests(tuple.Tuple4, _is_Tuple4_default);
  const _is_Tuple5_default = Symbol('_is_Tuple5_default');
  var item1$2 = dart.privateName(tuple, "Tuple5.item1");
  var item2$2 = dart.privateName(tuple, "Tuple5.item2");
  var item3$1 = dart.privateName(tuple, "Tuple5.item3");
  var item4$0 = dart.privateName(tuple, "Tuple5.item4");
  var item5$ = dart.privateName(tuple, "Tuple5.item5");
  tuple.Tuple5$ = dart.generic((T1, T2, T3, T4, T5) => {
    var T1L = () => (T1L = dart.constFn(dart.legacy(T1)))();
    var Tuple5OfT1L$T2L$T3L$T4L$T5L = () => (Tuple5OfT1L$T2L$T3L$T4L$T5L = dart.constFn(tuple.Tuple5$(T1L(), T2L(), T3L(), T4L(), T5L())))();
    var T2L = () => (T2L = dart.constFn(dart.legacy(T2)))();
    var T3L = () => (T3L = dart.constFn(dart.legacy(T3)))();
    var T4L = () => (T4L = dart.constFn(dart.legacy(T4)))();
    var T5L = () => (T5L = dart.constFn(dart.legacy(T5)))();
    class Tuple5 extends core.Object {
      get item1() {
        return this[item1$2];
      }
      set item1(value) {
        super.item1 = value;
      }
      get item2() {
        return this[item2$2];
      }
      set item2(value) {
        super.item2 = value;
      }
      get item3() {
        return this[item3$1];
      }
      set item3(value) {
        super.item3 = value;
      }
      get item4() {
        return this[item4$0];
      }
      set item4(value) {
        super.item4 = value;
      }
      get item5() {
        return this[item5$];
      }
      set item5(value) {
        super.item5 = value;
      }
      static fromList(items) {
        if (items[$length] !== 5) {
          dart.throw(new core.ArgumentError.new("items must have length 5"));
        }
        return new (tuple.Tuple5$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5))).new(dart.legacy(T1).as(items[$_get](0)), dart.legacy(T2).as(items[$_get](1)), dart.legacy(T3).as(items[$_get](2)), dart.legacy(T4).as(items[$_get](3)), dart.legacy(T5).as(items[$_get](4)));
      }
      withItem1(v) {
        T1L().as(v);
        return new (Tuple5OfT1L$T2L$T3L$T4L$T5L()).new(v, this.item2, this.item3, this.item4, this.item5);
      }
      withItem2(v) {
        T2L().as(v);
        return new (Tuple5OfT1L$T2L$T3L$T4L$T5L()).new(this.item1, v, this.item3, this.item4, this.item5);
      }
      withItem3(v) {
        T3L().as(v);
        return new (Tuple5OfT1L$T2L$T3L$T4L$T5L()).new(this.item1, this.item2, v, this.item4, this.item5);
      }
      withItem4(v) {
        T4L().as(v);
        return new (Tuple5OfT1L$T2L$T3L$T4L$T5L()).new(this.item1, this.item2, this.item3, v, this.item5);
      }
      withItem5(v) {
        T5L().as(v);
        return new (Tuple5OfT1L$T2L$T3L$T4L$T5L()).new(this.item1, this.item2, this.item3, this.item4, v);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : false;
        return core.List.from([this.item1, this.item2, this.item3, this.item4, this.item5], {growable: growable});
      }
      toString() {
        return "[" + dart.str(this.item1) + ", " + dart.str(this.item2) + ", " + dart.str(this.item3) + ", " + dart.str(this.item4) + ", " + dart.str(this.item5) + "]";
      }
      _equals(other) {
        if (other == null) return false;
        return Tuple5L().is(other) && dart.equals(other.item1, this.item1) && dart.equals(other.item2, this.item2) && dart.equals(other.item3, this.item3) && dart.equals(other.item4, this.item4) && dart.equals(other.item5, this.item5);
      }
      get hashCode() {
        return hash.hashObjects([dart.hashCode(this.item1), dart.hashCode(this.item2), dart.hashCode(this.item3), dart.hashCode(this.item4), dart.hashCode(this.item5)]);
      }
    }
    (Tuple5.new = function(item1, item2, item3, item4, item5) {
      this[item1$2] = item1;
      this[item2$2] = item2;
      this[item3$1] = item3;
      this[item4$0] = item4;
      this[item5$] = item5;
      ;
    }).prototype = Tuple5.prototype;
    dart.addTypeTests(Tuple5);
    Tuple5.prototype[_is_Tuple5_default] = true;
    dart.addTypeCaches(Tuple5);
    dart.setMethodSignature(Tuple5, () => ({
      __proto__: dart.getMethods(Tuple5.__proto__),
      withItem1: dart.fnType(dart.legacy(tuple.Tuple5$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5))), [dart.legacy(core.Object)]),
      withItem2: dart.fnType(dart.legacy(tuple.Tuple5$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5))), [dart.legacy(core.Object)]),
      withItem3: dart.fnType(dart.legacy(tuple.Tuple5$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5))), [dart.legacy(core.Object)]),
      withItem4: dart.fnType(dart.legacy(tuple.Tuple5$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5))), [dart.legacy(core.Object)]),
      withItem5: dart.fnType(dart.legacy(tuple.Tuple5$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5))), [dart.legacy(core.Object)]),
      toList: dart.fnType(dart.legacy(core.List), [], {growable: dart.legacy(core.bool)}, {}),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
    }));
    dart.setGetterSignature(Tuple5, () => ({
      __proto__: dart.getGetters(Tuple5.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(Tuple5, L0);
    dart.setFieldSignature(Tuple5, () => ({
      __proto__: dart.getFields(Tuple5.__proto__),
      item1: dart.finalFieldType(dart.legacy(T1)),
      item2: dart.finalFieldType(dart.legacy(T2)),
      item3: dart.finalFieldType(dart.legacy(T3)),
      item4: dart.finalFieldType(dart.legacy(T4)),
      item5: dart.finalFieldType(dart.legacy(T5))
    }));
    dart.defineExtensionMethods(Tuple5, ['toString', '_equals']);
    dart.defineExtensionAccessors(Tuple5, ['hashCode']);
    return Tuple5;
  });
  tuple.Tuple5 = tuple.Tuple5$();
  dart.addTypeTests(tuple.Tuple5, _is_Tuple5_default);
  const _is_Tuple6_default = Symbol('_is_Tuple6_default');
  var item1$3 = dart.privateName(tuple, "Tuple6.item1");
  var item2$3 = dart.privateName(tuple, "Tuple6.item2");
  var item3$2 = dart.privateName(tuple, "Tuple6.item3");
  var item4$1 = dart.privateName(tuple, "Tuple6.item4");
  var item5$0 = dart.privateName(tuple, "Tuple6.item5");
  var item6$ = dart.privateName(tuple, "Tuple6.item6");
  tuple.Tuple6$ = dart.generic((T1, T2, T3, T4, T5, T6) => {
    var T1L = () => (T1L = dart.constFn(dart.legacy(T1)))();
    var Tuple6OfT1L$T2L$T3L$T4L$T5L$T6L = () => (Tuple6OfT1L$T2L$T3L$T4L$T5L$T6L = dart.constFn(tuple.Tuple6$(T1L(), T2L(), T3L(), T4L(), T5L(), T6L())))();
    var T2L = () => (T2L = dart.constFn(dart.legacy(T2)))();
    var T3L = () => (T3L = dart.constFn(dart.legacy(T3)))();
    var T4L = () => (T4L = dart.constFn(dart.legacy(T4)))();
    var T5L = () => (T5L = dart.constFn(dart.legacy(T5)))();
    var T6L = () => (T6L = dart.constFn(dart.legacy(T6)))();
    class Tuple6 extends core.Object {
      get item1() {
        return this[item1$3];
      }
      set item1(value) {
        super.item1 = value;
      }
      get item2() {
        return this[item2$3];
      }
      set item2(value) {
        super.item2 = value;
      }
      get item3() {
        return this[item3$2];
      }
      set item3(value) {
        super.item3 = value;
      }
      get item4() {
        return this[item4$1];
      }
      set item4(value) {
        super.item4 = value;
      }
      get item5() {
        return this[item5$0];
      }
      set item5(value) {
        super.item5 = value;
      }
      get item6() {
        return this[item6$];
      }
      set item6(value) {
        super.item6 = value;
      }
      static fromList(items) {
        if (items[$length] !== 6) {
          dart.throw(new core.ArgumentError.new("items must have length 6"));
        }
        return new (tuple.Tuple6$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6))).new(dart.legacy(T1).as(items[$_get](0)), dart.legacy(T2).as(items[$_get](1)), dart.legacy(T3).as(items[$_get](2)), dart.legacy(T4).as(items[$_get](3)), dart.legacy(T5).as(items[$_get](4)), dart.legacy(T6).as(items[$_get](5)));
      }
      withItem1(v) {
        T1L().as(v);
        return new (Tuple6OfT1L$T2L$T3L$T4L$T5L$T6L()).new(v, this.item2, this.item3, this.item4, this.item5, this.item6);
      }
      withItem2(v) {
        T2L().as(v);
        return new (Tuple6OfT1L$T2L$T3L$T4L$T5L$T6L()).new(this.item1, v, this.item3, this.item4, this.item5, this.item6);
      }
      withItem3(v) {
        T3L().as(v);
        return new (Tuple6OfT1L$T2L$T3L$T4L$T5L$T6L()).new(this.item1, this.item2, v, this.item4, this.item5, this.item6);
      }
      withItem4(v) {
        T4L().as(v);
        return new (Tuple6OfT1L$T2L$T3L$T4L$T5L$T6L()).new(this.item1, this.item2, this.item3, v, this.item5, this.item6);
      }
      withItem5(v) {
        T5L().as(v);
        return new (Tuple6OfT1L$T2L$T3L$T4L$T5L$T6L()).new(this.item1, this.item2, this.item3, this.item4, v, this.item6);
      }
      withItem6(v) {
        T6L().as(v);
        return new (Tuple6OfT1L$T2L$T3L$T4L$T5L$T6L()).new(this.item1, this.item2, this.item3, this.item4, this.item5, v);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : false;
        return core.List.from([this.item1, this.item2, this.item3, this.item4, this.item5, this.item6], {growable: growable});
      }
      toString() {
        return "[" + dart.str(this.item1) + ", " + dart.str(this.item2) + ", " + dart.str(this.item3) + ", " + dart.str(this.item4) + ", " + dart.str(this.item5) + ", " + dart.str(this.item6) + "]";
      }
      _equals(other) {
        if (other == null) return false;
        return Tuple6L().is(other) && dart.equals(other.item1, this.item1) && dart.equals(other.item2, this.item2) && dart.equals(other.item3, this.item3) && dart.equals(other.item4, this.item4) && dart.equals(other.item5, this.item5) && dart.equals(other.item6, this.item6);
      }
      get hashCode() {
        return hash.hashObjects([dart.hashCode(this.item1), dart.hashCode(this.item2), dart.hashCode(this.item3), dart.hashCode(this.item4), dart.hashCode(this.item5), dart.hashCode(this.item6)]);
      }
    }
    (Tuple6.new = function(item1, item2, item3, item4, item5, item6) {
      this[item1$3] = item1;
      this[item2$3] = item2;
      this[item3$2] = item3;
      this[item4$1] = item4;
      this[item5$0] = item5;
      this[item6$] = item6;
      ;
    }).prototype = Tuple6.prototype;
    dart.addTypeTests(Tuple6);
    Tuple6.prototype[_is_Tuple6_default] = true;
    dart.addTypeCaches(Tuple6);
    dart.setMethodSignature(Tuple6, () => ({
      __proto__: dart.getMethods(Tuple6.__proto__),
      withItem1: dart.fnType(dart.legacy(tuple.Tuple6$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6))), [dart.legacy(core.Object)]),
      withItem2: dart.fnType(dart.legacy(tuple.Tuple6$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6))), [dart.legacy(core.Object)]),
      withItem3: dart.fnType(dart.legacy(tuple.Tuple6$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6))), [dart.legacy(core.Object)]),
      withItem4: dart.fnType(dart.legacy(tuple.Tuple6$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6))), [dart.legacy(core.Object)]),
      withItem5: dart.fnType(dart.legacy(tuple.Tuple6$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6))), [dart.legacy(core.Object)]),
      withItem6: dart.fnType(dart.legacy(tuple.Tuple6$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6))), [dart.legacy(core.Object)]),
      toList: dart.fnType(dart.legacy(core.List), [], {growable: dart.legacy(core.bool)}, {}),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
    }));
    dart.setGetterSignature(Tuple6, () => ({
      __proto__: dart.getGetters(Tuple6.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(Tuple6, L0);
    dart.setFieldSignature(Tuple6, () => ({
      __proto__: dart.getFields(Tuple6.__proto__),
      item1: dart.finalFieldType(dart.legacy(T1)),
      item2: dart.finalFieldType(dart.legacy(T2)),
      item3: dart.finalFieldType(dart.legacy(T3)),
      item4: dart.finalFieldType(dart.legacy(T4)),
      item5: dart.finalFieldType(dart.legacy(T5)),
      item6: dart.finalFieldType(dart.legacy(T6))
    }));
    dart.defineExtensionMethods(Tuple6, ['toString', '_equals']);
    dart.defineExtensionAccessors(Tuple6, ['hashCode']);
    return Tuple6;
  });
  tuple.Tuple6 = tuple.Tuple6$();
  dart.addTypeTests(tuple.Tuple6, _is_Tuple6_default);
  const _is_Tuple7_default = Symbol('_is_Tuple7_default');
  var item1$4 = dart.privateName(tuple, "Tuple7.item1");
  var item2$4 = dart.privateName(tuple, "Tuple7.item2");
  var item3$3 = dart.privateName(tuple, "Tuple7.item3");
  var item4$2 = dart.privateName(tuple, "Tuple7.item4");
  var item5$1 = dart.privateName(tuple, "Tuple7.item5");
  var item6$0 = dart.privateName(tuple, "Tuple7.item6");
  var item7$ = dart.privateName(tuple, "Tuple7.item7");
  tuple.Tuple7$ = dart.generic((T1, T2, T3, T4, T5, T6, T7) => {
    var T1L = () => (T1L = dart.constFn(dart.legacy(T1)))();
    var Tuple7OfT1L$T2L$T3L$T4L$T5L$T6L$T7L = () => (Tuple7OfT1L$T2L$T3L$T4L$T5L$T6L$T7L = dart.constFn(tuple.Tuple7$(T1L(), T2L(), T3L(), T4L(), T5L(), T6L(), T7L())))();
    var T2L = () => (T2L = dart.constFn(dart.legacy(T2)))();
    var T3L = () => (T3L = dart.constFn(dart.legacy(T3)))();
    var T4L = () => (T4L = dart.constFn(dart.legacy(T4)))();
    var T5L = () => (T5L = dart.constFn(dart.legacy(T5)))();
    var T6L = () => (T6L = dart.constFn(dart.legacy(T6)))();
    var T7L = () => (T7L = dart.constFn(dart.legacy(T7)))();
    class Tuple7 extends core.Object {
      get item1() {
        return this[item1$4];
      }
      set item1(value) {
        super.item1 = value;
      }
      get item2() {
        return this[item2$4];
      }
      set item2(value) {
        super.item2 = value;
      }
      get item3() {
        return this[item3$3];
      }
      set item3(value) {
        super.item3 = value;
      }
      get item4() {
        return this[item4$2];
      }
      set item4(value) {
        super.item4 = value;
      }
      get item5() {
        return this[item5$1];
      }
      set item5(value) {
        super.item5 = value;
      }
      get item6() {
        return this[item6$0];
      }
      set item6(value) {
        super.item6 = value;
      }
      get item7() {
        return this[item7$];
      }
      set item7(value) {
        super.item7 = value;
      }
      static fromList(items) {
        if (items[$length] !== 7) {
          dart.throw(new core.ArgumentError.new("items must have length 7"));
        }
        return new (tuple.Tuple7$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6), dart.legacy(T7))).new(dart.legacy(T1).as(items[$_get](0)), dart.legacy(T2).as(items[$_get](1)), dart.legacy(T3).as(items[$_get](2)), dart.legacy(T4).as(items[$_get](3)), dart.legacy(T5).as(items[$_get](4)), dart.legacy(T6).as(items[$_get](5)), dart.legacy(T7).as(items[$_get](6)));
      }
      withItem1(v) {
        T1L().as(v);
        return new (Tuple7OfT1L$T2L$T3L$T4L$T5L$T6L$T7L()).new(v, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7);
      }
      withItem2(v) {
        T2L().as(v);
        return new (Tuple7OfT1L$T2L$T3L$T4L$T5L$T6L$T7L()).new(this.item1, v, this.item3, this.item4, this.item5, this.item6, this.item7);
      }
      withItem3(v) {
        T3L().as(v);
        return new (Tuple7OfT1L$T2L$T3L$T4L$T5L$T6L$T7L()).new(this.item1, this.item2, v, this.item4, this.item5, this.item6, this.item7);
      }
      withItem4(v) {
        T4L().as(v);
        return new (Tuple7OfT1L$T2L$T3L$T4L$T5L$T6L$T7L()).new(this.item1, this.item2, this.item3, v, this.item5, this.item6, this.item7);
      }
      withItem5(v) {
        T5L().as(v);
        return new (Tuple7OfT1L$T2L$T3L$T4L$T5L$T6L$T7L()).new(this.item1, this.item2, this.item3, this.item4, v, this.item6, this.item7);
      }
      withItem6(v) {
        T6L().as(v);
        return new (Tuple7OfT1L$T2L$T3L$T4L$T5L$T6L$T7L()).new(this.item1, this.item2, this.item3, this.item4, this.item5, v, this.item7);
      }
      withItem7(v) {
        T7L().as(v);
        return new (Tuple7OfT1L$T2L$T3L$T4L$T5L$T6L$T7L()).new(this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, v);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : false;
        return core.List.from([this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7], {growable: growable});
      }
      toString() {
        return "[" + dart.str(this.item1) + ", " + dart.str(this.item2) + ", " + dart.str(this.item3) + ", " + dart.str(this.item4) + ", " + dart.str(this.item5) + ", " + dart.str(this.item6) + ", " + dart.str(this.item7) + "]";
      }
      _equals(other) {
        if (other == null) return false;
        return Tuple7L().is(other) && dart.equals(other.item1, this.item1) && dart.equals(other.item2, this.item2) && dart.equals(other.item3, this.item3) && dart.equals(other.item4, this.item4) && dart.equals(other.item5, this.item5) && dart.equals(other.item6, this.item6) && dart.equals(other.item7, this.item7);
      }
      get hashCode() {
        return hash.hashObjects([dart.hashCode(this.item1), dart.hashCode(this.item2), dart.hashCode(this.item3), dart.hashCode(this.item4), dart.hashCode(this.item5), dart.hashCode(this.item6), dart.hashCode(this.item7)]);
      }
    }
    (Tuple7.new = function(item1, item2, item3, item4, item5, item6, item7) {
      this[item1$4] = item1;
      this[item2$4] = item2;
      this[item3$3] = item3;
      this[item4$2] = item4;
      this[item5$1] = item5;
      this[item6$0] = item6;
      this[item7$] = item7;
      ;
    }).prototype = Tuple7.prototype;
    dart.addTypeTests(Tuple7);
    Tuple7.prototype[_is_Tuple7_default] = true;
    dart.addTypeCaches(Tuple7);
    dart.setMethodSignature(Tuple7, () => ({
      __proto__: dart.getMethods(Tuple7.__proto__),
      withItem1: dart.fnType(dart.legacy(tuple.Tuple7$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6), dart.legacy(T7))), [dart.legacy(core.Object)]),
      withItem2: dart.fnType(dart.legacy(tuple.Tuple7$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6), dart.legacy(T7))), [dart.legacy(core.Object)]),
      withItem3: dart.fnType(dart.legacy(tuple.Tuple7$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6), dart.legacy(T7))), [dart.legacy(core.Object)]),
      withItem4: dart.fnType(dart.legacy(tuple.Tuple7$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6), dart.legacy(T7))), [dart.legacy(core.Object)]),
      withItem5: dart.fnType(dart.legacy(tuple.Tuple7$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6), dart.legacy(T7))), [dart.legacy(core.Object)]),
      withItem6: dart.fnType(dart.legacy(tuple.Tuple7$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6), dart.legacy(T7))), [dart.legacy(core.Object)]),
      withItem7: dart.fnType(dart.legacy(tuple.Tuple7$(dart.legacy(T1), dart.legacy(T2), dart.legacy(T3), dart.legacy(T4), dart.legacy(T5), dart.legacy(T6), dart.legacy(T7))), [dart.legacy(core.Object)]),
      toList: dart.fnType(dart.legacy(core.List), [], {growable: dart.legacy(core.bool)}, {}),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
    }));
    dart.setGetterSignature(Tuple7, () => ({
      __proto__: dart.getGetters(Tuple7.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(Tuple7, L0);
    dart.setFieldSignature(Tuple7, () => ({
      __proto__: dart.getFields(Tuple7.__proto__),
      item1: dart.finalFieldType(dart.legacy(T1)),
      item2: dart.finalFieldType(dart.legacy(T2)),
      item3: dart.finalFieldType(dart.legacy(T3)),
      item4: dart.finalFieldType(dart.legacy(T4)),
      item5: dart.finalFieldType(dart.legacy(T5)),
      item6: dart.finalFieldType(dart.legacy(T6)),
      item7: dart.finalFieldType(dart.legacy(T7))
    }));
    dart.defineExtensionMethods(Tuple7, ['toString', '_equals']);
    dart.defineExtensionAccessors(Tuple7, ['hashCode']);
    return Tuple7;
  });
  tuple.Tuple7 = tuple.Tuple7$();
  dart.addTypeTests(tuple.Tuple7, _is_Tuple7_default);
  dart.trackLibraries("packages/tuple/tuple", {
    "package:tuple/tuple.dart": tuple
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tuple.dart"],"names":[],"mappings":"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","file":"tuple.unsound.ddc.js"}');
  // Exports:
  return {
    tuple: tuple
  };
}));

//# sourceMappingURL=tuple.unsound.ddc.js.map
