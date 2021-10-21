(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{26:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(17),s=n.n(a),o=(n(26),n(11)),u=n(21),i=n(5),l=n.n(i),j=n(7),d=n(6),b=n(8),h=n(2),f=n(1),p=function(){return Object(f.jsxs)("footer",{className:"",children:[Object(f.jsx)("p",{children:"Copyright \xa9 2021"}),Object(f.jsx)(b.b,{to:"/about",children:"About"})]})},O=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Version 1.0.0"}),Object(f.jsx)(b.b,{to:"/",children:"Go back"})]})},x=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(f.jsx)("button",{style:{backgroundColor:t},className:"btn",onClick:r,children:n})};x.defaultProps={color:"steelblue"};var m=x,v=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,c=Object(h.e)();return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{children:t}),"/"===c.pathname&&Object(f.jsx)(m,{color:r?"red":"black",text:r?"Close":"Add",onClick:n})]})};v.defaultProps={title:"Task Manager"};var k=v,g=n(20),y=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(f.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(f.jsxs)("h3",{children:[t.text," ",Object(f.jsx)(g.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(f.jsx)("p",{children:t.day})]})},T=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(f.jsx)(f.Fragment,{children:t.map((function(e){return Object(f.jsx)(y,{task:e,onDelete:n,onToggle:r},e.id)}))})},w=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),u=Object(d.a)(o,2),i=u[0],l=u[1],j=Object(r.useState)("false"),b=Object(d.a)(j,2),h=b[0],p=b[1];return Object(f.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:i,reminder:h}),s(""),l(""),p(!1)):alert("Please add a task")},children:[Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{htmlFor:"",children:"Task"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{htmlFor:"",children:"Day & Time"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control form-control-check",children:[Object(f.jsx)("label",{htmlFor:"",children:"Set Reminder"}),Object(f.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(f.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},C=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),i=s[0],x=s[1];Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var m=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,x([].concat(Object(u.a)(i),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:x(i.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,x(i.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(b.a,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(k,{onAdd:function(){return c(!n)},showAdd:n}),Object(f.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(f.jsxs)(f.Fragment,{children:[n&&Object(f.jsx)(w,{onAdd:g}),i.length>0?Object(f.jsx)(T,{tasks:i,onDelete:y,onToggle:C}):"No Tasks To Show"]})}}),Object(f.jsx)(h.a,{path:"/about",component:O}),Object(f.jsx)(p,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.047342ff.chunk.js.map