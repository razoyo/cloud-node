webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
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

module.exports = "<div class=\"main\">\n  <div class=\"section\"> \n    <h1>Welcome to Hat Mirror Phone</h1>\n  </div>\n  <app-photo-share></app-photo-share>\n  <app-purchase></app-purchase>\n  <app-sync></app-sync>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=/usr/local/bin/repos/mm-web-app/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ngx_socket_io_1 = __webpack_require__("../../../../ngx-socket-io/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var photo_share_component_1 = __webpack_require__("../../../../../src/app/photo-share/photo-share.component.ts");
var purchase_component_1 = __webpack_require__("../../../../../src/app/purchase/purchase.component.ts");
var sync_component_1 = __webpack_require__("../../../../../src/app/sync/sync.component.ts");
var socket_service_1 = __webpack_require__("../../../../../src/app/shared/socket.service.ts");
var stateInit_1 = __webpack_require__("../../../../../src/app/shared/stateInit.ts");
var config = {
    url: stateInit_1.stateInit.socket_url,
    options: {}
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            photo_share_component_1.PhotoShareComponent,
            purchase_component_1.PurchaseComponent,
            sync_component_1.SyncComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ngx_socket_io_1.SocketIoModule.forRoot(config),
        ],
        providers: [
            socket_service_1.SocketService,
        ],
        bootstrap: [
            app_component_1.AppComponent,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=/usr/local/bin/repos/mm-web-app/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/photo-share/photo-share.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photo-share/photo-share.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"picture\"  class=\"section\">\n  <h3>Picture</h3>\n  <ul>\n    <li *ngFor=\"let picture of pictures\">\n      {{ picture }}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/photo-share/photo-share.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var socket_service_1 = __webpack_require__("../../../../../src/app/shared/socket.service.ts");
var PhotoShareComponent = (function () {
    function PhotoShareComponent(socketService) {
        this.socketService = socketService;
    }
    PhotoShareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newPicturesObserver = this.socketService
            .getNewPictures()
            .subscribe(function (data) {
            _this.pictures = data['pictures'];
        });
    };
    PhotoShareComponent.prototype.ngOnDestroy = function () {
        this.newPicturesObserver.unsubscribe();
    };
    return PhotoShareComponent;
}());
PhotoShareComponent = __decorate([
    core_1.Component({
        selector: 'app-photo-share',
        template: __webpack_require__("../../../../../src/app/photo-share/photo-share.component.html"),
        styles: [__webpack_require__("../../../../../src/app/photo-share/photo-share.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof socket_service_1.SocketService !== "undefined" && socket_service_1.SocketService) === "function" && _a || Object])
], PhotoShareComponent);
exports.PhotoShareComponent = PhotoShareComponent;
var _a;
//# sourceMappingURL=/usr/local/bin/repos/mm-web-app/src/photo-share.component.js.map

/***/ }),

/***/ "../../../../../src/app/purchase/purchase.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/purchase/purchase.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"url\" class=\"container\">\n  <button class=\"btn btn-danger\"><a href=\"{{ url }}\" target=\"blank\">Buy \"{{name}}\"</a></button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/purchase/purchase.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var socket_service_1 = __webpack_require__("../../../../../src/app/shared/socket.service.ts");
var PurchaseComponent = (function () {
    function PurchaseComponent(socketService) {
        this.socketService = socketService;
        this.url = '';
        this.name = '';
    }
    PurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.purchaseObserver = this.socketService
            .getPurchase()
            .subscribe(function (data) {
            console.log('getPurchase');
            _this.url = data.url;
            _this.name = data.name;
            window.open(_this.url);
        });
    };
    PurchaseComponent.prototype.ngOnDestroy = function () {
        this.purchaseObserver.unsubscribe();
    };
    return PurchaseComponent;
}());
PurchaseComponent = __decorate([
    core_1.Component({
        selector: 'app-purchase',
        template: __webpack_require__("../../../../../src/app/purchase/purchase.component.html"),
        styles: [__webpack_require__("../../../../../src/app/purchase/purchase.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof socket_service_1.SocketService !== "undefined" && socket_service_1.SocketService) === "function" && _a || Object])
], PurchaseComponent);
exports.PurchaseComponent = PurchaseComponent;
var _a;
//# sourceMappingURL=/usr/local/bin/repos/mm-web-app/src/purchase.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/socket.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var ngx_socket_io_1 = __webpack_require__("../../../../ngx-socket-io/index.js");
var SocketService = (function () {
    function SocketService(socket) {
        this.socket = socket;
    }
    SocketService.prototype.sendPhoneCode = function (code) {
        this.socket.emit('phone', code);
    };
    SocketService.prototype.getProblems = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on('problem', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.getConnect = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on('mirrorConnected', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.getNewPictures = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on('newPictures', function (data) {
                console.log('data = ' + JSON.stringify(data, null, 2));
                var obj = {};
                obj['pictures'] = data;
                observer.next(obj);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.getPurchase = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on('purchase', function (data) {
                console.log('data = ' + JSON.stringify(data, null, 2));
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.disconnect = function () {
        return this.socket.disconnect();
    };
    return SocketService;
}());
SocketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ngx_socket_io_1.Socket !== "undefined" && ngx_socket_io_1.Socket) === "function" && _a || Object])
], SocketService);
exports.SocketService = SocketService;
var _a;
//# sourceMappingURL=/usr/local/bin/repos/mm-web-app/src/socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/stateInit.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stateInit = {
    socket_url: 'ec2-54-221-218-6.compute-1.amazonaws.com:4000',
};
//# sourceMappingURL=/usr/local/bin/repos/mm-web-app/src/stateInit.js.map

/***/ }),

/***/ "../../../../../src/app/sync/sync.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sync/sync.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form *ngIf=\"!mirrorSocketId\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"code\">Enter Code from Mirror</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" \n             required\n             [(ngModel)]=\"code\" name=\"code\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n  </form>\n  <button *ngIf=\"mirrorSocketId\" class=\"btn\" (click)=\"reconnect()\">Reset Connection</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sync/sync.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var socket_service_1 = __webpack_require__("../../../../../src/app/shared/socket.service.ts");
var SyncComponent = (function () {
    function SyncComponent(socketService) {
        this.socketService = socketService;
        this.code = '';
        this.problem = '';
        this.feedback = '';
    }
    SyncComponent.prototype.reconnect = function () {
        this.socketService.disconnect();
        this.mirrorSocketId = null;
        this.code = null;
    };
    SyncComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.problemObserver = this.socketService
            .getProblems()
            .subscribe(function (data) {
            _this.problem = String(data);
            _this.mirrorSocketId = null;
            _this.code = null;
            _this.feedback = '';
        });
        this.connectObserver = this.socketService
            .getConnect()
            .subscribe(function (data) {
            _this.mirrorSocketId = data;
            _this.feedback = 'You are connected to the Hat Mirror';
            _this.problem = '';
        });
    };
    SyncComponent.prototype.onSubmit = function () {
        console.log('sending code | ', this.code);
        this.socketService.sendPhoneCode(this.code);
    };
    SyncComponent.prototype.ngOnDestroy = function () {
        this.connectObserver.unsubscribe();
        this.problemObserver.unsubscribe();
    };
    return SyncComponent;
}());
SyncComponent = __decorate([
    core_1.Component({
        selector: 'app-sync',
        template: __webpack_require__("../../../../../src/app/sync/sync.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sync/sync.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof socket_service_1.SocketService !== "undefined" && socket_service_1.SocketService) === "function" && _a || Object])
], SyncComponent);
exports.SyncComponent = SyncComponent;
var _a;
//# sourceMappingURL=/usr/local/bin/repos/mm-web-app/src/sync.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=/usr/local/bin/repos/mm-web-app/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../../../../../src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=/usr/local/bin/repos/mm-web-app/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("../../../../core-js/es6/symbol.js");
__webpack_require__("../../../../core-js/es6/object.js");
__webpack_require__("../../../../core-js/es6/function.js");
__webpack_require__("../../../../core-js/es6/parse-int.js");
__webpack_require__("../../../../core-js/es6/parse-float.js");
__webpack_require__("../../../../core-js/es6/number.js");
__webpack_require__("../../../../core-js/es6/math.js");
__webpack_require__("../../../../core-js/es6/string.js");
__webpack_require__("../../../../core-js/es6/date.js");
__webpack_require__("../../../../core-js/es6/array.js");
__webpack_require__("../../../../core-js/es6/regexp.js");
__webpack_require__("../../../../core-js/es6/map.js");
__webpack_require__("../../../../core-js/es6/set.js");
__webpack_require__("../../../../core-js/es6/reflect.js");
__webpack_require__("../../../../core-js/es7/reflect.js");
__webpack_require__("../../../../zone.js/dist/zone.js");
//# sourceMappingURL=/usr/local/bin/repos/mm-web-app/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map