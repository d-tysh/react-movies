"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[125],{125:function(t,n,r){r.r(n),r.d(n,{default:function(){return d}});var e,c=r(439),u=r(791),o=r(546),a=r(689),s=r(168),i=r(686),f=r(87),h=(0,i.Z)(f.NavLink)(e||(e=(0,s.Z)(["\n    color: black;\n\n    &:hover {\n        color: orangered;\n    }\n"]))),p=r(184),l=function(t){var n=t.movies,r=t.loading,e=t.error,c=(0,a.TH)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Trending today"}),r&&(0,p.jsx)("div",{children:"Loading..."}),e&&(0,p.jsx)("div",{children:"Oops, something went wrong..."}),n&&(0,p.jsx)("ul",{children:n.map((function(t){return(0,p.jsx)("li",{children:(0,p.jsx)(h,{to:"/movies/".concat(t.id),state:{from:c},children:t.title})},t.id)}))})]})},d=function(){var t=(0,u.useState)([]),n=(0,c.Z)(t,2),r=n[0],e=n[1],a=(0,u.useState)(!1),s=(0,c.Z)(a,2),i=s[0],f=s[1],h=(0,u.useState)(null),d=(0,c.Z)(h,2),v=d[0],w=d[1];return(0,u.useEffect)((function(){f(!0),(0,o.XT)("popular").then((function(t){f(!1),e(t.results.slice(0,20))})).catch((function(){return w(!0)}))}),[]),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l,{movies:r,loading:i,error:v})})}},546:function(t,n,r){r.d(n,{M1:function(){return f},XT:function(){return s},t2:function(){return i},tx:function(){return h},zi:function(){return p}});var e=r(861),c=r(687),u=r.n(c),o="https://api.themoviedb.org/3",a="376bdebe42e07e1ce735b7444b0a16bb",s=function(){var t=(0,e.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/movie/").concat(n,"?api_key=").concat(a)).then((function(t){if(!t.ok)throw new Error(t.status,t.statusText);return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/movie/").concat(n,"?api_key=").concat(a)).then((function(t){if(!t.ok)throw new Error(t.status,t.statusText);return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(a)).then((function(t){if(!t.ok)throw new Error(t.status,t.statusText);return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(a)).then((function(t){if(!t.ok)throw new Error(t.status,t.statusText);return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/search/movie?query=").concat(n,"}&include_adult=false&page=1&api_key=").concat(a)).then((function(t){if(!t.ok)throw new Error(t.status,t.statusText);return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=125.a8f15f1b.chunk.js.map