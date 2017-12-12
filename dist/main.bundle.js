webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        // template: `<router-outlet></router-outlet>`,
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todo_list_todo_edit_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_todo_service_client__ = __webpack_require__("../../../../../src/app/services/todo.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_bittrex_service_client__ = __webpack_require__("../../../../../src/app/services/bittrex.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_api_test_api_test_component__ = __webpack_require__("../../../../../src/app/components/api-test/api-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_wallet_wallet_component__ = __webpack_require__("../../../../../src/app/components/wallet/wallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_wallet_service_client__ = __webpack_require__("../../../../../src/app/services/wallet.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_user_list_admin_user_list_component__ = __webpack_require__("../../../../../src/app/components/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_admin_service_client__ = __webpack_require__("../../../../../src/app/services/admin.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_massivx_massivx_component__ = __webpack_require__("../../../../../src/app/components/massivx/massivx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_wallet_list_wallet_list_component__ = __webpack_require__("../../../../../src/app/components/wallet-list/wallet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_create_user_create_user_component__ = __webpack_require__("../../../../../src/app/components/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_admin_admin_user_update_admin_user_update_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-user-update/admin-user-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_wallet_list_wallet_search_wallet_search_component__ = __webpack_require__("../../../../../src/app/components/wallet-list/wallet-search/wallet-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_wallet_search_service_client__ = __webpack_require__("../../../../../src/app/services/wallet-search.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_support_support_user_support_user_component__ = __webpack_require__("../../../../../src/app/components/support/support-user/support-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_support_ticket_new_ticket_new_component__ = __webpack_require__("../../../../../src/app/components/support/ticket-new/ticket-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_support_ticket_edit_ticket_edit_component__ = __webpack_require__("../../../../../src/app/components/support/ticket-edit/ticket-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_support_ticket_list_ticket_list_component__ = __webpack_require__("../../../../../src/app/components/support/ticket-list/ticket-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_ticket_service_client__ = __webpack_require__("../../../../../src/app/services/ticket.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__todo_todo_component__["a" /* TodoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__todo_list_todo_list_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__todo_list_todo_edit_component__["a" /* TodoEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_api_test_api_test_component__["a" /* ApiTestComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_wallet_wallet_component__["a" /* WalletComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_massivx_massivx_component__["a" /* MassivxComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_wallet_list_wallet_list_component__["a" /* WalletListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_create_user_create_user_component__["a" /* CreateUserComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_admin_admin_user_update_admin_user_update_component__["a" /* AdminUserUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_wallet_list_wallet_search_wallet_search_component__["a" /* WalletSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_support_support_user_support_user_component__["a" /* SupportUserComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_support_ticket_new_ticket_new_component__["a" /* TicketNewComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_support_ticket_edit_ticket_edit_component__["a" /* TicketEditComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_support_ticket_list_ticket_list_component__["a" /* TicketListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_12__services_todo_service_client__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_23__services_shared_service_client__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_22__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_14__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_15__services_bittrex_service_client__["a" /* BittrexService */],
            __WEBPACK_IMPORTED_MODULE_18__services_wallet_service_client__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_37__services_ticket_service_client__["a" /* TicketService */],
            __WEBPACK_IMPORTED_MODULE_32__services_wallet_search_service_client__["a" /* WalletSearchServiceClient */],
            __WEBPACK_IMPORTED_MODULE_25__services_admin_service_client__["a" /* AdminServiceClient */],
            __WEBPACK_IMPORTED_MODULE_26__services_authentication_service_client__["a" /* AuthenticationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_api_test_api_test_component__ = __webpack_require__("../../../../../src/app/components/api-test/api-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_wallet_wallet_component__ = __webpack_require__("../../../../../src/app/components/wallet/wallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_user_list_admin_user_list_component__ = __webpack_require__("../../../../../src/app/components/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_admin_service_client__ = __webpack_require__("../../../../../src/app/services/admin.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_massivx_massivx_component__ = __webpack_require__("../../../../../src/app/components/massivx/massivx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_wallet_list_wallet_list_component__ = __webpack_require__("../../../../../src/app/components/wallet-list/wallet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_create_user_create_user_component__ = __webpack_require__("../../../../../src/app/components/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_user_update_admin_user_update_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-user-update/admin-user-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_wallet_list_wallet_search_wallet_search_component__ = __webpack_require__("../../../../../src/app/components/wallet-list/wallet-search/wallet-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_support_support_user_support_user_component__ = __webpack_require__("../../../../../src/app/components/support/support-user/support-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_support_ticket_edit_ticket_edit_component__ = __webpack_require__("../../../../../src/app/components/support/ticket-edit/ticket-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_support_ticket_new_ticket_new_component__ = __webpack_require__("../../../../../src/app/components/support/ticket-new/ticket-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_support_ticket_list_ticket_list_component__ = __webpack_require__("../../../../../src/app/components/support/ticket-list/ticket-list.component.ts");























var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_14__components_massivx_massivx_component__["a" /* MassivxComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:userId/profile', component: __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:userId/support', component: __WEBPACK_IMPORTED_MODULE_19__components_support_support_user_support_user_component__["a" /* SupportUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'todo', component: __WEBPACK_IMPORTED_MODULE_3__todo_todo_component__["a" /* TodoComponent */] },
    { path: 'todoList', component: __WEBPACK_IMPORTED_MODULE_4__todo_list_todo_list_component__["a" /* TodoListComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'website', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'apitest', component: __WEBPACK_IMPORTED_MODULE_6__components_api_test_api_test_component__["a" /* ApiTestComponent */] },
    { path: 'user/:userId/createwallet', component: __WEBPACK_IMPORTED_MODULE_7__components_wallet_wallet_component__["a" /* WalletComponent */] },
    { path: 'user/:userId/wallet', component: __WEBPACK_IMPORTED_MODULE_15__components_wallet_list_wallet_list_component__["a" /* WalletListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:userId/admin/user', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_admin_service_client__["a" /* AdminServiceClient */]] },
    { path: 'user/:userId/admin/newuser', component: __WEBPACK_IMPORTED_MODULE_16__components_create_user_create_user_component__["a" /* CreateUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_admin_service_client__["a" /* AdminServiceClient */]] },
    { path: 'user/:userId/admin/updateuser/:exuserId/profile', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_user_update_admin_user_update_component__["a" /* AdminUserUpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_admin_service_client__["a" /* AdminServiceClient */]] },
    { path: 'user/:userId/wallet/search/:walletAddress', component: __WEBPACK_IMPORTED_MODULE_18__components_wallet_list_wallet_search_wallet_search_component__["a" /* WalletSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:userId/createticket', component: __WEBPACK_IMPORTED_MODULE_21__components_support_ticket_new_ticket_new_component__["a" /* TicketNewComponent */] },
    { path: 'user/:userId/createticket/:ticketId', component: __WEBPACK_IMPORTED_MODULE_20__components_support_ticket_edit_ticket_edit_component__["a" /* TicketEditComponent */] },
    { path: 'user/:userId/tickets', component: __WEBPACK_IMPORTED_MODULE_22__components_support_ticket_list_ticket_list_component__["a" /* TicketListComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-user-list/admin-user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-user-list/admin-user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n    <div class=\"row\">\n\n      <div class=\"navbar-brand col-sm-1 col-md-1 col-lg-1\">\n        <a [routerLink]=\"['/user', userId]\"\n           class=\"pull-left my-white-color\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-8 col-md-8 col-lg-8\">\n        User List\n      </div>\n\n      <div class=\"navbar-brand col-sm-2 col-md-2 col-lg-2\">\n        <a [routerLink]=\"['/user', userId, 'admin', 'newuser']\"\n           class=\"pull-right my-white-color\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"my-container\">\n    <ul class=\"list-group\">\n      <li *ngFor=\"let user of users\"\n          class=\"list-group-custom-item\">\n        {{user.username}}\n        <a class=\"pull-right\"\n           [routerLink]=\"['/user', userId, 'admin', 'updateuser', user._id, 'profile']\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n\n  <nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId, 'profile']\">\n          <span class=\"glyphicon glyphicon-user my-white-color\"></span>\n        </a>\n      </p>\n    </div>\n  </nav>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-user-list/admin-user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminUserListComponent = (function () {
    function AdminUserListComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    AdminUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['userId']) {
                _this.userId = params['userId'];
            }
        });
        this.userService
            .findAllUsers(this.userId)
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    return AdminUserListComponent;
}());
AdminUserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-user-list',
        template: __webpack_require__("../../../../../src/app/components/admin-user-list/admin-user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-user-list/admin-user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AdminUserListComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-user-update/admin-user-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-user-update/admin-user-update.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n    <div class=\"row\">\n\n      <div class=\"navbar-brand col-sm-1 col-md-1 col-lg-1\">\n        <a [routerLink]=\"['/user', userId, 'admin', 'user']\"\n           class=\"pull-left my-white-color\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-2 col-md-2 col-lg-2\">\n        Update User\n      </div>\n      <div class=\"navbar-brand col-sm-9 col-md-9 col-lg-9\">\n        <a (click)=\"updateUser()\"\n           class=\"pull-right my-white-color\">\n          <span class=\"glyphicon glyphicon-ok my-white-color\"></span>\n        </a>\n      </div>\n\n\n    </div>\n  </nav>\n\n  <div class=\"container my-container\">\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"username\"\n             placeholder=\"ssoni\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"email\"\n             type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             placeholder=\"soni.swati@outlook.com\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"firstName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"first-name\"\n             placeholder=\"Swati\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"lastName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"last-name\"\n             placeholder=\"Soni\">\n    </div>\n\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"deleteUser()\">Delete Account</a>\n\n  </div>\n\n  <nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId, 'profile']\">>\n          <span class=\"glyphicon glyphicon-user my-white-color\"></span>\n        </a>\n      </p>\n    </div>\n  </nav>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-user-update/admin-user-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminUserUpdateComponent = (function () {
    function AdminUserUpdateComponent(userService, sharedService, route, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.route = route;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
    }
    AdminUserUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['userId']) {
                _this.userId = params['userId'];
            }
            if (params['exuserId']) {
                _this.exuserId = params['exuserId'];
            }
        });
        this.getUser();
        this.getExUser();
    };
    AdminUserUpdateComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.findUserById(this.userId)
            .subscribe(function (currentUser) {
            _this.user = currentUser;
        });
    };
    AdminUserUpdateComponent.prototype.getExUser = function () {
        var _this = this;
        this.userService.findUserById(this.exuserId)
            .subscribe(function (currentUser) {
            _this.exuser = currentUser;
            _this.username = currentUser.username;
            _this.firstName = currentUser.firstName;
            _this.lastName = currentUser.lastName;
            _this.email = currentUser.email;
            _this.roles = currentUser.roles;
            _this.isAdmin = _this.getRole();
        });
    };
    AdminUserUpdateComponent.prototype.getRole = function () {
        for (var _i = 0, _a = this.roles; _i < _a.length; _i++) {
            var role = _a[_i];
            if (role === 'ADMIN') {
                return true;
            }
            return false;
        }
    };
    AdminUserUpdateComponent.prototype.updateUser = function () {
        var _this = this;
        this.exuser.username = this.username;
        this.exuser.firstName = this.firstName;
        this.exuser.lastName = this.lastName;
        this.exuser.email = this.email;
        this.userService.updateExUser(this.exuserId, this.userId, this.exuser)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'admin', 'user']);
        });
    };
    AdminUserUpdateComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteExUser(this.exuserId, this.userId)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'admin', 'user']);
        });
    };
    return AdminUserUpdateComponent;
}());
AdminUserUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-user-update',
        template: __webpack_require__("../../../../../src/app/components/admin/admin-user-update/admin-user-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-user-update/admin-user-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AdminUserUpdateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-user-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/api-test/api-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#crypto-container {\n  background: white;\n  width: 70%;\n  margin-top: 30px;\n  margin: 0 auto 4px auto;\n  padding: 1em;\n  box-shadow: 1px 1px 0 lightgrey;\n}\n\nspan.left {\n  font-weight: bold;\n}\n\nspan.right {\n  float: right;\n}\n\nspan.rightest {\n  float: right;\n  margin-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/api-test/api-test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n    <div class=\"row\">\n      <div class=\"col-sm-1 col-md-1 col-lg-1\">\n        <a [routerLink]=\"['/home']\"\n           class=\"navbar-brand pull-left my-white-color\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-11 col-md-11 col-lg-11\">\n        Market Rate\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"my-container\">\n    <div class=\"row input-group\">\n      <input [(ngModel)]=\"searchText\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Search rate of coins in USD. Enter coin name. Example: BTC,LTC\"\n             autofocus>\n      <span class=\"input-group-btn\">\n         <a (click)=\"searchCrypto()\"\n            class=\"btn btn-default\"\n            type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n      </span>\n    </div>\n\n    <div class=\"row\" *ngIf=\"cryptos\">\n      <div id=\"crypto-container\" *ngFor=\"let crypto of objectKeys(cryptos)\">\n        <div class=\"row\">\n          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n            <span class=\"left\">{{crypto}}</span>\n          </div>\n\n          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n            <span>{{cryptos[crypto].USD | currency:'USD':true}}</span>\n          </div>\n          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n            <span>{{cryptos[crypto].INR | currency:'INR':true}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/profile']\">\n            <span class=\"glyphicon glyphicon-user my-white-color\"></span>\n          </a>\n        </p>\n\n      </div>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/api-test/api-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service_client__ = __webpack_require__("../../../../../src/app/services/bittrex.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiTestComponent = (function () {
    function ApiTestComponent(data) {
        this.data = data;
        this.objectKeys = Object.keys;
    }
    ApiTestComponent.prototype.ngOnInit = function () {
    };
    ApiTestComponent.prototype.searchCrypto = function () {
        var _this = this;
        this.data.getPrices(this.searchText)
            .subscribe(function (res) {
            _this.cryptos = res;
            console.log(res);
        });
    };
    return ApiTestComponent;
}());
ApiTestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-api-test',
        template: __webpack_require__("../../../../../src/app/components/api-test/api-test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/api-test/api-test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service_client__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service_client__["a" /* BittrexService */]) === "function" && _a || Object])
], ApiTestComponent);

var _a;
//# sourceMappingURL=api-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-user/create-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n    <div class=\"row\">\n\n      <div class=\"navbar-brand col-sm-1 col-md-1 col-lg-1\">\n        <a [routerLink]=\"['/user', userId, '/profile']\"\n           class=\"pull-left my-white-color\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-11 col-md-11 col-lg-11\">\n        Create New User\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container\">\n\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n\n    <h1>Register</h1>\n    <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter username!</span>\n\n      <input name=\"password\"\n             placeholder=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter password!</span>\n\n\n      <input name = \"verifyPassword\"\n             placeholder=\"verify password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #verifyPassword=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">Please verify password!</span>\n\n      <select class=\"form-control\"\n              ngModel\n              name=\"role\"\n              #role=\"ngModel\">\n        <option value=\"EXCHANGEUSER\">EXCHANGEUSER</option>\n        <option value=\"SUPPORTUSER\">SUPPORTUSER</option>\n      </select>\n\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">Register</button>\n\n\n      <button class=\"btn btn-danger btn-block\"\n              type=\"button\"\n              (click)=\"cancel()\">Cancel</button>\n\n    </form>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/create-user/create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateUserComponent = (function () {
    function CreateUserComponent(userService, route, router, sharedService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Password does not match';
        this.alreadyExistsMsg = 'User already exists';
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['userId']) {
                _this.userId = params['userId'];
            }
        });
    };
    CreateUserComponent.prototype.register = function () {
        var _this = this;
        this.errorFlag = false;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        this.role = this.registerForm.value.role;
        if (this.password !== this.verifyPassword) {
            this.errorFlag = true;
            return;
        }
        var newUser = {
            username: this.username,
            password: this.password,
            roles: [this.role]
        };
        this.userService
            .createNewUser(this.userId, newUser)
            .subscribe(function (user) {
            _this.router.navigate(['/user', _this.userId, 'admin', 'user']);
        });
    };
    CreateUserComponent.prototype.cancel = function () {
        this.router.navigate(['/user', this.userId]);
    };
    return CreateUserComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], CreateUserComponent.prototype, "registerForm", void 0);
CreateUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-user',
        template: __webpack_require__("../../../../../src/app/components/create-user/create-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-user/create-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], CreateUserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=create-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scene {\n  background-color: black;\n  width:100%;\n  height: 100%;\n  position: fixed;\n  top:0px;\n  left:0px;\n  z-index:1000;\n}\n\n.textscene {\n  color: white;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid scene\">\n\n  <div class=\"my-container textscene\" >\n    <div class=\"row\">\n      <h1>MASSIVX</h1>\n    </div>\n  </div>\n\n  <div class=\"my-container textscene\">\n    <div class=\"row\">\n      <p>MassivX, a web application, is a cryptocurrency exchange platform that allows the exchange of one type of cryptocurrency into other. With a simple register and secured login process, a user will be able to easily trade any leading blockchain asset for other.</p>\n    </div>\n\n    <div class=\"row textscene\">\n      <h4>\n        <a routerLink=\"/apitest\">Search Market Rate</a>\n      </h4>\n    </div>\n\n    <div class=\"row\">\n      <h4>\n        <a routerLink=\"/login\">Login</a>\n      </h4>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/massivx/massivx.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/massivx/massivx.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n    <div class=\"row\">\n\n      <div class=\"navbar-brand my-white-color col-sm-3 col-md-3 col-lg-3\">\n        MassivX\n      </div>\n\n      <div class=\"navbar-brand col-sm-3 col-md-3 col-lg-3\">\n        <a [routerLink]=\"['/user', userId,'createwallet']\"\n           class=\"btn btn-success pull-right my-white-color\">\n          Create Wallet\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-3 col-md-3 col-lg-3\">\n        <a [routerLink]=\"['/user', userId,'wallet']\"\n           class=\"btn btn-success pull-right my-white-color\">\n          My Wallets\n        </a>\n      </div>\n\n      <div class=\"navbar-brand pull-right my-white-color col-sm-3 col-md-3 col-lg-3\">\n        <a [routerLink]=\"['/apitest']\"\n           class=\"btn btn-success pull-right my-white-color\">\n          Search Market Rate\n        </a>\n      </div>\n\n    </div>\n  </nav>\n\n  <div class=\"my-container\">\n\n    <div class=\"my-container row\">\n\n      <div class=\"col-sm-4 col-md-4 col-lg-4\">\n        <input [(ngModel)]=\"amount\"\n               type=\"text\"\n               class=\"form-control\"\n               id=\"amount\"\n               placeholder=\"YOU HAVE\"/>\n      </div>\n\n      <div class=\"col-sm-1 col-md-1 col-lg-1\">\n        <select>\n          <option *ngFor=\"let currency of currencies\"\n          value=\"{{currency}}\">\n            {{currency}}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"col-sm-4 col-md-4 col-lg-4\">\n        <input [(ngModel)]=\"exchange\"\n               type=\"text\"\n               class=\"form-control\"\n               id=\"exchange\"\n               placeholder=\"YOU GET\"/>\n      </div>\n\n      <div class=\"col-sm-1 col-md-1 col-lg-1\">\n        <select>\n          <option *ngFor=\"let currency of currencies\"\n                  value=\"{{currency}}\">\n            {{currency}}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"col-sm-2 col-md-2 col-lg-2\">\n        <a (click)=\"exchange()\"\n           class=\"btn btn-success btn-block\">Exchange</a>\n      </div>\n\n    </div>\n\n  </div>\n\n  <nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId, 'profile']\">\n          <span class=\"glyphicon glyphicon-user my-white-color\"></span>\n        </a>\n      </p>\n    </div>\n  </nav>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/massivx/massivx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MassivxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MassivxComponent = (function () {
    function MassivxComponent(userService, sharedService, route, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.route = route;
        this.router = router;
    }
    MassivxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['userId']) {
                _this.userId = params['userId'];
            }
        });
        this.getUser();
        this.getCurrencies();
    };
    MassivxComponent.prototype.getCurrencies = function () {
    };
    MassivxComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.findUserById(this.userId)
            .subscribe(function (currentUser) {
            _this.user = currentUser;
            _this.username = currentUser.username;
            _this.firstName = currentUser.firstName;
            _this.lastName = currentUser.lastName;
            _this.email = currentUser.email;
            _this.roles = currentUser.roles;
            _this.isAdmin = _this.getRole();
        });
    };
    MassivxComponent.prototype.getRole = function () {
        for (var _i = 0, _a = this.roles; _i < _a.length; _i++) {
            var role = _a[_i];
            if (role === 'ADMIN') {
                return true;
            }
            return false;
        }
    };
    return MassivxComponent;
}());
MassivxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-massivx',
        template: __webpack_require__("../../../../../src/app/components/massivx/massivx.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/massivx/massivx.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], MassivxComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=massivx.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/support/support-user/support-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/support/support-user/support-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n    <div class=\"row\">\n\n      <div class=\"navbar-brand my-white-color col-sm-3 col-md-3 col-lg-3\">\n        MassivX\n      </div>\n\n      <div class=\"navbar-brand col-sm-3 col-md-3 col-lg-3\">\n        <a [routerLink]=\"['/user', userId,'createticket']\"\n           class=\"btn btn-success pull-right my-white-color\">\n          Create Ticket\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-3 col-md-3 col-lg-3\">\n        <a [routerLink]=\"['/user', userId,'tickets']\"\n           class=\"btn btn-success pull-right my-white-color\">\n          View Tickets\n        </a>\n      </div>\n\n      <div class=\"navbar-brand pull-right my-white-color col-sm-3 col-md-3 col-lg-3\">\n        <a [routerLink]=\"['/apitest']\"\n           class=\"btn btn-success pull-right my-white-color\">\n          Search Market Rate\n        </a>\n      </div>\n\n    </div>\n  </nav>\n\n  <div class=\"my-container\">\n\n    <div class=\"my-container row\">\n\n\n    </div>\n\n  </div>\n\n  <nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId, 'support']\">\n          <span class=\"glyphicon glyphicon-user my-white-color\"></span>\n        </a>\n      </p>\n    </div>\n  </nav>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/support/support-user/support-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportUserComponent = (function () {
    function SupportUserComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    SupportUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['userId']) {
                _this.userId = params['userId'];
            }
        });
    };
    return SupportUserComponent;
}());
SupportUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-support-user',
        template: __webpack_require__("../../../../../src/app/components/support/support-user/support-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/support/support-user/support-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SupportUserComponent);

var _a, _b;
//# sourceMappingURL=support-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/support/ticket-edit/ticket-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/support/ticket-edit/ticket-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n    <div class=\"row\">\n\n      <div class=\"col-sm-1 col-md-1 col-lg-1\">\n        <a [routerLink]=\"['/user', userId, 'profile']\"\n           class=\"pull-left my-white-color navbar-brand\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-2 col-md-2 col-lg-2\">\n        Edit Ticket\n      </div>\n      <div class=\"col-sm-9 col-md-9 col-lg-9\">\n        <a (click)=\"updateTicket()\"\n           class=\"pull-right my-white-color navbar-brand\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"my-container row\">\n    <div class=\"col-xs-12 col-md-9 col-lg-9\">\n      <div *ngIf=\"errorFlag\" class=\"alert alert-danger custom-style\">{{errorMsg}}</div>\n      <form class=\"form-group\" #f=\"ngForm\">\n        <label for=\"ticketName\">Name</label>\n        <input class=\"form-control\"\n               id=\"ticketName\"\n               required\n               ngModel\n               type=\"text\"\n               name=\"name\"\n               placeholder=\"Ticket Name\"\n               #name=\"ngModel\"/>\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">Please enter ticket name</span>\n\n        <label for=\"description\">Description</label>\n        <input class=\"form-control\"\n               id=\"description\"\n               type=\"text\"\n               name=\"description\"\n               ngModel\n               placeholder=\"Ticket Description\"\n               #title=\"ngModel\"/>\n\n        <label for=\"type\">Type</label>\n        <input class=\"form-control\"\n               id=\"type\"\n               type=\"text\"\n               name=\"type\"\n               ngModel\n               placeholder=\"Ticket Type\"\n               #title=\"ngModel\"/>\n        <a (click)=\"deletePage()\"\n           class=\"btn btn-danger btn-block\">Delete</a>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'support']\">\n        <span class=\"glyphicon glyphicon-user my-white-color\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/support/ticket-edit/ticket-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ticket_service_client__ = __webpack_require__("../../../../../src/app/services/ticket.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_ticket_model_client__ = __webpack_require__("../../../../../src/app/models/ticket.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TicketEditComponent = (function () {
    function TicketEditComponent(router, route, ticketService) {
        this.router = router;
        this.route = route;
        this.ticketService = ticketService;
    }
    TicketEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['userId']) {
                _this.userId = params['userId'];
            }
            if (params['ticketId']) {
                _this.ticketId = params['ticketId'];
            }
        });
        this.getTicket();
    };
    TicketEditComponent.prototype.getTicket = function () {
        var _this = this;
        this.ticketService.findTicketById(this.ticketId, this.userId)
            .subscribe(function (currentTicket) {
            _this.name = currentTicket.name;
            _this.type = currentTicket.type;
            _this.description = currentTicket.description;
        });
    };
    TicketEditComponent.prototype.updateTicket = function () {
        var _this = this;
        var ticket = new __WEBPACK_IMPORTED_MODULE_4__models_ticket_model_client__["a" /* Ticket */](this.userId, this.name, this.type, this.description);
        if (ticket.name !== '') {
            this.ticketService.updateTicket(this.userId, this.ticketId, ticket)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'createticket', _this.ticketId]);
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Please provide ticket name';
        }
    };
    TicketEditComponent.prototype.deleteTicket = function () {
        var _this = this;
        this.ticketService.deleteTicket(this.userId, this.ticketId)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'tickets']);
        });
    };
    return TicketEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], TicketEditComponent.prototype, "ticketEditForm", void 0);
TicketEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ticket-edit',
        template: __webpack_require__("../../../../../src/app/components/support/ticket-edit/ticket-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/support/ticket-edit/ticket-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_ticket_service_client__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_ticket_service_client__["a" /* TicketService */]) === "function" && _d || Object])
], TicketEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=ticket-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/support/ticket-list/ticket-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/support/ticket-list/ticket-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n    <div class=\"row\">\n\n      <div class=\"navbar-brand my-white-color col-sm-3 col-md-3 col-lg-3\">\n        MassivX\n      </div>\n\n      <div class=\"navbar-brand col-sm-3 col-md-3 col-lg-3\">\n        <a [routerLink]=\"['/user', userId,'createticket']\"\n           class=\"btn btn-success pull-right my-white-color\">\n          Create Ticket\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-3 col-md-3 col-lg-3\">\n        <a [routerLink]=\"['/user', userId,'viewticket']\"\n           class=\"btn btn-success pull-right my-white-color\">\n          View Tickets\n        </a>\n      </div>\n\n      <div class=\"navbar-brand pull-right my-white-color col-sm-3 col-md-3 col-lg-3\">\n        <a [routerLink]=\"['/apitest']\"\n           class=\"btn btn-success pull-right my-white-color\">\n          Search Market Rate\n        </a>\n      </div>\n\n    </div>\n  </nav>\n\n  <div class=\"my-container\">\n\n    <div class=\"my-container row\">\n      <ul class=\"list-group\">\n        <li *ngFor=\"let tikcet of tickets\"\n            class=\"list-group-custom-item\">\n          {{ticket.name}}\n          <a class=\"pull-right\"\n             [routerLink]=\"['/user', userId, 'createticket', ticket._id]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </ul>\n\n    </div>\n\n  </div>\n\n  <nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId, 'support']\">\n          <span class=\"glyphicon glyphicon-user my-white-color\"></span>\n        </a>\n      </p>\n    </div>\n  </nav>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/support/ticket-list/ticket-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ticket_service_client__ = __webpack_require__("../../../../../src/app/services/ticket.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TicketListComponent = (function () {
    function TicketListComponent(ticketService, route, router) {
        this.ticketService = ticketService;
        this.route = route;
        this.router = router;
    }
    TicketListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['userId']) {
                _this.userId = params['userId'];
            }
        });
        this.ticketService
            .findAllTickets(this.userId)
            .subscribe(function (tickets) {
            _this.tickets = tickets;
        });
    };
    return TicketListComponent;
}());
TicketListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ticket-list',
        template: __webpack_require__("../../../../../src/app/components/support/ticket-list/ticket-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/support/ticket-list/ticket-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ticket_service_client__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ticket_service_client__["a" /* TicketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], TicketListComponent);

var _a, _b, _c;
//# sourceMappingURL=ticket-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/support/ticket-new/ticket-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/support/ticket-new/ticket-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-1 col-md-1 col-lg-1\">\n        <a [routerLink]=\"['/user', userId, 'profile']\"\n           class=\"pull-left navbar-brand my-white-color\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-2 col-md-2 col-lg-2\">\n        New Ticket\n      </div>\n      <div class=\"col-sm-9 col-md-9 col-lg-9\">\n        <a (click)=\"createTicket()\"\n           class=\"pull-right navbar-brand my-white-color\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"my-container row\">\n    <div class=\"col-xs-12 col-md-9 col-lg-9\">\n      <div *ngIf=\"errorFlag\" class=\"alert alert-danger custom-style\">{{errorMsg}}</div>\n      <form class=\"form-group\" #f=\"ngForm\">\n        <label for=\"ticketName\">Name</label>\n        <input class=\"form-control\"\n               id=\"ticketName\"\n               required\n               ngModel\n               type=\"text\"\n               name=\"name\"\n               placeholder=\"Ticket Name\"\n               #name=\"ngModel\"/>\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">Please enter ticket name</span>\n\n        <label for=\"description\">Description</label>\n        <input class=\"form-control\"\n               id=\"description\"\n               type=\"text\"\n               name=\"description\"\n               ngModel\n               placeholder=\"Ticket Description\"\n               #title=\"ngModel\"/>\n\n        <label for=\"type\">Type</label>\n        <input class=\"form-control\"\n               id=\"type\"\n               type=\"text\"\n               name=\"type\"\n               ngModel\n               placeholder=\"Ticket Type\"\n               #title=\"ngModel\"/>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'support']\">\n        <span class=\"glyphicon glyphicon-user my-white-color\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/support/ticket-new/ticket-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ticket_service_client__ = __webpack_require__("../../../../../src/app/services/ticket.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TicketNewComponent = (function () {
    function TicketNewComponent(router, route, ticketService) {
        this.router = router;
        this.route = route;
        this.ticketService = ticketService;
    }
    TicketNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['userId']) {
                _this.userId = params['userId'];
            }
        });
    };
    TicketNewComponent.prototype.createTicket = function () {
        var _this = this;
        var newTicket = {
            userId: this.userId,
            name: this.ticketForm.value.name,
            description: this.ticketForm.value.description,
            type: this.ticketForm.value.type
        };
        /* this.page = new Page('', this.name, this.websiteId, this.title);*/
        if (newTicket.name !== '') {
            this.ticketService.createTicket(this.userId, newTicket)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'tickets']);
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Please provide ticket name';
        }
    };
    return TicketNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], TicketNewComponent.prototype, "ticketForm", void 0);
TicketNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ticket-new',
        template: __webpack_require__("../../../../../src/app/components/support/ticket-new/ticket-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/support/ticket-new/ticket-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_ticket_service_client__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_ticket_service_client__["a" /* TicketService */]) === "function" && _d || Object])
], TicketNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=ticket-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <a routerLink=\"/test\">Test</a>\n  <a href=\"https://github.com/ssoni28/massivx-exchange/\">GitHub</a>\n  <br/>\n  <a href=\"https://massivx-exchange.herokuapp.com/\">Heroku</a>\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger custom-style\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <input   placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter username!</span>\n\n\n    <input   placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter password!</span>\n\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n\n    <button class=\"btn btn-success btn-block\"\n            type=\"button\"\n            [routerLink]=\"['/register']\">Register</button>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from loginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        // calling client side userservice to send login information
        console.log('data', this.username);
        this.userService.login(this.username, this.password)
            .subscribe(function (data) {
            _this.sharedService.user = data;
            _this.roles = data.roles;
            _this.isSupport = _this.getRole();
            if (_this.isSupport) {
                _this.router.navigate(['/user', data._id, 'support']);
            }
            else {
                _this.router.navigate(['/user', data._id]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.getRole = function () {
        for (var _i = 0, _a = this.roles; _i < _a.length; _i++) {
            var role = _a[_i];
            if (role === 'SUPPORTUSER') {
                return true;
            }
            return false;
        }
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n    <div class=\"row\">\n\n      <div class=\"navbar-brand col-sm-1 col-md-1 col-lg-1\">\n        <a [routerLink]=\"['/user', userId]\"\n           class=\"pull-left my-white-color\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-2 col-md-2 col-lg-2\">\n        Profile\n      </div>\n      <div class=\"navbar-brand col-sm-9 col-md-9 col-lg-9\">\n        <a (click)=\"updateUser()\"\n           class=\"pull-right my-white-color\">\n          <span class=\"glyphicon glyphicon-ok my-white-color\"></span>\n        </a>\n      </div>\n\n\n    </div>\n  </nav>\n\n  <div class=\"container my-container\">\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"username\"\n             placeholder=\"ssoni\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"email\"\n             type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             placeholder=\"soni.swati@outlook.com\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"firstName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"first-name\"\n             placeholder=\"Swati\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"lastName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"last-name\"\n             placeholder=\"Soni\">\n    </div>\n\n    <a (click)=\"logout()\"\n       class=\"btn btn-danger btn-block \">Logout</a>\n\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"deleteUser()\">Delete Account</a>\n\n    <div class=\"my-container\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-md-6 col-lg-6\">\n          <a [routerLink]=\"['/user', userId, 'admin', 'user']\"\n             [hidden]=!isAdmin>\n            View All Users\n          </a>\n        </div>\n        <div class=\"col-sm-6 col-md-6 col-lg-6\">\n          <a [routerLink]=\"['/user', userId, 'admin', 'newuser']\"\n             [hidden]=!isAdmin>\n            Create New User\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId, 'profile']\">\n          <span class=\"glyphicon glyphicon-user my-white-color\"></span>\n        </a>\n      </p>\n    </div>\n  </nav>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(userService, sharedService, route, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.route = route;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['userId']) {
                _this.userId = params['userId'];
            }
        });
        this.getUser();
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.findUserById(this.userId)
            .subscribe(function (currentUser) {
            _this.user = currentUser;
            _this.username = currentUser.username;
            _this.firstName = currentUser.firstName;
            _this.lastName = currentUser.lastName;
            _this.email = currentUser.email;
            _this.roles = currentUser.roles;
            _this.isAdmin = _this.getRole();
        });
    };
    ProfileComponent.prototype.getRole = function () {
        for (var _i = 0, _a = this.roles; _i < _a.length; _i++) {
            var role = _a[_i];
            if (role === 'ADMIN') {
                return true;
            }
            return false;
        }
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.user.username = this.username;
        this.user.firstName = this.firstName;
        this.user.lastName = this.lastName;
        this.user.email = this.email;
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId]);
        });
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(this.userId)
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n\n    <input placeholder=\"username\"\n           name=\"username\"\n           type=\"text\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter username!</span>\n\n    <input name=\"password\"\n           placeholder=\"password\"\n           type=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter password!</span>\n\n\n    <input name = \"verifyPassword\"\n           placeholder=\"verify password\"\n           type=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #verifyPassword=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">Please verify password!</span>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Register</button>\n\n\n    <button class=\"btn btn-danger btn-block\"\n            type=\"button\"\n            (click)=\"cancel()\">Cancel</button>\n\n  </form>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    function RegisterComponent(userService, route, router, sharedService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Password does not match';
        this.alreadyExistsMsg = 'User already exists';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.errorFlag = false;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        if (this.password !== this.verifyPassword) {
            this.errorFlag = true;
            return;
        }
        this.userService
            .register(this.username, this.password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/user', user._id]);
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(['/login']);
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/wallet-list/wallet-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/wallet-list/wallet-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n    <div class=\"row\">\n\n      <div class=\"col-sm-1 col-md-1 col-lg-1\">\n        <a [routerLink]=\"['/user', userId]\"\n           class=\"pull-left my-white-color navbar-brand\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-2 col-md-2 col-lg-2\n        hidden-xs hidden-sm\">\n        MassivX\n      </div>\n\n      <div class=\"navbar-brand col-sm-5 col-md-5 col-lg-5\">\n        <a [routerLink]=\"['/user', userId,'createwallet']\"\n           class=\"btn btn-danger pull-right my-white-color\">\n          Create Wallet\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-3 col-md-3 col-lg-3\">\n        <a [routerLink]=\"['/user', userId,'wallet']\"\n           class=\"btn btn-danger pull-right my-white-color\">\n          My Wallets\n        </a>\n      </div>\n\n    </div>\n  </nav>\n\n\n  <div class=\"my-container row\">\n    <ul class=\"list-group\">\n      <li *ngFor=\"let wallet of wallets\"\n          class=\"list-group-custom-item\">\n        <div>\n          <label>Wallet Address</label>\n          <a [routerLink]=\"['/user', userId, 'wallet', 'search', wallet.address]\">\n            {{wallet['address']}}\n          </a>\n          <br>\n          <label>Private Key</label>\n          {{wallet['privateKey']}}\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId, 'profile']\">\n          <span class=\"glyphicon glyphicon-user my-white-color\"></span>\n        </a>\n      </p>\n    </div>\n  </nav>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/wallet-list/wallet-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_wallet_service_client__ = __webpack_require__("../../../../../src/app/services/wallet.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WalletListComponent = (function () {
    function WalletListComponent(walletService, router, route) {
        this.walletService = walletService;
        this.router = router;
        this.route = route;
    }
    WalletListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['userId']) {
                _this.userId = params['userId'];
            }
        });
        this.findWalletsByUserId();
    };
    WalletListComponent.prototype.findWalletsByUserId = function () {
        var _this = this;
        this.walletService.findWalletsByUser(this.userId)
            .subscribe(function (data) {
            _this.wallets = data;
        });
    };
    return WalletListComponent;
}());
WalletListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-wallet-list',
        template: __webpack_require__("../../../../../src/app/components/wallet-list/wallet-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/wallet-list/wallet-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_wallet_service_client__["a" /* WalletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_wallet_service_client__["a" /* WalletService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WalletListComponent);

var _a, _b, _c;
//# sourceMappingURL=wallet-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/wallet-list/wallet-search/wallet-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/wallet-list/wallet-search/wallet-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n    <div class=\"row\">\n\n      <div class=\"col-sm-1 col-md-1 col-lg-1\">\n        <a [routerLink]=\"['/user', userId, 'wallet']\"\n           class=\"pull-left my-white-color navbar-brand\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-2 col-md-2 col-lg-2\n        hidden-xs hidden-sm\">\n        MassivX\n      </div>\n\n      <div class=\"navbar-brand col-sm-5 col-md-5 col-lg-5\">\n        <a [routerLink]=\"['/user', userId,'createwallet']\"\n           class=\"btn btn-success pull-right my-white-color\">\n          Create Wallet\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-3 col-md-3 col-lg-3\">\n        <a [routerLink]=\"['/user', userId,'wallet']\"\n           class=\"btn btn-success pull-right my-white-color\">\n          My Wallets\n        </a>\n      </div>\n\n    </div>\n  </nav>\n\n\n  <div class=\"my-container row\">\n    <h3>Wallet Details</h3>\n\n    <div class=\"row container\">\n\n      <div class=\"col-xs-6\">\n\n        <div class=\"row\">\n          <label>Summary</label>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-xs 1\">\n            <label>Address</label>\n          </div>\n          <div class=\"col-xs 5\">\n            <a [routerLink]=\"['/user', userId,'wallet', 'search', address]\">\n              {{address}}\n            </a>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-xs 1\">\n            <label>Hash 160</label>\n          </div>\n          <div class=\"col-xs 5\">\n            <a [routerLink]=\"['/user', userId,'wallet', 'search', address]\">\n              {{hash}}\n            </a>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"col-xs-6\">\n\n        <div class=\"row\">\n          <label>Transactions</label>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-xs 1\">\n            <label>No. Transactions</label>\n          </div>\n          <div class=\"col-xs 5\">\n            <label>\n              {{noOfTransactions}}\n            </label>\n          </div>\n        </div>\n\n\n        <div class=\"row\">\n          <div class=\"col-xs 1\">\n            <label>Total Received</label>\n          </div>\n          <div class=\"col-xs 5\">\n            <label>\n              {{totalReceived}}\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-xs 1\">\n            <label>Final Balance</label>\n          </div>\n          <div class=\"col-xs 5\">\n            <label>\n              {{finalBalance}}\n            </label>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n  <nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId, 'profile']\">\n          <span class=\"glyphicon glyphicon-user my-white-color\"></span>\n        </a>\n      </p>\n    </div>\n  </nav>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/wallet-list/wallet-search/wallet-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_wallet_search_service_client__ = __webpack_require__("../../../../../src/app/services/wallet-search.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WalletSearchComponent = (function () {
    function WalletSearchComponent(http, walletSearchService, route, router) {
        this.http = http;
        this.walletSearchService = walletSearchService;
        this.route = route;
        this.router = router;
    }
    WalletSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.address = params['walletAddress'];
        });
        this.walletSearchService.getAddress(this.address)
            .subscribe(function (data) {
            _this.hash = data.hash160;
            console.log(_this.hash);
            _this.noOfTransactions = data.n_tx;
            console.log(_this.noOfTransactions);
            _this.totalReceived = data.total_received;
            _this.totalSent = data.total_sent;
            _this.finalBalance = data.final_balance;
            _this.transactions = data.txs;
            console.log(data);
            console.log(data.hash160);
        });
    };
    return WalletSearchComponent;
}());
WalletSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-wallet-search',
        template: __webpack_require__("../../../../../src/app/components/wallet-list/wallet-search/wallet-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/wallet-list/wallet-search/wallet-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_wallet_search_service_client__["a" /* WalletSearchServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_wallet_search_service_client__["a" /* WalletSearchServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WalletSearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=wallet-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/wallet/wallet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/wallet/wallet.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-custom navbar-fixed-top\">\n    <div class=\"row\">\n      <div class=\"col-sm-1 col-md-1 col-lg-1\">\n        <a [routerLink]=\"['/user', userId]\"\n           class=\"navbar-brand pull-left my-white-color\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-brand my-white-color col-sm-11 col-md-11 col-lg-11\">\n        Create Wallet\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"my-container\">\n    <div class=\"row input-group\">\n      <input [(ngModel)]=\"searchText\"\n             type=\"text\"\n             class=\"form-control\"\n             name=\"searchText\"\n             placeholder=\"Enter a phrase using alphabets\"\n             autofocus>\n\n      <span class=\"input-group-btn\">\n         <a type=\"button\"\n            (click)=\"createWallet()\"\n            class=\"btn btn-default\">\n             <span class=\"glyphicon glyphicon-ok\"></span>\n         </a>\n      </span>\n    </div>\n    <div class=\"my-container row\" *ngIf=\"address\">\n      <br>\n      <label>Address</label>\n      <span>{{address}}</span>\n      <br>\n      <label>Private key</label>\n      <span>{{privatekey}}</span>\n    </div>\n\n    <nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/profile']\">\n            <span class=\"glyphicon glyphicon-user my-white-color\"></span>\n          </a>\n        </p>\n\n      </div>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/wallet/wallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_wallet_service_client__ = __webpack_require__("../../../../../src/app/services/wallet.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WalletComponent = (function () {
    function WalletComponent(walletService, route, router) {
        this.walletService = walletService;
        this.route = route;
        this.router = router;
    }
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['userId']) {
                _this.userId = params['userId'];
            }
        });
    };
    WalletComponent.prototype.createWallet = function () {
        var _this = this;
        // this.searchText = this.walletForm.value.searchText;
        if (this.searchText === '') {
            this.errorFlag = true;
            return;
        }
        else {
            this.walletService
                .createWallet(this.userId, this.searchText)
                .subscribe(function (data) {
                _this.address = data.address;
                _this.privatekey = data.privateKey;
                console.log(data);
                _this.router.navigate(['/user', _this.userId, 'wallet']);
            });
        }
    };
    return WalletComponent;
}());
WalletComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-wallet',
        template: __webpack_require__("../../../../../src/app/components/wallet/wallet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/wallet/wallet.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_wallet_service_client__["a" /* WalletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_wallet_service_client__["a" /* WalletService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WalletComponent);

var _a, _b, _c;
//# sourceMappingURL=wallet.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Websites</h1>\n\n{{websites.length}}\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsiteListComponent = (function () {
    function WebsiteListComponent(websiteService) {
        this.websiteService = websiteService;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        this.websites = this.websiteService.findAllWebsites();
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object])
], WebsiteListComponent);

var _a;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/ticket.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ticket; });
var Ticket = (function () {
    function Ticket(userId, name, description, type) {
        this.userId = userId;
        this.name = name;
        this.description = description;
        this.type = type;
    }
    return Ticket;
}());

//# sourceMappingURL=ticket.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/admin.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminServiceClient = (function () {
    function AdminServiceClient(userService) {
        this.userService = userService;
    }
    AdminServiceClient.prototype.canActivate = function () {
        return this.userService.isAdmin();
    };
    return AdminServiceClient;
}());
AdminServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AdminServiceClient);

var _a;
//# sourceMappingURL=admin.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/bittrex.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BittrexService = (function () {
    function BittrexService(http) {
        this.http = http;
        this.urlBase = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=TEXT&tsyms=INR,USD';
    }
    BittrexService.prototype.getPrices = function (searchText) {
        var _this = this;
        var url = this.urlBase
            .replace('TEXT', searchText);
        return this.http.get(url)
            .map(function (result) {
            return _this.result = result.json();
        });
    };
    return BittrexService;
}());
BittrexService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], BittrexService);

var _a;
//# sourceMappingURL=bittrex.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/ticket.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// injecting service into module
var TicketService = (function () {
    function TicketService(http, router) {
        this.http = http;
        this.router = router;
        this.newUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TicketService.prototype.findUserByCredentials = function (username, password) {
        var url = this.newUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    TicketService.prototype.createTicket = function (userId, ticket) {
        var url = this.newUrl + '/api/user/' + userId + '/createticket';
        return this.http.post(url, ticket)
            .map(function (response) {
            return response.json();
        });
    };
    TicketService.prototype.findTicketById = function (ticketId, userId) {
        var url = this.newUrl + '/api/user/' + userId + '/createticket/' + ticketId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    TicketService.prototype.updateTicket = function (userId, ticketId, ticket) {
        var url = this.newUrl + '/api/user/' + userId + '/createticket/' + ticketId;
        return this.http.put(url, ticketId, ticket)
            .map(function (response) {
            return response.json();
        });
    };
    TicketService.prototype.deleteTicket = function (userId, ticketId) {
        var url = this.newUrl + '/api/user/' + userId + '/createticket/' + ticketId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    TicketService.prototype.findAllTickets = function (userId) {
        var url = this.newUrl + '/api/user/' + userId + '/tickets';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    return TicketService;
}());
TicketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TicketService);

var _a, _b;
//# sourceMappingURL=ticket.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/todo.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_list_todo_mock__ = __webpack_require__("../../../../../src/app/todo-list/todo-mock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.todos = __WEBPACK_IMPORTED_MODULE_1__todo_list_todo_mock__["a" /* TODOS */];
    }
    // findAllTodos(): Todo[] {
    TodoService.prototype.findAllTodos = function () {
        console.log('findAllTodos');
        return this.http.get('http://localhost:3100/api/todo')
            .map(function (res) {
            var data = res.json();
            return data;
        });
        // return this.todos;
    };
    TodoService.prototype.createTodo = function (todo) {
        var todoCopy = __assign({}, todo);
        this.todos.push(todoCopy);
        return this.http.post('http://localhost:3100/api/todo', todo)
            .map(function (res) {
            return res.json();
        });
    };
    TodoService.prototype.deleteTodo = function (index) {
        this.todos.splice(index, 1);
    };
    return TodoService;
}());
TodoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TodoService);

var _a;
//# sourceMappingURL=todo.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var UserService = (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.newUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        /* api = {
           'createUser'   : this.createUser,
           'findUserById' : this.findUserById
         };
       */
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true; // jga
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.newUrl + '/api/login', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.newUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.newUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.register = function (username, password) {
        var url = this.newUrl + '/api/register';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.newUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = this.newUrl + '/api/user/';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.createNewUser = function (userId, user) {
        var url = this.newUrl + '/api/user/' + userId + '/admin/newuser';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.newUrl + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.newUrl + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateExUser = function (exuserId, userId, user) {
        var url = this.newUrl + '/api/user/' + userId + '/admin/updateuser/' + exuserId + '/profile';
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.newUrl + '/api/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteExUser = function (exuserId, userId) {
        var url = this.newUrl + '/api/user/' + userId + '/admin/updateuser/' + exuserId + '/profile';
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.newUrl + '/api/user?username/' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findAllUsers = function (userId) {
        var url = this.newUrl + '/api/user/' + userId + '/admin/user';
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.isAdmin = function () {
        var _this = this;
        var url = this.newUrl + '/api/admin/isAdmin';
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/wallet-search.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletSearchServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletSearchServiceClient = (function () {
    function WalletSearchServiceClient(http) {
        this.http = http;
    }
    WalletSearchServiceClient.prototype.getAddress = function (address) {
        var _this = this;
        var url = "https://cors-anywhere.herokuapp.com/" + "https://blockchain.info/rawaddr/" + address + "?format=json&cors=true";
        console.log(url);
        return this.http.get(url)
            .map(function (result) {
            return _this.result = result.json();
        });
    };
    return WalletSearchServiceClient;
}());
WalletSearchServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WalletSearchServiceClient);

var _a;
//# sourceMappingURL=wallet-search.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/wallet.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WalletService = (function () {
    function WalletService(http, router) {
        this.http = http;
        this.router = router;
        this.newUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    WalletService.prototype.createWallet = function (userId, data) {
        var obj = {
            searchText: data
        };
        var url = this.newUrl + '/api/user/' + userId + '/createwallet';
        return this.http.post(url, obj)
            .map(function (response) {
            return response.json();
        });
    };
    WalletService.prototype.findWalletsByUser = function (userId) {
        var url = this.newUrl + '/api/user/' + userId + '/wallet';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WalletService;
}());
WalletService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], WalletService);

var _a, _b;
//# sourceMappingURL=wallet.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.mock.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WEBSITES; });
var WEBSITES = [
    { _id: '123', name: 'Facebook', description: 'description 123' },
    { _id: '234', name: 'Twitter', description: 'description 234' },
    { _id: '345', name: 'Wikipedia', description: 'description 345' }
];
//# sourceMappingURL=website.mock.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__website_mock_client__ = __webpack_require__("../../../../../src/app/services/website.mock.client.ts");

var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = __WEBPACK_IMPORTED_MODULE_0__website_mock_client__["a" /* WEBSITES */];
    }
    WebsiteService.prototype.findAllWebsites = function () {
        return this.websites;
    };
    return WebsiteService;
}());

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Edit Todo</h2>\n<label for=\"title\">Title</label>\n<input [(ngModel)]=\"todo.title\"\n       class=\"form-control\"\n       id=\"title\">\n<br/>\n<label for=\"description\">\n  Description</label>\n<textarea [(ngModel)]=\"todo.description\"\n          class=\"form-control\"\n          id=\"description\"></textarea>\n"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo2__ = __webpack_require__("../../../../../src/app/todo-list/todo2.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoEditComponent = (function () {
    function TodoEditComponent() {
    }
    return TodoEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo2__["a" /* Todo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo2__["a" /* Todo */]) === "function" && _a || Object)
], TodoEditComponent.prototype, "todo", void 0);
TodoEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todo-edit',
        template: __webpack_require__("../../../../../src/app/todo-list/todo-edit.component.html")
    })
], TodoEditComponent);

var _a;
//# sourceMappingURL=todo-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-xs-5\">\n      <h1>Todo List</h1>\n      <div class=\"input-group\">\n        <input placeholder=\"Todo Title\"\n               [(ngModel)]=\"newTodo.title\"\n               class=\"form-control\">\n        <span class=\"input-group-btn\">\n    <button (click)=\"onAddTodo(newTodo)\"\n            class=\"btn btn-default\">\n       Add\n    </button>\n  </span>\n      </div>\n\n      <ul class=\"list-group\">\n        <li *ngFor=\"let todo of todos; let i = index\"\n            [class.selected]=\"todo === selectedTodo\"\n            class=\"list-group-item\">\n          {{todo.title}}\n          <a class=\"pull-right\"\n             (click)=\"onSelectTodo(todo)\">\n        <span class=\"glyphicon glyphicon-cog\">\n        </span>\n          </a>\n          <a class=\"pull-right\"\n             (click)=\"onDeleteTodo(i)\">\n        <span class=\"glyphicon\n           glyphicon-remove\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-xs-7\">\n      <app-todo-edit [todo]=\"selectedTodo\"\n                     *ngIf=\"selectedTodo\">\n      </app-todo-edit>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo2__ = __webpack_require__("../../../../../src/app/todo-list/todo2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service_client__ = __webpack_require__("../../../../../src/app/services/todo.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = (function () {
    function TodoListComponent(todoService) {
        this.todoService = todoService;
        this.todos = [];
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__todo2__["a" /* Todo */]();
    }
    TodoListComponent.prototype.onSelectTodo = function (todo) {
        this.selectedTodo = todo;
    };
    TodoListComponent.prototype.onAddTodo = function (todo) {
        var _this = this;
        this.todoService.createTodo(todo)
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodoListComponent.prototype.onDeleteTodo = function (index) {
        this.todoService.deleteTodo(index);
    };
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.todos = this.todoService.findAllTodos();
        this.todoService.findAllTodos()
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todo-list',
        styles: [
            ".selected {\n     background-color: lightblue;\n   }"
        ],
        template: __webpack_require__("../../../../../src/app/todo-list/todo-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_todo_service_client__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_todo_service_client__["a" /* TodoService */]) === "function" && _a || Object])
], TodoListComponent);

var _a;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TODOS; });
var TODOS = [
    { title: 'Pickup milk', description: 'Skim milk' },
    { title: 'Pickup kids', description: 'From school' },
    { title: 'Finish homework', description: 'Math' }
];
//# sourceMappingURL=todo-mock.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());

//# sourceMappingURL=todo2.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"title\"/>\n<br/>\n<textarea [(ngModel)]=\"description\"></textarea>\n<br/>\n<button (click)=\"addTodo()\">Add</button>\n\n<ul>\n  <li *ngFor=\"let todo of todos\">\n    {{todo.title}}\n    <span (click)=\"deleteTodo(todo)\">X</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("../../../../../src/app/todo/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = (function () {
    function TodoComponent() {
        this.todos = [];
        this.addTodo = function () {
            var todo = new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](this.title, this.description);
            this.todos.push(todo);
        };
        this.deleteTodo = function (todo) {
            var index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        };
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todo',
        template: __webpack_require__("../../../../../src/app/todo/todo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo/todo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TodoComponent);

//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(title, description) {
        this.title = title;
        this.description = description;
    }
    return Todo;
}());

//# sourceMappingURL=todo.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map