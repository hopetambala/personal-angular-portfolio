(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>-->\n\n<app-nav></app-nav>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hopetambala-portfolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["fas"]);
var appRoutes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"] // Add this
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"section is-primary is-small has-text-centered darkBackground\">\n  <div class=\"container is-narrow\">\n    <div class=\"columns is-centered\"> \n      <div class=\"column is-one-third\">\n        <p class=\"title is-size-4-touch brand-secondary-light\">Hacking sustainable solutions with technology for the underserved</p>\n      </div>\n    </div>\n    <div class=\"social-icons\" style='padding:1%;'>\n      <a href=\"https://www.linkedin.com/in/hope-tambala/\">\n        <fa-icon [icon]=\"faLinkedin\" size=\"4x\"></fa-icon>\n      </a>\n      <a href=\"https://github.com/hopetambala\">\n        <fa-icon [icon]=\"faGithub\" size=\"4x\"></fa-icon>\n      </a>\n      <a href=\"https://www.facebook.com/Tamballer\">\n        <fa-icon [icon]=\"faFacebook\" size=\"4x\"></fa-icon>\n      </a>\n    </div>\n    <p class=\"copyright\">Designed in Illustrator and Developed in Angular by Hope Tambala</p>\n    <!--div class=\"made-by-bulma\"><a href=\"https://bulma.io\"><img src=\"https://bulma.io/images/made-with-bulma--white.png\" alt=\"Made with Bulma\" width=\"163\" height=\"31\"></a></div-->\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.darkBackground {\n  background: #10212F; }\nhtml {\n  background: #ECE9E6;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #FFFFFF, #ECE9E6);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\nhtml h1 {\n    font-family: Montserrat;\n    font-size: 24px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 900;\n    line-height: 26.4px; }\nhtml h2 {\n    font-family: Jura;\n    font-size: 18px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 700;\n    line-height: 26.4px; }\nhtml h3 {\n    font-family: Jura;\n    font-size: 14px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 700;\n    line-height: 15.4px; }\nhtml p {\n    font-family: Jura;\n    font-size: 20px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 400;\n    line-height: 20px; }\nhtml blockquote {\n    font-family: Jura;\n    font-size: 21px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 400;\n    line-height: 30px; }\nhtml pre {\n    font-family: Jura;\n    font-size: 13px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 400;\n    line-height: 18.5714px; }\nh1, p {\n  color: #5B97B7; }\na {\n  height: 48px;\n  width: auto;\n  padding: 1%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3BldGFtYmFsYS9Eb2N1bWVudHMvZGV2ZWxvcG1lbnQvcGVyc29uYWwvcG9ydGZvbGlvLWJ1bG1hK2FuZ3VsYXIvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2hvcGV0YW1iYWxhL0RvY3VtZW50cy9kZXZlbG9wbWVudC9wZXJzb25hbC9wb3J0Zm9saW8tYnVsbWErYW5ndWxhci9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFXL0U7RUFDSSxvQkFQb0IsRUFRdkI7QUFHRDtFQUNJLG9CQUFtQjtFQUFHLCtCQUErQjtFQUNXLGdDQUFnQztFQUNoRyxzREFBcUQ7RUFBRSxzRUFBc0UsRUF5RGhJO0FBNUREO0lBU1Esd0JBQXVCO0lBQ3ZCLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLHFCQUFvQjtJQUNwQixpQkFBZ0I7SUFDaEIsb0JBQW1CLEVBR3RCO0FBakJMO0lBb0JRLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixxQkFBb0I7SUFDcEIsaUJBQWdCO0lBQ2hCLG9CQUFtQixFQUd0QjtBQTVCTDtJQStCUSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIscUJBQW9CO0lBQ3BCLGlCQUFnQjtJQUNoQixvQkFBbUIsRUFBRztBQXBDOUI7SUFzQ1Esa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLHFCQUFvQjtJQUNwQixpQkFBZ0I7SUFDaEIsa0JBQWlCLEVBQ3BCO0FBNUNMO0lBOENRLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixxQkFBb0I7SUFDcEIsaUJBQWdCO0lBQ2hCLGtCQUFpQixFQUFHO0FBbkQ1QjtJQXFEUSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIscUJBQW9CO0lBQ3BCLGlCQUFnQjtJQUNoQix1QkFBc0IsRUFDekI7QUN6RUw7RUFDSSxlREcwQixFQ0Y3QjtBQUVEO0VBQ0ksYUFBVztFQUNYLFlBQVU7RUFDVixZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbiRicmFuZC1wcmltYXJ5OiNENDFDMjA7XG4kYnJhbmQtcHJpbWFyeS1saWdodDojQUI0ODNCO1xuXG4kYnJhbmQtc2Vjb25kYXJ5OiMxMDIxMkY7XG4kYnJhbmQtc2Vjb25kYXJ5LWxpZ2h0OiM1Qjk3Qjc7XG5cbiRicmFuZC10ZXJ0aWFyeTojMTQzNzMwO1xuXG5cbi5kYXJrQmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kOiAkYnJhbmQtc2Vjb25kYXJ5O1xufVxuXG5cbmh0bWx7XG4gICAgYmFja2dyb3VuZDogI0VDRTlFNjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsICNGRkZGRkYsICNFQ0U5RTYpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjRkZGRkZGLCAjRUNFOUU2KTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuXG5cblxuICAgIGgxeyBcbiAgICAgICAgLy9mb250LWZhbWlseTogSnVyYTsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7IFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7IFxuICAgICAgICBsaW5lLWhlaWdodDogMjYuNHB4OyBcbiAgICAgICAgLy9mb250LXdlaWdodDogMTAwO1xuXHQgICAgXG4gICAgfSBcblxuICAgIGgyeyBcbiAgICAgICAgZm9udC1mYW1pbHk6IEp1cmE7IFxuICAgICAgICBmb250LXNpemU6IDE4cHg7IFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IFxuICAgICAgICBsaW5lLWhlaWdodDogMjYuNHB4OyBcbiAgICAgICAgLy9mb250LXdlaWdodDogMTAwO1xuXHQgICAgLy9mb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICB9IFxuICAgIFxuICAgIGgzIHsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiBKdXJhOyBcbiAgICAgICAgZm9udC1zaXplOiAxNHB4OyBcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxuICAgICAgICBmb250LXdlaWdodDogNzAwOyBcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1LjRweDsgfSBcbiAgICBwIHsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiBKdXJhOyBcbiAgICAgICAgZm9udC1zaXplOiAyMHB4OyBcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxuICAgICAgICBmb250LXdlaWdodDogNDAwOyBcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7IFxuICAgIH0gXG4gICAgYmxvY2txdW90ZSB7IFxuICAgICAgICBmb250LWZhbWlseTogSnVyYTsgXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDsgXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4OyB9IFxuICAgIHByZSB7IFxuICAgICAgICBmb250LWZhbWlseTogSnVyYTsgXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDsgXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOC41NzE0cHg7IFxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcblxuaDEscHtcbiAgICBjb2xvcjogJGJyYW5kLXNlY29uZGFyeS1saWdodFxufVxuXG5he1xuICAgIGhlaWdodDo0OHB4O1xuICAgIHdpZHRoOmF1dG87XG4gICAgcGFkZGluZzogMSU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"];
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-transparent\">\n  <div class='container'>\n    <div class=\"navbar-brand\">\n      <img class=\"image is-96x96\" src=\"assets/logo/logo.png\" alt=\"Hope Tambala UX+Data\">\n    </div>\n\n      <!--div class=\"navbar-start\">\n        <a class=\"navbar-item\" href=\"https://bulma.io/\">\n          Home\n        </a>\n        <div class=\"navbar-item has-dropdown is-hoverable\">\n          <a class=\"navbar-link\" href=\"https://bulma.io/documentation/overview/start/\">\n            Docs\n          </a>\n          <div class=\"navbar-dropdown is-boxed\">\n            <a class=\"navbar-item\" href=\"https://bulma.io/documentation/overview/start/\">\n              Overview\n            </a>\n            <a class=\"navbar-item\" href=\"https://bulma.io/documentation/modifiers/syntax/\">\n              Modifiers\n            </a>\n            <a class=\"navbar-item\" href=\"https://bulma.io/documentation/columns/basics/\">\n              Columns\n            </a>\n            <a class=\"navbar-item\" href=\"https://bulma.io/documentation/layout/container/\">\n              Layout\n            </a>\n            <a class=\"navbar-item\" href=\"https://bulma.io/documentation/form/general/\">\n              Form\n            </a>\n            <hr class=\"navbar-divider\">\n            <a class=\"navbar-item\" href=\"https://bulma.io/documentation/elements/box/\">\n              Elements\n            </a>\n            <a class=\"navbar-item is-active\" href=\"https://bulma.io/documentation/components/breadcrumb/\">\n              Components\n            </a>\n          </div>\n        </div>\n      </div-->\n\n      <div class=\"navbar-end\">\n        <div class=\"navbar-item\">\n            <a class=\"button is-large is-rounded\" href=\"https://drive.google.com/file/d/129AjKzlBTCm2GmLZk6dLJutNaSfWwJSE/view\" target=\"Resume\">\n            <!--span class=\"icon\">\n              <i class=\"fas fa-download\"></i>\n            </span-->\n            <span><p>Resume</p></span>\n            </a>\n        </div>\n      </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.darkBackground {\n  background: #10212F; }\nhtml {\n  background: #ECE9E6;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #FFFFFF, #ECE9E6);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\nhtml h1 {\n    font-family: Montserrat;\n    font-size: 24px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 900;\n    line-height: 26.4px; }\nhtml h2 {\n    font-family: Jura;\n    font-size: 18px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 700;\n    line-height: 26.4px; }\nhtml h3 {\n    font-family: Jura;\n    font-size: 14px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 700;\n    line-height: 15.4px; }\nhtml p {\n    font-family: Jura;\n    font-size: 20px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 400;\n    line-height: 20px; }\nhtml blockquote {\n    font-family: Jura;\n    font-size: 21px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 400;\n    line-height: 30px; }\nhtml pre {\n    font-family: Jura;\n    font-size: 13px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 400;\n    line-height: 18.5714px; }\n.container {\n  padding: 1mm; }\na {\n  border-color: #D41C20; }\na p {\n    color: #D41C20; }\n.is-hovered {\n  border-color: #10212F; }\n.is-hovered p {\n    color: #10212F; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3BldGFtYmFsYS9Eb2N1bWVudHMvZGV2ZWxvcG1lbnQvcGVyc29uYWwvcG9ydGZvbGlvLWJ1bG1hK2FuZ3VsYXIvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2hvcGV0YW1iYWxhL0RvY3VtZW50cy9kZXZlbG9wbWVudC9wZXJzb25hbC9wb3J0Zm9saW8tYnVsbWErYW5ndWxhci9zcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFXL0U7RUFDSSxvQkFQb0IsRUFRdkI7QUFHRDtFQUNJLG9CQUFtQjtFQUFHLCtCQUErQjtFQUNXLGdDQUFnQztFQUNoRyxzREFBcUQ7RUFBRSxzRUFBc0UsRUF5RGhJO0FBNUREO0lBU1Esd0JBQXVCO0lBQ3ZCLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLHFCQUFvQjtJQUNwQixpQkFBZ0I7SUFDaEIsb0JBQW1CLEVBR3RCO0FBakJMO0lBb0JRLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixxQkFBb0I7SUFDcEIsaUJBQWdCO0lBQ2hCLG9CQUFtQixFQUd0QjtBQTVCTDtJQStCUSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIscUJBQW9CO0lBQ3BCLGlCQUFnQjtJQUNoQixvQkFBbUIsRUFBRztBQXBDOUI7SUFzQ1Esa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLHFCQUFvQjtJQUNwQixpQkFBZ0I7SUFDaEIsa0JBQWlCLEVBQ3BCO0FBNUNMO0lBOENRLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixxQkFBb0I7SUFDcEIsaUJBQWdCO0lBQ2hCLGtCQUFpQixFQUFHO0FBbkQ1QjtJQXFEUSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIscUJBQW9CO0lBQ3BCLGlCQUFnQjtJQUNoQix1QkFBc0IsRUFDekI7QUN6RUw7RUFDSSxhQUFZLEVBQ2Y7QUFFRDtFQUVHLHNCRE5tQixFQ1VyQjtBQU5EO0lBSU8sZURSZSxFQ1NsQjtBQUdKO0VBQ0ksc0JEVm9CLEVDY3ZCO0FBTEQ7SUFHUSxlRFpnQixFQ2FuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJGJyYW5kLXByaW1hcnk6I0Q0MUMyMDtcbiRicmFuZC1wcmltYXJ5LWxpZ2h0OiNBQjQ4M0I7XG5cbiRicmFuZC1zZWNvbmRhcnk6IzEwMjEyRjtcbiRicmFuZC1zZWNvbmRhcnktbGlnaHQ6IzVCOTdCNztcblxuJGJyYW5kLXRlcnRpYXJ5OiMxNDM3MzA7XG5cblxuLmRhcmtCYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6ICRicmFuZC1zZWNvbmRhcnk7XG59XG5cblxuaHRtbHtcbiAgICBiYWNrZ3JvdW5kOiAjRUNFOUU2OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI0ZGRkZGRiwgI0VDRTlFNik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNGRkZGRkYsICNFQ0U5RTYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG5cblxuXG4gICAgaDF7IFxuICAgICAgICAvL2ZvbnQtZmFtaWx5OiBKdXJhOyBcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDsgXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDsgXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNi40cHg7IFxuICAgICAgICAvL2ZvbnQtd2VpZ2h0OiAxMDA7XG5cdCAgICBcbiAgICB9IFxuXG4gICAgaDJ7IFxuICAgICAgICBmb250LWZhbWlseTogSnVyYTsgXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDsgXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNi40cHg7IFxuICAgICAgICAvL2ZvbnQtd2VpZ2h0OiAxMDA7XG5cdCAgICAvL2ZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgIH0gXG4gICAgXG4gICAgaDMgeyBcbiAgICAgICAgZm9udC1mYW1pbHk6IEp1cmE7IFxuICAgICAgICBmb250LXNpemU6IDE0cHg7IFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IFxuICAgICAgICBsaW5lLWhlaWdodDogMTUuNHB4OyB9IFxuICAgIHAgeyBcbiAgICAgICAgZm9udC1mYW1pbHk6IEp1cmE7IFxuICAgICAgICBmb250LXNpemU6IDIwcHg7IFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDsgXG4gICAgfSBcbiAgICBibG9ja3F1b3RlIHsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiBKdXJhOyBcbiAgICAgICAgZm9udC1zaXplOiAyMXB4OyBcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxuICAgICAgICBmb250LXdlaWdodDogNDAwOyBcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7IH0gXG4gICAgcHJlIHsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiBKdXJhOyBcbiAgICAgICAgZm9udC1zaXplOiAxM3B4OyBcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxuICAgICAgICBmb250LXdlaWdodDogNDAwOyBcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4LjU3MTRweDsgXG4gICAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDFtbTtcbn1cblxuYSB7XG4gICAgLy9iYWNrZ3JvdW5kOiAkYnJhbmQtc2Vjb25kYXJ5O1xuICAgYm9yZGVyLWNvbG9yOiAkYnJhbmQtcHJpbWFyeTtcbiAgIHB7XG4gICAgICAgY29sb3I6ICRicmFuZC1wcmltYXJ5O1xuICAgfVxufVxuXG4uaXMtaG92ZXJlZHtcbiAgICBib3JkZXItY29sb3I6ICRicmFuZC1zZWNvbmRhcnk7XG4gICAgcHtcbiAgICAgICAgY29sb3I6ICRicmFuZC1zZWNvbmRhcnk7XG4gICAgfSBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id ='header' class=\"hero is-white has-text-centered\">\n    <div class=\"hero-body\">\n      <div class=\"container\">\n        <div class=\"columns is-centered\">\n          <div class=\"column\">\n            <h1 class=\"title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile\">UX Researcher &amp; Front-End Developer</h1>\n            <h2 class=\"header-sub is-size-4-desktop\">I research, design, and develop<br>User-Centered Products for Mobile, Web, and <br>Data Visualization Experiences</h2>\n            <!--img class=\"avatar\" src=\"img/mf-avatar.svg\"-->\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--div class=\"hero-foot\">\n      <div class=\"container\"><img class=\"is-bottom\" src=\"assets/icons/hero/comp.png\"></div>\n    </div-->\n</section>\n\n<section id='skills_header+about' class=\"section is-medium is-primary has-text-centered is-long\" style=\"\">\n    <div class=\"container\">\n        <div class=\"columns is-centered\">\n        <div class=\"column is-three-fifths\">\n            <h1 class=\"title is-spaced is-size-3-desktop is-size-4-mobile\" style='color: white;'>Hello! My name is Hope Tambala</h1>\n            <h2 class=\"subtitle is-size-5-desktop\">Motivated by my work as a Peace Corps Volunteer, I’ve been able to combine my passion for understanding underserved communities and their needs with a technical skillset to address those problems. From being a Software Developer at Puente, an International Development nonprofit, to studying UX Research at the University of Michigan, I’m continually learning how to deliver digital products that benefit the greater good. </h2>\n        </div>\n        </div>\n    </div>\n</section>\n\n<section id='skills' class=\"section skills has-text-centered\">\n<div class=\"container is-narrow\">\n    <div class=\"box\">\n    <div class=\"content\">\n        <div class=\"columns is-centered\">\n        <div class=\"column\">\n            <figure class=\"image\"><img class=\"is-skill-icon\" src=\"assets/icons/ux-design.png\"></figure>\n            <h1 class=\"title is-size-4 is-spaced\">UX + Design Researcher</h1>\n            <p>I enjoy conducting usability interviews and creating personas to understand my users and their pain points</p>\n            <p class=\"list-title text-primary has-text-weight-normal\">Things I enjoy researching:</p>\n            <p>UX, UI, Web, Mobile, Apps, Data Visualization</p>\n            <p class=\"list-title text-primary has-text-weight-normal\" style='display: block;'>UX Tools</p>\n            <ul class=\"is-centered\">\n                <li>Sketch</li>\n                <li>Adobe Illustrator &amp; Photoshop</li>\n                <li>Surveys &amp; Interviews</li>\n                <li>Pen &amp; Paper</li>\n                <li>Sticky Notes</li>\n                <li>Paper Prototyping</li>\n                <li>Usability Tests &amp; Heuristic Evaluations </li>\n            </ul>\n        </div>\n        <div class=\"column\">\n            <figure class=\"image\"><img class=\"is-skill-icon\" src=\"assets/icons/web_mobile.png\"></figure>\n            <h1 class=\"title is-size-4 is-spaced\">Front-End + Data-Vis Developer</h1>\n            <p>I engineer UX-centered mobile, web, and data visualization solutions for problems I encounter in research using both front and back-end technologies</p>\n            <p class=\"list-title text-primary has-text-weight-normal\">Frameworks and Languages I've used:</p>\n            <p>HTML/CSS/JS, Ionic/Angular, d3.js, Python, Flask, SQL</p>\n            <p class=\"list-title text-primary has-text-weight-normal\">Dev Tool</p>\n            <ul>\n                <li>Visual Studio Code</li>\n                <li>Heroku</li>\n                <li>Bulma</li>\n                <li>Github</li>\n                <li>Terminal</li>\n            </ul>\n        </div>\n        <div class=\"column\"> \n            <figure class=\"image\"><img class=\"is-skill-icon\" src=\"assets/icons/consultant.png\"></figure>\n            <h1 class=\"title is-size-4 is-spaced\">ICTD Consultant</h1>\n            <p>I've lived in developing communities and now provide insights on how information technology enables stronger sustainable community development.</p>\n            <p class=\"list-title text-primary has-text-weight-normal\">Where I've Worked:</p>\n            <p>Peace Corps Dominican Republic, Puente</p>\n            <p class=\"list-title text-primary has-text-weight-normal\">Qualifications</p>\n            <ul>\n                <li>3 years experience</li>\n                <li>30+ students in Community and Health Development</li>\n                <li>Needs-Assesment and Project Creation</li>\n                <li>Technical Field Training and Implementation</li>\n                <li>184 Hours of Intensive Spanish Training</li>\n            </ul>\n        </div>\n        </div>\n    </div>\n    </div>\n</div>\n</section>\n\n<section id='experience_header' class=\"section is-medium has-text-centered is-long-ish\" style='padding:5%;'>\n    <div class=\"container\">\n        <div class=\"columns is-centered\">\n            <div class=\"column is-three-fifths\">\n                <h1 class=\"title is-spaced is-size-3-desktop is-size-4-mobile\">Recent Experience</h1>\n            </div>\n        </div>\n    </div>\n    <div id ='experience' class=\"section has-text-centered\">\n        <div class=\"container is-narrow\">\n            <div class=\"startup-grid\">\n                <div class=\"columns is-centered level row-eq-height\">\n                    <div class=\"column level-item\">\n                        <div class=\"box\"><img class=\"logo\" src=\"assets/logo/puente.png\">\n                            <h1 class=\"title is-size-4 is-spaced\">Co-Founder/Software Developer</h1>\n                            <p class=\"list-title text-primary has-text-weight-normal\" href=\"https://puente-dr.com/\">Puente Desarollo Internacional</p>\n                            <p>Ionic, Angular, Express/Node, and SQL Development</p>\n                            <p>2017 - Present</p>\n                        </div>\n                    </div>\n                    <div class=\"column level-item\">\n                        <div class=\"box\"><img class=\"logo\" src=\"assets/logo/mlibrary.png\">\n                            <h1 class=\"title is-size-4 is-spaced\">Data Visualization Consultant</h1>\n                            <p class=\"list-title text-primary has-text-weight-normal\" href=\"https://www.lib.umich.edu/clark-library\">University of Michigan - Ann Arbor</p>\n                            <p>d3.js, Bokeh, Leaflet, and other Javascript/Python Visualization Libraries</p>\n                            <p>2018 - Present</p>\n                        </div>\n                    </div>\n                    \n                    <div class=\"column level-item\">\n                        <div class=\"box\"><img class=\"logo\" src=\"assets/logo/umsi.png\">\n                            <h1 class=\"title is-size-4\">UX Research and Design Graduate Student</h1>\n                            <p class =\"is-size-4 is-spaced\">Health Informatics Graduate Certification</p>\n                            <p class=\"list-title text-primary has-text-weight-normal\" href=\"https://puente-dr.com/\">University of Michigan - School of Information</p>\n                            <p>UX Research and Design</p>\n                            <p>2018 - Present</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section id='projects_header' class=\"section is-medium is-primary has-text-centered is-long-ish\">\n    <div class=\"container\">\n        <div class=\"columns is-centered\">\n            <div class=\"column is-three-fifths\">\n                <h1 class=\"title is-spaced is-size-3-desktop is-size-4-mobile\" style='color: white;'>Projects</h1>\n                <h2 class=\"subtitle is-size-5-desktop\">Being both a researcher and developer, I’ve been able to directly interact with the users who’s digital experiences I’m engineering. Over the years, I've researched community pain points searching for participatory sustainable solutions than technology can address. I’ve also developed mobile/web applications to address those  problems. </h2>\n                <h2 class=\"subtitle is-size-5-desktop\">Seeing research translate into development grants me a unique perspective that informs my work.</h2>\n            </div>\n        </div>\n    </div>\n</section>\n    \n<section id ='projects' class=\"section projects has-text-centered\">\n    <div class=\"container is-narrow\">\n        <div class=\"startup-grid\">\n            <div class=\"columns is-centered level\" id='portfolio'>\n                <!--Puente Mobile app-->\n                <div class=\"column level-item development design research\">\n                    <div class=\"box\"><img class=\"logo\" src=\"assets/logo/puente-datacollection.png\">\n                        <a href='https://itunes.apple.com/us/app/puente-data-collection/id1362371696?mt=8' target=\"iOS\"><p>iOS Data Collection Application</p></a>\n                        <p class=\"is-spaced\">A data collection application that automatically geolocates the surveyor. Designed for development practitioner based on my experience as a Peace Corps Volunteer.</p>\n                        <p style='padding-bottom: 5%'>Role: UX Designer, Software Engineer</p>\n                        \n                    </div>\n                </div>\n\n                <!--Puente Dashboard app-->\n                <div class=\"column level-item development design\">\n                    <div class=\"box\"><img class=\"logo\" src=\"assets/logo/puente-dashboard.png\">\n                        <a class=\"link text-primary\" href=\"https://puente-angular.herokuapp.com\" target=\"Web\"><p>Web Data Visualization Application</p></a>\n                        <p class=\"is-spaced\">A dashboard application that based on information collected in the data collection application. Designed for development practitioners and researchers (In Beta).</p>\n                        <p style='padding-bottom: 5%'>Role: UX Researcher, Designer, Software Engineer</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.darkBackground {\n  background: #10212F; }\nhtml {\n  background: #ECE9E6;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #FFFFFF, #ECE9E6);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\nhtml h1 {\n    font-family: Montserrat;\n    font-size: 24px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 900;\n    line-height: 26.4px; }\nhtml h2 {\n    font-family: Jura;\n    font-size: 18px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 700;\n    line-height: 26.4px; }\nhtml h3 {\n    font-family: Jura;\n    font-size: 14px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 700;\n    line-height: 15.4px; }\nhtml p {\n    font-family: Jura;\n    font-size: 20px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 400;\n    line-height: 20px; }\nhtml blockquote {\n    font-family: Jura;\n    font-size: 21px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 400;\n    line-height: 30px; }\nhtml pre {\n    font-family: Jura;\n    font-size: 13px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 400;\n    line-height: 18.5714px; }\nh1 {\n  color: #AB483B;\n  font-weight: 900; }\nh2 {\n  color: white; }\n.is-primary {\n  background: #5B97B7; }\n.text-primary {\n  color: #D41C20; }\n.header-sub {\n  color: #5B97B7; }\n.is-long {\n  padding-bottom: 14em; }\n.skills {\n  margin-top: -15%; }\n.projects {\n  margin-top: -7.5%; }\nul {\n  list-style-type: none;\n  text-align: center;\n  width: auto; }\n.is-skill-icon {\n  height: 48px;\n  width: auto; }\n.section.skills .box .content .columns .column p.list-title {\n  margin-top: 50px;\n  margin-bottom: 8px; }\n.is-spaced {\n  padding: 1rem 2rem; }\n.logo {\n  height: 90px;\n  width: auto;\n  margin-bottom: 1rem; }\n.row-eq-height {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3BldGFtYmFsYS9Eb2N1bWVudHMvZGV2ZWxvcG1lbnQvcGVyc29uYWwvcG9ydGZvbGlvLWJ1bG1hK2FuZ3VsYXIvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2hvcGV0YW1iYWxhL0RvY3VtZW50cy9kZXZlbG9wbWVudC9wZXJzb25hbC9wb3J0Zm9saW8tYnVsbWErYW5ndWxhci9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFXL0U7RUFDSSxvQkFQb0IsRUFRdkI7QUFHRDtFQUNJLG9CQUFtQjtFQUFHLCtCQUErQjtFQUNXLGdDQUFnQztFQUNoRyxzREFBcUQ7RUFBRSxzRUFBc0UsRUF5RGhJO0FBNUREO0lBU1Esd0JBQXVCO0lBQ3ZCLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLHFCQUFvQjtJQUNwQixpQkFBZ0I7SUFDaEIsb0JBQW1CLEVBR3RCO0FBakJMO0lBb0JRLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixxQkFBb0I7SUFDcEIsaUJBQWdCO0lBQ2hCLG9CQUFtQixFQUd0QjtBQTVCTDtJQStCUSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIscUJBQW9CO0lBQ3BCLGlCQUFnQjtJQUNoQixvQkFBbUIsRUFBRztBQXBDOUI7SUFzQ1Esa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLHFCQUFvQjtJQUNwQixpQkFBZ0I7SUFDaEIsa0JBQWlCLEVBQ3BCO0FBNUNMO0lBOENRLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixxQkFBb0I7SUFDcEIsaUJBQWdCO0lBQ2hCLGtCQUFpQixFQUFHO0FBbkQ1QjtJQXFEUSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIscUJBQW9CO0lBQ3BCLGlCQUFnQjtJQUNoQix1QkFBc0IsRUFDekI7QUN4RUw7RUFDSSxlRER3QjtFQ0d4QixpQkFBZ0IsRUFDbkI7QUFDRDtFQUVJLGFBQVcsRUFDZDtBQUVEO0VBQ0ksb0JEUjBCLEVDUzdCO0FBRUQ7RUFDSSxlRGhCa0IsRUNpQnJCO0FBRUQ7RUFDSSxlRGhCMEIsRUNpQjdCO0FBRUQ7RUFDSSxxQkFBb0IsRUFDdkI7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjtBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCO0FBRUQ7RUFDSSxzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFlBQ0YsRUFBQztBQUNIO0VBQ0ksYUFBVztFQUFDLFlBQ2hCLEVBQUM7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7QUFFRDtFQUFXLG1CQUFpQixFQUFFO0FBRTlCO0VBQU0sYUFBVztFQUFDLFlBQVU7RUFBQyxvQkFBa0IsRUFBRTtBQUVqRDtFQUlJLGNBQXFCLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4kYnJhbmQtcHJpbWFyeTojRDQxQzIwO1xuJGJyYW5kLXByaW1hcnktbGlnaHQ6I0FCNDgzQjtcblxuJGJyYW5kLXNlY29uZGFyeTojMTAyMTJGO1xuJGJyYW5kLXNlY29uZGFyeS1saWdodDojNUI5N0I3O1xuXG4kYnJhbmQtdGVydGlhcnk6IzE0MzczMDtcblxuXG4uZGFya0JhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZDogJGJyYW5kLXNlY29uZGFyeTtcbn1cblxuXG5odG1se1xuICAgIGJhY2tncm91bmQ6ICNFQ0U5RTY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gdG9wLCAjRkZGRkZGLCAjRUNFOUU2KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI0ZGRkZGRiwgI0VDRTlFNik7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cblxuXG5cbiAgICBoMXsgXG4gICAgICAgIC8vZm9udC1mYW1pbHk6IEp1cmE7IFxuICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4OyBcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxuICAgICAgICBmb250LXdlaWdodDogOTAwOyBcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2LjRweDsgXG4gICAgICAgIC8vZm9udC13ZWlnaHQ6IDEwMDtcblx0ICAgIFxuICAgIH0gXG5cbiAgICBoMnsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiBKdXJhOyBcbiAgICAgICAgZm9udC1zaXplOiAxOHB4OyBcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxuICAgICAgICBmb250LXdlaWdodDogNzAwOyBcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2LjRweDsgXG4gICAgICAgIC8vZm9udC13ZWlnaHQ6IDEwMDtcblx0ICAgIC8vZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgfSBcbiAgICBcbiAgICBoMyB7IFxuICAgICAgICBmb250LWZhbWlseTogSnVyYTsgXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDsgXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNS40cHg7IH0gXG4gICAgcCB7IFxuICAgICAgICBmb250LWZhbWlseTogSnVyYTsgXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDsgXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXG4gICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4OyBcbiAgICB9IFxuICAgIGJsb2NrcXVvdGUgeyBcbiAgICAgICAgZm9udC1mYW1pbHk6IEp1cmE7IFxuICAgICAgICBmb250LXNpemU6IDIxcHg7IFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDsgfSBcbiAgICBwcmUgeyBcbiAgICAgICAgZm9udC1mYW1pbHk6IEp1cmE7IFxuICAgICAgICBmb250LXNpemU6IDEzcHg7IFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IFxuICAgICAgICBsaW5lLWhlaWdodDogMTguNTcxNHB4OyBcbiAgICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cblxuaDF7XG4gICAgY29sb3I6ICRicmFuZC1wcmltYXJ5LWxpZ2h0O1xuICAgIC8vY29sb3I6d2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbmgye1xuICAgIC8vY29sb3I6ICRicmFuZC1zZWNvbmRhcnktbGlnaHQ7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5pcy1wcmltYXJ5e1xuICAgIGJhY2tncm91bmQ6ICRicmFuZC1zZWNvbmRhcnktbGlnaHQ7XG59XG5cbi50ZXh0LXByaW1hcnl7XG4gICAgY29sb3I6ICRicmFuZC1wcmltYXJ5O1xufVxuXG4uaGVhZGVyLXN1YntcbiAgICBjb2xvcjogJGJyYW5kLXNlY29uZGFyeS1saWdodDtcbn1cblxuLmlzLWxvbmd7XG4gICAgcGFkZGluZy1ib3R0b206IDE0ZW07XG59XG5cbi5za2lsbHN7XG4gICAgbWFyZ2luLXRvcDogLTE1JTtcbn1cblxuLnByb2plY3Rze1xuICAgIG1hcmdpbi10b3A6IC03LjUlO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDphdXRvXG4gIH1cbi5pcy1za2lsbC1pY29ue1xuICAgIGhlaWdodDo0OHB4O3dpZHRoOmF1dG9cbn1cblxuLnNlY3Rpb24uc2tpbGxzIC5ib3ggLmNvbnRlbnQgLmNvbHVtbnMgLmNvbHVtbiBwLmxpc3QtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uaXMtc3BhY2Vke3BhZGRpbmc6MXJlbSAycmVtfVxuXG4ubG9nb3toZWlnaHQ6OTBweDt3aWR0aDphdXRvO21hcmdpbi1ib3R0b206MXJlbX1cblxuLnJvdy1lcS1oZWlnaHQge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAgICAgICAgIGZsZXg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hopetambala/Documents/development/personal/portfolio-bulma+angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map