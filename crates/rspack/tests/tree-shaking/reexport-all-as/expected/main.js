(self['webpackChunkwebpack'] = self['webpackChunkwebpack'] || []).push([["main"], {
"./package/autogen/a.js": function (module, exports, __webpack_require__) {
'use strict';
__webpack_require__.r(exports);
__webpack_require__.d(exports, {'a': function() { return a; }});
 function a() {}
},
"./package/autogen/index.js": function (module, exports, __webpack_require__) {
'use strict';
__webpack_require__.r(exports);
__webpack_require__.d(exports, {'a': function() { return _a__WEBPACK_IMPORTED_MODULE_0_; }});
/* harmony import */var _a__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* ./a */"./package/autogen/a.js");



},
"./package/src/index.js": function (module, exports, __webpack_require__) {
'use strict';
__webpack_require__.r(exports);
/* harmony import */var _autogen_index__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* ../autogen/index */"./package/autogen/index.js");
__webpack_require__.es(_autogen_index__WEBPACK_IMPORTED_MODULE_0_, exports);

},
"./src/index.js": function (module, exports, __webpack_require__) {
'use strict';
__webpack_require__.r(exports);
/* harmony import */var _package_src_index_js__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* ../package/src/index.js */"./package/src/index.js");

_package_src_index_js__WEBPACK_IMPORTED_MODULE_0_["a"].a;
},

},function(__webpack_require__) {
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId) }
var __webpack_exports__ = (__webpack_exec__("./src/index.js"));

}
]);