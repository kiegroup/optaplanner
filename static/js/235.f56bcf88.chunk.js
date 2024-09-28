"use strict";(self.webpackChunk_kie_chain_status_webpage=self.webpackChunk_kie_chain_status_webpage||[]).push([[235,433],{3235:function(e,t,r){r.r(t),r.d(t,{UserComponent:function(){return v},default:function(){return d}});var n=r(6918),a=r(6205),o=r(9717),i=r(3028),c=r(969),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},s=r(2717),u=function(e,t){return c.createElement(s.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:l}))};u.displayName="UserOutlined";var f=c.forwardRef(u),m=r(7574),v=function(e){var t=function(e){var t,r,a,o;return(0,m.jsxs)(m.Fragment,{children:[e.hideAvatar?(0,m.jsx)(n.C,{size:null!==(t=e.size)&&void 0!==t?t:24,icon:(0,m.jsx)(f,{})}):(0,m.jsx)(n.C,{size:null!==(r=e.size)&&void 0!==r?r:24,src:null===(a=e.user)||void 0===a?void 0:a.avatar_url}),e.showName?(0,m.jsx)("span",{style:{marginLeft:5,color:"#2d2d2d"},children:null===(o=e.user)||void 0===o?void 0:o.login}):null]})};return e.user?(0,m.jsx)(a.Z,{title:e.user.login,children:e.hideButton?(0,m.jsx)(t,{showName:e.showName,user:e.user,size:e.size,hideAvatar:e.hideAvatar}):(0,m.jsx)(o.Z,{type:"link",href:e.user.html_url,target:"_blank",style:{padding:0,margin:0},children:(0,m.jsx)(t,{showName:e.showName,user:e.user,size:e.size,hideAvatar:e.hideAvatar})})}):null},d=v},5637:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(3581),a=r(969);function o(){var e=a.useReducer((function(e){return e+1}),0);return(0,n.Z)(e,2)[1]}},6918:function(e,t,r){r.d(t,{C:function(){return S}});var n=r(791),a=r(5633),o=r(7209),i=r(3581),c=r(5667),l=r.n(c),s=r(4480),u=r(4649),f=r(969),m=r(1742),v=r(7048),d=r(7834),p=f.createContext("default"),g=function(e){var t=e.children,r=e.size;return f.createElement(p.Consumer,null,(function(e){return f.createElement(p.Provider,{value:r||e},t)}))},y=p,h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},x=function(e,t){var r,c,p=f.useContext(y),g=f.useState(1),x=(0,i.Z)(g,2),E=x[0],Z=x[1],b=f.useState(!1),C=(0,i.Z)(b,2),O=C[0],w=C[1],S=f.useState(!0),j=(0,i.Z)(S,2),z=j[0],N=j[1],_=f.useRef(null),P=f.useRef(null),k=(0,u.sQ)(t,_),R=f.useContext(m.E_).getPrefixCls,A=function(){if(P.current&&_.current){var t=P.current.offsetWidth,r=_.current.offsetWidth;if(0!==t&&0!==r){var n=e.gap,a=void 0===n?4:n;2*a<r&&Z(r-2*a<t?(r-2*a)/t:1)}}};f.useEffect((function(){w(!0)}),[]),f.useEffect((function(){N(!0),Z(1)}),[e.src]),f.useEffect((function(){A()}),[e.gap]);var D,L=e.prefixCls,T=e.shape,H=void 0===T?"circle":T,M=e.size,W=void 0===M?"default":M,B=e.src,F=e.srcSet,I=e.icon,U=e.className,G=e.alt,Q=e.draggable,V=e.children,X=e.crossOrigin,q=h(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),J="default"===W?p:W,K=Object.keys("object"===(0,o.Z)(J)&&J||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),Y=(0,v.Z)(K),$=f.useMemo((function(){if("object"!==(0,o.Z)(J))return{};var e=d.c4.find((function(e){return Y[e]})),t=J[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:I?t/2:18}:{}}),[Y,J]),ee=R("avatar",L),te=l()((r={},(0,a.Z)(r,"".concat(ee,"-lg"),"large"===J),(0,a.Z)(r,"".concat(ee,"-sm"),"small"===J),r)),re=f.isValidElement(B),ne=l()(ee,te,(c={},(0,a.Z)(c,"".concat(ee,"-").concat(H),!!H),(0,a.Z)(c,"".concat(ee,"-image"),re||B&&z),(0,a.Z)(c,"".concat(ee,"-icon"),!!I),c),U),ae="number"===typeof J?{width:J,height:J,lineHeight:"".concat(J,"px"),fontSize:I?J/2:18}:{};if("string"===typeof B&&z)D=f.createElement("img",{src:B,draggable:Q,srcSet:F,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&N(!1)},alt:G,crossOrigin:X});else if(re)D=B;else if(I)D=I;else if(O||1!==E){var oe="scale(".concat(E,") translateX(-50%)"),ie={msTransform:oe,WebkitTransform:oe,transform:oe},ce="number"===typeof J?{lineHeight:"".concat(J,"px")}:{};D=f.createElement(s.Z,{onResize:A},f.createElement("span",{className:"".concat(ee,"-string"),ref:P,style:(0,n.Z)((0,n.Z)({},ce),ie)},V))}else D=f.createElement("span",{className:"".concat(ee,"-string"),style:{opacity:0},ref:P},V);return delete q.onError,delete q.gap,f.createElement("span",(0,n.Z)({},q,{style:(0,n.Z)((0,n.Z)((0,n.Z)({},ae),$),q.style),className:ne,ref:k}),D)};var E=f.forwardRef(x),Z=r(9606),b=r(3275),C=r(6530),O=function(e){var t=f.useContext(m.E_),r=t.getPrefixCls,n=t.direction,o=e.prefixCls,i=e.className,c=void 0===i?"":i,s=e.maxCount,u=e.maxStyle,v=e.size,d=r("avatar-group",o),p=l()(d,(0,a.Z)({},"".concat(d,"-rtl"),"rtl"===n),c),y=e.children,h=e.maxPopoverPlacement,x=void 0===h?"top":h,O=e.maxPopoverTrigger,w=void 0===O?"hover":O,S=(0,Z.Z)(y).map((function(e,t){return(0,C.Tm)(e,{key:"avatar-key-".concat(t)})})),j=S.length;if(s&&s<j){var z=S.slice(0,s),N=S.slice(s,j);return z.push(f.createElement(b.Z,{key:"avatar-popover-key",content:N,trigger:w,placement:x,overlayClassName:"".concat(d,"-popover")},f.createElement(E,{style:u},"+".concat(j-s)))),f.createElement(g,{size:v},f.createElement("div",{className:p,style:e.style},z))}return f.createElement(g,{size:v},f.createElement("div",{className:p,style:e.style},S))},w=E;w.Group=O;var S=w},7048:function(e,t,r){var n=r(969),a=r(5637),o=r(7834);t.Z=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=(0,n.useRef)({}),r=(0,a.Z)();return(0,n.useEffect)((function(){var n=o.ZP.subscribe((function(n){t.current=n,e&&r()}));return function(){return o.ZP.unsubscribe(n)}}),[]),t.current}},3275:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(791),a=r(969),o=r(1742),i=r(6205),c=function(e){return e?"function"===typeof e?e():e:null},l=r(405),s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},u=function(e){var t=e.title,r=e.content,n=e.prefixCls;return t||r?a.createElement(a.Fragment,null,t&&a.createElement("div",{className:"".concat(n,"-title")},c(t)),a.createElement("div",{className:"".concat(n,"-inner-content")},c(r))):null};var f=a.forwardRef((function(e,t){var r=e.prefixCls,c=e.title,f=e.content,m=e._overlay,v=e.placement,d=void 0===v?"top":v,p=e.trigger,g=void 0===p?"hover":p,y=e.mouseEnterDelay,h=void 0===y?.1:y,x=e.mouseLeaveDelay,E=void 0===x?.1:x,Z=e.overlayStyle,b=void 0===Z?{}:Z,C=s(e,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),O=a.useContext(o.E_).getPrefixCls,w=O("popover",r),S=O();return a.createElement(i.Z,(0,n.Z)({placement:d,trigger:g,mouseEnterDelay:h,mouseLeaveDelay:E,overlayStyle:b},C,{prefixCls:w,ref:t,overlay:m||a.createElement(u,{prefixCls:w,title:c,content:f}),transitionName:(0,l.mL)(S,"zoom-big",C.transitionName)}))}))}}]);
//# sourceMappingURL=235.f56bcf88.chunk.js.map