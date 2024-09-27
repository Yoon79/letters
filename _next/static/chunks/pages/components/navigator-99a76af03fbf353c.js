(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{7394:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigator",function(){return n(4749)}])},4749:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(5893),l=n(7294);function a(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,a),r}var o,s,u=((s=u||{})[s.None=0]="None",s[s.RenderStrategy=1]="RenderStrategy",s[s.Static=2]="Static",s),i=((o=i||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:o=!0,name:s}){let u=f(t,e);if(o)return d(u,n,r,s);let i=null!=l?l:0;if(2&i){let{static:e=!1,...t}=u;if(e)return d(t,n,r,s)}if(1&i){let{unmount:e=!0,...t}=u;return a(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,s)})}return d(u,n,r,s)}function d(e,t={},n,r){let{as:a=n,children:o,refName:s="ref",...u}=h(e,["unmount","static"]),i=void 0!==e.ref?{[s]:e.ref}:{},c="function"==typeof o?o(t):o;if(u.className&&"function"==typeof u.className&&(u.className=u.className(t)),a===l.Fragment&&Object.keys(m(u)).length>0){if(!(0,l.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,l.cloneElement)(c,Object.assign({},f(c.props,m(h(u,["ref"]))),i))}return(0,l.createElement)(a,Object.assign({},h(u,["ref"]),a!==l.Fragment&&i),c)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e){let t=n[r];for(let n of t){if(e.defaultPrevented)return;n(e)}}});return t}function p(e){var t;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function h(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let g=Symbol();function v(e,t=!0){return Object.assign(e,{[g]:t})}function y(...e){let t=(0,l.useRef)(e);(0,l.useEffect)((()=>{t.current=e}),[e]);let n=(0,l.useCallback)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}),[t]);return e.every((e=>null==e||(null==e?void 0:e[g])))?void 0:n}const b="undefined"!=typeof window?l.useLayoutEffect:l.useEffect;let x={serverHandoffComplete:!1};var w;let E=0;function j(){return++E}let k=null!=(w=l.useId)?w:function(){let e=function(){let[e,t]=(0,l.useState)(x.serverHandoffComplete);return(0,l.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,l.useEffect)((()=>{!1===x.serverHandoffComplete&&(x.serverHandoffComplete=!0)}),[]),e}(),[t,n]=l.useState(e?j:null);return b((()=>{null===t&&n(j())}),[t]),null!=t?""+t:void 0};var P=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(P||{});function S(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}let N=(0,l.createContext)(null);N.displayName="OpenClosedContext";var C=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(C||{});function O(){return(0,l.useContext)(N)}function D({value:e,children:t}){return l.createElement(N.Provider,{value:e},t)}function I(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}var T=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(T||{}),R=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(R||{});let L={0:e=>({...e,disclosureState:a(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},A=(0,l.createContext)(null);function B(e){let t=(0,l.useContext)(A);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,B),t}return t}A.displayName="DisclosureContext";let H=(0,l.createContext)(null);function M(e){let t=(0,l.useContext)(H);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,M),t}return t}H.displayName="DisclosureAPIContext";let _=(0,l.createContext)(null);function $(e,t){return a(t.type,L,e,t)}_.displayName="DisclosurePanelContext";let F=l.Fragment,U=p((function(e,t){let{defaultOpen:n=!1,...r}=e,o=`headlessui-disclosure-button-${k()}`,s=`headlessui-disclosure-panel-${k()}`,u=(0,l.useRef)(null),i=y(t,v((e=>{u.current=e}),void 0===e.as||e.as===l.Fragment)),d=(0,l.useRef)(null),f=(0,l.useRef)(null),p=(0,l.useReducer)($,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:f,panelRef:d,buttonId:o,panelId:s}),[{disclosureState:m},h]=p;(0,l.useEffect)((()=>h({type:2,buttonId:o})),[o,h]),(0,l.useEffect)((()=>h({type:3,panelId:s})),[s,h]);let g=(0,l.useCallback)((e=>{h({type:1});let t=function(e){return"undefined"==typeof window?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}(u);if(!t)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(o):t.getElementById(o);null==n||n.focus()}),[h,o]),b=(0,l.useMemo)((()=>({close:g})),[g]),x=(0,l.useMemo)((()=>({open:0===m,close:g})),[m,g]),w={ref:i};return l.createElement(A.Provider,{value:p},l.createElement(H.Provider,{value:b},l.createElement(D,{value:a(m,{0:C.Open,1:C.Closed})},c({ourProps:w,theirProps:r,slot:x,defaultTag:F,name:"Disclosure"}))))})),K=p((function(e,t){let[n,r]=B("Disclosure.Button"),a=(0,l.useContext)(_),o=null!==a&&a===n.panelId,s=(0,l.useRef)(null),u=y(s,t,o?null:n.buttonRef),i=(0,l.useCallback)((e=>{var t;if(o){if(1===n.disclosureState)return;switch(e.key){case P.Space:case P.Enter:e.preventDefault(),e.stopPropagation(),r({type:0}),null==(t=n.buttonRef.current)||t.focus()}}else switch(e.key){case P.Space:case P.Enter:e.preventDefault(),e.stopPropagation(),r({type:0})}}),[r,o,n.disclosureState,n.buttonRef]),d=(0,l.useCallback)((e=>{if(e.key===P.Space)e.preventDefault()}),[]),f=(0,l.useCallback)((t=>{var l;S(t.currentTarget)||e.disabled||(o?(r({type:0}),null==(l=n.buttonRef.current)||l.focus()):r({type:0}))}),[r,e.disabled,n.buttonRef,o]),p=(0,l.useMemo)((()=>({open:0===n.disclosureState})),[n]),m=function(e,t){let[n,r]=(0,l.useState)((()=>I(e)));return b((()=>{r(I(e))}),[e.type,e.as]),b((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")}),[n,t]),n}(e,s),h=e;return c({ourProps:o?{ref:u,type:m,onKeyDown:i,onClick:f}:{ref:u,id:n.buttonId,type:m,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:i,onKeyUp:d,onClick:f},theirProps:h,slot:p,defaultTag:"button",name:"Disclosure.Button"})})),W=u.RenderStrategy|u.Static,X=p((function(e,t){let[n,r]=B("Disclosure.Panel"),{close:a}=M("Disclosure.Panel"),o=y(t,n.panelRef,(()=>{n.linkedPanel||r({type:4})})),s=O(),u=null!==s?s===C.Open:0===n.disclosureState;(0,l.useEffect)((()=>()=>r({type:5})),[r]),(0,l.useEffect)((()=>{var t;1===n.disclosureState&&(null==(t=e.unmount)||t)&&r({type:5})}),[n.disclosureState,e.unmount,r]);let i=(0,l.useMemo)((()=>({open:0===n.disclosureState,close:a})),[n,a]),d=e,f={ref:o,id:n.panelId};return l.createElement(_.Provider,{value:n.panelId},c({ourProps:f,theirProps:d,slot:i,defaultTag:"div",features:W,visible:u,name:"Disclosure.Panel"}))})),V=Object.assign(U,{Button:K,Panel:X});var Y=l.forwardRef((function(e,t){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}));var q=l.forwardRef((function(e,t){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"}))})),z=n(1664),G=n.n(z),J=[{name:"new",href:"/",current:!1},{name:"about us",href:"/aboutus",current:!1}];function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Z(){return(0,r.jsx)("div",{className:"mt-4 pb-2 ml-4 font-mono font-bold fixed w-full bg-inherit",children:(0,r.jsx)(V,{as:"nav",children:function(e){var t=e.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ",children:(0,r.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:(0,r.jsxs)(V.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ",children:[(0,r.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?(0,r.jsx)(Y,{className:"block h-7 w-7","aria-hidden":"true"}):(0,r.jsx)(q,{className:"block h-7 w-7","aria-hidden":"true"})]})}),(0,r.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[(0,r.jsx)("div",{className:"flex-shrink-0 flex items-center",children:(0,r.jsx)("div",{className:"pt-3 -ml-6",children:(0,r.jsx)(G(),{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/logo.png",alt:"Picture of the author",width:110,height:60})})})})}),(0,r.jsx)("div",{className:"hidden sm:block sm:ml-6 pt-[26px]",children:(0,r.jsx)("div",{className:"flex-1 mt-2 space-x-4",children:J.map((function(e){return(0,r.jsx)(G(),{href:e.href,children:(0,r.jsx)("a",{className:Q(e.current?"bg-gray-900 text-white":"text-gray-900 hover:text-gray-400","px-3 py-2 rounded-md text-sm font-medium"),"aria-current":e.current?"page":void 0,children:e.name})},e.name)}))})})]})]})}),(0,r.jsx)(V.Panel,{className:"sm:hidden",children:(0,r.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:J.map((function(e){return(0,r.jsx)(V.Button,{as:"a",href:e.href,className:Q(e.current?"bg-gray-900 text-white":"text-gray-900 hover:text-gray-400","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))})})]})}})})}}},function(e){e.O(0,[664,774,888,179],(function(){return t=7394,e(e.s=t);var t}));var t=e.O();_N_E=t}]);