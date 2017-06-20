/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zdHlsZS5zY3NzPzdhMjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n\n\n$(document).ready(function() {\n  // menu\n  $('#toggle').click(function() {\n    $(this).toggleClass('toggle-active');\n    $('#overlay').toggleClass('nav-active');\n  });\n\n  $('#overlay ul li a').click(function(event) {\n    $('#toggle').toggleClass('toggle-active');\n    $('#overlay').toggleClass('nav-active');\n  });\n\n  // animated heading\n  let name = $('#letter-container a.text_toAnimate');\n  let desc = $('#letter-container a.description_toAnimate');\n  name.css(\"display\", \"block\");\n\n  function spliter(toSplit, spanClass) {\n    var splitedText = toSplit.text().split(\"\");\n    toSplit.text(\"\");\n\n    for (var i = 0; i < splitedText.length; i++) {\n      var span = $('<span class=' + spanClass + '><span>').text(splitedText[i]);\n      toSplit.append(span);\n    }\n  }\n\n\n  spliter(name, \"name_animate\");\n\n  let h3 = $(\"h3\");\n\n  h3.typeIt({\n    startDelay: 1400,\n    speed: 100,\n    lifeLike: true,\n    autoStart: false\n  });\n\n\n  // section second animation\n  ;(function($, win) {\n    $.fn.inViewport = function(cb) {\n      return this.each(function(i,el){\n        function visPx(){\n          var H = $(this).height(),\n          r = el.getBoundingClientRect(), t=r.top, b=r.bottom;\n          return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));\n        } visPx();\n        $(win).on(\"resize scroll\", visPx);\n      });\n    };\n  }(jQuery, window));\n\n\n\n  $(\".section_second_header\").inViewport(function(px){\n    if(px) $(this).addClass(\"header_active\") ;\n    else $(this).removeClass(\"header_active\") ;\n  });\n\n  $(\".section_second_text\").inViewport(function(px){\n    if(px) $(this).addClass(\"text_active\") ;\n    else $(this).removeClass(\"text_active\") ;\n  });\n\n  $(\".download\").inViewport(function(px){\n    if(px) $(this).addClass(\"download_active\") ;\n    else $(this).removeClass(\"download_active\") ;\n  });\n\n  // slideshow\n  $('.carousel').carousel();\n\n  $('.icons_container').inViewport(function(px) {\n    if(px) {\n      $(this).find(\"div.skill_icons\").each(function(index, el) {\n        $(el).addClass('skill' + index);\n      });\n    }\n    else {\n      $(this).find(\"div.skill_icons\").each(function(index, el) {\n        $(el).removeClass('skill' + index);\n      });\n    }\n  });\n\n  $('#contact form').inViewport(function(px) {\n    if(px) {\n      $(this).find(\"*\").each(function(index, el) {\n        $(el).addClass('skill' + index);\n      });\n    }\n    else {\n      $(this).find(\"*\").each(function(index, el) {\n        $(el).removeClass('skill' + index);\n      });\n    }\n  });\n\n\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7OztBQUlIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7OztBQUlILENBQUMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgLy8gbWVudVxuICAkKCcjdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygndG9nZ2xlLWFjdGl2ZScpO1xuICAgICQoJyNvdmVybGF5JykudG9nZ2xlQ2xhc3MoJ25hdi1hY3RpdmUnKTtcbiAgfSk7XG5cbiAgJCgnI292ZXJsYXkgdWwgbGkgYScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgJCgnI3RvZ2dsZScpLnRvZ2dsZUNsYXNzKCd0b2dnbGUtYWN0aXZlJyk7XG4gICAgJCgnI292ZXJsYXknKS50b2dnbGVDbGFzcygnbmF2LWFjdGl2ZScpO1xuICB9KTtcblxuICAvLyBhbmltYXRlZCBoZWFkaW5nXG4gIGxldCBuYW1lID0gJCgnI2xldHRlci1jb250YWluZXIgYS50ZXh0X3RvQW5pbWF0ZScpO1xuICBsZXQgZGVzYyA9ICQoJyNsZXR0ZXItY29udGFpbmVyIGEuZGVzY3JpcHRpb25fdG9BbmltYXRlJyk7XG4gIG5hbWUuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG4gIGZ1bmN0aW9uIHNwbGl0ZXIodG9TcGxpdCwgc3BhbkNsYXNzKSB7XG4gICAgdmFyIHNwbGl0ZWRUZXh0ID0gdG9TcGxpdC50ZXh0KCkuc3BsaXQoXCJcIik7XG4gICAgdG9TcGxpdC50ZXh0KFwiXCIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdGVkVGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNwYW4gPSAkKCc8c3BhbiBjbGFzcz0nICsgc3BhbkNsYXNzICsgJz48c3Bhbj4nKS50ZXh0KHNwbGl0ZWRUZXh0W2ldKTtcbiAgICAgIHRvU3BsaXQuYXBwZW5kKHNwYW4pO1xuICAgIH1cbiAgfVxuXG5cbiAgc3BsaXRlcihuYW1lLCBcIm5hbWVfYW5pbWF0ZVwiKTtcblxuICBsZXQgaDMgPSAkKFwiaDNcIik7XG5cbiAgaDMudHlwZUl0KHtcbiAgICBzdGFydERlbGF5OiAxNDAwLFxuICAgIHNwZWVkOiAxMDAsXG4gICAgbGlmZUxpa2U6IHRydWUsXG4gICAgYXV0b1N0YXJ0OiBmYWxzZVxuICB9KTtcblxuXG4gIC8vIHNlY3Rpb24gc2Vjb25kIGFuaW1hdGlvblxuICA7KGZ1bmN0aW9uKCQsIHdpbikge1xuICAgICQuZm4uaW5WaWV3cG9ydCA9IGZ1bmN0aW9uKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGksZWwpe1xuICAgICAgICBmdW5jdGlvbiB2aXNQeCgpe1xuICAgICAgICAgIHZhciBIID0gJCh0aGlzKS5oZWlnaHQoKSxcbiAgICAgICAgICByID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHQ9ci50b3AsIGI9ci5ib3R0b207XG4gICAgICAgICAgcmV0dXJuIGNiLmNhbGwoZWwsIE1hdGgubWF4KDAsIHQ+MD8gSC10IDogKGI8SD9iOkgpKSk7XG4gICAgICAgIH0gdmlzUHgoKTtcbiAgICAgICAgJCh3aW4pLm9uKFwicmVzaXplIHNjcm9sbFwiLCB2aXNQeCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9KGpRdWVyeSwgd2luZG93KSk7XG5cblxuXG4gICQoXCIuc2VjdGlvbl9zZWNvbmRfaGVhZGVyXCIpLmluVmlld3BvcnQoZnVuY3Rpb24ocHgpe1xuICAgIGlmKHB4KSAkKHRoaXMpLmFkZENsYXNzKFwiaGVhZGVyX2FjdGl2ZVwiKSA7XG4gICAgZWxzZSAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaGVhZGVyX2FjdGl2ZVwiKSA7XG4gIH0pO1xuXG4gICQoXCIuc2VjdGlvbl9zZWNvbmRfdGV4dFwiKS5pblZpZXdwb3J0KGZ1bmN0aW9uKHB4KXtcbiAgICBpZihweCkgJCh0aGlzKS5hZGRDbGFzcyhcInRleHRfYWN0aXZlXCIpIDtcbiAgICBlbHNlICQodGhpcykucmVtb3ZlQ2xhc3MoXCJ0ZXh0X2FjdGl2ZVwiKSA7XG4gIH0pO1xuXG4gICQoXCIuZG93bmxvYWRcIikuaW5WaWV3cG9ydChmdW5jdGlvbihweCl7XG4gICAgaWYocHgpICQodGhpcykuYWRkQ2xhc3MoXCJkb3dubG9hZF9hY3RpdmVcIikgO1xuICAgIGVsc2UgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImRvd25sb2FkX2FjdGl2ZVwiKSA7XG4gIH0pO1xuXG4gIC8vIHNsaWRlc2hvd1xuICAkKCcuY2Fyb3VzZWwnKS5jYXJvdXNlbCgpO1xuXG4gICQoJy5pY29uc19jb250YWluZXInKS5pblZpZXdwb3J0KGZ1bmN0aW9uKHB4KSB7XG4gICAgaWYocHgpIHtcbiAgICAgICQodGhpcykuZmluZChcImRpdi5za2lsbF9pY29uc1wiKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICAkKGVsKS5hZGRDbGFzcygnc2tpbGwnICsgaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJCh0aGlzKS5maW5kKFwiZGl2LnNraWxsX2ljb25zXCIpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgICQoZWwpLnJlbW92ZUNsYXNzKCdza2lsbCcgKyBpbmRleCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNjb250YWN0IGZvcm0nKS5pblZpZXdwb3J0KGZ1bmN0aW9uKHB4KSB7XG4gICAgaWYocHgpIHtcbiAgICAgICQodGhpcykuZmluZChcIipcIikuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgJChlbCkuYWRkQ2xhc3MoJ3NraWxsJyArIGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICQodGhpcykuZmluZChcIipcIikuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgJChlbCkucmVtb3ZlQ2xhc3MoJ3NraWxsJyArIGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cblxuXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);