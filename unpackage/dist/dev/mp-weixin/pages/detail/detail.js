(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ 46:
/*!************************************************************************************************************!*\
  !*** C:/Users/Reuspect/Documents/HBuilderProjects/neteaseMusic/main.js?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/detail/detail.vue */ 47));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 47:
/*!*****************************************************************************************!*\
  !*** C:/Users/Reuspect/Documents/HBuilderProjects/neteaseMusic/pages/detail/detail.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_07e85b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=07e85b88&scoped=true& */ 48);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 50);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_id_07e85b88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&id=07e85b88&scoped=true&lang=css& */ 52);
/* harmony import */ var _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_07e85b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_07e85b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "07e85b88",
  null,
  false,
  _detail_vue_vue_type_template_id_07e85b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "Documents/HBuilderProjects/neteaseMusic/pages/detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/*!************************************************************************************************************************************!*\
  !*** C:/Users/Reuspect/Documents/HBuilderProjects/neteaseMusic/pages/detail/detail.vue?vue&type=template&id=07e85b88&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_07e85b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=07e85b88&scoped=true& */ 49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_07e85b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_07e85b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_07e85b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_07e85b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 49:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Reuspect/Documents/HBuilderProjects/neteaseMusic/pages/detail/detail.vue?vue&type=template&id=07e85b88&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  musichead: function() {
    return Promise.all(/*! import() | components/musichead/musichead */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/musichead/musichead")]).then(__webpack_require__.bind(null, /*! @/components/musichead/musichead.vue */ 25))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.songComment, function(item, index) {
    var f0 = _vm._f("formatTime")(item.time)

    var f1 = _vm._f("formatCount")(item.likedCount)

    return {
      $orig: _vm.__get_orig(item),
      f0: f0,
      f1: f1
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 50:
/*!******************************************************************************************************************!*\
  !*** C:/Users/Reuspect/Documents/HBuilderProjects/neteaseMusic/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 51);
/* harmony import */ var _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 51:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Reuspect/Documents/HBuilderProjects/neteaseMusic/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





































































































__webpack_require__(/*! ../../common/iconfont.css */ 21);
var _api = __webpack_require__(/*! ../../common/api.js */ 22);var musichead = function musichead() {Promise.all(/*! require.ensure | components/musichead/musichead */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/musichead/musichead")]).then((function () {return resolve(__webpack_require__(/*! ../../components/musichead/musichead.vue */ 25));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
{
  data: function data() {
    return {
      songDetail: {
        al: {
          picUrl: '' } },


      songSimi: [],
      songComment: [],
      songLyric: [],
      lyricIndex: 0,
      iconplay: false,
      isPlayRotate: false,
      isLoading: true };

  },
  components: {
    musichead: musichead },

  onLoad: function onLoad(options) {
    uni.showLoading({
      title: '努力加载ing' });

    // console.log(options.songId)
    this.getMusic(options.songId);
  },
  onUnload: function onUnload() {
    this.cancelLyricIndex();



  },
  onHide: function onHide() {
    this.cancelLyricIndex();



  },
  methods: {
    switchPlayPause: function switchPlayPause() {
      if (this.bgAudioManager.paused) {
        this.bgAudioManager.play();
      } else
      {
        this.bgAudioManager.pause();
      }
      // this.iconplay = !this.iconplay;
      // this.isPlayRotate = !this.isPlayRotate;
      // console.log(this.iconplay, this.isPlayRotate)
    },

    listenLyricIndex: function listenLyricIndex() {var _this = this;
      clearInterval(this.timer);
      this.timer = setInterval(function () {

        for (var i = 0; i < _this.songLyric.length; i++) {
          if (_this.bgAudioManager.currentTime > _this.songLyric[_this.songLyric.length - 1].time) {
            _this.lyricIndex = _this.songLyric.length - 1;
            break;
          }

          if (_this.bgAudioManager.currentTime > _this.songLyric[i].time &&
          _this.bgAudioManager.currentTime < _this.songLyric[i + 1].time) {
            _this.lyricIndex = i;
            // break;
            // console.log(this.lyricIndex, '内部')
          }
        }

        // console.log(this.lyricIndex, typeof(this.lyricIndex));
      }, 400);
    },

    cancelLyricIndex: function cancelLyricIndex() {
      clearInterval(this.timer);
    },

    handleToSimi: function handleToSimi(songId) {
      this.getMusic(songId);
    },

    getMusic: function getMusic(songId) {var _this2 = this;
      // 用于传入store记录本首歌的id，再根据歌单列表判断下一首歌的id
      this.$store.commit('NEXT_ID', songId);
      uni.showLoading({
        title: '努力加载ing' });

      this.isLoading = true;


      Promise.all([(0, _api.songDetail)(songId), (0, _api.songSimi)(songId),
      (0, _api.songComment)(songId), (0, _api.songLyric)(songId), (0, _api.songUrl)(songId)]).then(function (res) {
        // console.log(res)
        if (res[0][1].data.code == '200') {
          _this2.songDetail = res[0][1].data.songs[0];
          // console.log(this.songDetail)
        }
        if (res[1][1].data.code == '200') {
          _this2.songSimi = res[1][1].data.songs;
          // console.log(this.songSimi)
        }
        if (res[2][1].data.code == '200') {
          _this2.songComment = res[2][1].data.hotComments;
          // console.log(this.songComment)
        }
        if (res[3][1].data.code == '200') {
          var lyric = res[3][1].data.lrc.lyric;
          console.log(lyric);
          var re = /\[([^\]]+)\]([^\[]+)/g;
          // 小括号是一个子段 [^\]]+就是匹配任意数量的，除了]的任何字符
          console.log(lyric.match(re));
          var result = [];

          var formatTimeToSec = function formatTimeToSec(value) {
            var arr = value.split(':');
            // console.log(arr)
            return (Number(arr[0] * 60) + Number(arr[1])).toFixed(1);
          };

          lyric.replace(re, function ($0, $1, $2) {
            result.push({
              "time": formatTimeToSec($1),
              "lyric": $2 });

          });
          // 解析出来了数组形式的歌词 每项包含time和lyric time要解析成真正的秒数
          console.log(result);
          _this2.songLyric = result;

        }
        if (res[4][1].data.code == '200') {
          // 两个端的api名称不同 但是可以赋值给相同的变量 避免重复写

          _this2.bgAudioManager = uni.getBackgroundAudioManager();



          // 为防止连续切歌时 上一首播放着导致iconplay isplayrotate为true









          _this2.bgAudioManager.title = _this2.songDetail.name;
          _this2.bgAudioManager.src = res[4][1].data.data[0].url || '';
          _this2.listenLyricIndex();
          // 歌曲播放时显示暂停键 开始旋转 歌词开始计数第多少行
          _this2.bgAudioManager.onPlay(function () {
            _this2.iconplay = true;
            _this2.isPlayRotate = true;
            // console.log(this.iconplay, this.isPlayRotate)
            _this2.listenLyricIndex();
            console.log(_this2.$store.state.nextId);
          });

          _this2.bgAudioManager.onPause(function () {
            _this2.iconplay = false;
            _this2.isPlayRotate = false;
            // console.log(this.iconplay, this.isPlayRotate)
            _this2.cancelLyricIndex();
          });
          _this2.bgAudioManager.onEnded(function () {
            _this2.getMusic(_this2.$store.state.nextId);
          });
        }
        uni.hideLoading();
        _this2.isLoading = false;
      });
    },
    formatTimeToSec: function formatTimeToSec(value) {
      var arr = value.split(':');
      console.log(arr);
      return (Number(arr[0] * 60) + Number(arr[1])).toFixed(1);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 52:
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/Reuspect/Documents/HBuilderProjects/neteaseMusic/pages/detail/detail.vue?vue&type=style&index=0&id=07e85b88&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_2_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_07e85b88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Desktop/forwork/前端路径/前端项目/v-netease/2.6.9uni-app_hbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&id=07e85b88&scoped=true&lang=css& */ 53);
/* harmony import */ var _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_2_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_07e85b88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_2_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_07e85b88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_2_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_07e85b88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_2_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_07e85b88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_2_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_forwork_v_netease_2_6_9uni_app_hbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_07e85b88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Reuspect/Documents/HBuilderProjects/neteaseMusic/pages/detail/detail.vue?vue&type=style&index=0&id=07e85b88&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[46,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map