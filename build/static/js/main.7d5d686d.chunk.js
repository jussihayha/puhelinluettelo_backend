(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),o=n.n(c),a=n(15),i=n.n(a),u=(n(21),n(6)),s=n(3),d=function(e){var t=e.handleFilterChange,n=e.filter;return Object(r.jsxs)("div",{children:["filter shown with ",Object(r.jsx)("input",{onChange:t,value:n})]})},l=function(e){var t=e.addPerson,n=e.handleNameChange,c=e.handleNumberChange,o=e.newName,a=e.newNumber;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)("div",{children:["name:",Object(r.jsx)("input",{required:!0,onChange:n,value:o})]}),Object(r.jsxs)("div",{children:["number:",Object(r.jsx)("input",{required:!0,onChange:c,value:a})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var t=e.person,n=e.deletePerson;return console.log(t),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t.name}),Object(r.jsx)("td",{children:t.number}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{onClick:function(){return n(t.id)},children:"delete"})})]},t.id)},b=function(e){var t=e.persons,n=e.deletePerson,c=e.filter;console.log(t),console.log(c);var o=t.filter((function(e){return e.name.includes(c)}));return Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Number"}),Object(r.jsx)("th",{})]})}),Object(r.jsx)("tbody",{children:o.map((function(e){return Object(r.jsx)(j,{person:e,deletePerson:n},e.id)}))})]})},h=n(4),f=n.n(h),m="/api/persons",O={getAll:function(){return f.a.get(m).then((function(e){return e.data}))},create:function(e){return f.a.post(m,e).then((function(e){return e.data}))},update:function(e,t){return f.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},deletePerson:function(e){return console.log(e),f.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))}},x=function(e){var t=e.message;return""===t.text?null:Object(r.jsx)("div",{className:t.error?"error":"add",children:t.text})},p=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),j=i[0],h=i[1],f=Object(c.useState)(""),m=Object(s.a)(f,2),p=m[0],v=m[1],g=Object(c.useState)(""),w=Object(s.a)(g,2),C=w[0],N=w[1],P=Object(c.useState)({text:"",error:!1}),S=Object(s.a)(P,2),k=S[0],y=S[1];Object(c.useEffect)((function(){O.getAll().then((function(e){return o(e)}))}),[]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(x,{message:k}),Object(r.jsx)(d,{handleFilterChange:function(e){N(e.target.value)},filter:C}),Object(r.jsx)("h3",{children:"Add a new"}),Object(r.jsx)(l,{addPerson:function(e){if(e.preventDefault(),n.some((function(e){return e.name.toLowerCase()===j.toLowerCase()}))){if(window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?"))){var t=n.find((function(e){return e.name.toLowerCase()===j.toLowerCase()})),r=Object(u.a)(Object(u.a)({},t),{},{number:p});O.update(r.id,r).then((function(e){o(n.map((function(t){return t.id!==r.id?t:e}))),y({text:"".concat(r.name," number was updated to ").concat(r.number),error:!1}),setTimeout((function(){y({text:"",error:!1})}),2500)})).catch((function(e){console.log(e)}))}}else{var c={name:j,number:p};O.create(c).then((function(e){o(n.concat(e)),h(""),v(""),y({text:"".concat(e.name," number was added to phonebook"),error:!1}),setTimeout((function(){y({text:"",error:!1})}),2500)}))}},handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){v(e.target.value)},newName:j,newNumber:p}),Object(r.jsx)("h3",{children:"Numbers"}),Object(r.jsx)(b,{persons:n,deletePerson:function(e){var t=n.find((function(t){return t.id===e}));window.confirm("Delete ".concat(t.name,"?"))&&O.deletePerson(e).then((function(){var r=n.filter((function(t){return t.id!==e}));o(r),y({text:"".concat(t.name,"'s contact info was deleted from the server."),error:!1}),setTimeout((function(){y({text:"",error:!1})}),2500),N("")})).catch((function(r){y({text:"".concat(t.name," has already been deleted!"),error:!0}),setTimeout((function(){y({text:"",error:!1})}),2500),o(n.filter((function(t){return t.id!==e})))}))},filter:C})]})};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7d5d686d.chunk.js.map