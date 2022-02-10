(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(6),r=a.n(c),s=a(2),l=(a(11),a(0));var o=function(){return Object(l.jsx)("a",{className:"navbar-brand",children:"Victor Weinert"})};var d=function(e){var t=e.views,a=void 0===t?[]:t,n=e.currentView,i=e.setCurrentView;return Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navmenu",children:Object(l.jsx)("ul",{className:"navbar-nav ms-auto",children:a.map((function(e){return Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link"+(n.id===e.id?" fw-bolder text-decoration-underline":""),href:"#",onClick:function(){i(e)},children:e.name})},e.id)}))})})};var m=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("p",{children:"I am an aspiring developer looking to debug, build and deploy your applications! My undergraduate is in the soft sciences and now I am working through a programming bootcamp to further hone my skills and improve my talents so that I can improve your codebase. I am currently looking for work as well as new projects to work on."})})},b=a(3),j=a(5);var u=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),r=Object(s.a)(c,2),o=r[0],d=r[1],m=a.name,u=a.email,h=a.message,p=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));o||(i(Object(j.a)(Object(j.a)({},a),{},Object(b.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("form",{id:"contact-form",className:"justify-content-md-start",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",a)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:m,onBlur:p})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:u,onBlur:p})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"3",defaultValue:h,onBlur:p})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{"data-testid":"button",className:"btn btn-secondary",type:"submit",children:"Submit"})]})})},h=a.p+"static/media/1.c9719ed0.svg",p=a.p+"static/media/2.9a936919.svg",v=a.p+"static/media/3.90ddda47.svg",g=a.p+"static/media/4.0042eae2.svg",x=a.p+"static/media/5.34b4ab6f.svg",O=a.p+"static/media/6.c8aa9585.svg";var f=function(){var e=[{id:1,link:"https://github.com/vw0389/work-it-done",deployed:"https://warm-eyrie-07140.herokuapp.com/",name:"work-it-done",image:h},{id:2,link:"https://github.com/vw0389/react-portfolio",deployed:"https://vweinert.com",name:"React Portfolio",image:p},{id:3,link:"https://github.com/vw0389/what-is-that-song",deployed:"https://vw0389.github.io/what-is-that-song/",name:"What Is That Song",image:v},{id:4,link:"https://github.com/vw0389/the-network",deployed:"",name:"the-network",image:g},{id:5,link:"https://github.com/vw0389/write-it-down",deployed:"",name:"write-it-down",image:x},{id:6,link:"https://github.com/vw0389/Work-Day-Scheduler",deployed:"https://vw0389.github.io/Work-Day-Scheduler/",name:"Work-Day-Scheduler",image:O}];return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{class:"row",children:e.map((function(e){return Object(l.jsxs)("div",{className:"p-2 col-md-4",children:[Object(l.jsx)("a",{href:e.link,target:"_blank",children:Object(l.jsx)("h4",{className:"py-1",children:e.name})}),e.deployed&&Object(l.jsx)("a",{href:e.deployed,target:"_blank",children:Object(l.jsx)("h4",{className:"",children:"Deployed"})}),Object(l.jsx)("a",{href:e.link,target:"_blank",children:Object(l.jsx)("img",{className:"img-fluid",src:e.image,alt:""})})]},e.id)}))})})};var w=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Languages"}),Object(l.jsx)("ul",{children:["Java","Python","Javascript","Bash"].map((function(e){return Object(l.jsx)("li",{children:e})}))}),Object(l.jsx)("h2",{children:"Experience With:"}),Object(l.jsx)("ul",{children:["NodeJS","Bootstrap","React","Express.js","Relational Databases","NoSQL Databases","Django","Spring","Git & Github & Gitlab","AWS & Digital Ocean","Shell Scripting","Linux, deb & rpm based"].map((function(e){return Object(l.jsx)("li",{children:e})}))}),Object(l.jsx)("a",{href:"https://vweinert.com/victor_weinert_resume.pdf",children:Object(l.jsx)("h4",{children:"Resume Download"})})]})};var k=function(e){var t=e.currentView;return Object(l.jsx)("section",{className:"bg-dark text-light p-4 text-center",children:function(e){switch(e){case 1:default:return Object(l.jsx)(m,{});case 2:return Object(l.jsx)(f,{});case 3:return Object(l.jsx)(u,{});case 4:return Object(l.jsx)(w,{})}}(t.id)})};var y=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:[{id:1,name:"Github",fontA:"fab fa-github fa-4x",link:"https://github.com/vw0389"},{id:2,name:"Gitlab",fontA:"fab fa-gitlab fa-4x",link:"https://gitlab.com/vw1056"},{id:3,name:"Linkedin",fontA:"fab fa-linkedin fa-4x",link:"https://www.linkedin.com/in/victor-weinert-ab79b3217/"},{id:4,name:"Email",fontA:"fas fa-envelope fa-4x",link:"mailto:me@vweinert.com"}].map((function(e){return Object(l.jsx)("div",{className:"col-sm-3 d-flex justify-content-center py-3",children:Object(l.jsx)("a",{href:e.link,target:"_blank",children:Object(l.jsx)("i",{className:e.fontA})})},e.id)}))})})};var N=function(){var e=Object(n.useState)([{id:1,name:"About Me"},{id:2,name:"Portfolio"},{id:3,name:"Contact"},{id:4,name:"Resume"}]),t=Object(s.a)(e,1)[0],a=Object(n.useState)(t[0]),i=Object(s.a)(a,2),c=i[0],r=i[1];return Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(o,{}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navmenu",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)(d,{views:t,currentView:c,setCurrentView:r})]})}),Object(l.jsx)(k,{currentView:c}),Object(l.jsx)(y,{})]})};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.aa2ba498.chunk.js.map