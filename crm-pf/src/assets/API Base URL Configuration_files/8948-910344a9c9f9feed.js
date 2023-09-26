"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8948],{51959:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(35250);function a(e){var n=e.id,t=e.label,a=e.checked,s=e.onChange,i=e.disabled;return(0,r.jsxs)("div",{className:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",type:"checkbox",disabled:i,onChange:s,checked:a,id:n}),(0,r.jsx)("label",{className:"form-check-label text-gray-800 dark:text-gray-100",htmlFor:n,children:t})]})}},28512:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(39324),a=t(22830),s=t(4337),i=t(35250),o=t(70079),c=t(1454),l=t(94968),u=t(32004),d=t(21389),f=t(19012);function p(){var e=(0,s._)(["flex ml-auto gap-2"]);return p=function(){return e},e}var h=(0,l.vU)({copied:{id:"CopyButton.copied",defaultMessage:"Copied!",description:"Text displayed when the content has been copied"}});function m(e){var n=e.buttonText,t=e.onCopy,s=e.className,l=(0,a._)((0,o.useState)(!1),2),d=l[0],p=l[1],m=(0,f.Z)(),x=(0,o.useCallback)(function(e){e.stopPropagation(),t(),p(!0),setTimeout(function(){m()&&p(!1)},2e3)},[m,t]);return(0,i.jsxs)(i.Fragment,{children:[!d&&(0,i.jsxs)(g,{onClick:x,className:s,children:[(0,i.jsx)(c.j4u,{className:"icon-sm"}),n]}),d&&(0,i.jsxs)(g,{className:s,children:[(0,i.jsx)(c.UgA,{className:"icon-sm"}),n&&(0,i.jsx)(u.Z,(0,r._)({},h.copied))]})]})}var g=d.Z.button(p())},51973:function(e,n,t){var r=t(39324),a=t(22830),s=t(4337),i=t(35250),o=t(19841),c=t(70079),l=t(21389);function u(){var e=(0,s._)(["absolute right-0 top-1/2 -translate-y-1/2"]);return u=function(){return e},e}n.Z=c.forwardRef(function(e,n){var t=e.name,s=e.placeholder,l=e.type,u=e.displayName,f=e.onChange,p=e.onBlur,h=e.value,m=e.saveOnBlur,g=e.icon,x=e.onInputIconClick,v=e.className,b=e.autoComplete,y=e.autoFocus,_=e.onPressEnter,w=(0,a._)((0,c.useState)(h),2),j=w[0],k=w[1],N=(0,c.useCallback)(function(e){null==p||p(e),m&&k(e.target.value)},[p,m]),P=(0,c.useCallback)(function(e){null==f||f(e),m&&k(e.target.value)},[f,m]),C=(0,c.useCallback)(function(e){"Enter"===e.key&&_&&(e.preventDefault(),_())},[_]);(0,c.useEffect)(function(){k(h)},[h]);var I=(0,r._)({},m?{}:{value:h},m?{value:j}:{});return(0,i.jsxs)("div",{className:(0,o.default)("rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700",v),children:[(0,i.jsx)("label",{htmlFor:t,className:"block text-xs font-medium text-gray-900 dark:text-gray-100",children:u}),(0,i.jsxs)("div",{className:(0,o.default)(u&&"mt-1","relative"),children:[(0,i.jsx)("input",(0,r._)({ref:n,type:l,name:t,id:t,className:(0,o.default)("block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm",null!=g&&"pr-6"),placeholder:s,onBlur:N,onChange:P,onKeyDown:C,autoComplete:b,autoFocus:y},I)),null!=g&&(0,i.jsx)(d,{onClick:x,children:(0,i.jsx)(g,{className:"icon-sm"})})]})]})});var d=l.Z.button(u())},31486:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(35250),a=t(91809);function s(e){var n=e.plugin,t=n.manifest.name_for_human;return(0,r.jsxs)("div",{className:"flex gap-4 rounded bg-gray-50 px-4 py-2 dark:bg-gray-800",children:[(0,r.jsx)(a.Z,{url:n.manifest.logo_url,name:t,size:32,className:"flex-shrink-0"}),(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsx)("h2",{className:"align-top text-base font-medium",children:t}),(0,r.jsx)("div",{className:"text-sm",children:n.manifest.description_for_human})]})]})}},48759:function(e,n,t){t.d(n,{bf:function(){return d},q6:function(){return u},rC:function(){return l}});var r=t(39324),a=t(70216),s=t(22830),i=t(35250),o=t(70079),c=t(1454);function l(e){var n=e.manifestValidationInfo,t=(0,a._)(e,["manifestValidationInfo"]),s=n.manifest_dict,o=n.warnings,c=n.errors;return(0,i.jsx)(f,(0,r._)({name:"manifest",content:s,warnings:o,errors:c},t))}function u(e){var n=e.apiValidationInfo,t=(0,a._)(e,["apiValidationInfo"]),s=n.openapi_spec_dict,o=n.warnings,c=n.errors;return(0,i.jsx)(f,(0,r._)({name:"OpenAPI spec",content:s,warnings:o,errors:c},t))}function d(e){var n=e.apiValidationInfo,t=(0,a._)(e,["apiValidationInfo"]),s=n.api_typescript;return s?(0,i.jsx)(p,(0,r._)({text:"Prompt for ChatGPT",content:s},t)):null}function f(e){var n=e.name,t=e.content,s=e.warnings,o=e.errors,l=(0,a._)(e,["name","content","warnings","errors"]),u=s&&s.length>0,d=o&&o.length>0,f="Validated ".concat(n),h=(0,i.jsx)(c.UgA,{className:"icon-sm text-green-500"});return d?(f="Errors in ".concat(n),h=(0,i.jsx)(c.q5L,{className:"icon-sm text-red-500"})):u&&(f="Warnings in ".concat(n),h=(0,i.jsx)(c.bcx,{className:"icon-sm  text-yellow-500"})),(0,i.jsx)(p,(0,r._)({icon:h,text:f,content:t,warnings:s,errors:o},l))}function p(e){var n=e.icon,t=e.text,r=e.content,a=e.warnings,l=e.errors,u=e.expanded,d=e.onChangeExpanded,f=(0,s._)((0,o.useState)(!1),2),p=f[0],h=f[1],m=null!=u?u:p,g=(0,o.useCallback)(function(){d?d(!m):h(function(e){return!e})},[m,d]);return(0,i.jsxs)("div",{className:"flex flex-col gap-2 text-sm",children:[(0,i.jsxs)("div",{className:"flex items-center gap-1",children:[n&&(0,i.jsx)("div",{children:n}),(0,i.jsx)("div",{children:t}),(0,i.jsx)("div",{role:"button",className:"cursor-pointer text-gray-500 hover:text-gray-700",onClick:g,children:m?(0,i.jsx)(c.rH8,{className:"icon-sm"}):(0,i.jsx)(c.bTu,{className:"icon-sm"})})]}),m&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex flex-col gap-2 font-semibold",children:[l&&l.map(function(e,n){return(0,i.jsx)("div",{className:"text-red-500",children:e},n)}),a&&a.map(function(e,n){return(0,i.jsx)("div",{className:"text-yellow-500",children:e},n)})]}),r&&(0,i.jsx)("pre",{className:"overflow-auto whitespace-pre-wrap text-xs",children:"string"==typeof r?r:JSON.stringify(r,null,2)})]})]})}},15608:function(e,n,t){t.d(n,{$L:function(){return b},Bb:function(){return v},U$:function(){return g},Up:function(){return y},nT:function(){return w},qo:function(){return x},sd:function(){return j}});var r=t(21722),a=t(39324),s=t(71209),i=t(22830),o=t(81949),c=t(75883),l=t(95137),u=t(13995),d=t(74686),f=t(70079),p=t(73908),h=t(35101),m=t(14444);function g(e){var n=e.onSuccess,t=e.onError,r=e.onSettled,a=(0,u.NL)(),s=(0,d.D)(l.ZP.updatePluginUserSettings.bind(l.ZP),{onSuccess:function(e){v(e,a),b(e,a),n(e)},onError:t,onSettled:r}).mutate;return(0,f.useCallback)(function(e){s({pluginId:e,isInstalled:!0})},[s])}function x(e){var n=e.onSuccess,t=e.onError,r=e.onSettled,a=(0,u.NL)(),s=(0,d.D)(l.ZP.updatePluginUserSettings.bind(l.ZP),{onSuccess:function(e){(function(e,n){var t=m.Z;n.setQueryData(t,function(n){var t=(0,o._)((null==n?void 0:n.items)||[]),r=t.findIndex(function(n){return n.id===e.id});return -1!==r&&t.splice(r,1),{count:t.length,items:t}})})(e,a),b(e,a),n(e)},onError:t,onSettled:r}).mutate;return(0,f.useCallback)(function(e){s({pluginId:e,isInstalled:!1})},[s])}function v(e,n){var t=m.Z;n.setQueryData(t,function(n){var t=(0,o._)((null==n?void 0:n.items)||[]),r=t.findIndex(function(n){return n.id===e.id});return -1!==r?t[r]=e:t.push(e),{count:t.length,items:t}})}function b(e,n){var t=h.V;n.setQueriesData(t,function(n){if(!n)return n;var t=n.items.findIndex(function(n){return n.id===e.id});if(-1===t)return n;var r=(0,o._)(n.items);return r[t]=e,(0,s._)((0,a._)({},n),{items:r})})}function y(e){return _.apply(this,arguments)}function _(){return(_=(0,r._)(function(e){var n,t;return(0,c.Jh)(this,function(r){switch(r.label){case 0:return n="".concat(window.location.origin,"/aip/").concat(e.id,"/oauth/callback"),[4,l.ZP.pluginOauthRedirect(e.id,n)];case 1:return t=r.sent(),window.location.href=t.redirect_uri,[2]}})})).apply(this,arguments)}function w(e){var n=e.manifest.auth;if("oauth"!==n.type||!e.oauth_client_id)return null;var t=new URLSearchParams({response_type:"code",client_id:e.oauth_client_id,redirect_uri:"".concat(window.location.origin,"/aip/").concat(e.id,"/oauth/callback"),scope:n.scope});return n.client_url.includes("slack.com")&&(t.delete("scope"),t.append("user_scope",n.scope)),"".concat(n.client_url,"?").concat(t)}function j(){var e,n=(0,i._)((0,f.useState)(!1),2),t=n[0],a=n[1];return{fetchManifestAndSpec:(0,f.useCallback)((e=(0,r._)(function(e){var n,t,r,s,i,o,u,d,f;return(0,c.Jh)(this,function(c){switch(c.label){case 0:n=e.domain,t=e.manifestAccessToken,r=e.onSuccess,s=e.onError,i=(0,p.NB)(n),c.label=1;case 1:if(c.trys.push([1,10,11,12]),a(!0),!(null!=i))return[3,3];return[4,(0,p.Zb)(i)];case 2:if(void 0===(o=c.sent()))return[2];return r({domain:i,scrapeManifestResponse:{plugin:o.plugin,manifest_validation_info:o.manifest_validation_info},apiValidationInfo:o.api_validation_info}),[3,9];case 3:return[4,l.ZP.scrapePluginManifest({domain:n,manifestAccessToken:t})];case 4:if(!(u=c.sent()).plugin)return[3,8];c.label=5;case 5:return c.trys.push([5,7,,8]),[4,l.ZP.getPluginApi({id:u.plugin.id})];case 6:return d=c.sent().api_validation_info,[3,8];case 7:return c.sent(),[3,8];case 8:r({domain:n,scrapeManifestResponse:u,apiValidationInfo:d,manifestAccessToken:t}),c.label=9;case 9:return[3,12];case 10:return f=c.sent(),s(null!=i?f:void 0),[3,12];case 11:return a(!1),[7];case 12:return[2]}})}),function(n){return e.apply(this,arguments)}),[]),isLoading:t}}},73908:function(e,n,t){t.d(n,{NB:function(){return g},Zb:function(){return x},cf:function(){return m},qZ:function(){return f},wR:function(){return d}});var r=t(21722),a=t(39324),s=t(75883),i=t(95954),o=t(95137),c=t(8844),l=t(1703),u=t(88798);function d(e){var n,t,r,a,s=null!==(a=null===(n=e.metadata)||void 0===n?void 0:null===(t=n.invoked_plugin)||void 0===t?void 0:t.http_api_call_data)&&void 0!==a?a:null===(r=e.metadata)||void 0===r?void 0:r.http_api_call_data;if(void 0!==s){if(e.author.role!==i.uU.Assistant){console.error("Refusing to make localhost plugin HTTP call from non-assistant message",e);return}if("object"!=typeof s||"string"!=typeof s.namespace||0===s.namespace.length||"string"!=typeof s.function_name||0===s.function_name.length||"string"!=typeof s.parent_message_id||0===s.parent_message_id.length||"string"!=typeof s.url||0===s.url.length||"string"!=typeof s.method||!["get","post","put","delete","patch"].includes(s.method)||!Array.isArray(s.qs_params)||s.qs_params.some(function(e){return!Array.isArray(e)||2!==e.length||"string"!=typeof e[0]||"string"!=typeof e[1]})||"object"!=typeof s.headers||Object.keys(s.headers).some(function(e){return"string"!=typeof e})||Object.values(s.headers).some(function(e){return"string"!=typeof e})||!(null===s.body||"object"==typeof s.body&&Object.keys(s.body).every(function(e){return"string"==typeof e}))||"string"!=typeof s.api_function_type||!["kwargs","chat"].includes(s.api_function_type)){console.error("Refusing to make localhost plugin HTTP call with invalid metadata",e);return}if(!/^https?:\/\/localhost:/.test(s.url)){console.error("Refusing to make localhost plugin HTTP call with non-localhost URL",e);return}return s}}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,r._)(function(e){var n;return(0,s.Jh)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,function(e){return h.apply(this,arguments)}(e)];case 1:return[2,t.sent()];case 2:return console.error("Error making localhost plugin HTTP call",n=t.sent()),[2,[{id:(0,c.Z)(),author:{role:i.uU.Tool,name:"plugin_service"},content:{content_type:i.PX.Text,parts:["Error making localhost plugin HTTP call: ".concat(n)]},recipient:"all"}]];case 3:return[2]}})})).apply(this,arguments)}function h(){return(h=(0,r._)(function(e){var n,t,r,o;function l(e){return Object.keys(e).map(function(e){return e.toLowerCase()})}return(0,s.Jh)(this,function(s){switch(s.label){case 0:var u;if(n={"content-type":"application/json"},u=[l(e.headers),l(n)].flat(),new Set(u).size!==u.length)throw Error("Refusing to make localhost plugin HTTP call with duplicate header keys");return t=e.url,e.qs_params.length>0&&(t=t+"?"+new URLSearchParams(e.qs_params)),r=void 0,null!==e.body&&(r=JSON.stringify(e.body)),[4,fetch(t,{method:e.method,headers:(0,a._)({},n,e.headers),body:r})];case 1:return[4,s.sent().text()];case 2:if(o=s.sent(),"chat"===e.api_function_type)return[2,[JSON.parse(o)]];if("kwargs"===e.api_function_type)return[2,[{id:(0,c.Z)(),author:{role:i.uU.Tool,name:"".concat(e.namespace,".").concat(e.function_name)},content:{content_type:i.PX.Text,parts:[o]},recipient:"all"}]];throw Error("Not implemented")}})})).apply(this,arguments)}function m(e){return!!g(e.domain)}function g(e){return/^localhost:\d+$/.test(e)?"http://".concat(e):/^https?:\/\/localhost:\d+$/.test(e)?e:null}function x(e){return v.apply(this,arguments)}function v(){return(v=(0,r._)(function(e){var n,t,r,a,i,c;return(0,s.Jh)(this,function(s){switch(s.label){case 0:return s.trys.push([0,3,,4]),[4,fetch(e+"/.well-known/ai-plugin.json")];case 1:return[4,s.sent().json()];case 2:return t=s.sent(),[3,4];case 3:return s.sent(),u.m.danger("Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled."),[2];case 4:if(null==(r=null==t?void 0:null===(n=t.api)||void 0===n?void 0:n.url))return u.m.danger("Localhost manifest is missing OpenAPI spec URL."),[2];if("pathname"===(a=function(e){try{return new URL(e),"full url"}catch(n){if(e.startsWith("/"))return"pathname";return"neither"}}(r)))r=e+r;else if("neither"===a)return u.m.danger("Localhost manifest OpenAPI spec URL is not a valid URL or path."),[2];s.label=5;case 5:return s.trys.push([5,8,,9]),[4,fetch(r)];case 6:return[4,s.sent().text()];case 7:return i=s.sent(),[3,9];case 8:return s.sent(),u.m.danger("Failed to fetch localhost OpenAPI spec."),[2];case 9:try{c=l.ZP.parse(i)}catch(e){}try{c=JSON.parse(i)}catch(e){}if(null==c)return u.m.danger("Failed to parse localhost OpenAPI spec as JSON or YAML."),[2];s.label=10;case 10:return s.trys.push([10,12,,13]),[4,o.ZP.createOrUpdateLocalhostPlugin({localhost:e,manifest:t,openapiSpec:c})];case 11:return[2,s.sent()];case 12:return s.sent(),u.m.danger("Failed to create or update localhost plugin at ".concat(e)),[3,13];case 13:return[2]}})})).apply(this,arguments)}},35101:function(e,n,t){t.d(n,{V:function(){return o},Z:function(){return c}});var r=t(81949),a=t(95137),s=t(54118),i=t(5268),o=["approvedAip"];function c(e){var n=e.category,t=e.search,c=e.offset,l=e.limit,u=(0,s.Fl)().isPluginsAvailable;return(0,i.a)((0,r._)(o).concat([{category:n,search:t},{limit:l,offset:c}]),function(){return a.ZP.getApprovedPlugins({offset:c,limit:l,category:n,search:t})},{enabled:u,keepPreviousData:!0,onError:function(e){console.error(e)}})}},85330:function(e,n,t){t.d(n,{dT:function(){return x},hZ:function(){return u},iO:function(){return d},p0:function(){return g},wu:function(){return v}});var r=t(81949),a=t(75641),s=t(78931),i=t(6948),o=t(70079),c=t(78103),l=t(14444),u=3,d=[["www.klarna.com","server.shop.app"],["apim.expedia.com","kayak.com"],["www.redfin.com","plugins.zillow.com"],["instacart.com","api.tasty.co"]],f="oai/enabledPluginIds";function p(e){var n=e.currentWorkspace;return(null==n?void 0:n.id)!=null&&(null==n?void 0:n.structure)==a.CZ.WORKSPACE?"".concat(f,"/").concat(n.id):f}function h(e){var n=Array.from(new Set(i.m.getItem(p(e))));return{enabledPluginIds:new Set(n.splice(0,u))}}var m=(0,c.ZP)(function(){return h(s.ec.getState())});function g(){var e=(0,l.C)().installedPlugins,n=m().enabledPluginIds;return(0,o.useMemo)(function(){return e.filter(function(e){return n.has(e.id)})},[n,e])}function x(e){e.length>u||m.setState(function(){return i.m.setItem(p(s.ec.getState()),e),{enabledPluginIds:new Set(e)}})}function v(e){m.setState(function(n){if(n.enabledPluginIds.size>=u)return n;var t=(0,r._)(n.enabledPluginIds).concat([e]);return i.m.setItem(p(s.ec.getState()),t),{enabledPluginIds:new Set(t)}})}s.ec.subscribe(function(e){m.setState(h(e))})},56817:function(e,n,t){t.d(n,{D7:function(){return o},Zr:function(){return s},_4:function(){return i},m1:function(){return a},ti:function(){return r}});var r="https://help.openai.com/en/collections/3943089-billing",a="https://help.openai.com/en/articles/7905690-how-do-i-cancel-my-apple-subscription-for-chatgpt-plus-in-the-chatgpt-ios-app",s="https://help.openai.com/en/articles/8258076-how-to-cancel-my-plus-subscription-in-the-chatgpt-android-app",i={WEBAPP:"chatgpt_web",MOBILE_IOS:"chatgpt_mobile_ios",MOBILE_ANDROID:"chatgpt_mobile_android",GRANTED:"chatgpt_gratis_recepient",NOT_PURCHASED:"chatgpt_not_purchased"},o={ALREADY_PAID:"User is already paid"}},52481:function(e,n,t){t.d(n,{fv:function(){return M},ZP:function(){return O},Ub:function(){return U}});var r=t(39324),a=t(22830),s=t(4337),i=t(35250),o=t(37334),c=t(78931),l=t(52787),u=t(11084),d=t(70079),f=t(1454),p=t(32004),h=t(70671),m=t(94968),g=t(21389),x=t(67273),v=t(51959),b=t(28512),y=t(89368),_=t(98359),w=t(20525);function j(e){var n=e.children,t=e.sidebarOpen,r=e.onClose;return(0,i.jsx)(_.u.Root,{show:t,as:d.Fragment,children:(0,i.jsxs)(w.V,{as:"div",className:"relative z-10",onClose:r,children:[(0,i.jsx)("div",{className:"fixed inset-0"}),(0,i.jsx)("div",{className:"fixed inset-0 overflow-hidden",children:(0,i.jsx)("div",{className:"absolute inset-0 overflow-hidden",children:(0,i.jsx)("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:(0,i.jsx)(_.u.Child,{as:d.Fragment,enter:"transform transition ease-in-out duration-100 sm:duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300 sm:duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:(0,i.jsx)(w.V.Panel,{className:"pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",children:(0,i.jsx)("div",{className:"h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800",children:n})})})})})})]})})}var k=t(81949),N=t(95954),P=t(19841);function C(e){var n=e.clientThreadId,t=(0,a._)((0,d.useState)([]),2),r=t[0],s=t[1],c=o.tQ.getThreadCurrentLeafId(n),u=o.tQ.getThreadConversationTurns(n,c),p=function(e){var t=o.tQ.getTree(n).getLeafFromNode(e);o.tQ.setThreadCurrentLeafId(n,t.id)},h=function(e){s(function(e){return(0,k._)(e).concat([c])}),p(e)};return(0,i.jsxs)(i.Fragment,{children:[r.length>0&&(0,i.jsxs)(x.z,{className:"absolute left-2 top-2",color:"neutral",onClick:function(){p(r[r.length-1]),s(function(e){return e.slice(0,-1)})},children:[(0,i.jsx)(f.lV_,{}),"Go back to ",r[r.length-1]]}),(0,i.jsx)("div",{className:"flex flex-col items-center gap-4 overflow-auto p-4 text-xs",children:u.map(function(e,t){var r=e.messages[0].nodeId,a=o.tQ.getTree(n),s=0!==t?a.getParent(r):null,c=null!=s?s.children.findIndex(function(e){return r===e}):0,u=null!=s?s.children:[],d=u.slice(0,c),f=u.slice(c+1),p="bg-gray-400";switch(e.role){case N.uU.User:p="bg-blue-500";break;case N.uU.Assistant:p="bg-gray-600"}return(0,i.jsxs)("div",{className:(0,P.default)("relative p-2",p),children:[(0,i.jsx)("div",{className:"absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",children:d.map(function(e){return(0,i.jsx)(I,{variantId:e,onChangeItemInView:h},e)})}),(0,i.jsx)("div",{className:"absolute left-full top-0 ml-2 flex gap-2 pr-2",children:f.map(function(e){return(0,i.jsx)(I,{variantId:e,onChangeItemInView:h},e)})}),(0,i.jsx)("div",{className:"flex flex-col gap-2",children:e.messages.map(function(e){return(0,i.jsxs)("div",{className:"h-14 w-32 truncate bg-gray-200 p-1 text-black",children:[(0,i.jsx)("div",{className:"font-semibold",children:e.nodeId}),(0,i.jsx)("div",{className:"italic text-gray-600",children:e.message.author.role}),(0,i.jsx)("div",{children:(0,l.RR)(e.message)})]},e.nodeId)})})]},t)})})]})}function I(e){var n=e.variantId,t=e.onChangeItemInView;return(0,i.jsx)("button",{className:"w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",onClick:function(){t(n)},children:(0,i.jsx)("span",{className:"bg-gray-200 p-2",children:n})},n)}var S=t(51704);function T(){var e=(0,s._)(["overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 bg-white dark:bg-gray-900"]);return T=function(){return e},e}function Z(){var e=(0,s._)(["whitespace-pre-wrap text-sm"]);return Z=function(){return e},e}function A(){var e=(0,s._)(["px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200"]);return A=function(){return e},e}function O(e){var n=e.children,t=e.title,a=e.icon,s=e.isOpen,o=e.slideOver,c=e.onClose,l=(0,i.jsxs)(D,{children:[(0,i.jsxs)("div",{className:"flex items-start justify-between",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",children:[(0,i.jsx)(a,{className:"icon-sm"}),t]}),(0,i.jsx)("div",{className:"mr-2 mt-2 flex h-7 items-center",children:(0,i.jsxs)("button",{type:"button",onClick:c,children:[(0,i.jsx)("span",{className:"sr-only",children:(0,i.jsx)(p.Z,(0,r._)({},J.closeSidebar))}),(0,i.jsx)(f.q5L,{className:"icon-md","aria-hidden":"true"})]})})]}),n]});return o?(0,i.jsx)(j,{sidebarOpen:s,onClose:c,children:l}):s?l:null}function R(e){var n=e.messages,t=e.setDebugMessageIndex,r=n.map(function(e,n){var r=e.author,a=r.role,s=r.name;return(0,i.jsxs)(V,{role:"button",onClick:function(){return t(n)},children:[(0,i.jsxs)("div",{className:"text-xs font-medium uppercase text-gray-400",children:[a,s&&s!==a&&" (".concat(s,")")," -> ",(0,l.Ej)(e),(0,i.jsx)("div",{className:"text-gray-600",children:e.id})]}),(0,i.jsx)("div",{className:"line-clamp-6",children:(0,l.RR)(e)})]},e.id)});return(0,i.jsx)(F,{children:r})}function E(){var e=(0,S.N)();return(0,i.jsx)("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-medium uppercase ",children:(0,i.jsx)(v.Z,{id:"force-paragen",label:"Force Parallel Gen",checked:e.forceParagen,onChange:function(){S.N.setState({forceParagen:!e.forceParagen})}})})}function M(e){var n=e.clientThreadId,t=e.isOpen,r=e.slideOver,s=e.onClose,l=(0,h.Z)(),p=o.tQ.getThreadCurrentLeafId(n),m=(0,o.u9)(n,p),g=(0,a._)((0,d.useState)(),2),x=g[0],v=g[1],_=(0,c.hz)(),w=(0,d.useCallback)(function(){v(void 0)},[]),j=(0,d.useCallback)(function(){var e=o.tQ.getTree(n);(0,u.S)(e.getTextFromThread(p))},[p,n]),k=(0,a._)((0,d.useState)(!1),2),N=k[0],P=k[1];return _.has("debug")?(0,i.jsxs)(O,{icon:f.cDN,title:l.formatMessage(J.debugTitle),isOpen:t,slideOver:r,onClose:s,children:[(0,i.jsx)("div",{className:"mb-2 flex items-center justify-around px-4 py-1 text-xs font-medium uppercase",children:(0,i.jsx)(L,{clientThreadId:n,messages:m})}),(0,i.jsxs)("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-medium uppercase",children:[(0,i.jsx)("div",{children:(0,i.jsx)(b.Z,{onCopy:j,buttonText:l.formatMessage(J.copyText)})}),(0,i.jsxs)("button",{className:"flex items-center justify-center gap-2",onClick:function(){return P(!0)},children:[(0,i.jsx)(f.PMT,{className:"icon-sm rotate-90"}),"View tree"]})]}),(0,i.jsx)(E,{}),(0,i.jsx)(R,{messages:m,setDebugMessageIndex:v}),void 0!==x&&(0,i.jsx)(y.Z,{isOpen:!0,onClose:w,type:"success",children:(0,i.jsx)("pre",{className:"max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",children:JSON.stringify(m[x],null,2)})},"DebugMessageModal-".concat(x)),N&&(0,i.jsx)(y.Z,{isOpen:!0,onClose:function(){return P(!1)},type:"success",size:"fullscreen",children:(0,i.jsx)(C,{clientThreadId:n})},"DebugTreeViewer")]}):null}function U(e,n){var t=JSON.stringify({conversation_id:o.tQ.getServerThreadId(e),messages:n},null,2),r=new Blob([t],{type:"application/json"}),a=URL.createObjectURL(r),s=document.createElement("a");s.href=a,s.download="messages-".concat(o.tQ.getServerThreadId(e),".json"),s.click(),URL.revokeObjectURL(a)}function L(e){var n=e.clientThreadId,t=e.messages,a=(0,d.useCallback)(function(){U(n,t)},[n,t]);return(0,i.jsxs)(x.z,{onClick:a,color:"dark",size:"small",children:[(0,i.jsx)(f._hL,{className:"icon-sm"}),(0,i.jsx)(p.Z,(0,r._)({},J.downloadRawConversation))]})}var D=g.Z.div(T()),F=g.Z.pre(Z()),V=g.Z.div(A()),J=(0,m.vU)({debugTitle:{id:"DebugSidebar.debugTitle",description:"Title of the Debug sidebar",defaultMessage:"Debug"},copyText:{id:"DebugSidebar.copyText",description:"Button text to copy the content to clipboard",defaultMessage:"Copy text"},downloadRawConversation:{id:"DebugSidebar.downloadRawConversation",description:"Button text to download raw conversation",defaultMessage:"Download raw conversation"},closeSidebar:{id:"DebugSidebar.closeSidebar",description:"Aria-label for the close sidebar button",defaultMessage:"Close sidebar"}})},51704:function(e,n,t){t.d(n,{N:function(){return r}});var r=(0,t(78103).ZP)(function(){return{forceParagen:!1}})},19012:function(e,n,t){var r=t(70079);n.Z=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,r.useCallback)(function(){return e.current},[])}},87389:function(e,n,t){t.d(n,{S:function(){return f}});var r=t(21722),a=t(39324),s=t(22830),i=t(75883),o=t(62509),c=t(12155),l=t(60554),u=t(70079),d=t(95137);function f(){var e,n,t=(0,l.useRouter)(),f=(0,o.kP)().session,p=(null==f?void 0:null===(e=f.user)||void 0===e?void 0:e.idp)==="auth0",h=!!(null==f?void 0:null===(n=f.user)||void 0===n?void 0:n.mfa),m=(0,s._)((0,u.useState)(!1),2),g=m[0],x=m[1],v=(0,u.useCallback)((0,r._)(function(){var e;return(0,i.Jh)(this,function(n){if(e=new URL(t.asPath,window.location.origin).toString(),!p)throw Error("Only username/password users can enable MFA");if(!f)throw Error("No session found, cannot enable MFA");if("mocked"===f.authProvider)throw Error("Mock users can't enable MFA! Please setup Auth0 following the instructions in the README");return(0,c.signIn)(f.authProvider,{callbackUrl:e},(0,a._)({prompt:"login"},f.authProvider===o.Ho.OpenAI?{login_hint:(0,o.W_)({oai_enforce_mfa:!0,idp:"openai"})}:{oai_enforce_mfa:"true"})),[2]})}),[t.asPath,f,p]),b=(0,u.useCallback)((0,r._)(function(){var e;return(0,i.Jh)(this,function(n){switch(n.label){case 0:if(!p)throw Error("Only username/password users can disable MFA");if(!f)throw Error("No session found, cannot enable MFA");if("mocked"===f.authProvider)throw Error("Mock users can't enable MFA! Please setup Auth0 following the instructions in the README");return x(!0),[4,d.ZP.deleteMfa()];case 1:return n.sent(),[4,(0,c.signOut)({redirect:!1,callbackUrl:"/auth/login?next=".concat(encodeURIComponent(t.asPath))})];case 2:return e=n.sent(),x(!1),t.push(e.url),[2]}})}),[p,t,f]);return{setupMfa:v,isUsernamePassword:p,isLoggedInWithMfa:h,removeMfa:b,isLoading:g}}}}]);