(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),s=n.n(r),a=(n(9),n(3)),i=(n(10),n(0)),o=function(e){var t=e.name,n=e.email,c=e.id;return Object(i.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(i.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"test?200x200")}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:t}),Object(i.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(i.jsx)("div",{children:t.map((function(e,n){return Object(i.jsx)(o,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},h=function(e){e.searchfield;var t=e.searchChange;return Object(i.jsx)("div",{className:"pa2",children:Object(i.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},l=function(e){return Object(i.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})};n(12);var j=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),o=Object(a.a)(s,2),j=o[0],d=o[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var u=n.filter((function(e){return e.name.toLowerCase(0).includes(j.toLowerCase())}));return n.length?Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(i.jsx)(h,{searchChange:function(e){d(e.target.value)}}),Object(i.jsx)(l,{children:Object(i.jsx)(b,{robots:u})})]}):Object(i.jsx)("h1",{className:"tc",children:"Loading"})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};s.a.render(Object(i.jsx)(j,{}),document.getElementById("root")),d()},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.2cf2dc86.chunk.js.map