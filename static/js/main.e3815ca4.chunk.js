(this.webpackJsonpportfolio_react=this.webpackJsonpportfolio_react||[]).push([[0],{21:function(e,c,t){},44:function(e,c,t){},45:function(e,c,t){},46:function(e,c,t){},68:function(e,c,t){"use strict";t.r(c);var s=t(0),i=t(1),a=t(10),r=t(32),l=t.n(r),n=(t(44),t(3)),o=(t(45),t.p+"static/media/resume.02892bc6.pdf"),j=t.p+"static/media/profilePic.f46b681c.jpg",d=(t(21),t(46),function(){var e=0,c="<WebDeveloper />",t=function t(){e<c.length&&(document.getElementById("typing").innerHTML+=c.charAt(e),e++,setTimeout(t,70))};return Object(i.useEffect)((function(){document.getElementById("typing").innerHTML="",t();!function(e,c,t){for(var s=document.querySelector("#hero-banner"),i=t,a=0;a<i;a++){var r=document.createElement("div");r.className="star";var l=Math.floor(Math.random()*c+1),n=Math.floor(Math.random()*e+1);r.style.top=l+"px",r.style.left=n+"px",r.style.position="absolute",s.appendChild(r)}}(1200,800,50),function(e,c){var t=document.querySelector("#hero-banner").childNodes,s=function(e){return e%6==0?"":e%9==0?"near":e%2==0?"far":0},i=function(e){return e%6==0?1:e%9==0?2:e%2==0?-1:0};setInterval((function(){for(var a=1;a<t.length;a++){t[a].className="star "+((o=a)%8==0?"red":o%10==0?"yellow":o%17==0?"blue":"white")+" "+s(a);var r=parseInt(t[a].style.left,10),l=c+i(a),n=void 0;n=r-l<0?r-l+e:r-l,t[a].style.left=n+"px"}var o}),20)}(1200,2)}),[]),Object(s.jsx)("section",{id:"hero-banner",children:Object(s.jsx)("div",{className:"hero-content",children:Object(s.jsxs)("div",{className:!0,children:[Object(s.jsx)("img",{id:"profile-pic",src:j}),Object(s.jsx)("h2",{id:"name",children:"Staffan Str\xf6msholm"}),Object(s.jsx)("h1",{id:"typing"}),Object(s.jsx)("div",{class:"profile-text",children:Object(s.jsxs)("p",{children:["Welcome to my portfolio website! I have built applications using HTML, CSS, Javascript, React and Node. This website is built with React. If you want to see my projects, please scroll down. If you want to get straight to my resum\xe9, you can download it ",Object(s.jsx)("a",{id:"resume",href:o,download:"Staffan-Str\xf6msholm-resum\xe9",children:"here"})]})}),Object(s.jsx)("div",{className:"arrow bounce"})]})})})}),m=t(11),h=t(15),b=t.n(h),x=t(38);var p=function(){var e=Object(i.useState)([]),c=Object(m.a)(e,2),t=c[0],a=c[1];return Object(i.useEffect)((function(){b.a.get("https://my-json-server.typicode.com/StaffanStromsholm/portfolio_db/posts").then((function(e){return a(e.data)}))}),[]),Object(s.jsxs)("div",{id:"projects",children:[Object(s.jsx)("div",{className:"projects-title",children:"My projects "}),Object(s.jsxs)(x.a,{className:"projects",children:[Object(s.jsxs)("div",{className:"project-info",children:[Object(s.jsx)("div",{className:"project-img",children:Object(s.jsx)("img",{src:"https://lh3.googleusercontent.com/VcIz6r3Xz8i_x8PhcXf6eBCIWAlTLSEnTYR1zQRAPGMFOcpLZ8YL7GxfQOxCSGZJC-ytcuG3BfQ-20uouGWwdyq6McyCoyuKilh3qBatOlvcLb1gqous-NGauR7S_5xe_cTHIi958Q=w2400"})}),Object(s.jsx)("h4",{className:"project-title",children:"My Garage"}),Object(s.jsx)("p",{className:"project-description",children:"Here I practiced Node, Express and EJS. A simple CRUD application for storing data about cars."}),Object(s.jsx)("ul",{children:Object(s.jsx)("li",{className:"project-link",children:Object(s.jsxs)("a",{href:"https://github.com/StaffanStromsholm/car_project",children:[Object(s.jsx)("i",{class:"fas fa-chevron-right"})," GitHub"]})})})]}),t.slice(1).map((function(e){return Object(s.jsxs)("div",{className:"project-info",children:[Object(s.jsx)("div",{className:"project-img",children:Object(s.jsx)("img",{src:e.imgURL})}),Object(s.jsx)("h4",{className:"project-title",children:e.title}),Object(s.jsx)("p",{className:"project-description",children:e.description}),Object(s.jsxs)("ul",{children:[e.liveURL&&Object(s.jsx)("li",{className:"project-link",children:Object(s.jsxs)("a",{href:e.liveURL,children:[Object(s.jsx)("i",{class:" fas fa-chevron-right"})," Live"]})}),e.githubURL&&Object(s.jsx)("li",{className:"project-link",children:Object(s.jsxs)("a",{href:e.githubURL,children:[Object(s.jsx)("i",{class:"fas fa-chevron-right"})," GitHub"]})})]})]})}))]})]})},u=t.p+"static/media/Typescript_logo_2020.b26a2a86.svg",O=t.p+"static/media/mongodb (1).e4025ae2.svg",g=t.p+"static/media/sql-svgrepo-com.b708b66f.svg",f=function(){return Object(s.jsx)("section",{id:"skills",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{children:"Skills"}),Object(s.jsxs)("div",{className:"skills-content",children:[Object(s.jsxs)("div",{className:"progress-group",children:[Object(s.jsx)("label",{for:"file",children:Object(s.jsx)("i",{className:"fab fa-html5"})}),Object(s.jsx)("p",{children:"HTML"}),Object(s.jsx)("progress",{id:"file",value:"50",max:"100",children:" 50% "})]}),Object(s.jsxs)("div",{className:"progress-group",children:[Object(s.jsx)("label",{for:"file",children:Object(s.jsx)("i",{className:"fab fa-css3-alt"})}),Object(s.jsx)("p",{children:"CSS"}),Object(s.jsx)("progress",{id:"file",value:"50",max:"100"})]}),Object(s.jsxs)("div",{className:"progress-group",children:[Object(s.jsx)("label",{for:"file",children:Object(s.jsx)("i",{className:"fab fa-js-square"})}),Object(s.jsx)("p",{children:"Javascript"}),Object(s.jsx)("progress",{id:"file",value:"50",max:"100"})]}),Object(s.jsxs)("div",{className:"progress-group",children:[Object(s.jsx)("label",{for:"file",children:Object(s.jsx)("i",{className:"fab fa-node"})}),Object(s.jsx)("p",{children:"NodeJS"}),Object(s.jsx)("progress",{id:"file",value:"40",max:"100"})]}),Object(s.jsxs)("div",{className:"progress-group",children:[Object(s.jsx)("label",{for:"file",children:Object(s.jsx)("i",{className:"fab fa-spin fa-react"})}),Object(s.jsx)("p",{children:"React"}),Object(s.jsx)("progress",{id:"file",value:"50",max:"100"})]}),Object(s.jsxs)("div",{className:"progress-group",children:[Object(s.jsx)("label",{for:"file",children:Object(s.jsx)("i",{className:"fas fa-mug-hot"})}),Object(s.jsx)("p",{children:"Redux"}),Object(s.jsx)("progress",{id:"file",value:"30",max:"100"})]}),Object(s.jsxs)("div",{className:"progress-group",children:[Object(s.jsx)("label",{for:"file",children:Object(s.jsx)("i",{children:Object(s.jsx)("img",{src:u,className:"typescript-logo"})})}),Object(s.jsx)("p",{children:"Typescript"}),Object(s.jsx)("progress",{id:"file",value:"20",max:"100"})]}),Object(s.jsxs)("div",{className:"progress-group",children:[Object(s.jsx)("label",{for:"file",children:Object(s.jsx)("i",{children:Object(s.jsx)("img",{src:O,className:"mongodb-logo"})})}),Object(s.jsx)("p",{children:"MongoDB"}),Object(s.jsx)("progress",{id:"file",value:"30",max:"100"})]}),Object(s.jsxs)("div",{className:"progress-group",children:[Object(s.jsx)("label",{for:"file",children:Object(s.jsx)("i",{children:Object(s.jsx)("img",{src:g,className:"mongodb-logo"})})}),Object(s.jsx)("p",{children:"SQL"}),Object(s.jsx)("progress",{id:"file",value:"30",max:"100"})]}),Object(s.jsxs)("div",{className:"progress-group",children:[Object(s.jsx)("label",{for:"file",children:Object(s.jsx)("i",{className:"fab fa-git-square"})}),Object(s.jsx)("p",{children:"Git"}),Object(s.jsx)("progress",{id:"file",value:"50",max:"100"})]})]})]})})},v=Object(n.f)((function(){var e=Object(i.useState)(""),c=Object(m.a)(e,2),t=c[0],a=c[1],r=Object(i.useState)(""),l=Object(m.a)(r,2),n=l[0],o=l[1],j=Object(i.useState)(""),d=Object(m.a)(j,2),h=d[0],x=d[1],p=Object(i.useState)(""),u=Object(m.a)(p,2),O=u[0],g=u[1],f=Object(i.useState)(!1),v=Object(m.a)(f,2),N=v[0],y=v[1],S=function(e){0!==document.querySelector("input#name").value.length&&0!==document.querySelector("input#company").value.length&&0!==document.querySelector("input#email").value.length&&0!==document.querySelector("textarea#message").value.length&&(e.preventDefault(),b.a.post("https://staffan-portfolio-backend.herokuapp.com/sendemail",{name:t,company:n,email:h,message:O},{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then((function(e){console.log(e)})),document.querySelector("input#name").value="",document.querySelector("input#company").value="",document.querySelector("input#email").value="",document.querySelector("textarea#message").value="",y(!0))};return N?Object(s.jsx)("section",{id:"contact-me",children:Object(s.jsx)("h2",{id:"contact-title",children:"Thanks! I'll get back to you."})}):Object(s.jsxs)("section",{id:"contact-me",children:[Object(s.jsx)("h2",{id:"contact-title",children:"Contact"}),Object(s.jsxs)("form",{onSubmit:S,children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name"}),Object(s.jsx)("input",{required:!0,onChange:function(e){a(e.target.value)},id:"name",name:"name"}),Object(s.jsx)("label",{htmlFor:"email",children:"Email"}),Object(s.jsx)("input",{required:!0,onChange:function(e){x(e.target.value)},id:"email",name:"email"}),Object(s.jsx)("label",{htmlFor:"company",children:"Company"}),Object(s.jsx)("input",{required:!0,onChange:function(e){o(e.target.value)},id:"company",name:"company"}),Object(s.jsx)("label",{htmlFor:"message",children:"Message"}),Object(s.jsx)("textarea",{required:!0,onChange:function(e){g(e.target.value)},id:"message",rows:"10",name:"message"}),Object(s.jsx)("button",{onClick:S,type:"submit",children:"Submit"})]})]})}));var N=function(){return Object(s.jsxs)("div",{className:"Main",children:[Object(s.jsx)(d,{}),Object(s.jsx)(p,{}),Object(s.jsx)(f,{}),Object(s.jsx)(v,{})]})};var y=function(){var e=function(){return document.querySelector("ul").classList.toggle("mobilemenu")};return document.getElementById("back-to-top"),window.matchMedia("(max-width: 576px)"),document.addEventListener("click",(function(c){"Home"!==c.target.textContent&&"Projects"!==c.target.textContent&&"Experience"!==c.target.textContent&&"Skills"!==c.target.textContent&&"Animation"!==c.target.textContent&&"Gallery"!==c.target.textContent||e()})),Object(s.jsxs)("header",{children:[Object(s.jsxs)("div",{className:"logo",children:[Object(s.jsx)(a.b,{to:"/portfolio_react",children:Object(s.jsx)("p",{className:"logo",children:"|S+>//>n|"})})," "]}),Object(s.jsxs)("nav",{children:[Object(s.jsx)("a",{onClick:e,href:"#",className:"hamburger",children:Object(s.jsx)("span",{className:"material-icons",children:" menu "})}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsxs)("a",{className:"nav-item",href:"#",children:["Portfolio ",Object(s.jsx)("i",{className:"fas fa-chevron-down"})]}),Object(s.jsxs)("ul",{className:"dropdown-list",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/portfolio_react/#home",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/portfolio_react/#projects",children:"Projects"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/portfolio_react/#skills",children:"Skills"})}),Object(s.jsx)("li",{children:Object(s.jsx)(a.b,{to:"/portfolio_react/gallery",children:"Gallery"})}),Object(s.jsx)("li",{children:Object(s.jsx)(a.b,{to:"/portfolio_react/animation",children:"Animation"})})]})]}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"nav-item",href:"/portfolio_react/#contact-me",children:"Contact"})})]})]})]})};var S=function(){return Object(s.jsx)("div",{className:"copyright",children:Object(s.jsx)("div",{className:"copyright-content",children:Object(s.jsx)("p",{children:"Copyright \xa9 Staffan Str\xf6msholm"})})})},w=function(){return Object(s.jsxs)("section",{id:"gallery",children:[Object(s.jsx)("h2",{children:"Gallery"}),Object(s.jsxs)("p",{children:["Images from ",Object(s.jsx)("a",{href:"https://unsplash.com/",children:"unsplash.com"})]}),Object(s.jsxs)("div",{className:"grid-content",children:[Object(s.jsx)("div",{className:"grid-item-1 grid-div",children:Object(s.jsx)("img",{className:"grid-item",src:"https://source.unsplash.com/collection/1132634/1600x900",alt:"random pic from unsplash"})}),Object(s.jsx)("div",{className:"grid-item-2 grid-div",children:Object(s.jsx)("img",{className:"grid-item",src:"https://source.unsplash.com/collection/306252/1600x900",alt:"random pic from unsplash"})}),Object(s.jsx)("div",{className:"grid-item-3 grid-div",children:Object(s.jsx)("img",{className:"grid-item",src:"https://source.unsplash.com/collection/1240111/1600x900",alt:"random pic from unsplash"})}),Object(s.jsx)("div",{className:"grid-item-4 grid-div",children:Object(s.jsx)("img",{className:"grid-item",src:"https://source.unsplash.com/collection/136493/1600x900",alt:"random pic from unsplash"})}),Object(s.jsx)("div",{className:"grid-item-5 grid-div",children:Object(s.jsx)("img",{className:"grid-item",src:"https://source.unsplash.com/collection/261936/1600x900",alt:"random pic from unsplash"})}),Object(s.jsx)("div",{className:"grid-item-6 grid-div",children:Object(s.jsx)("img",{className:"grid-item",src:"https://source.unsplash.com/collection/1394721/1600x900",alt:"random pic from unsplash"})}),Object(s.jsx)("div",{className:"grid-item-7 grid-div",children:Object(s.jsx)("img",{className:"grid-item",src:"https://source.unsplash.com/collection/46/1600x900",alt:"grid-item random pic from unsplash"})}),Object(s.jsx)("div",{className:"grid-item-8 grid-div",children:Object(s.jsx)("img",{className:"grid-item",src:"https://source.unsplash.com/collection/54/1600x900",alt:"random pic from unsplash"})}),Object(s.jsx)("div",{className:"grid-item-9 grid-div",children:Object(s.jsx)("img",{className:"grid-item",src:"https://source.unsplash.com/collection/827807/1600x900",alt:"random pic from unsplash"})})]})]})},C=t.p+"static/media/1295308.1a66b86f.svg",q=function(){return Object(s.jsx)("div",{id:"animation",children:Object(s.jsxs)("section",{className:"cogwheels",children:[Object(s.jsx)("div",{className:"cogwheel-1",children:Object(s.jsx)("img",{src:C,alt:"cogwheel"})}),Object(s.jsx)("div",{className:"cogwheel-2",children:Object(s.jsx)("img",{src:C,alt:"cogwheel"})}),Object(s.jsx)("div",{className:"cogwheel-3",children:Object(s.jsx)("img",{src:C,alt:"cogwheel"})}),Object(s.jsx)("div",{className:"cogwheel-4",children:Object(s.jsx)("img",{src:C,alt:"cogwheel"})}),Object(s.jsx)("div",{className:"cogwheel-5",children:Object(s.jsx)("img",{src:C,alt:"cogwheel"})})]})})};var k=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(y,{}),Object(s.jsxs)(n.c,{children:[Object(s.jsx)(n.a,{exact:!0,path:"/portfolio_react",component:N}),Object(s.jsx)(n.a,{exact:!0,path:"/portfolio_react/gallery",component:w}),Object(s.jsx)(n.a,{exact:!0,path:"/portfolio_react/animation",component:q})]}),Object(s.jsx)(S,{})]})};l.a.render(Object(s.jsx)(a.a,{children:Object(s.jsx)(k,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.e3815ca4.chunk.js.map