!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("katex"));else if("function"==typeof define&&define.amd)define(["katex"],t);else{var n="object"==typeof exports?t(require("katex")):t(e.katex);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,(function(e){return function(){"use strict";var t={757:function(t){t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o={},i=r(757),a=r.n(i);let u=document.body.getElementsByTagName("script");return u=Array.prototype.slice.call(u),u.forEach((function(e){if(!e.type||!e.type.match(/math\/tex/i))return-1;const t=null!=e.type.match(/mode\s*=\s*display(;|\s|\n|$)/),n=document.createElement(t?"div":"span");n.setAttribute("class",t?"equation":"inline-equation");try{a().render(e.text,n,{displayMode:t})}catch(t){n.textContent=e.text}e.parentNode.replaceChild(n,e)})),o=o.default}()}));
