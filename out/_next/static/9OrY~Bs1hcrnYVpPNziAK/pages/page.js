(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{15:function(e){e.exports={posts:[{key:"goodbye-redux",title:"[翻译]再见了, Redux",tag:["Redux"],date:"2018-09-18"},{key:"react-native-at-airbnb-4",title:"[翻译]Airbnb 的 React Native 实践： 弃用 React Native",tag:["React-Native"],date:"2018-08-14"},{key:"react-native-at-airbnb-5",title:"[翻译]Airbnb 的 React Native 实践： 移动端发展计划",tag:["React-Native"],date:"2018-08-11"},{key:"redux-vs-context-api",title:"对比 Redux 和 Context API",tag:["React","Redux"],date:"2018-07-26"},{key:"react-native-at-airbnb-3",title:"[翻译]Airbnb 的 React Native 实践： 构建一个跨平台的移动端团队",tag:["React-Native"],date:"2018-07-25"},{key:"react-native-at-airbnb-2",title:"[翻译]Airbnb 的 React Native 实践： 技术细节",tag:["React-Native"],date:"2018-07-19"},{key:"react-native-at-airbnb-1",title:"[翻译]Airbnb 的 React Native 实践： 概述",tag:["React-Native"],date:"2018-07-18"}],tags:[{name:"Redux",count:2},{name:"React-Native",count:5},{name:"React",count:1}]}},266:function(e,t,n){__NEXT_REGISTER_PAGE("/page",function(){return e.exports=n(65),{page:e.exports.default}})},51:function(e,t,n){var a={"./goodbye-redux.md":[109,10],"./react-native-at-airbnb-1.md":[110,11],"./react-native-at-airbnb-2.md":[111,12],"./react-native-at-airbnb-3.md":[112,13],"./react-native-at-airbnb-4.md":[113,14],"./react-native-at-airbnb-5.md":[114,15],"./redux-vs-context-api.md":[115,16]};function r(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id=51,e.exports=r},52:function(e,t,n){"use strict";(function(e){var a=n(1),r=n.n(a),o=n(0),c=n.n(o),i=n(4),s=n.n(i),u=n(8),l=e.env.BACKEND_URL,p={hover:{"&:hover":{color:"blue",opacity:.6,cursor:"pointer"}},name:{fontSize:"xx-large"},meta:{marginTop:10,height:20}};t.a=function(e){var t=e.data,n=t.key,a=t.content,o=Object(u.c)(a);return c.a.createElement("div",{className:"jsx-1755787817 card-container"},c.a.createElement("div",{className:"jsx-1755787817 card"},c.a.createElement("div",{style:p.content,className:"jsx-1755787817 post-overview"},c.a.createElement(s.a,{href:"".concat(l,"/post/").concat(n)},c.a.createElement("a",{className:"jsx-1755787817 post-title"},o)),c.a.createElement("div",{className:"jsx-1755787817 post-content"},Object(u.b)(Object(u.d)(a))),c.a.createElement(s.a,{href:"".concat(l,"/post/").concat(n)},c.a.createElement("a",{className:"jsx-1755787817 read-more"},"Read more")))),c.a.createElement(r.a,{styleId:"1755787817",css:[".card.jsx-1755787817{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:10px;padding-bottom:15px;height:200px;width:100%;margin-right:40px;}",".post-overview.jsx-1755787817{padding-top:0;padding-bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".post-content.jsx-1755787817{overflow:hidden;line-height:23px;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:5;white-space:pre-wrap;-webkit-box-orient:vertical;}",".post-title.jsx-1755787817{font-size:24px;}",".read-more.jsx-1755787817{font-size:12px;}","a.jsx-1755787817{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;color:rgba(0,0,0,0.7);}","a.jsx-1755787817:hover{color:blue;opacity:0.6;cursor:pointer;}"]}))}}).call(this,n(18))},53:function(e,t,n){"use strict";(function(e){var a=n(1),r=n.n(a),o=n(0),c=n.n(o),i=n(4),s=n.n(i),u=e.env.BACKEND_URL;t.a=function(e){return c.a.createElement("div",{className:"jsx-1395599585 sidebar-container"},c.a.createElement("div",{className:"jsx-1395599585 sidebar-title"},"Tags:"),e.tags.map(function(e,t){return c.a.createElement("div",{key:"tag-".concat(t),className:"jsx-1395599585 sidebar-tag"},c.a.createElement(s.a,{href:"".concat(u,"/tags/").concat(e.name)},c.a.createElement("a",{className:"jsx-1395599585"},"".concat(e.name,"  (").concat(e.count,")"))))}),c.a.createElement(r.a,{styleId:"1395599585",css:[".sidebar-title.jsx-1395599585{padding-bottom:10px;font-size:large;box-shadow:0 2px 1px -2px rgba(0,0,0,0.2);}",".sidebar-tag.jsx-1395599585{padding-top:10px;}","a.jsx-1395599585{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;color:rgba(0,0,0,0.7);}"]}))}}).call(this,n(18))},54:function(e,t,n){"use strict";(function(e){var a=n(1),r=n.n(a),o=n(0),c=n.n(o),i=n(4),s=n.n(i),u=n(8),l=e.env.BACKEND_URL;t.a=function(e){var t=e.pageCount,n=e.currentPage,a=void 0===n?1:n,o=Object(u.a)(t,a);return c.a.createElement("div",{className:r.a.dynamic([["1873593698",[a,a]]])},o.map(function(e){return c.a.createElement(s.a,{href:"".concat(l,"/page/").concat(e),key:"page-".concat(e)},c.a.createElement("a",{className:r.a.dynamic([["1873593698",[a,a]]])+" page-number"},e))}),c.a.createElement(r.a,{styleId:"1873593698",css:[".__jsx-style-dynamic-selector{text-align:center;}",".page-number.__jsx-style-dynamic-selector{margin-right:15px;}",".page-number.__jsx-style-dynamic-selector:nth-child(".concat(a,"){cursor:text;}"),".page-number.__jsx-style-dynamic-selector:nth-child(".concat(a,"):hover{color:black;}")],dynamic:[a,a]}))}}).call(this,n(18))},65:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),o=n(1),c=n.n(o),i=n(0),s=n.n(i),u=n(30),l=n(24),p=n(52),f=function(e){return s.a.createElement("div",{className:"jsx-1081340487 post-list-container"},s.a.createElement("ul",{className:"jsx-1081340487"},e.list.map(function(e,t){return s.a.createElement(p.a,{key:"post-".concat(t),data:e})})),s.a.createElement(c.a,{styleId:"1081340487",css:["ul{padding:0;}",".card-container{box-shadow:0 2px 1px -2px rgba(0,0,0,0.2);}",".card-container:last-child{box-shadow:0 2px 1px -2px rgba(0,0,0,0);}","li{list-style:none;}"]}))},d=n(53),m=n(54),b=n(15);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,a,r,o,c){try{var i=e[o](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(a,r)}function v(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function c(e){y(o,a,r,c,i,"next",e)}function i(e){y(o,a,r,c,i,"throw",e)}c(void 0)})}}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,w(t).apply(this,arguments))}var a,o,u,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,i["Component"]),a=t,o=[{key:"render",value:function(){var e=b.tags,t=this.props,n=t.posts,a=t.filteredPosts,r=t.router.query.cur;return s.a.createElement(l.a,null,s.a.createElement("div",{className:"jsx-3163762700 home-container"},s.a.createElement("div",{className:"jsx-3163762700 content-with-pagination"},s.a.createElement(f,{list:n}),s.a.createElement(m.a,{pageCount:Math.ceil(a.length/5),currentPage:r})),s.a.createElement(d.a,{tags:e})),s.a.createElement(c.a,{styleId:"3163762700",css:[".home-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:20px;}",".content-with-pagination{margin-right:100px;}",".post-list-container{-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;}",".sidebar-container{min-width:150px;}"]}))}}],u=[{key:"getInitialProps",value:(p=v(r.a.mark(function e(t){var a,o,c,i,s,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query,o=a.cur,c=void 0===o?1:o,i=a.tag,s=i?b.posts.filter(function(e){return e.tag===i}):b.posts,e.next=4,Promise.all(s.slice(5*(c-1),5*c).map(function(){var e=v(r.a.mark(function e(t){var a,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.key,e.next=3,n(51)("./".concat(a,".md"));case 3:return o=e.sent,e.abrupt("return",{key:a,content:o.default});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 4:return u=e.sent,e.abrupt("return",{posts:u,filteredPosts:s});case 6:case"end":return e.stop()}},e,this)})),function(e){return p.apply(this,arguments)})}],o&&g(a.prototype,o),u&&g(a,u),t}();t.default=Object(u.withRouter)(k)},8:function(e,t,n){"use strict";var a=function(e,t){return e<10?Array.from({length:e},function(e,t){return t+1}):[1,2,3,4,5,6].includes(t)?Array.from({length:10},function(e,t){return t+1}):Array.from({length:5},function(t,n){return n+e-4}).includes(t)?Array.from({length:10},function(t,n){return n+e-9}):Array.from({length:10},function(e,n){return n+t-5})};var r=function(e){return/#(.*)/g.exec(e)[1]},o=function(e){return/\x2D{3}\n([\0-\uFFFF]*)/.exec(e)[1]},c=function(e){return e.slice(0,900).replace(/#(.*)/g,"").replace(/!?\[(.*?)\]\((.*?)\)/g,function(e,t){return t}).replace(/[\n#_>\[\]]/g,"").replace(/\(http.*/,"").trim()};n.d(t,"a",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"b",function(){return c})}},[[266,1,0]]]);