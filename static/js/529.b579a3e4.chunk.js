/*! For license information please see 529.b579a3e4.chunk.js.LICENSE.txt */
(self.webpackChunkgoogle_books_finder=self.webpackChunkgoogle_books_finder||[]).push([[529],{4569:function(e,t,r){e.exports=r(8036)},3381:function(e,t,r){"use strict";var n=r(3589),s=r(7297),o=r(9301),i=r(9774),u=r(1804),a=r(9145),c=r(5411),l=r(6467),f=r(221),h=r(9346);e.exports=function(e){return new Promise((function(t,r){var d,p=e.data,v=e.headers,y=e.responseType;function m(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}n.isFormData(p)&&delete v["Content-Type"];var g=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",R=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";v.Authorization="Basic "+btoa(b+":"+R)}var S=u(e.baseURL,e.url);function E(){if(g){var n="getAllResponseHeaders"in g?a(g.getAllResponseHeaders()):null,o={data:y&&"text"!==y&&"json"!==y?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:n,config:e,request:g};s((function(e){t(e),m()}),(function(e){r(e),m()}),o),g=null}}if(g.open(e.method.toUpperCase(),i(S,e.params,e.paramsSerializer),!0),g.timeout=e.timeout,"onloadend"in g?g.onloadend=E:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(E)},g.onabort=function(){g&&(r(l("Request aborted",e,"ECONNABORTED",g)),g=null)},g.onerror=function(){r(l("Network Error",e,null,g)),g=null},g.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||f.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",g)),g=null},n.isStandardBrowserEnv()){var w=(e.withCredentials||c(S))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;w&&(v[e.xsrfHeaderName]=w)}"setRequestHeader"in g&&n.forEach(v,(function(e,t){"undefined"===typeof p&&"content-type"===t.toLowerCase()?delete v[t]:g.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(g.withCredentials=!!e.withCredentials),y&&"json"!==y&&(g.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){g&&(r(!e||e&&e.type?new h("canceled"):e),g.abort(),g=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),p||(p=null),g.send(p)}))}},8036:function(e,t,r){"use strict";var n=r(3589),s=r(4049),o=r(3773),i=r(777);var u=function e(t){var r=new o(t),u=s(o.prototype.request,r);return n.extend(u,o.prototype,r),n.extend(u,r),u.create=function(r){return e(i(t,r))},u}(r(221));u.Axios=o,u.Cancel=r(9346),u.CancelToken=r(6857),u.isCancel=r(5517),u.VERSION=r(7600).version,u.all=function(e){return Promise.all(e)},u.spread=r(8089),u.isAxiosError=r(9580),e.exports=u,e.exports.default=u},9346:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},6857:function(e,t,r){"use strict";var n=r(9346);function s(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},s.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},s.source=function(){var e;return{token:new s((function(t){e=t})),cancel:e}},e.exports=s},5517:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},3773:function(e,t,r){"use strict";var n=r(3589),s=r(9774),o=r(7470),i=r(2733),u=r(777),a=r(7835),c=a.validators;function l(e){this.defaults=e,this.interceptors={request:new o,response:new o}}l.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=u(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&a.assertOptions(t,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var r=[],n=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var s,o=[];if(this.interceptors.response.forEach((function(e){o.push(e.fulfilled,e.rejected)})),!n){var l=[i,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(o),s=Promise.resolve(e);l.length;)s=s.then(l.shift(),l.shift());return s}for(var f=e;r.length;){var h=r.shift(),d=r.shift();try{f=h(f)}catch(p){d(p);break}}try{s=i(f)}catch(p){return Promise.reject(p)}for(;o.length;)s=s.then(o.shift(),o.shift());return s},l.prototype.getUri=function(e){return e=u(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,r){return this.request(u(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,r,n){return this.request(u(n||{},{method:e,url:t,data:r}))}})),e.exports=l},7470:function(e,t,r){"use strict";var n=r(3589);function s(){this.handlers=[]}s.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s},1804:function(e,t,r){"use strict";var n=r(4044),s=r(9549);e.exports=function(e,t){return e&&!n(t)?s(e,t):t}},6467:function(e,t,r){"use strict";var n=r(6460);e.exports=function(e,t,r,s,o){var i=new Error(e);return n(i,t,r,s,o)}},2733:function(e,t,r){"use strict";var n=r(3589),s=r(2693),o=r(5517),i=r(221),u=r(9346);function a(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new u("canceled")}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=s.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return a(e),t.data=s.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(a(e),t&&t.response&&(t.response.data=s.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},6460:function(e){"use strict";e.exports=function(e,t,r,n,s){return e.config=t,r&&(e.code=r),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},777:function(e,t,r){"use strict";var n=r(3589);e.exports=function(e,t){t=t||{};var r={};function s(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:s(void 0,e[r]):s(e[r],t[r])}function i(e){if(!n.isUndefined(t[e]))return s(void 0,t[e])}function u(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:s(void 0,e[r]):s(void 0,t[r])}function a(r){return r in t?s(e[r],t[r]):r in e?s(void 0,e[r]):void 0}var c={url:i,method:i,data:i,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:a};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,s=t(e);n.isUndefined(s)&&t!==a||(r[e]=s)})),r}},7297:function(e,t,r){"use strict";var n=r(6467);e.exports=function(e,t,r){var s=r.config.validateStatus;r.status&&s&&!s(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},2693:function(e,t,r){"use strict";var n=r(3589),s=r(221);e.exports=function(e,t,r){var o=this||s;return n.forEach(r,(function(r){e=r.call(o,e,t)})),e}},221:function(e,t,r){"use strict";var n=r(3589),s=r(4341),o=r(6460),i={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:function(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=r(3381)),e}(),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)||t&&"application/json"===t["Content-Type"]?(u(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(s){if("SyntaxError"!==s.name)throw s}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||a.transitional,r=t&&t.silentJSONParsing,s=t&&t.forcedJSONParsing,i=!r&&"json"===this.responseType;if(i||s&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(u){if(i){if("SyntaxError"===u.name)throw o(u,this,"E_JSON_PARSE");throw u}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){a.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){a.headers[e]=n.merge(i)})),e.exports=a},7600:function(e){e.exports={version:"0.23.0"}},4049:function(e){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},9774:function(e,t,r){"use strict";var n=r(3589);function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(s(t)+"="+s(e))})))})),o=i.join("&")}if(o){var u=e.indexOf("#");-1!==u&&(e=e.slice(0,u)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},9549:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},9301:function(e,t,r){"use strict";var n=r(3589);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,s,o,i){var u=[];u.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(s)&&u.push("path="+s),n.isString(o)&&u.push("domain="+o),!0===i&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},4044:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},9580:function(e){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},5411:function(e,t,r){"use strict";var n=r(3589);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function s(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=s(window.location.href),function(t){var r=n.isString(t)?s(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},4341:function(e,t,r){"use strict";var n=r(3589);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},9145:function(e,t,r){"use strict";var n=r(3589),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t){if(i[t]&&s.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},8089:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},7835:function(e,t,r){"use strict";var n=r(7600).version,s={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){s[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var o={};s.transitional=function(e,t,r){function s(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,i){if(!1===e)throw new Error(s(n," has been removed"+(t?" in "+t:"")));return t&&!o[n]&&(o[n]=!0,console.warn(s(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,i)}},e.exports={assertOptions:function(e,t,r){if("object"!==typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),s=n.length;s-- >0;){var o=n[s],i=t[o];if(i){var u=e[o],a=void 0===u||i(u,o,e);if(!0!==a)throw new TypeError("option "+o+" must be "+a)}else if(!0!==r)throw Error("Unknown option "+o)}},validators:s}},3589:function(e,t,r){"use strict";var n=r(4049),s=Object.prototype.toString;function o(e){return"[object Array]"===s.call(e)}function i(e){return"undefined"===typeof e}function u(e){return null!==e&&"object"===typeof e}function a(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===s.call(e)}function l(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:u,isPlainObject:a,isUndefined:i,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:c,isStream:function(e){return u(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:l,merge:function e(){var t={};function r(r,n){a(t[n])&&a(r)?t[n]=e(t[n],r):a(r)?t[n]=e({},r):o(r)?t[n]=r.slice():t[n]=r}for(var n=0,s=arguments.length;n<s;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,(function(t,s){e[s]=r&&"function"===typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},1561:function(e,t,r){"use strict";var n=r(2791);var s="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},o=n.useState,i=n.useEffect,u=n.useLayoutEffect,a=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!s(e,r)}catch(n){return!0}}var l="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),s=n[0].inst,l=n[1];return u((function(){s.value=r,s.getSnapshot=t,c(s)&&l({inst:s})}),[e,r,t]),i((function(){return c(s)&&l({inst:s}),e((function(){c(s)&&l({inst:s})}))}),[e]),a(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},7248:function(e,t,r){"use strict";e.exports=r(1561)},8404:function(e,t,r){"use strict";r.d(t,{a:function(){return B}});var n=r(3734),s=r(1413),o=r(5987),i=r(5671),u=r(3144),a=r(136),c=r(7277),l=r(9538),f=r(1771),h=r(5511),d=r(3075),p=["refetchPage"],v=function(e){(0,a.Z)(r,e);var t=(0,c.Z)(r);function r(e,n){var s;return(0,i.Z)(this,r),(s=t.call(this)).client=e,s.options=n,s.trackedProps=new Set,s.selectError=null,s.bindMethods(),s.setOptions(n),s}return(0,u.Z)(r,[{key:"bindMethods",value:function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}},{key:"onSubscribe",value:function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),y(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}},{key:"onUnsubscribe",value:function(){this.listeners.length||this.destroy()}},{key:"shouldFetchOnReconnect",value:function(){return m(this.currentQuery,this.options,this.options.refetchOnReconnect)}},{key:"shouldFetchOnWindowFocus",value:function(){return m(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}},{key:"destroy",value:function(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}},{key:"setOptions",value:function(e,t){var r=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,n.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var o=this.hasListeners();o&&g(this.currentQuery,s,this.options,r)&&this.executeFetch(),this.updateResult(t),!o||this.currentQuery===s&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout();var i=this.computeRefetchInterval();!o||this.currentQuery===s&&this.options.enabled===r.enabled&&i===this.currentRefetchInterval||this.updateRefetchInterval(i)}},{key:"getOptimisticResult",value:function(e){var t=this.client.getQueryCache().build(this.client,e);return this.createResult(t,e)}},{key:"getCurrentResult",value:function(){return this.currentResult}},{key:"trackResult",value:function(e){var t=this,r={};return Object.keys(e).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){return t.trackedProps.add(n),e[n]}})})),r}},{key:"getCurrentQuery",value:function(){return this.currentQuery}},{key:"remove",value:function(){this.client.getQueryCache().remove(this.currentQuery)}},{key:"refetch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refetchPage,r=(0,o.Z)(e,p);return this.fetch((0,s.Z)((0,s.Z)({},r),{},{meta:{refetchPage:t}}))}},{key:"fetchOptimistic",value:function(e){var t=this,r=this.client.defaultQueryOptions(e),n=this.client.getQueryCache().build(this.client,r);return n.isFetchingOptimistic=!0,n.fetch().then((function(){return t.createResult(n,r)}))}},{key:"fetch",value:function(e){var t,r=this;return this.executeFetch((0,s.Z)((0,s.Z)({},e),{},{cancelRefetch:null==(t=e.cancelRefetch)||t})).then((function(){return r.updateResult(),r.currentResult}))}},{key:"executeFetch",value:function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(n.ZT)),t}},{key:"updateStaleTimeout",value:function(){var e=this;if(this.clearStaleTimeout(),!n.sk&&!this.currentResult.isStale&&(0,n.PN)(this.options.staleTime)){var t=(0,n.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}}},{key:"computeRefetchInterval",value:function(){var e;return"function"===typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}},{key:"updateRefetchInterval",value:function(e){var t=this;this.clearRefetchInterval(),this.currentRefetchInterval=e,!n.sk&&!1!==this.options.enabled&&(0,n.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||f.j.isFocused())&&t.executeFetch()}),this.currentRefetchInterval))}},{key:"updateTimers",value:function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}},{key:"clearStaleTimeout",value:function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}},{key:"clearRefetchInterval",value:function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}},{key:"createResult",value:function(e,t){var r,s=this.currentQuery,o=this.options,i=this.currentResult,u=this.currentResultState,a=this.currentResultOptions,c=e!==s,l=c?e.state:this.currentQueryInitialState,f=c?this.currentResult:this.previousQueryResult,h=e.state,p=h.dataUpdatedAt,v=h.error,m=h.errorUpdatedAt,R=h.fetchStatus,S=h.status,E=!1,w=!1;if(t._optimisticResults){var x=this.hasListeners(),O=!x&&y(e,t),C=x&&g(e,s,t,o);(O||C)&&(R=(0,d.Kw)(e.options.networkMode)?"fetching":"paused",p||(S="loading")),"isRestoring"===t._optimisticResults&&(R="idle")}if(t.keepPreviousData&&!h.dataUpdatedAt&&null!=f&&f.isSuccess&&"error"!==S)r=f.data,p=f.dataUpdatedAt,S=f.status,E=!0;else if(t.select&&"undefined"!==typeof h.data)if(i&&h.data===(null==u?void 0:u.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(h.data),r=(0,n.oE)(null==i?void 0:i.data,r,t),this.selectResult=r,this.selectError=null}catch(A){0,this.selectError=A}else r=h.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof r&&"loading"===S){var k;if(null!=i&&i.isPlaceholderData&&t.placeholderData===(null==a?void 0:a.placeholderData))k=i.data;else if(k="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof k)try{k=t.select(k),this.selectError=null}catch(A){0,this.selectError=A}"undefined"!==typeof k&&(S="success",r=(0,n.oE)(null==i?void 0:i.data,k,t),w=!0)}this.selectError&&(v=this.selectError,r=this.selectResult,m=Date.now(),S="error");var T="fetching"===R,U="loading"===S,j="error"===S;return{status:S,fetchStatus:R,isLoading:U,isSuccess:"success"===S,isError:j,isInitialLoading:U&&T,data:r,dataUpdatedAt:p,error:v,errorUpdatedAt:m,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>l.dataUpdateCount||h.errorUpdateCount>l.errorUpdateCount,isFetching:T,isRefetching:T&&!U,isLoadingError:j&&0===h.dataUpdatedAt,isPaused:"paused"===R,isPlaceholderData:w,isPreviousData:E,isRefetchError:j&&0!==h.dataUpdatedAt,isStale:b(e,t),refetch:this.refetch,remove:this.remove}}},{key:"updateResult",value:function(e){var t=this,r=this.currentResult,o=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!(0,n.VS)(o,r)){this.currentResult=o;var i={cache:!0};!1!==(null==e?void 0:e.listeners)&&function(){if(!r)return!0;var e=t.options.notifyOnChangeProps;if("all"===e||!e&&!t.trackedProps.size)return!0;var n=new Set(null!=e?e:t.trackedProps);return t.options.useErrorBoundary&&n.add("error"),Object.keys(t.currentResult).some((function(e){var s=e;return t.currentResult[s]!==r[s]&&n.has(s)}))}()&&(i.listeners=!0),this.notify((0,s.Z)((0,s.Z)({},i),e))}}},{key:"updateQuery",value:function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}}},{key:"onQueryUpdate",value:function(e){var t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,d.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}},{key:"notify",value:function(e){var t=this;l.V.batch((function(){var r,n,s,o;if(e.onSuccess)null==(r=(n=t.options).onSuccess)||r.call(n,t.currentResult.data),null==(s=(o=t.options).onSettled)||s.call(o,t.currentResult.data,null);else if(e.onError){var i,u,a,c;null==(i=(u=t.options).onError)||i.call(u,t.currentResult.error),null==(a=(c=t.options).onSettled)||a.call(c,void 0,t.currentResult.error)}e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)})),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})}))}}]),r}(h.l);function y(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||e.state.dataUpdatedAt>0&&m(e,t,t.refetchOnMount)}function m(e,t,r){if(!1!==t.enabled){var n="function"===typeof r?r(e):r;return"always"===n||!1!==n&&b(e,t)}return!1}function g(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&(!r.suspense||"error"!==e.state.status)&&b(e,r)}function b(e,t){return e.isStaleByTime(t.staleTime)}var R=r(9439),S=r(2791),E=r(7248).useSyncExternalStore;function w(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var x=S.createContext(w()),O=function(){return S.useContext(x)},C=r(6403),k=S.createContext(!1),T=function(){return S.useContext(k)},U=(k.Provider,r(3433));var j=function(e,t){(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},A=function(e){S.useEffect((function(){e.clearReset()}),[e])},P=function(e){var t,r,n=e.result,s=e.errorResetBoundary,o=e.useErrorBoundary,i=e.query;return n.isError&&!s.isReset()&&!n.isFetching&&(t=o,r=[n.error,i],"function"===typeof t?t.apply(void 0,(0,U.Z)(r)):!!t)},I=function(e){e.suspense&&"number"!==typeof e.staleTime&&(e.staleTime=1e3)},N=function(e,t,r){return(null==e?void 0:e.suspense)&&function(e,t){return e.isLoading&&e.isFetching&&!t}(t,r)},Q=function(e,t,r){return t.fetchOptimistic(e).then((function(t){var r=t.data;null==e.onSuccess||e.onSuccess(r),null==e.onSettled||e.onSettled(r,null)})).catch((function(t){r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)}))};function B(e,t,r){return function(e,t){var r=(0,C.NL)({context:e.context}),n=T(),s=O(),o=r.defaultQueryOptions(e);o._optimisticResults=n?"isRestoring":"optimistic",o.onError&&(o.onError=l.V.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=l.V.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=l.V.batchCalls(o.onSettled)),I(o),j(o,s),A(s);var i=S.useState((function(){return new t(r,o)})),u=(0,R.Z)(i,1)[0],a=u.getOptimisticResult(o);if(E(S.useCallback((function(e){return n?function(){}:u.subscribe(l.V.batchCalls(e))}),[u,n]),(function(){return u.getCurrentResult()}),(function(){return u.getCurrentResult()})),S.useEffect((function(){u.setOptions(o,{listeners:!1})}),[o,u]),N(o,a,n))throw Q(o,u,s);if(P({result:a,errorResetBoundary:s,useErrorBoundary:o.useErrorBoundary,query:u.getCurrentQuery()}))throw a.error;return o.notifyOnChangeProps?a:u.trackResult(a)}((0,n._v)(e,t,r),v)}}}]);
//# sourceMappingURL=529.b579a3e4.chunk.js.map