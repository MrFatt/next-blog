(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{16:function(e){e.exports={posts:[{key:"goodbye-redux",title:"[翻译]再见了, Redux",tag:["Redux"],date:"2018-09-18"},{key:"react-native-at-airbnb-4",title:"[翻译]Airbnb 的 React Native 实践： 弃用 React Native",tag:["React-Native"],date:"2018-08-14"},{key:"react-native-at-airbnb-5",title:"[翻译]Airbnb 的 React Native 实践： 移动端发展计划",tag:["React-Native"],date:"2018-08-11"},{key:"redux-vs-context-api",title:"对比 Redux 和 Context API",tag:["React","Redux"],date:"2018-07-26"},{key:"react-native-at-airbnb-3",title:"[翻译]Airbnb 的 React Native 实践： 构建一个跨平台的移动端团队",tag:["React-Native"],date:"2018-07-25"},{key:"react-native-at-airbnb-2",title:"[翻译]Airbnb 的 React Native 实践： 技术细节",tag:["React-Native"],date:"2018-07-19"},{key:"react-native-at-airbnb-1",title:"[翻译]Airbnb 的 React Native 实践： 概述",tag:["React-Native"],date:"2018-07-18"}],tags:[{name:"Redux",count:2},{name:"React-Native",count:5},{name:"React",count:1}]}},262:function(e,t,n){__NEXT_REGISTER_PAGE("/page",function(){return e.exports=n(62),{page:e.exports.default}})},51:function(e,t,n){var a={"./goodbye-redux.md":[106,10],"./react-native-at-airbnb-1.md":[107,11],"./react-native-at-airbnb-2.md":[108,12],"./react-native-at-airbnb-3.md":[109,13],"./react-native-at-airbnb-4.md":[110,14],"./react-native-at-airbnb-5.md":[111,15],"./redux-vs-context-api.md":[112,16]};function r(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id=51,e.exports=r},62:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(1),c=n.n(o),i=n(0),s=n.n(i),u=n(30),l=n(24),p=n(5),d=n.n(p),f=n(4),b=n.n(f),m=n(9),x=b()().publicRuntimeConfig.backendUrl,y={hover:{"&:hover":{color:"blue",opacity:.6,cursor:"pointer"}},name:{fontSize:"xx-large"},meta:{marginTop:10,height:20}},v=function(e){var t=e.data,n=t.key,a=t.content,r=Object(m.d)(a);return s.a.createElement("div",{className:"jsx-1755787817 card-container"},s.a.createElement("div",{className:"jsx-1755787817 card"},s.a.createElement("div",{style:y.content,className:"jsx-1755787817 post-overview"},s.a.createElement(d.a,{href:"".concat(x,"/post/").concat(n)},s.a.createElement("a",{className:"jsx-1755787817 post-title"},r)),s.a.createElement("div",{className:"jsx-1755787817 post-content"},Object(m.c)(Object(m.e)(a))),s.a.createElement(d.a,{href:"".concat(x,"/post/").concat(n)},s.a.createElement("a",{className:"jsx-1755787817 read-more"},"Read more")))),s.a.createElement(c.a,{styleId:"1755787817",css:[".card.jsx-1755787817{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:10px;padding-bottom:15px;height:200px;width:100%;margin-right:40px;}",".post-overview.jsx-1755787817{padding-top:0;padding-bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".post-content.jsx-1755787817{overflow:hidden;line-height:23px;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:5;white-space:pre-wrap;-webkit-box-orient:vertical;}",".post-title.jsx-1755787817{font-size:24px;}",".read-more.jsx-1755787817{font-size:12px;}","a.jsx-1755787817{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;color:rgba(0,0,0,0.7);}","a.jsx-1755787817:hover{color:blue;opacity:0.6;cursor:pointer;}"]}))},g=function(e){return s.a.createElement("div",{className:"jsx-1081340487 post-list-container"},s.a.createElement("ul",{className:"jsx-1081340487"},e.list.map(function(e,t){return s.a.createElement(v,{key:"post-".concat(t),data:e})})),s.a.createElement(c.a,{styleId:"1081340487",css:["ul{padding:0;}",".card-container{box-shadow:0 2px 1px -2px rgba(0,0,0,0.2);}",".card-container:last-child{box-shadow:0 2px 1px -2px rgba(0,0,0,0);}","li{list-style:none;}"]}))},h=b()().publicRuntimeConfig.backendUrl,w=function(e){return s.a.createElement("div",{className:"jsx-1395599585 sidebar-container"},s.a.createElement("div",{className:"jsx-1395599585 sidebar-title"},"Tags:"),e.tags.map(function(e,t){return s.a.createElement("div",{key:"tag-".concat(t),className:"jsx-1395599585 sidebar-tag"},s.a.createElement(d.a,{href:"".concat(h,"/tags/").concat(e.name)},s.a.createElement("a",{className:"jsx-1395599585"},"".concat(e.name,"  (").concat(e.count,")"))))}),s.a.createElement(c.a,{styleId:"1395599585",css:[".sidebar-title.jsx-1395599585{padding-bottom:10px;font-size:large;box-shadow:0 2px 1px -2px rgba(0,0,0,0.2);}",".sidebar-tag.jsx-1395599585{padding-top:10px;}","a.jsx-1395599585{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;color:rgba(0,0,0,0.7);}"]}))},j=b()().publicRuntimeConfig.backendUrl,k=function(e){var t=e.pageCount,n=e.currentPage,a=void 0===n?1:n,r=Object(m.b)(t,a);return s.a.createElement("div",{className:c.a.dynamic([["1873593698",[a,a]]])},r.map(function(e){return s.a.createElement(d.a,{href:"".concat(j,"/page/").concat(e),key:"page-".concat(e)},s.a.createElement("a",{className:c.a.dynamic([["1873593698",[a,a]]])+" page-number"},e))}),s.a.createElement(c.a,{styleId:"1873593698",css:[".__jsx-style-dynamic-selector{text-align:center;}",".page-number.__jsx-style-dynamic-selector{margin-right:15px;}",".page-number.__jsx-style-dynamic-selector:nth-child(".concat(a,"){cursor:text;}"),".page-number.__jsx-style-dynamic-selector:nth-child(".concat(a,"):hover{color:black;}")],dynamic:[a,a]}))},E=n(16);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t,n,a,r,o,c){try{var i=e[o](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(a,r)}function _(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function c(e){R(o,a,r,c,i,"next",e)}function i(e){R(o,a,r,c,i,"throw",e)}c(void 0)})}}function O(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,A(t).apply(this,arguments))}var a,o,u,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,i["Component"]),a=t,o=[{key:"render",value:function(){var e=E.tags,t=this.props,n=t.posts,a=t.filteredPosts,r=t.router.query.cur;return s.a.createElement(l.a,null,s.a.createElement("div",{className:"jsx-3163762700 home-container"},s.a.createElement("div",{className:"jsx-3163762700 content-with-pagination"},s.a.createElement(g,{list:n}),s.a.createElement(k,{pageCount:Math.ceil(a.length/5),currentPage:r})),s.a.createElement(w,{tags:e})),s.a.createElement(c.a,{styleId:"3163762700",css:[".home-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:20px;}",".content-with-pagination{margin-right:100px;}",".post-list-container{-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;}",".sidebar-container{min-width:150px;}"]}))}}],u=[{key:"getInitialProps",value:(p=_(r.a.mark(function e(t){var a,o,c,i,s,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query,o=a.cur,c=void 0===o?1:o,i=a.tag,s=i?E.posts.filter(function(e){return e.tag===i}):E.posts,e.next=4,Promise.all(s.slice(5*(c-1),5*c).map(function(){var e=_(r.a.mark(function e(t){var a,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.key,e.next=3,n(51)("./".concat(a,".md"));case 3:return o=e.sent,e.abrupt("return",{key:a,content:o.default});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 4:return u=e.sent,e.abrupt("return",{posts:u,filteredPosts:s});case 6:case"end":return e.stop()}},e,this)})),function(e){return p.apply(this,arguments)})}],o&&O(a.prototype,o),u&&O(a,u),t}();t.default=Object(u.withRouter)(I)},9:function(e,t,n){"use strict";var a=function(e,t){return e<10?Array.from({length:e},function(e,t){return t+1}):[1,2,3,4,5,6].includes(t)?Array.from({length:10},function(e,t){return t+1}):Array.from({length:5},function(t,n){return n+e-4}).includes(t)?Array.from({length:10},function(t,n){return n+e-9}):Array.from({length:10},function(e,n){return n+t-5})},r=n(4);var o=n.n(r)()().serverRuntimeConfig.backendUrl,c=function(e){return/#(.*)/g.exec(e)[1]},i=function(e){return/\x2D{3}\n([\0-\uFFFF]*)/.exec(e)[1]},s=function(e){return e.slice(0,900).replace(/#(.*)/g,"").replace(/!?\[(.*?)\]\((.*?)\)/g,function(e,t){return t}).replace(/[\n#_>\[\]]/g,"").replace(/\(http.*/,"").trim()},u=function(e){return function(e){for(var t=new RegExp(/\!\[(.*)\]\(\/static\/(.*)\)/),n=t.exec(e);n;)e=e.replace(n[0],"![".concat(n[1],"](/").concat(o,"/").concat(n[2],")")),n=t.exec(e);return e}(i(e))};n.d(t,"b",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"e",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return u})}},[[262,1,0]]]);