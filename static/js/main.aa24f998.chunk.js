(this.webpackJsonpreactcalculator=this.webpackJsonpreactcalculator||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(5),i=c.n(s),l=c(2),r=(c(10),c(4)),b=c(0);var j=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),j=i[0],o=i[1],d=Object(a.useState)("0"),O=Object(l.a)(d,2),u=O[0],h=O[1],x=Object(a.useState)(null),v=Object(l.a)(x,2),k=v[0],m=v[1],p=Object(a.useState)(!1),g=Object(l.a)(p,2),N=g[0],C=g[1],f=function(e){j.includes(".")&&"."===e.target.innerText||(N&&n(""),o(j?function(t){return t+e.target.innerText}:e.target.innerText),C(!1))};Object(a.useEffect)((function(){h(j)}),[j]),Object(a.useEffect)((function(){h("0")}),[]);var S=function(e){C(!1),m(e.target.innerText),""!==j&&(""!==c?F():(n(j),o("")))},F=function(e){var t;switch("="===(null===e||void 0===e?void 0:e.target.innerText)&&C(!0),k){case"/":t=String(parseFloat(c)/parseFloat(j));break;case"+":t=String(parseFloat(c)+parseFloat(j));break;case"X":t=String(parseFloat(c)*parseFloat(j));break;case"-":t=String(parseFloat(c)-parseFloat(j));break;default:return}h(""),n(t),o("")};return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("div",{className:"screen",children:""!==u||"0"===u?Object(b.jsx)(r.a,{value:u,displayType:"text",thousandSeparator:!0}):Object(b.jsx)(r.a,{value:c,displayType:"text",thousandSeparator:!0})}),Object(b.jsx)("div",{className:"btn light-gray",onClick:function(){n(""),o(""),h("0")},children:"AC"}),Object(b.jsx)("div",{className:"btn light-gray",onClick:function(){o(String(c?parseFloat(j)/100*c:parseFloat(j)/100))},children:"%"}),Object(b.jsx)("div",{className:"btn light-gray",onClick:function(){"-"===j.charAt(0)?o(j.substring(1)):o("-"+j)},children:"+/-"}),Object(b.jsx)("div",{className:"btn orange",onClick:S,children:"/"}),Object(b.jsx)("div",{className:"btn",onClick:f,children:"7"}),Object(b.jsx)("div",{className:"btn",onClick:f,children:"8"}),Object(b.jsx)("div",{className:"btn",onClick:f,children:"9"}),Object(b.jsx)("div",{className:"btn orange",onClick:S,children:"X"}),Object(b.jsx)("div",{className:"btn",onClick:f,children:"4"}),Object(b.jsx)("div",{className:"btn",onClick:f,children:"5"}),Object(b.jsx)("div",{className:"btn",onClick:f,children:"6"}),Object(b.jsx)("div",{className:"btn orange",onClick:S,children:"+"}),Object(b.jsx)("div",{className:"btn",onClick:f,children:"1"}),Object(b.jsx)("div",{className:"btn",onClick:f,children:"2"}),Object(b.jsx)("div",{className:"btn",onClick:f,children:"3"}),Object(b.jsx)("div",{className:"btn orange",onClick:S,children:"-"}),Object(b.jsx)("div",{className:" btn zero",onClick:f,children:"0"}),Object(b.jsx)("div",{className:"btn",onClick:f,children:"."}),Object(b.jsx)("div",{className:"btn",onClick:F,children:"="})]})})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.aa24f998.chunk.js.map