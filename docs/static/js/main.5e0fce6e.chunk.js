(this["webpackJsonpslider-react"]=this["webpackJsonpslider-react"]||[]).push([[0],{15:function(n,e,t){n.exports=t(23)},22:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),o=t(11),a=t.n(o),i=t(2),u=t(3),s=t(8),d=t(1);function l(){var n=Object(i.a)(["\n        transform: translate","(-","px);\n        transition: transform ease-out ","s;\n        height: ",";\n        width: ",";\n        background-color: gray;\n        display: flex;\n        flex-direction: ",";\n       "]);return l=function(){return n},n}var f=t(14).a.div(l(),(function(n){return n.direction}),(function(n){return n.translate}),(function(n){return n.transition}),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.flexDirection}));function b(){var n=Object(i.a)(["\n          height: 100vh;\n          width: ","px;\n        "]);return b=function(){return n},n}var m=function(n){var e,t=n.content,r=n.width;switch(t.type){case"image":e=Object(d.c)("img",{src:t.url,css:Object(d.b)(b(),r)});break;case"slider":e=Object(d.c)(B,{slides:t.content,settings:{sliderDots:!1,sliderDirection:"X",trackBar:!0,trackBarDesc:["1988","2009","2016"]}})}return Object(d.c)(c.a.Fragment,null,e)},p=t(24);function v(){var n=Object(i.a)(["\n      position: absolute;\n      right: 50px;\n      top: 50%;\n      transform: translateY(-50%);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n\n    "]);return v=function(){return n},n}function g(){var n=Object(i.a)(["\n      padding: 13px;\n      margin-bottom: 15px;\n      cursor: pointer;\n      border-radius: 50%;\n      background: ",";\n    "]);return g=function(){return n},n}var h=function(n){var e=n.active;return Object(d.c)("span",{css:Object(d.b)(g(),e?"#f78b1f":"#ffffff")})},j=function(n){var e=n.slides,t=n.activeIndex;return Object(d.c)("div",{css:Object(d.b)(v())},e.map((function(n,e){return Object(d.c)(h,{key:Object(p.a)(),active:t===e})})))},O=t(6),x=t.n(O);function w(){var n=Object(i.a)(["\n          width: ","px;\n          padding-left: 0;\n          height: 25px;\n          position: absolute;\n          z-index: 1000;\n          bottom: 40px;\n          left: 50%;\n          transform: translateX(-50%);\n          display: flex;\n          justify-content: space-between;\n          list-style: none;\n          color: #ffffff;\n          font-size: 30px;\n        "]);return w=function(){return n},n}function k(){var n=Object(i.a)(["\n            height: 25px;\n            width: ","px;\n            background-color: #ffffff;\n          "]);return k=function(){return n},n}function y(){var n=Object(i.a)(["\n            width: 80px;\n            height: 110px;\n            transform: translate(-50%, -35%);\n            position: absolute;\n            left: ","px;\n            background-image: url('/images/track-pad.svg');\n            background-repeat: no-repeat;\n            background-size: contain;\n            background-position: center;\n            cursor: move;\n          "]);return y=function(){return n},n}function D(){var n=Object(i.a)(["\n            width: ","px;\n            height: 25px;\n            position: absolute;\n            background-color: #435063;\n            z-index: 1000;\n            bottom: 130px;\n            left: 50%;\n            transform: translateX(-50%);\n          "]);return D=function(){return n},n}var E=function(n){var e=n.navigateTo,t=n.barLength,o=n.barDesc,a=Object(r.useState)({padPlace:0}),i=Object(s.a)(a,2),u=i[0],l=i[1],f=u.padPlace,b=c.a.useRef(),m=c.a.useRef(),v=c.a.useRef(),g=function(n){var r="mousemove"===n.type?n:n.touches[0];n.preventDefault(),n.stopPropagation(),function(n){v.current=n.clientX-b.current,v.current>=0&&v.current<=m.current-b.current&&l({padPlace:n.clientX-b.current}),x.a.debounce((function(){switch(!0){case v.current<=200:e(0);break;case v.current>=parseInt(t)-200:e(2);break;case v.current>=parseInt(t)/2-200||v.current<=parseInt(t)/2+200:e(1)}}),500)()}(r)},h=function n(e){"touchend"===e.type?(document.removeEventListener("touchmove",g),document.removeEventListener("touchend",n)):(document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",n))},j=function(n){var e="mousedown"===n.type?n:n.touches[0];n.preventDefault(),n.stopPropagation(),x.a.isUndefined(b.current)&&(b.current=e.clientX,m.current=e.clientX+parseInt(t)),"mousedown"===n.type?(document.addEventListener("mousemove",g),document.addEventListener("mouseup",h)):"touchstart"===n.type&&(document.addEventListener("touchmove",g),document.addEventListener("touchend",h))};return Object(d.c)(c.a.Fragment,null,Object(d.c)("div",{className:"track-bar",css:Object(d.b)(D(),t)},Object(d.c)("div",{className:"track-bar__pad",onMouseDown:function(n){return j(n)},onTouchStart:function(n){return j(n)},css:Object(d.b)(y(),f)}),Object(d.c)("div",{className:"track-bar__background",onMouseDown:function(n){return j(n)},onTouchStart:function(n){return j(n)},css:Object(d.b)(k(),f)})),Object(d.c)("ul",{className:"track-bar_description",css:Object(d.b)(w(),parseInt(t))},x.a.isUndefined(o)?null:x.a.map(o,(function(n){return Object(d.c)("li",{key:Object(p.a)()},n)}))))};function L(){var n=Object(i.a)(["\n        display: ",";\n        width: 100%;\n        height: 170px;\n        position: absolute;\n        z-index: 1000;\n        bottom: 0;\n        left: 0;\n        background-image: url('/images/next.png');\n        background-image: url(/images/next.png);\n        background-position: center bottom;\n        background-size: contain;\n        background-repeat: no-repeat;\n      "]);return L=function(){return n},n}var I=function(n){var e=n.display;return Object(d.c)("div",{className:"track-bar",css:Object(d.b)(L(),e)})};function _(){var n=Object(i.a)(["\n  position: relative;\n  height: 99vh;\n  width: 100vw;\n  margin: 0 auto;\n  overflow: hidden;\n"]);return _=function(){return n},n}var B=function(n){var e=n.settings,t=n.slides,o=e.sliderDots,a=e.sliderDirection,i=e.trackBar,l=e.trackBarDesc,b=e.showNext,v=function(){return window.innerWidth},g="Y"===a?function(){return window.innerHeight}:v,h=c.a.useRef(),O=c.a.useRef(),w=c.a.useRef(),k=c.a.useRef(),y=Object(r.useState)({activeIndex:0,translate:0,transition:.45,cursorPlacement:0}),D=Object(s.a)(y,2),L=D[0],_=D[1],B=L.translate,P=L.transition,R=L.activeIndex,X=function(n){var e="mousemove"===n.type?n:n.touches[0];n.preventDefault(),n.stopPropagation(),x.a.debounce((function(){k.current=e.clientY}),50)()},Y=function n(e){w.current<k.current?function(){if(0===R)return _(Object(u.a)(Object(u.a)({},L),{},{translate:(t.length-1)*g(),activeIndex:t.length-1}));_(Object(u.a)(Object(u.a)({},L),{},{activeIndex:R-1,translate:(R-1)*g()}))}():w.current>k.current&&function(){if(R===t.length-1)return _(Object(u.a)(Object(u.a)({},L),{},{translate:0,activeIndex:0}));_(Object(u.a)(Object(u.a)({},L),{},{activeIndex:R+1,translate:(R+1)*g()}))}(),"touchstart"===e.type?(document.removeEventListener("touchmove",X),document.removeEventListener("touchend",n)):(document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",n))},z=function(n){w.current="mousedown"===n.type?n.clientY:n.touches[0].clientY,"mousedown"===n.type?(document.addEventListener("mousemove",X),document.addEventListener("mouseup",Y)):(document.addEventListener("touchmove",X),document.addEventListener("touchend",Y))},S="Y"===a?Object(d.c)(f,{ref:O,onMouseDown:function(n){return z(n)},onTouchStart:function(n){return z(n)},translate:B,transition:P,height:"".concat(g()*t.length,"px"),width:"100%",flexDirection:"column",direction:a},t.map((function(n,e){return Object(d.c)(m,{key:Object(p.a)(),content:n,width:v()})}))):Object(d.c)(f,{ref:O,translate:B,transition:P,width:"".concat(g()*t.length,"px"),height:"100%",flexDdirection:"row",direction:a},t.map((function(n,e){return Object(d.c)(m,{key:Object(p.a)(),content:n,width:v()})})));return Object(d.c)(c.a.Fragment,null,Object(d.c)("div",{css:N,ref:h},S,o?Object(d.c)(j,{slides:t,activeIndex:R}):null),i?Object(d.c)(E,{navigateTo:function(n){return function(n){_(Object(u.a)(Object(u.a)({},L),{},{activeIndex:n,translate:n*g()}))}(n)},barLength:"700",barDesc:x.a.isUndefined(l)?null:l}):null,Object(d.c)(I,{display:b&&R<t.length-1?"block":"none"}))},N=Object(d.b)(_());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(22);a.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,{slides:[{type:"image",url:"/images/box_1.png"},{type:"image",url:"/images/box_2.png"},{type:"slider",content:[{type:"image",url:"/images/box_3_1.png"},{type:"image",url:"/images/box_3_2.png"},{type:"image",url:"/images/box_3_3.png"}]}],settings:{sliderDots:!0,sliderDirection:"Y",trackBar:!1,showNext:!0}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.5e0fce6e.chunk.js.map