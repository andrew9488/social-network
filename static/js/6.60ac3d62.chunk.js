(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{321:function(e,t,c){e.exports={loginPage:"Login_loginPage__1F-A9"}},326:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c(11),n=c(0),r=c(1),i=c.n(r),l=c(100),o=c(101),j=c(35),d=c(48),b=c(80),h=c.n(b),m=Object(o.a)({form:"login"})((function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsxs)("p",{children:["To log in get registered",Object(n.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noreferrer",children:" here"})]}),Object(n.jsx)("p",{children:"or use common test account credentials:"}),Object(n.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(n.jsx)("p",{children:"Password: free"})]}),Object(n.jsxs)("form",{onSubmit:e.handleSubmit,className:h.a.loginForm,children:[Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",width:"250px"},children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email"}),Object(n.jsx)(l.a,{name:"email",type:"text",placeholder:"login",component:j.a,validate:[d.b],id:"email"})]}),Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",width:"250px"},children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)(l.a,{name:"password",type:"password",placeholder:"password",component:j.a,validate:[d.b],id:"password"})]}),Object(n.jsx)("div",{className:h.a.error,children:e.error}),Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)(l.a,{name:"rememberMe",type:"checkbox",component:j.a}),Object(n.jsx)("span",{children:"remember me"})]}),e.captcha&&Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:e.captcha,alt:"captcha"}),Object(n.jsx)(l.a,{name:"captcha",type:"text",component:j.a,validate:[d.b]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"submit",children:"Submit"})})]})]})})),p=c(321),x=c.n(p),O=c(10),u=c(15),g=i.a.memo((function(e){var t=Object(r.useCallback)((function(t){var c=t.email,a=t.password,s=t.rememberMe,n=t.captcha;e.logInTC(c,a,s,n)}),[e]);return e.isAuth?Object(n.jsx)(O.a,{to:"".concat(u.a.PROFILE,"/:userId?")}):Object(n.jsxs)("div",{className:x.a.loginPage,children:[Object(n.jsx)("h2",{children:"login"}),Object(n.jsx)(m,{onSubmit:t,captcha:e.captcha})]})})),f=c(45);t.default=Object(a.d)(Object(s.b)((function(e){return{isAuth:e.auth.isAuth,captcha:e.auth.captcha}}),{logInTC:f.c}))(g)}}]);
//# sourceMappingURL=6.60ac3d62.chunk.js.map