parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return o(t)||r(t)||n(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function r(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=document.querySelector("button"),i=document.querySelector(".message-start"),u=document.querySelector(".message-lose"),f=document.querySelector(".message-win"),s=document.querySelector(".game-score"),l=document.querySelectorAll("td"),d=4,v=0,h=[],m={left:37,up:38,right:39,down:40},y=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function p(){for(var t=0;t<d;t++)if(y.includes(0))return!1}function g(){for(;!p();){var t=Math.floor(4*Math.random()),e=Math.floor(4*Math.random());if(0===y[t][e]){y[t][e]=Math.random()>=.5?4:2;break}}}function b(t){var e=[],n=t.shift();if(n){for(var r=0;r<d;r++){var o=t.shift();if(!o){n&&e.push(n);break}n===o?(e.push(n+o),h.push(n+o),n=null):n!==o&&(n&&e.push(n),n=o)}return e.slice()}}function L(t){var e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];switch(t){case m.up:for(var n=0;n<d;n++){for(var r=[],o=0;o<d;o++)r.push(y[o][n]);var a=b(r.filter(function(t){return t>0}));if(a)for(var c=0;c<a.length;c++)e[c][n]=a[c]}break;case m.down:for(var i=0;i<d;i++){for(var u=[],f=0;f<d;f++)u.push(y[d-1-f][i]);var s=b(u.filter(function(t){return t>0}));if(s)for(var l=0;l<s.length;l++)e[d-1-l][i]=s[l]}break;case m.left:for(var v=0;v<d;v++){var h=b(y[v].filter(function(t){return t>0}));if(h)for(var p=0;p<h.length;p++)e[v][p]=h[p]}break;case m.right:for(var g=0;g<d;g++){var L=b(y[g].filter(function(t){return t>0}).reverse());if(L)for(var k=0;k<L.length;k++)e[g][d-1-k]=L[k]}}return e}function k(){if("".concat(y)!=="".concat(L(m.up))||"".concat(y)!=="".concat(L(m.down))||"".concat(y)!=="".concat(L(m.left))||"".concat(y)!=="".concat(L(m.right)))return!0}function C(){h.length>0&&(v+=h.reduce(function(t,e){return t+e}),s.textContent=v||0)}function S(t){h=[];var e=L(t);return"".concat(y)!=="".concat(e)&&(y=e,!0)}function w(t){t?f.classList.remove("hidden"):u.classList.remove("hidden"),document.removeEventListener("keydown",q)}function A(){c.classList.remove("start"),c.textContent="Restart",c.classList.add("restart"),i.classList.add("hidden"),f.classList.add("hidden"),u.classList.add("hidden"),s.textContent="0",v=0,x(),g(),g(),E(),document.addEventListener("keydown",q)}function x(){t(l).map(function(t){t.classList.remove("field-cell--".concat(t.textContent)),t.textContent=""}),y.map(function(t){return t.map(function(e,n){t[n]=0})})}function E(){var t=[];y.forEach(function(e){e.forEach(function(e){t.push(e)})}),l.forEach(function(e){var n=t.shift();e.textContent=n||null,e.className="field-cell",e.classList.add("field-cell--".concat(e.textContent))})}function q(t){t.keyCode<36||t.keyCode>41||S(t.keyCode)&&(h.includes(2048)&&w(!0),C(),g(),p()||k()||w(!1),h=[],E())}c.addEventListener("click",A);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c32eb220.js.map