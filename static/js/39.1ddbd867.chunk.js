(this["webpackJsonpacademycloud-frontend"]=this["webpackJsonpacademycloud-frontend"]||[]).push([[39],{190:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(1),r=n.n(a),c=n(185).a.h1.withConfig({displayName:"TitleText__Title",componentId:"sc-13eorhb-0"})(["font-weight:700;font-size:16px;"]),i=function(e){var t=e.children;return r.a.createElement(c,null,t)}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=n(185).a.div.withConfig({displayName:"TitleBar",componentId:"rklovu-0"})(["margin:8px 0;",""],(function(e){var t=e.spaceBetween;return void 0!==t&&t?"\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  ":""}))},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(1),r=n.n(a),c=n(104),i=n.n(c),u=function(e){var t=e.dateTimeString;return r.a.createElement(r.a.Fragment,null,i()(t).format("YYYY-MM-DD HH:mm:ss"))}},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(10),r=n(1);function c(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return[n,Object(r.useCallback)((function(){return c((function(e){return!e}))}),[])]}},648:function(e,t,n){"use strict";n.r(t),n.d(t,"Volume",(function(){return g}));var a=n(10),r=n(1),c=n.n(r),i=n(43),u=n(196),o=n(190),l=n(221),d=n(215),m=(n(195),n(194)),s=n(28),f=n(193),E=n(197),v=n(40);var b=i.d.resources.volume,h=Object(s.a)(v.a),p=function(){return h.getVolumes().then((function(e){return e.volumes}))},T=function(e){var t=Object(f.a)({promiseFn:p,watch:e.refreshToken}),n=t.data,a=t.isPending;return c.a.createElement(m.a,{dataSource:n,loading:a,rowKey:"id"},c.a.createElement(m.a.Column,{title:c.a.createElement(i.b,{id:b.id}),dataIndex:"id"}),c.a.createElement(m.a.Column,{title:c.a.createElement(i.b,{id:b.size}),dataIndex:"size",render:function(e){return"".concat(e," GB")}}),c.a.createElement(m.a.Column,{title:c.a.createElement(i.b,{id:b.attachedToInstance}),dataIndex:"attachedToInstanceId",render:function(e,t){return"".concat(t.attachedToInstanceName," (").concat(t.attachedToInstanceId.substr(0,6),")")}}),c.a.createElement(m.a.Column,{title:c.a.createElement(i.b,{id:b.attachedToDevice}),dataIndex:"attachedToDevice"}),c.a.createElement(m.a.Column,{title:c.a.createElement(i.b,{id:b.createTime}),dataIndex:"createTime",render:function(e){return c.a.createElement(E.a,{dateTimeString:e})}}))},I=i.d.resources.volume,g=function(e){var t=Object(d.a)(),n=Object(a.a)(t,2),r=n[0],m=n[1];return c.a.createElement("div",null,c.a.createElement(u.a,{spaceBetween:!0},c.a.createElement(o.a,null,c.a.createElement(i.b,{id:I.title})),c.a.createElement("span",null,c.a.createElement(l.a,{onClick:m},c.a.createElement(i.b,{id:I.refresh})))),c.a.createElement(T,{refreshToken:r}))};t.default=g}}]);
//# sourceMappingURL=39.1ddbd867.chunk.js.map