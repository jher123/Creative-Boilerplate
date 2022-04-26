/*! For license information please see main.2a94ef0e2e2fe89beccc.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":(e,n,t)=>{var r=t("./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js"),o=Object.create(null),i="undefined"==typeof document,c=Array.prototype.forEach;function s(){}function l(e,n){if(!n){if(!e.href)return;n=e.href.split("?")[0]}if(u(n)&&!1!==e.isLoaded&&n&&n.indexOf(".css")>-1){e.visited=!0;var t=e.cloneNode();t.isLoaded=!1,t.addEventListener("load",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.addEventListener("error",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.href="".concat(n,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}}function a(e){if(!e)return!1;var n=document.querySelectorAll("link"),t=!1;return c.call(n,(function(n){if(n.href){var o=function(e,n){var t;return e=r(e),n.some((function(r){e.indexOf(n)>-1&&(t=r)})),t}(n.href,e);u(o)&&!0!==n.visited&&o&&(l(n,o),t=!0)}})),t}function d(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&l(e)}))}function u(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,n){if(i)return console.log("no window.document found, will not HMR CSS"),s;var t,c,l,u=function(e){var n=o[e];if(!n){if(document.currentScript)n=document.currentScript.src;else{var t=document.getElementsByTagName("script"),i=t[t.length-1];i&&(n=i.src)}o[e]=n}return function(e){if(!n)return null;var t=n.split(/([^\\/]+)\.js$/),o=t&&t[1];return o&&e?e.split(",").map((function(e){var t=new RegExp("".concat(o,"\\.js$"),"g");return r(n.replace(t,"".concat(e.replace(/{fileName}/g,o),".css")))})):[n.replace(".js",".css")]}}(e);return t=function(){var e=u(n.filename),t=a(e);if(n.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void d();t?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),d())},c=50,l=0,function(){var e=this,n=arguments,r=function(){return t.apply(e,n)};clearTimeout(l),l=setTimeout(r,c)}}},"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var n=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",t=e.replace(new RegExp(n,"i"),"").split("/"),r=t[0].toLowerCase().replace(/\.$/,"");return t[0]="",n+r+t.reduce((function(e,n){switch(n){case"..":e.pop();break;case".":break;default:e.push(n)}return e}),[]).join("/")}},"./styles/index.scss":(e,n,t)=>{t.r(n);var r=t("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(e.id,{publicPath:"",locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)}},(function(e){e.h=()=>"9ed62405dae37ef5dbdf"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFhLEdBQUcsUUFBUyxJQUN6SS9DLEVBQU9nRCxJQUFJQyxRQUFRSCxHQUNuQjlDLEVBQU9nRCxJQUFJRSxZQUFPQyxFQUFXTCxrQkNObkNNLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL25vcm1hbGl6ZS11cmwuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vc3R5bGVzL2luZGV4LnNjc3M/ZjBmZiIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLypcbiAgZXNsaW50LWRpc2FibGVcbiAgbm8tY29uc29sZSxcbiAgZnVuYy1uYW1lc1xuKi9cblxuLyoqIEB0eXBlZGVmIHthbnl9IFRPRE8gKi9cbnZhciBub3JtYWxpemVVcmwgPSByZXF1aXJlKFwiLi9ub3JtYWxpemUtdXJsXCIpO1xuXG52YXIgc3JjQnlNb2R1bGVJZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgbm9Eb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICogQHJldHVybnMgeyhmdW5jdGlvbigpOiB2b2lkKXwqfVxuICovXG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCB0aW1lKSB7XG4gIHZhciB0aW1lb3V0ID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdmFyIHNlbGYgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG5cbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmdW5jdGlvbkNhbGwgPSBmdW5jdGlvbiBmdW5jdGlvbkNhbGwoKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTsgLy8gQHRzLWlnbm9yZVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb25DYWxsLCB0aW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCkge1xuICB2YXIgc3JjID0gc3JjQnlNb2R1bGVJZFttb2R1bGVJZF07XG5cbiAgaWYgKCFzcmMpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgICAgc3JjID1cbiAgICAgIC8qKiBAdHlwZSB7SFRNTFNjcmlwdEVsZW1lbnR9ICovXG4gICAgICBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcbiAgICAgIHZhciBsYXN0U2NyaXB0VGFnID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdFNjcmlwdFRhZykge1xuICAgICAgICBzcmMgPSBsYXN0U2NyaXB0VGFnLnNyYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXSA9IHNyYztcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVNYXBcbiAgICogQHJldHVybnMge251bGwgfCBzdHJpbmdbXX1cbiAgICovXG5cblxuICByZXR1cm4gZnVuY3Rpb24gKGZpbGVNYXApIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHNwbGl0UmVzdWx0ID0gc3JjLnNwbGl0KC8oW15cXFxcL10rKVxcLmpzJC8pO1xuICAgIHZhciBmaWxlbmFtZSA9IHNwbGl0UmVzdWx0ICYmIHNwbGl0UmVzdWx0WzFdO1xuXG4gICAgaWYgKCFmaWxlbmFtZSkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cblxuICAgIGlmICghZmlsZU1hcCkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlTWFwLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKG1hcFJ1bGUpIHtcbiAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGZpbGVuYW1lLCBcIlxcXFwuanMkXCIpLCBcImdcIik7XG4gICAgICByZXR1cm4gbm9ybWFsaXplVXJsKHNyYy5yZXBsYWNlKHJlZywgXCJcIi5jb25jYXQobWFwUnVsZS5yZXBsYWNlKC97ZmlsZU5hbWV9L2csIGZpbGVuYW1lKSwgXCIuY3NzXCIpKSk7XG4gICAgfSk7XG4gIH07XG59XG4vKipcbiAqIEBwYXJhbSB7VE9ET30gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXVxuICovXG5cblxuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgICB1cmwgPSBlbC5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgfVxuXG4gIGlmICghaXNVcmxSZXF1ZXN0KFxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgdXJsKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5pc0xvYWRlZCA9PT0gZmFsc2UpIHtcbiAgICAvLyBXZSBzZWVtIHRvIGJlIGFib3V0IHRvIHJlcGxhY2UgYSBjc3MgbGluayB0aGF0IGhhc24ndCBsb2FkZWQgeWV0LlxuICAgIC8vIFdlJ3JlIHByb2JhYmx5IGNoYW5naW5nIHRoZSBzYW1lIGZpbGUgbW9yZSB0aGFuIG9uY2UuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgISh1cmwuaW5kZXhPZihcIi5jc3NcIikgPiAtMSkpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICBlbC52aXNpdGVkID0gdHJ1ZTtcbiAgdmFyIG5ld0VsID0gZWwuY2xvbmVOb2RlKCk7XG4gIG5ld0VsLmlzTG9hZGVkID0gZmFsc2U7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXdFbC5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ld0VsLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgfSk7XG4gIG5ld0VsLmhyZWYgPSBcIlwiLmNvbmNhdCh1cmwsIFwiP1wiKS5jb25jYXQoRGF0ZS5ub3coKSk7XG5cbiAgaWYgKGVsLm5leHRTaWJsaW5nKSB7XG4gICAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWwsIGVsLm5leHRTaWJsaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0VsKTtcbiAgfVxufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZlxuICogQHBhcmFtIHtUT0RPfSBzcmNcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0UmVsb2FkVXJsKGhyZWYsIHNyYykge1xuICB2YXIgcmV0OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuICBocmVmID0gbm9ybWFsaXplVXJsKGhyZWYpO1xuICBzcmMuc29tZShcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgZnVuY3Rpb24gKHVybCkge1xuICAgIGlmIChocmVmLmluZGV4T2Yoc3JjKSA+IC0xKSB7XG4gICAgICByZXQgPSB1cmw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzcmNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlbG9hZFN0eWxlKHNyYykge1xuICBpZiAoIXNyYykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICB2YXIgbG9hZGVkID0gZmFsc2U7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHVybCA9IGdldFJlbG9hZFVybChlbC5ocmVmLCBzcmMpO1xuXG4gICAgaWYgKCFpc1VybFJlcXVlc3QodXJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHVybCkge1xuICAgICAgdXBkYXRlQ3NzKGVsLCB1cmwpO1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbG9hZGVkO1xufVxuXG5mdW5jdGlvbiByZWxvYWRBbGwoKSB7XG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlQ3NzKGVsKTtcbiAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cblxuZnVuY3Rpb24gaXNVcmxSZXF1ZXN0KHVybCkge1xuICAvLyBBbiBVUkwgaXMgbm90IGFuIHJlcXVlc3QgaWZcbiAgLy8gSXQgaXMgbm90IGh0dHAgb3IgaHR0cHNcbiAgaWYgKCEvXlthLXpBLVpdW2EtekEtWlxcZCtcXC0uXSo6Ly50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHBhcmFtIHtUT0RPfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBvcHRpb25zKSB7XG4gIGlmIChub0RvY3VtZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJubyB3aW5kb3cuZG9jdW1lbnQgZm91bmQsIHdpbGwgbm90IEhNUiBDU1NcIik7XG4gICAgcmV0dXJuIG5vb3A7XG4gIH1cblxuICB2YXIgZ2V0U2NyaXB0U3JjID0gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBzcmMgPSBnZXRTY3JpcHRTcmMob3B0aW9ucy5maWxlbmFtZSk7XG4gICAgdmFyIHJlbG9hZGVkID0gcmVsb2FkU3R5bGUoc3JjKTtcblxuICAgIGlmIChvcHRpb25zLmxvY2Fscykge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBEZXRlY3RlZCBsb2NhbCBjc3MgbW9kdWxlcy4gUmVsb2FkIGFsbCBjc3NcIik7XG4gICAgICByZWxvYWRBbGwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVsb2FkZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gY3NzIHJlbG9hZCAlc1wiLCBzcmMuam9pbihcIiBcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlYm91bmNlKHVwZGF0ZSwgNTApO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXRoQ29tcG9uZW50c1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVXJsKHBhdGhDb21wb25lbnRzKSB7XG4gIHJldHVybiBwYXRoQ29tcG9uZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBpdGVtKSB7XG4gICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICBjYXNlIFwiLi5cIjpcbiAgICAgICAgYWNjdW11bGF0b3IucG9wKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiLlwiOlxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYWNjdW11bGF0b3IucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH0sXG4gIC8qKiBAdHlwZSB7c3RyaW5nW119ICovXG4gIFtdKS5qb2luKFwiL1wiKTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybFN0cmluZykge1xuICB1cmxTdHJpbmcgPSB1cmxTdHJpbmcudHJpbSgpO1xuXG4gIGlmICgvXmRhdGE6L2kudGVzdCh1cmxTdHJpbmcpKSB7XG4gICAgcmV0dXJuIHVybFN0cmluZztcbiAgfVxuXG4gIHZhciBwcm90b2NvbCA9IHVybFN0cmluZy5pbmRleE9mKFwiLy9cIikgIT09IC0xID8gdXJsU3RyaW5nLnNwbGl0KFwiLy9cIilbMF0gKyBcIi8vXCIgOiBcIlwiO1xuICB2YXIgY29tcG9uZW50cyA9IHVybFN0cmluZy5yZXBsYWNlKG5ldyBSZWdFeHAocHJvdG9jb2wsIFwiaVwiKSwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICB2YXIgaG9zdCA9IGNvbXBvbmVudHNbMF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC4kLywgXCJcIik7XG4gIGNvbXBvbmVudHNbMF0gPSBcIlwiO1xuICB2YXIgcGF0aCA9IG5vcm1hbGl6ZVVybChjb21wb25lbnRzKTtcbiAgcmV0dXJuIHByb3RvY29sICsgaG9zdCArIHBhdGg7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NTA5NzAzMzQ4MDFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5ZWQ2MjQwNWRhZTM3ZWY1ZGJkZlwiKSJdLCJuYW1lcyI6WyJub3JtYWxpemVVcmwiLCJyZXF1aXJlIiwic3JjQnlNb2R1bGVJZCIsIk9iamVjdCIsImNyZWF0ZSIsIm5vRG9jdW1lbnQiLCJkb2N1bWVudCIsImZvckVhY2giLCJBcnJheSIsInByb3RvdHlwZSIsIm5vb3AiLCJ1cGRhdGVDc3MiLCJlbCIsInVybCIsImhyZWYiLCJzcGxpdCIsImlzVXJsUmVxdWVzdCIsImlzTG9hZGVkIiwiaW5kZXhPZiIsInZpc2l0ZWQiLCJuZXdFbCIsImNsb25lTm9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjb25jYXQiLCJEYXRlIiwibm93IiwibmV4dFNpYmxpbmciLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInJlbG9hZFN0eWxlIiwic3JjIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibG9hZGVkIiwiY2FsbCIsInJldCIsInNvbWUiLCJnZXRSZWxvYWRVcmwiLCJyZWxvYWRBbGwiLCJ0ZXN0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZHVsZUlkIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJmbiIsInRpbWUiLCJ0aW1lb3V0IiwiZ2V0U2NyaXB0U3JjIiwiY3VycmVudFNjcmlwdCIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxhc3RTY3JpcHRUYWciLCJsZW5ndGgiLCJmaWxlTWFwIiwic3BsaXRSZXN1bHQiLCJmaWxlbmFtZSIsIm1hcCIsIm1hcFJ1bGUiLCJyZWciLCJSZWdFeHAiLCJyZXBsYWNlIiwiZ2V0Q3VycmVudFNjcmlwdFVybCIsInJlbG9hZGVkIiwibG9jYWxzIiwiam9pbiIsInNlbGYiLCJ0aGlzIiwiYXJncyIsImFyZ3VtZW50cyIsImZ1bmN0aW9uQ2FsbCIsImFwcGx5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInVybFN0cmluZyIsInRyaW0iLCJwcm90b2NvbCIsImNvbXBvbmVudHMiLCJob3N0IiwidG9Mb3dlckNhc2UiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsIml0ZW0iLCJwb3AiLCJwdXNoIiwiY3NzUmVsb2FkIiwiaWQiLCJob3QiLCJkaXNwb3NlIiwiYWNjZXB0IiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9