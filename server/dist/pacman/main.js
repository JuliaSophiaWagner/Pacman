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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n  <div>\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" id=\"navbar\">\n      <a class=\"navbar-brand\" href=\"#\" routerLink=\"home\">\n        <img src=\"assets/img/PacmanLogo.png\" width=\"50\" height=\"50\" class=\"d-inline-block align-top\"\n          alt=\"Change detection logo\">\n        Pacman\n      </a>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\" style=\"margin:5%\">\n            <a class=\"nav-link\" style=\"color:rgb(60, 150, 173);\" routerLink=\"home\" href=\"#\">Home</a>\n          </li>\n          <li class=\"nav-item\" style=\"margin:5%\">\n            <a class=\"nav-link\" style=\"color:rgb(60, 150, 173);\" routerLink=\"info\" href=\"#\">Information</a>\n          </li>\n          <li class=\"nav-item active\" style=\"margin:5%;\" [style.visibility]=\"visible\">\n            <a class=\"nav-link\" style=\"color:rgb(73, 186, 201);\" routerLink=\"game\" href=\"#\">Game</a>\n          </li>\n          <li class=\"nav-item\" style=\"margin:5%\">\n            <a class=\"nav-link\" style=\"color:rgb(60, 150, 173);\" routerLink=\"score-board\" href=\"#\" [style.visibility]=\"visible\">Scoreboard</a>\n          </li>\n        </ul>\n      </div>\n      <form class=\"form-inline\" style=\"margin-right: 10%;\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\"  style=\"color:rgb(73, 186, 201);\">\n            Menu\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" style=\"background-color:rgb(73, 186, 201);\">\n            <a class=\"dropdown-item\" routerLink=\"login\" style=\"background-color:rgb(73, 186, 201); color:white\" href=\"#\">Login</a>\n            <a class=\"dropdown-item\" routerLink=\"register\" style=\"background-color:rgb(73, 186, 201); color:white\" href=\"#\">Registration</a>\n            <button class=\"navbar-toggler\" type=\"dropdown-item\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\">\n              <a class=\"dropdown-item\" routerLink=\"home\" style=\"background-color:rgb(73, 186, 201); color:white\" href=\"#\">Home</a>\n              <a class=\"dropdown-item\" routerLink=\"info\" style=\"background-color:rgb(73, 186, 201); color:white\" href=\"#\">Information</a>\n              <a class=\"dropdown-item\" routerLink=\"game\" style=\"background-color:rgb(73, 186, 201); color:white\" href=\"#\"[style.visibility]=\"visible\">Game</a>\n              <a class=\"dropdown-item\" routerLink=\"score-board\" style=\"background-color:rgb(73, 186, 201); color:white\" href=\"#\" [style.visibility]=\"visible\">Scoreboard</a>\n            </button>\n            <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\" style=\"background-color:rgb(73, 186, 201); color:white\" (click)=\"logout()\">Logout</a>\n          </div>\n        </li>\n      </form>\n    </nav>\n  </div>\n</nav>\n<main>\n  <router-outlet></router-outlet>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 style=\"height: 0%; margin: 0%; font-size: 0%;\">\n  Pacman\n</h1>\n<div class=\"container\">\n  <div class=\"row row justify-content-md-center\">\n    <div class=\"col-md-auto\">\n      <div>\n        <div *ngFor=\"let section of array;\">\n          <div class=\"row\" id=\"{{section.id}}\" [style.height]=\"section.pixel\">\n            <div *ngFor=\"let item of section.row;\">\n              <div class=\"col\" style=\"margin:0%; padding:0%;\">\n                <img [style.height]=\"item.pixel\" [style.width]=\"item.pixel\"\n                  style=\"margin:0; padding:0; background-color: black;\" src=\"{{item.path}}\" id=\"{{item.id}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<button type=\"button\" style=\"visibility: hidden;\" id=\"gameover\" class=\"btn btn-primary\" data-toggle=\"modal\"\n  data-target=\"#gameoverModal\"></button>\n\n<div class=\"modal fade\" id=\"gameoverModal\" tabindex=\"-1\" data-keyboard=\"false\" data-backdrop=\"static\" role=\"dialog\"\n  aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color: black;\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"color: red;\">Game Over</h5>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"input-group form-group\">\n          <form [formGroup]=\"inputForm\">\n            <input (focusout)=\"messageFocusOut()\" formControlName=\"messageText\" type=\"text\"\n              style=\"width: 100%; height: 30px;\" placeholder=\"please enter a message for the scoreboard\"\n              [(ngModel)]=\"message\" class=\"form-control\">\n            <label id=\"errorText\" *ngIf=\"!isMessageValid\">Invalid Input</label>\n          </form>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\" data-dismiss=\"modal\">Okay</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<button type=\"button\" style=\"visibility: hidden;\" id=\"win\" class=\"btn btn-primary\" data-toggle=\"modal\"\n  data-target=\"#winModal\"></button>\n\n<div class=\"modal fade\" id=\"winModal\" tabindex=\"-1\" role=\"dialog\" data-keyboard=\"false\" data-backdrop=\"static\"\n  aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color: black;\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"color: greenyellow;\">WIN!</h5>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"input-group form-group\">\n          <form [formGroup]=\"inputForm\">\n            <input (focusout)=\"messageFocusOut()\" formControlName=\"messageText\" type=\"text\"\n              style=\"width: 100%; height: 30px;\" placeholder=\"please enter a message for the scoreboard\"\n              [(ngModel)]=\"message\" class=\"form-control\">\n            <label id=\"errorText\" *ngIf=\"!isMessageValid\">Invalid Input</label>\n          </form>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"loadNextLevel()\" class=\"btn btn-info\" data-dismiss=\"modal\">Play next\n          level</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\" data-dismiss=\"modal\">Okay</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<button type=\"button\" style=\"visibility: hidden;\" id=\"noLevelLeft\" class=\"btn btn-primary\" data-toggle=\"modal\"\n  data-target=\"#noLevelLeftModal\"></button>\n\n<div class=\"modal fade\" id=\"noLevelLeftModal\" tabindex=\"-1\" role=\"dialog\" data-keyboard=\"false\" data-backdrop=\"static\"\n  aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color: black;\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"color: greenyellow;\">WIN! Congratulation there is no level\n          left.</h5>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"input-group form-group\">\n          <form [formGroup]=\"inputForm\">\n            <input (focusout)=\"messageFocusOut()\" formControlName=\"messageText\" type=\"text\"\n              style=\"width: 100%; height: 30px;\" placeholder=\"please enter a message for the scoreboard\"\n              [(ngModel)]=\"message\" class=\"form-control\">\n            <label id=\"errorText\" *ngIf=\"!isMessageValid\">Invalid Input</label>\n          </form>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\" data-dismiss=\"modal\">Okay</button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 style=\"width: 0%; height: 0%\"></h1>\n    <div class=\"foo\">\n        <span class=\"letter\" data-letter=\"P\">P</span>\n        <span class=\"letter\" data-letter=\"A\">A</span>\n        <span class=\"letter\" data-letter=\"C\">C</span>\n        <span class=\"letter\" data-letter=\"M\">M</span>\n        <span class=\"letter\" data-letter=\"A\">A</span>\n        <span class=\"letter\" data-letter=\"N\">N</span>\n      </div>\n<div class=\"row\">\n    <div class=\"col-6 col-md-4\">\n        <button (click)=\"redirectToInfo()\" class=\"skew-button\"><span>Information</span></button>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <button (click)=\"redirectToLogin()\" class=\"skew-button\"><span>Login</span></button>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <button (click)=\"redirectToRegister()\" class=\"skew-button\"><span>Regristration</span></button>\n    </div>\n</div>\n      ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"position-relative overflow-hidden p-1 m-md-5 text-center bg-light\">\n    <h1 class=\"display-4\" style=\"color:rgb(73, 186, 201)\">Information about</h1>\n    <img src=\"./assets/img/pacman_title.png\" style=\"width: 50%; margin:0%\">\n</div>\n\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 py-3\">\n            <img src=\"./assets/img/pacman_funny.gif\" style=\"max-height: 300px;\">\n        </div>\n    </div>\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 py-3\">\n            <h2 class=\"display-5\">How to play ? </h2>\n        </div>\n        <div class=\"bg-success shadow-sm mx-auto\" style=\"width: 90%; height: 300px; border-radius: 21px 21px 0 0;\">\n            <p class=\"lead\">1. Registration</p>\n            <p class=\"lead\">2. Login</p>\n            <p class=\"lead\">3. Now you should see all tabs, including the game and scoreboard.</p>\n            <p class=\"lead\">3. Go to game and press \"N\" to start a new game</p>\n            <p class=\"lead\">4. Have fun and be the best!</p>\n        </div>\n    </div>\n</div>\n\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\n    <div class=\"bg-info mr-md-3 pt-3 px-3 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 p-3\">\n            <h2 class=\"display-5\">Game</h2>\n        </div>\n        <div class=\"bg-warning shadow-sm mx-auto\" style=\"width: 90%; height: 300px; border-radius: 21px 21px 0 0;\">\n            <p class=\"lead\">Switch direction with the arrow keys</p>\n            <p class=\"lead\">You have 3 lifes</p>\n            <p class=\"lead\">If you touch an ghost you lose a life</p>\n            <p class=\"lead\">To win eat all coins</p>\n            <p class=\"lead\">After a game enter a message for the scoreboard</p>\n            <p class=\"lead\">If you win, you can start a new level, their are 3 levels with other maps, faster ghosts & pacman</p>\n        </div>\n    </div>\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 py-3\">\n            <img src=\"./assets/img/pacman_meme.jpg\" style=\"max-height: 300px;\">\n        </div>\n    </div>\n</div>\n\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 py-3\">\n            <img src=\"./assets/img/pacman_meme3.jpg\" style=\"max-height: 300px;\">\n        </div>\n    </div>\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 p-3\">\n            <h2 class=\"display-5\">Points</h2>\n        </div>\n        <div class=\"bg-danger shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\">\n            <p class=\"lead\">normal coin: +1</p>\n            <p class=\"lead\">cookie activ and eating ghost: +10</p>\n            <p class=\"lead\">snail feature activ: all points are getting doubled</p>\n        </div>\n    </div>\n</div>\n\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 p-3\">\n            <h2 class=\"display-5\">Scoreboard</h2>\n        </div>\n        <div class=\"bg-warning shadow-sm mx-auto\" style=\"width: 80%; height: 250px; border-radius: 21px 21px 0 0;\">\n            <p class=\"lead\">after your login you can go to the scoreboard</p>\n            <p class=\"lead\">the scoreboard contains the top 10</p>\n            <p class=\"lead\">after a win or lose you can enter a message to show on the scoreboard</p>\n            <p class=\"lead\">your points are getting added automatically to the scoreboard</p>\n        </div>\n    </div>\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 py-3\">\n            <img src=\"./assets/img/pacman_funny3.gif\" style=\"max-height: 300px;\">\n        </div>\n    </div>\n</div>\n\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 py-3\">\n            <img src=\"./assets/img/pacman_funny4.gif\" style=\"max-height: 300px;\">\n        </div>\n    </div>\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 py-3\">\n            <h2 class=\"display-5\">Feature- snail</h2>\n            <img src=\"./assets/img/snail.png\" width=50px> \n        </div>\n        <div class=\"bg-success shadow-sm mx-auto\" style=\"width: 80%; height: 250px; border-radius: 21px 21px 0 0;\">\n            <p class=\"lead\"> if you are eating the snail, you are getting faster</p>\n            <p class=\"lead\"> activ: 7 seconds</p>\n        </div>\n    </div>\n</div>\n\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 p-3\">\n            <h2 class=\"display-5\">Feature- big coin</h2>\n            <img src=\"./assets/img/big_coin.png\" width=50px> \n        </div>\n        <div class=\"bg-danger shadow-sm mx-auto\" style=\"width: 80%; height: 200px; border-radius: 21px 21px 0 0;\">\n            <p class=\"lead\"> if you are eating the big coin, all ghosts transform into cookies ( <span><img src=\"./assets/img/cookie.png\" width=30px> )\n            </span> and you can eat them</p>\n            <p class=\"lead\"> you also earn 10 points for every ghost you eat</p>\n            <p class=\"lead\"> activ: 7 seconds</p>\n        </div>\n    </div>\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 py-3\">\n            <img src=\"./assets/img/pacman_meme4.jpg\" style=\"max-height: 250px;\">\n        </div>\n    </div>\n</div>\n\n\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 py-3\">\n            <img src=\"./assets/img/pacman_funny2.gif\" style=\"max-height: 250px;\">\n        </div>\n    </div>\n    <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n        <div class=\"my-3 p-3\">\n            <h2 class=\"display-5\">Feature- Heart</h2>\n            <img src=\"./assets/img/life.png\" width=50px> \n        </div>\n        <div class=\"bg-warning shadow-sm mx-auto\" style=\"width: 80%; height: 200px; border-radius: 21px 21px 0 0;\">\n            <p class=\"lead\"> if eating the heart you will get a life</p>\n            <p class=\"lead\"> you can have 3 lifes at maximum</p>\n            <p class=\"lead\"> if you have 3 lifes and eat another, nothing happens</p>\n        </div>\n    </div>\n</div>\n\n<footer class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-md\">\n            <div class=\"d-block mb-3 \">made by Julia Sophia Wagner</div>\n        </div>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\"\n\tintegrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<div class=\"container\" style=\"margin-top:5%\">\n\t<div class=\"d-flex justify-content-center h-100\">\n\t\t<div class=\"card\" style=\"background-color: rgba(0,0,0,0.5); width: 400px; height: 370px;\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h1 class=\"display-4\" style=\"color: white;\">Sign In</h1>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"\n\t\t\t\t\t\t\t\t\tstyle=\"color:black; width:50px; background-color: rgb(73, 186, 201); border:0 \"><i\n\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<form [formGroup]=\"inputForm\">\n\t\t\t\t\t\t\t\t<input (focusout)=\"userNameFocusOut()\" formControlName=\"userName\" type=\"text\"\n\t\t\t\t\t\t\t\t\tstyle=\"width: 200px; height: 30px;\" placeholder=\"username\" class=\"form-control\">\n\t\t\t\t\t\t\t\t<label id=\"errorText\" *ngIf=\"!isNameValid\">Invalid Input</label>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"\n\t\t\t\t\t\t\t\t\tstyle=\"color:black; width:50px; background-color: rgb(73, 186, 201); border:0 \"><i\n\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<form [formGroup]=\"inputForm\">\n\t\t\t\t\t\t\t<input (focusout)=\"passwordFocusOut()\" formControlName=\"passwordText\" name=\"passwordInput\" required minlength=\"4\" id=\"passwordInput\" type=\"password\"\n\t\t\t\t\t\t\t\tstyle=\"width: 200px; height: 30px;\" placeholder=\"password\" [(ngModel)]=\"password\"\n\t\t\t\t\t\t\t\tclass=\"form-control\">\n\t\t\t\t\t\t\t\t<label id=\"errorText\" *ngIf=\"!isPasswordValid\">Invalid Input</label>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"submit\" value=\"Login\" (click)=\"login()\" class=\"btn btn-info float-right\"\n\t\t\t\t\t\t\t\tstyle=\"width: 100px;\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer\" style=\" border:0\">\n\t\t\t\t\t<div class=\"container float-left\" style=\"color:white; width: 300px;\">\n\t\t\t\t\t\t<p>Don't have an account?</p>\n\t\t\t\t\t\t<a (click)=\"redirectToRegister()\" class=\"btn btn-outline-info\"\n\t\t\t\t\t\t\tstyle=\"color:rgb(73, 186, 201);\">Sign Up</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"container float-right\">\n\t\t\t\t\t\t<div style=\"color:rgb(73, 186, 201);\">{{this.api.loginMessage}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\"\n\tintegrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<div class=\"container\" style=\"margin-top:5%\">\n\t<div class=\"d-flex justify-content-center h-100\">\n\t\t<div class=\"card\" style=\"background-color: rgba(0,0,0,0.5); width: 400px; height: 370px;\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h1 class=\"display-4\" style=\"color: white;\">Sign Up</h1>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"\n\t\t\t\t\t\t\t\tstyle=\"color:black; width:50px; background-color: rgb(73, 186, 201); border:0 \"><i\n\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<form [formGroup]=\"inputForm\">\n\t\t\t\t\t\t\t<input (focusout)=\"userNameFocusOut()\" formControlName=\"userName\" class=\"form-control\"\n\t\t\t\t\t\t\t\ttype=\"text\" style=\"width: 200px; height: 30px;\" placeholder=\"username\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"name\">\n\t\t\t\t\t\t\t<label id=\"errorText\" *ngIf=\"!isNameValid\">Invalid Input</label>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"\n\t\t\t\t\t\t\t\tstyle=\"color:black; width:50px; background-color: rgb(73, 186, 201); border:0 \"><i\n\t\t\t\t\t\t\t\t\tclass=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<form [formGroup]=\"inputForm\">\n\t\t\t\t\t\t\t<input (focusout)=\"passwordFocusOut()\" formControlName=\"passwordText\" name=\"passwordInput\"\n\t\t\t\t\t\t\t\trequired minlength=\"4\" id=\"passwordInput\" type=\"password\"\n\t\t\t\t\t\t\t\tstyle=\"width: 200px; height: 30px;\" placeholder=\"password\" [(ngModel)]=\"password\"\n\t\t\t\t\t\t\t\tclass=\"form-control\">\n\t\t\t\t\t\t\t<label id=\"errorText\" *ngIf=\"!isPasswordValid\">Invalid Input</label>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"submit\" (click)=\"register()\" value=\"Register\" class=\"btn btn-info float-right\"\n\t\t\t\t\t\t\tstyle=\"width: 100px;\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer\" style=\" border:0\">\n\t\t\t\t\t<div class=\"container float-left\" style=\"color:white; width: 300px;\">\n\t\t\t\t\t\t<a class=\"btn btn-outline-info\" (click)=\"redirectToLogin()\"\n\t\t\t\t\t\t\tstyle=\"color:rgb(73, 186, 201);\">Login</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"container float-right\">\n\t\t\t\t\t\t<div style=\"color:rgb(73, 186, 201);\">{{this.api.registerMessage}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/score-board/score-board.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/score-board/score-board.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"display-4\">Scoreboard</h1>\n<li class=\"list-group-item row d-flex\" style=\"background-color: rgb(73, 186, 201); color:black; text-align: center; font-weight:bolder; font-size: large;\">\n    <div class=\"col-2\" type=\"text\">Place</div>\n    <div class=\"col-4\" type=\"text\">Name</div>\n    <div class=\"col-4\" type=\"text\">Message</div>\n    <div class=\"col-2\" type=\"text\">Points</div>\n</li>\n<ul class=\"list-group\" *ngFor=\"let item of ranking\">\n    <li class=\"list-group-item row d-flex\" style=\"text-align: center;\">\n        <div class=\"col-2\" style=\"text-overflow: ellipsis; overflow: hidden;\">{{item.index}}.</div>\n        <div class=\"col-4\" style=\"text-overflow: ellipsis; overflow: hidden;\">{{item.name}}</div>\n        <div class=\"col-4\" style=\"text-overflow: ellipsis; overflow: hidden;\">{{item.message}}</div>\n        <div class=\"col-2\" style=\"text-overflow: ellipsis; overflow: hidden;\">{{item.score}}</div>\n    </li>\n</ul>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _score_board_score_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score-board/score-board.component */ "./src/app/score-board/score-board.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _guard_onlyLoggedUsersGuard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guard/onlyLoggedUsersGuard */ "./src/app/guard/onlyLoggedUsersGuard.ts");










const routes = [
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"], canActivate: [_guard_onlyLoggedUsersGuard__WEBPACK_IMPORTED_MODULE_9__["OnlyLoggedInUsersGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'score-board', component: _score_board_score_board_component__WEBPACK_IMPORTED_MODULE_5__["ScoreBoardComponent"], canActivate: [_guard_onlyLoggedUsersGuard__WEBPACK_IMPORTED_MODULE_9__["OnlyLoggedInUsersGuard"]] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_7__["InfoComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: '**', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_guard_onlyLoggedUsersGuard__WEBPACK_IMPORTED_MODULE_9__["OnlyLoggedInUsersGuard"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-menu {\n  display: block;\n  visibility: hidden;\n  opacity: 0;\n  transition: 1s ease all;\n}\n\n.dropdown-menu.show {\n  display: block;\n  visibility: visible;\n  background: #81e2fa;\n  border-radius: 0%;\n  opacity: 1;\n  transition: 0.8s ease all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZDpcXEZIXFxXZWJcXEZpbmFsUHJvamVjdFxcY2xpZW50XFxQYWNNYW4vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDREQ7O0FESUE7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDREQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0b3BhY2l0eTowO1xyXG5cdHRyYW5zaXRpb246MXMgZWFzZSBhbGw7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LnNob3cge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHZpc2liaWxpdHk6IHZpc2libGU7XHJcblx0YmFja2dyb3VuZDogcmdiKDEyOSwgMjI2LCAyNTApO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAlO1xyXG5cdG9wYWNpdHk6MTtcclxuXHR0cmFuc2l0aW9uOjAuOHMgZWFzZSBhbGw7XHJcbn1cclxuIiwiLmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlIGFsbDtcbn1cblxuLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBiYWNrZ3JvdW5kOiAjODFlMmZhO1xuICBib3JkZXItcmFkaXVzOiAwJTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC44cyBlYXNlIGFsbDtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/api-client.service */ "./src/app/service/api-client.service.ts");
/* harmony import */ var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth-service.service */ "./src/app/service/auth-service.service.ts");
/* harmony import */ var _service_ranking_board_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/ranking-board.service */ "./src/app/service/ranking-board.service.ts");





let AppComponent = class AppComponent {
    constructor(apiClient, authService, scoreBoard) {
        this.apiClient = apiClient;
        this.authService = authService;
        this.scoreBoard = scoreBoard;
        this.title = 'PacMan';
        this.visible = 'hidden';
        this.apiClient.loggedStateChanged.subscribe(value => {
            if (value === true) {
                if (this.apiClient.loggedIn === true) {
                    this.visible = 'visible';
                }
                else {
                    this.visible = 'hidden';
                }
            }
        });
    }
    logout() {
        this.apiClient.logout();
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClientService"] },
    { type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _service_ranking_board_service__WEBPACK_IMPORTED_MODULE_4__["RankingBoardService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _score_board_score_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score-board/score-board.component */ "./src/app/score-board/score-board.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _service_auth_interceptor_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/auth-interceptor-service.service */ "./src/app/service/auth-interceptor-service.service.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _score_board_score_board_component__WEBPACK_IMPORTED_MODULE_5__["ScoreBoardComponent"],
            _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
            _info_info_component__WEBPACK_IMPORTED_MODULE_12__["InfoComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                useClass: _service_auth_interceptor_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptorService"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/game/game.component.scss":
/*!******************************************!*\
  !*** ./src/app/game/game.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#errorText {\n  color: red;\n}\n\ninput.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9kOlxcRkhcXFdlYlxcRmluYWxQcm9qZWN0XFxjbGllbnRcXFBhY01hbi9zcmNcXGFwcFxcZ2FtZVxcZ2FtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksVUFBQTtBQ0FKOztBREdBO0VBRUkscUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlcnJvclRleHQgXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCBcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59IiwiI2Vycm9yVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-client.service */ "./src/app/service/api-client.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let GameComponent = class GameComponent {
    constructor(api) {
        this.api = api;
        this.pacmanPath = './assets/img/pacman_right.png';
        this.isMessageValid = true;
        this.playNextLevel = false;
        this.game = new Pacman();
        this.pixelSize = 15;
        this.changed = true;
        this.array = new Array();
        this.game.InitializeField();
        this.game.showStartNewGameMessage();
        this.drawField();
        this.game.contentChanged.subscribe(value => {
            if (value === true) {
                this.ChangePacmanPath(this.game.animation);
                if (this.game.gameOver) {
                    this.handleGameOver();
                    document.getElementById('gameover').click();
                }
                else if (this.game.win) {
                    if (this.game.level < this.game.maxLevel) {
                        document.getElementById('win').click();
                    }
                    else {
                        document.getElementById('noLevelLeft').click();
                    }
                }
                this.drawField();
            }
        });
    }
    ngOnInit() {
        this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            messageText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)
            ])
        });
    }
    onKeyup(e) {
        if (e.key.toUpperCase() === 'N') {
            if (this.api.loggedIn === false) {
                alert('You have to login to play');
            }
            else if (this.game.started === false) {
                if (this.playNextLevel === false) {
                    this.game.InitializeField();
                    this.calculatePixelSize();
                    this.updatePixel();
                    this.game.startGame();
                }
                else {
                    this.game.startNextLevel();
                }
            }
        }
        else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            this.game.currentDirection = e.key;
        }
    }
    onResize(event) {
        this.calculatePixelSize();
        this.updatePixel();
    }
    messageFocusOut() {
        if (this.inputForm.get('messageText').valid) {
            this.isMessageValid = true;
        }
        else {
            this.isMessageValid = false;
        }
    }
    handleGameOver() {
        this.game.showGameOverMessage();
        this.game.showStartNewGameMessage();
    }
    loadNextLevel() {
        this.playNextLevel = true;
    }
    closeModal() {
        this.playNextLevel = false;
        this.game.gameOver = false;
        this.game.win = false;
        this.api.sendScore(this.game.points, this.message);
        this.message = '';
    }
    ChangePacmanPath(animation) {
        switch (this.game.currentDirection) {
            case 'ArrowRight':
                this.pacmanPath = './assets/img/pacman_right.gif';
                break;
            case 'ArrowLeft':
                this.pacmanPath = './assets/img/pacman_left.gif';
                break;
            case 'ArrowDown':
                this.pacmanPath = './assets/img/pacman_down.gif';
                break;
            case 'ArrowUp':
                this.pacmanPath = './assets/img/pacman_up.gif';
                break;
        }
    }
    /*
    0 ..... Wall
    1 ..... Coins
    2 ..... GhostShadow
    3 ..... GhostPinky
    4 ..... GhostInky
    5 ..... GhostClyde
    6 ..... Pacman
    7 ..... Nothing
    8 ..... Feature
    9 ..... WallBottom
    10 .... WallLeft
    11 .... WallRight
    12 .... WallTopLeft
    13 .... WallTopRight
    14 .... WallBottomLeft
    15 .... WallBottomRight
    16 .... TBottomRight
    17 .... TBottomLeft
    18 .... TTopLeft
    19 .... TTopRight
    20 .... A
    21 .... E
    22 .... G
    23 .... M
    24 .... N
    25 .... O
    26 .... P
    27 .... R
    28 .... S
    29 .... T
    34 .... V
    35 .... W
    36 .... I
    31 .... SecondFeature
    32 .... BigCoin
    33 .... Cookie
    34 .... W
    35 .... I
    */
    drawField() {
        this.array = new Array();
        let counter = 0;
        for (const col of this.game.field) {
            const temp = new FieldItem();
            temp.pixel = this.pixelSize.toString() + 'px';
            temp.row = new Array();
            temp.id = 'row' + counter;
            for (const element of col.row) {
                counter++;
                const fieldItem = new FieldItem();
                fieldItem.id = 'element' + counter.toString();
                fieldItem.pixel = this.pixelSize.toString() + 'px';
                switch (element) {
                    case 0:
                        fieldItem.path = './assets/img/wall_top.png';
                        break;
                    case 1:
                        fieldItem.path = './assets/img/coin.png';
                        break;
                    case 2:
                        if (this.game.cookieFeatureActiv) {
                            fieldItem.path = './assets/img/cookie.png';
                        }
                        else {
                            fieldItem.path = this.game.direcitonGhostBlinky.path;
                        }
                        break;
                    case 3:
                        if (this.game.cookieFeatureActiv) {
                            fieldItem.path = './assets/img/cookie.png';
                        }
                        else {
                            fieldItem.path = this.game.directionGhostClyde.path;
                        }
                        break;
                    case 4:
                        if (this.game.cookieFeatureActiv) {
                            fieldItem.path = './assets/img/cookie.png';
                        }
                        else {
                            fieldItem.path = this.game.directionGhostPinky.path;
                        }
                        break;
                    case 5:
                        if (this.game.cookieFeatureActiv) {
                            fieldItem.path = './assets/img/cookie.png';
                        }
                        else {
                            fieldItem.path = this.game.directionGhostInky.path;
                        }
                        break;
                    case 6:
                        fieldItem.path = this.pacmanPath;
                        break;
                    case 7:
                        fieldItem.path = './assets/img/blank.png';
                        break;
                    case 8:
                        fieldItem.path = './assets/img/snail.png';
                        break;
                    case 9:
                        fieldItem.path = './assets/img/wall_bottom.png';
                        break;
                    case 10:
                        fieldItem.path = './assets/img/wall_left.png';
                        break;
                    case 11:
                        fieldItem.path = './assets/img/wall_right.png';
                        break;
                    case 12:
                        fieldItem.path = './assets/img/wall_top_left_corner.png';
                        break;
                    case 13:
                        fieldItem.path = './assets/img/wall_top_right_corner.png';
                        break;
                    case 14:
                        fieldItem.path = './assets/img/wall_bottom_left_corner.png';
                        break;
                    case 15:
                        fieldItem.path = './assets/img/wall_bottom_right_corner.png';
                        break;
                    case 16:
                        fieldItem.path = './assets/img/T_bottom_right.png';
                        break;
                    case 17:
                        fieldItem.path = './assets/img/T_bottom_left.png';
                        break;
                    case 18:
                        fieldItem.path = './assets/img/T_top_left.png';
                        break;
                    case 19:
                        fieldItem.path = './assets/img/T_top_right.png';
                        break;
                    case 20:
                        fieldItem.path = './assets/img/Letters/letter_A.png';
                        break;
                    case 21:
                        fieldItem.path = './assets/img/Letters/letter_E.png';
                        break;
                    case 22:
                        fieldItem.path = './assets/img/Letters/letter_G.png';
                        break;
                    case 23:
                        fieldItem.path = './assets/img/Letters/letter_M.png';
                        break;
                    case 24:
                        fieldItem.path = './assets/img/Letters/letter_N.png';
                        break;
                    case 25:
                        fieldItem.path = './assets/img/Letters/letter_O.png';
                        break;
                    case 26:
                        fieldItem.path = './assets/img/Letters/letter_P.png';
                        break;
                    case 27:
                        fieldItem.path = './assets/img/Letters/letter_R.png';
                        break;
                    case 28:
                        fieldItem.path = './assets/img/Letters/letter_S.png';
                        break;
                    case 29:
                        fieldItem.path = './assets/img/Letters/letter_T.png';
                        break;
                    case 30:
                        fieldItem.path = './assets/img/Letters/letter_V.png';
                        break;
                    case 31:
                        fieldItem.path = './assets/img/monster.png';
                        break;
                    case 32:
                        fieldItem.path = './assets/img/big_coin.png';
                        break;
                    case 34:
                        fieldItem.path = './assets/img/Letters/letter_W.png';
                        break;
                    case 35:
                        fieldItem.path = './assets/img/Letters/letter_I.png';
                        break;
                    case 36:
                        fieldItem.path = './assets/img/life.png';
                        break;
                    case 37:
                        fieldItem.path = './assets/img/Letters/0.png';
                        break;
                    case 38:
                        fieldItem.path = './assets/img/Letters/1.png';
                        break;
                    case 39:
                        fieldItem.path = './assets/img/Letters/2.png';
                        break;
                    case 40:
                        fieldItem.path = './assets/img/Letters/3.png';
                        break;
                    case 41:
                        fieldItem.path = './assets/img/Letters/4.png';
                        break;
                    case 42:
                        fieldItem.path = './assets/img/Letters/5.png';
                        break;
                    case 43:
                        fieldItem.path = './assets/img/Letters/6.png';
                        break;
                    case 44:
                        fieldItem.path = './assets/img/Letters/7.png';
                        break;
                    case 45:
                        fieldItem.path = './assets/img/Letters/8.png';
                        break;
                    case 46:
                        fieldItem.path = './assets/img/Letters/9.png';
                        break;
                    case 47:
                        fieldItem.path = './assets/img/Letters/letter_L.png';
                        break;
                }
                temp.row.push(fieldItem);
            }
            this.array.push(temp);
        }
    }
    calculatePixelSize() {
        const height = document.documentElement.clientHeight - document.querySelector('nav').offsetHeight - 20;
        const width = document.documentElement.clientWidth;
        const maxSize = 35;
        const sizeWidth = Math.floor(width / this.array[0].row.length);
        const sizeHeight = Math.floor(height / this.array.length);
        const size = Math.min(maxSize, sizeWidth, sizeHeight);
        this.pixelSize = size;
    }
    updatePixel() {
        let counter = 0;
        for (const row of this.array) {
            document.getElementById('row' + counter.toString()).style.height = this.pixelSize.toString() + 'px';
            for (const element of row.row) {
                counter++;
                const id = 'element' + counter.toString();
                document.getElementById(id).style.height = this.pixelSize.toString() + 'px';
                document.getElementById(id).style.width = this.pixelSize.toString() + 'px';
            }
        }
    }
    startGame() {
        this.game.startGame();
    }
};
GameComponent.ctorParameters = () => [
    { type: _service_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClientService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], GameComponent.prototype, "onKeyup", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], GameComponent.prototype, "onResize", null);
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.scss */ "./src/app/game/game.component.scss")).default]
    })
], GameComponent);

class Pacman {
    constructor() {
        this.contentChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.win = false;
        this.maxLevel = 2;
        this.level = 0;
        this.direcitonGhostBlinky = new Item(2, 'blinky');
        this.directionGhostPinky = new Item(3, 'clyde');
        this.directionGhostClyde = new Item(4, 'pinky');
        this.directionGhostInky = new Item(5, 'inky');
        this.InitializeField();
        this.started = false;
        this.cookieFeatureActiv = false;
        this.timer = 200;
        this.ghostTimer = 150;
    }
    InitializeField() {
        /*
        0 ..... Wall
        1 ..... Coins
        2 ..... GhostShadow
        3 ..... GhostPinky
        4 ..... GhostInky
        5 ..... GhostClyde
        6 ..... Pacman
        7 ..... Nothing
        8 ..... Feature
        9 ..... WallBottom
        10 .... WallLeft
        11 .... WallRight
        12 .... WallTopLeft
        13 .... WallTopRight
        14 .... WallBottomLeft
        15 .... WallBottomRight
        16 .... TBottomRight
        17 .... TBottomLeft
        18 .... TTopLeft
        19 .... TTopRight
        20 .... A
        21 .... E
        22 .... G
        23 .... M
        24 .... N
        25 .... O
        26 .... P
        27 .... R
        28 .... S
        29 .... T
        30 .... V
        31 .... SecondFeature
        32 .... BigCoin
        33 .... Cookie
        34 .... W
        35 .... I
        36 .... Life
        37 .... 0
        38 .... 1
        39 .... 2
        40 .... 3
        41 .... 4
        42 .... 5
        43 .... 6
        44 .... 7
        45 .... 8
        46 .... 9
        47 .... L
    */
        if (this.level === 0) {
            this.field = [
                { row: [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 7, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13] },
                { row: [10, 1, 1, 1, 32, 1, 1, 1, 1, 1, 1, 1, 1, 11, 7, 10, 1, 1, 1, 1, 1, 1, 1, 1, 32, 1, 1, 1, 11] },
                { row: [10, 1, 12, 0, 0, 13, 1, 12, 0, 0, 0, 13, 1, 11, 7, 10, 1, 12, 0, 0, 0, 13, 1, 12, 0, 0, 13, 1, 11] },
                { row: [10, 8, 10, 7, 7, 11, 1, 10, 7, 7, 7, 11, 1, 11, 7, 10, 1, 10, 7, 7, 7, 11, 1, 10, 7, 7, 11, 1, 11] },
                { row: [10, 1, 14, 9, 9, 15, 1, 14, 9, 9, 9, 15, 1, 17, 0, 16, 1, 14, 9, 9, 9, 15, 1, 14, 9, 9, 15, 1, 11] },
                { row: [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11] },
                { row: [10, 1, 12, 0, 0, 13, 1, 12, 13, 1, 12, 0, 0, 0, 0, 0, 0, 0, 13, 1, 12, 13, 8, 12, 0, 0, 13, 1, 11] },
                { row: [10, 1, 14, 9, 9, 15, 1, 10, 11, 1, 14, 9, 9, 18, 19, 9, 9, 9, 15, 1, 10, 11, 1, 14, 9, 9, 15, 1, 11] },
                { row: [10, 1, 1, 1, 1, 1, 1, 10, 11, 1, 1, 1, 1, 10, 11, 1, 1, 1, 1, 1, 10, 11, 1, 1, 1, 1, 1, 1, 11] },
                { row: [14, 9, 9, 9, 9, 18, 1, 10, 17, 0, 0, 13, 7, 10, 11, 7, 12, 0, 0, 0, 16, 11, 1, 19, 9, 9, 9, 9, 15] },
                { row: [7, 7, 7, 7, 7, 10, 1, 10, 19, 9, 9, 15, 7, 14, 15, 7, 14, 9, 9, 9, 18, 11, 1, 11, 7, 7, 7, 7, 7] },
                { row: [7, 7, 7, 7, 7, 10, 1, 10, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 11, 1, 11, 7, 7, 7, 7, 7] },
                { row: [7, 7, 7, 7, 7, 10, 1, 10, 11, 7, 7, 7, 12, 7, 7, 7, 7, 13, 7, 7, 10, 11, 1, 11, 7, 7, 7, 7, 7] },
                { row: [0, 0, 0, 0, 0, 16, 1, 14, 15, 7, 7, 7, 10, 5, 7, 4, 7, 11, 7, 7, 14, 15, 1, 17, 0, 0, 0, 0, 0] },
                { row: [7, 7, 7, 7, 7, 7, 1, 7, 7, 7, 7, 7, 10, 7, 2, 7, 3, 11, 7, 36, 7, 7, 7, 7, 7, 7, 7, 7, 7] },
                { row: [9, 9, 9, 9, 9, 18, 1, 12, 13, 7, 7, 7, 14, 9, 9, 9, 9, 15, 7, 7, 12, 13, 1, 19, 9, 9, 9, 9, 9] },
                { row: [7, 7, 7, 7, 7, 10, 1, 10, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 11, 1, 11, 7, 7, 7, 7, 7] },
                { row: [7, 7, 7, 7, 7, 10, 1, 10, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 11, 1, 11, 7, 7, 7, 7, 7] },
                { row: [7, 7, 7, 7, 7, 10, 1, 10, 11, 7, 12, 0, 0, 0, 0, 0, 0, 0, 13, 7, 10, 11, 1, 11, 7, 7, 7, 7, 7] },
                { row: [12, 0, 0, 0, 0, 16, 1, 14, 15, 7, 14, 9, 9, 18, 19, 9, 9, 9, 15, 7, 14, 15, 1, 17, 0, 0, 0, 0, 13] },
                { row: [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11] },
                { row: [10, 1, 12, 0, 0, 13, 1, 12, 0, 0, 0, 13, 1, 10, 11, 1, 12, 0, 0, 13, 1, 12, 0, 0, 0, 0, 13, 1, 11] },
                { row: [10, 1, 14, 9, 18, 11, 1, 14, 9, 9, 9, 15, 1, 14, 15, 1, 14, 9, 9, 15, 1, 10, 19, 9, 9, 9, 15, 8, 11] },
                { row: [10, 1, 1, 1, 10, 11, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 10, 11, 1, 1, 1, 1, 1, 11] },
                { row: [14, 9, 18, 1, 14, 15, 1, 12, 13, 1, 12, 0, 0, 0, 0, 0, 13, 1, 12, 13, 1, 14, 15, 1, 19, 9, 9, 9, 15] },
                { row: [12, 0, 16, 1, 1, 1, 1, 10, 11, 1, 14, 9, 9, 18, 19, 9, 15, 1, 10, 11, 1, 1, 1, 1, 17, 0, 0, 0, 13] },
                { row: [10, 1, 1, 1, 1, 12, 0, 16, 11, 1, 1, 1, 1, 10, 11, 1, 1, 1, 10, 17, 0, 0, 13, 1, 1, 1, 1, 1, 11] },
                { row: [10, 1, 12, 13, 1, 14, 9, 9, 15, 0, 0, 13, 1, 14, 15, 1, 12, 0, 14, 9, 9, 9, 15, 1, 12, 0, 13, 1, 11] },
                { row: [10, 8, 14, 15, 1, 1, 1, 32, 1, 1, 1, 11, 1, 1, 1, 1, 10, 1, 1, 1, 32, 1, 1, 1, 14, 9, 15, 1, 11] },
                { row: [14, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 15] },
                { row: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] },
                { row: [7, 36, 36, 36, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] },
                { row: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
            ];
        }
        else if (this.level === 1) {
            this.field = [
                { row: [12, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 13, 7, 12, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 13] },
                { row: [10, 1, 1, 1, 32, 1, 1, 1, 1, 11, 1, 1, 1, 11, 7, 10, 1, 1, 1, 11, 1, 1, 1, 1, 32, 1, 2, 1, 11] },
                { row: [10, 1, 12, 0, 0, 13, 1, 12, 0, 0, 0, 13, 1, 11, 7, 10, 1, 12, 0, 0, 0, 13, 1, 12, 0, 0, 13, 1, 11] },
                { row: [10, 8, 10, 7, 7, 11, 5, 10, 7, 7, 7, 11, 1, 11, 7, 10, 1, 10, 7, 7, 7, 11, 1, 10, 7, 7, 11, 1, 11] },
                { row: [10, 1, 14, 9, 9, 15, 1, 14, 9, 9, 9, 15, 1, 17, 0, 16, 1, 14, 9, 9, 9, 15, 1, 14, 9, 9, 15, 1, 11] },
                { row: [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11] },
                { row: [10, 1, 12, 0, 0, 13, 1, 12, 13, 1, 12, 0, 0, 0, 0, 0, 0, 0, 13, 1, 12, 13, 8, 12, 0, 0, 13, 1, 11] },
                { row: [10, 1, 14, 9, 9, 15, 1, 10, 11, 1, 14, 9, 9, 18, 19, 9, 9, 9, 15, 1, 10, 11, 1, 14, 9, 9, 15, 1, 11] },
                { row: [10, 1, 1, 1, 1, 1, 1, 10, 11, 1, 1, 1, 1, 10, 11, 1, 1, 1, 1, 1, 10, 11, 1, 1, 1, 1, 1, 1, 11] },
                { row: [14, 9, 9, 9, 9, 18, 1, 10, 17, 0, 0, 13, 7, 10, 11, 7, 12, 0, 0, 0, 16, 11, 1, 19, 9, 9, 9, 9, 15] },
                { row: [7, 7, 7, 7, 7, 10, 1, 10, 19, 9, 9, 15, 7, 14, 15, 7, 14, 9, 9, 9, 18, 11, 1, 11, 7, 7, 7, 7, 7] },
                { row: [7, 7, 7, 7, 7, 10, 1, 10, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 11, 1, 11, 7, 7, 7, 7, 7] },
                { row: [7, 7, 7, 7, 7, 10, 1, 10, 11, 7, 12, 0, 0, 18, 1, 19, 0, 0, 13, 7, 10, 11, 1, 11, 7, 7, 7, 7, 7] },
                { row: [0, 0, 0, 0, 0, 16, 1, 10, 11, 7, 10, 7, 7, 10, 1, 11, 7, 7, 11, 7, 10, 11, 1, 17, 0, 0, 0, 0, 0] },
                { row: [7, 7, 7, 7, 7, 7, 1, 10, 11, 3, 10, 7, 7, 10, 36, 11, 7, 7, 11, 7, 10, 11, 1, 7, 7, 7, 7, 7, 7] },
                { row: [9, 9, 9, 9, 9, 18, 1, 10, 11, 7, 14, 9, 9, 9, 9, 9, 9, 9, 15, 7, 10, 11, 1, 19, 9, 9, 9, 9, 9] },
                { row: [7, 7, 7, 7, 7, 10, 1, 10, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 11, 1, 11, 7, 7, 7, 7, 7] },
                { row: [7, 7, 7, 7, 7, 10, 1, 10, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 11, 1, 11, 7, 7, 7, 7, 7] },
                { row: [7, 7, 7, 7, 7, 10, 1, 10, 11, 7, 12, 0, 0, 0, 0, 0, 0, 0, 13, 7, 10, 11, 1, 11, 7, 7, 7, 7, 7] },
                { row: [12, 0, 0, 0, 0, 16, 1, 14, 15, 7, 14, 9, 9, 18, 19, 9, 9, 9, 15, 7, 14, 15, 1, 17, 0, 0, 0, 0, 13] },
                { row: [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11] },
                { row: [10, 1, 12, 0, 0, 13, 1, 12, 0, 0, 0, 0, 0, 16, 17, 0, 0, 0, 0, 13, 1, 12, 0, 0, 0, 0, 13, 1, 11] },
                { row: [10, 1, 14, 9, 18, 11, 1, 14, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 15, 1, 10, 19, 9, 9, 9, 15, 8, 11] },
                { row: [10, 1, 1, 1, 10, 11, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 4, 10, 11, 1, 1, 1, 1, 1, 11] },
                { row: [14, 9, 18, 1, 14, 15, 1, 12, 13, 1, 12, 0, 0, 0, 0, 0, 13, 1, 12, 13, 1, 14, 15, 1, 19, 9, 9, 9, 15] },
                { row: [12, 0, 16, 1, 1, 1, 1, 10, 11, 1, 14, 9, 9, 18, 19, 9, 15, 1, 10, 11, 1, 1, 1, 1, 17, 0, 0, 0, 13] },
                { row: [10, 1, 1, 1, 1, 12, 0, 16, 11, 1, 1, 1, 1, 10, 11, 1, 1, 1, 10, 17, 0, 0, 13, 1, 1, 1, 1, 1, 11] },
                { row: [10, 1, 12, 13, 1, 14, 9, 9, 15, 0, 0, 13, 1, 14, 15, 1, 12, 0, 14, 9, 9, 9, 15, 1, 12, 0, 13, 1, 11] },
                { row: [10, 8, 14, 15, 1, 1, 1, 32, 1, 1, 1, 11, 1, 1, 1, 1, 10, 1, 1, 1, 32, 1, 1, 1, 14, 9, 15, 1, 11] },
                { row: [14, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 15] },
                { row: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] },
                { row: [7, 36, 36, 36, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] },
                { row: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
            ];
        }
        else if (this.level === 2) {
            this.field = [
                { row: [12, 0, 0, 0, 0, 0, 0, 0, 0, 13, 7, 12, 0, 0, 0, 0, 0, 13, 7, 12, 0, 0, 0, 0, 0, 0, 0, 0, 13] },
                { row: [10, 1, 1, 1, 32, 1, 1, 1, 1, 11, 7, 10, 1, 1, 1, 1, 1, 11, 7, 10, 1, 1, 1, 1, 32, 1, 1, 1, 11] },
                { row: [10, 1, 12, 0, 0, 0, 0, 13, 1, 11, 7, 10, 1, 12, 0, 13, 1, 11, 7, 10, 1, 12, 0, 0, 0, 0, 13, 1, 11] },
                { row: [10, 8, 10, 7, 7, 7, 7, 11, 1, 11, 7, 10, 1, 10, 7, 11, 1, 11, 7, 10, 1, 10, 7, 7, 7, 7, 11, 1, 11] },
                { row: [10, 1, 14, 9, 9, 9, 9, 15, 1, 17, 0, 16, 1, 14, 9, 15, 1, 17, 0, 16, 1, 14, 9, 9, 9, 9, 15, 1, 11] },
                { row: [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11] },
                { row: [10, 1, 12, 0, 0, 13, 1, 12, 13, 1, 12, 0, 0, 0, 0, 0, 0, 0, 13, 1, 12, 13, 8, 12, 0, 0, 13, 1, 11] },
                { row: [10, 1, 10, 7, 7, 11, 1, 10, 11, 1, 14, 9, 9, 9, 9, 9, 9, 9, 15, 1, 10, 11, 1, 10, 7, 7, 11, 1, 11] },
                { row: [10, 1, 10, 7, 7, 11, 1, 10, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 11, 1, 10, 7, 7, 11, 1, 11] },
                { row: [10, 1, 14, 9, 9, 15, 1, 10, 17, 0, 13, 1, 12, 0, 0, 0, 13, 1, 12, 0, 16, 11, 1, 14, 9, 9, 15, 1, 11] },
                { row: [10, 1, 1, 1, 1, 1, 1, 10, 19, 9, 15, 1, 14, 9, 9, 9, 15, 1, 14, 9, 18, 11, 1, 1, 1, 1, 1, 1, 11] },
                { row: [14, 9, 9, 9, 18, 1, 12, 16, 11, 7, 7, 4, 7, 7, 7, 7, 7, 3, 7, 7, 10, 17, 13, 1, 19, 9, 9, 9, 15] },
                { row: [7, 7, 7, 7, 10, 1, 10, 7, 11, 7, 12, 0, 0, 13, 1, 12, 0, 0, 13, 7, 10, 7, 11, 1, 11, 7, 7, 7, 7] },
                { row: [0, 0, 0, 0, 16, 1, 14, 9, 15, 7, 10, 7, 7, 11, 1, 10, 7, 7, 11, 7, 14, 9, 15, 1, 17, 0, 0, 0, 0] },
                { row: [1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 10, 7, 7, 11, 36, 10, 7, 7, 11, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
                { row: [9, 9, 9, 9, 18, 1, 12, 0, 13, 7, 14, 9, 9, 15, 1, 14, 9, 9, 15, 7, 12, 0, 13, 1, 19, 9, 9, 9, 9] },
                { row: [7, 7, 7, 7, 10, 1, 10, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 7, 11, 1, 11, 7, 7, 7, 7] },
                { row: [12, 0, 0, 0, 16, 1, 14, 18, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 19, 15, 1, 17, 0, 0, 0, 13] },
                { row: [10, 1, 1, 1, 1, 1, 1, 10, 17, 0, 13, 1, 12, 0, 0, 0, 13, 1, 12, 0, 16, 11, 1, 1, 1, 1, 1, 1, 11] },
                { row: [10, 1, 12, 0, 0, 13, 1, 10, 19, 9, 15, 1, 14, 9, 9, 9, 15, 1, 14, 9, 18, 11, 1, 12, 0, 0, 13, 1, 11] },
                { row: [10, 1, 10, 7, 7, 11, 1, 10, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 11, 1, 10, 7, 7, 11, 1, 11] },
                { row: [10, 1, 10, 7, 7, 11, 1, 10, 11, 1, 12, 0, 0, 0, 0, 0, 0, 0, 13, 1, 10, 11, 1, 10, 7, 7, 11, 1, 11] },
                { row: [10, 1, 14, 9, 9, 15, 1, 14, 15, 1, 14, 9, 9, 18, 7, 19, 9, 9, 15, 1, 14, 15, 1, 14, 9, 9, 15, 8, 11] },
                { row: [10, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 14, 9, 15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11] },
                { row: [10, 1, 12, 0, 0, 0, 0, 13, 1, 19, 9, 18, 1, 1, 1, 1, 1, 19, 9, 18, 1, 12, 0, 0, 0, 0, 13, 1, 11] },
                { row: [10, 1, 10, 7, 7, 7, 7, 11, 1, 11, 7, 10, 1, 12, 0, 13, 1, 11, 7, 10, 1, 10, 7, 7, 7, 7, 11, 1, 11] },
                { row: [10, 1, 10, 7, 7, 7, 7, 11, 1, 11, 7, 10, 1, 10, 7, 11, 1, 11, 7, 10, 1, 10, 7, 7, 7, 7, 11, 1, 11] },
                { row: [10, 1, 14, 9, 9, 9, 9, 15, 1, 11, 7, 10, 1, 14, 9, 15, 1, 11, 7, 10, 1, 14, 9, 9, 9, 9, 15, 1, 11] },
                { row: [10, 1, 1, 1, 1, 1, 1, 1, 1, 11, 7, 10, 1, 1, 1, 1, 1, 11, 7, 10, 1, 1, 1, 1, 1, 1, 1, 1, 11] },
                { row: [14, 9, 9, 9, 9, 9, 9, 9, 9, 15, 7, 14, 9, 9, 9, 9, 9, 15, 7, 14, 9, 9, 9, 9, 9, 9, 9, 9, 15] },
                { row: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] },
                { row: [7, 36, 36, 36, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] },
                { row: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
            ];
        }
    }
    startNextLevel() {
        this.level++;
        this.InitializeField();
        this.showLevel();
        this.checkLife();
        this.lifes++;
        this.win = false;
        this.currentDirection = 'ArrowRight';
        this.timer = this.timer / 3;
        this.ghostTimer = this.ghostTimer / 2;
        this.startTimer();
        this.startGhostTimer();
        this.sound = new Audio('../../assets/Sound/pacman_beginning.wav');
        this.sound.play();
    }
    startGame() {
        this.level = 0;
        this.win = false;
        this.InitializeField();
        this.showLevel();
        this.started = true;
        this.currentDirection = 'ArrowRight';
        this.points = 0;
        this.lifes = 2;
        this.timer = 200;
        this.ghostTimer = 150;
        this.startTimer();
        this.startGhostTimer();
        this.sound = new Audio('../../assets/Sound/pacman_beginning.wav');
        this.sound.play();
    }
    move() {
        let colCount = 0;
        let firstTime = false;
        let changed = false;
        for (const col of this.field) {
            let rowCount = 0;
            for (const element of col.row) {
                if (element === 6 && firstTime === false) {
                    switch (this.currentDirection) {
                        case 'ArrowRight':
                            changed = this.ChangeFieldPacman(colCount, rowCount, 1, 0);
                            break;
                        case 'ArrowLeft':
                            changed = this.ChangeFieldPacman(colCount, rowCount, -1, 0);
                            break;
                        case 'ArrowDown':
                            changed = this.ChangeFieldPacman(colCount, rowCount, 0, 1);
                            break;
                        case 'ArrowUp':
                            changed = this.ChangeFieldPacman(colCount, rowCount, 0, -1);
                            break;
                    }
                    firstTime = true;
                }
                rowCount++;
            }
            colCount++;
        }
        this.directionTemp = this.currentDirection;
    }
    ChangeFieldPacman(col, row, x, y) {
        let changed = false;
        try {
            this.CheckGameOverAndFeature(col + (y * 1), row + (x * 1));
            if ((this.field[col + (y * 1)].row[row + (x * 1)] > 8 && this.field[col + (y * 1)].row[row + (x * 1)] < 20) ||
                this.field[col + (y * 1)].row[row + (x * 1)] === 0) {
                changed = false;
            }
            else if (col === 14 && row === 28 && this.currentDirection === 'ArrowRight') {
                this.field[col + (y * 1)].row[0] = 6;
                this.field[col].row[row] = 7;
                changed = true;
            }
            else if (col === 14 && row === 0 && this.currentDirection === 'ArrowLeft') {
                this.field[col + (y * 1)].row[28] = 6;
                this.field[col].row[row] = 7;
                changed = true;
            }
            else if (this.field[col + (y * 1)].row[row + (x * 1)] === 2 || this.field[col + (y * 1)].row[row + (x * 1)] === 3 ||
                this.field[col + (y * 1)].row[row + (x * 1)] === 4 || this.field[col + (y * 1)].row[row + (x * 1)] === 5) {
                this.field[col].row[row] = 7;
                if (this.cookieFeatureActiv === false) {
                    this.field[col].row[row] = this.field[col + (y * 1)].row[row + (x * 1)];
                }
                this.field[col + (y * 1)].row[row + (x * 1)] = 6;
                changed = true;
            }
            else {
                this.field[col + (y * 1)].row[row + (x * 1)] = 6;
                this.field[col].row[row] = 7;
                changed = true;
            }
        }
        catch (_a) { }
        return changed;
    }
    CheckGameOverAndFeature(colOfPacman, rowOfPacman) {
        let colCount = 0;
        let win = true;
        for (const col of this.field) {
            let rowCount = 0;
            for (const element of col.row) {
                if (element === 36 && colCount === colOfPacman && rowCount === rowOfPacman) {
                    if (this.lifes < 2) {
                        this.lifes++;
                        this.showLifes();
                        this.sound = new Audio('../../assets/Sound/pacman_eatfruit.wav');
                        this.sound.play();
                    }
                }
                if (element === 8 && colCount === colOfPacman && rowCount === rowOfPacman) {
                    this.startSpeedFeature();
                }
                else if (element === 1 && colCount === colOfPacman && rowCount === rowOfPacman) {
                    this.points++;
                    this.showScore();
                }
                else if (element === 32 && colCount === colOfPacman && rowCount === rowOfPacman) {
                    this.sound = new Audio('../../assets/Sound/pacman_eatfruit.wav');
                    this.sound.play();
                    this.startCookieFeature();
                }
                else if (this.cookieFeatureActiv && (element === 2 || element === 3 || element === 4 || element === 5)) {
                    this.points = this.points + 10;
                }
                else if (this.directionGhostPinky.element === element || element === this.direcitonGhostBlinky.element ||
                    element === this.directionGhostClyde.element || element === this.directionGhostInky.element) {
                    if (colCount === colOfPacman && rowOfPacman === rowCount) {
                        if (this.lifes < 1) {
                            this.contentChanged.next(true);
                            this.sound = new Audio('../../assets/Sound/pacman_death.wav');
                            this.stopGame();
                            this.checkLife();
                            this.gameOver = true;
                            this.showGameOverMessage();
                            this.showStartNewGameMessage();
                            this.sound.play();
                        }
                        else {
                            this.checkLife();
                        }
                    }
                }
                else if (element === 1) {
                    win = false;
                }
                rowCount++;
            }
            colCount++;
        }
        if (win === true) {
            this.stopGhostTimer();
            this.stopTimer();
            this.started = false;
            this.showStartNewGameMessage();
            this.win = true;
            this.showWinMessage();
            this.contentChanged.next(true);
        }
    }
    startCookieFeature() {
        this.cookieFeatureActiv = true;
        const timeOut = setTimeout(() => {
            this.cookieFeatureActiv = false;
            clearTimeout(timeOut);
        }, (7000));
    }
    ChangeFieldGhosts(col, row, x, y, ghost) {
        let changed = true;
        try {
            // if the next element is wall it should change the direction again
            if ((this.field[col + (y * 1)].row[row + (x * 1)] > 8 && this.field[col + (y * 1)].row[row + (x * 1)] < 20) ||
                this.field[col + (y * 1)].row[row + (x * 1)] === 0) {
                changed = false;
            }
            else if (col === 14 && row === 28 && ghost.direction === 0) {
                this.field[col].row[row] = 7;
                this.field[col].row[0] = ghost.element;
                changed = true;
            }
            else if (col === 14 && row === 0 && ghost.direction === 1) {
                this.field[col].row[row] = 7;
                this.field[col].row[28] = ghost.element;
                changed = true;
            }
            else if (this.field[col + (y * 1)].row[row + (x * 1)] === 6) {
                // this.stopGame();
            }
            else {
                this.field[col].row[row] = ghost.lastElement;
                ghost.lastElement = this.field[col + (y * 1)].row[row + (x * 1)];
                this.field[col + (y * 1)].row[row + (x * 1)] = ghost.element;
                changed = true;
            }
        }
        catch (_a) { }
        return changed;
    }
    checkLife() {
        this.lifes--;
        this.showLifes();
    }
    startSpeedFeature() {
        this.stopTimer();
        this.timer = 30;
        this.startTimer();
        const timeOut = setTimeout(() => {
            this.stopTimer();
            this.timer = 200;
            this.startTimer();
            clearTimeout(timeOut);
        }, (7000));
    }
    moveGhosts(ghost) {
        let colCount = 0;
        let firstTime = false;
        for (const col of this.field) {
            let rowCount = 0;
            for (const element of col.row) {
                if (element === ghost.element && firstTime === false) {
                    let changed = false;
                    let randomDirection = ghost.direction;
                    do {
                        let test = 0;
                        if (this.field[colCount + 1].row[rowCount] === 7 || this.field[colCount + 1].row[rowCount] === 1) {
                            test++;
                        }
                        if (this.field[colCount - 1].row[rowCount] === 7 || this.field[colCount - 1].row[rowCount] === 1) {
                            test++;
                        }
                        if (this.field[colCount].row[rowCount + 1] === 7 || this.field[colCount].row[rowCount + 1] === 1) {
                            test++;
                        }
                        if (this.field[colCount].row[rowCount - 1] === 7 || this.field[colCount].row[rowCount - 1] === 1) {
                            test++;
                        }
                        if (test > 2) {
                            randomDirection = Math.floor(Math.random() * Math.floor(4));
                        }
                        switch (randomDirection) {
                            case 0:
                                changed = this.ChangeFieldGhosts(colCount, rowCount, 1, 0, ghost);
                                break;
                            case 1:
                                changed = this.ChangeFieldGhosts(colCount, rowCount, -1, 0, ghost);
                                break;
                            case 2:
                                changed = this.ChangeFieldGhosts(colCount, rowCount, 0, 1, ghost);
                                break;
                            case 3:
                                changed = this.ChangeFieldGhosts(colCount, rowCount, 0, -1, ghost);
                                break;
                        }
                        if (changed === false) {
                            randomDirection = Math.floor(Math.random() * Math.floor(4));
                        }
                    } while (changed === false);
                    firstTime = true;
                    ghost.direction = randomDirection;
                }
                rowCount++;
            }
            colCount++;
        }
    }
    stopGame() {
        this.stopGhostTimer();
        this.stopTimer();
        this.started = false;
    }
    startTimer() {
        this.stopTimer();
        this.moveTimer = setInterval(() => {
            this.move();
            if (this.animation) {
                this.animation = false;
            }
            else {
                this.animation = true;
            }
            this.contentChanged.next(true);
            if (this.gameOver) {
                this.stopGame();
            }
        }, this.timer);
    }
    startGhostTimer() {
        this.moveGhostTimer = setInterval(() => {
            this.moveGhosts(this.direcitonGhostBlinky);
            this.moveGhosts(this.directionGhostClyde);
            this.moveGhosts(this.directionGhostInky);
            this.moveGhosts(this.directionGhostPinky);
        }, this.ghostTimer);
    }
    stopGhostTimer() {
        clearInterval(this.moveGhostTimer);
    }
    stopTimer() {
        clearInterval(this.moveTimer);
    }
    showLevel() {
        let length = this.level.toString().length + 1;
        const levelTemp = this.level + 1;
        this.field[31].row[9] = 47;
        this.field[31].row[10] = 21;
        this.field[31].row[11] = 30;
        this.field[31].row[12] = 21;
        this.field[31].row[13] = 47;
        for (const value of levelTemp.toString()) {
            this.field[31].row[13 + length] = 37 + Number(value);
            length--;
        }
    }
    showLifes() {
        for (let i = 0; i < 4; i++) {
            if (i <= this.lifes) {
                this.field[31].row[i + 1] = 36;
            }
            else {
                this.field[31].row[i + 1] = 7;
            }
        }
    }
    showScore() {
        let length = this.points.toString().length + 2;
        for (const value of this.points.toString()) {
            this.field[31].row[28 - length] = 37 + Number(value);
            length--;
        }
    }
    showGameOverMessage() {
        this.field[11].row[10] = 22;
        this.field[11].row[11] = 20;
        this.field[11].row[12] = 23;
        this.field[11].row[13] = 21;
        this.field[11].row[15] = 25;
        this.field[11].row[16] = 30;
        this.field[11].row[17] = 21;
        this.field[11].row[18] = 27;
    }
    showWinMessage() {
        this.field[11].row[14] = 34;
        this.field[11].row[15] = 35;
        this.field[11].row[16] = 24;
    }
    showStartNewGameMessage() {
        this.field[16].row[11] = 26;
        this.field[16].row[12] = 27;
        this.field[16].row[13] = 21;
        this.field[16].row[14] = 28;
        this.field[16].row[15] = 28;
        this.field[16].row[17] = 24;
        this.field[17].row[11] = 29;
        this.field[17].row[12] = 25;
        this.field[17].row[14] = 28;
        this.field[17].row[15] = 29;
        this.field[17].row[16] = 20;
        this.field[17].row[17] = 27;
        this.field[17].row[18] = 29;
    }
    changeGhostPath() {
        this.direcitonGhostBlinky.changePath();
        this.directionGhostClyde.changePath();
        this.directionGhostInky.changePath();
        this.directionGhostPinky.changePath();
    }
}
class Item {
    constructor(element, name) {
        this.direction = 0;
        this.element = element;
        this.lastElement = 7;
        this.name = name;
        this.folderpath = './assets/img/';
        this.changePath();
    }
    changePath() {
        switch (this.direction) {
            case 0:
                this.path = this.folderpath + this.name + '_right.png';
                break;
            case 1:
                this.path = this.folderpath + this.name + '_left.png';
                break;
            case 2:
                this.path = this.folderpath + this.name + '_down.png';
                break;
            case 3:
                this.path = this.folderpath + this.name + '_up.png';
                break;
        }
    }
}
class FieldItem {
}


/***/ }),

/***/ "./src/app/guard/onlyLoggedUsersGuard.ts":
/*!***********************************************!*\
  !*** ./src/app/guard/onlyLoggedUsersGuard.ts ***!
  \***********************************************/
/*! exports provided: OnlyLoggedInUsersGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyLoggedInUsersGuard", function() { return OnlyLoggedInUsersGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_api_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api-client.service */ "./src/app/service/api-client.service.ts");




let OnlyLoggedInUsersGuard = class OnlyLoggedInUsersGuard {
    constructor(apiClient, router) {
        this.apiClient = apiClient;
        this.router = router;
    }
    canActivate() {
        if (this.apiClient.loggedIn === true) {
            return true;
        }
        else {
            alert('You don\'t have permission to view this page');
            this.router.navigate([`home`]);
            return false;
        }
    }
};
OnlyLoggedInUsersGuard.ctorParameters = () => [
    { type: _service_api_client_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OnlyLoggedInUsersGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OnlyLoggedInUsersGuard);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Lato:900);\n@import 'https://fonts.googleapis.com/css?family=Anton';\n*, *:before, *:after {\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Lato\", sans-serif;\n}\ndiv.foo {\n  width: 90%;\n  margin: 0 auto;\n  text-align: center;\n}\n.letter {\n  display: inline-block;\n  font-weight: 900;\n  font-size: 8em;\n  margin: 0.2em;\n  position: relative;\n  color: #49bac9;\n  transform-style: preserve-3d;\n  perspective: 400;\n  z-index: 1;\n}\n.letter:before, .letter:after {\n  position: absolute;\n  content: attr(data-letter);\n  transform-origin: top left;\n  top: 0;\n  left: 0;\n}\n.letter, .letter:before, .letter:after {\n  transition: all 0.3s ease-in-out;\n}\n.letter:before {\n  color: #af0f6c;\n  text-shadow: -1px 0px 2px rgba(255, 255, 255, 0.8), 1px 0px 2px rgba(0, 0, 0, 0.8);\n  z-index: 3;\n  transform: rotateX(0deg) rotateY(-15deg) rotateZ(0deg);\n}\n.letter:after {\n  color: rgba(0, 0, 0, 0.11);\n  z-index: 2;\n  transform: scale(1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 1deg);\n}\n.letter:hover:before {\n  color: #fafafa;\n  transform: rotateX(0deg) rotateY(-40deg) rotateZ(0deg);\n}\n.letter:hover:after {\n  transform: scale(1.08, 1) rotateX(0deg) rotateY(40deg) rotateZ(0deg) skew(0deg, 22deg);\n}\n* {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  height: 100vh;\n  background-color: #071432;\n}\n.skew-button {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n.skew-button {\n  cursor: pointer;\n  outline: none;\n  transform: translate3d(-50%, -50%, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  font: 1.3rem \"Anton\", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #fff;\n}\n.skew-button span {\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 20px 50px;\n  z-index: 3;\n  color: #5bc9d8;\n}\n.skew-button:before,\n.skew-button span:before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) skewX(-20deg);\n  width: 100%;\n  height: 50px;\n  border: 1px solid #d3096e;\n  z-index: 2;\n}\n.skew-button span:before {\n  display: block;\n  transform: translate(-50%, -50%) skew(-20deg);\n  transform-origin: center center;\n  z-indeX: -1;\n}\n.skew-button:after {\n  transition: all 100ms ease-out;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform: skewX(-20deg) scaleX(0);\n  width: 100%;\n  height: 100%;\n  background-color: #49bac9;\n  border: 1px solid transparent;\n  z-index: 1;\n}\n.skew-button:hover span:before {\n  -webkit-animation: fill 0.5s ease-out;\n          animation: fill 0.5s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.skew-button:hover:after {\n  -webkit-animation: swoosh 0.7s ease-in;\n          animation: swoosh 0.7s ease-in;\n}\n.skew-button:active:before {\n  background-color: #030d1b;\n}\n@-webkit-keyframes swoosh {\n  0% {\n    transform-origin: left center;\n  }\n  20% {\n    transform: skewX(-20deg) scaleX(1);\n    transform-origin: left center;\n  }\n  21% {\n    transform-origin: right center;\n  }\n  50% {\n    transform: skewX(-20deg) scaleX(0);\n    transform-origin: right center;\n  }\n}\n@keyframes swoosh {\n  0% {\n    transform-origin: left center;\n  }\n  20% {\n    transform: skewX(-20deg) scaleX(1);\n    transform-origin: left center;\n  }\n  21% {\n    transform-origin: right center;\n  }\n  50% {\n    transform: skewX(-20deg) scaleX(0);\n    transform-origin: right center;\n  }\n}\n@-webkit-keyframes fill {\n  0% {\n    background-color: rgba(10, 25, 46, 0);\n  }\n  20% {\n    opacity: 0.5;\n    border-width: 15px;\n    border-color: black;\n  }\n  100% {\n    opacity: 0.5;\n    border-width: 1px;\n    background-color: rgba(4, 24, 54, 0.5);\n  }\n}\n@keyframes fill {\n  0% {\n    background-color: rgba(10, 25, 46, 0);\n  }\n  20% {\n    opacity: 0.5;\n    border-width: 15px;\n    border-color: black;\n  }\n  100% {\n    opacity: 0.5;\n    border-width: 1px;\n    background-color: rgba(4, 24, 54, 0.5);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kOlxcRkhcXFdlYlxcRmluYWxQcm9qZWN0XFxjbGllbnRcXFBhY01hbi9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZEQUFBO0FBMEVBLHVEQUFBO0FBekVSO0VBQ0Usc0JBQUE7QUNFRjtBREFBO0VBQ0UsK0JBQUE7QUNHRjtBREFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0dGO0FEREE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0lGO0FERkE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0tGO0FESEE7RUFDRSxnQ0FBQTtBQ01GO0FESkE7RUFDRSxjQUFBO0VBQ0Esa0ZBQ0U7RUFFRixVQUFBO0VBQ0Esc0RBQ0U7QUNJSjtBREFBO0VBQ0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0Esb0ZBQ0U7QUNFSjtBRElBO0VBQ0UsY0FBQTtFQUNBLHNEQUNFO0FDRko7QURNQTtFQUNFLHNGQUNFO0FDSko7QURnQkE7RUFDQyxzQkFBQTtBQ2JEO0FEZ0JBO0VBQ0MsZ0JBQUE7QUNiRDtBRGdCQTtFQUNDLGFBQUE7RUFDQSx5QkFBQTtBQ2JEO0FEZ0JBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ2JEO0FEaUJBO0VBQ0MsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNkRDtBRGlCQztFQUNDLCtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ2ZKO0FEbUJDOztFQUVDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsOENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ2pCRjtBRG9CQztFQUNDLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQ2xCRjtBRHNCQztFQUNDLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUNwQkY7QUR5QkU7RUFDQyxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQ3ZCSDtBRDBCRTtFQUNDLHNDQUFBO1VBQUEsOEJBQUE7QUN4Qkg7QUQ4QkU7RUFDQyx5QkFBQTtBQzVCSDtBRG1DQTtFQUNDO0lBQ0MsNkJBQUE7RUNoQ0E7RURtQ0Q7SUFDQyxrQ0FBQTtJQUNBLDZCQUFBO0VDakNBO0VEb0NEO0lBQ0MsOEJBQUE7RUNsQ0E7RURxQ0Q7SUFDQyxrQ0FBQTtJQUNBLDhCQUFBO0VDbkNBO0FBQ0Y7QURrQkE7RUFDQztJQUNDLDZCQUFBO0VDaENBO0VEbUNEO0lBQ0Msa0NBQUE7SUFDQSw2QkFBQTtFQ2pDQTtFRG9DRDtJQUNDLDhCQUFBO0VDbENBO0VEcUNEO0lBQ0Msa0NBQUE7SUFDQSw4QkFBQTtFQ25DQTtBQUNGO0FEc0NBO0VBQ0M7SUFDQyxxQ0FBQTtFQ3BDQTtFRHVDRDtJQUNDLFlBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDckNBO0VEd0NEO0lBQ0MsWUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0NBQUE7RUN0Q0E7QUFDRjtBRHVCQTtFQUNDO0lBQ0MscUNBQUE7RUNwQ0E7RUR1Q0Q7SUFDQyxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ3JDQTtFRHdDRDtJQUNDLFlBQUE7SUFDQSxpQkFBQTtJQUNBLHNDQUFBO0VDdENBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo5MDApO1xyXG4qLCAqOmJlZm9yZSwgKjphZnRlcntcclxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbn1cclxuYm9keXtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgO1xyXG59XHJcbmRpdi5mb297XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxldHRlcntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDhlbTtcclxuICBtYXJnaW46IDAuMmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogcmdiKDczLCAxODYsIDIwMSk7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICBwZXJzcGVjdGl2ZTogNDAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmxldHRlcjpiZWZvcmUsIC5sZXR0ZXI6YWZ0ZXJ7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgY29udGVudDogYXR0cihkYXRhLWxldHRlcik7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG59XHJcbi5sZXR0ZXIsIC5sZXR0ZXI6YmVmb3JlLCAubGV0dGVyOmFmdGVye1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5sZXR0ZXI6YmVmb3Jle1xyXG4gIGNvbG9yOiByZ2IoMTc1LCAxNSwgMTA4KTtcclxuICB0ZXh0LXNoYWRvdzogXHJcbiAgICAtMXB4IDBweCAycHggcmdiYSgyNTUsMjU1LDI1NSwuOCksXHJcbiAgICAxcHggMHB4IDJweCByZ2JhKDAsMCwwLC44KTtcclxuICB6LWluZGV4OiAzO1xyXG4gIHRyYW5zZm9ybTpcclxuICAgIHJvdGF0ZVgoMGRlZylcclxuICAgIHJvdGF0ZVkoLTE1ZGVnKVxyXG4gICAgcm90YXRlWigwZGVnKTtcclxufVxyXG4ubGV0dGVyOmFmdGVye1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC4xMSk7XHJcbiAgei1pbmRleDoyO1xyXG4gIHRyYW5zZm9ybTpcclxuICAgIHNjYWxlKDEuMDgsMSlcclxuICAgIHJvdGF0ZVgoMGRlZylcclxuICAgIHJvdGF0ZVkoMGRlZylcclxuICAgIHJvdGF0ZVooMGRlZylcclxuICAgIHNrZXcoMGRlZywxZGVnKTtcclxufVxyXG4ubGV0dGVyOmhvdmVyOmJlZm9yZXtcclxuICBjb2xvcjogI2ZhZmFmYTtcclxuICB0cmFuc2Zvcm06XHJcbiAgICByb3RhdGVYKDBkZWcpXHJcbiAgICByb3RhdGVZKC00MGRlZylcclxuICAgIHJvdGF0ZVooMGRlZyk7XHJcbn1cclxuLmxldHRlcjpob3ZlcjphZnRlcntcclxuICB0cmFuc2Zvcm06XHJcbiAgICBzY2FsZSgxLjA4LDEpXHJcbiAgICByb3RhdGVYKDBkZWcpXHJcbiAgICByb3RhdGVZKDQwZGVnKVxyXG4gICAgcm90YXRlWigwZGVnKVxyXG4gICAgc2tldygwZGVnLDIyZGVnKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBidXR0b25zOlxyXG5AaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW50b24nO1xyXG5cclxuKiB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCB7XHJcblx0Zm9udC1zaXplOiA2Mi41JTtcdFxyXG59XHJcblxyXG5ib2R5IHtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwNzE0MzI7XHJcbn1cclxuXHJcbi5za2V3LWJ1dHRvbiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0b3A6IDUwJTtcclxufVxyXG5cclxuLy8gU2tldyBidXR0b25cclxuLnNrZXctYnV0dG9uIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xyXG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGZvbnQ6IDEuM3JlbSAnQW50b24nLCBzYW5zLXNlcmlmO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdFxyXG5cdC8vIFRleHRcclxuXHRzcGFuIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0cGFkZGluZzogMjBweCA1MHB4O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGNvbG9yOiByZ2IoOTEsIDIwMSwgMjE2KTtcclxuXHR9XHJcblx0XHJcblx0Ly8gQm9yZGVyXHJcblx0JjpiZWZvcmUsXHJcblx0c3BhbjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHR0b3A6IDUwJTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNrZXdYKC0yMGRlZyk7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTEsIDksIDExMCk7XHJcblx0XHR6LWluZGV4OiAyO1xyXG5cdH1cclxuXHRcclxuXHRzcGFuOmJlZm9yZSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNrZXcoLTIwZGVnKTtcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcblx0XHR6LWluZGVYOiAtMTtcclxuXHR9XHJcblx0XHJcblx0Ly8gRmlsbFxyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0dHJhbnNmb3JtOiBza2V3WCgtMjBkZWcpIHNjYWxlWCgwKTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCAxODYsIDIwMSk7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRcdHotaW5kZXg6IDE7XHJcblx0fVxyXG5cdFxyXG5cdC8vIEhvdmVyXHJcblx0Jjpob3ZlciB7XHJcblx0XHRzcGFuOmJlZm9yZSB7XHJcblx0XHRcdGFuaW1hdGlvbjogZmlsbCAuNXMgZWFzZS1vdXQ7XHJcblx0XHRcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdFx0YW5pbWF0aW9uOiBzd29vc2ggLjdzIGVhc2UtaW47XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8vIEFjdGl2ZVxyXG5cdCY6YWN0aXZlIHtcclxuXHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCMwZTM4NzYsIDIwJSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBBbmltYXRpb25cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQGtleWZyYW1lcyBzd29vc2gge1xyXG5cdDAlIHtcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQyMCUge1xyXG5cdFx0dHJhbnNmb3JtOiBza2V3WCgtMjBkZWcpIHNjYWxlWCgxKTtcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQyMSUge1xyXG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQ1MCUge1xyXG5cdFx0dHJhbnNmb3JtOiBza2V3WCgtMjBkZWcpIHNjYWxlWCgwKTtcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcclxuXHR9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmlsbCB7XHJcblx0MCUge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMGExOTJlLCAwKTtcclxuXHR9XHJcblx0XHJcblx0MjAlIHtcclxuXHRcdG9wYWNpdHk6IC41O1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxNXB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiBkYXJrZW4oIzA1MTUyYywgMTAlKTtcclxuXHR9XHJcblx0XHJcblx0MTAwJSB7XHJcblx0XHRvcGFjaXR5OiAuNTtcclxuXHRcdGJvcmRlci13aWR0aDogMXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDQxODM2LCAwLjUpO1xyXG5cdH1cclxufSIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjkwMCk7XG5AaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW50b24nO1xuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5kaXYuZm9vIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxldHRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiA4ZW07XG4gIG1hcmdpbjogMC4yZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM0OWJhYzk7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHBlcnNwZWN0aXZlOiA0MDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5sZXR0ZXI6YmVmb3JlLCAubGV0dGVyOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBhdHRyKGRhdGEtbGV0dGVyKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmxldHRlciwgLmxldHRlcjpiZWZvcmUsIC5sZXR0ZXI6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmxldHRlcjpiZWZvcmUge1xuICBjb2xvcjogI2FmMGY2YztcbiAgdGV4dC1zaGFkb3c6IC0xcHggMHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksIDFweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgei1pbmRleDogMztcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDBkZWcpO1xufVxuXG4ubGV0dGVyOmFmdGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMSk7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCwgMSkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgc2tldygwZGVnLCAxZGVnKTtcbn1cblxuLmxldHRlcjpob3ZlcjpiZWZvcmUge1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoLTQwZGVnKSByb3RhdGVaKDBkZWcpO1xufVxuXG4ubGV0dGVyOmhvdmVyOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4LCAxKSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoNDBkZWcpIHJvdGF0ZVooMGRlZykgc2tldygwZGVnLCAyMmRlZyk7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzE0MzI7XG59XG5cbi5za2V3LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbn1cblxuLnNrZXctYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250OiAxLjNyZW0gXCJBbnRvblwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNrZXctYnV0dG9uIHNwYW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggNTBweDtcbiAgei1pbmRleDogMztcbiAgY29sb3I6ICM1YmM5ZDg7XG59XG4uc2tldy1idXR0b246YmVmb3JlLFxuLnNrZXctYnV0dG9uIHNwYW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBza2V3WCgtMjBkZWcpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDMwOTZlO1xuICB6LWluZGV4OiAyO1xufVxuLnNrZXctYnV0dG9uIHNwYW46YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNrZXcoLTIwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgei1pbmRlWDogLTE7XG59XG4uc2tldy1idXR0b246YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHNrZXdYKC0yMGRlZykgc2NhbGVYKDApO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDliYWM5O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogMTtcbn1cbi5za2V3LWJ1dHRvbjpob3ZlciBzcGFuOmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogZmlsbCAwLjVzIGVhc2Utb3V0O1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5za2V3LWJ1dHRvbjpob3ZlcjphZnRlciB7XG4gIGFuaW1hdGlvbjogc3dvb3NoIDAuN3MgZWFzZS1pbjtcbn1cbi5za2V3LWJ1dHRvbjphY3RpdmU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMGQxYjtcbn1cblxuQGtleWZyYW1lcyBzd29vc2gge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0yMGRlZykgc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICB9XG4gIDIxJSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMjBkZWcpIHNjYWxlWCgwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmlsbCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAyNSwgNDYsIDApO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGJvcmRlci13aWR0aDogMTVweDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQsIDI0LCA1NCwgMC41KTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirectToRegister() {
        this.router.navigate([`register`]);
    }
    redirectToLogin() {
        this.router.navigate([`login`]);
    }
    redirectToInfo() {
        this.router.navigate([`info`]);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/info/info.component.scss":
/*!******************************************!*\
  !*** ./src/app/info/info.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 768px) {\n  .flex-md-equal > * {\n    flex: 1;\n  }\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9kOlxcRkhcXFdlYlxcRmluYWxQcm9qZWN0XFxjbGllbnRcXFBhY01hbi9zcmNcXGFwcFxcaW5mb1xcaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFFRSxPQUFBO0VDQUY7QUFDRjtBREdBO0VBQW1CLGdCQUFBO0FDQW5CIiwiZmlsZSI6InNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5mbGV4LW1kLWVxdWFsID4gKiB7XHJcbiAgICAtbXMtZmxleDogMTtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4ub3ZlcmZsb3ctaGlkZGVuIHsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4iLCJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZsZXgtbWQtZXF1YWwgPiAqIHtcbiAgICAtbXMtZmxleDogMTtcbiAgICBmbGV4OiAxO1xuICB9XG59XG4ub3ZlcmZsb3ctaGlkZGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoComponent = class InfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.component.scss */ "./src/app/info/info.component.scss")).default]
    })
], InfoComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#errorText {\n  color: red;\n}\n\ninput.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vZDpcXEZIXFxXZWJcXEZpbmFsUHJvamVjdFxcY2xpZW50XFxQYWNNYW4vc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxVQUFBO0FDQUo7O0FER0E7RUFFSSxxQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXJyb3JUZXh0IFxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQgXHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufSIsIiNlcnJvclRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_api_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api-client.service */ "./src/app/service/api-client.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this.isNameValid = true;
        this.isPasswordValid = true;
    }
    ngOnInit() {
        this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)
            ]),
            passwordText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)
            ])
        });
    }
    redirectToRegister() {
        this.router.navigate([`register`]);
    }
    login() {
        if (this.isNameValid && this.isPasswordValid) {
            this.api.login(this.inputForm.get('userName').value, this.inputForm.get('passwordText').value);
        }
    }
    userNameFocusOut() {
        if (this.inputForm.get('userName').valid) {
            this.isNameValid = true;
        }
        else {
            this.isNameValid = false;
        }
    }
    passwordFocusOut() {
        if (this.inputForm.get('passwordText').valid) {
            this.isPasswordValid = true;
        }
        else {
            this.isPasswordValid = false;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_api_client_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#errorText {\n  color: red;\n}\n\ninput.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvZDpcXEZIXFxXZWJcXEZpbmFsUHJvamVjdFxcY2xpZW50XFxQYWNNYW4vc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxVQUFBO0FDQUo7O0FER0E7RUFFSSxxQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXJyb3JUZXh0IFxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQgXHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufSIsIiNlcnJvclRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_api_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api-client.service */ "./src/app/service/api-client.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let RegisterComponent = class RegisterComponent {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this.isNameValid = true;
        this.isPasswordValid = true;
    }
    ngOnInit() {
        this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)
            ]),
            passwordText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)
            ])
        });
    }
    redirectToLogin() {
        this.router.navigate([`login`]);
    }
    register() {
        if (this.isNameValid && this.isPasswordValid) {
            this.api.register(this.inputForm.get('userName').value, this.inputForm.get('passwordText').value);
        }
    }
    userNameFocusOut() {
        if (this.inputForm.get('userName').valid) {
            this.isNameValid = true;
        }
        else {
            this.isNameValid = false;
        }
    }
    passwordFocusOut() {
        if (this.inputForm.get('passwordText').valid) {
            this.isPasswordValid = true;
        }
        else {
            this.isPasswordValid = false;
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_api_client_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/score-board/score-board.component.scss":
/*!********************************************************!*\
  !*** ./src/app/score-board/score-board.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njb3JlLWJvYXJkL3Njb3JlLWJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/score-board/score-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/score-board/score-board.component.ts ***!
  \******************************************************/
/*! exports provided: ScoreBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreBoardComponent", function() { return ScoreBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_ranking_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/ranking-board.service */ "./src/app/service/ranking-board.service.ts");
/* harmony import */ var _service_api_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api-client.service */ "./src/app/service/api-client.service.ts");




let ScoreBoardComponent = class ScoreBoardComponent {
    constructor(rankingService, apiService) {
        this.rankingService = rankingService;
        this.apiService = apiService;
        apiService.contentChanged.subscribe(value => {
            if (value === true) {
                this.ranking = this.rankingService.scores;
                console.log(this.rankingService.scores);
            }
        });
    }
    ngOnInit() {
    }
};
ScoreBoardComponent.ctorParameters = () => [
    { type: _service_ranking_board_service__WEBPACK_IMPORTED_MODULE_2__["RankingBoardService"] },
    { type: _service_api_client_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ScoreBoardComponent.prototype, "ranking", void 0);
ScoreBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-score-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./score-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/score-board/score-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./score-board.component.scss */ "./src/app/score-board/score-board.component.scss")).default]
    })
], ScoreBoardComponent);



/***/ }),

/***/ "./src/app/service/api-client.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/api-client.service.ts ***!
  \***********************************************/
/*! exports provided: ApiClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiClientService", function() { return ApiClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/service/auth-service.service.ts");
/* harmony import */ var _ranking_board_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ranking-board.service */ "./src/app/service/ranking-board.service.ts");






let ApiClientService = class ApiClientService {
    constructor(http, auth, scoreBoard) {
        this.http = http;
        this.auth = auth;
        this.scoreBoard = scoreBoard;
        this.contentChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.loggedStateChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.loggedIn = false;
        this.timer = 5000;
        this.startApiClientPolling();
    }
    polling() {
        this.http.get('http://localhost:3000/scoreboard', { responseType: 'json' }).subscribe(data => {
            const jsonTemp = JSON.parse(JSON.stringify(data));
            this.scoreBoard.scores = jsonTemp.ranking;
            this.contentChanged.next(true);
        }, error => console.log(error));
    }
    login(username, password) {
        this.name = username;
        const data = {
            username,
            password
        };
        this.http.post('http://localhost:3000/signin', data).subscribe(x => {
            this.auth.token = x.token;
            if (this.auth.token.length > 1) {
                this.loggedIn = true;
                this.loginMessage = 'Login successful as ' + this.name;
                this.loggedStateChanged.next(true);
            }
            else {
                this.loggedIn = false;
                this.loginMessage = 'Wrong input, are you already registered?';
            }
        }, error => { console.error(error); this.loginMessage = 'Wrong input, are you already registered?'; });
    }
    sendScore(score, message) {
        const data = {
            score,
            message
        };
        this.http.post('http://localhost:3000/score', data).subscribe(x => { }, error => { console.error(error); });
    }
    register(username, password) {
        const data = {
            username,
            password
        };
        this.http.post('http://localhost:3000/register', data).subscribe(x => {
            console.log(x);
            const jsonTemp = JSON.parse(JSON.stringify(x));
            this.registerMessage = jsonTemp.reason;
        }, error => {
            console.error(error);
            this.registerMessage = JSON.parse(JSON.stringify(error)).error.reason;
        });
    }
    logout() {
        this.auth.token = '';
        const data = {
            name
        };
        this.http.post('http://localhost:3000/logout', data).subscribe(x => {
            this.loggedIn = false;
            this.loginMessage = 'You are logout.';
        }, error => {
            console.error(error);
        });
    }
    startApiClientPolling() {
        this.pollingTimer = setInterval(() => {
            this.polling();
        }, this.timer);
    }
    stop() {
        clearInterval(this.pollingTimer);
    }
};
ApiClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] },
    { type: _ranking_board_service__WEBPACK_IMPORTED_MODULE_5__["RankingBoardService"] }
];
ApiClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiClientService);



/***/ }),

/***/ "./src/app/service/auth-interceptor-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/auth-interceptor-service.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/service/auth-service.service.ts");



let AuthInterceptorService = class AuthInterceptorService {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(req, next) {
        if (req.url.endsWith('signin')) {
            return next.handle(req);
        }
        const authReq = req.clone({ setHeaders: { Authorization: this.auth.token } });
        return next.handle(authReq);
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] }
];
AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/service/auth-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/auth-service.service.ts ***!
  \*************************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthServiceService = class AuthServiceService {
    constructor() {
        this.token = '';
    }
};
AuthServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthServiceService);



/***/ }),

/***/ "./src/app/service/ranking-board.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/ranking-board.service.ts ***!
  \**************************************************/
/*! exports provided: RankingBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingBoardService", function() { return RankingBoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RankingBoardService = class RankingBoardService {
    constructor() {
    }
};
RankingBoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RankingBoardService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\FH\Web\FinalProject\client\PacMan\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map