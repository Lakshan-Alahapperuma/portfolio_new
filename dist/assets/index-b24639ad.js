(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function N_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ip={exports:{}},ll={},Fp={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),U_=Symbol.for("react.portal"),I_=Symbol.for("react.fragment"),F_=Symbol.for("react.strict_mode"),O_=Symbol.for("react.profiler"),k_=Symbol.for("react.provider"),z_=Symbol.for("react.context"),B_=Symbol.for("react.forward_ref"),H_=Symbol.for("react.suspense"),G_=Symbol.for("react.memo"),V_=Symbol.for("react.lazy"),ef=Symbol.iterator;function W_(t){return t===null||typeof t!="object"?null:(t=ef&&t[ef]||t["@@iterator"],typeof t=="function"?t:null)}var Op={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kp=Object.assign,zp={};function vs(t,e,n){this.props=t,this.context=e,this.refs=zp,this.updater=n||Op}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bp(){}Bp.prototype=vs.prototype;function Vu(t,e,n){this.props=t,this.context=e,this.refs=zp,this.updater=n||Op}var Wu=Vu.prototype=new Bp;Wu.constructor=Vu;kp(Wu,vs.prototype);Wu.isPureReactComponent=!0;var tf=Array.isArray,Hp=Object.prototype.hasOwnProperty,Xu={current:null},Gp={key:!0,ref:!0,__self:!0,__source:!0};function Vp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hp.call(e,i)&&!Gp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:yo,type:t,key:s,ref:o,props:r,_owner:Xu.current}}function X_(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ju(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function j_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nf=/\/+/g;function Nl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j_(""+t.key):e.toString(36)}function xa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yo:case U_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Nl(o,0):i,tf(r)?(n="",t!=null&&(n=t.replace(nf,"$&/")+"/"),xa(r,e,n,"",function(c){return c})):r!=null&&(ju(r)&&(r=X_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(nf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",tf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Nl(s,a);o+=xa(s,e,n,l,r)}else if(l=W_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Nl(s,a++),o+=xa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lo(t,e,n){if(t==null)return t;var i=[],r=0;return xa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Y_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},ya={transition:null},q_={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:ya,ReactCurrentOwner:Xu};function Wp(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:Lo,forEach:function(t,e,n){Lo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Lo(t,function(){e++}),e},toArray:function(t){return Lo(t,function(e){return e})||[]},only:function(t){if(!ju(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=vs;Ge.Fragment=I_;Ge.Profiler=O_;Ge.PureComponent=Vu;Ge.StrictMode=F_;Ge.Suspense=H_;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q_;Ge.act=Wp;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=kp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hp.call(e,l)&&!Gp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:yo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:z_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:k_,_context:t},t.Consumer=t};Ge.createElement=Vp;Ge.createFactory=function(t){var e=Vp.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:B_,render:t}};Ge.isValidElement=ju;Ge.lazy=function(t){return{$$typeof:V_,_payload:{_status:-1,_result:t},_init:Y_}};Ge.memo=function(t,e){return{$$typeof:G_,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=ya.transition;ya.transition={};try{t()}finally{ya.transition=e}};Ge.unstable_act=Wp;Ge.useCallback=function(t,e){return $t.current.useCallback(t,e)};Ge.useContext=function(t){return $t.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return $t.current.useEffect(t,e)};Ge.useId=function(){return $t.current.useId()};Ge.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return $t.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};Ge.useRef=function(t){return $t.current.useRef(t)};Ge.useState=function(t){return $t.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return $t.current.useTransition()};Ge.version="18.3.1";Fp.exports=Ge;var vt=Fp.exports;const $_=N_(vt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=vt,Z_=Symbol.for("react.element"),Q_=Symbol.for("react.fragment"),J_=Object.prototype.hasOwnProperty,ev=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tv={key:!0,ref:!0,__self:!0,__source:!0};function Xp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)J_.call(e,i)&&!tv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Z_,type:t,key:s,ref:o,props:r,_owner:ev.current}}ll.Fragment=Q_;ll.jsx=Xp;ll.jsxs=Xp;Ip.exports=ll;var N=Ip.exports,zc={},jp={exports:{}},mn={},Yp={exports:{}},qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,F){var G=D.length;D.push(F);e:for(;0<G;){var $=G-1>>>1,Z=D[$];if(0<r(Z,F))D[$]=F,D[G]=Z,G=$;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var F=D[0],G=D.pop();if(G!==F){D[0]=G;e:for(var $=0,Z=D.length,X=Z>>>1;$<X;){var K=2*($+1)-1,le=D[K],fe=K+1,me=D[fe];if(0>r(le,G))fe<Z&&0>r(me,le)?(D[$]=me,D[fe]=G,$=fe):(D[$]=le,D[K]=G,$=K);else if(fe<Z&&0>r(me,G))D[$]=me,D[fe]=G,$=fe;else break e}}return F}function r(D,F){var G=D.sortIndex-F.sortIndex;return G!==0?G:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,g=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=D)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function y(D){if(x=!1,_(D),!v)if(n(l)!==null)v=!0,j(C);else{var F=n(c);F!==null&&q(y,F.startTime-D)}}function C(D,F){v=!1,x&&(x=!1,u(b),b=-1),g=!0;var G=h;try{for(_(F),f=n(l);f!==null&&(!(f.expirationTime>F)||D&&!H());){var $=f.callback;if(typeof $=="function"){f.callback=null,h=f.priorityLevel;var Z=$(f.expirationTime<=F);F=t.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&i(l),_(F)}else i(l);f=n(l)}if(f!==null)var X=!0;else{var K=n(c);K!==null&&q(y,K.startTime-F),X=!1}return X}finally{f=null,h=G,g=!1}}var w=!1,R=null,b=-1,M=5,E=-1;function H(){return!(t.unstable_now()-E<M)}function Y(){if(R!==null){var D=t.unstable_now();E=D;var F=!0;try{F=R(!0,D)}finally{F?ie():(w=!1,R=null)}}else w=!1}var ie;if(typeof p=="function")ie=function(){p(Y)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,V=L.port2;L.port1.onmessage=Y,ie=function(){V.postMessage(null)}}else ie=function(){m(Y,0)};function j(D){R=D,w||(w=!0,ie())}function q(D,F){b=m(function(){D(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,j(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var G=h;h=F;try{return D()}finally{h=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=h;h=D;try{return F()}finally{h=G}},t.unstable_scheduleCallback=function(D,F,G){var $=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?$+G:$):G=$,D){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=G+Z,D={id:d++,callback:F,priorityLevel:D,startTime:G,expirationTime:Z,sortIndex:-1},G>$?(D.sortIndex=G,e(c,D),n(l)===null&&D===n(c)&&(x?(u(b),b=-1):x=!0,q(y,G-$))):(D.sortIndex=Z,e(l,D),v||g||(v=!0,j(C))),D},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(D){var F=h;return function(){var G=h;h=F;try{return D.apply(this,arguments)}finally{h=G}}}})(qp);Yp.exports=qp;var nv=Yp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv=vt,pn=nv;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $p=new Set,eo={};function yr(t,e){as(t,e),as(t+"Capture",e)}function as(t,e){for(eo[t]=e,t=0;t<e.length;t++)$p.add(e[t])}var ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,rv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rf={},sf={};function sv(t){return Bc.call(sf,t)?!0:Bc.call(rf,t)?!1:rv.test(t)?sf[t]=!0:(rf[t]=!0,!1)}function ov(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function av(t,e,n,i){if(e===null||typeof e>"u"||ov(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yu=/[\-:]([a-z])/g;function qu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yu,qu);Dt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yu,qu);Dt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yu,qu);Dt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function $u(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(av(e,n,r,i)&&(n=null),i||r===null?sv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var mi=iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),zr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Ku=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),Kp=Symbol.for("react.provider"),Zp=Symbol.for("react.context"),Zu=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),Qu=Symbol.for("react.memo"),Mi=Symbol.for("react.lazy"),Qp=Symbol.for("react.offscreen"),of=Symbol.iterator;function As(t){return t===null||typeof t!="object"?null:(t=of&&t[of]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Ul;function Bs(t){if(Ul===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ul=e&&e[1]||""}return`
`+Ul+t}var Il=!1;function Fl(t,e){if(!t||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bs(t):""}function lv(t){switch(t.tag){case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return t=Fl(t.type,!1),t;case 11:return t=Fl(t.type.render,!1),t;case 1:return t=Fl(t.type,!0),t;default:return""}}function Wc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case zr:return"Portal";case Hc:return"Profiler";case Ku:return"StrictMode";case Gc:return"Suspense";case Vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zp:return(t.displayName||"Context")+".Consumer";case Kp:return(t._context.displayName||"Context")+".Provider";case Zu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qu:return e=t.displayName||null,e!==null?e:Wc(t.type)||"Memo";case Mi:e=t._payload,t=t._init;try{return Wc(t(e))}catch{}}return null}function cv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wc(e);case 8:return e===Ku?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uv(t){var e=Jp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Do(t){t._valueTracker||(t._valueTracker=uv(t))}function em(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Jp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Da(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xc(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function af(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tm(t,e){e=e.checked,e!=null&&$u(t,"checked",e,!1)}function jc(t,e){tm(t,e);var n=Hi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yc(t,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yc(t,e,n){(e!=="number"||Da(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function Jr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Hi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Hs(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hi(n)}}function nm(t,e){var n=Hi(e.value),i=Hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function uf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function im(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?im(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var No,rm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=No.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function to(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dv=["Webkit","ms","Moz","O"];Object.keys(Ws).forEach(function(t){dv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ws[e]=Ws[t]})});function sm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ws.hasOwnProperty(t)&&Ws[t]?(""+e).trim():e+"px"}function om(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=sm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var fv=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if(fv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function Ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jc=null,es=null,ts=null;function df(t){if(t=Eo(t)){if(typeof Jc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=hl(e),Jc(t.stateNode,t.type,e))}}function am(t){es?ts?ts.push(t):ts=[t]:es=t}function lm(){if(es){var t=es,e=ts;if(ts=es=null,df(t),e)for(t=0;t<e.length;t++)df(e[t])}}function cm(t,e){return t(e)}function um(){}var Ol=!1;function dm(t,e,n){if(Ol)return t(e,n);Ol=!0;try{return cm(t,e,n)}finally{Ol=!1,(es!==null||ts!==null)&&(um(),lm())}}function no(t,e){var n=t.stateNode;if(n===null)return null;var i=hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var eu=!1;if(ui)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{eu=!1}function hv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Xs=!1,Na=null,Ua=!1,tu=null,pv={onError:function(t){Xs=!0,Na=t}};function mv(t,e,n,i,r,s,o,a,l){Xs=!1,Na=null,hv.apply(pv,arguments)}function gv(t,e,n,i,r,s,o,a,l){if(mv.apply(this,arguments),Xs){if(Xs){var c=Na;Xs=!1,Na=null}else throw Error(ee(198));Ua||(Ua=!0,tu=c)}}function Sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ff(t){if(Sr(t)!==t)throw Error(ee(188))}function _v(t){var e=t.alternate;if(!e){if(e=Sr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ff(r),t;if(s===i)return ff(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function hm(t){return t=_v(t),t!==null?pm(t):null}function pm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pm(t);if(e!==null)return e;t=t.sibling}return null}var mm=pn.unstable_scheduleCallback,hf=pn.unstable_cancelCallback,vv=pn.unstable_shouldYield,xv=pn.unstable_requestPaint,mt=pn.unstable_now,yv=pn.unstable_getCurrentPriorityLevel,ed=pn.unstable_ImmediatePriority,gm=pn.unstable_UserBlockingPriority,Ia=pn.unstable_NormalPriority,Sv=pn.unstable_LowPriority,_m=pn.unstable_IdlePriority,cl=null,qn=null;function Mv(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(cl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:wv,Ev=Math.log,Tv=Math.LN2;function wv(t){return t>>>=0,t===0?32:31-(Ev(t)/Tv|0)|0}var Uo=64,Io=4194304;function Gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Gs(a):(s&=o,s!==0&&(i=Gs(s)))}else o=n&~r,o!==0?i=Gs(o):s!==0&&(i=Gs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Av(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Av(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vm(){var t=Uo;return Uo<<=1,!(Uo&4194240)&&(Uo=64),t}function kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function So(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function Cv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var qe=0;function xm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ym,nd,Sm,Mm,Em,iu=!1,Fo=[],Li=null,bi=null,Di=null,io=new Map,ro=new Map,Ti=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pf(t,e){switch(t){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(e.pointerId)}}function Cs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Eo(e),e!==null&&nd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Lv(t,e,n,i,r){switch(e){case"focusin":return Li=Cs(Li,t,e,n,i,r),!0;case"dragenter":return bi=Cs(bi,t,e,n,i,r),!0;case"mouseover":return Di=Cs(Di,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return io.set(s,Cs(io.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ro.set(s,Cs(ro.get(s)||null,t,e,n,i,r)),!0}return!1}function Tm(t){var e=sr(t.target);if(e!==null){var n=Sr(e);if(n!==null){if(e=n.tag,e===13){if(e=fm(n),e!==null){t.blockedOn=e,Em(t.priority,function(){Sm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ru(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qc=i,n.target.dispatchEvent(i),Qc=null}else return e=Eo(n),e!==null&&nd(e),t.blockedOn=n,!1;e.shift()}return!0}function mf(t,e,n){Sa(t)&&n.delete(e)}function bv(){iu=!1,Li!==null&&Sa(Li)&&(Li=null),bi!==null&&Sa(bi)&&(bi=null),Di!==null&&Sa(Di)&&(Di=null),io.forEach(mf),ro.forEach(mf)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,iu||(iu=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,bv)))}function so(t){function e(r){return Ps(r,t)}if(0<Fo.length){Ps(Fo[0],t);for(var n=1;n<Fo.length;n++){var i=Fo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Li!==null&&Ps(Li,t),bi!==null&&Ps(bi,t),Di!==null&&Ps(Di,t),io.forEach(e),ro.forEach(e),n=0;n<Ti.length;n++)i=Ti[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)Tm(n),n.blockedOn===null&&Ti.shift()}var ns=mi.ReactCurrentBatchConfig,Oa=!0;function Dv(t,e,n,i){var r=qe,s=ns.transition;ns.transition=null;try{qe=1,id(t,e,n,i)}finally{qe=r,ns.transition=s}}function Nv(t,e,n,i){var r=qe,s=ns.transition;ns.transition=null;try{qe=4,id(t,e,n,i)}finally{qe=r,ns.transition=s}}function id(t,e,n,i){if(Oa){var r=ru(t,e,n,i);if(r===null)ql(t,e,i,ka,n),pf(t,i);else if(Lv(r,t,e,n,i))i.stopPropagation();else if(pf(t,i),e&4&&-1<Pv.indexOf(t)){for(;r!==null;){var s=Eo(r);if(s!==null&&ym(s),s=ru(t,e,n,i),s===null&&ql(t,e,i,ka,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ql(t,e,i,null,n)}}var ka=null;function ru(t,e,n,i){if(ka=null,t=Ju(i),t=sr(t),t!==null)if(e=Sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ka=t,null}function wm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yv()){case ed:return 1;case gm:return 4;case Ia:case Sv:return 16;case _m:return 536870912;default:return 16}default:return 16}}var Ai=null,rd=null,Ma=null;function Am(){if(Ma)return Ma;var t,e=rd,n=e.length,i,r="value"in Ai?Ai.value:Ai.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ma=r.slice(t,1<i?1-i:void 0)}function Ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oo(){return!0}function gf(){return!1}function gn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oo:gf,this.isPropagationStopped=gf,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),e}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=gn(xs),Mo=ut({},xs,{view:0,detail:0}),Uv=gn(Mo),zl,Bl,Ls,ul=ut({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ls&&(Ls&&t.type==="mousemove"?(zl=t.screenX-Ls.screenX,Bl=t.screenY-Ls.screenY):Bl=zl=0,Ls=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),_f=gn(ul),Iv=ut({},ul,{dataTransfer:0}),Fv=gn(Iv),Ov=ut({},Mo,{relatedTarget:0}),Hl=gn(Ov),kv=ut({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=gn(kv),Bv=ut({},xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hv=gn(Bv),Gv=ut({},xs,{data:0}),vf=gn(Gv),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xv[t])?!!e[t]:!1}function od(){return jv}var Yv=ut({},Mo,{key:function(t){if(t.key){var e=Vv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:od,charCode:function(t){return t.type==="keypress"?Ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qv=gn(Yv),$v=ut({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=gn($v),Kv=ut({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:od}),Zv=gn(Kv),Qv=ut({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=gn(Qv),e0=ut({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=gn(e0),n0=[9,13,27,32],ad=ui&&"CompositionEvent"in window,js=null;ui&&"documentMode"in document&&(js=document.documentMode);var i0=ui&&"TextEvent"in window&&!js,Rm=ui&&(!ad||js&&8<js&&11>=js),yf=String.fromCharCode(32),Sf=!1;function Cm(t,e){switch(t){case"keyup":return n0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function r0(t,e){switch(t){case"compositionend":return Pm(e);case"keypress":return e.which!==32?null:(Sf=!0,yf);case"textInput":return t=e.data,t===yf&&Sf?null:t;default:return null}}function s0(t,e){if(Hr)return t==="compositionend"||!ad&&Cm(t,e)?(t=Am(),Ma=rd=Ai=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rm&&e.locale!=="ko"?null:e.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!o0[t.type]:e==="textarea"}function Lm(t,e,n,i){am(i),e=za(e,"onChange"),0<e.length&&(n=new sd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ys=null,oo=null;function a0(t){Hm(t,0)}function dl(t){var e=Wr(t);if(em(e))return t}function l0(t,e){if(t==="change")return e}var bm=!1;if(ui){var Gl;if(ui){var Vl="oninput"in document;if(!Vl){var Ef=document.createElement("div");Ef.setAttribute("oninput","return;"),Vl=typeof Ef.oninput=="function"}Gl=Vl}else Gl=!1;bm=Gl&&(!document.documentMode||9<document.documentMode)}function Tf(){Ys&&(Ys.detachEvent("onpropertychange",Dm),oo=Ys=null)}function Dm(t){if(t.propertyName==="value"&&dl(oo)){var e=[];Lm(e,oo,t,Ju(t)),dm(a0,e)}}function c0(t,e,n){t==="focusin"?(Tf(),Ys=e,oo=n,Ys.attachEvent("onpropertychange",Dm)):t==="focusout"&&Tf()}function u0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(oo)}function d0(t,e){if(t==="click")return dl(e)}function f0(t,e){if(t==="input"||t==="change")return dl(e)}function h0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:h0;function ao(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bc.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Af(t,e){var n=wf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wf(n)}}function Nm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Nm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Um(){for(var t=window,e=Da();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Da(t.document)}return e}function ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function p0(t){var e=Um(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Nm(n.ownerDocument.documentElement,n)){if(i!==null&&ld(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Af(n,s);var o=Af(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var m0=ui&&"documentMode"in document&&11>=document.documentMode,Gr=null,su=null,qs=null,ou=!1;function Rf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ou||Gr==null||Gr!==Da(i)||(i=Gr,"selectionStart"in i&&ld(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qs&&ao(qs,i)||(qs=i,i=za(su,"onSelect"),0<i.length&&(e=new sd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gr)))}function ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vr={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},Wl={},Im={};ui&&(Im=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function fl(t){if(Wl[t])return Wl[t];if(!Vr[t])return t;var e=Vr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Im)return Wl[t]=e[n];return t}var Fm=fl("animationend"),Om=fl("animationiteration"),km=fl("animationstart"),zm=fl("transitionend"),Bm=new Map,Cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){Bm.set(t,e),yr(e,[t])}for(var Xl=0;Xl<Cf.length;Xl++){var jl=Cf[Xl],g0=jl.toLowerCase(),_0=jl[0].toUpperCase()+jl.slice(1);Wi(g0,"on"+_0)}Wi(Fm,"onAnimationEnd");Wi(Om,"onAnimationIteration");Wi(km,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(zm,"onTransitionEnd");as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function Pf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,gv(i,e,void 0,t),t.currentTarget=null}function Hm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Pf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Pf(r,a,c),s=l}}}if(Ua)throw t=tu,Ua=!1,tu=null,t}function tt(t,e){var n=e[du];n===void 0&&(n=e[du]=new Set);var i=t+"__bubble";n.has(i)||(Gm(e,t,2,!1),n.add(i))}function Yl(t,e,n){var i=0;e&&(i|=4),Gm(n,t,i,e)}var zo="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[zo]){t[zo]=!0,$p.forEach(function(n){n!=="selectionchange"&&(v0.has(n)||Yl(n,!1,t),Yl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zo]||(e[zo]=!0,Yl("selectionchange",!1,e))}}function Gm(t,e,n,i){switch(wm(e)){case 1:var r=Dv;break;case 4:r=Nv;break;default:r=id}n=r.bind(null,e,n,t),r=void 0,!eu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ql(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}dm(function(){var c=s,d=Ju(n),f=[];e:{var h=Bm.get(t);if(h!==void 0){var g=sd,v=t;switch(t){case"keypress":if(Ea(n)===0)break e;case"keydown":case"keyup":g=qv;break;case"focusin":v="focus",g=Hl;break;case"focusout":v="blur",g=Hl;break;case"beforeblur":case"afterblur":g=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Zv;break;case Fm:case Om:case km:g=zv;break;case zm:g=Jv;break;case"scroll":g=Uv;break;case"wheel":g=t0;break;case"copy":case"cut":case"paste":g=Hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xf}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var p=c,_;p!==null;){_=p;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,u!==null&&(y=no(p,u),y!=null&&x.push(co(p,y,_)))),m)break;p=p.return}0<x.length&&(h=new g(h,v,null,n,d),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Qc&&(v=n.relatedTarget||n.fromElement)&&(sr(v)||v[di]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?sr(v):null,v!==null&&(m=Sr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(x=_f,y="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(x=xf,y="onPointerLeave",u="onPointerEnter",p="pointer"),m=g==null?h:Wr(g),_=v==null?h:Wr(v),h=new x(y,p+"leave",g,n,d),h.target=m,h.relatedTarget=_,y=null,sr(d)===c&&(x=new x(u,p+"enter",v,n,d),x.target=_,x.relatedTarget=m,y=x),m=y,g&&v)t:{for(x=g,u=v,p=0,_=x;_;_=Mr(_))p++;for(_=0,y=u;y;y=Mr(y))_++;for(;0<p-_;)x=Mr(x),p--;for(;0<_-p;)u=Mr(u),_--;for(;p--;){if(x===u||u!==null&&x===u.alternate)break t;x=Mr(x),u=Mr(u)}x=null}else x=null;g!==null&&Lf(f,h,g,x,!1),v!==null&&m!==null&&Lf(f,m,v,x,!0)}}e:{if(h=c?Wr(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var C=l0;else if(Mf(h))if(bm)C=f0;else{C=u0;var w=c0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=d0);if(C&&(C=C(t,c))){Lm(f,C,n,d);break e}w&&w(t,h,c),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Yc(h,"number",h.value)}switch(w=c?Wr(c):window,t){case"focusin":(Mf(w)||w.contentEditable==="true")&&(Gr=w,su=c,qs=null);break;case"focusout":qs=su=Gr=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Rf(f,n,d);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":Rf(f,n,d)}var R;if(ad)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Hr?Cm(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Rm&&n.locale!=="ko"&&(Hr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Hr&&(R=Am()):(Ai=d,rd="value"in Ai?Ai.value:Ai.textContent,Hr=!0)),w=za(c,b),0<w.length&&(b=new vf(b,t,null,n,d),f.push({event:b,listeners:w}),R?b.data=R:(R=Pm(n),R!==null&&(b.data=R)))),(R=i0?r0(t,n):s0(t,n))&&(c=za(c,"onBeforeInput"),0<c.length&&(d=new vf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=R))}Hm(f,e)})}function co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function za(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=no(t,n),s!=null&&i.unshift(co(t,s,r)),s=no(t,e),s!=null&&i.push(co(t,s,r))),t=t.return}return i}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=no(n,s),l!=null&&o.unshift(co(n,l,a))):r||(l=no(n,s),l!=null&&o.push(co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var x0=/\r\n?/g,y0=/\u0000|\uFFFD/g;function bf(t){return(typeof t=="string"?t:""+t).replace(x0,`
`).replace(y0,"")}function Bo(t,e,n){if(e=bf(e),bf(t)!==e&&n)throw Error(ee(425))}function Ba(){}var au=null,lu=null;function cu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uu=typeof setTimeout=="function"?setTimeout:void 0,S0=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,M0=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(t){return Df.resolve(null).then(t).catch(E0)}:uu;function E0(t){setTimeout(function(){throw t})}function $l(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),so(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);so(e)}function Ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Yn="__reactFiber$"+ys,uo="__reactProps$"+ys,di="__reactContainer$"+ys,du="__reactEvents$"+ys,T0="__reactListeners$"+ys,w0="__reactHandles$"+ys;function sr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[di]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nf(t);t!==null;){if(n=t[Yn])return n;t=Nf(t)}return e}t=n,n=t.parentNode}return null}function Eo(t){return t=t[Yn]||t[di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function hl(t){return t[uo]||null}var fu=[],Xr=-1;function Xi(t){return{current:t}}function it(t){0>Xr||(t.current=fu[Xr],fu[Xr]=null,Xr--)}function et(t,e){Xr++,fu[Xr]=t.current,t.current=e}var Gi={},Bt=Xi(Gi),tn=Xi(!1),hr=Gi;function ls(t,e){var n=t.type.contextTypes;if(!n)return Gi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function Ha(){it(tn),it(Bt)}function Uf(t,e,n){if(Bt.current!==Gi)throw Error(ee(168));et(Bt,e),et(tn,n)}function Vm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,cv(t)||"Unknown",r));return ut({},n,i)}function Ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gi,hr=Bt.current,et(Bt,t),et(tn,tn.current),!0}function If(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=Vm(t,e,hr),i.__reactInternalMemoizedMergedChildContext=t,it(tn),it(Bt),et(Bt,t)):it(tn),et(tn,n)}var ri=null,pl=!1,Kl=!1;function Wm(t){ri===null?ri=[t]:ri.push(t)}function A0(t){pl=!0,Wm(t)}function ji(){if(!Kl&&ri!==null){Kl=!0;var t=0,e=qe;try{var n=ri;for(qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,pl=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),mm(ed,ji),r}finally{qe=e,Kl=!1}}return null}var jr=[],Yr=0,Va=null,Wa=0,xn=[],yn=0,pr=null,oi=1,ai="";function Ji(t,e){jr[Yr++]=Wa,jr[Yr++]=Va,Va=t,Wa=e}function Xm(t,e,n){xn[yn++]=oi,xn[yn++]=ai,xn[yn++]=pr,pr=t;var i=oi;t=ai;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,oi=1<<32-zn(e)+r|n<<r|i,ai=s+t}else oi=1<<s|n<<r|i,ai=t}function cd(t){t.return!==null&&(Ji(t,1),Xm(t,1,0))}function ud(t){for(;t===Va;)Va=jr[--Yr],jr[Yr]=null,Wa=jr[--Yr],jr[Yr]=null;for(;t===pr;)pr=xn[--yn],xn[yn]=null,ai=xn[--yn],xn[yn]=null,oi=xn[--yn],xn[yn]=null}var fn=null,dn=null,rt=!1,In=null;function jm(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ff(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,dn=Ni(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pr!==null?{id:oi,overflow:ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,dn=null,!0):!1;default:return!1}}function hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pu(t){if(rt){var e=dn;if(e){var n=e;if(!Ff(t,e)){if(hu(t))throw Error(ee(418));e=Ni(n.nextSibling);var i=fn;e&&Ff(t,e)?jm(i,n):(t.flags=t.flags&-4097|2,rt=!1,fn=t)}}else{if(hu(t))throw Error(ee(418));t.flags=t.flags&-4097|2,rt=!1,fn=t}}}function Of(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function Ho(t){if(t!==fn)return!1;if(!rt)return Of(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cu(t.type,t.memoizedProps)),e&&(e=dn)){if(hu(t))throw Ym(),Error(ee(418));for(;e;)jm(t,e),e=Ni(e.nextSibling)}if(Of(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Ni(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=fn?Ni(t.stateNode.nextSibling):null;return!0}function Ym(){for(var t=dn;t;)t=Ni(t.nextSibling)}function cs(){dn=fn=null,rt=!1}function dd(t){In===null?In=[t]:In.push(t)}var R0=mi.ReactCurrentBatchConfig;function bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Go(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kf(t){var e=t._init;return e(t._payload)}function qm(t){function e(u,p){if(t){var _=u.deletions;_===null?(u.deletions=[p],u.flags|=16):_.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=Oi(u,p),u.index=0,u.sibling=null,u}function s(u,p,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<p?(u.flags|=2,p):_):(u.flags|=2,p)):(u.flags|=1048576,p)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,p,_,y){return p===null||p.tag!==6?(p=ic(_,u.mode,y),p.return=u,p):(p=r(p,_),p.return=u,p)}function l(u,p,_,y){var C=_.type;return C===Br?d(u,p,_.props.children,y,_.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Mi&&kf(C)===p.type)?(y=r(p,_.props),y.ref=bs(u,p,_),y.return=u,y):(y=La(_.type,_.key,_.props,null,u.mode,y),y.ref=bs(u,p,_),y.return=u,y)}function c(u,p,_,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=rc(_,u.mode,y),p.return=u,p):(p=r(p,_.children||[]),p.return=u,p)}function d(u,p,_,y,C){return p===null||p.tag!==7?(p=cr(_,u.mode,y,C),p.return=u,p):(p=r(p,_),p.return=u,p)}function f(u,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ic(""+p,u.mode,_),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case bo:return _=La(p.type,p.key,p.props,null,u.mode,_),_.ref=bs(u,null,p),_.return=u,_;case zr:return p=rc(p,u.mode,_),p.return=u,p;case Mi:var y=p._init;return f(u,y(p._payload),_)}if(Hs(p)||As(p))return p=cr(p,u.mode,_,null),p.return=u,p;Go(u,p)}return null}function h(u,p,_,y){var C=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(u,p,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case bo:return _.key===C?l(u,p,_,y):null;case zr:return _.key===C?c(u,p,_,y):null;case Mi:return C=_._init,h(u,p,C(_._payload),y)}if(Hs(_)||As(_))return C!==null?null:d(u,p,_,y,null);Go(u,_)}return null}function g(u,p,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(_)||null,a(p,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case bo:return u=u.get(y.key===null?_:y.key)||null,l(p,u,y,C);case zr:return u=u.get(y.key===null?_:y.key)||null,c(p,u,y,C);case Mi:var w=y._init;return g(u,p,_,w(y._payload),C)}if(Hs(y)||As(y))return u=u.get(_)||null,d(p,u,y,C,null);Go(p,y)}return null}function v(u,p,_,y){for(var C=null,w=null,R=p,b=p=0,M=null;R!==null&&b<_.length;b++){R.index>b?(M=R,R=null):M=R.sibling;var E=h(u,R,_[b],y);if(E===null){R===null&&(R=M);break}t&&R&&E.alternate===null&&e(u,R),p=s(E,p,b),w===null?C=E:w.sibling=E,w=E,R=M}if(b===_.length)return n(u,R),rt&&Ji(u,b),C;if(R===null){for(;b<_.length;b++)R=f(u,_[b],y),R!==null&&(p=s(R,p,b),w===null?C=R:w.sibling=R,w=R);return rt&&Ji(u,b),C}for(R=i(u,R);b<_.length;b++)M=g(R,u,b,_[b],y),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?b:M.key),p=s(M,p,b),w===null?C=M:w.sibling=M,w=M);return t&&R.forEach(function(H){return e(u,H)}),rt&&Ji(u,b),C}function x(u,p,_,y){var C=As(_);if(typeof C!="function")throw Error(ee(150));if(_=C.call(_),_==null)throw Error(ee(151));for(var w=C=null,R=p,b=p=0,M=null,E=_.next();R!==null&&!E.done;b++,E=_.next()){R.index>b?(M=R,R=null):M=R.sibling;var H=h(u,R,E.value,y);if(H===null){R===null&&(R=M);break}t&&R&&H.alternate===null&&e(u,R),p=s(H,p,b),w===null?C=H:w.sibling=H,w=H,R=M}if(E.done)return n(u,R),rt&&Ji(u,b),C;if(R===null){for(;!E.done;b++,E=_.next())E=f(u,E.value,y),E!==null&&(p=s(E,p,b),w===null?C=E:w.sibling=E,w=E);return rt&&Ji(u,b),C}for(R=i(u,R);!E.done;b++,E=_.next())E=g(R,u,b,E.value,y),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?b:E.key),p=s(E,p,b),w===null?C=E:w.sibling=E,w=E);return t&&R.forEach(function(Y){return e(u,Y)}),rt&&Ji(u,b),C}function m(u,p,_,y){if(typeof _=="object"&&_!==null&&_.type===Br&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case bo:e:{for(var C=_.key,w=p;w!==null;){if(w.key===C){if(C=_.type,C===Br){if(w.tag===7){n(u,w.sibling),p=r(w,_.props.children),p.return=u,u=p;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Mi&&kf(C)===w.type){n(u,w.sibling),p=r(w,_.props),p.ref=bs(u,w,_),p.return=u,u=p;break e}n(u,w);break}else e(u,w);w=w.sibling}_.type===Br?(p=cr(_.props.children,u.mode,y,_.key),p.return=u,u=p):(y=La(_.type,_.key,_.props,null,u.mode,y),y.ref=bs(u,p,_),y.return=u,u=y)}return o(u);case zr:e:{for(w=_.key;p!==null;){if(p.key===w)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(u,p.sibling),p=r(p,_.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=rc(_,u.mode,y),p.return=u,u=p}return o(u);case Mi:return w=_._init,m(u,p,w(_._payload),y)}if(Hs(_))return v(u,p,_,y);if(As(_))return x(u,p,_,y);Go(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,_),p.return=u,u=p):(n(u,p),p=ic(_,u.mode,y),p.return=u,u=p),o(u)):n(u,p)}return m}var us=qm(!0),$m=qm(!1),Xa=Xi(null),ja=null,qr=null,fd=null;function hd(){fd=qr=ja=null}function pd(t){var e=Xa.current;it(Xa),t._currentValue=e}function mu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function is(t,e){ja=t,fd=qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(fd!==t)if(t={context:t,memoizedValue:e,next:null},qr===null){if(ja===null)throw Error(ee(308));qr=t,ja.dependencies={lanes:0,firstContext:t}}else qr=qr.next=t;return e}var or=null;function md(t){or===null?or=[t]:or.push(t)}function Km(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,md(e)):(n.next=r.next,r.next=n),e.interleaved=n,fi(t,i)}function fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ei=!1;function gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fi(t,n)}return r=i.interleaved,r===null?(e.next=e,md(i)):(e.next=r.next,r.next=e),i.interleaved=e,fi(t,n)}function Ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,td(t,n)}}function zf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ya(t,e,n,i){var r=t.updateQueue;Ei=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,g=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=ut({},f,h);break e;case 2:Ei=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);gr|=o,t.lanes=o,t.memoizedState=f}}function Bf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var To={},$n=Xi(To),fo=Xi(To),ho=Xi(To);function ar(t){if(t===To)throw Error(ee(174));return t}function _d(t,e){switch(et(ho,e),et(fo,t),et($n,To),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$c(e,t)}it($n),et($n,e)}function ds(){it($n),it(fo),it(ho)}function Qm(t){ar(ho.current);var e=ar($n.current),n=$c(e,t.type);e!==n&&(et(fo,t),et($n,n))}function vd(t){fo.current===t&&(it($n),it(fo))}var lt=Xi(0);function qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zl=[];function xd(){for(var t=0;t<Zl.length;t++)Zl[t]._workInProgressVersionPrimary=null;Zl.length=0}var wa=mi.ReactCurrentDispatcher,Ql=mi.ReactCurrentBatchConfig,mr=0,ct=null,yt=null,Rt=null,$a=!1,$s=!1,po=0,C0=0;function Ut(){throw Error(ee(321))}function yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function Sd(t,e,n,i,r,s){if(mr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wa.current=t===null||t.memoizedState===null?D0:N0,t=n(i,r),$s){s=0;do{if($s=!1,po=0,25<=s)throw Error(ee(301));s+=1,Rt=yt=null,e.updateQueue=null,wa.current=U0,t=n(i,r)}while($s)}if(wa.current=Ka,e=yt!==null&&yt.next!==null,mr=0,Rt=yt=ct=null,$a=!1,e)throw Error(ee(300));return t}function Md(){var t=po!==0;return po=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Rn(){if(yt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=Rt===null?ct.memoizedState:Rt.next;if(e!==null)Rt=e,yt=t;else{if(t===null)throw Error(ee(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function mo(t,e){return typeof e=="function"?e(t):e}function Jl(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((mr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ct.lanes|=d,gr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Gn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ec(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Gn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Jm(){}function eg(t,e){var n=ct,i=Rn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,Ed(ig.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,go(9,ng.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(ee(349));mr&30||tg(n,e,r)}return r}function tg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ng(t,e,n,i){e.value=n,e.getSnapshot=i,rg(e)&&sg(t)}function ig(t,e,n){return n(function(){rg(e)&&sg(t)})}function rg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function sg(t){var e=fi(t,1);e!==null&&Bn(e,t,1,-1)}function Hf(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=b0.bind(null,ct,t),[e.memoizedState,t]}function go(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function og(){return Rn().memoizedState}function Aa(t,e,n,i){var r=Xn();ct.flags|=t,r.memoizedState=go(1|e,n,void 0,i===void 0?null:i)}function ml(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(yt!==null){var o=yt.memoizedState;if(s=o.destroy,i!==null&&yd(i,o.deps)){r.memoizedState=go(e,n,s,i);return}}ct.flags|=t,r.memoizedState=go(1|e,n,s,i)}function Gf(t,e){return Aa(8390656,8,t,e)}function Ed(t,e){return ml(2048,8,t,e)}function ag(t,e){return ml(4,2,t,e)}function lg(t,e){return ml(4,4,t,e)}function cg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ug(t,e,n){return n=n!=null?n.concat([t]):null,ml(4,4,cg.bind(null,e,t),n)}function Td(){}function dg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function fg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function hg(t,e,n){return mr&21?(Gn(n,e)||(n=vm(),ct.lanes|=n,gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function P0(t,e){var n=qe;qe=n!==0&&4>n?n:4,t(!0);var i=Ql.transition;Ql.transition={};try{t(!1),e()}finally{qe=n,Ql.transition=i}}function pg(){return Rn().memoizedState}function L0(t,e,n){var i=Fi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},mg(t))gg(e,n);else if(n=Km(t,e,n,i),n!==null){var r=Yt();Bn(n,t,i,r),_g(n,e,i)}}function b0(t,e,n){var i=Fi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(mg(t))gg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Gn(a,o)){var l=e.interleaved;l===null?(r.next=r,md(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Km(t,e,r,i),n!==null&&(r=Yt(),Bn(n,t,i,r),_g(n,e,i))}}function mg(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function gg(t,e){$s=$a=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _g(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,td(t,n)}}var Ka={readContext:An,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},D0={readContext:An,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Gf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Aa(4194308,4,cg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=L0.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Hf,useDebugValue:Td,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Hf(!1),e=t[0];return t=P0.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Xn();if(rt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Ct===null)throw Error(ee(349));mr&30||tg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Gf(ig.bind(null,i,s,t),[t]),i.flags|=2048,go(9,ng.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Ct.identifierPrefix;if(rt){var n=ai,i=oi;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=C0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},N0={readContext:An,useCallback:dg,useContext:An,useEffect:Ed,useImperativeHandle:ug,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:fg,useReducer:Jl,useRef:og,useState:function(){return Jl(mo)},useDebugValue:Td,useDeferredValue:function(t){var e=Rn();return hg(e,yt.memoizedState,t)},useTransition:function(){var t=Jl(mo)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Jm,useSyncExternalStore:eg,useId:pg,unstable_isNewReconciler:!1},U0={readContext:An,useCallback:dg,useContext:An,useEffect:Ed,useImperativeHandle:ug,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:fg,useReducer:ec,useRef:og,useState:function(){return ec(mo)},useDebugValue:Td,useDeferredValue:function(t){var e=Rn();return yt===null?e.memoizedState=t:hg(e,yt.memoizedState,t)},useTransition:function(){var t=ec(mo)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Jm,useSyncExternalStore:eg,useId:pg,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gl={isMounted:function(t){return(t=t._reactInternals)?Sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Fi(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Bn(e,t,r,i),Ta(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Fi(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Bn(e,t,r,i),Ta(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Fi(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(Bn(e,t,i,n),Ta(e,t,i))}};function Vf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ao(n,i)||!ao(r,s):!0}function vg(t,e,n){var i=!1,r=Gi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=nn(e)?hr:Bt.current,i=e.contextTypes,s=(i=i!=null)?ls(t,r):Gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&gl.enqueueReplaceState(e,e.state,null)}function _u(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=nn(e)?hr:Bt.current,r.context=ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&gl.enqueueReplaceState(r,r.state,null),Ya(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,e){try{var n="",i=e;do n+=lv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var I0=typeof WeakMap=="function"?WeakMap:Map;function xg(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qa||(Qa=!0,Cu=i),vu(t,e)},n}function yg(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vu(t,e),typeof i!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new I0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=$0.bind(null,t,e,n),e.then(t,t))}function jf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var F0=mi.ReactCurrentOwner,en=!1;function Xt(t,e,n,i){e.child=t===null?$m(e,null,n,i):us(e,t.child,n,i)}function qf(t,e,n,i,r){n=n.render;var s=e.ref;return is(e,r),i=Sd(t,e,n,i,s,r),n=Md(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(rt&&n&&cd(e),e.flags|=1,Xt(t,e,i,r),e.child)}function $f(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Sg(t,e,s,i,r)):(t=La(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(o,i)&&t.ref===e.ref)return hi(t,e,r)}return e.flags|=1,t=Oi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Sg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ao(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,hi(t,e,r)}return xu(t,e,n,i,r)}function Mg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Kr,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(Kr,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(Kr,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(Kr,cn),cn|=i;return Xt(t,e,r,n),e.child}function Eg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xu(t,e,n,i,r){var s=nn(n)?hr:Bt.current;return s=ls(e,s),is(e,r),n=Sd(t,e,n,i,s,r),i=Md(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(rt&&i&&cd(e),e.flags|=1,Xt(t,e,n,r),e.child)}function Kf(t,e,n,i,r){if(nn(n)){var s=!0;Ga(e)}else s=!1;if(is(e,r),e.stateNode===null)Ra(t,e),vg(e,n,i),_u(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=nn(n)?hr:Bt.current,c=ls(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Wf(e,o,i,c),Ei=!1;var h=e.memoizedState;o.state=h,Ya(e,i,o,r),l=e.memoizedState,a!==i||h!==l||tn.current||Ei?(typeof d=="function"&&(gu(e,n,d,i),l=e.memoizedState),(a=Ei||Vf(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Zm(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=nn(n)?hr:Bt.current,l=ls(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Wf(e,o,i,l),Ei=!1,h=e.memoizedState,o.state=h,Ya(e,i,o,r);var v=e.memoizedState;a!==f||h!==v||tn.current||Ei?(typeof g=="function"&&(gu(e,n,g,i),v=e.memoizedState),(c=Ei||Vf(e,n,c,i,h,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return yu(t,e,n,i,s,r)}function yu(t,e,n,i,r,s){Eg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&If(e,n,!1),hi(t,e,s);i=e.stateNode,F0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=us(e,t.child,null,s),e.child=us(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&If(e,n,!0),e.child}function Tg(t){var e=t.stateNode;e.pendingContext?Uf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uf(t,e.context,!1),_d(t,e.containerInfo)}function Zf(t,e,n,i,r){return cs(),dd(r),e.flags|=256,Xt(t,e,n,i),e.child}var Su={dehydrated:null,treeContext:null,retryLane:0};function Mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function wg(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(lt,r&1),t===null)return pu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xl(o,i,0,null),t=cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mu(n),e.memoizedState=Su,t):wd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return O0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Oi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Oi(a,s):(s=cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Mu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Su,i}return s=t.child,t=s.sibling,i=Oi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wd(t,e){return e=xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vo(t,e,n,i){return i!==null&&dd(i),us(e,t.child,null,n),t=wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function O0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=tc(Error(ee(422))),Vo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xl({mode:"visible",children:i.children},r,0,null),s=cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&us(e,t.child,null,o),e.child.memoizedState=Mu(o),e.memoizedState=Su,s);if(!(e.mode&1))return Vo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=tc(s,i,void 0),Vo(t,e,o,i)}if(a=(o&t.childLanes)!==0,en||a){if(i=Ct,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fi(t,r),Bn(i,t,r,-1))}return bd(),i=tc(Error(ee(421))),Vo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=K0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=Ni(r.nextSibling),fn=e,rt=!0,In=null,t!==null&&(xn[yn++]=oi,xn[yn++]=ai,xn[yn++]=pr,oi=t.id,ai=t.overflow,pr=e),e=wd(e,i.children),e.flags|=4096,e)}function Qf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mu(t.return,e,n)}function nc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ag(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qf(t,n,e);else if(t.tag===19)Qf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&qa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&qa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nc(e,!0,n,null,s);break;case"together":nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ra(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Oi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Oi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function k0(t,e,n){switch(e.tag){case 3:Tg(e),cs();break;case 5:Qm(e);break;case 1:nn(e.type)&&Ga(e);break;case 4:_d(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(Xa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?wg(t,e,n):(et(lt,lt.current&1),t=hi(t,e,n),t!==null?t.sibling:null);et(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ag(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Mg(t,e,n)}return hi(t,e,n)}var Rg,Eu,Cg,Pg;Rg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eu=function(){};Cg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ar($n.current);var s=null;switch(n){case"input":r=Xc(t,r),i=Xc(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=qc(t,r),i=qc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ba)}Kc(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(eo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(eo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&tt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Pg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ds(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function z0(t,e,n){var i=e.pendingProps;switch(ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return nn(e.type)&&Ha(),It(e),null;case 3:return i=e.stateNode,ds(),it(tn),it(Bt),xd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ho(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(bu(In),In=null))),Eu(t,e),It(e),null;case 5:vd(e);var r=ar(ho.current);if(n=e.type,t!==null&&e.stateNode!=null)Cg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return It(e),null}if(t=ar($n.current),Ho(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[uo]=s,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<Vs.length;r++)tt(Vs[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":af(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":cf(i,s),tt("invalid",i)}Kc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,a,t),r=["children",""+a]):eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&tt("scroll",i)}switch(n){case"input":Do(i),lf(i,s,!0);break;case"textarea":Do(i),uf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ba)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=im(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Yn]=e,t[uo]=i,Rg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zc(n,i),n){case"dialog":tt("cancel",t),tt("close",t),r=i;break;case"iframe":case"object":case"embed":tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vs.length;r++)tt(Vs[r],t);r=i;break;case"source":tt("error",t),r=i;break;case"img":case"image":case"link":tt("error",t),tt("load",t),r=i;break;case"details":tt("toggle",t),r=i;break;case"input":af(t,i),r=Xc(t,i),tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),tt("invalid",t);break;case"textarea":cf(t,i),r=qc(t,i),tt("invalid",t);break;default:r=i}Kc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?om(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&to(t,l):typeof l=="number"&&to(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",t):l!=null&&$u(t,s,l,o))}switch(n){case"input":Do(t),lf(t,i,!1);break;case"textarea":Do(t),uf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Hi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Jr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Jr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ba)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)Pg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=ar(ho.current),ar($n.current),Ho(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Bo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return It(e),null;case 13:if(it(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&dn!==null&&e.mode&1&&!(e.flags&128))Ym(),cs(),e.flags|=98560,s=!1;else if(s=Ho(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Yn]=e}else cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else In!==null&&(bu(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?St===0&&(St=3):bd())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return ds(),Eu(t,e),t===null&&lo(e.stateNode.containerInfo),It(e),null;case 10:return pd(e.type._context),It(e),null;case 17:return nn(e.type)&&Ha(),It(e),null;case 19:if(it(lt),s=e.memoizedState,s===null)return It(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ds(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qa(t),o!==null){for(e.flags|=128,Ds(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&mt()>hs&&(e.flags|=128,i=!0,Ds(s,!1),e.lanes=4194304)}else{if(!i)if(t=qa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return It(e),null}else 2*mt()-s.renderingStartTime>hs&&n!==1073741824&&(e.flags|=128,i=!0,Ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mt(),e.sibling=null,n=lt.current,et(lt,i?n&1|2:n&1),e):(It(e),null);case 22:case 23:return Ld(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function B0(t,e){switch(ud(e),e.tag){case 1:return nn(e.type)&&Ha(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ds(),it(tn),it(Bt),xd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vd(e),null;case 13:if(it(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(lt),null;case 4:return ds(),null;case 10:return pd(e.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var Wo=!1,kt=!1,H0=typeof WeakSet=="function"?WeakSet:Set,de=null;function $r(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function Tu(t,e,n){try{n()}catch(i){ht(t,e,i)}}var Jf=!1;function G0(t,e){if(au=Oa,t=Um(),ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lu={focusedElem:t,selectionRange:n},Oa=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Nn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){ht(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return v=Jf,Jf=!1,v}function Ks(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tu(e,n,s)}r=r.next}while(r!==i)}}function _l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lg(t){var e=t.alternate;e!==null&&(t.alternate=null,Lg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[uo],delete e[du],delete e[T0],delete e[w0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bg(t){return t.tag===5||t.tag===3||t.tag===4}function eh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ba));else if(i!==4&&(t=t.child,t!==null))for(Au(t,e,n),t=t.sibling;t!==null;)Au(t,e,n),t=t.sibling}function Ru(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ru(t,e,n),t=t.sibling;t!==null;)Ru(t,e,n),t=t.sibling}var Pt=null,Un=!1;function gi(t,e,n){for(n=n.child;n!==null;)Dg(t,e,n),n=n.sibling}function Dg(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:kt||$r(n,e);case 6:var i=Pt,r=Un;Pt=null,gi(t,e,n),Pt=i,Un=r,Pt!==null&&(Un?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Un?(t=Pt,n=n.stateNode,t.nodeType===8?$l(t.parentNode,n):t.nodeType===1&&$l(t,n),so(t)):$l(Pt,n.stateNode));break;case 4:i=Pt,r=Un,Pt=n.stateNode.containerInfo,Un=!0,gi(t,e,n),Pt=i,Un=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tu(n,e,o),r=r.next}while(r!==i)}gi(t,e,n);break;case 1:if(!kt&&($r(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ht(n,e,a)}gi(t,e,n);break;case 21:gi(t,e,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,gi(t,e,n),kt=i):gi(t,e,n);break;default:gi(t,e,n)}}function th(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new H0),e.forEach(function(i){var r=Z0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Un=!1;break e;case 3:Pt=a.stateNode.containerInfo,Un=!0;break e;case 4:Pt=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(Pt===null)throw Error(ee(160));Dg(s,o,r),Pt=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ht(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ng(e,t),e=e.sibling}function Ng(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Wn(t),i&4){try{Ks(3,t,t.return),_l(3,t)}catch(x){ht(t,t.return,x)}try{Ks(5,t,t.return)}catch(x){ht(t,t.return,x)}}break;case 1:Pn(e,t),Wn(t),i&512&&n!==null&&$r(n,n.return);break;case 5:if(Pn(e,t),Wn(t),i&512&&n!==null&&$r(n,n.return),t.flags&32){var r=t.stateNode;try{to(r,"")}catch(x){ht(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tm(r,s),Zc(a,o);var c=Zc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?om(r,f):d==="dangerouslySetInnerHTML"?rm(r,f):d==="children"?to(r,f):$u(r,d,f,c)}switch(a){case"input":jc(r,s);break;case"textarea":nm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Jr(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Jr(r,!!s.multiple,s.defaultValue,!0):Jr(r,!!s.multiple,s.multiple?[]:"",!1))}r[uo]=s}catch(x){ht(t,t.return,x)}}break;case 6:if(Pn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){ht(t,t.return,x)}}break;case 3:if(Pn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(x){ht(t,t.return,x)}break;case 4:Pn(e,t),Wn(t);break;case 13:Pn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cd=mt())),i&4&&th(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||d,Pn(e,t),kt=c):Pn(e,t),Wn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(de=t,d=t.child;d!==null;){for(f=de=d;de!==null;){switch(h=de,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ks(4,h,h.return);break;case 1:$r(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){ht(i,n,x)}}break;case 5:$r(h,h.return);break;case 22:if(h.memoizedState!==null){ih(f);continue}}g!==null?(g.return=h,de=g):ih(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sm("display",o))}catch(x){ht(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){ht(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pn(e,t),Wn(t),i&4&&th(t);break;case 21:break;default:Pn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bg(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(to(r,""),i.flags&=-33);var s=eh(t);Ru(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=eh(t);Au(t,a,o);break;default:throw Error(ee(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function V0(t,e,n){de=t,Ug(t)}function Ug(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Wo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=Wo;var c=kt;if(Wo=o,(kt=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?rh(r):l!==null?(l.return=o,de=l):rh(r);for(;s!==null;)de=s,Ug(s),s=s.sibling;de=r,Wo=a,kt=c}nh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):nh(t)}}function nh(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||_l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&so(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}kt||e.flags&512&&wu(e)}catch(h){ht(e,e.return,h)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function ih(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function rh(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_l(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var s=e.return;try{wu(e)}catch(l){ht(e,s,l)}break;case 5:var o=e.return;try{wu(e)}catch(l){ht(e,o,l)}}}catch(l){ht(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var W0=Math.ceil,Za=mi.ReactCurrentDispatcher,Ad=mi.ReactCurrentOwner,wn=mi.ReactCurrentBatchConfig,je=0,Ct=null,xt=null,bt=0,cn=0,Kr=Xi(0),St=0,_o=null,gr=0,vl=0,Rd=0,Zs=null,Qt=null,Cd=0,hs=1/0,ii=null,Qa=!1,Cu=null,Ii=null,Xo=!1,Ri=null,Ja=0,Qs=0,Pu=null,Ca=-1,Pa=0;function Yt(){return je&6?mt():Ca!==-1?Ca:Ca=mt()}function Fi(t){return t.mode&1?je&2&&bt!==0?bt&-bt:R0.transition!==null?(Pa===0&&(Pa=vm()),Pa):(t=qe,t!==0||(t=window.event,t=t===void 0?16:wm(t.type)),t):1}function Bn(t,e,n,i){if(50<Qs)throw Qs=0,Pu=null,Error(ee(185));So(t,n,i),(!(je&2)||t!==Ct)&&(t===Ct&&(!(je&2)&&(vl|=n),St===4&&wi(t,bt)),rn(t,i),n===1&&je===0&&!(e.mode&1)&&(hs=mt()+500,pl&&ji()))}function rn(t,e){var n=t.callbackNode;Rv(t,e);var i=Fa(t,t===Ct?bt:0);if(i===0)n!==null&&hf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&hf(n),e===1)t.tag===0?A0(sh.bind(null,t)):Wm(sh.bind(null,t)),M0(function(){!(je&6)&&ji()}),n=null;else{switch(xm(i)){case 1:n=ed;break;case 4:n=gm;break;case 16:n=Ia;break;case 536870912:n=_m;break;default:n=Ia}n=Gg(n,Ig.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ig(t,e){if(Ca=-1,Pa=0,je&6)throw Error(ee(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var i=Fa(t,t===Ct?bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=el(t,i);else{e=i;var r=je;je|=2;var s=Og();(Ct!==t||bt!==e)&&(ii=null,hs=mt()+500,lr(t,e));do try{Y0();break}catch(a){Fg(t,a)}while(1);hd(),Za.current=s,je=r,xt!==null?e=0:(Ct=null,bt=0,e=St)}if(e!==0){if(e===2&&(r=nu(t),r!==0&&(i=r,e=Lu(t,r))),e===1)throw n=_o,lr(t,0),wi(t,i),rn(t,mt()),n;if(e===6)wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!X0(r)&&(e=el(t,i),e===2&&(s=nu(t),s!==0&&(i=s,e=Lu(t,s))),e===1))throw n=_o,lr(t,0),wi(t,i),rn(t,mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:er(t,Qt,ii);break;case 3:if(wi(t,i),(i&130023424)===i&&(e=Cd+500-mt(),10<e)){if(Fa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uu(er.bind(null,t,Qt,ii),e);break}er(t,Qt,ii);break;case 4:if(wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*W0(i/1960))-i,10<i){t.timeoutHandle=uu(er.bind(null,t,Qt,ii),i);break}er(t,Qt,ii);break;case 5:er(t,Qt,ii);break;default:throw Error(ee(329))}}}return rn(t,mt()),t.callbackNode===n?Ig.bind(null,t):null}function Lu(t,e){var n=Zs;return t.current.memoizedState.isDehydrated&&(lr(t,e).flags|=256),t=el(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&bu(e)),t}function bu(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function X0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wi(t,e){for(e&=~Rd,e&=~vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function sh(t){if(je&6)throw Error(ee(327));rs();var e=Fa(t,0);if(!(e&1))return rn(t,mt()),null;var n=el(t,e);if(t.tag!==0&&n===2){var i=nu(t);i!==0&&(e=i,n=Lu(t,i))}if(n===1)throw n=_o,lr(t,0),wi(t,e),rn(t,mt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,er(t,Qt,ii),rn(t,mt()),null}function Pd(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(hs=mt()+500,pl&&ji())}}function _r(t){Ri!==null&&Ri.tag===0&&!(je&6)&&rs();var e=je;je|=1;var n=wn.transition,i=qe;try{if(wn.transition=null,qe=1,t)return t()}finally{qe=i,wn.transition=n,je=e,!(je&6)&&ji()}}function Ld(){cn=Kr.current,it(Kr)}function lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,S0(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(ud(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ha();break;case 3:ds(),it(tn),it(Bt),xd();break;case 5:vd(i);break;case 4:ds();break;case 13:it(lt);break;case 19:it(lt);break;case 10:pd(i.type._context);break;case 22:case 23:Ld()}n=n.return}if(Ct=t,xt=t=Oi(t.current,null),bt=cn=e,St=0,_o=null,Rd=vl=gr=0,Qt=Zs=null,or!==null){for(e=0;e<or.length;e++)if(n=or[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}or=null}return t}function Fg(t,e){do{var n=xt;try{if(hd(),wa.current=Ka,$a){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$a=!1}if(mr=0,Rt=yt=ct=null,$s=!1,po=0,Ad.current=null,n===null||n.return===null){St=1,_o=e,xt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=jf(o);if(g!==null){g.flags&=-257,Yf(g,o,a,s,e),g.mode&1&&Xf(s,c,e),e=g,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Xf(s,c,e),bd();break e}l=Error(ee(426))}}else if(rt&&a.mode&1){var m=jf(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Yf(m,o,a,s,e),dd(fs(l,a));break e}}s=l=fs(l,a),St!==4&&(St=2),Zs===null?Zs=[s]:Zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=xg(s,l,e);zf(s,u);break e;case 1:a=l;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ii===null||!Ii.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=yg(s,a,e);zf(s,y);break e}}s=s.return}while(s!==null)}zg(n)}catch(C){e=C,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(1)}function Og(){var t=Za.current;return Za.current=Ka,t===null?Ka:t}function bd(){(St===0||St===3||St===2)&&(St=4),Ct===null||!(gr&268435455)&&!(vl&268435455)||wi(Ct,bt)}function el(t,e){var n=je;je|=2;var i=Og();(Ct!==t||bt!==e)&&(ii=null,lr(t,e));do try{j0();break}catch(r){Fg(t,r)}while(1);if(hd(),je=n,Za.current=i,xt!==null)throw Error(ee(261));return Ct=null,bt=0,St}function j0(){for(;xt!==null;)kg(xt)}function Y0(){for(;xt!==null&&!vv();)kg(xt)}function kg(t){var e=Hg(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?zg(t):xt=e,Ad.current=null}function zg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=B0(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,xt=null;return}}else if(n=z0(n,e,cn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);St===0&&(St=5)}function er(t,e,n){var i=qe,r=wn.transition;try{wn.transition=null,qe=1,q0(t,e,n,i)}finally{wn.transition=r,qe=i}return null}function q0(t,e,n,i){do rs();while(Ri!==null);if(je&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Cv(t,s),t===Ct&&(xt=Ct=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xo||(Xo=!0,Gg(Ia,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=qe;qe=1;var a=je;je|=4,Ad.current=null,G0(t,n),Ng(n,t),p0(lu),Oa=!!au,lu=au=null,t.current=n,V0(n),xv(),je=a,qe=o,wn.transition=s}else t.current=n;if(Xo&&(Xo=!1,Ri=t,Ja=r),s=t.pendingLanes,s===0&&(Ii=null),Mv(n.stateNode),rn(t,mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qa)throw Qa=!1,t=Cu,Cu=null,t;return Ja&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===Pu?Qs++:(Qs=0,Pu=t):Qs=0,ji(),null}function rs(){if(Ri!==null){var t=xm(Ja),e=wn.transition,n=qe;try{if(wn.transition=null,qe=16>t?16:t,Ri===null)var i=!1;else{if(t=Ri,Ri=null,Ja=0,je&6)throw Error(ee(331));var r=je;for(je|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(de=c;de!==null;){var d=de;switch(d.tag){case 0:case 11:case 15:Ks(8,d,s)}var f=d.child;if(f!==null)f.return=d,de=f;else for(;de!==null;){d=de;var h=d.sibling,g=d.return;if(Lg(d),d===c){de=null;break}if(h!==null){h.return=g,de=h;break}de=g}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ks(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,de=u;break e}de=s.return}}var p=t.current;for(de=p;de!==null;){o=de;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,de=_;else e:for(o=p;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_l(9,a)}}catch(C){ht(a,a.return,C)}if(a===o){de=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,de=y;break e}de=a.return}}if(je=r,ji(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(cl,t)}catch{}i=!0}return i}finally{qe=n,wn.transition=e}}return!1}function oh(t,e,n){e=fs(n,e),e=xg(t,e,1),t=Ui(t,e,1),e=Yt(),t!==null&&(So(t,1,e),rn(t,e))}function ht(t,e,n){if(t.tag===3)oh(t,t,n);else for(;e!==null;){if(e.tag===3){oh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ii===null||!Ii.has(i))){t=fs(n,t),t=yg(e,t,1),e=Ui(e,t,1),t=Yt(),e!==null&&(So(e,1,t),rn(e,t));break}}e=e.return}}function $0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(bt&n)===n&&(St===4||St===3&&(bt&130023424)===bt&&500>mt()-Cd?lr(t,0):Rd|=n),rn(t,e)}function Bg(t,e){e===0&&(t.mode&1?(e=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):e=1);var n=Yt();t=fi(t,e),t!==null&&(So(t,e,n),rn(t,n))}function K0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bg(t,n)}function Z0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Bg(t,n)}var Hg;Hg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,k0(t,e,n);en=!!(t.flags&131072)}else en=!1,rt&&e.flags&1048576&&Xm(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ra(t,e),t=e.pendingProps;var r=ls(e,Bt.current);is(e,n),r=Sd(null,e,i,t,r,n);var s=Md();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,Ga(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gd(e),r.updater=gl,e.stateNode=r,r._reactInternals=e,_u(e,i,t,n),e=yu(null,e,i,!0,s,n)):(e.tag=0,rt&&s&&cd(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ra(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=J0(i),t=Nn(i,t),r){case 0:e=xu(null,e,i,t,n);break e;case 1:e=Kf(null,e,i,t,n);break e;case 11:e=qf(null,e,i,t,n);break e;case 14:e=$f(null,e,i,Nn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),xu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Kf(t,e,i,r,n);case 3:e:{if(Tg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Zm(t,e),Ya(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=fs(Error(ee(423)),e),e=Zf(t,e,i,n,r);break e}else if(i!==r){r=fs(Error(ee(424)),e),e=Zf(t,e,i,n,r);break e}else for(dn=Ni(e.stateNode.containerInfo.firstChild),fn=e,rt=!0,In=null,n=$m(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cs(),i===r){e=hi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return Qm(e),t===null&&pu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,cu(i,r)?o=null:s!==null&&cu(i,s)&&(e.flags|=32),Eg(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&pu(e),null;case 13:return wg(t,e,n);case 4:return _d(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=us(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),qf(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(Xa,i._currentValue),i._currentValue=o,s!==null)if(Gn(s.value,o)){if(s.children===r.children&&!tn.current){e=hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,is(e,n),r=An(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),$f(t,e,i,r,n);case 15:return Sg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Ra(t,e),e.tag=1,nn(i)?(t=!0,Ga(e)):t=!1,is(e,n),vg(e,i,r),_u(e,i,r,n),yu(null,e,i,!0,t,n);case 19:return Ag(t,e,n);case 22:return Mg(t,e,n)}throw Error(ee(156,e.tag))};function Gg(t,e){return mm(t,e)}function Q0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new Q0(t,e,n,i)}function Dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function J0(t){if(typeof t=="function")return Dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zu)return 11;if(t===Qu)return 14}return 2}function Oi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function La(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Dd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Br:return cr(n.children,r,s,e);case Ku:o=8,r|=8;break;case Hc:return t=En(12,n,e,r|2),t.elementType=Hc,t.lanes=s,t;case Gc:return t=En(13,n,e,r),t.elementType=Gc,t.lanes=s,t;case Vc:return t=En(19,n,e,r),t.elementType=Vc,t.lanes=s,t;case Qp:return xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kp:o=10;break e;case Zp:o=9;break e;case Zu:o=11;break e;case Qu:o=14;break e;case Mi:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=En(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function cr(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function xl(t,e,n,i){return t=En(22,t,i,e),t.elementType=Qp,t.lanes=n,t.stateNode={isHidden:!1},t}function ic(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function rc(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ex(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nd(t,e,n,i,r,s,o,a,l){return t=new ex(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gd(s),t}function tx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Vg(t){if(!t)return Gi;t=t._reactInternals;e:{if(Sr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(nn(n))return Vm(t,n,e)}return e}function Wg(t,e,n,i,r,s,o,a,l){return t=Nd(n,i,!0,t,r,s,o,a,l),t.context=Vg(null),n=t.current,i=Yt(),r=Fi(n),s=ci(i,r),s.callback=e??null,Ui(n,s,r),t.current.lanes=r,So(t,r,i),rn(t,i),t}function yl(t,e,n,i){var r=e.current,s=Yt(),o=Fi(r);return n=Vg(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,o),t!==null&&(Bn(t,r,o,s),Ta(t,r,o)),o}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ah(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ud(t,e){ah(t,e),(t=t.alternate)&&ah(t,e)}function nx(){return null}var Xg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Id(t){this._internalRoot=t}Sl.prototype.render=Id.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));yl(t,e,null,null)};Sl.prototype.unmount=Id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_r(function(){yl(null,t,null,null)}),e[di]=null}};function Sl(t){this._internalRoot=t}Sl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ti.length&&e!==0&&e<Ti[n].priority;n++);Ti.splice(n,0,t),n===0&&Tm(t)}};function Fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lh(){}function ix(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tl(o);s.call(c)}}var o=Wg(e,i,t,0,null,!1,!1,"",lh);return t._reactRootContainer=o,t[di]=o.current,lo(t.nodeType===8?t.parentNode:t),_r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tl(l);a.call(c)}}var l=Nd(t,0,!1,null,null,!1,!1,"",lh);return t._reactRootContainer=l,t[di]=l.current,lo(t.nodeType===8?t.parentNode:t),_r(function(){yl(e,l,n,i)}),l}function El(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tl(o);a.call(l)}}yl(e,o,t,r)}else o=ix(n,e,t,r,i);return tl(o)}ym=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gs(e.pendingLanes);n!==0&&(td(e,n|1),rn(e,mt()),!(je&6)&&(hs=mt()+500,ji()))}break;case 13:_r(function(){var i=fi(t,1);if(i!==null){var r=Yt();Bn(i,t,1,r)}}),Ud(t,1)}};nd=function(t){if(t.tag===13){var e=fi(t,134217728);if(e!==null){var n=Yt();Bn(e,t,134217728,n)}Ud(t,134217728)}};Sm=function(t){if(t.tag===13){var e=Fi(t),n=fi(t,e);if(n!==null){var i=Yt();Bn(n,t,e,i)}Ud(t,e)}};Mm=function(){return qe};Em=function(t,e){var n=qe;try{return qe=t,e()}finally{qe=n}};Jc=function(t,e,n){switch(e){case"input":if(jc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hl(i);if(!r)throw Error(ee(90));em(i),jc(i,r)}}}break;case"textarea":nm(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};cm=Pd;um=_r;var rx={usingClientEntryPoint:!1,Events:[Eo,Wr,hl,am,lm,Pd]},Ns={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sx={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||nx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{cl=jo.inject(sx),qn=jo}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rx;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(e))throw Error(ee(200));return tx(t,e,null,n)};mn.createRoot=function(t,e){if(!Fd(t))throw Error(ee(299));var n=!1,i="",r=Xg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nd(t,1,!1,null,null,n,!1,i,r),t[di]=e.current,lo(t.nodeType===8?t.parentNode:t),new Id(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=hm(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return _r(t)};mn.hydrate=function(t,e,n){if(!Ml(e))throw Error(ee(200));return El(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!Fd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Xg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wg(e,null,t,1,n??null,r,!1,s,o),t[di]=e.current,lo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Sl(e)};mn.render=function(t,e,n){if(!Ml(e))throw Error(ee(200));return El(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(ee(40));return t._reactRootContainer?(_r(function(){El(null,null,t,!1,function(){t._reactRootContainer=null,t[di]=null})}),!0):!1};mn.unstable_batchedUpdates=Pd;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ml(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return El(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function jg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jg)}catch(t){console.error(t)}}jg(),jp.exports=mn;var ox=jp.exports,ch=ox;zc.createRoot=ch.createRoot,zc.hydrateRoot=ch.hydrateRoot;function ax({navOpen:t,toggleNav:e,scrolled:n}){const i=["About","Skills","Projects","Education","Experience","Contact"];return N.jsx("header",{className:`site-header ${n?"scrolled":""}`,role:"banner",children:N.jsxs("div",{className:"container header-inner",children:[N.jsx("a",{className:"brand",href:"#home",children:"Lakshan Alahapperuma"}),N.jsx("nav",{className:`nav ${t?"show":""}`,id:"nav",role:"navigation","aria-label":"Main navigation",children:i.map(r=>N.jsx("a",{href:`#${r.toLowerCase()}`,onClick:()=>e(!1),"aria-label":`Go to ${r}`,children:r},r))}),N.jsxs("div",{className:"header-actions",children:[N.jsx("a",{className:"resume-btn",href:"/resume.pdf",target:"_blank",rel:"noopener noreferrer",children:"Resume"}),N.jsx("button",{id:"nav-toggle","aria-label":"Toggle navigation","aria-controls":"nav","aria-expanded":t,onClick:()=>e(),children:"☰"})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="160",lx=0,uh=1,cx=2,Yg=1,ux=2,ni=3,Vi=0,sn=1,si=2,ki=0,ss=1,dh=2,fh=3,hh=4,dx=5,ir=100,fx=101,hx=102,ph=103,mh=104,px=200,mx=201,gx=202,_x=203,Du=204,Nu=205,vx=206,xx=207,yx=208,Sx=209,Mx=210,Ex=211,Tx=212,wx=213,Ax=214,Rx=0,Cx=1,Px=2,nl=3,Lx=4,bx=5,Dx=6,Nx=7,kd=0,Ux=1,Ix=2,zi=0,Fx=1,Ox=2,kx=3,zx=4,Bx=5,Hx=6,qg=300,ps=301,ms=302,Uu=303,Iu=304,Tl=306,Fu=1e3,On=1001,Ou=1002,jt=1003,gh=1004,sc=1005,Sn=1006,Gx=1007,vo=1008,Bi=1009,Vx=1010,Wx=1011,zd=1012,$g=1013,Ci=1014,Pi=1015,xo=1016,Kg=1017,Zg=1018,ur=1020,Xx=1021,kn=1023,jx=1024,Yx=1025,dr=1026,gs=1027,qx=1028,Qg=1029,$x=1030,Jg=1031,e_=1033,oc=33776,ac=33777,lc=33778,cc=33779,_h=35840,vh=35841,xh=35842,yh=35843,t_=36196,Sh=37492,Mh=37496,Eh=37808,Th=37809,wh=37810,Ah=37811,Rh=37812,Ch=37813,Ph=37814,Lh=37815,bh=37816,Dh=37817,Nh=37818,Uh=37819,Ih=37820,Fh=37821,uc=36492,Oh=36494,kh=36495,Kx=36283,zh=36284,Bh=36285,Hh=36286,n_=3e3,fr=3001,Zx=3200,Qx=3201,i_=0,Jx=1,Mn="",Lt="srgb",pi="srgb-linear",Bd="display-p3",wl="display-p3-linear",il="linear",nt="srgb",rl="rec709",sl="p3",Er=7680,Gh=519,ey=512,ty=513,ny=514,r_=515,iy=516,ry=517,sy=518,oy=519,Vh=35044,Wh="300 es",ku=1035,li=2e3,ol=2001;class Ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,zu=180/Math.PI;function wo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function ay(t,e){return(t%e+e)%e}function fc(t,e,n){return(1-n)*t+n*e}function Xh(t){return(t&t-1)===0&&t!==0}function Bu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Us(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],g=i[5],v=i[8],x=r[0],m=r[3],u=r[6],p=r[1],_=r[4],y=r[7],C=r[2],w=r[5],R=r[8];return s[0]=o*x+a*p+l*C,s[3]=o*m+a*_+l*w,s[6]=o*u+a*y+l*R,s[1]=c*x+d*p+f*C,s[4]=c*m+d*_+f*w,s[7]=c*u+d*y+f*R,s[2]=h*x+g*p+v*C,s[5]=h*m+g*_+v*w,s[8]=h*u+g*y+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,g=c*s-o*l,v=n*f+i*h+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=g*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hc.makeScale(e,n)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new Be;function s_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ly(){const t=al("canvas");return t.style.display="block",t}const jh={};function Js(t){t in jh||(jh[t]=!0,console.warn(t))}const Yh=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qh=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yo={[pi]:{transfer:il,primaries:rl,toReference:t=>t,fromReference:t=>t},[Lt]:{transfer:nt,primaries:rl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[wl]:{transfer:il,primaries:sl,toReference:t=>t.applyMatrix3(qh),fromReference:t=>t.applyMatrix3(Yh)},[Bd]:{transfer:nt,primaries:sl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(qh),fromReference:t=>t.applyMatrix3(Yh).convertLinearToSRGB()}},cy=new Set([pi,wl]),Ke={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!cy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Yo[e].toReference,r=Yo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Yo[t].primaries},getTransfer:function(t){return t===Mn?il:Yo[t].transfer}};function os(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Tr;class o_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=al("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Tr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=os(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(os(n[i]/255)*255):n[i]=os(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uy=0;class a_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=wo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mc(r[o].image)):s.push(mc(r[o]))}else s=mc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?o_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dy=0;class hn extends Ss{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=On,r=On,s=Sn,o=vo,a=kn,l=Bi,c=hn.DEFAULT_ANISOTROPY,d=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=wo(),this.name="",this.source=new a_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===fr?Lt:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fu:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fu:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?fr:n_}set encoding(e){Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fr?Lt:Mn}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=qg;hn.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],g=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(g+1)/2,C=(u+1)/2,w=(d+h)/4,R=(f+x)/4,b=(v+m)/4;return _>y&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=R/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=b/s),this.set(i,r,s,n),this}let p=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(p)<.001&&(p=1),this.x=(m-v)/p,this.y=(f-x)/p,this.z=(h-d)/p,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fy extends Ss{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fr?Lt:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new a_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends fy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class l_ extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hy extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ao{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],g=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=v,e[n+3]=x;return}if(f!==x||l!==h||c!==g||d!==v){let m=1-a;const u=l*h+c*g+d*v+f*x,p=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const C=Math.sqrt(_),w=Math.atan2(C,u*p);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const y=a*p;if(l=l*m+h*y,c=c*m+g*y,d=d*m+v*y,f=f*m+x*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],g=s[o+2],v=s[o+3];return e[n]=a*v+d*f+l*g-c*h,e[n+1]=l*v+d*h+c*f-a*g,e[n+2]=c*v+d*g+a*h-l*f,e[n+3]=d*v-a*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),g=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*g*v,this._y=c*g*f-h*d*v,this._z=c*d*v+h*g*f,this._w=c*d*f-h*g*v;break;case"YXZ":this._x=h*d*f+c*g*v,this._y=c*g*f-h*d*v,this._z=c*d*v-h*g*f,this._w=c*d*f+h*g*v;break;case"ZXY":this._x=h*d*f-c*g*v,this._y=c*g*f+h*d*v,this._z=c*d*v+h*g*f,this._w=c*d*f-h*g*v;break;case"ZYX":this._x=h*d*f-c*g*v,this._y=c*g*f+h*d*v,this._z=c*d*v-h*g*f,this._w=c*d*f+h*g*v;break;case"YZX":this._x=h*d*f+c*g*v,this._y=c*g*f+h*d*v,this._z=c*d*v-h*g*f,this._w=c*d*f-h*g*v;break;case"XZY":this._x=h*d*f-c*g*v,this._y=c*g*f-h*d*v,this._z=c*d*v+h*g*f,this._w=c*d*f+h*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($h.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new U,$h=new Ao;class Ro{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(s,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qo.copy(i.boundingBox)),qo.applyMatrix4(e.matrixWorld),this.union(qo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),$o.subVectors(this.max,Is),wr.subVectors(e.a,Is),Ar.subVectors(e.b,Is),Rr.subVectors(e.c,Is),_i.subVectors(Ar,wr),vi.subVectors(Rr,Ar),$i.subVectors(wr,Rr);let n=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-$i.z,$i.y,_i.z,0,-_i.x,vi.z,0,-vi.x,$i.z,0,-$i.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-$i.y,$i.x,0];return!_c(n,wr,Ar,Rr,$o)||(n=[1,0,0,0,1,0,0,0,1],!_c(n,wr,Ar,Rr,$o))?!1:(Ko.crossVectors(_i,vi),n=[Ko.x,Ko.y,Ko.z],_c(n,wr,Ar,Rr,$o))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new U,new U,new U,new U,new U,new U,new U,new U],Ln=new U,qo=new Ro,wr=new U,Ar=new U,Rr=new U,_i=new U,vi=new U,$i=new U,Is=new U,$o=new U,Ko=new U,Ki=new U;function _c(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ki.fromArray(t,s);const a=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),c=n.dot(Ki),d=i.dot(Ki);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const py=new Ro,Fs=new U,vc=new U;class Al{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):py.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const n=Fs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Fs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(vc)),this.expandByPoint(Fs.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new U,xc=new U,Zo=new U,xi=new U,yc=new U,Qo=new U,Sc=new U;class c_{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xc.copy(e).add(n).multiplyScalar(.5),Zo.copy(n).sub(e).normalize(),xi.copy(this.origin).sub(xc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Zo),a=xi.dot(this.direction),l=-xi.dot(Zo),c=xi.lengthSq(),d=Math.abs(1-o*o);let f,h,g,v;if(d>0)if(f=o*l-a,h=o*a-l,v=s*d,f>=0)if(h>=-v)if(h<=v){const x=1/d;f*=x,h*=x,g=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xc).addScaledVector(Zo,h),g}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){yc.subVectors(n,e),Qo.subVectors(i,e),Sc.crossVectors(yc,Qo);let o=this.direction.dot(Sc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);const l=a*this.direction.dot(Qo.crossVectors(xi,Qo));if(l<0)return null;const c=a*this.direction.dot(yc.cross(xi));if(c<0||l+c>o)return null;const d=-a*xi.dot(Sc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,g,v,x,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,g,v,x,m)}set(e,n,i,r,s,o,a,l,c,d,f,h,g,v,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=g,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,g=o*f,v=a*d,x=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+v*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=v+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,g=l*f,v=c*d,x=c*f;n[0]=h+x*a,n[4]=v*a-g,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=g*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,g=l*f,v=c*d,x=c*f;n[0]=h-x*a,n[4]=-o*f,n[8]=v+g*a,n[1]=g+v*a,n[5]=o*d,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,g=o*f,v=a*d,x=a*f;n[0]=l*d,n[4]=v*c-g,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=g*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,v=a*l,x=a*c;n[0]=l*d,n[4]=x-h*f,n[8]=v*f+g,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*f+v,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,g=o*c,v=a*l,x=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+x,n[5]=o*d,n[9]=g*f-v,n[2]=v*f-g,n[6]=a*d,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(my,e,gy)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),yi.crossVectors(i,an),yi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),yi.crossVectors(i,an)),yi.normalize(),Jo.crossVectors(an,yi),r[0]=yi.x,r[4]=Jo.x,r[8]=an.x,r[1]=yi.y,r[5]=Jo.y,r[9]=an.y,r[2]=yi.z,r[6]=Jo.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],g=i[13],v=i[2],x=i[6],m=i[10],u=i[14],p=i[3],_=i[7],y=i[11],C=i[15],w=r[0],R=r[4],b=r[8],M=r[12],E=r[1],H=r[5],Y=r[9],ie=r[13],L=r[2],V=r[6],j=r[10],q=r[14],D=r[3],F=r[7],G=r[11],$=r[15];return s[0]=o*w+a*E+l*L+c*D,s[4]=o*R+a*H+l*V+c*F,s[8]=o*b+a*Y+l*j+c*G,s[12]=o*M+a*ie+l*q+c*$,s[1]=d*w+f*E+h*L+g*D,s[5]=d*R+f*H+h*V+g*F,s[9]=d*b+f*Y+h*j+g*G,s[13]=d*M+f*ie+h*q+g*$,s[2]=v*w+x*E+m*L+u*D,s[6]=v*R+x*H+m*V+u*F,s[10]=v*b+x*Y+m*j+u*G,s[14]=v*M+x*ie+m*q+u*$,s[3]=p*w+_*E+y*L+C*D,s[7]=p*R+_*H+y*V+C*F,s[11]=p*b+_*Y+y*j+C*G,s[15]=p*M+_*ie+y*q+C*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],g=e[14],v=e[3],x=e[7],m=e[11],u=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*g-i*l*g)+x*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*d-s*l*d)+m*(+n*c*f-n*a*g-s*o*f+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],g=e[11],v=e[12],x=e[13],m=e[14],u=e[15],p=f*m*c-x*h*c+x*l*g-a*m*g-f*l*u+a*h*u,_=v*h*c-d*m*c-v*l*g+o*m*g+d*l*u-o*h*u,y=d*x*c-v*f*c+v*a*g-o*x*g-d*a*u+o*f*u,C=v*f*l-d*x*l-v*a*h+o*x*h+d*a*m-o*f*m,w=n*p+i*_+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=p*R,e[1]=(x*h*s-f*m*s-x*r*g+i*m*g+f*r*u-i*h*u)*R,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*g-i*l*g)*R,e[4]=_*R,e[5]=(d*m*s-v*h*s+v*r*g-n*m*g-d*r*u+n*h*u)*R,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*u-n*l*u)*R,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*g+n*l*g)*R,e[8]=y*R,e[9]=(v*f*s-d*x*s-v*i*g+n*x*g+d*i*u-n*f*u)*R,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*u+n*a*u)*R,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*g-n*a*g)*R,e[12]=C*R,e[13]=(d*x*r-v*f*r+v*i*h-n*x*h-d*i*m+n*f*m)*R,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*R,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,g=s*d,v=s*f,x=o*d,m=o*f,u=a*f,p=l*c,_=l*d,y=l*f,C=i.x,w=i.y,R=i.z;return r[0]=(1-(x+u))*C,r[1]=(g+y)*C,r[2]=(v-_)*C,r[3]=0,r[4]=(g-y)*w,r[5]=(1-(h+u))*w,r[6]=(m+p)*w,r[7]=0,r[8]=(v+_)*R,r[9]=(m-p)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Cr.set(r[0],r[1],r[2]).length();const o=Cr.set(r[4],r[5],r[6]).length(),a=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/s,d=1/o,f=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,n.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=li){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,v;if(a===li)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ol)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=li){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,g=(i+r)*d;let v,x;if(a===li)v=(o+s)*f,x=-2*f;else if(a===ol)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Cr=new U,bn=new gt,my=new U(0,0,0),gy=new U(1,1,1),yi=new U,Jo=new U,an=new U,Kh=new gt,Zh=new Ao;class Rl{constructor(e=0,n=0,i=0,r=Rl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rl.DEFAULT_ORDER="XYZ";class u_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _y=0;const Qh=new U,Pr=new Ao,Jn=new gt,ea=new U,Os=new U,vy=new U,xy=new Ao,Jh=new U(1,0,0),ep=new U(0,1,0),tp=new U(0,0,1),yy={type:"added"},Sy={type:"removed"};class qt extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new U,n=new Rl,i=new Ao,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Be}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new u_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Pr.setFromAxisAngle(e,n),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,n){return Pr.setFromAxisAngle(e,n),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(ep,e)}rotateZ(e){return this.rotateOnAxis(tp,e)}translateOnAxis(e,n){return Qh.copy(e).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(ep,e)}translateZ(e){return this.translateOnAxis(tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ea.copy(e):ea.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Os,ea,this.up):Jn.lookAt(ea,Os,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(Jn),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Sy)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,vy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new U(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new U,ei=new U,Mc=new U,ti=new U,Lr=new U,br=new U,np=new U,Ec=new U,Tc=new U,wc=new U;let ta=!1;class Fn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ei.subVectors(i,n),Mc.subVectors(e,n);const o=Dn.dot(Dn),a=Dn.dot(ei),l=Dn.dot(Mc),c=ei.dot(ei),d=ei.dot(Mc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,g=(c*l-a*d)*h,v=(o*d-a*l)*h;return s.set(1-g-v,v,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,n,i,r,s,o,a,l){return ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ta=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ei.subVectors(e,n),Dn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Dn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ta=!0),Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),br.subVectors(s,i),Ec.subVectors(e,i);const l=Lr.dot(Ec),c=br.dot(Ec);if(l<=0&&c<=0)return n.copy(i);Tc.subVectors(e,r);const d=Lr.dot(Tc),f=br.dot(Tc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Lr,o);wc.subVectors(e,s);const g=Lr.dot(wc),v=br.dot(wc);if(v>=0&&g<=v)return n.copy(s);const x=g*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(br,a);const m=d*v-g*f;if(m<=0&&f-d>=0&&g-v>=0)return np.subVectors(s,r),a=(f-d)/(f-d+(g-v)),n.copy(r).addScaledVector(np,a);const u=1/(m+x+h);return o=x*u,a=h*u,n.copy(i).addScaledVector(Lr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const d_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},na={h:0,s:0,l:0};function Ac(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=ay(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ac(o,s,e+1/3),this.g=Ac(o,s,e),this.b=Ac(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=Lt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Lt){const i=d_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=pc(e.r),this.g=pc(e.g),this.b=pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Ke.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Jt(Ot.r*255,0,255))*65536+Math.round(Jt(Ot.g*255,0,255))*256+Math.round(Jt(Ot.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Lt){Ke.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Lt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(na);const i=fc(Si.h,na.h,n),r=fc(Si.s,na.s,n),s=fc(Si.l,na.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Xe;Xe.NAMES=d_;let My=0;class Ms extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=ss,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Nu,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Du&&(i.blendSrc=this.blendSrc),this.blendDst!==Nu&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class f_ extends Ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new U,ia=new Ve;class Hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ia.fromBufferAttribute(this,n),ia.applyMatrix3(e),this.setXY(n,ia.x,ia.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Us(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Us(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Us(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Us(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Us(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vh&&(e.usage=this.usage),e}}class h_ extends Hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class p_ extends Hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zt extends Hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ey=0;const vn=new gt,Rc=new qt,Dr=new U,ln=new Ro,ks=new Ro,At=new U;class Cn extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s_(e)?p_:h_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(ln.min,ks.min),ln.expandByPoint(At),At.addVectors(ln.max,ks.max),ln.expandByPoint(At)):(ln.expandByPoint(ks.min),ln.expandByPoint(ks.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)At.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(e,c),At.add(Dr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let E=0;E<a;E++)c[E]=new U,d[E]=new U;const f=new U,h=new U,g=new U,v=new Ve,x=new Ve,m=new Ve,u=new U,p=new U;function _(E,H,Y){f.fromArray(r,E*3),h.fromArray(r,H*3),g.fromArray(r,Y*3),v.fromArray(o,E*2),x.fromArray(o,H*2),m.fromArray(o,Y*2),h.sub(f),g.sub(f),x.sub(v),m.sub(v);const ie=1/(x.x*m.y-m.x*x.y);isFinite(ie)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(g,-x.y).multiplyScalar(ie),p.copy(g).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(ie),c[E].add(u),c[H].add(u),c[Y].add(u),d[E].add(p),d[H].add(p),d[Y].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,H=y.length;E<H;++E){const Y=y[E],ie=Y.start,L=Y.count;for(let V=ie,j=ie+L;V<j;V+=3)_(i[V+0],i[V+1],i[V+2])}const C=new U,w=new U,R=new U,b=new U;function M(E){R.fromArray(s,E*3),b.copy(R);const H=c[E];C.copy(H),C.sub(R.multiplyScalar(R.dot(H))).normalize(),w.crossVectors(b,H);const ie=w.dot(d[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=ie}for(let E=0,H=y.length;E<H;++E){const Y=y[E],ie=Y.start,L=Y.count;for(let V=ie,j=ie+L;V<j;V+=3)M(i[V+0]),M(i[V+1]),M(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,d=new U,f=new U;if(e)for(let h=0,g=e.count;h<g;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let g=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?g=l[x]*a.data.stride+a.offset:g=l[x]*d;for(let u=0;u<d;u++)h[v++]=c[g++]}return new Hn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,g=f.length;h<g;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ip=new gt,Zi=new c_,ra=new Al,rp=new U,Nr=new U,Ur=new U,Ir=new U,Cc=new U,sa=new U,oa=new Ve,aa=new Ve,la=new Ve,sp=new U,op=new U,ap=new U,ca=new U,ua=new U;class Tn extends qt{constructor(e=new Cn,n=new f_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){sa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Cc.fromBufferAttribute(f,e),o?sa.addScaledVector(Cc,d):sa.addScaledVector(Cc.sub(n),d))}n.add(sa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(ra.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(ra,rp)===null||Zi.origin.distanceToSquared(rp)>(e.far-e.near)**2))&&(ip.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(ip),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],u=o[m.materialIndex],p=Math.max(m.start,g.start),_=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let y=p,C=_;y<C;y+=3){const w=a.getX(y),R=a.getX(y+1),b=a.getX(y+2);r=da(this,u,e,i,c,d,f,w,R,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let m=v,u=x;m<u;m+=3){const p=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=da(this,o,e,i,c,d,f,p,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],u=o[m.materialIndex],p=Math.max(m.start,g.start),_=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let y=p,C=_;y<C;y+=3){const w=y,R=y+1,b=y+2;r=da(this,u,e,i,c,d,f,w,R,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=v,u=x;m<u;m+=3){const p=m,_=m+1,y=m+2;r=da(this,o,e,i,c,d,f,p,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Ty(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;ua.copy(a),ua.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ua);return c<n.near||c>n.far?null:{distance:c,point:ua.clone(),object:t}}function da(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Nr),t.getVertexPosition(l,Ur),t.getVertexPosition(c,Ir);const d=Ty(t,e,n,i,Nr,Ur,Ir,ca);if(d){r&&(oa.fromBufferAttribute(r,a),aa.fromBufferAttribute(r,l),la.fromBufferAttribute(r,c),d.uv=Fn.getInterpolation(ca,Nr,Ur,Ir,oa,aa,la,new Ve)),s&&(oa.fromBufferAttribute(s,a),aa.fromBufferAttribute(s,l),la.fromBufferAttribute(s,c),d.uv1=Fn.getInterpolation(ca,Nr,Ur,Ir,oa,aa,la,new Ve),d.uv2=d.uv1),o&&(sp.fromBufferAttribute(o,a),op.fromBufferAttribute(o,l),ap.fromBufferAttribute(o,c),d.normal=Fn.getInterpolation(ca,Nr,Ur,Ir,sp,op,ap,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};Fn.getNormal(Nr,Ur,Ir,f.normal),d.face=f}return d}class Es extends Cn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,g=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(f,2));function v(x,m,u,p,_,y,C,w,R,b,M){const E=y/R,H=C/b,Y=y/2,ie=C/2,L=w/2,V=R+1,j=b+1;let q=0,D=0;const F=new U;for(let G=0;G<j;G++){const $=G*H-ie;for(let Z=0;Z<V;Z++){const X=Z*E-Y;F[x]=X*p,F[m]=$*_,F[u]=L,c.push(F.x,F.y,F.z),F[x]=0,F[m]=0,F[u]=w>0?1:-1,d.push(F.x,F.y,F.z),f.push(Z/R),f.push(1-G/b),q+=1}}for(let G=0;G<b;G++)for(let $=0;$<R;$++){const Z=h+$+V*G,X=h+$+V*(G+1),K=h+($+1)+V*(G+1),le=h+($+1)+V*G;l.push(Z,X,le),l.push(X,K,le),D+=6}a.addGroup(g,D,M),g+=D,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=_s(t[n]);for(const r in i)e[r]=i[r]}return e}function wy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function m_(t){return t.getRenderTarget()===null?t.outputColorSpace:Ke.workingColorSpace}const Ay={clone:_s,merge:Wt};var Ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ry,this.fragmentShader=Cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class g_ extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends g_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zu*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,Or=1;class Py extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Fr,Or,e,n);r.layers=this.layers,this.add(r);const s=new un(Fr,Or,e,n);s.layers=this.layers,this.add(s);const o=new un(Fr,Or,e,n);o.layers=this.layers,this.add(o);const a=new un(Fr,Or,e,n);a.layers=this.layers,this.add(a);const l=new un(Fr,Or,e,n);l.layers=this.layers,this.add(l);const c=new un(Fr,Or,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class __ extends hn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ps,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ly extends vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fr?Lt:Mn),this.texture=new __(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Es(5,5,5),s=new xr({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ki});s.uniforms.tEquirect.value=n;const o=new Tn(r,s),a=n.minFilter;return n.minFilter===vo&&(n.minFilter=Sn),new Py(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Pc=new U,by=new U,Dy=new Be;class tr{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pc.subVectors(i,n).cross(by.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Dy.getNormalMatrix(e),r=this.coplanarPoint(Pc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Al,fa=new U;class Hd{constructor(e=new tr,n=new tr,i=new tr,r=new tr,s=new tr,o=new tr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],g=r[8],v=r[9],x=r[10],m=r[11],u=r[12],p=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-g,y-u).normalize(),i[1].setComponents(l+s,h+c,m+g,y+u).normalize(),i[2].setComponents(l+o,h+d,m+v,y+p).normalize(),i[3].setComponents(l-o,h-d,m-v,y-p).normalize(),i[4].setComponents(l-a,h-f,m-x,y-_).normalize(),n===li)i[5].setComponents(l+a,h+f,m+x,y+_).normalize();else if(n===ol)i[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fa.x=r.normal.x>0?e.max.x:e.min.x,fa.y=r.normal.y>0?e.max.y:e.min.y,fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function v_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ny(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,g=f.byteLength,v=t.createBuffer();t.bindBuffer(d,v),t.bufferData(d,f,h),c.onUploadCallback();let x;if(f instanceof Float32Array)x=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=t.SHORT;else if(f instanceof Uint32Array)x=t.UNSIGNED_INT;else if(f instanceof Int32Array)x=t.INT;else if(f instanceof Int8Array)x=t.BYTE;else if(f instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,d,f){const h=d.array,g=d._updateRange,v=d.updateRanges;if(t.bindBuffer(f,c),g.count===-1&&v.length===0&&t.bufferSubData(f,0,h),v.length!==0){for(let x=0,m=v.length;x<m;x++){const u=v[x];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:o,remove:a,update:l}}class Gd extends Cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,g=[],v=[],x=[],m=[];for(let u=0;u<d;u++){const p=u*h-o;for(let _=0;_<c;_++){const y=_*f-s;v.push(y,-p,0),x.push(0,0,1),m.push(_/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<a;p++){const _=p+c*u,y=p+c*(u+1),C=p+1+c*(u+1),w=p+1+c*u;g.push(_,y,w),g.push(y,C,w)}this.setIndex(g),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gd(e.width,e.height,e.widthSegments,e.heightSegments)}}var Uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,By=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uS="gl_FragColor = linearToOutputTexel( gl_FragColor );",dS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ES=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,US=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,BS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,HS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$S=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,KS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ZS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,HM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Uy,alphahash_pars_fragment:Iy,alphamap_fragment:Fy,alphamap_pars_fragment:Oy,alphatest_fragment:ky,alphatest_pars_fragment:zy,aomap_fragment:By,aomap_pars_fragment:Hy,batching_pars_vertex:Gy,batching_vertex:Vy,begin_vertex:Wy,beginnormal_vertex:Xy,bsdfs:jy,iridescence_fragment:Yy,bumpmap_pars_fragment:qy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:Ky,clipping_planes_pars_vertex:Zy,clipping_planes_vertex:Qy,color_fragment:Jy,color_pars_fragment:eS,color_pars_vertex:tS,color_vertex:nS,common:iS,cube_uv_reflection_fragment:rS,defaultnormal_vertex:sS,displacementmap_pars_vertex:oS,displacementmap_vertex:aS,emissivemap_fragment:lS,emissivemap_pars_fragment:cS,colorspace_fragment:uS,colorspace_pars_fragment:dS,envmap_fragment:fS,envmap_common_pars_fragment:hS,envmap_pars_fragment:pS,envmap_pars_vertex:mS,envmap_physical_pars_fragment:RS,envmap_vertex:gS,fog_vertex:_S,fog_pars_vertex:vS,fog_fragment:xS,fog_pars_fragment:yS,gradientmap_pars_fragment:SS,lightmap_fragment:MS,lightmap_pars_fragment:ES,lights_lambert_fragment:TS,lights_lambert_pars_fragment:wS,lights_pars_begin:AS,lights_toon_fragment:CS,lights_toon_pars_fragment:PS,lights_phong_fragment:LS,lights_phong_pars_fragment:bS,lights_physical_fragment:DS,lights_physical_pars_fragment:NS,lights_fragment_begin:US,lights_fragment_maps:IS,lights_fragment_end:FS,logdepthbuf_fragment:OS,logdepthbuf_pars_fragment:kS,logdepthbuf_pars_vertex:zS,logdepthbuf_vertex:BS,map_fragment:HS,map_pars_fragment:GS,map_particle_fragment:VS,map_particle_pars_fragment:WS,metalnessmap_fragment:XS,metalnessmap_pars_fragment:jS,morphcolor_vertex:YS,morphnormal_vertex:qS,morphtarget_pars_vertex:$S,morphtarget_vertex:KS,normal_fragment_begin:ZS,normal_fragment_maps:QS,normal_pars_fragment:JS,normal_pars_vertex:eM,normal_vertex:tM,normalmap_pars_fragment:nM,clearcoat_normal_fragment_begin:iM,clearcoat_normal_fragment_maps:rM,clearcoat_pars_fragment:sM,iridescence_pars_fragment:oM,opaque_fragment:aM,packing:lM,premultiplied_alpha_fragment:cM,project_vertex:uM,dithering_fragment:dM,dithering_pars_fragment:fM,roughnessmap_fragment:hM,roughnessmap_pars_fragment:pM,shadowmap_pars_fragment:mM,shadowmap_pars_vertex:gM,shadowmap_vertex:_M,shadowmask_pars_fragment:vM,skinbase_vertex:xM,skinning_pars_vertex:yM,skinning_vertex:SM,skinnormal_vertex:MM,specularmap_fragment:EM,specularmap_pars_fragment:TM,tonemapping_fragment:wM,tonemapping_pars_fragment:AM,transmission_fragment:RM,transmission_pars_fragment:CM,uv_pars_fragment:PM,uv_pars_vertex:LM,uv_vertex:bM,worldpos_vertex:DM,background_vert:NM,background_frag:UM,backgroundCube_vert:IM,backgroundCube_frag:FM,cube_vert:OM,cube_frag:kM,depth_vert:zM,depth_frag:BM,distanceRGBA_vert:HM,distanceRGBA_frag:GM,equirect_vert:VM,equirect_frag:WM,linedashed_vert:XM,linedashed_frag:jM,meshbasic_vert:YM,meshbasic_frag:qM,meshlambert_vert:$M,meshlambert_frag:KM,meshmatcap_vert:ZM,meshmatcap_frag:QM,meshnormal_vert:JM,meshnormal_frag:eE,meshphong_vert:tE,meshphong_frag:nE,meshphysical_vert:iE,meshphysical_frag:rE,meshtoon_vert:sE,meshtoon_frag:oE,points_vert:aE,points_frag:lE,shadow_vert:cE,shadow_frag:uE,sprite_vert:dE,sprite_frag:fE},se={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},jn={basic:{uniforms:Wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Wt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Wt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Wt([se.points,se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Wt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Wt([se.common,se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Wt([se.sprite,se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Wt([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Wt([se.lights,se.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};jn.physical={uniforms:Wt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const ha={r:0,b:0,g:0};function hE(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,d,f=null,h=0,g=null;function v(m,u){let p=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?n:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),p=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||p)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Tl)?(d===void 0&&(d=new Tn(new Es(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:_s(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Ke.getTransfer(_.colorSpace)!==nt,(f!==_||h!==_.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=_,h=_.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Tn(new Gd(2,2),new xr({name:"BackgroundMaterial",uniforms:_s(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,u){m.getRGB(ha,m_(t)),i.buffers.color.setClear(ha.r,ha.g,ha.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:v}}function pE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,d=!1;function f(L,V,j,q,D){let F=!1;if(o){const G=x(q,j,V);c!==G&&(c=G,g(c.object)),F=u(L,q,j,D),F&&p(L,q,j,D)}else{const G=V.wireframe===!0;(c.geometry!==q.id||c.program!==j.id||c.wireframe!==G)&&(c.geometry=q.id,c.program=j.id,c.wireframe=G,F=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(F||d)&&(d=!1,b(L,V,j,q),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function x(L,V,j){const q=j.wireframe===!0;let D=a[L.id];D===void 0&&(D={},a[L.id]=D);let F=D[V.id];F===void 0&&(F={},D[V.id]=F);let G=F[q];return G===void 0&&(G=m(h()),F[q]=G),G}function m(L){const V=[],j=[],q=[];for(let D=0;D<r;D++)V[D]=0,j[D]=0,q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:q,object:L,attributes:{},index:null}}function u(L,V,j,q){const D=c.attributes,F=V.attributes;let G=0;const $=j.getAttributes();for(const Z in $)if($[Z].location>=0){const K=D[Z];let le=F[Z];if(le===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;G++}return c.attributesNum!==G||c.index!==q}function p(L,V,j,q){const D={},F=V.attributes;let G=0;const $=j.getAttributes();for(const Z in $)if($[Z].location>=0){let K=F[Z];K===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const le={};le.attribute=K,K&&K.data&&(le.data=K.data),D[Z]=le,G++}c.attributes=D,c.attributesNum=G,c.index=q}function _(){const L=c.newAttributes;for(let V=0,j=L.length;V<j;V++)L[V]=0}function y(L){C(L,0)}function C(L,V){const j=c.newAttributes,q=c.enabledAttributes,D=c.attributeDivisors;j[L]=1,q[L]===0&&(t.enableVertexAttribArray(L),q[L]=1),D[L]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),D[L]=V)}function w(){const L=c.newAttributes,V=c.enabledAttributes;for(let j=0,q=V.length;j<q;j++)V[j]!==L[j]&&(t.disableVertexAttribArray(j),V[j]=0)}function R(L,V,j,q,D,F,G){G===!0?t.vertexAttribIPointer(L,V,j,D,F):t.vertexAttribPointer(L,V,j,q,D,F)}function b(L,V,j,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const D=q.attributes,F=j.getAttributes(),G=V.defaultAttributeValues;for(const $ in F){const Z=F[$];if(Z.location>=0){let X=D[$];if(X===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){const K=X.normalized,le=X.itemSize,fe=n.get(X);if(fe===void 0)continue;const me=fe.buffer,Le=fe.type,De=fe.bytesPerElement,Te=i.isWebGL2===!0&&(Le===t.INT||Le===t.UNSIGNED_INT||X.gpuType===$g);if(X.isInterleavedBufferAttribute){const We=X.data,O=We.stride,Ht=X.offset;if(We.isInstancedInterleavedBuffer){for(let ye=0;ye<Z.locationSize;ye++)C(Z.location+ye,We.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ye=0;ye<Z.locationSize;ye++)y(Z.location+ye);t.bindBuffer(t.ARRAY_BUFFER,me);for(let ye=0;ye<Z.locationSize;ye++)R(Z.location+ye,le/Z.locationSize,Le,K,O*De,(Ht+le/Z.locationSize*ye)*De,Te)}else{if(X.isInstancedBufferAttribute){for(let We=0;We<Z.locationSize;We++)C(Z.location+We,X.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let We=0;We<Z.locationSize;We++)y(Z.location+We);t.bindBuffer(t.ARRAY_BUFFER,me);for(let We=0;We<Z.locationSize;We++)R(Z.location+We,le/Z.locationSize,Le,K,le*De,le/Z.locationSize*We*De,Te)}}else if(G!==void 0){const K=G[$];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Z.location,K);break;case 3:t.vertexAttrib3fv(Z.location,K);break;case 4:t.vertexAttrib4fv(Z.location,K);break;default:t.vertexAttrib1fv(Z.location,K)}}}}w()}function M(){Y();for(const L in a){const V=a[L];for(const j in V){const q=V[j];for(const D in q)v(q[D].object),delete q[D];delete V[j]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const V=a[L.id];for(const j in V){const q=V[j];for(const D in q)v(q[D].object),delete q[D];delete V[j]}delete a[L.id]}function H(L){for(const V in a){const j=a[V];if(j[L.id]===void 0)continue;const q=j[L.id];for(const D in q)v(q[D].object),delete q[D];delete j[L.id]}}function Y(){ie(),d=!0,c!==l&&(c=l,g(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:ie,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:H,initAttributes:_,enableAttribute:y,disableUnusedAttributes:w}}function mE(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let g,v;if(r)g=t,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<h;v++)this.render(d[v],f[v]);else{g.multiDrawArraysWEBGL(s,d,0,f,0,h);let v=0;for(let x=0;x<h;x++)v+=f[x];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function gE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),p=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=o||e.has("OES_texture_float"),C=_&&y,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:p,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:w}}function _E(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new tr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,g){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?d(null):c();else{const p=s?0:i,_=p*4;let y=u.clippingState||null;l.value=y,y=d(v,h,_,g);for(let C=0;C!==_;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,g,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const u=g+x*4,p=h.matrixWorldInverse;a.getNormalMatrix(p),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,y=g;_!==x;++_,y+=4)o.copy(f[_]).applyMatrix4(p,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function vE(t){let e=new WeakMap;function n(o,a){return a===Uu?o.mapping=ps:a===Iu&&(o.mapping=ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uu||a===Iu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ly(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class xE extends g_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zr=4,lp=[.125,.215,.35,.446,.526,.582],rr=20,Lc=new xE,cp=new Xe;let bc=null,Dc=0,Nc=0;const nr=(1+Math.sqrt(5))/2,kr=1/nr,up=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,nr,kr),new U(0,nr,-kr),new U(kr,0,nr),new U(-kr,0,nr),new U(nr,kr,0),new U(-nr,kr,0)];class dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Dc,Nc),e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:xo,format:kn,colorSpace:pi,depthBuffer:!1},r=fp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yE(s)),this._blurMaterial=SE(s,e,n)}return r}_compileMaterial(e){const n=new Tn(this._lodPlanes[0],e);this._renderer.compile(n,Lc)}_sceneToCubeUV(e,n,i,r){const a=new un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(cp),d.toneMapping=zi,d.autoClear=!1;const g=new f_({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new Tn(new Es,g);let x=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(cp),x=!0);for(let u=0;u<6;u++){const p=u%3;p===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):p===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;pa(r,p*_,u>2?_:0,_,_),d.setRenderTarget(r),x&&d.render(v,a),d.render(e,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ps||e.mapping===ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Lc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=up[(r-1)%up.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Tn(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*rr-1),x=s/v,m=isFinite(s)?1+Math.floor(d*x):rr;m>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);const u=[];let p=0;for(let R=0;R<rr;++R){const b=R/x,M=Math.exp(-b*b/2);u.push(M),R===0?p+=M:R<m&&(p+=2*M)}for(let R=0;R<u.length;R++)u[R]=u[R]/p;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const y=this._sizeLods[r],C=3*y*(r>_-Zr?r-_+Zr:0),w=4*(this._cubeSize-y);pa(n,C,w,3*y,2*y),l.setRenderTarget(n),l.render(f,Lc)}}function yE(t){const e=[],n=[],i=[];let r=t;const s=t-Zr+1+lp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Zr?l=lp[o-t+Zr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,v=6,x=3,m=2,u=1,p=new Float32Array(x*v*g),_=new Float32Array(m*v*g),y=new Float32Array(u*v*g);for(let w=0;w<g;w++){const R=w%3*2/3-1,b=w>2?0:-1,M=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];p.set(M,x*v*w),_.set(h,m*v*w);const E=[w,w,w,w,w,w];y.set(E,u*v*w)}const C=new Cn;C.setAttribute("position",new Hn(p,x)),C.setAttribute("uv",new Hn(_,m)),C.setAttribute("faceIndex",new Hn(y,u)),e.push(C),r>Zr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function fp(t,e,n){const i=new vr(t,e,n);return i.texture.mapping=Tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function SE(t,e,n){const i=new Float32Array(rr),r=new U(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function hp(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function pp(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ME(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uu||l===Iu,d=l===ps||l===ms;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new dp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new dp(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function EE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TE(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const x=g[v];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(f){const h=[],g=f.index,v=f.attributes.position;let x=0;if(g!==null){const p=g.array;x=g.version;for(let _=0,y=p.length;_<y;_+=3){const C=p[_+0],w=p[_+1],R=p[_+2];h.push(C,w,w,R,R,C)}}else if(v!==void 0){const p=v.array;x=v.version;for(let _=0,y=p.length/3-1;_<y;_+=3){const C=_+0,w=_+1,R=_+2;h.push(C,w,w,R,R,C)}}else return;const m=new(s_(h)?p_:h_)(h,1);m.version=x;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function wE(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,v){t.drawElements(s,v,a,g*l),n.update(v,s,1)}function f(g,v,x){if(x===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,v,a,g*l,x),n.update(v,s,x)}function h(g,v,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<x;u++)this.render(g[u]/l,v[u]);else{m.multiDrawElementsWEBGL(s,v,0,a,g,0,x);let u=0;for(let p=0;p<x;p++)u+=v[p];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function AE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RE(t,e){return t[0]-e[0]}function CE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function PE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new st,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let m=s.get(d);if(m===void 0||m.count!==x){let V=function(){ie.dispose(),s.delete(d),d.removeEventListener("dispose",V)};var g=V;m!==void 0&&m.texture.dispose();const _=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),C===!0&&(M=3);let E=d.attributes.position.count*M,H=1;E>e.maxTextureSize&&(H=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const Y=new Float32Array(E*H*4*x),ie=new l_(Y,E,H,x);ie.type=Pi,ie.needsUpdate=!0;const L=M*4;for(let j=0;j<x;j++){const q=w[j],D=R[j],F=b[j],G=E*H*4*j;for(let $=0;$<q.count;$++){const Z=$*L;_===!0&&(o.fromBufferAttribute(q,$),Y[G+Z+0]=o.x,Y[G+Z+1]=o.y,Y[G+Z+2]=o.z,Y[G+Z+3]=0),y===!0&&(o.fromBufferAttribute(D,$),Y[G+Z+4]=o.x,Y[G+Z+5]=o.y,Y[G+Z+6]=o.z,Y[G+Z+7]=0),C===!0&&(o.fromBufferAttribute(F,$),Y[G+Z+8]=o.x,Y[G+Z+9]=o.y,Y[G+Z+10]=o.z,Y[G+Z+11]=F.itemSize===4?o.w:1)}}m={count:x,texture:ie,size:new Ve(E,H)},s.set(d,m),d.addEventListener("dispose",V)}let u=0;for(let _=0;_<h.length;_++)u+=h[_];const p=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",p),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let x=i[d.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[d.id]=x}for(let y=0;y<v;y++){const C=x[y];C[0]=y,C[1]=h[y]}x.sort(CE);for(let y=0;y<8;y++)y<v&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(RE);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const C=a[y],w=C[0],R=C[1];w!==Number.MAX_SAFE_INTEGER&&R?(m&&d.getAttribute("morphTarget"+y)!==m[w]&&d.setAttribute("morphTarget"+y,m[w]),u&&d.getAttribute("morphNormal"+y)!==u[w]&&d.setAttribute("morphNormal"+y,u[w]),r[y]=R,p+=R):(m&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),u&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const _=d.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function LE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class x_ extends hn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:dr,d!==dr&&d!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===dr&&(i=Ci),i===void 0&&d===gs&&(i=ur),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const y_=new hn,S_=new x_(1,1);S_.compareFunction=r_;const M_=new l_,E_=new hy,T_=new __,mp=[],gp=[],_p=new Float32Array(16),vp=new Float32Array(9),xp=new Float32Array(4);function Ts(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=mp[r];if(s===void 0&&(s=new Float32Array(r),mp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cl(t,e){let n=gp[e];n===void 0&&(n=new Int32Array(e),gp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function IE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;xp.set(i),t.uniformMatrix2fv(this.addr,!1,xp),Et(n,i)}}function FE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;vp.set(i),t.uniformMatrix3fv(this.addr,!1,vp),Et(n,i)}}function OE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;_p.set(i),t.uniformMatrix4fv(this.addr,!1,_p),Et(n,i)}}function kE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function jE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?S_:y_;n.setTexture2D(e||s,r)}function YE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||E_,r)}function qE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||T_,r)}function $E(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||M_,r)}function KE(t){switch(t){case 5126:return bE;case 35664:return DE;case 35665:return NE;case 35666:return UE;case 35674:return IE;case 35675:return FE;case 35676:return OE;case 5124:case 35670:return kE;case 35667:case 35671:return zE;case 35668:case 35672:return BE;case 35669:case 35673:return HE;case 5125:return GE;case 36294:return VE;case 36295:return WE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return jE;case 35679:case 36299:case 36307:return YE;case 35680:case 36300:case 36308:case 36293:return qE;case 36289:case 36303:case 36311:case 36292:return $E}}function ZE(t,e){t.uniform1fv(this.addr,e)}function QE(t,e){const n=Ts(e,this.size,2);t.uniform2fv(this.addr,n)}function JE(t,e){const n=Ts(e,this.size,3);t.uniform3fv(this.addr,n)}function e1(t,e){const n=Ts(e,this.size,4);t.uniform4fv(this.addr,n)}function t1(t,e){const n=Ts(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function n1(t,e){const n=Ts(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function i1(t,e){const n=Ts(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function r1(t,e){t.uniform1iv(this.addr,e)}function s1(t,e){t.uniform2iv(this.addr,e)}function o1(t,e){t.uniform3iv(this.addr,e)}function a1(t,e){t.uniform4iv(this.addr,e)}function l1(t,e){t.uniform1uiv(this.addr,e)}function c1(t,e){t.uniform2uiv(this.addr,e)}function u1(t,e){t.uniform3uiv(this.addr,e)}function d1(t,e){t.uniform4uiv(this.addr,e)}function f1(t,e,n){const i=this.cache,r=e.length,s=Cl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||y_,s[o])}function h1(t,e,n){const i=this.cache,r=e.length,s=Cl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||E_,s[o])}function p1(t,e,n){const i=this.cache,r=e.length,s=Cl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||T_,s[o])}function m1(t,e,n){const i=this.cache,r=e.length,s=Cl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||M_,s[o])}function g1(t){switch(t){case 5126:return ZE;case 35664:return QE;case 35665:return JE;case 35666:return e1;case 35674:return t1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return r1;case 35667:case 35671:return s1;case 35668:case 35672:return o1;case 35669:case 35673:return a1;case 5125:return l1;case 36294:return c1;case 36295:return u1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}class _1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=KE(n.type)}}class v1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=g1(n.type)}}class x1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function yp(t,e){t.seq.push(e),t.map[e.id]=e}function y1(t,e,n){const i=t.name,r=i.length;for(Uc.lastIndex=0;;){const s=Uc.exec(i),o=Uc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yp(n,c===void 0?new _1(a,t,e):new v1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new x1(a),yp(n,f)),n=f}}}class ba{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);y1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Sp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const S1=37297;let M1=0;function E1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function T1(t){const e=Ke.getPrimaries(Ke.workingColorSpace),n=Ke.getPrimaries(t);let i;switch(e===n?i="":e===sl&&n===rl?i="LinearDisplayP3ToLinearSRGB":e===rl&&n===sl&&(i="LinearSRGBToLinearDisplayP3"),t){case pi:case wl:return[i,"LinearTransferOETF"];case Lt:case Bd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Mp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+E1(t.getShaderSource(e),o)}else return r}function w1(t,e){const n=T1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function A1(t,e){let n;switch(e){case Fx:n="Linear";break;case Ox:n="Reinhard";break;case kx:n="OptimizedCineon";break;case zx:n="ACESFilmic";break;case Hx:n="AgX";break;case Bx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function R1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qr).join(`
`)}function C1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qr).join(`
`)}function P1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function L1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qr(t){return t!==""}function Ep(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(t){return t.replace(b1,N1)}const D1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function N1(t,e){let n=Ue[e];if(n===void 0){const i=D1.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hu(n)}const U1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wp(t){return t.replace(U1,I1)}function I1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ap(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function F1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ux?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function O1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function z1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case kd:e="ENVMAP_BLENDING_MULTIPLY";break;case Ux:e="ENVMAP_BLENDING_MIX";break;case Ix:e="ENVMAP_BLENDING_ADD";break}return e}function B1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function H1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=F1(n),c=O1(n),d=k1(n),f=z1(n),h=B1(n),g=n.isWebGL2?"":R1(n),v=C1(n),x=P1(s),m=r.createProgram();let u,p,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Qr).join(`
`),u.length>0&&(u+=`
`),p=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Qr).join(`
`),p.length>0&&(p+=`
`)):(u=[Ap(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),p=[g,Ap(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==zi?A1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,w1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Hu(o),o=Ep(o,n),o=Tp(o,n),a=Hu(a),a=Ep(a,n),a=Tp(a,n),o=wp(o),a=wp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,p=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+u+o,C=_+p+a,w=Sp(r,r.VERTEX_SHADER,y),R=Sp(r,r.FRAGMENT_SHADER,C);r.attachShader(m,w),r.attachShader(m,R),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function b(Y){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(w).trim(),V=r.getShaderInfoLog(R).trim();let j=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,w,R);else{const D=Mp(r,w,"vertex"),F=Mp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+D+`
`+F)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(L===""||V==="")&&(q=!1);q&&(Y.diagnostics={runnable:j,programLog:ie,vertexShader:{log:L,prefix:u},fragmentShader:{log:V,prefix:p}})}r.deleteShader(w),r.deleteShader(R),M=new ba(r,m),E=L1(r,m)}let M;this.getUniforms=function(){return M===void 0&&b(this),M};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let H=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(m,S1)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=M1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=R,this}let G1=0;class V1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new W1(e),n.set(e,i)),i}}class W1{constructor(e){this.id=G1++,this.code=e,this.usedTimes=0}}function X1(t,e,n,i,r,s,o){const a=new u_,l=new V1,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,H,Y,ie){const L=Y.fog,V=ie.geometry,j=M.isMeshStandardMaterial?Y.environment:null,q=(M.isMeshStandardMaterial?n:e).get(M.envMap||j),D=q&&q.mapping===Tl?q.image.height:null,F=v[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const G=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$=G!==void 0?G.length:0;let Z=0;V.morphAttributes.position!==void 0&&(Z=1),V.morphAttributes.normal!==void 0&&(Z=2),V.morphAttributes.color!==void 0&&(Z=3);let X,K,le,fe;if(F){const Gt=jn[F];X=Gt.vertexShader,K=Gt.fragmentShader}else X=M.vertexShader,K=M.fragmentShader,l.update(M),le=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const me=t.getRenderTarget(),Le=ie.isInstancedMesh===!0,De=ie.isBatchedMesh===!0,Te=!!M.map,We=!!M.matcap,O=!!q,Ht=!!M.aoMap,ye=!!M.lightMap,Ce=!!M.bumpMap,ge=!!M.normalMap,ot=!!M.displacementMap,Ie=!!M.emissiveMap,A=!!M.metalnessMap,S=!!M.roughnessMap,z=M.anisotropy>0,te=M.clearcoat>0,J=M.iridescence>0,ne=M.sheen>0,_e=M.transmission>0,ce=z&&!!M.anisotropyMap,he=te&&!!M.clearcoatMap,Ee=te&&!!M.clearcoatNormalMap,Fe=te&&!!M.clearcoatRoughnessMap,Q=J&&!!M.iridescenceMap,$e=J&&!!M.iridescenceThicknessMap,He=ne&&!!M.sheenColorMap,Re=ne&&!!M.sheenRoughnessMap,xe=!!M.specularMap,pe=!!M.specularColorMap,Ne=!!M.specularIntensityMap,Ye=_e&&!!M.transmissionMap,dt=_e&&!!M.thicknessMap,ke=!!M.gradientMap,re=!!M.alphaMap,P=M.alphaTest>0,oe=!!M.alphaHash,ae=!!M.extensions,we=!!V.attributes.uv1,Se=!!V.attributes.uv2,Ze=!!V.attributes.uv3;let Qe=zi;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Qe=t.toneMapping),{isWebGL2:d,shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:K,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:De,instancing:Le,instancingColor:Le&&ie.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:pi,map:Te,matcap:We,envMap:O,envMapMode:O&&q.mapping,envMapCubeUVHeight:D,aoMap:Ht,lightMap:ye,bumpMap:Ce,normalMap:ge,displacementMap:h&&ot,emissiveMap:Ie,normalMapObjectSpace:ge&&M.normalMapType===Jx,normalMapTangentSpace:ge&&M.normalMapType===i_,metalnessMap:A,roughnessMap:S,anisotropy:z,anisotropyMap:ce,clearcoat:te,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Fe,iridescence:J,iridescenceMap:Q,iridescenceThicknessMap:$e,sheen:ne,sheenColorMap:He,sheenRoughnessMap:Re,specularMap:xe,specularColorMap:pe,specularIntensityMap:Ne,transmission:_e,transmissionMap:Ye,thicknessMap:dt,gradientMap:ke,opaque:M.transparent===!1&&M.blending===ss,alphaMap:re,alphaTest:P,alphaHash:oe,combine:M.combine,mapUv:Te&&x(M.map.channel),aoMapUv:Ht&&x(M.aoMap.channel),lightMapUv:ye&&x(M.lightMap.channel),bumpMapUv:Ce&&x(M.bumpMap.channel),normalMapUv:ge&&x(M.normalMap.channel),displacementMapUv:ot&&x(M.displacementMap.channel),emissiveMapUv:Ie&&x(M.emissiveMap.channel),metalnessMapUv:A&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:ce&&x(M.anisotropyMap.channel),clearcoatMapUv:he&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:He&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(M.sheenRoughnessMap.channel),specularMapUv:xe&&x(M.specularMap.channel),specularColorMapUv:pe&&x(M.specularColorMap.channel),specularIntensityMapUv:Ne&&x(M.specularIntensityMap.channel),transmissionMapUv:Ye&&x(M.transmissionMap.channel),thicknessMapUv:dt&&x(M.thicknessMap.channel),alphaMapUv:re&&x(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:Se,vertexUv3s:Ze,pointsUvs:ie.isPoints===!0&&!!V.attributes.uv&&(Te||re),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Z,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Te&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===si,flipSided:M.side===sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)E.push(H),E.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(p(E,M),_(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function p(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const E=v[M.type];let H;if(E){const Y=jn[E];H=Ay.clone(Y.uniforms)}else H=M.uniforms;return H}function C(M,E){let H;for(let Y=0,ie=c.length;Y<ie;Y++){const L=c[Y];if(L.cacheKey===E){H=L,++H.usedTimes;break}}return H===void 0&&(H=new H1(t,E,M,s),c.push(H)),H}function w(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:b}}function j1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Y1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,g,v,x,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:g,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=g,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=x,u.group=m),e++,u}function a(f,h,g,v,x,m){const u=o(f,h,g,v,x,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,h,g,v,x,m){const u=o(f,h,g,v,x,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||Y1),i.length>1&&i.sort(h||Rp),r.length>1&&r.sort(h||Rp)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function q1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Cp,t.set(i,[o])):r>=s.length?(o=new Cp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function $1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Xe};break;case"SpotLight":n={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function K1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Z1=0;function Q1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function J1(t,e){const n=new $1,i=K1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new U);const s=new U,o=new gt,a=new gt;function l(d,f){let h=0,g=0,v=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let x=0,m=0,u=0,p=0,_=0,y=0,C=0,w=0,R=0,b=0,M=0;d.sort(Q1);const E=f===!0?Math.PI:1;for(let Y=0,ie=d.length;Y<ie;Y++){const L=d[Y],V=L.color,j=L.intensity,q=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*j*E,g+=V.g*j*E,v+=V.b*j*E;else if(L.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],j);M++}else if(L.isDirectionalLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const G=L.shadow,$=i.get(L);$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=D,r.directionalShadowMatrix[x]=L.shadow.matrix,y++}r.directional[x]=F,x++}else if(L.isSpotLight){const F=n.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(V).multiplyScalar(j*E),F.distance=q,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[u]=F;const G=L.shadow;if(L.map&&(r.spotLightMap[R]=L.map,R++,G.updateMatrices(L),L.castShadow&&b++),r.spotLightMatrix[u]=G.matrix,L.castShadow){const $=i.get(L);$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,r.spotShadow[u]=$,r.spotShadowMap[u]=D,w++}u++}else if(L.isRectAreaLight){const F=n.get(L);F.color.copy(V).multiplyScalar(j),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[p]=F,p++}else if(L.isPointLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),F.distance=L.distance,F.decay=L.decay,L.castShadow){const G=L.shadow,$=i.get(L);$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=L.shadow.matrix,C++}r.point[m]=F,m++}else if(L.isHemisphereLight){const F=n.get(L);F.skyColor.copy(L.color).multiplyScalar(j*E),F.groundColor.copy(L.groundColor).multiplyScalar(j*E),r.hemi[_]=F,_++}}p>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=v;const H=r.hash;(H.directionalLength!==x||H.pointLength!==m||H.spotLength!==u||H.rectAreaLength!==p||H.hemiLength!==_||H.numDirectionalShadows!==y||H.numPointShadows!==C||H.numSpotShadows!==w||H.numSpotMaps!==R||H.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=p,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+R-b,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=M,H.directionalLength=x,H.pointLength=m,H.spotLength=u,H.rectAreaLength=p,H.hemiLength=_,H.numDirectionalShadows=y,H.numPointShadows=C,H.numSpotShadows=w,H.numSpotMaps=R,H.numLightProbes=M,r.version=Z1++)}function c(d,f){let h=0,g=0,v=0,x=0,m=0;const u=f.matrixWorldInverse;for(let p=0,_=d.length;p<_;p++){const y=d[p];if(y.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),h++}else if(y.isSpotLight){const C=r.spot[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),v++}else if(y.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(y.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),g++}else if(y.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Pp(t,e){const n=new J1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function eT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Pp(t,e),n.set(s,[l])):o>=a.length?(l=new Pp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class tT extends Ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nT extends Ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sT(t,e,n){let i=new Hd;const r=new Ve,s=new Ve,o=new st,a=new tT({depthPacking:Qx}),l=new nT,c={},d=n.maxTextureSize,f={[Vi]:sn,[sn]:Vi,[si]:si},h=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:iT,fragmentShader:rT}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const v=new Cn;v.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Tn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yg;let u=this.type;this.render=function(w,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=t.getRenderTarget(),E=t.getActiveCubeFace(),H=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(ki),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ie=u!==ni&&this.type===ni,L=u===ni&&this.type!==ni;for(let V=0,j=w.length;V<j;V++){const q=w[V],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const F=D.getFrameExtents();if(r.multiply(F),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/F.x),r.x=s.x*F.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/F.y),r.y=s.y*F.y,D.mapSize.y=s.y)),D.map===null||ie===!0||L===!0){const $=this.type!==ni?{minFilter:jt,magFilter:jt}:{};D.map!==null&&D.map.dispose(),D.map=new vr(r.x,r.y,$),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const G=D.getViewportCount();for(let $=0;$<G;$++){const Z=D.getViewport($);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),Y.viewport(o),D.updateMatrices(q,$),i=D.getFrustum(),y(R,b,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===ni&&p(D,b),D.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(M,E,H)};function p(w,R){const b=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new vr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,b,h,x,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,b,g,x,null)}function _(w,R,b,M){let E=null;const H=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(H!==void 0)E=H;else if(E=b.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=E.uuid,ie=R.uuid;let L=c[Y];L===void 0&&(L={},c[Y]=L);let V=L[ie];V===void 0&&(V=E.clone(),L[ie]=V,R.addEventListener("dispose",C)),E=V}if(E.visible=R.visible,E.wireframe=R.wireframe,M===ni?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:f[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=t.properties.get(E);Y.light=b}return E}function y(w,R,b,M,E){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===ni)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const ie=e.update(w),L=w.material;if(Array.isArray(L)){const V=ie.groups;for(let j=0,q=V.length;j<q;j++){const D=V[j],F=L[D.materialIndex];if(F&&F.visible){const G=_(w,F,M,E);w.onBeforeShadow(t,w,R,b,ie,G,D),t.renderBufferDirect(b,null,ie,G,w,D),w.onAfterShadow(t,w,R,b,ie,G,D)}}}else if(L.visible){const V=_(w,L,M,E);w.onBeforeShadow(t,w,R,b,ie,V,null),t.renderBufferDirect(b,null,ie,V,w,null),w.onAfterShadow(t,w,R,b,ie,V,null)}}const Y=w.children;for(let ie=0,L=Y.length;ie<L;ie++)y(Y[ie],R,b,M,E)}function C(w){w.target.removeEventListener("dispose",C);for(const b in c){const M=c[b],E=w.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function oT(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const oe=new st;let ae=null;const we=new st(0,0,0,0);return{setMask:function(Se){ae!==Se&&!P&&(t.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){P=Se},setClear:function(Se,Ze,Qe,Tt,Gt){Gt===!0&&(Se*=Tt,Ze*=Tt,Qe*=Tt),oe.set(Se,Ze,Qe,Tt),we.equals(oe)===!1&&(t.clearColor(Se,Ze,Qe,Tt),we.copy(oe))},reset:function(){P=!1,ae=null,we.set(-1,0,0,0)}}}function s(){let P=!1,oe=null,ae=null,we=null;return{setTest:function(Se){Se?De(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(Se){oe!==Se&&!P&&(t.depthMask(Se),oe=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case Rx:t.depthFunc(t.NEVER);break;case Cx:t.depthFunc(t.ALWAYS);break;case Px:t.depthFunc(t.LESS);break;case nl:t.depthFunc(t.LEQUAL);break;case Lx:t.depthFunc(t.EQUAL);break;case bx:t.depthFunc(t.GEQUAL);break;case Dx:t.depthFunc(t.GREATER);break;case Nx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Se}},setLocked:function(Se){P=Se},setClear:function(Se){we!==Se&&(t.clearDepth(Se),we=Se)},reset:function(){P=!1,oe=null,ae=null,we=null}}}function o(){let P=!1,oe=null,ae=null,we=null,Se=null,Ze=null,Qe=null,Tt=null,Gt=null;return{setTest:function(Je){P||(Je?De(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(Je){oe!==Je&&!P&&(t.stencilMask(Je),oe=Je)},setFunc:function(Je,Vt,Vn){(ae!==Je||we!==Vt||Se!==Vn)&&(t.stencilFunc(Je,Vt,Vn),ae=Je,we=Vt,Se=Vn)},setOp:function(Je,Vt,Vn){(Ze!==Je||Qe!==Vt||Tt!==Vn)&&(t.stencilOp(Je,Vt,Vn),Ze=Je,Qe=Vt,Tt=Vn)},setLocked:function(Je){P=Je},setClear:function(Je){Gt!==Je&&(t.clearStencil(Je),Gt=Je)},reset:function(){P=!1,oe=null,ae=null,we=null,Se=null,Ze=null,Qe=null,Tt=null,Gt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let h={},g={},v=new WeakMap,x=[],m=null,u=!1,p=null,_=null,y=null,C=null,w=null,R=null,b=null,M=new Xe(0,0,0),E=0,H=!1,Y=null,ie=null,L=null,V=null,j=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,F=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(G)[1]),D=F>=1):G.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),D=F>=2);let $=null,Z={};const X=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),le=new st().fromArray(X),fe=new st().fromArray(K);function me(P,oe,ae,we){const Se=new Uint8Array(4),Ze=t.createTexture();t.bindTexture(P,Ze),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<ae;Qe++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(oe+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return Ze}const Le={};Le[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),Le[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Le[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(t.DEPTH_TEST),l.setFunc(nl),Ie(!1),A(uh),De(t.CULL_FACE),ge(ki);function De(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Te(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function We(P,oe){return g[P]!==oe?(t.bindFramebuffer(P,oe),g[P]=oe,i&&(P===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=oe),P===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function O(P,oe){let ae=x,we=!1;if(P)if(ae=v.get(oe),ae===void 0&&(ae=[],v.set(oe,ae)),P.isWebGLMultipleRenderTargets){const Se=P.texture;if(ae.length!==Se.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Ze=0,Qe=Se.length;Ze<Qe;Ze++)ae[Ze]=t.COLOR_ATTACHMENT0+Ze;ae.length=Se.length,we=!0}}else ae[0]!==t.COLOR_ATTACHMENT0&&(ae[0]=t.COLOR_ATTACHMENT0,we=!0);else ae[0]!==t.BACK&&(ae[0]=t.BACK,we=!0);we&&(n.isWebGL2?t.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Ht(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const ye={[ir]:t.FUNC_ADD,[fx]:t.FUNC_SUBTRACT,[hx]:t.FUNC_REVERSE_SUBTRACT};if(i)ye[ph]=t.MIN,ye[mh]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ye[ph]=P.MIN_EXT,ye[mh]=P.MAX_EXT)}const Ce={[px]:t.ZERO,[mx]:t.ONE,[gx]:t.SRC_COLOR,[Du]:t.SRC_ALPHA,[Mx]:t.SRC_ALPHA_SATURATE,[yx]:t.DST_COLOR,[vx]:t.DST_ALPHA,[_x]:t.ONE_MINUS_SRC_COLOR,[Nu]:t.ONE_MINUS_SRC_ALPHA,[Sx]:t.ONE_MINUS_DST_COLOR,[xx]:t.ONE_MINUS_DST_ALPHA,[Ex]:t.CONSTANT_COLOR,[Tx]:t.ONE_MINUS_CONSTANT_COLOR,[wx]:t.CONSTANT_ALPHA,[Ax]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(P,oe,ae,we,Se,Ze,Qe,Tt,Gt,Je){if(P===ki){u===!0&&(Te(t.BLEND),u=!1);return}if(u===!1&&(De(t.BLEND),u=!0),P!==dx){if(P!==p||Je!==H){if((_!==ir||w!==ir)&&(t.blendEquation(t.FUNC_ADD),_=ir,w=ir),Je)switch(P){case ss:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dh:t.blendFunc(t.ONE,t.ONE);break;case fh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ss:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case fh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,C=null,R=null,b=null,M.set(0,0,0),E=0,p=P,H=Je}return}Se=Se||oe,Ze=Ze||ae,Qe=Qe||we,(oe!==_||Se!==w)&&(t.blendEquationSeparate(ye[oe],ye[Se]),_=oe,w=Se),(ae!==y||we!==C||Ze!==R||Qe!==b)&&(t.blendFuncSeparate(Ce[ae],Ce[we],Ce[Ze],Ce[Qe]),y=ae,C=we,R=Ze,b=Qe),(Tt.equals(M)===!1||Gt!==E)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Gt),M.copy(Tt),E=Gt),p=P,H=!1}function ot(P,oe){P.side===si?Te(t.CULL_FACE):De(t.CULL_FACE);let ae=P.side===sn;oe&&(ae=!ae),Ie(ae),P.blending===ss&&P.transparent===!1?ge(ki):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const we=P.stencilWrite;c.setTest(we),we&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),z(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?De(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(P){Y!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),Y=P)}function A(P){P!==lx?(De(t.CULL_FACE),P!==ie&&(P===uh?t.cullFace(t.BACK):P===cx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),ie=P}function S(P){P!==L&&(D&&t.lineWidth(P),L=P)}function z(P,oe,ae){P?(De(t.POLYGON_OFFSET_FILL),(V!==oe||j!==ae)&&(t.polygonOffset(oe,ae),V=oe,j=ae)):Te(t.POLYGON_OFFSET_FILL)}function te(P){P?De(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function J(P){P===void 0&&(P=t.TEXTURE0+q-1),$!==P&&(t.activeTexture(P),$=P)}function ne(P,oe,ae){ae===void 0&&($===null?ae=t.TEXTURE0+q-1:ae=$);let we=Z[ae];we===void 0&&(we={type:void 0,texture:void 0},Z[ae]=we),(we.type!==P||we.texture!==oe)&&($!==ae&&(t.activeTexture(ae),$=ae),t.bindTexture(P,oe||Le[P]),we.type=P,we.texture=oe)}function _e(){const P=Z[$];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(P){le.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),le.copy(P))}function Ye(P){fe.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),fe.copy(P))}function dt(P,oe){let ae=f.get(oe);ae===void 0&&(ae=new WeakMap,f.set(oe,ae));let we=ae.get(P);we===void 0&&(we=t.getUniformBlockIndex(oe,P.name),ae.set(P,we))}function ke(P,oe){const we=f.get(oe).get(P);d.get(oe)!==we&&(t.uniformBlockBinding(oe,we,P.__bindingPointIndex),d.set(oe,we))}function re(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},$=null,Z={},g={},v=new WeakMap,x=[],m=null,u=!1,p=null,_=null,y=null,C=null,w=null,R=null,b=null,M=new Xe(0,0,0),E=0,H=!1,Y=null,ie=null,L=null,V=null,j=null,le.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:Te,bindFramebuffer:We,drawBuffers:O,useProgram:Ht,setBlending:ge,setMaterial:ot,setFlipSided:Ie,setCullFace:A,setLineWidth:S,setPolygonOffset:z,setScissorTest:te,activeTexture:J,bindTexture:ne,unbindTexture:_e,compressedTexImage2D:ce,compressedTexImage3D:he,texImage2D:xe,texImage3D:pe,updateUBOMapping:dt,uniformBlockBinding:ke,texStorage2D:He,texStorage3D:Re,texSubImage2D:Ee,texSubImage3D:Fe,compressedTexSubImage2D:Q,compressedTexSubImage3D:$e,scissor:Ne,viewport:Ye,reset:re}}function aT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,S){return g?new OffscreenCanvas(A,S):al("canvas")}function x(A,S,z,te){let J=1;if((A.width>te||A.height>te)&&(J=te/Math.max(A.width,A.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ne=S?Bu:Math.floor,_e=ne(J*A.width),ce=ne(J*A.height);f===void 0&&(f=v(_e,ce));const he=z?v(_e,ce):f;return he.width=_e,he.height=ce,he.getContext("2d").drawImage(A,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+ce+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Xh(A.width)&&Xh(A.height)}function u(A){return a?!1:A.wrapS!==On||A.wrapT!==On||A.minFilter!==jt&&A.minFilter!==Sn}function p(A,S){return A.generateMipmaps&&S&&A.minFilter!==jt&&A.minFilter!==Sn}function _(A){t.generateMipmap(A)}function y(A,S,z,te,J=!1){if(a===!1)return S;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=S;if(S===t.RED&&(z===t.FLOAT&&(ne=t.R32F),z===t.HALF_FLOAT&&(ne=t.R16F),z===t.UNSIGNED_BYTE&&(ne=t.R8)),S===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(ne=t.R8UI),z===t.UNSIGNED_SHORT&&(ne=t.R16UI),z===t.UNSIGNED_INT&&(ne=t.R32UI),z===t.BYTE&&(ne=t.R8I),z===t.SHORT&&(ne=t.R16I),z===t.INT&&(ne=t.R32I)),S===t.RG&&(z===t.FLOAT&&(ne=t.RG32F),z===t.HALF_FLOAT&&(ne=t.RG16F),z===t.UNSIGNED_BYTE&&(ne=t.RG8)),S===t.RGBA){const _e=J?il:Ke.getTransfer(te);z===t.FLOAT&&(ne=t.RGBA32F),z===t.HALF_FLOAT&&(ne=t.RGBA16F),z===t.UNSIGNED_BYTE&&(ne=_e===nt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function C(A,S,z){return p(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==jt&&A.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){return A===jt||A===gh||A===sc?t.NEAREST:t.LINEAR}function R(A){const S=A.target;S.removeEventListener("dispose",R),M(S),S.isVideoTexture&&d.delete(S)}function b(A){const S=A.target;S.removeEventListener("dispose",b),H(S)}function M(A){const S=i.get(A);if(S.__webglInit===void 0)return;const z=A.source,te=h.get(z);if(te){const J=te[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(A),Object.keys(te).length===0&&h.delete(z)}i.remove(A)}function E(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const z=A.source,te=h.get(z);delete te[S.__cacheKey],o.memory.textures--}function H(A){const S=A.texture,z=i.get(A),te=i.get(S);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(z.__webglFramebuffer[J]))for(let ne=0;ne<z.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(z.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(z.__webglFramebuffer[J]);z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer[J])}else{if(Array.isArray(z.__webglFramebuffer))for(let J=0;J<z.__webglFramebuffer.length;J++)t.deleteFramebuffer(z.__webglFramebuffer[J]);else t.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&t.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let J=0;J<z.__webglColorRenderbuffer.length;J++)z.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(z.__webglColorRenderbuffer[J]);z.__webglDepthRenderbuffer&&t.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let J=0,ne=S.length;J<ne;J++){const _e=i.get(S[J]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(S[J])}i.remove(S),i.remove(A)}let Y=0;function ie(){Y=0}function L(){const A=Y;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),Y+=1,A}function V(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function j(A,S){const z=i.get(A);if(A.isVideoTexture&&ot(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(z,A,S);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+S)}function q(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){le(z,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+S)}function D(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){le(z,A,S);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+S)}function F(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){fe(z,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+S)}const G={[Fu]:t.REPEAT,[On]:t.CLAMP_TO_EDGE,[Ou]:t.MIRRORED_REPEAT},$={[jt]:t.NEAREST,[gh]:t.NEAREST_MIPMAP_NEAREST,[sc]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[Gx]:t.LINEAR_MIPMAP_NEAREST,[vo]:t.LINEAR_MIPMAP_LINEAR},Z={[ey]:t.NEVER,[oy]:t.ALWAYS,[ty]:t.LESS,[r_]:t.LEQUAL,[ny]:t.EQUAL,[sy]:t.GEQUAL,[iy]:t.GREATER,[ry]:t.NOTEQUAL};function X(A,S,z){if(z?(t.texParameteri(A,t.TEXTURE_WRAP_S,G[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,G[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,G[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,$[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,$[S.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==On||S.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(S.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==jt&&S.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===jt||S.minFilter!==sc&&S.minFilter!==vo||S.type===Pi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===xo&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function K(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));const te=S.source;let J=h.get(te);J===void 0&&(J={},h.set(te,J));const ne=V(S);if(ne!==A.__cacheKey){J[ne]===void 0&&(J[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[ne].usedTimes++;const _e=J[A.__cacheKey];_e!==void 0&&(J[A.__cacheKey].usedTimes--,_e.usedTimes===0&&E(S)),A.__cacheKey=ne,A.__webglTexture=J[ne].texture}return z}function le(A,S,z){let te=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=t.TEXTURE_3D);const J=K(A,S),ne=S.source;n.bindTexture(te,A.__webglTexture,t.TEXTURE0+z);const _e=i.get(ne);if(ne.version!==_e.__version||J===!0){n.activeTexture(t.TEXTURE0+z);const ce=Ke.getPrimaries(Ke.workingColorSpace),he=S.colorSpace===Mn?null:Ke.getPrimaries(S.colorSpace),Ee=S.colorSpace===Mn||ce===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Fe=u(S)&&m(S.image)===!1;let Q=x(S.image,Fe,!1,r.maxTextureSize);Q=Ie(S,Q);const $e=m(Q)||a,He=s.convert(S.format,S.colorSpace);let Re=s.convert(S.type),xe=y(S.internalFormat,He,Re,S.colorSpace,S.isVideoTexture);X(te,S,$e);let pe;const Ne=S.mipmaps,Ye=a&&S.isVideoTexture!==!0&&xe!==t_,dt=_e.__version===void 0||J===!0,ke=C(S,Q,$e);if(S.isDepthTexture)xe=t.DEPTH_COMPONENT,a?S.type===Pi?xe=t.DEPTH_COMPONENT32F:S.type===Ci?xe=t.DEPTH_COMPONENT24:S.type===ur?xe=t.DEPTH24_STENCIL8:xe=t.DEPTH_COMPONENT16:S.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===dr&&xe===t.DEPTH_COMPONENT&&S.type!==zd&&S.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ci,Re=s.convert(S.type)),S.format===gs&&xe===t.DEPTH_COMPONENT&&(xe=t.DEPTH_STENCIL,S.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ur,Re=s.convert(S.type))),dt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,xe,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,xe,Q.width,Q.height,0,He,Re,null));else if(S.isDataTexture)if(Ne.length>0&&$e){Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let re=0,P=Ne.length;re<P;re++)pe=Ne[re],Ye?n.texSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,He,Re,pe.data):n.texImage2D(t.TEXTURE_2D,re,xe,pe.width,pe.height,0,He,Re,pe.data);S.generateMipmaps=!1}else Ye?(dt&&n.texStorage2D(t.TEXTURE_2D,ke,xe,Q.width,Q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,He,Re,Q.data)):n.texImage2D(t.TEXTURE_2D,0,xe,Q.width,Q.height,0,He,Re,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ye&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,xe,Ne[0].width,Ne[0].height,Q.depth);for(let re=0,P=Ne.length;re<P;re++)pe=Ne[re],S.format!==kn?He!==null?Ye?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,Q.depth,He,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,xe,pe.width,pe.height,Q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,Q.depth,He,Re,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,xe,pe.width,pe.height,Q.depth,0,He,Re,pe.data)}else{Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let re=0,P=Ne.length;re<P;re++)pe=Ne[re],S.format!==kn?He!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,He,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,re,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,He,Re,pe.data):n.texImage2D(t.TEXTURE_2D,re,xe,pe.width,pe.height,0,He,Re,pe.data)}else if(S.isDataArrayTexture)Ye?(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,xe,Q.width,Q.height,Q.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,He,Re,Q.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,He,Re,Q.data);else if(S.isData3DTexture)Ye?(dt&&n.texStorage3D(t.TEXTURE_3D,ke,xe,Q.width,Q.height,Q.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,He,Re,Q.data)):n.texImage3D(t.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,He,Re,Q.data);else if(S.isFramebufferTexture){if(dt)if(Ye)n.texStorage2D(t.TEXTURE_2D,ke,xe,Q.width,Q.height);else{let re=Q.width,P=Q.height;for(let oe=0;oe<ke;oe++)n.texImage2D(t.TEXTURE_2D,oe,xe,re,P,0,He,Re,null),re>>=1,P>>=1}}else if(Ne.length>0&&$e){Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let re=0,P=Ne.length;re<P;re++)pe=Ne[re],Ye?n.texSubImage2D(t.TEXTURE_2D,re,0,0,He,Re,pe):n.texImage2D(t.TEXTURE_2D,re,xe,He,Re,pe);S.generateMipmaps=!1}else Ye?(dt&&n.texStorage2D(t.TEXTURE_2D,ke,xe,Q.width,Q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,Re,Q)):n.texImage2D(t.TEXTURE_2D,0,xe,He,Re,Q);p(S,$e)&&_(te),_e.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function fe(A,S,z){if(S.image.length!==6)return;const te=K(A,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+z);const ne=i.get(J);if(J.version!==ne.__version||te===!0){n.activeTexture(t.TEXTURE0+z);const _e=Ke.getPrimaries(Ke.workingColorSpace),ce=S.colorSpace===Mn?null:Ke.getPrimaries(S.colorSpace),he=S.colorSpace===Mn||_e===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let re=0;re<6;re++)!Ee&&!Fe?Q[re]=x(S.image[re],!1,!0,r.maxCubemapSize):Q[re]=Fe?S.image[re].image:S.image[re],Q[re]=Ie(S,Q[re]);const $e=Q[0],He=m($e)||a,Re=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),pe=y(S.internalFormat,Re,xe,S.colorSpace),Ne=a&&S.isVideoTexture!==!0,Ye=ne.__version===void 0||te===!0;let dt=C(S,$e,He);X(t.TEXTURE_CUBE_MAP,S,He);let ke;if(Ee){Ne&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,dt,pe,$e.width,$e.height);for(let re=0;re<6;re++){ke=Q[re].mipmaps;for(let P=0;P<ke.length;P++){const oe=ke[P];S.format!==kn?Re!==null?Ne?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,oe.width,oe.height,Re,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,pe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,oe.width,oe.height,Re,xe,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,pe,oe.width,oe.height,0,Re,xe,oe.data)}}}else{ke=S.mipmaps,Ne&&Ye&&(ke.length>0&&dt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,dt,pe,Q[0].width,Q[0].height));for(let re=0;re<6;re++)if(Fe){Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Q[re].width,Q[re].height,Re,xe,Q[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,pe,Q[re].width,Q[re].height,0,Re,xe,Q[re].data);for(let P=0;P<ke.length;P++){const ae=ke[P].image[re].image;Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,ae.width,ae.height,Re,xe,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,pe,ae.width,ae.height,0,Re,xe,ae.data)}}else{Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,xe,Q[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,pe,Re,xe,Q[re]);for(let P=0;P<ke.length;P++){const oe=ke[P];Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,Re,xe,oe.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,pe,Re,xe,oe.image[re])}}}p(S,He)&&_(t.TEXTURE_CUBE_MAP),ne.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function me(A,S,z,te,J,ne){const _e=s.convert(z.format,z.colorSpace),ce=s.convert(z.type),he=y(z.internalFormat,_e,ce,z.colorSpace);if(!i.get(S).__hasExternalTextures){const Fe=Math.max(1,S.width>>ne),Q=Math.max(1,S.height>>ne);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ne,he,Fe,Q,S.depth,0,_e,ce,null):n.texImage2D(J,ne,he,Fe,Q,0,_e,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ge(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,i.get(z).__webglTexture,0,Ce(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,J,i.get(z).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(A,S,z){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let te=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(z||ge(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===Pi?te=t.DEPTH_COMPONENT32F:J.type===Ci&&(te=t.DEPTH_COMPONENT24));const ne=Ce(S);ge(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,te,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,te,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const te=Ce(S);z&&ge(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):ge(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<te.length;J++){const ne=te[J],_e=s.convert(ne.format,ne.colorSpace),ce=s.convert(ne.type),he=y(ne.internalFormat,_e,ce,ne.colorSpace),Ee=Ce(S);z&&ge(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,he,S.width,S.height):ge(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,he,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,he,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const te=i.get(S.depthTexture).__webglTexture,J=Ce(S);if(S.depthTexture.format===dr)ge(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(S.depthTexture.format===gs)ge(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Te(A){const S=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");De(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=t.createRenderbuffer(),Le(S.__webglDepthbuffer[te],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Le(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(A,S,z){const te=i.get(A);S!==void 0&&me(te.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Te(A)}function O(A){const S=A.texture,z=i.get(A),te=i.get(S);A.addEventListener("dispose",b),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=S.version,o.memory.textures++);const J=A.isWebGLCubeRenderTarget===!0,ne=A.isWebGLMultipleRenderTargets===!0,_e=m(A)||a;if(J){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let he=0;he<S.mipmaps.length;he++)z.__webglFramebuffer[ce][he]=t.createFramebuffer()}else z.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)z.__webglFramebuffer[ce]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const ce=A.texture;for(let he=0,Ee=ce.length;he<Ee;he++){const Fe=i.get(ce[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ge(A)===!1){const ce=ne?S:[S];z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let he=0;he<ce.length;he++){const Ee=ce[he];z.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[he]);const Fe=s.convert(Ee.format,Ee.colorSpace),Q=s.convert(Ee.type),$e=y(Ee.internalFormat,Fe,Q,Ee.colorSpace,A.isXRRenderTarget===!0),He=Ce(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,$e,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,z.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Le(z.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),X(t.TEXTURE_CUBE_MAP,S,_e);for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)me(z.__webglFramebuffer[ce][he],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else me(z.__webglFramebuffer[ce],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(S,_e)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const ce=A.texture;for(let he=0,Ee=ce.length;he<Ee;he++){const Fe=ce[he],Q=i.get(Fe);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture),X(t.TEXTURE_2D,Fe,_e),me(z.__webglFramebuffer,A,Fe,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),p(Fe,_e)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,te.__webglTexture),X(ce,S,_e),a&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)me(z.__webglFramebuffer[he],A,S,t.COLOR_ATTACHMENT0,ce,he);else me(z.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,ce,0);p(S,_e)&&_(ce),n.unbindTexture()}A.depthBuffer&&Te(A)}function Ht(A){const S=m(A)||a,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,J=z.length;te<J;te++){const ne=z[te];if(p(ne,S)){const _e=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(ne).__webglTexture;n.bindTexture(_e,ce),_(_e),n.unbindTexture()}}}function ye(A){if(a&&A.samples>0&&ge(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,te=A.height;let J=t.COLOR_BUFFER_BIT;const ne=[],_e=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(A),he=A.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<S.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){ne.push(t.COLOR_ATTACHMENT0+Ee),A.depthBuffer&&ne.push(_e);const Fe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Fe===!1&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),he&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]),Fe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),he){const Q=i.get(S[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,z,te,0,0,z,te,J,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<S.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]);const Fe=i.get(S[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Ce(A){return Math.min(r.maxSamples,A.samples)}function ge(A){const S=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ot(A){const S=o.render.frame;d.get(A)!==S&&(d.set(A,S),A.update())}function Ie(A,S){const z=A.colorSpace,te=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ku||z!==pi&&z!==Mn&&(Ke.getTransfer(z)===nt?a===!1?e.has("EXT_sRGB")===!0&&te===kn?(A.format=ku,A.minFilter=Sn,A.generateMipmaps=!1):S=o_.sRGBToLinear(S):(te!==kn||J!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}this.allocateTextureUnit=L,this.resetTextureUnits=ie,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=D,this.setTextureCube=F,this.rebindTextures=We,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function lT(t,e,n){const i=n.isWebGL2;function r(s,o=Mn){let a;const l=Ke.getTransfer(o);if(s===Bi)return t.UNSIGNED_BYTE;if(s===Kg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Zg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Vx)return t.BYTE;if(s===Wx)return t.SHORT;if(s===zd)return t.UNSIGNED_SHORT;if(s===$g)return t.INT;if(s===Ci)return t.UNSIGNED_INT;if(s===Pi)return t.FLOAT;if(s===xo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Xx)return t.ALPHA;if(s===kn)return t.RGBA;if(s===jx)return t.LUMINANCE;if(s===Yx)return t.LUMINANCE_ALPHA;if(s===dr)return t.DEPTH_COMPONENT;if(s===gs)return t.DEPTH_STENCIL;if(s===ku)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===qx)return t.RED;if(s===Qg)return t.RED_INTEGER;if(s===$x)return t.RG;if(s===Jg)return t.RG_INTEGER;if(s===e_)return t.RGBA_INTEGER;if(s===oc||s===ac||s===lc||s===cc)if(l===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===oc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===oc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ac)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_h||s===vh||s===xh||s===yh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_h)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===t_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sh||s===Mh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sh)return l===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Mh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Eh||s===Th||s===wh||s===Ah||s===Rh||s===Ch||s===Ph||s===Lh||s===bh||s===Dh||s===Nh||s===Uh||s===Ih||s===Fh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Eh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Th)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ah)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ch)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ph)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ih)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uc||s===Oh||s===kh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===uc)return l===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Oh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kx||s===zh||s===Bh||s===Hh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===uc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===zh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ur?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class cT extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ma extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uT={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),g=.02,v=.005;c.inputState.pinching&&h>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ma;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class dT extends Ss{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,g=null,v=null;const x=n.getContextAttributes();let m=null,u=null;const p=[],_=[],y=new Ve;let C=null;const w=new un;w.layers.enable(1),w.viewport=new st;const R=new un;R.layers.enable(2),R.viewport=new st;const b=[w,R],M=new cT;M.layers.enable(1),M.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=p[X];return K===void 0&&(K=new Ic,p[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=p[X];return K===void 0&&(K=new Ic,p[X]=K),K.getGripSpace()},this.getHand=function(X){let K=p[X];return K===void 0&&(K=new Ic,p[X]=K),K.getHandSpace()};function Y(X){const K=_.indexOf(X.inputSource);if(K===-1)return;const le=p[K];le!==void 0&&(le.update(X.inputSource,X.frame,c||o),le.dispatchEvent({type:X.type,data:X.inputSource}))}function ie(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",L);for(let X=0;X<p.length;X++){const K=_[X];K!==null&&(_[X]=null,p[X].disconnect(K))}E=null,H=null,e.setRenderTarget(m),g=null,h=null,f=null,r=null,u=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new vr(g.framebufferWidth,g.framebufferHeight,{format:kn,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,le=null,fe=null;x.depth&&(fe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=x.stencil?gs:dr,le=x.stencil?ur:Ci);const me={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new vr(h.textureWidth,h.textureHeight,{format:kn,type:Bi,depthTexture:new x_(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Le=e.properties.get(u);Le.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(X){for(let K=0;K<X.removed.length;K++){const le=X.removed[K],fe=_.indexOf(le);fe>=0&&(_[fe]=null,p[fe].disconnect(le))}for(let K=0;K<X.added.length;K++){const le=X.added[K];let fe=_.indexOf(le);if(fe===-1){for(let Le=0;Le<p.length;Le++)if(Le>=_.length){_.push(le),fe=Le;break}else if(_[Le]===null){_[Le]=le,fe=Le;break}if(fe===-1)break}const me=p[fe];me&&me.connect(le)}}const V=new U,j=new U;function q(X,K,le){V.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(le.matrixWorld);const fe=V.distanceTo(j),me=K.projectionMatrix.elements,Le=le.projectionMatrix.elements,De=me[14]/(me[10]-1),Te=me[14]/(me[10]+1),We=(me[9]+1)/me[5],O=(me[9]-1)/me[5],Ht=(me[8]-1)/me[0],ye=(Le[8]+1)/Le[0],Ce=De*Ht,ge=De*ye,ot=fe/(-Ht+ye),Ie=ot*-Ht;K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ie),X.translateZ(ot),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const A=De+ot,S=Te+ot,z=Ce-Ie,te=ge+(fe-Ie),J=We*Te/S*A,ne=O*Te/S*A;X.projectionMatrix.makePerspective(z,te,J,ne,A,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function D(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;M.near=R.near=w.near=X.near,M.far=R.far=w.far=X.far,(E!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,H=M.far);const K=X.parent,le=M.cameras;D(M,K);for(let fe=0;fe<le.length;fe++)D(le[fe],K);le.length===2?q(M,w,R):M.projectionMatrix.copy(w.projectionMatrix),F(X,M,K)};function F(X,K,le){le===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=zu*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)};let G=null;function $(X,K){if(d=K.getViewerPose(c||o),v=K,d!==null){const le=d.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let fe=!1;le.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let me=0;me<le.length;me++){const Le=le[me];let De=null;if(g!==null)De=g.getViewport(Le);else{const We=f.getViewSubImage(h,Le);De=We.viewport,me===0&&(e.setRenderTargetTextures(u,We.colorTexture,h.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(u))}let Te=b[me];Te===void 0&&(Te=new un,Te.layers.enable(me),Te.viewport=new st,b[me]=Te),Te.matrix.fromArray(Le.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Le.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(De.x,De.y,De.width,De.height),me===0&&(M.matrix.copy(Te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(Te)}}for(let le=0;le<p.length;le++){const fe=_[le],me=p[le];fe!==null&&me!==void 0&&me.update(fe,K,c||o)}G&&G(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const Z=new v_;Z.setAnimationLoop($),this.setAnimationLoop=function(X){G=X},this.dispose=function(){}}}function fT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,m_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,p,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&g(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,p,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===sn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===sn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const p=e.get(u).envMap;if(p&&(m.envMap.value=p,m.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*_,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,p,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*p,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,p){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=p.texture,m.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const p=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(p.matrixWorld),m.nearDistance.value=p.shadow.camera.near,m.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(p,_){const y=_.program;i.uniformBlockBinding(p,y)}function c(p,_){let y=r[p.id];y===void 0&&(v(p),y=d(p),r[p.id]=y,p.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(p,C);const w=e.render.frame;s[p.id]!==w&&(h(p),s[p.id]=w)}function d(p){const _=f();p.__bindingPointIndex=_;const y=t.createBuffer(),C=p.__size,w=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function f(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(p){const _=r[p.id],y=p.uniforms,C=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,R=y.length;w<R;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,E=b.length;M<E;M++){const H=b[M];if(g(H,w,M,C)===!0){const Y=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let L=0;for(let V=0;V<ie.length;V++){const j=ie[V],q=x(j);typeof j=="number"||typeof j=="boolean"?(H.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,Y+L,H.__data)):j.isMatrix3?(H.__data[0]=j.elements[0],H.__data[1]=j.elements[1],H.__data[2]=j.elements[2],H.__data[3]=0,H.__data[4]=j.elements[3],H.__data[5]=j.elements[4],H.__data[6]=j.elements[5],H.__data[7]=0,H.__data[8]=j.elements[6],H.__data[9]=j.elements[7],H.__data[10]=j.elements[8],H.__data[11]=0):(j.toArray(H.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,H.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(p,_,y,C){const w=p.value,R=_+"_"+y;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{const b=C[R];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return C[R]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function v(p){const _=p.uniforms;let y=0;const C=16;for(let R=0,b=_.length;R<b;R++){const M=Array.isArray(_[R])?_[R]:[_[R]];for(let E=0,H=M.length;E<H;E++){const Y=M[E],ie=Array.isArray(Y.value)?Y.value:[Y.value];for(let L=0,V=ie.length;L<V;L++){const j=ie[L],q=x(j),D=y%C;D!==0&&C-D<q.boundary&&(y+=C-D),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=q.storage}}}const w=y%C;return w>0&&(y+=C-w),p.__size=y,p.__cache={},this}function x(p){const _={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(_.boundary=4,_.storage=4):p.isVector2?(_.boundary=8,_.storage=8):p.isVector3||p.isColor?(_.boundary=16,_.storage=12):p.isVector4?(_.boundary=16,_.storage=16):p.isMatrix3?(_.boundary=48,_.storage=48):p.isMatrix4?(_.boundary=64,_.storage=64):p.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",p),_}function m(p){const _=p.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class w_{constructor(e={}){const{canvas:n=ly(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const g=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const u=[],p=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;const _=this;let y=!1,C=0,w=0,R=null,b=-1,M=null;const E=new st,H=new st;let Y=null;const ie=new Xe(0);let L=0,V=n.width,j=n.height,q=1,D=null,F=null;const G=new st(0,0,V,j),$=new st(0,0,V,j);let Z=!1;const X=new Hd;let K=!1,le=!1,fe=null;const me=new gt,Le=new Ve,De=new U,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return R===null?q:1}let O=i;function Ht(T,I){for(let B=0;B<T.length;B++){const W=T[B],k=n.getContext(W,I);if(k!==null)return k}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Od}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",oe,!1),O===null){const I=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&I.shift(),O=Ht(I,T),O===null)throw Ht(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ye,Ce,ge,ot,Ie,A,S,z,te,J,ne,_e,ce,he,Ee,Fe,Q,$e,He,Re,xe,pe,Ne,Ye;function dt(){ye=new EE(O),Ce=new gE(O,ye,e),ye.init(Ce),pe=new lT(O,ye,Ce),ge=new oT(O,ye,Ce),ot=new AE(O),Ie=new j1,A=new aT(O,ye,ge,Ie,Ce,pe,ot),S=new vE(_),z=new ME(_),te=new Ny(O,Ce),Ne=new pE(O,ye,te,Ce),J=new TE(O,te,ot,Ne),ne=new LE(O,J,te,ot),He=new PE(O,Ce,A),Fe=new _E(Ie),_e=new X1(_,S,z,ye,Ce,Ne,Fe),ce=new fT(_,Ie),he=new q1,Ee=new eT(ye,Ce),$e=new hE(_,S,z,ge,ne,h,l),Q=new sT(_,ne,Ce),Ye=new hT(O,ot,Ce,ge),Re=new mE(O,ye,ot,Ce),xe=new wE(O,ye,ot,Ce),ot.programs=_e.programs,_.capabilities=Ce,_.extensions=ye,_.properties=Ie,_.renderLists=he,_.shadowMap=Q,_.state=ge,_.info=ot}dt();const ke=new dT(_,O);this.xr=ke,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(V,j,!1))},this.getSize=function(T){return T.set(V,j)},this.setSize=function(T,I,B=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,j=I,n.width=Math.floor(T*q),n.height=Math.floor(I*q),B===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(V*q,j*q).floor()},this.setDrawingBufferSize=function(T,I,B){V=T,j=I,q=B,n.width=Math.floor(T*B),n.height=Math.floor(I*B),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(G)},this.setViewport=function(T,I,B,W){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,I,B,W),ge.viewport(E.copy(G).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy($)},this.setScissor=function(T,I,B,W){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,I,B,W),ge.scissor(H.copy($).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){ge.setScissorTest(Z=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(T=!0,I=!0,B=!0){let W=0;if(T){let k=!1;if(R!==null){const ue=R.texture.format;k=ue===e_||ue===Jg||ue===Qg}if(k){const ue=R.texture.type,ve=ue===Bi||ue===Ci||ue===zd||ue===ur||ue===Kg||ue===Zg,Me=$e.getClearColor(),Ae=$e.getClearAlpha(),Oe=Me.r,Pe=Me.g,be=Me.b;ve?(g[0]=Oe,g[1]=Pe,g[2]=be,g[3]=Ae,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Oe,v[1]=Pe,v[2]=be,v[3]=Ae,O.clearBufferiv(O.COLOR,0,v))}else W|=O.COLOR_BUFFER_BIT}I&&(W|=O.DEPTH_BUFFER_BIT),B&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),he.dispose(),Ee.dispose(),Ie.dispose(),S.dispose(),z.dispose(),ne.dispose(),Ne.dispose(),Ye.dispose(),_e.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Gt),ke.removeEventListener("sessionend",Je),fe&&(fe.dispose(),fe=null),Vt.stop()};function re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=ot.autoReset,I=Q.enabled,B=Q.autoUpdate,W=Q.needsUpdate,k=Q.type;dt(),ot.autoReset=T,Q.enabled=I,Q.autoUpdate=B,Q.needsUpdate=W,Q.type=k}function oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ae(T){const I=T.target;I.removeEventListener("dispose",ae),we(I)}function we(T){Se(T),Ie.remove(T)}function Se(T){const I=Ie.get(T).programs;I!==void 0&&(I.forEach(function(B){_e.releaseProgram(B)}),T.isShaderMaterial&&_e.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,B,W,k,ue){I===null&&(I=Te);const ve=k.isMesh&&k.matrixWorld.determinant()<0,Me=P_(T,I,B,W,k);ge.setMaterial(W,ve);let Ae=B.index,Oe=1;if(W.wireframe===!0){if(Ae=J.getWireframeAttribute(B),Ae===void 0)return;Oe=2}const Pe=B.drawRange,be=B.attributes.position;let pt=Pe.start*Oe,on=(Pe.start+Pe.count)*Oe;ue!==null&&(pt=Math.max(pt,ue.start*Oe),on=Math.min(on,(ue.start+ue.count)*Oe)),Ae!==null?(pt=Math.max(pt,0),on=Math.min(on,Ae.count)):be!=null&&(pt=Math.max(pt,0),on=Math.min(on,be.count));const wt=on-pt;if(wt<0||wt===1/0)return;Ne.setup(k,W,Me,B,Ae);let Kn,at=Re;if(Ae!==null&&(Kn=te.get(Ae),at=xe,at.setIndex(Kn)),k.isMesh)W.wireframe===!0?(ge.setLineWidth(W.wireframeLinewidth*We()),at.setMode(O.LINES)):at.setMode(O.TRIANGLES);else if(k.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),ge.setLineWidth(ze*We()),k.isLineSegments?at.setMode(O.LINES):k.isLineLoop?at.setMode(O.LINE_LOOP):at.setMode(O.LINE_STRIP)}else k.isPoints?at.setMode(O.POINTS):k.isSprite&&at.setMode(O.TRIANGLES);if(k.isBatchedMesh)at.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)at.renderInstances(pt,wt,k.count);else if(B.isInstancedBufferGeometry){const ze=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Pl=Math.min(B.instanceCount,ze);at.renderInstances(pt,wt,Pl)}else at.render(pt,wt)};function Ze(T,I,B){T.transparent===!0&&T.side===si&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,Po(T,I,B),T.side=Vi,T.needsUpdate=!0,Po(T,I,B),T.side=si):Po(T,I,B)}this.compile=function(T,I,B=null){B===null&&(B=T),m=Ee.get(B),m.init(),p.push(m),B.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==B&&T.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(_._useLegacyLights);const W=new Set;return T.traverse(function(k){const ue=k.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Me=ue[ve];Ze(Me,B,k),W.add(Me)}else Ze(ue,B,k),W.add(ue)}),p.pop(),m=null,W},this.compileAsync=function(T,I,B=null){const W=this.compile(T,I,B);return new Promise(k=>{function ue(){if(W.forEach(function(ve){Ie.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){k(T);return}setTimeout(ue,10)}ye.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Qe=null;function Tt(T){Qe&&Qe(T)}function Gt(){Vt.stop()}function Je(){Vt.start()}const Vt=new v_;Vt.setAnimationLoop(Tt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(T){Qe=T,ke.setAnimationLoop(T),T===null?Vt.stop():Vt.start()},ke.addEventListener("sessionstart",Gt),ke.addEventListener("sessionend",Je),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(I),I=ke.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,I,R),m=Ee.get(T,p.length),m.init(),p.push(m),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(me),le=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,le),x=he.get(T,u.length),x.init(),u.push(x),Vn(T,I,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(D,F),this.info.render.frame++,K===!0&&Fe.beginShadows();const B=m.state.shadowsArray;if(Q.render(B,T,I),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(x,T),m.setupLights(_._useLegacyLights),I.isArrayCamera){const W=I.cameras;for(let k=0,ue=W.length;k<ue;k++){const ve=W[k];qd(x,T,ve,ve.viewport)}}else qd(x,T,I);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(_,T,I),Ne.resetDefaultState(),b=-1,M=null,p.pop(),p.length>0?m=p[p.length-1]:m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Vn(T,I,B,W){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){W&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const ve=ne.update(T),Me=T.material;Me.visible&&x.push(T,ve,Me,B,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const ve=ne.update(T),Me=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),De.copy(ve.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(Me)){const Ae=ve.groups;for(let Oe=0,Pe=Ae.length;Oe<Pe;Oe++){const be=Ae[Oe],pt=Me[be.materialIndex];pt&&pt.visible&&x.push(T,ve,pt,B,De.z,be)}}else Me.visible&&x.push(T,ve,Me,B,De.z,null)}}const ue=T.children;for(let ve=0,Me=ue.length;ve<Me;ve++)Vn(ue[ve],I,B,W)}function qd(T,I,B,W){const k=T.opaque,ue=T.transmissive,ve=T.transparent;m.setupLightsView(B),K===!0&&Fe.setGlobalState(_.clippingPlanes,B),ue.length>0&&C_(k,ue,I,B),W&&ge.viewport(E.copy(W)),k.length>0&&Co(k,I,B),ue.length>0&&Co(ue,I,B),ve.length>0&&Co(ve,I,B),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function C_(T,I,B,W){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const ue=Ce.isWebGL2;fe===null&&(fe=new vr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?xo:Bi,minFilter:vo,samples:ue?4:0})),_.getDrawingBufferSize(Le),ue?fe.setSize(Le.x,Le.y):fe.setSize(Bu(Le.x),Bu(Le.y));const ve=_.getRenderTarget();_.setRenderTarget(fe),_.getClearColor(ie),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const Me=_.toneMapping;_.toneMapping=zi,Co(T,B,W),A.updateMultisampleRenderTarget(fe),A.updateRenderTargetMipmap(fe);let Ae=!1;for(let Oe=0,Pe=I.length;Oe<Pe;Oe++){const be=I[Oe],pt=be.object,on=be.geometry,wt=be.material,Kn=be.group;if(wt.side===si&&pt.layers.test(W.layers)){const at=wt.side;wt.side=sn,wt.needsUpdate=!0,$d(pt,B,W,on,wt,Kn),wt.side=at,wt.needsUpdate=!0,Ae=!0}}Ae===!0&&(A.updateMultisampleRenderTarget(fe),A.updateRenderTargetMipmap(fe)),_.setRenderTarget(ve),_.setClearColor(ie,L),_.toneMapping=Me}function Co(T,I,B){const W=I.isScene===!0?I.overrideMaterial:null;for(let k=0,ue=T.length;k<ue;k++){const ve=T[k],Me=ve.object,Ae=ve.geometry,Oe=W===null?ve.material:W,Pe=ve.group;Me.layers.test(B.layers)&&$d(Me,I,B,Ae,Oe,Pe)}}function $d(T,I,B,W,k,ue){T.onBeforeRender(_,I,B,W,k,ue),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(_,I,B,W,T,ue),k.transparent===!0&&k.side===si&&k.forceSinglePass===!1?(k.side=sn,k.needsUpdate=!0,_.renderBufferDirect(B,I,W,k,T,ue),k.side=Vi,k.needsUpdate=!0,_.renderBufferDirect(B,I,W,k,T,ue),k.side=si):_.renderBufferDirect(B,I,W,k,T,ue),T.onAfterRender(_,I,B,W,k,ue)}function Po(T,I,B){I.isScene!==!0&&(I=Te);const W=Ie.get(T),k=m.state.lights,ue=m.state.shadowsArray,ve=k.state.version,Me=_e.getParameters(T,k.state,ue,I,B),Ae=_e.getProgramCacheKey(Me);let Oe=W.programs;W.environment=T.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(T.isMeshStandardMaterial?z:S).get(T.envMap||W.environment),Oe===void 0&&(T.addEventListener("dispose",ae),Oe=new Map,W.programs=Oe);let Pe=Oe.get(Ae);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===ve)return Zd(T,Me),Pe}else Me.uniforms=_e.getUniforms(T),T.onBuild(B,Me,_),T.onBeforeCompile(Me,_),Pe=_e.acquireProgram(Me,Ae),Oe.set(Ae,Pe),W.uniforms=Me.uniforms;const be=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=Fe.uniform),Zd(T,Me),W.needsLights=b_(T),W.lightsStateVersion=ve,W.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.directionalShadowMap.value=k.state.directionalShadowMap,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotShadowMap.value=k.state.spotShadowMap,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMap.value=k.state.pointShadowMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Pe,W.uniformsList=null,Pe}function Kd(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=ba.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Zd(T,I){const B=Ie.get(T);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function P_(T,I,B,W,k){I.isScene!==!0&&(I=Te),A.resetTextureUnits();const ue=I.fog,ve=W.isMeshStandardMaterial?I.environment:null,Me=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:pi,Ae=(W.isMeshStandardMaterial?z:S).get(W.envMap||ve),Oe=W.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pe=!!B.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!B.morphAttributes.position,pt=!!B.morphAttributes.normal,on=!!B.morphAttributes.color;let wt=zi;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(wt=_.toneMapping);const Kn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,at=Kn!==void 0?Kn.length:0,ze=Ie.get(W),Pl=m.state.lights;if(K===!0&&(le===!0||T!==M)){const _n=T===M&&W.id===b;Fe.setState(W,T,_n)}let ft=!1;W.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Pl.state.version||ze.outputColorSpace!==Me||k.isBatchedMesh&&ze.batching===!1||!k.isBatchedMesh&&ze.batching===!0||k.isInstancedMesh&&ze.instancing===!1||!k.isInstancedMesh&&ze.instancing===!0||k.isSkinnedMesh&&ze.skinning===!1||!k.isSkinnedMesh&&ze.skinning===!0||k.isInstancedMesh&&ze.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ze.instancingColor===!1&&k.instanceColor!==null||ze.envMap!==Ae||W.fog===!0&&ze.fog!==ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Fe.numPlanes||ze.numIntersection!==Fe.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==Pe||ze.morphTargets!==be||ze.morphNormals!==pt||ze.morphColors!==on||ze.toneMapping!==wt||Ce.isWebGL2===!0&&ze.morphTargetsCount!==at)&&(ft=!0):(ft=!0,ze.__version=W.version);let Yi=ze.currentProgram;ft===!0&&(Yi=Po(W,I,k));let Qd=!1,ws=!1,Ll=!1;const Nt=Yi.getUniforms(),qi=ze.uniforms;if(ge.useProgram(Yi.program)&&(Qd=!0,ws=!0,Ll=!0),W.id!==b&&(b=W.id,ws=!0),Qd||M!==T){Nt.setValue(O,"projectionMatrix",T.projectionMatrix),Nt.setValue(O,"viewMatrix",T.matrixWorldInverse);const _n=Nt.map.cameraPosition;_n!==void 0&&_n.setValue(O,De.setFromMatrixPosition(T.matrixWorld)),Ce.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,ws=!0,Ll=!0)}if(k.isSkinnedMesh){Nt.setOptional(O,k,"bindMatrix"),Nt.setOptional(O,k,"bindMatrixInverse");const _n=k.skeleton;_n&&(Ce.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Nt.setValue(O,"boneTexture",_n.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Nt.setOptional(O,k,"batchingTexture"),Nt.setValue(O,"batchingTexture",k._matricesTexture,A));const bl=B.morphAttributes;if((bl.position!==void 0||bl.normal!==void 0||bl.color!==void 0&&Ce.isWebGL2===!0)&&He.update(k,B,Yi),(ws||ze.receiveShadow!==k.receiveShadow)&&(ze.receiveShadow=k.receiveShadow,Nt.setValue(O,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(qi.envMap.value=Ae,qi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),ws&&(Nt.setValue(O,"toneMappingExposure",_.toneMappingExposure),ze.needsLights&&L_(qi,Ll),ue&&W.fog===!0&&ce.refreshFogUniforms(qi,ue),ce.refreshMaterialUniforms(qi,W,q,j,fe),ba.upload(O,Kd(ze),qi,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ba.upload(O,Kd(ze),qi,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Nt.setValue(O,"center",k.center),Nt.setValue(O,"modelViewMatrix",k.modelViewMatrix),Nt.setValue(O,"normalMatrix",k.normalMatrix),Nt.setValue(O,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const _n=W.uniformsGroups;for(let Dl=0,D_=_n.length;Dl<D_;Dl++)if(Ce.isWebGL2){const Jd=_n[Dl];Ye.update(Jd,Yi),Ye.bind(Jd,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function L_(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function b_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,I,B){Ie.get(T.texture).__webglTexture=I,Ie.get(T.depthTexture).__webglTexture=B;const W=Ie.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=B===void 0,W.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,I){const B=Ie.get(T);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,B=0){R=T,C=I,w=B;let W=!0,k=null,ue=!1,ve=!1;if(T){const Ae=Ie.get(T);Ae.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(O.FRAMEBUFFER,null),W=!1):Ae.__webglFramebuffer===void 0?A.setupRenderTarget(T):Ae.__hasExternalTextures&&A.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const Pe=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?k=Pe[I][B]:k=Pe[I],ue=!0):Ce.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?k=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?k=Pe[B]:k=Pe,E.copy(T.viewport),H.copy(T.scissor),Y=T.scissorTest}else E.copy(G).multiplyScalar(q).floor(),H.copy($).multiplyScalar(q).floor(),Y=Z;if(ge.bindFramebuffer(O.FRAMEBUFFER,k)&&Ce.drawBuffers&&W&&ge.drawBuffers(T,k),ge.viewport(E),ge.scissor(H),ge.setScissorTest(Y),ue){const Ae=Ie.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,B)}else if(ve){const Ae=Ie.get(T.texture),Oe=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.__webglTexture,B||0,Oe)}b=-1},this.readRenderTargetPixels=function(T,I,B,W,k,ue,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){ge.bindFramebuffer(O.FRAMEBUFFER,Me);try{const Ae=T.texture,Oe=Ae.format,Pe=Ae.type;if(Oe!==kn&&pe.convert(Oe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const be=Pe===xo&&(ye.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Pe!==Bi&&pe.convert(Pe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Pi&&(Ce.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-W&&B>=0&&B<=T.height-k&&O.readPixels(I,B,W,k,pe.convert(Oe),pe.convert(Pe),ue)}finally{const Ae=R!==null?Ie.get(R).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(T,I,B=0){const W=Math.pow(2,-B),k=Math.floor(I.image.width*W),ue=Math.floor(I.image.height*W);A.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,B,0,0,T.x,T.y,k,ue),ge.unbindTexture()},this.copyTextureToTexture=function(T,I,B,W=0){const k=I.image.width,ue=I.image.height,ve=pe.convert(B.format),Me=pe.convert(B.type);A.setTexture2D(B,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,T.x,T.y,k,ue,ve,Me,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,ve,I.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,W,T.x,T.y,ve,Me,I.image),W===0&&B.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,I,B,W,k=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=T.max.x-T.min.x+1,ve=T.max.y-T.min.y+1,Me=T.max.z-T.min.z+1,Ae=pe.convert(W.format),Oe=pe.convert(W.type);let Pe;if(W.isData3DTexture)A.setTexture3D(W,0),Pe=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)A.setTexture2DArray(W,0),Pe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const be=O.getParameter(O.UNPACK_ROW_LENGTH),pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),on=O.getParameter(O.UNPACK_SKIP_PIXELS),wt=O.getParameter(O.UNPACK_SKIP_ROWS),Kn=O.getParameter(O.UNPACK_SKIP_IMAGES),at=B.isCompressedTexture?B.mipmaps[k]:B.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,at.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),B.isDataTexture||B.isData3DTexture?O.texSubImage3D(Pe,k,I.x,I.y,I.z,ue,ve,Me,Ae,Oe,at.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Pe,k,I.x,I.y,I.z,ue,ve,Me,Ae,at.data)):O.texSubImage3D(Pe,k,I.x,I.y,I.z,ue,ve,Me,Ae,Oe,at),O.pixelStorei(O.UNPACK_ROW_LENGTH,be),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,on),O.pixelStorei(O.UNPACK_SKIP_ROWS,wt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Kn),k===0&&W.generateMipmaps&&O.generateMipmap(Pe),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){C=0,w=0,R=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Bd?"display-p3":"srgb",n.unpackColorSpace=Ke.workingColorSpace===wl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?fr:n_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fr?Lt:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pT extends w_{}pT.prototype.isWebGL1Renderer=!0;class mT extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class A_ extends Ms{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lp=new gt,Gu=new c_,ga=new Al,_a=new U;class gT extends qt{constructor(e=new Cn,n=new A_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),ga.radius+=s,e.ray.intersectsSphere(ga)===!1)return;Lp.copy(r).invert(),Gu.copy(e.ray).applyMatrix4(Lp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let v=h,x=g;v<x;v++){const m=c.getX(v);_a.fromBufferAttribute(f,m),bp(_a,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=h,x=g;v<x;v++)_a.fromBufferAttribute(f,v),bp(_a,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bp(t,e,n,i,r,s,o){const a=Gu.distanceSqToPoint(t);if(a<n){const l=new U;Gu.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Wd extends Cn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(s.slice(),3)),this.setAttribute("uv",new zt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(p){const _=new U,y=new U,C=new U;for(let w=0;w<n.length;w+=3)g(n[w+0],_),g(n[w+1],y),g(n[w+2],C),l(_,y,C,p)}function l(p,_,y,C){const w=C+1,R=[];for(let b=0;b<=w;b++){R[b]=[];const M=p.clone().lerp(y,b/w),E=_.clone().lerp(y,b/w),H=w-b;for(let Y=0;Y<=H;Y++)Y===0&&b===w?R[b][Y]=M:R[b][Y]=M.clone().lerp(E,Y/H)}for(let b=0;b<w;b++)for(let M=0;M<2*(w-b)-1;M++){const E=Math.floor(M/2);M%2===0?(h(R[b][E+1]),h(R[b+1][E]),h(R[b][E])):(h(R[b][E+1]),h(R[b+1][E+1]),h(R[b+1][E]))}}function c(p){const _=new U;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(p),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function d(){const p=new U;for(let _=0;_<s.length;_+=3){p.x=s[_+0],p.y=s[_+1],p.z=s[_+2];const y=m(p)/2/Math.PI+.5,C=u(p)/Math.PI+.5;o.push(y,1-C)}v(),f()}function f(){for(let p=0;p<o.length;p+=6){const _=o[p+0],y=o[p+2],C=o[p+4],w=Math.max(_,y,C),R=Math.min(_,y,C);w>.9&&R<.1&&(_<.2&&(o[p+0]+=1),y<.2&&(o[p+2]+=1),C<.2&&(o[p+4]+=1))}}function h(p){s.push(p.x,p.y,p.z)}function g(p,_){const y=p*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function v(){const p=new U,_=new U,y=new U,C=new U,w=new Ve,R=new Ve,b=new Ve;for(let M=0,E=0;M<s.length;M+=9,E+=6){p.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),w.set(o[E+0],o[E+1]),R.set(o[E+2],o[E+3]),b.set(o[E+4],o[E+5]),C.copy(p).add(_).add(y).divideScalar(3);const H=m(C);x(w,E+0,p,H),x(R,E+2,_,H),x(b,E+4,y,H)}}function x(p,_,y,C){C<0&&p.x===1&&(o[_]=p.x-1),y.x===0&&y.z===0&&(o[_]=C/2/Math.PI+.5)}function m(p){return Math.atan2(p.z,-p.x)}function u(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wd(e.vertices,e.indices,e.radius,e.details)}}class Xd extends Wd{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Xd(e.radius,e.detail)}}class jd extends Cn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new U,h=new U,g=[],v=[],x=[],m=[];for(let u=0;u<=i;u++){const p=[],_=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const w=C/n;f.x=-e*Math.cos(r+w*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+_*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(w+y,1-_),p.push(c++)}d.push(p)}for(let u=0;u<i;u++)for(let p=0;p<n;p++){const _=d[u][p+1],y=d[u][p],C=d[u+1][p],w=d[u+1][p+1];(u!==0||o>0)&&g.push(_,y,w),(u!==i-1||l<Math.PI)&&g.push(y,C,w)}this.setIndex(g),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yd extends Cn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new U,f=new U,h=new U;for(let g=0;g<=i;g++)for(let v=0;v<=r;v++){const x=v/r*s,m=g/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(x),f.y=(e+n*Math.cos(m))*Math.sin(x),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(v/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let v=1;v<=r;v++){const x=(r+1)*g+v-1,m=(r+1)*(g-1)+v-1,u=(r+1)*(g-1)+v,p=(r+1)*g+v;o.push(x,m,p),o.push(m,u,p)}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class va extends Ms{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i_,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class R_ extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Fc=new gt,Dp=new U,Np=new U;class _T{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hd,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Dp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dp),Np.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Np),n.updateMatrixWorld(),Fc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Up=new gt,zs=new U,Oc=new U;class vT extends _T{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),zs.setFromMatrixPosition(e.matrixWorld),i.position.copy(zs),Oc.copy(i.position),Oc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Oc),i.updateMatrixWorld(),r.makeTranslation(-zs.x,-zs.y,-zs.z),Up.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Up)}}class kc extends R_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new vT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xT extends R_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);function yT(){const t=vt.useRef(null),e=vt.useRef(null),n=vt.useRef({x:0,y:0});return vt.useEffect(()=>{if(!t.current)return;const i=new mT,r=new un(75,window.innerWidth/window.innerHeight,.1,1e3),s=new w_({antialias:!0,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),s.setClearColor(0,0),t.current.appendChild(s.domElement),r.position.z=6;const o=new Es(1.2,1.2,1.2),a=new va({color:2911190,emissive:1720186,shininess:100,wireframe:!1}),l=new Tn(o,a);l.position.set(0,0,0),i.add(l);const c=new jd(.8,32,32),d=new va({color:5089023,emissive:2906784,shininess:80}),f=new Tn(c,d);f.position.x=2.5,i.add(f);const h=new Yd(1,.35,16,100),g=new va({color:54527,emissive:34986,shininess:100}),v=new Tn(h,g);v.position.x=-2.5,i.add(v);const x=new Xd(.8),m=new va({color:6206454,emissive:2850777,shininess:90}),u=new Tn(x,m);u.position.y=2,i.add(u);const p=80,_=new Cn,y=new Float32Array(p*3);for(let L=0;L<p*3;L+=3)y[L]=(Math.random()-.5)*12,y[L+1]=(Math.random()-.5)*12,y[L+2]=(Math.random()-.5)*12;_.setAttribute("position",new Hn(y,3));const C=new A_({color:730432,size:.08,transparent:!0,opacity:.65}),w=new gT(_,C);i.add(w);const R=new kc(16777215,1.2);R.position.set(5,5,5),i.add(R);const b=new kc(5089023,.9);b.position.set(-5,-3,5),i.add(b);const M=new kc(6206454,.7);M.position.set(0,5,-5),i.add(M);const E=new xT(4210752,1.8);i.add(E);const H=L=>{n.current.x=L.clientX/window.innerWidth*2-1,n.current.y=-(L.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",H);const Y=()=>{requestAnimationFrame(Y),l.rotation.x+=.003,l.rotation.y+=.005,l.position.x+=(n.current.x*2-l.position.x)*.08,l.position.y+=(n.current.y*2-l.position.y)*.08,f.rotation.y-=.004,f.position.x=2.5+Math.sin(Date.now()*5e-4)*.6,f.position.y=Math.cos(Date.now()*3e-4)*.5+n.current.y*1.5,v.rotation.x+=.002,v.rotation.y+=.004,v.position.z=Math.sin(Date.now()*4e-4)*.8,v.position.x=-2.5+n.current.x*1.5,u.rotation.x+=.004,u.rotation.z+=.003,u.position.y=2+Math.sin(Date.now()*5e-4)*.4,u.position.x+=(n.current.x*1.5-u.position.x)*.1,w.rotation.x+=2e-4,w.rotation.y+=3e-4,s.render(i,r)};Y();const ie=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ie),e.current={scene:i,renderer:s,cube:l,sphere:f,torus:v,octahedron:u,particles:w},()=>{window.removeEventListener("resize",ie),window.removeEventListener("mousemove",H),t.current&&s.domElement.parentNode===t.current&&t.current.removeChild(s.domElement)}},[]),N.jsxs("section",{id:"home",className:"hero",children:[N.jsx("div",{ref:t,className:"hero-3d-bg"}),N.jsxs("div",{className:"hero-header-image",children:[N.jsx("img",{src:"https://wallpaperaccess.com/full/5651982.jpg",alt:"Portfolio hero background",loading:"lazy",className:"hero-image"}),N.jsx("div",{className:"hero-image-overlay"})]}),N.jsx("div",{className:"container hero-inner",children:N.jsxs("div",{className:"hero-text",children:[N.jsx("div",{className:"hero-badge",children:"👋 Welcome to my portfolio"}),N.jsx("h1",{children:"Lakshan Alahapperuma"}),N.jsx("p",{className:"tagline",children:"Computer Science Undergraduate · Web Developer · Designer"}),N.jsx("p",{className:"lead",children:"I craft beautiful, functional web experiences and turn ideas into elegant digital solutions. Passionate about clean code, responsive design, and creating impact through technology."}),N.jsxs("div",{className:"cta-row",children:[N.jsx("a",{className:"btn btn-primary",href:"#projects",children:"View My Work"}),N.jsx("a",{className:"btn btn-outline",href:"#contact",children:"Get In Touch"})]})]})})]})}function ST(){const t=[{icon:"💻",title:"Full Stack Development",desc:"Building responsive web apps with modern frameworks"},{icon:"🎨",title:"UI/UX Design",desc:"Creating intuitive and beautiful user experiences"},{icon:"🚀",title:"Performance Focus",desc:"Optimizing for speed and efficiency"},{icon:"📚",title:"Continuous Learning",desc:"Always exploring new technologies and best practices"}];return N.jsx("section",{id:"about",className:"section",children:N.jsxs("div",{className:"container",children:[N.jsxs("div",{className:"section-header",children:[N.jsx("h2",{children:"About Me"}),N.jsx("p",{className:"section-subtitle",children:"Passionate developer crafting digital experiences"})]}),N.jsxs("div",{className:"about-content",children:[N.jsxs("div",{className:"about-text",children:[N.jsx("p",{children:"I'm a Computer Science undergraduate with a genuine passion for building accessible, maintainable, and user-focused web interfaces and applications."}),N.jsx("p",{children:"With experience in both frontend and backend development, I enjoy crafting clean, efficient code and designing practical digital solutions that make technology more accessible for everyone."}),N.jsx("p",{children:"I'm continuously learning modern frameworks, tools, and best practices to bring innovative ideas to life through reliable, real-world software."})]}),N.jsx("div",{className:"highlights-grid",children:t.map((e,n)=>N.jsxs("div",{className:"highlight-card",children:[N.jsx("div",{className:"highlight-icon",children:e.icon}),N.jsx("h3",{children:e.title}),N.jsx("p",{children:e.desc})]},n))})]})]})})}function MT(){const t=[{category:"Frontend",icon:"🎨",skills:["HTML5","CSS3","JavaScript","React","Responsive Design"]},{category:"Backend",icon:"⚙️",skills:["PHP","Node.js","MySQL","REST APIs","Database Design"]},{category:"Tools & Platforms",icon:"🛠️",skills:["Git","Figma","VS Code","NetBeans","GitHub"]},{category:"Other Skills",icon:"⭐",skills:["UI/UX Design","Teaching","Problem Solving","Team Collaboration"]}];return N.jsx("section",{id:"skills",className:"section alt",children:N.jsxs("div",{className:"container",children:[N.jsxs("div",{className:"section-header",children:[N.jsx("h2",{children:"Technical Skills"}),N.jsx("p",{className:"section-subtitle",children:"Tools and technologies I work with"})]}),N.jsx("div",{className:"skills-grid",children:t.map(e=>N.jsxs("div",{className:"skill",children:[N.jsx("div",{className:"skill-icon",children:e.icon}),N.jsx("h3",{children:e.category}),N.jsx("div",{className:"skill-items",children:e.skills.map(n=>N.jsx("span",{className:"skill-tag",children:n},n))})]},e.category))})]})})}function ET(){const[t,e]=vt.useState(null),[n,i]=vt.useState(null),r=vt.useRef(null),s=vt.useRef(null),o=[{id:1,title:"VetiPlus",category:"Full Stack",description:"A comprehensive veterinary and pet grooming platform with appointment booking, medical records management, and community features.",longDesc:"Built a full-stack platform for veterinarians and pet owners. Features include real-time appointment scheduling, digital medical records, and a community forum for pet care tips.",image:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=300&fit=crop",tags:["React","PHP","MySQL","UI/UX"],links:{demo:"#",source:"#"},stats:{time:"3 months",team:"Team of 3"}},{id:2,title:"Campus Management System",category:"Web Application",description:"Streamlined system for managing campus operations including student records, course scheduling, and administrative tasks.",longDesc:"Developed an admin dashboard for campus management with role-based access control and real-time data updates.",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",tags:["HTML","CSS","JavaScript","Backend"],links:{demo:"#",source:"#"},stats:{time:"2 months",team:"Solo"}},{id:3,title:"Portfolio Website",category:"Design & Development",description:"Modern, interactive portfolio showcasing my work with smooth animations and Three.js 3D elements.",longDesc:"Created this responsive portfolio with React, Vite, and Three.js featuring interactive 3D elements and smooth scrolling.",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",tags:["React","Three.js","Vite","CSS3"],links:{demo:"#",source:"#"},stats:{time:"2 weeks",team:"Solo"}}];vt.useEffect(()=>{const c=d=>{d.key==="Escape"&&i(null)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]),vt.useEffect(()=>(n?(document.body.classList.add("modal-open"),setTimeout(()=>{var c;return(c=r.current)==null?void 0:c.focus()},50)):document.body.classList.remove("modal-open"),()=>document.body.classList.remove("modal-open")),[n]),vt.useEffect(()=>{if(!n||!s.current)return;const c=s.current,d='a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',f=Array.from(c.querySelectorAll(d)).filter(Boolean);if(f.length===0)return;const h=f[0],g=f[f.length-1],v=x=>{x.key==="Tab"&&(x.shiftKey&&document.activeElement===h?(x.preventDefault(),g.focus()):!x.shiftKey&&document.activeElement===g&&(x.preventDefault(),h.focus()))};return c.addEventListener("keydown",v),()=>c.removeEventListener("keydown",v)},[n]);const a=c=>i(c),l=()=>i(null);return N.jsxs("section",{id:"projects",className:"section","aria-label":"Featured projects",children:[N.jsxs("div",{className:"container","aria-hidden":n?"true":void 0,children:[N.jsxs("div",{className:"section-header",children:[N.jsx("h2",{children:"Featured Projects"}),N.jsx("p",{className:"section-subtitle",children:"Showcase of my recent work and accomplishments — each project includes details, tech, and links."})]}),N.jsx("div",{className:"projects-grid",role:"list",children:o.map(c=>N.jsxs("article",{className:`project-card ${t===c.id?"active":""}`,onMouseEnter:()=>e(c.id),onMouseLeave:()=>e(null),onKeyDown:d=>{d.key==="Enter"&&a(c)},role:"listitem",tabIndex:0,children:[N.jsxs("div",{className:"project-image-wrapper","aria-hidden":n?"true":"false",children:[N.jsxs("figure",{children:[N.jsx("img",{src:c.image,alt:`${c.title} screenshot`,loading:"lazy",className:"project-image"}),N.jsxs("figcaption",{className:"visually-hidden",children:[c.title," — ",c.description]})]}),N.jsx("div",{className:"project-overlay",children:N.jsx("span",{className:"project-category",children:c.category})})]}),N.jsxs("div",{className:"project-body",children:[N.jsx("h3",{children:c.title}),N.jsx("p",{className:"project-desc",children:c.description}),N.jsx("div",{className:"project-tags","aria-hidden":"false",children:c.tags.map(d=>N.jsx("span",{className:"tag-badge","aria-label":`Technology: ${d}`,children:d},d))}),N.jsxs("div",{className:"project-footer",children:[N.jsxs("div",{className:"project-meta",children:[N.jsxs("span",{children:["⏱️ ",c.stats.time]}),N.jsxs("span",{children:["👥 ",c.stats.team]})]}),N.jsxs("div",{className:"project-links",children:[N.jsx("a",{href:c.links.demo||"#",className:"small-btn",target:c.links.demo?"_blank":void 0,rel:c.links.demo?"noopener noreferrer":void 0,"aria-label":`Open live demo of ${c.title}`,children:"Live Demo"}),N.jsx("button",{className:"small-btn",onClick:()=>a(c),"aria-haspopup":"dialog","aria-expanded":(n==null?void 0:n.id)===c.id,children:"Details"}),N.jsx("a",{href:c.links.source||"#",className:"small-btn",target:c.links.source?"_blank":void 0,rel:c.links.source?"noopener noreferrer":void 0,"aria-label":`View source code for ${c.title}`,children:"View Source"})]})]})]})]},c.id))}),N.jsxs("div",{className:"projects-cta",children:[N.jsx("p",{children:"Want to see more?"}),N.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",children:"Visit My GitHub"})]})]}),n&&N.jsx("div",{className:"modal-backdrop",role:"dialog","aria-modal":"true","aria-label":`${n.title} details`,onClick:c=>{c.target.classList.contains("modal-backdrop")&&l()},children:N.jsxs("div",{className:"modal",role:"document",children:[N.jsx("button",{ref:r,className:"modal-close",onClick:l,"aria-label":"Close details",children:"×"}),N.jsxs("div",{className:"modal-content",ref:s,children:[N.jsx("img",{src:n.image,alt:`${n.title} screenshot`,className:"modal-image"}),N.jsxs("div",{className:"modal-body",children:[N.jsx("h3",{children:n.title}),N.jsx("p",{className:"project-desc",children:n.longDesc}),N.jsx("div",{className:"project-tags",children:n.tags.map(c=>N.jsx("span",{className:"tag-badge","aria-label":`Tech: ${c}`,children:c},c))}),N.jsxs("div",{className:"project-links",children:[N.jsx("a",{href:n.links.demo||"#",className:"small-btn",target:"_blank",rel:"noopener noreferrer",children:"Live Demo"}),N.jsx("a",{href:n.links.source||"#",className:"small-btn",target:"_blank",rel:"noopener noreferrer",children:"View Source"})]})]})]})]})})]})}function TT(){return N.jsx("section",{id:"education",className:"section alt",children:N.jsxs("div",{className:"container",children:[N.jsxs("div",{className:"section-header",children:[N.jsx("h2",{children:"Education"}),N.jsx("p",{className:"section-subtitle",children:"Academic background and learning journey"})]}),N.jsx("div",{className:"education-content",children:N.jsxs("div",{className:"education-card",children:[N.jsx("div",{className:"education-icon",children:"🎓"}),N.jsx("h3",{children:"Uva Wellassa University of Sri Lanka"}),N.jsx("p",{className:"degree",children:"BSc in Computer Science (Undergraduate)"}),N.jsx("p",{className:"description",children:"Comprehensive curriculum in software development, database management, algorithms, and web technologies."}),N.jsxs("div",{className:"courses",children:[N.jsx("span",{className:"course-tag",children:"Web Development"}),N.jsx("span",{className:"course-tag",children:"Database Design"}),N.jsx("span",{className:"course-tag",children:"Data Structures"}),N.jsx("span",{className:"course-tag",children:"UI/UX Principles"})]})]})})]})})}function wT(){const t=[{icon:"📚",date:"2020 — Present",title:"Teaching — Sasnaka Sansada Foundation",desc:"Taught mathematics to high school students across multiple schools.",achievements:["Mentored 50+ students","Created learning materials","Improved student engagement"]},{icon:"💼",date:"2019 — 2021",title:"Web & Project Development",desc:"Led development of full-stack web applications for real-world use cases.",achievements:["Built VetiPlus platform","Managed project timelines","Collaborated with teams"]},{icon:"🎯",date:"2022",title:"UI/UX Design Contributor",desc:"Designed user interfaces and improved user experience across multiple projects.",achievements:["Created design systems","Conducted user testing","Optimized conversions"]}];return N.jsx("section",{id:"experience",className:"section","aria-labelledby":"exp-heading",children:N.jsxs("div",{className:"container",children:[N.jsxs("div",{className:"section-header",children:[N.jsx("h2",{id:"exp-heading",children:"Experience & Activities"}),N.jsx("p",{className:"section-subtitle",children:"Professional journey and accomplishments"})]}),N.jsx("ul",{className:"timeline",role:"list","aria-label":"Work and activity timeline",children:t.map((e,n)=>N.jsxs("li",{className:"item","aria-labelledby":`exp-${n}-title`,"aria-describedby":`exp-${n}-desc`,children:[N.jsx("div",{className:"timeline-icon","aria-hidden":"true",children:e.icon}),N.jsxs("div",{className:"timeline-content",children:[N.jsx("h4",{id:`exp-${n}-title`,children:e.title}),N.jsx("time",{className:"timeline-date",dateTime:e.date.replace(/\s/g,""),"aria-label":`Dates: ${e.date}`,children:e.date}),N.jsx("p",{id:`exp-${n}-desc`,children:e.desc}),N.jsx("ul",{className:"achievements","aria-label":`Achievements for ${e.title}`,children:e.achievements.map((i,r)=>N.jsxs("li",{children:["✓ ",i]},r))})]})]},n))})]})})}function AT(){const[t,e]=vt.useState({name:"",email:"",message:""}),[n,i]=vt.useState(""),r=a=>{const{id:l,value:c}=a.target;e(d=>({...d,[l]:c}))},s=a=>{a.preventDefault();const{name:l,email:c,message:d}=t;if(!l||!c||!d){i("Please fill all fields");return}const f=`Portfolio contact from ${l}`,h=`Name: ${l}
Email: ${c}

${d}`;window.location.href=`mailto:nadunsawumya88@gmail.com?subject=${encodeURIComponent(f)}&body=${encodeURIComponent(h)}`,e({name:"",email:"",message:""}),i("Message sent!")},o=()=>{e({name:"",email:"",message:""}),i("")};return N.jsx("section",{id:"contact",className:"section alt contact-section","aria-labelledby":"contact-heading",children:N.jsxs("div",{className:"container contact-container",children:[N.jsxs("div",{className:"contact-header",children:[N.jsx("img",{src:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop",alt:"Contact us background",loading:"lazy",className:"contact-header-image"}),N.jsxs("div",{className:"contact-header-overlay",children:[N.jsx("h2",{id:"contact-heading",children:"Get In Touch"}),N.jsx("p",{children:"Let's collaborate and create something amazing together"})]})]}),N.jsx("div",{className:"contact-grid-centered",role:"region","aria-labelledby":"contact-heading",children:N.jsxs("div",{className:"contact-grid",children:[N.jsxs("div",{className:"contact-info",children:[N.jsx("h3",{children:"Contact Information"}),N.jsx("p",{children:N.jsx("a",{href:"mailto:nadunsawumya88@gmail.com",children:"nadunsawumya88@gmail.com"})}),N.jsx("p",{children:N.jsx("a",{href:"https://github.com/your-username",target:"_blank",rel:"noopener noreferrer",children:"github.com/your-username"})}),N.jsx("p",{children:N.jsx("a",{href:"https://linkedin.com/in/your-profile",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/your-profile"})})]}),N.jsxs("form",{id:"contact-form",className:"contact-form",onSubmit:s,noValidate:!0,children:[N.jsx("label",{htmlFor:"name",children:"Name"}),N.jsx("input",{id:"name",type:"text",value:t.name,onChange:r,placeholder:"Your name",required:!0}),N.jsx("label",{htmlFor:"email",children:"Email"}),N.jsx("input",{id:"email",type:"email",value:t.email,onChange:r,placeholder:"your@email.com",required:!0}),N.jsx("label",{htmlFor:"message",children:"Message"}),N.jsx("textarea",{id:"message",rows:"5",value:t.message,onChange:r,placeholder:"Your message...",required:!0}),n&&N.jsx("div",{className:"form-status",role:"status","aria-live":"polite",children:n}),N.jsxs("div",{className:"form-row",children:[N.jsx("button",{type:"submit",className:"btn btn-primary",children:"Send Message"}),N.jsx("button",{type:"button",className:"btn btn-outline",onClick:o,children:"Clear"})]})]})]})})]})})}function RT(){const[t,e]=vt.useState(new Date().getFullYear());return N.jsx("footer",{className:"site-footer",children:N.jsx("div",{className:"container",children:N.jsxs("div",{className:"footer-content",children:[N.jsxs("p",{children:["© ",t," Lakshan Alahapperuma — Crafted with ❤️ and lots of coffee"]}),N.jsxs("div",{className:"footer-links",children:[N.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener",children:"GitHub"}),N.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener",children:"LinkedIn"}),N.jsx("a",{href:"#contact",children:"Contact"})]})]})})})}function CT(){const[t,e]=vt.useState(!1),[n,i]=vt.useState(!1);vt.useEffect(()=>{const s=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const r=s=>{e(o=>typeof s=="boolean"?s:!o)};return N.jsxs("div",{className:"portfolio",children:[N.jsx(ax,{navOpen:t,toggleNav:r,scrolled:n}),N.jsxs("main",{id:"main",children:[N.jsx(yT,{}),N.jsx(ST,{}),N.jsx(MT,{}),N.jsx(ET,{}),N.jsx(TT,{}),N.jsx(wT,{}),N.jsx(AT,{})]}),N.jsx(RT,{})]})}zc.createRoot(document.getElementById("root")).render(N.jsx($_.StrictMode,{children:N.jsx(CT,{})}));
