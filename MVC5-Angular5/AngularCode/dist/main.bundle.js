webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"admin.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  admin works! and will stay for all admin screen if you like\n</h3>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emails_emails_component__ = __webpack_require__("../../../../../src/app/admin/emails/emails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__["a" /* AdminRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_4__emails_emails_component__["a" /* EmailsComponent */], __WEBPACK_IMPORTED_MODULE_5__users_users_component__["a" /* UsersComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/emails/emails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"emails.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/emails/emails.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  admin emails works!\r\n</h1>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/emails/emails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailsComponent = (function () {
    function EmailsComponent() {
    }
    EmailsComponent.prototype.ngOnInit = function () {
    };
    EmailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-emails',
            template: __webpack_require__("../../../../../src/app/admin/emails/emails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/emails/emails.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailsComponent);
    return EmailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"users.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  admin users works!\n</h1>\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/admin/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items_items_component__ = __webpack_require__("../../../../../src/app/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_emails_emails_component__ = __webpack_require__("../../../../../src/app/admin/emails/emails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employees_employee_employee_component__ = __webpack_require__("../../../../../src/app/employees/employee/employee.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'items', component: __WEBPACK_IMPORTED_MODULE_3__items_items_component__["a" /* ItemsComponent */] },
    { path: 'employees', component: __WEBPACK_IMPORTED_MODULE_7__employees_employee_employee_component__["a" /* EmployeeComponent */] },
    {
        path: 'admin', component: __WEBPACK_IMPORTED_MODULE_4__admin_admin_component__["a" /* AdminComponent */],
        children: [
            //{ path: '', component: UsersComponent },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_5__admin_users_users_component__["a" /* UsersComponent */] },
            { path: 'emails', component: __WEBPACK_IMPORTED_MODULE_6__admin_emails_emails_component__["a" /* EmailsComponent */] }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div class=\"container\">\r\n  <!--<app-employee></app-employee>-->\r\n\r\n</div>\r\n\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n    <br />\r\n  </h1>\r\n\r\n\r\n  <a  href=\"\" [routerLink]=\"['/dashboard']\">dashboard</a>\r\n  <a href=\"\" class=\"navbar-left\" [routerLink]=\"['/items']\">items</a>\r\n\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"> <a href=\"\" [routerLink]=\"['/dashboard']\">dashboard</a></li>\r\n        <li> <a href=\"\" [routerLink]=\"['/employees']\">CRUD</a></li>\r\n\r\n        <li> <a href=\"\" [routerLink]=\"['/items']\">items</a></li>\r\n\r\n        <li> <a href=\"\" [routerLink]=\"['/admin']\">admin dash</a></li>\r\n        <li> <a href=\"\" [routerLink]=\"['/admin/emails']\">admin emails</a></li>\r\n        <li> <a href=\"\" [routerLink]=\"['/admin/users']\">admin users</a></li>\r\n\r\n        <li><a href=\"#\">home</a></li>\r\n      </ul>\r\n\r\n\r\n      <form class=\"navbar-form navbar-left\" action=\"/\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n      </form>\r\n\r\n    </div>\r\n  </nav>\r\n\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'angular 5 with MVC 5 JQuery & Bootstrarp 3';
        this.result = 10 / 4;
        //toggleTitle() {
        //  var strValue = 'some value 123';
        //  $('#divTest').slideToggle(); //
        //  $('#divTest').html(strValue);
        //}
    }
    //$(document).ready(function(){
    AppComponent.prototype.ngAfterViewInit = function () {
        //Copy in all the js code from the script.js. Typescript will complain but it works just fine
        console.log("jQuery here");
        $('[data-toggle="tooltip"]').tooltip();
        //$('#example').DataTable();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__items_items_component__ = __webpack_require__("../../../../../src/app/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employees_employee_employee_component__ = __webpack_require__("../../../../../src/app/employees/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employees_employee_list_employee_list_component__ = __webpack_require__("../../../../../src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { AppRoutingModule } from './app-routing.module';








//import { HttpClientModule } from '@angular/common/http';

//import { EmployeeService } from './employees/shared/employee.service';
//import { EmployeeService } from '../shared/employee.service';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__items_items_component__["a" /* ItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__employees_employee_employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__employees_employee_list_employee_list_component__["a" /* EmployeeListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */]
                //HttpClientModule 
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"dashboard.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n user dashboard works!\r\n</p>\r\n\r\n<a href=\"#\" data-toggle=\"tooltip\" title=\"Tooltip Hooray!\">Hover over me for Tooltip  example!!.</a>\r\n\r\n<br />\r\n\r\n<ul class=\"nav nav-tabs\">\r\n  <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Home</a></li>\r\n  <li><a data-toggle=\"tab\" href=\"#menu1\">Menu 1</a></li>\r\n  <li><a data-toggle=\"tab\" href=\"#menu2\">Menu 2</a></li>\r\n</ul>\r\n\r\n<div class=\"tab-content\">\r\n  <div id=\"home\" class=\"tab-pane fade in active\">\r\n    <h3>HOME</h3>\r\n    <p>Some content.</p>\r\n    <button type=\"button\" class=\"btn btn-success\">Success</button>\r\n    <button type=\"button\" class=\"btn btn-info\">Info</button>\r\n    <button type=\"button\" class=\"btn btn-warning\">Warning</button>\r\n\r\n  </div>\r\n  <div id=\"menu1\" class=\"tab-pane fade\">\r\n    <h3>Menu 1</h3>\r\n    <button type=\"button\" class=\"btn btn-primary\">Primary <span class=\"badge\">7</span></button>\r\n    <p>Some content in menu 1.</p>\r\n  </div>\r\n  <div id=\"menu2\" class=\"tab-pane fade\">\r\n    <h3>Menu 2</h3>\r\n    <p>Some content in menu 2.</p>\r\n  </div>\r\n</div>\r\n\r\n\r\n<br />\r\n\r\n<hr />\r\n\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">Test jQuery</div>\r\n  <div class=\"panel-body\">\r\n\r\n    <div id=\"divTest\">\r\n      value from component: {{result}}\r\n    </div>\r\n\r\n    <button (click)=\"toggleTitle()\"> click here to test jQuery</button>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    //$(document).ready(function(){
    DashboardComponent.prototype.ngAfterViewInit = function () {
        //Copy in all the js code from the script.js. Typescript will complain but it works just fine
        console.log("jQuery here in dashboard");
        $('[data-toggle="tooltip"]').tooltip();
        //$('#example').DataTable();
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.toggleTitle = function () {
        var strValue = 'some value 123';
        $('#divTest').slideToggle(); //
        $('#divTest').html(strValue);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/employees/employee-list/employee-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"employee-list.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/employee-list/employee-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">Employees</div>\r\n  <div class=\"panel-body\">\r\n\r\n    \r\n  </div>\r\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/employees/employee-list/employee-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("../../../../../src/app/employees/shared/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeListComponent = (function () {
    function EmployeeListComponent(empService) {
        this.empService = empService;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
    };
    EmployeeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employee-list',
            template: __webpack_require__("../../../../../src/app/employees/employee-list/employee-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employees/employee-list/employee-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/employees/employee/employee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"employee.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">Add/Update Employees</div>\r\n      <div class=\"panel-body\">\r\n\r\n        <div class=\"container\">\r\n\r\n\r\n          <form class=\"form-inline\" #empForm=\"ngForm\" (ngSubmit)=\"onSubmit(empForm)\">\r\n            <input type=\"hidden\" name=\"EmployeeID\" #EmployeeID=\"ngModel\" [(ngModel)]=\"empService.selectedEmployee.EmployeeId\">\r\n            <div class=\"form-group\">\r\n              <label class=\"sr-only\" for=\"email\">First Name</label>\r\n              <input class=\"form-control\" name=\"FirstName\" #FirstName=\"ngModel\" [(ngModel)]=\"empService.selectedEmployee.FirstName\">\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"sr-only\" for=\"email\">Last Name</label>\r\n              <input class=\"form-control\" name=\"LastName\" #LastName=\"ngModel\" [(ngModel)]=\"empService.selectedEmployee.LastName\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"sr-only\" for=\"email\">Emp Code</label>\r\n              <input class=\"form-control\" name=\"EmpCode\" #EmpCode=\"ngModel\" [(ngModel)]=\"empService.selectedEmployee.EmpCode\">\r\n            </div>\r\n\r\n            <div class=\"checkbox\">\r\n              <label><input type=\"checkbox\"> Remember me</label>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-default\"> <i class=\"fa fa-save\"> </i> Submit</button>\r\n            <button type=\"button\" (click)=\"resetForm(empForm)\" class=\"btn btn-danger\"> <i class=\"fa fa-return\"> </i>Cancel</button>\r\n          </form>\r\n\r\n        </div>\r\n        \r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<hr />\r\n<div class=\"row  \">\r\n  <div class=\"col-md-12\">\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/employees/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("../../../../../src/app/employees/shared/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeComponent = (function () {
    //empService: EmployeeService;
    //constructor() {
    //  empService = new EmployeeService();
    //}
    function EmployeeComponent(empService) {
        this.empService = empService;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    EmployeeComponent.prototype.onSubmit = function (form) {
        var _this = this;
        debugger;
        if (form.value.EmployeeID == null) {
            this.empService.postEmployee(form.value)
                .subscribe(function (data) {
                _this.resetForm(form);
                alert('Allah pak ka shuker haa');
                //this.empService.getEmployeeList();
                //this.toastr.success('New Record Added Succcessfully', 'Employee Register');
            });
        }
        //else {
        //  this.empService.putEmployee(form.value.EmployeeID, form.value)
        //    .subscribe(data => {
        //      this.resetForm(form);
        //      this.empService.getEmployeeList();
        //      this.toastr.info('Record Updated Successfully!', 'Employee Register');
        //    });
        //}
    };
    EmployeeComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.reset();
        }
        this.empService.selectedEmployee =
            {
                EmployeeId: null,
                FirstName: 'Allah k banda',
                LastName: '',
                EmpCode: '',
                DOB: ''
            };
    };
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employee',
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]],
            template: __webpack_require__("../../../../../src/app/employees/employee/employee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employees/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/employees/shared/employee.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "../../../../../src/app/employees/shared/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_model__ = __webpack_require__("../../../../../src/app/employees/shared/employee.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HttpClientModule } from '@angular/common/http';



var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.selectedEmployee = new __WEBPACK_IMPORTED_MODULE_1__employee_model__["a" /* Employee */]();
    }
    EmployeeService.prototype.url = function (arg0, arg1, arg2) {
        throw new Error("Method not implemented.");
    };
    //postEmployee(emp: Employee) {
    //  var body = JSON.stringify(emp);
    //  var headerOptions = new Headers(  { 'Content-Type': 'application/json' } );
    //  var requestOptions = new RequestOptions(
    //    { method: RequestMethod.Post, headers: headerOptions });
    //  debugger;
    //  return this.http.post('http://localhost:49859/api/Employee', body, requestOptions).map(x => x.json());
    //}
    EmployeeService.prototype.postEmployee = function (emp) {
        var body = JSON.stringify(emp);
        var headerOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Post, headers: headerOptions });
        return this.http.post('http://localhost:8081/api/Employee', body, requestOptions).map(function (x) { return x.json(); });
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "../../../../../src/app/items/items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"items.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/items.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  items works!\r\n</p>\r\n\r\n\r\n<h2>Data Table</h2>\r\n\r\n<table id=\"example\" class=\"display\" cellspacing=\"0\" width=\"100%\">\r\n  <thead>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Position</th>\r\n      <th>Office</th>\r\n      <th>Age</th>\r\n      <th>Start date</th>\r\n      <th>Salary</th>\r\n    </tr>\r\n  </thead>\r\n  <tfoot>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Position</th>\r\n      <th>Office</th>\r\n      <th>Age</th>\r\n      <th>Start date</th>\r\n      <th>Salary</th>\r\n    </tr>\r\n  </tfoot>\r\n  <tbody>\r\n    <tr>\r\n      <td>Tiger Nixon</td>\r\n      <td>System Architect</td>\r\n      <td>Edinburgh</td>\r\n      <td>61</td>\r\n      <td>2011/04/25</td>\r\n      <td>$320,800</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Donna Snider</td>\r\n      <td>Customer Support</td>\r\n      <td>New York</td>\r\n      <td>27</td>\r\n      <td>2011/01/25</td>\r\n      <td>$112,000</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n<hr />\r\n\r\n\r\n\r\n<a href=\"#demo\" data-toggle=\"collapse\">Collapsible</a>\r\n\r\n<div id=\"demo\" class=\"collapse\">\r\n  <h1>\r\n    collapse example Lorem ipsum dolor text....\r\n  </h1>\r\n</div>\r\n\r\n<hr />\r\n\r\n\r\n\r\n<hr />\r\n"

/***/ }),

/***/ "../../../../../src/app/items/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemsComponent = (function () {
    function ItemsComponent() {
    }
    //$(document).ready(function(){
    ItemsComponent.prototype.ngAfterViewInit = function () {
        //Copy in all the js code from the script.js. Typescript will complain but it works just fine
        console.log("jQuery here in items");
        //$('[data-toggle="tooltip"]').tooltip();
        $('#example').DataTable();
    };
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-items',
            template: __webpack_require__("../../../../../src/app/items/items.component.html"),
            styles: [__webpack_require__("../../../../../src/app/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map