var BD=Object.create;var{getPrototypeOf:qD,defineProperty:c5,getOwnPropertyNames:CD}=Object;var SD=Object.prototype.hasOwnProperty;var QH=(H,E,K)=>{K=H!=null?BD(qD(H)):{};let W=E||!H||!H.__esModule?c5(K,"default",{value:H,enumerable:!0}):K;for(let Q of CD(H))if(!SD.call(W,Q))c5(W,Q,{get:()=>H[Q],enumerable:!0});return W};var UK=(H,E)=>()=>(E||H((E={exports:{}}).exports,E),E.exports);var ID=(H,E)=>{for(var K in E)c5(H,K,{get:E[K],enumerable:!0,configurable:!0,set:(W)=>E[K]=()=>W})};var lD=(H,E)=>()=>(H&&(E=H(H=0)),E);var i6=UK((sD)=>{var c6=Symbol.for("react.element"),TD=Symbol.for("react.portal"),vD=Symbol.for("react.fragment"),yD=Symbol.for("react.strict_mode"),uD=Symbol.for("react.profiler"),hD=Symbol.for("react.provider"),jD=Symbol.for("react.context"),pD=Symbol.for("react.forward_ref"),gD=Symbol.for("react.suspense"),xD=Symbol.for("react.memo"),nD=Symbol.for("react.lazy"),kZ=Symbol.iterator;function bD(H){if(H===null||typeof H!=="object")return null;return H=kZ&&H[kZ]||H["@@iterator"],typeof H==="function"?H:null}var NZ={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},UZ=Object.assign,fZ={};function gH(H,E,K){this.props=H,this.context=E,this.refs=fZ,this.updater=K||NZ}gH.prototype.isReactComponent={};gH.prototype.setState=function(H,E){if(typeof H!=="object"&&typeof H!=="function"&&H!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,E,"setState")};gH.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function LZ(){}LZ.prototype=gH.prototype;function s5(H,E,K){this.props=H,this.context=E,this.refs=fZ,this.updater=K||NZ}var o5=s5.prototype=new LZ;o5.constructor=s5;UZ(o5,gH.prototype);o5.isPureReactComponent=!0;var DZ=Array.isArray,MZ=Object.prototype.hasOwnProperty,r5={current:null},RZ={key:!0,ref:!0,__self:!0,__source:!0};function VZ(H,E,K){var W,Q={},A=null,O=null;if(E!=null)for(W in E.ref!==void 0&&(O=E.ref),E.key!==void 0&&(A=""+E.key),E)MZ.call(E,W)&&!RZ.hasOwnProperty(W)&&(Q[W]=E[W]);var Z=arguments.length-2;if(Z===1)Q.children=K;else if(1<Z){for(var F=Array(Z),Y=0;Y<Z;Y++)F[Y]=arguments[Y+2];Q.children=F}if(H&&H.defaultProps)for(W in Z=H.defaultProps,Z)Q[W]===void 0&&(Q[W]=Z[W]);return{$$typeof:c6,type:H,key:A,ref:O,props:Q,_owner:r5.current}}function dD(H,E){return{$$typeof:c6,type:H.type,key:E,ref:H.ref,props:H.props,_owner:H._owner}}function t5(H){return typeof H==="object"&&H!==null&&H.$$typeof===c6}function mD(H){var E={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(K){return E[K]})}var wZ=/\/+/g;function i5(H,E){return typeof H==="object"&&H!==null&&H.key!=null?mD(""+H.key):E.toString(36)}function LK(H,E,K,W,Q){var A=typeof H;if(A==="undefined"||A==="boolean")H=null;var O=!1;if(H===null)O=!0;else switch(A){case"string":case"number":O=!0;break;case"object":switch(H.$$typeof){case c6:case TD:O=!0}}if(O)return O=H,Q=Q(O),H=W===""?"."+i5(O,0):W,DZ(Q)?(K="",H!=null&&(K=H.replace(wZ,"$&/")+"/"),LK(Q,E,K,"",function(Y){return Y})):Q!=null&&(t5(Q)&&(Q=dD(Q,K+(!Q.key||O&&O.key===Q.key?"":(""+Q.key).replace(wZ,"$&/")+"/")+H)),E.push(Q)),1;if(O=0,W=W===""?".":W+":",DZ(H))for(var Z=0;Z<H.length;Z++){A=H[Z];var F=W+i5(A,Z);O+=LK(A,E,K,F,Q)}else if(F=bD(H),typeof F==="function")for(H=F.call(H),Z=0;!(A=H.next()).done;)A=A.value,F=W+i5(A,Z++),O+=LK(A,E,K,F,Q);else if(A==="object")throw E=String(H),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return O}function fK(H,E,K){if(H==null)return H;var W=[],Q=0;return LK(H,W,"","",function(A){return E.call(K,A,Q++)}),W}function cD(H){if(H._status===-1){var E=H._result;E=E(),E.then(function(K){if(H._status===0||H._status===-1)H._status=1,H._result=K},function(K){if(H._status===0||H._status===-1)H._status=2,H._result=K}),H._status===-1&&(H._status=0,H._result=E)}if(H._status===1)return H._result.default;throw H._result}var t1={current:null},MK={transition:null},iD={ReactCurrentDispatcher:t1,ReactCurrentBatchConfig:MK,ReactCurrentOwner:r5};function PZ(){throw Error("act(...) is not supported in production builds of React.")}sD.Children={map:fK,forEach:function(H,E,K){fK(H,function(){E.apply(this,arguments)},K)},count:function(H){var E=0;return fK(H,function(){E++}),E},toArray:function(H){return fK(H,function(E){return E})||[]},only:function(H){if(!t5(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};sD.Component=gH;sD.Fragment=vD;sD.Profiler=uD;sD.PureComponent=s5;sD.StrictMode=yD;sD.Suspense=gD;sD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iD;sD.act=PZ;sD.cloneElement=function(H,E,K){if(H===null||H===void 0)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+H+".");var W=UZ({},H.props),Q=H.key,A=H.ref,O=H._owner;if(E!=null){if(E.ref!==void 0&&(A=E.ref,O=r5.current),E.key!==void 0&&(Q=""+E.key),H.type&&H.type.defaultProps)var Z=H.type.defaultProps;for(F in E)MZ.call(E,F)&&!RZ.hasOwnProperty(F)&&(W[F]=E[F]===void 0&&Z!==void 0?Z[F]:E[F])}var F=arguments.length-2;if(F===1)W.children=K;else if(1<F){Z=Array(F);for(var Y=0;Y<F;Y++)Z[Y]=arguments[Y+2];W.children=Z}return{$$typeof:c6,type:H.type,key:Q,ref:A,props:W,_owner:O}};sD.createContext=function(H){return H={$$typeof:jD,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},H.Provider={$$typeof:hD,_context:H},H.Consumer=H};sD.createElement=VZ;sD.createFactory=function(H){var E=VZ.bind(null,H);return E.type=H,E};sD.createRef=function(){return{current:null}};sD.forwardRef=function(H){return{$$typeof:pD,render:H}};sD.isValidElement=t5;sD.lazy=function(H){return{$$typeof:nD,_payload:{_status:-1,_result:H},_init:cD}};sD.memo=function(H,E){return{$$typeof:xD,type:H,compare:E===void 0?null:E}};sD.startTransition=function(H){var E=MK.transition;MK.transition={};try{H()}finally{MK.transition=E}};sD.unstable_act=PZ;sD.useCallback=function(H,E){return t1.current.useCallback(H,E)};sD.useContext=function(H){return t1.current.useContext(H)};sD.useDebugValue=function(){};sD.useDeferredValue=function(H){return t1.current.useDeferredValue(H)};sD.useEffect=function(H,E){return t1.current.useEffect(H,E)};sD.useId=function(){return t1.current.useId()};sD.useImperativeHandle=function(H,E,K){return t1.current.useImperativeHandle(H,E,K)};sD.useInsertionEffect=function(H,E){return t1.current.useInsertionEffect(H,E)};sD.useLayoutEffect=function(H,E){return t1.current.useLayoutEffect(H,E)};sD.useMemo=function(H,E){return t1.current.useMemo(H,E)};sD.useReducer=function(H,E,K){return t1.current.useReducer(H,E,K)};sD.useRef=function(H){return t1.current.useRef(H)};sD.useState=function(H){return t1.current.useState(H)};sD.useSyncExternalStore=function(H,E,K){return t1.current.useSyncExternalStore(H,E,K)};sD.useTransition=function(){return t1.current.useTransition()};sD.version="18.3.1"});var IZ=UK((lw)=>{function e5(H,E){var K=H.length;H.push(E);H:for(;0<K;){var W=K-1>>>1,Q=H[W];if(0<RK(Q,E))H[W]=E,H[K]=Q,K=W;else break H}}function v9(H){return H.length===0?null:H[0]}function zK(H){if(H.length===0)return null;var E=H[0],K=H.pop();if(K!==E){H[0]=K;H:for(var W=0,Q=H.length,A=Q>>>1;W<A;){var O=2*(W+1)-1,Z=H[O],F=O+1,Y=H[F];if(0>RK(Z,K))F<Q&&0>RK(Y,Z)?(H[W]=Y,H[F]=K,W=F):(H[W]=Z,H[O]=K,W=O);else if(F<Q&&0>RK(Y,K))H[W]=Y,H[F]=K,W=F;else break H}}return E}function RK(H,E){var K=H.sortIndex-E.sortIndex;return K!==0?K:H.id-E.id}if(typeof performance==="object"&&typeof performance.now==="function")$5=performance,lw.unstable_now=function(){return $5.now()};else VK=Date,_5=VK.now(),lw.unstable_now=function(){return VK.now()-_5};var $5,VK,_5,s9=[],G8=[],Iw=1,P9=null,x1=3,BK=!1,AH=!1,o6=!1,zZ=typeof setTimeout==="function"?setTimeout:null,BZ=typeof clearTimeout==="function"?clearTimeout:null,GZ=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H7(H){for(var E=v9(G8);E!==null;){if(E.callback===null)zK(G8);else if(E.startTime<=H)zK(G8),E.sortIndex=E.expirationTime,e5(s9,E);else break;E=v9(G8)}}function K7(H){if(o6=!1,H7(H),!AH)if(v9(s9)!==null)AH=!0,Q7(W7);else{var E=v9(G8);E!==null&&A7(K7,E.startTime-H)}}function W7(H,E){AH=!1,o6&&(o6=!1,BZ(r6),r6=-1),BK=!0;var K=x1;try{H7(E);for(P9=v9(s9);P9!==null&&(!(P9.expirationTime>E)||H&&!SZ());){var W=P9.callback;if(typeof W==="function"){P9.callback=null,x1=P9.priorityLevel;var Q=W(P9.expirationTime<=E);E=lw.unstable_now(),typeof Q==="function"?P9.callback=Q:P9===v9(s9)&&zK(s9),H7(E)}else zK(s9);P9=v9(s9)}if(P9!==null)var A=!0;else{var O=v9(G8);O!==null&&A7(K7,O.startTime-E),A=!1}return A}finally{P9=null,x1=K,BK=!1}}var qK=!1,PK=null,r6=-1,qZ=5,CZ=-1;function SZ(){return lw.unstable_now()-CZ<qZ?!1:!0}function a5(){if(PK!==null){var H=lw.unstable_now();CZ=H;var E=!0;try{E=PK(!0,H)}finally{E?s6():(qK=!1,PK=null)}}else qK=!1}var s6;if(typeof GZ==="function")s6=function(){GZ(a5)};else if(typeof MessageChannel<"u")GK=new MessageChannel,E7=GK.port2,GK.port1.onmessage=a5,s6=function(){E7.postMessage(null)};else s6=function(){zZ(a5,0)};var GK,E7;function Q7(H){PK=H,qK||(qK=!0,s6())}function A7(H,E){r6=zZ(function(){H(lw.unstable_now())},E)}lw.unstable_IdlePriority=5;lw.unstable_ImmediatePriority=1;lw.unstable_LowPriority=4;lw.unstable_NormalPriority=3;lw.unstable_Profiling=null;lw.unstable_UserBlockingPriority=2;lw.unstable_cancelCallback=function(H){H.callback=null};lw.unstable_continueExecution=function(){AH||BK||(AH=!0,Q7(W7))};lw.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qZ=0<H?Math.floor(1000/H):5};lw.unstable_getCurrentPriorityLevel=function(){return x1};lw.unstable_getFirstCallbackNode=function(){return v9(s9)};lw.unstable_next=function(H){switch(x1){case 1:case 2:case 3:var E=3;break;default:E=x1}var K=x1;x1=E;try{return H()}finally{x1=K}};lw.unstable_pauseExecution=function(){};lw.unstable_requestPaint=function(){};lw.unstable_runWithPriority=function(H,E){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var K=x1;x1=H;try{return E()}finally{x1=K}};lw.unstable_scheduleCallback=function(H,E,K){var W=lw.unstable_now();switch(typeof K==="object"&&K!==null?(K=K.delay,K=typeof K==="number"&&0<K?W+K:W):K=W,H){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5000}return Q=K+Q,H={id:Iw++,callback:E,priorityLevel:H,startTime:K,expirationTime:Q,sortIndex:-1},K>W?(H.sortIndex=K,e5(G8,H),v9(s9)===null&&H===v9(G8)&&(o6?(BZ(r6),r6=-1):o6=!0,A7(K7,K-W))):(H.sortIndex=Q,e5(s9,H),AH||BK||(AH=!0,Q7(W7))),H};lw.unstable_shouldYield=SZ;lw.unstable_wrapCallback=function(H){var E=x1;return function(){var K=x1;x1=E;try{return H.apply(this,arguments)}finally{x1=K}}}});var XA={};ID(XA,{version:()=>mJ,unstable_renderSubtreeIntoContainer:()=>dJ,unstable_batchedUpdates:()=>bJ,unmountComponentAtNode:()=>nJ,render:()=>xJ,hydrateRoot:()=>gJ,hydrate:()=>pJ,flushSync:()=>jJ,findDOMNode:()=>hJ,createRoot:()=>uJ,createPortal:()=>yJ,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>vJ});function $(H){for(var E="https://reactjs.org/docs/error-decoder.html?invariant="+H,K=1;K<arguments.length;K++)E+="&args[]="+encodeURIComponent(arguments[K]);return"Minified React error #"+H+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function MH(H,E){O6(H,E),O6(H+"Capture",E)}function O6(H,E){ME[H]=E;for(H=0;H<E.length;H++)hF.add(E[H])}function aw(H){if(C7.call(TZ,H))return!0;if(C7.call(lZ,H))return!1;if(tw.test(H))return TZ[H]=!0;return lZ[H]=!0,!1}function ew(H,E,K,W){if(K!==null&&K.type===0)return!1;switch(typeof E){case"function":case"symbol":return!0;case"boolean":if(W)return!1;if(K!==null)return!K.acceptsBooleans;return H=H.toLowerCase().slice(0,5),H!=="data-"&&H!=="aria-";default:return!1}}function $w(H,E,K,W){if(E===null||typeof E>"u"||ew(H,E,K,W))return!0;if(W)return!1;if(K!==null)switch(K.type){case 3:return!E;case 4:return E===!1;case 5:return isNaN(E);case 6:return isNaN(E)||1>E}return!1}function $1(H,E,K,W,Q,A,O){this.acceptsBooleans=E===2||E===3||E===4,this.attributeName=W,this.attributeNamespace=Q,this.mustUseProperty=K,this.propertyName=H,this.type=E,this.sanitizeURL=A,this.removeEmptyString=O}function PQ(H){return H[1].toUpperCase()}function GQ(H,E,K,W){var Q=g1.hasOwnProperty(E)?g1[E]:null;if(Q!==null?Q.type!==0:W||!(2<E.length)||E[0]!=="o"&&E[0]!=="O"||E[1]!=="n"&&E[1]!=="N")$w(E,K,Q,W)&&(K=null),W||Q===null?aw(E)&&(K===null?H.removeAttribute(E):H.setAttribute(E,""+K)):Q.mustUseProperty?H[Q.propertyName]=K===null?Q.type===3?!1:"":K:(E=Q.attributeName,W=Q.attributeNamespace,K===null?H.removeAttribute(E):(Q=Q.type,K=Q===3||Q===4&&K===!0?"":""+K,W?H.setAttributeNS(W,E,K):H.setAttribute(E,K)))}function t6(H){if(H===null||typeof H!=="object")return null;return H=vZ&&H[vZ]||H["@@iterator"],typeof H==="function"?H:null}function KE(H){if(O7===void 0)try{throw Error()}catch(K){var E=K.stack.trim().match(/\n( *(at )?)/);O7=E&&E[1]||""}return`
`+O7+H}function F7(H,E){if(!H||Z7)return"";Z7=!0;var K=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(E)if(E=function(){throw Error()},Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(Y){var W=Y}Reflect.construct(H,[],E)}else{try{E.call()}catch(Y){W=Y}H.call(E.prototype)}else{try{throw Error()}catch(Y){W=Y}H()}}catch(Y){if(Y&&W&&typeof Y.stack==="string"){for(var Q=Y.stack.split(`
`),A=W.stack.split(`
`),O=Q.length-1,Z=A.length-1;1<=O&&0<=Z&&Q[O]!==A[Z];)Z--;for(;1<=O&&0<=Z;O--,Z--)if(Q[O]!==A[Z]){if(O!==1||Z!==1)do if(O--,Z--,0>Z||Q[O]!==A[Z]){var F=`
`+Q[O].replace(" at new "," at ");return H.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",H.displayName)),F}while(1<=O&&0<=Z);break}}}finally{Z7=!1,Error.prepareStackTrace=K}return(H=H?H.displayName||H.name:"")?KE(H):""}function _w(H){switch(H.tag){case 5:return KE(H.type);case 16:return KE("Lazy");case 13:return KE("Suspense");case 19:return KE("SuspenseList");case 0:case 2:case 15:return H=F7(H.type,!1),H;case 11:return H=F7(H.type.render,!1),H;case 1:return H=F7(H.type,!0),H;default:return""}}function T7(H){if(H==null)return null;if(typeof H==="function")return H.displayName||H.name||null;if(typeof H==="string")return H;switch(H){case mH:return"Fragment";case dH:return"Portal";case S7:return"Profiler";case zQ:return"StrictMode";case I7:return"Suspense";case l7:return"SuspenseList"}if(typeof H==="object")switch(H.$$typeof){case pF:return(H.displayName||"Context")+".Consumer";case jF:return(H._context.displayName||"Context")+".Provider";case BQ:var E=H.render;return H=H.displayName,H||(H=E.displayName||E.name||"",H=H!==""?"ForwardRef("+H+")":"ForwardRef"),H;case qQ:return E=H.displayName||null,E!==null?E:T7(H.type)||"Memo";case B8:E=H._payload,H=H._init;try{return T7(H(E))}catch(K){}}return null}function HN(H){var E=H.type;switch(H.tag){case 24:return"Cache";case 9:return(E.displayName||"Context")+".Consumer";case 10:return(E._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return H=E.render,H=H.displayName||H.name||"",E.displayName||(H!==""?"ForwardRef("+H+")":"ForwardRef");case 7:return"Fragment";case 5:return E;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return T7(E);case 8:return E===zQ?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof E==="function")return E.displayName||E.name||null;if(typeof E==="string")return E}return null}function x8(H){switch(typeof H){case"boolean":case"number":case"string":case"undefined":return H;case"object":return H;default:return""}}function xF(H){var E=H.type;return(H=H.nodeName)&&H.toLowerCase()==="input"&&(E==="checkbox"||E==="radio")}function EN(H){var E=xF(H)?"checked":"value",K=Object.getOwnPropertyDescriptor(H.constructor.prototype,E),W=""+H[E];if(!H.hasOwnProperty(E)&&typeof K<"u"&&typeof K.get==="function"&&typeof K.set==="function"){var{get:Q,set:A}=K;return Object.defineProperty(H,E,{configurable:!0,get:function(){return Q.call(this)},set:function(O){W=""+O,A.call(this,O)}}),Object.defineProperty(H,E,{enumerable:K.enumerable}),{getValue:function(){return W},setValue:function(O){W=""+O},stopTracking:function(){H._valueTracker=null,delete H[E]}}}}function SK(H){H._valueTracker||(H._valueTracker=EN(H))}function nF(H){if(!H)return!1;var E=H._valueTracker;if(!E)return!0;var K=E.getValue(),W="";return H&&(W=xF(H)?H.checked?"true":"false":H.value),H=W,H!==K?(E.setValue(H),!0):!1}function _K(H){if(H=H||(typeof document<"u"?document:void 0),typeof H>"u")return null;try{return H.activeElement||H.body}catch(E){return H.body}}function v7(H,E){var K=E.checked;return N1({},E,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:K!=null?K:H._wrapperState.initialChecked})}function yZ(H,E){var K=E.defaultValue==null?"":E.defaultValue,W=E.checked!=null?E.checked:E.defaultChecked;K=x8(E.value!=null?E.value:K),H._wrapperState={initialChecked:W,initialValue:K,controlled:E.type==="checkbox"||E.type==="radio"?E.checked!=null:E.value!=null}}function bF(H,E){E=E.checked,E!=null&&GQ(H,"checked",E,!1)}function y7(H,E){bF(H,E);var K=x8(E.value),W=E.type;if(K!=null)if(W==="number"){if(K===0&&H.value===""||H.value!=K)H.value=""+K}else H.value!==""+K&&(H.value=""+K);else if(W==="submit"||W==="reset"){H.removeAttribute("value");return}E.hasOwnProperty("value")?u7(H,E.type,K):E.hasOwnProperty("defaultValue")&&u7(H,E.type,x8(E.defaultValue)),E.checked==null&&E.defaultChecked!=null&&(H.defaultChecked=!!E.defaultChecked)}function uZ(H,E,K){if(E.hasOwnProperty("value")||E.hasOwnProperty("defaultValue")){var W=E.type;if(!(W!=="submit"&&W!=="reset"||E.value!==void 0&&E.value!==null))return;E=""+H._wrapperState.initialValue,K||E===H.value||(H.value=E),H.defaultValue=E}K=H.name,K!==""&&(H.name=""),H.defaultChecked=!!H._wrapperState.initialChecked,K!==""&&(H.name=K)}function u7(H,E,K){if(E!=="number"||_K(H.ownerDocument)!==H)K==null?H.defaultValue=""+H._wrapperState.initialValue:H.defaultValue!==""+K&&(H.defaultValue=""+K)}function H6(H,E,K,W){if(H=H.options,E){E={};for(var Q=0;Q<K.length;Q++)E["$"+K[Q]]=!0;for(K=0;K<H.length;K++)Q=E.hasOwnProperty("$"+H[K].value),H[K].selected!==Q&&(H[K].selected=Q),Q&&W&&(H[K].defaultSelected=!0)}else{K=""+x8(K),E=null;for(Q=0;Q<H.length;Q++){if(H[Q].value===K){H[Q].selected=!0,W&&(H[Q].defaultSelected=!0);return}E!==null||H[Q].disabled||(E=H[Q])}E!==null&&(E.selected=!0)}}function h7(H,E){if(E.dangerouslySetInnerHTML!=null)throw Error($(91));return N1({},E,{value:void 0,defaultValue:void 0,children:""+H._wrapperState.initialValue})}function hZ(H,E){var K=E.value;if(K==null){if(K=E.children,E=E.defaultValue,K!=null){if(E!=null)throw Error($(92));if(WE(K)){if(1<K.length)throw Error($(93));K=K[0]}E=K}E==null&&(E=""),K=E}H._wrapperState={initialValue:x8(K)}}function dF(H,E){var K=x8(E.value),W=x8(E.defaultValue);K!=null&&(K=""+K,K!==H.value&&(H.value=K),E.defaultValue==null&&H.defaultValue!==K&&(H.defaultValue=K)),W!=null&&(H.defaultValue=""+W)}function jZ(H){var E=H.textContent;E===H._wrapperState.initialValue&&E!==""&&E!==null&&(H.value=E)}function mF(H){switch(H){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function j7(H,E){return H==null||H==="http://www.w3.org/1999/xhtml"?mF(E):H==="http://www.w3.org/2000/svg"&&E==="foreignObject"?"http://www.w3.org/1999/xhtml":H}function RE(H,E){if(E){var K=H.firstChild;if(K&&K===H.lastChild&&K.nodeType===3){K.nodeValue=E;return}}H.textContent=E}function iF(H,E,K){return E==null||typeof E==="boolean"||E===""?"":K||typeof E!=="number"||E===0||JE.hasOwnProperty(H)&&JE[H]?(""+E).trim():E+"px"}function sF(H,E){H=H.style;for(var K in E)if(E.hasOwnProperty(K)){var W=K.indexOf("--")===0,Q=iF(K,E[K],W);K==="float"&&(K="cssFloat"),W?H.setProperty(K,Q):H[K]=Q}}function p7(H,E){if(E){if(WN[H]&&(E.children!=null||E.dangerouslySetInnerHTML!=null))throw Error($(137,H));if(E.dangerouslySetInnerHTML!=null){if(E.children!=null)throw Error($(60));if(typeof E.dangerouslySetInnerHTML!=="object"||!("__html"in E.dangerouslySetInnerHTML))throw Error($(61))}if(E.style!=null&&typeof E.style!=="object")throw Error($(62))}}function g7(H,E){if(H.indexOf("-")===-1)return typeof E.is==="string";switch(H){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function CQ(H){return H=H.target||H.srcElement||window,H.correspondingUseElement&&(H=H.correspondingUseElement),H.nodeType===3?H.parentNode:H}function pZ(H){if(H=gE(H)){if(typeof n7!=="function")throw Error($(280));var E=H.stateNode;E&&(E=CW(E),n7(H.stateNode,H.type,E))}}function oF(H){E6?K6?K6.push(H):K6=[H]:E6=H}function rF(){if(E6){var H=E6,E=K6;if(K6=E6=null,pZ(H),E)for(H=0;H<E.length;H++)pZ(E[H])}}function tF(H,E){return H(E)}function aF(){}function eF(H,E,K){if(Y7)return H(E,K);Y7=!0;try{return tF(H,E,K)}finally{if(Y7=!1,E6!==null||K6!==null)aF(),rF()}}function VE(H,E){var K=H.stateNode;if(K===null)return null;var W=CW(K);if(W===null)return null;K=W[E];H:switch(E){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(W=!W.disabled)||(H=H.type,W=!(H==="button"||H==="input"||H==="select"||H==="textarea")),H=!W;break H;default:H=!1}if(H)return null;if(K&&typeof K!=="function")throw Error($(231,E,typeof K));return K}function QN(H,E,K,W,Q,A,O,Z,F){var Y=Array.prototype.slice.call(arguments,3);try{E.apply(K,Y)}catch(k){this.onError(k)}}function ON(H,E,K,W,Q,A,O,Z,F){XE=!1,HW=null,QN.apply(AN,arguments)}function ZN(H,E,K,W,Q,A,O,Z,F){if(ON.apply(this,arguments),XE){if(XE){var Y=HW;XE=!1,HW=null}else throw Error($(198));EW||(EW=!0,d7=Y)}}function RH(H){var E=H,K=H;if(H.alternate)for(;E.return;)E=E.return;else{H=E;do E=H,(E.flags&4098)!==0&&(K=E.return),H=E.return;while(H)}return E.tag===3?K:null}function $F(H){if(H.tag===13){var E=H.memoizedState;if(E===null&&(H=H.alternate,H!==null&&(E=H.memoizedState)),E!==null)return E.dehydrated}return null}function gZ(H){if(RH(H)!==H)throw Error($(188))}function FN(H){var E=H.alternate;if(!E){if(E=RH(H),E===null)throw Error($(188));return E!==H?null:H}for(var K=H,W=E;;){var Q=K.return;if(Q===null)break;var A=Q.alternate;if(A===null){if(W=Q.return,W!==null){K=W;continue}break}if(Q.child===A.child){for(A=Q.child;A;){if(A===K)return gZ(Q),H;if(A===W)return gZ(Q),E;A=A.sibling}throw Error($(188))}if(K.return!==W.return)K=Q,W=A;else{for(var O=!1,Z=Q.child;Z;){if(Z===K){O=!0,K=Q,W=A;break}if(Z===W){O=!0,W=Q,K=A;break}Z=Z.sibling}if(!O){for(Z=A.child;Z;){if(Z===K){O=!0,K=A,W=Q;break}if(Z===W){O=!0,W=A,K=Q;break}Z=Z.sibling}if(!O)throw Error($(189))}}if(K.alternate!==W)throw Error($(190))}if(K.tag!==3)throw Error($(188));return K.stateNode.current===K?H:E}function _F(H){return H=FN(H),H!==null?HY(H):null}function HY(H){if(H.tag===5||H.tag===6)return H;for(H=H.child;H!==null;){var E=HY(H);if(E!==null)return E;H=H.sibling}return null}function DN(H){if(a9&&typeof a9.onCommitFiberRoot==="function")try{a9.onCommitFiberRoot(GW,H,void 0,(H.current.flags&128)===128)}catch(E){}}function UN(H){return H>>>=0,H===0?32:31-(wN(H)/NN|0)|0}function QE(H){switch(H&-H){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return H&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return H&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return H}}function WW(H,E){var K=H.pendingLanes;if(K===0)return 0;var W=0,Q=H.suspendedLanes,A=H.pingedLanes,O=K&268435455;if(O!==0){var Z=O&~Q;Z!==0?W=QE(Z):(A&=O,A!==0&&(W=QE(A)))}else O=K&~Q,O!==0?W=QE(O):A!==0&&(W=QE(A));if(W===0)return 0;if(E!==0&&E!==W&&(E&Q)===0&&(Q=W&-W,A=E&-E,Q>=A||Q===16&&(A&4194240)!==0))return E;if((W&4)!==0&&(W|=K&16),E=H.entangledLanes,E!==0)for(H=H.entanglements,E&=W;0<E;)K=31-p9(E),Q=1<<K,W|=H[K],E&=~Q;return W}function fN(H,E){switch(H){case 1:case 2:case 4:return E+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return E+5000;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LN(H,E){for(var{suspendedLanes:K,pingedLanes:W,expirationTimes:Q,pendingLanes:A}=H;0<A;){var O=31-p9(A),Z=1<<O,F=Q[O];if(F===-1){if((Z&K)===0||(Z&W)!==0)Q[O]=fN(Z,E)}else F<=E&&(H.expiredLanes|=Z);A&=~Z}}function m7(H){return H=H.pendingLanes&-1073741825,H!==0?H:H&1073741824?1073741824:0}function QY(){var H=lK;return lK<<=1,(lK&4194240)===0&&(lK=64),H}function J7(H){for(var E=[],K=0;31>K;K++)E.push(H);return E}function jE(H,E,K){H.pendingLanes|=E,E!==536870912&&(H.suspendedLanes=0,H.pingedLanes=0),H=H.eventTimes,E=31-p9(E),H[E]=K}function MN(H,E){var K=H.pendingLanes&~E;H.pendingLanes=E,H.suspendedLanes=0,H.pingedLanes=0,H.expiredLanes&=E,H.mutableReadLanes&=E,H.entangledLanes&=E,E=H.entanglements;var W=H.eventTimes;for(H=H.expirationTimes;0<K;){var Q=31-p9(K),A=1<<Q;E[Q]=0,W[Q]=-1,H[Q]=-1,K&=~A}}function IQ(H,E){var K=H.entangledLanes|=E;for(H=H.entanglements;K;){var W=31-p9(K),Q=1<<W;Q&E|H[W]&E&&(H[W]|=E),K&=~Q}}function AY(H){return H&=-H,1<H?4<H?(H&268435455)!==0?16:536870912:4:1}function nZ(H,E){switch(H){case"focusin":case"focusout":T8=null;break;case"dragenter":case"dragleave":v8=null;break;case"mouseover":case"mouseout":y8=null;break;case"pointerover":case"pointerout":PE.delete(E.pointerId);break;case"gotpointercapture":case"lostpointercapture":GE.delete(E.pointerId)}}function a6(H,E,K,W,Q,A){if(H===null||H.nativeEvent!==A)return H={blockedOn:E,domEventName:K,eventSystemFlags:W,nativeEvent:A,targetContainers:[Q]},E!==null&&(E=gE(E),E!==null&&lQ(E)),H;return H.eventSystemFlags|=W,E=H.targetContainers,Q!==null&&E.indexOf(Q)===-1&&E.push(Q),H}function VN(H,E,K,W,Q){switch(E){case"focusin":return T8=a6(T8,H,E,K,W,Q),!0;case"dragenter":return v8=a6(v8,H,E,K,W,Q),!0;case"mouseover":return y8=a6(y8,H,E,K,W,Q),!0;case"pointerover":var A=Q.pointerId;return PE.set(A,a6(PE.get(A)||null,H,E,K,W,Q)),!0;case"gotpointercapture":return A=Q.pointerId,GE.set(A,a6(GE.get(A)||null,H,E,K,W,Q)),!0}return!1}function JY(H){var E=YH(H.target);if(E!==null){var K=RH(E);if(K!==null){if(E=K.tag,E===13){if(E=$F(K),E!==null){H.blockedOn=E,YY(H.priority,function(){ZY(K)});return}}else if(E===3&&K.stateNode.current.memoizedState.isDehydrated){H.blockedOn=K.tag===3?K.stateNode.containerInfo:null;return}}}H.blockedOn=null}function dK(H){if(H.blockedOn!==null)return!1;for(var E=H.targetContainers;0<E.length;){var K=i7(H.domEventName,H.eventSystemFlags,E[0],H.nativeEvent);if(K===null){K=H.nativeEvent;var W=new K.constructor(K.type,K);x7=W,K.target.dispatchEvent(W),x7=null}else return E=gE(K),E!==null&&lQ(E),H.blockedOn=K,!1;E.shift()}return!0}function bZ(H,E,K){dK(H)&&K.delete(E)}function PN(){c7=!1,T8!==null&&dK(T8)&&(T8=null),v8!==null&&dK(v8)&&(v8=null),y8!==null&&dK(y8)&&(y8=null),PE.forEach(bZ),GE.forEach(bZ)}function e6(H,E){H.blockedOn===E&&(H.blockedOn=null,c7||(c7=!0,X1.unstable_scheduleCallback(X1.unstable_NormalPriority,PN)))}function zE(H){function E(Q){return e6(Q,H)}if(0<vK.length){e6(vK[0],H);for(var K=1;K<vK.length;K++){var W=vK[K];W.blockedOn===H&&(W.blockedOn=null)}}T8!==null&&e6(T8,H),v8!==null&&e6(v8,H),y8!==null&&e6(y8,H),PE.forEach(E),GE.forEach(E);for(K=0;K<C8.length;K++)W=C8[K],W.blockedOn===H&&(W.blockedOn=null);for(;0<C8.length&&(K=C8[0],K.blockedOn===null);)JY(K),K.blockedOn===null&&C8.shift()}function GN(H,E,K,W){var Q=_0,A=W6.transition;W6.transition=null;try{_0=1,TQ(H,E,K,W)}finally{_0=Q,W6.transition=A}}function zN(H,E,K,W){var Q=_0,A=W6.transition;W6.transition=null;try{_0=4,TQ(H,E,K,W)}finally{_0=Q,W6.transition=A}}function TQ(H,E,K,W){if(QW){var Q=i7(H,E,K,W);if(Q===null)U7(H,E,W,AW,K),nZ(H,W);else if(VN(Q,H,E,K,W))W.stopPropagation();else if(nZ(H,W),E&4&&-1<RN.indexOf(H)){for(;Q!==null;){var A=gE(Q);if(A!==null&&OY(A),A=i7(H,E,K,W),A===null&&U7(H,E,W,AW,K),A===Q)break;Q=A}Q!==null&&W.stopPropagation()}else U7(H,E,W,null,K)}}function i7(H,E,K,W){if(AW=null,H=CQ(W),H=YH(H),H!==null)if(E=RH(H),E===null)H=null;else if(K=E.tag,K===13){if(H=$F(E),H!==null)return H;H=null}else if(K===3){if(E.stateNode.current.memoizedState.isDehydrated)return E.tag===3?E.stateNode.containerInfo:null;H=null}else E!==H&&(H=null);return AW=H,null}function XY(H){switch(H){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XN()){case SQ:return 1;case KY:return 4;case KW:case kN:return 16;case WY:return 536870912;default:return 16}default:return 16}}function kY(){if(mK)return mK;var H,E=vQ,K=E.length,W,Q="value"in I8?I8.value:I8.textContent,A=Q.length;for(H=0;H<K&&E[H]===Q[H];H++);var O=K-H;for(W=1;W<=O&&E[K-W]===Q[A-W];W++);return mK=Q.slice(H,1<W?1-W:void 0)}function cK(H){var E=H.keyCode;return"charCode"in H?(H=H.charCode,H===0&&E===13&&(H=13)):H=E,H===10&&(H=13),32<=H||H===13?H:0}function yK(){return!0}function dZ(){return!1}function w9(H){function E(K,W,Q,A,O){this._reactName=K,this._targetInst=Q,this.type=W,this.nativeEvent=A,this.target=O,this.currentTarget=null;for(var Z in H)H.hasOwnProperty(Z)&&(K=H[Z],this[Z]=K?K(A):A[Z]);return this.isDefaultPrevented=(A.defaultPrevented!=null?A.defaultPrevented:A.returnValue===!1)?yK:dZ,this.isPropagationStopped=dZ,this}return N1(E.prototype,{preventDefault:function(){this.defaultPrevented=!0;var K=this.nativeEvent;K&&(K.preventDefault?K.preventDefault():typeof K.returnValue!=="unknown"&&(K.returnValue=!1),this.isDefaultPrevented=yK)},stopPropagation:function(){var K=this.nativeEvent;K&&(K.stopPropagation?K.stopPropagation():typeof K.cancelBubble!=="unknown"&&(K.cancelBubble=!0),this.isPropagationStopped=yK)},persist:function(){},isPersistent:yK}),E}function pN(H){var E=this.nativeEvent;return E.getModifierState?E.getModifierState(H):(H=jN[H])?!!E[H]:!1}function uQ(){return pN}function wY(H,E){switch(H){case"keyup":return oN.indexOf(E.keyCode)!==-1;case"keydown":return E.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function NY(H){return H=H.detail,typeof H==="object"&&"data"in H?H.data:null}function tN(H,E){switch(H){case"compositionend":return NY(E);case"keypress":if(E.which!==32)return null;return oZ=!0,sZ;case"textInput":return H=E.data,H===sZ&&oZ?null:H;default:return null}}function aN(H,E){if(cH)return H==="compositionend"||!hQ&&wY(H,E)?(H=kY(),mK=vQ=I8=null,cH=!1,H):null;switch(H){case"paste":return null;case"keypress":if(!(E.ctrlKey||E.altKey||E.metaKey)||E.ctrlKey&&E.altKey){if(E.char&&1<E.char.length)return E.char;if(E.which)return String.fromCharCode(E.which)}return null;case"compositionend":return DY&&E.locale!=="ko"?null:E.data;default:return null}}function rZ(H){var E=H&&H.nodeName&&H.nodeName.toLowerCase();return E==="input"?!!eN[H.type]:E==="textarea"?!0:!1}function UY(H,E,K,W){oF(W),E=OW(E,"onChange"),0<E.length&&(K=new yQ("onChange","change",null,K,W),H.push({event:K,listeners:E}))}function $N(H){CY(H,0)}function BW(H){var E=oH(H);if(nF(E))return H}function _N(H,E){if(H==="change")return E}function tZ(){DE&&(DE.detachEvent("onpropertychange",LY),BE=DE=null)}function LY(H){if(H.propertyName==="value"&&BW(BE)){var E=[];UY(E,BE,H,CQ(H)),eF($N,E)}}function HU(H,E,K){H==="focusin"?(tZ(),DE=E,BE=K,DE.attachEvent("onpropertychange",LY)):H==="focusout"&&tZ()}function EU(H){if(H==="selectionchange"||H==="keyup"||H==="keydown")return BW(BE)}function KU(H,E){if(H==="click")return BW(E)}function WU(H,E){if(H==="input"||H==="change")return BW(E)}function QU(H,E){return H===E&&(H!==0||1/H===1/E)||H!==H&&E!==E}function qE(H,E){if(x9(H,E))return!0;if(typeof H!=="object"||H===null||typeof E!=="object"||E===null)return!1;var K=Object.keys(H),W=Object.keys(E);if(K.length!==W.length)return!1;for(W=0;W<K.length;W++){var Q=K[W];if(!C7.call(E,Q)||!x9(H[Q],E[Q]))return!1}return!0}function aZ(H){for(;H&&H.firstChild;)H=H.firstChild;return H}function eZ(H,E){var K=aZ(H);H=0;for(var W;K;){if(K.nodeType===3){if(W=H+K.textContent.length,H<=E&&W>=E)return{node:K,offset:E-H};H=W}H:{for(;K;){if(K.nextSibling){K=K.nextSibling;break H}K=K.parentNode}K=void 0}K=aZ(K)}}function MY(H,E){return H&&E?H===E?!0:H&&H.nodeType===3?!1:E&&E.nodeType===3?MY(H,E.parentNode):("contains"in H)?H.contains(E):H.compareDocumentPosition?!!(H.compareDocumentPosition(E)&16):!1:!1}function RY(){for(var H=window,E=_K();E instanceof H.HTMLIFrameElement;){try{var K=typeof E.contentWindow.location.href==="string"}catch(W){K=!1}if(K)H=E.contentWindow;else break;E=_K(H.document)}return E}function jQ(H){var E=H&&H.nodeName&&H.nodeName.toLowerCase();return E&&(E==="input"&&(H.type==="text"||H.type==="search"||H.type==="tel"||H.type==="url"||H.type==="password")||E==="textarea"||H.contentEditable==="true")}function AU(H){var E=RY(),K=H.focusedElem,W=H.selectionRange;if(E!==K&&K&&K.ownerDocument&&MY(K.ownerDocument.documentElement,K)){if(W!==null&&jQ(K)){if(E=W.start,H=W.end,H===void 0&&(H=E),"selectionStart"in K)K.selectionStart=E,K.selectionEnd=Math.min(H,K.value.length);else if(H=(E=K.ownerDocument||document)&&E.defaultView||window,H.getSelection){H=H.getSelection();var Q=K.textContent.length,A=Math.min(W.start,Q);W=W.end===void 0?A:Math.min(W.end,Q),!H.extend&&A>W&&(Q=W,W=A,A=Q),Q=eZ(K,A);var O=eZ(K,W);Q&&O&&(H.rangeCount!==1||H.anchorNode!==Q.node||H.anchorOffset!==Q.offset||H.focusNode!==O.node||H.focusOffset!==O.offset)&&(E=E.createRange(),E.setStart(Q.node,Q.offset),H.removeAllRanges(),A>W?(H.addRange(E),H.extend(O.node,O.offset)):(E.setEnd(O.node,O.offset),H.addRange(E)))}}E=[];for(H=K;H=H.parentNode;)H.nodeType===1&&E.push({element:H,left:H.scrollLeft,top:H.scrollTop});typeof K.focus==="function"&&K.focus();for(K=0;K<E.length;K++)H=E[K],H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}function $Z(H,E,K){var W=K.window===K?K.document:K.nodeType===9?K:K.ownerDocument;o7||iH==null||iH!==_K(W)||(W=iH,("selectionStart"in W)&&jQ(W)?W={start:W.selectionStart,end:W.selectionEnd}:(W=(W.ownerDocument&&W.ownerDocument.defaultView||window).getSelection(),W={anchorNode:W.anchorNode,anchorOffset:W.anchorOffset,focusNode:W.focusNode,focusOffset:W.focusOffset}),wE&&qE(wE,W)||(wE=W,W=OW(s7,"onSelect"),0<W.length&&(E=new yQ("onSelect","select",null,E,K),H.push({event:E,listeners:W}),E.target=iH)))}function uK(H,E){var K={};return K[H.toLowerCase()]=E.toLowerCase(),K["Webkit"+H]="webkit"+E,K["Moz"+H]="moz"+E,K}function qW(H){if(w7[H])return w7[H];if(!sH[H])return H;var E=sH[H],K;for(K in E)if(E.hasOwnProperty(K)&&K in VY)return w7[H]=E[K];return H}function b8(H,E){qY.set(H,E),MH(E,[H])}function HF(H,E,K){var W=H.type||"unknown-event";H.currentTarget=K,ZN(W,E,void 0,H),H.currentTarget=null}function CY(H,E){E=(E&4)!==0;for(var K=0;K<H.length;K++){var W=H[K],Q=W.event;W=W.listeners;H:{var A=void 0;if(E)for(var O=W.length-1;0<=O;O--){var Z=W[O],F=Z.instance,Y=Z.currentTarget;if(Z=Z.listener,F!==A&&Q.isPropagationStopped())break H;HF(Q,Z,Y),A=F}else for(O=0;O<W.length;O++){if(Z=W[O],F=Z.instance,Y=Z.currentTarget,Z=Z.listener,F!==A&&Q.isPropagationStopped())break H;HF(Q,Z,Y),A=F}}}if(EW)throw H=d7,EW=!1,d7=null,H}function O1(H,E){var K=E[HQ];K===void 0&&(K=E[HQ]=new Set);var W=H+"__bubble";K.has(W)||(SY(E,H,2,!1),K.add(W))}function N7(H,E,K){var W=0;E&&(W|=4),SY(K,H,W,E)}function CE(H){if(!H[hK]){H[hK]=!0,hF.forEach(function(K){K!=="selectionchange"&&(ZU.has(K)||N7(K,!1,H),N7(K,!0,H))});var E=H.nodeType===9?H:H.ownerDocument;E===null||E[hK]||(E[hK]=!0,N7("selectionchange",!1,E))}}function SY(H,E,K,W){switch(XY(E)){case 1:var Q=GN;break;case 4:Q=zN;break;default:Q=TQ}K=Q.bind(null,E,K,H),Q=void 0,!b7||E!=="touchstart"&&E!=="touchmove"&&E!=="wheel"||(Q=!0),W?Q!==void 0?H.addEventListener(E,K,{capture:!0,passive:Q}):H.addEventListener(E,K,!0):Q!==void 0?H.addEventListener(E,K,{passive:Q}):H.addEventListener(E,K,!1)}function U7(H,E,K,W,Q){var A=W;if((E&1)===0&&(E&2)===0&&W!==null)H:for(;;){if(W===null)return;var O=W.tag;if(O===3||O===4){var Z=W.stateNode.containerInfo;if(Z===Q||Z.nodeType===8&&Z.parentNode===Q)break;if(O===4)for(O=W.return;O!==null;){var F=O.tag;if(F===3||F===4){if(F=O.stateNode.containerInfo,F===Q||F.nodeType===8&&F.parentNode===Q)return}O=O.return}for(;Z!==null;){if(O=YH(Z),O===null)return;if(F=O.tag,F===5||F===6){W=A=O;continue H}Z=Z.parentNode}}W=W.return}eF(function(){var Y=A,k=CQ(K),X=[];H:{var D=qY.get(H);if(D!==void 0){var U=yQ,M=H;switch(H){case"keypress":if(cK(K)===0)break H;case"keydown":case"keyup":U=xN;break;case"focusin":M="focus",U=D7;break;case"focusout":M="blur",U=D7;break;case"beforeblur":case"afterblur":U=D7;break;case"click":if(K.button===2)break H;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=mZ;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=CN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=dN;break;case PY:case GY:case zY:U=lN;break;case BY:U=cN;break;case"scroll":U=BN;break;case"wheel":U=sN;break;case"copy":case"cut":case"paste":U=vN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=iZ}var L=(E&4)!==0,w=!L&&H==="scroll",J=L?D!==null?D+"Capture":null:D;L=[];for(var f=Y,N;f!==null;){N=f;var z=N.stateNode;if(N.tag===5&&z!==null&&(N=z,J!==null&&(z=VE(f,J),z!=null&&L.push(SE(f,z,N)))),w)break;f=f.return}0<L.length&&(D=new U(D,M,null,K,k),X.push({event:D,listeners:L}))}}if((E&7)===0){H:{if(D=H==="mouseover"||H==="pointerover",U=H==="mouseout"||H==="pointerout",D&&K!==x7&&(M=K.relatedTarget||K.fromElement)&&(YH(M)||M[J8]))break H;if(U||D){if(D=k.window===k?k:(D=k.ownerDocument)?D.defaultView||D.parentWindow:window,U){if(M=K.relatedTarget||K.toElement,U=Y,M=M?YH(M):null,M!==null&&(w=RH(M),M!==w||M.tag!==5&&M.tag!==6))M=null}else U=null,M=Y;if(U!==M){if(L=mZ,z="onMouseLeave",J="onMouseEnter",f="mouse",H==="pointerout"||H==="pointerover")L=iZ,z="onPointerLeave",J="onPointerEnter",f="pointer";if(w=U==null?D:oH(U),N=M==null?D:oH(M),D=new L(z,f+"leave",U,K,k),D.target=w,D.relatedTarget=N,z=null,YH(k)===Y&&(L=new L(J,f+"enter",M,K,k),L.target=N,L.relatedTarget=w,z=L),w=z,U&&M)E:{L=U,J=M,f=0;for(N=L;N;N=nH(N))f++;N=0;for(z=J;z;z=nH(z))N++;for(;0<f-N;)L=nH(L),f--;for(;0<N-f;)J=nH(J),N--;for(;f--;){if(L===J||J!==null&&L===J.alternate)break E;L=nH(L),J=nH(J)}L=null}else L=null;U!==null&&EF(X,D,U,L,!1),M!==null&&w!==null&&EF(X,w,M,L,!0)}}}H:{if(D=Y?oH(Y):window,U=D.nodeName&&D.nodeName.toLowerCase(),U==="select"||U==="input"&&D.type==="file")var S=_N;else if(rZ(D))if(fY)S=WU;else{S=EU;var B=HU}else(U=D.nodeName)&&U.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(S=KU);if(S&&(S=S(H,Y))){UY(X,S,K,k);break H}B&&B(H,D,Y),H==="focusout"&&(B=D._wrapperState)&&B.controlled&&D.type==="number"&&u7(D,"number",D.value)}switch(B=Y?oH(Y):window,H){case"focusin":if(rZ(B)||B.contentEditable==="true")iH=B,s7=Y,wE=null;break;case"focusout":wE=s7=iH=null;break;case"mousedown":o7=!0;break;case"contextmenu":case"mouseup":case"dragend":o7=!1,$Z(X,K,k);break;case"selectionchange":if(OU)break;case"keydown":case"keyup":$Z(X,K,k)}var q;if(hQ)H:{switch(H){case"compositionstart":var u="onCompositionStart";break H;case"compositionend":u="onCompositionEnd";break H;case"compositionupdate":u="onCompositionUpdate";break H}u=void 0}else cH?wY(H,K)&&(u="onCompositionEnd"):H==="keydown"&&K.keyCode===229&&(u="onCompositionStart");if(u&&(DY&&K.locale!=="ko"&&(cH||u!=="onCompositionStart"?u==="onCompositionEnd"&&cH&&(q=kY()):(I8=k,vQ=("value"in I8)?I8.value:I8.textContent,cH=!0)),B=OW(Y,u),0<B.length&&(u=new cZ(u,H,null,K,k),X.push({event:u,listeners:B}),q?u.data=q:(q=NY(K),q!==null&&(u.data=q)))),q=rN?tN(H,K):aN(H,K))Y=OW(Y,"onBeforeInput"),0<Y.length&&(k=new cZ("onBeforeInput","beforeinput",null,K,k),X.push({event:k,listeners:Y}),k.data=q)}CY(X,E)})}function SE(H,E,K){return{instance:H,listener:E,currentTarget:K}}function OW(H,E){for(var K=E+"Capture",W=[];H!==null;){var Q=H,A=Q.stateNode;Q.tag===5&&A!==null&&(Q=A,A=VE(H,K),A!=null&&W.unshift(SE(H,A,Q)),A=VE(H,E),A!=null&&W.push(SE(H,A,Q))),H=H.return}return W}function nH(H){if(H===null)return null;do H=H.return;while(H&&H.tag!==5);return H?H:null}function EF(H,E,K,W,Q){for(var A=E._reactName,O=[];K!==null&&K!==W;){var Z=K,F=Z.alternate,Y=Z.stateNode;if(F!==null&&F===W)break;Z.tag===5&&Y!==null&&(Z=Y,Q?(F=VE(K,A),F!=null&&O.unshift(SE(K,F,Z))):Q||(F=VE(K,A),F!=null&&O.push(SE(K,F,Z)))),K=K.return}O.length!==0&&H.push({event:E,listeners:O})}function KF(H){return(typeof H==="string"?H:""+H).replace(FU,`
`).replace(YU,"")}function jK(H,E,K){if(E=KF(E),KF(H)!==E&&K)throw Error($(425))}function ZW(){}function $7(H,E){return H==="textarea"||H==="noscript"||typeof E.children==="string"||typeof E.children==="number"||typeof E.dangerouslySetInnerHTML==="object"&&E.dangerouslySetInnerHTML!==null&&E.dangerouslySetInnerHTML.__html!=null}function kU(H){setTimeout(function(){throw H})}function f7(H,E){var K=E,W=0;do{var Q=K.nextSibling;if(H.removeChild(K),Q&&Q.nodeType===8)if(K=Q.data,K==="/$"){if(W===0){H.removeChild(Q),zE(E);return}W--}else K!=="$"&&K!=="$?"&&K!=="$!"||W++;K=Q}while(K);zE(E)}function u8(H){for(;H!=null;H=H.nextSibling){var E=H.nodeType;if(E===1||E===3)break;if(E===8){if(E=H.data,E==="$"||E==="$!"||E==="$?")break;if(E==="/$")return null}}return H}function QF(H){H=H.previousSibling;for(var E=0;H;){if(H.nodeType===8){var K=H.data;if(K==="$"||K==="$!"||K==="$?"){if(E===0)return H;E--}else K==="/$"&&E++}H=H.previousSibling}return null}function YH(H){var E=H[t9];if(E)return E;for(var K=H.parentNode;K;){if(E=K[J8]||K[t9]){if(K=E.alternate,E.child!==null||K!==null&&K.child!==null)for(H=QF(H);H!==null;){if(K=H[t9])return K;H=QF(H)}return E}H=K,K=H.parentNode}return null}function gE(H){return H=H[t9]||H[J8],!H||H.tag!==5&&H.tag!==6&&H.tag!==13&&H.tag!==3?null:H}function oH(H){if(H.tag===5||H.tag===6)return H.stateNode;throw Error($(33))}function CW(H){return H[IE]||null}function d8(H){return{current:H}}function Z1(H){0>rH||(H.current=EQ[rH],EQ[rH]=null,rH--)}function Q1(H,E){rH++,EQ[rH]=H.current,H.current=E}function Z6(H,E){var K=H.type.contextTypes;if(!K)return n8;var W=H.stateNode;if(W&&W.__reactInternalMemoizedUnmaskedChildContext===E)return W.__reactInternalMemoizedMaskedChildContext;var Q={},A;for(A in K)Q[A]=E[A];return W&&(H=H.stateNode,H.__reactInternalMemoizedUnmaskedChildContext=E,H.__reactInternalMemoizedMaskedChildContext=Q),Q}function O9(H){return H=H.childContextTypes,H!==null&&H!==void 0}function FW(){Z1(A9),Z1(m1)}function AF(H,E,K){if(m1.current!==n8)throw Error($(168));Q1(m1,E),Q1(A9,K)}function IY(H,E,K){var W=H.stateNode;if(E=E.childContextTypes,typeof W.getChildContext!=="function")return K;W=W.getChildContext();for(var Q in W)if(!(Q in E))throw Error($(108,HN(H)||"Unknown",Q));return N1({},K,W)}function YW(H){return H=(H=H.stateNode)&&H.__reactInternalMemoizedMergedChildContext||n8,wH=m1.current,Q1(m1,H),Q1(A9,A9.current),!0}function OF(H,E,K){var W=H.stateNode;if(!W)throw Error($(169));K?(H=IY(H,E,wH),W.__reactInternalMemoizedMergedChildContext=H,Z1(A9),Z1(m1),Q1(m1,H)):Z1(A9),Q1(A9,K)}function lY(H){A8===null?A8=[H]:A8.push(H)}function NU(H){SW=!0,lY(H)}function m8(){if(!L7&&A8!==null){L7=!0;var H=0,E=_0;try{var K=A8;for(_0=1;H<K.length;H++){var W=K[H];do W=W(!0);while(W!==null)}A8=null,SW=!1}catch(Q){throw A8!==null&&(A8=A8.slice(H+1)),EY(SQ,m8),Q}finally{_0=E,L7=!1}}return null}function ZH(H,E){tH[aH++]=XW,tH[aH++]=JW,JW=H,XW=E}function TY(H,E,K){G9[z9++]=O8,G9[z9++]=Z8,G9[z9++]=NH,NH=H;var W=O8;H=Z8;var Q=32-p9(W)-1;W&=~(1<<Q),K+=1;var A=32-p9(E)+Q;if(30<A){var O=Q-Q%5;A=(W&(1<<O)-1).toString(32),W>>=O,Q-=O,O8=1<<32-p9(E)+Q|K<<Q|W,Z8=A+H}else O8=1<<A|K<<Q|W,Z8=H}function pQ(H){H.return!==null&&(ZH(H,1),TY(H,1,0))}function gQ(H){for(;H===JW;)JW=tH[--aH],tH[aH]=null,XW=tH[--aH],tH[aH]=null;for(;H===NH;)NH=G9[--z9],G9[z9]=null,Z8=G9[--z9],G9[z9]=null,O8=G9[--z9],G9[z9]=null}function vY(H,E){var K=B9(5,null,null,0);K.elementType="DELETED",K.stateNode=E,K.return=H,E=H.deletions,E===null?(H.deletions=[K],H.flags|=16):E.push(K)}function ZF(H,E){switch(H.tag){case 5:var K=H.type;return E=E.nodeType!==1||K.toLowerCase()!==E.nodeName.toLowerCase()?null:E,E!==null?(H.stateNode=E,D9=H,k9=u8(E.firstChild),!0):!1;case 6:return E=H.pendingProps===""||E.nodeType!==3?null:E,E!==null?(H.stateNode=E,D9=H,k9=null,!0):!1;case 13:return E=E.nodeType!==8?null:E,E!==null?(K=NH!==null?{id:O8,overflow:Z8}:null,H.memoizedState={dehydrated:E,treeContext:K,retryLane:1073741824},K=B9(18,null,null,0),K.stateNode=E,K.return=H,H.child=K,D9=H,k9=null,!0):!1;default:return!1}}function KQ(H){return(H.mode&1)!==0&&(H.flags&128)===0}function WQ(H){if(J1){var E=k9;if(E){var K=E;if(!ZF(H,E)){if(KQ(H))throw Error($(418));E=u8(K.nextSibling);var W=D9;E&&ZF(H,E)?vY(W,K):(H.flags=H.flags&-4097|2,J1=!1,D9=H)}}else{if(KQ(H))throw Error($(418));H.flags=H.flags&-4097|2,J1=!1,D9=H}}}function FF(H){for(H=H.return;H!==null&&H.tag!==5&&H.tag!==3&&H.tag!==13;)H=H.return;D9=H}function pK(H){if(H!==D9)return!1;if(!J1)return FF(H),J1=!0,!1;var E;if((E=H.tag!==3)&&!(E=H.tag!==5)&&(E=H.type,E=E!=="head"&&E!=="body"&&!$7(H.type,H.memoizedProps)),E&&(E=k9)){if(KQ(H))throw yY(),Error($(418));for(;E;)vY(H,E),E=u8(E.nextSibling)}if(FF(H),H.tag===13){if(H=H.memoizedState,H=H!==null?H.dehydrated:null,!H)throw Error($(317));H:{H=H.nextSibling;for(E=0;H;){if(H.nodeType===8){var K=H.data;if(K==="/$"){if(E===0){k9=u8(H.nextSibling);break H}E--}else K!=="$"&&K!=="$!"&&K!=="$?"||E++}H=H.nextSibling}k9=null}}else k9=D9?u8(H.stateNode.nextSibling):null;return!0}function yY(){for(var H=k9;H;)H=u8(H.nextSibling)}function F6(){k9=D9=null,J1=!1}function xQ(H){j9===null?j9=[H]:j9.push(H)}function _6(H,E,K){if(H=K.ref,H!==null&&typeof H!=="function"&&typeof H!=="object"){if(K._owner){if(K=K._owner,K){if(K.tag!==1)throw Error($(309));var W=K.stateNode}if(!W)throw Error($(147,H));var Q=W,A=""+H;if(E!==null&&E.ref!==null&&typeof E.ref==="function"&&E.ref._stringRef===A)return E.ref;return E=function(O){var Z=Q.refs;O===null?delete Z[A]:Z[A]=O},E._stringRef=A,E}if(typeof H!=="string")throw Error($(284));if(!K._owner)throw Error($(290,H))}return H}function gK(H,E){throw H=Object.prototype.toString.call(E),Error($(31,H==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":H))}function YF(H){var E=H._init;return E(H._payload)}function uY(H){function E(J,f){if(H){var N=J.deletions;N===null?(J.deletions=[f],J.flags|=16):N.push(f)}}function K(J,f){if(!H)return null;for(;f!==null;)E(J,f),f=f.sibling;return null}function W(J,f){for(J=new Map;f!==null;)f.key!==null?J.set(f.key,f):J.set(f.index,f),f=f.sibling;return J}function Q(J,f){return J=g8(J,f),J.index=0,J.sibling=null,J}function A(J,f,N){if(J.index=N,!H)return J.flags|=1048576,f;if(N=J.alternate,N!==null)return N=N.index,N<f?(J.flags|=2,f):N;return J.flags|=2,f}function O(J){return H&&J.alternate===null&&(J.flags|=2),J}function Z(J,f,N,z){if(f===null||f.tag!==6)return f=B7(N,J.mode,z),f.return=J,f;return f=Q(f,N),f.return=J,f}function F(J,f,N,z){var S=N.type;if(S===mH)return k(J,f,N.props.children,z,N.key);if(f!==null&&(f.elementType===S||typeof S==="object"&&S!==null&&S.$$typeof===B8&&YF(S)===f.type))return z=Q(f,N.props),z.ref=_6(J,f,N),z.return=J,z;return z=$K(N.type,N.key,N.props,null,J.mode,z),z.ref=_6(J,f,N),z.return=J,z}function Y(J,f,N,z){if(f===null||f.tag!==4||f.stateNode.containerInfo!==N.containerInfo||f.stateNode.implementation!==N.implementation)return f=q7(N,J.mode,z),f.return=J,f;return f=Q(f,N.children||[]),f.return=J,f}function k(J,f,N,z,S){if(f===null||f.tag!==7)return f=DH(N,J.mode,z,S),f.return=J,f;return f=Q(f,N),f.return=J,f}function X(J,f,N){if(typeof f==="string"&&f!==""||typeof f==="number")return f=B7(""+f,J.mode,N),f.return=J,f;if(typeof f==="object"&&f!==null){switch(f.$$typeof){case CK:return N=$K(f.type,f.key,f.props,null,J.mode,N),N.ref=_6(J,null,f),N.return=J,N;case dH:return f=q7(f,J.mode,N),f.return=J,f;case B8:var z=f._init;return X(J,z(f._payload),N)}if(WE(f)||t6(f))return f=DH(f,J.mode,N,null),f.return=J,f;gK(J,f)}return null}function D(J,f,N,z){var S=f!==null?f.key:null;if(typeof N==="string"&&N!==""||typeof N==="number")return S!==null?null:Z(J,f,""+N,z);if(typeof N==="object"&&N!==null){switch(N.$$typeof){case CK:return N.key===S?F(J,f,N,z):null;case dH:return N.key===S?Y(J,f,N,z):null;case B8:return S=N._init,D(J,f,S(N._payload),z)}if(WE(N)||t6(N))return S!==null?null:k(J,f,N,z,null);gK(J,N)}return null}function U(J,f,N,z,S){if(typeof z==="string"&&z!==""||typeof z==="number")return J=J.get(N)||null,Z(f,J,""+z,S);if(typeof z==="object"&&z!==null){switch(z.$$typeof){case CK:return J=J.get(z.key===null?N:z.key)||null,F(f,J,z,S);case dH:return J=J.get(z.key===null?N:z.key)||null,Y(f,J,z,S);case B8:var B=z._init;return U(J,f,N,B(z._payload),S)}if(WE(z)||t6(z))return J=J.get(N)||null,k(f,J,z,S,null);gK(f,z)}return null}function M(J,f,N,z){for(var S=null,B=null,q=f,u=f=0,G=null;q!==null&&u<N.length;u++){q.index>u?(G=q,q=null):G=q.sibling;var P=D(J,q,N[u],z);if(P===null){q===null&&(q=G);break}H&&q&&P.alternate===null&&E(J,q),f=A(P,f,u),B===null?S=P:B.sibling=P,B=P,q=G}if(u===N.length)return K(J,q),J1&&ZH(J,u),S;if(q===null){for(;u<N.length;u++)q=X(J,N[u],z),q!==null&&(f=A(q,f,u),B===null?S=q:B.sibling=q,B=q);return J1&&ZH(J,u),S}for(q=W(J,q);u<N.length;u++)G=U(q,J,u,N[u],z),G!==null&&(H&&G.alternate!==null&&q.delete(G.key===null?u:G.key),f=A(G,f,u),B===null?S=G:B.sibling=G,B=G);return H&&q.forEach(function(l){return E(J,l)}),J1&&ZH(J,u),S}function L(J,f,N,z){var S=t6(N);if(typeof S!=="function")throw Error($(150));if(N=S.call(N),N==null)throw Error($(151));for(var B=S=null,q=f,u=f=0,G=null,P=N.next();q!==null&&!P.done;u++,P=N.next()){q.index>u?(G=q,q=null):G=q.sibling;var l=D(J,q,P.value,z);if(l===null){q===null&&(q=G);break}H&&q&&l.alternate===null&&E(J,q),f=A(l,f,u),B===null?S=l:B.sibling=l,B=l,q=G}if(P.done)return K(J,q),J1&&ZH(J,u),S;if(q===null){for(;!P.done;u++,P=N.next())P=X(J,P.value,z),P!==null&&(f=A(P,f,u),B===null?S=P:B.sibling=P,B=P);return J1&&ZH(J,u),S}for(q=W(J,q);!P.done;u++,P=N.next())P=U(q,J,u,P.value,z),P!==null&&(H&&P.alternate!==null&&q.delete(P.key===null?u:P.key),f=A(P,f,u),B===null?S=P:B.sibling=P,B=P);return H&&q.forEach(function(n){return E(J,n)}),J1&&ZH(J,u),S}function w(J,f,N,z){if(typeof N==="object"&&N!==null&&N.type===mH&&N.key===null&&(N=N.props.children),typeof N==="object"&&N!==null){switch(N.$$typeof){case CK:H:{for(var S=N.key,B=f;B!==null;){if(B.key===S){if(S=N.type,S===mH){if(B.tag===7){K(J,B.sibling),f=Q(B,N.props.children),f.return=J,J=f;break H}}else if(B.elementType===S||typeof S==="object"&&S!==null&&S.$$typeof===B8&&YF(S)===B.type){K(J,B.sibling),f=Q(B,N.props),f.ref=_6(J,B,N),f.return=J,J=f;break H}K(J,B);break}else E(J,B);B=B.sibling}N.type===mH?(f=DH(N.props.children,J.mode,z,N.key),f.return=J,J=f):(z=$K(N.type,N.key,N.props,null,J.mode,z),z.ref=_6(J,f,N),z.return=J,J=z)}return O(J);case dH:H:{for(B=N.key;f!==null;){if(f.key===B)if(f.tag===4&&f.stateNode.containerInfo===N.containerInfo&&f.stateNode.implementation===N.implementation){K(J,f.sibling),f=Q(f,N.children||[]),f.return=J,J=f;break H}else{K(J,f);break}else E(J,f);f=f.sibling}f=q7(N,J.mode,z),f.return=J,J=f}return O(J);case B8:return B=N._init,w(J,f,B(N._payload),z)}if(WE(N))return M(J,f,N,z);if(t6(N))return L(J,f,N,z);gK(J,N)}return typeof N==="string"&&N!==""||typeof N==="number"?(N=""+N,f!==null&&f.tag===6?(K(J,f.sibling),f=Q(f,N),f.return=J,J=f):(K(J,f),f=B7(N,J.mode,z),f.return=J,J=f),O(J)):K(J,f)}return w}function bQ(){nQ=eH=DW=null}function dQ(H){var E=kW.current;Z1(kW),H._currentValue=E}function QQ(H,E,K){for(;H!==null;){var W=H.alternate;if((H.childLanes&E)!==E?(H.childLanes|=E,W!==null&&(W.childLanes|=E)):W!==null&&(W.childLanes&E)!==E&&(W.childLanes|=E),H===K)break;H=H.return}}function Q6(H,E){DW=H,nQ=eH=null,H=H.dependencies,H!==null&&H.firstContext!==null&&((H.lanes&E)!==0&&(Q9=!0),H.firstContext=null)}function C9(H){var E=H._currentValue;if(nQ!==H)if(H={context:H,memoizedValue:E,next:null},eH===null){if(DW===null)throw Error($(308));eH=H,DW.dependencies={lanes:0,firstContext:H}}else eH=eH.next=H;return E}function mQ(H){JH===null?JH=[H]:JH.push(H)}function jY(H,E,K,W){var Q=E.interleaved;return Q===null?(K.next=K,mQ(E)):(K.next=Q.next,Q.next=K),E.interleaved=K,X8(H,W)}function X8(H,E){H.lanes|=E;var K=H.alternate;K!==null&&(K.lanes|=E),K=H;for(H=H.return;H!==null;)H.childLanes|=E,K=H.alternate,K!==null&&(K.childLanes|=E),K=H,H=H.return;return K.tag===3?K.stateNode:null}function cQ(H){H.updateQueue={baseState:H.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pY(H,E){H=H.updateQueue,E.updateQueue===H&&(E.updateQueue={baseState:H.baseState,firstBaseUpdate:H.firstBaseUpdate,lastBaseUpdate:H.lastBaseUpdate,shared:H.shared,effects:H.effects})}function F8(H,E){return{eventTime:H,lane:E,tag:0,payload:null,callback:null,next:null}}function h8(H,E,K){var W=H.updateQueue;if(W===null)return null;if(W=W.shared,(i0&2)!==0){var Q=W.pending;return Q===null?E.next=E:(E.next=Q.next,Q.next=E),W.pending=E,X8(H,K)}return Q=W.interleaved,Q===null?(E.next=E,mQ(W)):(E.next=Q.next,Q.next=E),W.interleaved=E,X8(H,K)}function sK(H,E,K){if(E=E.updateQueue,E!==null&&(E=E.shared,(K&4194240)!==0)){var W=E.lanes;W&=H.pendingLanes,K|=W,E.lanes=K,IQ(H,K)}}function JF(H,E){var{updateQueue:K,alternate:W}=H;if(W!==null&&(W=W.updateQueue,K===W)){var Q=null,A=null;if(K=K.firstBaseUpdate,K!==null){do{var O={eventTime:K.eventTime,lane:K.lane,tag:K.tag,payload:K.payload,callback:K.callback,next:null};A===null?Q=A=O:A=A.next=O,K=K.next}while(K!==null);A===null?Q=A=E:A=A.next=E}else Q=A=E;K={baseState:W.baseState,firstBaseUpdate:Q,lastBaseUpdate:A,shared:W.shared,effects:W.effects},H.updateQueue=K;return}H=K.lastBaseUpdate,H===null?K.firstBaseUpdate=E:H.next=E,K.lastBaseUpdate=E}function wW(H,E,K,W){var Q=H.updateQueue;q8=!1;var{firstBaseUpdate:A,lastBaseUpdate:O}=Q,Z=Q.shared.pending;if(Z!==null){Q.shared.pending=null;var F=Z,Y=F.next;F.next=null,O===null?A=Y:O.next=Y,O=F;var k=H.alternate;k!==null&&(k=k.updateQueue,Z=k.lastBaseUpdate,Z!==O&&(Z===null?k.firstBaseUpdate=Y:Z.next=Y,k.lastBaseUpdate=F))}if(A!==null){var X=Q.baseState;O=0,k=Y=F=null,Z=A;do{var{lane:D,eventTime:U}=Z;if((W&D)===D){k!==null&&(k=k.next={eventTime:U,lane:0,tag:Z.tag,payload:Z.payload,callback:Z.callback,next:null});H:{var M=H,L=Z;switch(D=E,U=K,L.tag){case 1:if(M=L.payload,typeof M==="function"){X=M.call(U,X,D);break H}X=M;break H;case 3:M.flags=M.flags&-65537|128;case 0:if(M=L.payload,D=typeof M==="function"?M.call(U,X,D):M,D===null||D===void 0)break H;X=N1({},X,D);break H;case 2:q8=!0}}Z.callback!==null&&Z.lane!==0&&(H.flags|=64,D=Q.effects,D===null?Q.effects=[Z]:D.push(Z))}else U={eventTime:U,lane:D,tag:Z.tag,payload:Z.payload,callback:Z.callback,next:null},k===null?(Y=k=U,F=X):k=k.next=U,O|=D;if(Z=Z.next,Z===null)if(Z=Q.shared.pending,Z===null)break;else D=Z,Z=D.next,D.next=null,Q.lastBaseUpdate=D,Q.shared.pending=null}while(1);if(k===null&&(F=X),Q.baseState=F,Q.firstBaseUpdate=Y,Q.lastBaseUpdate=k,E=Q.shared.interleaved,E!==null){Q=E;do O|=Q.lane,Q=Q.next;while(Q!==E)}else A===null&&(Q.shared.lanes=0);fH|=O,H.lanes=O,H.memoizedState=X}}function XF(H,E,K){if(H=E.effects,E.effects=null,H!==null)for(E=0;E<H.length;E++){var W=H[E],Q=W.callback;if(Q!==null){if(W.callback=null,W=K,typeof Q!=="function")throw Error($(191,Q));Q.call(W)}}}function XH(H){if(H===xE)throw Error($(174));return H}function iQ(H,E){switch(Q1(TE,E),Q1(lE,H),Q1(e9,xE),H=E.nodeType,H){case 9:case 11:E=(E=E.documentElement)?E.namespaceURI:j7(null,"");break;default:H=H===8?E.parentNode:E,E=H.namespaceURI||null,H=H.tagName,E=j7(E,H)}Z1(e9),Q1(e9,E)}function J6(){Z1(e9),Z1(lE),Z1(TE)}function gY(H){XH(TE.current);var E=XH(e9.current),K=j7(E,H.type);E!==K&&(Q1(lE,H),Q1(e9,K))}function sQ(H){lE.current===H&&(Z1(e9),Z1(lE))}function NW(H){for(var E=H;E!==null;){if(E.tag===13){var K=E.memoizedState;if(K!==null&&(K=K.dehydrated,K===null||K.data==="$?"||K.data==="$!"))return E}else if(E.tag===19&&E.memoizedProps.revealOrder!==void 0){if((E.flags&128)!==0)return E}else if(E.child!==null){E.child.return=E,E=E.child;continue}if(E===H)break;for(;E.sibling===null;){if(E.return===null||E.return===H)return null;E=E.return}E.sibling.return=E.return,E=E.sibling}return null}function oQ(){for(var H=0;H<M7.length;H++)M7[H]._workInProgressVersionPrimary=null;M7.length=0}function n1(){throw Error($(321))}function rQ(H,E){if(E===null)return!1;for(var K=0;K<E.length&&K<H.length;K++)if(!x9(H[K],E[K]))return!1;return!0}function tQ(H,E,K,W,Q,A){if(UH=A,w1=E,E.memoizedState=null,E.updateQueue=null,E.lanes=0,oK.current=H===null||H.memoizedState===null?VU:PU,H=K(W,Q),NE){A=0;do{if(NE=!1,vE=0,25<=A)throw Error($(301));A+=1,S1=z1=null,E.updateQueue=null,oK.current=GU,H=K(W,Q)}while(NE)}if(oK.current=fW,E=z1!==null&&z1.next!==null,UH=0,S1=z1=w1=null,UW=!1,E)throw Error($(300));return H}function aQ(){var H=vE!==0;return vE=0,H}function r9(){var H={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return S1===null?w1.memoizedState=S1=H:S1=S1.next=H,S1}function S9(){if(z1===null){var H=w1.alternate;H=H!==null?H.memoizedState:null}else H=z1.next;var E=S1===null?w1.memoizedState:S1.next;if(E!==null)S1=E,z1=H;else{if(H===null)throw Error($(310));z1=H,H={memoizedState:z1.memoizedState,baseState:z1.baseState,baseQueue:z1.baseQueue,queue:z1.queue,next:null},S1===null?w1.memoizedState=S1=H:S1=S1.next=H}return S1}function yE(H,E){return typeof E==="function"?E(H):E}function V7(H){var E=S9(),K=E.queue;if(K===null)throw Error($(311));K.lastRenderedReducer=H;var W=z1,Q=W.baseQueue,A=K.pending;if(A!==null){if(Q!==null){var O=Q.next;Q.next=A.next,A.next=O}W.baseQueue=Q=A,K.pending=null}if(Q!==null){A=Q.next,W=W.baseState;var Z=O=null,F=null,Y=A;do{var k=Y.lane;if((UH&k)===k)F!==null&&(F=F.next={lane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),W=Y.hasEagerState?Y.eagerState:H(W,Y.action);else{var X={lane:k,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null};F===null?(Z=F=X,O=W):F=F.next=X,w1.lanes|=k,fH|=k}Y=Y.next}while(Y!==null&&Y!==A);F===null?O=W:F.next=Z,x9(W,E.memoizedState)||(Q9=!0),E.memoizedState=W,E.baseState=O,E.baseQueue=F,K.lastRenderedState=W}if(H=K.interleaved,H!==null){Q=H;do A=Q.lane,w1.lanes|=A,fH|=A,Q=Q.next;while(Q!==H)}else Q===null&&(K.lanes=0);return[E.memoizedState,K.dispatch]}function P7(H){var E=S9(),K=E.queue;if(K===null)throw Error($(311));K.lastRenderedReducer=H;var{dispatch:W,pending:Q}=K,A=E.memoizedState;if(Q!==null){K.pending=null;var O=Q=Q.next;do A=H(A,O.action),O=O.next;while(O!==Q);x9(A,E.memoizedState)||(Q9=!0),E.memoizedState=A,E.baseQueue===null&&(E.baseState=A),K.lastRenderedState=A}return[A,W]}function xY(){}function nY(H,E){var K=w1,W=S9(),Q=E(),A=!x9(W.memoizedState,Q);if(A&&(W.memoizedState=Q,Q9=!0),W=W.queue,eQ(mY.bind(null,K,W,H),[H]),W.getSnapshot!==E||A||S1!==null&&S1.memoizedState.tag&1){if(K.flags|=2048,uE(9,dY.bind(null,K,W,Q,E),void 0,null),I1===null)throw Error($(349));(UH&30)!==0||bY(K,E,Q)}return Q}function bY(H,E,K){H.flags|=16384,H={getSnapshot:E,value:K},E=w1.updateQueue,E===null?(E={lastEffect:null,stores:null},w1.updateQueue=E,E.stores=[H]):(K=E.stores,K===null?E.stores=[H]:K.push(H))}function dY(H,E,K,W){E.value=K,E.getSnapshot=W,cY(E)&&iY(H)}function mY(H,E,K){return K(function(){cY(E)&&iY(H)})}function cY(H){var E=H.getSnapshot;H=H.value;try{var K=E();return!x9(H,K)}catch(W){return!0}}function iY(H){var E=X8(H,1);E!==null&&g9(E,H,1,-1)}function kF(H){var E=r9();return typeof H==="function"&&(H=H()),E.memoizedState=E.baseState=H,H={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yE,lastRenderedState:H},E.queue=H,H=H.dispatch=RU.bind(null,w1,H),[E.memoizedState,H]}function uE(H,E,K,W){return H={tag:H,create:E,destroy:K,deps:W,next:null},E=w1.updateQueue,E===null?(E={lastEffect:null,stores:null},w1.updateQueue=E,E.lastEffect=H.next=H):(K=E.lastEffect,K===null?E.lastEffect=H.next=H:(W=K.next,K.next=H,H.next=W,E.lastEffect=H)),H}function sY(){return S9().memoizedState}function rK(H,E,K,W){var Q=r9();w1.flags|=H,Q.memoizedState=uE(1|E,K,void 0,W===void 0?null:W)}function IW(H,E,K,W){var Q=S9();W=W===void 0?null:W;var A=void 0;if(z1!==null){var O=z1.memoizedState;if(A=O.destroy,W!==null&&rQ(W,O.deps)){Q.memoizedState=uE(E,K,A,W);return}}w1.flags|=H,Q.memoizedState=uE(1|E,K,A,W)}function DF(H,E){return rK(8390656,8,H,E)}function eQ(H,E){return IW(2048,8,H,E)}function oY(H,E){return IW(4,2,H,E)}function rY(H,E){return IW(4,4,H,E)}function tY(H,E){if(typeof E==="function")return H=H(),E(H),function(){E(null)};if(E!==null&&E!==void 0)return H=H(),E.current=H,function(){E.current=null}}function aY(H,E,K){return K=K!==null&&K!==void 0?K.concat([H]):null,IW(4,4,tY.bind(null,E,H),K)}function $Q(){}function eY(H,E){var K=S9();E=E===void 0?null:E;var W=K.memoizedState;if(W!==null&&E!==null&&rQ(E,W[1]))return W[0];return K.memoizedState=[H,E],H}function $Y(H,E){var K=S9();E=E===void 0?null:E;var W=K.memoizedState;if(W!==null&&E!==null&&rQ(E,W[1]))return W[0];return H=H(),K.memoizedState=[H,E],H}function _Y(H,E,K){if((UH&21)===0)return H.baseState&&(H.baseState=!1,Q9=!0),H.memoizedState=K;return x9(K,E)||(K=QY(),w1.lanes|=K,fH|=K,H.baseState=!0),E}function LU(H,E){var K=_0;_0=K!==0&&4>K?K:4,H(!0);var W=R7.transition;R7.transition={};try{H(!1),E()}finally{_0=K,R7.transition=W}}function HJ(){return S9().memoizedState}function MU(H,E,K){var W=p8(H);if(K={lane:W,action:K,hasEagerState:!1,eagerState:null,next:null},EJ(H))KJ(E,K);else if(K=jY(H,E,K,W),K!==null){var Q=e1();g9(K,H,W,Q),WJ(K,E,W)}}function RU(H,E,K){var W=p8(H),Q={lane:W,action:K,hasEagerState:!1,eagerState:null,next:null};if(EJ(H))KJ(E,Q);else{var A=H.alternate;if(H.lanes===0&&(A===null||A.lanes===0)&&(A=E.lastRenderedReducer,A!==null))try{var O=E.lastRenderedState,Z=A(O,K);if(Q.hasEagerState=!0,Q.eagerState=Z,x9(Z,O)){var F=E.interleaved;F===null?(Q.next=Q,mQ(E)):(Q.next=F.next,F.next=Q),E.interleaved=Q;return}}catch(Y){}finally{}K=jY(H,E,Q,W),K!==null&&(Q=e1(),g9(K,H,W,Q),WJ(K,E,W))}}function EJ(H){var E=H.alternate;return H===w1||E!==null&&E===w1}function KJ(H,E){NE=UW=!0;var K=H.pending;K===null?E.next=E:(E.next=K.next,K.next=E),H.pending=E}function WJ(H,E,K){if((K&4194240)!==0){var W=E.lanes;W&=H.pendingLanes,K|=W,E.lanes=K,IQ(H,K)}}function u9(H,E){if(H&&H.defaultProps){E=N1({},E),H=H.defaultProps;for(var K in H)E[K]===void 0&&(E[K]=H[K]);return E}return E}function AQ(H,E,K,W){E=H.memoizedState,K=K(W,E),K=K===null||K===void 0?E:N1({},E,K),H.memoizedState=K,H.lanes===0&&(H.updateQueue.baseState=K)}function wF(H,E,K,W,Q,A,O){return H=H.stateNode,typeof H.shouldComponentUpdate==="function"?H.shouldComponentUpdate(W,A,O):E.prototype&&E.prototype.isPureReactComponent?!qE(K,W)||!qE(Q,A):!0}function QJ(H,E,K){var W=!1,Q=n8,A=E.contextType;return typeof A==="object"&&A!==null?A=C9(A):(Q=O9(E)?wH:m1.current,W=E.contextTypes,A=(W=W!==null&&W!==void 0)?Z6(H,Q):n8),E=new E(K,A),H.memoizedState=E.state!==null&&E.state!==void 0?E.state:null,E.updater=lW,H.stateNode=E,E._reactInternals=H,W&&(H=H.stateNode,H.__reactInternalMemoizedUnmaskedChildContext=Q,H.__reactInternalMemoizedMaskedChildContext=A),E}function NF(H,E,K,W){H=E.state,typeof E.componentWillReceiveProps==="function"&&E.componentWillReceiveProps(K,W),typeof E.UNSAFE_componentWillReceiveProps==="function"&&E.UNSAFE_componentWillReceiveProps(K,W),E.state!==H&&lW.enqueueReplaceState(E,E.state,null)}function OQ(H,E,K,W){var Q=H.stateNode;Q.props=K,Q.state=H.memoizedState,Q.refs={},cQ(H);var A=E.contextType;typeof A==="object"&&A!==null?Q.context=C9(A):(A=O9(E)?wH:m1.current,Q.context=Z6(H,A)),Q.state=H.memoizedState,A=E.getDerivedStateFromProps,typeof A==="function"&&(AQ(H,E,A,K),Q.state=H.memoizedState),typeof E.getDerivedStateFromProps==="function"||typeof Q.getSnapshotBeforeUpdate==="function"||typeof Q.UNSAFE_componentWillMount!=="function"&&typeof Q.componentWillMount!=="function"||(E=Q.state,typeof Q.componentWillMount==="function"&&Q.componentWillMount(),typeof Q.UNSAFE_componentWillMount==="function"&&Q.UNSAFE_componentWillMount(),E!==Q.state&&lW.enqueueReplaceState(Q,Q.state,null),wW(H,K,Q,W),Q.state=H.memoizedState),typeof Q.componentDidMount==="function"&&(H.flags|=4194308)}function X6(H,E){try{var K="",W=E;do K+=_w(W),W=W.return;while(W);var Q=K}catch(A){Q=`
Error generating stack: `+A.message+`
`+A.stack}return{value:H,source:E,stack:Q,digest:null}}function G7(H,E,K){return{value:H,source:null,stack:K!=null?K:null,digest:E!=null?E:null}}function ZQ(H,E){try{console.error(E.value)}catch(K){setTimeout(function(){throw K})}}function AJ(H,E,K){K=F8(-1,K),K.tag=3,K.payload={element:null};var W=E.value;return K.callback=function(){MW||(MW=!0,fQ=W),ZQ(H,E)},K}function OJ(H,E,K){K=F8(-1,K),K.tag=3;var W=H.type.getDerivedStateFromError;if(typeof W==="function"){var Q=E.value;K.payload=function(){return W(Q)},K.callback=function(){ZQ(H,E)}}var A=H.stateNode;return A!==null&&typeof A.componentDidCatch==="function"&&(K.callback=function(){ZQ(H,E),typeof W!=="function"&&(j8===null?j8=new Set([this]):j8.add(this));var O=E.stack;this.componentDidCatch(E.value,{componentStack:O!==null?O:""})}),K}function UF(H,E,K){var W=H.pingCache;if(W===null){W=H.pingCache=new zU;var Q=new Set;W.set(E,Q)}else Q=W.get(E),Q===void 0&&(Q=new Set,W.set(E,Q));Q.has(K)||(Q.add(K),H=gU.bind(null,H,E,K),E.then(H,H))}function fF(H){do{var E;if(E=H.tag===13)E=H.memoizedState,E=E!==null?E.dehydrated!==null?!0:!1:!0;if(E)return H;H=H.return}while(H!==null);return null}function LF(H,E,K,W,Q){if((H.mode&1)===0)return H===E?H.flags|=65536:(H.flags|=128,K.flags|=131072,K.flags&=-52805,K.tag===1&&(K.alternate===null?K.tag=17:(E=F8(-1,1),E.tag=2,h8(K,E,1))),K.lanes|=1),H;return H.flags|=65536,H.lanes=Q,H}function a1(H,E,K,W){E.child=H===null?hY(E,null,K,W):Y6(E,H.child,K,W)}function MF(H,E,K,W,Q){K=K.render;var A=E.ref;if(Q6(E,Q),W=tQ(H,E,K,W,A,Q),K=aQ(),H!==null&&!Q9)return E.updateQueue=H.updateQueue,E.flags&=-2053,H.lanes&=~Q,k8(H,E,Q);return J1&&K&&pQ(E),E.flags|=1,a1(H,E,W,Q),E.child}function RF(H,E,K,W,Q){if(H===null){var A=K.type;if(typeof A==="function"&&!OA(A)&&A.defaultProps===void 0&&K.compare===null&&K.defaultProps===void 0)return E.tag=15,E.type=A,ZJ(H,E,A,W,Q);return H=$K(K.type,null,W,E,E.mode,Q),H.ref=E.ref,H.return=E,E.child=H}if(A=H.child,(H.lanes&Q)===0){var O=A.memoizedProps;if(K=K.compare,K=K!==null?K:qE,K(O,W)&&H.ref===E.ref)return k8(H,E,Q)}return E.flags|=1,H=g8(A,W),H.ref=E.ref,H.return=E,E.child=H}function ZJ(H,E,K,W,Q){if(H!==null){var A=H.memoizedProps;if(qE(A,W)&&H.ref===E.ref)if(Q9=!1,E.pendingProps=W=A,(H.lanes&Q)!==0)(H.flags&131072)!==0&&(Q9=!0);else return E.lanes=H.lanes,k8(H,E,Q)}return FQ(H,E,K,W,Q)}function FJ(H,E,K){var W=E.pendingProps,Q=W.children,A=H!==null?H.memoizedState:null;if(W.mode==="hidden")if((E.mode&1)===0)E.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q1(_H,X9),X9|=K;else{if((K&1073741824)===0)return H=A!==null?A.baseLanes|K:K,E.lanes=E.childLanes=1073741824,E.memoizedState={baseLanes:H,cachePool:null,transitions:null},E.updateQueue=null,Q1(_H,X9),X9|=H,null;E.memoizedState={baseLanes:0,cachePool:null,transitions:null},W=A!==null?A.baseLanes:K,Q1(_H,X9),X9|=W}else A!==null?(W=A.baseLanes|K,E.memoizedState=null):W=K,Q1(_H,X9),X9|=W;return a1(H,E,Q,K),E.child}function YJ(H,E){var K=E.ref;if(H===null&&K!==null||H!==null&&H.ref!==K)E.flags|=512,E.flags|=2097152}function FQ(H,E,K,W,Q){var A=O9(K)?wH:m1.current;if(A=Z6(E,A),Q6(E,Q),K=tQ(H,E,K,W,A,Q),W=aQ(),H!==null&&!Q9)return E.updateQueue=H.updateQueue,E.flags&=-2053,H.lanes&=~Q,k8(H,E,Q);return J1&&W&&pQ(E),E.flags|=1,a1(H,E,K,Q),E.child}function VF(H,E,K,W,Q){if(O9(K)){var A=!0;YW(E)}else A=!1;if(Q6(E,Q),E.stateNode===null)tK(H,E),QJ(E,K,W),OQ(E,K,W,Q),W=!0;else if(H===null){var{stateNode:O,memoizedProps:Z}=E;O.props=Z;var F=O.context,Y=K.contextType;typeof Y==="object"&&Y!==null?Y=C9(Y):(Y=O9(K)?wH:m1.current,Y=Z6(E,Y));var k=K.getDerivedStateFromProps,X=typeof k==="function"||typeof O.getSnapshotBeforeUpdate==="function";X||typeof O.UNSAFE_componentWillReceiveProps!=="function"&&typeof O.componentWillReceiveProps!=="function"||(Z!==W||F!==Y)&&NF(E,O,W,Y),q8=!1;var D=E.memoizedState;O.state=D,wW(E,W,O,Q),F=E.memoizedState,Z!==W||D!==F||A9.current||q8?(typeof k==="function"&&(AQ(E,K,k,W),F=E.memoizedState),(Z=q8||wF(E,K,Z,W,D,F,Y))?(X||typeof O.UNSAFE_componentWillMount!=="function"&&typeof O.componentWillMount!=="function"||(typeof O.componentWillMount==="function"&&O.componentWillMount(),typeof O.UNSAFE_componentWillMount==="function"&&O.UNSAFE_componentWillMount()),typeof O.componentDidMount==="function"&&(E.flags|=4194308)):(typeof O.componentDidMount==="function"&&(E.flags|=4194308),E.memoizedProps=W,E.memoizedState=F),O.props=W,O.state=F,O.context=Y,W=Z):(typeof O.componentDidMount==="function"&&(E.flags|=4194308),W=!1)}else{O=E.stateNode,pY(H,E),Z=E.memoizedProps,Y=E.type===E.elementType?Z:u9(E.type,Z),O.props=Y,X=E.pendingProps,D=O.context,F=K.contextType,typeof F==="object"&&F!==null?F=C9(F):(F=O9(K)?wH:m1.current,F=Z6(E,F));var U=K.getDerivedStateFromProps;(k=typeof U==="function"||typeof O.getSnapshotBeforeUpdate==="function")||typeof O.UNSAFE_componentWillReceiveProps!=="function"&&typeof O.componentWillReceiveProps!=="function"||(Z!==X||D!==F)&&NF(E,O,W,F),q8=!1,D=E.memoizedState,O.state=D,wW(E,W,O,Q);var M=E.memoizedState;Z!==X||D!==M||A9.current||q8?(typeof U==="function"&&(AQ(E,K,U,W),M=E.memoizedState),(Y=q8||wF(E,K,Y,W,D,M,F)||!1)?(k||typeof O.UNSAFE_componentWillUpdate!=="function"&&typeof O.componentWillUpdate!=="function"||(typeof O.componentWillUpdate==="function"&&O.componentWillUpdate(W,M,F),typeof O.UNSAFE_componentWillUpdate==="function"&&O.UNSAFE_componentWillUpdate(W,M,F)),typeof O.componentDidUpdate==="function"&&(E.flags|=4),typeof O.getSnapshotBeforeUpdate==="function"&&(E.flags|=1024)):(typeof O.componentDidUpdate!=="function"||Z===H.memoizedProps&&D===H.memoizedState||(E.flags|=4),typeof O.getSnapshotBeforeUpdate!=="function"||Z===H.memoizedProps&&D===H.memoizedState||(E.flags|=1024),E.memoizedProps=W,E.memoizedState=M),O.props=W,O.state=M,O.context=F,W=Y):(typeof O.componentDidUpdate!=="function"||Z===H.memoizedProps&&D===H.memoizedState||(E.flags|=4),typeof O.getSnapshotBeforeUpdate!=="function"||Z===H.memoizedProps&&D===H.memoizedState||(E.flags|=1024),W=!1)}return YQ(H,E,K,W,A,Q)}function YQ(H,E,K,W,Q,A){YJ(H,E);var O=(E.flags&128)!==0;if(!W&&!O)return Q&&OF(E,K,!1),k8(H,E,A);W=E.stateNode,BU.current=E;var Z=O&&typeof K.getDerivedStateFromError!=="function"?null:W.render();return E.flags|=1,H!==null&&O?(E.child=Y6(E,H.child,null,A),E.child=Y6(E,null,Z,A)):a1(H,E,Z,A),E.memoizedState=W.state,Q&&OF(E,K,!0),E.child}function JJ(H){var E=H.stateNode;E.pendingContext?AF(H,E.pendingContext,E.pendingContext!==E.context):E.context&&AF(H,E.context,!1),iQ(H,E.containerInfo)}function PF(H,E,K,W,Q){return F6(),xQ(Q),E.flags|=256,a1(H,E,K,W),E.child}function XQ(H){return{baseLanes:H,cachePool:null,transitions:null}}function XJ(H,E,K){var W=E.pendingProps,Q=D1.current,A=!1,O=(E.flags&128)!==0,Z;if((Z=O)||(Z=H!==null&&H.memoizedState===null?!1:(Q&2)!==0),Z)A=!0,E.flags&=-129;else if(H===null||H.memoizedState!==null)Q|=1;if(Q1(D1,Q&1),H===null){if(WQ(E),H=E.memoizedState,H!==null&&(H=H.dehydrated,H!==null))return(E.mode&1)===0?E.lanes=1:H.data==="$!"?E.lanes=8:E.lanes=1073741824,null;return O=W.children,H=W.fallback,A?(W=E.mode,A=E.child,O={mode:"hidden",children:O},(W&1)===0&&A!==null?(A.childLanes=0,A.pendingProps=O):A=yW(O,W,0,null),H=DH(H,W,K,null),A.return=E,H.return=E,A.sibling=H,E.child=A,E.child.memoizedState=XQ(K),E.memoizedState=JQ,H):_Q(E,O)}if(Q=H.memoizedState,Q!==null&&(Z=Q.dehydrated,Z!==null))return qU(H,E,O,W,Z,Q,K);if(A){A=W.fallback,O=E.mode,Q=H.child,Z=Q.sibling;var F={mode:"hidden",children:W.children};return(O&1)===0&&E.child!==Q?(W=E.child,W.childLanes=0,W.pendingProps=F,E.deletions=null):(W=g8(Q,F),W.subtreeFlags=Q.subtreeFlags&14680064),Z!==null?A=g8(Z,A):(A=DH(A,O,K,null),A.flags|=2),A.return=E,W.return=E,W.sibling=A,E.child=W,W=A,A=E.child,O=H.child.memoizedState,O=O===null?XQ(K):{baseLanes:O.baseLanes|K,cachePool:null,transitions:O.transitions},A.memoizedState=O,A.childLanes=H.childLanes&~K,E.memoizedState=JQ,W}return A=H.child,H=A.sibling,W=g8(A,{mode:"visible",children:W.children}),(E.mode&1)===0&&(W.lanes=K),W.return=E,W.sibling=null,H!==null&&(K=E.deletions,K===null?(E.deletions=[H],E.flags|=16):K.push(H)),E.child=W,E.memoizedState=null,W}function _Q(H,E){return E=yW({mode:"visible",children:E},H.mode,0,null),E.return=H,H.child=E}function xK(H,E,K,W){return W!==null&&xQ(W),Y6(E,H.child,null,K),H=_Q(E,E.pendingProps.children),H.flags|=2,E.memoizedState=null,H}function qU(H,E,K,W,Q,A,O){if(K){if(E.flags&256)return E.flags&=-257,W=G7(Error($(422))),xK(H,E,O,W);if(E.memoizedState!==null)return E.child=H.child,E.flags|=128,null;return A=W.fallback,Q=E.mode,W=yW({mode:"visible",children:W.children},Q,0,null),A=DH(A,Q,O,null),A.flags|=2,W.return=E,A.return=E,W.sibling=A,E.child=W,(E.mode&1)!==0&&Y6(E,H.child,null,O),E.child.memoizedState=XQ(O),E.memoizedState=JQ,A}if((E.mode&1)===0)return xK(H,E,O,null);if(Q.data==="$!"){if(W=Q.nextSibling&&Q.nextSibling.dataset,W)var Z=W.dgst;return W=Z,A=Error($(419)),W=G7(A,W,void 0),xK(H,E,O,W)}if(Z=(O&H.childLanes)!==0,Q9||Z){if(W=I1,W!==null){switch(O&-O){case 4:Q=2;break;case 16:Q=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:Q=32;break;case 536870912:Q=268435456;break;default:Q=0}Q=(Q&(W.suspendedLanes|O))!==0?0:Q,Q!==0&&Q!==A.retryLane&&(A.retryLane=Q,X8(H,Q),g9(W,H,Q,-1))}return AA(),W=G7(Error($(421))),xK(H,E,O,W)}if(Q.data==="$?")return E.flags|=128,E.child=H.child,E=xU.bind(null,H),Q._reactRetry=E,null;return H=A.treeContext,k9=u8(Q.nextSibling),D9=E,J1=!0,j9=null,H!==null&&(G9[z9++]=O8,G9[z9++]=Z8,G9[z9++]=NH,O8=H.id,Z8=H.overflow,NH=E),E=_Q(E,W.children),E.flags|=4096,E}function GF(H,E,K){H.lanes|=E;var W=H.alternate;W!==null&&(W.lanes|=E),QQ(H.return,E,K)}function z7(H,E,K,W,Q){var A=H.memoizedState;A===null?H.memoizedState={isBackwards:E,rendering:null,renderingStartTime:0,last:W,tail:K,tailMode:Q}:(A.isBackwards=E,A.rendering=null,A.renderingStartTime=0,A.last=W,A.tail=K,A.tailMode=Q)}function kJ(H,E,K){var W=E.pendingProps,Q=W.revealOrder,A=W.tail;if(a1(H,E,W.children,K),W=D1.current,(W&2)!==0)W=W&1|2,E.flags|=128;else{if(H!==null&&(H.flags&128)!==0)H:for(H=E.child;H!==null;){if(H.tag===13)H.memoizedState!==null&&GF(H,K,E);else if(H.tag===19)GF(H,K,E);else if(H.child!==null){H.child.return=H,H=H.child;continue}if(H===E)break H;for(;H.sibling===null;){if(H.return===null||H.return===E)break H;H=H.return}H.sibling.return=H.return,H=H.sibling}W&=1}if(Q1(D1,W),(E.mode&1)===0)E.memoizedState=null;else switch(Q){case"forwards":K=E.child;for(Q=null;K!==null;)H=K.alternate,H!==null&&NW(H)===null&&(Q=K),K=K.sibling;K=Q,K===null?(Q=E.child,E.child=null):(Q=K.sibling,K.sibling=null),z7(E,!1,Q,K,A);break;case"backwards":K=null,Q=E.child;for(E.child=null;Q!==null;){if(H=Q.alternate,H!==null&&NW(H)===null){E.child=Q;break}H=Q.sibling,Q.sibling=K,K=Q,Q=H}z7(E,!0,K,null,A);break;case"together":z7(E,!1,null,null,void 0);break;default:E.memoizedState=null}return E.child}function tK(H,E){(E.mode&1)===0&&H!==null&&(H.alternate=null,E.alternate=null,E.flags|=2)}function k8(H,E,K){if(H!==null&&(E.dependencies=H.dependencies),fH|=E.lanes,(K&E.childLanes)===0)return null;if(H!==null&&E.child!==H.child)throw Error($(153));if(E.child!==null){H=E.child,K=g8(H,H.pendingProps),E.child=K;for(K.return=E;H.sibling!==null;)H=H.sibling,K=K.sibling=g8(H,H.pendingProps),K.return=E;K.sibling=null}return E.child}function CU(H,E,K){switch(E.tag){case 3:JJ(E),F6();break;case 5:gY(E);break;case 1:O9(E.type)&&YW(E);break;case 4:iQ(E,E.stateNode.containerInfo);break;case 10:var W=E.type._context,Q=E.memoizedProps.value;Q1(kW,W._currentValue),W._currentValue=Q;break;case 13:if(W=E.memoizedState,W!==null){if(W.dehydrated!==null)return Q1(D1,D1.current&1),E.flags|=128,null;if((K&E.child.childLanes)!==0)return XJ(H,E,K);return Q1(D1,D1.current&1),H=k8(H,E,K),H!==null?H.sibling:null}Q1(D1,D1.current&1);break;case 19:if(W=(K&E.childLanes)!==0,(H.flags&128)!==0){if(W)return kJ(H,E,K);E.flags|=128}if(Q=E.memoizedState,Q!==null&&(Q.rendering=null,Q.tail=null,Q.lastEffect=null),Q1(D1,D1.current),W)break;else return null;case 22:case 23:return E.lanes=0,FJ(H,E,K)}return k8(H,E,K)}function HE(H,E){if(!J1)switch(H.tailMode){case"hidden":E=H.tail;for(var K=null;E!==null;)E.alternate!==null&&(K=E),E=E.sibling;K===null?H.tail=null:K.sibling=null;break;case"collapsed":K=H.tail;for(var W=null;K!==null;)K.alternate!==null&&(W=K),K=K.sibling;W===null?E||H.tail===null?H.tail=null:H.tail.sibling=null:W.sibling=null}}function b1(H){var E=H.alternate!==null&&H.alternate.child===H.child,K=0,W=0;if(E)for(var Q=H.child;Q!==null;)K|=Q.lanes|Q.childLanes,W|=Q.subtreeFlags&14680064,W|=Q.flags&14680064,Q.return=H,Q=Q.sibling;else for(Q=H.child;Q!==null;)K|=Q.lanes|Q.childLanes,W|=Q.subtreeFlags,W|=Q.flags,Q.return=H,Q=Q.sibling;return H.subtreeFlags|=W,H.childLanes=K,E}function SU(H,E,K){var W=E.pendingProps;switch(gQ(E),E.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return b1(E),null;case 1:return O9(E.type)&&FW(),b1(E),null;case 3:if(W=E.stateNode,J6(),Z1(A9),Z1(m1),oQ(),W.pendingContext&&(W.context=W.pendingContext,W.pendingContext=null),H===null||H.child===null)pK(E)?E.flags|=4:H===null||H.memoizedState.isDehydrated&&(E.flags&256)===0||(E.flags|=1024,j9!==null&&(RQ(j9),j9=null));return kQ(H,E),b1(E),null;case 5:sQ(E);var Q=XH(TE.current);if(K=E.type,H!==null&&E.stateNode!=null)wJ(H,E,K,W,Q),H.ref!==E.ref&&(E.flags|=512,E.flags|=2097152);else{if(!W){if(E.stateNode===null)throw Error($(166));return b1(E),null}if(H=XH(e9.current),pK(E)){W=E.stateNode,K=E.type;var A=E.memoizedProps;switch(W[t9]=E,W[IE]=A,H=(E.mode&1)!==0,K){case"dialog":O1("cancel",W),O1("close",W);break;case"iframe":case"object":case"embed":O1("load",W);break;case"video":case"audio":for(Q=0;Q<YE.length;Q++)O1(YE[Q],W);break;case"source":O1("error",W);break;case"img":case"image":case"link":O1("error",W),O1("load",W);break;case"details":O1("toggle",W);break;case"input":yZ(W,A),O1("invalid",W);break;case"select":W._wrapperState={wasMultiple:!!A.multiple},O1("invalid",W);break;case"textarea":hZ(W,A),O1("invalid",W)}p7(K,A),Q=null;for(var O in A)if(A.hasOwnProperty(O)){var Z=A[O];O==="children"?typeof Z==="string"?W.textContent!==Z&&(A.suppressHydrationWarning!==!0&&jK(W.textContent,Z,H),Q=["children",Z]):typeof Z==="number"&&W.textContent!==""+Z&&(A.suppressHydrationWarning!==!0&&jK(W.textContent,Z,H),Q=["children",""+Z]):ME.hasOwnProperty(O)&&Z!=null&&O==="onScroll"&&O1("scroll",W)}switch(K){case"input":SK(W),uZ(W,A,!0);break;case"textarea":SK(W),jZ(W);break;case"select":case"option":break;default:typeof A.onClick==="function"&&(W.onclick=ZW)}W=Q,E.updateQueue=W,W!==null&&(E.flags|=4)}else{O=Q.nodeType===9?Q:Q.ownerDocument,H==="http://www.w3.org/1999/xhtml"&&(H=mF(K)),H==="http://www.w3.org/1999/xhtml"?K==="script"?(H=O.createElement("div"),H.innerHTML="<script><\/script>",H=H.removeChild(H.firstChild)):typeof W.is==="string"?H=O.createElement(K,{is:W.is}):(H=O.createElement(K),K==="select"&&(O=H,W.multiple?O.multiple=!0:W.size&&(O.size=W.size))):H=O.createElementNS(H,K),H[t9]=E,H[IE]=W,DJ(H,E,!1,!1),E.stateNode=H;H:{switch(O=g7(K,W),K){case"dialog":O1("cancel",H),O1("close",H),Q=W;break;case"iframe":case"object":case"embed":O1("load",H),Q=W;break;case"video":case"audio":for(Q=0;Q<YE.length;Q++)O1(YE[Q],H);Q=W;break;case"source":O1("error",H),Q=W;break;case"img":case"image":case"link":O1("error",H),O1("load",H),Q=W;break;case"details":O1("toggle",H),Q=W;break;case"input":yZ(H,W),Q=v7(H,W),O1("invalid",H);break;case"option":Q=W;break;case"select":H._wrapperState={wasMultiple:!!W.multiple},Q=N1({},W,{value:void 0}),O1("invalid",H);break;case"textarea":hZ(H,W),Q=h7(H,W),O1("invalid",H);break;default:Q=W}p7(K,Q),Z=Q;for(A in Z)if(Z.hasOwnProperty(A)){var F=Z[A];A==="style"?sF(H,F):A==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&cF(H,F)):A==="children"?typeof F==="string"?(K!=="textarea"||F!=="")&&RE(H,F):typeof F==="number"&&RE(H,""+F):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(ME.hasOwnProperty(A)?F!=null&&A==="onScroll"&&O1("scroll",H):F!=null&&GQ(H,A,F,O))}switch(K){case"input":SK(H),uZ(H,W,!1);break;case"textarea":SK(H),jZ(H);break;case"option":W.value!=null&&H.setAttribute("value",""+x8(W.value));break;case"select":H.multiple=!!W.multiple,A=W.value,A!=null?H6(H,!!W.multiple,A,!1):W.defaultValue!=null&&H6(H,!!W.multiple,W.defaultValue,!0);break;default:typeof Q.onClick==="function"&&(H.onclick=ZW)}switch(K){case"button":case"input":case"select":case"textarea":W=!!W.autoFocus;break H;case"img":W=!0;break H;default:W=!1}}W&&(E.flags|=4)}E.ref!==null&&(E.flags|=512,E.flags|=2097152)}return b1(E),null;case 6:if(H&&E.stateNode!=null)NJ(H,E,H.memoizedProps,W);else{if(typeof W!=="string"&&E.stateNode===null)throw Error($(166));if(K=XH(TE.current),XH(e9.current),pK(E)){if(W=E.stateNode,K=E.memoizedProps,W[t9]=E,A=W.nodeValue!==K){if(H=D9,H!==null)switch(H.tag){case 3:jK(W.nodeValue,K,(H.mode&1)!==0);break;case 5:H.memoizedProps.suppressHydrationWarning!==!0&&jK(W.nodeValue,K,(H.mode&1)!==0)}}A&&(E.flags|=4)}else W=(K.nodeType===9?K:K.ownerDocument).createTextNode(W),W[t9]=E,E.stateNode=W}return b1(E),null;case 13:if(Z1(D1),W=E.memoizedState,H===null||H.memoizedState!==null&&H.memoizedState.dehydrated!==null){if(J1&&k9!==null&&(E.mode&1)!==0&&(E.flags&128)===0)yY(),F6(),E.flags|=98560,A=!1;else if(A=pK(E),W!==null&&W.dehydrated!==null){if(H===null){if(!A)throw Error($(318));if(A=E.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error($(317));A[t9]=E}else F6(),(E.flags&128)===0&&(E.memoizedState=null),E.flags|=4;b1(E),A=!1}else j9!==null&&(RQ(j9),j9=null),A=!0;if(!A)return E.flags&65536?E:null}if((E.flags&128)!==0)return E.lanes=K,E;return W=W!==null,W!==(H!==null&&H.memoizedState!==null)&&W&&(E.child.flags|=8192,(E.mode&1)!==0&&(H===null||(D1.current&1)!==0?B1===0&&(B1=3):AA())),E.updateQueue!==null&&(E.flags|=4),b1(E),null;case 4:return J6(),kQ(H,E),H===null&&CE(E.stateNode.containerInfo),b1(E),null;case 10:return dQ(E.type._context),b1(E),null;case 17:return O9(E.type)&&FW(),b1(E),null;case 19:if(Z1(D1),A=E.memoizedState,A===null)return b1(E),null;if(W=(E.flags&128)!==0,O=A.rendering,O===null)if(W)HE(A,!1);else{if(B1!==0||H!==null&&(H.flags&128)!==0)for(H=E.child;H!==null;){if(O=NW(H),O!==null){E.flags|=128,HE(A,!1),W=O.updateQueue,W!==null&&(E.updateQueue=W,E.flags|=4),E.subtreeFlags=0,W=K;for(K=E.child;K!==null;)A=K,H=W,A.flags&=14680066,O=A.alternate,O===null?(A.childLanes=0,A.lanes=H,A.child=null,A.subtreeFlags=0,A.memoizedProps=null,A.memoizedState=null,A.updateQueue=null,A.dependencies=null,A.stateNode=null):(A.childLanes=O.childLanes,A.lanes=O.lanes,A.child=O.child,A.subtreeFlags=0,A.deletions=null,A.memoizedProps=O.memoizedProps,A.memoizedState=O.memoizedState,A.updateQueue=O.updateQueue,A.type=O.type,H=O.dependencies,A.dependencies=H===null?null:{lanes:H.lanes,firstContext:H.firstContext}),K=K.sibling;return Q1(D1,D1.current&1|2),E.child}H=H.sibling}A.tail!==null&&R1()>k6&&(E.flags|=128,W=!0,HE(A,!1),E.lanes=4194304)}else{if(!W)if(H=NW(O),H!==null){if(E.flags|=128,W=!0,K=H.updateQueue,K!==null&&(E.updateQueue=K,E.flags|=4),HE(A,!0),A.tail===null&&A.tailMode==="hidden"&&!O.alternate&&!J1)return b1(E),null}else 2*R1()-A.renderingStartTime>k6&&K!==1073741824&&(E.flags|=128,W=!0,HE(A,!1),E.lanes=4194304);A.isBackwards?(O.sibling=E.child,E.child=O):(K=A.last,K!==null?K.sibling=O:E.child=O,A.last=O)}if(A.tail!==null)return E=A.tail,A.rendering=E,A.tail=E.sibling,A.renderingStartTime=R1(),E.sibling=null,K=D1.current,Q1(D1,W?K&1|2:K&1),E;return b1(E),null;case 22:case 23:return QA(),W=E.memoizedState!==null,H!==null&&H.memoizedState!==null!==W&&(E.flags|=8192),W&&(E.mode&1)!==0?(X9&1073741824)!==0&&(b1(E),E.subtreeFlags&6&&(E.flags|=8192)):b1(E),null;case 24:return null;case 25:return null}throw Error($(156,E.tag))}function IU(H,E){switch(gQ(E),E.tag){case 1:return O9(E.type)&&FW(),H=E.flags,H&65536?(E.flags=H&-65537|128,E):null;case 3:return J6(),Z1(A9),Z1(m1),oQ(),H=E.flags,(H&65536)!==0&&(H&128)===0?(E.flags=H&-65537|128,E):null;case 5:return sQ(E),null;case 13:if(Z1(D1),H=E.memoizedState,H!==null&&H.dehydrated!==null){if(E.alternate===null)throw Error($(340));F6()}return H=E.flags,H&65536?(E.flags=H&-65537|128,E):null;case 19:return Z1(D1),null;case 4:return J6(),null;case 10:return dQ(E.type._context),null;case 22:case 23:return QA(),null;case 24:return null;default:return null}}function $H(H,E){var K=H.ref;if(K!==null)if(typeof K==="function")try{K(null)}catch(W){M1(H,E,W)}else K.current=null}function DQ(H,E,K){try{K()}catch(W){M1(H,E,W)}}function TU(H,E){if(a7=QW,H=RY(),jQ(H)){if("selectionStart"in H)var K={start:H.selectionStart,end:H.selectionEnd};else H:{K=(K=H.ownerDocument)&&K.defaultView||window;var W=K.getSelection&&K.getSelection();if(W&&W.rangeCount!==0){K=W.anchorNode;var{anchorOffset:Q,focusNode:A}=W;W=W.focusOffset;try{K.nodeType,A.nodeType}catch(z){K=null;break H}var O=0,Z=-1,F=-1,Y=0,k=0,X=H,D=null;E:for(;;){for(var U;;){if(X!==K||Q!==0&&X.nodeType!==3||(Z=O+Q),X!==A||W!==0&&X.nodeType!==3||(F=O+W),X.nodeType===3&&(O+=X.nodeValue.length),(U=X.firstChild)===null)break;D=X,X=U}for(;;){if(X===H)break E;if(D===K&&++Y===Q&&(Z=O),D===A&&++k===W&&(F=O),(U=X.nextSibling)!==null)break;X=D,D=X.parentNode}X=U}K=Z===-1||F===-1?null:{start:Z,end:F}}else K=null}K=K||{start:0,end:0}}else K=null;e7={focusedElem:H,selectionRange:K},QW=!1;for(D0=E;D0!==null;)if(E=D0,H=E.child,(E.subtreeFlags&1028)!==0&&H!==null)H.return=E,D0=H;else for(;D0!==null;){E=D0;try{var M=E.alternate;if((E.flags&1024)!==0)switch(E.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var{memoizedProps:L,memoizedState:w}=M,J=E.stateNode,f=J.getSnapshotBeforeUpdate(E.elementType===E.type?L:u9(E.type,L),w);J.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var N=E.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(z){M1(E,E.return,z)}if(H=E.sibling,H!==null){H.return=E.return,D0=H;break}D0=E.return}return M=zF,zF=!1,M}function UE(H,E,K){var W=E.updateQueue;if(W=W!==null?W.lastEffect:null,W!==null){var Q=W=W.next;do{if((Q.tag&H)===H){var A=Q.destroy;Q.destroy=void 0,A!==void 0&&DQ(E,K,A)}Q=Q.next}while(Q!==W)}}function TW(H,E){if(E=E.updateQueue,E=E!==null?E.lastEffect:null,E!==null){var K=E=E.next;do{if((K.tag&H)===H){var W=K.create;K.destroy=W()}K=K.next}while(K!==E)}}function wQ(H){var E=H.ref;if(E!==null){var K=H.stateNode;switch(H.tag){case 5:H=K;break;default:H=K}typeof E==="function"?E(H):E.current=H}}function UJ(H){var E=H.alternate;E!==null&&(H.alternate=null,UJ(E)),H.child=null,H.deletions=null,H.sibling=null,H.tag===5&&(E=H.stateNode,E!==null&&(delete E[t9],delete E[IE],delete E[HQ],delete E[DU],delete E[wU])),H.stateNode=null,H.return=null,H.dependencies=null,H.memoizedProps=null,H.memoizedState=null,H.pendingProps=null,H.stateNode=null,H.updateQueue=null}function fJ(H){return H.tag===5||H.tag===3||H.tag===4}function BF(H){H:for(;;){for(;H.sibling===null;){if(H.return===null||fJ(H.return))return null;H=H.return}H.sibling.return=H.return;for(H=H.sibling;H.tag!==5&&H.tag!==6&&H.tag!==18;){if(H.flags&2)continue H;if(H.child===null||H.tag===4)continue H;else H.child.return=H,H=H.child}if(!(H.flags&2))return H.stateNode}}function NQ(H,E,K){var W=H.tag;if(W===5||W===6)H=H.stateNode,E?K.nodeType===8?K.parentNode.insertBefore(H,E):K.insertBefore(H,E):(K.nodeType===8?(E=K.parentNode,E.insertBefore(H,K)):(E=K,E.appendChild(H)),K=K._reactRootContainer,K!==null&&K!==void 0||E.onclick!==null||(E.onclick=ZW));else if(W!==4&&(H=H.child,H!==null))for(NQ(H,E,K),H=H.sibling;H!==null;)NQ(H,E,K),H=H.sibling}function UQ(H,E,K){var W=H.tag;if(W===5||W===6)H=H.stateNode,E?K.insertBefore(H,E):K.appendChild(H);else if(W!==4&&(H=H.child,H!==null))for(UQ(H,E,K),H=H.sibling;H!==null;)UQ(H,E,K),H=H.sibling}function z8(H,E,K){for(K=K.child;K!==null;)LJ(H,E,K),K=K.sibling}function LJ(H,E,K){if(a9&&typeof a9.onCommitFiberUnmount==="function")try{a9.onCommitFiberUnmount(GW,K)}catch(Z){}switch(K.tag){case 5:d1||$H(K,E);case 6:var W=j1,Q=h9;j1=null,z8(H,E,K),j1=W,h9=Q,j1!==null&&(h9?(H=j1,K=K.stateNode,H.nodeType===8?H.parentNode.removeChild(K):H.removeChild(K)):j1.removeChild(K.stateNode));break;case 18:j1!==null&&(h9?(H=j1,K=K.stateNode,H.nodeType===8?f7(H.parentNode,K):H.nodeType===1&&f7(H,K),zE(H)):f7(j1,K.stateNode));break;case 4:W=j1,Q=h9,j1=K.stateNode.containerInfo,h9=!0,z8(H,E,K),j1=W,h9=Q;break;case 0:case 11:case 14:case 15:if(!d1&&(W=K.updateQueue,W!==null&&(W=W.lastEffect,W!==null))){Q=W=W.next;do{var A=Q,O=A.destroy;A=A.tag,O!==void 0&&((A&2)!==0?DQ(K,E,O):(A&4)!==0&&DQ(K,E,O)),Q=Q.next}while(Q!==W)}z8(H,E,K);break;case 1:if(!d1&&($H(K,E),W=K.stateNode,typeof W.componentWillUnmount==="function"))try{W.props=K.memoizedProps,W.state=K.memoizedState,W.componentWillUnmount()}catch(Z){M1(K,E,Z)}z8(H,E,K);break;case 21:z8(H,E,K);break;case 22:K.mode&1?(d1=(W=d1)||K.memoizedState!==null,z8(H,E,K),d1=W):z8(H,E,K);break;default:z8(H,E,K)}}function qF(H){var E=H.updateQueue;if(E!==null){H.updateQueue=null;var K=H.stateNode;K===null&&(K=H.stateNode=new lU),E.forEach(function(W){var Q=nU.bind(null,H,W);K.has(W)||(K.add(W),W.then(Q,Q))})}}function y9(H,E){var K=E.deletions;if(K!==null)for(var W=0;W<K.length;W++){var Q=K[W];try{var A=H,O=E,Z=O;H:for(;Z!==null;){switch(Z.tag){case 5:j1=Z.stateNode,h9=!1;break H;case 3:j1=Z.stateNode.containerInfo,h9=!0;break H;case 4:j1=Z.stateNode.containerInfo,h9=!0;break H}Z=Z.return}if(j1===null)throw Error($(160));LJ(A,O,Q),j1=null,h9=!1;var F=Q.alternate;F!==null&&(F.return=null),Q.return=null}catch(Y){M1(Q,E,Y)}}if(E.subtreeFlags&12854)for(E=E.child;E!==null;)MJ(E,H),E=E.sibling}function MJ(H,E){var{alternate:K,flags:W}=H;switch(H.tag){case 0:case 11:case 14:case 15:if(y9(E,H),o9(H),W&4){try{UE(3,H,H.return),TW(3,H)}catch(L){M1(H,H.return,L)}try{UE(5,H,H.return)}catch(L){M1(H,H.return,L)}}break;case 1:y9(E,H),o9(H),W&512&&K!==null&&$H(K,K.return);break;case 5:if(y9(E,H),o9(H),W&512&&K!==null&&$H(K,K.return),H.flags&32){var Q=H.stateNode;try{RE(Q,"")}catch(L){M1(H,H.return,L)}}if(W&4&&(Q=H.stateNode,Q!=null)){var A=H.memoizedProps,O=K!==null?K.memoizedProps:A,Z=H.type,F=H.updateQueue;if(H.updateQueue=null,F!==null)try{Z==="input"&&A.type==="radio"&&A.name!=null&&bF(Q,A),g7(Z,O);var Y=g7(Z,A);for(O=0;O<F.length;O+=2){var k=F[O],X=F[O+1];k==="style"?sF(Q,X):k==="dangerouslySetInnerHTML"?cF(Q,X):k==="children"?RE(Q,X):GQ(Q,k,X,Y)}switch(Z){case"input":y7(Q,A);break;case"textarea":dF(Q,A);break;case"select":var D=Q._wrapperState.wasMultiple;Q._wrapperState.wasMultiple=!!A.multiple;var U=A.value;U!=null?H6(Q,!!A.multiple,U,!1):D!==!!A.multiple&&(A.defaultValue!=null?H6(Q,!!A.multiple,A.defaultValue,!0):H6(Q,!!A.multiple,A.multiple?[]:"",!1))}Q[IE]=A}catch(L){M1(H,H.return,L)}}break;case 6:if(y9(E,H),o9(H),W&4){if(H.stateNode===null)throw Error($(162));Q=H.stateNode,A=H.memoizedProps;try{Q.nodeValue=A}catch(L){M1(H,H.return,L)}}break;case 3:if(y9(E,H),o9(H),W&4&&K!==null&&K.memoizedState.isDehydrated)try{zE(E.containerInfo)}catch(L){M1(H,H.return,L)}break;case 4:y9(E,H),o9(H);break;case 13:y9(E,H),o9(H),Q=H.child,Q.flags&8192&&(A=Q.memoizedState!==null,Q.stateNode.isHidden=A,!A||Q.alternate!==null&&Q.alternate.memoizedState!==null||(KA=R1())),W&4&&qF(H);break;case 22:if(k=K!==null&&K.memoizedState!==null,H.mode&1?(d1=(Y=d1)||k,y9(E,H),d1=Y):y9(E,H),o9(H),W&8192){if(Y=H.memoizedState!==null,(H.stateNode.isHidden=Y)&&!k&&(H.mode&1)!==0)for(D0=H,k=H.child;k!==null;){for(X=D0=k;D0!==null;){switch(D=D0,U=D.child,D.tag){case 0:case 11:case 14:case 15:UE(4,D,D.return);break;case 1:$H(D,D.return);var M=D.stateNode;if(typeof M.componentWillUnmount==="function"){W=D,K=D.return;try{E=W,M.props=E.memoizedProps,M.state=E.memoizedState,M.componentWillUnmount()}catch(L){M1(W,K,L)}}break;case 5:$H(D,D.return);break;case 22:if(D.memoizedState!==null){SF(X);continue}}U!==null?(U.return=D,D0=U):SF(X)}k=k.sibling}H:for(k=null,X=H;;){if(X.tag===5){if(k===null){k=X;try{Q=X.stateNode,Y?(A=Q.style,typeof A.setProperty==="function"?A.setProperty("display","none","important"):A.display="none"):(Z=X.stateNode,F=X.memoizedProps.style,O=F!==void 0&&F!==null&&F.hasOwnProperty("display")?F.display:null,Z.style.display=iF("display",O))}catch(L){M1(H,H.return,L)}}}else if(X.tag===6){if(k===null)try{X.stateNode.nodeValue=Y?"":X.memoizedProps}catch(L){M1(H,H.return,L)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===H)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===H)break H;for(;X.sibling===null;){if(X.return===null||X.return===H)break H;k===X&&(k=null),X=X.return}k===X&&(k=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:y9(E,H),o9(H),W&4&&qF(H);break;case 21:break;default:y9(E,H),o9(H)}}function o9(H){var E=H.flags;if(E&2){try{H:{for(var K=H.return;K!==null;){if(fJ(K)){var W=K;break H}K=K.return}throw Error($(160))}switch(W.tag){case 5:var Q=W.stateNode;W.flags&32&&(RE(Q,""),W.flags&=-33);var A=BF(H);UQ(H,A,Q);break;case 3:case 4:var O=W.stateNode.containerInfo,Z=BF(H);NQ(H,Z,O);break;default:throw Error($(161))}}catch(F){M1(H,H.return,F)}H.flags&=-3}E&4096&&(H.flags&=-4097)}function vU(H,E,K){D0=H,RJ(H,E,K)}function RJ(H,E,K){for(var W=(H.mode&1)!==0;D0!==null;){var Q=D0,A=Q.child;if(Q.tag===22&&W){var O=Q.memoizedState!==null||nK;if(!O){var Z=Q.alternate,F=Z!==null&&Z.memoizedState!==null||d1;Z=nK;var Y=d1;if(nK=O,(d1=F)&&!Y)for(D0=Q;D0!==null;)O=D0,F=O.child,O.tag===22&&O.memoizedState!==null?IF(Q):F!==null?(F.return=O,D0=F):IF(Q);for(;A!==null;)D0=A,RJ(A,E,K),A=A.sibling;D0=Q,nK=Z,d1=Y}CF(H,E,K)}else(Q.subtreeFlags&8772)!==0&&A!==null?(A.return=Q,D0=A):CF(H,E,K)}}function CF(H){for(;D0!==null;){var E=D0;if((E.flags&8772)!==0){var K=E.alternate;try{if((E.flags&8772)!==0)switch(E.tag){case 0:case 11:case 15:d1||TW(5,E);break;case 1:var W=E.stateNode;if(E.flags&4&&!d1)if(K===null)W.componentDidMount();else{var Q=E.elementType===E.type?K.memoizedProps:u9(E.type,K.memoizedProps);W.componentDidUpdate(Q,K.memoizedState,W.__reactInternalSnapshotBeforeUpdate)}var A=E.updateQueue;A!==null&&XF(E,A,W);break;case 3:var O=E.updateQueue;if(O!==null){if(K=null,E.child!==null)switch(E.child.tag){case 5:K=E.child.stateNode;break;case 1:K=E.child.stateNode}XF(E,O,K)}break;case 5:var Z=E.stateNode;if(K===null&&E.flags&4){K=Z;var F=E.memoizedProps;switch(E.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&K.focus();break;case"img":F.src&&(K.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(E.memoizedState===null){var Y=E.alternate;if(Y!==null){var k=Y.memoizedState;if(k!==null){var X=k.dehydrated;X!==null&&zE(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}d1||E.flags&512&&wQ(E)}catch(D){M1(E,E.return,D)}}if(E===H){D0=null;break}if(K=E.sibling,K!==null){K.return=E.return,D0=K;break}D0=E.return}}function SF(H){for(;D0!==null;){var E=D0;if(E===H){D0=null;break}var K=E.sibling;if(K!==null){K.return=E.return,D0=K;break}D0=E.return}}function IF(H){for(;D0!==null;){var E=D0;try{switch(E.tag){case 0:case 11:case 15:var K=E.return;try{TW(4,E)}catch(F){M1(E,K,F)}break;case 1:var W=E.stateNode;if(typeof W.componentDidMount==="function"){var Q=E.return;try{W.componentDidMount()}catch(F){M1(E,Q,F)}}var A=E.return;try{wQ(E)}catch(F){M1(E,A,F)}break;case 5:var O=E.return;try{wQ(E)}catch(F){M1(E,O,F)}}}catch(F){M1(E,E.return,F)}if(E===H){D0=null;break}var Z=E.sibling;if(Z!==null){Z.return=E.return,D0=Z;break}D0=E.return}}function e1(){return(i0&6)!==0?R1():aK!==-1?aK:aK=R1()}function p8(H){if((H.mode&1)===0)return 1;if((i0&2)!==0&&p1!==0)return p1&-p1;if(UU.transition!==null)return eK===0&&(eK=QY()),eK;if(H=_0,H!==0)return H;return H=window.event,H=H===void 0?16:XY(H.type),H}function g9(H,E,K,W){if(50<LE)throw LE=0,LQ=null,Error($(185));if(jE(H,K,W),(i0&2)===0||H!==I1)H===I1&&((i0&2)===0&&(vW|=K),B1===4&&S8(H,p1)),Z9(H,W),K===1&&i0===0&&(E.mode&1)===0&&(k6=R1()+500,SW&&m8())}function Z9(H,E){var K=H.callbackNode;LN(H,E);var W=WW(H,H===I1?p1:0);if(W===0)K!==null&&xZ(K),H.callbackNode=null,H.callbackPriority=0;else if(E=W&-W,H.callbackPriority!==E){if(K!=null&&xZ(K),E===1)H.tag===0?NU(lF.bind(null,H)):lY(lF.bind(null,H)),XU(function(){(i0&6)===0&&m8()}),K=null;else{switch(AY(W)){case 1:K=SQ;break;case 4:K=KY;break;case 16:K=KW;break;case 536870912:K=WY;break;default:K=KW}K=SJ(K,VJ.bind(null,H))}H.callbackPriority=E,H.callbackNode=K}}function VJ(H,E){if(aK=-1,eK=0,(i0&6)!==0)throw Error($(327));var K=H.callbackNode;if(A6()&&H.callbackNode!==K)return null;var W=WW(H,H===I1?p1:0);if(W===0)return null;if((W&30)!==0||(W&H.expiredLanes)!==0||E)E=VW(H,W);else{E=W;var Q=i0;i0|=2;var A=GJ();if(I1!==H||p1!==E)Q8=null,k6=R1()+500,kH(H,E);do try{jU();break}catch(Z){PJ(H,Z)}while(1);bQ(),LW.current=A,i0=Q,P1!==null?E=0:(I1=null,p1=0,E=B1)}if(E!==0){if(E===2&&(Q=m7(H),Q!==0&&(W=Q,E=MQ(H,Q))),E===1)throw K=hE,kH(H,0),S8(H,W),Z9(H,R1()),K;if(E===6)S8(H,W);else{if(Q=H.current.alternate,(W&30)===0&&!uU(Q)&&(E=VW(H,W),E===2&&(A=m7(H),A!==0&&(W=A,E=MQ(H,A))),E===1))throw K=hE,kH(H,0),S8(H,W),Z9(H,R1()),K;switch(H.finishedWork=Q,H.finishedLanes=W,E){case 0:case 1:throw Error($(345));case 2:FH(H,W9,Q8);break;case 3:if(S8(H,W),(W&130023424)===W&&(E=KA+500-R1(),10<E)){if(WW(H,0)!==0)break;if(Q=H.suspendedLanes,(Q&W)!==W){e1(),H.pingedLanes|=H.suspendedLanes&Q;break}H.timeoutHandle=_7(FH.bind(null,H,W9,Q8),E);break}FH(H,W9,Q8);break;case 4:if(S8(H,W),(W&4194240)===W)break;E=H.eventTimes;for(Q=-1;0<W;){var O=31-p9(W);A=1<<O,O=E[O],O>Q&&(Q=O),W&=~A}if(W=Q,W=R1()-W,W=(120>W?120:480>W?480:1080>W?1080:1920>W?1920:3000>W?3000:4320>W?4320:1960*yU(W/1960))-W,10<W){H.timeoutHandle=_7(FH.bind(null,H,W9,Q8),W);break}FH(H,W9,Q8);break;case 5:FH(H,W9,Q8);break;default:throw Error($(329))}}}return Z9(H,R1()),H.callbackNode===K?VJ.bind(null,H):null}function MQ(H,E){var K=fE;return H.current.memoizedState.isDehydrated&&(kH(H,E).flags|=256),H=VW(H,E),H!==2&&(E=W9,W9=K,E!==null&&RQ(E)),H}function RQ(H){W9===null?W9=H:W9.push.apply(W9,H)}function uU(H){for(var E=H;;){if(E.flags&16384){var K=E.updateQueue;if(K!==null&&(K=K.stores,K!==null))for(var W=0;W<K.length;W++){var Q=K[W],A=Q.getSnapshot;Q=Q.value;try{if(!x9(A(),Q))return!1}catch(O){return!1}}}if(K=E.child,E.subtreeFlags&16384&&K!==null)K.return=E,E=K;else{if(E===H)break;for(;E.sibling===null;){if(E.return===null||E.return===H)return!0;E=E.return}E.sibling.return=E.return,E=E.sibling}}return!0}function S8(H,E){E&=~EA,E&=~vW,H.suspendedLanes|=E,H.pingedLanes&=~E;for(H=H.expirationTimes;0<E;){var K=31-p9(E),W=1<<K;H[K]=-1,E&=~W}}function lF(H){if((i0&6)!==0)throw Error($(327));A6();var E=WW(H,0);if((E&1)===0)return Z9(H,R1()),null;var K=VW(H,E);if(H.tag!==0&&K===2){var W=m7(H);W!==0&&(E=W,K=MQ(H,W))}if(K===1)throw K=hE,kH(H,0),S8(H,E),Z9(H,R1()),K;if(K===6)throw Error($(345));return H.finishedWork=H.current.alternate,H.finishedLanes=E,FH(H,W9,Q8),Z9(H,R1()),null}function WA(H,E){var K=i0;i0|=1;try{return H(E)}finally{i0=K,i0===0&&(k6=R1()+500,SW&&m8())}}function LH(H){l8!==null&&l8.tag===0&&(i0&6)===0&&A6();var E=i0;i0|=1;var K=q9.transition,W=_0;try{if(q9.transition=null,_0=1,H)return H()}finally{_0=W,q9.transition=K,i0=E,(i0&6)===0&&m8()}}function QA(){X9=_H.current,Z1(_H)}function kH(H,E){H.finishedWork=null,H.finishedLanes=0;var K=H.timeoutHandle;if(K!==-1&&(H.timeoutHandle=-1,JU(K)),P1!==null)for(K=P1.return;K!==null;){var W=K;switch(gQ(W),W.tag){case 1:W=W.type.childContextTypes,W!==null&&W!==void 0&&FW();break;case 3:J6(),Z1(A9),Z1(m1),oQ();break;case 5:sQ(W);break;case 4:J6();break;case 13:Z1(D1);break;case 19:Z1(D1);break;case 10:dQ(W.type._context);break;case 22:case 23:QA()}K=K.return}if(I1=H,P1=H=g8(H.current,null),p1=X9=E,B1=0,hE=null,EA=vW=fH=0,W9=fE=null,JH!==null){for(E=0;E<JH.length;E++)if(K=JH[E],W=K.interleaved,W!==null){K.interleaved=null;var Q=W.next,A=K.pending;if(A!==null){var O=A.next;A.next=Q,W.next=O}K.pending=W}JH=null}return H}function PJ(H,E){do{var K=P1;try{if(bQ(),oK.current=fW,UW){for(var W=w1.memoizedState;W!==null;){var Q=W.queue;Q!==null&&(Q.pending=null),W=W.next}UW=!1}if(UH=0,S1=z1=w1=null,NE=!1,vE=0,HA.current=null,K===null||K.return===null){B1=1,hE=E,P1=null;break}H:{var A=H,O=K.return,Z=K,F=E;if(E=p1,Z.flags|=32768,F!==null&&typeof F==="object"&&typeof F.then==="function"){var Y=F,k=Z,X=k.tag;if((k.mode&1)===0&&(X===0||X===11||X===15)){var D=k.alternate;D?(k.updateQueue=D.updateQueue,k.memoizedState=D.memoizedState,k.lanes=D.lanes):(k.updateQueue=null,k.memoizedState=null)}var U=fF(O);if(U!==null){U.flags&=-257,LF(U,O,Z,A,E),U.mode&1&&UF(A,Y,E),E=U,F=Y;var M=E.updateQueue;if(M===null){var L=new Set;L.add(F),E.updateQueue=L}else M.add(F);break H}else{if((E&1)===0){UF(A,Y,E),AA();break H}F=Error($(426))}}else if(J1&&Z.mode&1){var w=fF(O);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),LF(w,O,Z,A,E),xQ(X6(F,Z));break H}}A=F=X6(F,Z),B1!==4&&(B1=2),fE===null?fE=[A]:fE.push(A),A=O;do{switch(A.tag){case 3:A.flags|=65536,E&=-E,A.lanes|=E;var J=AJ(A,F,E);JF(A,J);break H;case 1:Z=F;var{type:f,stateNode:N}=A;if((A.flags&128)===0&&(typeof f.getDerivedStateFromError==="function"||N!==null&&typeof N.componentDidCatch==="function"&&(j8===null||!j8.has(N)))){A.flags|=65536,E&=-E,A.lanes|=E;var z=OJ(A,Z,E);JF(A,z);break H}}A=A.return}while(A!==null)}BJ(K)}catch(S){E=S,P1===K&&K!==null&&(P1=K=K.return);continue}break}while(1)}function GJ(){var H=LW.current;return LW.current=fW,H===null?fW:H}function AA(){if(B1===0||B1===3||B1===2)B1=4;I1===null||(fH&268435455)===0&&(vW&268435455)===0||S8(I1,p1)}function VW(H,E){var K=i0;i0|=2;var W=GJ();if(I1!==H||p1!==E)Q8=null,kH(H,E);do try{hU();break}catch(Q){PJ(H,Q)}while(1);if(bQ(),i0=K,LW.current=W,P1!==null)throw Error($(261));return I1=null,p1=0,B1}function hU(){for(;P1!==null;)zJ(P1)}function jU(){for(;P1!==null&&!YN();)zJ(P1)}function zJ(H){var E=CJ(H.alternate,H,X9);H.memoizedProps=H.pendingProps,E===null?BJ(H):P1=E,HA.current=null}function BJ(H){var E=H;do{var K=E.alternate;if(H=E.return,(E.flags&32768)===0){if(K=SU(K,E,X9),K!==null){P1=K;return}}else{if(K=IU(K,E),K!==null){K.flags&=32767,P1=K;return}if(H!==null)H.flags|=32768,H.subtreeFlags=0,H.deletions=null;else{B1=6,P1=null;return}}if(E=E.sibling,E!==null){P1=E;return}P1=E=H}while(E!==null);B1===0&&(B1=5)}function FH(H,E,K){var W=_0,Q=q9.transition;try{q9.transition=null,_0=1,pU(H,E,K,W)}finally{q9.transition=Q,_0=W}return null}function pU(H,E,K,W){do A6();while(l8!==null);if((i0&6)!==0)throw Error($(327));K=H.finishedWork;var Q=H.finishedLanes;if(K===null)return null;if(H.finishedWork=null,H.finishedLanes=0,K===H.current)throw Error($(177));H.callbackNode=null,H.callbackPriority=0;var A=K.lanes|K.childLanes;if(MN(H,A),H===I1&&(P1=I1=null,p1=0),(K.subtreeFlags&2064)===0&&(K.flags&2064)===0||bK||(bK=!0,SJ(KW,function(){return A6(),null})),A=(K.flags&15990)!==0,(K.subtreeFlags&15990)!==0||A){A=q9.transition,q9.transition=null;var O=_0;_0=1;var Z=i0;i0|=4,HA.current=null,TU(H,K),MJ(K,H),AU(e7),QW=!!a7,e7=a7=null,H.current=K,vU(K,H,Q),JN(),i0=Z,_0=O,q9.transition=A}else H.current=K;if(bK&&(bK=!1,l8=H,RW=Q),A=H.pendingLanes,A===0&&(j8=null),DN(K.stateNode,W),Z9(H,R1()),E!==null)for(W=H.onRecoverableError,K=0;K<E.length;K++)Q=E[K],W(Q.value,{componentStack:Q.stack,digest:Q.digest});if(MW)throw MW=!1,H=fQ,fQ=null,H;return(RW&1)!==0&&H.tag!==0&&A6(),A=H.pendingLanes,(A&1)!==0?H===LQ?LE++:(LE=0,LQ=H):LE=0,m8(),null}function A6(){if(l8!==null){var H=AY(RW),E=q9.transition,K=_0;try{if(q9.transition=null,_0=16>H?16:H,l8===null)var W=!1;else{if(H=l8,l8=null,RW=0,(i0&6)!==0)throw Error($(331));var Q=i0;i0|=4;for(D0=H.current;D0!==null;){var A=D0,O=A.child;if((D0.flags&16)!==0){var Z=A.deletions;if(Z!==null){for(var F=0;F<Z.length;F++){var Y=Z[F];for(D0=Y;D0!==null;){var k=D0;switch(k.tag){case 0:case 11:case 15:UE(8,k,A)}var X=k.child;if(X!==null)X.return=k,D0=X;else for(;D0!==null;){k=D0;var{sibling:D,return:U}=k;if(UJ(k),k===Y){D0=null;break}if(D!==null){D.return=U,D0=D;break}D0=U}}}var M=A.alternate;if(M!==null){var L=M.child;if(L!==null){M.child=null;do{var w=L.sibling;L.sibling=null,L=w}while(L!==null)}}D0=A}}if((A.subtreeFlags&2064)!==0&&O!==null)O.return=A,D0=O;else H:for(;D0!==null;){if(A=D0,(A.flags&2048)!==0)switch(A.tag){case 0:case 11:case 15:UE(9,A,A.return)}var J=A.sibling;if(J!==null){J.return=A.return,D0=J;break H}D0=A.return}}var f=H.current;for(D0=f;D0!==null;){O=D0;var N=O.child;if((O.subtreeFlags&2064)!==0&&N!==null)N.return=O,D0=N;else H:for(O=f;D0!==null;){if(Z=D0,(Z.flags&2048)!==0)try{switch(Z.tag){case 0:case 11:case 15:TW(9,Z)}}catch(S){M1(Z,Z.return,S)}if(Z===O){D0=null;break H}var z=Z.sibling;if(z!==null){z.return=Z.return,D0=z;break H}D0=Z.return}}if(i0=Q,m8(),a9&&typeof a9.onPostCommitFiberRoot==="function")try{a9.onPostCommitFiberRoot(GW,H)}catch(S){}W=!0}return W}finally{_0=K,q9.transition=E}}return!1}function TF(H,E,K){E=X6(K,E),E=AJ(H,E,1),H=h8(H,E,1),E=e1(),H!==null&&(jE(H,1,E),Z9(H,E))}function M1(H,E,K){if(H.tag===3)TF(H,H,K);else for(;E!==null;){if(E.tag===3){TF(E,H,K);break}else if(E.tag===1){var W=E.stateNode;if(typeof E.type.getDerivedStateFromError==="function"||typeof W.componentDidCatch==="function"&&(j8===null||!j8.has(W))){H=X6(K,H),H=OJ(E,H,1),E=h8(E,H,1),H=e1(),E!==null&&(jE(E,1,H),Z9(E,H));break}}E=E.return}}function gU(H,E,K){var W=H.pingCache;W!==null&&W.delete(E),E=e1(),H.pingedLanes|=H.suspendedLanes&K,I1===H&&(p1&K)===K&&(B1===4||B1===3&&(p1&130023424)===p1&&500>R1()-KA?kH(H,0):EA|=K),Z9(H,E)}function qJ(H,E){E===0&&((H.mode&1)===0?E=1:(E=TK,TK<<=1,(TK&130023424)===0&&(TK=4194304)));var K=e1();H=X8(H,E),H!==null&&(jE(H,E,K),Z9(H,K))}function xU(H){var E=H.memoizedState,K=0;E!==null&&(K=E.retryLane),qJ(H,K)}function nU(H,E){var K=0;switch(H.tag){case 13:var{stateNode:W,memoizedState:Q}=H;Q!==null&&(K=Q.retryLane);break;case 19:W=H.stateNode;break;default:throw Error($(314))}W!==null&&W.delete(E),qJ(H,K)}function SJ(H,E){return EY(H,E)}function bU(H,E,K,W){this.tag=H,this.key=K,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=E,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=W,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function B9(H,E,K,W){return new bU(H,E,K,W)}function OA(H){return H=H.prototype,!(!H||!H.isReactComponent)}function dU(H){if(typeof H==="function")return OA(H)?1:0;if(H!==void 0&&H!==null){if(H=H.$$typeof,H===BQ)return 11;if(H===qQ)return 14}return 2}function g8(H,E){var K=H.alternate;return K===null?(K=B9(H.tag,E,H.key,H.mode),K.elementType=H.elementType,K.type=H.type,K.stateNode=H.stateNode,K.alternate=H,H.alternate=K):(K.pendingProps=E,K.type=H.type,K.flags=0,K.subtreeFlags=0,K.deletions=null),K.flags=H.flags&14680064,K.childLanes=H.childLanes,K.lanes=H.lanes,K.child=H.child,K.memoizedProps=H.memoizedProps,K.memoizedState=H.memoizedState,K.updateQueue=H.updateQueue,E=H.dependencies,K.dependencies=E===null?null:{lanes:E.lanes,firstContext:E.firstContext},K.sibling=H.sibling,K.index=H.index,K.ref=H.ref,K}function $K(H,E,K,W,Q,A){var O=2;if(W=H,typeof H==="function")OA(H)&&(O=1);else if(typeof H==="string")O=5;else H:switch(H){case mH:return DH(K.children,Q,A,E);case zQ:O=8,Q|=8;break;case S7:return H=B9(12,K,E,Q|2),H.elementType=S7,H.lanes=A,H;case I7:return H=B9(13,K,E,Q),H.elementType=I7,H.lanes=A,H;case l7:return H=B9(19,K,E,Q),H.elementType=l7,H.lanes=A,H;case gF:return yW(K,Q,A,E);default:if(typeof H==="object"&&H!==null)switch(H.$$typeof){case jF:O=10;break H;case pF:O=9;break H;case BQ:O=11;break H;case qQ:O=14;break H;case B8:O=16,W=null;break H}throw Error($(130,H==null?H:typeof H,""))}return E=B9(O,K,E,Q),E.elementType=H,E.type=W,E.lanes=A,E}function DH(H,E,K,W){return H=B9(7,H,W,E),H.lanes=K,H}function yW(H,E,K,W){return H=B9(22,H,W,E),H.elementType=gF,H.lanes=K,H.stateNode={isHidden:!1},H}function B7(H,E,K){return H=B9(6,H,null,E),H.lanes=K,H}function q7(H,E,K){return E=B9(4,H.children!==null?H.children:[],H.key,E),E.lanes=K,E.stateNode={containerInfo:H.containerInfo,pendingChildren:null,implementation:H.implementation},E}function mU(H,E,K,W,Q){this.tag=E,this.containerInfo=H,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=J7(0),this.expirationTimes=J7(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=J7(0),this.identifierPrefix=W,this.onRecoverableError=Q,this.mutableSourceEagerHydrationData=null}function ZA(H,E,K,W,Q,A,O,Z,F){return H=new mU(H,E,K,Z,F),E===1?(E=1,A===!0&&(E|=8)):E=0,A=B9(3,null,null,E),H.current=A,A.stateNode=H,A.memoizedState={element:W,isDehydrated:K,cache:null,transitions:null,pendingSuspenseBoundaries:null},cQ(A),H}function cU(H,E,K){var W=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dH,key:W==null?null:""+W,children:H,containerInfo:E,implementation:K}}function IJ(H){if(!H)return n8;H=H._reactInternals;H:{if(RH(H)!==H||H.tag!==1)throw Error($(170));var E=H;do{switch(E.tag){case 3:E=E.stateNode.context;break H;case 1:if(O9(E.type)){E=E.stateNode.__reactInternalMemoizedMergedChildContext;break H}}E=E.return}while(E!==null);throw Error($(171))}if(H.tag===1){var K=H.type;if(O9(K))return IY(H,K,E)}return E}function lJ(H,E,K,W,Q,A,O,Z,F){return H=ZA(K,W,!0,H,Q,A,O,Z,F),H.context=IJ(null),K=H.current,W=e1(),Q=p8(K),A=F8(W,Q),A.callback=E!==void 0&&E!==null?E:null,h8(K,A,Q),H.current.lanes=Q,jE(H,Q,W),Z9(H,W),H}function uW(H,E,K,W){var Q=E.current,A=e1(),O=p8(Q);return K=IJ(K),E.context===null?E.context=K:E.pendingContext=K,E=F8(A,O),E.payload={element:H},W=W===void 0?null:W,W!==null&&(E.callback=W),H=h8(Q,E,O),H!==null&&(g9(H,Q,O,A),sK(H,Q,O)),O}function PW(H){if(H=H.current,!H.child)return null;switch(H.child.tag){case 5:return H.child.stateNode;default:return H.child.stateNode}}function vF(H,E){if(H=H.memoizedState,H!==null&&H.dehydrated!==null){var K=H.retryLane;H.retryLane=K!==0&&K<E?K:E}}function FA(H,E){vF(H,E),(H=H.alternate)&&vF(H,E)}function iU(){return null}function YA(H){this._internalRoot=H}function hW(H){this._internalRoot=H}function JA(H){return!(!H||H.nodeType!==1&&H.nodeType!==9&&H.nodeType!==11)}function jW(H){return!(!H||H.nodeType!==1&&H.nodeType!==9&&H.nodeType!==11&&(H.nodeType!==8||H.nodeValue!==" react-mount-point-unstable "))}function yF(){}function sU(H,E,K,W,Q){if(Q){if(typeof W==="function"){var A=W;W=function(){var Y=PW(O);A.call(Y)}}var O=lJ(E,W,H,0,null,!1,!1,"",yF);return H._reactRootContainer=O,H[J8]=O.current,CE(H.nodeType===8?H.parentNode:H),LH(),O}for(;Q=H.lastChild;)H.removeChild(Q);if(typeof W==="function"){var Z=W;W=function(){var Y=PW(F);Z.call(Y)}}var F=ZA(H,0,!1,null,null,!1,!1,"",yF);return H._reactRootContainer=F,H[J8]=F.current,CE(H.nodeType===8?H.parentNode:H),LH(function(){uW(E,F,K,W)}),F}function pW(H,E,K,W,Q){var A=K._reactRootContainer;if(A){var O=A;if(typeof Q==="function"){var Z=Q;Q=function(){var F=PW(O);Z.call(F)}}uW(E,O,H,Q)}else O=sU(K,E,H,Q,W);return PW(O)}var uF,X1,hF,ME,Y8,C7,tw,lZ,TZ,g1,VQ,D8,CK,dH,mH,zQ,S7,jF,pF,BQ,I7,l7,qQ,B8,gF,vZ,N1,O7,Z7=!1,WE,IK,cF,JE,KN,WN,x7=null,n7=null,E6=null,K6=null,Y7=!1,b7=!1,OH,XE=!1,HW=null,EW=!1,d7=null,AN,EY,xZ,YN,JN,R1,XN,SQ,KY,KW,kN,WY,GW=null,a9=null,p9,wN,NN,lK=64,TK=4194304,_0=0,OY,lQ,ZY,FY,YY,c7=!1,vK,T8=null,v8=null,y8=null,PE,GE,C8,RN,W6,QW=!0,AW=null,I8=null,vQ=null,mK=null,D6,yQ,pE,BN,X7,k7,$6,zW,mZ,qN,CN,SN,D7,IN,lN,TN,vN,yN,cZ,uN,hN,jN,gN,xN,nN,iZ,bN,dN,mN,cN,iN,sN,oN,hQ,kE=null,rN,DY,sZ,oZ=!1,cH=!1,eN,DE=null,BE=null,fY=!1,AE,OE,iK,x9,OU,iH=null,s7=null,wE=null,o7=!1,sH,w7,VY,PY,GY,zY,BY,qY,_Z,FE,r7,t7,ZE,YE,ZU,hK,FU,YU,a7=null,e7=null,_7,JU,WF,XU,w6,t9,IE,J8,HQ,DU,wU,EQ,rH=-1,n8,m1,A9,wH,A8=null,SW=!1,L7=!1,tH,aH=0,JW=null,XW=0,G9,z9=0,NH=null,O8=1,Z8="",D9=null,k9=null,J1=!1,j9=null,UU,Y6,hY,kW,DW=null,eH=null,nQ=null,JH=null,q8=!1,xE,e9,lE,TE,D1,M7,oK,R7,UH=0,w1=null,z1=null,S1=null,UW=!1,NE=!1,vE=0,fU=0,fW,VU,PU,GU,lW,zU,BU,Q9=!1,JQ,DJ,kQ,wJ,NJ,nK=!1,d1=!1,lU,D0=null,zF=!1,j1=null,h9=!1,yU,LW,HA,q9,i0=0,I1=null,P1=null,p1=0,X9=0,_H,B1=0,hE=null,fH=0,vW=0,EA=0,fE=null,W9=null,KA=0,k6=1/0,Q8=null,MW=!1,fQ=null,j8=null,bK=!1,l8=null,RW=0,LE=0,LQ=null,aK=-1,eK=0,CJ,TJ,oU,EE,rU,bH,vJ,yJ=function(H,E){var K=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!JA(E))throw Error($(200));return cU(H,E,null,K)},uJ=function(H,E){if(!JA(H))throw Error($(299));var K=!1,W="",Q=TJ;return E!==null&&E!==void 0&&(E.unstable_strictMode===!0&&(K=!0),E.identifierPrefix!==void 0&&(W=E.identifierPrefix),E.onRecoverableError!==void 0&&(Q=E.onRecoverableError)),E=ZA(H,1,!1,null,null,K,!1,W,Q),H[J8]=E.current,CE(H.nodeType===8?H.parentNode:H),new YA(E)},hJ=function(H){if(H==null)return null;if(H.nodeType===1)return H;var E=H._reactInternals;if(E===void 0){if(typeof H.render==="function")throw Error($(188));throw H=Object.keys(H).join(","),Error($(268,H))}return H=_F(E),H=H===null?null:H.stateNode,H},jJ=function(H){return LH(H)},pJ=function(H,E,K){if(!jW(E))throw Error($(200));return pW(null,H,E,!0,K)},gJ=function(H,E,K){if(!JA(H))throw Error($(405));var W=K!=null&&K.hydratedSources||null,Q=!1,A="",O=TJ;if(K!==null&&K!==void 0&&(K.unstable_strictMode===!0&&(Q=!0),K.identifierPrefix!==void 0&&(A=K.identifierPrefix),K.onRecoverableError!==void 0&&(O=K.onRecoverableError)),E=lJ(E,null,H,1,K!=null?K:null,Q,!1,A,O),H[J8]=E.current,CE(H),W)for(H=0;H<W.length;H++)K=W[H],Q=K._getVersion,Q=Q(K._source),E.mutableSourceEagerHydrationData==null?E.mutableSourceEagerHydrationData=[K,Q]:E.mutableSourceEagerHydrationData.push(K,Q);return new hW(E)},xJ=function(H,E,K){if(!jW(E))throw Error($(200));return pW(null,H,E,!1,K)},nJ=function(H){if(!jW(H))throw Error($(40));return H._reactRootContainer?(LH(function(){pW(null,null,H,!1,function(){H._reactRootContainer=null,H[J8]=null})}),!0):!1},bJ,dJ=function(H,E,K,W){if(!jW(K))throw Error($(200));if(H==null||H._reactInternals===void 0)throw Error($(38));return pW(H,E,K,!1,W)},mJ="18.3.1-next-f1338f8080-20240426";var cJ=lD(()=>{uF=QH(i6(),1),X1=QH(IZ(),1);hF=new Set,ME={};Y8=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),C7=Object.prototype.hasOwnProperty,tw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lZ={},TZ={};g1={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(H){g1[H]=new $1(H,0,!1,H,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(H){var E=H[0];g1[E]=new $1(E,1,!1,H[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(H){g1[H]=new $1(H,2,!1,H.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(H){g1[H]=new $1(H,2,!1,H,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(H){g1[H]=new $1(H,3,!1,H.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(H){g1[H]=new $1(H,3,!0,H,null,!1,!1)});["capture","download"].forEach(function(H){g1[H]=new $1(H,4,!1,H,null,!1,!1)});["cols","rows","size","span"].forEach(function(H){g1[H]=new $1(H,6,!1,H,null,!1,!1)});["rowSpan","start"].forEach(function(H){g1[H]=new $1(H,5,!1,H.toLowerCase(),null,!1,!1)});VQ=/[\-:]([a-z])/g;"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(H){var E=H.replace(VQ,PQ);g1[E]=new $1(E,1,!1,H,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(H){var E=H.replace(VQ,PQ);g1[E]=new $1(E,1,!1,H,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(H){var E=H.replace(VQ,PQ);g1[E]=new $1(E,1,!1,H,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(H){g1[H]=new $1(H,1,!1,H.toLowerCase(),null,!1,!1)});g1.xlinkHref=new $1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(H){g1[H]=new $1(H,1,!1,H.toLowerCase(),null,!0,!0)});D8=uF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,CK=Symbol.for("react.element"),dH=Symbol.for("react.portal"),mH=Symbol.for("react.fragment"),zQ=Symbol.for("react.strict_mode"),S7=Symbol.for("react.profiler"),jF=Symbol.for("react.provider"),pF=Symbol.for("react.context"),BQ=Symbol.for("react.forward_ref"),I7=Symbol.for("react.suspense"),l7=Symbol.for("react.suspense_list"),qQ=Symbol.for("react.memo"),B8=Symbol.for("react.lazy"),gF=Symbol.for("react.offscreen"),vZ=Symbol.iterator;N1=Object.assign;WE=Array.isArray;cF=function(H){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(E,K,W,Q){MSApp.execUnsafeLocalFunction(function(){return H(E,K,W,Q)})}:H}(function(H,E){if(H.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in H)H.innerHTML=E;else{IK=IK||document.createElement("div"),IK.innerHTML="<svg>"+E.valueOf().toString()+"</svg>";for(E=IK.firstChild;H.firstChild;)H.removeChild(H.firstChild);for(;E.firstChild;)H.appendChild(E.firstChild)}});JE={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KN=["Webkit","ms","Moz","O"];Object.keys(JE).forEach(function(H){KN.forEach(function(E){E=E+H.charAt(0).toUpperCase()+H.substring(1),JE[E]=JE[H]})});WN=N1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});if(Y8)try{OH={},Object.defineProperty(OH,"passive",{get:function(){b7=!0}}),window.addEventListener("test",OH,OH),window.removeEventListener("test",OH,OH)}catch(H){b7=!1}AN={onError:function(H){XE=!0,HW=H}};EY=X1.unstable_scheduleCallback,xZ=X1.unstable_cancelCallback,YN=X1.unstable_shouldYield,JN=X1.unstable_requestPaint,R1=X1.unstable_now,XN=X1.unstable_getCurrentPriorityLevel,SQ=X1.unstable_ImmediatePriority,KY=X1.unstable_UserBlockingPriority,KW=X1.unstable_NormalPriority,kN=X1.unstable_LowPriority,WY=X1.unstable_IdlePriority;p9=Math.clz32?Math.clz32:UN,wN=Math.log,NN=Math.LN2;vK=[],PE=new Map,GE=new Map,C8=[],RN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");W6=D8.ReactCurrentBatchConfig;D6={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(H){return H.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yQ=w9(D6),pE=N1({},D6,{view:0,detail:0}),BN=w9(pE),zW=N1({},pE,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uQ,button:0,buttons:0,relatedTarget:function(H){return H.relatedTarget===void 0?H.fromElement===H.srcElement?H.toElement:H.fromElement:H.relatedTarget},movementX:function(H){if("movementX"in H)return H.movementX;return H!==$6&&($6&&H.type==="mousemove"?(X7=H.screenX-$6.screenX,k7=H.screenY-$6.screenY):k7=X7=0,$6=H),X7},movementY:function(H){return"movementY"in H?H.movementY:k7}}),mZ=w9(zW),qN=N1({},zW,{dataTransfer:0}),CN=w9(qN),SN=N1({},pE,{relatedTarget:0}),D7=w9(SN),IN=N1({},D6,{animationName:0,elapsedTime:0,pseudoElement:0}),lN=w9(IN),TN=N1({},D6,{clipboardData:function(H){return"clipboardData"in H?H.clipboardData:window.clipboardData}}),vN=w9(TN),yN=N1({},D6,{data:0}),cZ=w9(yN),uN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};gN=N1({},pE,{key:function(H){if(H.key){var E=uN[H.key]||H.key;if(E!=="Unidentified")return E}return H.type==="keypress"?(H=cK(H),H===13?"Enter":String.fromCharCode(H)):H.type==="keydown"||H.type==="keyup"?hN[H.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uQ,charCode:function(H){return H.type==="keypress"?cK(H):0},keyCode:function(H){return H.type==="keydown"||H.type==="keyup"?H.keyCode:0},which:function(H){return H.type==="keypress"?cK(H):H.type==="keydown"||H.type==="keyup"?H.keyCode:0}}),xN=w9(gN),nN=N1({},zW,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iZ=w9(nN),bN=N1({},pE,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uQ}),dN=w9(bN),mN=N1({},D6,{propertyName:0,elapsedTime:0,pseudoElement:0}),cN=w9(mN),iN=N1({},zW,{deltaX:function(H){return"deltaX"in H?H.deltaX:("wheelDeltaX"in H)?-H.wheelDeltaX:0},deltaY:function(H){return"deltaY"in H?H.deltaY:("wheelDeltaY"in H)?-H.wheelDeltaY:("wheelDelta"in H)?-H.wheelDelta:0},deltaZ:0,deltaMode:0}),sN=w9(iN),oN=[9,13,27,32],hQ=Y8&&"CompositionEvent"in window;Y8&&"documentMode"in document&&(kE=document.documentMode);rN=Y8&&"TextEvent"in window&&!kE,DY=Y8&&(!hQ||kE&&8<kE&&11>=kE),sZ=String.fromCharCode(32);eN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};if(Y8){if(Y8){if(OE="oninput"in document,!OE)iK=document.createElement("div"),iK.setAttribute("oninput","return;"),OE=typeof iK.oninput==="function";AE=OE}else AE=!1;fY=AE&&(!document.documentMode||9<document.documentMode)}x9=typeof Object.is==="function"?Object.is:QU;OU=Y8&&"documentMode"in document&&11>=document.documentMode;sH={animationend:uK("Animation","AnimationEnd"),animationiteration:uK("Animation","AnimationIteration"),animationstart:uK("Animation","AnimationStart"),transitionend:uK("Transition","TransitionEnd")},w7={},VY={};Y8&&(VY=document.createElement("div").style,("AnimationEvent"in window)||(delete sH.animationend.animation,delete sH.animationiteration.animation,delete sH.animationstart.animation),("TransitionEvent"in window)||delete sH.transitionend.transition);PY=qW("animationend"),GY=qW("animationiteration"),zY=qW("animationstart"),BY=qW("transitionend"),qY=new Map,_Z="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");for(ZE=0;ZE<_Z.length;ZE++)FE=_Z[ZE],r7=FE.toLowerCase(),t7=FE[0].toUpperCase()+FE.slice(1),b8(r7,"on"+t7);b8(PY,"onAnimationEnd");b8(GY,"onAnimationIteration");b8(zY,"onAnimationStart");b8("dblclick","onDoubleClick");b8("focusin","onFocus");b8("focusout","onBlur");b8(BY,"onTransitionEnd");O6("onMouseEnter",["mouseout","mouseover"]);O6("onMouseLeave",["mouseout","mouseover"]);O6("onPointerEnter",["pointerout","pointerover"]);O6("onPointerLeave",["pointerout","pointerover"]);MH("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));MH("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));MH("onBeforeInput",["compositionend","keypress","textInput","paste"]);MH("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));MH("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));MH("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));YE="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZU=new Set("cancel close invalid load scroll toggle".split(" ").concat(YE));hK="_reactListening"+Math.random().toString(36).slice(2);FU=/\r\n?/g,YU=/\u0000|\uFFFD/g;_7=typeof setTimeout==="function"?setTimeout:void 0,JU=typeof clearTimeout==="function"?clearTimeout:void 0,WF=typeof Promise==="function"?Promise:void 0,XU=typeof queueMicrotask==="function"?queueMicrotask:typeof WF<"u"?function(H){return WF.resolve(null).then(H).catch(kU)}:_7;w6=Math.random().toString(36).slice(2),t9="__reactFiber$"+w6,IE="__reactProps$"+w6,J8="__reactContainer$"+w6,HQ="__reactEvents$"+w6,DU="__reactListeners$"+w6,wU="__reactHandles$"+w6;EQ=[];n8={},m1=d8(n8),A9=d8(!1),wH=n8;tH=[],G9=[];UU=D8.ReactCurrentBatchConfig;Y6=uY(!0),hY=uY(!1),kW=d8(null);xE={},e9=d8(xE),lE=d8(xE),TE=d8(xE);D1=d8(0);M7=[];oK=D8.ReactCurrentDispatcher,R7=D8.ReactCurrentBatchConfig;fW={readContext:C9,useCallback:n1,useContext:n1,useEffect:n1,useImperativeHandle:n1,useInsertionEffect:n1,useLayoutEffect:n1,useMemo:n1,useReducer:n1,useRef:n1,useState:n1,useDebugValue:n1,useDeferredValue:n1,useTransition:n1,useMutableSource:n1,useSyncExternalStore:n1,useId:n1,unstable_isNewReconciler:!1},VU={readContext:C9,useCallback:function(H,E){return r9().memoizedState=[H,E===void 0?null:E],H},useContext:C9,useEffect:DF,useImperativeHandle:function(H,E,K){return K=K!==null&&K!==void 0?K.concat([H]):null,rK(4194308,4,tY.bind(null,E,H),K)},useLayoutEffect:function(H,E){return rK(4194308,4,H,E)},useInsertionEffect:function(H,E){return rK(4,2,H,E)},useMemo:function(H,E){var K=r9();return E=E===void 0?null:E,H=H(),K.memoizedState=[H,E],H},useReducer:function(H,E,K){var W=r9();return E=K!==void 0?K(E):E,W.memoizedState=W.baseState=E,H={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:H,lastRenderedState:E},W.queue=H,H=H.dispatch=MU.bind(null,w1,H),[W.memoizedState,H]},useRef:function(H){var E=r9();return H={current:H},E.memoizedState=H},useState:kF,useDebugValue:$Q,useDeferredValue:function(H){return r9().memoizedState=H},useTransition:function(){var H=kF(!1),E=H[0];return H=LU.bind(null,H[1]),r9().memoizedState=H,[E,H]},useMutableSource:function(){},useSyncExternalStore:function(H,E,K){var W=w1,Q=r9();if(J1){if(K===void 0)throw Error($(407));K=K()}else{if(K=E(),I1===null)throw Error($(349));(UH&30)!==0||bY(W,E,K)}Q.memoizedState=K;var A={value:K,getSnapshot:E};return Q.queue=A,DF(mY.bind(null,W,A,H),[H]),W.flags|=2048,uE(9,dY.bind(null,W,A,K,E),void 0,null),K},useId:function(){var H=r9(),E=I1.identifierPrefix;if(J1){var K=Z8,W=O8;K=(W&~(1<<32-p9(W)-1)).toString(32)+K,E=":"+E+"R"+K,K=vE++,0<K&&(E+="H"+K.toString(32)),E+=":"}else K=fU++,E=":"+E+"r"+K.toString(32)+":";return H.memoizedState=E},unstable_isNewReconciler:!1},PU={readContext:C9,useCallback:eY,useContext:C9,useEffect:eQ,useImperativeHandle:aY,useInsertionEffect:oY,useLayoutEffect:rY,useMemo:$Y,useReducer:V7,useRef:sY,useState:function(){return V7(yE)},useDebugValue:$Q,useDeferredValue:function(H){var E=S9();return _Y(E,z1.memoizedState,H)},useTransition:function(){var H=V7(yE)[0],E=S9().memoizedState;return[H,E]},useMutableSource:xY,useSyncExternalStore:nY,useId:HJ,unstable_isNewReconciler:!1},GU={readContext:C9,useCallback:eY,useContext:C9,useEffect:eQ,useImperativeHandle:aY,useInsertionEffect:oY,useLayoutEffect:rY,useMemo:$Y,useReducer:P7,useRef:sY,useState:function(){return P7(yE)},useDebugValue:$Q,useDeferredValue:function(H){var E=S9();return z1===null?E.memoizedState=H:_Y(E,z1.memoizedState,H)},useTransition:function(){var H=P7(yE)[0],E=S9().memoizedState;return[H,E]},useMutableSource:xY,useSyncExternalStore:nY,useId:HJ,unstable_isNewReconciler:!1};lW={isMounted:function(H){return(H=H._reactInternals)?RH(H)===H:!1},enqueueSetState:function(H,E,K){H=H._reactInternals;var W=e1(),Q=p8(H),A=F8(W,Q);A.payload=E,K!==void 0&&K!==null&&(A.callback=K),E=h8(H,A,Q),E!==null&&(g9(E,H,Q,W),sK(E,H,Q))},enqueueReplaceState:function(H,E,K){H=H._reactInternals;var W=e1(),Q=p8(H),A=F8(W,Q);A.tag=1,A.payload=E,K!==void 0&&K!==null&&(A.callback=K),E=h8(H,A,Q),E!==null&&(g9(E,H,Q,W),sK(E,H,Q))},enqueueForceUpdate:function(H,E){H=H._reactInternals;var K=e1(),W=p8(H),Q=F8(K,W);Q.tag=2,E!==void 0&&E!==null&&(Q.callback=E),E=h8(H,Q,W),E!==null&&(g9(E,H,W,K),sK(E,H,W))}};zU=typeof WeakMap==="function"?WeakMap:Map;BU=D8.ReactCurrentOwner;JQ={dehydrated:null,treeContext:null,retryLane:0};DJ=function(H,E){for(var K=E.child;K!==null;){if(K.tag===5||K.tag===6)H.appendChild(K.stateNode);else if(K.tag!==4&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===E)break;for(;K.sibling===null;){if(K.return===null||K.return===E)return;K=K.return}K.sibling.return=K.return,K=K.sibling}};kQ=function(){};wJ=function(H,E,K,W){var Q=H.memoizedProps;if(Q!==W){H=E.stateNode,XH(e9.current);var A=null;switch(K){case"input":Q=v7(H,Q),W=v7(H,W),A=[];break;case"select":Q=N1({},Q,{value:void 0}),W=N1({},W,{value:void 0}),A=[];break;case"textarea":Q=h7(H,Q),W=h7(H,W),A=[];break;default:typeof Q.onClick!=="function"&&typeof W.onClick==="function"&&(H.onclick=ZW)}p7(K,W);var O;K=null;for(Y in Q)if(!W.hasOwnProperty(Y)&&Q.hasOwnProperty(Y)&&Q[Y]!=null)if(Y==="style"){var Z=Q[Y];for(O in Z)Z.hasOwnProperty(O)&&(K||(K={}),K[O]="")}else Y!=="dangerouslySetInnerHTML"&&Y!=="children"&&Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&Y!=="autoFocus"&&(ME.hasOwnProperty(Y)?A||(A=[]):(A=A||[]).push(Y,null));for(Y in W){var F=W[Y];if(Z=Q!=null?Q[Y]:void 0,W.hasOwnProperty(Y)&&F!==Z&&(F!=null||Z!=null))if(Y==="style")if(Z){for(O in Z)!Z.hasOwnProperty(O)||F&&F.hasOwnProperty(O)||(K||(K={}),K[O]="");for(O in F)F.hasOwnProperty(O)&&Z[O]!==F[O]&&(K||(K={}),K[O]=F[O])}else K||(A||(A=[]),A.push(Y,K)),K=F;else Y==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,Z=Z?Z.__html:void 0,F!=null&&Z!==F&&(A=A||[]).push(Y,F)):Y==="children"?typeof F!=="string"&&typeof F!=="number"||(A=A||[]).push(Y,""+F):Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&(ME.hasOwnProperty(Y)?(F!=null&&Y==="onScroll"&&O1("scroll",H),A||Z===F||(A=[])):(A=A||[]).push(Y,F))}K&&(A=A||[]).push("style",K);var Y=A;if(E.updateQueue=Y)E.flags|=4}};NJ=function(H,E,K,W){K!==W&&(E.flags|=4)};lU=typeof WeakSet==="function"?WeakSet:Set;yU=Math.ceil,LW=D8.ReactCurrentDispatcher,HA=D8.ReactCurrentOwner,q9=D8.ReactCurrentBatchConfig,_H=d8(0);CJ=function(H,E,K){if(H!==null)if(H.memoizedProps!==E.pendingProps||A9.current)Q9=!0;else{if((H.lanes&K)===0&&(E.flags&128)===0)return Q9=!1,CU(H,E,K);Q9=(H.flags&131072)!==0?!0:!1}else Q9=!1,J1&&(E.flags&1048576)!==0&&TY(E,XW,E.index);switch(E.lanes=0,E.tag){case 2:var W=E.type;tK(H,E),H=E.pendingProps;var Q=Z6(E,m1.current);Q6(E,K),Q=tQ(null,E,W,H,Q,K);var A=aQ();return E.flags|=1,typeof Q==="object"&&Q!==null&&typeof Q.render==="function"&&Q.$$typeof===void 0?(E.tag=1,E.memoizedState=null,E.updateQueue=null,O9(W)?(A=!0,YW(E)):A=!1,E.memoizedState=Q.state!==null&&Q.state!==void 0?Q.state:null,cQ(E),Q.updater=lW,E.stateNode=Q,Q._reactInternals=E,OQ(E,W,H,K),E=YQ(null,E,W,!0,A,K)):(E.tag=0,J1&&A&&pQ(E),a1(null,E,Q,K),E=E.child),E;case 16:W=E.elementType;H:{switch(tK(H,E),H=E.pendingProps,Q=W._init,W=Q(W._payload),E.type=W,Q=E.tag=dU(W),H=u9(W,H),Q){case 0:E=FQ(null,E,W,H,K);break H;case 1:E=VF(null,E,W,H,K);break H;case 11:E=MF(null,E,W,H,K);break H;case 14:E=RF(null,E,W,u9(W.type,H),K);break H}throw Error($(306,W,""))}return E;case 0:return W=E.type,Q=E.pendingProps,Q=E.elementType===W?Q:u9(W,Q),FQ(H,E,W,Q,K);case 1:return W=E.type,Q=E.pendingProps,Q=E.elementType===W?Q:u9(W,Q),VF(H,E,W,Q,K);case 3:H:{if(JJ(E),H===null)throw Error($(387));W=E.pendingProps,A=E.memoizedState,Q=A.element,pY(H,E),wW(E,W,null,K);var O=E.memoizedState;if(W=O.element,A.isDehydrated)if(A={element:W,isDehydrated:!1,cache:O.cache,pendingSuspenseBoundaries:O.pendingSuspenseBoundaries,transitions:O.transitions},E.updateQueue.baseState=A,E.memoizedState=A,E.flags&256){Q=X6(Error($(423)),E),E=PF(H,E,W,K,Q);break H}else if(W!==Q){Q=X6(Error($(424)),E),E=PF(H,E,W,K,Q);break H}else for(k9=u8(E.stateNode.containerInfo.firstChild),D9=E,J1=!0,j9=null,K=hY(E,null,W,K),E.child=K;K;)K.flags=K.flags&-3|4096,K=K.sibling;else{if(F6(),W===Q){E=k8(H,E,K);break H}a1(H,E,W,K)}E=E.child}return E;case 5:return gY(E),H===null&&WQ(E),W=E.type,Q=E.pendingProps,A=H!==null?H.memoizedProps:null,O=Q.children,$7(W,Q)?O=null:A!==null&&$7(W,A)&&(E.flags|=32),YJ(H,E),a1(H,E,O,K),E.child;case 6:return H===null&&WQ(E),null;case 13:return XJ(H,E,K);case 4:return iQ(E,E.stateNode.containerInfo),W=E.pendingProps,H===null?E.child=Y6(E,null,W,K):a1(H,E,W,K),E.child;case 11:return W=E.type,Q=E.pendingProps,Q=E.elementType===W?Q:u9(W,Q),MF(H,E,W,Q,K);case 7:return a1(H,E,E.pendingProps,K),E.child;case 8:return a1(H,E,E.pendingProps.children,K),E.child;case 12:return a1(H,E,E.pendingProps.children,K),E.child;case 10:H:{if(W=E.type._context,Q=E.pendingProps,A=E.memoizedProps,O=Q.value,Q1(kW,W._currentValue),W._currentValue=O,A!==null)if(x9(A.value,O)){if(A.children===Q.children&&!A9.current){E=k8(H,E,K);break H}}else for(A=E.child,A!==null&&(A.return=E);A!==null;){var Z=A.dependencies;if(Z!==null){O=A.child;for(var F=Z.firstContext;F!==null;){if(F.context===W){if(A.tag===1){F=F8(-1,K&-K),F.tag=2;var Y=A.updateQueue;if(Y!==null){Y=Y.shared;var k=Y.pending;k===null?F.next=F:(F.next=k.next,k.next=F),Y.pending=F}}A.lanes|=K,F=A.alternate,F!==null&&(F.lanes|=K),QQ(A.return,K,E),Z.lanes|=K;break}F=F.next}}else if(A.tag===10)O=A.type===E.type?null:A.child;else if(A.tag===18){if(O=A.return,O===null)throw Error($(341));O.lanes|=K,Z=O.alternate,Z!==null&&(Z.lanes|=K),QQ(O,K,E),O=A.sibling}else O=A.child;if(O!==null)O.return=A;else for(O=A;O!==null;){if(O===E){O=null;break}if(A=O.sibling,A!==null){A.return=O.return,O=A;break}O=O.return}A=O}a1(H,E,Q.children,K),E=E.child}return E;case 9:return Q=E.type,W=E.pendingProps.children,Q6(E,K),Q=C9(Q),W=W(Q),E.flags|=1,a1(H,E,W,K),E.child;case 14:return W=E.type,Q=u9(W,E.pendingProps),Q=u9(W.type,Q),RF(H,E,W,Q,K);case 15:return ZJ(H,E,E.type,E.pendingProps,K);case 17:return W=E.type,Q=E.pendingProps,Q=E.elementType===W?Q:u9(W,Q),tK(H,E),E.tag=1,O9(W)?(H=!0,YW(E)):H=!1,Q6(E,K),QJ(E,W,Q),OQ(E,W,Q,K),YQ(null,E,W,!0,H,K);case 19:return kJ(H,E,K);case 22:return FJ(H,E,K)}throw Error($(156,E.tag))};TJ=typeof reportError==="function"?reportError:function(H){console.error(H)};hW.prototype.render=YA.prototype.render=function(H){var E=this._internalRoot;if(E===null)throw Error($(409));uW(H,E,null,null)};hW.prototype.unmount=YA.prototype.unmount=function(){var H=this._internalRoot;if(H!==null){this._internalRoot=null;var E=H.containerInfo;LH(function(){uW(null,H,null,null)}),E[J8]=null}};hW.prototype.unstable_scheduleHydration=function(H){if(H){var E=FY();H={blockedOn:null,target:H,priority:E};for(var K=0;K<C8.length&&E!==0&&E<C8[K].priority;K++);C8.splice(K,0,H),K===0&&JY(H)}};OY=function(H){switch(H.tag){case 3:var E=H.stateNode;if(E.current.memoizedState.isDehydrated){var K=QE(E.pendingLanes);K!==0&&(IQ(E,K|1),Z9(E,R1()),(i0&6)===0&&(k6=R1()+500,m8()))}break;case 13:LH(function(){var W=X8(H,1);if(W!==null){var Q=e1();g9(W,H,1,Q)}}),FA(H,1)}};lQ=function(H){if(H.tag===13){var E=X8(H,134217728);if(E!==null){var K=e1();g9(E,H,134217728,K)}FA(H,134217728)}};ZY=function(H){if(H.tag===13){var E=p8(H),K=X8(H,E);if(K!==null){var W=e1();g9(K,H,E,W)}FA(H,E)}};FY=function(){return _0};YY=function(H,E){var K=_0;try{return _0=H,E()}finally{_0=K}};n7=function(H,E,K){switch(E){case"input":if(y7(H,K),E=K.name,K.type==="radio"&&E!=null){for(K=H;K.parentNode;)K=K.parentNode;K=K.querySelectorAll("input[name="+JSON.stringify(""+E)+'][type="radio"]');for(E=0;E<K.length;E++){var W=K[E];if(W!==H&&W.form===H.form){var Q=CW(W);if(!Q)throw Error($(90));nF(W),y7(W,Q)}}}break;case"textarea":dF(H,K);break;case"select":E=K.value,E!=null&&H6(H,!!K.multiple,E,!1)}};tF=WA;aF=LH;oU={usingClientEntryPoint:!1,Events:[gE,oH,CW,oF,rF,WA]},EE={findFiberByHostInstance:YH,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rU={bundleType:EE.bundleType,version:EE.version,rendererPackageName:EE.rendererPackageName,rendererConfig:EE.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D8.ReactCurrentDispatcher,findHostInstanceByFiber:function(H){return H=_F(H),H===null?null:H.stateNode},findFiberByHostInstance:EE.findFiberByHostInstance||iU,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){if(bH=__REACT_DEVTOOLS_GLOBAL_HOOK__,!bH.isDisabled&&bH.supportsFiber)try{GW=bH.inject(rU),a9=bH}catch(H){}}vJ=oU,bJ=WA});var oJ=UK((JP,sJ)=>{cJ();function iJ(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iJ)}catch(H){console.error(H)}}iJ(),sJ.exports=XA});var rJ=UK((aU)=>{var nE=QH(oJ(),1);aU.createRoot=nE.createRoot,aU.hydrateRoot=nE.hydrateRoot;var tU});var LD=QH(i6(),1),MD=QH(rJ(),1);var M9=QH(i6(),1);var LX="171";var MX=0,pA=1,RX=2;var gA=1,VX=2,$9=3,S6=0,f9=1,_9=2,a8=0,rE=1,xA=2,nA=3,bA=4,PX=5,I6=100,GX=101,zX=102,BX=103,qX=104,CX=200,SX=201,IX=202,lX=203,TX=204,vX=205,yX=206,uX=207,hX=208,jX=209,pX=210,gX=211,xX=212,nX=213,bX=214,A5=0,O5=1,Z5=2,tE=3,F5=4,Y5=5,J5=6,X5=7,dX=0,mX=1,cX=2,V8=0,iX=1,sX=2,oX=3,rX=4,tX=5,aX=6,eX=7;var l6=301,BH=302,k5=303,D5=304,aE=306,$X=1000,_X=1001,Hk=1002,T6=1003,Ek=1004;var eE=1005;var qH=1006,w5=1007;var v6=1008;var e8=1009,Kk=1010,Wk=1011,$E=1012,dA=1013,y6=1014,$8=1015,_E=1016,mA=1017,cA=1018,u6=1020,Qk=35902,Ak=1021,Ok=1022,H8=1023,Zk=1024,Fk=1025,N5=1026,HK=1027,Yk=1028,iA=1029,Jk=1030,sA=1031;var oA=1033,U5=33776,f5=33777,L5=33778,M5=33779,rA=35840,tA=35841,aA=35842,eA=35843,$A=36196,_A=37492,HO=37496,EO=37808,KO=37809,WO=37810,QO=37811,AO=37812,OO=37813,ZO=37814,FO=37815,YO=37816,JO=37817,XO=37818,kO=37819,DO=37820,wO=37821,R5=36492,NO=36494,UO=36495,Xk=36283,fO=36284,LO=36285,MO=36286;var kk=3201;var Dk=0,wk=1,CH="",Nk="srgb",EK="srgb-linear",RO="linear",A1="srgb";var Uk=512,fk=513,Lk=514,VO=515,Mk=516,Rk=517,Vk=518,Pk=519;var PO="300 es",Gk=2000;class _8{addEventListener(H,E){if(this._listeners===void 0)this._listeners={};let K=this._listeners;if(K[H]===void 0)K[H]=[];if(K[H].indexOf(E)===-1)K[H].push(E)}hasEventListener(H,E){if(this._listeners===void 0)return!1;let K=this._listeners;return K[H]!==void 0&&K[H].indexOf(E)!==-1}removeEventListener(H,E){if(this._listeners===void 0)return;let W=this._listeners[H];if(W!==void 0){let Q=W.indexOf(E);if(Q!==-1)W.splice(Q,1)}}dispatchEvent(H){if(this._listeners===void 0)return;let K=this._listeners[H.type];if(K!==void 0){H.target=this;let W=K.slice(0);for(let Q=0,A=W.length;Q<A;Q++)W[Q].call(this,H);H.target=null}}}var c1=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kA=Math.PI/180,Q5=180/Math.PI;function KK(){let H=Math.random()*4294967295|0,E=Math.random()*4294967295|0,K=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(c1[H&255]+c1[H>>8&255]+c1[H>>16&255]+c1[H>>24&255]+"-"+c1[E&255]+c1[E>>8&255]+"-"+c1[E>>16&15|64]+c1[E>>24&255]+"-"+c1[K&63|128]+c1[K>>8&255]+"-"+c1[K>>16&255]+c1[K>>24&255]+c1[W&255]+c1[W>>8&255]+c1[W>>16&255]+c1[W>>24&255]).toLowerCase()}function b0(H,E,K){return Math.max(E,Math.min(K,H))}function eU(H,E){return(H%E+E)%E}function DA(H,E,K){return(1-K)*H+K*E}function bE(H,E){switch(E.constructor){case Float32Array:return H;case Uint32Array:return H/4294967295;case Uint16Array:return H/65535;case Uint8Array:return H/255;case Int32Array:return Math.max(H/2147483647,-1);case Int16Array:return Math.max(H/32767,-1);case Int8Array:return Math.max(H/127,-1);default:throw Error("Invalid component type.")}}function F9(H,E){switch(E.constructor){case Float32Array:return H;case Uint32Array:return Math.round(H*4294967295);case Uint16Array:return Math.round(H*65535);case Uint8Array:return Math.round(H*255);case Int32Array:return Math.round(H*2147483647);case Int16Array:return Math.round(H*32767);case Int8Array:return Math.round(H*127);default:throw Error("Invalid component type.")}}class o0{constructor(H=0,E=0){o0.prototype.isVector2=!0,this.x=H,this.y=E}get width(){return this.x}set width(H){this.x=H}get height(){return this.y}set height(H){this.y=H}set(H,E){return this.x=H,this.y=E,this}setScalar(H){return this.x=H,this.y=H,this}setX(H){return this.x=H,this}setY(H){return this.y=H,this}setComponent(H,E){switch(H){case 0:this.x=E;break;case 1:this.y=E;break;default:throw Error("index is out of range: "+H)}return this}getComponent(H){switch(H){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+H)}}clone(){return new this.constructor(this.x,this.y)}copy(H){return this.x=H.x,this.y=H.y,this}add(H){return this.x+=H.x,this.y+=H.y,this}addScalar(H){return this.x+=H,this.y+=H,this}addVectors(H,E){return this.x=H.x+E.x,this.y=H.y+E.y,this}addScaledVector(H,E){return this.x+=H.x*E,this.y+=H.y*E,this}sub(H){return this.x-=H.x,this.y-=H.y,this}subScalar(H){return this.x-=H,this.y-=H,this}subVectors(H,E){return this.x=H.x-E.x,this.y=H.y-E.y,this}multiply(H){return this.x*=H.x,this.y*=H.y,this}multiplyScalar(H){return this.x*=H,this.y*=H,this}divide(H){return this.x/=H.x,this.y/=H.y,this}divideScalar(H){return this.multiplyScalar(1/H)}applyMatrix3(H){let E=this.x,K=this.y,W=H.elements;return this.x=W[0]*E+W[3]*K+W[6],this.y=W[1]*E+W[4]*K+W[7],this}min(H){return this.x=Math.min(this.x,H.x),this.y=Math.min(this.y,H.y),this}max(H){return this.x=Math.max(this.x,H.x),this.y=Math.max(this.y,H.y),this}clamp(H,E){return this.x=b0(this.x,H.x,E.x),this.y=b0(this.y,H.y,E.y),this}clampScalar(H,E){return this.x=b0(this.x,H,E),this.y=b0(this.y,H,E),this}clampLength(H,E){let K=this.length();return this.divideScalar(K||1).multiplyScalar(b0(K,H,E))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(H){return this.x*H.x+this.y*H.y}cross(H){return this.x*H.y-this.y*H.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(H){let E=Math.sqrt(this.lengthSq()*H.lengthSq());if(E===0)return Math.PI/2;let K=this.dot(H)/E;return Math.acos(b0(K,-1,1))}distanceTo(H){return Math.sqrt(this.distanceToSquared(H))}distanceToSquared(H){let E=this.x-H.x,K=this.y-H.y;return E*E+K*K}manhattanDistanceTo(H){return Math.abs(this.x-H.x)+Math.abs(this.y-H.y)}setLength(H){return this.normalize().multiplyScalar(H)}lerp(H,E){return this.x+=(H.x-this.x)*E,this.y+=(H.y-this.y)*E,this}lerpVectors(H,E,K){return this.x=H.x+(E.x-H.x)*K,this.y=H.y+(E.y-H.y)*K,this}equals(H){return H.x===this.x&&H.y===this.y}fromArray(H,E=0){return this.x=H[E],this.y=H[E+1],this}toArray(H=[],E=0){return H[E]=this.x,H[E+1]=this.y,H}fromBufferAttribute(H,E){return this.x=H.getX(E),this.y=H.getY(E),this}rotateAround(H,E){let K=Math.cos(E),W=Math.sin(E),Q=this.x-H.x,A=this.y-H.y;return this.x=Q*K-A*W+H.x,this.y=Q*W+A*K+H.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class y0{constructor(H,E,K,W,Q,A,O,Z,F){if(y0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],H!==void 0)this.set(H,E,K,W,Q,A,O,Z,F)}set(H,E,K,W,Q,A,O,Z,F){let Y=this.elements;return Y[0]=H,Y[1]=W,Y[2]=O,Y[3]=E,Y[4]=Q,Y[5]=Z,Y[6]=K,Y[7]=A,Y[8]=F,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(H){let E=this.elements,K=H.elements;return E[0]=K[0],E[1]=K[1],E[2]=K[2],E[3]=K[3],E[4]=K[4],E[5]=K[5],E[6]=K[6],E[7]=K[7],E[8]=K[8],this}extractBasis(H,E,K){return H.setFromMatrix3Column(this,0),E.setFromMatrix3Column(this,1),K.setFromMatrix3Column(this,2),this}setFromMatrix4(H){let E=H.elements;return this.set(E[0],E[4],E[8],E[1],E[5],E[9],E[2],E[6],E[10]),this}multiply(H){return this.multiplyMatrices(this,H)}premultiply(H){return this.multiplyMatrices(H,this)}multiplyMatrices(H,E){let K=H.elements,W=E.elements,Q=this.elements,A=K[0],O=K[3],Z=K[6],F=K[1],Y=K[4],k=K[7],X=K[2],D=K[5],U=K[8],M=W[0],L=W[3],w=W[6],J=W[1],f=W[4],N=W[7],z=W[2],S=W[5],B=W[8];return Q[0]=A*M+O*J+Z*z,Q[3]=A*L+O*f+Z*S,Q[6]=A*w+O*N+Z*B,Q[1]=F*M+Y*J+k*z,Q[4]=F*L+Y*f+k*S,Q[7]=F*w+Y*N+k*B,Q[2]=X*M+D*J+U*z,Q[5]=X*L+D*f+U*S,Q[8]=X*w+D*N+U*B,this}multiplyScalar(H){let E=this.elements;return E[0]*=H,E[3]*=H,E[6]*=H,E[1]*=H,E[4]*=H,E[7]*=H,E[2]*=H,E[5]*=H,E[8]*=H,this}determinant(){let H=this.elements,E=H[0],K=H[1],W=H[2],Q=H[3],A=H[4],O=H[5],Z=H[6],F=H[7],Y=H[8];return E*A*Y-E*O*F-K*Q*Y+K*O*Z+W*Q*F-W*A*Z}invert(){let H=this.elements,E=H[0],K=H[1],W=H[2],Q=H[3],A=H[4],O=H[5],Z=H[6],F=H[7],Y=H[8],k=Y*A-O*F,X=O*Z-Y*Q,D=F*Q-A*Z,U=E*k+K*X+W*D;if(U===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/U;return H[0]=k*M,H[1]=(W*F-Y*K)*M,H[2]=(O*K-W*A)*M,H[3]=X*M,H[4]=(Y*E-W*Z)*M,H[5]=(W*Q-O*E)*M,H[6]=D*M,H[7]=(K*Z-F*E)*M,H[8]=(A*E-K*Q)*M,this}transpose(){let H,E=this.elements;return H=E[1],E[1]=E[3],E[3]=H,H=E[2],E[2]=E[6],E[6]=H,H=E[5],E[5]=E[7],E[7]=H,this}getNormalMatrix(H){return this.setFromMatrix4(H).invert().transpose()}transposeIntoArray(H){let E=this.elements;return H[0]=E[0],H[1]=E[3],H[2]=E[6],H[3]=E[1],H[4]=E[4],H[5]=E[7],H[6]=E[2],H[7]=E[5],H[8]=E[8],this}setUvTransform(H,E,K,W,Q,A,O){let Z=Math.cos(Q),F=Math.sin(Q);return this.set(K*Z,K*F,-K*(Z*A+F*O)+A+H,-W*F,W*Z,-W*(-F*A+Z*O)+O+E,0,0,1),this}scale(H,E){return this.premultiply(wA.makeScale(H,E)),this}rotate(H){return this.premultiply(wA.makeRotation(-H)),this}translate(H,E){return this.premultiply(wA.makeTranslation(H,E)),this}makeTranslation(H,E){if(H.isVector2)this.set(1,0,H.x,0,1,H.y,0,0,1);else this.set(1,0,H,0,1,E,0,0,1);return this}makeRotation(H){let E=Math.cos(H),K=Math.sin(H);return this.set(E,-K,0,K,E,0,0,0,1),this}makeScale(H,E){return this.set(H,0,0,0,E,0,0,0,1),this}equals(H){let E=this.elements,K=H.elements;for(let W=0;W<9;W++)if(E[W]!==K[W])return!1;return!0}fromArray(H,E=0){for(let K=0;K<9;K++)this.elements[K]=H[K+E];return this}toArray(H=[],E=0){let K=this.elements;return H[E]=K[0],H[E+1]=K[1],H[E+2]=K[2],H[E+3]=K[3],H[E+4]=K[4],H[E+5]=K[5],H[E+6]=K[6],H[E+7]=K[7],H[E+8]=K[8],H}clone(){return new this.constructor().fromArray(this.elements)}}var wA=new y0;function GO(H){for(let E=H.length-1;E>=0;--E)if(H[E]>=65535)return!0;return!1}function oE(H){return document.createElementNS("http://www.w3.org/1999/xhtml",H)}function zk(){let H=oE("canvas");return H.style.display="block",H}var tJ={};function SH(H){if(H in tJ)return;tJ[H]=!0,console.warn(H)}function Bk(H,E,K){return new Promise(function(W,Q){function A(){switch(H.clientWaitSync(E,H.SYNC_FLUSH_COMMANDS_BIT,0)){case H.WAIT_FAILED:Q();break;case H.TIMEOUT_EXPIRED:setTimeout(A,K);break;default:W()}}setTimeout(A,K)})}function qk(H){let E=H.elements;E[2]=0.5*E[2]+0.5*E[3],E[6]=0.5*E[6]+0.5*E[7],E[10]=0.5*E[10]+0.5*E[11],E[14]=0.5*E[14]+0.5*E[15]}function Ck(H){let E=H.elements;if(E[11]===-1)E[10]=-E[10]-1,E[14]=-E[14];else E[10]=-E[10],E[14]=-E[14]+1}var aJ=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),eJ=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function $U(){let H={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Q,A,O){if(this.enabled===!1||A===O||!A||!O)return Q;if(this.spaces[A].transfer==="srgb")Q.r=R8(Q.r),Q.g=R8(Q.g),Q.b=R8(Q.b);if(this.spaces[A].primaries!==this.spaces[O].primaries)Q.applyMatrix3(this.spaces[A].toXYZ),Q.applyMatrix3(this.spaces[O].fromXYZ);if(this.spaces[O].transfer==="srgb")Q.r=C6(Q.r),Q.g=C6(Q.g),Q.b=C6(Q.b);return Q},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this.workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this.workingColorSpace)},getPrimaries:function(Q){return this.spaces[Q].primaries},getTransfer:function(Q){if(Q==="")return"linear";return this.spaces[Q].transfer},getLuminanceCoefficients:function(Q,A=this.workingColorSpace){return Q.fromArray(this.spaces[A].luminanceCoefficients)},define:function(Q){Object.assign(this.spaces,Q)},_getMatrix:function(Q,A,O){return Q.copy(this.spaces[A].toXYZ).multiply(this.spaces[O].fromXYZ)},_getDrawingBufferColorSpace:function(Q){return this.spaces[Q].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Q=this.workingColorSpace){return this.spaces[Q].workingColorSpaceConfig.unpackColorSpace}},E=[0.64,0.33,0.3,0.6,0.15,0.06],K=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return H.define({["srgb-linear"]:{primaries:E,whitePoint:W,transfer:"linear",toXYZ:aJ,fromXYZ:eJ,luminanceCoefficients:K,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:E,whitePoint:W,transfer:"srgb",toXYZ:aJ,fromXYZ:eJ,luminanceCoefficients:K,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),H}var s0=$U();function R8(H){return H<0.04045?H*0.0773993808:Math.pow(H*0.9478672986+0.0521327014,2.4)}function C6(H){return H<0.0031308?H*12.92:1.055*Math.pow(H,0.41666)-0.055}var N6;class zO{static getDataURL(H){if(/^data:/i.test(H.src))return H.src;if(typeof HTMLCanvasElement>"u")return H.src;let E;if(H instanceof HTMLCanvasElement)E=H;else{if(N6===void 0)N6=oE("canvas");N6.width=H.width,N6.height=H.height;let K=N6.getContext("2d");if(H instanceof ImageData)K.putImageData(H,0,0);else K.drawImage(H,0,0,H.width,H.height);E=N6}if(E.width>2048||E.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",H),E.toDataURL("image/jpeg",0.6);else return E.toDataURL("image/png")}static sRGBToLinear(H){if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap){let E=oE("canvas");E.width=H.width,E.height=H.height;let K=E.getContext("2d");K.drawImage(H,0,0,H.width,H.height);let W=K.getImageData(0,0,H.width,H.height),Q=W.data;for(let A=0;A<Q.length;A++)Q[A]=R8(Q[A]/255)*255;return K.putImageData(W,0,0),E}else if(H.data){let E=H.data.slice(0);for(let K=0;K<E.length;K++)if(E instanceof Uint8Array||E instanceof Uint8ClampedArray)E[K]=Math.floor(R8(E[K]/255)*255);else E[K]=R8(E[K]);return{data:E,width:H.width,height:H.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),H}}var _U=0;class V5{constructor(H=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_U++}),this.uuid=KK(),this.data=H,this.dataReady=!0,this.version=0}set needsUpdate(H){if(H===!0)this.version++}toJSON(H){let E=H===void 0||typeof H==="string";if(!E&&H.images[this.uuid]!==void 0)return H.images[this.uuid];let K={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Q;if(Array.isArray(W)){Q=[];for(let A=0,O=W.length;A<O;A++)if(W[A].isDataTexture)Q.push(NA(W[A].image));else Q.push(NA(W[A]))}else Q=NA(W);K.url=Q}if(!E)H.images[this.uuid]=K;return K}}function NA(H){if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap)return zO.getDataURL(H);else if(H.data)return{data:Array.from(H.data),width:H.width,height:H.height,type:H.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var Hf=0;class _1 extends _8{constructor(H=_1.DEFAULT_IMAGE,E=_1.DEFAULT_MAPPING,K=1001,W=1001,Q=1006,A=1008,O=1023,Z=1009,F=_1.DEFAULT_ANISOTROPY,Y=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=KK(),this.name="",this.source=new V5(H),this.mipmaps=[],this.mapping=E,this.channel=0,this.wrapS=K,this.wrapT=W,this.magFilter=Q,this.minFilter=A,this.anisotropy=F,this.format=O,this.internalFormat=null,this.type=Z,this.offset=new o0(0,0),this.repeat=new o0(1,1),this.center=new o0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=Y,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(H=null){this.source.data=H}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(H){return this.name=H.name,this.source=H.source,this.mipmaps=H.mipmaps.slice(0),this.mapping=H.mapping,this.channel=H.channel,this.wrapS=H.wrapS,this.wrapT=H.wrapT,this.magFilter=H.magFilter,this.minFilter=H.minFilter,this.anisotropy=H.anisotropy,this.format=H.format,this.internalFormat=H.internalFormat,this.type=H.type,this.offset.copy(H.offset),this.repeat.copy(H.repeat),this.center.copy(H.center),this.rotation=H.rotation,this.matrixAutoUpdate=H.matrixAutoUpdate,this.matrix.copy(H.matrix),this.generateMipmaps=H.generateMipmaps,this.premultiplyAlpha=H.premultiplyAlpha,this.flipY=H.flipY,this.unpackAlignment=H.unpackAlignment,this.colorSpace=H.colorSpace,this.userData=JSON.parse(JSON.stringify(H.userData)),this.needsUpdate=!0,this}toJSON(H){let E=H===void 0||typeof H==="string";if(!E&&H.textures[this.uuid]!==void 0)return H.textures[this.uuid];let K={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(H).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)K.userData=this.userData;if(!E)H.textures[this.uuid]=K;return K}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(H){if(this.mapping!==300)return H;if(H.applyMatrix3(this.matrix),H.x<0||H.x>1)switch(this.wrapS){case 1000:H.x=H.x-Math.floor(H.x);break;case 1001:H.x=H.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(H.x)%2)===1)H.x=Math.ceil(H.x)-H.x;else H.x=H.x-Math.floor(H.x);break}if(H.y<0||H.y>1)switch(this.wrapT){case 1000:H.y=H.y-Math.floor(H.y);break;case 1001:H.y=H.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(H.y)%2)===1)H.y=Math.ceil(H.y)-H.y;else H.y=H.y-Math.floor(H.y);break}if(this.flipY)H.y=1-H.y;return H}set needsUpdate(H){if(H===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(H){if(H===!0)this.pmremVersion++}}_1.DEFAULT_IMAGE=null;_1.DEFAULT_MAPPING=300;_1.DEFAULT_ANISOTROPY=1;class E1{constructor(H=0,E=0,K=0,W=1){E1.prototype.isVector4=!0,this.x=H,this.y=E,this.z=K,this.w=W}get width(){return this.z}set width(H){this.z=H}get height(){return this.w}set height(H){this.w=H}set(H,E,K,W){return this.x=H,this.y=E,this.z=K,this.w=W,this}setScalar(H){return this.x=H,this.y=H,this.z=H,this.w=H,this}setX(H){return this.x=H,this}setY(H){return this.y=H,this}setZ(H){return this.z=H,this}setW(H){return this.w=H,this}setComponent(H,E){switch(H){case 0:this.x=E;break;case 1:this.y=E;break;case 2:this.z=E;break;case 3:this.w=E;break;default:throw Error("index is out of range: "+H)}return this}getComponent(H){switch(H){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+H)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(H){return this.x=H.x,this.y=H.y,this.z=H.z,this.w=H.w!==void 0?H.w:1,this}add(H){return this.x+=H.x,this.y+=H.y,this.z+=H.z,this.w+=H.w,this}addScalar(H){return this.x+=H,this.y+=H,this.z+=H,this.w+=H,this}addVectors(H,E){return this.x=H.x+E.x,this.y=H.y+E.y,this.z=H.z+E.z,this.w=H.w+E.w,this}addScaledVector(H,E){return this.x+=H.x*E,this.y+=H.y*E,this.z+=H.z*E,this.w+=H.w*E,this}sub(H){return this.x-=H.x,this.y-=H.y,this.z-=H.z,this.w-=H.w,this}subScalar(H){return this.x-=H,this.y-=H,this.z-=H,this.w-=H,this}subVectors(H,E){return this.x=H.x-E.x,this.y=H.y-E.y,this.z=H.z-E.z,this.w=H.w-E.w,this}multiply(H){return this.x*=H.x,this.y*=H.y,this.z*=H.z,this.w*=H.w,this}multiplyScalar(H){return this.x*=H,this.y*=H,this.z*=H,this.w*=H,this}applyMatrix4(H){let E=this.x,K=this.y,W=this.z,Q=this.w,A=H.elements;return this.x=A[0]*E+A[4]*K+A[8]*W+A[12]*Q,this.y=A[1]*E+A[5]*K+A[9]*W+A[13]*Q,this.z=A[2]*E+A[6]*K+A[10]*W+A[14]*Q,this.w=A[3]*E+A[7]*K+A[11]*W+A[15]*Q,this}divide(H){return this.x/=H.x,this.y/=H.y,this.z/=H.z,this.w/=H.w,this}divideScalar(H){return this.multiplyScalar(1/H)}setAxisAngleFromQuaternion(H){this.w=2*Math.acos(H.w);let E=Math.sqrt(1-H.w*H.w);if(E<0.0001)this.x=1,this.y=0,this.z=0;else this.x=H.x/E,this.y=H.y/E,this.z=H.z/E;return this}setAxisAngleFromRotationMatrix(H){let E,K,W,Q,A=0.01,O=0.1,Z=H.elements,F=Z[0],Y=Z[4],k=Z[8],X=Z[1],D=Z[5],U=Z[9],M=Z[2],L=Z[6],w=Z[10];if(Math.abs(Y-X)<0.01&&Math.abs(k-M)<0.01&&Math.abs(U-L)<0.01){if(Math.abs(Y+X)<0.1&&Math.abs(k+M)<0.1&&Math.abs(U+L)<0.1&&Math.abs(F+D+w-3)<0.1)return this.set(1,0,0,0),this;E=Math.PI;let f=(F+1)/2,N=(D+1)/2,z=(w+1)/2,S=(Y+X)/4,B=(k+M)/4,q=(U+L)/4;if(f>N&&f>z)if(f<0.01)K=0,W=0.707106781,Q=0.707106781;else K=Math.sqrt(f),W=S/K,Q=B/K;else if(N>z)if(N<0.01)K=0.707106781,W=0,Q=0.707106781;else W=Math.sqrt(N),K=S/W,Q=q/W;else if(z<0.01)K=0.707106781,W=0.707106781,Q=0;else Q=Math.sqrt(z),K=B/Q,W=q/Q;return this.set(K,W,Q,E),this}let J=Math.sqrt((L-U)*(L-U)+(k-M)*(k-M)+(X-Y)*(X-Y));if(Math.abs(J)<0.001)J=1;return this.x=(L-U)/J,this.y=(k-M)/J,this.z=(X-Y)/J,this.w=Math.acos((F+D+w-1)/2),this}setFromMatrixPosition(H){let E=H.elements;return this.x=E[12],this.y=E[13],this.z=E[14],this.w=E[15],this}min(H){return this.x=Math.min(this.x,H.x),this.y=Math.min(this.y,H.y),this.z=Math.min(this.z,H.z),this.w=Math.min(this.w,H.w),this}max(H){return this.x=Math.max(this.x,H.x),this.y=Math.max(this.y,H.y),this.z=Math.max(this.z,H.z),this.w=Math.max(this.w,H.w),this}clamp(H,E){return this.x=b0(this.x,H.x,E.x),this.y=b0(this.y,H.y,E.y),this.z=b0(this.z,H.z,E.z),this.w=b0(this.w,H.w,E.w),this}clampScalar(H,E){return this.x=b0(this.x,H,E),this.y=b0(this.y,H,E),this.z=b0(this.z,H,E),this.w=b0(this.w,H,E),this}clampLength(H,E){let K=this.length();return this.divideScalar(K||1).multiplyScalar(b0(K,H,E))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(H){return this.x*H.x+this.y*H.y+this.z*H.z+this.w*H.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(H){return this.normalize().multiplyScalar(H)}lerp(H,E){return this.x+=(H.x-this.x)*E,this.y+=(H.y-this.y)*E,this.z+=(H.z-this.z)*E,this.w+=(H.w-this.w)*E,this}lerpVectors(H,E,K){return this.x=H.x+(E.x-H.x)*K,this.y=H.y+(E.y-H.y)*K,this.z=H.z+(E.z-H.z)*K,this.w=H.w+(E.w-H.w)*K,this}equals(H){return H.x===this.x&&H.y===this.y&&H.z===this.z&&H.w===this.w}fromArray(H,E=0){return this.x=H[E],this.y=H[E+1],this.z=H[E+2],this.w=H[E+3],this}toArray(H=[],E=0){return H[E]=this.x,H[E+1]=this.y,H[E+2]=this.z,H[E+3]=this.w,H}fromBufferAttribute(H,E){return this.x=H.getX(E),this.y=H.getY(E),this.z=H.getZ(E),this.w=H.getW(E),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BO extends _8{constructor(H=1,E=1,K={}){super();this.isRenderTarget=!0,this.width=H,this.height=E,this.depth=1,this.scissor=new E1(0,0,H,E),this.scissorTest=!1,this.viewport=new E1(0,0,H,E);let W={width:H,height:E,depth:1};K=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},K);let Q=new _1(W,K.mapping,K.wrapS,K.wrapT,K.magFilter,K.minFilter,K.format,K.type,K.anisotropy,K.colorSpace);Q.flipY=!1,Q.generateMipmaps=K.generateMipmaps,Q.internalFormat=K.internalFormat,this.textures=[];let A=K.count;for(let O=0;O<A;O++)this.textures[O]=Q.clone(),this.textures[O].isRenderTargetTexture=!0;this.depthBuffer=K.depthBuffer,this.stencilBuffer=K.stencilBuffer,this.resolveDepthBuffer=K.resolveDepthBuffer,this.resolveStencilBuffer=K.resolveStencilBuffer,this.depthTexture=K.depthTexture,this.samples=K.samples}get texture(){return this.textures[0]}set texture(H){this.textures[0]=H}setSize(H,E,K=1){if(this.width!==H||this.height!==E||this.depth!==K){this.width=H,this.height=E,this.depth=K;for(let W=0,Q=this.textures.length;W<Q;W++)this.textures[W].image.width=H,this.textures[W].image.height=E,this.textures[W].image.depth=K;this.dispose()}this.viewport.set(0,0,H,E),this.scissor.set(0,0,H,E)}clone(){return new this.constructor().copy(this)}copy(H){this.width=H.width,this.height=H.height,this.depth=H.depth,this.scissor.copy(H.scissor),this.scissorTest=H.scissorTest,this.viewport.copy(H.viewport),this.textures.length=0;for(let K=0,W=H.textures.length;K<W;K++)this.textures[K]=H.textures[K].clone(),this.textures[K].isRenderTargetTexture=!0;let E=Object.assign({},H.texture.image);if(this.texture.source=new V5(E),this.depthBuffer=H.depthBuffer,this.stencilBuffer=H.stencilBuffer,this.resolveDepthBuffer=H.resolveDepthBuffer,this.resolveStencilBuffer=H.resolveStencilBuffer,H.depthTexture!==null)this.depthTexture=H.depthTexture.clone();return this.samples=H.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class P8 extends BO{constructor(H=1,E=1,K={}){super(H,E,K);this.isWebGLRenderTarget=!0}}class P5 extends _1{constructor(H=null,E=1,K=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:H,width:E,height:K,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(H){this.layerUpdates.add(H)}clearLayerUpdates(){this.layerUpdates.clear()}}class qO extends _1{constructor(H=null,E=1,K=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:H,width:E,height:K,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class HH{constructor(H=0,E=0,K=0,W=1){this.isQuaternion=!0,this._x=H,this._y=E,this._z=K,this._w=W}static slerpFlat(H,E,K,W,Q,A,O){let Z=K[W+0],F=K[W+1],Y=K[W+2],k=K[W+3],X=Q[A+0],D=Q[A+1],U=Q[A+2],M=Q[A+3];if(O===0){H[E+0]=Z,H[E+1]=F,H[E+2]=Y,H[E+3]=k;return}if(O===1){H[E+0]=X,H[E+1]=D,H[E+2]=U,H[E+3]=M;return}if(k!==M||Z!==X||F!==D||Y!==U){let L=1-O,w=Z*X+F*D+Y*U+k*M,J=w>=0?1:-1,f=1-w*w;if(f>Number.EPSILON){let z=Math.sqrt(f),S=Math.atan2(z,w*J);L=Math.sin(L*S)/z,O=Math.sin(O*S)/z}let N=O*J;if(Z=Z*L+X*N,F=F*L+D*N,Y=Y*L+U*N,k=k*L+M*N,L===1-O){let z=1/Math.sqrt(Z*Z+F*F+Y*Y+k*k);Z*=z,F*=z,Y*=z,k*=z}}H[E]=Z,H[E+1]=F,H[E+2]=Y,H[E+3]=k}static multiplyQuaternionsFlat(H,E,K,W,Q,A){let O=K[W],Z=K[W+1],F=K[W+2],Y=K[W+3],k=Q[A],X=Q[A+1],D=Q[A+2],U=Q[A+3];return H[E]=O*U+Y*k+Z*D-F*X,H[E+1]=Z*U+Y*X+F*k-O*D,H[E+2]=F*U+Y*D+O*X-Z*k,H[E+3]=Y*U-O*k-Z*X-F*D,H}get x(){return this._x}set x(H){this._x=H,this._onChangeCallback()}get y(){return this._y}set y(H){this._y=H,this._onChangeCallback()}get z(){return this._z}set z(H){this._z=H,this._onChangeCallback()}get w(){return this._w}set w(H){this._w=H,this._onChangeCallback()}set(H,E,K,W){return this._x=H,this._y=E,this._z=K,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(H){return this._x=H.x,this._y=H.y,this._z=H.z,this._w=H.w,this._onChangeCallback(),this}setFromEuler(H,E=!0){let{_x:K,_y:W,_z:Q,_order:A}=H,O=Math.cos,Z=Math.sin,F=O(K/2),Y=O(W/2),k=O(Q/2),X=Z(K/2),D=Z(W/2),U=Z(Q/2);switch(A){case"XYZ":this._x=X*Y*k+F*D*U,this._y=F*D*k-X*Y*U,this._z=F*Y*U+X*D*k,this._w=F*Y*k-X*D*U;break;case"YXZ":this._x=X*Y*k+F*D*U,this._y=F*D*k-X*Y*U,this._z=F*Y*U-X*D*k,this._w=F*Y*k+X*D*U;break;case"ZXY":this._x=X*Y*k-F*D*U,this._y=F*D*k+X*Y*U,this._z=F*Y*U+X*D*k,this._w=F*Y*k-X*D*U;break;case"ZYX":this._x=X*Y*k-F*D*U,this._y=F*D*k+X*Y*U,this._z=F*Y*U-X*D*k,this._w=F*Y*k+X*D*U;break;case"YZX":this._x=X*Y*k+F*D*U,this._y=F*D*k+X*Y*U,this._z=F*Y*U-X*D*k,this._w=F*Y*k-X*D*U;break;case"XZY":this._x=X*Y*k-F*D*U,this._y=F*D*k-X*Y*U,this._z=F*Y*U+X*D*k,this._w=F*Y*k+X*D*U;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+A)}if(E===!0)this._onChangeCallback();return this}setFromAxisAngle(H,E){let K=E/2,W=Math.sin(K);return this._x=H.x*W,this._y=H.y*W,this._z=H.z*W,this._w=Math.cos(K),this._onChangeCallback(),this}setFromRotationMatrix(H){let E=H.elements,K=E[0],W=E[4],Q=E[8],A=E[1],O=E[5],Z=E[9],F=E[2],Y=E[6],k=E[10],X=K+O+k;if(X>0){let D=0.5/Math.sqrt(X+1);this._w=0.25/D,this._x=(Y-Z)*D,this._y=(Q-F)*D,this._z=(A-W)*D}else if(K>O&&K>k){let D=2*Math.sqrt(1+K-O-k);this._w=(Y-Z)/D,this._x=0.25*D,this._y=(W+A)/D,this._z=(Q+F)/D}else if(O>k){let D=2*Math.sqrt(1+O-K-k);this._w=(Q-F)/D,this._x=(W+A)/D,this._y=0.25*D,this._z=(Z+Y)/D}else{let D=2*Math.sqrt(1+k-K-O);this._w=(A-W)/D,this._x=(Q+F)/D,this._y=(Z+Y)/D,this._z=0.25*D}return this._onChangeCallback(),this}setFromUnitVectors(H,E){let K=H.dot(E)+1;if(K<Number.EPSILON)if(K=0,Math.abs(H.x)>Math.abs(H.z))this._x=-H.y,this._y=H.x,this._z=0,this._w=K;else this._x=0,this._y=-H.z,this._z=H.y,this._w=K;else this._x=H.y*E.z-H.z*E.y,this._y=H.z*E.x-H.x*E.z,this._z=H.x*E.y-H.y*E.x,this._w=K;return this.normalize()}angleTo(H){return 2*Math.acos(Math.abs(b0(this.dot(H),-1,1)))}rotateTowards(H,E){let K=this.angleTo(H);if(K===0)return this;let W=Math.min(1,E/K);return this.slerp(H,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(H){return this._x*H._x+this._y*H._y+this._z*H._z+this._w*H._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let H=this.length();if(H===0)this._x=0,this._y=0,this._z=0,this._w=1;else H=1/H,this._x=this._x*H,this._y=this._y*H,this._z=this._z*H,this._w=this._w*H;return this._onChangeCallback(),this}multiply(H){return this.multiplyQuaternions(this,H)}premultiply(H){return this.multiplyQuaternions(H,this)}multiplyQuaternions(H,E){let{_x:K,_y:W,_z:Q,_w:A}=H,O=E._x,Z=E._y,F=E._z,Y=E._w;return this._x=K*Y+A*O+W*F-Q*Z,this._y=W*Y+A*Z+Q*O-K*F,this._z=Q*Y+A*F+K*Z-W*O,this._w=A*Y-K*O-W*Z-Q*F,this._onChangeCallback(),this}slerp(H,E){if(E===0)return this;if(E===1)return this.copy(H);let K=this._x,W=this._y,Q=this._z,A=this._w,O=A*H._w+K*H._x+W*H._y+Q*H._z;if(O<0)this._w=-H._w,this._x=-H._x,this._y=-H._y,this._z=-H._z,O=-O;else this.copy(H);if(O>=1)return this._w=A,this._x=K,this._y=W,this._z=Q,this;let Z=1-O*O;if(Z<=Number.EPSILON){let D=1-E;return this._w=D*A+E*this._w,this._x=D*K+E*this._x,this._y=D*W+E*this._y,this._z=D*Q+E*this._z,this.normalize(),this}let F=Math.sqrt(Z),Y=Math.atan2(F,O),k=Math.sin((1-E)*Y)/F,X=Math.sin(E*Y)/F;return this._w=A*k+this._w*X,this._x=K*k+this._x*X,this._y=W*k+this._y*X,this._z=Q*k+this._z*X,this._onChangeCallback(),this}slerpQuaternions(H,E,K){return this.copy(H).slerp(E,K)}random(){let H=2*Math.PI*Math.random(),E=2*Math.PI*Math.random(),K=Math.random(),W=Math.sqrt(1-K),Q=Math.sqrt(K);return this.set(W*Math.sin(H),W*Math.cos(H),Q*Math.sin(E),Q*Math.cos(E))}equals(H){return H._x===this._x&&H._y===this._y&&H._z===this._z&&H._w===this._w}fromArray(H,E=0){return this._x=H[E],this._y=H[E+1],this._z=H[E+2],this._w=H[E+3],this._onChangeCallback(),this}toArray(H=[],E=0){return H[E]=this._x,H[E+1]=this._y,H[E+2]=this._z,H[E+3]=this._w,H}fromBufferAttribute(H,E){return this._x=H.getX(E),this._y=H.getY(E),this._z=H.getZ(E),this._w=H.getW(E),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(H){return this._onChangeCallback=H,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class h{constructor(H=0,E=0,K=0){h.prototype.isVector3=!0,this.x=H,this.y=E,this.z=K}set(H,E,K){if(K===void 0)K=this.z;return this.x=H,this.y=E,this.z=K,this}setScalar(H){return this.x=H,this.y=H,this.z=H,this}setX(H){return this.x=H,this}setY(H){return this.y=H,this}setZ(H){return this.z=H,this}setComponent(H,E){switch(H){case 0:this.x=E;break;case 1:this.y=E;break;case 2:this.z=E;break;default:throw Error("index is out of range: "+H)}return this}getComponent(H){switch(H){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+H)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(H){return this.x=H.x,this.y=H.y,this.z=H.z,this}add(H){return this.x+=H.x,this.y+=H.y,this.z+=H.z,this}addScalar(H){return this.x+=H,this.y+=H,this.z+=H,this}addVectors(H,E){return this.x=H.x+E.x,this.y=H.y+E.y,this.z=H.z+E.z,this}addScaledVector(H,E){return this.x+=H.x*E,this.y+=H.y*E,this.z+=H.z*E,this}sub(H){return this.x-=H.x,this.y-=H.y,this.z-=H.z,this}subScalar(H){return this.x-=H,this.y-=H,this.z-=H,this}subVectors(H,E){return this.x=H.x-E.x,this.y=H.y-E.y,this.z=H.z-E.z,this}multiply(H){return this.x*=H.x,this.y*=H.y,this.z*=H.z,this}multiplyScalar(H){return this.x*=H,this.y*=H,this.z*=H,this}multiplyVectors(H,E){return this.x=H.x*E.x,this.y=H.y*E.y,this.z=H.z*E.z,this}applyEuler(H){return this.applyQuaternion($J.setFromEuler(H))}applyAxisAngle(H,E){return this.applyQuaternion($J.setFromAxisAngle(H,E))}applyMatrix3(H){let E=this.x,K=this.y,W=this.z,Q=H.elements;return this.x=Q[0]*E+Q[3]*K+Q[6]*W,this.y=Q[1]*E+Q[4]*K+Q[7]*W,this.z=Q[2]*E+Q[5]*K+Q[8]*W,this}applyNormalMatrix(H){return this.applyMatrix3(H).normalize()}applyMatrix4(H){let E=this.x,K=this.y,W=this.z,Q=H.elements,A=1/(Q[3]*E+Q[7]*K+Q[11]*W+Q[15]);return this.x=(Q[0]*E+Q[4]*K+Q[8]*W+Q[12])*A,this.y=(Q[1]*E+Q[5]*K+Q[9]*W+Q[13])*A,this.z=(Q[2]*E+Q[6]*K+Q[10]*W+Q[14])*A,this}applyQuaternion(H){let E=this.x,K=this.y,W=this.z,Q=H.x,A=H.y,O=H.z,Z=H.w,F=2*(A*W-O*K),Y=2*(O*E-Q*W),k=2*(Q*K-A*E);return this.x=E+Z*F+A*k-O*Y,this.y=K+Z*Y+O*F-Q*k,this.z=W+Z*k+Q*Y-A*F,this}project(H){return this.applyMatrix4(H.matrixWorldInverse).applyMatrix4(H.projectionMatrix)}unproject(H){return this.applyMatrix4(H.projectionMatrixInverse).applyMatrix4(H.matrixWorld)}transformDirection(H){let E=this.x,K=this.y,W=this.z,Q=H.elements;return this.x=Q[0]*E+Q[4]*K+Q[8]*W,this.y=Q[1]*E+Q[5]*K+Q[9]*W,this.z=Q[2]*E+Q[6]*K+Q[10]*W,this.normalize()}divide(H){return this.x/=H.x,this.y/=H.y,this.z/=H.z,this}divideScalar(H){return this.multiplyScalar(1/H)}min(H){return this.x=Math.min(this.x,H.x),this.y=Math.min(this.y,H.y),this.z=Math.min(this.z,H.z),this}max(H){return this.x=Math.max(this.x,H.x),this.y=Math.max(this.y,H.y),this.z=Math.max(this.z,H.z),this}clamp(H,E){return this.x=b0(this.x,H.x,E.x),this.y=b0(this.y,H.y,E.y),this.z=b0(this.z,H.z,E.z),this}clampScalar(H,E){return this.x=b0(this.x,H,E),this.y=b0(this.y,H,E),this.z=b0(this.z,H,E),this}clampLength(H,E){let K=this.length();return this.divideScalar(K||1).multiplyScalar(b0(K,H,E))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(H){return this.x*H.x+this.y*H.y+this.z*H.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(H){return this.normalize().multiplyScalar(H)}lerp(H,E){return this.x+=(H.x-this.x)*E,this.y+=(H.y-this.y)*E,this.z+=(H.z-this.z)*E,this}lerpVectors(H,E,K){return this.x=H.x+(E.x-H.x)*K,this.y=H.y+(E.y-H.y)*K,this.z=H.z+(E.z-H.z)*K,this}cross(H){return this.crossVectors(this,H)}crossVectors(H,E){let{x:K,y:W,z:Q}=H,A=E.x,O=E.y,Z=E.z;return this.x=W*Z-Q*O,this.y=Q*A-K*Z,this.z=K*O-W*A,this}projectOnVector(H){let E=H.lengthSq();if(E===0)return this.set(0,0,0);let K=H.dot(this)/E;return this.copy(H).multiplyScalar(K)}projectOnPlane(H){return UA.copy(this).projectOnVector(H),this.sub(UA)}reflect(H){return this.sub(UA.copy(H).multiplyScalar(2*this.dot(H)))}angleTo(H){let E=Math.sqrt(this.lengthSq()*H.lengthSq());if(E===0)return Math.PI/2;let K=this.dot(H)/E;return Math.acos(b0(K,-1,1))}distanceTo(H){return Math.sqrt(this.distanceToSquared(H))}distanceToSquared(H){let E=this.x-H.x,K=this.y-H.y,W=this.z-H.z;return E*E+K*K+W*W}manhattanDistanceTo(H){return Math.abs(this.x-H.x)+Math.abs(this.y-H.y)+Math.abs(this.z-H.z)}setFromSpherical(H){return this.setFromSphericalCoords(H.radius,H.phi,H.theta)}setFromSphericalCoords(H,E,K){let W=Math.sin(E)*H;return this.x=W*Math.sin(K),this.y=Math.cos(E)*H,this.z=W*Math.cos(K),this}setFromCylindrical(H){return this.setFromCylindricalCoords(H.radius,H.theta,H.y)}setFromCylindricalCoords(H,E,K){return this.x=H*Math.sin(E),this.y=K,this.z=H*Math.cos(E),this}setFromMatrixPosition(H){let E=H.elements;return this.x=E[12],this.y=E[13],this.z=E[14],this}setFromMatrixScale(H){let E=this.setFromMatrixColumn(H,0).length(),K=this.setFromMatrixColumn(H,1).length(),W=this.setFromMatrixColumn(H,2).length();return this.x=E,this.y=K,this.z=W,this}setFromMatrixColumn(H,E){return this.fromArray(H.elements,E*4)}setFromMatrix3Column(H,E){return this.fromArray(H.elements,E*3)}setFromEuler(H){return this.x=H._x,this.y=H._y,this.z=H._z,this}setFromColor(H){return this.x=H.r,this.y=H.g,this.z=H.b,this}equals(H){return H.x===this.x&&H.y===this.y&&H.z===this.z}fromArray(H,E=0){return this.x=H[E],this.y=H[E+1],this.z=H[E+2],this}toArray(H=[],E=0){return H[E]=this.x,H[E+1]=this.y,H[E+2]=this.z,H}fromBufferAttribute(H,E){return this.x=H.getX(E),this.y=H.getY(E),this.z=H.getZ(E),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let H=Math.random()*Math.PI*2,E=Math.random()*2-1,K=Math.sqrt(1-E*E);return this.x=K*Math.cos(H),this.y=E,this.z=K*Math.sin(H),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var UA=new h,$J=new HH;class IH{constructor(H=new h(1/0,1/0,1/0),E=new h(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=H,this.max=E}set(H,E){return this.min.copy(H),this.max.copy(E),this}setFromArray(H){this.makeEmpty();for(let E=0,K=H.length;E<K;E+=3)this.expandByPoint(n9.fromArray(H,E));return this}setFromBufferAttribute(H){this.makeEmpty();for(let E=0,K=H.count;E<K;E++)this.expandByPoint(n9.fromBufferAttribute(H,E));return this}setFromPoints(H){this.makeEmpty();for(let E=0,K=H.length;E<K;E++)this.expandByPoint(H[E]);return this}setFromCenterAndSize(H,E){let K=n9.copy(E).multiplyScalar(0.5);return this.min.copy(H).sub(K),this.max.copy(H).add(K),this}setFromObject(H,E=!1){return this.makeEmpty(),this.expandByObject(H,E)}clone(){return new this.constructor().copy(this)}copy(H){return this.min.copy(H.min),this.max.copy(H.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(H){return this.isEmpty()?H.set(0,0,0):H.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(H){return this.isEmpty()?H.set(0,0,0):H.subVectors(this.max,this.min)}expandByPoint(H){return this.min.min(H),this.max.max(H),this}expandByVector(H){return this.min.sub(H),this.max.add(H),this}expandByScalar(H){return this.min.addScalar(-H),this.max.addScalar(H),this}expandByObject(H,E=!1){H.updateWorldMatrix(!1,!1);let K=H.geometry;if(K!==void 0){let Q=K.getAttribute("position");if(E===!0&&Q!==void 0&&H.isInstancedMesh!==!0)for(let A=0,O=Q.count;A<O;A++){if(H.isMesh===!0)H.getVertexPosition(A,n9);else n9.fromBufferAttribute(Q,A);n9.applyMatrix4(H.matrixWorld),this.expandByPoint(n9)}else{if(H.boundingBox!==void 0){if(H.boundingBox===null)H.computeBoundingBox();gW.copy(H.boundingBox)}else{if(K.boundingBox===null)K.computeBoundingBox();gW.copy(K.boundingBox)}gW.applyMatrix4(H.matrixWorld),this.union(gW)}}let W=H.children;for(let Q=0,A=W.length;Q<A;Q++)this.expandByObject(W[Q],E);return this}containsPoint(H){return H.x>=this.min.x&&H.x<=this.max.x&&H.y>=this.min.y&&H.y<=this.max.y&&H.z>=this.min.z&&H.z<=this.max.z}containsBox(H){return this.min.x<=H.min.x&&H.max.x<=this.max.x&&this.min.y<=H.min.y&&H.max.y<=this.max.y&&this.min.z<=H.min.z&&H.max.z<=this.max.z}getParameter(H,E){return E.set((H.x-this.min.x)/(this.max.x-this.min.x),(H.y-this.min.y)/(this.max.y-this.min.y),(H.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(H){return H.max.x>=this.min.x&&H.min.x<=this.max.x&&H.max.y>=this.min.y&&H.min.y<=this.max.y&&H.max.z>=this.min.z&&H.min.z<=this.max.z}intersectsSphere(H){return this.clampPoint(H.center,n9),n9.distanceToSquared(H.center)<=H.radius*H.radius}intersectsPlane(H){let E,K;if(H.normal.x>0)E=H.normal.x*this.min.x,K=H.normal.x*this.max.x;else E=H.normal.x*this.max.x,K=H.normal.x*this.min.x;if(H.normal.y>0)E+=H.normal.y*this.min.y,K+=H.normal.y*this.max.y;else E+=H.normal.y*this.max.y,K+=H.normal.y*this.min.y;if(H.normal.z>0)E+=H.normal.z*this.min.z,K+=H.normal.z*this.max.z;else E+=H.normal.z*this.max.z,K+=H.normal.z*this.min.z;return E<=-H.constant&&K>=-H.constant}intersectsTriangle(H){if(this.isEmpty())return!1;this.getCenter(dE),xW.subVectors(this.max,dE),U6.subVectors(H.a,dE),f6.subVectors(H.b,dE),L6.subVectors(H.c,dE),c8.subVectors(f6,U6),i8.subVectors(L6,f6),VH.subVectors(U6,L6);let E=[0,-c8.z,c8.y,0,-i8.z,i8.y,0,-VH.z,VH.y,c8.z,0,-c8.x,i8.z,0,-i8.x,VH.z,0,-VH.x,-c8.y,c8.x,0,-i8.y,i8.x,0,-VH.y,VH.x,0];if(!fA(E,U6,f6,L6,xW))return!1;if(E=[1,0,0,0,1,0,0,0,1],!fA(E,U6,f6,L6,xW))return!1;return nW.crossVectors(c8,i8),E=[nW.x,nW.y,nW.z],fA(E,U6,f6,L6,xW)}clampPoint(H,E){return E.copy(H).clamp(this.min,this.max)}distanceToPoint(H){return this.clampPoint(H,n9).distanceTo(H)}getBoundingSphere(H){if(this.isEmpty())H.makeEmpty();else this.getCenter(H.center),H.radius=this.getSize(n9).length()*0.5;return H}intersect(H){if(this.min.max(H.min),this.max.min(H.max),this.isEmpty())this.makeEmpty();return this}union(H){return this.min.min(H.min),this.max.max(H.max),this}applyMatrix4(H){if(this.isEmpty())return this;return w8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(H),w8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(H),w8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(H),w8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(H),w8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(H),w8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(H),w8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(H),w8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(H),this.setFromPoints(w8),this}translate(H){return this.min.add(H),this.max.add(H),this}equals(H){return H.min.equals(this.min)&&H.max.equals(this.max)}}var w8=[new h,new h,new h,new h,new h,new h,new h,new h],n9=new h,gW=new IH,U6=new h,f6=new h,L6=new h,c8=new h,i8=new h,VH=new h,dE=new h,xW=new h,nW=new h,PH=new h;function fA(H,E,K,W,Q){for(let A=0,O=H.length-3;A<=O;A+=3){PH.fromArray(H,A);let Z=Q.x*Math.abs(PH.x)+Q.y*Math.abs(PH.y)+Q.z*Math.abs(PH.z),F=E.dot(PH),Y=K.dot(PH),k=W.dot(PH);if(Math.max(-Math.max(F,Y,k),Math.min(F,Y,k))>Z)return!1}return!0}var Ef=new IH,mE=new h,LA=new h;class h6{constructor(H=new h,E=-1){this.isSphere=!0,this.center=H,this.radius=E}set(H,E){return this.center.copy(H),this.radius=E,this}setFromPoints(H,E){let K=this.center;if(E!==void 0)K.copy(E);else Ef.setFromPoints(H).getCenter(K);let W=0;for(let Q=0,A=H.length;Q<A;Q++)W=Math.max(W,K.distanceToSquared(H[Q]));return this.radius=Math.sqrt(W),this}copy(H){return this.center.copy(H.center),this.radius=H.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(H){return H.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(H){return H.distanceTo(this.center)-this.radius}intersectsSphere(H){let E=this.radius+H.radius;return H.center.distanceToSquared(this.center)<=E*E}intersectsBox(H){return H.intersectsSphere(this)}intersectsPlane(H){return Math.abs(H.distanceToPoint(this.center))<=this.radius}clampPoint(H,E){let K=this.center.distanceToSquared(H);if(E.copy(H),K>this.radius*this.radius)E.sub(this.center).normalize(),E.multiplyScalar(this.radius).add(this.center);return E}getBoundingBox(H){if(this.isEmpty())return H.makeEmpty(),H;return H.set(this.center,this.center),H.expandByScalar(this.radius),H}applyMatrix4(H){return this.center.applyMatrix4(H),this.radius=this.radius*H.getMaxScaleOnAxis(),this}translate(H){return this.center.add(H),this}expandByPoint(H){if(this.isEmpty())return this.center.copy(H),this.radius=0,this;mE.subVectors(H,this.center);let E=mE.lengthSq();if(E>this.radius*this.radius){let K=Math.sqrt(E),W=(K-this.radius)*0.5;this.center.addScaledVector(mE,W/K),this.radius+=W}return this}union(H){if(H.isEmpty())return this;if(this.isEmpty())return this.copy(H),this;if(this.center.equals(H.center)===!0)this.radius=Math.max(this.radius,H.radius);else LA.subVectors(H.center,this.center).setLength(H.radius),this.expandByPoint(mE.copy(H.center).add(LA)),this.expandByPoint(mE.copy(H.center).sub(LA));return this}equals(H){return H.center.equals(this.center)&&H.radius===this.radius}clone(){return new this.constructor().copy(this)}}var N8=new h,MA=new h,bW=new h,s8=new h,RA=new h,dW=new h,VA=new h;class G5{constructor(H=new h,E=new h(0,0,-1)){this.origin=H,this.direction=E}set(H,E){return this.origin.copy(H),this.direction.copy(E),this}copy(H){return this.origin.copy(H.origin),this.direction.copy(H.direction),this}at(H,E){return E.copy(this.origin).addScaledVector(this.direction,H)}lookAt(H){return this.direction.copy(H).sub(this.origin).normalize(),this}recast(H){return this.origin.copy(this.at(H,N8)),this}closestPointToPoint(H,E){E.subVectors(H,this.origin);let K=E.dot(this.direction);if(K<0)return E.copy(this.origin);return E.copy(this.origin).addScaledVector(this.direction,K)}distanceToPoint(H){return Math.sqrt(this.distanceSqToPoint(H))}distanceSqToPoint(H){let E=N8.subVectors(H,this.origin).dot(this.direction);if(E<0)return this.origin.distanceToSquared(H);return N8.copy(this.origin).addScaledVector(this.direction,E),N8.distanceToSquared(H)}distanceSqToSegment(H,E,K,W){MA.copy(H).add(E).multiplyScalar(0.5),bW.copy(E).sub(H).normalize(),s8.copy(this.origin).sub(MA);let Q=H.distanceTo(E)*0.5,A=-this.direction.dot(bW),O=s8.dot(this.direction),Z=-s8.dot(bW),F=s8.lengthSq(),Y=Math.abs(1-A*A),k,X,D,U;if(Y>0)if(k=A*Z-O,X=A*O-Z,U=Q*Y,k>=0)if(X>=-U)if(X<=U){let M=1/Y;k*=M,X*=M,D=k*(k+A*X+2*O)+X*(A*k+X+2*Z)+F}else X=Q,k=Math.max(0,-(A*X+O)),D=-k*k+X*(X+2*Z)+F;else X=-Q,k=Math.max(0,-(A*X+O)),D=-k*k+X*(X+2*Z)+F;else if(X<=-U)k=Math.max(0,-(-A*Q+O)),X=k>0?-Q:Math.min(Math.max(-Q,-Z),Q),D=-k*k+X*(X+2*Z)+F;else if(X<=U)k=0,X=Math.min(Math.max(-Q,-Z),Q),D=X*(X+2*Z)+F;else k=Math.max(0,-(A*Q+O)),X=k>0?Q:Math.min(Math.max(-Q,-Z),Q),D=-k*k+X*(X+2*Z)+F;else X=A>0?-Q:Q,k=Math.max(0,-(A*X+O)),D=-k*k+X*(X+2*Z)+F;if(K)K.copy(this.origin).addScaledVector(this.direction,k);if(W)W.copy(MA).addScaledVector(bW,X);return D}intersectSphere(H,E){N8.subVectors(H.center,this.origin);let K=N8.dot(this.direction),W=N8.dot(N8)-K*K,Q=H.radius*H.radius;if(W>Q)return null;let A=Math.sqrt(Q-W),O=K-A,Z=K+A;if(Z<0)return null;if(O<0)return this.at(Z,E);return this.at(O,E)}intersectsSphere(H){return this.distanceSqToPoint(H.center)<=H.radius*H.radius}distanceToPlane(H){let E=H.normal.dot(this.direction);if(E===0){if(H.distanceToPoint(this.origin)===0)return 0;return null}let K=-(this.origin.dot(H.normal)+H.constant)/E;return K>=0?K:null}intersectPlane(H,E){let K=this.distanceToPlane(H);if(K===null)return null;return this.at(K,E)}intersectsPlane(H){let E=H.distanceToPoint(this.origin);if(E===0)return!0;if(H.normal.dot(this.direction)*E<0)return!0;return!1}intersectBox(H,E){let K,W,Q,A,O,Z,F=1/this.direction.x,Y=1/this.direction.y,k=1/this.direction.z,X=this.origin;if(F>=0)K=(H.min.x-X.x)*F,W=(H.max.x-X.x)*F;else K=(H.max.x-X.x)*F,W=(H.min.x-X.x)*F;if(Y>=0)Q=(H.min.y-X.y)*Y,A=(H.max.y-X.y)*Y;else Q=(H.max.y-X.y)*Y,A=(H.min.y-X.y)*Y;if(K>A||Q>W)return null;if(Q>K||isNaN(K))K=Q;if(A<W||isNaN(W))W=A;if(k>=0)O=(H.min.z-X.z)*k,Z=(H.max.z-X.z)*k;else O=(H.max.z-X.z)*k,Z=(H.min.z-X.z)*k;if(K>Z||O>W)return null;if(O>K||K!==K)K=O;if(Z<W||W!==W)W=Z;if(W<0)return null;return this.at(K>=0?K:W,E)}intersectsBox(H){return this.intersectBox(H,N8)!==null}intersectTriangle(H,E,K,W,Q){RA.subVectors(E,H),dW.subVectors(K,H),VA.crossVectors(RA,dW);let A=this.direction.dot(VA),O;if(A>0){if(W)return null;O=1}else if(A<0)O=-1,A=-A;else return null;s8.subVectors(this.origin,H);let Z=O*this.direction.dot(dW.crossVectors(s8,dW));if(Z<0)return null;let F=O*this.direction.dot(RA.cross(s8));if(F<0)return null;if(Z+F>A)return null;let Y=-O*s8.dot(VA);if(Y<0)return null;return this.at(Y/A,Q)}applyMatrix4(H){return this.origin.applyMatrix4(H),this.direction.transformDirection(H),this}equals(H){return H.origin.equals(this.origin)&&H.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class F1{constructor(H,E,K,W,Q,A,O,Z,F,Y,k,X,D,U,M,L){if(F1.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],H!==void 0)this.set(H,E,K,W,Q,A,O,Z,F,Y,k,X,D,U,M,L)}set(H,E,K,W,Q,A,O,Z,F,Y,k,X,D,U,M,L){let w=this.elements;return w[0]=H,w[4]=E,w[8]=K,w[12]=W,w[1]=Q,w[5]=A,w[9]=O,w[13]=Z,w[2]=F,w[6]=Y,w[10]=k,w[14]=X,w[3]=D,w[7]=U,w[11]=M,w[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new F1().fromArray(this.elements)}copy(H){let E=this.elements,K=H.elements;return E[0]=K[0],E[1]=K[1],E[2]=K[2],E[3]=K[3],E[4]=K[4],E[5]=K[5],E[6]=K[6],E[7]=K[7],E[8]=K[8],E[9]=K[9],E[10]=K[10],E[11]=K[11],E[12]=K[12],E[13]=K[13],E[14]=K[14],E[15]=K[15],this}copyPosition(H){let E=this.elements,K=H.elements;return E[12]=K[12],E[13]=K[13],E[14]=K[14],this}setFromMatrix3(H){let E=H.elements;return this.set(E[0],E[3],E[6],0,E[1],E[4],E[7],0,E[2],E[5],E[8],0,0,0,0,1),this}extractBasis(H,E,K){return H.setFromMatrixColumn(this,0),E.setFromMatrixColumn(this,1),K.setFromMatrixColumn(this,2),this}makeBasis(H,E,K){return this.set(H.x,E.x,K.x,0,H.y,E.y,K.y,0,H.z,E.z,K.z,0,0,0,0,1),this}extractRotation(H){let E=this.elements,K=H.elements,W=1/M6.setFromMatrixColumn(H,0).length(),Q=1/M6.setFromMatrixColumn(H,1).length(),A=1/M6.setFromMatrixColumn(H,2).length();return E[0]=K[0]*W,E[1]=K[1]*W,E[2]=K[2]*W,E[3]=0,E[4]=K[4]*Q,E[5]=K[5]*Q,E[6]=K[6]*Q,E[7]=0,E[8]=K[8]*A,E[9]=K[9]*A,E[10]=K[10]*A,E[11]=0,E[12]=0,E[13]=0,E[14]=0,E[15]=1,this}makeRotationFromEuler(H){let E=this.elements,K=H.x,W=H.y,Q=H.z,A=Math.cos(K),O=Math.sin(K),Z=Math.cos(W),F=Math.sin(W),Y=Math.cos(Q),k=Math.sin(Q);if(H.order==="XYZ"){let X=A*Y,D=A*k,U=O*Y,M=O*k;E[0]=Z*Y,E[4]=-Z*k,E[8]=F,E[1]=D+U*F,E[5]=X-M*F,E[9]=-O*Z,E[2]=M-X*F,E[6]=U+D*F,E[10]=A*Z}else if(H.order==="YXZ"){let X=Z*Y,D=Z*k,U=F*Y,M=F*k;E[0]=X+M*O,E[4]=U*O-D,E[8]=A*F,E[1]=A*k,E[5]=A*Y,E[9]=-O,E[2]=D*O-U,E[6]=M+X*O,E[10]=A*Z}else if(H.order==="ZXY"){let X=Z*Y,D=Z*k,U=F*Y,M=F*k;E[0]=X-M*O,E[4]=-A*k,E[8]=U+D*O,E[1]=D+U*O,E[5]=A*Y,E[9]=M-X*O,E[2]=-A*F,E[6]=O,E[10]=A*Z}else if(H.order==="ZYX"){let X=A*Y,D=A*k,U=O*Y,M=O*k;E[0]=Z*Y,E[4]=U*F-D,E[8]=X*F+M,E[1]=Z*k,E[5]=M*F+X,E[9]=D*F-U,E[2]=-F,E[6]=O*Z,E[10]=A*Z}else if(H.order==="YZX"){let X=A*Z,D=A*F,U=O*Z,M=O*F;E[0]=Z*Y,E[4]=M-X*k,E[8]=U*k+D,E[1]=k,E[5]=A*Y,E[9]=-O*Y,E[2]=-F*Y,E[6]=D*k+U,E[10]=X-M*k}else if(H.order==="XZY"){let X=A*Z,D=A*F,U=O*Z,M=O*F;E[0]=Z*Y,E[4]=-k,E[8]=F*Y,E[1]=X*k+M,E[5]=A*Y,E[9]=D*k-U,E[2]=U*k-D,E[6]=O*Y,E[10]=M*k+X}return E[3]=0,E[7]=0,E[11]=0,E[12]=0,E[13]=0,E[14]=0,E[15]=1,this}makeRotationFromQuaternion(H){return this.compose(Kf,H,Wf)}lookAt(H,E,K){let W=this.elements;if(N9.subVectors(H,E),N9.lengthSq()===0)N9.z=1;if(N9.normalize(),o8.crossVectors(K,N9),o8.lengthSq()===0){if(Math.abs(K.z)===1)N9.x+=0.0001;else N9.z+=0.0001;N9.normalize(),o8.crossVectors(K,N9)}return o8.normalize(),mW.crossVectors(N9,o8),W[0]=o8.x,W[4]=mW.x,W[8]=N9.x,W[1]=o8.y,W[5]=mW.y,W[9]=N9.y,W[2]=o8.z,W[6]=mW.z,W[10]=N9.z,this}multiply(H){return this.multiplyMatrices(this,H)}premultiply(H){return this.multiplyMatrices(H,this)}multiplyMatrices(H,E){let K=H.elements,W=E.elements,Q=this.elements,A=K[0],O=K[4],Z=K[8],F=K[12],Y=K[1],k=K[5],X=K[9],D=K[13],U=K[2],M=K[6],L=K[10],w=K[14],J=K[3],f=K[7],N=K[11],z=K[15],S=W[0],B=W[4],q=W[8],u=W[12],G=W[1],P=W[5],l=W[9],n=W[13],s=W[2],m=W[6],e=W[10],d=W[14],_=W[3],b=W[7],E0=W[11],A0=W[15];return Q[0]=A*S+O*G+Z*s+F*_,Q[4]=A*B+O*P+Z*m+F*b,Q[8]=A*q+O*l+Z*e+F*E0,Q[12]=A*u+O*n+Z*d+F*A0,Q[1]=Y*S+k*G+X*s+D*_,Q[5]=Y*B+k*P+X*m+D*b,Q[9]=Y*q+k*l+X*e+D*E0,Q[13]=Y*u+k*n+X*d+D*A0,Q[2]=U*S+M*G+L*s+w*_,Q[6]=U*B+M*P+L*m+w*b,Q[10]=U*q+M*l+L*e+w*E0,Q[14]=U*u+M*n+L*d+w*A0,Q[3]=J*S+f*G+N*s+z*_,Q[7]=J*B+f*P+N*m+z*b,Q[11]=J*q+f*l+N*e+z*E0,Q[15]=J*u+f*n+N*d+z*A0,this}multiplyScalar(H){let E=this.elements;return E[0]*=H,E[4]*=H,E[8]*=H,E[12]*=H,E[1]*=H,E[5]*=H,E[9]*=H,E[13]*=H,E[2]*=H,E[6]*=H,E[10]*=H,E[14]*=H,E[3]*=H,E[7]*=H,E[11]*=H,E[15]*=H,this}determinant(){let H=this.elements,E=H[0],K=H[4],W=H[8],Q=H[12],A=H[1],O=H[5],Z=H[9],F=H[13],Y=H[2],k=H[6],X=H[10],D=H[14],U=H[3],M=H[7],L=H[11],w=H[15];return U*(+Q*Z*k-W*F*k-Q*O*X+K*F*X+W*O*D-K*Z*D)+M*(+E*Z*D-E*F*X+Q*A*X-W*A*D+W*F*Y-Q*Z*Y)+L*(+E*F*k-E*O*D-Q*A*k+K*A*D+Q*O*Y-K*F*Y)+w*(-W*O*Y-E*Z*k+E*O*X+W*A*k-K*A*X+K*Z*Y)}transpose(){let H=this.elements,E;return E=H[1],H[1]=H[4],H[4]=E,E=H[2],H[2]=H[8],H[8]=E,E=H[6],H[6]=H[9],H[9]=E,E=H[3],H[3]=H[12],H[12]=E,E=H[7],H[7]=H[13],H[13]=E,E=H[11],H[11]=H[14],H[14]=E,this}setPosition(H,E,K){let W=this.elements;if(H.isVector3)W[12]=H.x,W[13]=H.y,W[14]=H.z;else W[12]=H,W[13]=E,W[14]=K;return this}invert(){let H=this.elements,E=H[0],K=H[1],W=H[2],Q=H[3],A=H[4],O=H[5],Z=H[6],F=H[7],Y=H[8],k=H[9],X=H[10],D=H[11],U=H[12],M=H[13],L=H[14],w=H[15],J=k*L*F-M*X*F+M*Z*D-O*L*D-k*Z*w+O*X*w,f=U*X*F-Y*L*F-U*Z*D+A*L*D+Y*Z*w-A*X*w,N=Y*M*F-U*k*F+U*O*D-A*M*D-Y*O*w+A*k*w,z=U*k*Z-Y*M*Z-U*O*X+A*M*X+Y*O*L-A*k*L,S=E*J+K*f+W*N+Q*z;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/S;return H[0]=J*B,H[1]=(M*X*Q-k*L*Q-M*W*D+K*L*D+k*W*w-K*X*w)*B,H[2]=(O*L*Q-M*Z*Q+M*W*F-K*L*F-O*W*w+K*Z*w)*B,H[3]=(k*Z*Q-O*X*Q-k*W*F+K*X*F+O*W*D-K*Z*D)*B,H[4]=f*B,H[5]=(Y*L*Q-U*X*Q+U*W*D-E*L*D-Y*W*w+E*X*w)*B,H[6]=(U*Z*Q-A*L*Q-U*W*F+E*L*F+A*W*w-E*Z*w)*B,H[7]=(A*X*Q-Y*Z*Q+Y*W*F-E*X*F-A*W*D+E*Z*D)*B,H[8]=N*B,H[9]=(U*k*Q-Y*M*Q-U*K*D+E*M*D+Y*K*w-E*k*w)*B,H[10]=(A*M*Q-U*O*Q+U*K*F-E*M*F-A*K*w+E*O*w)*B,H[11]=(Y*O*Q-A*k*Q-Y*K*F+E*k*F+A*K*D-E*O*D)*B,H[12]=z*B,H[13]=(Y*M*W-U*k*W+U*K*X-E*M*X-Y*K*L+E*k*L)*B,H[14]=(U*O*W-A*M*W-U*K*Z+E*M*Z+A*K*L-E*O*L)*B,H[15]=(A*k*W-Y*O*W+Y*K*Z-E*k*Z-A*K*X+E*O*X)*B,this}scale(H){let E=this.elements,K=H.x,W=H.y,Q=H.z;return E[0]*=K,E[4]*=W,E[8]*=Q,E[1]*=K,E[5]*=W,E[9]*=Q,E[2]*=K,E[6]*=W,E[10]*=Q,E[3]*=K,E[7]*=W,E[11]*=Q,this}getMaxScaleOnAxis(){let H=this.elements,E=H[0]*H[0]+H[1]*H[1]+H[2]*H[2],K=H[4]*H[4]+H[5]*H[5]+H[6]*H[6],W=H[8]*H[8]+H[9]*H[9]+H[10]*H[10];return Math.sqrt(Math.max(E,K,W))}makeTranslation(H,E,K){if(H.isVector3)this.set(1,0,0,H.x,0,1,0,H.y,0,0,1,H.z,0,0,0,1);else this.set(1,0,0,H,0,1,0,E,0,0,1,K,0,0,0,1);return this}makeRotationX(H){let E=Math.cos(H),K=Math.sin(H);return this.set(1,0,0,0,0,E,-K,0,0,K,E,0,0,0,0,1),this}makeRotationY(H){let E=Math.cos(H),K=Math.sin(H);return this.set(E,0,K,0,0,1,0,0,-K,0,E,0,0,0,0,1),this}makeRotationZ(H){let E=Math.cos(H),K=Math.sin(H);return this.set(E,-K,0,0,K,E,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(H,E){let K=Math.cos(E),W=Math.sin(E),Q=1-K,A=H.x,O=H.y,Z=H.z,F=Q*A,Y=Q*O;return this.set(F*A+K,F*O-W*Z,F*Z+W*O,0,F*O+W*Z,Y*O+K,Y*Z-W*A,0,F*Z-W*O,Y*Z+W*A,Q*Z*Z+K,0,0,0,0,1),this}makeScale(H,E,K){return this.set(H,0,0,0,0,E,0,0,0,0,K,0,0,0,0,1),this}makeShear(H,E,K,W,Q,A){return this.set(1,K,Q,0,H,1,A,0,E,W,1,0,0,0,0,1),this}compose(H,E,K){let W=this.elements,Q=E._x,A=E._y,O=E._z,Z=E._w,F=Q+Q,Y=A+A,k=O+O,X=Q*F,D=Q*Y,U=Q*k,M=A*Y,L=A*k,w=O*k,J=Z*F,f=Z*Y,N=Z*k,z=K.x,S=K.y,B=K.z;return W[0]=(1-(M+w))*z,W[1]=(D+N)*z,W[2]=(U-f)*z,W[3]=0,W[4]=(D-N)*S,W[5]=(1-(X+w))*S,W[6]=(L+J)*S,W[7]=0,W[8]=(U+f)*B,W[9]=(L-J)*B,W[10]=(1-(X+M))*B,W[11]=0,W[12]=H.x,W[13]=H.y,W[14]=H.z,W[15]=1,this}decompose(H,E,K){let W=this.elements,Q=M6.set(W[0],W[1],W[2]).length(),A=M6.set(W[4],W[5],W[6]).length(),O=M6.set(W[8],W[9],W[10]).length();if(this.determinant()<0)Q=-Q;H.x=W[12],H.y=W[13],H.z=W[14],b9.copy(this);let F=1/Q,Y=1/A,k=1/O;return b9.elements[0]*=F,b9.elements[1]*=F,b9.elements[2]*=F,b9.elements[4]*=Y,b9.elements[5]*=Y,b9.elements[6]*=Y,b9.elements[8]*=k,b9.elements[9]*=k,b9.elements[10]*=k,E.setFromRotationMatrix(b9),K.x=Q,K.y=A,K.z=O,this}makePerspective(H,E,K,W,Q,A,O=2000){let Z=this.elements,F=2*Q/(E-H),Y=2*Q/(K-W),k=(E+H)/(E-H),X=(K+W)/(K-W),D,U;if(O===2000)D=-(A+Q)/(A-Q),U=-2*A*Q/(A-Q);else if(O===2001)D=-A/(A-Q),U=-A*Q/(A-Q);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+O);return Z[0]=F,Z[4]=0,Z[8]=k,Z[12]=0,Z[1]=0,Z[5]=Y,Z[9]=X,Z[13]=0,Z[2]=0,Z[6]=0,Z[10]=D,Z[14]=U,Z[3]=0,Z[7]=0,Z[11]=-1,Z[15]=0,this}makeOrthographic(H,E,K,W,Q,A,O=2000){let Z=this.elements,F=1/(E-H),Y=1/(K-W),k=1/(A-Q),X=(E+H)*F,D=(K+W)*Y,U,M;if(O===2000)U=(A+Q)*k,M=-2*k;else if(O===2001)U=Q*k,M=-1*k;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+O);return Z[0]=2*F,Z[4]=0,Z[8]=0,Z[12]=-X,Z[1]=0,Z[5]=2*Y,Z[9]=0,Z[13]=-D,Z[2]=0,Z[6]=0,Z[10]=M,Z[14]=-U,Z[3]=0,Z[7]=0,Z[11]=0,Z[15]=1,this}equals(H){let E=this.elements,K=H.elements;for(let W=0;W<16;W++)if(E[W]!==K[W])return!1;return!0}fromArray(H,E=0){for(let K=0;K<16;K++)this.elements[K]=H[K+E];return this}toArray(H=[],E=0){let K=this.elements;return H[E]=K[0],H[E+1]=K[1],H[E+2]=K[2],H[E+3]=K[3],H[E+4]=K[4],H[E+5]=K[5],H[E+6]=K[6],H[E+7]=K[7],H[E+8]=K[8],H[E+9]=K[9],H[E+10]=K[10],H[E+11]=K[11],H[E+12]=K[12],H[E+13]=K[13],H[E+14]=K[14],H[E+15]=K[15],H}}var M6=new h,b9=new F1,Kf=new h(0,0,0),Wf=new h(1,1,1),o8=new h,mW=new h,N9=new h,_J=new F1,HX=new HH;class m9{constructor(H=0,E=0,K=0,W=m9.DEFAULT_ORDER){this.isEuler=!0,this._x=H,this._y=E,this._z=K,this._order=W}get x(){return this._x}set x(H){this._x=H,this._onChangeCallback()}get y(){return this._y}set y(H){this._y=H,this._onChangeCallback()}get z(){return this._z}set z(H){this._z=H,this._onChangeCallback()}get order(){return this._order}set order(H){this._order=H,this._onChangeCallback()}set(H,E,K,W=this._order){return this._x=H,this._y=E,this._z=K,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(H){return this._x=H._x,this._y=H._y,this._z=H._z,this._order=H._order,this._onChangeCallback(),this}setFromRotationMatrix(H,E=this._order,K=!0){let W=H.elements,Q=W[0],A=W[4],O=W[8],Z=W[1],F=W[5],Y=W[9],k=W[2],X=W[6],D=W[10];switch(E){case"XYZ":if(this._y=Math.asin(b0(O,-1,1)),Math.abs(O)<0.9999999)this._x=Math.atan2(-Y,D),this._z=Math.atan2(-A,Q);else this._x=Math.atan2(X,F),this._z=0;break;case"YXZ":if(this._x=Math.asin(-b0(Y,-1,1)),Math.abs(Y)<0.9999999)this._y=Math.atan2(O,D),this._z=Math.atan2(Z,F);else this._y=Math.atan2(-k,Q),this._z=0;break;case"ZXY":if(this._x=Math.asin(b0(X,-1,1)),Math.abs(X)<0.9999999)this._y=Math.atan2(-k,D),this._z=Math.atan2(-A,F);else this._y=0,this._z=Math.atan2(Z,Q);break;case"ZYX":if(this._y=Math.asin(-b0(k,-1,1)),Math.abs(k)<0.9999999)this._x=Math.atan2(X,D),this._z=Math.atan2(Z,Q);else this._x=0,this._z=Math.atan2(-A,F);break;case"YZX":if(this._z=Math.asin(b0(Z,-1,1)),Math.abs(Z)<0.9999999)this._x=Math.atan2(-Y,F),this._y=Math.atan2(-k,Q);else this._x=0,this._y=Math.atan2(O,D);break;case"XZY":if(this._z=Math.asin(-b0(A,-1,1)),Math.abs(A)<0.9999999)this._x=Math.atan2(X,F),this._y=Math.atan2(O,Q);else this._x=Math.atan2(-Y,D),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+E)}if(this._order=E,K===!0)this._onChangeCallback();return this}setFromQuaternion(H,E,K){return _J.makeRotationFromQuaternion(H),this.setFromRotationMatrix(_J,E,K)}setFromVector3(H,E=this._order){return this.set(H.x,H.y,H.z,E)}reorder(H){return HX.setFromEuler(this),this.setFromQuaternion(HX,H)}equals(H){return H._x===this._x&&H._y===this._y&&H._z===this._z&&H._order===this._order}fromArray(H){if(this._x=H[0],this._y=H[1],this._z=H[2],H[3]!==void 0)this._order=H[3];return this._onChangeCallback(),this}toArray(H=[],E=0){return H[E]=this._x,H[E+1]=this._y,H[E+2]=this._z,H[E+3]=this._order,H}_onChange(H){return this._onChangeCallback=H,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}m9.DEFAULT_ORDER="XYZ";class z5{constructor(){this.mask=1}set(H){this.mask=(1<<H|0)>>>0}enable(H){this.mask|=1<<H|0}enableAll(){this.mask=-1}toggle(H){this.mask^=1<<H|0}disable(H){this.mask&=~(1<<H|0)}disableAll(){this.mask=0}test(H){return(this.mask&H.mask)!==0}isEnabled(H){return(this.mask&(1<<H|0))!==0}}var Qf=0,EX=new h,R6=new HH,U8=new F1,cW=new h,cE=new h,Af=new h,Of=new HH,KX=new h(1,0,0),WX=new h(0,1,0),QX=new h(0,0,1),AX={type:"added"},Zf={type:"removed"},V6={type:"childadded",child:null},PA={type:"childremoved",child:null};class T1 extends _8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=KK(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=T1.DEFAULT_UP.clone();let H=new h,E=new m9,K=new HH,W=new h(1,1,1);function Q(){K.setFromEuler(E,!1)}function A(){E.setFromQuaternion(K,void 0,!1)}E._onChange(Q),K._onChange(A),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:H},rotation:{configurable:!0,enumerable:!0,value:E},quaternion:{configurable:!0,enumerable:!0,value:K},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new F1},normalMatrix:{value:new y0}}),this.matrix=new F1,this.matrixWorld=new F1,this.matrixAutoUpdate=T1.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=T1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new z5,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(H){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(H),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(H){return this.quaternion.premultiply(H),this}setRotationFromAxisAngle(H,E){this.quaternion.setFromAxisAngle(H,E)}setRotationFromEuler(H){this.quaternion.setFromEuler(H,!0)}setRotationFromMatrix(H){this.quaternion.setFromRotationMatrix(H)}setRotationFromQuaternion(H){this.quaternion.copy(H)}rotateOnAxis(H,E){return R6.setFromAxisAngle(H,E),this.quaternion.multiply(R6),this}rotateOnWorldAxis(H,E){return R6.setFromAxisAngle(H,E),this.quaternion.premultiply(R6),this}rotateX(H){return this.rotateOnAxis(KX,H)}rotateY(H){return this.rotateOnAxis(WX,H)}rotateZ(H){return this.rotateOnAxis(QX,H)}translateOnAxis(H,E){return EX.copy(H).applyQuaternion(this.quaternion),this.position.add(EX.multiplyScalar(E)),this}translateX(H){return this.translateOnAxis(KX,H)}translateY(H){return this.translateOnAxis(WX,H)}translateZ(H){return this.translateOnAxis(QX,H)}localToWorld(H){return this.updateWorldMatrix(!0,!1),H.applyMatrix4(this.matrixWorld)}worldToLocal(H){return this.updateWorldMatrix(!0,!1),H.applyMatrix4(U8.copy(this.matrixWorld).invert())}lookAt(H,E,K){if(H.isVector3)cW.copy(H);else cW.set(H,E,K);let W=this.parent;if(this.updateWorldMatrix(!0,!1),cE.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)U8.lookAt(cE,cW,this.up);else U8.lookAt(cW,cE,this.up);if(this.quaternion.setFromRotationMatrix(U8),W)U8.extractRotation(W.matrixWorld),R6.setFromRotationMatrix(U8),this.quaternion.premultiply(R6.invert())}add(H){if(arguments.length>1){for(let E=0;E<arguments.length;E++)this.add(arguments[E]);return this}if(H===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",H),this;if(H&&H.isObject3D)H.removeFromParent(),H.parent=this,this.children.push(H),H.dispatchEvent(AX),V6.child=H,this.dispatchEvent(V6),V6.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",H);return this}remove(H){if(arguments.length>1){for(let K=0;K<arguments.length;K++)this.remove(arguments[K]);return this}let E=this.children.indexOf(H);if(E!==-1)H.parent=null,this.children.splice(E,1),H.dispatchEvent(Zf),PA.child=H,this.dispatchEvent(PA),PA.child=null;return this}removeFromParent(){let H=this.parent;if(H!==null)H.remove(this);return this}clear(){return this.remove(...this.children)}attach(H){if(this.updateWorldMatrix(!0,!1),U8.copy(this.matrixWorld).invert(),H.parent!==null)H.parent.updateWorldMatrix(!0,!1),U8.multiply(H.parent.matrixWorld);return H.applyMatrix4(U8),H.removeFromParent(),H.parent=this,this.children.push(H),H.updateWorldMatrix(!1,!0),H.dispatchEvent(AX),V6.child=H,this.dispatchEvent(V6),V6.child=null,this}getObjectById(H){return this.getObjectByProperty("id",H)}getObjectByName(H){return this.getObjectByProperty("name",H)}getObjectByProperty(H,E){if(this[H]===E)return this;for(let K=0,W=this.children.length;K<W;K++){let A=this.children[K].getObjectByProperty(H,E);if(A!==void 0)return A}return}getObjectsByProperty(H,E,K=[]){if(this[H]===E)K.push(this);let W=this.children;for(let Q=0,A=W.length;Q<A;Q++)W[Q].getObjectsByProperty(H,E,K);return K}getWorldPosition(H){return this.updateWorldMatrix(!0,!1),H.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(H){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cE,H,Af),H}getWorldScale(H){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cE,Of,H),H}getWorldDirection(H){this.updateWorldMatrix(!0,!1);let E=this.matrixWorld.elements;return H.set(E[8],E[9],E[10]).normalize()}raycast(){}traverse(H){H(this);let E=this.children;for(let K=0,W=E.length;K<W;K++)E[K].traverse(H)}traverseVisible(H){if(this.visible===!1)return;H(this);let E=this.children;for(let K=0,W=E.length;K<W;K++)E[K].traverseVisible(H)}traverseAncestors(H){let E=this.parent;if(E!==null)H(E),E.traverseAncestors(H)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(H){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||H){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,H=!0}let E=this.children;for(let K=0,W=E.length;K<W;K++)E[K].updateMatrixWorld(H)}updateWorldMatrix(H,E){let K=this.parent;if(H===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(E===!0){let W=this.children;for(let Q=0,A=W.length;Q<A;Q++)W[Q].updateWorldMatrix(!1,!0)}}toJSON(H){let E=H===void 0||typeof H==="string",K={};if(E)H={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},K.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,this.name!=="")W.name=this.name;if(this.castShadow===!0)W.castShadow=!0;if(this.receiveShadow===!0)W.receiveShadow=!0;if(this.visible===!1)W.visible=!1;if(this.frustumCulled===!1)W.frustumCulled=!1;if(this.renderOrder!==0)W.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.matrixAutoUpdate===!1)W.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.visibility=this._visibility,W.active=this._active,W.bounds=this._bounds.map((O)=>({boxInitialized:O.boxInitialized,boxMin:O.box.min.toArray(),boxMax:O.box.max.toArray(),sphereInitialized:O.sphereInitialized,sphereRadius:O.sphere.radius,sphereCenter:O.sphere.center.toArray()})),W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.geometryCount=this._geometryCount,W.matricesTexture=this._matricesTexture.toJSON(H),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(H);if(this.boundingSphere!==null)W.boundingSphere={center:W.boundingSphere.center.toArray(),radius:W.boundingSphere.radius};if(this.boundingBox!==null)W.boundingBox={min:W.boundingBox.min.toArray(),max:W.boundingBox.max.toArray()}}function Q(O,Z){if(O[Z.uuid]===void 0)O[Z.uuid]=Z.toJSON(H);return Z.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(H).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(H).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Q(H.geometries,this.geometry);let O=this.geometry.parameters;if(O!==void 0&&O.shapes!==void 0){let Z=O.shapes;if(Array.isArray(Z))for(let F=0,Y=Z.length;F<Y;F++){let k=Z[F];Q(H.shapes,k)}else Q(H.shapes,Z)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Q(H.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let O=[];for(let Z=0,F=this.material.length;Z<F;Z++)O.push(Q(H.materials,this.material[Z]));W.material=O}else W.material=Q(H.materials,this.material);if(this.children.length>0){W.children=[];for(let O=0;O<this.children.length;O++)W.children.push(this.children[O].toJSON(H).object)}if(this.animations.length>0){W.animations=[];for(let O=0;O<this.animations.length;O++){let Z=this.animations[O];W.animations.push(Q(H.animations,Z))}}if(E){let O=A(H.geometries),Z=A(H.materials),F=A(H.textures),Y=A(H.images),k=A(H.shapes),X=A(H.skeletons),D=A(H.animations),U=A(H.nodes);if(O.length>0)K.geometries=O;if(Z.length>0)K.materials=Z;if(F.length>0)K.textures=F;if(Y.length>0)K.images=Y;if(k.length>0)K.shapes=k;if(X.length>0)K.skeletons=X;if(D.length>0)K.animations=D;if(U.length>0)K.nodes=U}return K.object=W,K;function A(O){let Z=[];for(let F in O){let Y=O[F];delete Y.metadata,Z.push(Y)}return Z}}clone(H){return new this.constructor().copy(this,H)}copy(H,E=!0){if(this.name=H.name,this.up.copy(H.up),this.position.copy(H.position),this.rotation.order=H.rotation.order,this.quaternion.copy(H.quaternion),this.scale.copy(H.scale),this.matrix.copy(H.matrix),this.matrixWorld.copy(H.matrixWorld),this.matrixAutoUpdate=H.matrixAutoUpdate,this.matrixWorldAutoUpdate=H.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=H.matrixWorldNeedsUpdate,this.layers.mask=H.layers.mask,this.visible=H.visible,this.castShadow=H.castShadow,this.receiveShadow=H.receiveShadow,this.frustumCulled=H.frustumCulled,this.renderOrder=H.renderOrder,this.animations=H.animations.slice(),this.userData=JSON.parse(JSON.stringify(H.userData)),E===!0)for(let K=0;K<H.children.length;K++){let W=H.children[K];this.add(W.clone())}return this}}T1.DEFAULT_UP=new h(0,1,0);T1.DEFAULT_MATRIX_AUTO_UPDATE=!0;T1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var d9=new h,f8=new h,GA=new h,L8=new h,P6=new h,G6=new h,OX=new h,zA=new h,BA=new h,qA=new h,CA=new E1,SA=new E1,IA=new E1;class l9{constructor(H=new h,E=new h,K=new h){this.a=H,this.b=E,this.c=K}static getNormal(H,E,K,W){W.subVectors(K,E),d9.subVectors(H,E),W.cross(d9);let Q=W.lengthSq();if(Q>0)return W.multiplyScalar(1/Math.sqrt(Q));return W.set(0,0,0)}static getBarycoord(H,E,K,W,Q){d9.subVectors(W,E),f8.subVectors(K,E),GA.subVectors(H,E);let A=d9.dot(d9),O=d9.dot(f8),Z=d9.dot(GA),F=f8.dot(f8),Y=f8.dot(GA),k=A*F-O*O;if(k===0)return Q.set(0,0,0),null;let X=1/k,D=(F*Z-O*Y)*X,U=(A*Y-O*Z)*X;return Q.set(1-D-U,U,D)}static containsPoint(H,E,K,W){if(this.getBarycoord(H,E,K,W,L8)===null)return!1;return L8.x>=0&&L8.y>=0&&L8.x+L8.y<=1}static getInterpolation(H,E,K,W,Q,A,O,Z){if(this.getBarycoord(H,E,K,W,L8)===null){if(Z.x=0,Z.y=0,"z"in Z)Z.z=0;if("w"in Z)Z.w=0;return null}return Z.setScalar(0),Z.addScaledVector(Q,L8.x),Z.addScaledVector(A,L8.y),Z.addScaledVector(O,L8.z),Z}static getInterpolatedAttribute(H,E,K,W,Q,A){return CA.setScalar(0),SA.setScalar(0),IA.setScalar(0),CA.fromBufferAttribute(H,E),SA.fromBufferAttribute(H,K),IA.fromBufferAttribute(H,W),A.setScalar(0),A.addScaledVector(CA,Q.x),A.addScaledVector(SA,Q.y),A.addScaledVector(IA,Q.z),A}static isFrontFacing(H,E,K,W){return d9.subVectors(K,E),f8.subVectors(H,E),d9.cross(f8).dot(W)<0?!0:!1}set(H,E,K){return this.a.copy(H),this.b.copy(E),this.c.copy(K),this}setFromPointsAndIndices(H,E,K,W){return this.a.copy(H[E]),this.b.copy(H[K]),this.c.copy(H[W]),this}setFromAttributeAndIndices(H,E,K,W){return this.a.fromBufferAttribute(H,E),this.b.fromBufferAttribute(H,K),this.c.fromBufferAttribute(H,W),this}clone(){return new this.constructor().copy(this)}copy(H){return this.a.copy(H.a),this.b.copy(H.b),this.c.copy(H.c),this}getArea(){return d9.subVectors(this.c,this.b),f8.subVectors(this.a,this.b),d9.cross(f8).length()*0.5}getMidpoint(H){return H.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(H){return l9.getNormal(this.a,this.b,this.c,H)}getPlane(H){return H.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(H,E){return l9.getBarycoord(H,this.a,this.b,this.c,E)}getInterpolation(H,E,K,W,Q){return l9.getInterpolation(H,this.a,this.b,this.c,E,K,W,Q)}containsPoint(H){return l9.containsPoint(H,this.a,this.b,this.c)}isFrontFacing(H){return l9.isFrontFacing(this.a,this.b,this.c,H)}intersectsBox(H){return H.intersectsTriangle(this)}closestPointToPoint(H,E){let K=this.a,W=this.b,Q=this.c,A,O;P6.subVectors(W,K),G6.subVectors(Q,K),zA.subVectors(H,K);let Z=P6.dot(zA),F=G6.dot(zA);if(Z<=0&&F<=0)return E.copy(K);BA.subVectors(H,W);let Y=P6.dot(BA),k=G6.dot(BA);if(Y>=0&&k<=Y)return E.copy(W);let X=Z*k-Y*F;if(X<=0&&Z>=0&&Y<=0)return A=Z/(Z-Y),E.copy(K).addScaledVector(P6,A);qA.subVectors(H,Q);let D=P6.dot(qA),U=G6.dot(qA);if(U>=0&&D<=U)return E.copy(Q);let M=D*F-Z*U;if(M<=0&&F>=0&&U<=0)return O=F/(F-U),E.copy(K).addScaledVector(G6,O);let L=Y*U-D*k;if(L<=0&&k-Y>=0&&D-U>=0)return OX.subVectors(Q,W),O=(k-Y)/(k-Y+(D-U)),E.copy(W).addScaledVector(OX,O);let w=1/(L+M+X);return A=M*w,O=X*w,E.copy(K).addScaledVector(P6,A).addScaledVector(G6,O)}equals(H){return H.a.equals(this.a)&&H.b.equals(this.b)&&H.c.equals(this.c)}}var Sk={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},r8={h:0,s:0,l:0},iW={h:0,s:0,l:0};function lA(H,E,K){if(K<0)K+=1;if(K>1)K-=1;if(K<0.16666666666666666)return H+(E-H)*6*K;if(K<0.5)return E;if(K<0.6666666666666666)return H+(E-H)*6*(0.6666666666666666-K);return H}class x0{constructor(H,E,K){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(H,E,K)}set(H,E,K){if(E===void 0&&K===void 0){let W=H;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(H,E,K);return this}setScalar(H){return this.r=H,this.g=H,this.b=H,this}setHex(H,E="srgb"){return H=Math.floor(H),this.r=(H>>16&255)/255,this.g=(H>>8&255)/255,this.b=(H&255)/255,s0.toWorkingColorSpace(this,E),this}setRGB(H,E,K,W=s0.workingColorSpace){return this.r=H,this.g=E,this.b=K,s0.toWorkingColorSpace(this,W),this}setHSL(H,E,K,W=s0.workingColorSpace){if(H=eU(H,1),E=b0(E,0,1),K=b0(K,0,1),E===0)this.r=this.g=this.b=K;else{let Q=K<=0.5?K*(1+E):K+E-K*E,A=2*K-Q;this.r=lA(A,Q,H+0.3333333333333333),this.g=lA(A,Q,H),this.b=lA(A,Q,H-0.3333333333333333)}return s0.toWorkingColorSpace(this,W),this}setStyle(H,E="srgb"){function K(Q){if(Q===void 0)return;if(parseFloat(Q)<1)console.warn("THREE.Color: Alpha component of "+H+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(H)){let Q,A=W[1],O=W[2];switch(A){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(O))return K(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,E);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(O))return K(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,E);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(O))return K(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,E);break;default:console.warn("THREE.Color: Unknown color model "+H)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(H)){let Q=W[1],A=Q.length;if(A===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,E);else if(A===6)return this.setHex(parseInt(Q,16),E);else console.warn("THREE.Color: Invalid hex color "+H)}else if(H&&H.length>0)return this.setColorName(H,E);return this}setColorName(H,E="srgb"){let K=Sk[H.toLowerCase()];if(K!==void 0)this.setHex(K,E);else console.warn("THREE.Color: Unknown color "+H);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(H){return this.r=H.r,this.g=H.g,this.b=H.b,this}copySRGBToLinear(H){return this.r=R8(H.r),this.g=R8(H.g),this.b=R8(H.b),this}copyLinearToSRGB(H){return this.r=C6(H.r),this.g=C6(H.g),this.b=C6(H.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(H="srgb"){return s0.fromWorkingColorSpace(i1.copy(this),H),Math.round(b0(i1.r*255,0,255))*65536+Math.round(b0(i1.g*255,0,255))*256+Math.round(b0(i1.b*255,0,255))}getHexString(H="srgb"){return("000000"+this.getHex(H).toString(16)).slice(-6)}getHSL(H,E=s0.workingColorSpace){s0.fromWorkingColorSpace(i1.copy(this),E);let{r:K,g:W,b:Q}=i1,A=Math.max(K,W,Q),O=Math.min(K,W,Q),Z,F,Y=(O+A)/2;if(O===A)Z=0,F=0;else{let k=A-O;switch(F=Y<=0.5?k/(A+O):k/(2-A-O),A){case K:Z=(W-Q)/k+(W<Q?6:0);break;case W:Z=(Q-K)/k+2;break;case Q:Z=(K-W)/k+4;break}Z/=6}return H.h=Z,H.s=F,H.l=Y,H}getRGB(H,E=s0.workingColorSpace){return s0.fromWorkingColorSpace(i1.copy(this),E),H.r=i1.r,H.g=i1.g,H.b=i1.b,H}getStyle(H="srgb"){s0.fromWorkingColorSpace(i1.copy(this),H);let{r:E,g:K,b:W}=i1;if(H!=="srgb")return`color(${H} ${E.toFixed(3)} ${K.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(E*255)},${Math.round(K*255)},${Math.round(W*255)})`}offsetHSL(H,E,K){return this.getHSL(r8),this.setHSL(r8.h+H,r8.s+E,r8.l+K)}add(H){return this.r+=H.r,this.g+=H.g,this.b+=H.b,this}addColors(H,E){return this.r=H.r+E.r,this.g=H.g+E.g,this.b=H.b+E.b,this}addScalar(H){return this.r+=H,this.g+=H,this.b+=H,this}sub(H){return this.r=Math.max(0,this.r-H.r),this.g=Math.max(0,this.g-H.g),this.b=Math.max(0,this.b-H.b),this}multiply(H){return this.r*=H.r,this.g*=H.g,this.b*=H.b,this}multiplyScalar(H){return this.r*=H,this.g*=H,this.b*=H,this}lerp(H,E){return this.r+=(H.r-this.r)*E,this.g+=(H.g-this.g)*E,this.b+=(H.b-this.b)*E,this}lerpColors(H,E,K){return this.r=H.r+(E.r-H.r)*K,this.g=H.g+(E.g-H.g)*K,this.b=H.b+(E.b-H.b)*K,this}lerpHSL(H,E){this.getHSL(r8),H.getHSL(iW);let K=DA(r8.h,iW.h,E),W=DA(r8.s,iW.s,E),Q=DA(r8.l,iW.l,E);return this.setHSL(K,W,Q),this}setFromVector3(H){return this.r=H.x,this.g=H.y,this.b=H.z,this}applyMatrix3(H){let E=this.r,K=this.g,W=this.b,Q=H.elements;return this.r=Q[0]*E+Q[3]*K+Q[6]*W,this.g=Q[1]*E+Q[4]*K+Q[7]*W,this.b=Q[2]*E+Q[5]*K+Q[8]*W,this}equals(H){return H.r===this.r&&H.g===this.g&&H.b===this.b}fromArray(H,E=0){return this.r=H[E],this.g=H[E+1],this.b=H[E+2],this}toArray(H=[],E=0){return H[E]=this.r,H[E+1]=this.g,H[E+2]=this.b,H}fromBufferAttribute(H,E){return this.r=H.getX(E),this.g=H.getY(E),this.b=H.getZ(E),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var i1=new x0;x0.NAMES=Sk;var Ff=0;class EH extends _8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=KK(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new x0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(H){if(this._alphaTest>0!==H>0)this.version++;this._alphaTest=H}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(H){if(H===void 0)return;for(let E in H){let K=H[E];if(K===void 0){console.warn(`THREE.Material: parameter '${E}' has value of undefined.`);continue}let W=this[E];if(W===void 0){console.warn(`THREE.Material: '${E}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set(K);else if(W&&W.isVector3&&(K&&K.isVector3))W.copy(K);else this[E]=K}}toJSON(H){let E=H===void 0||typeof H==="string";if(E)H={textures:{},images:{}};let K={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(K.uuid=this.uuid,K.type=this.type,this.name!=="")K.name=this.name;if(this.color&&this.color.isColor)K.color=this.color.getHex();if(this.roughness!==void 0)K.roughness=this.roughness;if(this.metalness!==void 0)K.metalness=this.metalness;if(this.sheen!==void 0)K.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)K.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)K.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)K.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)K.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)K.specular=this.specular.getHex();if(this.specularIntensity!==void 0)K.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)K.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)K.shininess=this.shininess;if(this.clearcoat!==void 0)K.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)K.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)K.clearcoatMap=this.clearcoatMap.toJSON(H).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)K.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(H).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)K.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(H).uuid,K.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)K.dispersion=this.dispersion;if(this.iridescence!==void 0)K.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)K.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)K.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)K.iridescenceMap=this.iridescenceMap.toJSON(H).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)K.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(H).uuid;if(this.anisotropy!==void 0)K.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)K.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)K.anisotropyMap=this.anisotropyMap.toJSON(H).uuid;if(this.map&&this.map.isTexture)K.map=this.map.toJSON(H).uuid;if(this.matcap&&this.matcap.isTexture)K.matcap=this.matcap.toJSON(H).uuid;if(this.alphaMap&&this.alphaMap.isTexture)K.alphaMap=this.alphaMap.toJSON(H).uuid;if(this.lightMap&&this.lightMap.isTexture)K.lightMap=this.lightMap.toJSON(H).uuid,K.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)K.aoMap=this.aoMap.toJSON(H).uuid,K.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)K.bumpMap=this.bumpMap.toJSON(H).uuid,K.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)K.normalMap=this.normalMap.toJSON(H).uuid,K.normalMapType=this.normalMapType,K.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)K.displacementMap=this.displacementMap.toJSON(H).uuid,K.displacementScale=this.displacementScale,K.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)K.roughnessMap=this.roughnessMap.toJSON(H).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)K.metalnessMap=this.metalnessMap.toJSON(H).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)K.emissiveMap=this.emissiveMap.toJSON(H).uuid;if(this.specularMap&&this.specularMap.isTexture)K.specularMap=this.specularMap.toJSON(H).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)K.specularIntensityMap=this.specularIntensityMap.toJSON(H).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)K.specularColorMap=this.specularColorMap.toJSON(H).uuid;if(this.envMap&&this.envMap.isTexture){if(K.envMap=this.envMap.toJSON(H).uuid,this.combine!==void 0)K.combine=this.combine}if(this.envMapRotation!==void 0)K.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)K.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)K.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)K.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)K.gradientMap=this.gradientMap.toJSON(H).uuid;if(this.transmission!==void 0)K.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)K.transmissionMap=this.transmissionMap.toJSON(H).uuid;if(this.thickness!==void 0)K.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)K.thicknessMap=this.thicknessMap.toJSON(H).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)K.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)K.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)K.size=this.size;if(this.shadowSide!==null)K.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)K.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)K.blending=this.blending;if(this.side!==0)K.side=this.side;if(this.vertexColors===!0)K.vertexColors=!0;if(this.opacity<1)K.opacity=this.opacity;if(this.transparent===!0)K.transparent=!0;if(this.blendSrc!==204)K.blendSrc=this.blendSrc;if(this.blendDst!==205)K.blendDst=this.blendDst;if(this.blendEquation!==100)K.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)K.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)K.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)K.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)K.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)K.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)K.depthFunc=this.depthFunc;if(this.depthTest===!1)K.depthTest=this.depthTest;if(this.depthWrite===!1)K.depthWrite=this.depthWrite;if(this.colorWrite===!1)K.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)K.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)K.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)K.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)K.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)K.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)K.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)K.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)K.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)K.rotation=this.rotation;if(this.polygonOffset===!0)K.polygonOffset=!0;if(this.polygonOffsetFactor!==0)K.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)K.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)K.linewidth=this.linewidth;if(this.dashSize!==void 0)K.dashSize=this.dashSize;if(this.gapSize!==void 0)K.gapSize=this.gapSize;if(this.scale!==void 0)K.scale=this.scale;if(this.dithering===!0)K.dithering=!0;if(this.alphaTest>0)K.alphaTest=this.alphaTest;if(this.alphaHash===!0)K.alphaHash=!0;if(this.alphaToCoverage===!0)K.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)K.premultipliedAlpha=!0;if(this.forceSinglePass===!0)K.forceSinglePass=!0;if(this.wireframe===!0)K.wireframe=!0;if(this.wireframeLinewidth>1)K.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")K.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")K.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)K.flatShading=!0;if(this.visible===!1)K.visible=!1;if(this.toneMapped===!1)K.toneMapped=!1;if(this.fog===!1)K.fog=!1;if(Object.keys(this.userData).length>0)K.userData=this.userData;function W(Q){let A=[];for(let O in Q){let Z=Q[O];delete Z.metadata,A.push(Z)}return A}if(E){let Q=W(H.textures),A=W(H.images);if(Q.length>0)K.textures=Q;if(A.length>0)K.images=A}return K}clone(){return new this.constructor().copy(this)}copy(H){this.name=H.name,this.blending=H.blending,this.side=H.side,this.vertexColors=H.vertexColors,this.opacity=H.opacity,this.transparent=H.transparent,this.blendSrc=H.blendSrc,this.blendDst=H.blendDst,this.blendEquation=H.blendEquation,this.blendSrcAlpha=H.blendSrcAlpha,this.blendDstAlpha=H.blendDstAlpha,this.blendEquationAlpha=H.blendEquationAlpha,this.blendColor.copy(H.blendColor),this.blendAlpha=H.blendAlpha,this.depthFunc=H.depthFunc,this.depthTest=H.depthTest,this.depthWrite=H.depthWrite,this.stencilWriteMask=H.stencilWriteMask,this.stencilFunc=H.stencilFunc,this.stencilRef=H.stencilRef,this.stencilFuncMask=H.stencilFuncMask,this.stencilFail=H.stencilFail,this.stencilZFail=H.stencilZFail,this.stencilZPass=H.stencilZPass,this.stencilWrite=H.stencilWrite;let E=H.clippingPlanes,K=null;if(E!==null){let W=E.length;K=Array(W);for(let Q=0;Q!==W;++Q)K[Q]=E[Q].clone()}return this.clippingPlanes=K,this.clipIntersection=H.clipIntersection,this.clipShadows=H.clipShadows,this.shadowSide=H.shadowSide,this.colorWrite=H.colorWrite,this.precision=H.precision,this.polygonOffset=H.polygonOffset,this.polygonOffsetFactor=H.polygonOffsetFactor,this.polygonOffsetUnits=H.polygonOffsetUnits,this.dithering=H.dithering,this.alphaTest=H.alphaTest,this.alphaHash=H.alphaHash,this.alphaToCoverage=H.alphaToCoverage,this.premultipliedAlpha=H.premultipliedAlpha,this.forceSinglePass=H.forceSinglePass,this.visible=H.visible,this.toneMapped=H.toneMapped,this.userData=JSON.parse(JSON.stringify(H.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(H){if(H===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class j6 extends EH{constructor(H){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new x0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new m9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(H)}copy(H){return super.copy(H),this.color.copy(H.color),this.map=H.map,this.lightMap=H.lightMap,this.lightMapIntensity=H.lightMapIntensity,this.aoMap=H.aoMap,this.aoMapIntensity=H.aoMapIntensity,this.specularMap=H.specularMap,this.alphaMap=H.alphaMap,this.envMap=H.envMap,this.envMapRotation.copy(H.envMapRotation),this.combine=H.combine,this.reflectivity=H.reflectivity,this.refractionRatio=H.refractionRatio,this.wireframe=H.wireframe,this.wireframeLinewidth=H.wireframeLinewidth,this.wireframeLinecap=H.wireframeLinecap,this.wireframeLinejoin=H.wireframeLinejoin,this.fog=H.fog,this}}var G1=new h,sW=new o0;class Y9{constructor(H,E,K=!1){if(Array.isArray(H))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=H,this.itemSize=E,this.count=H!==void 0?H.length/E:0,this.normalized=K,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(H){if(H===!0)this.version++}setUsage(H){return this.usage=H,this}addUpdateRange(H,E){this.updateRanges.push({start:H,count:E})}clearUpdateRanges(){this.updateRanges.length=0}copy(H){return this.name=H.name,this.array=new H.array.constructor(H.array),this.itemSize=H.itemSize,this.count=H.count,this.normalized=H.normalized,this.usage=H.usage,this.gpuType=H.gpuType,this}copyAt(H,E,K){H*=this.itemSize,K*=E.itemSize;for(let W=0,Q=this.itemSize;W<Q;W++)this.array[H+W]=E.array[K+W];return this}copyArray(H){return this.array.set(H),this}applyMatrix3(H){if(this.itemSize===2)for(let E=0,K=this.count;E<K;E++)sW.fromBufferAttribute(this,E),sW.applyMatrix3(H),this.setXY(E,sW.x,sW.y);else if(this.itemSize===3)for(let E=0,K=this.count;E<K;E++)G1.fromBufferAttribute(this,E),G1.applyMatrix3(H),this.setXYZ(E,G1.x,G1.y,G1.z);return this}applyMatrix4(H){for(let E=0,K=this.count;E<K;E++)G1.fromBufferAttribute(this,E),G1.applyMatrix4(H),this.setXYZ(E,G1.x,G1.y,G1.z);return this}applyNormalMatrix(H){for(let E=0,K=this.count;E<K;E++)G1.fromBufferAttribute(this,E),G1.applyNormalMatrix(H),this.setXYZ(E,G1.x,G1.y,G1.z);return this}transformDirection(H){for(let E=0,K=this.count;E<K;E++)G1.fromBufferAttribute(this,E),G1.transformDirection(H),this.setXYZ(E,G1.x,G1.y,G1.z);return this}set(H,E=0){return this.array.set(H,E),this}getComponent(H,E){let K=this.array[H*this.itemSize+E];if(this.normalized)K=bE(K,this.array);return K}setComponent(H,E,K){if(this.normalized)K=F9(K,this.array);return this.array[H*this.itemSize+E]=K,this}getX(H){let E=this.array[H*this.itemSize];if(this.normalized)E=bE(E,this.array);return E}setX(H,E){if(this.normalized)E=F9(E,this.array);return this.array[H*this.itemSize]=E,this}getY(H){let E=this.array[H*this.itemSize+1];if(this.normalized)E=bE(E,this.array);return E}setY(H,E){if(this.normalized)E=F9(E,this.array);return this.array[H*this.itemSize+1]=E,this}getZ(H){let E=this.array[H*this.itemSize+2];if(this.normalized)E=bE(E,this.array);return E}setZ(H,E){if(this.normalized)E=F9(E,this.array);return this.array[H*this.itemSize+2]=E,this}getW(H){let E=this.array[H*this.itemSize+3];if(this.normalized)E=bE(E,this.array);return E}setW(H,E){if(this.normalized)E=F9(E,this.array);return this.array[H*this.itemSize+3]=E,this}setXY(H,E,K){if(H*=this.itemSize,this.normalized)E=F9(E,this.array),K=F9(K,this.array);return this.array[H+0]=E,this.array[H+1]=K,this}setXYZ(H,E,K,W){if(H*=this.itemSize,this.normalized)E=F9(E,this.array),K=F9(K,this.array),W=F9(W,this.array);return this.array[H+0]=E,this.array[H+1]=K,this.array[H+2]=W,this}setXYZW(H,E,K,W,Q){if(H*=this.itemSize,this.normalized)E=F9(E,this.array),K=F9(K,this.array),W=F9(W,this.array),Q=F9(Q,this.array);return this.array[H+0]=E,this.array[H+1]=K,this.array[H+2]=W,this.array[H+3]=Q,this}onUpload(H){return this.onUploadCallback=H,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let H={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")H.name=this.name;if(this.usage!==35044)H.usage=this.usage;return H}}class B5 extends Y9{constructor(H,E,K){super(new Uint16Array(H),E,K)}}class q5 extends Y9{constructor(H,E,K){super(new Uint32Array(H),E,K)}}class H9 extends Y9{constructor(H,E,K){super(new Float32Array(H),E,K)}}var Yf=0,I9=new F1,TA=new T1,z6=new h,U9=new IH,iE=new IH,l1=new h;class L9 extends _8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=KK(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(H){if(Array.isArray(H))this.index=new((GO(H))?q5:B5)(H,1);else this.index=H;return this}setIndirect(H){return this.indirect=H,this}getIndirect(){return this.indirect}getAttribute(H){return this.attributes[H]}setAttribute(H,E){return this.attributes[H]=E,this}deleteAttribute(H){return delete this.attributes[H],this}hasAttribute(H){return this.attributes[H]!==void 0}addGroup(H,E,K=0){this.groups.push({start:H,count:E,materialIndex:K})}clearGroups(){this.groups=[]}setDrawRange(H,E){this.drawRange.start=H,this.drawRange.count=E}applyMatrix4(H){let E=this.attributes.position;if(E!==void 0)E.applyMatrix4(H),E.needsUpdate=!0;let K=this.attributes.normal;if(K!==void 0){let Q=new y0().getNormalMatrix(H);K.applyNormalMatrix(Q),K.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(H),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(H){return I9.makeRotationFromQuaternion(H),this.applyMatrix4(I9),this}rotateX(H){return I9.makeRotationX(H),this.applyMatrix4(I9),this}rotateY(H){return I9.makeRotationY(H),this.applyMatrix4(I9),this}rotateZ(H){return I9.makeRotationZ(H),this.applyMatrix4(I9),this}translate(H,E,K){return I9.makeTranslation(H,E,K),this.applyMatrix4(I9),this}scale(H,E,K){return I9.makeScale(H,E,K),this.applyMatrix4(I9),this}lookAt(H){return TA.lookAt(H),TA.updateMatrix(),this.applyMatrix4(TA.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(z6).negate(),this.translate(z6.x,z6.y,z6.z),this}setFromPoints(H){let E=this.getAttribute("position");if(E===void 0){let K=[];for(let W=0,Q=H.length;W<Q;W++){let A=H[W];K.push(A.x,A.y,A.z||0)}this.setAttribute("position",new H9(K,3))}else{let K=Math.min(H.length,E.count);for(let W=0;W<K;W++){let Q=H[W];E.setXYZ(W,Q.x,Q.y,Q.z||0)}if(H.length>E.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");E.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new IH;let H=this.attributes.position,E=this.morphAttributes.position;if(H&&H.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new h(-1/0,-1/0,-1/0),new h(1/0,1/0,1/0));return}if(H!==void 0){if(this.boundingBox.setFromBufferAttribute(H),E)for(let K=0,W=E.length;K<W;K++){let Q=E[K];if(U9.setFromBufferAttribute(Q),this.morphTargetsRelative)l1.addVectors(this.boundingBox.min,U9.min),this.boundingBox.expandByPoint(l1),l1.addVectors(this.boundingBox.max,U9.max),this.boundingBox.expandByPoint(l1);else this.boundingBox.expandByPoint(U9.min),this.boundingBox.expandByPoint(U9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new h6;let H=this.attributes.position,E=this.morphAttributes.position;if(H&&H.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new h,1/0);return}if(H){let K=this.boundingSphere.center;if(U9.setFromBufferAttribute(H),E)for(let Q=0,A=E.length;Q<A;Q++){let O=E[Q];if(iE.setFromBufferAttribute(O),this.morphTargetsRelative)l1.addVectors(U9.min,iE.min),U9.expandByPoint(l1),l1.addVectors(U9.max,iE.max),U9.expandByPoint(l1);else U9.expandByPoint(iE.min),U9.expandByPoint(iE.max)}U9.getCenter(K);let W=0;for(let Q=0,A=H.count;Q<A;Q++)l1.fromBufferAttribute(H,Q),W=Math.max(W,K.distanceToSquared(l1));if(E)for(let Q=0,A=E.length;Q<A;Q++){let O=E[Q],Z=this.morphTargetsRelative;for(let F=0,Y=O.count;F<Y;F++){if(l1.fromBufferAttribute(O,F),Z)z6.fromBufferAttribute(H,F),l1.add(z6);W=Math.max(W,K.distanceToSquared(l1))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let H=this.index,E=this.attributes;if(H===null||E.position===void 0||E.normal===void 0||E.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:K,normal:W,uv:Q}=E;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Y9(new Float32Array(4*K.count),4));let A=this.getAttribute("tangent"),O=[],Z=[];for(let q=0;q<K.count;q++)O[q]=new h,Z[q]=new h;let F=new h,Y=new h,k=new h,X=new o0,D=new o0,U=new o0,M=new h,L=new h;function w(q,u,G){F.fromBufferAttribute(K,q),Y.fromBufferAttribute(K,u),k.fromBufferAttribute(K,G),X.fromBufferAttribute(Q,q),D.fromBufferAttribute(Q,u),U.fromBufferAttribute(Q,G),Y.sub(F),k.sub(F),D.sub(X),U.sub(X);let P=1/(D.x*U.y-U.x*D.y);if(!isFinite(P))return;M.copy(Y).multiplyScalar(U.y).addScaledVector(k,-D.y).multiplyScalar(P),L.copy(k).multiplyScalar(D.x).addScaledVector(Y,-U.x).multiplyScalar(P),O[q].add(M),O[u].add(M),O[G].add(M),Z[q].add(L),Z[u].add(L),Z[G].add(L)}let J=this.groups;if(J.length===0)J=[{start:0,count:H.count}];for(let q=0,u=J.length;q<u;++q){let G=J[q],P=G.start,l=G.count;for(let n=P,s=P+l;n<s;n+=3)w(H.getX(n+0),H.getX(n+1),H.getX(n+2))}let f=new h,N=new h,z=new h,S=new h;function B(q){z.fromBufferAttribute(W,q),S.copy(z);let u=O[q];f.copy(u),f.sub(z.multiplyScalar(z.dot(u))).normalize(),N.crossVectors(S,u);let P=N.dot(Z[q])<0?-1:1;A.setXYZW(q,f.x,f.y,f.z,P)}for(let q=0,u=J.length;q<u;++q){let G=J[q],P=G.start,l=G.count;for(let n=P,s=P+l;n<s;n+=3)B(H.getX(n+0)),B(H.getX(n+1)),B(H.getX(n+2))}}computeVertexNormals(){let H=this.index,E=this.getAttribute("position");if(E!==void 0){let K=this.getAttribute("normal");if(K===void 0)K=new Y9(new Float32Array(E.count*3),3),this.setAttribute("normal",K);else for(let X=0,D=K.count;X<D;X++)K.setXYZ(X,0,0,0);let W=new h,Q=new h,A=new h,O=new h,Z=new h,F=new h,Y=new h,k=new h;if(H)for(let X=0,D=H.count;X<D;X+=3){let U=H.getX(X+0),M=H.getX(X+1),L=H.getX(X+2);W.fromBufferAttribute(E,U),Q.fromBufferAttribute(E,M),A.fromBufferAttribute(E,L),Y.subVectors(A,Q),k.subVectors(W,Q),Y.cross(k),O.fromBufferAttribute(K,U),Z.fromBufferAttribute(K,M),F.fromBufferAttribute(K,L),O.add(Y),Z.add(Y),F.add(Y),K.setXYZ(U,O.x,O.y,O.z),K.setXYZ(M,Z.x,Z.y,Z.z),K.setXYZ(L,F.x,F.y,F.z)}else for(let X=0,D=E.count;X<D;X+=3)W.fromBufferAttribute(E,X+0),Q.fromBufferAttribute(E,X+1),A.fromBufferAttribute(E,X+2),Y.subVectors(A,Q),k.subVectors(W,Q),Y.cross(k),K.setXYZ(X+0,Y.x,Y.y,Y.z),K.setXYZ(X+1,Y.x,Y.y,Y.z),K.setXYZ(X+2,Y.x,Y.y,Y.z);this.normalizeNormals(),K.needsUpdate=!0}}normalizeNormals(){let H=this.attributes.normal;for(let E=0,K=H.count;E<K;E++)l1.fromBufferAttribute(H,E),l1.normalize(),H.setXYZ(E,l1.x,l1.y,l1.z)}toNonIndexed(){function H(O,Z){let{array:F,itemSize:Y,normalized:k}=O,X=new F.constructor(Z.length*Y),D=0,U=0;for(let M=0,L=Z.length;M<L;M++){if(O.isInterleavedBufferAttribute)D=Z[M]*O.data.stride+O.offset;else D=Z[M]*Y;for(let w=0;w<Y;w++)X[U++]=F[D++]}return new Y9(X,Y,k)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let E=new L9,K=this.index.array,W=this.attributes;for(let O in W){let Z=W[O],F=H(Z,K);E.setAttribute(O,F)}let Q=this.morphAttributes;for(let O in Q){let Z=[],F=Q[O];for(let Y=0,k=F.length;Y<k;Y++){let X=F[Y],D=H(X,K);Z.push(D)}E.morphAttributes[O]=Z}E.morphTargetsRelative=this.morphTargetsRelative;let A=this.groups;for(let O=0,Z=A.length;O<Z;O++){let F=A[O];E.addGroup(F.start,F.count,F.materialIndex)}return E}toJSON(){let H={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(H.uuid=this.uuid,H.type=this.type,this.name!=="")H.name=this.name;if(Object.keys(this.userData).length>0)H.userData=this.userData;if(this.parameters!==void 0){let Z=this.parameters;for(let F in Z)if(Z[F]!==void 0)H[F]=Z[F];return H}H.data={attributes:{}};let E=this.index;if(E!==null)H.data.index={type:E.array.constructor.name,array:Array.prototype.slice.call(E.array)};let K=this.attributes;for(let Z in K){let F=K[Z];H.data.attributes[Z]=F.toJSON(H.data)}let W={},Q=!1;for(let Z in this.morphAttributes){let F=this.morphAttributes[Z],Y=[];for(let k=0,X=F.length;k<X;k++){let D=F[k];Y.push(D.toJSON(H.data))}if(Y.length>0)W[Z]=Y,Q=!0}if(Q)H.data.morphAttributes=W,H.data.morphTargetsRelative=this.morphTargetsRelative;let A=this.groups;if(A.length>0)H.data.groups=JSON.parse(JSON.stringify(A));let O=this.boundingSphere;if(O!==null)H.data.boundingSphere={center:O.center.toArray(),radius:O.radius};return H}clone(){return new this.constructor().copy(this)}copy(H){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let E={};this.name=H.name;let K=H.index;if(K!==null)this.setIndex(K.clone(E));let W=H.attributes;for(let F in W){let Y=W[F];this.setAttribute(F,Y.clone(E))}let Q=H.morphAttributes;for(let F in Q){let Y=[],k=Q[F];for(let X=0,D=k.length;X<D;X++)Y.push(k[X].clone(E));this.morphAttributes[F]=Y}this.morphTargetsRelative=H.morphTargetsRelative;let A=H.groups;for(let F=0,Y=A.length;F<Y;F++){let k=A[F];this.addGroup(k.start,k.count,k.materialIndex)}let O=H.boundingBox;if(O!==null)this.boundingBox=O.clone();let Z=H.boundingSphere;if(Z!==null)this.boundingSphere=Z.clone();return this.drawRange.start=H.drawRange.start,this.drawRange.count=H.drawRange.count,this.userData=H.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var ZX=new F1,GH=new G5,oW=new h6,FX=new h,rW=new h,tW=new h,aW=new h,vA=new h,eW=new h,YX=new h,$W=new h;class E9 extends T1{constructor(H=new L9,E=new j6){super();this.isMesh=!0,this.type="Mesh",this.geometry=H,this.material=E,this.updateMorphTargets()}copy(H,E){if(super.copy(H,E),H.morphTargetInfluences!==void 0)this.morphTargetInfluences=H.morphTargetInfluences.slice();if(H.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},H.morphTargetDictionary);return this.material=Array.isArray(H.material)?H.material.slice():H.material,this.geometry=H.geometry,this}updateMorphTargets(){let E=this.geometry.morphAttributes,K=Object.keys(E);if(K.length>0){let W=E[K[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,A=W.length;Q<A;Q++){let O=W[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[O]=Q}}}}getVertexPosition(H,E){let K=this.geometry,W=K.attributes.position,Q=K.morphAttributes.position,A=K.morphTargetsRelative;E.fromBufferAttribute(W,H);let O=this.morphTargetInfluences;if(Q&&O){eW.set(0,0,0);for(let Z=0,F=Q.length;Z<F;Z++){let Y=O[Z],k=Q[Z];if(Y===0)continue;if(vA.fromBufferAttribute(k,H),A)eW.addScaledVector(vA,Y);else eW.addScaledVector(vA.sub(E),Y)}E.add(eW)}return E}raycast(H,E){let K=this.geometry,W=this.material,Q=this.matrixWorld;if(W===void 0)return;if(K.boundingSphere===null)K.computeBoundingSphere();if(oW.copy(K.boundingSphere),oW.applyMatrix4(Q),GH.copy(H.ray).recast(H.near),oW.containsPoint(GH.origin)===!1){if(GH.intersectSphere(oW,FX)===null)return;if(GH.origin.distanceToSquared(FX)>(H.far-H.near)**2)return}if(ZX.copy(Q).invert(),GH.copy(H.ray).applyMatrix4(ZX),K.boundingBox!==null){if(GH.intersectsBox(K.boundingBox)===!1)return}this._computeIntersections(H,E,GH)}_computeIntersections(H,E,K){let W,Q=this.geometry,A=this.material,O=Q.index,Z=Q.attributes.position,F=Q.attributes.uv,Y=Q.attributes.uv1,k=Q.attributes.normal,X=Q.groups,D=Q.drawRange;if(O!==null)if(Array.isArray(A))for(let U=0,M=X.length;U<M;U++){let L=X[U],w=A[L.materialIndex],J=Math.max(L.start,D.start),f=Math.min(O.count,Math.min(L.start+L.count,D.start+D.count));for(let N=J,z=f;N<z;N+=3){let S=O.getX(N),B=O.getX(N+1),q=O.getX(N+2);if(W=_W(this,w,H,K,F,Y,k,S,B,q),W)W.faceIndex=Math.floor(N/3),W.face.materialIndex=L.materialIndex,E.push(W)}}else{let U=Math.max(0,D.start),M=Math.min(O.count,D.start+D.count);for(let L=U,w=M;L<w;L+=3){let J=O.getX(L),f=O.getX(L+1),N=O.getX(L+2);if(W=_W(this,A,H,K,F,Y,k,J,f,N),W)W.faceIndex=Math.floor(L/3),E.push(W)}}else if(Z!==void 0)if(Array.isArray(A))for(let U=0,M=X.length;U<M;U++){let L=X[U],w=A[L.materialIndex],J=Math.max(L.start,D.start),f=Math.min(Z.count,Math.min(L.start+L.count,D.start+D.count));for(let N=J,z=f;N<z;N+=3){let S=N,B=N+1,q=N+2;if(W=_W(this,w,H,K,F,Y,k,S,B,q),W)W.faceIndex=Math.floor(N/3),W.face.materialIndex=L.materialIndex,E.push(W)}}else{let U=Math.max(0,D.start),M=Math.min(Z.count,D.start+D.count);for(let L=U,w=M;L<w;L+=3){let J=L,f=L+1,N=L+2;if(W=_W(this,A,H,K,F,Y,k,J,f,N),W)W.faceIndex=Math.floor(L/3),E.push(W)}}}}function Jf(H,E,K,W,Q,A,O,Z){let F;if(E.side===1)F=W.intersectTriangle(O,A,Q,!0,Z);else F=W.intersectTriangle(Q,A,O,E.side===0,Z);if(F===null)return null;$W.copy(Z),$W.applyMatrix4(H.matrixWorld);let Y=K.ray.origin.distanceTo($W);if(Y<K.near||Y>K.far)return null;return{distance:Y,point:$W.clone(),object:H}}function _W(H,E,K,W,Q,A,O,Z,F,Y){H.getVertexPosition(Z,rW),H.getVertexPosition(F,tW),H.getVertexPosition(Y,aW);let k=Jf(H,E,K,W,rW,tW,aW,YX);if(k){let X=new h;if(l9.getBarycoord(YX,rW,tW,aW,X),Q)k.uv=l9.getInterpolatedAttribute(Q,Z,F,Y,X,new o0);if(A)k.uv1=l9.getInterpolatedAttribute(A,Z,F,Y,X,new o0);if(O){if(k.normal=l9.getInterpolatedAttribute(O,Z,F,Y,X,new h),k.normal.dot(W.direction)>0)k.normal.multiplyScalar(-1)}let D={a:Z,b:F,c:Y,normal:new h,materialIndex:0};l9.getNormal(rW,tW,aW,D.normal),k.face=D,k.barycoord=X}return k}class p6 extends L9{constructor(H=1,E=1,K=1,W=1,Q=1,A=1){super();this.type="BoxGeometry",this.parameters={width:H,height:E,depth:K,widthSegments:W,heightSegments:Q,depthSegments:A};let O=this;W=Math.floor(W),Q=Math.floor(Q),A=Math.floor(A);let Z=[],F=[],Y=[],k=[],X=0,D=0;U("z","y","x",-1,-1,K,E,H,A,Q,0),U("z","y","x",1,-1,K,E,-H,A,Q,1),U("x","z","y",1,1,H,K,E,W,A,2),U("x","z","y",1,-1,H,K,-E,W,A,3),U("x","y","z",1,-1,H,E,K,W,Q,4),U("x","y","z",-1,-1,H,E,-K,W,Q,5),this.setIndex(Z),this.setAttribute("position",new H9(F,3)),this.setAttribute("normal",new H9(Y,3)),this.setAttribute("uv",new H9(k,2));function U(M,L,w,J,f,N,z,S,B,q,u){let G=N/B,P=z/q,l=N/2,n=z/2,s=S/2,m=B+1,e=q+1,d=0,_=0,b=new h;for(let E0=0;E0<e;E0++){let A0=E0*P-n;for(let q0=0;q0<m;q0++){let C0=q0*G-l;b[M]=C0*J,b[L]=A0*f,b[w]=s,F.push(b.x,b.y,b.z),b[M]=0,b[L]=0,b[w]=S>0?1:-1,Y.push(b.x,b.y,b.z),k.push(q0/B),k.push(1-E0/q),d+=1}}for(let E0=0;E0<q;E0++)for(let A0=0;A0<B;A0++){let q0=X+A0+m*E0,C0=X+A0+m*(E0+1),c=X+(A0+1)+m*(E0+1),K0=X+(A0+1)+m*E0;Z.push(q0,C0,K0),Z.push(C0,c,K0),_+=6}O.addGroup(D,_,u),D+=_,X+=d}}copy(H){return super.copy(H),this.parameters=Object.assign({},H.parameters),this}static fromJSON(H){return new p6(H.width,H.height,H.depth,H.widthSegments,H.heightSegments,H.depthSegments)}}function lH(H){let E={};for(let K in H){E[K]={};for(let W in H[K]){let Q=H[K][W];if(Q&&(Q.isColor||Q.isMatrix3||Q.isMatrix4||Q.isVector2||Q.isVector3||Q.isVector4||Q.isTexture||Q.isQuaternion))if(Q.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),E[K][W]=null;else E[K][W]=Q.clone();else if(Array.isArray(Q))E[K][W]=Q.slice();else E[K][W]=Q}}return E}function o1(H){let E={};for(let K=0;K<H.length;K++){let W=lH(H[K]);for(let Q in W)E[Q]=W[Q]}return E}function Xf(H){let E=[];for(let K=0;K<H.length;K++)E.push(H[K].clone());return E}function CO(H){let E=H.getRenderTarget();if(E===null)return H.outputColorSpace;if(E.isXRRenderTarget===!0)return E.texture.colorSpace;return s0.workingColorSpace}var Ik={clone:lH,merge:o1},kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class E8 extends EH{constructor(H){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,H!==void 0)this.setValues(H)}copy(H){return super.copy(H),this.fragmentShader=H.fragmentShader,this.vertexShader=H.vertexShader,this.uniforms=lH(H.uniforms),this.uniformsGroups=Xf(H.uniformsGroups),this.defines=Object.assign({},H.defines),this.wireframe=H.wireframe,this.wireframeLinewidth=H.wireframeLinewidth,this.fog=H.fog,this.lights=H.lights,this.clipping=H.clipping,this.extensions=Object.assign({},H.extensions),this.glslVersion=H.glslVersion,this}toJSON(H){let E=super.toJSON(H);E.glslVersion=this.glslVersion,E.uniforms={};for(let W in this.uniforms){let A=this.uniforms[W].value;if(A&&A.isTexture)E.uniforms[W]={type:"t",value:A.toJSON(H).uuid};else if(A&&A.isColor)E.uniforms[W]={type:"c",value:A.getHex()};else if(A&&A.isVector2)E.uniforms[W]={type:"v2",value:A.toArray()};else if(A&&A.isVector3)E.uniforms[W]={type:"v3",value:A.toArray()};else if(A&&A.isVector4)E.uniforms[W]={type:"v4",value:A.toArray()};else if(A&&A.isMatrix3)E.uniforms[W]={type:"m3",value:A.toArray()};else if(A&&A.isMatrix4)E.uniforms[W]={type:"m4",value:A.toArray()};else E.uniforms[W]={value:A}}if(Object.keys(this.defines).length>0)E.defines=this.defines;E.vertexShader=this.vertexShader,E.fragmentShader=this.fragmentShader,E.lights=this.lights,E.clipping=this.clipping;let K={};for(let W in this.extensions)if(this.extensions[W]===!0)K[W]=!0;if(Object.keys(K).length>0)E.extensions=K;return E}}class C5 extends T1{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new F1,this.projectionMatrix=new F1,this.projectionMatrixInverse=new F1,this.coordinateSystem=2000}copy(H,E){return super.copy(H,E),this.matrixWorldInverse.copy(H.matrixWorldInverse),this.projectionMatrix.copy(H.projectionMatrix),this.projectionMatrixInverse.copy(H.projectionMatrixInverse),this.coordinateSystem=H.coordinateSystem,this}getWorldDirection(H){return super.getWorldDirection(H).negate()}updateMatrixWorld(H){super.updateMatrixWorld(H),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(H,E){super.updateWorldMatrix(H,E),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var t8=new h,JX=new o0,XX=new o0;class s1 extends C5{constructor(H=50,E=1,K=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=H,this.zoom=1,this.near=K,this.far=W,this.focus=10,this.aspect=E,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(H,E){return super.copy(H,E),this.fov=H.fov,this.zoom=H.zoom,this.near=H.near,this.far=H.far,this.focus=H.focus,this.aspect=H.aspect,this.view=H.view===null?null:Object.assign({},H.view),this.filmGauge=H.filmGauge,this.filmOffset=H.filmOffset,this}setFocalLength(H){let E=0.5*this.getFilmHeight()/H;this.fov=Q5*2*Math.atan(E),this.updateProjectionMatrix()}getFocalLength(){let H=Math.tan(kA*0.5*this.fov);return 0.5*this.getFilmHeight()/H}getEffectiveFOV(){return Q5*2*Math.atan(Math.tan(kA*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(H,E,K){t8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),E.set(t8.x,t8.y).multiplyScalar(-H/t8.z),t8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),K.set(t8.x,t8.y).multiplyScalar(-H/t8.z)}getViewSize(H,E){return this.getViewBounds(H,JX,XX),E.subVectors(XX,JX)}setViewOffset(H,E,K,W,Q,A){if(this.aspect=H/E,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=H,this.view.fullHeight=E,this.view.offsetX=K,this.view.offsetY=W,this.view.width=Q,this.view.height=A,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let H=this.near,E=H*Math.tan(kA*0.5*this.fov)/this.zoom,K=2*E,W=this.aspect*K,Q=-0.5*W,A=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Z,fullHeight:F}=A;Q+=A.offsetX*W/Z,E-=A.offsetY*K/F,W*=A.width/Z,K*=A.height/F}let O=this.filmOffset;if(O!==0)Q+=H*O/this.getFilmWidth();this.projectionMatrix.makePerspective(Q,Q+W,E,E-K,H,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(H){let E=super.toJSON(H);if(E.object.fov=this.fov,E.object.zoom=this.zoom,E.object.near=this.near,E.object.far=this.far,E.object.focus=this.focus,E.object.aspect=this.aspect,this.view!==null)E.object.view=Object.assign({},this.view);return E.object.filmGauge=this.filmGauge,E.object.filmOffset=this.filmOffset,E}}var B6=-90,q6=1;class SO extends T1{constructor(H,E,K){super();this.type="CubeCamera",this.renderTarget=K,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new s1(B6,q6,H,E);W.layers=this.layers,this.add(W);let Q=new s1(B6,q6,H,E);Q.layers=this.layers,this.add(Q);let A=new s1(B6,q6,H,E);A.layers=this.layers,this.add(A);let O=new s1(B6,q6,H,E);O.layers=this.layers,this.add(O);let Z=new s1(B6,q6,H,E);Z.layers=this.layers,this.add(Z);let F=new s1(B6,q6,H,E);F.layers=this.layers,this.add(F)}updateCoordinateSystem(){let H=this.coordinateSystem,E=this.children.concat(),[K,W,Q,A,O,Z]=E;for(let F of E)this.remove(F);if(H===2000)K.up.set(0,1,0),K.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),A.up.set(0,0,1),A.lookAt(0,-1,0),O.up.set(0,1,0),O.lookAt(0,0,1),Z.up.set(0,1,0),Z.lookAt(0,0,-1);else if(H===2001)K.up.set(0,-1,0),K.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),A.up.set(0,0,-1),A.lookAt(0,-1,0),O.up.set(0,-1,0),O.lookAt(0,0,1),Z.up.set(0,-1,0),Z.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+H);for(let F of E)this.add(F),F.updateMatrixWorld()}update(H,E){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:K,activeMipmapLevel:W}=this;if(this.coordinateSystem!==H.coordinateSystem)this.coordinateSystem=H.coordinateSystem,this.updateCoordinateSystem();let[Q,A,O,Z,F,Y]=this.children,k=H.getRenderTarget(),X=H.getActiveCubeFace(),D=H.getActiveMipmapLevel(),U=H.xr.enabled;H.xr.enabled=!1;let M=K.texture.generateMipmaps;K.texture.generateMipmaps=!1,H.setRenderTarget(K,0,W),H.render(E,Q),H.setRenderTarget(K,1,W),H.render(E,A),H.setRenderTarget(K,2,W),H.render(E,O),H.setRenderTarget(K,3,W),H.render(E,Z),H.setRenderTarget(K,4,W),H.render(E,F),K.texture.generateMipmaps=M,H.setRenderTarget(K,5,W),H.render(E,Y),H.setRenderTarget(k,X,D),H.xr.enabled=U,K.texture.needsPMREMUpdate=!0}}class S5 extends _1{constructor(H,E,K,W,Q,A,O,Z,F,Y){H=H!==void 0?H:[],E=E!==void 0?E:301;super(H,E,K,W,Q,A,O,Z,F,Y);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(H){this.image=H}}class IO extends P8{constructor(H=1,E={}){super(H,H,E);this.isWebGLCubeRenderTarget=!0;let K={width:H,height:H,depth:1},W=[K,K,K,K,K,K];this.texture=new S5(W,E.mapping,E.wrapS,E.wrapT,E.magFilter,E.minFilter,E.format,E.type,E.anisotropy,E.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=E.generateMipmaps!==void 0?E.generateMipmaps:!1,this.texture.minFilter=E.minFilter!==void 0?E.minFilter:1006}fromEquirectangularTexture(H,E){this.texture.type=E.type,this.texture.colorSpace=E.colorSpace,this.texture.generateMipmaps=E.generateMipmaps,this.texture.minFilter=E.minFilter,this.texture.magFilter=E.magFilter;let K={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new p6(5,5,5),Q=new E8({name:"CubemapFromEquirect",uniforms:lH(K.uniforms),vertexShader:K.vertexShader,fragmentShader:K.fragmentShader,side:1,blending:0});Q.uniforms.tEquirect.value=E;let A=new E9(W,Q),O=E.minFilter;if(E.minFilter===1008)E.minFilter=1006;return new SO(1,10,this).update(H,A),E.minFilter=O,A.geometry.dispose(),A.material.dispose(),this}clear(H,E,K,W){let Q=H.getRenderTarget();for(let A=0;A<6;A++)H.setRenderTarget(this,A),H.clear(E,K,W);H.setRenderTarget(Q)}}class WK{constructor(H,E=1,K=1000){this.isFog=!0,this.name="",this.color=new x0(H),this.near=E,this.far=K}clone(){return new WK(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class I5 extends T1{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new m9,this.environmentIntensity=1,this.environmentRotation=new m9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(H,E){if(super.copy(H,E),H.background!==null)this.background=H.background.clone();if(H.environment!==null)this.environment=H.environment.clone();if(H.fog!==null)this.fog=H.fog.clone();if(this.backgroundBlurriness=H.backgroundBlurriness,this.backgroundIntensity=H.backgroundIntensity,this.backgroundRotation.copy(H.backgroundRotation),this.environmentIntensity=H.environmentIntensity,this.environmentRotation.copy(H.environmentRotation),H.overrideMaterial!==null)this.overrideMaterial=H.overrideMaterial.clone();return this.matrixAutoUpdate=H.matrixAutoUpdate,this}toJSON(H){let E=super.toJSON(H);if(this.fog!==null)E.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)E.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)E.object.backgroundIntensity=this.backgroundIntensity;if(E.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)E.object.environmentIntensity=this.environmentIntensity;return E.object.environmentRotation=this.environmentRotation.toArray(),E}}var yA=new h,wf=new h,Nf=new y0;class M8{constructor(H=new h(1,0,0),E=0){this.isPlane=!0,this.normal=H,this.constant=E}set(H,E){return this.normal.copy(H),this.constant=E,this}setComponents(H,E,K,W){return this.normal.set(H,E,K),this.constant=W,this}setFromNormalAndCoplanarPoint(H,E){return this.normal.copy(H),this.constant=-E.dot(this.normal),this}setFromCoplanarPoints(H,E,K){let W=yA.subVectors(K,E).cross(wf.subVectors(H,E)).normalize();return this.setFromNormalAndCoplanarPoint(W,H),this}copy(H){return this.normal.copy(H.normal),this.constant=H.constant,this}normalize(){let H=1/this.normal.length();return this.normal.multiplyScalar(H),this.constant*=H,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(H){return this.normal.dot(H)+this.constant}distanceToSphere(H){return this.distanceToPoint(H.center)-H.radius}projectPoint(H,E){return E.copy(H).addScaledVector(this.normal,-this.distanceToPoint(H))}intersectLine(H,E){let K=H.delta(yA),W=this.normal.dot(K);if(W===0){if(this.distanceToPoint(H.start)===0)return E.copy(H.start);return null}let Q=-(H.start.dot(this.normal)+this.constant)/W;if(Q<0||Q>1)return null;return E.copy(H.start).addScaledVector(K,Q)}intersectsLine(H){let E=this.distanceToPoint(H.start),K=this.distanceToPoint(H.end);return E<0&&K>0||K<0&&E>0}intersectsBox(H){return H.intersectsPlane(this)}intersectsSphere(H){return H.intersectsPlane(this)}coplanarPoint(H){return H.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(H,E){let K=E||Nf.getNormalMatrix(H),W=this.coplanarPoint(yA).applyMatrix4(H),Q=this.normal.applyMatrix3(K).normalize();return this.constant=-W.dot(Q),this}translate(H){return this.constant-=H.dot(this.normal),this}equals(H){return H.normal.equals(this.normal)&&H.constant===this.constant}clone(){return new this.constructor().copy(this)}}var zH=new h6,H5=new h;class QK{constructor(H=new M8,E=new M8,K=new M8,W=new M8,Q=new M8,A=new M8){this.planes=[H,E,K,W,Q,A]}set(H,E,K,W,Q,A){let O=this.planes;return O[0].copy(H),O[1].copy(E),O[2].copy(K),O[3].copy(W),O[4].copy(Q),O[5].copy(A),this}copy(H){let E=this.planes;for(let K=0;K<6;K++)E[K].copy(H.planes[K]);return this}setFromProjectionMatrix(H,E=2000){let K=this.planes,W=H.elements,Q=W[0],A=W[1],O=W[2],Z=W[3],F=W[4],Y=W[5],k=W[6],X=W[7],D=W[8],U=W[9],M=W[10],L=W[11],w=W[12],J=W[13],f=W[14],N=W[15];if(K[0].setComponents(Z-Q,X-F,L-D,N-w).normalize(),K[1].setComponents(Z+Q,X+F,L+D,N+w).normalize(),K[2].setComponents(Z+A,X+Y,L+U,N+J).normalize(),K[3].setComponents(Z-A,X-Y,L-U,N-J).normalize(),K[4].setComponents(Z-O,X-k,L-M,N-f).normalize(),E===2000)K[5].setComponents(Z+O,X+k,L+M,N+f).normalize();else if(E===2001)K[5].setComponents(O,k,M,f).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+E);return this}intersectsObject(H){if(H.boundingSphere!==void 0){if(H.boundingSphere===null)H.computeBoundingSphere();zH.copy(H.boundingSphere).applyMatrix4(H.matrixWorld)}else{let E=H.geometry;if(E.boundingSphere===null)E.computeBoundingSphere();zH.copy(E.boundingSphere).applyMatrix4(H.matrixWorld)}return this.intersectsSphere(zH)}intersectsSprite(H){return zH.center.set(0,0,0),zH.radius=0.7071067811865476,zH.applyMatrix4(H.matrixWorld),this.intersectsSphere(zH)}intersectsSphere(H){let E=this.planes,K=H.center,W=-H.radius;for(let Q=0;Q<6;Q++)if(E[Q].distanceToPoint(K)<W)return!1;return!0}intersectsBox(H){let E=this.planes;for(let K=0;K<6;K++){let W=E[K];if(H5.x=W.normal.x>0?H.max.x:H.min.x,H5.y=W.normal.y>0?H.max.y:H.min.y,H5.z=W.normal.z>0?H.max.z:H.min.z,W.distanceToPoint(H5)<0)return!1}return!0}containsPoint(H){let E=this.planes;for(let K=0;K<6;K++)if(E[K].distanceToPoint(H)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class AK extends EH{constructor(H){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new x0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(H)}copy(H){return super.copy(H),this.color.copy(H.color),this.map=H.map,this.alphaMap=H.alphaMap,this.size=H.size,this.sizeAttenuation=H.sizeAttenuation,this.fog=H.fog,this}}var kX=new F1,jA=new G5,E5=new h6,K5=new h;class l5 extends T1{constructor(H=new L9,E=new AK){super();this.isPoints=!0,this.type="Points",this.geometry=H,this.material=E,this.updateMorphTargets()}copy(H,E){return super.copy(H,E),this.material=Array.isArray(H.material)?H.material.slice():H.material,this.geometry=H.geometry,this}raycast(H,E){let K=this.geometry,W=this.matrixWorld,Q=H.params.Points.threshold,A=K.drawRange;if(K.boundingSphere===null)K.computeBoundingSphere();if(E5.copy(K.boundingSphere),E5.applyMatrix4(W),E5.radius+=Q,H.ray.intersectsSphere(E5)===!1)return;kX.copy(W).invert(),jA.copy(H.ray).applyMatrix4(kX);let O=Q/((this.scale.x+this.scale.y+this.scale.z)/3),Z=O*O,F=K.index,k=K.attributes.position;if(F!==null){let X=Math.max(0,A.start),D=Math.min(F.count,A.start+A.count);for(let U=X,M=D;U<M;U++){let L=F.getX(U);K5.fromBufferAttribute(k,L),DX(K5,L,Z,W,H,E,this)}}else{let X=Math.max(0,A.start),D=Math.min(k.count,A.start+A.count);for(let U=X,M=D;U<M;U++)K5.fromBufferAttribute(k,U),DX(K5,U,Z,W,H,E,this)}}updateMorphTargets(){let E=this.geometry.morphAttributes,K=Object.keys(E);if(K.length>0){let W=E[K[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,A=W.length;Q<A;Q++){let O=W[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[O]=Q}}}}}function DX(H,E,K,W,Q,A,O){let Z=jA.distanceSqToPoint(H);if(Z<K){let F=new h;jA.closestPointToPoint(H,F),F.applyMatrix4(W);let Y=Q.ray.origin.distanceTo(F);if(Y<Q.near||Y>Q.far)return;A.push({distance:Y,distanceToRay:Math.sqrt(Z),point:F,index:E,face:null,faceIndex:null,barycoord:null,object:O})}}class g6 extends T1{constructor(){super();this.isGroup=!0,this.type="Group"}}class T5 extends _1{constructor(H,E,K,W,Q,A,O,Z,F,Y=1026){if(Y!==1026&&Y!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(K===void 0&&Y===1026)K=1014;if(K===void 0&&Y===1027)K=1020;super(null,W,Q,A,O,Z,Y,K,F);this.isDepthTexture=!0,this.image={width:H,height:E},this.magFilter=O!==void 0?O:1003,this.minFilter=Z!==void 0?Z:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(H){return super.copy(H),this.compareFunction=H.compareFunction,this}toJSON(H){let E=super.toJSON(H);if(this.compareFunction!==null)E.compareFunction=this.compareFunction;return E}}class OK extends L9{constructor(H=1,E=1,K=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:H,height:E,widthSegments:K,heightSegments:W};let Q=H/2,A=E/2,O=Math.floor(K),Z=Math.floor(W),F=O+1,Y=Z+1,k=H/O,X=E/Z,D=[],U=[],M=[],L=[];for(let w=0;w<Y;w++){let J=w*X-A;for(let f=0;f<F;f++){let N=f*k-Q;U.push(N,-J,0),M.push(0,0,1),L.push(f/O),L.push(1-w/Z)}}for(let w=0;w<Z;w++)for(let J=0;J<O;J++){let f=J+F*w,N=J+F*(w+1),z=J+1+F*(w+1),S=J+1+F*w;D.push(f,N,S),D.push(N,z,S)}this.setIndex(D),this.setAttribute("position",new H9(U,3)),this.setAttribute("normal",new H9(M,3)),this.setAttribute("uv",new H9(L,2))}copy(H){return super.copy(H),this.parameters=Object.assign({},H.parameters),this}static fromJSON(H){return new OK(H.width,H.height,H.widthSegments,H.heightSegments)}}class ZK extends L9{constructor(H=1,E=32,K=16,W=0,Q=Math.PI*2,A=0,O=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:H,widthSegments:E,heightSegments:K,phiStart:W,phiLength:Q,thetaStart:A,thetaLength:O},E=Math.max(3,Math.floor(E)),K=Math.max(2,Math.floor(K));let Z=Math.min(A+O,Math.PI),F=0,Y=[],k=new h,X=new h,D=[],U=[],M=[],L=[];for(let w=0;w<=K;w++){let J=[],f=w/K,N=0;if(w===0&&A===0)N=0.5/E;else if(w===K&&Z===Math.PI)N=-0.5/E;for(let z=0;z<=E;z++){let S=z/E;k.x=-H*Math.cos(W+S*Q)*Math.sin(A+f*O),k.y=H*Math.cos(A+f*O),k.z=H*Math.sin(W+S*Q)*Math.sin(A+f*O),U.push(k.x,k.y,k.z),X.copy(k).normalize(),M.push(X.x,X.y,X.z),L.push(S+N,1-f),J.push(F++)}Y.push(J)}for(let w=0;w<K;w++)for(let J=0;J<E;J++){let f=Y[w][J+1],N=Y[w][J],z=Y[w+1][J],S=Y[w+1][J+1];if(w!==0||A>0)D.push(f,N,S);if(w!==K-1||Z<Math.PI)D.push(N,z,S)}this.setIndex(D),this.setAttribute("position",new H9(U,3)),this.setAttribute("normal",new H9(M,3)),this.setAttribute("uv",new H9(L,2))}copy(H){return super.copy(H),this.parameters=Object.assign({},H.parameters),this}static fromJSON(H){return new ZK(H.radius,H.widthSegments,H.heightSegments,H.phiStart,H.phiLength,H.thetaStart,H.thetaLength)}}class FK extends L9{constructor(H=1,E=0.4,K=64,W=8,Q=2,A=3){super();this.type="TorusKnotGeometry",this.parameters={radius:H,tube:E,tubularSegments:K,radialSegments:W,p:Q,q:A},K=Math.floor(K),W=Math.floor(W);let O=[],Z=[],F=[],Y=[],k=new h,X=new h,D=new h,U=new h,M=new h,L=new h,w=new h;for(let f=0;f<=K;++f){let N=f/K*Q*Math.PI*2;J(N,Q,A,H,D),J(N+0.01,Q,A,H,U),L.subVectors(U,D),w.addVectors(U,D),M.crossVectors(L,w),w.crossVectors(M,L),M.normalize(),w.normalize();for(let z=0;z<=W;++z){let S=z/W*Math.PI*2,B=-E*Math.cos(S),q=E*Math.sin(S);k.x=D.x+(B*w.x+q*M.x),k.y=D.y+(B*w.y+q*M.y),k.z=D.z+(B*w.z+q*M.z),Z.push(k.x,k.y,k.z),X.subVectors(k,D).normalize(),F.push(X.x,X.y,X.z),Y.push(f/K),Y.push(z/W)}}for(let f=1;f<=K;f++)for(let N=1;N<=W;N++){let z=(W+1)*(f-1)+(N-1),S=(W+1)*f+(N-1),B=(W+1)*f+N,q=(W+1)*(f-1)+N;O.push(z,S,q),O.push(S,B,q)}this.setIndex(O),this.setAttribute("position",new H9(Z,3)),this.setAttribute("normal",new H9(F,3)),this.setAttribute("uv",new H9(Y,2));function J(f,N,z,S,B){let q=Math.cos(f),u=Math.sin(f),G=z/N*f,P=Math.cos(G);B.x=S*(2+P)*0.5*q,B.y=S*(2+P)*u*0.5,B.z=S*Math.sin(G)*0.5}}copy(H){return super.copy(H),this.parameters=Object.assign({},H.parameters),this}static fromJSON(H){return new FK(H.radius,H.tube,H.tubularSegments,H.radialSegments,H.p,H.q)}}class lO extends EH{constructor(H){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new x0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new x0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new o0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new m9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(H)}copy(H){return super.copy(H),this.defines={STANDARD:""},this.color.copy(H.color),this.roughness=H.roughness,this.metalness=H.metalness,this.map=H.map,this.lightMap=H.lightMap,this.lightMapIntensity=H.lightMapIntensity,this.aoMap=H.aoMap,this.aoMapIntensity=H.aoMapIntensity,this.emissive.copy(H.emissive),this.emissiveMap=H.emissiveMap,this.emissiveIntensity=H.emissiveIntensity,this.bumpMap=H.bumpMap,this.bumpScale=H.bumpScale,this.normalMap=H.normalMap,this.normalMapType=H.normalMapType,this.normalScale.copy(H.normalScale),this.displacementMap=H.displacementMap,this.displacementScale=H.displacementScale,this.displacementBias=H.displacementBias,this.roughnessMap=H.roughnessMap,this.metalnessMap=H.metalnessMap,this.alphaMap=H.alphaMap,this.envMap=H.envMap,this.envMapRotation.copy(H.envMapRotation),this.envMapIntensity=H.envMapIntensity,this.wireframe=H.wireframe,this.wireframeLinewidth=H.wireframeLinewidth,this.wireframeLinecap=H.wireframeLinecap,this.wireframeLinejoin=H.wireframeLinejoin,this.flatShading=H.flatShading,this.fog=H.fog,this}}class YK extends lO{constructor(H){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new o0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return b0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(E){this.ior=(1+0.4*E)/(1-0.4*E)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new x0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new x0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new x0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(H)}get anisotropy(){return this._anisotropy}set anisotropy(H){if(this._anisotropy>0!==H>0)this.version++;this._anisotropy=H}get clearcoat(){return this._clearcoat}set clearcoat(H){if(this._clearcoat>0!==H>0)this.version++;this._clearcoat=H}get iridescence(){return this._iridescence}set iridescence(H){if(this._iridescence>0!==H>0)this.version++;this._iridescence=H}get dispersion(){return this._dispersion}set dispersion(H){if(this._dispersion>0!==H>0)this.version++;this._dispersion=H}get sheen(){return this._sheen}set sheen(H){if(this._sheen>0!==H>0)this.version++;this._sheen=H}get transmission(){return this._transmission}set transmission(H){if(this._transmission>0!==H>0)this.version++;this._transmission=H}copy(H){return super.copy(H),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=H.anisotropy,this.anisotropyRotation=H.anisotropyRotation,this.anisotropyMap=H.anisotropyMap,this.clearcoat=H.clearcoat,this.clearcoatMap=H.clearcoatMap,this.clearcoatRoughness=H.clearcoatRoughness,this.clearcoatRoughnessMap=H.clearcoatRoughnessMap,this.clearcoatNormalMap=H.clearcoatNormalMap,this.clearcoatNormalScale.copy(H.clearcoatNormalScale),this.dispersion=H.dispersion,this.ior=H.ior,this.iridescence=H.iridescence,this.iridescenceMap=H.iridescenceMap,this.iridescenceIOR=H.iridescenceIOR,this.iridescenceThicknessRange=[...H.iridescenceThicknessRange],this.iridescenceThicknessMap=H.iridescenceThicknessMap,this.sheen=H.sheen,this.sheenColor.copy(H.sheenColor),this.sheenColorMap=H.sheenColorMap,this.sheenRoughness=H.sheenRoughness,this.sheenRoughnessMap=H.sheenRoughnessMap,this.transmission=H.transmission,this.transmissionMap=H.transmissionMap,this.thickness=H.thickness,this.thicknessMap=H.thicknessMap,this.attenuationDistance=H.attenuationDistance,this.attenuationColor.copy(H.attenuationColor),this.specularIntensity=H.specularIntensity,this.specularIntensityMap=H.specularIntensityMap,this.specularColor.copy(H.specularColor),this.specularColorMap=H.specularColorMap,this}}class TO extends EH{constructor(H){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(H)}copy(H){return super.copy(H),this.depthPacking=H.depthPacking,this.map=H.map,this.alphaMap=H.alphaMap,this.displacementMap=H.displacementMap,this.displacementScale=H.displacementScale,this.displacementBias=H.displacementBias,this.wireframe=H.wireframe,this.wireframeLinewidth=H.wireframeLinewidth,this}}class vO extends EH{constructor(H){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(H)}copy(H){return super.copy(H),this.map=H.map,this.alphaMap=H.alphaMap,this.displacementMap=H.displacementMap,this.displacementScale=H.displacementScale,this.displacementBias=H.displacementBias,this}}function W5(H,E,K){if(!H||!K&&H.constructor===E)return H;if(typeof E.BYTES_PER_ELEMENT==="number")return new E(H);return Array.prototype.slice.call(H)}function Uf(H){return ArrayBuffer.isView(H)&&!(H instanceof DataView)}class x6{constructor(H,E,K,W){this.parameterPositions=H,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new E.constructor(K),this.sampleValues=E,this.valueSize=K,this.settings=null,this.DefaultSettings_={}}evaluate(H){let E=this.parameterPositions,K=this._cachedIndex,W=E[K],Q=E[K-1];H:{E:{let A;K:{W:if(!(H<W)){for(let O=K+2;;){if(W===void 0){if(H<Q)break W;return K=E.length,this._cachedIndex=K,this.copySampleValue_(K-1)}if(K===O)break;if(Q=W,W=E[++K],H<W)break E}A=E.length;break K}if(!(H>=Q)){let O=E[1];if(H<O)K=2,Q=O;for(let Z=K-2;;){if(Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===Z)break;if(W=Q,Q=E[--K-1],H>=Q)break E}A=K,K=0;break K}break H}while(K<A){let O=K+A>>>1;if(H<E[O])A=O;else K=O+1}if(W=E[K],Q=E[K-1],Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return K=E.length,this._cachedIndex=K,this.copySampleValue_(K-1)}this._cachedIndex=K,this.intervalChanged_(K,Q,W)}return this.interpolate_(K,Q,H,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(H){let E=this.resultBuffer,K=this.sampleValues,W=this.valueSize,Q=H*W;for(let A=0;A!==W;++A)E[A]=K[Q+A];return E}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class yO extends x6{constructor(H,E,K,W){super(H,E,K,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(H,E,K){let W=this.parameterPositions,Q=H-2,A=H+1,O=W[Q],Z=W[A];if(O===void 0)switch(this.getSettings_().endingStart){case 2401:Q=H,O=2*E-K;break;case 2402:Q=W.length-2,O=E+W[Q]-W[Q+1];break;default:Q=H,O=K}if(Z===void 0)switch(this.getSettings_().endingEnd){case 2401:A=H,Z=2*K-E;break;case 2402:A=1,Z=K+W[1]-W[0];break;default:A=H-1,Z=E}let F=(K-E)*0.5,Y=this.valueSize;this._weightPrev=F/(E-O),this._weightNext=F/(Z-K),this._offsetPrev=Q*Y,this._offsetNext=A*Y}interpolate_(H,E,K,W){let Q=this.resultBuffer,A=this.sampleValues,O=this.valueSize,Z=H*O,F=Z-O,Y=this._offsetPrev,k=this._offsetNext,X=this._weightPrev,D=this._weightNext,U=(K-E)/(W-E),M=U*U,L=M*U,w=-X*L+2*X*M-X*U,J=(1+X)*L+(-1.5-2*X)*M+(-0.5+X)*U+1,f=(-1-D)*L+(1.5+D)*M+0.5*U,N=D*L-D*M;for(let z=0;z!==O;++z)Q[z]=w*A[Y+z]+J*A[F+z]+f*A[Z+z]+N*A[k+z];return Q}}class uO extends x6{constructor(H,E,K,W){super(H,E,K,W)}interpolate_(H,E,K,W){let Q=this.resultBuffer,A=this.sampleValues,O=this.valueSize,Z=H*O,F=Z-O,Y=(K-E)/(W-E),k=1-Y;for(let X=0;X!==O;++X)Q[X]=A[F+X]*k+A[Z+X]*Y;return Q}}class hO extends x6{constructor(H,E,K,W){super(H,E,K,W)}interpolate_(H){return this.copySampleValue_(H-1)}}class c9{constructor(H,E,K,W){if(H===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(E===void 0||E.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+H);this.name=H,this.times=W5(E,this.TimeBufferType),this.values=W5(K,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(H){let E=H.constructor,K;if(E.toJSON!==this.toJSON)K=E.toJSON(H);else{K={name:H.name,times:W5(H.times,Array),values:W5(H.values,Array)};let W=H.getInterpolation();if(W!==H.DefaultInterpolation)K.interpolation=W}return K.type=H.ValueTypeName,K}InterpolantFactoryMethodDiscrete(H){return new hO(this.times,this.values,this.getValueSize(),H)}InterpolantFactoryMethodLinear(H){return new uO(this.times,this.values,this.getValueSize(),H)}InterpolantFactoryMethodSmooth(H){return new yO(this.times,this.values,this.getValueSize(),H)}setInterpolation(H){let E;switch(H){case 2300:E=this.InterpolantFactoryMethodDiscrete;break;case 2301:E=this.InterpolantFactoryMethodLinear;break;case 2302:E=this.InterpolantFactoryMethodSmooth;break}if(E===void 0){let K="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(H!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(K);return console.warn("THREE.KeyframeTrack:",K),this}return this.createInterpolant=E,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(H){if(H!==0){let E=this.times;for(let K=0,W=E.length;K!==W;++K)E[K]+=H}return this}scale(H){if(H!==1){let E=this.times;for(let K=0,W=E.length;K!==W;++K)E[K]*=H}return this}trim(H,E){let K=this.times,W=K.length,Q=0,A=W-1;while(Q!==W&&K[Q]<H)++Q;while(A!==-1&&K[A]>E)--A;if(++A,Q!==0||A!==W){if(Q>=A)A=Math.max(A,1),Q=A-1;let O=this.getValueSize();this.times=K.slice(Q,A),this.values=this.values.slice(Q*O,A*O)}return this}validate(){let H=!0,E=this.getValueSize();if(E-Math.floor(E)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),H=!1;let K=this.times,W=this.values,Q=K.length;if(Q===0)console.error("THREE.KeyframeTrack: Track is empty.",this),H=!1;let A=null;for(let O=0;O!==Q;O++){let Z=K[O];if(typeof Z==="number"&&isNaN(Z)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,O,Z),H=!1;break}if(A!==null&&A>Z){console.error("THREE.KeyframeTrack: Out of order keys.",this,O,Z,A),H=!1;break}A=Z}if(W!==void 0){if(Uf(W))for(let O=0,Z=W.length;O!==Z;++O){let F=W[O];if(isNaN(F)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,O,F),H=!1;break}}}return H}optimize(){let H=this.times.slice(),E=this.values.slice(),K=this.getValueSize(),W=this.getInterpolation()===2302,Q=H.length-1,A=1;for(let O=1;O<Q;++O){let Z=!1,F=H[O],Y=H[O+1];if(F!==Y&&(O!==1||F!==H[0]))if(!W){let k=O*K,X=k-K,D=k+K;for(let U=0;U!==K;++U){let M=E[k+U];if(M!==E[X+U]||M!==E[D+U]){Z=!0;break}}}else Z=!0;if(Z){if(O!==A){H[A]=H[O];let k=O*K,X=A*K;for(let D=0;D!==K;++D)E[X+D]=E[k+D]}++A}}if(Q>0){H[A]=H[Q];for(let O=Q*K,Z=A*K,F=0;F!==K;++F)E[Z+F]=E[O+F];++A}if(A!==H.length)this.times=H.slice(0,A),this.values=E.slice(0,A*K);else this.times=H,this.values=E;return this}clone(){let H=this.times.slice(),E=this.values.slice(),W=new this.constructor(this.name,H,E);return W.createInterpolant=this.createInterpolant,W}}c9.prototype.TimeBufferType=Float32Array;c9.prototype.ValueBufferType=Float32Array;c9.prototype.DefaultInterpolation=2301;class TH extends c9{constructor(H,E,K){super(H,E,K)}}TH.prototype.ValueTypeName="bool";TH.prototype.ValueBufferType=Array;TH.prototype.DefaultInterpolation=2300;TH.prototype.InterpolantFactoryMethodLinear=void 0;TH.prototype.InterpolantFactoryMethodSmooth=void 0;class jO extends c9{}jO.prototype.ValueTypeName="color";class pO extends c9{}pO.prototype.ValueTypeName="number";class gO extends x6{constructor(H,E,K,W){super(H,E,K,W)}interpolate_(H,E,K,W){let Q=this.resultBuffer,A=this.sampleValues,O=this.valueSize,Z=(K-E)/(W-E),F=H*O;for(let Y=F+O;F!==Y;F+=4)HH.slerpFlat(Q,0,A,F-O,A,F,Z);return Q}}class v5 extends c9{InterpolantFactoryMethodLinear(H){return new gO(this.times,this.values,this.getValueSize(),H)}}v5.prototype.ValueTypeName="quaternion";v5.prototype.InterpolantFactoryMethodSmooth=void 0;class vH extends c9{constructor(H,E,K){super(H,E,K)}}vH.prototype.ValueTypeName="string";vH.prototype.ValueBufferType=Array;vH.prototype.DefaultInterpolation=2300;vH.prototype.InterpolantFactoryMethodLinear=void 0;vH.prototype.InterpolantFactoryMethodSmooth=void 0;class xO extends c9{}xO.prototype.ValueTypeName="vector";class nO{constructor(H,E,K){let W=this,Q=!1,A=0,O=0,Z=void 0,F=[];this.onStart=void 0,this.onLoad=H,this.onProgress=E,this.onError=K,this.itemStart=function(Y){if(O++,Q===!1){if(W.onStart!==void 0)W.onStart(Y,A,O)}Q=!0},this.itemEnd=function(Y){if(A++,W.onProgress!==void 0)W.onProgress(Y,A,O);if(A===O){if(Q=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(Y){if(W.onError!==void 0)W.onError(Y)},this.resolveURL=function(Y){if(Z)return Z(Y);return Y},this.setURLModifier=function(Y){return Z=Y,this},this.addHandler=function(Y,k){return F.push(Y,k),this},this.removeHandler=function(Y){let k=F.indexOf(Y);if(k!==-1)F.splice(k,2);return this},this.getHandler=function(Y){for(let k=0,X=F.length;k<X;k+=2){let D=F[k],U=F[k+1];if(D.global)D.lastIndex=0;if(D.test(Y))return U}return null}}}var lk=new nO;class bO{constructor(H){this.manager=H!==void 0?H:lk,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(H,E){let K=this;return new Promise(function(W,Q){K.load(H,W,E,Q)})}parse(){}setCrossOrigin(H){return this.crossOrigin=H,this}setWithCredentials(H){return this.withCredentials=H,this}setPath(H){return this.path=H,this}setResourcePath(H){return this.resourcePath=H,this}setRequestHeader(H){return this.requestHeader=H,this}}bO.DEFAULT_MATERIAL_NAME="__DEFAULT";class y5 extends T1{constructor(H,E=1){super();this.isLight=!0,this.type="Light",this.color=new x0(H),this.intensity=E}dispose(){}copy(H,E){return super.copy(H,E),this.color.copy(H.color),this.intensity=H.intensity,this}toJSON(H){let E=super.toJSON(H);if(E.object.color=this.color.getHex(),E.object.intensity=this.intensity,this.groundColor!==void 0)E.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)E.object.distance=this.distance;if(this.angle!==void 0)E.object.angle=this.angle;if(this.decay!==void 0)E.object.decay=this.decay;if(this.penumbra!==void 0)E.object.penumbra=this.penumbra;if(this.shadow!==void 0)E.object.shadow=this.shadow.toJSON();if(this.target!==void 0)E.object.target=this.target.uuid;return E}}var uA=new F1,wX=new h,NX=new h;class dO{constructor(H){this.camera=H,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new o0(512,512),this.map=null,this.mapPass=null,this.matrix=new F1,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new QK,this._frameExtents=new o0(1,1),this._viewportCount=1,this._viewports=[new E1(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(H){let E=this.camera,K=this.matrix;wX.setFromMatrixPosition(H.matrixWorld),E.position.copy(wX),NX.setFromMatrixPosition(H.target.matrixWorld),E.lookAt(NX),E.updateMatrixWorld(),uA.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uA),K.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),K.multiply(uA)}getViewport(H){return this._viewports[H]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(H){return this.camera=H.camera.clone(),this.intensity=H.intensity,this.bias=H.bias,this.radius=H.radius,this.mapSize.copy(H.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let H={};if(this.intensity!==1)H.intensity=this.intensity;if(this.bias!==0)H.bias=this.bias;if(this.normalBias!==0)H.normalBias=this.normalBias;if(this.radius!==1)H.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)H.mapSize=this.mapSize.toArray();return H.camera=this.camera.toJSON(!1).object,delete H.camera.matrix,H}}var UX=new F1,sE=new h,hA=new h;class Tk extends dO{constructor(){super(new s1(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new o0(4,2),this._viewportCount=6,this._viewports=[new E1(2,1,1,1),new E1(0,1,1,1),new E1(3,1,1,1),new E1(1,1,1,1),new E1(3,0,1,1),new E1(1,0,1,1)],this._cubeDirections=[new h(1,0,0),new h(-1,0,0),new h(0,0,1),new h(0,0,-1),new h(0,1,0),new h(0,-1,0)],this._cubeUps=[new h(0,1,0),new h(0,1,0),new h(0,1,0),new h(0,1,0),new h(0,0,1),new h(0,0,-1)]}updateMatrices(H,E=0){let K=this.camera,W=this.matrix,Q=H.distance||K.far;if(Q!==K.far)K.far=Q,K.updateProjectionMatrix();sE.setFromMatrixPosition(H.matrixWorld),K.position.copy(sE),hA.copy(K.position),hA.add(this._cubeDirections[E]),K.up.copy(this._cubeUps[E]),K.lookAt(hA),K.updateMatrixWorld(),W.makeTranslation(-sE.x,-sE.y,-sE.z),UX.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),this._frustum.setFromProjectionMatrix(UX)}}class JK extends y5{constructor(H,E,K=0,W=2){super(H,E);this.isPointLight=!0,this.type="PointLight",this.distance=K,this.decay=W,this.shadow=new Tk}get power(){return this.intensity*4*Math.PI}set power(H){this.intensity=H/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(H,E){return super.copy(H,E),this.distance=H.distance,this.decay=H.decay,this.shadow=H.shadow.clone(),this}}class u5 extends C5{constructor(H=-1,E=1,K=1,W=-1,Q=0.1,A=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=H,this.right=E,this.top=K,this.bottom=W,this.near=Q,this.far=A,this.updateProjectionMatrix()}copy(H,E){return super.copy(H,E),this.left=H.left,this.right=H.right,this.top=H.top,this.bottom=H.bottom,this.near=H.near,this.far=H.far,this.zoom=H.zoom,this.view=H.view===null?null:Object.assign({},H.view),this}setViewOffset(H,E,K,W,Q,A){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=H,this.view.fullHeight=E,this.view.offsetX=K,this.view.offsetY=W,this.view.width=Q,this.view.height=A,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let H=(this.right-this.left)/(2*this.zoom),E=(this.top-this.bottom)/(2*this.zoom),K=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Q=K-H,A=K+H,O=W+E,Z=W-E;if(this.view!==null&&this.view.enabled){let F=(this.right-this.left)/this.view.fullWidth/this.zoom,Y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=F*this.view.offsetX,A=Q+F*this.view.width,O-=Y*this.view.offsetY,Z=O-Y*this.view.height}this.projectionMatrix.makeOrthographic(Q,A,O,Z,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(H){let E=super.toJSON(H);if(E.object.zoom=this.zoom,E.object.left=this.left,E.object.right=this.right,E.object.top=this.top,E.object.bottom=this.bottom,E.object.near=this.near,E.object.far=this.far,this.view!==null)E.object.view=Object.assign({},this.view);return E}}class vk extends dO{constructor(){super(new u5(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class h5 extends y5{constructor(H,E){super(H,E);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(T1.DEFAULT_UP),this.updateMatrix(),this.target=new T1,this.shadow=new vk}dispose(){this.shadow.dispose()}copy(H){return super.copy(H),this.target=H.target.clone(),this.shadow=H.shadow.clone(),this}}class mO extends s1{constructor(H=[]){super();this.isArrayCamera=!0,this.cameras=H}}class j5{constructor(H=!0){this.autoStart=H,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fX(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let H=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let E=fX();H=(E-this.oldTime)/1000,this.oldTime=E,this.elapsedTime+=H}return H}}function fX(){return performance.now()}var cO="\\[\\]\\.:\\/",ff=new RegExp("["+cO+"]","g"),iO="[^"+cO+"]",Lf="[^"+cO.replace("\\.","")+"]",Mf=/((?:WC+[\/:])*)/.source.replace("WC",iO),Rf=/(WCOD+)?/.source.replace("WCOD",Lf),Vf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iO),Pf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iO),Gf=new RegExp("^"+Mf+Rf+Vf+Pf+"$"),zf=["material","materials","bones","map"];class yk{constructor(H,E,K){let W=K||H1.parseTrackName(E);this._targetGroup=H,this._bindings=H.subscribe_(E,W)}getValue(H,E){this.bind();let K=this._targetGroup.nCachedObjects_,W=this._bindings[K];if(W!==void 0)W.getValue(H,E)}setValue(H,E){let K=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Q=K.length;W!==Q;++W)K[W].setValue(H,E)}bind(){let H=this._bindings;for(let E=this._targetGroup.nCachedObjects_,K=H.length;E!==K;++E)H[E].bind()}unbind(){let H=this._bindings;for(let E=this._targetGroup.nCachedObjects_,K=H.length;E!==K;++E)H[E].unbind()}}class H1{constructor(H,E,K){this.path=E,this.parsedPath=K||H1.parseTrackName(E),this.node=H1.findNode(H,this.parsedPath.nodeName),this.rootNode=H,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(H,E,K){if(!(H&&H.isAnimationObjectGroup))return new H1(H,E,K);else return new H1.Composite(H,E,K)}static sanitizeNodeName(H){return H.replace(/\s/g,"_").replace(ff,"")}static parseTrackName(H){let E=Gf.exec(H);if(E===null)throw Error("PropertyBinding: Cannot parse trackName: "+H);let K={nodeName:E[2],objectName:E[3],objectIndex:E[4],propertyName:E[5],propertyIndex:E[6]},W=K.nodeName&&K.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Q=K.nodeName.substring(W+1);if(zf.indexOf(Q)!==-1)K.nodeName=K.nodeName.substring(0,W),K.objectName=Q}if(K.propertyName===null||K.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+H);return K}static findNode(H,E){if(E===void 0||E===""||E==="."||E===-1||E===H.name||E===H.uuid)return H;if(H.skeleton){let K=H.skeleton.getBoneByName(E);if(K!==void 0)return K}if(H.children){let K=function(Q){for(let A=0;A<Q.length;A++){let O=Q[A];if(O.name===E||O.uuid===E)return O;let Z=K(O.children);if(Z)return Z}return null},W=K(H.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(H,E){H[E]=this.targetObject[this.propertyName]}_getValue_array(H,E){let K=this.resolvedProperty;for(let W=0,Q=K.length;W!==Q;++W)H[E++]=K[W]}_getValue_arrayElement(H,E){H[E]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(H,E){this.resolvedProperty.toArray(H,E)}_setValue_direct(H,E){this.targetObject[this.propertyName]=H[E]}_setValue_direct_setNeedsUpdate(H,E){this.targetObject[this.propertyName]=H[E],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(H,E){this.targetObject[this.propertyName]=H[E],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(H,E){let K=this.resolvedProperty;for(let W=0,Q=K.length;W!==Q;++W)K[W]=H[E++]}_setValue_array_setNeedsUpdate(H,E){let K=this.resolvedProperty;for(let W=0,Q=K.length;W!==Q;++W)K[W]=H[E++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(H,E){let K=this.resolvedProperty;for(let W=0,Q=K.length;W!==Q;++W)K[W]=H[E++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(H,E){this.resolvedProperty[this.propertyIndex]=H[E]}_setValue_arrayElement_setNeedsUpdate(H,E){this.resolvedProperty[this.propertyIndex]=H[E],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(H,E){this.resolvedProperty[this.propertyIndex]=H[E],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(H,E){this.resolvedProperty.fromArray(H,E)}_setValue_fromArray_setNeedsUpdate(H,E){this.resolvedProperty.fromArray(H,E),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(H,E){this.resolvedProperty.fromArray(H,E),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(H,E){this.bind(),this.getValue(H,E)}_setValue_unbound(H,E){this.bind(),this.setValue(H,E)}bind(){let H=this.node,E=this.parsedPath,K=E.objectName,W=E.propertyName,Q=E.propertyIndex;if(!H)H=H1.findNode(this.rootNode,E.nodeName),this.node=H;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!H){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(K){let F=E.objectIndex;switch(K){case"materials":if(!H.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!H.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}H=H.material.materials;break;case"bones":if(!H.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}H=H.skeleton.bones;for(let Y=0;Y<H.length;Y++)if(H[Y].name===F){F=Y;break}break;case"map":if("map"in H){H=H.map;break}if(!H.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!H.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}H=H.material.map;break;default:if(H[K]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}H=H[K]}if(F!==void 0){if(H[F]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,H);return}H=H[F]}}let A=H[W];if(A===void 0){let F=E.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+F+"."+W+" but it wasn't found.",H);return}let O=this.Versioning.None;if(this.targetObject=H,H.needsUpdate!==void 0)O=this.Versioning.NeedsUpdate;else if(H.matrixWorldNeedsUpdate!==void 0)O=this.Versioning.MatrixWorldNeedsUpdate;let Z=this.BindingType.Direct;if(Q!==void 0){if(W==="morphTargetInfluences"){if(!H.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!H.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(H.morphTargetDictionary[Q]!==void 0)Q=H.morphTargetDictionary[Q]}Z=this.BindingType.ArrayElement,this.resolvedProperty=A,this.propertyIndex=Q}else if(A.fromArray!==void 0&&A.toArray!==void 0)Z=this.BindingType.HasFromToArray,this.resolvedProperty=A;else if(Array.isArray(A))Z=this.BindingType.EntireArray,this.resolvedProperty=A;else this.propertyName=W;this.getValue=this.GetterByBindingType[Z],this.setValue=this.SetterByBindingTypeAndVersioning[Z][O]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}H1.Composite=yk;H1.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};H1.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};H1.prototype.GetterByBindingType=[H1.prototype._getValue_direct,H1.prototype._getValue_array,H1.prototype._getValue_arrayElement,H1.prototype._getValue_toArray];H1.prototype.SetterByBindingTypeAndVersioning=[[H1.prototype._setValue_direct,H1.prototype._setValue_direct_setNeedsUpdate,H1.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[H1.prototype._setValue_array,H1.prototype._setValue_array_setNeedsUpdate,H1.prototype._setValue_array_setMatrixWorldNeedsUpdate],[H1.prototype._setValue_arrayElement,H1.prototype._setValue_arrayElement_setNeedsUpdate,H1.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[H1.prototype._setValue_fromArray,H1.prototype._setValue_fromArray_setNeedsUpdate,H1.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wP=new Float32Array(1);function sO(H,E,K,W){let Q=Bf(W);switch(K){case 1021:return H*E;case 1024:return H*E;case 1025:return H*E*2;case 1028:return H*E/Q.components*Q.byteLength;case 1029:return H*E/Q.components*Q.byteLength;case 1030:return H*E*2/Q.components*Q.byteLength;case 1031:return H*E*2/Q.components*Q.byteLength;case 1022:return H*E*3/Q.components*Q.byteLength;case 1023:return H*E*4/Q.components*Q.byteLength;case 1033:return H*E*4/Q.components*Q.byteLength;case 33776:case 33777:return Math.floor((H+3)/4)*Math.floor((E+3)/4)*8;case 33778:case 33779:return Math.floor((H+3)/4)*Math.floor((E+3)/4)*16;case 35841:case 35843:return Math.max(H,16)*Math.max(E,8)/4;case 35840:case 35842:return Math.max(H,8)*Math.max(E,8)/2;case 36196:case 37492:return Math.floor((H+3)/4)*Math.floor((E+3)/4)*8;case 37496:return Math.floor((H+3)/4)*Math.floor((E+3)/4)*16;case 37808:return Math.floor((H+3)/4)*Math.floor((E+3)/4)*16;case 37809:return Math.floor((H+4)/5)*Math.floor((E+3)/4)*16;case 37810:return Math.floor((H+4)/5)*Math.floor((E+4)/5)*16;case 37811:return Math.floor((H+5)/6)*Math.floor((E+4)/5)*16;case 37812:return Math.floor((H+5)/6)*Math.floor((E+5)/6)*16;case 37813:return Math.floor((H+7)/8)*Math.floor((E+4)/5)*16;case 37814:return Math.floor((H+7)/8)*Math.floor((E+5)/6)*16;case 37815:return Math.floor((H+7)/8)*Math.floor((E+7)/8)*16;case 37816:return Math.floor((H+9)/10)*Math.floor((E+4)/5)*16;case 37817:return Math.floor((H+9)/10)*Math.floor((E+5)/6)*16;case 37818:return Math.floor((H+9)/10)*Math.floor((E+7)/8)*16;case 37819:return Math.floor((H+9)/10)*Math.floor((E+9)/10)*16;case 37820:return Math.floor((H+11)/12)*Math.floor((E+9)/10)*16;case 37821:return Math.floor((H+11)/12)*Math.floor((E+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(H/4)*Math.ceil(E/4)*16;case 36283:case 36284:return Math.ceil(H/4)*Math.ceil(E/4)*8;case 36285:case 36286:return Math.ceil(H/4)*Math.ceil(E/4)*16}throw Error(`Unable to determine texture byte length for ${K} format.`)}function Bf(H){switch(H){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${H}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="171";function WD(){let H=null,E=!1,K=null,W=null;function Q(A,O){K(A,O),W=H.requestAnimationFrame(Q)}return{start:function(){if(E===!0)return;if(K===null)return;W=H.requestAnimationFrame(Q),E=!0},stop:function(){H.cancelAnimationFrame(W),E=!1},setAnimationLoop:function(A){K=A},setContext:function(A){H=A}}}function qf(H){let E=new WeakMap;function K(Z,F){let{array:Y,usage:k}=Z,X=Y.byteLength,D=H.createBuffer();H.bindBuffer(F,D),H.bufferData(F,Y,k),Z.onUploadCallback();let U;if(Y instanceof Float32Array)U=H.FLOAT;else if(Y instanceof Uint16Array)if(Z.isFloat16BufferAttribute)U=H.HALF_FLOAT;else U=H.UNSIGNED_SHORT;else if(Y instanceof Int16Array)U=H.SHORT;else if(Y instanceof Uint32Array)U=H.UNSIGNED_INT;else if(Y instanceof Int32Array)U=H.INT;else if(Y instanceof Int8Array)U=H.BYTE;else if(Y instanceof Uint8Array)U=H.UNSIGNED_BYTE;else if(Y instanceof Uint8ClampedArray)U=H.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+Y);return{buffer:D,type:U,bytesPerElement:Y.BYTES_PER_ELEMENT,version:Z.version,size:X}}function W(Z,F,Y){let{array:k,updateRanges:X}=F;if(H.bindBuffer(Y,Z),X.length===0)H.bufferSubData(Y,0,k);else{X.sort((U,M)=>U.start-M.start);let D=0;for(let U=1;U<X.length;U++){let M=X[D],L=X[U];if(L.start<=M.start+M.count+1)M.count=Math.max(M.count,L.start+L.count-M.start);else++D,X[D]=L}X.length=D+1;for(let U=0,M=X.length;U<M;U++){let L=X[U];H.bufferSubData(Y,L.start*k.BYTES_PER_ELEMENT,k,L.start,L.count)}F.clearUpdateRanges()}F.onUploadCallback()}function Q(Z){if(Z.isInterleavedBufferAttribute)Z=Z.data;return E.get(Z)}function A(Z){if(Z.isInterleavedBufferAttribute)Z=Z.data;let F=E.get(Z);if(F)H.deleteBuffer(F.buffer),E.delete(Z)}function O(Z,F){if(Z.isInterleavedBufferAttribute)Z=Z.data;if(Z.isGLBufferAttribute){let k=E.get(Z);if(!k||k.version<Z.version)E.set(Z,{buffer:Z.buffer,type:Z.type,bytesPerElement:Z.elementSize,version:Z.version});return}let Y=E.get(Z);if(Y===void 0)E.set(Z,K(Z,F));else if(Y.version<Z.version){if(Y.size!==Z.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(Y.buffer,Z,F),Y.version=Z.version}}return{get:Q,remove:A,update:O}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
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
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,bf=`#ifdef USE_BUMPMAP
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ef=`#define PI 3.141592653589793
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
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
#endif`,HL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QL="gl_FragColor = linearToOutputTexel( gl_FragColor );",AL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OL=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ZL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FL=`#ifdef USE_ENVMAP
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
#endif`,YL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JL=`#ifdef USE_ENVMAP
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
#endif`,XL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NL=`#ifdef USE_GRADIENTMAP
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
}`,UL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ML=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,RL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,VL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BL=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,qL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,CL=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,SL=`#if defined( RE_IndirectDiffuse )
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
#endif`,IL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lL=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TL=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vL=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yL=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pL=`#if defined( USE_POINTS_UV )
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
#endif`,gL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aL=`#ifdef USE_NORMALMAP
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
#endif`,eL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$L=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_L=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,WM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wM=`#ifdef USE_SKINNING
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
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UM=`#ifdef USE_SKINNING
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
#endif`,fM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RM=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VM=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,CM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SM=`uniform sampler2D t2D;
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
}`,lM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,uM=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hM=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,jM=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,dM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,mM=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,cM=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,iM=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,sM=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,oM=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,rM=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tM=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,aM=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,eM=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,$M=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_M=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,HR=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ER=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,KR=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,WR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,QR=`uniform vec3 color;
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
}`,AR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,OR=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,p0={alphahash_fragment:Cf,alphahash_pars_fragment:Sf,alphamap_fragment:If,alphamap_pars_fragment:lf,alphatest_fragment:Tf,alphatest_pars_fragment:vf,aomap_fragment:yf,aomap_pars_fragment:uf,batching_pars_vertex:hf,batching_vertex:jf,begin_vertex:pf,beginnormal_vertex:gf,bsdfs:xf,iridescence_fragment:nf,bumpmap_pars_fragment:bf,clipping_planes_fragment:df,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:sf,color_fragment:of,color_pars_fragment:rf,color_pars_vertex:tf,color_vertex:af,common:ef,cube_uv_reflection_fragment:$f,defaultnormal_vertex:_f,displacementmap_pars_vertex:HL,displacementmap_vertex:EL,emissivemap_fragment:KL,emissivemap_pars_fragment:WL,colorspace_fragment:QL,colorspace_pars_fragment:AL,envmap_fragment:OL,envmap_common_pars_fragment:ZL,envmap_pars_fragment:FL,envmap_pars_vertex:YL,envmap_physical_pars_fragment:RL,envmap_vertex:JL,fog_vertex:XL,fog_pars_vertex:kL,fog_fragment:DL,fog_pars_fragment:wL,gradientmap_pars_fragment:NL,lightmap_pars_fragment:UL,lights_lambert_fragment:fL,lights_lambert_pars_fragment:LL,lights_pars_begin:ML,lights_toon_fragment:VL,lights_toon_pars_fragment:PL,lights_phong_fragment:GL,lights_phong_pars_fragment:zL,lights_physical_fragment:BL,lights_physical_pars_fragment:qL,lights_fragment_begin:CL,lights_fragment_maps:SL,lights_fragment_end:IL,logdepthbuf_fragment:lL,logdepthbuf_pars_fragment:TL,logdepthbuf_pars_vertex:vL,logdepthbuf_vertex:yL,map_fragment:uL,map_pars_fragment:hL,map_particle_fragment:jL,map_particle_pars_fragment:pL,metalnessmap_fragment:gL,metalnessmap_pars_fragment:xL,morphinstance_vertex:nL,morphcolor_vertex:bL,morphnormal_vertex:dL,morphtarget_pars_vertex:mL,morphtarget_vertex:cL,normal_fragment_begin:iL,normal_fragment_maps:sL,normal_pars_fragment:oL,normal_pars_vertex:rL,normal_vertex:tL,normalmap_pars_fragment:aL,clearcoat_normal_fragment_begin:eL,clearcoat_normal_fragment_maps:$L,clearcoat_pars_fragment:_L,iridescence_pars_fragment:HM,opaque_fragment:EM,packing:KM,premultiplied_alpha_fragment:WM,project_vertex:QM,dithering_fragment:AM,dithering_pars_fragment:OM,roughnessmap_fragment:ZM,roughnessmap_pars_fragment:FM,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:JM,shadowmap_vertex:XM,shadowmask_pars_fragment:kM,skinbase_vertex:DM,skinning_pars_vertex:wM,skinning_vertex:NM,skinnormal_vertex:UM,specularmap_fragment:fM,specularmap_pars_fragment:LM,tonemapping_fragment:MM,tonemapping_pars_fragment:RM,transmission_fragment:VM,transmission_pars_fragment:PM,uv_pars_fragment:GM,uv_pars_vertex:zM,uv_vertex:BM,worldpos_vertex:qM,background_vert:CM,background_frag:SM,backgroundCube_vert:IM,backgroundCube_frag:lM,cube_vert:TM,cube_frag:vM,depth_vert:yM,depth_frag:uM,distanceRGBA_vert:hM,distanceRGBA_frag:jM,equirect_vert:pM,equirect_frag:gM,linedashed_vert:xM,linedashed_frag:nM,meshbasic_vert:bM,meshbasic_frag:dM,meshlambert_vert:mM,meshlambert_frag:cM,meshmatcap_vert:iM,meshmatcap_frag:sM,meshnormal_vert:oM,meshnormal_frag:rM,meshphong_vert:tM,meshphong_frag:aM,meshphysical_vert:eM,meshphysical_frag:$M,meshtoon_vert:_M,meshtoon_frag:HR,points_vert:ER,points_frag:KR,shadow_vert:WR,shadow_frag:QR,sprite_vert:AR,sprite_frag:OR},O0={common:{diffuse:{value:new x0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new o0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new x0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new x0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new x0(16777215)},opacity:{value:1},center:{value:new o0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},K8={basic:{uniforms:o1([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.fog]),vertexShader:p0.meshbasic_vert,fragmentShader:p0.meshbasic_frag},lambert:{uniforms:o1([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,O0.lights,{emissive:{value:new x0(0)}}]),vertexShader:p0.meshlambert_vert,fragmentShader:p0.meshlambert_frag},phong:{uniforms:o1([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,O0.lights,{emissive:{value:new x0(0)},specular:{value:new x0(1118481)},shininess:{value:30}}]),vertexShader:p0.meshphong_vert,fragmentShader:p0.meshphong_frag},standard:{uniforms:o1([O0.common,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.roughnessmap,O0.metalnessmap,O0.fog,O0.lights,{emissive:{value:new x0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag},toon:{uniforms:o1([O0.common,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.gradientmap,O0.fog,O0.lights,{emissive:{value:new x0(0)}}]),vertexShader:p0.meshtoon_vert,fragmentShader:p0.meshtoon_frag},matcap:{uniforms:o1([O0.common,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,{matcap:{value:null}}]),vertexShader:p0.meshmatcap_vert,fragmentShader:p0.meshmatcap_frag},points:{uniforms:o1([O0.points,O0.fog]),vertexShader:p0.points_vert,fragmentShader:p0.points_frag},dashed:{uniforms:o1([O0.common,O0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:p0.linedashed_vert,fragmentShader:p0.linedashed_frag},depth:{uniforms:o1([O0.common,O0.displacementmap]),vertexShader:p0.depth_vert,fragmentShader:p0.depth_frag},normal:{uniforms:o1([O0.common,O0.bumpmap,O0.normalmap,O0.displacementmap,{opacity:{value:1}}]),vertexShader:p0.meshnormal_vert,fragmentShader:p0.meshnormal_frag},sprite:{uniforms:o1([O0.sprite,O0.fog]),vertexShader:p0.sprite_vert,fragmentShader:p0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:p0.background_vert,fragmentShader:p0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:p0.backgroundCube_vert,fragmentShader:p0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:p0.cube_vert,fragmentShader:p0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:p0.equirect_vert,fragmentShader:p0.equirect_frag},distanceRGBA:{uniforms:o1([O0.common,O0.displacementmap,{referencePosition:{value:new h},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:p0.distanceRGBA_vert,fragmentShader:p0.distanceRGBA_frag},shadow:{uniforms:o1([O0.lights,O0.fog,{color:{value:new x0(0)},opacity:{value:1}}]),vertexShader:p0.shadow_vert,fragmentShader:p0.shadow_frag}};K8.physical={uniforms:o1([K8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new o0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new x0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new o0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new x0(0)},specularColor:{value:new x0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new o0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag};var p5={r:0,b:0,g:0},yH=new m9,ZR=new F1;function FR(H,E,K,W,Q,A,O){let Z=new x0(0),F=A===!0?0:1,Y,k,X=null,D=0,U=null;function M(N){let z=N.isScene===!0?N.background:null;if(z&&z.isTexture)z=(N.backgroundBlurriness>0?K:E).get(z);return z}function L(N){let z=!1,S=M(N);if(S===null)J(Z,F);else if(S&&S.isColor)J(S,1),z=!0;let B=H.xr.getEnvironmentBlendMode();if(B==="additive")W.buffers.color.setClear(0,0,0,1,O);else if(B==="alpha-blend")W.buffers.color.setClear(0,0,0,0,O);if(H.autoClear||z)W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),H.clear(H.autoClearColor,H.autoClearDepth,H.autoClearStencil)}function w(N,z){let S=M(z);if(S&&(S.isCubeTexture||S.mapping===aE)){if(k===void 0)k=new E9(new p6(1,1,1),new E8({name:"BackgroundCubeMaterial",uniforms:lH(K8.backgroundCube.uniforms),vertexShader:K8.backgroundCube.vertexShader,fragmentShader:K8.backgroundCube.fragmentShader,side:f9,depthTest:!1,depthWrite:!1,fog:!1})),k.geometry.deleteAttribute("normal"),k.geometry.deleteAttribute("uv"),k.onBeforeRender=function(B,q,u){this.matrixWorld.copyPosition(u.matrixWorld)},Object.defineProperty(k.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Q.update(k);if(yH.copy(z.backgroundRotation),yH.x*=-1,yH.y*=-1,yH.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1)yH.y*=-1,yH.z*=-1;if(k.material.uniforms.envMap.value=S,k.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,k.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,k.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,k.material.uniforms.backgroundRotation.value.setFromMatrix4(ZR.makeRotationFromEuler(yH)),k.material.toneMapped=s0.getTransfer(S.colorSpace)!==A1,X!==S||D!==S.version||U!==H.toneMapping)k.material.needsUpdate=!0,X=S,D=S.version,U=H.toneMapping;k.layers.enableAll(),N.unshift(k,k.geometry,k.material,0,0,null)}else if(S&&S.isTexture){if(Y===void 0)Y=new E9(new OK(2,2),new E8({name:"BackgroundMaterial",uniforms:lH(K8.background.uniforms),vertexShader:K8.background.vertexShader,fragmentShader:K8.background.fragmentShader,side:S6,depthTest:!1,depthWrite:!1,fog:!1})),Y.geometry.deleteAttribute("normal"),Object.defineProperty(Y.material,"map",{get:function(){return this.uniforms.t2D.value}}),Q.update(Y);if(Y.material.uniforms.t2D.value=S,Y.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,Y.material.toneMapped=s0.getTransfer(S.colorSpace)!==A1,S.matrixAutoUpdate===!0)S.updateMatrix();if(Y.material.uniforms.uvTransform.value.copy(S.matrix),X!==S||D!==S.version||U!==H.toneMapping)Y.material.needsUpdate=!0,X=S,D=S.version,U=H.toneMapping;Y.layers.enableAll(),N.unshift(Y,Y.geometry,Y.material,0,0,null)}}function J(N,z){N.getRGB(p5,CO(H)),W.buffers.color.setClear(p5.r,p5.g,p5.b,z,O)}function f(){if(k!==void 0)k.geometry.dispose(),k.material.dispose();if(Y!==void 0)Y.geometry.dispose(),Y.material.dispose()}return{getClearColor:function(){return Z},setClearColor:function(N,z=1){Z.set(N),F=z,J(Z,F)},getClearAlpha:function(){return F},setClearAlpha:function(N){F=N,J(Z,F)},render:L,addToRenderList:w,dispose:f}}function YR(H,E){let K=H.getParameter(H.MAX_VERTEX_ATTRIBS),W={},Q=D(null),A=Q,O=!1;function Z(P,l,n,s,m){let e=!1,d=X(s,n,l);if(A!==d)A=d,Y(A.object);if(e=U(P,s,n,m),e)M(P,s,n,m);if(m!==null)E.update(m,H.ELEMENT_ARRAY_BUFFER);if(e||O){if(O=!1,z(P,l,n,s),m!==null)H.bindBuffer(H.ELEMENT_ARRAY_BUFFER,E.get(m).buffer)}}function F(){return H.createVertexArray()}function Y(P){return H.bindVertexArray(P)}function k(P){return H.deleteVertexArray(P)}function X(P,l,n){let s=n.wireframe===!0,m=W[P.id];if(m===void 0)m={},W[P.id]=m;let e=m[l.id];if(e===void 0)e={},m[l.id]=e;let d=e[s];if(d===void 0)d=D(F()),e[s]=d;return d}function D(P){let l=[],n=[],s=[];for(let m=0;m<K;m++)l[m]=0,n[m]=0,s[m]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:l,enabledAttributes:n,attributeDivisors:s,object:P,attributes:{},index:null}}function U(P,l,n,s){let m=A.attributes,e=l.attributes,d=0,_=n.getAttributes();for(let b in _)if(_[b].location>=0){let A0=m[b],q0=e[b];if(q0===void 0){if(b==="instanceMatrix"&&P.instanceMatrix)q0=P.instanceMatrix;if(b==="instanceColor"&&P.instanceColor)q0=P.instanceColor}if(A0===void 0)return!0;if(A0.attribute!==q0)return!0;if(q0&&A0.data!==q0.data)return!0;d++}if(A.attributesNum!==d)return!0;if(A.index!==s)return!0;return!1}function M(P,l,n,s){let m={},e=l.attributes,d=0,_=n.getAttributes();for(let b in _)if(_[b].location>=0){let A0=e[b];if(A0===void 0){if(b==="instanceMatrix"&&P.instanceMatrix)A0=P.instanceMatrix;if(b==="instanceColor"&&P.instanceColor)A0=P.instanceColor}let q0={};if(q0.attribute=A0,A0&&A0.data)q0.data=A0.data;m[b]=q0,d++}A.attributes=m,A.attributesNum=d,A.index=s}function L(){let P=A.newAttributes;for(let l=0,n=P.length;l<n;l++)P[l]=0}function w(P){J(P,0)}function J(P,l){let{newAttributes:n,enabledAttributes:s,attributeDivisors:m}=A;if(n[P]=1,s[P]===0)H.enableVertexAttribArray(P),s[P]=1;if(m[P]!==l)H.vertexAttribDivisor(P,l),m[P]=l}function f(){let{newAttributes:P,enabledAttributes:l}=A;for(let n=0,s=l.length;n<s;n++)if(l[n]!==P[n])H.disableVertexAttribArray(n),l[n]=0}function N(P,l,n,s,m,e,d){if(d===!0)H.vertexAttribIPointer(P,l,n,m,e);else H.vertexAttribPointer(P,l,n,s,m,e)}function z(P,l,n,s){L();let m=s.attributes,e=n.getAttributes(),d=l.defaultAttributeValues;for(let _ in e){let b=e[_];if(b.location>=0){let E0=m[_];if(E0===void 0){if(_==="instanceMatrix"&&P.instanceMatrix)E0=P.instanceMatrix;if(_==="instanceColor"&&P.instanceColor)E0=P.instanceColor}if(E0!==void 0){let{normalized:A0,itemSize:q0}=E0,C0=E.get(E0);if(C0===void 0)continue;let{buffer:c,type:K0,bytesPerElement:R0}=C0,P0=K0===H.INT||K0===H.UNSIGNED_INT||E0.gpuType===dA;if(E0.isInterleavedBufferAttribute){let Z0=E0.data,S0=Z0.stride,t0=E0.offset;if(Z0.isInstancedInterleavedBuffer){for(let d0=0;d0<b.locationSize;d0++)J(b.location+d0,Z0.meshPerAttribute);if(P.isInstancedMesh!==!0&&s._maxInstanceCount===void 0)s._maxInstanceCount=Z0.meshPerAttribute*Z0.count}else for(let d0=0;d0<b.locationSize;d0++)w(b.location+d0);H.bindBuffer(H.ARRAY_BUFFER,c);for(let d0=0;d0<b.locationSize;d0++)N(b.location+d0,q0/b.locationSize,K0,A0,S0*R0,(t0+q0/b.locationSize*d0)*R0,P0)}else{if(E0.isInstancedBufferAttribute){for(let Z0=0;Z0<b.locationSize;Z0++)J(b.location+Z0,E0.meshPerAttribute);if(P.isInstancedMesh!==!0&&s._maxInstanceCount===void 0)s._maxInstanceCount=E0.meshPerAttribute*E0.count}else for(let Z0=0;Z0<b.locationSize;Z0++)w(b.location+Z0);H.bindBuffer(H.ARRAY_BUFFER,c);for(let Z0=0;Z0<b.locationSize;Z0++)N(b.location+Z0,q0/b.locationSize,K0,A0,q0*R0,q0/b.locationSize*Z0*R0,P0)}}else if(d!==void 0){let A0=d[_];if(A0!==void 0)switch(A0.length){case 2:H.vertexAttrib2fv(b.location,A0);break;case 3:H.vertexAttrib3fv(b.location,A0);break;case 4:H.vertexAttrib4fv(b.location,A0);break;default:H.vertexAttrib1fv(b.location,A0)}}}}f()}function S(){u();for(let P in W){let l=W[P];for(let n in l){let s=l[n];for(let m in s)k(s[m].object),delete s[m];delete l[n]}delete W[P]}}function B(P){if(W[P.id]===void 0)return;let l=W[P.id];for(let n in l){let s=l[n];for(let m in s)k(s[m].object),delete s[m];delete l[n]}delete W[P.id]}function q(P){for(let l in W){let n=W[l];if(n[P.id]===void 0)continue;let s=n[P.id];for(let m in s)k(s[m].object),delete s[m];delete n[P.id]}}function u(){if(G(),O=!0,A===Q)return;A=Q,Y(A.object)}function G(){Q.geometry=null,Q.program=null,Q.wireframe=!1}return{setup:Z,reset:u,resetDefaultState:G,dispose:S,releaseStatesOfGeometry:B,releaseStatesOfProgram:q,initAttributes:L,enableAttribute:w,disableUnusedAttributes:f}}function JR(H,E,K){let W;function Q(Y){W=Y}function A(Y,k){H.drawArrays(W,Y,k),K.update(k,W,1)}function O(Y,k,X){if(X===0)return;H.drawArraysInstanced(W,Y,k,X),K.update(k,W,X)}function Z(Y,k,X){if(X===0)return;E.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,Y,0,k,0,X);let U=0;for(let M=0;M<X;M++)U+=k[M];K.update(U,W,1)}function F(Y,k,X,D){if(X===0)return;let U=E.get("WEBGL_multi_draw");if(U===null)for(let M=0;M<Y.length;M++)O(Y[M],k[M],D[M]);else{U.multiDrawArraysInstancedWEBGL(W,Y,0,k,0,D,0,X);let M=0;for(let L=0;L<X;L++)M+=k[L]*D[L];K.update(M,W,1)}}this.setMode=Q,this.render=A,this.renderInstances=O,this.renderMultiDraw=Z,this.renderMultiDrawInstances=F}function XR(H,E,K,W){let Q;function A(){if(Q!==void 0)return Q;if(E.has("EXT_texture_filter_anisotropic")===!0){let q=E.get("EXT_texture_filter_anisotropic");Q=H.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Q=0;return Q}function O(q){if(q!==H8&&W.convert(q)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Z(q){let u=q===_E&&(E.has("EXT_color_buffer_half_float")||E.has("EXT_color_buffer_float"));if(q!==e8&&W.convert(q)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&q!==$8&&!u)return!1;return!0}function F(q){if(q==="highp"){if(H.getShaderPrecisionFormat(H.VERTEX_SHADER,H.HIGH_FLOAT).precision>0&&H.getShaderPrecisionFormat(H.FRAGMENT_SHADER,H.HIGH_FLOAT).precision>0)return"highp";q="mediump"}if(q==="mediump"){if(H.getShaderPrecisionFormat(H.VERTEX_SHADER,H.MEDIUM_FLOAT).precision>0&&H.getShaderPrecisionFormat(H.FRAGMENT_SHADER,H.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let Y=K.precision!==void 0?K.precision:"highp",k=F(Y);if(k!==Y)console.warn("THREE.WebGLRenderer:",Y,"not supported, using",k,"instead."),Y=k;let X=K.logarithmicDepthBuffer===!0,D=K.reverseDepthBuffer===!0&&E.has("EXT_clip_control"),U=H.getParameter(H.MAX_TEXTURE_IMAGE_UNITS),M=H.getParameter(H.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=H.getParameter(H.MAX_TEXTURE_SIZE),w=H.getParameter(H.MAX_CUBE_MAP_TEXTURE_SIZE),J=H.getParameter(H.MAX_VERTEX_ATTRIBS),f=H.getParameter(H.MAX_VERTEX_UNIFORM_VECTORS),N=H.getParameter(H.MAX_VARYING_VECTORS),z=H.getParameter(H.MAX_FRAGMENT_UNIFORM_VECTORS),S=M>0,B=H.getParameter(H.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:A,getMaxPrecision:F,textureFormatReadable:O,textureTypeReadable:Z,precision:Y,logarithmicDepthBuffer:X,reverseDepthBuffer:D,maxTextures:U,maxVertexTextures:M,maxTextureSize:L,maxCubemapSize:w,maxAttributes:J,maxVertexUniforms:f,maxVaryings:N,maxFragmentUniforms:z,vertexTextures:S,maxSamples:B}}function kR(H){let E=this,K=null,W=0,Q=!1,A=!1,O=new M8,Z=new y0,F={value:null,needsUpdate:!1};this.uniform=F,this.numPlanes=0,this.numIntersection=0,this.init=function(X,D){let U=X.length!==0||D||W!==0||Q;return Q=D,W=X.length,U},this.beginShadows=function(){A=!0,k(null)},this.endShadows=function(){A=!1},this.setGlobalState=function(X,D){K=k(X,D,0)},this.setState=function(X,D,U){let{clippingPlanes:M,clipIntersection:L,clipShadows:w}=X,J=H.get(X);if(!Q||M===null||M.length===0||A&&!w)if(A)k(null);else Y();else{let f=A?0:W,N=f*4,z=J.clippingState||null;F.value=z,z=k(M,D,N,U);for(let S=0;S!==N;++S)z[S]=K[S];J.clippingState=z,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=f}};function Y(){if(F.value!==K)F.value=K,F.needsUpdate=W>0;E.numPlanes=W,E.numIntersection=0}function k(X,D,U,M){let L=X!==null?X.length:0,w=null;if(L!==0){if(w=F.value,M!==!0||w===null){let J=U+L*4,f=D.matrixWorldInverse;if(Z.getNormalMatrix(f),w===null||w.length<J)w=new Float32Array(J);for(let N=0,z=U;N!==L;++N,z+=4)O.copy(X[N]).applyMatrix4(f,Z),O.normal.toArray(w,z),w[z+3]=O.constant}F.value=w,F.needsUpdate=!0}return E.numPlanes=L,E.numIntersection=0,w}}function DR(H){let E=new WeakMap;function K(O,Z){if(Z===k5)O.mapping=l6;else if(Z===D5)O.mapping=BH;return O}function W(O){if(O&&O.isTexture){let Z=O.mapping;if(Z===k5||Z===D5)if(E.has(O)){let F=E.get(O).texture;return K(F,O.mapping)}else{let F=O.image;if(F&&F.height>0){let Y=new IO(F.height);return Y.fromEquirectangularTexture(H,O),E.set(O,Y),O.addEventListener("dispose",Q),K(Y.texture,O.mapping)}else return null}}return O}function Q(O){let Z=O.target;Z.removeEventListener("dispose",Q);let F=E.get(Z);if(F!==void 0)E.delete(Z),F.dispose()}function A(){E=new WeakMap}return{get:W,dispose:A}}var b6=4,uk=[0.125,0.215,0.35,0.446,0.526,0.582],jH=20,oO=new u5,hk=new x0,rO=null,tO=0,aO=0,eO=!1,hH=(1+Math.sqrt(5))/2,n6=1/hH,jk=[new h(-hH,n6,0),new h(hH,n6,0),new h(-n6,0,hH),new h(n6,0,hH),new h(0,hH,-n6),new h(0,hH,n6),new h(-1,1,-1),new h(1,1,-1),new h(-1,1,1),new h(1,1,1)];class _O{constructor(H){this._renderer=H,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(H,E=0,K=0.1,W=100){rO=this._renderer.getRenderTarget(),tO=this._renderer.getActiveCubeFace(),aO=this._renderer.getActiveMipmapLevel(),eO=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let Q=this._allocateTargets();if(Q.depthBuffer=!0,this._sceneToCubeUV(H,K,W,Q),E>0)this._blur(Q,0,0,E);return this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(H,E=null){return this._fromTexture(H,E)}fromCubemap(H,E=null){return this._fromTexture(H,E)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=xk(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=gk(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(H){this._lodMax=Math.floor(Math.log2(H)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let H=0;H<this._lodPlanes.length;H++)this._lodPlanes[H].dispose()}_cleanup(H){this._renderer.setRenderTarget(rO,tO,aO),this._renderer.xr.enabled=eO,H.scissorTest=!1,g5(H,0,0,H.width,H.height)}_fromTexture(H,E){if(H.mapping===l6||H.mapping===BH)this._setSize(H.image.length===0?16:H.image[0].width||H.image[0].image.width);else this._setSize(H.image.width/4);rO=this._renderer.getRenderTarget(),tO=this._renderer.getActiveCubeFace(),aO=this._renderer.getActiveMipmapLevel(),eO=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let K=E||this._allocateTargets();return this._textureToCubeUV(H,K),this._applyPMREM(K),this._cleanup(K),K}_allocateTargets(){let H=3*Math.max(this._cubeSize,112),E=4*this._cubeSize,K={magFilter:qH,minFilter:qH,generateMipmaps:!1,type:_E,format:H8,colorSpace:EK,depthBuffer:!1},W=pk(H,E,K);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==H||this._pingPongRenderTarget.height!==E){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=pk(H,E,K);let{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wR(Q)),this._blurMaterial=NR(Q,H,E)}return W}_compileMaterial(H){let E=new E9(this._lodPlanes[0],H);this._renderer.compile(E,oO)}_sceneToCubeUV(H,E,K,W){let O=new s1(90,1,E,K),Z=[1,-1,1,1,1,1],F=[1,1,1,-1,-1,-1],Y=this._renderer,k=Y.autoClear,X=Y.toneMapping;Y.getClearColor(hk),Y.toneMapping=V8,Y.autoClear=!1;let D=new j6({name:"PMREM.Background",side:f9,depthWrite:!1,depthTest:!1}),U=new E9(new p6,D),M=!1,L=H.background;if(L){if(L.isColor)D.color.copy(L),H.background=null,M=!0}else D.color.copy(hk),M=!0;for(let w=0;w<6;w++){let J=w%3;if(J===0)O.up.set(0,Z[w],0),O.lookAt(F[w],0,0);else if(J===1)O.up.set(0,0,Z[w]),O.lookAt(0,F[w],0);else O.up.set(0,Z[w],0),O.lookAt(0,0,F[w]);let f=this._cubeSize;if(g5(W,J*f,w>2?f:0,f,f),Y.setRenderTarget(W),M)Y.render(U,O);Y.render(H,O)}U.geometry.dispose(),U.material.dispose(),Y.toneMapping=X,Y.autoClear=k,H.background=L}_textureToCubeUV(H,E){let K=this._renderer,W=H.mapping===l6||H.mapping===BH;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=xk();this._cubemapMaterial.uniforms.flipEnvMap.value=H.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=gk();let Q=W?this._cubemapMaterial:this._equirectMaterial,A=new E9(this._lodPlanes[0],Q),O=Q.uniforms;O.envMap.value=H;let Z=this._cubeSize;g5(E,0,0,3*Z,2*Z),K.setRenderTarget(E),K.render(A,oO)}_applyPMREM(H){let E=this._renderer,K=E.autoClear;E.autoClear=!1;let W=this._lodPlanes.length;for(let Q=1;Q<W;Q++){let A=Math.sqrt(this._sigmas[Q]*this._sigmas[Q]-this._sigmas[Q-1]*this._sigmas[Q-1]),O=jk[(W-Q-1)%jk.length];this._blur(H,Q-1,Q,A,O)}E.autoClear=K}_blur(H,E,K,W,Q){let A=this._pingPongRenderTarget;this._halfBlur(H,A,E,K,W,"latitudinal",Q),this._halfBlur(A,H,K,K,W,"longitudinal",Q)}_halfBlur(H,E,K,W,Q,A,O){let Z=this._renderer,F=this._blurMaterial;if(A!=="latitudinal"&&A!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let Y=3,k=new E9(this._lodPlanes[W],F),X=F.uniforms,D=this._sizeLods[K]-1,U=isFinite(Q)?Math.PI/(2*D):2*Math.PI/(2*jH-1),M=Q/U,L=isFinite(Q)?1+Math.floor(Y*M):jH;if(L>jH)console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${L} samples when the maximum is set to ${jH}`);let w=[],J=0;for(let B=0;B<jH;++B){let q=B/M,u=Math.exp(-q*q/2);if(w.push(u),B===0)J+=u;else if(B<L)J+=2*u}for(let B=0;B<w.length;B++)w[B]=w[B]/J;if(X.envMap.value=H.texture,X.samples.value=L,X.weights.value=w,X.latitudinal.value=A==="latitudinal",O)X.poleAxis.value=O;let{_lodMax:f}=this;X.dTheta.value=U,X.mipInt.value=f-K;let N=this._sizeLods[W],z=3*N*(W>f-b6?W-f+b6:0),S=4*(this._cubeSize-N);g5(E,z,S,3*N,2*N),Z.setRenderTarget(E),Z.render(k,oO)}}function wR(H){let E=[],K=[],W=[],Q=H,A=H-b6+1+uk.length;for(let O=0;O<A;O++){let Z=Math.pow(2,Q);K.push(Z);let F=1/Z;if(O>H-b6)F=uk[O-H+b6-1];else if(O===0)F=0;W.push(F);let Y=1/(Z-2),k=-Y,X=1+Y,D=[k,k,X,k,X,X,k,k,X,X,k,X],U=6,M=6,L=3,w=2,J=1,f=new Float32Array(L*M*U),N=new Float32Array(w*M*U),z=new Float32Array(J*M*U);for(let B=0;B<U;B++){let q=B%3*2/3-1,u=B>2?0:-1,G=[q,u,0,q+0.6666666666666666,u,0,q+0.6666666666666666,u+1,0,q,u,0,q+0.6666666666666666,u+1,0,q,u+1,0];f.set(G,L*M*B),N.set(D,w*M*B);let P=[B,B,B,B,B,B];z.set(P,J*M*B)}let S=new L9;if(S.setAttribute("position",new Y9(f,L)),S.setAttribute("uv",new Y9(N,w)),S.setAttribute("faceIndex",new Y9(z,J)),E.push(S),Q>b6)Q--}return{lodPlanes:E,sizeLods:K,sigmas:W}}function pk(H,E,K){let W=new P8(H,E,K);return W.texture.mapping=aE,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function g5(H,E,K,W,Q){H.viewport.set(E,K,W,Q),H.scissor.set(E,K,W,Q)}function NR(H,E,K){let W=new Float32Array(jH),Q=new h(0,1,0);return new E8({name:"SphericalGaussianBlur",defines:{n:jH,CUBEUV_TEXEL_WIDTH:1/E,CUBEUV_TEXEL_HEIGHT:1/K,CUBEUV_MAX_MIP:`${H}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:W},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:Q}},vertexShader:EZ(),fragmentShader:`

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
		`,blending:a8,depthTest:!1,depthWrite:!1})}function gk(){return new E8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:EZ(),fragmentShader:`

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
		`,blending:a8,depthTest:!1,depthWrite:!1})}function xk(){return new E8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:EZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:a8,depthTest:!1,depthWrite:!1})}function EZ(){return`

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
	`}function UR(H){let E=new WeakMap,K=null;function W(Z){if(Z&&Z.isTexture){let F=Z.mapping,Y=F===k5||F===D5,k=F===l6||F===BH;if(Y||k){let X=E.get(Z),D=X!==void 0?X.texture.pmremVersion:0;if(Z.isRenderTargetTexture&&Z.pmremVersion!==D){if(K===null)K=new _O(H);return X=Y?K.fromEquirectangular(Z,X):K.fromCubemap(Z,X),X.texture.pmremVersion=Z.pmremVersion,E.set(Z,X),X.texture}else if(X!==void 0)return X.texture;else{let U=Z.image;if(Y&&U&&U.height>0||k&&U&&Q(U)){if(K===null)K=new _O(H);return X=Y?K.fromEquirectangular(Z):K.fromCubemap(Z),X.texture.pmremVersion=Z.pmremVersion,E.set(Z,X),Z.addEventListener("dispose",A),X.texture}else return null}}}return Z}function Q(Z){let F=0,Y=6;for(let k=0;k<Y;k++)if(Z[k]!==void 0)F++;return F===Y}function A(Z){let F=Z.target;F.removeEventListener("dispose",A);let Y=E.get(F);if(Y!==void 0)E.delete(F),Y.dispose()}function O(){if(E=new WeakMap,K!==null)K.dispose(),K=null}return{get:W,dispose:O}}function fR(H){let E={};function K(W){if(E[W]!==void 0)return E[W];let Q;switch(W){case"WEBGL_depth_texture":Q=H.getExtension("WEBGL_depth_texture")||H.getExtension("MOZ_WEBGL_depth_texture")||H.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":Q=H.getExtension("EXT_texture_filter_anisotropic")||H.getExtension("MOZ_EXT_texture_filter_anisotropic")||H.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":Q=H.getExtension("WEBGL_compressed_texture_s3tc")||H.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||H.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":Q=H.getExtension("WEBGL_compressed_texture_pvrtc")||H.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:Q=H.getExtension(W)}return E[W]=Q,Q}return{has:function(W){return K(W)!==null},init:function(){K("EXT_color_buffer_float"),K("WEBGL_clip_cull_distance"),K("OES_texture_float_linear"),K("EXT_color_buffer_half_float"),K("WEBGL_multisampled_render_to_texture"),K("WEBGL_render_shared_exponent")},get:function(W){let Q=K(W);if(Q===null)SH("THREE.WebGLRenderer: "+W+" extension not supported.");return Q}}}function LR(H,E,K,W){let Q={},A=new WeakMap;function O(X){let D=X.target;if(D.index!==null)E.remove(D.index);for(let M in D.attributes)E.remove(D.attributes[M]);D.removeEventListener("dispose",O),delete Q[D.id];let U=A.get(D);if(U)E.remove(U),A.delete(D);if(W.releaseStatesOfGeometry(D),D.isInstancedBufferGeometry===!0)delete D._maxInstanceCount;K.memory.geometries--}function Z(X,D){if(Q[D.id]===!0)return D;return D.addEventListener("dispose",O),Q[D.id]=!0,K.memory.geometries++,D}function F(X){let D=X.attributes;for(let U in D)E.update(D[U],H.ARRAY_BUFFER)}function Y(X){let D=[],U=X.index,M=X.attributes.position,L=0;if(U!==null){let f=U.array;L=U.version;for(let N=0,z=f.length;N<z;N+=3){let S=f[N+0],B=f[N+1],q=f[N+2];D.push(S,B,B,q,q,S)}}else if(M!==void 0){let f=M.array;L=M.version;for(let N=0,z=f.length/3-1;N<z;N+=3){let S=N+0,B=N+1,q=N+2;D.push(S,B,B,q,q,S)}}else return;let w=new((GO(D))?q5:B5)(D,1);w.version=L;let J=A.get(X);if(J)E.remove(J);A.set(X,w)}function k(X){let D=A.get(X);if(D){let U=X.index;if(U!==null){if(D.version<U.version)Y(X)}}else Y(X);return A.get(X)}return{get:Z,update:F,getWireframeAttribute:k}}function MR(H,E,K){let W;function Q(D){W=D}let A,O;function Z(D){A=D.type,O=D.bytesPerElement}function F(D,U){H.drawElements(W,U,A,D*O),K.update(U,W,1)}function Y(D,U,M){if(M===0)return;H.drawElementsInstanced(W,U,A,D*O,M),K.update(U,W,M)}function k(D,U,M){if(M===0)return;E.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,U,0,A,D,0,M);let w=0;for(let J=0;J<M;J++)w+=U[J];K.update(w,W,1)}function X(D,U,M,L){if(M===0)return;let w=E.get("WEBGL_multi_draw");if(w===null)for(let J=0;J<D.length;J++)Y(D[J]/O,U[J],L[J]);else{w.multiDrawElementsInstancedWEBGL(W,U,0,A,D,0,L,0,M);let J=0;for(let f=0;f<M;f++)J+=U[f]*L[f];K.update(J,W,1)}}this.setMode=Q,this.setIndex=Z,this.render=F,this.renderInstances=Y,this.renderMultiDraw=k,this.renderMultiDrawInstances=X}function RR(H){let E={geometries:0,textures:0},K={frame:0,calls:0,triangles:0,points:0,lines:0};function W(A,O,Z){switch(K.calls++,O){case H.TRIANGLES:K.triangles+=Z*(A/3);break;case H.LINES:K.lines+=Z*(A/2);break;case H.LINE_STRIP:K.lines+=Z*(A-1);break;case H.LINE_LOOP:K.lines+=Z*A;break;case H.POINTS:K.points+=Z*A;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",O);break}}function Q(){K.calls=0,K.triangles=0,K.points=0,K.lines=0}return{memory:E,render:K,programs:null,autoReset:!0,reset:Q,update:W}}function VR(H,E,K){let W=new WeakMap,Q=new E1;function A(O,Z,F){let Y=O.morphTargetInfluences,k=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,X=k!==void 0?k.length:0,D=W.get(Z);if(D===void 0||D.count!==X){let G=function(){q.dispose(),W.delete(Z),Z.removeEventListener("dispose",G)};if(D!==void 0)D.texture.dispose();let U=Z.morphAttributes.position!==void 0,M=Z.morphAttributes.normal!==void 0,L=Z.morphAttributes.color!==void 0,w=Z.morphAttributes.position||[],J=Z.morphAttributes.normal||[],f=Z.morphAttributes.color||[],N=0;if(U===!0)N=1;if(M===!0)N=2;if(L===!0)N=3;let z=Z.attributes.position.count*N,S=1;if(z>E.maxTextureSize)S=Math.ceil(z/E.maxTextureSize),z=E.maxTextureSize;let B=new Float32Array(z*S*4*X),q=new P5(B,z,S,X);q.type=$8,q.needsUpdate=!0;let u=N*4;for(let P=0;P<X;P++){let l=w[P],n=J[P],s=f[P],m=z*S*4*P;for(let e=0;e<l.count;e++){let d=e*u;if(U===!0)Q.fromBufferAttribute(l,e),B[m+d+0]=Q.x,B[m+d+1]=Q.y,B[m+d+2]=Q.z,B[m+d+3]=0;if(M===!0)Q.fromBufferAttribute(n,e),B[m+d+4]=Q.x,B[m+d+5]=Q.y,B[m+d+6]=Q.z,B[m+d+7]=0;if(L===!0)Q.fromBufferAttribute(s,e),B[m+d+8]=Q.x,B[m+d+9]=Q.y,B[m+d+10]=Q.z,B[m+d+11]=s.itemSize===4?Q.w:1}}D={count:X,texture:q,size:new o0(z,S)},W.set(Z,D),Z.addEventListener("dispose",G)}if(O.isInstancedMesh===!0&&O.morphTexture!==null)F.getUniforms().setValue(H,"morphTexture",O.morphTexture,K);else{let U=0;for(let L=0;L<Y.length;L++)U+=Y[L];let M=Z.morphTargetsRelative?1:1-U;F.getUniforms().setValue(H,"morphTargetBaseInfluence",M),F.getUniforms().setValue(H,"morphTargetInfluences",Y)}F.getUniforms().setValue(H,"morphTargetsTexture",D.texture,K),F.getUniforms().setValue(H,"morphTargetsTextureSize",D.size)}return{update:A}}function PR(H,E,K,W){let Q=new WeakMap;function A(F){let Y=W.render.frame,k=F.geometry,X=E.get(F,k);if(Q.get(X)!==Y)E.update(X),Q.set(X,Y);if(F.isInstancedMesh){if(F.hasEventListener("dispose",Z)===!1)F.addEventListener("dispose",Z);if(Q.get(F)!==Y){if(K.update(F.instanceMatrix,H.ARRAY_BUFFER),F.instanceColor!==null)K.update(F.instanceColor,H.ARRAY_BUFFER);Q.set(F,Y)}}if(F.isSkinnedMesh){let D=F.skeleton;if(Q.get(D)!==Y)D.update(),Q.set(D,Y)}return X}function O(){Q=new WeakMap}function Z(F){let Y=F.target;if(Y.removeEventListener("dispose",Z),K.remove(Y.instanceMatrix),Y.instanceColor!==null)K.remove(Y.instanceColor)}return{update:A,dispose:O}}var QD=new _1,nk=new T5(1,1),AD=new P5,OD=new qO,ZD=new S5,bk=[],dk=[],mk=new Float32Array(16),ck=new Float32Array(9),ik=new Float32Array(4);function d6(H,E,K){let W=H[0];if(W<=0||W>0)return H;let Q=E*K,A=bk[Q];if(A===void 0)A=new Float32Array(Q),bk[Q]=A;if(E!==0){W.toArray(A,0);for(let O=1,Z=0;O!==E;++O)Z+=K,H[O].toArray(A,Z)}return A}function q1(H,E){if(H.length!==E.length)return!1;for(let K=0,W=H.length;K<W;K++)if(H[K]!==E[K])return!1;return!0}function C1(H,E){for(let K=0,W=E.length;K<W;K++)H[K]=E[K]}function b5(H,E){let K=dk[E];if(K===void 0)K=new Int32Array(E),dk[E]=K;for(let W=0;W!==E;++W)K[W]=H.allocateTextureUnit();return K}function GR(H,E){let K=this.cache;if(K[0]===E)return;H.uniform1f(this.addr,E),K[0]=E}function zR(H,E){let K=this.cache;if(E.x!==void 0){if(K[0]!==E.x||K[1]!==E.y)H.uniform2f(this.addr,E.x,E.y),K[0]=E.x,K[1]=E.y}else{if(q1(K,E))return;H.uniform2fv(this.addr,E),C1(K,E)}}function BR(H,E){let K=this.cache;if(E.x!==void 0){if(K[0]!==E.x||K[1]!==E.y||K[2]!==E.z)H.uniform3f(this.addr,E.x,E.y,E.z),K[0]=E.x,K[1]=E.y,K[2]=E.z}else if(E.r!==void 0){if(K[0]!==E.r||K[1]!==E.g||K[2]!==E.b)H.uniform3f(this.addr,E.r,E.g,E.b),K[0]=E.r,K[1]=E.g,K[2]=E.b}else{if(q1(K,E))return;H.uniform3fv(this.addr,E),C1(K,E)}}function qR(H,E){let K=this.cache;if(E.x!==void 0){if(K[0]!==E.x||K[1]!==E.y||K[2]!==E.z||K[3]!==E.w)H.uniform4f(this.addr,E.x,E.y,E.z,E.w),K[0]=E.x,K[1]=E.y,K[2]=E.z,K[3]=E.w}else{if(q1(K,E))return;H.uniform4fv(this.addr,E),C1(K,E)}}function CR(H,E){let K=this.cache,W=E.elements;if(W===void 0){if(q1(K,E))return;H.uniformMatrix2fv(this.addr,!1,E),C1(K,E)}else{if(q1(K,W))return;ik.set(W),H.uniformMatrix2fv(this.addr,!1,ik),C1(K,W)}}function SR(H,E){let K=this.cache,W=E.elements;if(W===void 0){if(q1(K,E))return;H.uniformMatrix3fv(this.addr,!1,E),C1(K,E)}else{if(q1(K,W))return;ck.set(W),H.uniformMatrix3fv(this.addr,!1,ck),C1(K,W)}}function IR(H,E){let K=this.cache,W=E.elements;if(W===void 0){if(q1(K,E))return;H.uniformMatrix4fv(this.addr,!1,E),C1(K,E)}else{if(q1(K,W))return;mk.set(W),H.uniformMatrix4fv(this.addr,!1,mk),C1(K,W)}}function lR(H,E){let K=this.cache;if(K[0]===E)return;H.uniform1i(this.addr,E),K[0]=E}function TR(H,E){let K=this.cache;if(E.x!==void 0){if(K[0]!==E.x||K[1]!==E.y)H.uniform2i(this.addr,E.x,E.y),K[0]=E.x,K[1]=E.y}else{if(q1(K,E))return;H.uniform2iv(this.addr,E),C1(K,E)}}function vR(H,E){let K=this.cache;if(E.x!==void 0){if(K[0]!==E.x||K[1]!==E.y||K[2]!==E.z)H.uniform3i(this.addr,E.x,E.y,E.z),K[0]=E.x,K[1]=E.y,K[2]=E.z}else{if(q1(K,E))return;H.uniform3iv(this.addr,E),C1(K,E)}}function yR(H,E){let K=this.cache;if(E.x!==void 0){if(K[0]!==E.x||K[1]!==E.y||K[2]!==E.z||K[3]!==E.w)H.uniform4i(this.addr,E.x,E.y,E.z,E.w),K[0]=E.x,K[1]=E.y,K[2]=E.z,K[3]=E.w}else{if(q1(K,E))return;H.uniform4iv(this.addr,E),C1(K,E)}}function uR(H,E){let K=this.cache;if(K[0]===E)return;H.uniform1ui(this.addr,E),K[0]=E}function hR(H,E){let K=this.cache;if(E.x!==void 0){if(K[0]!==E.x||K[1]!==E.y)H.uniform2ui(this.addr,E.x,E.y),K[0]=E.x,K[1]=E.y}else{if(q1(K,E))return;H.uniform2uiv(this.addr,E),C1(K,E)}}function jR(H,E){let K=this.cache;if(E.x!==void 0){if(K[0]!==E.x||K[1]!==E.y||K[2]!==E.z)H.uniform3ui(this.addr,E.x,E.y,E.z),K[0]=E.x,K[1]=E.y,K[2]=E.z}else{if(q1(K,E))return;H.uniform3uiv(this.addr,E),C1(K,E)}}function pR(H,E){let K=this.cache;if(E.x!==void 0){if(K[0]!==E.x||K[1]!==E.y||K[2]!==E.z||K[3]!==E.w)H.uniform4ui(this.addr,E.x,E.y,E.z,E.w),K[0]=E.x,K[1]=E.y,K[2]=E.z,K[3]=E.w}else{if(q1(K,E))return;H.uniform4uiv(this.addr,E),C1(K,E)}}function gR(H,E,K){let W=this.cache,Q=K.allocateTextureUnit();if(W[0]!==Q)H.uniform1i(this.addr,Q),W[0]=Q;let A;if(this.type===H.SAMPLER_2D_SHADOW)nk.compareFunction=VO,A=nk;else A=QD;K.setTexture2D(E||A,Q)}function xR(H,E,K){let W=this.cache,Q=K.allocateTextureUnit();if(W[0]!==Q)H.uniform1i(this.addr,Q),W[0]=Q;K.setTexture3D(E||OD,Q)}function nR(H,E,K){let W=this.cache,Q=K.allocateTextureUnit();if(W[0]!==Q)H.uniform1i(this.addr,Q),W[0]=Q;K.setTextureCube(E||ZD,Q)}function bR(H,E,K){let W=this.cache,Q=K.allocateTextureUnit();if(W[0]!==Q)H.uniform1i(this.addr,Q),W[0]=Q;K.setTexture2DArray(E||AD,Q)}function dR(H){switch(H){case 5126:return GR;case 35664:return zR;case 35665:return BR;case 35666:return qR;case 35674:return CR;case 35675:return SR;case 35676:return IR;case 5124:case 35670:return lR;case 35667:case 35671:return TR;case 35668:case 35672:return vR;case 35669:case 35673:return yR;case 5125:return uR;case 36294:return hR;case 36295:return jR;case 36296:return pR;case 35678:case 36198:case 36298:case 36306:case 35682:return gR;case 35679:case 36299:case 36307:return xR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return bR}}function mR(H,E){H.uniform1fv(this.addr,E)}function cR(H,E){let K=d6(E,this.size,2);H.uniform2fv(this.addr,K)}function iR(H,E){let K=d6(E,this.size,3);H.uniform3fv(this.addr,K)}function sR(H,E){let K=d6(E,this.size,4);H.uniform4fv(this.addr,K)}function oR(H,E){let K=d6(E,this.size,4);H.uniformMatrix2fv(this.addr,!1,K)}function rR(H,E){let K=d6(E,this.size,9);H.uniformMatrix3fv(this.addr,!1,K)}function tR(H,E){let K=d6(E,this.size,16);H.uniformMatrix4fv(this.addr,!1,K)}function aR(H,E){H.uniform1iv(this.addr,E)}function eR(H,E){H.uniform2iv(this.addr,E)}function $R(H,E){H.uniform3iv(this.addr,E)}function _R(H,E){H.uniform4iv(this.addr,E)}function HV(H,E){H.uniform1uiv(this.addr,E)}function EV(H,E){H.uniform2uiv(this.addr,E)}function KV(H,E){H.uniform3uiv(this.addr,E)}function WV(H,E){H.uniform4uiv(this.addr,E)}function QV(H,E,K){let W=this.cache,Q=E.length,A=b5(K,Q);if(!q1(W,A))H.uniform1iv(this.addr,A),C1(W,A);for(let O=0;O!==Q;++O)K.setTexture2D(E[O]||QD,A[O])}function AV(H,E,K){let W=this.cache,Q=E.length,A=b5(K,Q);if(!q1(W,A))H.uniform1iv(this.addr,A),C1(W,A);for(let O=0;O!==Q;++O)K.setTexture3D(E[O]||OD,A[O])}function OV(H,E,K){let W=this.cache,Q=E.length,A=b5(K,Q);if(!q1(W,A))H.uniform1iv(this.addr,A),C1(W,A);for(let O=0;O!==Q;++O)K.setTextureCube(E[O]||ZD,A[O])}function ZV(H,E,K){let W=this.cache,Q=E.length,A=b5(K,Q);if(!q1(W,A))H.uniform1iv(this.addr,A),C1(W,A);for(let O=0;O!==Q;++O)K.setTexture2DArray(E[O]||AD,A[O])}function FV(H){switch(H){case 5126:return mR;case 35664:return cR;case 35665:return iR;case 35666:return sR;case 35674:return oR;case 35675:return rR;case 35676:return tR;case 5124:case 35670:return aR;case 35667:case 35671:return eR;case 35668:case 35672:return $R;case 35669:case 35673:return _R;case 5125:return HV;case 36294:return EV;case 36295:return KV;case 36296:return WV;case 35678:case 36198:case 36298:case 36306:case 35682:return QV;case 35679:case 36299:case 36307:return AV;case 35680:case 36300:case 36308:case 36293:return OV;case 36289:case 36303:case 36311:case 36292:return ZV}}class FD{constructor(H,E,K){this.id=H,this.addr=K,this.cache=[],this.type=E.type,this.setValue=dR(E.type)}}class YD{constructor(H,E,K){this.id=H,this.addr=K,this.cache=[],this.type=E.type,this.size=E.size,this.setValue=FV(E.type)}}class JD{constructor(H){this.id=H,this.seq=[],this.map={}}setValue(H,E,K){let W=this.seq;for(let Q=0,A=W.length;Q!==A;++Q){let O=W[Q];O.setValue(H,E[O.id],K)}}}var $O=/(\w+)(\])?(\[|\.)?/g;function sk(H,E){H.seq.push(E),H.map[E.id]=E}function YV(H,E,K){let W=H.name,Q=W.length;$O.lastIndex=0;while(!0){let A=$O.exec(W),O=$O.lastIndex,Z=A[1],F=A[2]==="]",Y=A[3];if(F)Z=Z|0;if(Y===void 0||Y==="["&&O+2===Q){sk(K,Y===void 0?new FD(Z,H,E):new YD(Z,H,E));break}else{let X=K.map[Z];if(X===void 0)X=new JD(Z),sk(K,X);K=X}}}class kK{constructor(H,E){this.seq=[],this.map={};let K=H.getProgramParameter(E,H.ACTIVE_UNIFORMS);for(let W=0;W<K;++W){let Q=H.getActiveUniform(E,W),A=H.getUniformLocation(E,Q.name);YV(Q,A,this)}}setValue(H,E,K,W){let Q=this.map[E];if(Q!==void 0)Q.setValue(H,K,W)}setOptional(H,E,K){let W=E[K];if(W!==void 0)this.setValue(H,K,W)}static upload(H,E,K,W){for(let Q=0,A=E.length;Q!==A;++Q){let O=E[Q],Z=K[O.id];if(Z.needsUpdate!==!1)O.setValue(H,Z.value,W)}}static seqWithValue(H,E){let K=[];for(let W=0,Q=H.length;W!==Q;++W){let A=H[W];if(A.id in E)K.push(A)}return K}}function ok(H,E,K){let W=H.createShader(E);return H.shaderSource(W,K),H.compileShader(W),W}var JV=37297,XV=0;function kV(H,E){let K=H.split(`
`),W=[],Q=Math.max(E-6,0),A=Math.min(E+6,K.length);for(let O=Q;O<A;O++){let Z=O+1;W.push(`${Z===E?">":" "} ${Z}: ${K[O]}`)}return W.join(`
`)}var rk=new y0;function DV(H){s0._getMatrix(rk,s0.workingColorSpace,H);let E=`mat3( ${rk.elements.map((K)=>K.toFixed(4))} )`;switch(s0.getTransfer(H)){case RO:return[E,"LinearTransferOETF"];case A1:return[E,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",H),[E,"LinearTransferOETF"]}}function tk(H,E,K){let W=H.getShaderParameter(E,H.COMPILE_STATUS),Q=H.getShaderInfoLog(E).trim();if(W&&Q==="")return"";let A=/ERROR: 0:(\d+)/.exec(Q);if(A){let O=parseInt(A[1]);return K.toUpperCase()+`

`+Q+`

`+kV(H.getShaderSource(E),O)}else return Q}function wV(H,E){let K=DV(E);return[`vec4 ${H}( vec4 value ) {`,`	return ${K[1]}( vec4( value.rgb * ${K[0]}, value.a ) );`,"}"].join(`
`)}function NV(H,E){let K;switch(E){case iX:K="Linear";break;case sX:K="Reinhard";break;case oX:K="Cineon";break;case rX:K="ACESFilmic";break;case aX:K="AgX";break;case eX:K="Neutral";break;case tX:K="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",E),K="Linear"}return"vec3 "+H+"( vec3 color ) { return "+K+"ToneMapping( color ); }"}var x5=new h;function UV(){s0.getLuminanceCoefficients(x5);let H=x5.x.toFixed(4),E=x5.y.toFixed(4),K=x5.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${H}, ${E}, ${K} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function fV(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(XK).join(`
`)}function LV(H){let E=[];for(let K in H){let W=H[K];if(W===!1)continue;E.push("#define "+K+" "+W)}return E.join(`
`)}function MV(H,E){let K={},W=H.getProgramParameter(E,H.ACTIVE_ATTRIBUTES);for(let Q=0;Q<W;Q++){let A=H.getActiveAttrib(E,Q),O=A.name,Z=1;if(A.type===H.FLOAT_MAT2)Z=2;if(A.type===H.FLOAT_MAT3)Z=3;if(A.type===H.FLOAT_MAT4)Z=4;K[O]={type:A.type,location:H.getAttribLocation(E,O),locationSize:Z}}return K}function XK(H){return H!==""}function ak(H,E){let K=E.numSpotLightShadows+E.numSpotLightMaps-E.numSpotLightShadowsWithMaps;return H.replace(/NUM_DIR_LIGHTS/g,E.numDirLights).replace(/NUM_SPOT_LIGHTS/g,E.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,E.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,K).replace(/NUM_RECT_AREA_LIGHTS/g,E.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,E.numPointLights).replace(/NUM_HEMI_LIGHTS/g,E.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,E.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,E.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,E.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,E.numPointLightShadows)}function ek(H,E){return H.replace(/NUM_CLIPPING_PLANES/g,E.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,E.numClippingPlanes-E.numClipIntersection)}var RV=/^[ \t]*#include +<([\w\d./]+)>/gm;function HZ(H){return H.replace(RV,PV)}var VV=new Map;function PV(H,E){let K=p0[E];if(K===void 0){let W=VV.get(E);if(W!==void 0)K=p0[W],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',E,W);else throw Error("Can not resolve #include <"+E+">")}return HZ(K)}var GV=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $k(H){return H.replace(GV,zV)}function zV(H,E,K,W){let Q="";for(let A=parseInt(E);A<parseInt(K);A++)Q+=W.replace(/\[\s*i\s*\]/g,"[ "+A+" ]").replace(/UNROLLED_LOOP_INDEX/g,A);return Q}function _k(H){let E=`precision ${H.precision} float;
	precision ${H.precision} int;
	precision ${H.precision} sampler2D;
	precision ${H.precision} samplerCube;
	precision ${H.precision} sampler3D;
	precision ${H.precision} sampler2DArray;
	precision ${H.precision} sampler2DShadow;
	precision ${H.precision} samplerCubeShadow;
	precision ${H.precision} sampler2DArrayShadow;
	precision ${H.precision} isampler2D;
	precision ${H.precision} isampler3D;
	precision ${H.precision} isamplerCube;
	precision ${H.precision} isampler2DArray;
	precision ${H.precision} usampler2D;
	precision ${H.precision} usampler3D;
	precision ${H.precision} usamplerCube;
	precision ${H.precision} usampler2DArray;
	`;if(H.precision==="highp")E+=`
#define HIGH_PRECISION`;else if(H.precision==="mediump")E+=`
#define MEDIUM_PRECISION`;else if(H.precision==="lowp")E+=`
#define LOW_PRECISION`;return E}function BV(H){let E="SHADOWMAP_TYPE_BASIC";if(H.shadowMapType===gA)E="SHADOWMAP_TYPE_PCF";else if(H.shadowMapType===VX)E="SHADOWMAP_TYPE_PCF_SOFT";else if(H.shadowMapType===$9)E="SHADOWMAP_TYPE_VSM";return E}function qV(H){let E="ENVMAP_TYPE_CUBE";if(H.envMap)switch(H.envMapMode){case l6:case BH:E="ENVMAP_TYPE_CUBE";break;case aE:E="ENVMAP_TYPE_CUBE_UV";break}return E}function CV(H){let E="ENVMAP_MODE_REFLECTION";if(H.envMap)switch(H.envMapMode){case BH:E="ENVMAP_MODE_REFRACTION";break}return E}function SV(H){let E="ENVMAP_BLENDING_NONE";if(H.envMap)switch(H.combine){case dX:E="ENVMAP_BLENDING_MULTIPLY";break;case mX:E="ENVMAP_BLENDING_MIX";break;case cX:E="ENVMAP_BLENDING_ADD";break}return E}function IV(H){let E=H.envMapCubeUVHeight;if(E===null)return null;let K=Math.log2(E)-2,W=1/E;return{texelWidth:1/(3*Math.max(Math.pow(2,K),112)),texelHeight:W,maxMip:K}}function lV(H,E,K,W){let Q=H.getContext(),A=K.defines,O=K.vertexShader,Z=K.fragmentShader,F=BV(K),Y=qV(K),k=CV(K),X=SV(K),D=IV(K),U=fV(K),M=LV(A),L=Q.createProgram(),w,J,f=K.glslVersion?"#version "+K.glslVersion+`
`:"";if(K.isRawShaderMaterial){if(w=["#define SHADER_TYPE "+K.shaderType,"#define SHADER_NAME "+K.shaderName,M].filter(XK).join(`
`),w.length>0)w+=`
`;if(J=["#define SHADER_TYPE "+K.shaderType,"#define SHADER_NAME "+K.shaderName,M].filter(XK).join(`
`),J.length>0)J+=`
`}else w=[_k(K),"#define SHADER_TYPE "+K.shaderType,"#define SHADER_NAME "+K.shaderName,M,K.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",K.batching?"#define USE_BATCHING":"",K.batchingColor?"#define USE_BATCHING_COLOR":"",K.instancing?"#define USE_INSTANCING":"",K.instancingColor?"#define USE_INSTANCING_COLOR":"",K.instancingMorph?"#define USE_INSTANCING_MORPH":"",K.useFog&&K.fog?"#define USE_FOG":"",K.useFog&&K.fogExp2?"#define FOG_EXP2":"",K.map?"#define USE_MAP":"",K.envMap?"#define USE_ENVMAP":"",K.envMap?"#define "+k:"",K.lightMap?"#define USE_LIGHTMAP":"",K.aoMap?"#define USE_AOMAP":"",K.bumpMap?"#define USE_BUMPMAP":"",K.normalMap?"#define USE_NORMALMAP":"",K.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",K.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",K.displacementMap?"#define USE_DISPLACEMENTMAP":"",K.emissiveMap?"#define USE_EMISSIVEMAP":"",K.anisotropy?"#define USE_ANISOTROPY":"",K.anisotropyMap?"#define USE_ANISOTROPYMAP":"",K.clearcoatMap?"#define USE_CLEARCOATMAP":"",K.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",K.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",K.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",K.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",K.specularMap?"#define USE_SPECULARMAP":"",K.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",K.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",K.roughnessMap?"#define USE_ROUGHNESSMAP":"",K.metalnessMap?"#define USE_METALNESSMAP":"",K.alphaMap?"#define USE_ALPHAMAP":"",K.alphaHash?"#define USE_ALPHAHASH":"",K.transmission?"#define USE_TRANSMISSION":"",K.transmissionMap?"#define USE_TRANSMISSIONMAP":"",K.thicknessMap?"#define USE_THICKNESSMAP":"",K.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",K.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",K.mapUv?"#define MAP_UV "+K.mapUv:"",K.alphaMapUv?"#define ALPHAMAP_UV "+K.alphaMapUv:"",K.lightMapUv?"#define LIGHTMAP_UV "+K.lightMapUv:"",K.aoMapUv?"#define AOMAP_UV "+K.aoMapUv:"",K.emissiveMapUv?"#define EMISSIVEMAP_UV "+K.emissiveMapUv:"",K.bumpMapUv?"#define BUMPMAP_UV "+K.bumpMapUv:"",K.normalMapUv?"#define NORMALMAP_UV "+K.normalMapUv:"",K.displacementMapUv?"#define DISPLACEMENTMAP_UV "+K.displacementMapUv:"",K.metalnessMapUv?"#define METALNESSMAP_UV "+K.metalnessMapUv:"",K.roughnessMapUv?"#define ROUGHNESSMAP_UV "+K.roughnessMapUv:"",K.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+K.anisotropyMapUv:"",K.clearcoatMapUv?"#define CLEARCOATMAP_UV "+K.clearcoatMapUv:"",K.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+K.clearcoatNormalMapUv:"",K.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+K.clearcoatRoughnessMapUv:"",K.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+K.iridescenceMapUv:"",K.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+K.iridescenceThicknessMapUv:"",K.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+K.sheenColorMapUv:"",K.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+K.sheenRoughnessMapUv:"",K.specularMapUv?"#define SPECULARMAP_UV "+K.specularMapUv:"",K.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+K.specularColorMapUv:"",K.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+K.specularIntensityMapUv:"",K.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+K.transmissionMapUv:"",K.thicknessMapUv?"#define THICKNESSMAP_UV "+K.thicknessMapUv:"",K.vertexTangents&&K.flatShading===!1?"#define USE_TANGENT":"",K.vertexColors?"#define USE_COLOR":"",K.vertexAlphas?"#define USE_COLOR_ALPHA":"",K.vertexUv1s?"#define USE_UV1":"",K.vertexUv2s?"#define USE_UV2":"",K.vertexUv3s?"#define USE_UV3":"",K.pointsUvs?"#define USE_POINTS_UV":"",K.flatShading?"#define FLAT_SHADED":"",K.skinning?"#define USE_SKINNING":"",K.morphTargets?"#define USE_MORPHTARGETS":"",K.morphNormals&&K.flatShading===!1?"#define USE_MORPHNORMALS":"",K.morphColors?"#define USE_MORPHCOLORS":"",K.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+K.morphTextureStride:"",K.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+K.morphTargetsCount:"",K.doubleSided?"#define DOUBLE_SIDED":"",K.flipSided?"#define FLIP_SIDED":"",K.shadowMapEnabled?"#define USE_SHADOWMAP":"",K.shadowMapEnabled?"#define "+F:"",K.sizeAttenuation?"#define USE_SIZEATTENUATION":"",K.numLightProbes>0?"#define USE_LIGHT_PROBES":"",K.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",K.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(XK).join(`
`),J=[_k(K),"#define SHADER_TYPE "+K.shaderType,"#define SHADER_NAME "+K.shaderName,M,K.useFog&&K.fog?"#define USE_FOG":"",K.useFog&&K.fogExp2?"#define FOG_EXP2":"",K.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",K.map?"#define USE_MAP":"",K.matcap?"#define USE_MATCAP":"",K.envMap?"#define USE_ENVMAP":"",K.envMap?"#define "+Y:"",K.envMap?"#define "+k:"",K.envMap?"#define "+X:"",D?"#define CUBEUV_TEXEL_WIDTH "+D.texelWidth:"",D?"#define CUBEUV_TEXEL_HEIGHT "+D.texelHeight:"",D?"#define CUBEUV_MAX_MIP "+D.maxMip+".0":"",K.lightMap?"#define USE_LIGHTMAP":"",K.aoMap?"#define USE_AOMAP":"",K.bumpMap?"#define USE_BUMPMAP":"",K.normalMap?"#define USE_NORMALMAP":"",K.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",K.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",K.emissiveMap?"#define USE_EMISSIVEMAP":"",K.anisotropy?"#define USE_ANISOTROPY":"",K.anisotropyMap?"#define USE_ANISOTROPYMAP":"",K.clearcoat?"#define USE_CLEARCOAT":"",K.clearcoatMap?"#define USE_CLEARCOATMAP":"",K.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",K.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",K.dispersion?"#define USE_DISPERSION":"",K.iridescence?"#define USE_IRIDESCENCE":"",K.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",K.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",K.specularMap?"#define USE_SPECULARMAP":"",K.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",K.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",K.roughnessMap?"#define USE_ROUGHNESSMAP":"",K.metalnessMap?"#define USE_METALNESSMAP":"",K.alphaMap?"#define USE_ALPHAMAP":"",K.alphaTest?"#define USE_ALPHATEST":"",K.alphaHash?"#define USE_ALPHAHASH":"",K.sheen?"#define USE_SHEEN":"",K.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",K.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",K.transmission?"#define USE_TRANSMISSION":"",K.transmissionMap?"#define USE_TRANSMISSIONMAP":"",K.thicknessMap?"#define USE_THICKNESSMAP":"",K.vertexTangents&&K.flatShading===!1?"#define USE_TANGENT":"",K.vertexColors||K.instancingColor||K.batchingColor?"#define USE_COLOR":"",K.vertexAlphas?"#define USE_COLOR_ALPHA":"",K.vertexUv1s?"#define USE_UV1":"",K.vertexUv2s?"#define USE_UV2":"",K.vertexUv3s?"#define USE_UV3":"",K.pointsUvs?"#define USE_POINTS_UV":"",K.gradientMap?"#define USE_GRADIENTMAP":"",K.flatShading?"#define FLAT_SHADED":"",K.doubleSided?"#define DOUBLE_SIDED":"",K.flipSided?"#define FLIP_SIDED":"",K.shadowMapEnabled?"#define USE_SHADOWMAP":"",K.shadowMapEnabled?"#define "+F:"",K.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",K.numLightProbes>0?"#define USE_LIGHT_PROBES":"",K.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",K.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",K.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",K.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",K.toneMapping!==V8?"#define TONE_MAPPING":"",K.toneMapping!==V8?p0.tonemapping_pars_fragment:"",K.toneMapping!==V8?NV("toneMapping",K.toneMapping):"",K.dithering?"#define DITHERING":"",K.opaque?"#define OPAQUE":"",p0.colorspace_pars_fragment,wV("linearToOutputTexel",K.outputColorSpace),UV(),K.useDepthPacking?"#define DEPTH_PACKING "+K.depthPacking:"",`
`].filter(XK).join(`
`);if(O=HZ(O),O=ak(O,K),O=ek(O,K),Z=HZ(Z),Z=ak(Z,K),Z=ek(Z,K),O=$k(O),Z=$k(Z),K.isRawShaderMaterial!==!0)f=`#version 300 es
`,w=[U,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,J=["#define varying in",K.glslVersion===PO?"":"layout(location = 0) out highp vec4 pc_fragColor;",K.glslVersion===PO?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+J;let N=f+w+O,z=f+J+Z,S=ok(Q,Q.VERTEX_SHADER,N),B=ok(Q,Q.FRAGMENT_SHADER,z);if(Q.attachShader(L,S),Q.attachShader(L,B),K.index0AttributeName!==void 0)Q.bindAttribLocation(L,0,K.index0AttributeName);else if(K.morphTargets===!0)Q.bindAttribLocation(L,0,"position");Q.linkProgram(L);function q(l){if(H.debug.checkShaderErrors){let n=Q.getProgramInfoLog(L).trim(),s=Q.getShaderInfoLog(S).trim(),m=Q.getShaderInfoLog(B).trim(),e=!0,d=!0;if(Q.getProgramParameter(L,Q.LINK_STATUS)===!1)if(e=!1,typeof H.debug.onShaderError==="function")H.debug.onShaderError(Q,L,S,B);else{let _=tk(Q,S,"vertex"),b=tk(Q,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+Q.getError()+" - VALIDATE_STATUS "+Q.getProgramParameter(L,Q.VALIDATE_STATUS)+`

Material Name: `+l.name+`
Material Type: `+l.type+`

Program Info Log: `+n+`
`+_+`
`+b)}else if(n!=="")console.warn("THREE.WebGLProgram: Program Info Log:",n);else if(s===""||m==="")d=!1;if(d)l.diagnostics={runnable:e,programLog:n,vertexShader:{log:s,prefix:w},fragmentShader:{log:m,prefix:J}}}Q.deleteShader(S),Q.deleteShader(B),u=new kK(Q,L),G=MV(Q,L)}let u;this.getUniforms=function(){if(u===void 0)q(this);return u};let G;this.getAttributes=function(){if(G===void 0)q(this);return G};let P=K.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(P===!1)P=Q.getProgramParameter(L,JV);return P},this.destroy=function(){W.releaseStatesOfProgram(this),Q.deleteProgram(L),this.program=void 0},this.type=K.shaderType,this.name=K.shaderName,this.id=XV++,this.cacheKey=E,this.usedTimes=1,this.program=L,this.vertexShader=S,this.fragmentShader=B,this}var TV=0;class XD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(H){let{vertexShader:E,fragmentShader:K}=H,W=this._getShaderStage(E),Q=this._getShaderStage(K),A=this._getShaderCacheForMaterial(H);if(A.has(W)===!1)A.add(W),W.usedTimes++;if(A.has(Q)===!1)A.add(Q),Q.usedTimes++;return this}remove(H){let E=this.materialCache.get(H);for(let K of E)if(K.usedTimes--,K.usedTimes===0)this.shaderCache.delete(K.code);return this.materialCache.delete(H),this}getVertexShaderID(H){return this._getShaderStage(H.vertexShader).id}getFragmentShaderID(H){return this._getShaderStage(H.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(H){let E=this.materialCache,K=E.get(H);if(K===void 0)K=new Set,E.set(H,K);return K}_getShaderStage(H){let E=this.shaderCache,K=E.get(H);if(K===void 0)K=new kD(H),E.set(H,K);return K}}class kD{constructor(H){this.id=TV++,this.code=H,this.usedTimes=0}}function vV(H,E,K,W,Q,A,O){let Z=new z5,F=new XD,Y=new Set,k=[],X=Q.logarithmicDepthBuffer,D=Q.vertexTextures,U=Q.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(G){if(Y.add(G),G===0)return"uv";return`uv${G}`}function w(G,P,l,n,s){let m=n.fog,e=s.geometry,d=G.isMeshStandardMaterial?n.environment:null,_=(G.isMeshStandardMaterial?K:E).get(G.envMap||d),b=!!_&&_.mapping===aE?_.image.height:null,E0=M[G.type];if(G.precision!==null){if(U=Q.getMaxPrecision(G.precision),U!==G.precision)console.warn("THREE.WebGLProgram.getParameters:",G.precision,"not supported, using",U,"instead.")}let A0=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,q0=A0!==void 0?A0.length:0,C0=0;if(e.morphAttributes.position!==void 0)C0=1;if(e.morphAttributes.normal!==void 0)C0=2;if(e.morphAttributes.color!==void 0)C0=3;let c,K0,R0,P0;if(E0){let a0=K8[E0];c=a0.vertexShader,K0=a0.fragmentShader}else c=G.vertexShader,K0=G.fragmentShader,F.update(G),R0=F.getVertexShaderID(G),P0=F.getFragmentShaderID(G);let Z0=H.getRenderTarget(),S0=H.state.buffers.depth.getReversed(),t0=s.isInstancedMesh===!0,d0=s.isBatchedMesh===!0,m0=!!G.map,v1=!!G.matcap,I=!!_,y1=!!G.aoMap,K1=!!G.lightMap,W1=!!G.bumpMap,N0=!!G.normalMap,U1=!!G.displacementMap,V0=!!G.emissiveMap,v0=!!G.metalnessMap,C=!!G.roughnessMap,R=G.anisotropy>0,j=G.clearcoat>0,t=G.dispersion>0,a=G.iridescence>0,i=G.sheen>0,B0=G.transmission>0,F0=R&&!!G.anisotropyMap,f0=j&&!!G.clearcoatMap,u0=j&&!!G.clearcoatNormalMap,Q0=j&&!!G.clearcoatRoughnessMap,k0=a&&!!G.iridescenceMap,n0=a&&!!G.iridescenceThicknessMap,I0=i&&!!G.sheenColorMap,L0=i&&!!G.sheenRoughnessMap,h0=!!G.specularMap,g0=!!G.specularColorMap,k1=!!G.specularIntensityMap,T=B0&&!!G.transmissionMap,W0=B0&&!!G.thicknessMap,o=!!G.gradientMap,r=!!G.alphaMap,X0=G.alphaTest>0,J0=!!G.alphaHash,j0=!!G.extensions,f1=V8;if(G.toneMapped){if(Z0===null||Z0.isXRRenderTarget===!0)f1=H.toneMapping}let u1={shaderID:E0,shaderType:G.type,shaderName:G.name,vertexShader:c,fragmentShader:K0,defines:G.defines,customVertexShaderID:R0,customFragmentShaderID:P0,isRawShaderMaterial:G.isRawShaderMaterial===!0,glslVersion:G.glslVersion,precision:U,batching:d0,batchingColor:d0&&s._colorsTexture!==null,instancing:t0,instancingColor:t0&&s.instanceColor!==null,instancingMorph:t0&&s.morphTexture!==null,supportsVertexTextures:D,outputColorSpace:Z0===null?H.outputColorSpace:Z0.isXRRenderTarget===!0?Z0.texture.colorSpace:EK,alphaToCoverage:!!G.alphaToCoverage,map:m0,matcap:v1,envMap:I,envMapMode:I&&_.mapping,envMapCubeUVHeight:b,aoMap:y1,lightMap:K1,bumpMap:W1,normalMap:N0,displacementMap:D&&U1,emissiveMap:V0,normalMapObjectSpace:N0&&G.normalMapType===wk,normalMapTangentSpace:N0&&G.normalMapType===Dk,metalnessMap:v0,roughnessMap:C,anisotropy:R,anisotropyMap:F0,clearcoat:j,clearcoatMap:f0,clearcoatNormalMap:u0,clearcoatRoughnessMap:Q0,dispersion:t,iridescence:a,iridescenceMap:k0,iridescenceThicknessMap:n0,sheen:i,sheenColorMap:I0,sheenRoughnessMap:L0,specularMap:h0,specularColorMap:g0,specularIntensityMap:k1,transmission:B0,transmissionMap:T,thicknessMap:W0,gradientMap:o,opaque:G.transparent===!1&&G.blending===rE&&G.alphaToCoverage===!1,alphaMap:r,alphaTest:X0,alphaHash:J0,combine:G.combine,mapUv:m0&&L(G.map.channel),aoMapUv:y1&&L(G.aoMap.channel),lightMapUv:K1&&L(G.lightMap.channel),bumpMapUv:W1&&L(G.bumpMap.channel),normalMapUv:N0&&L(G.normalMap.channel),displacementMapUv:U1&&L(G.displacementMap.channel),emissiveMapUv:V0&&L(G.emissiveMap.channel),metalnessMapUv:v0&&L(G.metalnessMap.channel),roughnessMapUv:C&&L(G.roughnessMap.channel),anisotropyMapUv:F0&&L(G.anisotropyMap.channel),clearcoatMapUv:f0&&L(G.clearcoatMap.channel),clearcoatNormalMapUv:u0&&L(G.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q0&&L(G.clearcoatRoughnessMap.channel),iridescenceMapUv:k0&&L(G.iridescenceMap.channel),iridescenceThicknessMapUv:n0&&L(G.iridescenceThicknessMap.channel),sheenColorMapUv:I0&&L(G.sheenColorMap.channel),sheenRoughnessMapUv:L0&&L(G.sheenRoughnessMap.channel),specularMapUv:h0&&L(G.specularMap.channel),specularColorMapUv:g0&&L(G.specularColorMap.channel),specularIntensityMapUv:k1&&L(G.specularIntensityMap.channel),transmissionMapUv:T&&L(G.transmissionMap.channel),thicknessMapUv:W0&&L(G.thicknessMap.channel),alphaMapUv:r&&L(G.alphaMap.channel),vertexTangents:!!e.attributes.tangent&&(N0||R),vertexColors:G.vertexColors,vertexAlphas:G.vertexColors===!0&&!!e.attributes.color&&e.attributes.color.itemSize===4,pointsUvs:s.isPoints===!0&&!!e.attributes.uv&&(m0||r),fog:!!m,useFog:G.fog===!0,fogExp2:!!m&&m.isFogExp2,flatShading:G.flatShading===!0,sizeAttenuation:G.sizeAttenuation===!0,logarithmicDepthBuffer:X,reverseDepthBuffer:S0,skinning:s.isSkinnedMesh===!0,morphTargets:e.morphAttributes.position!==void 0,morphNormals:e.morphAttributes.normal!==void 0,morphColors:e.morphAttributes.color!==void 0,morphTargetsCount:q0,morphTextureStride:C0,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:O.numPlanes,numClipIntersection:O.numIntersection,dithering:G.dithering,shadowMapEnabled:H.shadowMap.enabled&&l.length>0,shadowMapType:H.shadowMap.type,toneMapping:f1,decodeVideoTexture:m0&&G.map.isVideoTexture===!0&&s0.getTransfer(G.map.colorSpace)===A1,decodeVideoTextureEmissive:V0&&G.emissiveMap.isVideoTexture===!0&&s0.getTransfer(G.emissiveMap.colorSpace)===A1,premultipliedAlpha:G.premultipliedAlpha,doubleSided:G.side===_9,flipSided:G.side===f9,useDepthPacking:G.depthPacking>=0,depthPacking:G.depthPacking||0,index0AttributeName:G.index0AttributeName,extensionClipCullDistance:j0&&G.extensions.clipCullDistance===!0&&W.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(j0&&G.extensions.multiDraw===!0||d0)&&W.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:W.has("KHR_parallel_shader_compile"),customProgramCacheKey:G.customProgramCacheKey()};return u1.vertexUv1s=Y.has(1),u1.vertexUv2s=Y.has(2),u1.vertexUv3s=Y.has(3),Y.clear(),u1}function J(G){let P=[];if(G.shaderID)P.push(G.shaderID);else P.push(G.customVertexShaderID),P.push(G.customFragmentShaderID);if(G.defines!==void 0)for(let l in G.defines)P.push(l),P.push(G.defines[l]);if(G.isRawShaderMaterial===!1)f(P,G),N(P,G),P.push(H.outputColorSpace);return P.push(G.customProgramCacheKey),P.join()}function f(G,P){G.push(P.precision),G.push(P.outputColorSpace),G.push(P.envMapMode),G.push(P.envMapCubeUVHeight),G.push(P.mapUv),G.push(P.alphaMapUv),G.push(P.lightMapUv),G.push(P.aoMapUv),G.push(P.bumpMapUv),G.push(P.normalMapUv),G.push(P.displacementMapUv),G.push(P.emissiveMapUv),G.push(P.metalnessMapUv),G.push(P.roughnessMapUv),G.push(P.anisotropyMapUv),G.push(P.clearcoatMapUv),G.push(P.clearcoatNormalMapUv),G.push(P.clearcoatRoughnessMapUv),G.push(P.iridescenceMapUv),G.push(P.iridescenceThicknessMapUv),G.push(P.sheenColorMapUv),G.push(P.sheenRoughnessMapUv),G.push(P.specularMapUv),G.push(P.specularColorMapUv),G.push(P.specularIntensityMapUv),G.push(P.transmissionMapUv),G.push(P.thicknessMapUv),G.push(P.combine),G.push(P.fogExp2),G.push(P.sizeAttenuation),G.push(P.morphTargetsCount),G.push(P.morphAttributeCount),G.push(P.numDirLights),G.push(P.numPointLights),G.push(P.numSpotLights),G.push(P.numSpotLightMaps),G.push(P.numHemiLights),G.push(P.numRectAreaLights),G.push(P.numDirLightShadows),G.push(P.numPointLightShadows),G.push(P.numSpotLightShadows),G.push(P.numSpotLightShadowsWithMaps),G.push(P.numLightProbes),G.push(P.shadowMapType),G.push(P.toneMapping),G.push(P.numClippingPlanes),G.push(P.numClipIntersection),G.push(P.depthPacking)}function N(G,P){if(Z.disableAll(),P.supportsVertexTextures)Z.enable(0);if(P.instancing)Z.enable(1);if(P.instancingColor)Z.enable(2);if(P.instancingMorph)Z.enable(3);if(P.matcap)Z.enable(4);if(P.envMap)Z.enable(5);if(P.normalMapObjectSpace)Z.enable(6);if(P.normalMapTangentSpace)Z.enable(7);if(P.clearcoat)Z.enable(8);if(P.iridescence)Z.enable(9);if(P.alphaTest)Z.enable(10);if(P.vertexColors)Z.enable(11);if(P.vertexAlphas)Z.enable(12);if(P.vertexUv1s)Z.enable(13);if(P.vertexUv2s)Z.enable(14);if(P.vertexUv3s)Z.enable(15);if(P.vertexTangents)Z.enable(16);if(P.anisotropy)Z.enable(17);if(P.alphaHash)Z.enable(18);if(P.batching)Z.enable(19);if(P.dispersion)Z.enable(20);if(P.batchingColor)Z.enable(21);if(G.push(Z.mask),Z.disableAll(),P.fog)Z.enable(0);if(P.useFog)Z.enable(1);if(P.flatShading)Z.enable(2);if(P.logarithmicDepthBuffer)Z.enable(3);if(P.reverseDepthBuffer)Z.enable(4);if(P.skinning)Z.enable(5);if(P.morphTargets)Z.enable(6);if(P.morphNormals)Z.enable(7);if(P.morphColors)Z.enable(8);if(P.premultipliedAlpha)Z.enable(9);if(P.shadowMapEnabled)Z.enable(10);if(P.doubleSided)Z.enable(11);if(P.flipSided)Z.enable(12);if(P.useDepthPacking)Z.enable(13);if(P.dithering)Z.enable(14);if(P.transmission)Z.enable(15);if(P.sheen)Z.enable(16);if(P.opaque)Z.enable(17);if(P.pointsUvs)Z.enable(18);if(P.decodeVideoTexture)Z.enable(19);if(P.decodeVideoTextureEmissive)Z.enable(20);if(P.alphaToCoverage)Z.enable(21);G.push(Z.mask)}function z(G){let P=M[G.type],l;if(P){let n=K8[P];l=Ik.clone(n.uniforms)}else l=G.uniforms;return l}function S(G,P){let l;for(let n=0,s=k.length;n<s;n++){let m=k[n];if(m.cacheKey===P){l=m,++l.usedTimes;break}}if(l===void 0)l=new lV(H,P,G,A),k.push(l);return l}function B(G){if(--G.usedTimes===0){let P=k.indexOf(G);k[P]=k[k.length-1],k.pop(),G.destroy()}}function q(G){F.remove(G)}function u(){F.dispose()}return{getParameters:w,getProgramCacheKey:J,getUniforms:z,acquireProgram:S,releaseProgram:B,releaseShaderCache:q,programs:k,dispose:u}}function yV(){let H=new WeakMap;function E(O){return H.has(O)}function K(O){let Z=H.get(O);if(Z===void 0)Z={},H.set(O,Z);return Z}function W(O){H.delete(O)}function Q(O,Z,F){H.get(O)[Z]=F}function A(){H=new WeakMap}return{has:E,get:K,remove:W,update:Q,dispose:A}}function uV(H,E){if(H.groupOrder!==E.groupOrder)return H.groupOrder-E.groupOrder;else if(H.renderOrder!==E.renderOrder)return H.renderOrder-E.renderOrder;else if(H.material.id!==E.material.id)return H.material.id-E.material.id;else if(H.z!==E.z)return H.z-E.z;else return H.id-E.id}function HD(H,E){if(H.groupOrder!==E.groupOrder)return H.groupOrder-E.groupOrder;else if(H.renderOrder!==E.renderOrder)return H.renderOrder-E.renderOrder;else if(H.z!==E.z)return E.z-H.z;else return H.id-E.id}function ED(){let H=[],E=0,K=[],W=[],Q=[];function A(){E=0,K.length=0,W.length=0,Q.length=0}function O(X,D,U,M,L,w){let J=H[E];if(J===void 0)J={id:X.id,object:X,geometry:D,material:U,groupOrder:M,renderOrder:X.renderOrder,z:L,group:w},H[E]=J;else J.id=X.id,J.object=X,J.geometry=D,J.material=U,J.groupOrder=M,J.renderOrder=X.renderOrder,J.z=L,J.group=w;return E++,J}function Z(X,D,U,M,L,w){let J=O(X,D,U,M,L,w);if(U.transmission>0)W.push(J);else if(U.transparent===!0)Q.push(J);else K.push(J)}function F(X,D,U,M,L,w){let J=O(X,D,U,M,L,w);if(U.transmission>0)W.unshift(J);else if(U.transparent===!0)Q.unshift(J);else K.unshift(J)}function Y(X,D){if(K.length>1)K.sort(X||uV);if(W.length>1)W.sort(D||HD);if(Q.length>1)Q.sort(D||HD)}function k(){for(let X=E,D=H.length;X<D;X++){let U=H[X];if(U.id===null)break;U.id=null,U.object=null,U.geometry=null,U.material=null,U.group=null}}return{opaque:K,transmissive:W,transparent:Q,init:A,push:Z,unshift:F,finish:k,sort:Y}}function hV(){let H=new WeakMap;function E(W,Q){let A=H.get(W),O;if(A===void 0)O=new ED,H.set(W,[O]);else if(Q>=A.length)O=new ED,A.push(O);else O=A[Q];return O}function K(){H=new WeakMap}return{get:E,dispose:K}}function jV(){let H={};return{get:function(E){if(H[E.id]!==void 0)return H[E.id];let K;switch(E.type){case"DirectionalLight":K={direction:new h,color:new x0};break;case"SpotLight":K={position:new h,direction:new h,color:new x0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":K={position:new h,color:new x0,distance:0,decay:0};break;case"HemisphereLight":K={direction:new h,skyColor:new x0,groundColor:new x0};break;case"RectAreaLight":K={color:new x0,position:new h,halfWidth:new h,halfHeight:new h};break}return H[E.id]=K,K}}}function pV(){let H={};return{get:function(E){if(H[E.id]!==void 0)return H[E.id];let K;switch(E.type){case"DirectionalLight":K={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o0};break;case"SpotLight":K={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o0};break;case"PointLight":K={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o0,shadowCameraNear:1,shadowCameraFar:1000};break}return H[E.id]=K,K}}}var gV=0;function xV(H,E){return(E.castShadow?2:0)-(H.castShadow?2:0)+(E.map?1:0)-(H.map?1:0)}function nV(H){let E=new jV,K=pV(),W={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let Y=0;Y<9;Y++)W.probe.push(new h);let Q=new h,A=new F1,O=new F1;function Z(Y){let k=0,X=0,D=0;for(let G=0;G<9;G++)W.probe[G].set(0,0,0);let U=0,M=0,L=0,w=0,J=0,f=0,N=0,z=0,S=0,B=0,q=0;Y.sort(xV);for(let G=0,P=Y.length;G<P;G++){let l=Y[G],n=l.color,s=l.intensity,m=l.distance,e=l.shadow&&l.shadow.map?l.shadow.map.texture:null;if(l.isAmbientLight)k+=n.r*s,X+=n.g*s,D+=n.b*s;else if(l.isLightProbe){for(let d=0;d<9;d++)W.probe[d].addScaledVector(l.sh.coefficients[d],s);q++}else if(l.isDirectionalLight){let d=E.get(l);if(d.color.copy(l.color).multiplyScalar(l.intensity),l.castShadow){let _=l.shadow,b=K.get(l);b.shadowIntensity=_.intensity,b.shadowBias=_.bias,b.shadowNormalBias=_.normalBias,b.shadowRadius=_.radius,b.shadowMapSize=_.mapSize,W.directionalShadow[U]=b,W.directionalShadowMap[U]=e,W.directionalShadowMatrix[U]=l.shadow.matrix,f++}W.directional[U]=d,U++}else if(l.isSpotLight){let d=E.get(l);d.position.setFromMatrixPosition(l.matrixWorld),d.color.copy(n).multiplyScalar(s),d.distance=m,d.coneCos=Math.cos(l.angle),d.penumbraCos=Math.cos(l.angle*(1-l.penumbra)),d.decay=l.decay,W.spot[L]=d;let _=l.shadow;if(l.map){if(W.spotLightMap[S]=l.map,S++,_.updateMatrices(l),l.castShadow)B++}if(W.spotLightMatrix[L]=_.matrix,l.castShadow){let b=K.get(l);b.shadowIntensity=_.intensity,b.shadowBias=_.bias,b.shadowNormalBias=_.normalBias,b.shadowRadius=_.radius,b.shadowMapSize=_.mapSize,W.spotShadow[L]=b,W.spotShadowMap[L]=e,z++}L++}else if(l.isRectAreaLight){let d=E.get(l);d.color.copy(n).multiplyScalar(s),d.halfWidth.set(l.width*0.5,0,0),d.halfHeight.set(0,l.height*0.5,0),W.rectArea[w]=d,w++}else if(l.isPointLight){let d=E.get(l);if(d.color.copy(l.color).multiplyScalar(l.intensity),d.distance=l.distance,d.decay=l.decay,l.castShadow){let _=l.shadow,b=K.get(l);b.shadowIntensity=_.intensity,b.shadowBias=_.bias,b.shadowNormalBias=_.normalBias,b.shadowRadius=_.radius,b.shadowMapSize=_.mapSize,b.shadowCameraNear=_.camera.near,b.shadowCameraFar=_.camera.far,W.pointShadow[M]=b,W.pointShadowMap[M]=e,W.pointShadowMatrix[M]=l.shadow.matrix,N++}W.point[M]=d,M++}else if(l.isHemisphereLight){let d=E.get(l);d.skyColor.copy(l.color).multiplyScalar(s),d.groundColor.copy(l.groundColor).multiplyScalar(s),W.hemi[J]=d,J++}}if(w>0)if(H.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=O0.LTC_FLOAT_1,W.rectAreaLTC2=O0.LTC_FLOAT_2;else W.rectAreaLTC1=O0.LTC_HALF_1,W.rectAreaLTC2=O0.LTC_HALF_2;W.ambient[0]=k,W.ambient[1]=X,W.ambient[2]=D;let u=W.hash;if(u.directionalLength!==U||u.pointLength!==M||u.spotLength!==L||u.rectAreaLength!==w||u.hemiLength!==J||u.numDirectionalShadows!==f||u.numPointShadows!==N||u.numSpotShadows!==z||u.numSpotMaps!==S||u.numLightProbes!==q)W.directional.length=U,W.spot.length=L,W.rectArea.length=w,W.point.length=M,W.hemi.length=J,W.directionalShadow.length=f,W.directionalShadowMap.length=f,W.pointShadow.length=N,W.pointShadowMap.length=N,W.spotShadow.length=z,W.spotShadowMap.length=z,W.directionalShadowMatrix.length=f,W.pointShadowMatrix.length=N,W.spotLightMatrix.length=z+S-B,W.spotLightMap.length=S,W.numSpotLightShadowsWithMaps=B,W.numLightProbes=q,u.directionalLength=U,u.pointLength=M,u.spotLength=L,u.rectAreaLength=w,u.hemiLength=J,u.numDirectionalShadows=f,u.numPointShadows=N,u.numSpotShadows=z,u.numSpotMaps=S,u.numLightProbes=q,W.version=gV++}function F(Y,k){let X=0,D=0,U=0,M=0,L=0,w=k.matrixWorldInverse;for(let J=0,f=Y.length;J<f;J++){let N=Y[J];if(N.isDirectionalLight){let z=W.directional[X];z.direction.setFromMatrixPosition(N.matrixWorld),Q.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(Q),z.direction.transformDirection(w),X++}else if(N.isSpotLight){let z=W.spot[U];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(w),z.direction.setFromMatrixPosition(N.matrixWorld),Q.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(Q),z.direction.transformDirection(w),U++}else if(N.isRectAreaLight){let z=W.rectArea[M];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(w),O.identity(),A.copy(N.matrixWorld),A.premultiply(w),O.extractRotation(A),z.halfWidth.set(N.width*0.5,0,0),z.halfHeight.set(0,N.height*0.5,0),z.halfWidth.applyMatrix4(O),z.halfHeight.applyMatrix4(O),M++}else if(N.isPointLight){let z=W.point[D];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(w),D++}else if(N.isHemisphereLight){let z=W.hemi[L];z.direction.setFromMatrixPosition(N.matrixWorld),z.direction.transformDirection(w),L++}}}return{setup:Z,setupView:F,state:W}}function KD(H){let E=new nV(H),K=[],W=[];function Q(k){Y.camera=k,K.length=0,W.length=0}function A(k){K.push(k)}function O(k){W.push(k)}function Z(){E.setup(K)}function F(k){E.setupView(K,k)}let Y={lightsArray:K,shadowsArray:W,camera:null,lights:E,transmissionRenderTarget:{}};return{init:Q,state:Y,setupLights:Z,setupLightsView:F,pushLight:A,pushShadow:O}}function bV(H){let E=new WeakMap;function K(Q,A=0){let O=E.get(Q),Z;if(O===void 0)Z=new KD(H),E.set(Q,[Z]);else if(A>=O.length)Z=new KD(H),O.push(Z);else Z=O[A];return Z}function W(){E=new WeakMap}return{get:K,dispose:W}}var dV=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mV=`uniform sampler2D shadow_pass;
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
}`;function cV(H,E,K){let W=new QK,Q=new o0,A=new o0,O=new E1,Z=new TO({depthPacking:kk}),F=new vO,Y={},k=K.maxTextureSize,X={[S6]:f9,[f9]:S6,[_9]:_9},D=new E8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new o0},radius:{value:4}},vertexShader:dV,fragmentShader:mV}),U=D.clone();U.defines.HORIZONTAL_PASS=1;let M=new L9;M.setAttribute("position",new Y9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let L=new E9(M,D),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gA;let J=this.type;this.render=function(B,q,u){if(w.enabled===!1)return;if(w.autoUpdate===!1&&w.needsUpdate===!1)return;if(B.length===0)return;let G=H.getRenderTarget(),P=H.getActiveCubeFace(),l=H.getActiveMipmapLevel(),n=H.state;n.setBlending(a8),n.buffers.color.setClear(1,1,1,1),n.buffers.depth.setTest(!0),n.setScissorTest(!1);let s=J!==$9&&this.type===$9,m=J===$9&&this.type!==$9;for(let e=0,d=B.length;e<d;e++){let _=B[e],b=_.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",_,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;Q.copy(b.mapSize);let E0=b.getFrameExtents();if(Q.multiply(E0),A.copy(b.mapSize),Q.x>k||Q.y>k){if(Q.x>k)A.x=Math.floor(k/E0.x),Q.x=A.x*E0.x,b.mapSize.x=A.x;if(Q.y>k)A.y=Math.floor(k/E0.y),Q.y=A.y*E0.y,b.mapSize.y=A.y}if(b.map===null||s===!0||m===!0){let q0=this.type!==$9?{minFilter:T6,magFilter:T6}:{};if(b.map!==null)b.map.dispose();b.map=new P8(Q.x,Q.y,q0),b.map.texture.name=_.name+".shadowMap",b.camera.updateProjectionMatrix()}H.setRenderTarget(b.map),H.clear();let A0=b.getViewportCount();for(let q0=0;q0<A0;q0++){let C0=b.getViewport(q0);O.set(A.x*C0.x,A.y*C0.y,A.x*C0.z,A.y*C0.w),n.viewport(O),b.updateMatrices(_,q0),W=b.getFrustum(),z(q,u,b.camera,_,this.type)}if(b.isPointLightShadow!==!0&&this.type===$9)f(b,u);b.needsUpdate=!1}J=this.type,w.needsUpdate=!1,H.setRenderTarget(G,P,l)};function f(B,q){let u=E.update(L);if(D.defines.VSM_SAMPLES!==B.blurSamples)D.defines.VSM_SAMPLES=B.blurSamples,U.defines.VSM_SAMPLES=B.blurSamples,D.needsUpdate=!0,U.needsUpdate=!0;if(B.mapPass===null)B.mapPass=new P8(Q.x,Q.y);D.uniforms.shadow_pass.value=B.map.texture,D.uniforms.resolution.value=B.mapSize,D.uniforms.radius.value=B.radius,H.setRenderTarget(B.mapPass),H.clear(),H.renderBufferDirect(q,null,u,D,L,null),U.uniforms.shadow_pass.value=B.mapPass.texture,U.uniforms.resolution.value=B.mapSize,U.uniforms.radius.value=B.radius,H.setRenderTarget(B.map),H.clear(),H.renderBufferDirect(q,null,u,U,L,null)}function N(B,q,u,G){let P=null,l=u.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(l!==void 0)P=l;else if(P=u.isPointLight===!0?F:Z,H.localClippingEnabled&&q.clipShadows===!0&&Array.isArray(q.clippingPlanes)&&q.clippingPlanes.length!==0||q.displacementMap&&q.displacementScale!==0||q.alphaMap&&q.alphaTest>0||q.map&&q.alphaTest>0){let n=P.uuid,s=q.uuid,m=Y[n];if(m===void 0)m={},Y[n]=m;let e=m[s];if(e===void 0)e=P.clone(),m[s]=e,q.addEventListener("dispose",S);P=e}if(P.visible=q.visible,P.wireframe=q.wireframe,G===$9)P.side=q.shadowSide!==null?q.shadowSide:q.side;else P.side=q.shadowSide!==null?q.shadowSide:X[q.side];if(P.alphaMap=q.alphaMap,P.alphaTest=q.alphaTest,P.map=q.map,P.clipShadows=q.clipShadows,P.clippingPlanes=q.clippingPlanes,P.clipIntersection=q.clipIntersection,P.displacementMap=q.displacementMap,P.displacementScale=q.displacementScale,P.displacementBias=q.displacementBias,P.wireframeLinewidth=q.wireframeLinewidth,P.linewidth=q.linewidth,u.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let n=H.properties.get(P);n.light=u}return P}function z(B,q,u,G,P){if(B.visible===!1)return;if(B.layers.test(q.layers)&&(B.isMesh||B.isLine||B.isPoints)){if((B.castShadow||B.receiveShadow&&P===$9)&&(!B.frustumCulled||W.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,B.matrixWorld);let s=E.update(B),m=B.material;if(Array.isArray(m)){let e=s.groups;for(let d=0,_=e.length;d<_;d++){let b=e[d],E0=m[b.materialIndex];if(E0&&E0.visible){let A0=N(B,E0,G,P);B.onBeforeShadow(H,B,q,u,s,A0,b),H.renderBufferDirect(u,null,s,A0,B,b),B.onAfterShadow(H,B,q,u,s,A0,b)}}}else if(m.visible){let e=N(B,m,G,P);B.onBeforeShadow(H,B,q,u,s,e,null),H.renderBufferDirect(u,null,s,e,B,null),B.onAfterShadow(H,B,q,u,s,e,null)}}}let n=B.children;for(let s=0,m=n.length;s<m;s++)z(n[s],q,u,G,P)}function S(B){B.target.removeEventListener("dispose",S);for(let u in Y){let G=Y[u],P=B.target.uuid;if(P in G)G[P].dispose(),delete G[P]}}}var iV={[A5]:O5,[Z5]:J5,[F5]:X5,[tE]:Y5,[O5]:A5,[J5]:Z5,[X5]:F5,[Y5]:tE};function sV(H,E){function K(){let T=!1,W0=new E1,o=null,r=new E1(0,0,0,0);return{setMask:function(X0){if(o!==X0&&!T)H.colorMask(X0,X0,X0,X0),o=X0},setLocked:function(X0){T=X0},setClear:function(X0,J0,j0,f1,u1){if(u1===!0)X0*=f1,J0*=f1,j0*=f1;if(W0.set(X0,J0,j0,f1),r.equals(W0)===!1)H.clearColor(X0,J0,j0,f1),r.copy(W0)},reset:function(){T=!1,o=null,r.set(-1,0,0,0)}}}function W(){let T=!1,W0=!1,o=null,r=null,X0=null;return{setReversed:function(J0){if(W0!==J0){let j0=E.get("EXT_clip_control");if(W0)j0.clipControlEXT(j0.LOWER_LEFT_EXT,j0.ZERO_TO_ONE_EXT);else j0.clipControlEXT(j0.LOWER_LEFT_EXT,j0.NEGATIVE_ONE_TO_ONE_EXT);let f1=X0;X0=null,this.setClear(f1)}W0=J0},getReversed:function(){return W0},setTest:function(J0){if(J0)Z0(H.DEPTH_TEST);else S0(H.DEPTH_TEST)},setMask:function(J0){if(o!==J0&&!T)H.depthMask(J0),o=J0},setFunc:function(J0){if(W0)J0=iV[J0];if(r!==J0){switch(J0){case A5:H.depthFunc(H.NEVER);break;case O5:H.depthFunc(H.ALWAYS);break;case Z5:H.depthFunc(H.LESS);break;case tE:H.depthFunc(H.LEQUAL);break;case F5:H.depthFunc(H.EQUAL);break;case Y5:H.depthFunc(H.GEQUAL);break;case J5:H.depthFunc(H.GREATER);break;case X5:H.depthFunc(H.NOTEQUAL);break;default:H.depthFunc(H.LEQUAL)}r=J0}},setLocked:function(J0){T=J0},setClear:function(J0){if(X0!==J0){if(W0)J0=1-J0;H.clearDepth(J0),X0=J0}},reset:function(){T=!1,o=null,r=null,X0=null,W0=!1}}}function Q(){let T=!1,W0=null,o=null,r=null,X0=null,J0=null,j0=null,f1=null,u1=null;return{setTest:function(a0){if(!T)if(a0)Z0(H.STENCIL_TEST);else S0(H.STENCIL_TEST)},setMask:function(a0){if(W0!==a0&&!T)H.stencilMask(a0),W0=a0},setFunc:function(a0,W8,i9){if(o!==a0||r!==W8||X0!==i9)H.stencilFunc(a0,W8,i9),o=a0,r=W8,X0=i9},setOp:function(a0,W8,i9){if(J0!==a0||j0!==W8||f1!==i9)H.stencilOp(a0,W8,i9),J0=a0,j0=W8,f1=i9},setLocked:function(a0){T=a0},setClear:function(a0){if(u1!==a0)H.clearStencil(a0),u1=a0},reset:function(){T=!1,W0=null,o=null,r=null,X0=null,J0=null,j0=null,f1=null,u1=null}}}let A=new K,O=new W,Z=new Q,F=new WeakMap,Y=new WeakMap,k={},X={},D=new WeakMap,U=[],M=null,L=!1,w=null,J=null,f=null,N=null,z=null,S=null,B=null,q=new x0(0,0,0),u=0,G=!1,P=null,l=null,n=null,s=null,m=null,e=H.getParameter(H.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,_=0,b=H.getParameter(H.VERSION);if(b.indexOf("WebGL")!==-1)_=parseFloat(/^WebGL (\d)/.exec(b)[1]),d=_>=1;else if(b.indexOf("OpenGL ES")!==-1)_=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),d=_>=2;let E0=null,A0={},q0=H.getParameter(H.SCISSOR_BOX),C0=H.getParameter(H.VIEWPORT),c=new E1().fromArray(q0),K0=new E1().fromArray(C0);function R0(T,W0,o,r){let X0=new Uint8Array(4),J0=H.createTexture();H.bindTexture(T,J0),H.texParameteri(T,H.TEXTURE_MIN_FILTER,H.NEAREST),H.texParameteri(T,H.TEXTURE_MAG_FILTER,H.NEAREST);for(let j0=0;j0<o;j0++)if(T===H.TEXTURE_3D||T===H.TEXTURE_2D_ARRAY)H.texImage3D(W0,0,H.RGBA,1,1,r,0,H.RGBA,H.UNSIGNED_BYTE,X0);else H.texImage2D(W0+j0,0,H.RGBA,1,1,0,H.RGBA,H.UNSIGNED_BYTE,X0);return J0}let P0={};P0[H.TEXTURE_2D]=R0(H.TEXTURE_2D,H.TEXTURE_2D,1),P0[H.TEXTURE_CUBE_MAP]=R0(H.TEXTURE_CUBE_MAP,H.TEXTURE_CUBE_MAP_POSITIVE_X,6),P0[H.TEXTURE_2D_ARRAY]=R0(H.TEXTURE_2D_ARRAY,H.TEXTURE_2D_ARRAY,1,1),P0[H.TEXTURE_3D]=R0(H.TEXTURE_3D,H.TEXTURE_3D,1,1),A.setClear(0,0,0,1),O.setClear(1),Z.setClear(0),Z0(H.DEPTH_TEST),O.setFunc(tE),W1(!1),N0(pA),Z0(H.CULL_FACE),y1(a8);function Z0(T){if(k[T]!==!0)H.enable(T),k[T]=!0}function S0(T){if(k[T]!==!1)H.disable(T),k[T]=!1}function t0(T,W0){if(X[T]!==W0){if(H.bindFramebuffer(T,W0),X[T]=W0,T===H.DRAW_FRAMEBUFFER)X[H.FRAMEBUFFER]=W0;if(T===H.FRAMEBUFFER)X[H.DRAW_FRAMEBUFFER]=W0;return!0}return!1}function d0(T,W0){let o=U,r=!1;if(T){if(o=D.get(W0),o===void 0)o=[],D.set(W0,o);let X0=T.textures;if(o.length!==X0.length||o[0]!==H.COLOR_ATTACHMENT0){for(let J0=0,j0=X0.length;J0<j0;J0++)o[J0]=H.COLOR_ATTACHMENT0+J0;o.length=X0.length,r=!0}}else if(o[0]!==H.BACK)o[0]=H.BACK,r=!0;if(r)H.drawBuffers(o)}function m0(T){if(M!==T)return H.useProgram(T),M=T,!0;return!1}let v1={[I6]:H.FUNC_ADD,[GX]:H.FUNC_SUBTRACT,[zX]:H.FUNC_REVERSE_SUBTRACT};v1[BX]=H.MIN,v1[qX]=H.MAX;let I={[CX]:H.ZERO,[SX]:H.ONE,[IX]:H.SRC_COLOR,[TX]:H.SRC_ALPHA,[pX]:H.SRC_ALPHA_SATURATE,[hX]:H.DST_COLOR,[yX]:H.DST_ALPHA,[lX]:H.ONE_MINUS_SRC_COLOR,[vX]:H.ONE_MINUS_SRC_ALPHA,[jX]:H.ONE_MINUS_DST_COLOR,[uX]:H.ONE_MINUS_DST_ALPHA,[gX]:H.CONSTANT_COLOR,[xX]:H.ONE_MINUS_CONSTANT_COLOR,[nX]:H.CONSTANT_ALPHA,[bX]:H.ONE_MINUS_CONSTANT_ALPHA};function y1(T,W0,o,r,X0,J0,j0,f1,u1,a0){if(T===a8){if(L===!0)S0(H.BLEND),L=!1;return}if(L===!1)Z0(H.BLEND),L=!0;if(T!==PX){if(T!==w||a0!==G){if(J!==I6||z!==I6)H.blendEquation(H.FUNC_ADD),J=I6,z=I6;if(a0)switch(T){case rE:H.blendFuncSeparate(H.ONE,H.ONE_MINUS_SRC_ALPHA,H.ONE,H.ONE_MINUS_SRC_ALPHA);break;case xA:H.blendFunc(H.ONE,H.ONE);break;case nA:H.blendFuncSeparate(H.ZERO,H.ONE_MINUS_SRC_COLOR,H.ZERO,H.ONE);break;case bA:H.blendFuncSeparate(H.ZERO,H.SRC_COLOR,H.ZERO,H.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case rE:H.blendFuncSeparate(H.SRC_ALPHA,H.ONE_MINUS_SRC_ALPHA,H.ONE,H.ONE_MINUS_SRC_ALPHA);break;case xA:H.blendFunc(H.SRC_ALPHA,H.ONE);break;case nA:H.blendFuncSeparate(H.ZERO,H.ONE_MINUS_SRC_COLOR,H.ZERO,H.ONE);break;case bA:H.blendFunc(H.ZERO,H.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}f=null,N=null,S=null,B=null,q.set(0,0,0),u=0,w=T,G=a0}return}if(X0=X0||W0,J0=J0||o,j0=j0||r,W0!==J||X0!==z)H.blendEquationSeparate(v1[W0],v1[X0]),J=W0,z=X0;if(o!==f||r!==N||J0!==S||j0!==B)H.blendFuncSeparate(I[o],I[r],I[J0],I[j0]),f=o,N=r,S=J0,B=j0;if(f1.equals(q)===!1||u1!==u)H.blendColor(f1.r,f1.g,f1.b,u1),q.copy(f1),u=u1;w=T,G=!1}function K1(T,W0){T.side===_9?S0(H.CULL_FACE):Z0(H.CULL_FACE);let o=T.side===f9;if(W0)o=!o;W1(o),T.blending===rE&&T.transparent===!1?y1(a8):y1(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),O.setFunc(T.depthFunc),O.setTest(T.depthTest),O.setMask(T.depthWrite),A.setMask(T.colorWrite);let r=T.stencilWrite;if(Z.setTest(r),r)Z.setMask(T.stencilWriteMask),Z.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),Z.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass);V0(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Z0(H.SAMPLE_ALPHA_TO_COVERAGE):S0(H.SAMPLE_ALPHA_TO_COVERAGE)}function W1(T){if(P!==T){if(T)H.frontFace(H.CW);else H.frontFace(H.CCW);P=T}}function N0(T){if(T!==MX){if(Z0(H.CULL_FACE),T!==l)if(T===pA)H.cullFace(H.BACK);else if(T===RX)H.cullFace(H.FRONT);else H.cullFace(H.FRONT_AND_BACK)}else S0(H.CULL_FACE);l=T}function U1(T){if(T!==n){if(d)H.lineWidth(T);n=T}}function V0(T,W0,o){if(T){if(Z0(H.POLYGON_OFFSET_FILL),s!==W0||m!==o)H.polygonOffset(W0,o),s=W0,m=o}else S0(H.POLYGON_OFFSET_FILL)}function v0(T){if(T)Z0(H.SCISSOR_TEST);else S0(H.SCISSOR_TEST)}function C(T){if(T===void 0)T=H.TEXTURE0+e-1;if(E0!==T)H.activeTexture(T),E0=T}function R(T,W0,o){if(o===void 0)if(E0===null)o=H.TEXTURE0+e-1;else o=E0;let r=A0[o];if(r===void 0)r={type:void 0,texture:void 0},A0[o]=r;if(r.type!==T||r.texture!==W0){if(E0!==o)H.activeTexture(o),E0=o;H.bindTexture(T,W0||P0[T]),r.type=T,r.texture=W0}}function j(){let T=A0[E0];if(T!==void 0&&T.type!==void 0)H.bindTexture(T.type,null),T.type=void 0,T.texture=void 0}function t(){try{H.compressedTexImage2D.apply(H,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function a(){try{H.compressedTexImage3D.apply(H,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function i(){try{H.texSubImage2D.apply(H,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function B0(){try{H.texSubImage3D.apply(H,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function F0(){try{H.compressedTexSubImage2D.apply(H,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function f0(){try{H.compressedTexSubImage3D.apply(H,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function u0(){try{H.texStorage2D.apply(H,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Q0(){try{H.texStorage3D.apply(H,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function k0(){try{H.texImage2D.apply(H,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function n0(){try{H.texImage3D.apply(H,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function I0(T){if(c.equals(T)===!1)H.scissor(T.x,T.y,T.z,T.w),c.copy(T)}function L0(T){if(K0.equals(T)===!1)H.viewport(T.x,T.y,T.z,T.w),K0.copy(T)}function h0(T,W0){let o=Y.get(W0);if(o===void 0)o=new WeakMap,Y.set(W0,o);let r=o.get(T);if(r===void 0)r=H.getUniformBlockIndex(W0,T.name),o.set(T,r)}function g0(T,W0){let r=Y.get(W0).get(T);if(F.get(W0)!==r)H.uniformBlockBinding(W0,r,T.__bindingPointIndex),F.set(W0,r)}function k1(){H.disable(H.BLEND),H.disable(H.CULL_FACE),H.disable(H.DEPTH_TEST),H.disable(H.POLYGON_OFFSET_FILL),H.disable(H.SCISSOR_TEST),H.disable(H.STENCIL_TEST),H.disable(H.SAMPLE_ALPHA_TO_COVERAGE),H.blendEquation(H.FUNC_ADD),H.blendFunc(H.ONE,H.ZERO),H.blendFuncSeparate(H.ONE,H.ZERO,H.ONE,H.ZERO),H.blendColor(0,0,0,0),H.colorMask(!0,!0,!0,!0),H.clearColor(0,0,0,0),H.depthMask(!0),H.depthFunc(H.LESS),O.setReversed(!1),H.clearDepth(1),H.stencilMask(4294967295),H.stencilFunc(H.ALWAYS,0,4294967295),H.stencilOp(H.KEEP,H.KEEP,H.KEEP),H.clearStencil(0),H.cullFace(H.BACK),H.frontFace(H.CCW),H.polygonOffset(0,0),H.activeTexture(H.TEXTURE0),H.bindFramebuffer(H.FRAMEBUFFER,null),H.bindFramebuffer(H.DRAW_FRAMEBUFFER,null),H.bindFramebuffer(H.READ_FRAMEBUFFER,null),H.useProgram(null),H.lineWidth(1),H.scissor(0,0,H.canvas.width,H.canvas.height),H.viewport(0,0,H.canvas.width,H.canvas.height),k={},E0=null,A0={},X={},D=new WeakMap,U=[],M=null,L=!1,w=null,J=null,f=null,N=null,z=null,S=null,B=null,q=new x0(0,0,0),u=0,G=!1,P=null,l=null,n=null,s=null,m=null,c.set(0,0,H.canvas.width,H.canvas.height),K0.set(0,0,H.canvas.width,H.canvas.height),A.reset(),O.reset(),Z.reset()}return{buffers:{color:A,depth:O,stencil:Z},enable:Z0,disable:S0,bindFramebuffer:t0,drawBuffers:d0,useProgram:m0,setBlending:y1,setMaterial:K1,setFlipSided:W1,setCullFace:N0,setLineWidth:U1,setPolygonOffset:V0,setScissorTest:v0,activeTexture:C,bindTexture:R,unbindTexture:j,compressedTexImage2D:t,compressedTexImage3D:a,texImage2D:k0,texImage3D:n0,updateUBOMapping:h0,uniformBlockBinding:g0,texStorage2D:u0,texStorage3D:Q0,texSubImage2D:i,texSubImage3D:B0,compressedTexSubImage2D:F0,compressedTexSubImage3D:f0,scissor:I0,viewport:L0,reset:k1}}function oV(H,E,K,W,Q,A,O){let Z=E.has("WEBGL_multisampled_render_to_texture")?E.get("WEBGL_multisampled_render_to_texture"):null,F=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),Y=new o0,k=new WeakMap,X,D=new WeakMap,U=!1;try{U=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function M(C,R){return U?new OffscreenCanvas(C,R):oE("canvas")}function L(C,R,j){let t=1,a=v0(C);if(a.width>j||a.height>j)t=j/Math.max(a.width,a.height);if(t<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let i=Math.floor(t*a.width),B0=Math.floor(t*a.height);if(X===void 0)X=M(i,B0);let F0=R?M(i,B0):X;return F0.width=i,F0.height=B0,F0.getContext("2d").drawImage(C,0,0,i,B0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+i+"x"+B0+")."),F0}else{if("data"in C)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");return C}return C}function w(C){return C.generateMipmaps}function J(C){H.generateMipmap(C)}function f(C){if(C.isWebGLCubeRenderTarget)return H.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return H.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return H.TEXTURE_2D_ARRAY;return H.TEXTURE_2D}function N(C,R,j,t,a=!1){if(C!==null){if(H[C]!==void 0)return H[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let i=R;if(R===H.RED){if(j===H.FLOAT)i=H.R32F;if(j===H.HALF_FLOAT)i=H.R16F;if(j===H.UNSIGNED_BYTE)i=H.R8}if(R===H.RED_INTEGER){if(j===H.UNSIGNED_BYTE)i=H.R8UI;if(j===H.UNSIGNED_SHORT)i=H.R16UI;if(j===H.UNSIGNED_INT)i=H.R32UI;if(j===H.BYTE)i=H.R8I;if(j===H.SHORT)i=H.R16I;if(j===H.INT)i=H.R32I}if(R===H.RG){if(j===H.FLOAT)i=H.RG32F;if(j===H.HALF_FLOAT)i=H.RG16F;if(j===H.UNSIGNED_BYTE)i=H.RG8}if(R===H.RG_INTEGER){if(j===H.UNSIGNED_BYTE)i=H.RG8UI;if(j===H.UNSIGNED_SHORT)i=H.RG16UI;if(j===H.UNSIGNED_INT)i=H.RG32UI;if(j===H.BYTE)i=H.RG8I;if(j===H.SHORT)i=H.RG16I;if(j===H.INT)i=H.RG32I}if(R===H.RGB_INTEGER){if(j===H.UNSIGNED_BYTE)i=H.RGB8UI;if(j===H.UNSIGNED_SHORT)i=H.RGB16UI;if(j===H.UNSIGNED_INT)i=H.RGB32UI;if(j===H.BYTE)i=H.RGB8I;if(j===H.SHORT)i=H.RGB16I;if(j===H.INT)i=H.RGB32I}if(R===H.RGBA_INTEGER){if(j===H.UNSIGNED_BYTE)i=H.RGBA8UI;if(j===H.UNSIGNED_SHORT)i=H.RGBA16UI;if(j===H.UNSIGNED_INT)i=H.RGBA32UI;if(j===H.BYTE)i=H.RGBA8I;if(j===H.SHORT)i=H.RGBA16I;if(j===H.INT)i=H.RGBA32I}if(R===H.RGB){if(j===H.UNSIGNED_INT_5_9_9_9_REV)i=H.RGB9_E5}if(R===H.RGBA){let B0=a?RO:s0.getTransfer(t);if(j===H.FLOAT)i=H.RGBA32F;if(j===H.HALF_FLOAT)i=H.RGBA16F;if(j===H.UNSIGNED_BYTE)i=B0===A1?H.SRGB8_ALPHA8:H.RGBA8;if(j===H.UNSIGNED_SHORT_4_4_4_4)i=H.RGBA4;if(j===H.UNSIGNED_SHORT_5_5_5_1)i=H.RGB5_A1}if(i===H.R16F||i===H.R32F||i===H.RG16F||i===H.RG32F||i===H.RGBA16F||i===H.RGBA32F)E.get("EXT_color_buffer_float");return i}function z(C,R){let j;if(C){if(R===null||R===y6||R===u6)j=H.DEPTH24_STENCIL8;else if(R===$8)j=H.DEPTH32F_STENCIL8;else if(R===$E)j=H.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===y6||R===u6)j=H.DEPTH_COMPONENT24;else if(R===$8)j=H.DEPTH_COMPONENT32F;else if(R===$E)j=H.DEPTH_COMPONENT16;return j}function S(C,R){if(w(C)===!0||C.isFramebufferTexture&&C.minFilter!==T6&&C.minFilter!==qH)return Math.log2(Math.max(R.width,R.height))+1;else if(C.mipmaps!==void 0&&C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return R.mipmaps.length;else return 1}function B(C){let R=C.target;if(R.removeEventListener("dispose",B),u(R),R.isVideoTexture)k.delete(R)}function q(C){let R=C.target;R.removeEventListener("dispose",q),P(R)}function u(C){let R=W.get(C);if(R.__webglInit===void 0)return;let j=C.source,t=D.get(j);if(t){let a=t[R.__cacheKey];if(a.usedTimes--,a.usedTimes===0)G(C);if(Object.keys(t).length===0)D.delete(j)}W.remove(C)}function G(C){let R=W.get(C);H.deleteTexture(R.__webglTexture);let j=C.source,t=D.get(j);delete t[R.__cacheKey],O.memory.textures--}function P(C){let R=W.get(C);if(C.depthTexture)C.depthTexture.dispose(),W.remove(C.depthTexture);if(C.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(R.__webglFramebuffer[t]))for(let a=0;a<R.__webglFramebuffer[t].length;a++)H.deleteFramebuffer(R.__webglFramebuffer[t][a]);else H.deleteFramebuffer(R.__webglFramebuffer[t]);if(R.__webglDepthbuffer)H.deleteRenderbuffer(R.__webglDepthbuffer[t])}else{if(Array.isArray(R.__webglFramebuffer))for(let t=0;t<R.__webglFramebuffer.length;t++)H.deleteFramebuffer(R.__webglFramebuffer[t]);else H.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)H.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)H.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let t=0;t<R.__webglColorRenderbuffer.length;t++)if(R.__webglColorRenderbuffer[t])H.deleteRenderbuffer(R.__webglColorRenderbuffer[t])}if(R.__webglDepthRenderbuffer)H.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let j=C.textures;for(let t=0,a=j.length;t<a;t++){let i=W.get(j[t]);if(i.__webglTexture)H.deleteTexture(i.__webglTexture),O.memory.textures--;W.remove(j[t])}W.remove(C)}let l=0;function n(){l=0}function s(){let C=l;if(C>=Q.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+Q.maxTextures);return l+=1,C}function m(C){let R=[];return R.push(C.wrapS),R.push(C.wrapT),R.push(C.wrapR||0),R.push(C.magFilter),R.push(C.minFilter),R.push(C.anisotropy),R.push(C.internalFormat),R.push(C.format),R.push(C.type),R.push(C.generateMipmaps),R.push(C.premultiplyAlpha),R.push(C.flipY),R.push(C.unpackAlignment),R.push(C.colorSpace),R.join()}function e(C,R){let j=W.get(C);if(C.isVideoTexture)U1(C);if(C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){let t=C.image;if(t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K0(j,C,R);return}}K.bindTexture(H.TEXTURE_2D,j.__webglTexture,H.TEXTURE0+R)}function d(C,R){let j=W.get(C);if(C.version>0&&j.__version!==C.version){K0(j,C,R);return}K.bindTexture(H.TEXTURE_2D_ARRAY,j.__webglTexture,H.TEXTURE0+R)}function _(C,R){let j=W.get(C);if(C.version>0&&j.__version!==C.version){K0(j,C,R);return}K.bindTexture(H.TEXTURE_3D,j.__webglTexture,H.TEXTURE0+R)}function b(C,R){let j=W.get(C);if(C.version>0&&j.__version!==C.version){R0(j,C,R);return}K.bindTexture(H.TEXTURE_CUBE_MAP,j.__webglTexture,H.TEXTURE0+R)}let E0={[$X]:H.REPEAT,[_X]:H.CLAMP_TO_EDGE,[Hk]:H.MIRRORED_REPEAT},A0={[T6]:H.NEAREST,[Ek]:H.NEAREST_MIPMAP_NEAREST,[eE]:H.NEAREST_MIPMAP_LINEAR,[qH]:H.LINEAR,[w5]:H.LINEAR_MIPMAP_NEAREST,[v6]:H.LINEAR_MIPMAP_LINEAR},q0={[Uk]:H.NEVER,[Pk]:H.ALWAYS,[fk]:H.LESS,[VO]:H.LEQUAL,[Lk]:H.EQUAL,[Vk]:H.GEQUAL,[Mk]:H.GREATER,[Rk]:H.NOTEQUAL};function C0(C,R){if(R.type===$8&&E.has("OES_texture_float_linear")===!1&&(R.magFilter===qH||R.magFilter===w5||R.magFilter===eE||R.magFilter===v6||R.minFilter===qH||R.minFilter===w5||R.minFilter===eE||R.minFilter===v6))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(H.texParameteri(C,H.TEXTURE_WRAP_S,E0[R.wrapS]),H.texParameteri(C,H.TEXTURE_WRAP_T,E0[R.wrapT]),C===H.TEXTURE_3D||C===H.TEXTURE_2D_ARRAY)H.texParameteri(C,H.TEXTURE_WRAP_R,E0[R.wrapR]);if(H.texParameteri(C,H.TEXTURE_MAG_FILTER,A0[R.magFilter]),H.texParameteri(C,H.TEXTURE_MIN_FILTER,A0[R.minFilter]),R.compareFunction)H.texParameteri(C,H.TEXTURE_COMPARE_MODE,H.COMPARE_REF_TO_TEXTURE),H.texParameteri(C,H.TEXTURE_COMPARE_FUNC,q0[R.compareFunction]);if(E.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===T6)return;if(R.minFilter!==eE&&R.minFilter!==v6)return;if(R.type===$8&&E.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||W.get(R).__currentAnisotropy){let j=E.get("EXT_texture_filter_anisotropic");H.texParameterf(C,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,Q.getMaxAnisotropy())),W.get(R).__currentAnisotropy=R.anisotropy}}}function c(C,R){let j=!1;if(C.__webglInit===void 0)C.__webglInit=!0,R.addEventListener("dispose",B);let t=R.source,a=D.get(t);if(a===void 0)a={},D.set(t,a);let i=m(R);if(i!==C.__cacheKey){if(a[i]===void 0)a[i]={texture:H.createTexture(),usedTimes:0},O.memory.textures++,j=!0;a[i].usedTimes++;let B0=a[C.__cacheKey];if(B0!==void 0){if(a[C.__cacheKey].usedTimes--,B0.usedTimes===0)G(R)}C.__cacheKey=i,C.__webglTexture=a[i].texture}return j}function K0(C,R,j){let t=H.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)t=H.TEXTURE_2D_ARRAY;if(R.isData3DTexture)t=H.TEXTURE_3D;let a=c(C,R),i=R.source;K.bindTexture(t,C.__webglTexture,H.TEXTURE0+j);let B0=W.get(i);if(i.version!==B0.__version||a===!0){K.activeTexture(H.TEXTURE0+j);let F0=s0.getPrimaries(s0.workingColorSpace),f0=R.colorSpace===CH?null:s0.getPrimaries(R.colorSpace),u0=R.colorSpace===CH||F0===f0?H.NONE:H.BROWSER_DEFAULT_WEBGL;H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,R.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,R.unpackAlignment),H.pixelStorei(H.UNPACK_COLORSPACE_CONVERSION_WEBGL,u0);let Q0=L(R.image,!1,Q.maxTextureSize);Q0=V0(R,Q0);let k0=A.convert(R.format,R.colorSpace),n0=A.convert(R.type),I0=N(R.internalFormat,k0,n0,R.colorSpace,R.isVideoTexture);C0(t,R);let L0,h0=R.mipmaps,g0=R.isVideoTexture!==!0,k1=B0.__version===void 0||a===!0,T=i.dataReady,W0=S(R,Q0);if(R.isDepthTexture){if(I0=z(R.format===HK,R.type),k1)if(g0)K.texStorage2D(H.TEXTURE_2D,1,I0,Q0.width,Q0.height);else K.texImage2D(H.TEXTURE_2D,0,I0,Q0.width,Q0.height,0,k0,n0,null)}else if(R.isDataTexture)if(h0.length>0){if(g0&&k1)K.texStorage2D(H.TEXTURE_2D,W0,I0,h0[0].width,h0[0].height);for(let o=0,r=h0.length;o<r;o++)if(L0=h0[o],g0){if(T)K.texSubImage2D(H.TEXTURE_2D,o,0,0,L0.width,L0.height,k0,n0,L0.data)}else K.texImage2D(H.TEXTURE_2D,o,I0,L0.width,L0.height,0,k0,n0,L0.data);R.generateMipmaps=!1}else if(g0){if(k1)K.texStorage2D(H.TEXTURE_2D,W0,I0,Q0.width,Q0.height);if(T)K.texSubImage2D(H.TEXTURE_2D,0,0,0,Q0.width,Q0.height,k0,n0,Q0.data)}else K.texImage2D(H.TEXTURE_2D,0,I0,Q0.width,Q0.height,0,k0,n0,Q0.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(g0&&k1)K.texStorage3D(H.TEXTURE_2D_ARRAY,W0,I0,h0[0].width,h0[0].height,Q0.depth);for(let o=0,r=h0.length;o<r;o++)if(L0=h0[o],R.format!==H8)if(k0!==null)if(g0){if(T)if(R.layerUpdates.size>0){let X0=sO(L0.width,L0.height,R.format,R.type);for(let J0 of R.layerUpdates){let j0=L0.data.subarray(J0*X0/L0.data.BYTES_PER_ELEMENT,(J0+1)*X0/L0.data.BYTES_PER_ELEMENT);K.compressedTexSubImage3D(H.TEXTURE_2D_ARRAY,o,0,0,J0,L0.width,L0.height,1,k0,j0)}R.clearLayerUpdates()}else K.compressedTexSubImage3D(H.TEXTURE_2D_ARRAY,o,0,0,0,L0.width,L0.height,Q0.depth,k0,L0.data)}else K.compressedTexImage3D(H.TEXTURE_2D_ARRAY,o,I0,L0.width,L0.height,Q0.depth,0,L0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(g0){if(T)K.texSubImage3D(H.TEXTURE_2D_ARRAY,o,0,0,0,L0.width,L0.height,Q0.depth,k0,n0,L0.data)}else K.texImage3D(H.TEXTURE_2D_ARRAY,o,I0,L0.width,L0.height,Q0.depth,0,k0,n0,L0.data)}else{if(g0&&k1)K.texStorage2D(H.TEXTURE_2D,W0,I0,h0[0].width,h0[0].height);for(let o=0,r=h0.length;o<r;o++)if(L0=h0[o],R.format!==H8)if(k0!==null)if(g0){if(T)K.compressedTexSubImage2D(H.TEXTURE_2D,o,0,0,L0.width,L0.height,k0,L0.data)}else K.compressedTexImage2D(H.TEXTURE_2D,o,I0,L0.width,L0.height,0,L0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(g0){if(T)K.texSubImage2D(H.TEXTURE_2D,o,0,0,L0.width,L0.height,k0,n0,L0.data)}else K.texImage2D(H.TEXTURE_2D,o,I0,L0.width,L0.height,0,k0,n0,L0.data)}else if(R.isDataArrayTexture)if(g0){if(k1)K.texStorage3D(H.TEXTURE_2D_ARRAY,W0,I0,Q0.width,Q0.height,Q0.depth);if(T)if(R.layerUpdates.size>0){let o=sO(Q0.width,Q0.height,R.format,R.type);for(let r of R.layerUpdates){let X0=Q0.data.subarray(r*o/Q0.data.BYTES_PER_ELEMENT,(r+1)*o/Q0.data.BYTES_PER_ELEMENT);K.texSubImage3D(H.TEXTURE_2D_ARRAY,0,0,0,r,Q0.width,Q0.height,1,k0,n0,X0)}R.clearLayerUpdates()}else K.texSubImage3D(H.TEXTURE_2D_ARRAY,0,0,0,0,Q0.width,Q0.height,Q0.depth,k0,n0,Q0.data)}else K.texImage3D(H.TEXTURE_2D_ARRAY,0,I0,Q0.width,Q0.height,Q0.depth,0,k0,n0,Q0.data);else if(R.isData3DTexture)if(g0){if(k1)K.texStorage3D(H.TEXTURE_3D,W0,I0,Q0.width,Q0.height,Q0.depth);if(T)K.texSubImage3D(H.TEXTURE_3D,0,0,0,0,Q0.width,Q0.height,Q0.depth,k0,n0,Q0.data)}else K.texImage3D(H.TEXTURE_3D,0,I0,Q0.width,Q0.height,Q0.depth,0,k0,n0,Q0.data);else if(R.isFramebufferTexture){if(k1)if(g0)K.texStorage2D(H.TEXTURE_2D,W0,I0,Q0.width,Q0.height);else{let{width:o,height:r}=Q0;for(let X0=0;X0<W0;X0++)K.texImage2D(H.TEXTURE_2D,X0,I0,o,r,0,k0,n0,null),o>>=1,r>>=1}}else if(h0.length>0){if(g0&&k1){let o=v0(h0[0]);K.texStorage2D(H.TEXTURE_2D,W0,I0,o.width,o.height)}for(let o=0,r=h0.length;o<r;o++)if(L0=h0[o],g0){if(T)K.texSubImage2D(H.TEXTURE_2D,o,0,0,k0,n0,L0)}else K.texImage2D(H.TEXTURE_2D,o,I0,k0,n0,L0);R.generateMipmaps=!1}else if(g0){if(k1){let o=v0(Q0);K.texStorage2D(H.TEXTURE_2D,W0,I0,o.width,o.height)}if(T)K.texSubImage2D(H.TEXTURE_2D,0,0,0,k0,n0,Q0)}else K.texImage2D(H.TEXTURE_2D,0,I0,k0,n0,Q0);if(w(R))J(t);if(B0.__version=i.version,R.onUpdate)R.onUpdate(R)}C.__version=R.version}function R0(C,R,j){if(R.image.length!==6)return;let t=c(C,R),a=R.source;K.bindTexture(H.TEXTURE_CUBE_MAP,C.__webglTexture,H.TEXTURE0+j);let i=W.get(a);if(a.version!==i.__version||t===!0){K.activeTexture(H.TEXTURE0+j);let B0=s0.getPrimaries(s0.workingColorSpace),F0=R.colorSpace===CH?null:s0.getPrimaries(R.colorSpace),f0=R.colorSpace===CH||B0===F0?H.NONE:H.BROWSER_DEFAULT_WEBGL;H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,R.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,R.unpackAlignment),H.pixelStorei(H.UNPACK_COLORSPACE_CONVERSION_WEBGL,f0);let u0=R.isCompressedTexture||R.image[0].isCompressedTexture,Q0=R.image[0]&&R.image[0].isDataTexture,k0=[];for(let r=0;r<6;r++){if(!u0&&!Q0)k0[r]=L(R.image[r],!0,Q.maxCubemapSize);else k0[r]=Q0?R.image[r].image:R.image[r];k0[r]=V0(R,k0[r])}let n0=k0[0],I0=A.convert(R.format,R.colorSpace),L0=A.convert(R.type),h0=N(R.internalFormat,I0,L0,R.colorSpace),g0=R.isVideoTexture!==!0,k1=i.__version===void 0||t===!0,T=a.dataReady,W0=S(R,n0);C0(H.TEXTURE_CUBE_MAP,R);let o;if(u0){if(g0&&k1)K.texStorage2D(H.TEXTURE_CUBE_MAP,W0,h0,n0.width,n0.height);for(let r=0;r<6;r++){o=k0[r].mipmaps;for(let X0=0;X0<o.length;X0++){let J0=o[X0];if(R.format!==H8)if(I0!==null)if(g0){if(T)K.compressedTexSubImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+r,X0,0,0,J0.width,J0.height,I0,J0.data)}else K.compressedTexImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+r,X0,h0,J0.width,J0.height,0,J0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(g0){if(T)K.texSubImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+r,X0,0,0,J0.width,J0.height,I0,L0,J0.data)}else K.texImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+r,X0,h0,J0.width,J0.height,0,I0,L0,J0.data)}}}else{if(o=R.mipmaps,g0&&k1){if(o.length>0)W0++;let r=v0(k0[0]);K.texStorage2D(H.TEXTURE_CUBE_MAP,W0,h0,r.width,r.height)}for(let r=0;r<6;r++)if(Q0){if(g0){if(T)K.texSubImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,k0[r].width,k0[r].height,I0,L0,k0[r].data)}else K.texImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,h0,k0[r].width,k0[r].height,0,I0,L0,k0[r].data);for(let X0=0;X0<o.length;X0++){let j0=o[X0].image[r].image;if(g0){if(T)K.texSubImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+r,X0+1,0,0,j0.width,j0.height,I0,L0,j0.data)}else K.texImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+r,X0+1,h0,j0.width,j0.height,0,I0,L0,j0.data)}}else{if(g0){if(T)K.texSubImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,I0,L0,k0[r])}else K.texImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,h0,I0,L0,k0[r]);for(let X0=0;X0<o.length;X0++){let J0=o[X0];if(g0){if(T)K.texSubImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+r,X0+1,0,0,I0,L0,J0.image[r])}else K.texImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+r,X0+1,h0,I0,L0,J0.image[r])}}}if(w(R))J(H.TEXTURE_CUBE_MAP);if(i.__version=a.version,R.onUpdate)R.onUpdate(R)}C.__version=R.version}function P0(C,R,j,t,a,i){let B0=A.convert(j.format,j.colorSpace),F0=A.convert(j.type),f0=N(j.internalFormat,B0,F0,j.colorSpace),u0=W.get(R),Q0=W.get(j);if(Q0.__renderTarget=R,!u0.__hasExternalTextures){let k0=Math.max(1,R.width>>i),n0=Math.max(1,R.height>>i);if(a===H.TEXTURE_3D||a===H.TEXTURE_2D_ARRAY)K.texImage3D(a,i,f0,k0,n0,R.depth,0,B0,F0,null);else K.texImage2D(a,i,f0,k0,n0,0,B0,F0,null)}if(K.bindFramebuffer(H.FRAMEBUFFER,C),N0(R))Z.framebufferTexture2DMultisampleEXT(H.FRAMEBUFFER,t,a,Q0.__webglTexture,0,W1(R));else if(a===H.TEXTURE_2D||a>=H.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=H.TEXTURE_CUBE_MAP_NEGATIVE_Z)H.framebufferTexture2D(H.FRAMEBUFFER,t,a,Q0.__webglTexture,i);K.bindFramebuffer(H.FRAMEBUFFER,null)}function Z0(C,R,j){if(H.bindRenderbuffer(H.RENDERBUFFER,C),R.depthBuffer){let t=R.depthTexture,a=t&&t.isDepthTexture?t.type:null,i=z(R.stencilBuffer,a),B0=R.stencilBuffer?H.DEPTH_STENCIL_ATTACHMENT:H.DEPTH_ATTACHMENT,F0=W1(R);if(N0(R))Z.renderbufferStorageMultisampleEXT(H.RENDERBUFFER,F0,i,R.width,R.height);else if(j)H.renderbufferStorageMultisample(H.RENDERBUFFER,F0,i,R.width,R.height);else H.renderbufferStorage(H.RENDERBUFFER,i,R.width,R.height);H.framebufferRenderbuffer(H.FRAMEBUFFER,B0,H.RENDERBUFFER,C)}else{let t=R.textures;for(let a=0;a<t.length;a++){let i=t[a],B0=A.convert(i.format,i.colorSpace),F0=A.convert(i.type),f0=N(i.internalFormat,B0,F0,i.colorSpace),u0=W1(R);if(j&&N0(R)===!1)H.renderbufferStorageMultisample(H.RENDERBUFFER,u0,f0,R.width,R.height);else if(N0(R))Z.renderbufferStorageMultisampleEXT(H.RENDERBUFFER,u0,f0,R.width,R.height);else H.renderbufferStorage(H.RENDERBUFFER,f0,R.width,R.height)}}H.bindRenderbuffer(H.RENDERBUFFER,null)}function S0(C,R){if(R&&R.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(K.bindFramebuffer(H.FRAMEBUFFER,C),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let t=W.get(R.depthTexture);if(t.__renderTarget=R,!t.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;e(R.depthTexture,0);let a=t.__webglTexture,i=W1(R);if(R.depthTexture.format===N5)if(N0(R))Z.framebufferTexture2DMultisampleEXT(H.FRAMEBUFFER,H.DEPTH_ATTACHMENT,H.TEXTURE_2D,a,0,i);else H.framebufferTexture2D(H.FRAMEBUFFER,H.DEPTH_ATTACHMENT,H.TEXTURE_2D,a,0);else if(R.depthTexture.format===HK)if(N0(R))Z.framebufferTexture2DMultisampleEXT(H.FRAMEBUFFER,H.DEPTH_STENCIL_ATTACHMENT,H.TEXTURE_2D,a,0,i);else H.framebufferTexture2D(H.FRAMEBUFFER,H.DEPTH_STENCIL_ATTACHMENT,H.TEXTURE_2D,a,0);else throw Error("Unknown depthTexture format")}function t0(C){let R=W.get(C),j=C.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==C.depthTexture){let t=C.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(t){let a=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,t.removeEventListener("dispose",a)};t.addEventListener("dispose",a),R.__depthDisposeCallback=a}R.__boundDepthTexture=t}if(C.depthTexture&&!R.__autoAllocateDepthBuffer){if(j)throw Error("target.depthTexture not supported in Cube render targets");S0(R.__webglFramebuffer,C)}else if(j){R.__webglDepthbuffer=[];for(let t=0;t<6;t++)if(K.bindFramebuffer(H.FRAMEBUFFER,R.__webglFramebuffer[t]),R.__webglDepthbuffer[t]===void 0)R.__webglDepthbuffer[t]=H.createRenderbuffer(),Z0(R.__webglDepthbuffer[t],C,!1);else{let a=C.stencilBuffer?H.DEPTH_STENCIL_ATTACHMENT:H.DEPTH_ATTACHMENT,i=R.__webglDepthbuffer[t];H.bindRenderbuffer(H.RENDERBUFFER,i),H.framebufferRenderbuffer(H.FRAMEBUFFER,a,H.RENDERBUFFER,i)}}else if(K.bindFramebuffer(H.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=H.createRenderbuffer(),Z0(R.__webglDepthbuffer,C,!1);else{let t=C.stencilBuffer?H.DEPTH_STENCIL_ATTACHMENT:H.DEPTH_ATTACHMENT,a=R.__webglDepthbuffer;H.bindRenderbuffer(H.RENDERBUFFER,a),H.framebufferRenderbuffer(H.FRAMEBUFFER,t,H.RENDERBUFFER,a)}K.bindFramebuffer(H.FRAMEBUFFER,null)}function d0(C,R,j){let t=W.get(C);if(R!==void 0)P0(t.__webglFramebuffer,C,C.texture,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,0);if(j!==void 0)t0(C)}function m0(C){let R=C.texture,j=W.get(C),t=W.get(R);C.addEventListener("dispose",q);let a=C.textures,i=C.isWebGLCubeRenderTarget===!0,B0=a.length>1;if(!B0){if(t.__webglTexture===void 0)t.__webglTexture=H.createTexture();t.__version=R.version,O.memory.textures++}if(i){j.__webglFramebuffer=[];for(let F0=0;F0<6;F0++)if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer[F0]=[];for(let f0=0;f0<R.mipmaps.length;f0++)j.__webglFramebuffer[F0][f0]=H.createFramebuffer()}else j.__webglFramebuffer[F0]=H.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer=[];for(let F0=0;F0<R.mipmaps.length;F0++)j.__webglFramebuffer[F0]=H.createFramebuffer()}else j.__webglFramebuffer=H.createFramebuffer();if(B0)for(let F0=0,f0=a.length;F0<f0;F0++){let u0=W.get(a[F0]);if(u0.__webglTexture===void 0)u0.__webglTexture=H.createTexture(),O.memory.textures++}if(C.samples>0&&N0(C)===!1){j.__webglMultisampledFramebuffer=H.createFramebuffer(),j.__webglColorRenderbuffer=[],K.bindFramebuffer(H.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let F0=0;F0<a.length;F0++){let f0=a[F0];j.__webglColorRenderbuffer[F0]=H.createRenderbuffer(),H.bindRenderbuffer(H.RENDERBUFFER,j.__webglColorRenderbuffer[F0]);let u0=A.convert(f0.format,f0.colorSpace),Q0=A.convert(f0.type),k0=N(f0.internalFormat,u0,Q0,f0.colorSpace,C.isXRRenderTarget===!0),n0=W1(C);H.renderbufferStorageMultisample(H.RENDERBUFFER,n0,k0,C.width,C.height),H.framebufferRenderbuffer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+F0,H.RENDERBUFFER,j.__webglColorRenderbuffer[F0])}if(H.bindRenderbuffer(H.RENDERBUFFER,null),C.depthBuffer)j.__webglDepthRenderbuffer=H.createRenderbuffer(),Z0(j.__webglDepthRenderbuffer,C,!0);K.bindFramebuffer(H.FRAMEBUFFER,null)}}if(i){K.bindTexture(H.TEXTURE_CUBE_MAP,t.__webglTexture),C0(H.TEXTURE_CUBE_MAP,R);for(let F0=0;F0<6;F0++)if(R.mipmaps&&R.mipmaps.length>0)for(let f0=0;f0<R.mipmaps.length;f0++)P0(j.__webglFramebuffer[F0][f0],C,R,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F0,f0);else P0(j.__webglFramebuffer[F0],C,R,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0);if(w(R))J(H.TEXTURE_CUBE_MAP);K.unbindTexture()}else if(B0){for(let F0=0,f0=a.length;F0<f0;F0++){let u0=a[F0],Q0=W.get(u0);if(K.bindTexture(H.TEXTURE_2D,Q0.__webglTexture),C0(H.TEXTURE_2D,u0),P0(j.__webglFramebuffer,C,u0,H.COLOR_ATTACHMENT0+F0,H.TEXTURE_2D,0),w(u0))J(H.TEXTURE_2D)}K.unbindTexture()}else{let F0=H.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)F0=C.isWebGL3DRenderTarget?H.TEXTURE_3D:H.TEXTURE_2D_ARRAY;if(K.bindTexture(F0,t.__webglTexture),C0(F0,R),R.mipmaps&&R.mipmaps.length>0)for(let f0=0;f0<R.mipmaps.length;f0++)P0(j.__webglFramebuffer[f0],C,R,H.COLOR_ATTACHMENT0,F0,f0);else P0(j.__webglFramebuffer,C,R,H.COLOR_ATTACHMENT0,F0,0);if(w(R))J(F0);K.unbindTexture()}if(C.depthBuffer)t0(C)}function v1(C){let R=C.textures;for(let j=0,t=R.length;j<t;j++){let a=R[j];if(w(a)){let i=f(C),B0=W.get(a).__webglTexture;K.bindTexture(i,B0),J(i),K.unbindTexture()}}}let I=[],y1=[];function K1(C){if(C.samples>0){if(N0(C)===!1){let{textures:R,width:j,height:t}=C,a=H.COLOR_BUFFER_BIT,i=C.stencilBuffer?H.DEPTH_STENCIL_ATTACHMENT:H.DEPTH_ATTACHMENT,B0=W.get(C),F0=R.length>1;if(F0)for(let f0=0;f0<R.length;f0++)K.bindFramebuffer(H.FRAMEBUFFER,B0.__webglMultisampledFramebuffer),H.framebufferRenderbuffer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+f0,H.RENDERBUFFER,null),K.bindFramebuffer(H.FRAMEBUFFER,B0.__webglFramebuffer),H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0+f0,H.TEXTURE_2D,null,0);K.bindFramebuffer(H.READ_FRAMEBUFFER,B0.__webglMultisampledFramebuffer),K.bindFramebuffer(H.DRAW_FRAMEBUFFER,B0.__webglFramebuffer);for(let f0=0;f0<R.length;f0++){if(C.resolveDepthBuffer){if(C.depthBuffer)a|=H.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)a|=H.STENCIL_BUFFER_BIT}if(F0){H.framebufferRenderbuffer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.RENDERBUFFER,B0.__webglColorRenderbuffer[f0]);let u0=W.get(R[f0]).__webglTexture;H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,u0,0)}if(H.blitFramebuffer(0,0,j,t,0,0,j,t,a,H.NEAREST),F===!0){if(I.length=0,y1.length=0,I.push(H.COLOR_ATTACHMENT0+f0),C.depthBuffer&&C.resolveDepthBuffer===!1)I.push(i),y1.push(i),H.invalidateFramebuffer(H.DRAW_FRAMEBUFFER,y1);H.invalidateFramebuffer(H.READ_FRAMEBUFFER,I)}}if(K.bindFramebuffer(H.READ_FRAMEBUFFER,null),K.bindFramebuffer(H.DRAW_FRAMEBUFFER,null),F0)for(let f0=0;f0<R.length;f0++){K.bindFramebuffer(H.FRAMEBUFFER,B0.__webglMultisampledFramebuffer),H.framebufferRenderbuffer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+f0,H.RENDERBUFFER,B0.__webglColorRenderbuffer[f0]);let u0=W.get(R[f0]).__webglTexture;K.bindFramebuffer(H.FRAMEBUFFER,B0.__webglFramebuffer),H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0+f0,H.TEXTURE_2D,u0,0)}K.bindFramebuffer(H.DRAW_FRAMEBUFFER,B0.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&F){let R=C.stencilBuffer?H.DEPTH_STENCIL_ATTACHMENT:H.DEPTH_ATTACHMENT;H.invalidateFramebuffer(H.DRAW_FRAMEBUFFER,[R])}}}function W1(C){return Math.min(Q.maxSamples,C.samples)}function N0(C){let R=W.get(C);return C.samples>0&&E.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function U1(C){let R=O.render.frame;if(k.get(C)!==R)k.set(C,R),C.update()}function V0(C,R){let{colorSpace:j,format:t,type:a}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return R;if(j!==EK&&j!==CH)if(s0.getTransfer(j)===A1){if(t!==H8||a!==e8)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",j);return R}function v0(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)Y.width=C.naturalWidth||C.width,Y.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)Y.width=C.displayWidth,Y.height=C.displayHeight;else Y.width=C.width,Y.height=C.height;return Y}this.allocateTextureUnit=s,this.resetTextureUnits=n,this.setTexture2D=e,this.setTexture2DArray=d,this.setTexture3D=_,this.setTextureCube=b,this.rebindTextures=d0,this.setupRenderTarget=m0,this.updateRenderTargetMipmap=v1,this.updateMultisampleRenderTarget=K1,this.setupDepthRenderbuffer=t0,this.setupFrameBufferTexture=P0,this.useMultisampledRTT=N0}function rV(H,E){function K(W,Q=CH){let A,O=s0.getTransfer(Q);if(W===e8)return H.UNSIGNED_BYTE;if(W===mA)return H.UNSIGNED_SHORT_4_4_4_4;if(W===cA)return H.UNSIGNED_SHORT_5_5_5_1;if(W===Qk)return H.UNSIGNED_INT_5_9_9_9_REV;if(W===Kk)return H.BYTE;if(W===Wk)return H.SHORT;if(W===$E)return H.UNSIGNED_SHORT;if(W===dA)return H.INT;if(W===y6)return H.UNSIGNED_INT;if(W===$8)return H.FLOAT;if(W===_E)return H.HALF_FLOAT;if(W===Ak)return H.ALPHA;if(W===Ok)return H.RGB;if(W===H8)return H.RGBA;if(W===Zk)return H.LUMINANCE;if(W===Fk)return H.LUMINANCE_ALPHA;if(W===N5)return H.DEPTH_COMPONENT;if(W===HK)return H.DEPTH_STENCIL;if(W===Yk)return H.RED;if(W===iA)return H.RED_INTEGER;if(W===Jk)return H.RG;if(W===sA)return H.RG_INTEGER;if(W===oA)return H.RGBA_INTEGER;if(W===U5||W===f5||W===L5||W===M5)if(O===A1)if(A=E.get("WEBGL_compressed_texture_s3tc_srgb"),A!==null){if(W===U5)return A.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===f5)return A.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===L5)return A.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===M5)return A.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(A=E.get("WEBGL_compressed_texture_s3tc"),A!==null){if(W===U5)return A.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===f5)return A.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===L5)return A.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===M5)return A.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===rA||W===tA||W===aA||W===eA)if(A=E.get("WEBGL_compressed_texture_pvrtc"),A!==null){if(W===rA)return A.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===tA)return A.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===aA)return A.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===eA)return A.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===$A||W===_A||W===HO)if(A=E.get("WEBGL_compressed_texture_etc"),A!==null){if(W===$A||W===_A)return O===A1?A.COMPRESSED_SRGB8_ETC2:A.COMPRESSED_RGB8_ETC2;if(W===HO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:A.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(W===EO||W===KO||W===WO||W===QO||W===AO||W===OO||W===ZO||W===FO||W===YO||W===JO||W===XO||W===kO||W===DO||W===wO)if(A=E.get("WEBGL_compressed_texture_astc"),A!==null){if(W===EO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:A.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===KO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:A.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===WO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:A.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===QO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:A.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===AO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:A.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===OO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:A.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===ZO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:A.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===FO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:A.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===YO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:A.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===JO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:A.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===XO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:A.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===kO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:A.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===DO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:A.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===wO)return O===A1?A.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:A.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===R5||W===NO||W===UO)if(A=E.get("EXT_texture_compression_bptc"),A!==null){if(W===R5)return O===A1?A.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:A.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===NO)return A.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===UO)return A.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===Xk||W===fO||W===LO||W===MO)if(A=E.get("EXT_texture_compression_rgtc"),A!==null){if(W===R5)return A.COMPRESSED_RED_RGTC1_EXT;if(W===fO)return A.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===LO)return A.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===MO)return A.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===u6)return H.UNSIGNED_INT_24_8;return H[W]!==void 0?H[W]:null}return{convert:K}}var tV={type:"move"};class n5{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new g6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new g6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new h,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new h;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new g6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new h,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new h;return this._grip}dispatchEvent(H){if(this._targetRay!==null)this._targetRay.dispatchEvent(H);if(this._grip!==null)this._grip.dispatchEvent(H);if(this._hand!==null)this._hand.dispatchEvent(H);return this}connect(H){if(H&&H.hand){let E=this._hand;if(E)for(let K of H.hand.values())this._getHandJoint(E,K)}return this.dispatchEvent({type:"connected",data:H}),this}disconnect(H){if(this.dispatchEvent({type:"disconnected",data:H}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(H,E,K){let W=null,Q=null,A=null,O=this._targetRay,Z=this._grip,F=this._hand;if(H&&E.session.visibilityState!=="visible-blurred"){if(F&&H.hand){A=!0;for(let M of H.hand.values()){let L=E.getJointPose(M,K),w=this._getHandJoint(F,M);if(L!==null)w.matrix.fromArray(L.transform.matrix),w.matrix.decompose(w.position,w.rotation,w.scale),w.matrixWorldNeedsUpdate=!0,w.jointRadius=L.radius;w.visible=L!==null}let Y=F.joints["index-finger-tip"],k=F.joints["thumb-tip"],X=Y.position.distanceTo(k.position),D=0.02,U=0.005;if(F.inputState.pinching&&X>D+U)F.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:H.handedness,target:this});else if(!F.inputState.pinching&&X<=D-U)F.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:H.handedness,target:this})}else if(Z!==null&&H.gripSpace){if(Q=E.getPose(H.gripSpace,K),Q!==null){if(Z.matrix.fromArray(Q.transform.matrix),Z.matrix.decompose(Z.position,Z.rotation,Z.scale),Z.matrixWorldNeedsUpdate=!0,Q.linearVelocity)Z.hasLinearVelocity=!0,Z.linearVelocity.copy(Q.linearVelocity);else Z.hasLinearVelocity=!1;if(Q.angularVelocity)Z.hasAngularVelocity=!0,Z.angularVelocity.copy(Q.angularVelocity);else Z.hasAngularVelocity=!1}}if(O!==null){if(W=E.getPose(H.targetRaySpace,K),W===null&&Q!==null)W=Q;if(W!==null){if(O.matrix.fromArray(W.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,W.linearVelocity)O.hasLinearVelocity=!0,O.linearVelocity.copy(W.linearVelocity);else O.hasLinearVelocity=!1;if(W.angularVelocity)O.hasAngularVelocity=!0,O.angularVelocity.copy(W.angularVelocity);else O.hasAngularVelocity=!1;this.dispatchEvent(tV)}}}if(O!==null)O.visible=W!==null;if(Z!==null)Z.visible=Q!==null;if(F!==null)F.visible=A!==null;return this}_getHandJoint(H,E){if(H.joints[E.jointName]===void 0){let K=new g6;K.matrixAutoUpdate=!1,K.visible=!1,H.joints[E.jointName]=K,H.add(K)}return H.joints[E.jointName]}}var aV=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eV=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(H,E,K){if(this.texture===null){let W=new _1,Q=H.properties.get(W);if(Q.__webglTexture=E.texture,E.depthNear!=K.depthNear||E.depthFar!=K.depthFar)this.depthNear=E.depthNear,this.depthFar=E.depthFar;this.texture=W}}getMesh(H){if(this.texture!==null){if(this.mesh===null){let E=H.cameras[0].viewport,K=new E8({vertexShader:aV,fragmentShader:eV,uniforms:{depthColor:{value:this.texture},depthWidth:{value:E.z},depthHeight:{value:E.w}}});this.mesh=new E9(new OK(20,20),K)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wD extends _8{constructor(H,E){super();let K=this,W=null,Q=1,A=null,O="local-floor",Z=1,F=null,Y=null,k=null,X=null,D=null,U=null,M=new DD,L=E.getContextAttributes(),w=null,J=null,f=[],N=[],z=new o0,S=null,B=new s1;B.viewport=new E1;let q=new s1;q.viewport=new E1;let u=[B,q],G=new mO,P=null,l=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(c){let K0=f[c];if(K0===void 0)K0=new n5,f[c]=K0;return K0.getTargetRaySpace()},this.getControllerGrip=function(c){let K0=f[c];if(K0===void 0)K0=new n5,f[c]=K0;return K0.getGripSpace()},this.getHand=function(c){let K0=f[c];if(K0===void 0)K0=new n5,f[c]=K0;return K0.getHandSpace()};function n(c){let K0=N.indexOf(c.inputSource);if(K0===-1)return;let R0=f[K0];if(R0!==void 0)R0.update(c.inputSource,c.frame,F||A),R0.dispatchEvent({type:c.type,data:c.inputSource})}function s(){W.removeEventListener("select",n),W.removeEventListener("selectstart",n),W.removeEventListener("selectend",n),W.removeEventListener("squeeze",n),W.removeEventListener("squeezestart",n),W.removeEventListener("squeezeend",n),W.removeEventListener("end",s),W.removeEventListener("inputsourceschange",m);for(let c=0;c<f.length;c++){let K0=N[c];if(K0===null)continue;N[c]=null,f[c].disconnect(K0)}P=null,l=null,M.reset(),H.setRenderTarget(w),D=null,X=null,k=null,W=null,J=null,C0.stop(),K.isPresenting=!1,H.setPixelRatio(S),H.setSize(z.width,z.height,!1),K.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(c){if(Q=c,K.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(c){if(O=c,K.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return F||A},this.setReferenceSpace=function(c){F=c},this.getBaseLayer=function(){return X!==null?X:D},this.getBinding=function(){return k},this.getFrame=function(){return U},this.getSession=function(){return W},this.setSession=async function(c){if(W=c,W!==null){if(w=H.getRenderTarget(),W.addEventListener("select",n),W.addEventListener("selectstart",n),W.addEventListener("selectend",n),W.addEventListener("squeeze",n),W.addEventListener("squeezestart",n),W.addEventListener("squeezeend",n),W.addEventListener("end",s),W.addEventListener("inputsourceschange",m),L.xrCompatible!==!0)await E.makeXRCompatible();if(S=H.getPixelRatio(),H.getSize(z),W.renderState.layers===void 0){let K0={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:Q};D=new XRWebGLLayer(W,E,K0),W.updateRenderState({baseLayer:D}),H.setPixelRatio(1),H.setSize(D.framebufferWidth,D.framebufferHeight,!1),J=new P8(D.framebufferWidth,D.framebufferHeight,{format:H8,type:e8,colorSpace:H.outputColorSpace,stencilBuffer:L.stencil})}else{let K0=null,R0=null,P0=null;if(L.depth)P0=L.stencil?E.DEPTH24_STENCIL8:E.DEPTH_COMPONENT24,K0=L.stencil?HK:N5,R0=L.stencil?u6:y6;let Z0={colorFormat:E.RGBA8,depthFormat:P0,scaleFactor:Q};k=new XRWebGLBinding(W,E),X=k.createProjectionLayer(Z0),W.updateRenderState({layers:[X]}),H.setPixelRatio(1),H.setSize(X.textureWidth,X.textureHeight,!1),J=new P8(X.textureWidth,X.textureHeight,{format:H8,type:e8,depthTexture:new T5(X.textureWidth,X.textureHeight,R0,void 0,void 0,void 0,void 0,void 0,void 0,K0),stencilBuffer:L.stencil,colorSpace:H.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:X.ignoreDepthValues===!1})}J.isXRRenderTarget=!0,this.setFoveation(Z),F=null,A=await W.requestReferenceSpace(O),C0.setContext(W),C0.start(),K.isPresenting=!0,K.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function m(c){for(let K0=0;K0<c.removed.length;K0++){let R0=c.removed[K0],P0=N.indexOf(R0);if(P0>=0)N[P0]=null,f[P0].disconnect(R0)}for(let K0=0;K0<c.added.length;K0++){let R0=c.added[K0],P0=N.indexOf(R0);if(P0===-1){for(let S0=0;S0<f.length;S0++)if(S0>=N.length){N.push(R0),P0=S0;break}else if(N[S0]===null){N[S0]=R0,P0=S0;break}if(P0===-1)break}let Z0=f[P0];if(Z0)Z0.connect(R0)}}let e=new h,d=new h;function _(c,K0,R0){e.setFromMatrixPosition(K0.matrixWorld),d.setFromMatrixPosition(R0.matrixWorld);let P0=e.distanceTo(d),Z0=K0.projectionMatrix.elements,S0=R0.projectionMatrix.elements,t0=Z0[14]/(Z0[10]-1),d0=Z0[14]/(Z0[10]+1),m0=(Z0[9]+1)/Z0[5],v1=(Z0[9]-1)/Z0[5],I=(Z0[8]-1)/Z0[0],y1=(S0[8]+1)/S0[0],K1=t0*I,W1=t0*y1,N0=P0/(-I+y1),U1=N0*-I;if(K0.matrixWorld.decompose(c.position,c.quaternion,c.scale),c.translateX(U1),c.translateZ(N0),c.matrixWorld.compose(c.position,c.quaternion,c.scale),c.matrixWorldInverse.copy(c.matrixWorld).invert(),Z0[10]===-1)c.projectionMatrix.copy(K0.projectionMatrix),c.projectionMatrixInverse.copy(K0.projectionMatrixInverse);else{let V0=t0+N0,v0=d0+N0,C=K1-U1,R=W1+(P0-U1),j=m0*d0/v0*V0,t=v1*d0/v0*V0;c.projectionMatrix.makePerspective(C,R,j,t,V0,v0),c.projectionMatrixInverse.copy(c.projectionMatrix).invert()}}function b(c,K0){if(K0===null)c.matrixWorld.copy(c.matrix);else c.matrixWorld.multiplyMatrices(K0.matrixWorld,c.matrix);c.matrixWorldInverse.copy(c.matrixWorld).invert()}this.updateCamera=function(c){if(W===null)return;let{near:K0,far:R0}=c;if(M.texture!==null){if(M.depthNear>0)K0=M.depthNear;if(M.depthFar>0)R0=M.depthFar}if(G.near=q.near=B.near=K0,G.far=q.far=B.far=R0,P!==G.near||l!==G.far)W.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,l=G.far;B.layers.mask=c.layers.mask|2,q.layers.mask=c.layers.mask|4,G.layers.mask=B.layers.mask|q.layers.mask;let P0=c.parent,Z0=G.cameras;b(G,P0);for(let S0=0;S0<Z0.length;S0++)b(Z0[S0],P0);if(Z0.length===2)_(G,B,q);else G.projectionMatrix.copy(B.projectionMatrix);E0(c,G,P0)};function E0(c,K0,R0){if(R0===null)c.matrix.copy(K0.matrixWorld);else c.matrix.copy(R0.matrixWorld),c.matrix.invert(),c.matrix.multiply(K0.matrixWorld);if(c.matrix.decompose(c.position,c.quaternion,c.scale),c.updateMatrixWorld(!0),c.projectionMatrix.copy(K0.projectionMatrix),c.projectionMatrixInverse.copy(K0.projectionMatrixInverse),c.isPerspectiveCamera)c.fov=Q5*2*Math.atan(1/c.projectionMatrix.elements[5]),c.zoom=1}this.getCamera=function(){return G},this.getFoveation=function(){if(X===null&&D===null)return;return Z},this.setFoveation=function(c){if(Z=c,X!==null)X.fixedFoveation=c;if(D!==null&&D.fixedFoveation!==void 0)D.fixedFoveation=c},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(G)};let A0=null;function q0(c,K0){if(Y=K0.getViewerPose(F||A),U=K0,Y!==null){let R0=Y.views;if(D!==null)H.setRenderTargetFramebuffer(J,D.framebuffer),H.setRenderTarget(J);let P0=!1;if(R0.length!==G.cameras.length)G.cameras.length=0,P0=!0;for(let S0=0;S0<R0.length;S0++){let t0=R0[S0],d0=null;if(D!==null)d0=D.getViewport(t0);else{let v1=k.getViewSubImage(X,t0);if(d0=v1.viewport,S0===0)H.setRenderTargetTextures(J,v1.colorTexture,X.ignoreDepthValues?void 0:v1.depthStencilTexture),H.setRenderTarget(J)}let m0=u[S0];if(m0===void 0)m0=new s1,m0.layers.enable(S0),m0.viewport=new E1,u[S0]=m0;if(m0.matrix.fromArray(t0.transform.matrix),m0.matrix.decompose(m0.position,m0.quaternion,m0.scale),m0.projectionMatrix.fromArray(t0.projectionMatrix),m0.projectionMatrixInverse.copy(m0.projectionMatrix).invert(),m0.viewport.set(d0.x,d0.y,d0.width,d0.height),S0===0)G.matrix.copy(m0.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);if(P0===!0)G.cameras.push(m0)}let Z0=W.enabledFeatures;if(Z0&&Z0.includes("depth-sensing")){let S0=k.getDepthInformation(R0[0]);if(S0&&S0.isValid&&S0.texture)M.init(H,S0,W.renderState)}}for(let R0=0;R0<f.length;R0++){let P0=N[R0],Z0=f[R0];if(P0!==null&&Z0!==void 0)Z0.update(P0,K0,F||A)}if(A0)A0(c,K0);if(K0.detectedPlanes)K.dispatchEvent({type:"planesdetected",data:K0});U=null}let C0=new WD;C0.setAnimationLoop(q0),this.setAnimationLoop=function(c){A0=c},this.dispose=function(){}}}var uH=new m9,$V=new F1;function _V(H,E){function K(w,J){if(w.matrixAutoUpdate===!0)w.updateMatrix();J.value.copy(w.matrix)}function W(w,J){if(J.color.getRGB(w.fogColor.value,CO(H)),J.isFog)w.fogNear.value=J.near,w.fogFar.value=J.far;else if(J.isFogExp2)w.fogDensity.value=J.density}function Q(w,J,f,N,z){if(J.isMeshBasicMaterial)A(w,J);else if(J.isMeshLambertMaterial)A(w,J);else if(J.isMeshToonMaterial)A(w,J),X(w,J);else if(J.isMeshPhongMaterial)A(w,J),k(w,J);else if(J.isMeshStandardMaterial){if(A(w,J),D(w,J),J.isMeshPhysicalMaterial)U(w,J,z)}else if(J.isMeshMatcapMaterial)A(w,J),M(w,J);else if(J.isMeshDepthMaterial)A(w,J);else if(J.isMeshDistanceMaterial)A(w,J),L(w,J);else if(J.isMeshNormalMaterial)A(w,J);else if(J.isLineBasicMaterial){if(O(w,J),J.isLineDashedMaterial)Z(w,J)}else if(J.isPointsMaterial)F(w,J,f,N);else if(J.isSpriteMaterial)Y(w,J);else if(J.isShadowMaterial)w.color.value.copy(J.color),w.opacity.value=J.opacity;else if(J.isShaderMaterial)J.uniformsNeedUpdate=!1}function A(w,J){if(w.opacity.value=J.opacity,J.color)w.diffuse.value.copy(J.color);if(J.emissive)w.emissive.value.copy(J.emissive).multiplyScalar(J.emissiveIntensity);if(J.map)w.map.value=J.map,K(J.map,w.mapTransform);if(J.alphaMap)w.alphaMap.value=J.alphaMap,K(J.alphaMap,w.alphaMapTransform);if(J.bumpMap){if(w.bumpMap.value=J.bumpMap,K(J.bumpMap,w.bumpMapTransform),w.bumpScale.value=J.bumpScale,J.side===f9)w.bumpScale.value*=-1}if(J.normalMap){if(w.normalMap.value=J.normalMap,K(J.normalMap,w.normalMapTransform),w.normalScale.value.copy(J.normalScale),J.side===f9)w.normalScale.value.negate()}if(J.displacementMap)w.displacementMap.value=J.displacementMap,K(J.displacementMap,w.displacementMapTransform),w.displacementScale.value=J.displacementScale,w.displacementBias.value=J.displacementBias;if(J.emissiveMap)w.emissiveMap.value=J.emissiveMap,K(J.emissiveMap,w.emissiveMapTransform);if(J.specularMap)w.specularMap.value=J.specularMap,K(J.specularMap,w.specularMapTransform);if(J.alphaTest>0)w.alphaTest.value=J.alphaTest;let f=E.get(J),N=f.envMap,z=f.envMapRotation;if(N){if(w.envMap.value=N,uH.copy(z),uH.x*=-1,uH.y*=-1,uH.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1)uH.y*=-1,uH.z*=-1;w.envMapRotation.value.setFromMatrix4($V.makeRotationFromEuler(uH)),w.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,w.reflectivity.value=J.reflectivity,w.ior.value=J.ior,w.refractionRatio.value=J.refractionRatio}if(J.lightMap)w.lightMap.value=J.lightMap,w.lightMapIntensity.value=J.lightMapIntensity,K(J.lightMap,w.lightMapTransform);if(J.aoMap)w.aoMap.value=J.aoMap,w.aoMapIntensity.value=J.aoMapIntensity,K(J.aoMap,w.aoMapTransform)}function O(w,J){if(w.diffuse.value.copy(J.color),w.opacity.value=J.opacity,J.map)w.map.value=J.map,K(J.map,w.mapTransform)}function Z(w,J){w.dashSize.value=J.dashSize,w.totalSize.value=J.dashSize+J.gapSize,w.scale.value=J.scale}function F(w,J,f,N){if(w.diffuse.value.copy(J.color),w.opacity.value=J.opacity,w.size.value=J.size*f,w.scale.value=N*0.5,J.map)w.map.value=J.map,K(J.map,w.uvTransform);if(J.alphaMap)w.alphaMap.value=J.alphaMap,K(J.alphaMap,w.alphaMapTransform);if(J.alphaTest>0)w.alphaTest.value=J.alphaTest}function Y(w,J){if(w.diffuse.value.copy(J.color),w.opacity.value=J.opacity,w.rotation.value=J.rotation,J.map)w.map.value=J.map,K(J.map,w.mapTransform);if(J.alphaMap)w.alphaMap.value=J.alphaMap,K(J.alphaMap,w.alphaMapTransform);if(J.alphaTest>0)w.alphaTest.value=J.alphaTest}function k(w,J){w.specular.value.copy(J.specular),w.shininess.value=Math.max(J.shininess,0.0001)}function X(w,J){if(J.gradientMap)w.gradientMap.value=J.gradientMap}function D(w,J){if(w.metalness.value=J.metalness,J.metalnessMap)w.metalnessMap.value=J.metalnessMap,K(J.metalnessMap,w.metalnessMapTransform);if(w.roughness.value=J.roughness,J.roughnessMap)w.roughnessMap.value=J.roughnessMap,K(J.roughnessMap,w.roughnessMapTransform);if(J.envMap)w.envMapIntensity.value=J.envMapIntensity}function U(w,J,f){if(w.ior.value=J.ior,J.sheen>0){if(w.sheenColor.value.copy(J.sheenColor).multiplyScalar(J.sheen),w.sheenRoughness.value=J.sheenRoughness,J.sheenColorMap)w.sheenColorMap.value=J.sheenColorMap,K(J.sheenColorMap,w.sheenColorMapTransform);if(J.sheenRoughnessMap)w.sheenRoughnessMap.value=J.sheenRoughnessMap,K(J.sheenRoughnessMap,w.sheenRoughnessMapTransform)}if(J.clearcoat>0){if(w.clearcoat.value=J.clearcoat,w.clearcoatRoughness.value=J.clearcoatRoughness,J.clearcoatMap)w.clearcoatMap.value=J.clearcoatMap,K(J.clearcoatMap,w.clearcoatMapTransform);if(J.clearcoatRoughnessMap)w.clearcoatRoughnessMap.value=J.clearcoatRoughnessMap,K(J.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform);if(J.clearcoatNormalMap){if(w.clearcoatNormalMap.value=J.clearcoatNormalMap,K(J.clearcoatNormalMap,w.clearcoatNormalMapTransform),w.clearcoatNormalScale.value.copy(J.clearcoatNormalScale),J.side===f9)w.clearcoatNormalScale.value.negate()}}if(J.dispersion>0)w.dispersion.value=J.dispersion;if(J.iridescence>0){if(w.iridescence.value=J.iridescence,w.iridescenceIOR.value=J.iridescenceIOR,w.iridescenceThicknessMinimum.value=J.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=J.iridescenceThicknessRange[1],J.iridescenceMap)w.iridescenceMap.value=J.iridescenceMap,K(J.iridescenceMap,w.iridescenceMapTransform);if(J.iridescenceThicknessMap)w.iridescenceThicknessMap.value=J.iridescenceThicknessMap,K(J.iridescenceThicknessMap,w.iridescenceThicknessMapTransform)}if(J.transmission>0){if(w.transmission.value=J.transmission,w.transmissionSamplerMap.value=f.texture,w.transmissionSamplerSize.value.set(f.width,f.height),J.transmissionMap)w.transmissionMap.value=J.transmissionMap,K(J.transmissionMap,w.transmissionMapTransform);if(w.thickness.value=J.thickness,J.thicknessMap)w.thicknessMap.value=J.thicknessMap,K(J.thicknessMap,w.thicknessMapTransform);w.attenuationDistance.value=J.attenuationDistance,w.attenuationColor.value.copy(J.attenuationColor)}if(J.anisotropy>0){if(w.anisotropyVector.value.set(J.anisotropy*Math.cos(J.anisotropyRotation),J.anisotropy*Math.sin(J.anisotropyRotation)),J.anisotropyMap)w.anisotropyMap.value=J.anisotropyMap,K(J.anisotropyMap,w.anisotropyMapTransform)}if(w.specularIntensity.value=J.specularIntensity,w.specularColor.value.copy(J.specularColor),J.specularColorMap)w.specularColorMap.value=J.specularColorMap,K(J.specularColorMap,w.specularColorMapTransform);if(J.specularIntensityMap)w.specularIntensityMap.value=J.specularIntensityMap,K(J.specularIntensityMap,w.specularIntensityMapTransform)}function M(w,J){if(J.matcap)w.matcap.value=J.matcap}function L(w,J){let f=E.get(J).light;w.referencePosition.value.setFromMatrixPosition(f.matrixWorld),w.nearDistance.value=f.shadow.camera.near,w.farDistance.value=f.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Q}}function HP(H,E,K,W){let Q={},A={},O=[],Z=H.getParameter(H.MAX_UNIFORM_BUFFER_BINDINGS);function F(f,N){let z=N.program;W.uniformBlockBinding(f,z)}function Y(f,N){let z=Q[f.id];if(z===void 0)M(f),z=k(f),Q[f.id]=z,f.addEventListener("dispose",w);let S=N.program;W.updateUBOMapping(f,S);let B=E.render.frame;if(A[f.id]!==B)D(f),A[f.id]=B}function k(f){let N=X();f.__bindingPointIndex=N;let z=H.createBuffer(),S=f.__size,B=f.usage;return H.bindBuffer(H.UNIFORM_BUFFER,z),H.bufferData(H.UNIFORM_BUFFER,S,B),H.bindBuffer(H.UNIFORM_BUFFER,null),H.bindBufferBase(H.UNIFORM_BUFFER,N,z),z}function X(){for(let f=0;f<Z;f++)if(O.indexOf(f)===-1)return O.push(f),f;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function D(f){let N=Q[f.id],z=f.uniforms,S=f.__cache;H.bindBuffer(H.UNIFORM_BUFFER,N);for(let B=0,q=z.length;B<q;B++){let u=Array.isArray(z[B])?z[B]:[z[B]];for(let G=0,P=u.length;G<P;G++){let l=u[G];if(U(l,B,G,S)===!0){let n=l.__offset,s=Array.isArray(l.value)?l.value:[l.value],m=0;for(let e=0;e<s.length;e++){let d=s[e],_=L(d);if(typeof d==="number"||typeof d==="boolean")l.__data[0]=d,H.bufferSubData(H.UNIFORM_BUFFER,n+m,l.__data);else if(d.isMatrix3)l.__data[0]=d.elements[0],l.__data[1]=d.elements[1],l.__data[2]=d.elements[2],l.__data[3]=0,l.__data[4]=d.elements[3],l.__data[5]=d.elements[4],l.__data[6]=d.elements[5],l.__data[7]=0,l.__data[8]=d.elements[6],l.__data[9]=d.elements[7],l.__data[10]=d.elements[8],l.__data[11]=0;else d.toArray(l.__data,m),m+=_.storage/Float32Array.BYTES_PER_ELEMENT}H.bufferSubData(H.UNIFORM_BUFFER,n,l.__data)}}}H.bindBuffer(H.UNIFORM_BUFFER,null)}function U(f,N,z,S){let B=f.value,q=N+"_"+z;if(S[q]===void 0){if(typeof B==="number"||typeof B==="boolean")S[q]=B;else S[q]=B.clone();return!0}else{let u=S[q];if(typeof B==="number"||typeof B==="boolean"){if(u!==B)return S[q]=B,!0}else if(u.equals(B)===!1)return u.copy(B),!0}return!1}function M(f){let N=f.uniforms,z=0,S=16;for(let q=0,u=N.length;q<u;q++){let G=Array.isArray(N[q])?N[q]:[N[q]];for(let P=0,l=G.length;P<l;P++){let n=G[P],s=Array.isArray(n.value)?n.value:[n.value];for(let m=0,e=s.length;m<e;m++){let d=s[m],_=L(d),b=z%S,E0=b%_.boundary,A0=b+E0;if(z+=E0,A0!==0&&S-A0<_.storage)z+=S-A0;n.__data=new Float32Array(_.storage/Float32Array.BYTES_PER_ELEMENT),n.__offset=z,z+=_.storage}}}let B=z%S;if(B>0)z+=S-B;return f.__size=z,f.__cache={},this}function L(f){let N={boundary:0,storage:0};if(typeof f==="number"||typeof f==="boolean")N.boundary=4,N.storage=4;else if(f.isVector2)N.boundary=8,N.storage=8;else if(f.isVector3||f.isColor)N.boundary=16,N.storage=12;else if(f.isVector4)N.boundary=16,N.storage=16;else if(f.isMatrix3)N.boundary=48,N.storage=48;else if(f.isMatrix4)N.boundary=64,N.storage=64;else if(f.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",f);return N}function w(f){let N=f.target;N.removeEventListener("dispose",w);let z=O.indexOf(N.__bindingPointIndex);O.splice(z,1),H.deleteBuffer(Q[N.id]),delete Q[N.id],delete A[N.id]}function J(){for(let f in Q)H.deleteBuffer(Q[f]);O=[],Q={},A={}}return{bind:F,update:Y,dispose:J}}class KZ{constructor(H={}){let{canvas:E=zk(),context:K=null,depth:W=!0,stencil:Q=!1,alpha:A=!1,antialias:O=!1,premultipliedAlpha:Z=!0,preserveDrawingBuffer:F=!1,powerPreference:Y="default",failIfMajorPerformanceCaveat:k=!1,reverseDepthBuffer:X=!1}=H;this.isWebGLRenderer=!0;let D;if(K!==null){if(typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");D=K.getContextAttributes().alpha}else D=A;let U=new Uint32Array(4),M=new Int32Array(4),L=null,w=null,J=[],f=[];this.domElement=E,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nk,this.toneMapping=V8,this.toneMappingExposure=1;let N=this,z=!1,S=0,B=0,q=null,u=-1,G=null,P=new E1,l=new E1,n=null,s=new x0(0),m=0,e=E.width,d=E.height,_=1,b=null,E0=null,A0=new E1(0,0,e,d),q0=new E1(0,0,e,d),C0=!1,c=new QK,K0=!1,R0=!1,P0=new F1,Z0=new F1,S0=new h,t0=new E1,d0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},m0=!1;function v1(){return q===null?_:1}let I=K;function y1(V,v){return E.getContext(V,v)}try{let V={alpha:!0,depth:W,stencil:Q,antialias:O,premultipliedAlpha:Z,preserveDrawingBuffer:F,powerPreference:Y,failIfMajorPerformanceCaveat:k};if("setAttribute"in E)E.setAttribute("data-engine",`three.js r${LX}`);if(E.addEventListener("webglcontextlost",o,!1),E.addEventListener("webglcontextrestored",r,!1),E.addEventListener("webglcontextcreationerror",X0,!1),I===null){if(I=y1("webgl2",V),I===null)if(y1("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(V){throw console.error("THREE.WebGLRenderer: "+V.message),V}let K1,W1,N0,U1,V0,v0,C,R,j,t,a,i,B0,F0,f0,u0,Q0,k0,n0,I0,L0,h0,g0,k1;function T(){if(K1=new fR(I),K1.init(),h0=new rV(I,K1),W1=new XR(I,K1,H,h0),N0=new sV(I,K1),W1.reverseDepthBuffer&&X)N0.buffers.depth.setReversed(!0);U1=new RR(I),V0=new yV,v0=new oV(I,K1,N0,V0,W1,h0,U1),C=new DR(N),R=new UR(N),j=new qf(I),g0=new YR(I,j),t=new LR(I,j,U1,g0),a=new PR(I,t,j,U1),n0=new VR(I,W1,v0),u0=new kR(V0),i=new vV(N,C,R,K1,W1,g0,u0),B0=new _V(N,V0),F0=new hV,f0=new bV(K1),k0=new FR(N,C,R,N0,a,D,Z),Q0=new cV(N,a,W1),k1=new HP(I,U1,W1,N0),I0=new JR(I,K1,U1),L0=new MR(I,K1,U1),U1.programs=i.programs,N.capabilities=W1,N.extensions=K1,N.properties=V0,N.renderLists=F0,N.shadowMap=Q0,N.state=N0,N.info=U1}T();let W0=new wD(N,I);this.xr=W0,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let V=K1.get("WEBGL_lose_context");if(V)V.loseContext()},this.forceContextRestore=function(){let V=K1.get("WEBGL_lose_context");if(V)V.restoreContext()},this.getPixelRatio=function(){return _},this.setPixelRatio=function(V){if(V===void 0)return;_=V,this.setSize(e,d,!1)},this.getSize=function(V){return V.set(e,d)},this.setSize=function(V,v,p=!0){if(W0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(e=V,d=v,E.width=Math.floor(V*_),E.height=Math.floor(v*_),p===!0)E.style.width=V+"px",E.style.height=v+"px";this.setViewport(0,0,V,v)},this.getDrawingBufferSize=function(V){return V.set(e*_,d*_).floor()},this.setDrawingBufferSize=function(V,v,p){e=V,d=v,_=p,E.width=Math.floor(V*p),E.height=Math.floor(v*p),this.setViewport(0,0,V,v)},this.getCurrentViewport=function(V){return V.copy(P)},this.getViewport=function(V){return V.copy(A0)},this.setViewport=function(V,v,p,g){if(V.isVector4)A0.set(V.x,V.y,V.z,V.w);else A0.set(V,v,p,g);N0.viewport(P.copy(A0).multiplyScalar(_).round())},this.getScissor=function(V){return V.copy(q0)},this.setScissor=function(V,v,p,g){if(V.isVector4)q0.set(V.x,V.y,V.z,V.w);else q0.set(V,v,p,g);N0.scissor(l.copy(q0).multiplyScalar(_).round())},this.getScissorTest=function(){return C0},this.setScissorTest=function(V){N0.setScissorTest(C0=V)},this.setOpaqueSort=function(V){b=V},this.setTransparentSort=function(V){E0=V},this.getClearColor=function(V){return V.copy(k0.getClearColor())},this.setClearColor=function(){k0.setClearColor.apply(k0,arguments)},this.getClearAlpha=function(){return k0.getClearAlpha()},this.setClearAlpha=function(){k0.setClearAlpha.apply(k0,arguments)},this.clear=function(V=!0,v=!0,p=!0){let g=0;if(V){let y=!1;if(q!==null){let H0=q.texture.format;y=H0===oA||H0===sA||H0===iA}if(y){let H0=q.texture.type,Y0=H0===e8||H0===y6||H0===$E||H0===u6||H0===mA||H0===cA,U0=k0.getClearColor(),M0=k0.getClearAlpha(),l0=U0.r,T0=U0.g,G0=U0.b;if(Y0)U[0]=l0,U[1]=T0,U[2]=G0,U[3]=M0,I.clearBufferuiv(I.COLOR,0,U);else M[0]=l0,M[1]=T0,M[2]=G0,M[3]=M0,I.clearBufferiv(I.COLOR,0,M)}else g|=I.COLOR_BUFFER_BIT}if(v)g|=I.DEPTH_BUFFER_BIT;if(p)g|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);I.clear(g)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){E.removeEventListener("webglcontextlost",o,!1),E.removeEventListener("webglcontextrestored",r,!1),E.removeEventListener("webglcontextcreationerror",X0,!1),k0.dispose(),F0.dispose(),f0.dispose(),V0.dispose(),C.dispose(),R.dispose(),a.dispose(),g0.dispose(),k1.dispose(),i.dispose(),W0.dispose(),W0.removeEventListener("sessionstart",i9),W0.removeEventListener("sessionend",OZ),KH.stop()};function o(V){V.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function r(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;let V=U1.autoReset,v=Q0.enabled,p=Q0.autoUpdate,g=Q0.needsUpdate,y=Q0.type;T(),U1.autoReset=V,Q0.enabled=v,Q0.autoUpdate=p,Q0.needsUpdate=g,Q0.type=y}function X0(V){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function J0(V){let v=V.target;v.removeEventListener("dispose",J0),j0(v)}function j0(V){f1(V),V0.remove(V)}function f1(V){let v=V0.get(V).programs;if(v!==void 0){if(v.forEach(function(p){i.releaseProgram(p)}),V.isShaderMaterial)i.releaseShaderCache(V)}}this.renderBufferDirect=function(V,v,p,g,y,H0){if(v===null)v=d0;let Y0=y.isMesh&&y.matrixWorld.determinant()<0,U0=RD(V,v,p,g,y);N0.setMaterial(g,Y0);let M0=p.index,l0=1;if(g.wireframe===!0){if(M0=t.getWireframeAttribute(p),M0===void 0)return;l0=2}let T0=p.drawRange,G0=p.attributes.position,c0=T0.start*l0,e0=(T0.start+T0.count)*l0;if(H0!==null)c0=Math.max(c0,H0.start*l0),e0=Math.min(e0,(H0.start+H0.count)*l0);if(M0!==null)c0=Math.max(c0,0),e0=Math.min(e0,M0.count);else if(G0!==void 0&&G0!==null)c0=Math.max(c0,0),e0=Math.min(e0,G0.count);let V1=e0-c0;if(V1<0||V1===1/0)return;g0.setup(y,g,U0,p,M0);let L1,r0=I0;if(M0!==null)L1=j.get(M0),r0=L0,r0.setIndex(L1);if(y.isMesh)if(g.wireframe===!0)N0.setLineWidth(g.wireframeLinewidth*v1()),r0.setMode(I.LINES);else r0.setMode(I.TRIANGLES);else if(y.isLine){let z0=g.linewidth;if(z0===void 0)z0=1;if(N0.setLineWidth(z0*v1()),y.isLineSegments)r0.setMode(I.LINES);else if(y.isLineLoop)r0.setMode(I.LINE_LOOP);else r0.setMode(I.LINE_STRIP)}else if(y.isPoints)r0.setMode(I.POINTS);else if(y.isSprite)r0.setMode(I.TRIANGLES);if(y.isBatchedMesh)if(y._multiDrawInstances!==null)r0.renderMultiDrawInstances(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount,y._multiDrawInstances);else if(!K1.get("WEBGL_multi_draw")){let{_multiDrawStarts:z0,_multiDrawCounts:h1,_multiDrawCount:$0}=y,T9=M0?j.get(M0).bytesPerElement:1,pH=V0.get(g).currentProgram.getUniforms();for(let J9=0;J9<$0;J9++)pH.setValue(I,"_gl_DrawID",J9),r0.render(z0[J9]/T9,h1[J9])}else r0.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else if(y.isInstancedMesh)r0.renderInstances(c0,V1,y.count);else if(p.isInstancedBufferGeometry){let z0=p._maxInstanceCount!==void 0?p._maxInstanceCount:1/0,h1=Math.min(p.instanceCount,z0);r0.renderInstances(c0,V1,h1)}else r0.render(c0,V1)};function u1(V,v,p){if(V.transparent===!0&&V.side===_9&&V.forceSinglePass===!1)V.side=f9,V.needsUpdate=!0,NK(V,v,p),V.side=S6,V.needsUpdate=!0,NK(V,v,p),V.side=_9;else NK(V,v,p)}this.compile=function(V,v,p=null){if(p===null)p=V;if(w=f0.get(p),w.init(v),f.push(w),p.traverseVisible(function(y){if(y.isLight&&y.layers.test(v.layers)){if(w.pushLight(y),y.castShadow)w.pushShadow(y)}}),V!==p)V.traverseVisible(function(y){if(y.isLight&&y.layers.test(v.layers)){if(w.pushLight(y),y.castShadow)w.pushShadow(y)}});w.setupLights();let g=new Set;return V.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;let H0=y.material;if(H0)if(Array.isArray(H0))for(let Y0=0;Y0<H0.length;Y0++){let U0=H0[Y0];u1(U0,p,y),g.add(U0)}else u1(H0,p,y),g.add(H0)}),f.pop(),w=null,g},this.compileAsync=function(V,v,p=null){let g=this.compile(V,v,p);return new Promise((y)=>{function H0(){if(g.forEach(function(Y0){if(V0.get(Y0).currentProgram.isReady())g.delete(Y0)}),g.size===0){y(V);return}setTimeout(H0,10)}if(K1.get("KHR_parallel_shader_compile")!==null)H0();else setTimeout(H0,10)})};let a0=null;function W8(V){if(a0)a0(V)}function i9(){KH.stop()}function OZ(){KH.start()}let KH=new WD;if(KH.setAnimationLoop(W8),typeof self<"u")KH.setContext(self);this.setAnimationLoop=function(V){a0=V,W0.setAnimationLoop(V),V===null?KH.stop():KH.start()},W0.addEventListener("sessionstart",i9),W0.addEventListener("sessionend",OZ),this.render=function(V,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(V.matrixWorldAutoUpdate===!0)V.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(W0.enabled===!0&&W0.isPresenting===!0){if(W0.cameraAutoUpdate===!0)W0.updateCamera(v);v=W0.getCamera()}if(V.isScene===!0)V.onBeforeRender(N,V,v,q);if(w=f0.get(V,f.length),w.init(v),f.push(w),Z0.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),c.setFromProjectionMatrix(Z0),R0=this.localClippingEnabled,K0=u0.init(this.clippingPlanes,R0),L=F0.get(V,J.length),L.init(),J.push(L),W0.enabled===!0&&W0.isPresenting===!0){let H0=N.xr.getDepthSensingMesh();if(H0!==null)d5(H0,v,-1/0,N.sortObjects)}if(d5(V,v,0,N.sortObjects),L.finish(),N.sortObjects===!0)L.sort(b,E0);if(m0=W0.enabled===!1||W0.isPresenting===!1||W0.hasDepthSensing()===!1,m0)k0.addToRenderList(L,V);if(this.info.render.frame++,K0===!0)u0.beginShadows();let p=w.state.shadowsArray;if(Q0.render(p,V,v),K0===!0)u0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:g,transmissive:y}=L;if(w.setupLights(),v.isArrayCamera){let H0=v.cameras;if(y.length>0)for(let Y0=0,U0=H0.length;Y0<U0;Y0++){let M0=H0[Y0];FZ(g,y,V,M0)}if(m0)k0.render(V);for(let Y0=0,U0=H0.length;Y0<U0;Y0++){let M0=H0[Y0];ZZ(L,V,M0,M0.viewport)}}else{if(y.length>0)FZ(g,y,V,v);if(m0)k0.render(V);ZZ(L,V,v)}if(q!==null)v0.updateMultisampleRenderTarget(q),v0.updateRenderTargetMipmap(q);if(V.isScene===!0)V.onAfterRender(N,V,v);if(g0.resetDefaultState(),u=-1,G=null,f.pop(),f.length>0){if(w=f[f.length-1],K0===!0)u0.setGlobalState(N.clippingPlanes,w.state.camera)}else w=null;if(J.pop(),J.length>0)L=J[J.length-1];else L=null};function d5(V,v,p,g){if(V.visible===!1)return;if(V.layers.test(v.layers)){if(V.isGroup)p=V.renderOrder;else if(V.isLOD){if(V.autoUpdate===!0)V.update(v)}else if(V.isLight){if(w.pushLight(V),V.castShadow)w.pushShadow(V)}else if(V.isSprite){if(!V.frustumCulled||c.intersectsSprite(V)){if(g)t0.setFromMatrixPosition(V.matrixWorld).applyMatrix4(Z0);let Y0=a.update(V),U0=V.material;if(U0.visible)L.push(V,Y0,U0,p,t0.z,null)}}else if(V.isMesh||V.isLine||V.isPoints){if(!V.frustumCulled||c.intersectsObject(V)){let Y0=a.update(V),U0=V.material;if(g){if(V.boundingSphere!==void 0){if(V.boundingSphere===null)V.computeBoundingSphere();t0.copy(V.boundingSphere.center)}else{if(Y0.boundingSphere===null)Y0.computeBoundingSphere();t0.copy(Y0.boundingSphere.center)}t0.applyMatrix4(V.matrixWorld).applyMatrix4(Z0)}if(Array.isArray(U0)){let M0=Y0.groups;for(let l0=0,T0=M0.length;l0<T0;l0++){let G0=M0[l0],c0=U0[G0.materialIndex];if(c0&&c0.visible)L.push(V,Y0,c0,p,t0.z,G0)}}else if(U0.visible)L.push(V,Y0,U0,p,t0.z,null)}}}let H0=V.children;for(let Y0=0,U0=H0.length;Y0<U0;Y0++)d5(H0[Y0],v,p,g)}function ZZ(V,v,p,g){let{opaque:y,transmissive:H0,transparent:Y0}=V;if(w.setupLightsView(p),K0===!0)u0.setGlobalState(N.clippingPlanes,p);if(g)N0.viewport(P.copy(g));if(y.length>0)wK(y,v,p);if(H0.length>0)wK(H0,v,p);if(Y0.length>0)wK(Y0,v,p);N0.buffers.depth.setTest(!0),N0.buffers.depth.setMask(!0),N0.buffers.color.setMask(!0),N0.setPolygonOffset(!1)}function FZ(V,v,p,g){if((p.isScene===!0?p.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[g.id]===void 0)w.state.transmissionRenderTarget[g.id]=new P8(1,1,{generateMipmaps:!0,type:K1.has("EXT_color_buffer_half_float")||K1.has("EXT_color_buffer_float")?_E:e8,minFilter:v6,samples:4,stencilBuffer:Q,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:s0.workingColorSpace});let H0=w.state.transmissionRenderTarget[g.id],Y0=g.viewport||P;H0.setSize(Y0.z,Y0.w);let U0=N.getRenderTarget();if(N.setRenderTarget(H0),N.getClearColor(s),m=N.getClearAlpha(),m<1)N.setClearColor(16777215,0.5);if(N.clear(),m0)k0.render(p);let M0=N.toneMapping;N.toneMapping=V8;let l0=g.viewport;if(g.viewport!==void 0)g.viewport=void 0;if(w.setupLightsView(g),K0===!0)u0.setGlobalState(N.clippingPlanes,g);if(wK(V,p,g),v0.updateMultisampleRenderTarget(H0),v0.updateRenderTargetMipmap(H0),K1.has("WEBGL_multisampled_render_to_texture")===!1){let T0=!1;for(let G0=0,c0=v.length;G0<c0;G0++){let e0=v[G0],V1=e0.object,L1=e0.geometry,r0=e0.material,z0=e0.group;if(r0.side===_9&&V1.layers.test(g.layers)){let h1=r0.side;r0.side=f9,r0.needsUpdate=!0,YZ(V1,p,g,L1,r0,z0),r0.side=h1,r0.needsUpdate=!0,T0=!0}}if(T0===!0)v0.updateMultisampleRenderTarget(H0),v0.updateRenderTargetMipmap(H0)}if(N.setRenderTarget(U0),N.setClearColor(s,m),l0!==void 0)g.viewport=l0;N.toneMapping=M0}function wK(V,v,p){let g=v.isScene===!0?v.overrideMaterial:null;for(let y=0,H0=V.length;y<H0;y++){let Y0=V[y],U0=Y0.object,M0=Y0.geometry,l0=g===null?Y0.material:g,T0=Y0.group;if(U0.layers.test(p.layers))YZ(U0,v,p,M0,l0,T0)}}function YZ(V,v,p,g,y,H0){if(V.onBeforeRender(N,v,p,g,y,H0),V.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),y.onBeforeRender(N,v,p,g,V,H0),y.transparent===!0&&y.side===_9&&y.forceSinglePass===!1)y.side=f9,y.needsUpdate=!0,N.renderBufferDirect(p,v,g,y,V,H0),y.side=S6,y.needsUpdate=!0,N.renderBufferDirect(p,v,g,y,V,H0),y.side=_9;else N.renderBufferDirect(p,v,g,y,V,H0);V.onAfterRender(N,v,p,g,y,H0)}function NK(V,v,p){if(v.isScene!==!0)v=d0;let g=V0.get(V),y=w.state.lights,H0=w.state.shadowsArray,Y0=y.state.version,U0=i.getParameters(V,y.state,H0,v,p),M0=i.getProgramCacheKey(U0),l0=g.programs;if(g.environment=V.isMeshStandardMaterial?v.environment:null,g.fog=v.fog,g.envMap=(V.isMeshStandardMaterial?R:C).get(V.envMap||g.environment),g.envMapRotation=g.environment!==null&&V.envMap===null?v.environmentRotation:V.envMapRotation,l0===void 0)V.addEventListener("dispose",J0),l0=new Map,g.programs=l0;let T0=l0.get(M0);if(T0!==void 0){if(g.currentProgram===T0&&g.lightsStateVersion===Y0)return XZ(V,U0),T0}else U0.uniforms=i.getUniforms(V),V.onBeforeCompile(U0,N),T0=i.acquireProgram(U0,M0),l0.set(M0,T0),g.uniforms=U0.uniforms;let G0=g.uniforms;if(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)G0.clippingPlanes=u0.uniform;if(XZ(V,U0),g.needsLights=PD(V),g.lightsStateVersion=Y0,g.needsLights)G0.ambientLightColor.value=y.state.ambient,G0.lightProbe.value=y.state.probe,G0.directionalLights.value=y.state.directional,G0.directionalLightShadows.value=y.state.directionalShadow,G0.spotLights.value=y.state.spot,G0.spotLightShadows.value=y.state.spotShadow,G0.rectAreaLights.value=y.state.rectArea,G0.ltc_1.value=y.state.rectAreaLTC1,G0.ltc_2.value=y.state.rectAreaLTC2,G0.pointLights.value=y.state.point,G0.pointLightShadows.value=y.state.pointShadow,G0.hemisphereLights.value=y.state.hemi,G0.directionalShadowMap.value=y.state.directionalShadowMap,G0.directionalShadowMatrix.value=y.state.directionalShadowMatrix,G0.spotShadowMap.value=y.state.spotShadowMap,G0.spotLightMatrix.value=y.state.spotLightMatrix,G0.spotLightMap.value=y.state.spotLightMap,G0.pointShadowMap.value=y.state.pointShadowMap,G0.pointShadowMatrix.value=y.state.pointShadowMatrix;return g.currentProgram=T0,g.uniformsList=null,T0}function JZ(V){if(V.uniformsList===null){let v=V.currentProgram.getUniforms();V.uniformsList=kK.seqWithValue(v.seq,V.uniforms)}return V.uniformsList}function XZ(V,v){let p=V0.get(V);p.outputColorSpace=v.outputColorSpace,p.batching=v.batching,p.batchingColor=v.batchingColor,p.instancing=v.instancing,p.instancingColor=v.instancingColor,p.instancingMorph=v.instancingMorph,p.skinning=v.skinning,p.morphTargets=v.morphTargets,p.morphNormals=v.morphNormals,p.morphColors=v.morphColors,p.morphTargetsCount=v.morphTargetsCount,p.numClippingPlanes=v.numClippingPlanes,p.numIntersection=v.numClipIntersection,p.vertexAlphas=v.vertexAlphas,p.vertexTangents=v.vertexTangents,p.toneMapping=v.toneMapping}function RD(V,v,p,g,y){if(v.isScene!==!0)v=d0;v0.resetTextureUnits();let H0=v.fog,Y0=g.isMeshStandardMaterial?v.environment:null,U0=q===null?N.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:EK,M0=(g.isMeshStandardMaterial?R:C).get(g.envMap||Y0),l0=g.vertexColors===!0&&!!p.attributes.color&&p.attributes.color.itemSize===4,T0=!!p.attributes.tangent&&(!!g.normalMap||g.anisotropy>0),G0=!!p.morphAttributes.position,c0=!!p.morphAttributes.normal,e0=!!p.morphAttributes.color,V1=V8;if(g.toneMapped){if(q===null||q.isXRRenderTarget===!0)V1=N.toneMapping}let L1=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,r0=L1!==void 0?L1.length:0,z0=V0.get(g),h1=w.state.lights;if(K0===!0){if(R0===!0||V!==G){let r1=V===G&&g.id===u;u0.setState(g,V,r1)}}let $0=!1;if(g.version===z0.__version){if(z0.needsLights&&z0.lightsStateVersion!==h1.state.version)$0=!0;else if(z0.outputColorSpace!==U0)$0=!0;else if(y.isBatchedMesh&&z0.batching===!1)$0=!0;else if(!y.isBatchedMesh&&z0.batching===!0)$0=!0;else if(y.isBatchedMesh&&z0.batchingColor===!0&&y.colorTexture===null)$0=!0;else if(y.isBatchedMesh&&z0.batchingColor===!1&&y.colorTexture!==null)$0=!0;else if(y.isInstancedMesh&&z0.instancing===!1)$0=!0;else if(!y.isInstancedMesh&&z0.instancing===!0)$0=!0;else if(y.isSkinnedMesh&&z0.skinning===!1)$0=!0;else if(!y.isSkinnedMesh&&z0.skinning===!0)$0=!0;else if(y.isInstancedMesh&&z0.instancingColor===!0&&y.instanceColor===null)$0=!0;else if(y.isInstancedMesh&&z0.instancingColor===!1&&y.instanceColor!==null)$0=!0;else if(y.isInstancedMesh&&z0.instancingMorph===!0&&y.morphTexture===null)$0=!0;else if(y.isInstancedMesh&&z0.instancingMorph===!1&&y.morphTexture!==null)$0=!0;else if(z0.envMap!==M0)$0=!0;else if(g.fog===!0&&z0.fog!==H0)$0=!0;else if(z0.numClippingPlanes!==void 0&&(z0.numClippingPlanes!==u0.numPlanes||z0.numIntersection!==u0.numIntersection))$0=!0;else if(z0.vertexAlphas!==l0)$0=!0;else if(z0.vertexTangents!==T0)$0=!0;else if(z0.morphTargets!==G0)$0=!0;else if(z0.morphNormals!==c0)$0=!0;else if(z0.morphColors!==e0)$0=!0;else if(z0.toneMapping!==V1)$0=!0;else if(z0.morphTargetsCount!==r0)$0=!0}else $0=!0,z0.__version=g.version;let T9=z0.currentProgram;if($0===!0)T9=NK(g,v,y);let pH=!1,J9=!1,m6=!1,Y1=T9.getUniforms(),R9=z0.uniforms;if(N0.useProgram(T9.program))pH=!0,J9=!0,m6=!0;if(g.id!==u)u=g.id,J9=!0;if(pH||G!==V){if(N0.buffers.depth.getReversed())P0.copy(V.projectionMatrix),qk(P0),Ck(P0),Y1.setValue(I,"projectionMatrix",P0);else Y1.setValue(I,"projectionMatrix",V.projectionMatrix);Y1.setValue(I,"viewMatrix",V.matrixWorldInverse);let K9=Y1.map.cameraPosition;if(K9!==void 0)K9.setValue(I,S0.setFromMatrixPosition(V.matrixWorld));if(W1.logarithmicDepthBuffer)Y1.setValue(I,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2));if(g.isMeshPhongMaterial||g.isMeshToonMaterial||g.isMeshLambertMaterial||g.isMeshBasicMaterial||g.isMeshStandardMaterial||g.isShaderMaterial)Y1.setValue(I,"isOrthographic",V.isOrthographicCamera===!0);if(G!==V)G=V,J9=!0,m6=!0}if(y.isSkinnedMesh){Y1.setOptional(I,y,"bindMatrix"),Y1.setOptional(I,y,"bindMatrixInverse");let r1=y.skeleton;if(r1){if(r1.boneTexture===null)r1.computeBoneTexture();Y1.setValue(I,"boneTexture",r1.boneTexture,v0)}}if(y.isBatchedMesh){if(Y1.setOptional(I,y,"batchingTexture"),Y1.setValue(I,"batchingTexture",y._matricesTexture,v0),Y1.setOptional(I,y,"batchingIdTexture"),Y1.setValue(I,"batchingIdTexture",y._indirectTexture,v0),Y1.setOptional(I,y,"batchingColorTexture"),y._colorsTexture!==null)Y1.setValue(I,"batchingColorTexture",y._colorsTexture,v0)}let V9=p.morphAttributes;if(V9.position!==void 0||V9.normal!==void 0||V9.color!==void 0)n0.update(y,p,T9);if(J9||z0.receiveShadow!==y.receiveShadow)z0.receiveShadow=y.receiveShadow,Y1.setValue(I,"receiveShadow",y.receiveShadow);if(g.isMeshGouraudMaterial&&g.envMap!==null)R9.envMap.value=M0,R9.flipEnvMap.value=M0.isCubeTexture&&M0.isRenderTargetTexture===!1?-1:1;if(g.isMeshStandardMaterial&&g.envMap===null&&v.environment!==null)R9.envMapIntensity.value=v.environmentIntensity;if(J9){if(Y1.setValue(I,"toneMappingExposure",N.toneMappingExposure),z0.needsLights)VD(R9,m6);if(H0&&g.fog===!0)B0.refreshFogUniforms(R9,H0);B0.refreshMaterialUniforms(R9,g,_,d,w.state.transmissionRenderTarget[V.id]),kK.upload(I,JZ(z0),R9,v0)}if(g.isShaderMaterial&&g.uniformsNeedUpdate===!0)kK.upload(I,JZ(z0),R9,v0),g.uniformsNeedUpdate=!1;if(g.isSpriteMaterial)Y1.setValue(I,"center",y.center);if(Y1.setValue(I,"modelViewMatrix",y.modelViewMatrix),Y1.setValue(I,"normalMatrix",y.normalMatrix),Y1.setValue(I,"modelMatrix",y.matrixWorld),g.isShaderMaterial||g.isRawShaderMaterial){let r1=g.uniformsGroups;for(let K9=0,m5=r1.length;K9<m5;K9++){let WH=r1[K9];k1.update(WH,T9),k1.bind(WH,T9)}}return T9}function VD(V,v){V.ambientLightColor.needsUpdate=v,V.lightProbe.needsUpdate=v,V.directionalLights.needsUpdate=v,V.directionalLightShadows.needsUpdate=v,V.pointLights.needsUpdate=v,V.pointLightShadows.needsUpdate=v,V.spotLights.needsUpdate=v,V.spotLightShadows.needsUpdate=v,V.rectAreaLights.needsUpdate=v,V.hemisphereLights.needsUpdate=v}function PD(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(V,v,p){V0.get(V.texture).__webglTexture=v,V0.get(V.depthTexture).__webglTexture=p;let g=V0.get(V);if(g.__hasExternalTextures=!0,g.__autoAllocateDepthBuffer=p===void 0,!g.__autoAllocateDepthBuffer){if(K1.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),g.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(V,v){let p=V0.get(V);p.__webglFramebuffer=v,p.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(V,v=0,p=0){q=V,S=v,B=p;let g=!0,y=null,H0=!1,Y0=!1;if(V){let M0=V0.get(V);if(M0.__useDefaultFramebuffer!==void 0)N0.bindFramebuffer(I.FRAMEBUFFER,null),g=!1;else if(M0.__webglFramebuffer===void 0)v0.setupRenderTarget(V);else if(M0.__hasExternalTextures)v0.rebindTextures(V,V0.get(V.texture).__webglTexture,V0.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){let G0=V.depthTexture;if(M0.__boundDepthTexture!==G0){if(G0!==null&&V0.has(G0)&&(V.width!==G0.image.width||V.height!==G0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v0.setupDepthRenderbuffer(V)}}let l0=V.texture;if(l0.isData3DTexture||l0.isDataArrayTexture||l0.isCompressedArrayTexture)Y0=!0;let T0=V0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget){if(Array.isArray(T0[v]))y=T0[v][p];else y=T0[v];H0=!0}else if(V.samples>0&&v0.useMultisampledRTT(V)===!1)y=V0.get(V).__webglMultisampledFramebuffer;else if(Array.isArray(T0))y=T0[p];else y=T0;P.copy(V.viewport),l.copy(V.scissor),n=V.scissorTest}else P.copy(A0).multiplyScalar(_).floor(),l.copy(q0).multiplyScalar(_).floor(),n=C0;if(N0.bindFramebuffer(I.FRAMEBUFFER,y)&&g)N0.drawBuffers(V,y);if(N0.viewport(P),N0.scissor(l),N0.setScissorTest(n),H0){let M0=V0.get(V.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+v,M0.__webglTexture,p)}else if(Y0){let M0=V0.get(V.texture),l0=v||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,M0.__webglTexture,p||0,l0)}u=-1},this.readRenderTargetPixels=function(V,v,p,g,y,H0,Y0){if(!(V&&V.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let U0=V0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&Y0!==void 0)U0=U0[Y0];if(U0){N0.bindFramebuffer(I.FRAMEBUFFER,U0);try{let M0=V.texture,l0=M0.format,T0=M0.type;if(!W1.textureFormatReadable(l0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W1.textureTypeReadable(T0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=V.width-g&&(p>=0&&p<=V.height-y))I.readPixels(v,p,g,y,h0.convert(l0),h0.convert(T0),H0)}finally{let M0=q!==null?V0.get(q).__webglFramebuffer:null;N0.bindFramebuffer(I.FRAMEBUFFER,M0)}}},this.readRenderTargetPixelsAsync=async function(V,v,p,g,y,H0,Y0){if(!(V&&V.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let U0=V0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&Y0!==void 0)U0=U0[Y0];if(U0){let M0=V.texture,l0=M0.format,T0=M0.type;if(!W1.textureFormatReadable(l0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W1.textureTypeReadable(T0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(v>=0&&v<=V.width-g&&(p>=0&&p<=V.height-y)){N0.bindFramebuffer(I.FRAMEBUFFER,U0);let G0=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,G0),I.bufferData(I.PIXEL_PACK_BUFFER,H0.byteLength,I.STREAM_READ),I.readPixels(v,p,g,y,h0.convert(l0),h0.convert(T0),0);let c0=q!==null?V0.get(q).__webglFramebuffer:null;N0.bindFramebuffer(I.FRAMEBUFFER,c0);let e0=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Bk(I,e0,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,G0),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,H0),I.deleteBuffer(G0),I.deleteSync(e0),H0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(V,v=null,p=0){if(V.isTexture!==!0)SH("WebGLRenderer: copyFramebufferToTexture function signature has changed."),v=arguments[0]||null,V=arguments[1];let g=Math.pow(2,-p),y=Math.floor(V.image.width*g),H0=Math.floor(V.image.height*g),Y0=v!==null?v.x:0,U0=v!==null?v.y:0;v0.setTexture2D(V,0),I.copyTexSubImage2D(I.TEXTURE_2D,p,0,0,Y0,U0,y,H0),N0.unbindTexture()};let GD=I.createFramebuffer(),zD=I.createFramebuffer();if(this.copyTextureToTexture=function(V,v,p=null,g=null,y=0,H0=null){if(V.isTexture!==!0)SH("WebGLRenderer: copyTextureToTexture function signature has changed."),g=arguments[0]||null,V=arguments[1],v=arguments[2],H0=arguments[3]||0,p=null;if(H0===null)if(y!==0)SH("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),H0=y,y=0;else H0=0;let Y0,U0,M0,l0,T0,G0,c0,e0,V1,L1=V.isCompressedTexture?V.mipmaps[H0]:V.image;if(p!==null)Y0=p.max.x-p.min.x,U0=p.max.y-p.min.y,M0=p.isBox3?p.max.z-p.min.z:1,l0=p.min.x,T0=p.min.y,G0=p.isBox3?p.min.z:0;else{let V9=Math.pow(2,-y);if(Y0=Math.floor(L1.width*V9),U0=Math.floor(L1.height*V9),V.isDataArrayTexture)M0=L1.depth;else if(V.isData3DTexture)M0=Math.floor(L1.depth*V9);else M0=1;l0=0,T0=0,G0=0}if(g!==null)c0=g.x,e0=g.y,V1=g.z;else c0=0,e0=0,V1=0;let r0=h0.convert(v.format),z0=h0.convert(v.type),h1;if(v.isData3DTexture)v0.setTexture3D(v,0),h1=I.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)v0.setTexture2DArray(v,0),h1=I.TEXTURE_2D_ARRAY;else v0.setTexture2D(v,0),h1=I.TEXTURE_2D;I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,v.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,v.unpackAlignment);let $0=I.getParameter(I.UNPACK_ROW_LENGTH),T9=I.getParameter(I.UNPACK_IMAGE_HEIGHT),pH=I.getParameter(I.UNPACK_SKIP_PIXELS),J9=I.getParameter(I.UNPACK_SKIP_ROWS),m6=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,L1.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,L1.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,l0),I.pixelStorei(I.UNPACK_SKIP_ROWS,T0),I.pixelStorei(I.UNPACK_SKIP_IMAGES,G0);let Y1=V.isDataArrayTexture||V.isData3DTexture,R9=v.isDataArrayTexture||v.isData3DTexture;if(V.isDepthTexture){let V9=V0.get(V),r1=V0.get(v),K9=V0.get(V9.__renderTarget),m5=V0.get(r1.__renderTarget);N0.bindFramebuffer(I.READ_FRAMEBUFFER,K9.__webglFramebuffer),N0.bindFramebuffer(I.DRAW_FRAMEBUFFER,m5.__webglFramebuffer);for(let WH=0;WH<M0;WH++){if(Y1)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V0.get(V).__webglTexture,y,G0+WH),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V0.get(v).__webglTexture,H0,V1+WH);I.blitFramebuffer(l0,T0,Y0,U0,c0,e0,Y0,U0,I.DEPTH_BUFFER_BIT,I.NEAREST)}N0.bindFramebuffer(I.READ_FRAMEBUFFER,null),N0.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(y!==0||V.isRenderTargetTexture||V0.has(V)){let V9=V0.get(V),r1=V0.get(v);N0.bindFramebuffer(I.READ_FRAMEBUFFER,GD),N0.bindFramebuffer(I.DRAW_FRAMEBUFFER,zD);for(let K9=0;K9<M0;K9++){if(Y1)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V9.__webglTexture,y,G0+K9);else I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,V9.__webglTexture,y);if(R9)I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r1.__webglTexture,H0,V1+K9);else I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r1.__webglTexture,H0);if(y!==0)I.blitFramebuffer(l0,T0,Y0,U0,c0,e0,Y0,U0,I.COLOR_BUFFER_BIT,I.NEAREST);else if(R9)I.copyTexSubImage3D(h1,H0,c0,e0,V1+K9,l0,T0,Y0,U0);else I.copyTexSubImage2D(h1,H0,c0,e0,l0,T0,Y0,U0)}N0.bindFramebuffer(I.READ_FRAMEBUFFER,null),N0.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(R9)if(V.isDataTexture||V.isData3DTexture)I.texSubImage3D(h1,H0,c0,e0,V1,Y0,U0,M0,r0,z0,L1.data);else if(v.isCompressedArrayTexture)I.compressedTexSubImage3D(h1,H0,c0,e0,V1,Y0,U0,M0,r0,L1.data);else I.texSubImage3D(h1,H0,c0,e0,V1,Y0,U0,M0,r0,z0,L1);else if(V.isDataTexture)I.texSubImage2D(I.TEXTURE_2D,H0,c0,e0,Y0,U0,r0,z0,L1.data);else if(V.isCompressedTexture)I.compressedTexSubImage2D(I.TEXTURE_2D,H0,c0,e0,L1.width,L1.height,r0,L1.data);else I.texSubImage2D(I.TEXTURE_2D,H0,c0,e0,Y0,U0,r0,z0,L1);if(I.pixelStorei(I.UNPACK_ROW_LENGTH,$0),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,T9),I.pixelStorei(I.UNPACK_SKIP_PIXELS,pH),I.pixelStorei(I.UNPACK_SKIP_ROWS,J9),I.pixelStorei(I.UNPACK_SKIP_IMAGES,m6),H0===0&&v.generateMipmaps)I.generateMipmap(h1);N0.unbindTexture()},this.copyTextureToTexture3D=function(V,v,p=null,g=null,y=0){if(V.isTexture!==!0)SH("WebGLRenderer: copyTextureToTexture3D function signature has changed."),p=arguments[0]||null,g=arguments[1]||null,V=arguments[2],v=arguments[3],y=arguments[4]||0;return SH('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(V,v,p,g,y)},this.initRenderTarget=function(V){if(V0.get(V).__webglFramebuffer===void 0)v0.setupRenderTarget(V)},this.initTexture=function(V){if(V.isCubeTexture)v0.setTextureCube(V,0);else if(V.isData3DTexture)v0.setTexture3D(V,0);else if(V.isDataArrayTexture||V.isCompressedArrayTexture)v0.setTexture2DArray(V,0);else v0.setTexture2D(V,0);N0.unbindTexture()},this.resetState=function(){S=0,B=0,q=null,N0.reset(),g0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gk}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(H){this._outputColorSpace=H;let E=this.getContext();E.drawingBufferColorspace=s0._getDrawingBufferColorSpace(H),E.unpackColorSpace=s0._getUnpackColorSpace()}}var DK="assets/logicprimal-hero.webp";var ND=QH(i6(),1),KP=Symbol.for("react.element"),WP=Symbol.for("react.fragment"),QP=Object.prototype.hasOwnProperty,AP=ND.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OP={key:!0,ref:!0,__self:!0,__source:!0};function UD(H,E,K){var W,Q={},A=null,O=null;K!==void 0&&(A=""+K),E.key!==void 0&&(A=""+E.key),E.ref!==void 0&&(O=E.ref);for(W in E)QP.call(E,W)&&!OP.hasOwnProperty(W)&&(Q[W]=E[W]);if(H&&H.defaultProps)for(W in E=H.defaultProps,E)Q[W]===void 0&&(Q[W]=E[W]);return{$$typeof:KP,type:H,key:A,ref:O,props:Q,_owner:AP.current}}var WZ=WP,x=UD,w0=UD;var QZ=({children:H,className:E="",href:K,onClick:W,variant:Q="primary"})=>{let A=M9.useRef(null),O=(k)=>{if(window.matchMedia("(pointer: coarse)").matches)return;let X=A.current;if(!X)return;let D=X.getBoundingClientRect(),U=k.clientX-(D.left+D.width/2),M=k.clientY-(D.top+D.height/2);X.style.transform=`translate(${U*0.25}px, ${M*0.35}px)`;let L=X.querySelector("span.inner");if(L)L.style.transform=`translate(${U*0.1}px, ${M*0.15}px)`},Z=()=>{let k=A.current;if(!k)return;k.style.transform="translate(0,0)";let X=k.querySelector("span.inner");if(X)X.style.transform="translate(0,0)"},Y=`relative inline-flex items-center justify-center h-[48px] px-8 rounded-full text-[13px] tracking-[0.14em] font-semibold transition-[transform,background,border] duration-300 will-change-transform select-none ${Q==="primary"?"bg-[#e8c48a] text-black hover:bg-[#f0d3a3] border border-[#e8c48a]":"bg-white/[0.06] backdrop-blur-xl text-white border border-white/15 hover:bg-white/[0.10] hover:border-white/25"} ${E}`;if(K)return x("a",{ref:A,href:K,onMouseMove:O,onMouseLeave:Z,className:Y,children:x("span",{className:"inner transition-transform duration-300 will-change-transform inline-flex items-center gap-2",children:H})});return x("button",{ref:A,onClick:W,onMouseMove:O,onMouseLeave:Z,className:Y,children:x("span",{className:"inner transition-transform duration-300 will-change-transform inline-flex items-center gap-2",children:H})})},fD=({children:H,className:E=""})=>{let K=M9.useRef(null);return x("div",{ref:K,onMouseMove:(A)=>{if(window.matchMedia("(pointer: coarse)").matches)return;let O=K.current;if(!O)return;let Z=O.getBoundingClientRect(),F=A.clientX-Z.left,Y=A.clientY-Z.top,k=(Y/Z.height-0.5)*-10,X=(F/Z.width-0.5)*12;O.style.transform=`perspective(900px) rotateX(${k}deg) rotateY(${X}deg) translateZ(0)`,O.style.setProperty("--mx",`${F/Z.width*100}%`),O.style.setProperty("--my",`${Y/Z.height*100}%`)},onMouseLeave:()=>{let A=K.current;if(!A)return;A.style.transform="perspective(900px) rotateX(0deg) rotateY(0deg)"},className:`will-change-transform transition-transform duration-300 ease-out [transform-style:preserve-3d] ${E}`,style:{["--mx"]:"50%",["--my"]:"50%"},children:H})};function AZ(){let H=M9.useRef(null),E=M9.useRef(null),K=M9.useRef(null),W=M9.useRef({x:0,y:0}),Q=M9.useRef({x:0,y:0}),[A,O]=M9.useState(!1);return M9.useEffect(()=>{O(window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768);let Z=(F)=>{if(Q.current.x=F.clientX/window.innerWidth*2-1,Q.current.y=-(F.clientY/window.innerHeight)*2+1,E.current)E.current.style.transform=`translate3d(${F.clientX}px, ${F.clientY}px, 0) translate(-50%,-50%)`;if(K.current)K.current.style.transform=`translate3d(${F.clientX}px, ${F.clientY}px, 0) translate(-50%,-50%)`};return window.addEventListener("mousemove",Z),()=>window.removeEventListener("mousemove",Z)},[]),M9.useEffect(()=>{if(!H.current)return;let Z=H.current,F=window.innerWidth<768,Y=F?120:350,k=new I5;k.fog=new WK(526343,6,14);let X=new s1(45,window.innerWidth/window.innerHeight,0.1,100);X.position.set(0,0,6);let D=new KZ({canvas:Z,alpha:!0,antialias:!0});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(window.innerWidth,window.innerHeight),D.setClearColor(0,0);let U=new FK(1.25,0.35,220,24,2,3),M=new YK({color:1118222,metalness:0.2,roughness:0.35,emissive:1709328,emissiveIntensity:0.15,transparent:!0,opacity:0.95}),L=new E9(U,M);k.add(L);let w=new j6({color:13215850,wireframe:!0,transparent:!0,opacity:0.42}),J=new E9(U,w);J.scale.set(1.001,1.001,1.001),k.add(J);let f=new ZK(0.28,64,64),N=new YK({color:14277081,metalness:1,roughness:0.08,clearcoat:1,clearcoatRoughness:0.1,envMapIntensity:1.2}),z=[],S=[{x:2.2,y:1.1,z:0.5},{x:-2.1,y:-0.9,z:0.8},{x:1.6,y:-1.6,z:-0.3},{x:-1.4,y:1.5,z:-0.6}];S.forEach((E0)=>{let A0=new E9(f,N);A0.position.set(E0.x,E0.y,E0.z),k.add(A0),z.push(A0)});let B=new Float32Array(Y*3);for(let E0=0;E0<Y;E0++){let A0=4+Math.random()*3,q0=Math.random()*Math.PI*2,C0=Math.acos(2*Math.random()-1);B[E0*3]=A0*Math.sin(C0)*Math.cos(q0),B[E0*3+1]=A0*Math.sin(C0)*Math.sin(q0),B[E0*3+2]=A0*Math.cos(C0)}let q=new L9;q.setAttribute("position",new Y9(B,3));let u=new AK({color:13215850,size:F?0.018:0.022,transparent:!0,opacity:0.55,sizeAttenuation:!0}),G=new l5(q,u);k.add(G);let P=new h5(16773846,1.2);P.position.set(3,4,5),k.add(P);let l=new JK(13215850,2,10);l.position.set(-2,-2,3),k.add(l);let n=new JK(9075296,1,8);n.position.set(2,-3,-2),k.add(n);let s=0,m=0,e=()=>{m=window.scrollY};window.addEventListener("scroll",e,{passive:!0});let d=new j5,_=()=>{s=requestAnimationFrame(_);let E0=d.getElapsedTime();W.current.x+=(Q.current.x-W.current.x)*0.06,W.current.y+=(Q.current.y-W.current.y)*0.06;let A0=1+Math.min(m*0.00025,0.35),q0=m*0.0004;L.rotation.x=E0*0.18+W.current.y*0.6+q0,L.rotation.y=E0*0.22+W.current.x*0.9,L.rotation.z=Math.sin(E0*0.3)*0.15,L.scale.set(A0,A0,A0),J.rotation.copy(L.rotation),J.scale.set(A0*1.02,A0*1.02,A0*1.02),z.forEach((C0,c)=>{let K0=S[c],R0=W.current.x*(1.2+c*0.15),P0=W.current.y*(1+c*0.12),Z0=K0.x+R0*0.9+Math.sin(E0*(0.4+c*0.07))*0.25,S0=K0.y+P0*0.8+Math.cos(E0*(0.35+c*0.05))*0.22,t0=K0.z+Math.sin(E0*0.5+c)*0.3;C0.position.x+=(Z0-C0.position.x)*0.04,C0.position.y+=(S0-C0.position.y)*0.04,C0.position.z+=(t0-C0.position.z)*0.04,C0.rotation.y=E0*0.6}),G.rotation.y=E0*0.05+W.current.x*0.15,G.rotation.x=E0*0.02+W.current.y*0.08,X.position.x=W.current.x*0.35,X.position.y=W.current.y*0.25,X.lookAt(0,0,0),D.render(k,X)};_();let b=()=>{X.aspect=window.innerWidth/window.innerHeight,X.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",b),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",b),window.removeEventListener("scroll",e),D.dispose(),U.dispose(),f.dispose(),q.dispose()}},[]),w0("div",{className:"relative min-h-screen bg-[#060606] text-[#efebe3] overflow-x-clip selection:bg-[#c9a86a]/30",children:[!A&&w0(WZ,{children:[x("div",{ref:E,className:"pointer-events-none fixed left-0 top-0 z-[9999] w-[44px] h-[44px] rounded-full border border-[#e8c48a]/40 mix-blend-difference hidden md:block",style:{transition:"transform 0.06s linear"}}),x("div",{ref:K,className:"pointer-events-none fixed left-0 top-0 z-[9999] w-[6px] h-[6px] rounded-full bg-[#e8c48a] hidden md:block",style:{transition:"transform 0.02s linear"}})]}),w0("div",{className:"pointer-events-none fixed inset-0 z-0",children:[x("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,106,0.18),transparent_60%),radial-gradient(ellipse_at_0%_80%,rgba(120,90,50,0.16),transparent_55%),radial-gradient(ellipse_at_100%_60%,rgba(255,255,255,0.06),transparent_50%)]"}),x("div",{className:"absolute inset-0 opacity-[0.035] mix-blend-soft-light",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`}}),x("div",{className:"absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_50%,transparent_55%,#000_92%)]"})]}),x("canvas",{ref:H,className:"fixed inset-0 w-full h-full z-0"}),x("nav",{className:"fixed top-0 inset-x-0 z-40",children:x("div",{className:"mx-auto max-w-[1280px] px-4 md:px-8 pt-4 md:pt-6",children:w0("div",{className:"flex items-center justify-between rounded-full bg-[#0e0e0e]/60 backdrop-blur-[18px] border border-white/[0.08] px-3 md:px-6 py-[10px] md:py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]",children:[w0("a",{href:"#",className:"flex items-center gap-3",children:[x("img",{loading:"lazy",decoding:"async",src:DK,alt:"LOGICPRIMAL",className:"w-8 h-8 md:w-9 md:h-9 rounded-full object-cover shadow-[0_0_20px_rgba(201,168,106,0.5)]"}),x("span",{className:"font-[700] tracking-[0.18em] text-[12px] md:text-[13px]",children:"LOGICPRIMAL"}),x("span",{className:"hidden md:inline text-[10px] tracking-[0.2em] text-white/40 ml-2 border-l border-white/10 pl-3",children:"EST 2025"})]}),w0("div",{className:"hidden lg:flex items-center gap-7 text-[11px] tracking-[0.16em] text-white/60",children:[x("a",{href:"#vision",className:"hover:text-white transition",children:"VISION"}),x("a",{href:"#ugc",className:"hover:text-white transition",children:"UGC"}),x("a",{href:"#services",className:"hover:text-white transition",children:"BRANDS"}),x("a",{href:"#models",className:"hover:text-white transition",children:"MODELS"}),x("a",{href:"#contact",className:"hover:text-white transition",children:"CONTACT"})]}),x("a",{href:"mailto:mminions58@email.com?subject=BOOK%20CALL%20-%20LOGICPRIMAL",className:"hidden md:inline-flex h-9 px-5 rounded-full bg-[#e8c48a] text-black text-[11px] tracking-[0.16em] font-semibold items-center hover:bg-[#f0d3a3] transition",children:"BOOK CALL"}),x("a",{href:"#contact",className:"lg:hidden h-9 w-9 rounded-full bg-white/10 border border-white/10 grid place-items-center",children:x("span",{className:"text-[18px]",children:"↗"})})]})})}),x("section",{className:"relative z-10 min-h-[100svh] flex items-center pt-28 md:pt-24",children:w0("div",{className:"mx-auto max-w-[1280px] w-full px-5 md:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center",children:[w0("div",{children:[w0("div",{className:"inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 text-[10px] tracking-[0.18em] text-white/70 mb-6 backdrop-blur",children:[x("span",{className:"w-1.5 h-1.5 rounded-full bg-[#e8c48a] shadow-[0_0_10px_#e8c48a] animate-pulse"}),"ENTERTAINMENT • UGC ADS CREATIVE • INFLUENCE"]}),w0("h1",{className:"font-black leading-[0.9] tracking-[-0.02em] text-[38px] md:text-[84px] uppercase",children:[x("span",{className:"block text-white",children:"WE BUILD"}),x("span",{className:"block text-[#e8c48a] [text-shadow:0_0_40px_rgba(232,196,138,0.35)]",children:"PERSONAL"}),x("span",{className:"block text-white",children:"BRANDS"}),x("span",{className:"block text-white/40",children:"THAT SELL."})]}),w0("p",{className:"mt-6 max-w-[520px] text-[14px] md:text-[15px] leading-[1.7] text-white/60",children:["UGC Ads Creative / Influence Models / Entertainment Company. We turn human behavior into scroll-stopping reels that convert on Meta & TikTok. Second business arm"," ",x("span",{className:"text-white",children:"@1busnet"})," — performance UGC for brands."]}),w0("div",{className:"mt-8 flex flex-wrap gap-4",children:[x(QZ,{href:"#ugc",children:"VIEW UGC REELS →"}),x(QZ,{variant:"ghost",href:"#contact",children:"BUILD MY BRAND"})]}),w0("div",{className:"mt-10 grid grid-cols-3 max-w-[420px] border-t border-white/10 pt-6",children:[w0("div",{children:[x("div",{className:"text-[22px] font-semibold text-white",children:"3.2x"}),x("div",{className:"text-[10px] tracking-[0.14em] text-white/40",children:"AVG ROAS LIFT"})]}),w0("div",{children:[x("div",{className:"text-[22px] font-semibold text-white",children:"180+"}),x("div",{className:"text-[10px] tracking-[0.14em] text-white/40",children:"UGC REELS SHIPPED"})]}),w0("div",{children:[x("div",{className:"text-[22px] font-semibold text-white",children:"24h"}),x("div",{className:"text-[10px] tracking-[0.14em] text-white/40",children:"HOOK → EDIT"})]})]})]}),x("div",{className:"relative mx-auto",children:w0("div",{className:"relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full grid place-items-center",children:[x("div",{className:"absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(232,196,138,0.28),transparent_62%)] blur-[10px]"}),x("div",{className:"absolute inset-[18%] rounded-full bg-[#0e0e0e]/40 backdrop-blur-[20px] border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]"}),x("div",{className:"absolute inset-0 rounded-full animate-[spin_36s_linear_infinite] border border-dashed border-[#e8c48a]/20"}),x("img",{loading:"lazy",decoding:"async",src:DK,alt:"Bronze Eagle",className:"relative w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full object-cover shadow-[0_0_60px_rgba(232,196,138,0.45),0_0_120px_rgba(232,196,138,0.2)] animate-[float_6s_ease-in-out_infinite]"}),x("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/70 backdrop-blur px-4 py-2 border border-white/10 text-[10px] tracking-[0.18em] whitespace-nowrap",children:"TORUS KNOT • CHROME SPHERES • INERTIA"})]})})]})}),x("section",{id:"vision",className:"relative z-10 py-20 md:py-28 border-t border-white/[0.06]",children:w0("div",{className:"mx-auto max-w-[1280px] px-5 md:px-8 grid md:grid-cols-12 gap-10",children:[w0("div",{className:"md:col-span-5",children:[x("div",{className:"text-[11px] tracking-[0.22em] text-[#e8c48a]",children:"VISION — LOGICPRIMAL"}),x("h2",{className:"mt-4 text-[28px] md:text-[44px] leading-[0.95] font-bold uppercase tracking-[-0.02em]",children:"We turn human behavior into UGC ads that convert."})]}),w0("div",{className:"md:col-span-7",children:[x("p",{className:"text-[18px] md:text-[22px] leading-[1.45] text-white/80 font-[300]",children:"Entertainment meets performance. Personal brand + brand UGC + influence model under one roof. Built for founders, creators & brands that want to sell without feeling like an ad."}),x("div",{className:"mt-8 grid sm:grid-cols-3 gap-4",children:[{k:"PSYCH",v:"Hooks from behavioral science, not guesswork."},{k:"PROOF",v:"Human + AI UGC stitched for retention & CTR."},{k:"PERFORM",v:"Creative built for ROAS, not just views."}].map((Z)=>w0("div",{className:"rounded-[18px] bg-white/[0.04] border border-white/[0.08] p-4 backdrop-blur",children:[x("div",{className:"text-[11px] tracking-[0.18em] text-[#e8c48a]",children:Z.k}),x("div",{className:"mt-2 text-[13px] leading-[1.5] text-white/60",children:Z.v})]},Z.k))})]})]})}),x("section",{id:"services",className:"relative z-10 py-16 md:py-24",children:w0("div",{className:"mx-auto max-w-[1280px] px-5 md:px-8",children:[w0("div",{className:"flex items-end justify-between gap-6 flex-wrap",children:[x("h3",{className:"text-[12px] tracking-[0.24em] text-white/40",children:"SERVICES • THREE PILLARS"}),x("div",{className:"text-[11px] tracking-[0.18em] text-white/30",children:"EST 2025 — ENTERTAINMENT COMPANY"})]}),x("div",{className:"mt-8 grid md:grid-cols-3 gap-5",children:[{title:"UGC Ads Creative",desc:"Scroll-stopping reels, hooks, scripts, AI + human UGC for Meta & TikTok. Built for CTR, watch-time, ROAS.",bullets:["Hook library • 120+ angles","AI + human mashups","Meta / TikTok native edits"]},{title:"Personal Brand",desc:"Psychology + business authority that monetizes. Content system that makes you the category.",bullets:["Positioning & story engine","Authority content pillars","Monetization funnel"]},{title:"Influence Model",desc:"Face models, AI models, creator network. The face that sells when you can't be on camera.",bullets:["Face model casting","AI UGC twins","Creator network access"]}].map((Z)=>x(fD,{className:"group",children:w0("div",{className:"relative rounded-[24px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/[0.10] p-6 md:p-8 backdrop-blur-xl overflow-hidden min-h-[320px] flex flex-col",children:[x("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(600px_circle_at_var(--mx)_var(--my),rgba(232,196,138,0.18),transparent_40%)]"}),w0("div",{className:"relative flex items-center gap-3",children:[x("div",{className:"w-9 h-9 rounded-full bg-[#e8c48a]/15 border border-[#e8c48a]/30 grid place-items-center text-[#e8c48a] text-[12px]",children:"◍"}),w0("div",{className:"text-[11px] tracking-[0.18em] text-white/50",children:["0",["1","2","3"][["UGC Ads Creative","Personal Brand","Influence Model"].indexOf(Z.title)]]})]}),x("h4",{className:"relative mt-6 text-[20px] font-semibold tracking-[-0.01em]",children:Z.title}),x("p",{className:"relative mt-3 text-[13px] leading-[1.6] text-white/60",children:Z.desc}),x("div",{className:"relative mt-auto pt-6 space-y-2",children:Z.bullets.map((F)=>w0("div",{className:"flex items-center gap-2 text-[11px] tracking-[0.06em] text-white/45",children:[x("span",{className:"w-1 h-1 rounded-full bg-[#e8c48a]"}),F]},F))}),x("div",{className:"absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#e8c48a]/10 blur-[20px]"})]})},Z.title))})]})}),x("section",{id:"ugc",className:"relative z-10 py-16 md:py-24 bg-[#0a0a0a]/50 backdrop-blur-[2px] border-y border-white/[0.06]",children:w0("div",{className:"mx-auto max-w-[1280px] px-5 md:px-8",children:[w0("div",{className:"flex flex-wrap items-baseline justify-between gap-4",children:[x("h3",{className:"text-[26px] md:text-[36px] font-bold tracking-[-0.02em] uppercase",children:"UGC Portfolio — 6 Reels"}),x("p",{className:"text-[12px] tracking-[0.14em] text-white/40 max-w-[420px]",children:"Six vertical UGC reels • Click any poster to watch in full-screen. Hover for 3D tilt."})]}),x("div",{className:"mt-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-5",children:[{id:"01",video:"videos/ugc-01.mp4",poster:"videos/posters/ugc-01.webp",ctr:"3.8%",roas:"2.7x",hook:"POV: I stopped paying for ads that look like ads"},{id:"02",video:"videos/ugc-02.mp4",poster:"videos/posters/ugc-02.webp",ctr:"4.2%",roas:"3.1x",hook:"This founder fixed churn with one UGC angle"},{id:"03",video:"videos/ugc-03.mp4",poster:"videos/posters/ugc-03.webp",ctr:"5.1%",roas:"4.0x",hook:"We tested 12 hooks — this one printed"},{id:"04",video:"videos/ugc-04.mp4",poster:"videos/posters/ugc-04.webp",ctr:"4.6%",roas:"3.4x",hook:"The hook that made people stop scrolling"},{id:"05",video:"videos/ugc-05.mp4",poster:"videos/posters/ugc-05.webp",ctr:"4.9%",roas:"3.7x",hook:"One creator angle. A much stronger offer."},{id:"06",video:"videos/ugc-06.mp4",poster:"videos/posters/ugc-06.webp",ctr:"5.3%",roas:"4.2x",hook:"Native content wins before the CTA lands"}].map((Z)=>x(fD,{className:"group",children:w0("div",{className:"relative rounded-[22px] border border-[#e8c48a]/25 bg-[#121212] overflow-hidden",children:[x("div",{className:"absolute inset-0 rounded-[22px] p-[1px] bg-gradient-to-b from-[#e8c48a]/40 to-transparent",children:x("div",{className:"w-full h-full rounded-[21px] bg-[#121212]"})}),w0("div",{className:"relative aspect-[9/14] bg-[radial-gradient(80%_60%_at_50%_30%,rgba(232,196,138,0.18),transparent),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] grid place-items-center",children:[w0("div",{className:"absolute z-10 top-3 left-3 right-3 flex items-start justify-between gap-2",children:[w0("span",{className:"px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] tracking-[0.16em]",children:["UGC AD ",Z.id]}),w0("div",{className:"flex items-center gap-2",children:[x("span",{className:"px-2.5 py-1 rounded-full bg-[#e8c48a]/15 border border-[#e8c48a]/30 text-[10px] tracking-[0.14em] text-[#e8c48a]",children:"9:16 • 10s"}),x("button",{type:"button",className:"px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] tracking-[0.1em] text-white transition", "data-preview-sound":"true", "aria-label":["Unmute UGC Ad ",Z.id," preview"].join(" "), children:"SOUND OFF"})]})]}),x("video",{className:"absolute inset-0 w-full h-full object-cover",poster:Z.poster,muted:!0,loop:!0,playsInline:!0,autoPlay:!0,preload:"auto","data-preview-src":Z.video,"data-preview-tap":"true",tabIndex:0,"aria-label":["Play or pause UGC Ad ",Z.id," preview"].join(" ")}),x("div",{className:"absolute inset-0 bg-black/20 transition group-hover:bg-black/5"}),x("button",{type:"button",className:"relative z-10 w-14 h-14 rounded-full bg-white text-black grid place-items-center shadow-[0_10px_30px_rgba(0,0,0,0.4)] group-hover:scale-110 transition", "data-reel-src":Z.video, "data-reel-title":["UGC Ad ",Z.id].join(""), "data-reel-hook":Z.hook, "aria-label":["Open UGC Ad ",Z.id," in full-screen viewer"].join(""), children:"▶"}),w0("div",{className:"absolute z-10 bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent",children:[x("div",{className:"text-[12px] leading-[1.4] text-white/90",children:Z.hook}),w0("div",{className:"mt-3 flex gap-2",children:[w0("span",{className:"px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[10px]",children:["CTR ",Z.ctr]}),w0("span",{className:"px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[10px]",children:["ROAS ",Z.roas]}),x("span",{className:"px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[10px]",children:"HOOK V1"})]})]})]}),w0("div",{className:"relative p-4 flex items-center justify-between",children:[x("div",{className:"text-[11px] tracking-[0.16em] text-white/50",children:"LOGICPRIMAL • @1busnet"}),x("a",{href:"https://instagram.com/1busnet",target:"_blank",rel:"noopener",className:"h-8 px-4 rounded-full bg-white text-black text-[11px] font-semibold tracking-[0.08em] inline-flex items-center hover:bg-[#e8c48a] transition",children:"VIEW REEL ↗"})]})]})},Z.id))}),x("div",{className:"mt-6 text-center",children:x("a",{href:"https://instagram.com/1busnet",target:"_blank",rel:"noopener",className:"text-[11px] tracking-[0.18em] text-white/40 hover:text-white underline underline-offset-8",children:"OPEN SECOND IG BUSINESS ARM @1busnet →"})})]})}),x("section",{id:"models",className:"relative z-10 py-16 md:py-24",children:w0("div",{className:"mx-auto max-w-[1280px] px-5 md:px-8 grid md:grid-cols-12 gap-8 items-center",children:[w0("div",{className:"md:col-span-7 rounded-[28px] bg-[#0f0f0f] border border-white/[0.08] p-7 md:p-10 relative overflow-hidden",children:[x("div",{className:"absolute -right-20 -top-20 w-[320px] h-[320px] rounded-full bg-[#e8c48a]/10 blur-[30px]"}),w0("div",{className:"relative",children:[x("div",{className:"text-[11px] tracking-[0.22em] text-[#e8c48a]",children:"SECOND BUSINESS • @1busnet"}),x("h3",{className:"mt-4 text-[24px] md:text-[32px] font-semibold leading-[1.05] tracking-[-0.02em]",children:"UGC ads for brands — built like entertainment, measured like performance."}),x("p",{className:"mt-4 text-[14px] leading-[1.7] text-white/60 max-w-[560px]",children:"Our second IG arm is the factory. Daily UGC drops, hook testing, creator ops. Brands plug in, we ship reels that look native and sell hard. Influence models + AI twins on tap."}),w0("div",{className:"mt-6 flex flex-wrap gap-3",children:[x("span",{className:"px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px]",children:"Meta Ads"}),x("span",{className:"px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px]",children:"TikTok Shop"}),x("span",{className:"px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px]",children:"AI UGC"}),x("span",{className:"px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px]",children:"Creator Network"})]}),x("div",{className:"mt-8",children:x(QZ,{href:"https://instagram.com/1busnet",children:"VISIT @1busnet"})})]})]}),w0("div",{className:"md:col-span-5 space-y-4",children:[w0("div",{className:"rounded-[22px] bg-gradient-to-b from-[#e8c48a]/15 to-white/[0.02] border border-[#e8c48a]/20 p-6",children:[x("div",{className:"text-[11px] tracking-[0.18em] text-[#e8c48a]",children:"INFLUENCE MODEL STACK"}),w0("div",{className:"mt-4 space-y-3 text-[13px] text-white/70",children:[w0("div",{className:"flex justify-between",children:[x("span",{children:"Face Models"}),x("span",{className:"text-white",children:"12 active"})]}),w0("div",{className:"flex justify-between",children:[x("span",{children:"AI Twins"}),x("span",{className:"text-white",children:"8 renders / day"})]}),w0("div",{className:"flex justify-between",children:[x("span",{children:"Avg Hook Rate"}),x("span",{className:"text-[#e8c48a]",children:"38%"})]})]})]}),w0("div",{className:"rounded-[22px] bg-[#0f0f0f] border border-white/[0.08] p-6",children:[x("div",{className:"text-[11px] tracking-[0.18em] text-white/40",children:"PERSONAL BRAND → ENTERTAINMENT"}),x("p",{className:"mt-3 text-[13px] leading-[1.6] text-white/60",children:"We don't make ads. We make people watch. Psychology, status, story — then the CTA feels inevitable."})]})]})]})}),x("section",{id:"contact",className:"relative z-10 py-16 md:py-24 border-t border-white/[0.06]",children:w0("div",{className:"mx-auto max-w-[1280px] px-5 md:px-8 grid md:grid-cols-12 gap-10",children:[w0("div",{className:"md:col-span-5",children:[x("h3",{className:"text-[28px] md:text-[40px] font-bold tracking-[-0.02em] leading-[0.95] uppercase",children:"BUILD MY BRAND."}),x("p",{className:"mt-4 text-[14px] leading-[1.7] text-white/60",children:"Tell us where growth is stuck. In 30 minutes, we’ll map the content engine, offer angle, and next move most likely to sell. No deck. No guesswork."}),w0("div",{className:"mt-8 rounded-[18px] bg-white/[0.04] border border-white/[0.08] p-4 flex items-center gap-4",children:[x("img",{loading:"lazy",decoding:"async",src:DK,className:"w-10 h-10 rounded-full object-cover",alt:"logo"}),w0("div",{children:[x("div",{className:"text-[12px] font-semibold tracking-[0.08em]",children:"mminions58@email.com"}),x("div",{className:"text-[11px] text-white/40",children:"Response < 24h • EST 2025"})]})]})]}),x("div",{className:"md:col-span-7",children:w0("form",{"aria-label":"LogicPrimal lead inquiry form",action:"https://formsubmit.co/mminions58@email.com",method:"POST",className:"rounded-[24px] bg-[#0f0f0f]/80 backdrop-blur border border-white/[0.08] p-6 md:p-8 space-y-4",children:[x("input",{type:"hidden",name:"_subject",value:"New LOGICPRIMAL Inquiry"}),x("input",{type:"hidden",name:"_captcha",value:"false"}),x("input",{type:"hidden",name:"_next",value:"https://wepworld45-jpg.github.io/Logicalprimal-brand-/thank-you.html"}),w0("div",{className:"grid md:grid-cols-2 gap-4",children:[w0("label",{className:"block",children:[x("span",{className:"text-[11px] tracking-[0.16em] text-white/50",children:"NAME"}),x("input",{name:"name",required:!0,autoComplete:"name","aria-label":"Your name",placeholder:"Founder / Brand",className:"mt-2 w-full h-12 rounded-full bg-white/[0.06] border border-white/10 px-5 text-[14px] outline-none focus:border-[#e8c48a]/40 placeholder:text-white/20"})]}),w0("label",{className:"block",children:[x("span",{className:"text-[11px] tracking-[0.16em] text-white/50",children:"EMAIL"}),x("input",{name:"email",type:"email",required:!0,autoComplete:"email","aria-label":"Your email address",placeholder:"you@brand.com",className:"mt-2 w-full h-12 rounded-full bg-white/[0.06] border border-white/10 px-5 text-[14px] outline-none focus:border-[#e8c48a]/40 placeholder:text-white/20"})]})]}),w0("label",{className:"block",children:[x("span",{className:"text-[11px] tracking-[0.16em] text-white/50",children:"MONTHLY CREATIVE BUDGET"}),w0("select",{name:"budget",required:!0,"aria-label":"Monthly creative budget",className:"mt-2 w-full h-12 rounded-full bg-white/[0.06] border border-white/10 px-5 text-[14px] outline-none focus:border-[#e8c48a]/40",children:[x("option",{className:"text-black",value:"",disabled:!0,selected:!0,children:"Choose a range"}),x("option",{className:"text-black",value:"Under $1k",children:"Under $1k"}),x("option",{className:"text-black",value:"$1k-$3k",children:"$1k–$3k"}),x("option",{className:"text-black",value:"$3k-$10k",children:"$3k–$10k"}),x("option",{className:"text-black",value:"$10k+",children:"$10k+"}),x("option",{className:"text-black",value:"Not sure yet",children:"Not sure yet"})]})]}),w0("label",{className:"block",children:[x("span",{className:"text-[11px] tracking-[0.16em] text-white/50",children:"WHAT DO YOU NEED?"}),w0("select",{name:"service",className:"mt-2 w-full h-12 rounded-full bg-white/[0.06] border border-white/10 px-5 text-[14px] outline-none focus:border-[#e8c48a]/40",children:[x("option",{className:"text-black",value:"UGC Ads Creative",children:"UGC Ads Creative"}),x("option",{className:"text-black",value:"Personal Brand",children:"Personal Brand"}),x("option",{className:"text-black",value:"Influence Model",children:"Influence Model"}),x("option",{className:"text-black",value:"Full Stack",children:"Full Stack (UGC + Brand + Model)"})]})]}),w0("label",{className:"block",children:[x("span",{className:"text-[11px] tracking-[0.16em] text-white/50",children:"MESSAGE"}),x("textarea",{name:"message",required:!0,rows:4,placeholder:"Niche, offer, current CTR, monthly spend...",className:"mt-2 w-full rounded-[18px] bg-white/[0.06] border border-white/10 p-4 text-[14px] outline-none focus:border-[#e8c48a]/40 placeholder:text-white/20 resize-none"})]}),w0("label",{className:"flex items-start gap-2 text-[11px] text-white/40",children:[x("input",{type:"checkbox",name:"consent",required:!0,className:"mt-0.5 accent-[#e8c48a]"}),x("span",{children:"I agree to be contacted about this inquiry."})]}),w0("div",{className:"flex flex-wrap items-center gap-3 pt-2",children:[x("button",{type:"submit",className:"h-12 px-8 rounded-full bg-[#e8c48a] text-black text-[12px] tracking-[0.14em] font-semibold hover:bg-[#f0d3a3] transition",children:"GET MY GROWTH MAP →"}),x("span",{className:"text-[11px] text-white/30",children:"Reply within 24h • No pitch deck required"})]})]})})]})}),x("footer",{className:"relative z-10 border-t border-white/[0.06] py-10",children:w0("div",{className:"mx-auto max-w-[1280px] px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4",children:[w0("div",{className:"flex items-center gap-3 text-[11px] tracking-[0.18em] text-white/40",children:[x("img",{loading:"lazy",decoding:"async",src:DK,className:"w-6 h-6 rounded-full",alt:"logo"}),"LOGICPRIMAL ENTERTAINMENT EST 2025 • UGC ADS CREATIVE + PERSONAL BRAND + INFLUENCE MODEL"]}),w0("div",{className:"flex gap-5 text-[11px] tracking-[0.14em] text-white/30",children:[x("a",{href:"https://instagram.com/1busnet",target:"_blank",rel:"noopener",className:"hover:text-white",children:"IG @1busnet"}),x("a",{href:"mailto:mminions58@email.com",className:"hover:text-white",children:"EMAIL"})]})]})}),x("div",{className:"fixed bottom-0 inset-x-0 z-30 md:hidden",children:x("div",{className:"mx-3 mb-3 rounded-full bg-[#111]/85 backdrop-blur-[18px] border border-white/10 px-2 py-2 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.6)]",children:[{label:"VISION",href:"#vision"},{label:"UGC",href:"#ugc"},{label:"BRANDS",href:"#services"},{label:"MODELS",href:"#models"},{label:"CONTACT",href:"#contact"}].map((Z)=>x("a",{href:Z.href,className:"min-h-[48px] min-w-[48px] px-3 grid place-items-center rounded-full text-[10px] tracking-[0.14em] text-white/70 hover:text-white hover:bg-white/10",children:Z.label},Z.label))})}),x("style",{children:`
        
        html{font-family:Inter,system-ui,sans-serif;scroll-behavior:smooth}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
      `})]})}MD.createRoot(document.getElementById("root")).render(x(LD.default.StrictMode,{children:x(AZ,{})}));


/* LOGICPRIMAL STRATEGY SECTIONS */
(function () {
  const strategyStyles = `
    .lp-strategy-wrap{position:relative;z-index:10;padding:0 24px 96px;color:#f7f3ec}
    .lp-strategy-shell{max-width:1180px;margin:0 auto}
    .lp-jumpbar{display:flex;flex-wrap:wrap;gap:10px;padding:16px 0 34px;border-top:1px solid rgba(255,255,255,.08)}
    .lp-jumpbar a{color:rgba(255,255,255,.64);font-size:10px;letter-spacing:.16em;text-decoration:none;border:1px solid rgba(255,255,255,.1);border-radius:999px;padding:9px 13px;transition:.2s ease}
    .lp-jumpbar a:hover,.lp-jumpbar a:focus-visible{color:#080808;background:#e8c48a;border-color:#e8c48a;outline:none}
    .lp-strategy-section{padding:82px 0;border-top:1px solid rgba(255,255,255,.07)}
    .lp-kicker{margin:0 0 16px;color:#e8c48a;font-size:10px;letter-spacing:.2em;font-weight:700}
    .lp-title{max-width:850px;margin:0;color:#fff;font-size:clamp(34px,6vw,76px);line-height:.96;letter-spacing:-.055em;font-weight:800}
    .lp-title em{color:#e8c48a;font-style:normal}
    .lp-lede{max-width:640px;margin:20px 0 0;color:rgba(255,255,255,.62);font-size:16px;line-height:1.65}
    .lp-case-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(280px,.85fr);gap:18px;margin-top:36px}
    .lp-panel{border:1px solid rgba(255,255,255,.1);border-radius:24px;background:linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.025));padding:28px;box-shadow:0 24px 70px rgba(0,0,0,.18)}
    .lp-panel h3{margin:0 0 12px;color:#fff;font-size:24px;letter-spacing:-.03em}
    .lp-panel p{margin:0;color:rgba(255,255,255,.62);line-height:1.65}
    .lp-label{display:block;margin:20px 0 7px;color:#e8c48a;font-size:10px;letter-spacing:.18em;font-weight:700}
    .lp-deliverables{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px}
    .lp-deliverable{border-radius:15px;background:#101010;border:1px solid rgba(255,255,255,.08);padding:15px;color:#fff;font-size:12px;line-height:1.4}
    .lp-link{display:inline-flex;align-items:center;gap:8px;margin-top:24px;color:#080808;background:#e8c48a;border-radius:999px;padding:12px 16px;font-size:10px;font-weight:800;letter-spacing:.12em;text-decoration:none;transition:transform .2s ease,background .2s ease}
    .lp-link:hover,.lp-link:focus-visible{transform:translateY(-2px);background:#f4d8a8;outline:none}
    .lp-flow{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:34px}
    .lp-lab-step{min-height:155px;text-align:left;border:1px solid rgba(255,255,255,.1);border-radius:20px;background:#0e0e0e;color:#fff;padding:20px;cursor:pointer;transition:.25s ease}
    .lp-lab-step:hover,.lp-lab-step:focus-visible,.lp-lab-step[aria-pressed=true]{border-color:#e8c48a;background:linear-gradient(145deg,rgba(232,196,138,.18),rgba(255,255,255,.03));transform:translateY(-5px);outline:none}
    .lp-step-num{display:block;color:#e8c48a;font-size:11px;letter-spacing:.14em;margin-bottom:28px}
    .lp-step-name{display:block;font-size:16px;font-weight:800;letter-spacing:-.02em}
    .lp-step-detail{margin-top:20px;min-height:24px;color:rgba(255,255,255,.55);font-size:13px;line-height:1.5}
    .lp-ai-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:stretch;margin-top:34px}
    .lp-ai-sequence{display:grid;gap:10px;align-content:center}
    .lp-ai-node{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,.1);padding:14px 0;color:#fff;font-size:16px}
    .lp-ai-node span{color:#e8c48a;font-size:10px;letter-spacing:.16em}
    .lp-capabilities{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:34px}
    .lp-capability{min-height:260px;position:relative;overflow:hidden;border-radius:22px;border:1px solid rgba(255,255,255,.12);background:#111;transition:transform .25s ease,border-color .25s ease}
    .lp-capability:hover,.lp-capability:focus-within{transform:translateY(-7px);border-color:rgba(232,196,138,.8)}
    .lp-capability img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.28;transition:transform .5s ease,opacity .3s ease}
    .lp-capability:hover img{transform:scale(1.08);opacity:.42}
    .lp-capability-content{position:relative;z-index:1;display:flex;min-height:260px;flex-direction:column;justify-content:space-between;padding:20px;background:linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.84))}
    .lp-capability-num{color:#e8c48a;font-size:11px;letter-spacing:.16em}
    .lp-capability h3{margin:0;color:#fff;font-size:22px;letter-spacing:-.03em}
    .lp-capability p{margin:8px 0 0;color:rgba(255,255,255,.62);font-size:12px;line-height:1.5}
    .lp-principles{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:34px}
    .lp-principle{border-top:2px solid #e8c48a;padding-top:18px}
    .lp-principle strong{display:block;color:#e8c48a;font-size:11px;letter-spacing:.16em}
    .lp-principle h3{margin:18px 0 8px;color:#fff;font-size:28px}
    .lp-principle p{margin:0;color:rgba(255,255,255,.58);line-height:1.6}
    .lp-audience-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:34px}
    .lp-audience{border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:20px;background:#0e0e0e}
    .lp-audience h3{margin:0 0 10px;color:#fff;font-size:17px}
    .lp-audience p{margin:0;color:rgba(255,255,255,.58);font-size:12px;line-height:1.55}
    .lp-scale-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:30px}
    .lp-scale{border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:24px;background:#0e0e0e}
    .lp-scale h3{margin:0 0 10px;color:#fff;font-size:18px}
    .lp-scale p{margin:0;color:rgba(255,255,255,.58);line-height:1.55;font-size:13px}
    .lp-intake{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:32px;border:1px solid rgba(232,196,138,.3);border-radius:22px;padding:24px;background:linear-gradient(90deg,rgba(232,196,138,.12),rgba(255,255,255,.03))}
    .lp-intake strong{display:block;color:#e8c48a;font-size:10px;letter-spacing:.18em;margin-bottom:8px}
    .lp-intake h3{margin:0;color:#fff;font-size:clamp(22px,3vw,36px);letter-spacing:-.04em}
    .lp-intake p{margin:8px 0 0;color:rgba(255,255,255,.58)}
    .lp-form-extra{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-bottom:16px}
    .lp-form-extra label{display:block;color:rgba(255,255,255,.58);font-size:10px;letter-spacing:.16em}
    .lp-form-extra input,.lp-form-extra select{display:block;width:100%;height:48px;margin-top:8px;border:1px solid rgba(255,255,255,.1);border-radius:999px;background:rgba(255,255,255,.06);color:#fff;padding:0 16px;font-size:14px;outline:none}
    .lp-form-extra input:focus,.lp-form-extra select:focus{border-color:rgba(232,196,138,.65)}
    @media(max-width:900px){.lp-case-grid,.lp-ai-grid{grid-template-columns:1fr}.lp-flow{grid-template-columns:repeat(3,1fr)}.lp-capabilities{grid-template-columns:repeat(2,1fr)}.lp-audience-grid{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:620px){.lp-strategy-wrap{padding:0 16px 64px}.lp-strategy-section{padding:58px 0}.lp-flow{grid-template-columns:1fr 1fr}.lp-capabilities,.lp-principles,.lp-scale-grid{grid-template-columns:1fr}.lp-audience-grid{grid-template-columns:1fr}.lp-deliverables{grid-template-columns:1fr}.lp-intake{align-items:flex-start;flex-direction:column}.lp-form-extra{grid-template-columns:1fr}.lp-title{font-size:clamp(36px,12vw,58px)}}
    @media(prefers-reduced-motion:reduce){.lp-lab-step,.lp-capability,.lp-capability img,.lp-link{transition:none!important}}
  `;
  const strategyHtml = `
    <div class="lp-strategy-wrap" id="lp-strategy-sections">
      <div class="lp-strategy-shell">
        <nav class="lp-jumpbar" aria-label="Portfolio sections">
          <a href="#lp-work">WORK</a><a href="#lp-services">SERVICES</a><a href="#lp-lab">LAB</a><a href="#lp-about">ABOUT</a><a href="#contact">START A PROJECT</a>
        </nav>
        <section class="lp-strategy-section" id="lp-work">
          <p class="lp-kicker">SELECTED WORK • STRATEGY FIRST</p>
          <h2 class="lp-title">Every project should have a <em>reason to exist.</em></h2>
          <p class="lp-lede">The work is not just a collection of videos. It is the problem, the idea, the creative system, and the assets that move the audience toward action.</p>
          <div class="lp-case-grid">
            <article class="lp-panel">
              <p class="lp-kicker">HOTEL / HOSPITALITY</p><h3>A first-person visual story for desire.</h3>
              <span class="lp-label">THE PROBLEM</span><p>Traditional hotel content looked polished but failed to create desire.</p>
              <span class="lp-label">THE IDEA</span><p>Turn the hotel experience into a first-person visual story.</p>
              <span class="lp-label">CREATIVE</span><p>UGC + cinematic AI production.</p>
              <span class="lp-label">DELIVERABLES</span>
              <div class="lp-deliverables"><span class="lp-deliverable">3 UGC ads</span><span class="lp-deliverable">2 cinematic films</span><span class="lp-deliverable">12 social assets</span></div>
              <a class="lp-link" href="#ugc">WATCH CASE STUDY →</a>
            </article>
            <aside class="lp-panel"><p class="lp-kicker">THE SHIFT</p><h3>From editor to creative strategist.</h3><p>Each piece now answers a commercial question: what should people feel, understand, and do next?</p><a class="lp-link" href="#lp-lab">SEE THE PROCESS →</a></aside>
          </div>
        </section>
        <section class="lp-strategy-section" id="lp-lab">
          <p class="lp-kicker">THE CREATIVE LAB</p><h2 class="lp-title">A process for finding <em>what works.</em></h2>
          <p class="lp-lede">Instead of pretending every piece is a finished campaign, the lab shows the experimentation behind the result.</p>
          <div class="lp-flow" role="list" aria-label="Creative Lab process">
            <button class="lp-lab-step" type="button" aria-pressed="true" data-lab-detail="Start with multiple behavioral angles, not one favorite line."><span class="lp-step-num">01</span><span class="lp-step-name">HOOK TEST</span></button>
            <button class="lp-lab-step" type="button" aria-pressed="false" data-lab-detail="Curiosity, fear, desire, and social proof become testable hypotheses."><span class="lp-step-num">02</span><span class="lp-step-name">CONCEPT TEST</span></button>
            <button class="lp-lab-step" type="button" aria-pressed="false" data-lab-detail="A / B / C variations make the creative direction visible."><span class="lp-step-num">03</span><span class="lp-step-name">CREATIVE</span></button>
            <button class="lp-lab-step" type="button" aria-pressed="false" data-lab-detail="Learn what earned attention, retention, and intent."><span class="lp-step-num">04</span><span class="lp-step-name">LEARN</span></button>
            <button class="lp-lab-step" type="button" aria-pressed="false" data-lab-detail="Feed the learning back into the next iteration."><span class="lp-step-num">05</span><span class="lp-step-name">ITERATE</span></button>
          </div>
          <p class="lp-step-detail" data-lab-output aria-live="polite">Start with multiple behavioral angles, not one favorite line.</p>
        </section>
        <section class="lp-strategy-section" id="lp-services">
          <p class="lp-kicker">AI-NATIVE PRODUCTION</p><h2 class="lp-title">More creative directions before committing <em>resources.</em></h2>
          <div class="lp-ai-grid"><div class="lp-panel"><h3>Traditional production makes every iteration expensive.</h3><p>AI lets us explore more creative directions before committing resources. The advantage is not the tool; it is the number of useful hypotheses we can test.</p></div><div class="lp-panel lp-ai-sequence" aria-label="AI-native production sequence"><div class="lp-ai-node"><span>01</span>CONCEPT</div><div class="lp-ai-node"><span>02</span>STORYBOARD</div><div class="lp-ai-node"><span>03</span>PRODUCT</div><div class="lp-ai-node"><span>04</span>ENVIRONMENT</div><div class="lp-ai-node"><span>05</span>FILM → AD</div></div></div>
        </section>
        <section class="lp-strategy-section" id="lp-capabilities">
          <p class="lp-kicker">CAPABILITIES</p><h2 class="lp-title">Built for brands that need <em>attention.</em></h2>
          <div class="lp-capabilities">
            <article class="lp-capability" tabindex="0"><img src="videos/posters/ugc-01.webp" alt="UGC creator preview" loading="lazy" decoding="async"><div class="lp-capability-content"><span class="lp-capability-num">01</span><div><h3>UGC ADS</h3><p>Hooks, scripts, creators, product demos, and performance creatives.</p></div></div></article>
            <article class="lp-capability" tabindex="0"><img src="videos/posters/ugc-02.webp" alt="AI product film preview" loading="lazy" decoding="async"><div class="lp-capability-content"><span class="lp-capability-num">02</span><div><h3>AI PRODUCT FILMS</h3><p>Cinematic campaigns without traditional production limitations.</p></div></div></article>
            <article class="lp-capability" tabindex="0"><img src="videos/posters/ugc-03.webp" alt="Product visual preview" loading="lazy" decoding="async"><div class="lp-capability-content"><span class="lp-capability-num">03</span><div><h3>PRODUCT VISUALS</h3><p>Campaign photography, social assets, and product worlds.</p></div></div></article>
            <article class="lp-capability" tabindex="0"><img src="videos/posters/ugc-04.webp" alt="Creative strategy preview" loading="lazy" decoding="async"><div class="lp-capability-content"><span class="lp-capability-num">04</span><div><h3>CREATIVE STRATEGY</h3><p>Hooks, concepts, positioning, and creative testing.</p></div></div></article>
          </div>
        </section>
        <section class="lp-strategy-section" id="lp-about">
          <p class="lp-kicker">WHY LOGICPRIMAL</p><h2 class="lp-title">Think. Build. <em>Test.</em></h2><p class="lp-lede">I approach creative problems like systems: understand the behavior, build the hypothesis, and compare what earns attention.</p>
          <div class="lp-principles"><article class="lp-principle"><strong>01 — THINK</strong><h3>Understand</h3><p>Understand the product, audience, and desired behavior before making the first frame.</p></article><article class="lp-principle"><strong>02 — BUILD</strong><h3>Make</h3><p>Turn the hypothesis into creative that feels native, clear, and commercially useful.</p></article><article class="lp-principle"><strong>03 — TEST</strong><h3>Compare</h3><p>Compare hooks, concepts, and formats so taste becomes a repeatable learning loop.</p></article></div>
        </section>
        <section class="lp-strategy-section" id="lp-audiences">
          <p class="lp-kicker">BUILT FOR BRANDS THAT NEED ATTENTION</p><h2 class="lp-title">Make the right audience <em>see themselves.</em></h2>
          <div class="lp-audience-grid"><article class="lp-audience"><h3>HOTELS</h3><p>Make the experience desirable before the guest arrives.</p></article><article class="lp-audience"><h3>RESTAURANTS</h3><p>Turn food into visual appetite.</p></article><article class="lp-audience"><h3>D2C</h3><p>Turn products into scroll-stopping creative.</p></article><article class="lp-audience"><h3>STARTUPS</h3><p>Explain the idea before people lose interest.</p></article><article class="lp-audience"><h3>PERSONAL BRANDS</h3><p>Turn expertise into content people actually watch.</p></article></div>
          <div class="lp-intake"><div><strong>HAVE SOMETHING WORTH SELLING?</strong><h3>START A PROJECT.</h3><p>Bring the product, the problem, and the ambition.</p></div><a class="lp-link" href="#contact">SEND PROJECT →</a></div>
        </section>
        <section class="lp-strategy-section" id="lp-scale">
          <p class="lp-kicker">PROJECT SCALE</p><h2 class="lp-title">Choose the creative system <em>you need.</em></h2>
          <div class="lp-scale-grid"><article class="lp-scale"><h3>SINGLE ASSET</h3><p>One focused creative for one clear commercial job.</p></article><article class="lp-scale"><h3>CAMPAIGN</h3><p>Multiple concepts, variations, and angles built to learn.</p></article><article class="lp-scale"><h3>CREATIVE SYSTEM</h3><p>Ongoing production and testing that compounds over time.</p></article></div>
        </section>
      </div>
    </div>
  `;

  function addExtraFormFields() {
    const form = document.querySelector('form[aria-label="LogicPrimal lead inquiry form"]');
    if (!form || form.querySelector('.lp-form-extra')) return;
    const extra = document.createElement('div');
    extra.className = 'lp-form-extra';
    extra.innerHTML = `
      <label>BRAND<input name="brand" autocomplete="organization" placeholder="Brand or company" /></label>
      <label>WEBSITE / INSTAGRAM<input name="website_or_instagram" placeholder="https:// or @handle" /></label>
      <label>TIMELINE<select name="timeline"><option value="">When do you want to start?</option><option>ASAP</option><option>Within 30 days</option><option>Within 60 days</option><option>Exploring</option></select></label>
      <label>PROJECT SCALE<select name="project_scale"><option value="Single asset">Single asset</option><option value="Campaign">Campaign</option><option value="Creative system">Creative system</option></select></label>
    `;
    const textarea = form.querySelector('textarea');
    if (textarea) {
      const textareaField = textarea.closest('label') || textarea.parentNode;
      textareaField.parentNode.insertBefore(extra, textareaField);
    }
  }

  function inject() {
    if (document.querySelector('#lp-strategy-sections')) return true;
    const ugc = document.querySelector('#ugc');
    if (!ugc) return false;
    const style = document.createElement('style');
    style.setAttribute('data-logicalprimal-strategy', 'true');
    style.textContent = strategyStyles;
    document.head.appendChild(style);
    ugc.insertAdjacentHTML('afterend', strategyHtml);
    document.querySelectorAll('.lp-lab-step').forEach(function (step) {
      step.addEventListener('click', function () {
        document.querySelectorAll('.lp-lab-step').forEach(function (item) { item.setAttribute('aria-pressed', item === step ? 'true' : 'false'); });
        const output = document.querySelector('[data-lab-output]');
        if (output) output.textContent = step.getAttribute('data-lab-detail') || '';
      });
    });
    addExtraFormFields();
    return true;
  }

  let attempts = 0;
  const waitForApp = setInterval(function () {
    attempts += 1;
    if (inject() || attempts > 80) clearInterval(waitForApp);
  }, 100);
})();
