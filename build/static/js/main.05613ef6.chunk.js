(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(14),c=t.n(r),o=t(4),a=t(1),u=t(3),i=t.n(u),s=t(0),l=function(e){var n=e.query,t=e.eventHandler;return Object(s.jsxs)("div",{children:["filter shown with: ",Object(s.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.handleSubmit,t=e.nameValue,r=e.numberValue,c=e.handleName,o=e.handleNumber;return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:t,onChange:c})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:r,onChange:o})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},b=function(e){var n=e.name,t=e.number,r=e.handleDelete;return Object(s.jsxs)("p",{children:[n," ",t," ",Object(s.jsx)("button",{onClick:r,children:"delete"})]})},f=function(e){var n=e.contactInfo,t=e.searchQuery,r=e.removeFunction;return Object(s.jsx)("div",{children:n.map((function(e){return e.name.toUpperCase().includes(t.toUpperCase())?Object(s.jsx)(b,{name:e.name,number:e.number,handleDelete:function(){return r(e.id)}},e.name):""}))})},j=function(e){var n=e.message,t=e.status;return null===n?null:Object(s.jsx)("div",{className:t,children:n})},h="/api/persons",m={getAll:function(){return i.a.get(h).then((function(e){return e.data}))},create:function(e){return i.a.post(h,e).then((function(e){return e.data}))},update:function(e,n){return i.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return i.a.delete("".concat(h,"/").concat(e)).then((function(e){return e}))}},O=function(e){var n=e.text;return Object(s.jsx)("h2",{children:n})},p=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),u=Object(o.a)(c,2),b=u[0],h=u[1],p=Object(a.useState)(""),v=Object(o.a)(p,2),x=v[0],g=v[1],w=Object(a.useState)(""),S=Object(o.a)(w,2),k=S[0],y=S[1],C=Object(a.useState)(""),N=Object(o.a)(C,2),D=N[0],E=N[1],V=Object(a.useState)(""),A=Object(o.a)(V,2),F=A[0],I=A[1];Object(a.useEffect)((function(){console.log("effect"),i.a.get("/api/persons").then((function(e){console.log("promise fulfilled"),r(e.data)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)(O,{text:"Phonebook"}),Object(s.jsx)(j,{message:D,status:F}),Object(s.jsx)(l,{query:k,eventHandler:function(e){console.log(e.target.value),y(e.target.value)}}),Object(s.jsx)(O,{text:"Add a new"}),Object(s.jsx)(d,{handleSubmit:function(e){if(e.preventDefault(),""!==x&&""!==b){var n={name:b,number:x};if(t.find((function(e){return e.name===b}))){if(window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))){var c=t.find((function(e){return e.name===b})).id;m.update(c,n).then((function(e){r(t.map((function(n){return n.id!==c?n:e})))})).catch((function(e){console.log("Error: ",e.response),E(e.response.data.error),I("error"),setTimeout((function(){E(null)}),5e3)}))}}else t.find((function(e){return e.number===x}))?alert("".concat(x," is already added to phonebook")):m.create(n).then((function(e){E("Added ".concat(e.name)),I("success"),setTimeout((function(){E(null)}),5e3),r(t.concat(e)),h(""),g("")})).catch((function(e){console.log("Error: ",e.response),E(e.response.data.error),I("error"),setTimeout((function(){E(null)}),5e3)}))}else alert("Fill all the fields!")},nameValue:b,numberValue:x,handleName:function(e){console.log(e.target.value),h(e.target.value)},handleNumber:function(e){console.log(e.target.value),g(e.target.value)}}),Object(s.jsx)(O,{text:"Numbers"}),Object(s.jsx)(f,{contactInfo:t,searchQuery:k,removeFunction:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&m.remove(e).then((function(n){console.log("Returned persons: ",n),r(t.filter((function(n){return n.id!==e})))}))}})]})};t(38);c.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.05613ef6.chunk.js.map