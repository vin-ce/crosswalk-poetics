(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb2, mod) => function __require() {
    return mod || (0, cb2[Object.keys(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __createBinding2;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id2, v2) {
            return exports2[id2] = previous ? previous(id2, v2) : v2;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p2 in b)
            if (Object.prototype.hasOwnProperty.call(b, p2))
              d[p2] = b[p2];
        };
        __extends2 = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t2) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p2 in s)
              if (Object.prototype.hasOwnProperty.call(s, p2))
                t2[p2] = s[p2];
          }
          return t2;
        };
        __rest2 = function(s, e) {
          var t2 = {};
          for (var p2 in s)
            if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
              t2[p2] = s[p2];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
              if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
                t2[p2[i]] = s[p2[i]];
            }
          return t2;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P2, generator) {
          function adopt(value) {
            return value instanceof P2 ? value : new P2(function(resolve) {
              resolve(value);
            });
          }
          return new (P2 || (P2 = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t2[0] & 1)
              throw t2[1];
            return t2[1];
          }, trys: [], ops: [] }, f, y2, t2, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v2) {
              return step([n, v2]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                  return t2;
                if (y2 = 0, t2)
                  op = [op[0] & 2, t2.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t2 = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y2 = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t2[1]) {
                      _.label = t2[1];
                      t2 = op;
                      break;
                    }
                    if (t2 && _.label < t2[2]) {
                      _.label = t2[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t2[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y2 = 0;
              } finally {
                f = t2 = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m, o) {
          for (var p2 in m)
            if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o, p2))
              __createBinding2(o, m, p2);
        };
        __createBinding2 = Object.create ? function(o, m, k2, k22) {
          if (k22 === void 0)
            k22 = k2;
          Object.defineProperty(o, k22, { enumerable: true, get: function() {
            return m[k2];
          } });
        } : function(o, m, k2, k22) {
          if (k22 === void 0)
            k22 = k2;
          o[k22] = m[k2];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar2 = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar2.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar2;
        };
        __spread2 = function() {
          for (var ar2 = [], i = 0; i < arguments.length; i++)
            ar2 = ar2.concat(__read2(arguments[i]));
          return ar2;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k2 = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j2 = 0, jl = a.length; j2 < jl; j2++, k2++)
              r[k2] = a[j2];
          return r;
        };
        __spreadArray2 = function(to2, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l2 = from.length, ar2; i < l2; i++) {
              if (ar2 || !(i in from)) {
                if (!ar2)
                  ar2 = Array.prototype.slice.call(from, 0, i);
                ar2[i] = from[i];
              }
            }
          return to2.concat(ar2 || Array.prototype.slice.call(from));
        };
        __await2 = function(v2) {
          return this instanceof __await2 ? (this.v = v2, this) : new __await2(v2);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q3 = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v2) {
                return new Promise(function(a, b) {
                  q3.push([n, v2, a, b]) > 1 || resume(n, v2);
                });
              };
          }
          function resume(n, v2) {
            try {
              step(g[n](v2));
            } catch (e) {
              settle(q3[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q3[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v2) {
            if (f(v2), q3.shift(), q3.length)
              resume(q3[0][0], q3[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i, p2;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v2) {
              return (p2 = !p2) ? { value: __await2(o[n](v2)), done: n === "return" } : f ? f(v2) : v2;
            } : f;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v2) {
              return new Promise(function(resolve, reject) {
                v2 = o[n](v2), settle(resolve, reject, v2.done, v2.value);
              });
            };
          }
          function settle(resolve, reject, d, v2) {
            Promise.resolve(v2).then(function(v3) {
              resolve({ value: v3, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v2) {
          Object.defineProperty(o, "default", { enumerable: true, value: v2 });
        } : function(o, v2) {
          o["default"] = v2;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k2 in mod)
              if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
                __createBinding2(result, mod, k2);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      });
    }
  });

  // node_modules/tslib/modules/index.js
  var import_tslib = __toModule(require_tslib());
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet
  } = import_tslib.default;

  // node_modules/@firebase/util/dist/index.esm2017.js
  var Deferred = class {
    constructor() {
      this.reject = () => {
      };
      this.resolve = () => {
      };
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
    wrapCallback(callback) {
      return (error, value) => {
        if (error) {
          this.reject(error);
        } else {
          this.resolve(value);
        }
        if (typeof callback === "function") {
          this.promise.catch(() => {
          });
          if (callback.length === 1) {
            callback(error);
          } else {
            callback(error, value);
          }
        }
      };
    }
  };
  function getUA() {
    if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
      return navigator["userAgent"];
    } else {
      return "";
    }
  }
  function isMobileCordova() {
    return typeof window !== "undefined" && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
  }
  function isBrowserExtension() {
    const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
    return typeof runtime === "object" && runtime.id !== void 0;
  }
  function isReactNative() {
    return typeof navigator === "object" && navigator["product"] === "ReactNative";
  }
  function isElectron() {
    return getUA().indexOf("Electron/") >= 0;
  }
  function isIE() {
    const ua3 = getUA();
    return ua3.indexOf("MSIE ") >= 0 || ua3.indexOf("Trident/") >= 0;
  }
  function isUWP() {
    return getUA().indexOf("MSAppHost/") >= 0;
  }
  var ERROR_NAME = "FirebaseError";
  var FirebaseError = class extends Error {
    constructor(code, message, customData) {
      super(message);
      this.code = code;
      this.customData = customData;
      this.name = ERROR_NAME;
      Object.setPrototypeOf(this, FirebaseError.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ErrorFactory.prototype.create);
      }
    }
  };
  var ErrorFactory = class {
    constructor(service, serviceName, errors) {
      this.service = service;
      this.serviceName = serviceName;
      this.errors = errors;
    }
    create(code, ...data) {
      const customData = data[0] || {};
      const fullCode = `${this.service}/${code}`;
      const template = this.errors[code];
      const message = template ? replaceTemplate(template, customData) : "Error";
      const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
      const error = new FirebaseError(fullCode, fullMessage, customData);
      return error;
    }
  };
  function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
      const value = data[key];
      return value != null ? String(value) : `<${key}?>`;
    });
  }
  var PATTERN = /\{\$([^}]+)}/g;
  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k2 of aKeys) {
      if (!bKeys.includes(k2)) {
        return false;
      }
      const aProp = a[k2];
      const bProp = b[k2];
      if (isObject(aProp) && isObject(bProp)) {
        if (!deepEqual(aProp, bProp)) {
          return false;
        }
      } else if (aProp !== bProp) {
        return false;
      }
    }
    for (const k2 of bKeys) {
      if (!aKeys.includes(k2)) {
        return false;
      }
    }
    return true;
  }
  function isObject(thing) {
    return thing !== null && typeof thing === "object";
  }
  var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
  function getModularInstance(service) {
    if (service && service._delegate) {
      return service._delegate;
    } else {
      return service;
    }
  }

  // node_modules/@firebase/component/dist/index.esm.js
  var Component = function() {
    function Component2(name3, instanceFactory, type) {
      this.name = name3;
      this.instanceFactory = instanceFactory;
      this.type = type;
      this.multipleInstances = false;
      this.serviceProps = {};
      this.instantiationMode = "LAZY";
      this.onInstanceCreated = null;
    }
    Component2.prototype.setInstantiationMode = function(mode) {
      this.instantiationMode = mode;
      return this;
    };
    Component2.prototype.setMultipleInstances = function(multipleInstances) {
      this.multipleInstances = multipleInstances;
      return this;
    };
    Component2.prototype.setServiceProps = function(props) {
      this.serviceProps = props;
      return this;
    };
    Component2.prototype.setInstanceCreatedCallback = function(callback) {
      this.onInstanceCreated = callback;
      return this;
    };
    return Component2;
  }();
  var DEFAULT_ENTRY_NAME = "[DEFAULT]";
  var Provider = function() {
    function Provider2(name3, container) {
      this.name = name3;
      this.container = container;
      this.component = null;
      this.instances = new Map();
      this.instancesDeferred = new Map();
      this.instancesOptions = new Map();
      this.onInitCallbacks = new Map();
    }
    Provider2.prototype.get = function(identifier) {
      var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      if (!this.instancesDeferred.has(normalizedIdentifier)) {
        var deferred = new Deferred();
        this.instancesDeferred.set(normalizedIdentifier, deferred);
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
          try {
            var instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            if (instance) {
              deferred.resolve(instance);
            }
          } catch (e) {
          }
        }
      }
      return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider2.prototype.getImmediate = function(options) {
      var _a2;
      var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
      var optional = (_a2 = options === null || options === void 0 ? void 0 : options.optional) !== null && _a2 !== void 0 ? _a2 : false;
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          return this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
        } catch (e) {
          if (optional) {
            return null;
          } else {
            throw e;
          }
        }
      } else {
        if (optional) {
          return null;
        } else {
          throw Error("Service " + this.name + " is not available");
        }
      }
    };
    Provider2.prototype.getComponent = function() {
      return this.component;
    };
    Provider2.prototype.setComponent = function(component) {
      var e_1, _a2;
      if (component.name !== this.name) {
        throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
      }
      if (this.component) {
        throw Error("Component for " + this.name + " has already been provided");
      }
      this.component = component;
      if (!this.shouldAutoInitialize()) {
        return;
      }
      if (isComponentEager(component)) {
        try {
          this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
        } catch (e) {
        }
      }
      try {
        for (var _b = __values(this.instancesDeferred.entries()), _c2 = _b.next(); !_c2.done; _c2 = _b.next()) {
          var _d = __read(_c2.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
          var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          try {
            var instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            instanceDeferred.resolve(instance);
          } catch (e) {
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    };
    Provider2.prototype.clearInstance = function(identifier) {
      if (identifier === void 0) {
        identifier = DEFAULT_ENTRY_NAME;
      }
      this.instancesDeferred.delete(identifier);
      this.instancesOptions.delete(identifier);
      this.instances.delete(identifier);
    };
    Provider2.prototype.delete = function() {
      return __awaiter(this, void 0, void 0, function() {
        var services;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              services = Array.from(this.instances.values());
              return [4, Promise.all(__spreadArray(__spreadArray([], __read(services.filter(function(service) {
                return "INTERNAL" in service;
              }).map(function(service) {
                return service.INTERNAL.delete();
              }))), __read(services.filter(function(service) {
                return "_delete" in service;
              }).map(function(service) {
                return service._delete();
              }))))];
            case 1:
              _a2.sent();
              return [2];
          }
        });
      });
    };
    Provider2.prototype.isComponentSet = function() {
      return this.component != null;
    };
    Provider2.prototype.isInitialized = function(identifier) {
      if (identifier === void 0) {
        identifier = DEFAULT_ENTRY_NAME;
      }
      return this.instances.has(identifier);
    };
    Provider2.prototype.getOptions = function(identifier) {
      if (identifier === void 0) {
        identifier = DEFAULT_ENTRY_NAME;
      }
      return this.instancesOptions.get(identifier) || {};
    };
    Provider2.prototype.initialize = function(opts) {
      var e_2, _a2;
      if (opts === void 0) {
        opts = {};
      }
      var _b = opts.options, options = _b === void 0 ? {} : _b;
      var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
      if (this.isInitialized(normalizedIdentifier)) {
        throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
      }
      if (!this.isComponentSet()) {
        throw Error("Component " + this.name + " has not been registered yet");
      }
      var instance = this.getOrInitializeService({
        instanceIdentifier: normalizedIdentifier,
        options
      });
      try {
        for (var _c2 = __values(this.instancesDeferred.entries()), _d = _c2.next(); !_d.done; _d = _c2.next()) {
          var _e2 = __read(_d.value, 2), instanceIdentifier = _e2[0], instanceDeferred = _e2[1];
          var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          if (normalizedIdentifier === normalizedDeferredIdentifier) {
            instanceDeferred.resolve(instance);
          }
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_d && !_d.done && (_a2 = _c2.return))
            _a2.call(_c2);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      return instance;
    };
    Provider2.prototype.onInit = function(callback, identifier) {
      var _a2;
      var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      var existingCallbacks = (_a2 = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a2 !== void 0 ? _a2 : new Set();
      existingCallbacks.add(callback);
      this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
      var existingInstance = this.instances.get(normalizedIdentifier);
      if (existingInstance) {
        callback(existingInstance, normalizedIdentifier);
      }
      return function() {
        existingCallbacks.delete(callback);
      };
    };
    Provider2.prototype.invokeOnInitCallbacks = function(instance, identifier) {
      var e_3, _a2;
      var callbacks = this.onInitCallbacks.get(identifier);
      if (!callbacks) {
        return;
      }
      try {
        for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
          var callback = callbacks_1_1.value;
          try {
            callback(instance, identifier);
          } catch (_b) {
          }
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (callbacks_1_1 && !callbacks_1_1.done && (_a2 = callbacks_1.return))
            _a2.call(callbacks_1);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
    };
    Provider2.prototype.getOrInitializeService = function(_a2) {
      var instanceIdentifier = _a2.instanceIdentifier, _b = _a2.options, options = _b === void 0 ? {} : _b;
      var instance = this.instances.get(instanceIdentifier);
      if (!instance && this.component) {
        instance = this.component.instanceFactory(this.container, {
          instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
          options
        });
        this.instances.set(instanceIdentifier, instance);
        this.instancesOptions.set(instanceIdentifier, options);
        this.invokeOnInitCallbacks(instance, instanceIdentifier);
        if (this.component.onInstanceCreated) {
          try {
            this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
          } catch (_c2) {
          }
        }
      }
      return instance || null;
    };
    Provider2.prototype.normalizeInstanceIdentifier = function(identifier) {
      if (identifier === void 0) {
        identifier = DEFAULT_ENTRY_NAME;
      }
      if (this.component) {
        return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
      } else {
        return identifier;
      }
    };
    Provider2.prototype.shouldAutoInitialize = function() {
      return !!this.component && this.component.instantiationMode !== "EXPLICIT";
    };
    return Provider2;
  }();
  function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
  }
  function isComponentEager(component) {
    return component.instantiationMode === "EAGER";
  }
  var ComponentContainer = function() {
    function ComponentContainer2(name3) {
      this.name = name3;
      this.providers = new Map();
    }
    ComponentContainer2.prototype.addComponent = function(component) {
      var provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        throw new Error("Component " + component.name + " has already been registered with " + this.name);
      }
      provider.setComponent(component);
    };
    ComponentContainer2.prototype.addOrOverwriteComponent = function(component) {
      var provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        this.providers.delete(component.name);
      }
      this.addComponent(component);
    };
    ComponentContainer2.prototype.getProvider = function(name3) {
      if (this.providers.has(name3)) {
        return this.providers.get(name3);
      }
      var provider = new Provider(name3, this);
      this.providers.set(name3, provider);
      return provider;
    };
    ComponentContainer2.prototype.getProviders = function() {
      return Array.from(this.providers.values());
    };
    return ComponentContainer2;
  }();

  // node_modules/@firebase/logger/dist/index.esm2017.js
  var instances = [];
  var LogLevel;
  (function(LogLevel2) {
    LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
    LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
    LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
    LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
    LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
    LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
  })(LogLevel || (LogLevel = {}));
  var levelStringToEnum = {
    "debug": LogLevel.DEBUG,
    "verbose": LogLevel.VERBOSE,
    "info": LogLevel.INFO,
    "warn": LogLevel.WARN,
    "error": LogLevel.ERROR,
    "silent": LogLevel.SILENT
  };
  var defaultLogLevel = LogLevel.INFO;
  var ConsoleMethod = {
    [LogLevel.DEBUG]: "log",
    [LogLevel.VERBOSE]: "log",
    [LogLevel.INFO]: "info",
    [LogLevel.WARN]: "warn",
    [LogLevel.ERROR]: "error"
  };
  var defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
      return;
    }
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
      console[method](`[${now}]  ${instance.name}:`, ...args);
    } else {
      throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
  };
  var Logger = class {
    constructor(name3) {
      this.name = name3;
      this._logLevel = defaultLogLevel;
      this._logHandler = defaultLogHandler;
      this._userLogHandler = null;
      instances.push(this);
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(val) {
      if (!(val in LogLevel)) {
        throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
      }
      this._logLevel = val;
    }
    setLogLevel(val) {
      this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(val) {
      if (typeof val !== "function") {
        throw new TypeError("Value assigned to `logHandler` must be a function");
      }
      this._logHandler = val;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(val) {
      this._userLogHandler = val;
    }
    debug(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
      this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
      this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
      this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
      this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
      this._logHandler(this, LogLevel.ERROR, ...args);
    }
  };

  // node_modules/@firebase/app/dist/index.esm2017.js
  var PlatformLoggerServiceImpl = class {
    constructor(container) {
      this.container = container;
    }
    getPlatformInfoString() {
      const providers = this.container.getProviders();
      return providers.map((provider) => {
        if (isVersionServiceProvider(provider)) {
          const service = provider.getImmediate();
          return `${service.library}/${service.version}`;
        } else {
          return null;
        }
      }).filter((logString) => logString).join(" ");
    }
  };
  function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
  }
  var name$o = "@firebase/app";
  var version$1 = "0.7.5";
  var logger = new Logger("@firebase/app");
  var name$n = "@firebase/app-compat";
  var name$m = "@firebase/analytics-compat";
  var name$l = "@firebase/analytics";
  var name$k = "@firebase/app-check-compat";
  var name$j = "@firebase/app-check";
  var name$i = "@firebase/auth";
  var name$h = "@firebase/auth-compat";
  var name$g = "@firebase/database";
  var name$f = "@firebase/database-compat";
  var name$e = "@firebase/functions";
  var name$d = "@firebase/functions-compat";
  var name$c = "@firebase/installations";
  var name$b = "@firebase/installations-compat";
  var name$a = "@firebase/messaging";
  var name$9 = "@firebase/messaging-compat";
  var name$8 = "@firebase/performance";
  var name$7 = "@firebase/performance-compat";
  var name$6 = "@firebase/remote-config";
  var name$5 = "@firebase/remote-config-compat";
  var name$4 = "@firebase/storage";
  var name$3 = "@firebase/storage-compat";
  var name$2 = "@firebase/firestore";
  var name$1 = "@firebase/firestore-compat";
  var name = "firebase";
  var version = "9.2.0";
  var DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
  var PLATFORM_LOG_STRING = {
    [name$o]: "fire-core",
    [name$n]: "fire-core-compat",
    [name$l]: "fire-analytics",
    [name$m]: "fire-analytics-compat",
    [name$j]: "fire-app-check",
    [name$k]: "fire-app-check-compat",
    [name$i]: "fire-auth",
    [name$h]: "fire-auth-compat",
    [name$g]: "fire-rtdb",
    [name$f]: "fire-rtdb-compat",
    [name$e]: "fire-fn",
    [name$d]: "fire-fn-compat",
    [name$c]: "fire-iid",
    [name$b]: "fire-iid-compat",
    [name$a]: "fire-fcm",
    [name$9]: "fire-fcm-compat",
    [name$8]: "fire-perf",
    [name$7]: "fire-perf-compat",
    [name$6]: "fire-rc",
    [name$5]: "fire-rc-compat",
    [name$4]: "fire-gcs",
    [name$3]: "fire-gcs-compat",
    [name$2]: "fire-fst",
    [name$1]: "fire-fst-compat",
    "fire-js": "fire-js",
    [name]: "fire-js-all"
  };
  var _apps = new Map();
  var _components = new Map();
  function _addComponent(app2, component) {
    try {
      app2.container.addComponent(component);
    } catch (e) {
      logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app2.name}`, e);
    }
  }
  function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
      logger.debug(`There were multiple attempts to register component ${componentName}.`);
      return false;
    }
    _components.set(componentName, component);
    for (const app2 of _apps.values()) {
      _addComponent(app2, component);
    }
    return true;
  }
  function _getProvider(app2, name3) {
    return app2.container.getProvider(name3);
  }
  var ERRORS = {
    ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ["bad-app-name"]: "Illegal App name: '{$appName}",
    ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
    ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument"]: "First argument to `onLog` must be null or a function."
  };
  var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
  var FirebaseAppImpl = class {
    constructor(options, config, container) {
      this._isDeleted = false;
      this._options = Object.assign({}, options);
      this._config = Object.assign({}, config);
      this._name = config.name;
      this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
      this._container = container;
      this.container.addComponent(new Component("app", () => this, "PUBLIC"));
    }
    get automaticDataCollectionEnabled() {
      this.checkDestroyed();
      return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
      this.checkDestroyed();
      this._automaticDataCollectionEnabled = val;
    }
    get name() {
      this.checkDestroyed();
      return this._name;
    }
    get options() {
      this.checkDestroyed();
      return this._options;
    }
    get config() {
      this.checkDestroyed();
      return this._config;
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(val) {
      this._isDeleted = val;
    }
    checkDestroyed() {
      if (this.isDeleted) {
        throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
      }
    }
  };
  var SDK_VERSION = version;
  function initializeApp(options, rawConfig = {}) {
    if (typeof rawConfig !== "object") {
      const name4 = rawConfig;
      rawConfig = { name: name4 };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
    const name3 = config.name;
    if (typeof name3 !== "string" || !name3) {
      throw ERROR_FACTORY.create("bad-app-name", {
        appName: String(name3)
      });
    }
    const existingApp = _apps.get(name3);
    if (existingApp) {
      if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
        return existingApp;
      } else {
        throw ERROR_FACTORY.create("duplicate-app", { appName: name3 });
      }
    }
    const container = new ComponentContainer(name3);
    for (const component of _components.values()) {
      container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name3, newApp);
    return newApp;
  }
  function getApp(name3 = DEFAULT_ENTRY_NAME2) {
    const app2 = _apps.get(name3);
    if (!app2) {
      throw ERROR_FACTORY.create("no-app", { appName: name3 });
    }
    return app2;
  }
  function registerVersion(libraryKeyOrName, version3, variant) {
    var _a2;
    let library = (_a2 = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a2 !== void 0 ? _a2 : libraryKeyOrName;
    if (variant) {
      library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version3.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      const warning = [
        `Unable to register library "${library}" with version "${version3}":`
      ];
      if (libraryMismatch) {
        warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push(`version name "${version3}" contains illegal characters (whitespace or "/")`);
      }
      logger.warn(warning.join(" "));
      return;
    }
    _registerComponent(new Component(`${library}-version`, () => ({ library, version: version3 }), "VERSION"));
  }
  function registerCoreComponents(variant) {
    _registerComponent(new Component("platform-logger", (container) => new PlatformLoggerServiceImpl(container), "PRIVATE"));
    registerVersion(name$o, version$1, variant);
    registerVersion(name$o, version$1, "esm2017");
    registerVersion("fire-js", "");
  }
  registerCoreComponents("");

  // node_modules/@firebase/webchannel-wrapper/dist/index.esm2017.js
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var esm = {};
  var k;
  var goog = goog || {};
  var l = commonjsGlobal || self;
  function aa() {
  }
  function ba(a) {
    var b = typeof a;
    b = b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return b == "array" || b == "object" && typeof a.length == "number";
  }
  function p(a) {
    var b = typeof a;
    return b == "object" && a != null || b == "function";
  }
  function da(a) {
    return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa);
  }
  var ea = "closure_uid_" + (1e9 * Math.random() >>> 0);
  var fa = 0;
  function ha(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ia(a, b, c) {
    if (!a)
      throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function() {
      return a.apply(b, arguments);
    };
  }
  function q(a, b, c) {
    Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? q = ha : q = ia;
    return q.apply(null, arguments);
  }
  function ja(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function t(a, b) {
    function c() {
    }
    c.prototype = b.prototype;
    a.Z = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Vb = function(d, e, f) {
      for (var h = Array(arguments.length - 2), n = 2; n < arguments.length; n++)
        h[n - 2] = arguments[n];
      return b.prototype[e].apply(d, h);
    };
  }
  function v() {
    this.s = this.s;
    this.o = this.o;
  }
  var ka = 0;
  var la = {};
  v.prototype.s = false;
  v.prototype.na = function() {
    if (!this.s && (this.s = true, this.M(), ka != 0)) {
      var a = da(this);
      delete la[a];
    }
  };
  v.prototype.M = function() {
    if (this.o)
      for (; this.o.length; )
        this.o.shift()();
  };
  var ma = Array.prototype.indexOf ? function(a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function(a, b) {
    if (typeof a === "string")
      return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
    for (let c = 0; c < a.length; c++)
      if (c in a && a[c] === b)
        return c;
    return -1;
  };
  var na = Array.prototype.forEach ? function(a, b, c) {
    Array.prototype.forEach.call(a, b, c);
  } : function(a, b, c) {
    const d = a.length, e = typeof a === "string" ? a.split("") : a;
    for (let f = 0; f < d; f++)
      f in e && b.call(c, e[f], f, a);
  };
  function oa(a) {
    a: {
      var b = pa;
      const c = a.length, d = typeof a === "string" ? a.split("") : a;
      for (let e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : typeof a === "string" ? a.charAt(b) : a[b];
  }
  function qa(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function ra(a) {
    const b = a.length;
    if (0 < b) {
      const c = Array(b);
      for (let d = 0; d < b; d++)
        c[d] = a[d];
      return c;
    }
    return [];
  }
  function sa(a) {
    return /^[\s\xa0]*$/.test(a);
  }
  var ta = String.prototype.trim ? function(a) {
    return a.trim();
  } : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  };
  function w(a, b) {
    return a.indexOf(b) != -1;
  }
  function ua(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var x;
  a: {
    va2 = l.navigator;
    if (va2) {
      wa = va2.userAgent;
      if (wa) {
        x = wa;
        break a;
      }
    }
    x = "";
  }
  var va2;
  var wa;
  function xa(a, b, c) {
    for (const d in a)
      b.call(c, a[d], d, a);
  }
  function ya(a) {
    const b = {};
    for (const c in a)
      b[c] = a[c];
    return b;
  }
  var za = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function Aa(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d)
        a[c] = d[c];
      for (let f = 0; f < za.length; f++)
        c = za[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function Ca(a) {
    Ca[" "](a);
    return a;
  }
  Ca[" "] = aa;
  function Fa(a) {
    var b = Ga;
    return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9);
  }
  var Ha = w(x, "Opera");
  var y = w(x, "Trident") || w(x, "MSIE");
  var Ia = w(x, "Edge");
  var Ja = Ia || y;
  var Ka = w(x, "Gecko") && !(w(x.toLowerCase(), "webkit") && !w(x, "Edge")) && !(w(x, "Trident") || w(x, "MSIE")) && !w(x, "Edge");
  var La = w(x.toLowerCase(), "webkit") && !w(x, "Edge");
  function Ma() {
    var a = l.document;
    return a ? a.documentMode : void 0;
  }
  var Na;
  a: {
    Oa2 = "", Pa = function() {
      var a = x;
      if (Ka)
        return /rv:([^\);]+)(\)|;)/.exec(a);
      if (Ia)
        return /Edge\/([\d\.]+)/.exec(a);
      if (y)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (La)
        return /WebKit\/(\S+)/.exec(a);
      if (Ha)
        return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();
    Pa && (Oa2 = Pa ? Pa[1] : "");
    if (y) {
      Qa = Ma();
      if (Qa != null && Qa > parseFloat(Oa2)) {
        Na = String(Qa);
        break a;
      }
    }
    Na = Oa2;
  }
  var Oa2;
  var Pa;
  var Qa;
  var Ga = {};
  function Ra() {
    return Fa(function() {
      let a = 0;
      const b = ta(String(Na)).split("."), c = ta("9").split("."), d = Math.max(b.length, c.length);
      for (let h = 0; a == 0 && h < d; h++) {
        var e = b[h] || "", f = c[h] || "";
        do {
          e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          if (e[0].length == 0 && f[0].length == 0)
            break;
          a = ua(e[1].length == 0 ? 0 : parseInt(e[1], 10), f[1].length == 0 ? 0 : parseInt(f[1], 10)) || ua(e[2].length == 0, f[2].length == 0) || ua(e[2], f[2]);
          e = e[3];
          f = f[3];
        } while (a == 0);
      }
      return 0 <= a;
    });
  }
  var Sa;
  if (l.document && y) {
    Ta2 = Ma();
    Sa = Ta2 ? Ta2 : parseInt(Na, 10) || void 0;
  } else
    Sa = void 0;
  var Ta2;
  var Ua = Sa;
  var Va = function() {
    if (!l.addEventListener || !Object.defineProperty)
      return false;
    var a = false, b = Object.defineProperty({}, "passive", { get: function() {
      a = true;
    } });
    try {
      l.addEventListener("test", aa, b), l.removeEventListener("test", aa, b);
    } catch (c) {
    }
    return a;
  }();
  function z(a, b) {
    this.type = a;
    this.g = this.target = b;
    this.defaultPrevented = false;
  }
  z.prototype.h = function() {
    this.defaultPrevented = true;
  };
  function A(a, b) {
    z.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.i = null;
    if (a) {
      var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.g = b;
      if (b = a.relatedTarget) {
        if (Ka) {
          a: {
            try {
              Ca(b.nodeName);
              var e = true;
              break a;
            } catch (f) {
            }
            e = false;
          }
          e || (b = null);
        }
      } else
        c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement);
      this.relatedTarget = b;
      d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = typeof a.pointerType === "string" ? a.pointerType : Wa[a.pointerType] || "";
      this.state = a.state;
      this.i = a;
      a.defaultPrevented && A.Z.h.call(this);
    }
  }
  t(A, z);
  var Wa = { 2: "touch", 3: "pen", 4: "mouse" };
  A.prototype.h = function() {
    A.Z.h.call(this);
    var a = this.i;
    a.preventDefault ? a.preventDefault() : a.returnValue = false;
  };
  var B = "closure_listenable_" + (1e6 * Math.random() | 0);
  var Xa = 0;
  function Ya(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.ia = e;
    this.key = ++Xa;
    this.ca = this.fa = false;
  }
  function Za(a) {
    a.ca = true;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.ia = null;
  }
  function $a(a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  }
  $a.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    var h = ab(a, b, d, e);
    -1 < h ? (b = a[h], c || (b.fa = false)) : (b = new Ya(b, this.src, f, !!d, e), b.fa = c, a.push(b));
    return b;
  };
  function bb(a, b) {
    var c = b.type;
    if (c in a.g) {
      var d = a.g[c], e = ma(d, b), f;
      (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
      f && (Za(b), a.g[c].length == 0 && (delete a.g[c], a.h--));
    }
  }
  function ab(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.ca && f.listener == b && f.capture == !!c && f.ia == d)
        return e;
    }
    return -1;
  }
  var cb = "closure_lm_" + (1e6 * Math.random() | 0);
  var db = {};
  function fb(a, b, c, d, e) {
    if (d && d.once)
      return gb(a, b, c, d, e);
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++)
        fb(a, b[f], c, d, e);
      return null;
    }
    c = hb(c);
    return a && a[B] ? a.N(b, c, p(d) ? !!d.capture : !!d, e) : ib(a, b, c, false, d, e);
  }
  function ib(a, b, c, d, e, f) {
    if (!b)
      throw Error("Invalid event type");
    var h = p(e) ? !!e.capture : !!e, n = jb(a);
    n || (a[cb] = n = new $a(a));
    c = n.add(b, c, d, h, f);
    if (c.proxy)
      return c;
    d = kb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
      Va || (e = h), e === void 0 && (e = false), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
      a.attachEvent(lb(b.toString()), d);
    else if (a.addListener && a.removeListener)
      a.addListener(d);
    else
      throw Error("addEventListener and attachEvent are unavailable.");
    return c;
  }
  function kb() {
    function a(c) {
      return b.call(a.src, a.listener, c);
    }
    var b = mb;
    return a;
  }
  function gb(a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++)
        gb(a, b[f], c, d, e);
      return null;
    }
    c = hb(c);
    return a && a[B] ? a.O(b, c, p(d) ? !!d.capture : !!d, e) : ib(a, b, c, true, d, e);
  }
  function nb(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++)
        nb(a, b[f], c, d, e);
    else
      (d = p(d) ? !!d.capture : !!d, c = hb(c), a && a[B]) ? (a = a.i, b = String(b).toString(), b in a.g && (f = a.g[b], c = ab(f, c, d, e), -1 < c && (Za(f[c]), Array.prototype.splice.call(f, c, 1), f.length == 0 && (delete a.g[b], a.h--)))) : a && (a = jb(a)) && (b = a.g[b.toString()], a = -1, b && (a = ab(b, c, d, e)), (c = -1 < a ? b[a] : null) && ob(c));
  }
  function ob(a) {
    if (typeof a !== "number" && a && !a.ca) {
      var b = a.src;
      if (b && b[B])
        bb(b.i, a);
      else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(lb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = jb(b)) ? (bb(c, a), c.h == 0 && (c.src = null, b[cb] = null)) : Za(a);
      }
    }
  }
  function lb(a) {
    return a in db ? db[a] : db[a] = "on" + a;
  }
  function mb(a, b) {
    if (a.ca)
      a = true;
    else {
      b = new A(b, this);
      var c = a.listener, d = a.ia || a.src;
      a.fa && ob(a);
      a = c.call(d, b);
    }
    return a;
  }
  function jb(a) {
    a = a[cb];
    return a instanceof $a ? a : null;
  }
  var pb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
  function hb(a) {
    if (typeof a === "function")
      return a;
    a[pb] || (a[pb] = function(b) {
      return a.handleEvent(b);
    });
    return a[pb];
  }
  function C() {
    v.call(this);
    this.i = new $a(this);
    this.P = this;
    this.I = null;
  }
  t(C, v);
  C.prototype[B] = true;
  C.prototype.removeEventListener = function(a, b, c, d) {
    nb(this, a, b, c, d);
  };
  function D(a, b) {
    var c, d = a.I;
    if (d)
      for (c = []; d; d = d.I)
        c.push(d);
    a = a.P;
    d = b.type || b;
    if (typeof b === "string")
      b = new z(b, a);
    else if (b instanceof z)
      b.target = b.target || a;
    else {
      var e = b;
      b = new z(d, a);
      Aa(b, e);
    }
    e = true;
    if (c)
      for (var f = c.length - 1; 0 <= f; f--) {
        var h = b.g = c[f];
        e = qb(h, d, true, b) && e;
      }
    h = b.g = a;
    e = qb(h, d, true, b) && e;
    e = qb(h, d, false, b) && e;
    if (c)
      for (f = 0; f < c.length; f++)
        h = b.g = c[f], e = qb(h, d, false, b) && e;
  }
  C.prototype.M = function() {
    C.Z.M.call(this);
    if (this.i) {
      var a = this.i, c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++)
          Za(d[e]);
        delete a.g[c];
        a.h--;
      }
    }
    this.I = null;
  };
  C.prototype.N = function(a, b, c, d) {
    return this.i.add(String(a), b, false, c, d);
  };
  C.prototype.O = function(a, b, c, d) {
    return this.i.add(String(a), b, true, c, d);
  };
  function qb(a, b, c, d) {
    b = a.i.g[String(b)];
    if (!b)
      return true;
    b = b.concat();
    for (var e = true, f = 0; f < b.length; ++f) {
      var h = b[f];
      if (h && !h.ca && h.capture == c) {
        var n = h.listener, u = h.ia || h.src;
        h.fa && bb(a.i, h);
        e = n.call(u, d) !== false && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  var rb = l.JSON.stringify;
  function sb() {
    var a = tb;
    let b = null;
    a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
    return b;
  }
  var ub = class {
    constructor() {
      this.h = this.g = null;
    }
    add(a, b) {
      const c = vb.get();
      c.set(a, b);
      this.h ? this.h.next = c : this.g = c;
      this.h = c;
    }
  };
  var vb = new class {
    constructor(a, b) {
      this.i = a;
      this.j = b;
      this.h = 0;
      this.g = null;
    }
    get() {
      let a;
      0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
      return a;
    }
  }(() => new wb(), (a) => a.reset());
  var wb = class {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(a, b) {
      this.h = a;
      this.g = b;
      this.next = null;
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  };
  function yb(a) {
    l.setTimeout(() => {
      throw a;
    }, 0);
  }
  function zb(a, b) {
    Ab || Bb();
    Cb || (Ab(), Cb = true);
    tb.add(a, b);
  }
  var Ab;
  function Bb() {
    var a = l.Promise.resolve(void 0);
    Ab = function() {
      a.then(Db);
    };
  }
  var Cb = false;
  var tb = new ub();
  function Db() {
    for (var a; a = sb(); ) {
      try {
        a.h.call(a.g);
      } catch (c) {
        yb(c);
      }
      var b = vb;
      b.j(a);
      100 > b.h && (b.h++, a.next = b.g, b.g = a);
    }
    Cb = false;
  }
  function Eb(a, b) {
    C.call(this);
    this.h = a || 1;
    this.g = b || l;
    this.j = q(this.kb, this);
    this.l = Date.now();
  }
  t(Eb, C);
  k = Eb.prototype;
  k.da = false;
  k.S = null;
  k.kb = function() {
    if (this.da) {
      var a = Date.now() - this.l;
      0 < a && a < 0.8 * this.h ? this.S = this.g.setTimeout(this.j, this.h - a) : (this.S && (this.g.clearTimeout(this.S), this.S = null), D(this, "tick"), this.da && (Fb(this), this.start()));
    }
  };
  k.start = function() {
    this.da = true;
    this.S || (this.S = this.g.setTimeout(this.j, this.h), this.l = Date.now());
  };
  function Fb(a) {
    a.da = false;
    a.S && (a.g.clearTimeout(a.S), a.S = null);
  }
  k.M = function() {
    Eb.Z.M.call(this);
    Fb(this);
    delete this.g;
  };
  function Gb(a, b, c) {
    if (typeof a === "function")
      c && (a = q(a, c));
    else if (a && typeof a.handleEvent == "function")
      a = q(a.handleEvent, a);
    else
      throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
  }
  function Hb(a) {
    a.g = Gb(() => {
      a.g = null;
      a.i && (a.i = false, Hb(a));
    }, a.j);
    const b = a.h;
    a.h = null;
    a.m.apply(null, b);
  }
  var Ib = class extends v {
    constructor(a, b) {
      super();
      this.m = a;
      this.j = b;
      this.h = null;
      this.i = false;
      this.g = null;
    }
    l(a) {
      this.h = arguments;
      this.g ? this.i = true : Hb(this);
    }
    M() {
      super.M();
      this.g && (l.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
    }
  };
  function E(a) {
    v.call(this);
    this.h = a;
    this.g = {};
  }
  t(E, v);
  var Jb = [];
  function Kb(a, b, c, d) {
    Array.isArray(c) || (c && (Jb[0] = c.toString()), c = Jb);
    for (var e = 0; e < c.length; e++) {
      var f = fb(b, c[e], d || a.handleEvent, false, a.h || a);
      if (!f)
        break;
      a.g[f.key] = f;
    }
  }
  function Lb(a) {
    xa(a.g, function(b, c) {
      this.g.hasOwnProperty(c) && ob(b);
    }, a);
    a.g = {};
  }
  E.prototype.M = function() {
    E.Z.M.call(this);
    Lb(this);
  };
  E.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  function Mb() {
    this.g = true;
  }
  Mb.prototype.Aa = function() {
    this.g = false;
  };
  function Nb(a, b, c, d, e, f) {
    a.info(function() {
      if (a.g)
        if (f) {
          var h = "";
          for (var n = f.split("&"), u = 0; u < n.length; u++) {
            var m = n[u].split("=");
            if (1 < m.length) {
              var r = m[0];
              m = m[1];
              var G2 = r.split("_");
              h = 2 <= G2.length && G2[1] == "type" ? h + (r + "=" + m + "&") : h + (r + "=redacted&");
            }
          }
        } else
          h = null;
      else
        h = f;
      return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + h;
    });
  }
  function Ob(a, b, c, d, e, f, h) {
    a.info(function() {
      return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + h;
    });
  }
  function F(a, b, c, d) {
    a.info(function() {
      return "XMLHTTP TEXT (" + b + "): " + Pb(a, c) + (d ? " " + d : "");
    });
  }
  function Qb(a, b) {
    a.info(function() {
      return "TIMEOUT: " + b;
    });
  }
  Mb.prototype.info = function() {
  };
  function Pb(a, b) {
    if (!a.g)
      return b;
    if (!b)
      return null;
    try {
      var c = JSON.parse(b);
      if (c) {
        for (a = 0; a < c.length; a++)
          if (Array.isArray(c[a])) {
            var d = c[a];
            if (!(2 > d.length)) {
              var e = d[1];
              if (Array.isArray(e) && !(1 > e.length)) {
                var f = e[0];
                if (f != "noop" && f != "stop" && f != "close")
                  for (var h = 1; h < e.length; h++)
                    e[h] = "";
              }
            }
          }
      }
      return rb(c);
    } catch (n) {
      return b;
    }
  }
  var H = {};
  var Rb = null;
  function Sb() {
    return Rb = Rb || new C();
  }
  H.Ma = "serverreachability";
  function Tb(a) {
    z.call(this, H.Ma, a);
  }
  t(Tb, z);
  function I(a) {
    const b = Sb();
    D(b, new Tb(b, a));
  }
  H.STAT_EVENT = "statevent";
  function Ub(a, b) {
    z.call(this, H.STAT_EVENT, a);
    this.stat = b;
  }
  t(Ub, z);
  function J(a) {
    const b = Sb();
    D(b, new Ub(b, a));
  }
  H.Na = "timingevent";
  function Vb(a, b) {
    z.call(this, H.Na, a);
    this.size = b;
  }
  t(Vb, z);
  function K(a, b) {
    if (typeof a !== "function")
      throw Error("Fn must not be null and must be a function");
    return l.setTimeout(function() {
      a();
    }, b);
  }
  var Wb = { NO_ERROR: 0, lb: 1, yb: 2, xb: 3, sb: 4, wb: 5, zb: 6, Ja: 7, TIMEOUT: 8, Cb: 9 };
  var Xb = { qb: "complete", Mb: "success", Ka: "error", Ja: "abort", Eb: "ready", Fb: "readystatechange", TIMEOUT: "timeout", Ab: "incrementaldata", Db: "progress", tb: "downloadprogress", Ub: "uploadprogress" };
  function Yb() {
  }
  Yb.prototype.h = null;
  function Zb(a) {
    return a.h || (a.h = a.i());
  }
  function $b() {
  }
  var L = { OPEN: "a", pb: "b", Ka: "c", Bb: "d" };
  function ac() {
    z.call(this, "d");
  }
  t(ac, z);
  function bc() {
    z.call(this, "c");
  }
  t(bc, z);
  var cc;
  function dc() {
  }
  t(dc, Yb);
  dc.prototype.g = function() {
    return new XMLHttpRequest();
  };
  dc.prototype.i = function() {
    return {};
  };
  cc = new dc();
  function M(a, b, c, d) {
    this.l = a;
    this.j = b;
    this.m = c;
    this.X = d || 1;
    this.V = new E(this);
    this.P = ec;
    a = Ja ? 125 : void 0;
    this.W = new Eb(a);
    this.H = null;
    this.i = false;
    this.s = this.A = this.v = this.K = this.F = this.Y = this.B = null;
    this.D = [];
    this.g = null;
    this.C = 0;
    this.o = this.u = null;
    this.N = -1;
    this.I = false;
    this.O = 0;
    this.L = null;
    this.aa = this.J = this.$ = this.U = false;
    this.h = new fc();
  }
  function fc() {
    this.i = null;
    this.g = "";
    this.h = false;
  }
  var ec = 45e3;
  var gc = {};
  var hc = {};
  k = M.prototype;
  k.setTimeout = function(a) {
    this.P = a;
  };
  function ic(a, b, c) {
    a.K = 1;
    a.v = jc(N(b));
    a.s = c;
    a.U = true;
    kc(a, null);
  }
  function kc(a, b) {
    a.F = Date.now();
    lc(a);
    a.A = N(a.v);
    var c = a.A, d = a.X;
    Array.isArray(d) || (d = [String(d)]);
    mc(c.h, "t", d);
    a.C = 0;
    c = a.l.H;
    a.h = new fc();
    a.g = nc(a.l, c ? b : null, !a.s);
    0 < a.O && (a.L = new Ib(q(a.Ia, a, a.g), a.O));
    Kb(a.V, a.g, "readystatechange", a.gb);
    b = a.H ? ya(a.H) : {};
    a.s ? (a.u || (a.u = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.g.ea(a.A, a.u, a.s, b)) : (a.u = "GET", a.g.ea(a.A, a.u, null, b));
    I(1);
    Nb(a.j, a.u, a.A, a.m, a.X, a.s);
  }
  k.gb = function(a) {
    a = a.target;
    const b = this.L;
    b && O(a) == 3 ? b.l() : this.Ia(a);
  };
  k.Ia = function(a) {
    try {
      if (a == this.g)
        a: {
          const r = O(this.g);
          var b = this.g.Da();
          const G2 = this.g.ba();
          if (!(3 > r) && (r != 3 || Ja || this.g && (this.h.h || this.g.ga() || oc(this.g)))) {
            this.I || r != 4 || b == 7 || (b == 8 || 0 >= G2 ? I(3) : I(2));
            pc(this);
            var c = this.g.ba();
            this.N = c;
            b:
              if (qc(this)) {
                var d = oc(this.g);
                a = "";
                var e = d.length, f = O(this.g) == 4;
                if (!this.h.i) {
                  if (typeof TextDecoder === "undefined") {
                    P(this);
                    rc(this);
                    var h = "";
                    break b;
                  }
                  this.h.i = new l.TextDecoder();
                }
                for (b = 0; b < e; b++)
                  this.h.h = true, a += this.h.i.decode(d[b], { stream: f && b == e - 1 });
                d.splice(0, e);
                this.h.g += a;
                this.C = 0;
                h = this.h.g;
              } else
                h = this.g.ga();
            this.i = c == 200;
            Ob(this.j, this.u, this.A, this.m, this.X, r, c);
            if (this.i) {
              if (this.$ && !this.J) {
                b: {
                  if (this.g) {
                    var n, u = this.g;
                    if ((n = u.g ? u.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !sa(n)) {
                      var m = n;
                      break b;
                    }
                  }
                  m = null;
                }
                if (c = m)
                  F(this.j, this.m, c, "Initial handshake response via X-HTTP-Initial-Response"), this.J = true, sc(this, c);
                else {
                  this.i = false;
                  this.o = 3;
                  J(12);
                  P(this);
                  rc(this);
                  break a;
                }
              }
              this.U ? (tc(this, r, h), Ja && this.i && r == 3 && (Kb(this.V, this.W, "tick", this.fb), this.W.start())) : (F(this.j, this.m, h, null), sc(this, h));
              r == 4 && P(this);
              this.i && !this.I && (r == 4 ? uc(this.l, this) : (this.i = false, lc(this)));
            } else
              c == 400 && 0 < h.indexOf("Unknown SID") ? (this.o = 3, J(12)) : (this.o = 0, J(13)), P(this), rc(this);
          }
        }
    } catch (r) {
    } finally {
    }
  };
  function qc(a) {
    return a.g ? a.u == "GET" && a.K != 2 && a.l.Ba : false;
  }
  function tc(a, b, c) {
    let d = true, e;
    for (; !a.I && a.C < c.length; )
      if (e = vc(a, c), e == hc) {
        b == 4 && (a.o = 4, J(14), d = false);
        F(a.j, a.m, null, "[Incomplete Response]");
        break;
      } else if (e == gc) {
        a.o = 4;
        J(15);
        F(a.j, a.m, c, "[Invalid Chunk]");
        d = false;
        break;
      } else
        F(a.j, a.m, e, null), sc(a, e);
    qc(a) && e != hc && e != gc && (a.h.g = "", a.C = 0);
    b != 4 || c.length != 0 || a.h.h || (a.o = 1, J(16), d = false);
    a.i = a.i && d;
    d ? 0 < c.length && !a.aa && (a.aa = true, b = a.l, b.g == a && b.$ && !b.L && (b.h.info("Great, no buffering proxy detected. Bytes received: " + c.length), wc(b), b.L = true, J(11))) : (F(a.j, a.m, c, "[Invalid Chunked Response]"), P(a), rc(a));
  }
  k.fb = function() {
    if (this.g) {
      var a = O(this.g), b = this.g.ga();
      this.C < b.length && (pc(this), tc(this, a, b), this.i && a != 4 && lc(this));
    }
  };
  function vc(a, b) {
    var c = a.C, d = b.indexOf("\n", c);
    if (d == -1)
      return hc;
    c = Number(b.substring(c, d));
    if (isNaN(c))
      return gc;
    d += 1;
    if (d + c > b.length)
      return hc;
    b = b.substr(d, c);
    a.C = d + c;
    return b;
  }
  k.cancel = function() {
    this.I = true;
    P(this);
  };
  function lc(a) {
    a.Y = Date.now() + a.P;
    xc(a, a.P);
  }
  function xc(a, b) {
    if (a.B != null)
      throw Error("WatchDog timer not null");
    a.B = K(q(a.eb, a), b);
  }
  function pc(a) {
    a.B && (l.clearTimeout(a.B), a.B = null);
  }
  k.eb = function() {
    this.B = null;
    const a = Date.now();
    0 <= a - this.Y ? (Qb(this.j, this.A), this.K != 2 && (I(3), J(17)), P(this), this.o = 2, rc(this)) : xc(this, this.Y - a);
  };
  function rc(a) {
    a.l.G == 0 || a.I || uc(a.l, a);
  }
  function P(a) {
    pc(a);
    var b = a.L;
    b && typeof b.na == "function" && b.na();
    a.L = null;
    Fb(a.W);
    Lb(a.V);
    a.g && (b = a.g, a.g = null, b.abort(), b.na());
  }
  function sc(a, b) {
    try {
      var c = a.l;
      if (c.G != 0 && (c.g == a || yc(c.i, a))) {
        if (c.I = a.N, !a.J && yc(c.i, a) && c.G == 3) {
          try {
            var d = c.Ca.g.parse(b);
          } catch (m) {
            d = null;
          }
          if (Array.isArray(d) && d.length == 3) {
            var e = d;
            if (e[0] == 0)
              a: {
                if (!c.u) {
                  if (c.g)
                    if (c.g.F + 3e3 < a.F)
                      zc(c), Ac(c);
                    else
                      break a;
                  Bc(c);
                  J(18);
                }
              }
            else
              c.ta = e[1], 0 < c.ta - c.U && 37500 > e[2] && c.N && c.A == 0 && !c.v && (c.v = K(q(c.ab, c), 6e3));
            if (1 >= Cc(c.i) && c.ka) {
              try {
                c.ka();
              } catch (m) {
              }
              c.ka = void 0;
            }
          } else
            Q(c, 11);
        } else if ((a.J || c.g == a) && zc(c), !sa(b))
          for (e = c.Ca.g.parse(b), b = 0; b < e.length; b++) {
            let m = e[b];
            c.U = m[0];
            m = m[1];
            if (c.G == 2)
              if (m[0] == "c") {
                c.J = m[1];
                c.la = m[2];
                const r = m[3];
                r != null && (c.ma = r, c.h.info("VER=" + c.ma));
                const G2 = m[4];
                G2 != null && (c.za = G2, c.h.info("SVER=" + c.za));
                const Da2 = m[5];
                Da2 != null && typeof Da2 === "number" && 0 < Da2 && (d = 1.5 * Da2, c.K = d, c.h.info("backChannelRequestTimeoutMs_=" + d));
                d = c;
                const ca = a.g;
                if (ca) {
                  const Ea = ca.g ? ca.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                  if (Ea) {
                    var f = d.i;
                    !f.g && (w(Ea, "spdy") || w(Ea, "quic") || w(Ea, "h2")) && (f.j = f.l, f.g = new Set(), f.h && (Dc(f, f.h), f.h = null));
                  }
                  if (d.D) {
                    const xb = ca.g ? ca.g.getResponseHeader("X-HTTP-Session-Id") : null;
                    xb && (d.sa = xb, R(d.F, d.D, xb));
                  }
                }
                c.G = 3;
                c.j && c.j.xa();
                c.$ && (c.O = Date.now() - a.F, c.h.info("Handshake RTT: " + c.O + "ms"));
                d = c;
                var h = a;
                d.oa = Ec(d, d.H ? d.la : null, d.W);
                if (h.J) {
                  Fc(d.i, h);
                  var n = h, u = d.K;
                  u && n.setTimeout(u);
                  n.B && (pc(n), lc(n));
                  d.g = h;
                } else
                  Gc(d);
                0 < c.l.length && Hc(c);
              } else
                m[0] != "stop" && m[0] != "close" || Q(c, 7);
            else
              c.G == 3 && (m[0] == "stop" || m[0] == "close" ? m[0] == "stop" ? Q(c, 7) : Ic(c) : m[0] != "noop" && c.j && c.j.wa(m), c.A = 0);
          }
      }
      I(4);
    } catch (m) {
    }
  }
  function Jc(a) {
    if (a.R && typeof a.R == "function")
      return a.R();
    if (typeof a === "string")
      return a.split("");
    if (ba(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
      return b;
    }
    b = [];
    c = 0;
    for (d in a)
      b[c++] = a[d];
    return b;
  }
  function Kc(a, b) {
    if (a.forEach && typeof a.forEach == "function")
      a.forEach(b, void 0);
    else if (ba(a) || typeof a === "string")
      na(a, b, void 0);
    else {
      if (a.T && typeof a.T == "function")
        var c = a.T();
      else if (a.R && typeof a.R == "function")
        c = void 0;
      else if (ba(a) || typeof a === "string") {
        c = [];
        for (var d = a.length, e = 0; e < d; e++)
          c.push(e);
      } else
        for (e in c = [], d = 0, a)
          c[d++] = e;
      d = Jc(a);
      e = d.length;
      for (var f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a);
    }
  }
  function S(a, b) {
    this.h = {};
    this.g = [];
    this.i = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2)
        throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof S)
        for (c = a.T(), d = 0; d < c.length; d++)
          this.set(c[d], a.get(c[d]));
      else
        for (d in a)
          this.set(d, a[d]);
  }
  k = S.prototype;
  k.R = function() {
    Lc(this);
    for (var a = [], b = 0; b < this.g.length; b++)
      a.push(this.h[this.g[b]]);
    return a;
  };
  k.T = function() {
    Lc(this);
    return this.g.concat();
  };
  function Lc(a) {
    if (a.i != a.g.length) {
      for (var b = 0, c = 0; b < a.g.length; ) {
        var d = a.g[b];
        T(a.h, d) && (a.g[c++] = d);
        b++;
      }
      a.g.length = c;
    }
    if (a.i != a.g.length) {
      var e = {};
      for (c = b = 0; b < a.g.length; )
        d = a.g[b], T(e, d) || (a.g[c++] = d, e[d] = 1), b++;
      a.g.length = c;
    }
  }
  k.get = function(a, b) {
    return T(this.h, a) ? this.h[a] : b;
  };
  k.set = function(a, b) {
    T(this.h, a) || (this.i++, this.g.push(a));
    this.h[a] = b;
  };
  k.forEach = function(a, b) {
    for (var c = this.T(), d = 0; d < c.length; d++) {
      var e = c[d], f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  function T(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  var Mc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function Nc(a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else
          f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  function U(a, b) {
    this.i = this.s = this.j = "";
    this.m = null;
    this.o = this.l = "";
    this.g = false;
    if (a instanceof U) {
      this.g = b !== void 0 ? b : a.g;
      Oc(this, a.j);
      this.s = a.s;
      Pc(this, a.i);
      Qc(this, a.m);
      this.l = a.l;
      b = a.h;
      var c = new Rc();
      c.i = b.i;
      b.g && (c.g = new S(b.g), c.h = b.h);
      Sc(this, c);
      this.o = a.o;
    } else
      a && (c = String(a).match(Mc)) ? (this.g = !!b, Oc(this, c[1] || "", true), this.s = Tc(c[2] || ""), Pc(this, c[3] || "", true), Qc(this, c[4]), this.l = Tc(c[5] || "", true), Sc(this, c[6] || "", true), this.o = Tc(c[7] || "")) : (this.g = !!b, this.h = new Rc(null, this.g));
  }
  U.prototype.toString = function() {
    var a = [], b = this.j;
    b && a.push(Uc(b, Vc, true), ":");
    var c = this.i;
    if (c || b == "file")
      a.push("//"), (b = this.s) && a.push(Uc(b, Vc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, c != null && a.push(":", String(c));
    if (c = this.l)
      this.i && c.charAt(0) != "/" && a.push("/"), a.push(Uc(c, c.charAt(0) == "/" ? Wc : Xc, true));
    (c = this.h.toString()) && a.push("?", c);
    (c = this.o) && a.push("#", Uc(c, Yc));
    return a.join("");
  };
  function N(a) {
    return new U(a);
  }
  function Oc(a, b, c) {
    a.j = c ? Tc(b, true) : b;
    a.j && (a.j = a.j.replace(/:$/, ""));
  }
  function Pc(a, b, c) {
    a.i = c ? Tc(b, true) : b;
  }
  function Qc(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
      a.m = b;
    } else
      a.m = null;
  }
  function Sc(a, b, c) {
    b instanceof Rc ? (a.h = b, Zc(a.h, a.g)) : (c || (b = Uc(b, $c)), a.h = new Rc(b, a.g));
  }
  function R(a, b, c) {
    a.h.set(b, c);
  }
  function jc(a) {
    R(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
    return a;
  }
  function ad(a) {
    return a instanceof U ? N(a) : new U(a, void 0);
  }
  function bd(a, b, c, d) {
    var e = new U(null, void 0);
    a && Oc(e, a);
    b && Pc(e, b);
    c && Qc(e, c);
    d && (e.l = d);
    return e;
  }
  function Tc(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }
  function Uc(a, b, c) {
    return typeof a === "string" ? (a = encodeURI(a).replace(b, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  }
  function cd(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }
  var Vc = /[#\/\?@]/g;
  var Xc = /[#\?:]/g;
  var Wc = /[#\?]/g;
  var $c = /[#\?@]/g;
  var Yc = /#/g;
  function Rc(a, b) {
    this.h = this.g = null;
    this.i = a || null;
    this.j = !!b;
  }
  function V(a) {
    a.g || (a.g = new S(), a.h = 0, a.i && Nc(a.i, function(b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
    }));
  }
  k = Rc.prototype;
  k.add = function(a, b) {
    V(this);
    this.i = null;
    a = W(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b);
    this.h += 1;
    return this;
  };
  function dd(a, b) {
    V(a);
    b = W(a, b);
    T(a.g.h, b) && (a.i = null, a.h -= a.g.get(b).length, a = a.g, T(a.h, b) && (delete a.h[b], a.i--, a.g.length > 2 * a.i && Lc(a)));
  }
  function ed(a, b) {
    V(a);
    b = W(a, b);
    return T(a.g.h, b);
  }
  k.forEach = function(a, b) {
    V(this);
    this.g.forEach(function(c, d) {
      na(c, function(e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  k.T = function() {
    V(this);
    for (var a = this.g.R(), b = this.g.T(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]);
    return c;
  };
  k.R = function(a) {
    V(this);
    var b = [];
    if (typeof a === "string")
      ed(this, a) && (b = qa(b, this.g.get(W(this, a))));
    else {
      a = this.g.R();
      for (var c = 0; c < a.length; c++)
        b = qa(b, a[c]);
    }
    return b;
  };
  k.set = function(a, b) {
    V(this);
    this.i = null;
    a = W(this, a);
    ed(this, a) && (this.h -= this.g.get(a).length);
    this.g.set(a, [b]);
    this.h += 1;
    return this;
  };
  k.get = function(a, b) {
    if (!a)
      return b;
    a = this.R(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  function mc(a, b, c) {
    dd(a, b);
    0 < c.length && (a.i = null, a.g.set(W(a, b), ra(c)), a.h += c.length);
  }
  k.toString = function() {
    if (this.i)
      return this.i;
    if (!this.g)
      return "";
    for (var a = [], b = this.g.T(), c = 0; c < b.length; c++) {
      var d = b[c], e = encodeURIComponent(String(d));
      d = this.R(d);
      for (var f = 0; f < d.length; f++) {
        var h = e;
        d[f] !== "" && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h);
      }
    }
    return this.i = a.join("&");
  };
  function W(a, b) {
    b = String(b);
    a.j && (b = b.toLowerCase());
    return b;
  }
  function Zc(a, b) {
    b && !a.j && (V(a), a.i = null, a.g.forEach(function(c, d) {
      var e = d.toLowerCase();
      d != e && (dd(this, d), mc(this, e, c));
    }, a));
    a.j = b;
  }
  var fd = class {
    constructor(a, b) {
      this.h = a;
      this.g = b;
    }
  };
  function gd(a) {
    this.l = a || hd;
    l.PerformanceNavigationTiming ? (a = l.performance.getEntriesByType("navigation"), a = 0 < a.length && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(l.g && l.g.Ea && l.g.Ea() && l.g.Ea().Zb);
    this.j = a ? this.l : 1;
    this.g = null;
    1 < this.j && (this.g = new Set());
    this.h = null;
    this.i = [];
  }
  var hd = 10;
  function id(a) {
    return a.h ? true : a.g ? a.g.size >= a.j : false;
  }
  function Cc(a) {
    return a.h ? 1 : a.g ? a.g.size : 0;
  }
  function yc(a, b) {
    return a.h ? a.h == b : a.g ? a.g.has(b) : false;
  }
  function Dc(a, b) {
    a.g ? a.g.add(b) : a.h = b;
  }
  function Fc(a, b) {
    a.h && a.h == b ? a.h = null : a.g && a.g.has(b) && a.g.delete(b);
  }
  gd.prototype.cancel = function() {
    this.i = jd(this);
    if (this.h)
      this.h.cancel(), this.h = null;
    else if (this.g && this.g.size !== 0) {
      for (const a of this.g.values())
        a.cancel();
      this.g.clear();
    }
  };
  function jd(a) {
    if (a.h != null)
      return a.i.concat(a.h.D);
    if (a.g != null && a.g.size !== 0) {
      let b = a.i;
      for (const c of a.g.values())
        b = b.concat(c.D);
      return b;
    }
    return ra(a.i);
  }
  function kd() {
  }
  kd.prototype.stringify = function(a) {
    return l.JSON.stringify(a, void 0);
  };
  kd.prototype.parse = function(a) {
    return l.JSON.parse(a, void 0);
  };
  function ld() {
    this.g = new kd();
  }
  function md(a, b, c) {
    const d = c || "";
    try {
      Kc(a, function(e, f) {
        let h = e;
        p(e) && (h = rb(e));
        b.push(d + f + "=" + encodeURIComponent(h));
      });
    } catch (e) {
      throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
    }
  }
  function nd(a, b) {
    const c = new Mb();
    if (l.Image) {
      const d = new Image();
      d.onload = ja(od, c, d, "TestLoadImage: loaded", true, b);
      d.onerror = ja(od, c, d, "TestLoadImage: error", false, b);
      d.onabort = ja(od, c, d, "TestLoadImage: abort", false, b);
      d.ontimeout = ja(od, c, d, "TestLoadImage: timeout", false, b);
      l.setTimeout(function() {
        if (d.ontimeout)
          d.ontimeout();
      }, 1e4);
      d.src = a;
    } else
      b(false);
  }
  function od(a, b, c, d, e) {
    try {
      b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
    } catch (f) {
    }
  }
  function pd(a) {
    this.l = a.$b || null;
    this.j = a.ib || false;
  }
  t(pd, Yb);
  pd.prototype.g = function() {
    return new qd(this.l, this.j);
  };
  pd.prototype.i = function(a) {
    return function() {
      return a;
    };
  }({});
  function qd(a, b) {
    C.call(this);
    this.D = a;
    this.u = b;
    this.m = void 0;
    this.readyState = rd;
    this.status = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.v = new Headers();
    this.h = null;
    this.C = "GET";
    this.B = "";
    this.g = false;
    this.A = this.j = this.l = null;
  }
  t(qd, C);
  var rd = 0;
  k = qd.prototype;
  k.open = function(a, b) {
    if (this.readyState != rd)
      throw this.abort(), Error("Error reopening a connection");
    this.C = a;
    this.B = b;
    this.readyState = 1;
    sd(this);
  };
  k.send = function(a) {
    if (this.readyState != 1)
      throw this.abort(), Error("need to call open() first. ");
    this.g = true;
    const b = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
    a && (b.body = a);
    (this.D || l).fetch(new Request(this.B, b)).then(this.Va.bind(this), this.ha.bind(this));
  };
  k.abort = function() {
    this.response = this.responseText = "";
    this.v = new Headers();
    this.status = 0;
    this.j && this.j.cancel("Request was aborted.");
    1 <= this.readyState && this.g && this.readyState != 4 && (this.g = false, td(this));
    this.readyState = rd;
  };
  k.Va = function(a) {
    if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, sd(this)), this.g && (this.readyState = 3, sd(this), this.g)))
      if (this.responseType === "arraybuffer")
        a.arrayBuffer().then(this.Ta.bind(this), this.ha.bind(this));
      else if (typeof l.ReadableStream !== "undefined" && "body" in a) {
        this.j = a.body.getReader();
        if (this.u) {
          if (this.responseType)
            throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
          this.response = [];
        } else
          this.response = this.responseText = "", this.A = new TextDecoder();
        ud(this);
      } else
        a.text().then(this.Ua.bind(this), this.ha.bind(this));
  };
  function ud(a) {
    a.j.read().then(a.Sa.bind(a)).catch(a.ha.bind(a));
  }
  k.Sa = function(a) {
    if (this.g) {
      if (this.u && a.value)
        this.response.push(a.value);
      else if (!this.u) {
        var b = a.value ? a.value : new Uint8Array(0);
        if (b = this.A.decode(b, { stream: !a.done }))
          this.response = this.responseText += b;
      }
      a.done ? td(this) : sd(this);
      this.readyState == 3 && ud(this);
    }
  };
  k.Ua = function(a) {
    this.g && (this.response = this.responseText = a, td(this));
  };
  k.Ta = function(a) {
    this.g && (this.response = a, td(this));
  };
  k.ha = function() {
    this.g && td(this);
  };
  function td(a) {
    a.readyState = 4;
    a.l = null;
    a.j = null;
    a.A = null;
    sd(a);
  }
  k.setRequestHeader = function(a, b) {
    this.v.append(a, b);
  };
  k.getResponseHeader = function(a) {
    return this.h ? this.h.get(a.toLowerCase()) || "" : "";
  };
  k.getAllResponseHeaders = function() {
    if (!this.h)
      return "";
    const a = [], b = this.h.entries();
    for (var c = b.next(); !c.done; )
      c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
    return a.join("\r\n");
  };
  function sd(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }
  Object.defineProperty(qd.prototype, "withCredentials", { get: function() {
    return this.m === "include";
  }, set: function(a) {
    this.m = a ? "include" : "same-origin";
  } });
  var vd = l.JSON.parse;
  function X(a) {
    C.call(this);
    this.headers = new S();
    this.u = a || null;
    this.h = false;
    this.C = this.g = null;
    this.H = "";
    this.m = 0;
    this.j = "";
    this.l = this.F = this.v = this.D = false;
    this.B = 0;
    this.A = null;
    this.J = wd;
    this.K = this.L = false;
  }
  t(X, C);
  var wd = "";
  var xd = /^https?$/i;
  var yd = ["POST", "PUT"];
  k = X.prototype;
  k.ea = function(a, b, c, d) {
    if (this.g)
      throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.H = a;
    this.j = "";
    this.m = 0;
    this.D = false;
    this.h = true;
    this.g = this.u ? this.u.g() : cc.g();
    this.C = this.u ? Zb(this.u) : Zb(cc);
    this.g.onreadystatechange = q(this.Fa, this);
    try {
      this.F = true, this.g.open(b, String(a), true), this.F = false;
    } catch (f) {
      zd(this, f);
      return;
    }
    a = c || "";
    const e = new S(this.headers);
    d && Kc(d, function(f, h) {
      e.set(h, f);
    });
    d = oa(e.T());
    c = l.FormData && a instanceof l.FormData;
    !(0 <= ma(yd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(f, h) {
      this.g.setRequestHeader(h, f);
    }, this);
    this.J && (this.g.responseType = this.J);
    "withCredentials" in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials = this.L);
    try {
      Ad(this), 0 < this.B && ((this.K = Bd(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = q(this.pa, this)) : this.A = Gb(this.pa, this.B, this)), this.v = true, this.g.send(a), this.v = false;
    } catch (f) {
      zd(this, f);
    }
  };
  function Bd(a) {
    return y && Ra() && typeof a.timeout === "number" && a.ontimeout !== void 0;
  }
  function pa(a) {
    return a.toLowerCase() == "content-type";
  }
  k.pa = function() {
    typeof goog != "undefined" && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, D(this, "timeout"), this.abort(8));
  };
  function zd(a, b) {
    a.h = false;
    a.g && (a.l = true, a.g.abort(), a.l = false);
    a.j = b;
    a.m = 5;
    Cd(a);
    Dd(a);
  }
  function Cd(a) {
    a.D || (a.D = true, D(a, "complete"), D(a, "error"));
  }
  k.abort = function(a) {
    this.g && this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false, this.m = a || 7, D(this, "complete"), D(this, "abort"), Dd(this));
  };
  k.M = function() {
    this.g && (this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false), Dd(this, true));
    X.Z.M.call(this);
  };
  k.Fa = function() {
    this.s || (this.F || this.v || this.l ? Ed(this) : this.cb());
  };
  k.cb = function() {
    Ed(this);
  };
  function Ed(a) {
    if (a.h && typeof goog != "undefined" && (!a.C[1] || O(a) != 4 || a.ba() != 2)) {
      if (a.v && O(a) == 4)
        Gb(a.Fa, 0, a);
      else if (D(a, "readystatechange"), O(a) == 4) {
        a.h = false;
        try {
          const n = a.ba();
          a:
            switch (n) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var b = true;
                break a;
              default:
                b = false;
            }
          var c;
          if (!(c = b)) {
            var d;
            if (d = n === 0) {
              var e = String(a.H).match(Mc)[1] || null;
              if (!e && l.self && l.self.location) {
                var f = l.self.location.protocol;
                e = f.substr(0, f.length - 1);
              }
              d = !xd.test(e ? e.toLowerCase() : "");
            }
            c = d;
          }
          if (c)
            D(a, "complete"), D(a, "success");
          else {
            a.m = 6;
            try {
              var h = 2 < O(a) ? a.g.statusText : "";
            } catch (u) {
              h = "";
            }
            a.j = h + " [" + a.ba() + "]";
            Cd(a);
          }
        } finally {
          Dd(a);
        }
      }
    }
  }
  function Dd(a, b) {
    if (a.g) {
      Ad(a);
      const c = a.g, d = a.C[0] ? aa : null;
      a.g = null;
      a.C = null;
      b || D(a, "ready");
      try {
        c.onreadystatechange = d;
      } catch (e) {
      }
    }
  }
  function Ad(a) {
    a.g && a.K && (a.g.ontimeout = null);
    a.A && (l.clearTimeout(a.A), a.A = null);
  }
  function O(a) {
    return a.g ? a.g.readyState : 0;
  }
  k.ba = function() {
    try {
      return 2 < O(this) ? this.g.status : -1;
    } catch (a) {
      return -1;
    }
  };
  k.ga = function() {
    try {
      return this.g ? this.g.responseText : "";
    } catch (a) {
      return "";
    }
  };
  k.Qa = function(a) {
    if (this.g) {
      var b = this.g.responseText;
      a && b.indexOf(a) == 0 && (b = b.substring(a.length));
      return vd(b);
    }
  };
  function oc(a) {
    try {
      if (!a.g)
        return null;
      if ("response" in a.g)
        return a.g.response;
      switch (a.J) {
        case wd:
        case "text":
          return a.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a.g)
            return a.g.mozResponseArrayBuffer;
      }
      return null;
    } catch (b) {
      return null;
    }
  }
  k.Da = function() {
    return this.m;
  };
  k.La = function() {
    return typeof this.j === "string" ? this.j : String(this.j);
  };
  function Fd(a) {
    let b = "";
    xa(a, function(c, d) {
      b += d;
      b += ":";
      b += c;
      b += "\r\n";
    });
    return b;
  }
  function Gd(a, b, c) {
    a: {
      for (d in c) {
        var d = false;
        break a;
      }
      d = true;
    }
    d || (c = Fd(c), typeof a === "string" ? c != null && encodeURIComponent(String(c)) : R(a, b, c));
  }
  function Hd(a, b, c) {
    return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
  }
  function Id(a) {
    this.za = 0;
    this.l = [];
    this.h = new Mb();
    this.la = this.oa = this.F = this.W = this.g = this.sa = this.D = this.aa = this.o = this.P = this.s = null;
    this.Za = this.V = 0;
    this.Xa = Hd("failFast", false, a);
    this.N = this.v = this.u = this.m = this.j = null;
    this.X = true;
    this.I = this.ta = this.U = -1;
    this.Y = this.A = this.C = 0;
    this.Pa = Hd("baseRetryDelayMs", 5e3, a);
    this.$a = Hd("retryDelaySeedMs", 1e4, a);
    this.Ya = Hd("forwardChannelMaxRetries", 2, a);
    this.ra = Hd("forwardChannelRequestTimeoutMs", 2e4, a);
    this.qa = a && a.xmlHttpFactory || void 0;
    this.Ba = a && a.Yb || false;
    this.K = void 0;
    this.H = a && a.supportsCrossDomainXhr || false;
    this.J = "";
    this.i = new gd(a && a.concurrentRequestLimit);
    this.Ca = new ld();
    this.ja = a && a.fastHandshake || false;
    this.Ra = a && a.Wb || false;
    a && a.Aa && this.h.Aa();
    a && a.forceLongPolling && (this.X = false);
    this.$ = !this.ja && this.X && a && a.detectBufferingProxy || false;
    this.ka = void 0;
    this.O = 0;
    this.L = false;
    this.B = null;
    this.Wa = !a || a.Xb !== false;
  }
  k = Id.prototype;
  k.ma = 8;
  k.G = 1;
  function Ic(a) {
    Jd(a);
    if (a.G == 3) {
      var b = a.V++, c = N(a.F);
      R(c, "SID", a.J);
      R(c, "RID", b);
      R(c, "TYPE", "terminate");
      Kd(a, c);
      b = new M(a, a.h, b, void 0);
      b.K = 2;
      b.v = jc(N(c));
      c = false;
      l.navigator && l.navigator.sendBeacon && (c = l.navigator.sendBeacon(b.v.toString(), ""));
      !c && l.Image && (new Image().src = b.v, c = true);
      c || (b.g = nc(b.l, null), b.g.ea(b.v));
      b.F = Date.now();
      lc(b);
    }
    Ld(a);
  }
  k.hb = function(a) {
    try {
      this.h.info("Origin Trials invoked: " + a);
    } catch (b) {
    }
  };
  function Ac(a) {
    a.g && (wc(a), a.g.cancel(), a.g = null);
  }
  function Jd(a) {
    Ac(a);
    a.u && (l.clearTimeout(a.u), a.u = null);
    zc(a);
    a.i.cancel();
    a.m && (typeof a.m === "number" && l.clearTimeout(a.m), a.m = null);
  }
  function Md(a, b) {
    a.l.push(new fd(a.Za++, b));
    a.G == 3 && Hc(a);
  }
  function Hc(a) {
    id(a.i) || a.m || (a.m = true, zb(a.Ha, a), a.C = 0);
  }
  function Nd(a, b) {
    if (Cc(a.i) >= a.i.j - (a.m ? 1 : 0))
      return false;
    if (a.m)
      return a.l = b.D.concat(a.l), true;
    if (a.G == 1 || a.G == 2 || a.C >= (a.Xa ? 0 : a.Ya))
      return false;
    a.m = K(q(a.Ha, a, b), Od(a, a.C));
    a.C++;
    return true;
  }
  k.Ha = function(a) {
    if (this.m)
      if (this.m = null, this.G == 1) {
        if (!a) {
          this.V = Math.floor(1e5 * Math.random());
          a = this.V++;
          const e = new M(this, this.h, a, void 0);
          let f = this.s;
          this.P && (f ? (f = ya(f), Aa(f, this.P)) : f = this.P);
          this.o === null && (e.H = f);
          if (this.ja)
            a: {
              var b = 0;
              for (var c = 0; c < this.l.length; c++) {
                b: {
                  var d = this.l[c];
                  if ("__data__" in d.g && (d = d.g.__data__, typeof d === "string")) {
                    d = d.length;
                    break b;
                  }
                  d = void 0;
                }
                if (d === void 0)
                  break;
                b += d;
                if (4096 < b) {
                  b = c;
                  break a;
                }
                if (b === 4096 || c === this.l.length - 1) {
                  b = c + 1;
                  break a;
                }
              }
              b = 1e3;
            }
          else
            b = 1e3;
          b = Pd(this, e, b);
          c = N(this.F);
          R(c, "RID", a);
          R(c, "CVER", 22);
          this.D && R(c, "X-HTTP-Session-Id", this.D);
          Kd(this, c);
          this.o && f && Gd(c, this.o, f);
          Dc(this.i, e);
          this.Ra && R(c, "TYPE", "init");
          this.ja ? (R(c, "$req", b), R(c, "SID", "null"), e.$ = true, ic(e, c, null)) : ic(e, c, b);
          this.G = 2;
        }
      } else
        this.G == 3 && (a ? Qd(this, a) : this.l.length == 0 || id(this.i) || Qd(this));
  };
  function Qd(a, b) {
    var c;
    b ? c = b.m : c = a.V++;
    const d = N(a.F);
    R(d, "SID", a.J);
    R(d, "RID", c);
    R(d, "AID", a.U);
    Kd(a, d);
    a.o && a.s && Gd(d, a.o, a.s);
    c = new M(a, a.h, c, a.C + 1);
    a.o === null && (c.H = a.s);
    b && (a.l = b.D.concat(a.l));
    b = Pd(a, c, 1e3);
    c.setTimeout(Math.round(0.5 * a.ra) + Math.round(0.5 * a.ra * Math.random()));
    Dc(a.i, c);
    ic(c, d, b);
  }
  function Kd(a, b) {
    a.j && Kc({}, function(c, d) {
      R(b, d, c);
    });
  }
  function Pd(a, b, c) {
    c = Math.min(a.l.length, c);
    var d = a.j ? q(a.j.Oa, a.j, a) : null;
    a: {
      var e = a.l;
      let f = -1;
      for (; ; ) {
        const h = ["count=" + c];
        f == -1 ? 0 < c ? (f = e[0].h, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
        let n = true;
        for (let u = 0; u < c; u++) {
          let m = e[u].h;
          const r = e[u].g;
          m -= f;
          if (0 > m)
            f = Math.max(0, e[u].h - 100), n = false;
          else
            try {
              md(r, h, "req" + m + "_");
            } catch (G2) {
              d && d(r);
            }
        }
        if (n) {
          d = h.join("&");
          break a;
        }
      }
    }
    a = a.l.splice(0, c);
    b.D = a;
    return d;
  }
  function Gc(a) {
    a.g || a.u || (a.Y = 1, zb(a.Ga, a), a.A = 0);
  }
  function Bc(a) {
    if (a.g || a.u || 3 <= a.A)
      return false;
    a.Y++;
    a.u = K(q(a.Ga, a), Od(a, a.A));
    a.A++;
    return true;
  }
  k.Ga = function() {
    this.u = null;
    Rd(this);
    if (this.$ && !(this.L || this.g == null || 0 >= this.O)) {
      var a = 2 * this.O;
      this.h.info("BP detection timer enabled: " + a);
      this.B = K(q(this.bb, this), a);
    }
  };
  k.bb = function() {
    this.B && (this.B = null, this.h.info("BP detection timeout reached."), this.h.info("Buffering proxy detected and switch to long-polling!"), this.N = false, this.L = true, J(10), Ac(this), Rd(this));
  };
  function wc(a) {
    a.B != null && (l.clearTimeout(a.B), a.B = null);
  }
  function Rd(a) {
    a.g = new M(a, a.h, "rpc", a.Y);
    a.o === null && (a.g.H = a.s);
    a.g.O = 0;
    var b = N(a.oa);
    R(b, "RID", "rpc");
    R(b, "SID", a.J);
    R(b, "CI", a.N ? "0" : "1");
    R(b, "AID", a.U);
    Kd(a, b);
    R(b, "TYPE", "xmlhttp");
    a.o && a.s && Gd(b, a.o, a.s);
    a.K && a.g.setTimeout(a.K);
    var c = a.g;
    a = a.la;
    c.K = 1;
    c.v = jc(N(b));
    c.s = null;
    c.U = true;
    kc(c, a);
  }
  k.ab = function() {
    this.v != null && (this.v = null, Ac(this), Bc(this), J(19));
  };
  function zc(a) {
    a.v != null && (l.clearTimeout(a.v), a.v = null);
  }
  function uc(a, b) {
    var c = null;
    if (a.g == b) {
      zc(a);
      wc(a);
      a.g = null;
      var d = 2;
    } else if (yc(a.i, b))
      c = b.D, Fc(a.i, b), d = 1;
    else
      return;
    a.I = b.N;
    if (a.G != 0) {
      if (b.i)
        if (d == 1) {
          c = b.s ? b.s.length : 0;
          b = Date.now() - b.F;
          var e = a.C;
          d = Sb();
          D(d, new Vb(d, c, b, e));
          Hc(a);
        } else
          Gc(a);
      else if (e = b.o, e == 3 || e == 0 && 0 < a.I || !(d == 1 && Nd(a, b) || d == 2 && Bc(a)))
        switch (c && 0 < c.length && (b = a.i, b.i = b.i.concat(c)), e) {
          case 1:
            Q(a, 5);
            break;
          case 4:
            Q(a, 10);
            break;
          case 3:
            Q(a, 6);
            break;
          default:
            Q(a, 2);
        }
    }
  }
  function Od(a, b) {
    let c = a.Pa + Math.floor(Math.random() * a.$a);
    a.j || (c *= 2);
    return c * b;
  }
  function Q(a, b) {
    a.h.info("Error code " + b);
    if (b == 2) {
      var c = null;
      a.j && (c = null);
      var d = q(a.jb, a);
      c || (c = new U("//www.google.com/images/cleardot.gif"), l.location && l.location.protocol == "http" || Oc(c, "https"), jc(c));
      nd(c.toString(), d);
    } else
      J(2);
    a.G = 0;
    a.j && a.j.va(b);
    Ld(a);
    Jd(a);
  }
  k.jb = function(a) {
    a ? (this.h.info("Successfully pinged google.com"), J(2)) : (this.h.info("Failed to ping google.com"), J(1));
  };
  function Ld(a) {
    a.G = 0;
    a.I = -1;
    if (a.j) {
      if (jd(a.i).length != 0 || a.l.length != 0)
        a.i.i.length = 0, ra(a.l), a.l.length = 0;
      a.j.ua();
    }
  }
  function Ec(a, b, c) {
    let d = ad(c);
    if (d.i != "")
      b && Pc(d, b + "." + d.i), Qc(d, d.m);
    else {
      const e = l.location;
      d = bd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
    }
    a.aa && xa(a.aa, function(e, f) {
      R(d, f, e);
    });
    b = a.D;
    c = a.sa;
    b && c && R(d, b, c);
    R(d, "VER", a.ma);
    Kd(a, d);
    return d;
  }
  function nc(a, b, c) {
    if (b && !a.H)
      throw Error("Can't create secondary domain capable XhrIo object.");
    b = c && a.Ba && !a.qa ? new X(new pd({ ib: true })) : new X(a.qa);
    b.L = a.H;
    return b;
  }
  function Sd() {
  }
  k = Sd.prototype;
  k.xa = function() {
  };
  k.wa = function() {
  };
  k.va = function() {
  };
  k.ua = function() {
  };
  k.Oa = function() {
  };
  function Td() {
    if (y && !(10 <= Number(Ua)))
      throw Error("Environmental error: no available transport.");
  }
  Td.prototype.g = function(a, b) {
    return new Y(a, b);
  };
  function Y(a, b) {
    C.call(this);
    this.g = new Id(b);
    this.l = a;
    this.h = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.g.s = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
    b && b.ya && (a ? a["X-WebChannel-Client-Profile"] = b.ya : a = { "X-WebChannel-Client-Profile": b.ya });
    this.g.P = a;
    (a = b && b.httpHeadersOverwriteParam) && !sa(a) && (this.g.o = a);
    this.A = b && b.supportsCrossDomainXhr || false;
    this.v = b && b.sendRawJson || false;
    (b = b && b.httpSessionIdParam) && !sa(b) && (this.g.D = b, a = this.h, a !== null && b in a && (a = this.h, b in a && delete a[b]));
    this.j = new Z(this);
  }
  t(Y, C);
  Y.prototype.m = function() {
    this.g.j = this.j;
    this.A && (this.g.H = true);
    var a = this.g, b = this.l, c = this.h || void 0;
    a.Wa && (a.h.info("Origin Trials enabled."), zb(q(a.hb, a, b)));
    J(0);
    a.W = b;
    a.aa = c || {};
    a.N = a.X;
    a.F = Ec(a, null, a.W);
    Hc(a);
  };
  Y.prototype.close = function() {
    Ic(this.g);
  };
  Y.prototype.u = function(a) {
    if (typeof a === "string") {
      var b = {};
      b.__data__ = a;
      Md(this.g, b);
    } else
      this.v ? (b = {}, b.__data__ = rb(a), Md(this.g, b)) : Md(this.g, a);
  };
  Y.prototype.M = function() {
    this.g.j = null;
    delete this.j;
    Ic(this.g);
    delete this.g;
    Y.Z.M.call(this);
  };
  function Ud(a) {
    ac.call(this);
    var b = a.__sm__;
    if (b) {
      a: {
        for (const c in b) {
          a = c;
          break a;
        }
        a = void 0;
      }
      if (this.i = a)
        a = this.i, b = b !== null && a in b ? b[a] : void 0;
      this.data = b;
    } else
      this.data = a;
  }
  t(Ud, ac);
  function Vd() {
    bc.call(this);
    this.status = 1;
  }
  t(Vd, bc);
  function Z(a) {
    this.g = a;
  }
  t(Z, Sd);
  Z.prototype.xa = function() {
    D(this.g, "a");
  };
  Z.prototype.wa = function(a) {
    D(this.g, new Ud(a));
  };
  Z.prototype.va = function(a) {
    D(this.g, new Vd(a));
  };
  Z.prototype.ua = function() {
    D(this.g, "b");
  };
  Td.prototype.createWebChannel = Td.prototype.g;
  Y.prototype.send = Y.prototype.u;
  Y.prototype.open = Y.prototype.m;
  Y.prototype.close = Y.prototype.close;
  Wb.NO_ERROR = 0;
  Wb.TIMEOUT = 8;
  Wb.HTTP_ERROR = 6;
  Xb.COMPLETE = "complete";
  $b.EventType = L;
  L.OPEN = "a";
  L.CLOSE = "b";
  L.ERROR = "c";
  L.MESSAGE = "d";
  C.prototype.listen = C.prototype.N;
  X.prototype.listenOnce = X.prototype.O;
  X.prototype.getLastError = X.prototype.La;
  X.prototype.getLastErrorCode = X.prototype.Da;
  X.prototype.getStatus = X.prototype.ba;
  X.prototype.getResponseJson = X.prototype.Qa;
  X.prototype.getResponseText = X.prototype.ga;
  X.prototype.send = X.prototype.ea;
  var createWebChannelTransport = esm.createWebChannelTransport = function() {
    return new Td();
  };
  var getStatEventTarget = esm.getStatEventTarget = function() {
    return Sb();
  };
  var ErrorCode = esm.ErrorCode = Wb;
  var EventType = esm.EventType = Xb;
  var Event = esm.Event = H;
  var Stat = esm.Stat = { rb: 0, ub: 1, vb: 2, Ob: 3, Tb: 4, Qb: 5, Rb: 6, Pb: 7, Nb: 8, Sb: 9, PROXY: 10, NOPROXY: 11, Lb: 12, Hb: 13, Ib: 14, Gb: 15, Jb: 16, Kb: 17, nb: 18, mb: 19, ob: 20 };
  var FetchXmlHttpFactory = esm.FetchXmlHttpFactory = pd;
  var WebChannel = esm.WebChannel = $b;
  var XhrIo = esm.XhrIo = X;

  // node_modules/@firebase/firestore/dist/index.esm2017.js
  var S2 = "@firebase/firestore";
  var D2 = class {
    constructor(t2) {
      this.uid = t2;
    }
    isAuthenticated() {
      return this.uid != null;
    }
    toKey() {
      return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
    }
    isEqual(t2) {
      return t2.uid === this.uid;
    }
  };
  D2.UNAUTHENTICATED = new D2(null), D2.GOOGLE_CREDENTIALS = new D2("google-credentials-uid"), D2.FIRST_PARTY = new D2("first-party-uid"), D2.MOCK_USER = new D2("mock-user");
  var C2 = "9.2.0";
  var N2 = new Logger("@firebase/firestore");
  function x2() {
    return N2.logLevel;
  }
  function $(t2, ...e) {
    if (N2.logLevel <= LogLevel.DEBUG) {
      const n = e.map(M2);
      N2.debug(`Firestore (${C2}): ${t2}`, ...n);
    }
  }
  function O2(t2, ...e) {
    if (N2.logLevel <= LogLevel.ERROR) {
      const n = e.map(M2);
      N2.error(`Firestore (${C2}): ${t2}`, ...n);
    }
  }
  function F2(t2, ...e) {
    if (N2.logLevel <= LogLevel.WARN) {
      const n = e.map(M2);
      N2.warn(`Firestore (${C2}): ${t2}`, ...n);
    }
  }
  function M2(t2) {
    if (typeof t2 == "string")
      return t2;
    try {
      return e = t2, JSON.stringify(e);
    } catch (e2) {
      return t2;
    }
    var e;
  }
  function L2(t2 = "Unexpected state") {
    const e = `FIRESTORE (${C2}) INTERNAL ASSERTION FAILED: ` + t2;
    throw O2(e), new Error(e);
  }
  function B2(t2, e) {
    t2 || L2();
  }
  function q2(t2, e) {
    return t2;
  }
  var K2 = {
    OK: "ok",
    CANCELLED: "cancelled",
    UNKNOWN: "unknown",
    INVALID_ARGUMENT: "invalid-argument",
    DEADLINE_EXCEEDED: "deadline-exceeded",
    NOT_FOUND: "not-found",
    ALREADY_EXISTS: "already-exists",
    PERMISSION_DENIED: "permission-denied",
    UNAUTHENTICATED: "unauthenticated",
    RESOURCE_EXHAUSTED: "resource-exhausted",
    FAILED_PRECONDITION: "failed-precondition",
    ABORTED: "aborted",
    OUT_OF_RANGE: "out-of-range",
    UNIMPLEMENTED: "unimplemented",
    INTERNAL: "internal",
    UNAVAILABLE: "unavailable",
    DATA_LOSS: "data-loss"
  };
  var j = class extends Error {
    constructor(t2, e) {
      super(e), this.code = t2, this.message = e, this.name = "FirebaseError", this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
    }
  };
  var Q2 = class {
    constructor() {
      this.promise = new Promise((t2, e) => {
        this.resolve = t2, this.reject = e;
      });
    }
  };
  var W2 = class {
    constructor(t2, e) {
      this.user = e, this.type = "OAuth", this.authHeaders = {}, this.authHeaders.Authorization = `Bearer ${t2}`;
    }
  };
  var G = class {
    getToken() {
      return Promise.resolve(null);
    }
    invalidateToken() {
    }
    start(t2, e) {
      t2.enqueueRetryable(() => e(D2.UNAUTHENTICATED));
    }
    shutdown() {
    }
  };
  var H2 = class {
    constructor(t2) {
      this.t = t2, this.currentUser = D2.UNAUTHENTICATED, this.i = 0, this.forceRefresh = false, this.auth = null;
    }
    start(t2, e) {
      let n = this.i;
      const s = (t3) => this.i !== n ? (n = this.i, e(t3)) : Promise.resolve();
      let i = new Q2();
      this.o = () => {
        this.i++, this.currentUser = this.u(), i.resolve(), i = new Q2(), t2.enqueueRetryable(() => s(this.currentUser));
      };
      const r = () => {
        const e2 = i;
        t2.enqueueRetryable(async () => {
          await e2.promise, await s(this.currentUser);
        });
      }, o = (t3) => {
        $("FirebaseCredentialsProvider", "Auth detected"), this.auth = t3, this.auth.addAuthTokenListener(this.o), r();
      };
      this.t.onInit((t3) => o(t3)), setTimeout(() => {
        if (!this.auth) {
          const t3 = this.t.getImmediate({
            optional: true
          });
          t3 ? o(t3) : ($("FirebaseCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new Q2());
        }
      }, 0), r();
    }
    getToken() {
      const t2 = this.i, e = this.forceRefresh;
      return this.forceRefresh = false, this.auth ? this.auth.getToken(e).then((e2) => this.i !== t2 ? ($("FirebaseCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : e2 ? (B2(typeof e2.accessToken == "string"), new W2(e2.accessToken, this.currentUser)) : null) : Promise.resolve(null);
    }
    invalidateToken() {
      this.forceRefresh = true;
    }
    shutdown() {
      this.auth && this.auth.removeAuthTokenListener(this.o);
    }
    u() {
      const t2 = this.auth && this.auth.getUid();
      return B2(t2 === null || typeof t2 == "string"), new D2(t2);
    }
  };
  var J2 = class {
    constructor(t2, e, n) {
      this.h = t2, this.l = e, this.m = n, this.type = "FirstParty", this.user = D2.FIRST_PARTY;
    }
    get authHeaders() {
      const t2 = {
        "X-Goog-AuthUser": this.l
      }, e = this.h.auth.getAuthHeaderValueForFirstParty([]);
      return e && (t2.Authorization = e), this.m && (t2["X-Goog-Iam-Authorization-Token"] = this.m), t2;
    }
  };
  var Y2 = class {
    constructor(t2, e, n) {
      this.h = t2, this.l = e, this.m = n;
    }
    getToken() {
      return Promise.resolve(new J2(this.h, this.l, this.m));
    }
    start(t2, e) {
      t2.enqueueRetryable(() => e(D2.FIRST_PARTY));
    }
    shutdown() {
    }
    invalidateToken() {
    }
  };
  var X2 = class {
    constructor(t2, e) {
      this.previousValue = t2, e && (e.sequenceNumberHandler = (t3) => this.g(t3), this.p = (t3) => e.writeSequenceNumber(t3));
    }
    g(t2) {
      return this.previousValue = Math.max(t2, this.previousValue), this.previousValue;
    }
    next() {
      const t2 = ++this.previousValue;
      return this.p && this.p(t2), t2;
    }
  };
  function Z2(t2) {
    const e = typeof self != "undefined" && (self.crypto || self.msCrypto), n = new Uint8Array(t2);
    if (e && typeof e.getRandomValues == "function")
      e.getRandomValues(n);
    else
      for (let e2 = 0; e2 < t2; e2++)
        n[e2] = Math.floor(256 * Math.random());
    return n;
  }
  X2.T = -1;
  var tt = class {
    static I() {
      const t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t2.length) * t2.length;
      let n = "";
      for (; n.length < 20; ) {
        const s = Z2(40);
        for (let i = 0; i < s.length; ++i)
          n.length < 20 && s[i] < e && (n += t2.charAt(s[i] % t2.length));
      }
      return n;
    }
  };
  function et(t2, e) {
    return t2 < e ? -1 : t2 > e ? 1 : 0;
  }
  function nt(t2, e, n) {
    return t2.length === e.length && t2.every((t3, s) => n(t3, e[s]));
  }
  var it = class {
    constructor(t2, e) {
      if (this.seconds = t2, this.nanoseconds = e, e < 0)
        throw new j(K2.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
      if (e >= 1e9)
        throw new j(K2.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
      if (t2 < -62135596800)
        throw new j(K2.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
      if (t2 >= 253402300800)
        throw new j(K2.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
    }
    static now() {
      return it.fromMillis(Date.now());
    }
    static fromDate(t2) {
      return it.fromMillis(t2.getTime());
    }
    static fromMillis(t2) {
      const e = Math.floor(t2 / 1e3), n = Math.floor(1e6 * (t2 - 1e3 * e));
      return new it(e, n);
    }
    toDate() {
      return new Date(this.toMillis());
    }
    toMillis() {
      return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }
    _compareTo(t2) {
      return this.seconds === t2.seconds ? et(this.nanoseconds, t2.nanoseconds) : et(this.seconds, t2.seconds);
    }
    isEqual(t2) {
      return t2.seconds === this.seconds && t2.nanoseconds === this.nanoseconds;
    }
    toString() {
      return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }
    toJSON() {
      return {
        seconds: this.seconds,
        nanoseconds: this.nanoseconds
      };
    }
    valueOf() {
      const t2 = this.seconds - -62135596800;
      return String(t2).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }
  };
  var rt = class {
    constructor(t2) {
      this.timestamp = t2;
    }
    static fromTimestamp(t2) {
      return new rt(t2);
    }
    static min() {
      return new rt(new it(0, 0));
    }
    compareTo(t2) {
      return this.timestamp._compareTo(t2.timestamp);
    }
    isEqual(t2) {
      return this.timestamp.isEqual(t2.timestamp);
    }
    toMicroseconds() {
      return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }
    toString() {
      return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }
    toTimestamp() {
      return this.timestamp;
    }
  };
  function ot(t2) {
    let e = 0;
    for (const n in t2)
      Object.prototype.hasOwnProperty.call(t2, n) && e++;
    return e;
  }
  function ct(t2, e) {
    for (const n in t2)
      Object.prototype.hasOwnProperty.call(t2, n) && e(n, t2[n]);
  }
  function at(t2) {
    for (const e in t2)
      if (Object.prototype.hasOwnProperty.call(t2, e))
        return false;
    return true;
  }
  var ut = class {
    constructor(t2, e, n) {
      e === void 0 ? e = 0 : e > t2.length && L2(), n === void 0 ? n = t2.length - e : n > t2.length - e && L2(), this.segments = t2, this.offset = e, this.len = n;
    }
    get length() {
      return this.len;
    }
    isEqual(t2) {
      return ut.comparator(this, t2) === 0;
    }
    child(t2) {
      const e = this.segments.slice(this.offset, this.limit());
      return t2 instanceof ut ? t2.forEach((t3) => {
        e.push(t3);
      }) : e.push(t2), this.construct(e);
    }
    limit() {
      return this.offset + this.length;
    }
    popFirst(t2) {
      return t2 = t2 === void 0 ? 1 : t2, this.construct(this.segments, this.offset + t2, this.length - t2);
    }
    popLast() {
      return this.construct(this.segments, this.offset, this.length - 1);
    }
    firstSegment() {
      return this.segments[this.offset];
    }
    lastSegment() {
      return this.get(this.length - 1);
    }
    get(t2) {
      return this.segments[this.offset + t2];
    }
    isEmpty() {
      return this.length === 0;
    }
    isPrefixOf(t2) {
      if (t2.length < this.length)
        return false;
      for (let e = 0; e < this.length; e++)
        if (this.get(e) !== t2.get(e))
          return false;
      return true;
    }
    isImmediateParentOf(t2) {
      if (this.length + 1 !== t2.length)
        return false;
      for (let e = 0; e < this.length; e++)
        if (this.get(e) !== t2.get(e))
          return false;
      return true;
    }
    forEach(t2) {
      for (let e = this.offset, n = this.limit(); e < n; e++)
        t2(this.segments[e]);
    }
    toArray() {
      return this.segments.slice(this.offset, this.limit());
    }
    static comparator(t2, e) {
      const n = Math.min(t2.length, e.length);
      for (let s = 0; s < n; s++) {
        const n2 = t2.get(s), i = e.get(s);
        if (n2 < i)
          return -1;
        if (n2 > i)
          return 1;
      }
      return t2.length < e.length ? -1 : t2.length > e.length ? 1 : 0;
    }
  };
  var ht = class extends ut {
    construct(t2, e, n) {
      return new ht(t2, e, n);
    }
    canonicalString() {
      return this.toArray().join("/");
    }
    toString() {
      return this.canonicalString();
    }
    static fromString(...t2) {
      const e = [];
      for (const n of t2) {
        if (n.indexOf("//") >= 0)
          throw new j(K2.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
        e.push(...n.split("/").filter((t3) => t3.length > 0));
      }
      return new ht(e);
    }
    static emptyPath() {
      return new ht([]);
    }
  };
  var lt = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
  var ft = class extends ut {
    construct(t2, e, n) {
      return new ft(t2, e, n);
    }
    static isValidIdentifier(t2) {
      return lt.test(t2);
    }
    canonicalString() {
      return this.toArray().map((t2) => (t2 = t2.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), ft.isValidIdentifier(t2) || (t2 = "`" + t2 + "`"), t2)).join(".");
    }
    toString() {
      return this.canonicalString();
    }
    isKeyField() {
      return this.length === 1 && this.get(0) === "__name__";
    }
    static keyField() {
      return new ft(["__name__"]);
    }
    static fromServerFormat(t2) {
      const e = [];
      let n = "", s = 0;
      const i = () => {
        if (n.length === 0)
          throw new j(K2.INVALID_ARGUMENT, `Invalid field path (${t2}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
        e.push(n), n = "";
      };
      let r = false;
      for (; s < t2.length; ) {
        const e2 = t2[s];
        if (e2 === "\\") {
          if (s + 1 === t2.length)
            throw new j(K2.INVALID_ARGUMENT, "Path has trailing escape character: " + t2);
          const e3 = t2[s + 1];
          if (e3 !== "\\" && e3 !== "." && e3 !== "`")
            throw new j(K2.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t2);
          n += e3, s += 2;
        } else
          e2 === "`" ? (r = !r, s++) : e2 !== "." || r ? (n += e2, s++) : (i(), s++);
      }
      if (i(), r)
        throw new j(K2.INVALID_ARGUMENT, "Unterminated ` in path: " + t2);
      return new ft(e);
    }
    static emptyPath() {
      return new ft([]);
    }
  };
  var _t = class {
    constructor(t2) {
      this.binaryString = t2;
    }
    static fromBase64String(t2) {
      const e = atob(t2);
      return new _t(e);
    }
    static fromUint8Array(t2) {
      const e = function(t3) {
        let e2 = "";
        for (let n = 0; n < t3.length; ++n)
          e2 += String.fromCharCode(t3[n]);
        return e2;
      }(t2);
      return new _t(e);
    }
    toBase64() {
      return t2 = this.binaryString, btoa(t2);
      var t2;
    }
    toUint8Array() {
      return function(t2) {
        const e = new Uint8Array(t2.length);
        for (let n = 0; n < t2.length; n++)
          e[n] = t2.charCodeAt(n);
        return e;
      }(this.binaryString);
    }
    approximateByteSize() {
      return 2 * this.binaryString.length;
    }
    compareTo(t2) {
      return et(this.binaryString, t2.binaryString);
    }
    isEqual(t2) {
      return this.binaryString === t2.binaryString;
    }
  };
  _t.EMPTY_BYTE_STRING = new _t("");
  var mt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
  function gt(t2) {
    if (B2(!!t2), typeof t2 == "string") {
      let e = 0;
      const n = mt.exec(t2);
      if (B2(!!n), n[1]) {
        let t3 = n[1];
        t3 = (t3 + "000000000").substr(0, 9), e = Number(t3);
      }
      const s = new Date(t2);
      return {
        seconds: Math.floor(s.getTime() / 1e3),
        nanos: e
      };
    }
    return {
      seconds: yt(t2.seconds),
      nanos: yt(t2.nanos)
    };
  }
  function yt(t2) {
    return typeof t2 == "number" ? t2 : typeof t2 == "string" ? Number(t2) : 0;
  }
  function pt(t2) {
    return typeof t2 == "string" ? _t.fromBase64String(t2) : _t.fromUint8Array(t2);
  }
  function Tt(t2) {
    var e, n;
    return ((n = (((e = t2 == null ? void 0 : t2.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}).__type__) === null || n === void 0 ? void 0 : n.stringValue) === "server_timestamp";
  }
  function Et(t2) {
    const e = t2.mapValue.fields.__previous_value__;
    return Tt(e) ? Et(e) : e;
  }
  function It(t2) {
    const e = gt(t2.mapValue.fields.__local_write_time__.timestampValue);
    return new it(e.seconds, e.nanos);
  }
  function At(t2) {
    return t2 == null;
  }
  function Rt(t2) {
    return t2 === 0 && 1 / t2 == -1 / 0;
  }
  var Pt = class {
    constructor(t2) {
      this.path = t2;
    }
    static fromPath(t2) {
      return new Pt(ht.fromString(t2));
    }
    static fromName(t2) {
      return new Pt(ht.fromString(t2).popFirst(5));
    }
    hasCollectionId(t2) {
      return this.path.length >= 2 && this.path.get(this.path.length - 2) === t2;
    }
    isEqual(t2) {
      return t2 !== null && ht.comparator(this.path, t2.path) === 0;
    }
    toString() {
      return this.path.toString();
    }
    static comparator(t2, e) {
      return ht.comparator(t2.path, e.path);
    }
    static isDocumentKey(t2) {
      return t2.length % 2 == 0;
    }
    static fromSegments(t2) {
      return new Pt(new ht(t2.slice()));
    }
  };
  function vt(t2) {
    return "nullValue" in t2 ? 0 : "booleanValue" in t2 ? 1 : "integerValue" in t2 || "doubleValue" in t2 ? 2 : "timestampValue" in t2 ? 3 : "stringValue" in t2 ? 5 : "bytesValue" in t2 ? 6 : "referenceValue" in t2 ? 7 : "geoPointValue" in t2 ? 8 : "arrayValue" in t2 ? 9 : "mapValue" in t2 ? Tt(t2) ? 4 : 10 : L2();
  }
  function Vt(t2, e) {
    const n = vt(t2);
    if (n !== vt(e))
      return false;
    switch (n) {
      case 0:
        return true;
      case 1:
        return t2.booleanValue === e.booleanValue;
      case 4:
        return It(t2).isEqual(It(e));
      case 3:
        return function(t3, e2) {
          if (typeof t3.timestampValue == "string" && typeof e2.timestampValue == "string" && t3.timestampValue.length === e2.timestampValue.length)
            return t3.timestampValue === e2.timestampValue;
          const n2 = gt(t3.timestampValue), s = gt(e2.timestampValue);
          return n2.seconds === s.seconds && n2.nanos === s.nanos;
        }(t2, e);
      case 5:
        return t2.stringValue === e.stringValue;
      case 6:
        return function(t3, e2) {
          return pt(t3.bytesValue).isEqual(pt(e2.bytesValue));
        }(t2, e);
      case 7:
        return t2.referenceValue === e.referenceValue;
      case 8:
        return function(t3, e2) {
          return yt(t3.geoPointValue.latitude) === yt(e2.geoPointValue.latitude) && yt(t3.geoPointValue.longitude) === yt(e2.geoPointValue.longitude);
        }(t2, e);
      case 2:
        return function(t3, e2) {
          if ("integerValue" in t3 && "integerValue" in e2)
            return yt(t3.integerValue) === yt(e2.integerValue);
          if ("doubleValue" in t3 && "doubleValue" in e2) {
            const n2 = yt(t3.doubleValue), s = yt(e2.doubleValue);
            return n2 === s ? Rt(n2) === Rt(s) : isNaN(n2) && isNaN(s);
          }
          return false;
        }(t2, e);
      case 9:
        return nt(t2.arrayValue.values || [], e.arrayValue.values || [], Vt);
      case 10:
        return function(t3, e2) {
          const n2 = t3.mapValue.fields || {}, s = e2.mapValue.fields || {};
          if (ot(n2) !== ot(s))
            return false;
          for (const t4 in n2)
            if (n2.hasOwnProperty(t4) && (s[t4] === void 0 || !Vt(n2[t4], s[t4])))
              return false;
          return true;
        }(t2, e);
      default:
        return L2();
    }
  }
  function St(t2, e) {
    return (t2.values || []).find((t3) => Vt(t3, e)) !== void 0;
  }
  function Dt(t2, e) {
    const n = vt(t2), s = vt(e);
    if (n !== s)
      return et(n, s);
    switch (n) {
      case 0:
        return 0;
      case 1:
        return et(t2.booleanValue, e.booleanValue);
      case 2:
        return function(t3, e2) {
          const n2 = yt(t3.integerValue || t3.doubleValue), s2 = yt(e2.integerValue || e2.doubleValue);
          return n2 < s2 ? -1 : n2 > s2 ? 1 : n2 === s2 ? 0 : isNaN(n2) ? isNaN(s2) ? 0 : -1 : 1;
        }(t2, e);
      case 3:
        return Ct(t2.timestampValue, e.timestampValue);
      case 4:
        return Ct(It(t2), It(e));
      case 5:
        return et(t2.stringValue, e.stringValue);
      case 6:
        return function(t3, e2) {
          const n2 = pt(t3), s2 = pt(e2);
          return n2.compareTo(s2);
        }(t2.bytesValue, e.bytesValue);
      case 7:
        return function(t3, e2) {
          const n2 = t3.split("/"), s2 = e2.split("/");
          for (let t4 = 0; t4 < n2.length && t4 < s2.length; t4++) {
            const e3 = et(n2[t4], s2[t4]);
            if (e3 !== 0)
              return e3;
          }
          return et(n2.length, s2.length);
        }(t2.referenceValue, e.referenceValue);
      case 8:
        return function(t3, e2) {
          const n2 = et(yt(t3.latitude), yt(e2.latitude));
          if (n2 !== 0)
            return n2;
          return et(yt(t3.longitude), yt(e2.longitude));
        }(t2.geoPointValue, e.geoPointValue);
      case 9:
        return function(t3, e2) {
          const n2 = t3.values || [], s2 = e2.values || [];
          for (let t4 = 0; t4 < n2.length && t4 < s2.length; ++t4) {
            const e3 = Dt(n2[t4], s2[t4]);
            if (e3)
              return e3;
          }
          return et(n2.length, s2.length);
        }(t2.arrayValue, e.arrayValue);
      case 10:
        return function(t3, e2) {
          const n2 = t3.fields || {}, s2 = Object.keys(n2), i = e2.fields || {}, r = Object.keys(i);
          s2.sort(), r.sort();
          for (let t4 = 0; t4 < s2.length && t4 < r.length; ++t4) {
            const e3 = et(s2[t4], r[t4]);
            if (e3 !== 0)
              return e3;
            const o = Dt(n2[s2[t4]], i[r[t4]]);
            if (o !== 0)
              return o;
          }
          return et(s2.length, r.length);
        }(t2.mapValue, e.mapValue);
      default:
        throw L2();
    }
  }
  function Ct(t2, e) {
    if (typeof t2 == "string" && typeof e == "string" && t2.length === e.length)
      return et(t2, e);
    const n = gt(t2), s = gt(e), i = et(n.seconds, s.seconds);
    return i !== 0 ? i : et(n.nanos, s.nanos);
  }
  function Nt(t2) {
    return xt(t2);
  }
  function xt(t2) {
    return "nullValue" in t2 ? "null" : "booleanValue" in t2 ? "" + t2.booleanValue : "integerValue" in t2 ? "" + t2.integerValue : "doubleValue" in t2 ? "" + t2.doubleValue : "timestampValue" in t2 ? function(t3) {
      const e2 = gt(t3);
      return `time(${e2.seconds},${e2.nanos})`;
    }(t2.timestampValue) : "stringValue" in t2 ? t2.stringValue : "bytesValue" in t2 ? pt(t2.bytesValue).toBase64() : "referenceValue" in t2 ? (n = t2.referenceValue, Pt.fromName(n).toString()) : "geoPointValue" in t2 ? `geo(${(e = t2.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t2 ? function(t3) {
      let e2 = "[", n2 = true;
      for (const s of t3.values || [])
        n2 ? n2 = false : e2 += ",", e2 += xt(s);
      return e2 + "]";
    }(t2.arrayValue) : "mapValue" in t2 ? function(t3) {
      const e2 = Object.keys(t3.fields || {}).sort();
      let n2 = "{", s = true;
      for (const i of e2)
        s ? s = false : n2 += ",", n2 += `${i}:${xt(t3.fields[i])}`;
      return n2 + "}";
    }(t2.mapValue) : L2();
    var e, n;
  }
  function $t(t2) {
    return !!t2 && "integerValue" in t2;
  }
  function Ot(t2) {
    return !!t2 && "arrayValue" in t2;
  }
  function Ft(t2) {
    return !!t2 && "nullValue" in t2;
  }
  function Mt(t2) {
    return !!t2 && "doubleValue" in t2 && isNaN(Number(t2.doubleValue));
  }
  function Lt(t2) {
    return !!t2 && "mapValue" in t2;
  }
  function Bt(t2) {
    if (t2.geoPointValue)
      return {
        geoPointValue: Object.assign({}, t2.geoPointValue)
      };
    if (t2.timestampValue && typeof t2.timestampValue == "object")
      return {
        timestampValue: Object.assign({}, t2.timestampValue)
      };
    if (t2.mapValue) {
      const e = {
        mapValue: {
          fields: {}
        }
      };
      return ct(t2.mapValue.fields, (t3, n) => e.mapValue.fields[t3] = Bt(n)), e;
    }
    if (t2.arrayValue) {
      const e = {
        arrayValue: {
          values: []
        }
      };
      for (let n = 0; n < (t2.arrayValue.values || []).length; ++n)
        e.arrayValue.values[n] = Bt(t2.arrayValue.values[n]);
      return e;
    }
    return Object.assign({}, t2);
  }
  var Ut = class {
    constructor(t2) {
      this.value = t2;
    }
    static empty() {
      return new Ut({
        mapValue: {}
      });
    }
    field(t2) {
      if (t2.isEmpty())
        return this.value;
      {
        let e = this.value;
        for (let n = 0; n < t2.length - 1; ++n)
          if (e = (e.mapValue.fields || {})[t2.get(n)], !Lt(e))
            return null;
        return e = (e.mapValue.fields || {})[t2.lastSegment()], e || null;
      }
    }
    set(t2, e) {
      this.getFieldsMap(t2.popLast())[t2.lastSegment()] = Bt(e);
    }
    setAll(t2) {
      let e = ft.emptyPath(), n = {}, s = [];
      t2.forEach((t3, i2) => {
        if (!e.isImmediateParentOf(i2)) {
          const t4 = this.getFieldsMap(e);
          this.applyChanges(t4, n, s), n = {}, s = [], e = i2.popLast();
        }
        t3 ? n[i2.lastSegment()] = Bt(t3) : s.push(i2.lastSegment());
      });
      const i = this.getFieldsMap(e);
      this.applyChanges(i, n, s);
    }
    delete(t2) {
      const e = this.field(t2.popLast());
      Lt(e) && e.mapValue.fields && delete e.mapValue.fields[t2.lastSegment()];
    }
    isEqual(t2) {
      return Vt(this.value, t2.value);
    }
    getFieldsMap(t2) {
      let e = this.value;
      e.mapValue.fields || (e.mapValue = {
        fields: {}
      });
      for (let n = 0; n < t2.length; ++n) {
        let s = e.mapValue.fields[t2.get(n)];
        Lt(s) && s.mapValue.fields || (s = {
          mapValue: {
            fields: {}
          }
        }, e.mapValue.fields[t2.get(n)] = s), e = s;
      }
      return e.mapValue.fields;
    }
    applyChanges(t2, e, n) {
      ct(e, (e2, n2) => t2[e2] = n2);
      for (const e2 of n)
        delete t2[e2];
    }
    clone() {
      return new Ut(Bt(this.value));
    }
  };
  var Kt = class {
    constructor(t2, e, n, s, i) {
      this.key = t2, this.documentType = e, this.version = n, this.data = s, this.documentState = i;
    }
    static newInvalidDocument(t2) {
      return new Kt(t2, 0, rt.min(), Ut.empty(), 0);
    }
    static newFoundDocument(t2, e, n) {
      return new Kt(t2, 1, e, n, 0);
    }
    static newNoDocument(t2, e) {
      return new Kt(t2, 2, e, Ut.empty(), 0);
    }
    static newUnknownDocument(t2, e) {
      return new Kt(t2, 3, e, Ut.empty(), 2);
    }
    convertToFoundDocument(t2, e) {
      return this.version = t2, this.documentType = 1, this.data = e, this.documentState = 0, this;
    }
    convertToNoDocument(t2) {
      return this.version = t2, this.documentType = 2, this.data = Ut.empty(), this.documentState = 0, this;
    }
    convertToUnknownDocument(t2) {
      return this.version = t2, this.documentType = 3, this.data = Ut.empty(), this.documentState = 2, this;
    }
    setHasCommittedMutations() {
      return this.documentState = 2, this;
    }
    setHasLocalMutations() {
      return this.documentState = 1, this;
    }
    get hasLocalMutations() {
      return this.documentState === 1;
    }
    get hasCommittedMutations() {
      return this.documentState === 2;
    }
    get hasPendingWrites() {
      return this.hasLocalMutations || this.hasCommittedMutations;
    }
    isValidDocument() {
      return this.documentType !== 0;
    }
    isFoundDocument() {
      return this.documentType === 1;
    }
    isNoDocument() {
      return this.documentType === 2;
    }
    isUnknownDocument() {
      return this.documentType === 3;
    }
    isEqual(t2) {
      return t2 instanceof Kt && this.key.isEqual(t2.key) && this.version.isEqual(t2.version) && this.documentType === t2.documentType && this.documentState === t2.documentState && this.data.isEqual(t2.data);
    }
    clone() {
      return new Kt(this.key, this.documentType, this.version, this.data.clone(), this.documentState);
    }
    toString() {
      return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
    }
  };
  var jt = class {
    constructor(t2, e = null, n = [], s = [], i = null, r = null, o = null) {
      this.path = t2, this.collectionGroup = e, this.orderBy = n, this.filters = s, this.limit = i, this.startAt = r, this.endAt = o, this.A = null;
    }
  };
  function Qt(t2, e = null, n = [], s = [], i = null, r = null, o = null) {
    return new jt(t2, e, n, s, i, r, o);
  }
  function Wt(t2) {
    const e = q2(t2);
    if (e.A === null) {
      let t3 = e.path.canonicalString();
      e.collectionGroup !== null && (t3 += "|cg:" + e.collectionGroup), t3 += "|f:", t3 += e.filters.map((t4) => Yt(t4)).join(","), t3 += "|ob:", t3 += e.orderBy.map((t4) => function(t5) {
        return t5.field.canonicalString() + t5.dir;
      }(t4)).join(","), At(e.limit) || (t3 += "|l:", t3 += e.limit), e.startAt && (t3 += "|lb:", t3 += ce(e.startAt)), e.endAt && (t3 += "|ub:", t3 += ce(e.endAt)), e.A = t3;
    }
    return e.A;
  }
  function Gt(t2) {
    let e = t2.path.canonicalString();
    return t2.collectionGroup !== null && (e += " collectionGroup=" + t2.collectionGroup), t2.filters.length > 0 && (e += `, filters: [${t2.filters.map((t3) => {
      return `${(e2 = t3).field.canonicalString()} ${e2.op} ${Nt(e2.value)}`;
      var e2;
    }).join(", ")}]`), At(t2.limit) || (e += ", limit: " + t2.limit), t2.orderBy.length > 0 && (e += `, orderBy: [${t2.orderBy.map((t3) => function(t4) {
      return `${t4.field.canonicalString()} (${t4.dir})`;
    }(t3)).join(", ")}]`), t2.startAt && (e += ", startAt: " + ce(t2.startAt)), t2.endAt && (e += ", endAt: " + ce(t2.endAt)), `Target(${e})`;
  }
  function zt(t2, e) {
    if (t2.limit !== e.limit)
      return false;
    if (t2.orderBy.length !== e.orderBy.length)
      return false;
    for (let n2 = 0; n2 < t2.orderBy.length; n2++)
      if (!ue(t2.orderBy[n2], e.orderBy[n2]))
        return false;
    if (t2.filters.length !== e.filters.length)
      return false;
    for (let i = 0; i < t2.filters.length; i++)
      if (n = t2.filters[i], s = e.filters[i], n.op !== s.op || !n.field.isEqual(s.field) || !Vt(n.value, s.value))
        return false;
    var n, s;
    return t2.collectionGroup === e.collectionGroup && (!!t2.path.isEqual(e.path) && (!!le(t2.startAt, e.startAt) && le(t2.endAt, e.endAt)));
  }
  function Ht(t2) {
    return Pt.isDocumentKey(t2.path) && t2.collectionGroup === null && t2.filters.length === 0;
  }
  var Jt = class extends class {
  } {
    constructor(t2, e, n) {
      super(), this.field = t2, this.op = e, this.value = n;
    }
    static create(t2, e, n) {
      return t2.isKeyField() ? e === "in" || e === "not-in" ? this.R(t2, e, n) : new Xt(t2, e, n) : e === "array-contains" ? new ne(t2, n) : e === "in" ? new se(t2, n) : e === "not-in" ? new ie(t2, n) : e === "array-contains-any" ? new re(t2, n) : new Jt(t2, e, n);
    }
    static R(t2, e, n) {
      return e === "in" ? new Zt(t2, n) : new te(t2, n);
    }
    matches(t2) {
      const e = t2.data.field(this.field);
      return this.op === "!=" ? e !== null && this.P(Dt(e, this.value)) : e !== null && vt(this.value) === vt(e) && this.P(Dt(e, this.value));
    }
    P(t2) {
      switch (this.op) {
        case "<":
          return t2 < 0;
        case "<=":
          return t2 <= 0;
        case "==":
          return t2 === 0;
        case "!=":
          return t2 !== 0;
        case ">":
          return t2 > 0;
        case ">=":
          return t2 >= 0;
        default:
          return L2();
      }
    }
    v() {
      return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
    }
  };
  function Yt(t2) {
    return t2.field.canonicalString() + t2.op.toString() + Nt(t2.value);
  }
  var Xt = class extends Jt {
    constructor(t2, e, n) {
      super(t2, e, n), this.key = Pt.fromName(n.referenceValue);
    }
    matches(t2) {
      const e = Pt.comparator(t2.key, this.key);
      return this.P(e);
    }
  };
  var Zt = class extends Jt {
    constructor(t2, e) {
      super(t2, "in", e), this.keys = ee("in", e);
    }
    matches(t2) {
      return this.keys.some((e) => e.isEqual(t2.key));
    }
  };
  var te = class extends Jt {
    constructor(t2, e) {
      super(t2, "not-in", e), this.keys = ee("not-in", e);
    }
    matches(t2) {
      return !this.keys.some((e) => e.isEqual(t2.key));
    }
  };
  function ee(t2, e) {
    var n;
    return (((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []).map((t3) => Pt.fromName(t3.referenceValue));
  }
  var ne = class extends Jt {
    constructor(t2, e) {
      super(t2, "array-contains", e);
    }
    matches(t2) {
      const e = t2.data.field(this.field);
      return Ot(e) && St(e.arrayValue, this.value);
    }
  };
  var se = class extends Jt {
    constructor(t2, e) {
      super(t2, "in", e);
    }
    matches(t2) {
      const e = t2.data.field(this.field);
      return e !== null && St(this.value.arrayValue, e);
    }
  };
  var ie = class extends Jt {
    constructor(t2, e) {
      super(t2, "not-in", e);
    }
    matches(t2) {
      if (St(this.value.arrayValue, {
        nullValue: "NULL_VALUE"
      }))
        return false;
      const e = t2.data.field(this.field);
      return e !== null && !St(this.value.arrayValue, e);
    }
  };
  var re = class extends Jt {
    constructor(t2, e) {
      super(t2, "array-contains-any", e);
    }
    matches(t2) {
      const e = t2.data.field(this.field);
      return !(!Ot(e) || !e.arrayValue.values) && e.arrayValue.values.some((t3) => St(this.value.arrayValue, t3));
    }
  };
  var oe = class {
    constructor(t2, e) {
      this.position = t2, this.before = e;
    }
  };
  function ce(t2) {
    return `${t2.before ? "b" : "a"}:${t2.position.map((t3) => Nt(t3)).join(",")}`;
  }
  var ae = class {
    constructor(t2, e = "asc") {
      this.field = t2, this.dir = e;
    }
  };
  function ue(t2, e) {
    return t2.dir === e.dir && t2.field.isEqual(e.field);
  }
  function he(t2, e, n) {
    let s = 0;
    for (let i = 0; i < t2.position.length; i++) {
      const r = e[i], o = t2.position[i];
      if (r.field.isKeyField())
        s = Pt.comparator(Pt.fromName(o.referenceValue), n.key);
      else {
        s = Dt(o, n.data.field(r.field));
      }
      if (r.dir === "desc" && (s *= -1), s !== 0)
        break;
    }
    return t2.before ? s <= 0 : s < 0;
  }
  function le(t2, e) {
    if (t2 === null)
      return e === null;
    if (e === null)
      return false;
    if (t2.before !== e.before || t2.position.length !== e.position.length)
      return false;
    for (let n = 0; n < t2.position.length; n++) {
      if (!Vt(t2.position[n], e.position[n]))
        return false;
    }
    return true;
  }
  var fe = class {
    constructor(t2, e = null, n = [], s = [], i = null, r = "F", o = null, c = null) {
      this.path = t2, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = s, this.limit = i, this.limitType = r, this.startAt = o, this.endAt = c, this.V = null, this.S = null, this.startAt, this.endAt;
    }
  };
  function de(t2, e, n, s, i, r, o, c) {
    return new fe(t2, e, n, s, i, r, o, c);
  }
  function we(t2) {
    return new fe(t2);
  }
  function _e(t2) {
    return !At(t2.limit) && t2.limitType === "F";
  }
  function me(t2) {
    return !At(t2.limit) && t2.limitType === "L";
  }
  function ge(t2) {
    return t2.explicitOrderBy.length > 0 ? t2.explicitOrderBy[0].field : null;
  }
  function ye(t2) {
    for (const e of t2.filters)
      if (e.v())
        return e.field;
    return null;
  }
  function pe(t2) {
    return t2.collectionGroup !== null;
  }
  function Te(t2) {
    const e = q2(t2);
    if (e.V === null) {
      e.V = [];
      const t3 = ye(e), n = ge(e);
      if (t3 !== null && n === null)
        t3.isKeyField() || e.V.push(new ae(t3)), e.V.push(new ae(ft.keyField(), "asc"));
      else {
        let t4 = false;
        for (const n2 of e.explicitOrderBy)
          e.V.push(n2), n2.field.isKeyField() && (t4 = true);
        if (!t4) {
          const t5 = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
          e.V.push(new ae(ft.keyField(), t5));
        }
      }
    }
    return e.V;
  }
  function Ee(t2) {
    const e = q2(t2);
    if (!e.S)
      if (e.limitType === "F")
        e.S = Qt(e.path, e.collectionGroup, Te(e), e.filters, e.limit, e.startAt, e.endAt);
      else {
        const t3 = [];
        for (const n2 of Te(e)) {
          const e2 = n2.dir === "desc" ? "asc" : "desc";
          t3.push(new ae(n2.field, e2));
        }
        const n = e.endAt ? new oe(e.endAt.position, !e.endAt.before) : null, s = e.startAt ? new oe(e.startAt.position, !e.startAt.before) : null;
        e.S = Qt(e.path, e.collectionGroup, t3, e.filters, e.limit, n, s);
      }
    return e.S;
  }
  function Ie(t2, e, n) {
    return new fe(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), e, n, t2.startAt, t2.endAt);
  }
  function Ae(t2, e) {
    return zt(Ee(t2), Ee(e)) && t2.limitType === e.limitType;
  }
  function Re(t2) {
    return `${Wt(Ee(t2))}|lt:${t2.limitType}`;
  }
  function be(t2) {
    return `Query(target=${Gt(Ee(t2))}; limitType=${t2.limitType})`;
  }
  function Pe(t2, e) {
    return e.isFoundDocument() && function(t3, e2) {
      const n = e2.key.path;
      return t3.collectionGroup !== null ? e2.key.hasCollectionId(t3.collectionGroup) && t3.path.isPrefixOf(n) : Pt.isDocumentKey(t3.path) ? t3.path.isEqual(n) : t3.path.isImmediateParentOf(n);
    }(t2, e) && function(t3, e2) {
      for (const n of t3.explicitOrderBy)
        if (!n.field.isKeyField() && e2.data.field(n.field) === null)
          return false;
      return true;
    }(t2, e) && function(t3, e2) {
      for (const n of t3.filters)
        if (!n.matches(e2))
          return false;
      return true;
    }(t2, e) && function(t3, e2) {
      if (t3.startAt && !he(t3.startAt, Te(t3), e2))
        return false;
      if (t3.endAt && he(t3.endAt, Te(t3), e2))
        return false;
      return true;
    }(t2, e);
  }
  function ve(t2) {
    return (e, n) => {
      let s = false;
      for (const i of Te(t2)) {
        const t3 = Ve(i, e, n);
        if (t3 !== 0)
          return t3;
        s = s || i.field.isKeyField();
      }
      return 0;
    };
  }
  function Ve(t2, e, n) {
    const s = t2.field.isKeyField() ? Pt.comparator(e.key, n.key) : function(t3, e2, n2) {
      const s2 = e2.data.field(t3), i = n2.data.field(t3);
      return s2 !== null && i !== null ? Dt(s2, i) : L2();
    }(t2.field, e, n);
    switch (t2.dir) {
      case "asc":
        return s;
      case "desc":
        return -1 * s;
      default:
        return L2();
    }
  }
  function Se(t2, e) {
    if (t2.D) {
      if (isNaN(e))
        return {
          doubleValue: "NaN"
        };
      if (e === 1 / 0)
        return {
          doubleValue: "Infinity"
        };
      if (e === -1 / 0)
        return {
          doubleValue: "-Infinity"
        };
    }
    return {
      doubleValue: Rt(e) ? "-0" : e
    };
  }
  function De(t2) {
    return {
      integerValue: "" + t2
    };
  }
  var Ne = class {
    constructor() {
      this._ = void 0;
    }
  };
  function xe(t2, e, n) {
    return t2 instanceof Oe ? function(t3, e2) {
      const n2 = {
        fields: {
          __type__: {
            stringValue: "server_timestamp"
          },
          __local_write_time__: {
            timestampValue: {
              seconds: t3.seconds,
              nanos: t3.nanoseconds
            }
          }
        }
      };
      return e2 && (n2.fields.__previous_value__ = e2), {
        mapValue: n2
      };
    }(n, e) : t2 instanceof Fe ? Me(t2, e) : t2 instanceof Le ? Be(t2, e) : function(t3, e2) {
      const n2 = $e(t3, e2), s = qe(n2) + qe(t3.C);
      return $t(n2) && $t(t3.C) ? De(s) : Se(t3.N, s);
    }(t2, e);
  }
  function ke(t2, e, n) {
    return t2 instanceof Fe ? Me(t2, e) : t2 instanceof Le ? Be(t2, e) : n;
  }
  function $e(t2, e) {
    return t2 instanceof Ue ? $t(n = e) || function(t3) {
      return !!t3 && "doubleValue" in t3;
    }(n) ? e : {
      integerValue: 0
    } : null;
    var n;
  }
  var Oe = class extends Ne {
  };
  var Fe = class extends Ne {
    constructor(t2) {
      super(), this.elements = t2;
    }
  };
  function Me(t2, e) {
    const n = Ke(e);
    for (const e2 of t2.elements)
      n.some((t3) => Vt(t3, e2)) || n.push(e2);
    return {
      arrayValue: {
        values: n
      }
    };
  }
  var Le = class extends Ne {
    constructor(t2) {
      super(), this.elements = t2;
    }
  };
  function Be(t2, e) {
    let n = Ke(e);
    for (const e2 of t2.elements)
      n = n.filter((t3) => !Vt(t3, e2));
    return {
      arrayValue: {
        values: n
      }
    };
  }
  var Ue = class extends Ne {
    constructor(t2, e) {
      super(), this.N = t2, this.C = e;
    }
  };
  function qe(t2) {
    return yt(t2.integerValue || t2.doubleValue);
  }
  function Ke(t2) {
    return Ot(t2) && t2.arrayValue.values ? t2.arrayValue.values.slice() : [];
  }
  function Qe(t2, e) {
    return t2.field.isEqual(e.field) && function(t3, e2) {
      return t3 instanceof Fe && e2 instanceof Fe || t3 instanceof Le && e2 instanceof Le ? nt(t3.elements, e2.elements, Vt) : t3 instanceof Ue && e2 instanceof Ue ? Vt(t3.C, e2.C) : t3 instanceof Oe && e2 instanceof Oe;
    }(t2.transform, e.transform);
  }
  function ze(t2, e) {
    return t2.updateTime !== void 0 ? e.isFoundDocument() && e.version.isEqual(t2.updateTime) : t2.exists === void 0 || t2.exists === e.isFoundDocument();
  }
  var He = class {
  };
  function Je(t2, e, n) {
    t2 instanceof en ? function(t3, e2, n2) {
      const s = t3.value.clone(), i = rn(t3.fieldTransforms, e2, n2.transformResults);
      s.setAll(i), e2.convertToFoundDocument(n2.version, s).setHasCommittedMutations();
    }(t2, e, n) : t2 instanceof nn ? function(t3, e2, n2) {
      if (!ze(t3.precondition, e2))
        return void e2.convertToUnknownDocument(n2.version);
      const s = rn(t3.fieldTransforms, e2, n2.transformResults), i = e2.data;
      i.setAll(sn(t3)), i.setAll(s), e2.convertToFoundDocument(n2.version, i).setHasCommittedMutations();
    }(t2, e, n) : function(t3, e2, n2) {
      e2.convertToNoDocument(n2.version).setHasCommittedMutations();
    }(0, e, n);
  }
  function Ye(t2, e, n) {
    t2 instanceof en ? function(t3, e2, n2) {
      if (!ze(t3.precondition, e2))
        return;
      const s = t3.value.clone(), i = on(t3.fieldTransforms, n2, e2);
      s.setAll(i), e2.convertToFoundDocument(tn(e2), s).setHasLocalMutations();
    }(t2, e, n) : t2 instanceof nn ? function(t3, e2, n2) {
      if (!ze(t3.precondition, e2))
        return;
      const s = on(t3.fieldTransforms, n2, e2), i = e2.data;
      i.setAll(sn(t3)), i.setAll(s), e2.convertToFoundDocument(tn(e2), i).setHasLocalMutations();
    }(t2, e, n) : function(t3, e2) {
      ze(t3.precondition, e2) && e2.convertToNoDocument(rt.min());
    }(t2, e);
  }
  function Ze(t2, e) {
    return t2.type === e.type && (!!t2.key.isEqual(e.key) && (!!t2.precondition.isEqual(e.precondition) && (!!function(t3, e2) {
      return t3 === void 0 && e2 === void 0 || !(!t3 || !e2) && nt(t3, e2, (t4, e3) => Qe(t4, e3));
    }(t2.fieldTransforms, e.fieldTransforms) && (t2.type === 0 ? t2.value.isEqual(e.value) : t2.type !== 1 || t2.data.isEqual(e.data) && t2.fieldMask.isEqual(e.fieldMask)))));
  }
  function tn(t2) {
    return t2.isFoundDocument() ? t2.version : rt.min();
  }
  var en = class extends He {
    constructor(t2, e, n, s = []) {
      super(), this.key = t2, this.value = e, this.precondition = n, this.fieldTransforms = s, this.type = 0;
    }
  };
  var nn = class extends He {
    constructor(t2, e, n, s, i = []) {
      super(), this.key = t2, this.data = e, this.fieldMask = n, this.precondition = s, this.fieldTransforms = i, this.type = 1;
    }
  };
  function sn(t2) {
    const e = new Map();
    return t2.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const s = t2.data.field(n);
        e.set(n, s);
      }
    }), e;
  }
  function rn(t2, e, n) {
    const s = new Map();
    B2(t2.length === n.length);
    for (let i = 0; i < n.length; i++) {
      const r = t2[i], o = r.transform, c = e.data.field(r.field);
      s.set(r.field, ke(o, c, n[i]));
    }
    return s;
  }
  function on(t2, e, n) {
    const s = new Map();
    for (const i of t2) {
      const t3 = i.transform, r = n.data.field(i.field);
      s.set(i.field, xe(t3, r, e));
    }
    return s;
  }
  var un = class {
    constructor(t2) {
      this.count = t2;
    }
  };
  var hn;
  var ln;
  function dn(t2) {
    if (t2 === void 0)
      return O2("GRPC error has no .code"), K2.UNKNOWN;
    switch (t2) {
      case hn.OK:
        return K2.OK;
      case hn.CANCELLED:
        return K2.CANCELLED;
      case hn.UNKNOWN:
        return K2.UNKNOWN;
      case hn.DEADLINE_EXCEEDED:
        return K2.DEADLINE_EXCEEDED;
      case hn.RESOURCE_EXHAUSTED:
        return K2.RESOURCE_EXHAUSTED;
      case hn.INTERNAL:
        return K2.INTERNAL;
      case hn.UNAVAILABLE:
        return K2.UNAVAILABLE;
      case hn.UNAUTHENTICATED:
        return K2.UNAUTHENTICATED;
      case hn.INVALID_ARGUMENT:
        return K2.INVALID_ARGUMENT;
      case hn.NOT_FOUND:
        return K2.NOT_FOUND;
      case hn.ALREADY_EXISTS:
        return K2.ALREADY_EXISTS;
      case hn.PERMISSION_DENIED:
        return K2.PERMISSION_DENIED;
      case hn.FAILED_PRECONDITION:
        return K2.FAILED_PRECONDITION;
      case hn.ABORTED:
        return K2.ABORTED;
      case hn.OUT_OF_RANGE:
        return K2.OUT_OF_RANGE;
      case hn.UNIMPLEMENTED:
        return K2.UNIMPLEMENTED;
      case hn.DATA_LOSS:
        return K2.DATA_LOSS;
      default:
        return L2();
    }
  }
  (ln = hn || (hn = {}))[ln.OK = 0] = "OK", ln[ln.CANCELLED = 1] = "CANCELLED", ln[ln.UNKNOWN = 2] = "UNKNOWN", ln[ln.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", ln[ln.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ln[ln.NOT_FOUND = 5] = "NOT_FOUND", ln[ln.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ln[ln.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", ln[ln.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ln[ln.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", ln[ln.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ln[ln.ABORTED = 10] = "ABORTED", ln[ln.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ln[ln.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", ln[ln.INTERNAL = 13] = "INTERNAL", ln[ln.UNAVAILABLE = 14] = "UNAVAILABLE", ln[ln.DATA_LOSS = 15] = "DATA_LOSS";
  var wn = class {
    constructor(t2, e) {
      this.comparator = t2, this.root = e || mn.EMPTY;
    }
    insert(t2, e) {
      return new wn(this.comparator, this.root.insert(t2, e, this.comparator).copy(null, null, mn.BLACK, null, null));
    }
    remove(t2) {
      return new wn(this.comparator, this.root.remove(t2, this.comparator).copy(null, null, mn.BLACK, null, null));
    }
    get(t2) {
      let e = this.root;
      for (; !e.isEmpty(); ) {
        const n = this.comparator(t2, e.key);
        if (n === 0)
          return e.value;
        n < 0 ? e = e.left : n > 0 && (e = e.right);
      }
      return null;
    }
    indexOf(t2) {
      let e = 0, n = this.root;
      for (; !n.isEmpty(); ) {
        const s = this.comparator(t2, n.key);
        if (s === 0)
          return e + n.left.size;
        s < 0 ? n = n.left : (e += n.left.size + 1, n = n.right);
      }
      return -1;
    }
    isEmpty() {
      return this.root.isEmpty();
    }
    get size() {
      return this.root.size;
    }
    minKey() {
      return this.root.minKey();
    }
    maxKey() {
      return this.root.maxKey();
    }
    inorderTraversal(t2) {
      return this.root.inorderTraversal(t2);
    }
    forEach(t2) {
      this.inorderTraversal((e, n) => (t2(e, n), false));
    }
    toString() {
      const t2 = [];
      return this.inorderTraversal((e, n) => (t2.push(`${e}:${n}`), false)), `{${t2.join(", ")}}`;
    }
    reverseTraversal(t2) {
      return this.root.reverseTraversal(t2);
    }
    getIterator() {
      return new _n(this.root, null, this.comparator, false);
    }
    getIteratorFrom(t2) {
      return new _n(this.root, t2, this.comparator, false);
    }
    getReverseIterator() {
      return new _n(this.root, null, this.comparator, true);
    }
    getReverseIteratorFrom(t2) {
      return new _n(this.root, t2, this.comparator, true);
    }
  };
  var _n = class {
    constructor(t2, e, n, s) {
      this.isReverse = s, this.nodeStack = [];
      let i = 1;
      for (; !t2.isEmpty(); )
        if (i = e ? n(t2.key, e) : 1, s && (i *= -1), i < 0)
          t2 = this.isReverse ? t2.left : t2.right;
        else {
          if (i === 0) {
            this.nodeStack.push(t2);
            break;
          }
          this.nodeStack.push(t2), t2 = this.isReverse ? t2.right : t2.left;
        }
    }
    getNext() {
      let t2 = this.nodeStack.pop();
      const e = {
        key: t2.key,
        value: t2.value
      };
      if (this.isReverse)
        for (t2 = t2.left; !t2.isEmpty(); )
          this.nodeStack.push(t2), t2 = t2.right;
      else
        for (t2 = t2.right; !t2.isEmpty(); )
          this.nodeStack.push(t2), t2 = t2.left;
      return e;
    }
    hasNext() {
      return this.nodeStack.length > 0;
    }
    peek() {
      if (this.nodeStack.length === 0)
        return null;
      const t2 = this.nodeStack[this.nodeStack.length - 1];
      return {
        key: t2.key,
        value: t2.value
      };
    }
  };
  var mn = class {
    constructor(t2, e, n, s, i) {
      this.key = t2, this.value = e, this.color = n != null ? n : mn.RED, this.left = s != null ? s : mn.EMPTY, this.right = i != null ? i : mn.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    copy(t2, e, n, s, i) {
      return new mn(t2 != null ? t2 : this.key, e != null ? e : this.value, n != null ? n : this.color, s != null ? s : this.left, i != null ? i : this.right);
    }
    isEmpty() {
      return false;
    }
    inorderTraversal(t2) {
      return this.left.inorderTraversal(t2) || t2(this.key, this.value) || this.right.inorderTraversal(t2);
    }
    reverseTraversal(t2) {
      return this.right.reverseTraversal(t2) || t2(this.key, this.value) || this.left.reverseTraversal(t2);
    }
    min() {
      return this.left.isEmpty() ? this : this.left.min();
    }
    minKey() {
      return this.min().key;
    }
    maxKey() {
      return this.right.isEmpty() ? this.key : this.right.maxKey();
    }
    insert(t2, e, n) {
      let s = this;
      const i = n(t2, s.key);
      return s = i < 0 ? s.copy(null, null, null, s.left.insert(t2, e, n), null) : i === 0 ? s.copy(null, e, null, null, null) : s.copy(null, null, null, null, s.right.insert(t2, e, n)), s.fixUp();
    }
    removeMin() {
      if (this.left.isEmpty())
        return mn.EMPTY;
      let t2 = this;
      return t2.left.isRed() || t2.left.left.isRed() || (t2 = t2.moveRedLeft()), t2 = t2.copy(null, null, null, t2.left.removeMin(), null), t2.fixUp();
    }
    remove(t2, e) {
      let n, s = this;
      if (e(t2, s.key) < 0)
        s.left.isEmpty() || s.left.isRed() || s.left.left.isRed() || (s = s.moveRedLeft()), s = s.copy(null, null, null, s.left.remove(t2, e), null);
      else {
        if (s.left.isRed() && (s = s.rotateRight()), s.right.isEmpty() || s.right.isRed() || s.right.left.isRed() || (s = s.moveRedRight()), e(t2, s.key) === 0) {
          if (s.right.isEmpty())
            return mn.EMPTY;
          n = s.right.min(), s = s.copy(n.key, n.value, null, null, s.right.removeMin());
        }
        s = s.copy(null, null, null, null, s.right.remove(t2, e));
      }
      return s.fixUp();
    }
    isRed() {
      return this.color;
    }
    fixUp() {
      let t2 = this;
      return t2.right.isRed() && !t2.left.isRed() && (t2 = t2.rotateLeft()), t2.left.isRed() && t2.left.left.isRed() && (t2 = t2.rotateRight()), t2.left.isRed() && t2.right.isRed() && (t2 = t2.colorFlip()), t2;
    }
    moveRedLeft() {
      let t2 = this.colorFlip();
      return t2.right.left.isRed() && (t2 = t2.copy(null, null, null, null, t2.right.rotateRight()), t2 = t2.rotateLeft(), t2 = t2.colorFlip()), t2;
    }
    moveRedRight() {
      let t2 = this.colorFlip();
      return t2.left.left.isRed() && (t2 = t2.rotateRight(), t2 = t2.colorFlip()), t2;
    }
    rotateLeft() {
      const t2 = this.copy(null, null, mn.RED, null, this.right.left);
      return this.right.copy(null, null, this.color, t2, null);
    }
    rotateRight() {
      const t2 = this.copy(null, null, mn.RED, this.left.right, null);
      return this.left.copy(null, null, this.color, null, t2);
    }
    colorFlip() {
      const t2 = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
      return this.copy(null, null, !this.color, t2, e);
    }
    checkMaxDepth() {
      const t2 = this.check();
      return Math.pow(2, t2) <= this.size + 1;
    }
    check() {
      if (this.isRed() && this.left.isRed())
        throw L2();
      if (this.right.isRed())
        throw L2();
      const t2 = this.left.check();
      if (t2 !== this.right.check())
        throw L2();
      return t2 + (this.isRed() ? 0 : 1);
    }
  };
  mn.EMPTY = null, mn.RED = true, mn.BLACK = false;
  mn.EMPTY = new class {
    constructor() {
      this.size = 0;
    }
    get key() {
      throw L2();
    }
    get value() {
      throw L2();
    }
    get color() {
      throw L2();
    }
    get left() {
      throw L2();
    }
    get right() {
      throw L2();
    }
    copy(t2, e, n, s, i) {
      return this;
    }
    insert(t2, e, n) {
      return new mn(t2, e);
    }
    remove(t2, e) {
      return this;
    }
    isEmpty() {
      return true;
    }
    inorderTraversal(t2) {
      return false;
    }
    reverseTraversal(t2) {
      return false;
    }
    minKey() {
      return null;
    }
    maxKey() {
      return null;
    }
    isRed() {
      return false;
    }
    checkMaxDepth() {
      return true;
    }
    check() {
      return 0;
    }
  }();
  var gn = class {
    constructor(t2) {
      this.comparator = t2, this.data = new wn(this.comparator);
    }
    has(t2) {
      return this.data.get(t2) !== null;
    }
    first() {
      return this.data.minKey();
    }
    last() {
      return this.data.maxKey();
    }
    get size() {
      return this.data.size;
    }
    indexOf(t2) {
      return this.data.indexOf(t2);
    }
    forEach(t2) {
      this.data.inorderTraversal((e, n) => (t2(e), false));
    }
    forEachInRange(t2, e) {
      const n = this.data.getIteratorFrom(t2[0]);
      for (; n.hasNext(); ) {
        const s = n.getNext();
        if (this.comparator(s.key, t2[1]) >= 0)
          return;
        e(s.key);
      }
    }
    forEachWhile(t2, e) {
      let n;
      for (n = e !== void 0 ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) {
        if (!t2(n.getNext().key))
          return;
      }
    }
    firstAfterOrEqual(t2) {
      const e = this.data.getIteratorFrom(t2);
      return e.hasNext() ? e.getNext().key : null;
    }
    getIterator() {
      return new yn(this.data.getIterator());
    }
    getIteratorFrom(t2) {
      return new yn(this.data.getIteratorFrom(t2));
    }
    add(t2) {
      return this.copy(this.data.remove(t2).insert(t2, true));
    }
    delete(t2) {
      return this.has(t2) ? this.copy(this.data.remove(t2)) : this;
    }
    isEmpty() {
      return this.data.isEmpty();
    }
    unionWith(t2) {
      let e = this;
      return e.size < t2.size && (e = t2, t2 = this), t2.forEach((t3) => {
        e = e.add(t3);
      }), e;
    }
    isEqual(t2) {
      if (!(t2 instanceof gn))
        return false;
      if (this.size !== t2.size)
        return false;
      const e = this.data.getIterator(), n = t2.data.getIterator();
      for (; e.hasNext(); ) {
        const t3 = e.getNext().key, s = n.getNext().key;
        if (this.comparator(t3, s) !== 0)
          return false;
      }
      return true;
    }
    toArray() {
      const t2 = [];
      return this.forEach((e) => {
        t2.push(e);
      }), t2;
    }
    toString() {
      const t2 = [];
      return this.forEach((e) => t2.push(e)), "SortedSet(" + t2.toString() + ")";
    }
    copy(t2) {
      const e = new gn(this.comparator);
      return e.data = t2, e;
    }
  };
  var yn = class {
    constructor(t2) {
      this.iter = t2;
    }
    getNext() {
      return this.iter.getNext().key;
    }
    hasNext() {
      return this.iter.hasNext();
    }
  };
  var pn = new wn(Pt.comparator);
  function Tn() {
    return pn;
  }
  var En = new wn(Pt.comparator);
  function In() {
    return En;
  }
  var An = new wn(Pt.comparator);
  var bn = new gn(Pt.comparator);
  function Pn(...t2) {
    let e = bn;
    for (const n of t2)
      e = e.add(n);
    return e;
  }
  var vn = new gn(et);
  function Vn() {
    return vn;
  }
  var Sn = class {
    constructor(t2, e, n, s, i) {
      this.snapshotVersion = t2, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = s, this.resolvedLimboDocuments = i;
    }
    static createSynthesizedRemoteEventForCurrentChange(t2, e) {
      const n = new Map();
      return n.set(t2, Dn.createSynthesizedTargetChangeForCurrentChange(t2, e)), new Sn(rt.min(), n, Vn(), Tn(), Pn());
    }
  };
  var Dn = class {
    constructor(t2, e, n, s, i) {
      this.resumeToken = t2, this.current = e, this.addedDocuments = n, this.modifiedDocuments = s, this.removedDocuments = i;
    }
    static createSynthesizedTargetChangeForCurrentChange(t2, e) {
      return new Dn(_t.EMPTY_BYTE_STRING, e, Pn(), Pn(), Pn());
    }
  };
  var Cn = class {
    constructor(t2, e, n, s) {
      this.k = t2, this.removedTargetIds = e, this.key = n, this.$ = s;
    }
  };
  var Nn = class {
    constructor(t2, e) {
      this.targetId = t2, this.O = e;
    }
  };
  var xn = class {
    constructor(t2, e, n = _t.EMPTY_BYTE_STRING, s = null) {
      this.state = t2, this.targetIds = e, this.resumeToken = n, this.cause = s;
    }
  };
  var kn = class {
    constructor() {
      this.F = 0, this.M = Fn(), this.L = _t.EMPTY_BYTE_STRING, this.B = false, this.U = true;
    }
    get current() {
      return this.B;
    }
    get resumeToken() {
      return this.L;
    }
    get q() {
      return this.F !== 0;
    }
    get K() {
      return this.U;
    }
    j(t2) {
      t2.approximateByteSize() > 0 && (this.U = true, this.L = t2);
    }
    W() {
      let t2 = Pn(), e = Pn(), n = Pn();
      return this.M.forEach((s, i) => {
        switch (i) {
          case 0:
            t2 = t2.add(s);
            break;
          case 2:
            e = e.add(s);
            break;
          case 1:
            n = n.add(s);
            break;
          default:
            L2();
        }
      }), new Dn(this.L, this.B, t2, e, n);
    }
    G() {
      this.U = false, this.M = Fn();
    }
    H(t2, e) {
      this.U = true, this.M = this.M.insert(t2, e);
    }
    J(t2) {
      this.U = true, this.M = this.M.remove(t2);
    }
    Y() {
      this.F += 1;
    }
    X() {
      this.F -= 1;
    }
    Z() {
      this.U = true, this.B = true;
    }
  };
  var $n = class {
    constructor(t2) {
      this.tt = t2, this.et = new Map(), this.nt = Tn(), this.st = On(), this.it = new gn(et);
    }
    rt(t2) {
      for (const e of t2.k)
        t2.$ && t2.$.isFoundDocument() ? this.ot(e, t2.$) : this.ct(e, t2.key, t2.$);
      for (const e of t2.removedTargetIds)
        this.ct(e, t2.key, t2.$);
    }
    at(t2) {
      this.forEachTarget(t2, (e) => {
        const n = this.ut(e);
        switch (t2.state) {
          case 0:
            this.ht(e) && n.j(t2.resumeToken);
            break;
          case 1:
            n.X(), n.q || n.G(), n.j(t2.resumeToken);
            break;
          case 2:
            n.X(), n.q || this.removeTarget(e);
            break;
          case 3:
            this.ht(e) && (n.Z(), n.j(t2.resumeToken));
            break;
          case 4:
            this.ht(e) && (this.lt(e), n.j(t2.resumeToken));
            break;
          default:
            L2();
        }
      });
    }
    forEachTarget(t2, e) {
      t2.targetIds.length > 0 ? t2.targetIds.forEach(e) : this.et.forEach((t3, n) => {
        this.ht(n) && e(n);
      });
    }
    ft(t2) {
      const e = t2.targetId, n = t2.O.count, s = this.dt(e);
      if (s) {
        const t3 = s.target;
        if (Ht(t3))
          if (n === 0) {
            const n2 = new Pt(t3.path);
            this.ct(e, n2, Kt.newNoDocument(n2, rt.min()));
          } else
            B2(n === 1);
        else {
          this.wt(e) !== n && (this.lt(e), this.it = this.it.add(e));
        }
      }
    }
    _t(t2) {
      const e = new Map();
      this.et.forEach((n2, s2) => {
        const i = this.dt(s2);
        if (i) {
          if (n2.current && Ht(i.target)) {
            const e2 = new Pt(i.target.path);
            this.nt.get(e2) !== null || this.gt(s2, e2) || this.ct(s2, e2, Kt.newNoDocument(e2, t2));
          }
          n2.K && (e.set(s2, n2.W()), n2.G());
        }
      });
      let n = Pn();
      this.st.forEach((t3, e2) => {
        let s2 = true;
        e2.forEachWhile((t4) => {
          const e3 = this.dt(t4);
          return !e3 || e3.purpose === 2 || (s2 = false, false);
        }), s2 && (n = n.add(t3));
      });
      const s = new Sn(t2, e, this.it, this.nt, n);
      return this.nt = Tn(), this.st = On(), this.it = new gn(et), s;
    }
    ot(t2, e) {
      if (!this.ht(t2))
        return;
      const n = this.gt(t2, e.key) ? 2 : 0;
      this.ut(t2).H(e.key, n), this.nt = this.nt.insert(e.key, e), this.st = this.st.insert(e.key, this.yt(e.key).add(t2));
    }
    ct(t2, e, n) {
      if (!this.ht(t2))
        return;
      const s = this.ut(t2);
      this.gt(t2, e) ? s.H(e, 1) : s.J(e), this.st = this.st.insert(e, this.yt(e).delete(t2)), n && (this.nt = this.nt.insert(e, n));
    }
    removeTarget(t2) {
      this.et.delete(t2);
    }
    wt(t2) {
      const e = this.ut(t2).W();
      return this.tt.getRemoteKeysForTarget(t2).size + e.addedDocuments.size - e.removedDocuments.size;
    }
    Y(t2) {
      this.ut(t2).Y();
    }
    ut(t2) {
      let e = this.et.get(t2);
      return e || (e = new kn(), this.et.set(t2, e)), e;
    }
    yt(t2) {
      let e = this.st.get(t2);
      return e || (e = new gn(et), this.st = this.st.insert(t2, e)), e;
    }
    ht(t2) {
      const e = this.dt(t2) !== null;
      return e || $("WatchChangeAggregator", "Detected inactive target", t2), e;
    }
    dt(t2) {
      const e = this.et.get(t2);
      return e && e.q ? null : this.tt.Tt(t2);
    }
    lt(t2) {
      this.et.set(t2, new kn());
      this.tt.getRemoteKeysForTarget(t2).forEach((e) => {
        this.ct(t2, e, null);
      });
    }
    gt(t2, e) {
      return this.tt.getRemoteKeysForTarget(t2).has(e);
    }
  };
  function On() {
    return new wn(Pt.comparator);
  }
  function Fn() {
    return new wn(Pt.comparator);
  }
  var Mn = (() => {
    const t2 = {
      asc: "ASCENDING",
      desc: "DESCENDING"
    };
    return t2;
  })();
  var Ln = (() => {
    const t2 = {
      "<": "LESS_THAN",
      "<=": "LESS_THAN_OR_EQUAL",
      ">": "GREATER_THAN",
      ">=": "GREATER_THAN_OR_EQUAL",
      "==": "EQUAL",
      "!=": "NOT_EQUAL",
      "array-contains": "ARRAY_CONTAINS",
      in: "IN",
      "not-in": "NOT_IN",
      "array-contains-any": "ARRAY_CONTAINS_ANY"
    };
    return t2;
  })();
  var Bn = class {
    constructor(t2, e) {
      this.databaseId = t2, this.D = e;
    }
  };
  function Un(t2, e) {
    if (t2.D) {
      return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
    }
    return {
      seconds: "" + e.seconds,
      nanos: e.nanoseconds
    };
  }
  function qn(t2, e) {
    return t2.D ? e.toBase64() : e.toUint8Array();
  }
  function jn(t2) {
    return B2(!!t2), rt.fromTimestamp(function(t3) {
      const e = gt(t3);
      return new it(e.seconds, e.nanos);
    }(t2));
  }
  function Qn(t2, e) {
    return function(t3) {
      return new ht(["projects", t3.projectId, "databases", t3.database]);
    }(t2).child("documents").child(e).canonicalString();
  }
  function Wn(t2) {
    const e = ht.fromString(t2);
    return B2(Ts(e)), e;
  }
  function zn(t2, e) {
    const n = Wn(e);
    if (n.get(1) !== t2.databaseId.projectId)
      throw new j(K2.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t2.databaseId.projectId);
    if (n.get(3) !== t2.databaseId.database)
      throw new j(K2.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t2.databaseId.database);
    return new Pt(Xn(n));
  }
  function Hn(t2, e) {
    return Qn(t2.databaseId, e);
  }
  function Jn(t2) {
    const e = Wn(t2);
    return e.length === 4 ? ht.emptyPath() : Xn(e);
  }
  function Yn(t2) {
    return new ht(["projects", t2.databaseId.projectId, "databases", t2.databaseId.database]).canonicalString();
  }
  function Xn(t2) {
    return B2(t2.length > 4 && t2.get(4) === "documents"), t2.popFirst(5);
  }
  function ns(t2, e) {
    let n;
    if ("targetChange" in e) {
      e.targetChange;
      const s = function(t3) {
        return t3 === "NO_CHANGE" ? 0 : t3 === "ADD" ? 1 : t3 === "REMOVE" ? 2 : t3 === "CURRENT" ? 3 : t3 === "RESET" ? 4 : L2();
      }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], r = function(t3, e2) {
        return t3.D ? (B2(e2 === void 0 || typeof e2 == "string"), _t.fromBase64String(e2 || "")) : (B2(e2 === void 0 || e2 instanceof Uint8Array), _t.fromUint8Array(e2 || new Uint8Array()));
      }(t2, e.targetChange.resumeToken), o = e.targetChange.cause, c = o && function(t3) {
        const e2 = t3.code === void 0 ? K2.UNKNOWN : dn(t3.code);
        return new j(e2, t3.message || "");
      }(o);
      n = new xn(s, i, r, c || null);
    } else if ("documentChange" in e) {
      e.documentChange;
      const s = e.documentChange;
      s.document, s.document.name, s.document.updateTime;
      const i = zn(t2, s.document.name), r = jn(s.document.updateTime), o = new Ut({
        mapValue: {
          fields: s.document.fields
        }
      }), c = Kt.newFoundDocument(i, r, o), a = s.targetIds || [], u = s.removedTargetIds || [];
      n = new Cn(a, u, c.key, c);
    } else if ("documentDelete" in e) {
      e.documentDelete;
      const s = e.documentDelete;
      s.document;
      const i = zn(t2, s.document), r = s.readTime ? jn(s.readTime) : rt.min(), o = Kt.newNoDocument(i, r), c = s.removedTargetIds || [];
      n = new Cn([], c, o.key, o);
    } else if ("documentRemove" in e) {
      e.documentRemove;
      const s = e.documentRemove;
      s.document;
      const i = zn(t2, s.document), r = s.removedTargetIds || [];
      n = new Cn([], r, i, null);
    } else {
      if (!("filter" in e))
        return L2();
      {
        e.filter;
        const t3 = e.filter;
        t3.targetId;
        const s = t3.count || 0, i = new un(s), r = t3.targetId;
        n = new Nn(r, i);
      }
    }
    return n;
  }
  function os(t2, e) {
    return {
      documents: [Hn(t2, e.path)]
    };
  }
  function cs(t2, e) {
    const n = {
      structuredQuery: {}
    }, s = e.path;
    e.collectionGroup !== null ? (n.parent = Hn(t2, s), n.structuredQuery.from = [{
      collectionId: e.collectionGroup,
      allDescendants: true
    }]) : (n.parent = Hn(t2, s.popLast()), n.structuredQuery.from = [{
      collectionId: s.lastSegment()
    }]);
    const i = function(t3) {
      if (t3.length === 0)
        return;
      const e2 = t3.map((t4) => function(t5) {
        if (t5.op === "==") {
          if (Mt(t5.value))
            return {
              unaryFilter: {
                field: _s(t5.field),
                op: "IS_NAN"
              }
            };
          if (Ft(t5.value))
            return {
              unaryFilter: {
                field: _s(t5.field),
                op: "IS_NULL"
              }
            };
        } else if (t5.op === "!=") {
          if (Mt(t5.value))
            return {
              unaryFilter: {
                field: _s(t5.field),
                op: "IS_NOT_NAN"
              }
            };
          if (Ft(t5.value))
            return {
              unaryFilter: {
                field: _s(t5.field),
                op: "IS_NOT_NULL"
              }
            };
        }
        return {
          fieldFilter: {
            field: _s(t5.field),
            op: ws(t5.op),
            value: t5.value
          }
        };
      }(t4));
      if (e2.length === 1)
        return e2[0];
      return {
        compositeFilter: {
          op: "AND",
          filters: e2
        }
      };
    }(e.filters);
    i && (n.structuredQuery.where = i);
    const r = function(t3) {
      if (t3.length === 0)
        return;
      return t3.map((t4) => function(t5) {
        return {
          field: _s(t5.field),
          direction: ds(t5.dir)
        };
      }(t4));
    }(e.orderBy);
    r && (n.structuredQuery.orderBy = r);
    const o = function(t3, e2) {
      return t3.D || At(e2) ? e2 : {
        value: e2
      };
    }(t2, e.limit);
    return o !== null && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = ls(e.startAt)), e.endAt && (n.structuredQuery.endAt = ls(e.endAt)), n;
  }
  function as(t2) {
    let e = Jn(t2.parent);
    const n = t2.structuredQuery, s = n.from ? n.from.length : 0;
    let i = null;
    if (s > 0) {
      B2(s === 1);
      const t3 = n.from[0];
      t3.allDescendants ? i = t3.collectionId : e = e.child(t3.collectionId);
    }
    let r = [];
    n.where && (r = hs(n.where));
    let o = [];
    n.orderBy && (o = n.orderBy.map((t3) => function(t4) {
      return new ae(ms(t4.field), function(t5) {
        switch (t5) {
          case "ASCENDING":
            return "asc";
          case "DESCENDING":
            return "desc";
          default:
            return;
        }
      }(t4.direction));
    }(t3)));
    let c = null;
    n.limit && (c = function(t3) {
      let e2;
      return e2 = typeof t3 == "object" ? t3.value : t3, At(e2) ? null : e2;
    }(n.limit));
    let a = null;
    n.startAt && (a = fs(n.startAt));
    let u = null;
    return n.endAt && (u = fs(n.endAt)), de(e, i, o, r, c, "F", a, u);
  }
  function us(t2, e) {
    const n = function(t3, e2) {
      switch (e2) {
        case 0:
          return null;
        case 1:
          return "existence-filter-mismatch";
        case 2:
          return "limbo-document";
        default:
          return L2();
      }
    }(0, e.purpose);
    return n == null ? null : {
      "goog-listen-tags": n
    };
  }
  function hs(t2) {
    return t2 ? t2.unaryFilter !== void 0 ? [ys(t2)] : t2.fieldFilter !== void 0 ? [gs(t2)] : t2.compositeFilter !== void 0 ? t2.compositeFilter.filters.map((t3) => hs(t3)).reduce((t3, e) => t3.concat(e)) : L2() : [];
  }
  function ls(t2) {
    return {
      before: t2.before,
      values: t2.position
    };
  }
  function fs(t2) {
    const e = !!t2.before, n = t2.values || [];
    return new oe(n, e);
  }
  function ds(t2) {
    return Mn[t2];
  }
  function ws(t2) {
    return Ln[t2];
  }
  function _s(t2) {
    return {
      fieldPath: t2.canonicalString()
    };
  }
  function ms(t2) {
    return ft.fromServerFormat(t2.fieldPath);
  }
  function gs(t2) {
    return Jt.create(ms(t2.fieldFilter.field), function(t3) {
      switch (t3) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return L2();
      }
    }(t2.fieldFilter.op), t2.fieldFilter.value);
  }
  function ys(t2) {
    switch (t2.unaryFilter.op) {
      case "IS_NAN":
        const e = ms(t2.unaryFilter.field);
        return Jt.create(e, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const n = ms(t2.unaryFilter.field);
        return Jt.create(n, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const s = ms(t2.unaryFilter.field);
        return Jt.create(s, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const i = ms(t2.unaryFilter.field);
        return Jt.create(i, "!=", {
          nullValue: "NULL_VALUE"
        });
      default:
        return L2();
    }
  }
  function Ts(t2) {
    return t2.length >= 4 && t2.get(0) === "projects" && t2.get(2) === "databases";
  }
  function Es(t2) {
    let e = "";
    for (let n = 0; n < t2.length; n++)
      e.length > 0 && (e = As(e)), e = Is(t2.get(n), e);
    return As(e);
  }
  function Is(t2, e) {
    let n = e;
    const s = t2.length;
    for (let e2 = 0; e2 < s; e2++) {
      const s2 = t2.charAt(e2);
      switch (s2) {
        case "\0":
          n += "";
          break;
        case "":
          n += "";
          break;
        default:
          n += s2;
      }
    }
    return n;
  }
  function As(t2) {
    return t2 + "";
  }
  var Ps = class {
    constructor(t2, e, n) {
      this.ownerId = t2, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
    }
  };
  Ps.store = "owner", Ps.key = "owner";
  var vs = class {
    constructor(t2, e, n) {
      this.userId = t2, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
    }
  };
  vs.store = "mutationQueues", vs.keyPath = "userId";
  var Vs = class {
    constructor(t2, e, n, s, i) {
      this.userId = t2, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = s, this.mutations = i;
    }
  };
  Vs.store = "mutations", Vs.keyPath = "batchId", Vs.userMutationsIndex = "userMutationsIndex", Vs.userMutationsKeyPath = ["userId", "batchId"];
  var Ss = class {
    constructor() {
    }
    static prefixForUser(t2) {
      return [t2];
    }
    static prefixForPath(t2, e) {
      return [t2, Es(e)];
    }
    static key(t2, e, n) {
      return [t2, Es(e), n];
    }
  };
  Ss.store = "documentMutations", Ss.PLACEHOLDER = new Ss();
  var Ns = class {
    constructor(t2, e, n, s, i, r) {
      this.unknownDocument = t2, this.noDocument = e, this.document = n, this.hasCommittedMutations = s, this.readTime = i, this.parentPath = r;
    }
  };
  Ns.store = "remoteDocuments", Ns.readTimeIndex = "readTimeIndex", Ns.readTimeIndexPath = "readTime", Ns.collectionReadTimeIndex = "collectionReadTimeIndex", Ns.collectionReadTimeIndexPath = ["parentPath", "readTime"];
  var xs = class {
    constructor(t2) {
      this.byteSize = t2;
    }
  };
  xs.store = "remoteDocumentGlobal", xs.key = "remoteDocumentGlobalKey";
  var ks = class {
    constructor(t2, e, n, s, i, r, o) {
      this.targetId = t2, this.canonicalId = e, this.readTime = n, this.resumeToken = s, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = r, this.query = o;
    }
  };
  ks.store = "targets", ks.keyPath = "targetId", ks.queryTargetsIndexName = "queryTargetsIndex", ks.queryTargetsKeyPath = ["canonicalId", "targetId"];
  var $s = class {
    constructor(t2, e, n) {
      this.targetId = t2, this.path = e, this.sequenceNumber = n;
    }
  };
  $s.store = "targetDocuments", $s.keyPath = ["targetId", "path"], $s.documentTargetsIndex = "documentTargetsIndex", $s.documentTargetsKeyPath = ["path", "targetId"];
  var Os = class {
    constructor(t2, e, n, s) {
      this.highestTargetId = t2, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = s;
    }
  };
  Os.key = "targetGlobalKey", Os.store = "targetGlobal";
  var Fs = class {
    constructor(t2, e) {
      this.collectionId = t2, this.parent = e;
    }
  };
  Fs.store = "collectionParents", Fs.keyPath = ["collectionId", "parent"];
  var Ms = class {
    constructor(t2, e, n, s) {
      this.clientId = t2, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = s;
    }
  };
  Ms.store = "clientMetadata", Ms.keyPath = "clientId";
  var Ls = class {
    constructor(t2, e, n) {
      this.bundleId = t2, this.createTime = e, this.version = n;
    }
  };
  Ls.store = "bundles", Ls.keyPath = "bundleId";
  var Bs = class {
    constructor(t2, e, n) {
      this.name = t2, this.readTime = e, this.bundledQuery = n;
    }
  };
  Bs.store = "namedQueries", Bs.keyPath = "name";
  var Us = [...[...[...[...[vs.store, Vs.store, Ss.store, Ns.store, ks.store, Ps.store, Os.store, $s.store], Ms.store], xs.store], Fs.store], Ls.store, Bs.store];
  var qs = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
  var Ks = class {
    constructor() {
      this.onCommittedListeners = [];
    }
    addOnCommittedListener(t2) {
      this.onCommittedListeners.push(t2);
    }
    raiseOnCommittedEvent() {
      this.onCommittedListeners.forEach((t2) => t2());
    }
  };
  var js = class {
    constructor(t2) {
      this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = false, this.callbackAttached = false, t2((t3) => {
        this.isDone = true, this.result = t3, this.nextCallback && this.nextCallback(t3);
      }, (t3) => {
        this.isDone = true, this.error = t3, this.catchCallback && this.catchCallback(t3);
      });
    }
    catch(t2) {
      return this.next(void 0, t2);
    }
    next(t2, e) {
      return this.callbackAttached && L2(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t2, this.result) : new js((n, s) => {
        this.nextCallback = (e2) => {
          this.wrapSuccess(t2, e2).next(n, s);
        }, this.catchCallback = (t3) => {
          this.wrapFailure(e, t3).next(n, s);
        };
      });
    }
    toPromise() {
      return new Promise((t2, e) => {
        this.next(t2, e);
      });
    }
    wrapUserFunction(t2) {
      try {
        const e = t2();
        return e instanceof js ? e : js.resolve(e);
      } catch (t3) {
        return js.reject(t3);
      }
    }
    wrapSuccess(t2, e) {
      return t2 ? this.wrapUserFunction(() => t2(e)) : js.resolve(e);
    }
    wrapFailure(t2, e) {
      return t2 ? this.wrapUserFunction(() => t2(e)) : js.reject(e);
    }
    static resolve(t2) {
      return new js((e, n) => {
        e(t2);
      });
    }
    static reject(t2) {
      return new js((e, n) => {
        n(t2);
      });
    }
    static waitFor(t2) {
      return new js((e, n) => {
        let s = 0, i = 0, r = false;
        t2.forEach((t3) => {
          ++s, t3.next(() => {
            ++i, r && i === s && e();
          }, (t4) => n(t4));
        }), r = true, i === s && e();
      });
    }
    static or(t2) {
      let e = js.resolve(false);
      for (const n of t2)
        e = e.next((t3) => t3 ? js.resolve(t3) : n());
      return e;
    }
    static forEach(t2, e) {
      const n = [];
      return t2.forEach((t3, s) => {
        n.push(e.call(this, t3, s));
      }), this.waitFor(n);
    }
  };
  function Hs(t2) {
    return t2.name === "IndexedDbTransactionError";
  }
  var ni = class {
    constructor(t2, e, n, s) {
      this.batchId = t2, this.localWriteTime = e, this.baseMutations = n, this.mutations = s;
    }
    applyToRemoteDocument(t2, e) {
      const n = e.mutationResults;
      for (let e2 = 0; e2 < this.mutations.length; e2++) {
        const s = this.mutations[e2];
        if (s.key.isEqual(t2.key)) {
          Je(s, t2, n[e2]);
        }
      }
    }
    applyToLocalView(t2) {
      for (const e of this.baseMutations)
        e.key.isEqual(t2.key) && Ye(e, t2, this.localWriteTime);
      for (const e of this.mutations)
        e.key.isEqual(t2.key) && Ye(e, t2, this.localWriteTime);
    }
    applyToLocalDocumentSet(t2) {
      this.mutations.forEach((e) => {
        const n = t2.get(e.key), s = n;
        this.applyToLocalView(s), n.isValidDocument() || s.convertToNoDocument(rt.min());
      });
    }
    keys() {
      return this.mutations.reduce((t2, e) => t2.add(e.key), Pn());
    }
    isEqual(t2) {
      return this.batchId === t2.batchId && nt(this.mutations, t2.mutations, (t3, e) => Ze(t3, e)) && nt(this.baseMutations, t2.baseMutations, (t3, e) => Ze(t3, e));
    }
  };
  var ii = class {
    constructor(t2, e, n, s, i = rt.min(), r = rt.min(), o = _t.EMPTY_BYTE_STRING) {
      this.target = t2, this.targetId = e, this.purpose = n, this.sequenceNumber = s, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = r, this.resumeToken = o;
    }
    withSequenceNumber(t2) {
      return new ii(this.target, this.targetId, this.purpose, t2, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }
    withResumeToken(t2, e) {
      return new ii(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t2);
    }
    withLastLimboFreeSnapshotVersion(t2) {
      return new ii(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t2, this.resumeToken);
    }
  };
  var ri = class {
    constructor(t2) {
      this.Wt = t2;
    }
  };
  function _i(t2) {
    const e = as({
      parent: t2.parent,
      structuredQuery: t2.structuredQuery
    });
    return t2.limitType === "LAST" ? Ie(e, e.limit, "L") : e;
  }
  var pi = class {
    constructor() {
      this.Gt = new Ti();
    }
    addToCollectionParentIndex(t2, e) {
      return this.Gt.add(e), js.resolve();
    }
    getCollectionParents(t2, e) {
      return js.resolve(this.Gt.getEntries(e));
    }
  };
  var Ti = class {
    constructor() {
      this.index = {};
    }
    add(t2) {
      const e = t2.lastSegment(), n = t2.popLast(), s = this.index[e] || new gn(ht.comparator), i = !s.has(n);
      return this.index[e] = s.add(n), i;
    }
    has(t2) {
      const e = t2.lastSegment(), n = t2.popLast(), s = this.index[e];
      return s && s.has(n);
    }
    getEntries(t2) {
      return (this.index[t2] || new gn(ht.comparator)).toArray();
    }
  };
  var Ri = class {
    constructor(t2, e, n) {
      this.cacheSizeCollectionThreshold = t2, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n;
    }
    static withCacheSize(t2) {
      return new Ri(t2, Ri.DEFAULT_COLLECTION_PERCENTILE, Ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
    }
  };
  Ri.DEFAULT_COLLECTION_PERCENTILE = 10, Ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, Ri.DEFAULT = new Ri(41943040, Ri.DEFAULT_COLLECTION_PERCENTILE, Ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), Ri.DISABLED = new Ri(-1, 0, 0);
  var Ni = class {
    constructor(t2) {
      this.ne = t2;
    }
    next() {
      return this.ne += 2, this.ne;
    }
    static se() {
      return new Ni(0);
    }
    static ie() {
      return new Ni(-1);
    }
  };
  async function Fi(t2) {
    if (t2.code !== K2.FAILED_PRECONDITION || t2.message !== qs)
      throw t2;
    $("LocalStore", "Unexpectedly lost primary lease");
  }
  var ji = class {
    constructor(t2, e) {
      this.mapKeyFn = t2, this.equalsFn = e, this.inner = {};
    }
    get(t2) {
      const e = this.mapKeyFn(t2), n = this.inner[e];
      if (n !== void 0) {
        for (const [e2, s] of n)
          if (this.equalsFn(e2, t2))
            return s;
      }
    }
    has(t2) {
      return this.get(t2) !== void 0;
    }
    set(t2, e) {
      const n = this.mapKeyFn(t2), s = this.inner[n];
      if (s !== void 0) {
        for (let n2 = 0; n2 < s.length; n2++)
          if (this.equalsFn(s[n2][0], t2))
            return void (s[n2] = [t2, e]);
        s.push([t2, e]);
      } else
        this.inner[n] = [[t2, e]];
    }
    delete(t2) {
      const e = this.mapKeyFn(t2), n = this.inner[e];
      if (n === void 0)
        return false;
      for (let s = 0; s < n.length; s++)
        if (this.equalsFn(n[s][0], t2))
          return n.length === 1 ? delete this.inner[e] : n.splice(s, 1), true;
      return false;
    }
    forEach(t2) {
      ct(this.inner, (e, n) => {
        for (const [e2, s] of n)
          t2(e2, s);
      });
    }
    isEmpty() {
      return at(this.inner);
    }
  };
  var Qi = class {
    constructor() {
      this.changes = new ji((t2) => t2.toString(), (t2, e) => t2.isEqual(e)), this.changesApplied = false;
    }
    getReadTime(t2) {
      const e = this.changes.get(t2);
      return e ? e.readTime : rt.min();
    }
    addEntry(t2, e) {
      this.assertNotApplied(), this.changes.set(t2.key, {
        document: t2,
        readTime: e
      });
    }
    removeEntry(t2, e = null) {
      this.assertNotApplied(), this.changes.set(t2, {
        document: Kt.newInvalidDocument(t2),
        readTime: e
      });
    }
    getEntry(t2, e) {
      this.assertNotApplied();
      const n = this.changes.get(e);
      return n !== void 0 ? js.resolve(n.document) : this.getFromCache(t2, e);
    }
    getEntries(t2, e) {
      return this.getAllFromCache(t2, e);
    }
    apply(t2) {
      return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(t2);
    }
    assertNotApplied() {
    }
  };
  var rr = class {
    constructor(t2, e, n) {
      this.He = t2, this.In = e, this.Ht = n;
    }
    An(t2, e) {
      return this.In.getAllMutationBatchesAffectingDocumentKey(t2, e).next((n) => this.Rn(t2, e, n));
    }
    Rn(t2, e, n) {
      return this.He.getEntry(t2, e).next((t3) => {
        for (const e2 of n)
          e2.applyToLocalView(t3);
        return t3;
      });
    }
    bn(t2, e) {
      t2.forEach((t3, n) => {
        for (const t4 of e)
          t4.applyToLocalView(n);
      });
    }
    Pn(t2, e) {
      return this.He.getEntries(t2, e).next((e2) => this.vn(t2, e2).next(() => e2));
    }
    vn(t2, e) {
      return this.In.getAllMutationBatchesAffectingDocumentKeys(t2, e).next((t3) => this.bn(e, t3));
    }
    getDocumentsMatchingQuery(t2, e, n) {
      return function(t3) {
        return Pt.isDocumentKey(t3.path) && t3.collectionGroup === null && t3.filters.length === 0;
      }(e) ? this.Vn(t2, e.path) : pe(e) ? this.Sn(t2, e, n) : this.Dn(t2, e, n);
    }
    Vn(t2, e) {
      return this.An(t2, new Pt(e)).next((t3) => {
        let e2 = In();
        return t3.isFoundDocument() && (e2 = e2.insert(t3.key, t3)), e2;
      });
    }
    Sn(t2, e, n) {
      const s = e.collectionGroup;
      let i = In();
      return this.Ht.getCollectionParents(t2, s).next((r) => js.forEach(r, (r2) => {
        const o = function(t3, e2) {
          return new fe(e2, null, t3.explicitOrderBy.slice(), t3.filters.slice(), t3.limit, t3.limitType, t3.startAt, t3.endAt);
        }(e, r2.child(s));
        return this.Dn(t2, o, n).next((t3) => {
          t3.forEach((t4, e2) => {
            i = i.insert(t4, e2);
          });
        });
      }).next(() => i));
    }
    Dn(t2, e, n) {
      let s, i;
      return this.He.getDocumentsMatchingQuery(t2, e, n).next((n2) => (s = n2, this.In.getAllMutationBatchesAffectingQuery(t2, e))).next((e2) => (i = e2, this.Cn(t2, i, s).next((t3) => {
        s = t3;
        for (const t4 of i)
          for (const e3 of t4.mutations) {
            const n2 = e3.key;
            let i2 = s.get(n2);
            i2 == null && (i2 = Kt.newInvalidDocument(n2), s = s.insert(n2, i2)), Ye(e3, i2, t4.localWriteTime), i2.isFoundDocument() || (s = s.remove(n2));
          }
      }))).next(() => (s.forEach((t3, n2) => {
        Pe(e, n2) || (s = s.remove(t3));
      }), s));
    }
    Cn(t2, e, n) {
      let s = Pn();
      for (const t3 of e)
        for (const e2 of t3.mutations)
          e2 instanceof nn && n.get(e2.key) === null && (s = s.add(e2.key));
      let i = n;
      return this.He.getEntries(t2, s).next((t3) => (t3.forEach((t4, e2) => {
        e2.isFoundDocument() && (i = i.insert(t4, e2));
      }), i));
    }
  };
  var or = class {
    constructor(t2, e, n, s) {
      this.targetId = t2, this.fromCache = e, this.Nn = n, this.xn = s;
    }
    static kn(t2, e) {
      let n = Pn(), s = Pn();
      for (const t3 of e.docChanges)
        switch (t3.type) {
          case 0:
            n = n.add(t3.doc.key);
            break;
          case 1:
            s = s.add(t3.doc.key);
        }
      return new or(t2, e.fromCache, n, s);
    }
  };
  var cr = class {
    $n(t2) {
      this.On = t2;
    }
    getDocumentsMatchingQuery(t2, e, n, s) {
      return function(t3) {
        return t3.filters.length === 0 && t3.limit === null && t3.startAt == null && t3.endAt == null && (t3.explicitOrderBy.length === 0 || t3.explicitOrderBy.length === 1 && t3.explicitOrderBy[0].field.isKeyField());
      }(e) || n.isEqual(rt.min()) ? this.Fn(t2, e) : this.On.Pn(t2, s).next((i) => {
        const r = this.Mn(e, i);
        return (_e(e) || me(e)) && this.Ln(e.limitType, r, s, n) ? this.Fn(t2, e) : (x2() <= LogLevel.DEBUG && $("QueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), be(e)), this.On.getDocumentsMatchingQuery(t2, e, n).next((t3) => (r.forEach((e2) => {
          t3 = t3.insert(e2.key, e2);
        }), t3)));
      });
    }
    Mn(t2, e) {
      let n = new gn(ve(t2));
      return e.forEach((e2, s) => {
        Pe(t2, s) && (n = n.add(s));
      }), n;
    }
    Ln(t2, e, n, s) {
      if (n.size !== e.size)
        return true;
      const i = t2 === "F" ? e.last() : e.first();
      return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
    }
    Fn(t2, e) {
      return x2() <= LogLevel.DEBUG && $("QueryEngine", "Using full collection scan to execute query:", be(e)), this.On.getDocumentsMatchingQuery(t2, e, rt.min());
    }
  };
  var ar = class {
    constructor(t2, e, n, s) {
      this.persistence = t2, this.Bn = e, this.N = s, this.Un = new wn(et), this.qn = new ji((t3) => Wt(t3), zt), this.Kn = rt.min(), this.In = t2.getMutationQueue(n), this.jn = t2.getRemoteDocumentCache(), this.ze = t2.getTargetCache(), this.Qn = new rr(this.jn, this.In, this.persistence.getIndexManager()), this.Je = t2.getBundleCache(), this.Bn.$n(this.Qn);
    }
    collectGarbage(t2) {
      return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e) => t2.collect(e, this.Un));
    }
  };
  function ur(t2, e, n, s) {
    return new ar(t2, e, n, s);
  }
  async function hr(t2, e) {
    const n = q2(t2);
    let s = n.In, i = n.Qn;
    const r = await n.persistence.runTransaction("Handle user change", "readonly", (t3) => {
      let r2;
      return n.In.getAllMutationBatches(t3).next((o) => (r2 = o, s = n.persistence.getMutationQueue(e), i = new rr(n.jn, s, n.persistence.getIndexManager()), s.getAllMutationBatches(t3))).next((e2) => {
        const n2 = [], s2 = [];
        let o = Pn();
        for (const t4 of r2) {
          n2.push(t4.batchId);
          for (const e3 of t4.mutations)
            o = o.add(e3.key);
        }
        for (const t4 of e2) {
          s2.push(t4.batchId);
          for (const e3 of t4.mutations)
            o = o.add(e3.key);
        }
        return i.Pn(t3, o).next((t4) => ({
          Wn: t4,
          removedBatchIds: n2,
          addedBatchIds: s2
        }));
      });
    });
    return n.In = s, n.Qn = i, n.Bn.$n(n.Qn), r;
  }
  function fr(t2) {
    const e = q2(t2);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t3) => e.ze.getLastRemoteSnapshotVersion(t3));
  }
  function dr(t2, e) {
    const n = q2(t2), s = e.snapshotVersion;
    let i = n.Un;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (t3) => {
      const r = n.jn.newChangeBuffer({
        trackRemovals: true
      });
      i = n.Un;
      const o = [];
      e.targetChanges.forEach((e2, r2) => {
        const c2 = i.get(r2);
        if (!c2)
          return;
        o.push(n.ze.removeMatchingKeys(t3, e2.removedDocuments, r2).next(() => n.ze.addMatchingKeys(t3, e2.addedDocuments, r2)));
        const a = e2.resumeToken;
        if (a.approximateByteSize() > 0) {
          const u = c2.withResumeToken(a, s).withSequenceNumber(t3.currentSequenceNumber);
          i = i.insert(r2, u), function(t4, e3, n2) {
            if (B2(e3.resumeToken.approximateByteSize() > 0), t4.resumeToken.approximateByteSize() === 0)
              return true;
            if (e3.snapshotVersion.toMicroseconds() - t4.snapshotVersion.toMicroseconds() >= 3e8)
              return true;
            return n2.addedDocuments.size + n2.modifiedDocuments.size + n2.removedDocuments.size > 0;
          }(c2, u, e2) && o.push(n.ze.updateTargetData(t3, u));
        }
      });
      let c = Tn();
      if (e.documentUpdates.forEach((s2, i2) => {
        e.resolvedLimboDocuments.has(s2) && o.push(n.persistence.referenceDelegate.updateLimboDocument(t3, s2));
      }), o.push(wr(t3, r, e.documentUpdates, s, void 0).next((t4) => {
        c = t4;
      })), !s.isEqual(rt.min())) {
        const e2 = n.ze.getLastRemoteSnapshotVersion(t3).next((e3) => n.ze.setTargetsMetadata(t3, t3.currentSequenceNumber, s));
        o.push(e2);
      }
      return js.waitFor(o).next(() => r.apply(t3)).next(() => n.Qn.vn(t3, c)).next(() => c);
    }).then((t3) => (n.Un = i, t3));
  }
  function wr(t2, e, n, s, i) {
    let r = Pn();
    return n.forEach((t3) => r = r.add(t3)), e.getEntries(t2, r).next((t3) => {
      let r2 = Tn();
      return n.forEach((n2, o) => {
        const c = t3.get(n2), a = (i == null ? void 0 : i.get(n2)) || s;
        o.isNoDocument() && o.version.isEqual(rt.min()) ? (e.removeEntry(n2, a), r2 = r2.insert(n2, o)) : !c.isValidDocument() || o.version.compareTo(c.version) > 0 || o.version.compareTo(c.version) === 0 && c.hasPendingWrites ? (e.addEntry(o, a), r2 = r2.insert(n2, o)) : $("LocalStore", "Ignoring outdated watch update for ", n2, ". Current version:", c.version, " Watch version:", o.version);
      }), r2;
    });
  }
  function mr(t2, e) {
    const n = q2(t2);
    return n.persistence.runTransaction("Allocate target", "readwrite", (t3) => {
      let s;
      return n.ze.getTargetData(t3, e).next((i) => i ? (s = i, js.resolve(s)) : n.ze.allocateTargetId(t3).next((i2) => (s = new ii(e, i2, 0, t3.currentSequenceNumber), n.ze.addTargetData(t3, s).next(() => s))));
    }).then((t3) => {
      const s = n.Un.get(t3.targetId);
      return (s === null || t3.snapshotVersion.compareTo(s.snapshotVersion) > 0) && (n.Un = n.Un.insert(t3.targetId, t3), n.qn.set(e, t3.targetId)), t3;
    });
  }
  async function gr(t2, e, n) {
    const s = q2(t2), i = s.Un.get(e), r = n ? "readwrite" : "readwrite-primary";
    try {
      n || await s.persistence.runTransaction("Release target", r, (t3) => s.persistence.referenceDelegate.removeTarget(t3, i));
    } catch (t3) {
      if (!Hs(t3))
        throw t3;
      $("LocalStore", `Failed to update sequence numbers for target ${e}: ${t3}`);
    }
    s.Un = s.Un.remove(e), s.qn.delete(i.target);
  }
  function yr(t2, e, n) {
    const s = q2(t2);
    let i = rt.min(), r = Pn();
    return s.persistence.runTransaction("Execute query", "readonly", (t3) => function(t4, e2, n2) {
      const s2 = q2(t4), i2 = s2.qn.get(n2);
      return i2 !== void 0 ? js.resolve(s2.Un.get(i2)) : s2.ze.getTargetData(e2, n2);
    }(s, t3, Ee(e)).next((e2) => {
      if (e2)
        return i = e2.lastLimboFreeSnapshotVersion, s.ze.getMatchingKeysForTargetId(t3, e2.targetId).next((t4) => {
          r = t4;
        });
    }).next(() => s.Bn.getDocumentsMatchingQuery(t3, e, n ? i : rt.min(), n ? r : Pn())).next((t4) => ({
      documents: t4,
      Gn: r
    })));
  }
  var Rr = class {
    constructor(t2) {
      this.N = t2, this.Yn = new Map(), this.Xn = new Map();
    }
    getBundleMetadata(t2, e) {
      return js.resolve(this.Yn.get(e));
    }
    saveBundleMetadata(t2, e) {
      var n;
      return this.Yn.set(e.id, {
        id: (n = e).id,
        version: n.version,
        createTime: jn(n.createTime)
      }), js.resolve();
    }
    getNamedQuery(t2, e) {
      return js.resolve(this.Xn.get(e));
    }
    saveNamedQuery(t2, e) {
      return this.Xn.set(e.name, function(t3) {
        return {
          name: t3.name,
          query: _i(t3.bundledQuery),
          readTime: jn(t3.readTime)
        };
      }(e)), js.resolve();
    }
  };
  var br = class {
    constructor() {
      this.Zn = new gn(Pr.ts), this.es = new gn(Pr.ns);
    }
    isEmpty() {
      return this.Zn.isEmpty();
    }
    addReference(t2, e) {
      const n = new Pr(t2, e);
      this.Zn = this.Zn.add(n), this.es = this.es.add(n);
    }
    ss(t2, e) {
      t2.forEach((t3) => this.addReference(t3, e));
    }
    removeReference(t2, e) {
      this.rs(new Pr(t2, e));
    }
    os(t2, e) {
      t2.forEach((t3) => this.removeReference(t3, e));
    }
    cs(t2) {
      const e = new Pt(new ht([])), n = new Pr(e, t2), s = new Pr(e, t2 + 1), i = [];
      return this.es.forEachInRange([n, s], (t3) => {
        this.rs(t3), i.push(t3.key);
      }), i;
    }
    us() {
      this.Zn.forEach((t2) => this.rs(t2));
    }
    rs(t2) {
      this.Zn = this.Zn.delete(t2), this.es = this.es.delete(t2);
    }
    hs(t2) {
      const e = new Pt(new ht([])), n = new Pr(e, t2), s = new Pr(e, t2 + 1);
      let i = Pn();
      return this.es.forEachInRange([n, s], (t3) => {
        i = i.add(t3.key);
      }), i;
    }
    containsKey(t2) {
      const e = new Pr(t2, 0), n = this.Zn.firstAfterOrEqual(e);
      return n !== null && t2.isEqual(n.key);
    }
  };
  var Pr = class {
    constructor(t2, e) {
      this.key = t2, this.ls = e;
    }
    static ts(t2, e) {
      return Pt.comparator(t2.key, e.key) || et(t2.ls, e.ls);
    }
    static ns(t2, e) {
      return et(t2.ls, e.ls) || Pt.comparator(t2.key, e.key);
    }
  };
  var vr = class {
    constructor(t2, e) {
      this.Ht = t2, this.referenceDelegate = e, this.In = [], this.fs = 1, this.ds = new gn(Pr.ts);
    }
    checkEmpty(t2) {
      return js.resolve(this.In.length === 0);
    }
    addMutationBatch(t2, e, n, s) {
      const i = this.fs;
      this.fs++, this.In.length > 0 && this.In[this.In.length - 1];
      const r = new ni(i, e, n, s);
      this.In.push(r);
      for (const e2 of s)
        this.ds = this.ds.add(new Pr(e2.key, i)), this.Ht.addToCollectionParentIndex(t2, e2.key.path.popLast());
      return js.resolve(r);
    }
    lookupMutationBatch(t2, e) {
      return js.resolve(this.ws(e));
    }
    getNextMutationBatchAfterBatchId(t2, e) {
      const n = e + 1, s = this._s(n), i = s < 0 ? 0 : s;
      return js.resolve(this.In.length > i ? this.In[i] : null);
    }
    getHighestUnacknowledgedBatchId() {
      return js.resolve(this.In.length === 0 ? -1 : this.fs - 1);
    }
    getAllMutationBatches(t2) {
      return js.resolve(this.In.slice());
    }
    getAllMutationBatchesAffectingDocumentKey(t2, e) {
      const n = new Pr(e, 0), s = new Pr(e, Number.POSITIVE_INFINITY), i = [];
      return this.ds.forEachInRange([n, s], (t3) => {
        const e2 = this.ws(t3.ls);
        i.push(e2);
      }), js.resolve(i);
    }
    getAllMutationBatchesAffectingDocumentKeys(t2, e) {
      let n = new gn(et);
      return e.forEach((t3) => {
        const e2 = new Pr(t3, 0), s = new Pr(t3, Number.POSITIVE_INFINITY);
        this.ds.forEachInRange([e2, s], (t4) => {
          n = n.add(t4.ls);
        });
      }), js.resolve(this.gs(n));
    }
    getAllMutationBatchesAffectingQuery(t2, e) {
      const n = e.path, s = n.length + 1;
      let i = n;
      Pt.isDocumentKey(i) || (i = i.child(""));
      const r = new Pr(new Pt(i), 0);
      let o = new gn(et);
      return this.ds.forEachWhile((t3) => {
        const e2 = t3.key.path;
        return !!n.isPrefixOf(e2) && (e2.length === s && (o = o.add(t3.ls)), true);
      }, r), js.resolve(this.gs(o));
    }
    gs(t2) {
      const e = [];
      return t2.forEach((t3) => {
        const n = this.ws(t3);
        n !== null && e.push(n);
      }), e;
    }
    removeMutationBatch(t2, e) {
      B2(this.ys(e.batchId, "removed") === 0), this.In.shift();
      let n = this.ds;
      return js.forEach(e.mutations, (s) => {
        const i = new Pr(s.key, e.batchId);
        return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(t2, s.key);
      }).next(() => {
        this.ds = n;
      });
    }
    te(t2) {
    }
    containsKey(t2, e) {
      const n = new Pr(e, 0), s = this.ds.firstAfterOrEqual(n);
      return js.resolve(e.isEqual(s && s.key));
    }
    performConsistencyCheck(t2) {
      return this.In.length, js.resolve();
    }
    ys(t2, e) {
      return this._s(t2);
    }
    _s(t2) {
      if (this.In.length === 0)
        return 0;
      return t2 - this.In[0].batchId;
    }
    ws(t2) {
      const e = this._s(t2);
      if (e < 0 || e >= this.In.length)
        return null;
      return this.In[e];
    }
  };
  var Vr = class {
    constructor(t2, e) {
      this.Ht = t2, this.ps = e, this.docs = new wn(Pt.comparator), this.size = 0;
    }
    addEntry(t2, e, n) {
      const s = e.key, i = this.docs.get(s), r = i ? i.size : 0, o = this.ps(e);
      return this.docs = this.docs.insert(s, {
        document: e.clone(),
        size: o,
        readTime: n
      }), this.size += o - r, this.Ht.addToCollectionParentIndex(t2, s.path.popLast());
    }
    removeEntry(t2) {
      const e = this.docs.get(t2);
      e && (this.docs = this.docs.remove(t2), this.size -= e.size);
    }
    getEntry(t2, e) {
      const n = this.docs.get(e);
      return js.resolve(n ? n.document.clone() : Kt.newInvalidDocument(e));
    }
    getEntries(t2, e) {
      let n = Tn();
      return e.forEach((t3) => {
        const e2 = this.docs.get(t3);
        n = n.insert(t3, e2 ? e2.document.clone() : Kt.newInvalidDocument(t3));
      }), js.resolve(n);
    }
    getDocumentsMatchingQuery(t2, e, n) {
      let s = Tn();
      const i = new Pt(e.path.child("")), r = this.docs.getIteratorFrom(i);
      for (; r.hasNext(); ) {
        const { key: t3, value: { document: i2, readTime: o } } = r.getNext();
        if (!e.path.isPrefixOf(t3.path))
          break;
        o.compareTo(n) <= 0 || Pe(e, i2) && (s = s.insert(i2.key, i2.clone()));
      }
      return js.resolve(s);
    }
    Ts(t2, e) {
      return js.forEach(this.docs, (t3) => e(t3));
    }
    newChangeBuffer(t2) {
      return new Sr(this);
    }
    getSize(t2) {
      return js.resolve(this.size);
    }
  };
  var Sr = class extends Qi {
    constructor(t2) {
      super(), this.Se = t2;
    }
    applyChanges(t2) {
      const e = [];
      return this.changes.forEach((n, s) => {
        s.document.isValidDocument() ? e.push(this.Se.addEntry(t2, s.document, this.getReadTime(n))) : this.Se.removeEntry(n);
      }), js.waitFor(e);
    }
    getFromCache(t2, e) {
      return this.Se.getEntry(t2, e);
    }
    getAllFromCache(t2, e) {
      return this.Se.getEntries(t2, e);
    }
  };
  var Dr = class {
    constructor(t2) {
      this.persistence = t2, this.Es = new ji((t3) => Wt(t3), zt), this.lastRemoteSnapshotVersion = rt.min(), this.highestTargetId = 0, this.Is = 0, this.As = new br(), this.targetCount = 0, this.Rs = Ni.se();
    }
    forEachTarget(t2, e) {
      return this.Es.forEach((t3, n) => e(n)), js.resolve();
    }
    getLastRemoteSnapshotVersion(t2) {
      return js.resolve(this.lastRemoteSnapshotVersion);
    }
    getHighestSequenceNumber(t2) {
      return js.resolve(this.Is);
    }
    allocateTargetId(t2) {
      return this.highestTargetId = this.Rs.next(), js.resolve(this.highestTargetId);
    }
    setTargetsMetadata(t2, e, n) {
      return n && (this.lastRemoteSnapshotVersion = n), e > this.Is && (this.Is = e), js.resolve();
    }
    ce(t2) {
      this.Es.set(t2.target, t2);
      const e = t2.targetId;
      e > this.highestTargetId && (this.Rs = new Ni(e), this.highestTargetId = e), t2.sequenceNumber > this.Is && (this.Is = t2.sequenceNumber);
    }
    addTargetData(t2, e) {
      return this.ce(e), this.targetCount += 1, js.resolve();
    }
    updateTargetData(t2, e) {
      return this.ce(e), js.resolve();
    }
    removeTargetData(t2, e) {
      return this.Es.delete(e.target), this.As.cs(e.targetId), this.targetCount -= 1, js.resolve();
    }
    removeTargets(t2, e, n) {
      let s = 0;
      const i = [];
      return this.Es.forEach((r, o) => {
        o.sequenceNumber <= e && n.get(o.targetId) === null && (this.Es.delete(r), i.push(this.removeMatchingKeysForTargetId(t2, o.targetId)), s++);
      }), js.waitFor(i).next(() => s);
    }
    getTargetCount(t2) {
      return js.resolve(this.targetCount);
    }
    getTargetData(t2, e) {
      const n = this.Es.get(e) || null;
      return js.resolve(n);
    }
    addMatchingKeys(t2, e, n) {
      return this.As.ss(e, n), js.resolve();
    }
    removeMatchingKeys(t2, e, n) {
      this.As.os(e, n);
      const s = this.persistence.referenceDelegate, i = [];
      return s && e.forEach((e2) => {
        i.push(s.markPotentiallyOrphaned(t2, e2));
      }), js.waitFor(i);
    }
    removeMatchingKeysForTargetId(t2, e) {
      return this.As.cs(e), js.resolve();
    }
    getMatchingKeysForTargetId(t2, e) {
      const n = this.As.hs(e);
      return js.resolve(n);
    }
    containsKey(t2, e) {
      return js.resolve(this.As.containsKey(e));
    }
  };
  var Cr = class {
    constructor(t2, e) {
      this.bs = {}, this.Le = new X2(0), this.Be = false, this.Be = true, this.referenceDelegate = t2(this), this.ze = new Dr(this);
      this.Ht = new pi(), this.He = function(t3, e2) {
        return new Vr(t3, e2);
      }(this.Ht, (t3) => this.referenceDelegate.Ps(t3)), this.N = new ri(e), this.Je = new Rr(this.N);
    }
    start() {
      return Promise.resolve();
    }
    shutdown() {
      return this.Be = false, Promise.resolve();
    }
    get started() {
      return this.Be;
    }
    setDatabaseDeletedListener() {
    }
    setNetworkEnabled() {
    }
    getIndexManager() {
      return this.Ht;
    }
    getMutationQueue(t2) {
      let e = this.bs[t2.toKey()];
      return e || (e = new vr(this.Ht, this.referenceDelegate), this.bs[t2.toKey()] = e), e;
    }
    getTargetCache() {
      return this.ze;
    }
    getRemoteDocumentCache() {
      return this.He;
    }
    getBundleCache() {
      return this.Je;
    }
    runTransaction(t2, e, n) {
      $("MemoryPersistence", "Starting transaction:", t2);
      const s = new Nr(this.Le.next());
      return this.referenceDelegate.vs(), n(s).next((t3) => this.referenceDelegate.Vs(s).next(() => t3)).toPromise().then((t3) => (s.raiseOnCommittedEvent(), t3));
    }
    Ss(t2, e) {
      return js.or(Object.values(this.bs).map((n) => () => n.containsKey(t2, e)));
    }
  };
  var Nr = class extends Ks {
    constructor(t2) {
      super(), this.currentSequenceNumber = t2;
    }
  };
  var xr = class {
    constructor(t2) {
      this.persistence = t2, this.Ds = new br(), this.Cs = null;
    }
    static Ns(t2) {
      return new xr(t2);
    }
    get xs() {
      if (this.Cs)
        return this.Cs;
      throw L2();
    }
    addReference(t2, e, n) {
      return this.Ds.addReference(n, e), this.xs.delete(n.toString()), js.resolve();
    }
    removeReference(t2, e, n) {
      return this.Ds.removeReference(n, e), this.xs.add(n.toString()), js.resolve();
    }
    markPotentiallyOrphaned(t2, e) {
      return this.xs.add(e.toString()), js.resolve();
    }
    removeTarget(t2, e) {
      this.Ds.cs(e.targetId).forEach((t3) => this.xs.add(t3.toString()));
      const n = this.persistence.getTargetCache();
      return n.getMatchingKeysForTargetId(t2, e.targetId).next((t3) => {
        t3.forEach((t4) => this.xs.add(t4.toString()));
      }).next(() => n.removeTargetData(t2, e));
    }
    vs() {
      this.Cs = new Set();
    }
    Vs(t2) {
      const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
      return js.forEach(this.xs, (n) => {
        const s = Pt.fromPath(n);
        return this.ks(t2, s).next((t3) => {
          t3 || e.removeEntry(s);
        });
      }).next(() => (this.Cs = null, e.apply(t2)));
    }
    updateLimboDocument(t2, e) {
      return this.ks(t2, e).next((t3) => {
        t3 ? this.xs.delete(e.toString()) : this.xs.add(e.toString());
      });
    }
    Ps(t2) {
      return 0;
    }
    ks(t2, e) {
      return js.or([() => js.resolve(this.Ds.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t2, e), () => this.persistence.Ss(t2, e)]);
    }
  };
  var Ur = class {
    constructor() {
      this.activeTargetIds = Vn();
    }
    Fs(t2) {
      this.activeTargetIds = this.activeTargetIds.add(t2);
    }
    Ms(t2) {
      this.activeTargetIds = this.activeTargetIds.delete(t2);
    }
    Os() {
      const t2 = {
        activeTargetIds: this.activeTargetIds.toArray(),
        updateTimeMs: Date.now()
      };
      return JSON.stringify(t2);
    }
  };
  var Kr = class {
    constructor() {
      this.yi = new Ur(), this.pi = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
    }
    addPendingMutation(t2) {
    }
    updateMutationState(t2, e, n) {
    }
    addLocalQueryTarget(t2) {
      return this.yi.Fs(t2), this.pi[t2] || "not-current";
    }
    updateQueryState(t2, e, n) {
      this.pi[t2] = e;
    }
    removeLocalQueryTarget(t2) {
      this.yi.Ms(t2);
    }
    isLocalQueryTarget(t2) {
      return this.yi.activeTargetIds.has(t2);
    }
    clearQueryState(t2) {
      delete this.pi[t2];
    }
    getAllActiveQueryTargets() {
      return this.yi.activeTargetIds;
    }
    isActiveQueryTarget(t2) {
      return this.yi.activeTargetIds.has(t2);
    }
    start() {
      return this.yi = new Ur(), Promise.resolve();
    }
    handleUserChange(t2, e, n) {
    }
    setOnlineState(t2) {
    }
    shutdown() {
    }
    writeSequenceNumber(t2) {
    }
    notifyBundleLoaded() {
    }
  };
  var jr = class {
    Ti(t2) {
    }
    shutdown() {
    }
  };
  var Qr = class {
    constructor() {
      this.Ei = () => this.Ii(), this.Ai = () => this.Ri(), this.bi = [], this.Pi();
    }
    Ti(t2) {
      this.bi.push(t2);
    }
    shutdown() {
      window.removeEventListener("online", this.Ei), window.removeEventListener("offline", this.Ai);
    }
    Pi() {
      window.addEventListener("online", this.Ei), window.addEventListener("offline", this.Ai);
    }
    Ii() {
      $("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
      for (const t2 of this.bi)
        t2(0);
    }
    Ri() {
      $("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
      for (const t2 of this.bi)
        t2(1);
    }
    static bt() {
      return typeof window != "undefined" && window.addEventListener !== void 0 && window.removeEventListener !== void 0;
    }
  };
  var Wr = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
  };
  var Gr = class {
    constructor(t2) {
      this.vi = t2.vi, this.Vi = t2.Vi;
    }
    Si(t2) {
      this.Di = t2;
    }
    Ci(t2) {
      this.Ni = t2;
    }
    onMessage(t2) {
      this.xi = t2;
    }
    close() {
      this.Vi();
    }
    send(t2) {
      this.vi(t2);
    }
    ki() {
      this.Di();
    }
    $i(t2) {
      this.Ni(t2);
    }
    Oi(t2) {
      this.xi(t2);
    }
  };
  var zr = class extends class {
    constructor(t2) {
      this.databaseInfo = t2, this.databaseId = t2.databaseId;
      const e = t2.ssl ? "https" : "http";
      this.Fi = e + "://" + t2.host, this.Mi = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
    }
    Li(t2, e, n, s) {
      const i = this.Bi(t2, e);
      $("RestConnection", "Sending: ", i, n);
      const r = {};
      return this.Ui(r, s), this.qi(t2, i, r, n).then((t3) => ($("RestConnection", "Received: ", t3), t3), (e2) => {
        throw F2("RestConnection", `${t2} failed with error: `, e2, "url: ", i, "request:", n), e2;
      });
    }
    Ki(t2, e, n, s) {
      return this.Li(t2, e, n, s);
    }
    Ui(t2, e) {
      if (t2["X-Goog-Api-Client"] = "gl-js/ fire/" + C2, t2["Content-Type"] = "text/plain", this.databaseInfo.appId && (t2["X-Firebase-GMPID"] = this.databaseInfo.appId), e)
        for (const n in e.authHeaders)
          e.authHeaders.hasOwnProperty(n) && (t2[n] = e.authHeaders[n]);
    }
    Bi(t2, e) {
      const n = Wr[t2];
      return `${this.Fi}/v1/${e}:${n}`;
    }
  } {
    constructor(t2) {
      super(t2), this.forceLongPolling = t2.forceLongPolling, this.autoDetectLongPolling = t2.autoDetectLongPolling, this.useFetchStreams = t2.useFetchStreams;
    }
    qi(t2, e, n, s) {
      return new Promise((i, r) => {
        const o = new XhrIo();
        o.listenOnce(EventType.COMPLETE, () => {
          try {
            switch (o.getLastErrorCode()) {
              case ErrorCode.NO_ERROR:
                const e2 = o.getResponseJson();
                $("Connection", "XHR received:", JSON.stringify(e2)), i(e2);
                break;
              case ErrorCode.TIMEOUT:
                $("Connection", 'RPC "' + t2 + '" timed out'), r(new j(K2.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case ErrorCode.HTTP_ERROR:
                const n2 = o.getStatus();
                if ($("Connection", 'RPC "' + t2 + '" failed with status:', n2, "response text:", o.getResponseText()), n2 > 0) {
                  const t3 = o.getResponseJson().error;
                  if (t3 && t3.status && t3.message) {
                    const e3 = function(t4) {
                      const e4 = t4.toLowerCase().replace(/_/g, "-");
                      return Object.values(K2).indexOf(e4) >= 0 ? e4 : K2.UNKNOWN;
                    }(t3.status);
                    r(new j(e3, t3.message));
                  } else
                    r(new j(K2.UNKNOWN, "Server responded with status " + o.getStatus()));
                } else
                  r(new j(K2.UNAVAILABLE, "Connection failed."));
                break;
              default:
                L2();
            }
          } finally {
            $("Connection", 'RPC "' + t2 + '" completed.');
          }
        });
        const c = JSON.stringify(s);
        o.send(e, "POST", c, n, 15);
      });
    }
    ji(t2, e) {
      const n = [this.Fi, "/", "google.firestore.v1.Firestore", "/", t2, "/channel"], s = createWebChannelTransport(), i = getStatEventTarget(), r = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
        },
        sendRawJson: true,
        supportsCrossDomainXhr: true,
        internalChannelParams: {
          forwardChannelRequestTimeoutMs: 6e5
        },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling
      };
      this.useFetchStreams && (r.xmlHttpFactory = new FetchXmlHttpFactory({})), this.Ui(r.initMessageHeaders, e), isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (r.httpHeadersOverwriteParam = "$httpHeaders");
      const o = n.join("");
      $("Connection", "Creating WebChannel: " + o, r);
      const c = s.createWebChannel(o, r);
      let a = false, u = false;
      const h = new Gr({
        vi: (t3) => {
          u ? $("Connection", "Not sending because WebChannel is closed:", t3) : (a || ($("Connection", "Opening WebChannel transport."), c.open(), a = true), $("Connection", "WebChannel sending:", t3), c.send(t3));
        },
        Vi: () => c.close()
      }), g = (t3, e2, n2) => {
        t3.listen(e2, (t4) => {
          try {
            n2(t4);
          } catch (t5) {
            setTimeout(() => {
              throw t5;
            }, 0);
          }
        });
      };
      return g(c, WebChannel.EventType.OPEN, () => {
        u || $("Connection", "WebChannel transport opened.");
      }), g(c, WebChannel.EventType.CLOSE, () => {
        u || (u = true, $("Connection", "WebChannel transport closed"), h.$i());
      }), g(c, WebChannel.EventType.ERROR, (t3) => {
        u || (u = true, F2("Connection", "WebChannel transport errored:", t3), h.$i(new j(K2.UNAVAILABLE, "The operation could not be completed")));
      }), g(c, WebChannel.EventType.MESSAGE, (t3) => {
        var e2;
        if (!u) {
          const n2 = t3.data[0];
          B2(!!n2);
          const s2 = n2, i2 = s2.error || ((e2 = s2[0]) === null || e2 === void 0 ? void 0 : e2.error);
          if (i2) {
            $("Connection", "WebChannel received error:", i2);
            const t4 = i2.status;
            let e3 = function(t5) {
              const e4 = hn[t5];
              if (e4 !== void 0)
                return dn(e4);
            }(t4), n3 = i2.message;
            e3 === void 0 && (e3 = K2.INTERNAL, n3 = "Unknown error status: " + t4 + " with message " + i2.message), u = true, h.$i(new j(e3, n3)), c.close();
          } else
            $("Connection", "WebChannel received:", n2), h.Oi(n2);
        }
      }), g(i, Event.STAT_EVENT, (t3) => {
        t3.stat === Stat.PROXY ? $("Connection", "Detected buffering proxy") : t3.stat === Stat.NOPROXY && $("Connection", "Detected no buffering proxy");
      }), setTimeout(() => {
        h.ki();
      }, 0), h;
    }
  };
  function Jr() {
    return typeof document != "undefined" ? document : null;
  }
  function Yr(t2) {
    return new Bn(t2, true);
  }
  var Xr = class {
    constructor(t2, e, n = 1e3, s = 1.5, i = 6e4) {
      this.Oe = t2, this.timerId = e, this.Qi = n, this.Wi = s, this.Gi = i, this.zi = 0, this.Hi = null, this.Ji = Date.now(), this.reset();
    }
    reset() {
      this.zi = 0;
    }
    Yi() {
      this.zi = this.Gi;
    }
    Xi(t2) {
      this.cancel();
      const e = Math.floor(this.zi + this.Zi()), n = Math.max(0, Date.now() - this.Ji), s = Math.max(0, e - n);
      s > 0 && $("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), this.Hi = this.Oe.enqueueAfterDelay(this.timerId, s, () => (this.Ji = Date.now(), t2())), this.zi *= this.Wi, this.zi < this.Qi && (this.zi = this.Qi), this.zi > this.Gi && (this.zi = this.Gi);
    }
    tr() {
      this.Hi !== null && (this.Hi.skipDelay(), this.Hi = null);
    }
    cancel() {
      this.Hi !== null && (this.Hi.cancel(), this.Hi = null);
    }
    Zi() {
      return (Math.random() - 0.5) * this.zi;
    }
  };
  var Zr = class {
    constructor(t2, e, n, s, i, r, o) {
      this.Oe = t2, this.er = n, this.nr = s, this.sr = i, this.credentialsProvider = r, this.listener = o, this.state = 0, this.ir = 0, this.rr = null, this.cr = null, this.stream = null, this.ar = new Xr(t2, e);
    }
    ur() {
      return this.state === 1 || this.state === 5 || this.hr();
    }
    hr() {
      return this.state === 2 || this.state === 3;
    }
    start() {
      this.state !== 4 ? this.auth() : this.lr();
    }
    async stop() {
      this.ur() && await this.close(0);
    }
    dr() {
      this.state = 0, this.ar.reset();
    }
    wr() {
      this.hr() && this.rr === null && (this.rr = this.Oe.enqueueAfterDelay(this.er, 6e4, () => this._r()));
    }
    mr(t2) {
      this.gr(), this.stream.send(t2);
    }
    async _r() {
      if (this.hr())
        return this.close(0);
    }
    gr() {
      this.rr && (this.rr.cancel(), this.rr = null);
    }
    yr() {
      this.cr && (this.cr.cancel(), this.cr = null);
    }
    async close(t2, e) {
      this.gr(), this.yr(), this.ar.cancel(), this.ir++, t2 !== 4 ? this.ar.reset() : e && e.code === K2.RESOURCE_EXHAUSTED ? (O2(e.toString()), O2("Using maximum backoff delay to prevent overloading the backend."), this.ar.Yi()) : e && e.code === K2.UNAUTHENTICATED && this.state !== 3 && this.credentialsProvider.invalidateToken(), this.stream !== null && (this.pr(), this.stream.close(), this.stream = null), this.state = t2, await this.listener.Ci(e);
    }
    pr() {
    }
    auth() {
      this.state = 1;
      const t2 = this.Tr(this.ir), e = this.ir;
      this.credentialsProvider.getToken().then((t3) => {
        this.ir === e && this.Er(t3);
      }, (e2) => {
        t2(() => {
          const t3 = new j(K2.UNKNOWN, "Fetching auth token failed: " + e2.message);
          return this.Ir(t3);
        });
      });
    }
    Er(t2) {
      const e = this.Tr(this.ir);
      this.stream = this.Ar(t2), this.stream.Si(() => {
        e(() => (this.state = 2, this.cr = this.Oe.enqueueAfterDelay(this.nr, 1e4, () => (this.hr() && (this.state = 3), Promise.resolve())), this.listener.Si()));
      }), this.stream.Ci((t3) => {
        e(() => this.Ir(t3));
      }), this.stream.onMessage((t3) => {
        e(() => this.onMessage(t3));
      });
    }
    lr() {
      this.state = 5, this.ar.Xi(async () => {
        this.state = 0, this.start();
      });
    }
    Ir(t2) {
      return $("PersistentStream", `close with error: ${t2}`), this.stream = null, this.close(4, t2);
    }
    Tr(t2) {
      return (e) => {
        this.Oe.enqueueAndForget(() => this.ir === t2 ? e() : ($("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
      };
    }
  };
  var to = class extends Zr {
    constructor(t2, e, n, s, i) {
      super(t2, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", e, n, i), this.N = s;
    }
    Ar(t2) {
      return this.sr.ji("Listen", t2);
    }
    onMessage(t2) {
      this.ar.reset();
      const e = ns(this.N, t2), n = function(t3) {
        if (!("targetChange" in t3))
          return rt.min();
        const e2 = t3.targetChange;
        return e2.targetIds && e2.targetIds.length ? rt.min() : e2.readTime ? jn(e2.readTime) : rt.min();
      }(t2);
      return this.listener.Rr(e, n);
    }
    br(t2) {
      const e = {};
      e.database = Yn(this.N), e.addTarget = function(t3, e2) {
        let n2;
        const s = e2.target;
        return n2 = Ht(s) ? {
          documents: os(t3, s)
        } : {
          query: cs(t3, s)
        }, n2.targetId = e2.targetId, e2.resumeToken.approximateByteSize() > 0 ? n2.resumeToken = qn(t3, e2.resumeToken) : e2.snapshotVersion.compareTo(rt.min()) > 0 && (n2.readTime = Un(t3, e2.snapshotVersion.toTimestamp())), n2;
      }(this.N, t2);
      const n = us(this.N, t2);
      n && (e.labels = n), this.mr(e);
    }
    Pr(t2) {
      const e = {};
      e.database = Yn(this.N), e.removeTarget = t2, this.mr(e);
    }
  };
  var no = class extends class {
  } {
    constructor(t2, e, n) {
      super(), this.credentials = t2, this.sr = e, this.N = n, this.kr = false;
    }
    $r() {
      if (this.kr)
        throw new j(K2.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    Li(t2, e, n) {
      return this.$r(), this.credentials.getToken().then((s) => this.sr.Li(t2, e, n, s)).catch((t3) => {
        throw t3.name === "FirebaseError" ? (t3.code === K2.UNAUTHENTICATED && this.credentials.invalidateToken(), t3) : new j(K2.UNKNOWN, t3.toString());
      });
    }
    Ki(t2, e, n) {
      return this.$r(), this.credentials.getToken().then((s) => this.sr.Ki(t2, e, n, s)).catch((t3) => {
        throw t3.name === "FirebaseError" ? (t3.code === K2.UNAUTHENTICATED && this.credentials.invalidateToken(), t3) : new j(K2.UNKNOWN, t3.toString());
      });
    }
    terminate() {
      this.kr = true;
    }
  };
  var so = class {
    constructor(t2, e) {
      this.asyncQueue = t2, this.onlineStateHandler = e, this.state = "Unknown", this.Or = 0, this.Fr = null, this.Mr = true;
    }
    Lr() {
      this.Or === 0 && (this.Br("Unknown"), this.Fr = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.Fr = null, this.Ur("Backend didn't respond within 10 seconds."), this.Br("Offline"), Promise.resolve())));
    }
    qr(t2) {
      this.state === "Online" ? this.Br("Unknown") : (this.Or++, this.Or >= 1 && (this.Kr(), this.Ur(`Connection failed 1 times. Most recent error: ${t2.toString()}`), this.Br("Offline")));
    }
    set(t2) {
      this.Kr(), this.Or = 0, t2 === "Online" && (this.Mr = false), this.Br(t2);
    }
    Br(t2) {
      t2 !== this.state && (this.state = t2, this.onlineStateHandler(t2));
    }
    Ur(t2) {
      const e = `Could not reach Cloud Firestore backend. ${t2}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
      this.Mr ? (O2(e), this.Mr = false) : $("OnlineStateTracker", e);
    }
    Kr() {
      this.Fr !== null && (this.Fr.cancel(), this.Fr = null);
    }
  };
  var io = class {
    constructor(t2, e, n, s, i) {
      this.localStore = t2, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, this.jr = [], this.Qr = new Map(), this.Wr = new Set(), this.Gr = [], this.zr = i, this.zr.Ti((t3) => {
        n.enqueueAndForget(async () => {
          wo(this) && ($("RemoteStore", "Restarting streams for network reachability change."), await async function(t4) {
            const e2 = q2(t4);
            e2.Wr.add(4), await oo(e2), e2.Hr.set("Unknown"), e2.Wr.delete(4), await ro(e2);
          }(this));
        });
      }), this.Hr = new so(n, s);
    }
  };
  async function ro(t2) {
    if (wo(t2))
      for (const e of t2.Gr)
        await e(true);
  }
  async function oo(t2) {
    for (const e of t2.Gr)
      await e(false);
  }
  function co(t2, e) {
    const n = q2(t2);
    n.Qr.has(e.targetId) || (n.Qr.set(e.targetId, e), fo(n) ? lo(n) : Co(n).hr() && uo(n, e));
  }
  function ao(t2, e) {
    const n = q2(t2), s = Co(n);
    n.Qr.delete(e), s.hr() && ho(n, e), n.Qr.size === 0 && (s.hr() ? s.wr() : wo(n) && n.Hr.set("Unknown"));
  }
  function uo(t2, e) {
    t2.Jr.Y(e.targetId), Co(t2).br(e);
  }
  function ho(t2, e) {
    t2.Jr.Y(e), Co(t2).Pr(e);
  }
  function lo(t2) {
    t2.Jr = new $n({
      getRemoteKeysForTarget: (e) => t2.remoteSyncer.getRemoteKeysForTarget(e),
      Tt: (e) => t2.Qr.get(e) || null
    }), Co(t2).start(), t2.Hr.Lr();
  }
  function fo(t2) {
    return wo(t2) && !Co(t2).ur() && t2.Qr.size > 0;
  }
  function wo(t2) {
    return q2(t2).Wr.size === 0;
  }
  function _o(t2) {
    t2.Jr = void 0;
  }
  async function mo(t2) {
    t2.Qr.forEach((e, n) => {
      uo(t2, e);
    });
  }
  async function go(t2, e) {
    _o(t2), fo(t2) ? (t2.Hr.qr(e), lo(t2)) : t2.Hr.set("Unknown");
  }
  async function yo(t2, e, n) {
    if (t2.Hr.set("Online"), e instanceof xn && e.state === 2 && e.cause)
      try {
        await async function(t3, e2) {
          const n2 = e2.cause;
          for (const s of e2.targetIds)
            t3.Qr.has(s) && (await t3.remoteSyncer.rejectListen(s, n2), t3.Qr.delete(s), t3.Jr.removeTarget(s));
        }(t2, e);
      } catch (n2) {
        $("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), n2), await po(t2, n2);
      }
    else if (e instanceof Cn ? t2.Jr.rt(e) : e instanceof Nn ? t2.Jr.ft(e) : t2.Jr.at(e), !n.isEqual(rt.min()))
      try {
        const e2 = await fr(t2.localStore);
        n.compareTo(e2) >= 0 && await function(t3, e3) {
          const n2 = t3.Jr._t(e3);
          return n2.targetChanges.forEach((n3, s) => {
            if (n3.resumeToken.approximateByteSize() > 0) {
              const i = t3.Qr.get(s);
              i && t3.Qr.set(s, i.withResumeToken(n3.resumeToken, e3));
            }
          }), n2.targetMismatches.forEach((e4) => {
            const n3 = t3.Qr.get(e4);
            if (!n3)
              return;
            t3.Qr.set(e4, n3.withResumeToken(_t.EMPTY_BYTE_STRING, n3.snapshotVersion)), ho(t3, e4);
            const s = new ii(n3.target, e4, 1, n3.sequenceNumber);
            uo(t3, s);
          }), t3.remoteSyncer.applyRemoteEvent(n2);
        }(t2, n);
      } catch (e2) {
        $("RemoteStore", "Failed to raise snapshot:", e2), await po(t2, e2);
      }
  }
  async function po(t2, e, n) {
    if (!Hs(e))
      throw e;
    t2.Wr.add(1), await oo(t2), t2.Hr.set("Offline"), n || (n = () => fr(t2.localStore)), t2.asyncQueue.enqueueRetryable(async () => {
      $("RemoteStore", "Retrying IndexedDB access"), await n(), t2.Wr.delete(1), await ro(t2);
    });
  }
  async function Do(t2, e) {
    const n = q2(t2);
    e ? (n.Wr.delete(2), await ro(n)) : e || (n.Wr.add(2), await oo(n), n.Hr.set("Unknown"));
  }
  function Co(t2) {
    return t2.Yr || (t2.Yr = function(t3, e, n) {
      const s = q2(t3);
      return s.$r(), new to(e, s.sr, s.credentials, s.N, n);
    }(t2.datastore, t2.asyncQueue, {
      Si: mo.bind(null, t2),
      Ci: go.bind(null, t2),
      Rr: yo.bind(null, t2)
    }), t2.Gr.push(async (e) => {
      e ? (t2.Yr.dr(), fo(t2) ? lo(t2) : t2.Hr.set("Unknown")) : (await t2.Yr.stop(), _o(t2));
    })), t2.Yr;
  }
  var xo = class {
    constructor(t2, e, n, s, i) {
      this.asyncQueue = t2, this.timerId = e, this.targetTimeMs = n, this.op = s, this.removalCallback = i, this.deferred = new Q2(), this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch((t3) => {
      });
    }
    static createAndSchedule(t2, e, n, s, i) {
      const r = Date.now() + n, o = new xo(t2, e, r, s, i);
      return o.start(n), o;
    }
    start(t2) {
      this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t2);
    }
    skipDelay() {
      return this.handleDelayElapsed();
    }
    cancel(t2) {
      this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new j(K2.CANCELLED, "Operation cancelled" + (t2 ? ": " + t2 : ""))));
    }
    handleDelayElapsed() {
      this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then((t2) => this.deferred.resolve(t2))) : Promise.resolve());
    }
    clearTimeout() {
      this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
    }
  };
  function ko(t2, e) {
    if (O2("AsyncQueue", `${e}: ${t2}`), Hs(t2))
      return new j(K2.UNAVAILABLE, `${e}: ${t2}`);
    throw t2;
  }
  var $o = class {
    constructor(t2) {
      this.comparator = t2 ? (e, n) => t2(e, n) || Pt.comparator(e.key, n.key) : (t3, e) => Pt.comparator(t3.key, e.key), this.keyedMap = In(), this.sortedSet = new wn(this.comparator);
    }
    static emptySet(t2) {
      return new $o(t2.comparator);
    }
    has(t2) {
      return this.keyedMap.get(t2) != null;
    }
    get(t2) {
      return this.keyedMap.get(t2);
    }
    first() {
      return this.sortedSet.minKey();
    }
    last() {
      return this.sortedSet.maxKey();
    }
    isEmpty() {
      return this.sortedSet.isEmpty();
    }
    indexOf(t2) {
      const e = this.keyedMap.get(t2);
      return e ? this.sortedSet.indexOf(e) : -1;
    }
    get size() {
      return this.sortedSet.size;
    }
    forEach(t2) {
      this.sortedSet.inorderTraversal((e, n) => (t2(e), false));
    }
    add(t2) {
      const e = this.delete(t2.key);
      return e.copy(e.keyedMap.insert(t2.key, t2), e.sortedSet.insert(t2, null));
    }
    delete(t2) {
      const e = this.get(t2);
      return e ? this.copy(this.keyedMap.remove(t2), this.sortedSet.remove(e)) : this;
    }
    isEqual(t2) {
      if (!(t2 instanceof $o))
        return false;
      if (this.size !== t2.size)
        return false;
      const e = this.sortedSet.getIterator(), n = t2.sortedSet.getIterator();
      for (; e.hasNext(); ) {
        const t3 = e.getNext().key, s = n.getNext().key;
        if (!t3.isEqual(s))
          return false;
      }
      return true;
    }
    toString() {
      const t2 = [];
      return this.forEach((e) => {
        t2.push(e.toString());
      }), t2.length === 0 ? "DocumentSet ()" : "DocumentSet (\n  " + t2.join("  \n") + "\n)";
    }
    copy(t2, e) {
      const n = new $o();
      return n.comparator = this.comparator, n.keyedMap = t2, n.sortedSet = e, n;
    }
  };
  var Oo = class {
    constructor() {
      this.Zr = new wn(Pt.comparator);
    }
    track(t2) {
      const e = t2.doc.key, n = this.Zr.get(e);
      n ? t2.type !== 0 && n.type === 3 ? this.Zr = this.Zr.insert(e, t2) : t2.type === 3 && n.type !== 1 ? this.Zr = this.Zr.insert(e, {
        type: n.type,
        doc: t2.doc
      }) : t2.type === 2 && n.type === 2 ? this.Zr = this.Zr.insert(e, {
        type: 2,
        doc: t2.doc
      }) : t2.type === 2 && n.type === 0 ? this.Zr = this.Zr.insert(e, {
        type: 0,
        doc: t2.doc
      }) : t2.type === 1 && n.type === 0 ? this.Zr = this.Zr.remove(e) : t2.type === 1 && n.type === 2 ? this.Zr = this.Zr.insert(e, {
        type: 1,
        doc: n.doc
      }) : t2.type === 0 && n.type === 1 ? this.Zr = this.Zr.insert(e, {
        type: 2,
        doc: t2.doc
      }) : L2() : this.Zr = this.Zr.insert(e, t2);
    }
    eo() {
      const t2 = [];
      return this.Zr.inorderTraversal((e, n) => {
        t2.push(n);
      }), t2;
    }
  };
  var Fo = class {
    constructor(t2, e, n, s, i, r, o, c) {
      this.query = t2, this.docs = e, this.oldDocs = n, this.docChanges = s, this.mutatedKeys = i, this.fromCache = r, this.syncStateChanged = o, this.excludesMetadataChanges = c;
    }
    static fromInitialDocuments(t2, e, n, s) {
      const i = [];
      return e.forEach((t3) => {
        i.push({
          type: 0,
          doc: t3
        });
      }), new Fo(t2, e, $o.emptySet(e), i, n, s, true, false);
    }
    get hasPendingWrites() {
      return !this.mutatedKeys.isEmpty();
    }
    isEqual(t2) {
      if (!(this.fromCache === t2.fromCache && this.syncStateChanged === t2.syncStateChanged && this.mutatedKeys.isEqual(t2.mutatedKeys) && Ae(this.query, t2.query) && this.docs.isEqual(t2.docs) && this.oldDocs.isEqual(t2.oldDocs)))
        return false;
      const e = this.docChanges, n = t2.docChanges;
      if (e.length !== n.length)
        return false;
      for (let t3 = 0; t3 < e.length; t3++)
        if (e[t3].type !== n[t3].type || !e[t3].doc.isEqual(n[t3].doc))
          return false;
      return true;
    }
  };
  var Mo = class {
    constructor() {
      this.no = void 0, this.listeners = [];
    }
  };
  var Lo = class {
    constructor() {
      this.queries = new ji((t2) => Re(t2), Ae), this.onlineState = "Unknown", this.so = new Set();
    }
  };
  async function Bo(t2, e) {
    const n = q2(t2), s = e.query;
    let i = false, r = n.queries.get(s);
    if (r || (i = true, r = new Mo()), i)
      try {
        r.no = await n.onListen(s);
      } catch (t3) {
        const n2 = ko(t3, `Initialization of query '${be(e.query)}' failed`);
        return void e.onError(n2);
      }
    if (n.queries.set(s, r), r.listeners.push(e), e.io(n.onlineState), r.no) {
      e.ro(r.no) && jo(n);
    }
  }
  async function Uo(t2, e) {
    const n = q2(t2), s = e.query;
    let i = false;
    const r = n.queries.get(s);
    if (r) {
      const t3 = r.listeners.indexOf(e);
      t3 >= 0 && (r.listeners.splice(t3, 1), i = r.listeners.length === 0);
    }
    if (i)
      return n.queries.delete(s), n.onUnlisten(s);
  }
  function qo(t2, e) {
    const n = q2(t2);
    let s = false;
    for (const t3 of e) {
      const e2 = t3.query, i = n.queries.get(e2);
      if (i) {
        for (const e3 of i.listeners)
          e3.ro(t3) && (s = true);
        i.no = t3;
      }
    }
    s && jo(n);
  }
  function Ko(t2, e, n) {
    const s = q2(t2), i = s.queries.get(e);
    if (i)
      for (const t3 of i.listeners)
        t3.onError(n);
    s.queries.delete(e);
  }
  function jo(t2) {
    t2.so.forEach((t3) => {
      t3.next();
    });
  }
  var Qo = class {
    constructor(t2, e, n) {
      this.query = t2, this.oo = e, this.co = false, this.ao = null, this.onlineState = "Unknown", this.options = n || {};
    }
    ro(t2) {
      if (!this.options.includeMetadataChanges) {
        const e2 = [];
        for (const n of t2.docChanges)
          n.type !== 3 && e2.push(n);
        t2 = new Fo(t2.query, t2.docs, t2.oldDocs, e2, t2.mutatedKeys, t2.fromCache, t2.syncStateChanged, true);
      }
      let e = false;
      return this.co ? this.uo(t2) && (this.oo.next(t2), e = true) : this.ho(t2, this.onlineState) && (this.lo(t2), e = true), this.ao = t2, e;
    }
    onError(t2) {
      this.oo.error(t2);
    }
    io(t2) {
      this.onlineState = t2;
      let e = false;
      return this.ao && !this.co && this.ho(this.ao, t2) && (this.lo(this.ao), e = true), e;
    }
    ho(t2, e) {
      if (!t2.fromCache)
        return true;
      const n = e !== "Offline";
      return (!this.options.fo || !n) && (!t2.docs.isEmpty() || e === "Offline");
    }
    uo(t2) {
      if (t2.docChanges.length > 0)
        return true;
      const e = this.ao && this.ao.hasPendingWrites !== t2.hasPendingWrites;
      return !(!t2.syncStateChanged && !e) && this.options.includeMetadataChanges === true;
    }
    lo(t2) {
      t2 = Fo.fromInitialDocuments(t2.query, t2.docs, t2.mutatedKeys, t2.fromCache), this.co = true, this.oo.next(t2);
    }
  };
  var Jo = class {
    constructor(t2) {
      this.key = t2;
    }
  };
  var Yo = class {
    constructor(t2) {
      this.key = t2;
    }
  };
  var Xo = class {
    constructor(t2, e) {
      this.query = t2, this.po = e, this.To = null, this.current = false, this.Eo = Pn(), this.mutatedKeys = Pn(), this.Io = ve(t2), this.Ao = new $o(this.Io);
    }
    get Ro() {
      return this.po;
    }
    bo(t2, e) {
      const n = e ? e.Po : new Oo(), s = e ? e.Ao : this.Ao;
      let i = e ? e.mutatedKeys : this.mutatedKeys, r = s, o = false;
      const c = _e(this.query) && s.size === this.query.limit ? s.last() : null, a = me(this.query) && s.size === this.query.limit ? s.first() : null;
      if (t2.inorderTraversal((t3, e2) => {
        const u = s.get(t3), h = Pe(this.query, e2) ? e2 : null, l2 = !!u && this.mutatedKeys.has(u.key), f = !!h && (h.hasLocalMutations || this.mutatedKeys.has(h.key) && h.hasCommittedMutations);
        let d = false;
        if (u && h) {
          u.data.isEqual(h.data) ? l2 !== f && (n.track({
            type: 3,
            doc: h
          }), d = true) : this.vo(u, h) || (n.track({
            type: 2,
            doc: h
          }), d = true, (c && this.Io(h, c) > 0 || a && this.Io(h, a) < 0) && (o = true));
        } else
          !u && h ? (n.track({
            type: 0,
            doc: h
          }), d = true) : u && !h && (n.track({
            type: 1,
            doc: u
          }), d = true, (c || a) && (o = true));
        d && (h ? (r = r.add(h), i = f ? i.add(t3) : i.delete(t3)) : (r = r.delete(t3), i = i.delete(t3)));
      }), _e(this.query) || me(this.query))
        for (; r.size > this.query.limit; ) {
          const t3 = _e(this.query) ? r.last() : r.first();
          r = r.delete(t3.key), i = i.delete(t3.key), n.track({
            type: 1,
            doc: t3
          });
        }
      return {
        Ao: r,
        Po: n,
        Ln: o,
        mutatedKeys: i
      };
    }
    vo(t2, e) {
      return t2.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
    }
    applyChanges(t2, e, n) {
      const s = this.Ao;
      this.Ao = t2.Ao, this.mutatedKeys = t2.mutatedKeys;
      const i = t2.Po.eo();
      i.sort((t3, e2) => function(t4, e3) {
        const n2 = (t5) => {
          switch (t5) {
            case 0:
              return 1;
            case 2:
            case 3:
              return 2;
            case 1:
              return 0;
            default:
              return L2();
          }
        };
        return n2(t4) - n2(e3);
      }(t3.type, e2.type) || this.Io(t3.doc, e2.doc)), this.Vo(n);
      const r = e ? this.So() : [], o = this.Eo.size === 0 && this.current ? 1 : 0, c = o !== this.To;
      if (this.To = o, i.length !== 0 || c) {
        return {
          snapshot: new Fo(this.query, t2.Ao, s, i, t2.mutatedKeys, o === 0, c, false),
          Do: r
        };
      }
      return {
        Do: r
      };
    }
    io(t2) {
      return this.current && t2 === "Offline" ? (this.current = false, this.applyChanges({
        Ao: this.Ao,
        Po: new Oo(),
        mutatedKeys: this.mutatedKeys,
        Ln: false
      }, false)) : {
        Do: []
      };
    }
    Co(t2) {
      return !this.po.has(t2) && (!!this.Ao.has(t2) && !this.Ao.get(t2).hasLocalMutations);
    }
    Vo(t2) {
      t2 && (t2.addedDocuments.forEach((t3) => this.po = this.po.add(t3)), t2.modifiedDocuments.forEach((t3) => {
      }), t2.removedDocuments.forEach((t3) => this.po = this.po.delete(t3)), this.current = t2.current);
    }
    So() {
      if (!this.current)
        return [];
      const t2 = this.Eo;
      this.Eo = Pn(), this.Ao.forEach((t3) => {
        this.Co(t3.key) && (this.Eo = this.Eo.add(t3.key));
      });
      const e = [];
      return t2.forEach((t3) => {
        this.Eo.has(t3) || e.push(new Yo(t3));
      }), this.Eo.forEach((n) => {
        t2.has(n) || e.push(new Jo(n));
      }), e;
    }
    No(t2) {
      this.po = t2.Gn, this.Eo = Pn();
      const e = this.bo(t2.documents);
      return this.applyChanges(e, true);
    }
    xo() {
      return Fo.fromInitialDocuments(this.query, this.Ao, this.mutatedKeys, this.To === 0);
    }
  };
  var Zo = class {
    constructor(t2, e, n) {
      this.query = t2, this.targetId = e, this.view = n;
    }
  };
  var tc2 = class {
    constructor(t2) {
      this.key = t2, this.ko = false;
    }
  };
  var ec2 = class {
    constructor(t2, e, n, s, i, r) {
      this.localStore = t2, this.remoteStore = e, this.eventManager = n, this.sharedClientState = s, this.currentUser = i, this.maxConcurrentLimboResolutions = r, this.$o = {}, this.Oo = new ji((t3) => Re(t3), Ae), this.Fo = new Map(), this.Mo = new Set(), this.Lo = new wn(Pt.comparator), this.Bo = new Map(), this.Uo = new br(), this.qo = {}, this.Ko = new Map(), this.jo = Ni.ie(), this.onlineState = "Unknown", this.Qo = void 0;
    }
    get isPrimaryClient() {
      return this.Qo === true;
    }
  };
  async function nc2(t2, e) {
    const n = Cc2(t2);
    let s, i;
    const r = n.Oo.get(e);
    if (r)
      s = r.targetId, n.sharedClientState.addLocalQueryTarget(s), i = r.view.xo();
    else {
      const t3 = await mr(n.localStore, Ee(e)), r2 = n.sharedClientState.addLocalQueryTarget(t3.targetId);
      s = t3.targetId, i = await sc2(n, e, s, r2 === "current"), n.isPrimaryClient && co(n.remoteStore, t3);
    }
    return i;
  }
  async function sc2(t2, e, n, s) {
    t2.Wo = (e2, n2, s2) => async function(t3, e3, n3, s3) {
      let i2 = e3.view.bo(n3);
      i2.Ln && (i2 = await yr(t3.localStore, e3.query, false).then(({ documents: t4 }) => e3.view.bo(t4, i2)));
      const r2 = s3 && s3.targetChanges.get(e3.targetId), o2 = e3.view.applyChanges(i2, t3.isPrimaryClient, r2);
      return mc2(t3, e3.targetId, o2.Do), o2.snapshot;
    }(t2, e2, n2, s2);
    const i = await yr(t2.localStore, e, true), r = new Xo(e, i.Gn), o = r.bo(i.documents), c = Dn.createSynthesizedTargetChangeForCurrentChange(n, s && t2.onlineState !== "Offline"), a = r.applyChanges(o, t2.isPrimaryClient, c);
    mc2(t2, n, a.Do);
    const u = new Zo(e, n, r);
    return t2.Oo.set(e, u), t2.Fo.has(n) ? t2.Fo.get(n).push(e) : t2.Fo.set(n, [e]), a.snapshot;
  }
  async function ic2(t2, e) {
    const n = q2(t2), s = n.Oo.get(e), i = n.Fo.get(s.targetId);
    if (i.length > 1)
      return n.Fo.set(s.targetId, i.filter((t3) => !Ae(t3, e))), void n.Oo.delete(e);
    if (n.isPrimaryClient) {
      n.sharedClientState.removeLocalQueryTarget(s.targetId);
      n.sharedClientState.isActiveQueryTarget(s.targetId) || await gr(n.localStore, s.targetId, false).then(() => {
        n.sharedClientState.clearQueryState(s.targetId), ao(n.remoteStore, s.targetId), wc2(n, s.targetId);
      }).catch(Fi);
    } else
      wc2(n, s.targetId), await gr(n.localStore, s.targetId, true);
  }
  async function oc2(t2, e) {
    const n = q2(t2);
    try {
      const t3 = await dr(n.localStore, e);
      e.targetChanges.forEach((t4, e2) => {
        const s = n.Bo.get(e2);
        s && (B2(t4.addedDocuments.size + t4.modifiedDocuments.size + t4.removedDocuments.size <= 1), t4.addedDocuments.size > 0 ? s.ko = true : t4.modifiedDocuments.size > 0 ? B2(s.ko) : t4.removedDocuments.size > 0 && (B2(s.ko), s.ko = false));
      }), await pc2(n, t3, e);
    } catch (t3) {
      await Fi(t3);
    }
  }
  function cc2(t2, e, n) {
    const s = q2(t2);
    if (s.isPrimaryClient && n === 0 || !s.isPrimaryClient && n === 1) {
      const t3 = [];
      s.Oo.forEach((n2, s2) => {
        const i = s2.view.io(e);
        i.snapshot && t3.push(i.snapshot);
      }), function(t4, e2) {
        const n2 = q2(t4);
        n2.onlineState = e2;
        let s2 = false;
        n2.queries.forEach((t5, n3) => {
          for (const t6 of n3.listeners)
            t6.io(e2) && (s2 = true);
        }), s2 && jo(n2);
      }(s.eventManager, e), t3.length && s.$o.Rr(t3), s.onlineState = e, s.isPrimaryClient && s.sharedClientState.setOnlineState(e);
    }
  }
  async function ac2(t2, e, n) {
    const s = q2(t2);
    s.sharedClientState.updateQueryState(e, "rejected", n);
    const i = s.Bo.get(e), r = i && i.key;
    if (r) {
      let t3 = new wn(Pt.comparator);
      t3 = t3.insert(r, Kt.newNoDocument(r, rt.min()));
      const n2 = Pn().add(r), i2 = new Sn(rt.min(), new Map(), new gn(et), t3, n2);
      await oc2(s, i2), s.Lo = s.Lo.remove(r), s.Bo.delete(e), yc2(s);
    } else
      await gr(s.localStore, e, false).then(() => wc2(s, e, n)).catch(Fi);
  }
  function wc2(t2, e, n = null) {
    t2.sharedClientState.removeLocalQueryTarget(e);
    for (const s of t2.Fo.get(e))
      t2.Oo.delete(s), n && t2.$o.Go(s, n);
    if (t2.Fo.delete(e), t2.isPrimaryClient) {
      t2.Uo.cs(e).forEach((e2) => {
        t2.Uo.containsKey(e2) || _c(t2, e2);
      });
    }
  }
  function _c(t2, e) {
    t2.Mo.delete(e.path.canonicalString());
    const n = t2.Lo.get(e);
    n !== null && (ao(t2.remoteStore, n), t2.Lo = t2.Lo.remove(e), t2.Bo.delete(n), yc2(t2));
  }
  function mc2(t2, e, n) {
    for (const s of n)
      if (s instanceof Jo)
        t2.Uo.addReference(s.key, e), gc2(t2, s);
      else if (s instanceof Yo) {
        $("SyncEngine", "Document no longer in limbo: " + s.key), t2.Uo.removeReference(s.key, e);
        t2.Uo.containsKey(s.key) || _c(t2, s.key);
      } else
        L2();
  }
  function gc2(t2, e) {
    const n = e.key, s = n.path.canonicalString();
    t2.Lo.get(n) || t2.Mo.has(s) || ($("SyncEngine", "New document in limbo: " + n), t2.Mo.add(s), yc2(t2));
  }
  function yc2(t2) {
    for (; t2.Mo.size > 0 && t2.Lo.size < t2.maxConcurrentLimboResolutions; ) {
      const e = t2.Mo.values().next().value;
      t2.Mo.delete(e);
      const n = new Pt(ht.fromString(e)), s = t2.jo.next();
      t2.Bo.set(s, new tc2(n)), t2.Lo = t2.Lo.insert(n, s), co(t2.remoteStore, new ii(Ee(we(n.path)), s, 2, X2.T));
    }
  }
  async function pc2(t2, e, n) {
    const s = q2(t2), i = [], r = [], o = [];
    s.Oo.isEmpty() || (s.Oo.forEach((t3, c) => {
      o.push(s.Wo(c, e, n).then((t4) => {
        if (t4) {
          s.isPrimaryClient && s.sharedClientState.updateQueryState(c.targetId, t4.fromCache ? "not-current" : "current"), i.push(t4);
          const e2 = or.kn(c.targetId, t4);
          r.push(e2);
        }
      }));
    }), await Promise.all(o), s.$o.Rr(i), await async function(t3, e2) {
      const n2 = q2(t3);
      try {
        await n2.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t4) => js.forEach(e2, (e3) => js.forEach(e3.Nn, (s2) => n2.persistence.referenceDelegate.addReference(t4, e3.targetId, s2)).next(() => js.forEach(e3.xn, (s2) => n2.persistence.referenceDelegate.removeReference(t4, e3.targetId, s2)))));
      } catch (t4) {
        if (!Hs(t4))
          throw t4;
        $("LocalStore", "Failed to update sequence numbers: " + t4);
      }
      for (const t4 of e2) {
        const e3 = t4.targetId;
        if (!t4.fromCache) {
          const t5 = n2.Un.get(e3), s2 = t5.snapshotVersion, i2 = t5.withLastLimboFreeSnapshotVersion(s2);
          n2.Un = n2.Un.insert(e3, i2);
        }
      }
    }(s.localStore, r));
  }
  async function Tc2(t2, e) {
    const n = q2(t2);
    if (!n.currentUser.isEqual(e)) {
      $("SyncEngine", "User change. New user:", e.toKey());
      const t3 = await hr(n.localStore, e);
      n.currentUser = e, function(t4, e2) {
        t4.Ko.forEach((t5) => {
          t5.forEach((t6) => {
            t6.reject(new j(K2.CANCELLED, e2));
          });
        }), t4.Ko.clear();
      }(n, "'waitForPendingWrites' promise is rejected due to a user change."), n.sharedClientState.handleUserChange(e, t3.removedBatchIds, t3.addedBatchIds), await pc2(n, t3.Wn);
    }
  }
  function Ec2(t2, e) {
    const n = q2(t2), s = n.Bo.get(e);
    if (s && s.ko)
      return Pn().add(s.key);
    {
      let t3 = Pn();
      const s2 = n.Fo.get(e);
      if (!s2)
        return t3;
      for (const e2 of s2) {
        const s3 = n.Oo.get(e2);
        t3 = t3.unionWith(s3.view.Ro);
      }
      return t3;
    }
  }
  function Cc2(t2) {
    const e = q2(t2);
    return e.remoteStore.remoteSyncer.applyRemoteEvent = oc2.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Ec2.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = ac2.bind(null, e), e.$o.Rr = qo.bind(null, e.eventManager), e.$o.Go = Ko.bind(null, e.eventManager), e;
  }
  var kc2 = class {
    constructor() {
      this.synchronizeTabs = false;
    }
    async initialize(t2) {
      this.N = Yr(t2.databaseInfo.databaseId), this.sharedClientState = this.Ho(t2), this.persistence = this.Jo(t2), await this.persistence.start(), this.gcScheduler = this.Yo(t2), this.localStore = this.Xo(t2);
    }
    Yo(t2) {
      return null;
    }
    Xo(t2) {
      return ur(this.persistence, new cr(), t2.initialUser, this.N);
    }
    Jo(t2) {
      return new Cr(xr.Ns, this.N);
    }
    Ho(t2) {
      return new Kr();
    }
    async terminate() {
      this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), await this.persistence.shutdown();
    }
  };
  var Fc2 = class {
    async initialize(t2, e) {
      this.localStore || (this.localStore = t2.localStore, this.sharedClientState = t2.sharedClientState, this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(e, !t2.synchronizeTabs), this.sharedClientState.onlineStateHandler = (t3) => cc2(this.syncEngine, t3, 1), this.remoteStore.remoteSyncer.handleCredentialChange = Tc2.bind(null, this.syncEngine), await Do(this.remoteStore, this.syncEngine.isPrimaryClient));
    }
    createEventManager(t2) {
      return new Lo();
    }
    createDatastore(t2) {
      const e = Yr(t2.databaseInfo.databaseId), n = (s = t2.databaseInfo, new zr(s));
      var s;
      return function(t3, e2, n2) {
        return new no(t3, e2, n2);
      }(t2.credentials, n, e);
    }
    createRemoteStore(t2) {
      return e = this.localStore, n = this.datastore, s = t2.asyncQueue, i = (t3) => cc2(this.syncEngine, t3, 0), r = Qr.bt() ? new Qr() : new jr(), new io(e, n, s, i, r);
      var e, n, s, i, r;
    }
    createSyncEngine(t2, e) {
      return function(t3, e2, n, s, i, r, o) {
        const c = new ec2(t3, e2, n, s, i, r);
        return o && (c.Qo = true), c;
      }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t2.initialUser, t2.maxConcurrentLimboResolutions, e);
    }
    terminate() {
      return async function(t2) {
        const e = q2(t2);
        $("RemoteStore", "RemoteStore shutting down."), e.Wr.add(5), await oo(e), e.zr.shutdown(), e.Hr.set("Unknown");
      }(this.remoteStore);
    }
  };
  var Lc2 = class {
    constructor(t2) {
      this.observer = t2, this.muted = false;
    }
    next(t2) {
      this.observer.next && this.tc(this.observer.next, t2);
    }
    error(t2) {
      this.observer.error ? this.tc(this.observer.error, t2) : console.error("Uncaught Error in snapshot listener:", t2);
    }
    ec() {
      this.muted = true;
    }
    tc(t2, e) {
      this.muted || setTimeout(() => {
        this.muted || t2(e);
      }, 0);
    }
  };
  var Kc2 = class {
    constructor(t2, e, n) {
      this.credentials = t2, this.asyncQueue = e, this.databaseInfo = n, this.user = D2.UNAUTHENTICATED, this.clientId = tt.I(), this.credentialListener = () => Promise.resolve(), this.credentials.start(e, async (t3) => {
        $("FirestoreClient", "Received user=", t3.uid), await this.credentialListener(t3), this.user = t3;
      });
    }
    async getConfiguration() {
      return {
        asyncQueue: this.asyncQueue,
        databaseInfo: this.databaseInfo,
        clientId: this.clientId,
        credentials: this.credentials,
        initialUser: this.user,
        maxConcurrentLimboResolutions: 100
      };
    }
    setCredentialChangeListener(t2) {
      this.credentialListener = t2;
    }
    verifyNotTerminated() {
      if (this.asyncQueue.isShuttingDown)
        throw new j(K2.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    terminate() {
      this.asyncQueue.enterRestrictedMode();
      const t2 = new Q2();
      return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this.onlineComponents && await this.onlineComponents.terminate(), this.offlineComponents && await this.offlineComponents.terminate(), this.credentials.shutdown(), t2.resolve();
        } catch (e) {
          const n = ko(e, "Failed to shutdown persistence");
          t2.reject(n);
        }
      }), t2.promise;
    }
  };
  async function jc2(t2, e) {
    t2.asyncQueue.verifyOperationInProgress(), $("FirestoreClient", "Initializing OfflineComponentProvider");
    const n = await t2.getConfiguration();
    await e.initialize(n);
    let s = n.initialUser;
    t2.setCredentialChangeListener(async (t3) => {
      s.isEqual(t3) || (await hr(e.localStore, t3), s = t3);
    }), e.persistence.setDatabaseDeletedListener(() => t2.terminate()), t2.offlineComponents = e;
  }
  async function Qc2(t2, e) {
    t2.asyncQueue.verifyOperationInProgress();
    const n = await Wc2(t2);
    $("FirestoreClient", "Initializing OnlineComponentProvider");
    const s = await t2.getConfiguration();
    await e.initialize(n, s), t2.setCredentialChangeListener((t3) => async function(t4, e2) {
      const n2 = q2(t4);
      n2.asyncQueue.verifyOperationInProgress(), $("RemoteStore", "RemoteStore received new credentials");
      const s2 = wo(n2);
      n2.Wr.add(3), await oo(n2), s2 && n2.Hr.set("Unknown"), await n2.remoteSyncer.handleCredentialChange(e2), n2.Wr.delete(3), await ro(n2);
    }(e.remoteStore, t3)), t2.onlineComponents = e;
  }
  async function Wc2(t2) {
    return t2.offlineComponents || ($("FirestoreClient", "Using default OfflineComponentProvider"), await jc2(t2, new kc2())), t2.offlineComponents;
  }
  async function Gc2(t2) {
    return t2.onlineComponents || ($("FirestoreClient", "Using default OnlineComponentProvider"), await Qc2(t2, new Fc2())), t2.onlineComponents;
  }
  async function Xc2(t2) {
    const e = await Gc2(t2), n = e.eventManager;
    return n.onListen = nc2.bind(null, e.syncEngine), n.onUnlisten = ic2.bind(null, e.syncEngine), n;
  }
  function ia2(t2, e, n = {}) {
    const s = new Q2();
    return t2.asyncQueue.enqueueAndForget(async () => function(t3, e2, n2, s2, i) {
      const r = new Lc2({
        next: (n3) => {
          e2.enqueueAndForget(() => Uo(t3, o)), n3.fromCache && s2.source === "server" ? i.reject(new j(K2.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n3);
        },
        error: (t4) => i.reject(t4)
      }), o = new Qo(n2, r, {
        includeMetadataChanges: true,
        fo: true
      });
      return Bo(t3, o);
    }(await Xc2(t2), t2.asyncQueue, e, n, s)), s.promise;
  }
  var ua2 = class {
    constructor(t2, e, n, s, i, r, o, c) {
      this.databaseId = t2, this.appId = e, this.persistenceKey = n, this.host = s, this.ssl = i, this.forceLongPolling = r, this.autoDetectLongPolling = o, this.useFetchStreams = c;
    }
  };
  var ha2 = class {
    constructor(t2, e) {
      this.projectId = t2, this.database = e || "(default)";
    }
    get isDefaultDatabase() {
      return this.database === "(default)";
    }
    isEqual(t2) {
      return t2 instanceof ha2 && t2.projectId === this.projectId && t2.database === this.database;
    }
  };
  var la2 = new Map();
  function fa2(t2, e, n) {
    if (!n)
      throw new j(K2.INVALID_ARGUMENT, `Function ${t2}() cannot be called with an empty ${e}.`);
  }
  function da2(t2, e, n, s) {
    if (e === true && s === true)
      throw new j(K2.INVALID_ARGUMENT, `${t2} and ${n} cannot be used together.`);
  }
  function _a(t2) {
    if (Pt.isDocumentKey(t2))
      throw new j(K2.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t2} has ${t2.length}.`);
  }
  function ma2(t2) {
    if (t2 === void 0)
      return "undefined";
    if (t2 === null)
      return "null";
    if (typeof t2 == "string")
      return t2.length > 20 && (t2 = `${t2.substring(0, 20)}...`), JSON.stringify(t2);
    if (typeof t2 == "number" || typeof t2 == "boolean")
      return "" + t2;
    if (typeof t2 == "object") {
      if (t2 instanceof Array)
        return "an array";
      {
        const e = function(t3) {
          if (t3.constructor)
            return t3.constructor.name;
          return null;
        }(t2);
        return e ? `a custom ${e} object` : "an object";
      }
    }
    return typeof t2 == "function" ? "a function" : L2();
  }
  function ga(t2, e) {
    if ("_delegate" in t2 && (t2 = t2._delegate), !(t2 instanceof e)) {
      if (e.name === t2.constructor.name)
        throw new j(K2.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
      {
        const n = ma2(t2);
        throw new j(K2.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
      }
    }
    return t2;
  }
  var pa2 = class {
    constructor(t2) {
      var e;
      if (t2.host === void 0) {
        if (t2.ssl !== void 0)
          throw new j(K2.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
        this.host = "firestore.googleapis.com", this.ssl = true;
      } else
        this.host = t2.host, this.ssl = (e = t2.ssl) === null || e === void 0 || e;
      if (this.credentials = t2.credentials, this.ignoreUndefinedProperties = !!t2.ignoreUndefinedProperties, t2.cacheSizeBytes === void 0)
        this.cacheSizeBytes = 41943040;
      else {
        if (t2.cacheSizeBytes !== -1 && t2.cacheSizeBytes < 1048576)
          throw new j(K2.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
        this.cacheSizeBytes = t2.cacheSizeBytes;
      }
      this.experimentalForceLongPolling = !!t2.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t2.experimentalAutoDetectLongPolling, this.useFetchStreams = !!t2.useFetchStreams, da2("experimentalForceLongPolling", t2.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t2.experimentalAutoDetectLongPolling);
    }
    isEqual(t2) {
      return this.host === t2.host && this.ssl === t2.ssl && this.credentials === t2.credentials && this.cacheSizeBytes === t2.cacheSizeBytes && this.experimentalForceLongPolling === t2.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t2.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t2.ignoreUndefinedProperties && this.useFetchStreams === t2.useFetchStreams;
    }
  };
  var Ta = class {
    constructor(t2, e) {
      this._credentials = e, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new pa2({}), this._settingsFrozen = false, t2 instanceof ha2 ? this._databaseId = t2 : (this._app = t2, this._databaseId = function(t3) {
        if (!Object.prototype.hasOwnProperty.apply(t3.options, ["projectId"]))
          throw new j(K2.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        return new ha2(t3.options.projectId);
      }(t2));
    }
    get app() {
      if (!this._app)
        throw new j(K2.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this._app;
    }
    get _initialized() {
      return this._settingsFrozen;
    }
    get _terminated() {
      return this._terminateTask !== void 0;
    }
    _setSettings(t2) {
      if (this._settingsFrozen)
        throw new j(K2.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
      this._settings = new pa2(t2), t2.credentials !== void 0 && (this._credentials = function(t3) {
        if (!t3)
          return new G();
        switch (t3.type) {
          case "gapi":
            const e = t3.client;
            return B2(!(typeof e != "object" || e === null || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new Y2(e, t3.sessionIndex || "0", t3.iamToken || null);
          case "provider":
            return t3.client;
          default:
            throw new j(K2.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
        }
      }(t2.credentials));
    }
    _getSettings() {
      return this._settings;
    }
    _freezeSettings() {
      return this._settingsFrozen = true, this._settings;
    }
    _delete() {
      return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
    }
    toJSON() {
      return {
        app: this._app,
        databaseId: this._databaseId,
        settings: this._settings
      };
    }
    _terminate() {
      return function(t2) {
        const e = la2.get(t2);
        e && ($("ComponentProvider", "Removing Datastore"), la2.delete(t2), e.terminate());
      }(this), Promise.resolve();
    }
  };
  var Ia2 = class {
    constructor(t2, e, n) {
      this.converter = e, this._key = n, this.type = "document", this.firestore = t2;
    }
    get _path() {
      return this._key.path;
    }
    get id() {
      return this._key.path.lastSegment();
    }
    get path() {
      return this._key.path.canonicalString();
    }
    get parent() {
      return new Ra2(this.firestore, this.converter, this._key.path.popLast());
    }
    withConverter(t2) {
      return new Ia2(this.firestore, t2, this._key);
    }
  };
  var Aa2 = class {
    constructor(t2, e, n) {
      this.converter = e, this._query = n, this.type = "query", this.firestore = t2;
    }
    withConverter(t2) {
      return new Aa2(this.firestore, t2, this._query);
    }
  };
  var Ra2 = class extends Aa2 {
    constructor(t2, e, n) {
      super(t2, e, we(n)), this._path = n, this.type = "collection";
    }
    get id() {
      return this._query.path.lastSegment();
    }
    get path() {
      return this._query.path.canonicalString();
    }
    get parent() {
      const t2 = this._path.popLast();
      return t2.isEmpty() ? null : new Ia2(this.firestore, null, new Pt(t2));
    }
    withConverter(t2) {
      return new Ra2(this.firestore, t2, this._path);
    }
  };
  function ba2(t2, e, ...n) {
    if (t2 = getModularInstance(t2), fa2("collection", "path", e), t2 instanceof Ta) {
      const s = ht.fromString(e, ...n);
      return _a(s), new Ra2(t2, null, s);
    }
    {
      if (!(t2 instanceof Ia2 || t2 instanceof Ra2))
        throw new j(K2.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
      const s = t2._path.child(ht.fromString(e, ...n));
      return _a(s), new Ra2(t2.firestore, null, s);
    }
  }
  var Da = class {
    constructor() {
      this._c = Promise.resolve(), this.mc = [], this.gc = false, this.yc = [], this.Tc = null, this.Ec = false, this.Ic = false, this.Ac = [], this.ar = new Xr(this, "async_queue_retry"), this.Rc = () => {
        const t3 = Jr();
        t3 && $("AsyncQueue", "Visibility state changed to " + t3.visibilityState), this.ar.tr();
      };
      const t2 = Jr();
      t2 && typeof t2.addEventListener == "function" && t2.addEventListener("visibilitychange", this.Rc);
    }
    get isShuttingDown() {
      return this.gc;
    }
    enqueueAndForget(t2) {
      this.enqueue(t2);
    }
    enqueueAndForgetEvenWhileRestricted(t2) {
      this.bc(), this.Pc(t2);
    }
    enterRestrictedMode(t2) {
      if (!this.gc) {
        this.gc = true, this.Ic = t2 || false;
        const e = Jr();
        e && typeof e.removeEventListener == "function" && e.removeEventListener("visibilitychange", this.Rc);
      }
    }
    enqueue(t2) {
      if (this.bc(), this.gc)
        return new Promise(() => {
        });
      const e = new Q2();
      return this.Pc(() => this.gc && this.Ic ? Promise.resolve() : (t2().then(e.resolve, e.reject), e.promise)).then(() => e.promise);
    }
    enqueueRetryable(t2) {
      this.enqueueAndForget(() => (this.mc.push(t2), this.vc()));
    }
    async vc() {
      if (this.mc.length !== 0) {
        try {
          await this.mc[0](), this.mc.shift(), this.ar.reset();
        } catch (t2) {
          if (!Hs(t2))
            throw t2;
          $("AsyncQueue", "Operation failed with retryable error: " + t2);
        }
        this.mc.length > 0 && this.ar.Xi(() => this.vc());
      }
    }
    Pc(t2) {
      const e = this._c.then(() => (this.Ec = true, t2().catch((t3) => {
        this.Tc = t3, this.Ec = false;
        const e2 = function(t4) {
          let e3 = t4.message || "";
          t4.stack && (e3 = t4.stack.includes(t4.message) ? t4.stack : t4.message + "\n" + t4.stack);
          return e3;
        }(t3);
        throw O2("INTERNAL UNHANDLED ERROR: ", e2), t3;
      }).then((t3) => (this.Ec = false, t3))));
      return this._c = e, e;
    }
    enqueueAfterDelay(t2, e, n) {
      this.bc(), this.Ac.indexOf(t2) > -1 && (e = 0);
      const s = xo.createAndSchedule(this, t2, e, n, (t3) => this.Vc(t3));
      return this.yc.push(s), s;
    }
    bc() {
      this.Tc && L2();
    }
    verifyOperationInProgress() {
    }
    async Sc() {
      let t2;
      do {
        t2 = this._c, await t2;
      } while (t2 !== this._c);
    }
    Dc(t2) {
      for (const e of this.yc)
        if (e.timerId === t2)
          return true;
      return false;
    }
    Cc(t2) {
      return this.Sc().then(() => {
        this.yc.sort((t3, e) => t3.targetTimeMs - e.targetTimeMs);
        for (const e of this.yc)
          if (e.skipDelay(), t2 !== "all" && e.timerId === t2)
            break;
        return this.Sc();
      });
    }
    Nc(t2) {
      this.Ac.push(t2);
    }
    Vc(t2) {
      const e = this.yc.indexOf(t2);
      this.yc.splice(e, 1);
    }
  };
  function Ca2(t2) {
    return function(t3, e) {
      if (typeof t3 != "object" || t3 === null)
        return false;
      const n = t3;
      for (const t4 of e)
        if (t4 in n && typeof n[t4] == "function")
          return true;
      return false;
    }(t2, ["next", "error", "complete"]);
  }
  var ka2 = class extends Ta {
    constructor(t2, e) {
      super(t2, e), this.type = "firestore", this._queue = new Da(), this._persistenceKey = "name" in t2 ? t2.name : "[DEFAULT]";
    }
    _terminate() {
      return this._firestoreClient || Ma2(this), this._firestoreClient.terminate();
    }
  };
  function Oa(e = getApp()) {
    return _getProvider(e, "firestore").getImmediate();
  }
  function Fa2(t2) {
    return t2._firestoreClient || Ma2(t2), t2._firestoreClient.verifyNotTerminated(), t2._firestoreClient;
  }
  function Ma2(t2) {
    var e;
    const n = t2._freezeSettings(), s = function(t3, e2, n2, s2) {
      return new ua2(t3, e2, n2, s2.host, s2.ssl, s2.experimentalForceLongPolling, s2.experimentalAutoDetectLongPolling, s2.useFetchStreams);
    }(t2._databaseId, ((e = t2._app) === null || e === void 0 ? void 0 : e.options.appId) || "", t2._persistenceKey, n);
    t2._firestoreClient = new Kc2(t2._credentials, t2._queue, s);
  }
  var Ja2 = class {
    constructor(...t2) {
      for (let e = 0; e < t2.length; ++e)
        if (t2[e].length === 0)
          throw new j(K2.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
      this._internalPath = new ft(t2);
    }
    isEqual(t2) {
      return this._internalPath.isEqual(t2._internalPath);
    }
  };
  var Xa2 = class {
    constructor(t2) {
      this._byteString = t2;
    }
    static fromBase64String(t2) {
      try {
        return new Xa2(_t.fromBase64String(t2));
      } catch (t3) {
        throw new j(K2.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t3);
      }
    }
    static fromUint8Array(t2) {
      return new Xa2(_t.fromUint8Array(t2));
    }
    toBase64() {
      return this._byteString.toBase64();
    }
    toUint8Array() {
      return this._byteString.toUint8Array();
    }
    toString() {
      return "Bytes(base64: " + this.toBase64() + ")";
    }
    isEqual(t2) {
      return this._byteString.isEqual(t2._byteString);
    }
  };
  var tu = class {
    constructor(t2, e) {
      if (!isFinite(t2) || t2 < -90 || t2 > 90)
        throw new j(K2.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t2);
      if (!isFinite(e) || e < -180 || e > 180)
        throw new j(K2.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
      this._lat = t2, this._long = e;
    }
    get latitude() {
      return this._lat;
    }
    get longitude() {
      return this._long;
    }
    isEqual(t2) {
      return this._lat === t2._lat && this._long === t2._long;
    }
    toJSON() {
      return {
        latitude: this._lat,
        longitude: this._long
      };
    }
    _compareTo(t2) {
      return et(this._lat, t2._lat) || et(this._long, t2._long);
    }
  };
  var Au = new RegExp("[~\\*/\\[\\]]");
  function Ru(t2, e, n) {
    if (e.search(Au) >= 0)
      throw bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`, t2, false, void 0, n);
    try {
      return new Ja2(...e.split("."))._internalPath;
    } catch (s) {
      throw bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t2, false, void 0, n);
    }
  }
  function bu(t2, e, n, s, i) {
    const r = s && !s.isEmpty(), o = i !== void 0;
    let c = `Function ${e}() called with invalid data`;
    n && (c += " (via `toFirestore()`)"), c += ". ";
    let a = "";
    return (r || o) && (a += " (found", r && (a += ` in field ${s}`), o && (a += ` in document ${i}`), a += ")"), new j(K2.INVALID_ARGUMENT, c + t2 + a);
  }
  var vu = class {
    constructor(t2, e, n, s, i) {
      this._firestore = t2, this._userDataWriter = e, this._key = n, this._document = s, this._converter = i;
    }
    get id() {
      return this._key.path.lastSegment();
    }
    get ref() {
      return new Ia2(this._firestore, this._converter, this._key);
    }
    exists() {
      return this._document !== null;
    }
    data() {
      if (this._document) {
        if (this._converter) {
          const t2 = new Vu(this._firestore, this._userDataWriter, this._key, this._document, null);
          return this._converter.fromFirestore(t2);
        }
        return this._userDataWriter.convertValue(this._document.data.value);
      }
    }
    get(t2) {
      if (this._document) {
        const e = this._document.data.field(Su("DocumentSnapshot.get", t2));
        if (e !== null)
          return this._userDataWriter.convertValue(e);
      }
    }
  };
  var Vu = class extends vu {
    data() {
      return super.data();
    }
  };
  function Su(t2, e) {
    return typeof e == "string" ? Ru(t2, e) : e instanceof Ja2 ? e._internalPath : e._delegate._internalPath;
  }
  var Du = class {
    constructor(t2, e) {
      this.hasPendingWrites = t2, this.fromCache = e;
    }
    isEqual(t2) {
      return this.hasPendingWrites === t2.hasPendingWrites && this.fromCache === t2.fromCache;
    }
  };
  var Cu = class extends vu {
    constructor(t2, e, n, s, i, r) {
      super(t2, e, n, s, r), this._firestore = t2, this._firestoreImpl = t2, this.metadata = i;
    }
    exists() {
      return super.exists();
    }
    data(t2 = {}) {
      if (this._document) {
        if (this._converter) {
          const e = new Nu(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
          return this._converter.fromFirestore(e, t2);
        }
        return this._userDataWriter.convertValue(this._document.data.value, t2.serverTimestamps);
      }
    }
    get(t2, e = {}) {
      if (this._document) {
        const n = this._document.data.field(Su("DocumentSnapshot.get", t2));
        if (n !== null)
          return this._userDataWriter.convertValue(n, e.serverTimestamps);
      }
    }
  };
  var Nu = class extends Cu {
    data(t2 = {}) {
      return super.data(t2);
    }
  };
  var xu = class {
    constructor(t2, e, n, s) {
      this._firestore = t2, this._userDataWriter = e, this._snapshot = s, this.metadata = new Du(s.hasPendingWrites, s.fromCache), this.query = n;
    }
    get docs() {
      const t2 = [];
      return this.forEach((e) => t2.push(e)), t2;
    }
    get size() {
      return this._snapshot.docs.size;
    }
    get empty() {
      return this.size === 0;
    }
    forEach(t2, e) {
      this._snapshot.docs.forEach((n) => {
        t2.call(e, new Nu(this._firestore, this._userDataWriter, n.key, n, new Du(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
      });
    }
    docChanges(t2 = {}) {
      const e = !!t2.includeMetadataChanges;
      if (e && this._snapshot.excludesMetadataChanges)
        throw new j(K2.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
      return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = function(t3, e2) {
        if (t3._snapshot.oldDocs.isEmpty()) {
          let e3 = 0;
          return t3._snapshot.docChanges.map((n) => ({
            type: "added",
            doc: new Nu(t3._firestore, t3._userDataWriter, n.doc.key, n.doc, new Du(t3._snapshot.mutatedKeys.has(n.doc.key), t3._snapshot.fromCache), t3.query.converter),
            oldIndex: -1,
            newIndex: e3++
          }));
        }
        {
          let n = t3._snapshot.oldDocs;
          return t3._snapshot.docChanges.filter((t4) => e2 || t4.type !== 3).map((e3) => {
            const s = new Nu(t3._firestore, t3._userDataWriter, e3.doc.key, e3.doc, new Du(t3._snapshot.mutatedKeys.has(e3.doc.key), t3._snapshot.fromCache), t3.query.converter);
            let i = -1, r = -1;
            return e3.type !== 0 && (i = n.indexOf(e3.doc.key), n = n.delete(e3.doc.key)), e3.type !== 1 && (n = n.add(e3.doc), r = n.indexOf(e3.doc.key)), {
              type: ku(e3.type),
              doc: s,
              oldIndex: i,
              newIndex: r
            };
          });
        }
      }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
    }
  };
  function ku(t2) {
    switch (t2) {
      case 0:
        return "added";
      case 2:
      case 3:
        return "modified";
      case 1:
        return "removed";
      default:
        return L2();
    }
  }
  function Ou(t2) {
    if (me(t2) && t2.explicitOrderBy.length === 0)
      throw new j(K2.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
  }
  var Fu = class {
  };
  function Mu(t2, ...e) {
    for (const n of e)
      t2 = n._apply(t2);
    return t2;
  }
  var Uu = class extends Fu {
    constructor(t2, e) {
      super(), this.Gc = t2, this.Jc = e, this.type = "orderBy";
    }
    _apply(t2) {
      const e = function(t3, e2, n) {
        if (t3.startAt !== null)
          throw new j(K2.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
        if (t3.endAt !== null)
          throw new j(K2.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
        const s = new ae(e2, n);
        return function(t4, e3) {
          if (ge(t4) === null) {
            const n2 = ye(t4);
            n2 !== null && eh(t4, n2, e3.field);
          }
        }(t3, s), s;
      }(t2._query, this.Gc, this.Jc);
      return new Aa2(t2.firestore, t2.converter, function(t3, e2) {
        const n = t3.explicitOrderBy.concat([e2]);
        return new fe(t3.path, t3.collectionGroup, n, t3.filters.slice(), t3.limit, t3.limitType, t3.startAt, t3.endAt);
      }(t2._query, e));
    }
  };
  function qu(t2, e = "asc") {
    const n = e, s = Su("orderBy", t2);
    return new Uu(s, n);
  }
  function eh(t2, e, n) {
    if (!n.isEqual(e))
      throw new j(K2.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
  }
  var nh = class {
    convertValue(t2, e = "none") {
      switch (vt(t2)) {
        case 0:
          return null;
        case 1:
          return t2.booleanValue;
        case 2:
          return yt(t2.integerValue || t2.doubleValue);
        case 3:
          return this.convertTimestamp(t2.timestampValue);
        case 4:
          return this.convertServerTimestamp(t2, e);
        case 5:
          return t2.stringValue;
        case 6:
          return this.convertBytes(pt(t2.bytesValue));
        case 7:
          return this.convertReference(t2.referenceValue);
        case 8:
          return this.convertGeoPoint(t2.geoPointValue);
        case 9:
          return this.convertArray(t2.arrayValue, e);
        case 10:
          return this.convertObject(t2.mapValue, e);
        default:
          throw L2();
      }
    }
    convertObject(t2, e) {
      const n = {};
      return ct(t2.fields, (t3, s) => {
        n[t3] = this.convertValue(s, e);
      }), n;
    }
    convertGeoPoint(t2) {
      return new tu(yt(t2.latitude), yt(t2.longitude));
    }
    convertArray(t2, e) {
      return (t2.values || []).map((t3) => this.convertValue(t3, e));
    }
    convertServerTimestamp(t2, e) {
      switch (e) {
        case "previous":
          const n = Et(t2);
          return n == null ? null : this.convertValue(n, e);
        case "estimate":
          return this.convertTimestamp(It(t2));
        default:
          return null;
      }
    }
    convertTimestamp(t2) {
      const e = gt(t2);
      return new it(e.seconds, e.nanos);
    }
    convertDocumentKey(t2, e) {
      const n = ht.fromString(t2);
      B2(Ts(n));
      const s = new ha2(n.get(1), n.get(3)), i = new Pt(n.popFirst(5));
      return s.isEqual(e) || O2(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), i;
    }
  };
  var ah = class extends nh {
    constructor(t2) {
      super(), this.firestore = t2;
    }
    convertBytes(t2) {
      return new Xa2(t2);
    }
    convertReference(t2) {
      const e = this.convertDocumentKey(t2, this.firestore._databaseId);
      return new Ia2(this.firestore, null, e);
    }
  };
  function lh(t2) {
    t2 = ga(t2, Aa2);
    const e = ga(t2.firestore, ka2), n = Fa2(e), s = new ah(e);
    return Ou(t2._query), ia2(n, t2._query).then((n2) => new xu(e, s, t2, n2));
  }
  function yh(t2, ...e) {
    var n, s, i;
    t2 = getModularInstance(t2);
    let r = {
      includeMetadataChanges: false
    }, o = 0;
    typeof e[o] != "object" || Ca2(e[o]) || (r = e[o], o++);
    const c = {
      includeMetadataChanges: r.includeMetadataChanges
    };
    if (Ca2(e[o])) {
      const t3 = e[o];
      e[o] = (n = t3.next) === null || n === void 0 ? void 0 : n.bind(t3), e[o + 1] = (s = t3.error) === null || s === void 0 ? void 0 : s.bind(t3), e[o + 2] = (i = t3.complete) === null || i === void 0 ? void 0 : i.bind(t3);
    }
    let a, u, h;
    if (t2 instanceof Ia2)
      u = ga(t2.firestore, ka2), h = we(t2._key.path), a = {
        next: (n2) => {
          e[o] && e[o](Eh(u, t2, n2));
        },
        error: e[o + 1],
        complete: e[o + 2]
      };
    else {
      const n2 = ga(t2, Aa2);
      u = ga(n2.firestore, ka2), h = n2._query;
      const s2 = new ah(u);
      a = {
        next: (t3) => {
          e[o] && e[o](new xu(u, s2, n2, t3));
        },
        error: e[o + 1],
        complete: e[o + 2]
      }, Ou(t2._query);
    }
    return function(t3, e2, n2, s2) {
      const i2 = new Lc2(s2), r2 = new Qo(e2, i2, n2);
      return t3.asyncQueue.enqueueAndForget(async () => Bo(await Xc2(t3), r2)), () => {
        i2.ec(), t3.asyncQueue.enqueueAndForget(async () => Uo(await Xc2(t3), r2));
      };
    }(Fa2(u), h, c, a);
  }
  function Eh(t2, e, n) {
    const s = n.docs.get(e._key), i = new ah(t2);
    return new Cu(t2, i, e._key, s, new Du(n.hasPendingWrites, n.fromCache), e.converter);
  }
  !function(t2, e = true) {
    !function(t3) {
      C2 = t3;
    }(SDK_VERSION), _registerComponent(new Component("firestore", (t3, { options: n }) => {
      const s = t3.getProvider("app").getImmediate(), i = new ka2(s, new H2(t3.getProvider("auth-internal")));
      return n = Object.assign({
        useFetchStreams: e
      }, n), i._setSettings(n), i;
    }, "PUBLIC")), registerVersion(S2, "3.2.0", t2), registerVersion(S2, "3.2.0", "esm2017");
  }();

  // node_modules/firebase/app/dist/index.esm.js
  var name2 = "firebase";
  var version2 = "9.2.0";
  registerVersion(name2, version2, "app");

  // src/firebase.js
  var firebaseConfig = {
    apiKey: "AIzaSyDLAPjxi-dCgkixPj-pAPO_fX06aAZ9kck",
    authDomain: "crosswalk-poetics.firebaseapp.com",
    projectId: "crosswalk-poetics",
    storageBucket: "crosswalk-poetics.appspot.com",
    messagingSenderId: "715869343026",
    appId: "1:715869343026:web:fcfa0bf97dfa1feeb01b2b"
  };
  var app = initializeApp(firebaseConfig);
  var db2 = Oa();
  var fetchPoems = async () => {
    const poemsArr = [];
    const poemsRef = ba2(db2, "poems");
    const q3 = Mu(poemsRef, qu("timestamp", "asc"));
    const poemsSnapshot = await lh(q3);
    poemsSnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data);
      poemsArr.push({
        poem: data.poem,
        timestamp: data.timestamp.toDate()
      });
    });
    return poemsArr;
  };

  // src/poems.js
  if (window.location.pathname === "/poems/" || window.location.pathname === "/poems") {
    loadPoems();
  }
  async function loadPoems() {
    const poemsArr = await fetchPoems();
    console.log("POEMS", poemsArr);
    const allPoems = document.querySelector(".allPoems");
    poemsArr.forEach((poem) => {
      const poemContainerEl = document.createElement("div");
      poemContainerEl.classList.add("poemContainer");
      console.log(poem.timestamp);
      poemContainerEl.insertAdjacentHTML("beforeend", `
      <div class="time">${poem.timestamp.toLocaleTimeString()}, ${poem.timestamp.toDateString()}</div>
      <div class="break" />
    `);
      poem.poem.forEach((piece, index) => {
        if (piece == "break") {
          poemContainerEl.insertAdjacentHTML("beforeend", `
          <div class="break" />
        `);
        } else {
          poemContainerEl.insertAdjacentHTML("beforeend", `
          <img src="../assets/${piece}.png" />   
        `);
        }
      });
      allPoems.insertAdjacentElement("beforeend", poemContainerEl);
    });
    const liveRef = ba2(db2, "live");
    let newPoemPiece;
    const liveEl = document.querySelector(".live");
    const unsubscribe = yh(liveRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          newPoemPiece = change.doc.data();
          console.log("added: ", newPoemPiece);
          if (newPoemPiece.timestamp) {
          }
          if (newPoemPiece.image) {
            liveEl.insertAdjacentHTML("beforeend", `
            <img src="../assets/${newPoemPiece.image}.png" />  
          `);
          } else {
            liveEl.insertAdjacentHTML("beforeend", `
            <div class="break" />
          `);
          }
        }
      });
    });
  }

  // src/main.js
  if (window.location.pathname === "/")
    initHomePage();
  function initHomePage() {
    const container = document.getElementById("container");
    for (let i = 1; i <= 8; i++) {
      const img = new Image();
      img.src = `./assets/${i}.png`;
      container.insertAdjacentHTML("beforeend", `
      <div class="imageContainer">
        <img src="./assets/${i}.png" />    
        <div id="image-${i}" class="colorCover" />
      </div>
    `);
    }
    const NUM_OF_IMAGES = 8;
    let imageIndexArr = Array.from({ length: NUM_OF_IMAGES }, (_, i) => i + 1);
    imageIndexArr = randomiseArray(imageIndexArr);
    let curIndex = 0;
    let prevSelectedIndex;
    const interval = setInterval(() => {
      if (curIndex >= NUM_OF_IMAGES) {
        imageIndexArr = randomiseArray(imageIndexArr);
        curIndex = 0;
        clearInterval(interval);
      }
      console.log(curIndex, prevSelectedIndex);
      console.log(imageIndexArr);
      if (prevSelectedIndex) {
        console.log("prev el", document.getElementById(`image-${prevSelectedIndex}`));
        document.getElementById(`image-${prevSelectedIndex}`).classList.remove("selected");
      }
      const selectedImage = document.getElementById(`image-${imageIndexArr[curIndex]}`);
      selectedImage.classList.add("selected");
      prevSelectedIndex = imageIndexArr[curIndex];
      curIndex++;
    }, 1e3);
  }
  function randomiseArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j2 = Math.floor(Math.random() * (i + 1));
      [array[i], array[j2]] = [array[j2], array[i]];
    }
    return array;
  }
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=bundle.js.map
