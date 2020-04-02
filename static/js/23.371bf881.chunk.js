(this["webpackJsonpacademycloud-frontend"]=this["webpackJsonpacademycloud-frontend"]||[]).push([[23],{190:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),a=n.n(r),i=n(185).a.h1.withConfig({displayName:"TitleText__Title",componentId:"sc-13eorhb-0"})(["font-weight:700;font-size:16px;"]),o=function(e){var t=e.children;return a.a.createElement(i,null,t)}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=n(185).a.div.withConfig({displayName:"TitleBar",componentId:"rklovu-0"})(["margin:8px 0;",""],(function(e){var t=e.spaceBetween;return void 0!==t&&t?"\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  ":""}))},228:function(e,t,n){"use strict";n(101),n(204)},229:function(e,t,n){"use strict";n(101),n(204)},230:function(e,t,n){"use strict";var r=n(245);t.a=r.a},231:function(e,t,n){"use strict";var r=n(225);t.a=r.a},233:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var r=n(1),a=n.n(r),i=n(43),o=i.d.validateMessages,u=a.a.createElement(i.b,{id:o.required}),c=(i.b,o.number,a.a.createElement(i.b,{id:o.integer})),l=a.a.createElement(i.b,{id:o.email})},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1);function a(e,t,n){var a=r.useRef({});return"value"in a.current&&!n(a.current.condition,t)||(a.current.value=e(),a.current.condition=t),a.current.value}},355:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var f=l(n(1)),d=s(n(404)),p=s(n(405)),m=s(n(375)),b=n(406),y=s(n(332)),v=n(407),h=function(e){function t(){var e;return a(this,t),(e=o(this,u(t).apply(this,arguments))).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0},e.onResize=function(t){var n=e.props.onResize,r=t[0].target.getBoundingClientRect(),a=r.width,i=r.height,o=Math.floor(a),u=Math.floor(i);if(e.state.width!==o||e.state.height!==u){var c={width:o,height:u};e.setState(c),n&&n(c)}},e.setChildNode=function(t){e.childNode=t},e}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=d.default(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new y.default(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=p.default(e);if(t.length>1)m.default(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return m.default(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(f.isValidElement(n)&&v.supportRef(n)){var r=n.ref;t[0]=f.cloneElement(n,{ref:b.composeRef(r,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!f.isValidElement(e)||"key"in e&&null!==e.key?e:f.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}])&&i(n.prototype,r),l&&i(n,l),t}(f.Component);h.displayName="ResizeObserver",t.default=h},358:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(402))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},402:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(1)),a=o(n(403)),i=o(n(198));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t){return r.default.createElement(i.default,Object.assign({},e,{ref:t,icon:a.default}))};u.displayName="SearchOutlined";var c=r.default.forwardRef(u);t.default=c},403:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"search",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]}}},404:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e instanceof HTMLElement)return e;return a.default.findDOMNode(e)};var r,a=(r=n(54))&&r.__esModule?r:{default:r}},405:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=[];return a.default.Children.forEach(t,(function(t){void 0!==t&&null!==t&&(Array.isArray(t)?n=n.concat(e(t)):(0,i.isFragment)(t)&&t.props?n=n.concat(e(t.props.children)):n.push(t))})),n};var r,a=(r=n(1))&&r.__esModule?r:{default:r},i=n(71)},406:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){"function"===typeof e?e(t):"object"===r(e)&&e&&"current"in e&&(e.current=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.fillRef=a,t.composeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){a(t,e)}))}},t.supportRef=function(e){if(e.type&&e.type.prototype&&!e.type.prototype.render)return!1;if("function"===typeof e&&e.prototype&&!e.prototype.render)return!1;return!0}},407:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportRef=function(e){return!(e.type&&e.type.prototype&&!e.type.prototype.render)}},423:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},647:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));n(229);var r=n(231),a=(n(228),n(230)),i=n(1),o=n.n(i),u=(n(105),n(58)),c=(n(220),n(219)),l=(n(247),n(248)),s=(n(227),n(232)),f=n(10),d=n(0),p=n.n(d),m=n(2),b=n(28),y=n(19),v=n(193),h=n(43),O=n(235),E=n(233),g=Object(b.a)(y.a),w=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getProfile();case 2:return t=e.sent,n=t.profile,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(f.a)(t,2),r=n[0],a=n[1],e.next=3,g.updateProfile(r,a);case 3:return i=e.sent,e.abrupt("return",i.profile);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=h.d.identity.account.basic.profile,P=h.d.components.operationResult,R=function(){var e=s.a.useForm(),t=Object(f.a)(e,1)[0],n=Object(O.a)(),r=Object(f.a)(n,2),a=r[0],i=r[1],d=Object(v.a)({promiseFn:w,onResolve:function(e){t.setFieldsValue(e)}}).isPending,p=Object(v.a)({deferFn:_,onResolve:function(e){t.setFieldsValue(e),a.success({messageId:[P.success,[j.opName]]})}}),m=p.isPending,b=p.run;return o.a.createElement(u.a,{spinning:d||m},i,o.a.createElement(s.a,{initialValues:void 0,layout:"vertical",form:t,onFinish:function(e){var t=e.email,n=e.name;b(t,n)}},o.a.createElement(s.a.Item,{label:o.a.createElement(h.b,{id:j.id}),name:"id"},o.a.createElement(l.a,{disabled:!0})),o.a.createElement(s.a.Item,{label:o.a.createElement(h.b,{id:j.username}),name:"username"},o.a.createElement(l.a,{disabled:!0})),o.a.createElement(s.a.Item,{rules:[{required:!0,message:E.c}],label:o.a.createElement(h.b,{id:j.name}),name:"name"},o.a.createElement(l.a,null)),o.a.createElement(s.a.Item,{rules:[{type:"email",message:E.a},{required:!0,message:E.c}],label:o.a.createElement(h.b,{id:j.email}),name:"email"},o.a.createElement(l.a,null)),o.a.createElement(s.a.Item,null,o.a.createElement(c.a,{type:"primary",htmlType:"submit"},o.a.createElement(h.b,{id:j.update})))))},M=n(185),x=Object(b.a)(y.a),C=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(f.a)(t,2),r=n[0],a=n[1],e.next=3,x.updatePassword(r,a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=h.d.identity.account.basic.changePassword,k=h.d.components.operationResult,S=function(){var e=s.a.useForm(),t=Object(f.a)(e,1)[0],n=Object(O.a)(),r=Object(f.a)(n,2),a=r[0],i=r[1],d=Object(v.a)({onResolve:function(){t.setFieldsValue({original:"",updated:""}),a.success({messageId:[k.success,[I.opName]]})},onReject:function(){a.error({messageId:[k.fail,[I.opName]],descriptionId:I.failedDescription})},deferFn:C}),p=d.isPending,m=d.run;return o.a.createElement(u.a,{spinning:p},i,o.a.createElement(s.a,{initialValues:void 0,layout:"vertical",form:t,onFinish:function(e){var t=e.original,n=e.updated;m(t,n)}},o.a.createElement(s.a.Item,{rules:[{required:!0,message:E.c}],label:o.a.createElement(h.b,{id:I.original}),name:"original"},o.a.createElement(l.a,{type:"password"})),o.a.createElement(s.a.Item,{rules:[{required:!0,message:E.c}],label:o.a.createElement(h.b,{id:I.newPassword}),name:"updated"},o.a.createElement(l.a,{type:"password"})),o.a.createElement(s.a.Item,null,o.a.createElement(c.a,{type:"primary",htmlType:"submit"},o.a.createElement(h.b,{id:I.update})))))},z=n(196),N=n(190),F=M.a.div.withConfig({displayName:"BasicInformation__ProfileFormDiv",componentId:"yafwdd-0"})(["max-width:400px;"]),T=Object(M.a)(a.a).withConfig({displayName:"BasicInformation__WidthLimitedRow",componentId:"yafwdd-1"})(["max-width:1000px;"]),V=h.d.identity.account.basic;function B(e){return o.a.createElement("div",null,o.a.createElement(T,{gutter:32},o.a.createElement(r.a,{xs:24,md:12},o.a.createElement(z.a,null,o.a.createElement(N.a,null,o.a.createElement(h.b,{id:V.profile.title}))),o.a.createElement(F,null,o.a.createElement(R,null))),o.a.createElement(r.a,{xs:24,md:12},o.a.createElement(z.a,null,o.a.createElement(N.a,null,o.a.createElement(h.b,{id:V.changePassword.title}))),o.a.createElement(F,null,o.a.createElement(S,null)))))}}}]);
//# sourceMappingURL=23.371bf881.chunk.js.map