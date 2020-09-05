(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _force_sync_force_sync_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./force-sync/force-sync.component */ "./src/app/force-sync/force-sync.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _selecao_produtos_selecao_produtos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selecao-produtos/selecao-produtos.component */ "./src/app/selecao-produtos/selecao-produtos.component.ts");







const routes = [
    {
        path: 'selecao',
        component: _selecao_produtos_selecao_produtos_component__WEBPACK_IMPORTED_MODULE_4__["SelecaoProdutosComponent"],
    },
    {
        path: 'sync',
        component: _force_sync_force_sync_component__WEBPACK_IMPORTED_MODULE_2__["ForceSyncComponent"],
    },
    {
        path: 'auth',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    { path: '', redirectTo: 'selecao', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AppComponent {
    constructor(api) {
        this.api = api;
        this.title = 'integrador-promocao-diaria';
    }
    ngAfterContentInit() {
        this.api.getVersion().subscribe((resp) => {
            this.version = resp.versao;
        });
    }
    logout() {
        this.api.post('/logout').subscribe((resp) => {
            window.location.replace(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + '/login');
        }, (err) => window.location.replace(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + '/login'));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [["dir", "rtl", 1, "p-col-12", "ui-rtl"], ["pButton", "", "icon", "pi pi-power-off", "label", "Sair", 1, "p-col-1", 3, "click"], [1, "p-col-3"], ["id", "message"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-messages", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("v", ctx.version, "");
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Dir"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"], primeng_messages__WEBPACK_IMPORTED_MODULE_5__["Messages"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["#message[_ngcontent-%COMP%] {\n  margin: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWxpYW5va2Fzc253ZS9EZXYvcGVzc29hbC9pbnRlZ3JhY2FvLXByb21vLWZyb250L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lc3NhZ2Uge1xuICAgIG1hcmdpbjogMTBweCAxMHB4O1xufSIsIiNtZXNzYWdlIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-message.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-splitbutton.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/togglebutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-togglebutton.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-treetable.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _force_sync_force_sync_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./force-sync/force-sync.component */ "./src/app/force-sync/force-sync.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pipes_currency_custom_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/currency-custom.pipe */ "./src/app/pipes/currency-custom.pipe.ts");
/* harmony import */ var _selecao_produtos_selecao_produtos_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./selecao-produtos/selecao-produtos.component */ "./src/app/selecao-produtos/selecao-produtos.component.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tooltip.js");
































Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
        Location,
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["HashLocationStrategy"] },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"], useValue: 'pt-BR' },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CURRENCY_CODE"], useValue: 'BRL' },
    ], imports: [[
            primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutoCompleteModule"],
            primeng_treetable__WEBPACK_IMPORTED_MODULE_22__["TreeTableModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_13__["DataViewModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_17__["PanelModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__["CheckboxModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            primeng_togglebutton__WEBPACK_IMPORTED_MODULE_21__["ToggleButtonModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_15__["MessageModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_20__["TabViewModule"],
            primeng_splitbutton__WEBPACK_IMPORTED_MODULE_18__["SplitButtonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__["DropdownModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_30__["TooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
        _selecao_produtos_selecao_produtos_component__WEBPACK_IMPORTED_MODULE_28__["SelecaoProdutosComponent"],
        _force_sync_force_sync_component__WEBPACK_IMPORTED_MODULE_25__["ForceSyncComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
        _pipes_currency_custom_pipe__WEBPACK_IMPORTED_MODULE_27__["CurrencyCustomPipe"]], imports: [primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutoCompleteModule"],
        primeng_treetable__WEBPACK_IMPORTED_MODULE_22__["TreeTableModule"],
        primeng_dataview__WEBPACK_IMPORTED_MODULE_13__["DataViewModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_17__["PanelModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__["CheckboxModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_21__["ToggleButtonModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_15__["MessageModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_20__["TabViewModule"],
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_18__["SplitButtonModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__["DropdownModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_30__["TooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
                    _selecao_produtos_selecao_produtos_component__WEBPACK_IMPORTED_MODULE_28__["SelecaoProdutosComponent"],
                    _force_sync_force_sync_component__WEBPACK_IMPORTED_MODULE_25__["ForceSyncComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
                    _pipes_currency_custom_pipe__WEBPACK_IMPORTED_MODULE_27__["CurrencyCustomPipe"],
                ],
                imports: [
                    primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
                    primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
                    primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutoCompleteModule"],
                    primeng_treetable__WEBPACK_IMPORTED_MODULE_22__["TreeTableModule"],
                    primeng_dataview__WEBPACK_IMPORTED_MODULE_13__["DataViewModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_17__["PanelModule"],
                    primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__["CheckboxModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    primeng_togglebutton__WEBPACK_IMPORTED_MODULE_21__["ToggleButtonModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"],
                    primeng_message__WEBPACK_IMPORTED_MODULE_15__["MessageModule"],
                    primeng_tabview__WEBPACK_IMPORTED_MODULE_20__["TabViewModule"],
                    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_18__["SplitButtonModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__["DropdownModule"],
                    primeng_tooltip__WEBPACK_IMPORTED_MODULE_30__["TooltipModule"]
                ],
                providers: [
                    primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
                    Location,
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["HashLocationStrategy"] },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"], useValue: 'pt-BR' },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CURRENCY_CODE"], useValue: 'BRL' },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/force-sync/force-sync.component.ts":
/*!****************************************************!*\
  !*** ./src/app/force-sync/force-sync.component.ts ***!
  \****************************************************/
/*! exports provided: ForceSyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceSyncComponent", function() { return ForceSyncComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ForceSyncComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForceSyncComponent.ɵfac = function ForceSyncComponent_Factory(t) { return new (t || ForceSyncComponent)(); };
ForceSyncComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForceSyncComponent, selectors: [["app-force-sync"]], decls: 2, vars: 0, template: function ForceSyncComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "force-sync works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmNlLXN5bmMvZm9yY2Utc3luYy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForceSyncComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-force-sync',
                templateUrl: './force-sync.component.html',
                styleUrls: ['./force-sync.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipes/currency-custom.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/currency-custom.pipe.ts ***!
  \***********************************************/
/*! exports provided: CurrencyCustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyCustomPipe", function() { return CurrencyCustomPipe; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class CurrencyCustomPipe {
    constructor(locale) {
        this.locale = locale;
    }
    transform(value) {
        return (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["getLocaleCurrencySymbol"])(this.locale) +
            new Intl.NumberFormat(this.locale, {
                style: 'decimal',
                minimumFractionDigits: 2,
            }).format(value));
    }
}
CurrencyCustomPipe.ɵfac = function CurrencyCustomPipe_Factory(t) { return new (t || CurrencyCustomPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])); };
CurrencyCustomPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "currencyCustom", type: CurrencyCustomPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CurrencyCustomPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'currencyCustom',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/selecao-produtos/selecao-produtos.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/selecao-produtos/selecao-produtos.component.ts ***!
  \****************************************************************/
/*! exports provided: SelecaoProdutosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecaoProdutosComponent", function() { return SelecaoProdutosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_Calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Calendar */ "./src/app/utils/Calendar.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/togglebutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-togglebutton.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tooltip.js");
/* harmony import */ var _pipes_currency_custom_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/currency-custom.pipe */ "./src/app/pipes/currency-custom.pipe.ts");

















const _c0 = ["inputAutoComplete"];
const _c1 = ["produtosEnviadosTabPanel"];
function SelecaoProdutosComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-dropdown", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelecaoProdutosComponent_ng_template_24_Template_p_dropdown_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const produto_r4 = ctx.$implicit; return produto_r4.setor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currencyCustom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-toggleButton", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelecaoProdutosComponent_ng_template_24_Template_p_toggleButton_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const produto_r4 = ctx.$implicit; return produto_r4.selecionado = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const produto_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", produto_r4.nome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", produto_r4.qtAtual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.setores)("ngModel", produto_r4.setor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, produto_r4.valor), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", produto_r4.selecionado);
} }
function SelecaoProdutosComponent_ng_template_49_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const produto_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" de ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, produto_r8.dtInicio, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" h\u00E0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, produto_r8.dtFim, "dd/MM/yyyy"), " ");
} }
function SelecaoProdutosComponent_ng_template_49_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Indeterminado. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelecaoProdutosComponent_ng_template_49_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} if (rf & 2) {
    const produto_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pTooltip", produto_r8.log);
} }
function SelecaoProdutosComponent_ng_template_49_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function SelecaoProdutosComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currencyCustom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SelecaoProdutosComponent_ng_template_49_div_9_Template, 6, 8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SelecaoProdutosComponent_ng_template_49_ng_template_10_Template, 2, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SelecaoProdutosComponent_ng_template_49_i_15_Template, 1, 1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SelecaoProdutosComponent_ng_template_49_ng_template_16_Template, 1, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelecaoProdutosComponent_ng_template_49_Template_i_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const produto_r8 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.syncProduto(produto_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const produto_r8 = ctx.$implicit;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", produto_r8.nome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", produto_r8.qtAtual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, produto_r8.valor), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", produto_r8.dtInicio && produto_r8.dtFim)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", produto_r8.ativo ? "Sim" : "N\u00E3o", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", produto_r8.log)("ngIfElse", _r13);
} }
class SelecaoProdutosComponent {
    constructor(api, messageService) {
        this.api = api;
        this.messageService = messageService;
        this.produtos = [];
        this.produtosPromocao = [];
        this.produtosPromocaoFilter = [];
        this.totalPages = 0;
        this.totalRecords = 0;
        this.rowsPerPage = 10;
        this.pt = _utils_Calendar__WEBPACK_IMPORTED_MODULE_1__["Calendar"].PT_BR;
        this.config = {};
        this.setores = [];
    }
    ngOnInit() {
        this.api.get('/config').subscribe((resp) => {
            this.config = resp;
        });
        this.api.get('/setores').subscribe(resp => {
            this.setores = resp.map(r => {
                return { value: r, label: r };
            });
        });
    }
    salvarConfigTempoScan() {
        this.api.post('/config', this.config).subscribe((resp) => {
            this.config = resp;
            this.messageService.add({
                severity: 'success',
                summary: 'Mensagem',
                detail: 'Configuração salva com sucesso!',
                life: 3000,
            });
        }, (err) => {
            this.messageService.add({
                severity: 'error',
                summary: 'Mensagem',
                detail: `Houve um erro ao salvar a configuração!`,
                life: 3000,
            });
        }, () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
    syncProduto(idProduto) {
        this.api.post(`/produtos/sincronizar/${idProduto}`).subscribe((success) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Mensagem',
                detail: 'Produto enviado para sincronização!',
                life: 3000,
            });
        }, (err) => {
            this.messageService.add({
                severity: 'error',
                summary: 'Mensagem',
                detail: `Houve um erro ao tentar sincronizar o produto!`,
                life: 3000,
            });
        }, () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    enviarProdutos() {
        let produtos = this.produtos.filter((p) => p.selecionado);
        if (!produtos.length) {
            return this.messageService.add({
                severity: 'warn',
                summary: 'Mensagem',
                detail: `Selecione ao menos um produto para ser enviado.`,
            });
        }
        this.api.post('/produtos', produtos).subscribe((success) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Mensagem',
                detail: 'Produtos salvos com sucesso!',
                life: 3000,
            });
        }, (err) => {
            this.messageService.add({
                severity: 'error',
                summary: 'Mensagem',
                detail: `Houve um erro ao salvar os produtos!`,
                life: 3000,
            });
        }, () => {
            this.resetListaProdutosBuscados();
            this.produtosEnviadosTabPanel.first = 0;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    resetListaProdutosBuscados() {
        this.produtos = [];
        this.produtosPromocao = [];
        this.produtosPromocaoFilter = [];
    }
    buscarProdutos(e) {
        let loader = document.querySelector('.ui-autocomplete i');
        if (loader)
            loader.style.display = 'block';
        this.api.get(`/produtos?query=${e.query}`).subscribe((resp) => {
            this.produtos = resp;
            if (!loader) {
                loader = document.querySelector('.ui-autocomplete i');
            }
            loader.style.display = 'none';
        });
    }
    buscarProdutosPromocaoOnChangeTab(event) {
        this.inputAutoComplete.inputEL.nativeElement.value = '';
        if (event.index === 1) {
            this.buscarProdutosPromocao(0);
        }
    }
    buscarProdutosPromocaoPaginator(event) {
        this.buscarProdutosPromocao(this.findPage(event.first));
    }
    buscarProdutosPromocao(page) {
        if (page >= 0) {
            this.api.get(`/produtos/promocoes?page=${page}&rows=${this.rowsPerPage}`).subscribe((resp) => {
                this.totalPages = resp.totalPages;
                this.totalRecords = resp.totalElements;
                this.produtosPromocao = resp.content;
                this.produtosPromocaoFilter = resp.content;
            });
        }
    }
    findPage(firstIndexPage) {
        const indicePages = [];
        for (let index = 0; index < this.totalPages; index++) {
            if (index === 0) {
                indicePages.push(0);
                continue;
            }
            indicePages.push(index * this.rowsPerPage);
        }
        return indicePages.indexOf(firstIndexPage);
    }
    filtroProdutosPromocao(e) {
        const query = e.query.toUpperCase();
        if (query) {
            this.produtosPromocaoFilter = this.produtosPromocao.filter((produto) => produto.nome.toUpperCase().indexOf(query) > -1);
        }
        else {
            this.produtosPromocaoFilter = this.produtosPromocao;
        }
    }
    restoreProdutosPromocao() {
        if (this.inputAutoComplete.inputEL.nativeElement.value.trim() === '') {
            this.produtosPromocaoFilter = [...this.produtosPromocao];
        }
    }
}
SelecaoProdutosComponent.ɵfac = function SelecaoProdutosComponent_Factory(t) { return new (t || SelecaoProdutosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); };
SelecaoProdutosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelecaoProdutosComponent, selectors: [["app-selecao-produtos"]], viewQuery: function SelecaoProdutosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputAutoComplete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.produtosEnviadosTabPanel = _t.first);
    } }, decls: 50, vars: 14, consts: [[1, "p-gutter", "p-grid", "p-align-baseline"], [1, "p-col-2", "ui-float-label"], ["id", "float-input", "required", "", "type", "text", "size", "30", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "float-input"], ["type", "button", "label", "Salvar", 1, "p-col-1", 3, "click"], [3, "onChange"], ["header", "Sele\u00E7\u00E3o de Produtos"], [1, "content"], [1, "p-col-8", "input"], ["delay", "400", "minLength", "3", "field", "nome", "placeholder", "Busque produtos para enviar", 3, "size", "completeMethod"], [1, "p-col-12"], [3, "paginator", "rows", "value"], [1, "p-grid"], [1, "p-col-3", "text-center"], [1, "p-col-2", "text-center"], [1, "p-col-1", "text-center"], ["pTemplate", "listItem"], ["pButton", "", "label", "Enviar", 3, "disabled", "click"], ["header", "Produtos Enviados"], [1, "content", "p-nogutter"], ["delay", "200", "minLength", "1", "field", "descricao", "placeholder", "Busque um produto", 3, "suggestions", "size", "completeMethod", "onBlur"], ["inputAutoComplete", ""], ["paginatorPosition", "both", 3, "lazy", "totalRecords", "pageLinks", "paginator", "rows", "value", "onLazyLoad"], ["produtosEnviadosTabPanel", ""], [1, "p-grid", "p-justify-center"], [1, "p-col-12", "p-nogutter"], [1, "p-grid", "p-justify-around", "p-align-baseline"], ["placeholder", "Selecione um Setor", 1, "p-col-3", "text-center", 3, "options", "ngModel", "ngModelChange"], ["onLabel", "Sim", "offLabel", "N\u00E3o", 3, "ngModel", "ngModelChange"], ["class", "p-col-2 text-center", 4, "ngIf", "ngIfElse"], ["semInfo", ""], ["class", "log pi pi-exclamation-circle", 3, "pTooltip", 4, "ngIf", "ngIfElse"], ["syncOk", ""], ["pTooltip", "Sincronizar produto", 1, "pi", "pi-sort-alt", 3, "click"], [1, "log", "pi", "pi-exclamation-circle", 3, "pTooltip"], ["pTooltip", "Produto sincronizado", 1, "log", "pi", "pi-check"]], template: function SelecaoProdutosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelecaoProdutosComponent_Template_input_ngModelChange_2_listener($event) { return ctx.config.tempoScan = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sincroniza\u00E7\u00E3o em minutos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelecaoProdutosComponent_Template_p_button_click_5_listener() { return ctx.salvarConfigTempoScan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-tabView", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function SelecaoProdutosComponent_Template_p_tabView_onChange_6_listener($event) { return ctx.buscarProdutosPromocaoOnChangeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-tabPanel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-autoComplete", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("completeMethod", function SelecaoProdutosComponent_Template_p_autoComplete_completeMethod_10_listener($event) { return ctx.buscarProdutos($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-dataView", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-header", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Quantidade Atual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Setor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pre\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ativar?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SelecaoProdutosComponent_ng_template_24_Template, 12, 8, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelecaoProdutosComponent_Template_button_click_25_listener() { return ctx.enviarProdutos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p-tabPanel", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p-autoComplete", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("completeMethod", function SelecaoProdutosComponent_Template_p_autoComplete_completeMethod_29_listener($event) { return ctx.filtroProdutosPromocao($event); })("onBlur", function SelecaoProdutosComponent_Template_p_autoComplete_onBlur_29_listener() { return ctx.restoreProdutosPromocao(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p-dataView", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function SelecaoProdutosComponent_Template_p_dataView_onLazyLoad_32_listener($event) { return ctx.buscarProdutosPromocaoPaginator($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p-header", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Quantidade Atual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Pre\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Vig\u00EAncia Promo\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sincronizado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "A\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, SelecaoProdutosComponent_ng_template_49_Template, 20, 10, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.tempoScan);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paginator", true)("rows", 10)("value", ctx.produtos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.produtos.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("suggestions", ctx.produtosPromocaoFilter)("size", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazy", true)("totalRecords", ctx.totalRecords)("pageLinks", ctx.totalPages)("paginator", true)("rows", ctx.rowsPerPage)("value", ctx.produtosPromocaoFilter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["Button"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabView"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabPanel"], primeng_card__WEBPACK_IMPORTED_MODULE_8__["Card"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutoComplete"], primeng_dataview__WEBPACK_IMPORTED_MODULE_10__["DataView"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["Header"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_12__["ToggleButton"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__["Tooltip"]], pipes: [_pipes_currency_custom_pipe__WEBPACK_IMPORTED_MODULE_15__["CurrencyCustomPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: [".content[_ngcontent-%COMP%] {\n  background-color: rgba(7, 5, 5, 0.582) !important;\n}\n\n.card-items[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 5px 0px;\n}\n\n.input[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 200px;\n  max-width: 200px;\n  margin-top: 15px;\n}\n\ni.log[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.log-show[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  background-color: #f7cece;\n  width: 150px;\n  z-index: 1000;\n}\n\n.log-hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.pi-sort-alt[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.ui-autocomplete[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWxpYW5va2Fzc253ZS9EZXYvcGVzc29hbC9pbnRlZ3JhY2FvLXByb21vLWZyb250L3NyYy9hcHAvc2VsZWNhby1wcm9kdXRvcy9zZWxlY2FvLXByb2R1dG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWxlY2FvLXByb2R1dG9zL3NlbGVjYW8tcHJvZHV0b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QURBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNHSjs7QURBQTtFQUNFLGFBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QURBQTtFQUNFLHdCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9zZWxlY2FvLXByb2R1dG9zL3NlbGVjYW8tcHJvZHV0b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgNSwgNSwgMC41ODIpICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1pdGVtcyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLmlucHV0IHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pLmxvZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZy1zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjA2LCAyMDYpO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG5cbi5sb2ctaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5waS1zb3J0LWFsdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVpLWF1dG9jb21wbGV0ZSBpIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSIsIi5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA1LCA1LCAwLjU4MikgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaXRlbXMge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLmlucHV0IHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pLmxvZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZy1zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3Y2VjZTtcbiAgd2lkdGg6IDE1MHB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubG9nLWhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGktc29ydC1hbHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51aS1hdXRvY29tcGxldGUgaSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelecaoProdutosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selecao-produtos',
                templateUrl: './selecao-produtos.component.html',
                styleUrls: ['./selecao-produtos.component.scss'],
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }]; }, { inputAutoComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputAutoComplete']
        }], produtosEnviadosTabPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["produtosEnviadosTabPanel"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ApiService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
    }
    get(uri) {
        return this.http.get(this.url.concat(uri));
    }
    post(uri, body) {
        return this.http.post(this.url.concat(uri), body);
    }
    getVersion() {
        return this.http.get(this.url.concat('/produtos/version'));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utils/Calendar.ts":
/*!***********************************!*\
  !*** ./src/app/utils/Calendar.ts ***!
  \***********************************/
/*! exports provided: Calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
class Calendar {
}
Calendar.PT_BR = {
    firstDayOfWeek: 0,
    dayNames: [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Se', 'Sa'],
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ],
    monthNamesShort: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
    ],
    today: 'Hoje',
    clear: 'Limpar',
    dateFormat: 'dd/mm/yy',
    weekHeader: 'Semana',
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'http://192.168.2.139:8080',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/julianokassnwe/Dev/pessoal/integracao-promo-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map