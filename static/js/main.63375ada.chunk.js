(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(t,e,n){t.exports={footer:"Footer_footer__3Jxae",footerText:"Footer_footerText__z6qKY"}},101:function(t,e,n){t.exports={profile:"Profile_profile__1pH3w",container:"Profile_container__2uepZ"}},105:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(4),s=n(47),i=n(0),c=n(10),r=(n(1),n(12)),o=function(t){return{isAuth:t.auth.isAuth}};function u(t){return Object(r.b)(o,{})((function(e){var n=e.isAuth,r=Object(s.a)(e,["isAuth"]);return n?Object(i.jsx)(t,Object(a.a)({},r)):Object(i.jsx)(c.a,{to:"/login"})}))}},107:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n(0),s=n(1),i=n.n(s),c=n(94),r=n(95),o=n(93),u=n(108),l=Object(o.a)(100),d=i.a.memo((function(t){return Object(a.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(a.jsx)("div",{children:Object(a.jsx)(c.a,{name:"newText",type:"text",component:u.b,validate:[o.b,l]})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"Send"})})]})})),j=Object(r.a)({form:"formForSendNewText"})(d)},108:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return j}));var a=n(4),s=n(47),i=n(0),c=n(1),r=n.n(c),o=n(73),u=n.n(o),l=r.a.memo((function(t){t.input;var e=t.meta,n=e.touched,a=e.error,c=Object(s.a)(t,["input","meta"]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"".concat(u.a.fieldForm," ").concat(n&&a?u.a.error:""),children:c.children}),Object(i.jsx)("div",{className:u.a.error,children:n&&a&&Object(i.jsx)("span",{children:a})})]})})),d=r.a.memo((function(t){var e=t.input,n=(t.meta,t.children,Object(s.a)(t,["input","meta","children"]));return Object(i.jsx)(l,Object(a.a)(Object(a.a)({},t),{},{children:Object(i.jsx)("textarea",Object(a.a)(Object(a.a)({},e),n))}))})),j=r.a.memo((function(t){var e=t.input,n=(t.meta,t.children,Object(s.a)(t,["input","meta","children"]));return Object(i.jsx)(l,Object(a.a)(Object(a.a)({},t),{},{children:Object(i.jsx)("input",Object(a.a)(Object(a.a)({},e),n))}))}))},138:function(t,e,n){"use strict";n.d(e,"b",(function(){return c}));var a=n(46),s=n(4),i={dialogs:[{id:1,name:"King",img:"http://pm1.narvii.com/7066/ae35e5668d78c2a362c4b594a3aa4687e77e1062r1-1200-1207v2_uhq.jpg"},{id:2,name:"Puri-Puri Prisoner",img:"https://gamemag.ru/images/cache/News/News143316/c7a2dbcde1-3_350x250.jpg"},{id:3,name:"Tatsumaki",img:"https://pm1.narvii.com/6890/6c7770044db1962ef51f199fa113165478d1f69er1-1321-1080v2_hq.jpg"},{id:4,name:"Fubuki",img:"https://shikimori.one/system/characters/original/81931.jpg"},{id:5,name:"Watchdog Man",img:"https://slovnet.ru/wp-content/uploads/2019/05/8-32.jpg"}],messages:[{id:1,message:"Hello my friend!"},{id:2,message:"What are you doing?"},{id:3,message:"Will you go to the cinema with us?"},{id:4,message:"Can i help you?"}]};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DIALOGS-PAGE/SEND-MESSAGE":var n={id:(new Date).getTime(),message:e.newText};return Object(s.a)(Object(s.a)({},t),{},{messages:[].concat(Object(a.a)(t.messages),[n])});default:return t}};var c=function(t){return{type:"DIALOGS-PAGE/SEND-MESSAGE",newText:t}}},14:function(t,e,n){t.exports={navbar:"Navbar_navbar__hXiam",items:"Navbar_items__1SJqj",item:"Navbar_item__1yYDQ",activeLink:"Navbar_activeLink__19jiD"}},140:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return j}));var a=n(46),s=n(4),i=n(19),c=function(t,e,n,a){return t.map((function(t){return t[n]===e?Object(s.a)(Object(s.a)({},t),a):t}))},r={users:[],pageSize:10,totalCount:0,currentPage:1,isFetching:!1,disableButton:!1,followingInProgress:[]},o=(e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"USERS-PAGE/FOLLOW":return Object(s.a)(Object(s.a)({},t),{},{users:c(t.users,e.userId,"id",{followed:!0})});case"USERS-PAGE/UNFOLLOW":return Object(s.a)(Object(s.a)({},t),{},{users:c(t.users,e.userId,"id",{followed:!1})});case"USERS-PAGE/SET-USERS":return Object(s.a)(Object(s.a)({},t),{},{users:e.users});case"USERS-PAGE/SET-CURRENT-PAGE":return Object(s.a)(Object(s.a)({},t),{},{currentPage:e.currentPage});case"USERS-PAGE/SET-TOTAL-COUNT":return Object(s.a)(Object(s.a)({},t),{},{totalCount:e.totalCount});case"USERS-PAGE/SET-IS-FETCHING-USERS-COMPONENT":return Object(s.a)(Object(s.a)({},t),{},{isFetching:e.isFetching});case"USERS-PAGE/SET-FOLLOWING-PROGRESS":return Object(s.a)(Object(s.a)({},t),{},{followingInProgress:e.disableButton?[].concat(Object(a.a)(t.followingInProgress),[e.userId]):t.followingInProgress.filter((function(t){return t!==e.userId}))});default:return t}},function(t){return{type:"USERS-PAGE/SET-IS-FETCHING-USERS-COMPONENT",isFetching:t}}),u=function(t,e){return{type:"USERS-PAGE/SET-FOLLOWING-PROGRESS",disableButton:t,userId:e}},l=function(t,e){return function(n){n(o(!0)),i.d.getUsers(t,e).then((function(e){n(o(!1)),n({type:"USERS-PAGE/SET-USERS",users:e.items}),n({type:"USERS-PAGE/SET-TOTAL-COUNT",totalCount:e.totalCount}),n(function(t){return{type:"USERS-PAGE/SET-CURRENT-PAGE",currentPage:t}}(t))})).catch((function(t){console.warn(t)}))}},d=function(t){return function(e){e(u(!0,t)),i.b.follow(t).then((function(n){0===n.resultCode?e(function(t){return{type:"USERS-PAGE/FOLLOW",userId:t}}(t)):n.messages.length>0&&console.warn(n.messages[0]),e(u(!1,t))})).catch((function(t){console.warn(t)}))}},j=function(t){return function(e){e(u(!0,t)),i.b.unFollow(t).then((function(n){0===n.resultCode?e(function(t){return{type:"USERS-PAGE/UNFOLLOW",userId:t}}(t)):n.messages.length>0&&console.warn(n.messages[0]),e(u(!1,t))})).catch((function(t){console.warn(t)}))}}},141:function(t,e,n){t.exports={profileAvatar:"ProfileAvatar_profileAvatar__ZGvhr"}},19:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var a=n(144),s=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"daffbeb3-8fec-4c34-9d8d-6fcb41a16549"}}),i={getUsers:function(t,e){return s.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))}},c={follow:function(t){return s.post("follow/".concat(t),{}).then((function(t){return t.data}))},unFollow:function(t){return s.delete("follow/".concat(t)).then((function(t){return t.data}))}},r={getUserProfile:function(t){return s.get("profile/".concat(t)).then((function(t){return t.data}))},getUserStatus:function(t){return s.get("profile/status/".concat(t)).then((function(t){return t.data}))},updateStatus:function(t){return s.put("profile/status",{status:t}).then((function(t){return t.data}))},uploadPhoto:function(t){var e=new FormData;return e.append("image",t),s.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){return t.data}))}},o={authMe:function(){return s.get("auth/me").then((function(t){return t.data}))},logIn:function(t,e,n){return s.post("auth/login",{email:t,password:e,rememberMe:n}).then((function(t){return t.data}))},logOut:function(){return s.delete("auth/login").then((function(t){return t.data}))}}},22:function(t,e,n){t.exports={profileData:"ProfileData_profileData__3j-zP",avatar:"ProfileData_avatar__9BIoR",avatarImg:"ProfileData_avatarImg__3EkIo",buttonLoad:"ProfileData_buttonLoad__1p5LM",data:"ProfileData_data__2dnsH",name:"ProfileData_name__Cie_-",aboutMe:"ProfileData_aboutMe__29MIs",work:"ProfileData_work__3nfZO",open:"ProfileData_open__1BQzQ",busy:"ProfileData_busy__3wO3n"}},296:function(t,e,n){"use strict";n.r(e);var a=n(0),s=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,304)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),i(t),c(t)}))},i=n(69),c=n.n(i),r=n(1),o=n.n(r),u=n(36),l=n(37),d=n(41),j=n(40),f=n(97),b=n.n(f),p=n(11),h=n(14),O=n.n(h),m=o.a.memo((function(){return Object(a.jsx)("nav",{className:O.a.navbar,children:Object(a.jsxs)("div",{className:O.a.items,children:[Object(a.jsx)("div",{className:O.a.item,children:Object(a.jsx)(p.b,{to:"/profile",activeClassName:O.a.activeLink,children:"Profile"})}),Object(a.jsx)("div",{className:O.a.item,children:Object(a.jsx)(p.b,{to:"/news",activeClassName:O.a.activeLink,children:"News"})}),Object(a.jsx)("div",{className:O.a.item,children:Object(a.jsx)(p.b,{to:"/dialogs",activeClassName:O.a.activeLink,children:"Messages"})}),Object(a.jsx)("div",{className:O.a.item,children:Object(a.jsx)(p.b,{to:"/users",activeClassName:O.a.activeLink,children:"Find users"})}),Object(a.jsx)("div",{className:O.a.item,children:Object(a.jsx)(p.b,{to:"/music",activeClassName:O.a.activeLink,children:"Music"})}),Object(a.jsx)("div",{className:O.a.item,children:Object(a.jsx)(p.b,{to:"/settings",activeClassName:O.a.activeLink,children:"Settings"})})]})})})),g=n(100),x=n.n(g),v=o.a.memo((function(){return Object(a.jsx)("footer",{className:x.a.footer,children:Object(a.jsxs)("div",{className:x.a.footerText,children:[Object(a.jsx)("span",{children:"This is my firs project."}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:"Social network was developed by Andrew Pashkevich"})]})})})),E=n(10),P=n(4),_=n(101),S=n.n(_),I=n(141),A=n.n(I),T=n.p+"static/media/city-D.7ac10eeb.png",y=n.p+"static/media/city-A.8a136fc2.png",N=n.p+"static/media/city-Z.7e6df5de.png",C=o.a.memo((function(){return Object(a.jsxs)("div",{className:A.a.profileAvatar,children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:T,alt:"city-D"})}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:y,alt:"city-A"})}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:N,alt:"city-Z"})})]})})),w=n(22),F=n.n(w),k=n(70),L=n(42),R=n(96),U=function(t){Object(r.useEffect)((function(){l(t.status)}),[t.status]);var e=Object(r.useState)(!1),n=Object(R.a)(e,2),s=n[0],i=n[1],c=Object(r.useState)(t.status),o=Object(R.a)(c,2),u=o[0],l=o[1];return Object(a.jsx)("div",{children:s?Object(a.jsx)("input",{onBlur:function(){i(!1),t.updateStatus(u)},autoFocus:!0,value:u,onChange:function(t){l(t.currentTarget.value)}}):Object(a.jsxs)("span",{onDoubleClick:function(){i(!0)},children:["Status: ",t.status]})})},G=n(27),D=n(33),M=o.a.memo((function(t){return Object(a.jsx)("div",{className:F.a.profileData,children:t.isFetching?Object(a.jsx)(L.a,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:F.a.avatar,children:[Object(a.jsx)("img",{className:F.a.avatarImg,src:t.profile.photos.large?t.profile.photos.large:k.a,alt:"my_avatar"}),t.isOwner?Object(a.jsxs)("label",{children:[Object(a.jsx)(D.a,{icon:G.c,className:F.a.buttonLoad}),Object(a.jsx)("input",{type:"file",onChange:function(e){e.target.files&&t.uploadPhoto(e.target.files[0])}})]}):""]}),Object(a.jsxs)("div",{className:F.a.data,children:[Object(a.jsx)("h3",{className:F.a.name,children:t.profile.fullName}),Object(a.jsx)(U,{status:t.status,updateStatus:t.updateStatus}),Object(a.jsx)("span",{className:F.a.aboutMe,children:t.profile.aboutMe}),Object(a.jsxs)("div",{className:F.a.work,children:[Object(a.jsx)("span",{children:Object(a.jsx)("span",{className:t.profile.lookingForAJob?F.a.busy:F.a.open,children:t.profile.lookingForAJob?" Busy":" Open to work"})}),t.profile.lookingForAJob&&Object(a.jsx)("span",{children:t.profile.lookingForAJobDescription})]}),Object(a.jsxs)("ul",{children:["Contacts:",t.profile.contacts.facebook&&Object(a.jsx)("li",{children:t.profile.contacts.facebook}),t.profile.contacts.website&&Object(a.jsx)("li",{children:t.profile.contacts.website}),t.profile.contacts.vk&&Object(a.jsx)("li",{children:t.profile.contacts.vk}),t.profile.contacts.twitter&&Object(a.jsx)("li",{children:t.profile.contacts.twitter}),t.profile.contacts.instagram&&Object(a.jsx)("li",{children:t.profile.contacts.instagram}),t.profile.contacts.youtube&&Object(a.jsx)("li",{children:t.profile.contacts.youtube}),t.profile.contacts.github&&Object(a.jsx)("li",{children:t.profile.contacts.github}),t.profile.contacts.mainLink&&Object(a.jsx)("li",{children:t.profile.contacts.mainLink})]})]})]})})})),H=n(75),z=n.n(H),J=n(48),Z=n.n(J),B=o.a.memo((function(t){var e=Object(a.jsx)(a.Fragment,{children:t.posts.map((function(e){return Object(a.jsxs)("div",{className:Z.a.postMessageContainer,children:[Object(a.jsxs)("div",{className:Z.a.postMessage,children:[Object(a.jsx)("img",{src:t.smallImage?t.smallImage:k.a,alt:"my_avatar"}),Object(a.jsxs)("div",{className:Z.a.text,children:[" ",e.post," "]})]}),Object(a.jsxs)("div",{className:Z.a.like,onClick:function(){return n=e.id,void t.increase(n);var n},children:[Object(a.jsx)(D.a,{icon:G.d})," ",e.likesCounter]})]},e.id)}))});return Object(a.jsx)("div",{className:Z.a.post,children:e})})),W=n(107),K=o.a.memo((function(t){var e=Object(r.useCallback)((function(e){t.addPost(e.newText)}),[t]);return Object(a.jsxs)("div",{className:z.a.myPosts,children:[Object(a.jsx)("h2",{className:z.a.title,children:"My posts"}),Object(a.jsxs)("div",{className:z.a.container,children:[Object(a.jsx)(W.a,{onSubmit:e}),Object(a.jsx)(B,{posts:t.posts,increase:t.increase,smallImage:t.smallImage})]})]})})),q=n(12),Q=n(46),X=n.p+"static/media/my-photo1.ad902751.png",Y=n(19),V={posts:[{id:1,post:"Hello my dear friends.",likesCounter:2},{id:2,post:"My name is Andrew.",likesCounter:5},{id:3,post:"This is my first project.",likesCounter:3},{id:4,post:"I am going to change my future.",likesCounter:7}],profile:{aboutMe:"Hero class-C",contacts:{facebook:null,website:"saitama_hero.com",vk:null,twitter:null,instagram:"https://www.saitama.com/__hero_saitama/",youtube:null,github:"https://github.com/saitama_hero",mainLink:null},lookingForAJob:!0,lookingForAJobDescription:"Hero class-S",fullName:null,userId:1,photos:{small:X,large:X}},isFetching:!1,status:""},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"PROFILE-PAGE/ADD-POST":var n={id:(new Date).getTime(),post:e.postText,likesCounter:0};return Object(P.a)(Object(P.a)({},t),{},{posts:[].concat(Object(Q.a)(t.posts),[n])});case"PROFILE-PAGE/SET-USER-PROFILE-DATA":return Object(P.a)(Object(P.a)({},t),{},{profile:e.profile});case"PROFILE-PAGE/SET-IS-FETCHING-PROFILE-COMPONENT":return Object(P.a)(Object(P.a)({},t),{},{isFetching:e.isFetching});case"PROFILE-PAGE/SET-PROFILE-STATUS":return Object(P.a)(Object(P.a)({},t),{},{status:e.status});case"PROFILE-PAGE/INCREASE-LIKE":return Object(P.a)(Object(P.a)({},t),{},{posts:t.posts.map((function(t){return t.id===e.postId?Object(P.a)(Object(P.a)({},t),{},{likesCounter:t.likesCounter+1}):t}))});case"PROFILE-PAGE/SET-PROFILE-IMAGE":return Object(P.a)(Object(P.a)({},t),{},{profile:Object(P.a)(Object(P.a)({},t.profile),{},{photos:Object(P.a)(Object(P.a)({},t.profile.photos),{},{large:e.photo,small:e.photo})})});default:return t}},tt=function(t){return{type:"PROFILE-PAGE/SET-IS-FETCHING-PROFILE-COMPONENT",isFetching:t}},et=function(t){return{type:"PROFILE-PAGE/SET-PROFILE-STATUS",status:t}},nt=n(9),at=Object(nt.d)(Object(q.b)((function(t){return{posts:t.profilePage.posts,smallImage:t.profilePage.profile.photos.small}}),(function(t){return{addPost:function(e){t({type:"PROFILE-PAGE/ADD-POST",postText:e})},increase:function(e){t({type:"PROFILE-PAGE/INCREASE-LIKE",postId:e})}}})))(K),st=o.a.memo((function(t){return Object(a.jsxs)("div",{className:S.a.profile,children:[Object(a.jsx)(C,{}),Object(a.jsxs)("div",{className:S.a.container,children:[Object(a.jsx)(M,{isFetching:t.isFetching,profile:t.profile,status:t.status,updateStatus:t.updateStatusTC,uploadPhoto:t.uploadPhotoTC,isOwner:!!t.isOwner&&t.isOwner}),Object(a.jsx)(at,{})]})]})})),it=n(105),ct=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"refresh",value:function(){var t=Number(this.props.match.params.userId);t||(t=this.props.myId),this.props.getUserProfileTC(t),this.props.getUserStatusTC(t)}},{key:"componentDidMount",value:function(){this.refresh()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refresh()}},{key:"render",value:function(){return Object(a.jsx)(st,Object(P.a)({isOwner:!this.props.match.params.userId},this.props))}}]),n}(o.a.PureComponent),rt=Object(nt.d)(Object(q.b)((function(t){return{profile:t.profilePage.profile,isFetching:t.profilePage.isFetching,status:t.profilePage.status,myId:t.auth.data.userId}}),{getUserProfileTC:function(t){return function(e){e(tt(!0)),Y.c.getUserProfile(t).then((function(t){e({type:"PROFILE-PAGE/SET-USER-PROFILE-DATA",profile:t}),e(tt(!1))})).catch((function(t){console.warn(t)}))}},getUserStatusTC:function(t){return function(e){Y.c.getUserStatus(t).then((function(t){e(et(t))})).catch((function(t){console.warn(t)}))}},updateStatusTC:function(t){return function(e){Y.c.updateStatus(t).then((function(n){0===n.resultCode?e(et(t)):n.messages.length>0&&console.warn(n.messages[0])})).catch((function(t){console.warn(t)}))}},uploadPhotoTC:function(t){return function(e){Y.c.uploadPhoto(t).then((function(t){0===t.resultCode?e({type:"PROFILE-PAGE/SET-PROFILE-IMAGE",photo:t.data.photos.large}):t.messages.length>0&&console.warn(t.messages[0])})).catch((function(t){console.warn(t)}))}}}),E.g,it.a)(ct),ot=n(59),ut=n.n(ot),lt=n.p+"static/media/logo.54c26e84.png",dt=o.a.memo((function(t){return Object(a.jsxs)("header",{className:ut.a.header,children:[Object(a.jsx)("div",{className:ut.a.logo,children:Object(a.jsx)("img",{src:lt,alt:"logo"})}),Object(a.jsxs)("div",{className:ut.a.headUser,children:[Object(a.jsx)("div",{children:Object(a.jsx)(p.b,{to:"/dialogs",children:Object(a.jsx)(D.a,{icon:G.b})})}),Object(a.jsx)("div",{children:Object(a.jsx)(p.b,{to:"#",children:Object(a.jsx)(D.a,{icon:G.a})})}),Object(a.jsx)("div",{children:t.isAuth?Object(a.jsxs)("div",{className:ut.a.logOut,children:[Object(a.jsx)(p.b,{to:"/profile/13446 ",children:t.data.login}),Object(a.jsx)("button",{onClick:t.logOutTC,children:"logout"})]}):Object(a.jsx)(p.b,{to:"/login",children:"Login"})})]})]})})),jt=n(39),ft=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(dt,Object(P.a)({},this.props))}}]),n}(o.a.PureComponent),bt=Object(q.b)((function(t){return{data:t.auth.data,isAuth:t.auth.isAuth}}),{logOutTC:jt.d})(ft),pt={isInitialization:!1},ht=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/INITIALIZE-SUCCESS":return Object(P.a)(Object(P.a)({},t),{},{isInitialization:e.isInitialization});default:return t}};function Ot(t){return function(e){return Object(a.jsx)(o.a.Suspense,{fallback:Object(a.jsx)(L.a,{}),children:Object(a.jsx)(t,Object(P.a)({},e))})}}var mt=o.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),gt=o.a.lazy((function(){return n.e(4).then(n.bind(null,306))})),xt=o.a.lazy((function(){return n.e(5).then(n.bind(null,307))})),vt=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.appInitializeTC()}},{key:"render",value:function(){return this.props.isInitialization?Object(a.jsxs)("div",{className:b.a.app,children:[Object(a.jsx)(bt,{}),Object(a.jsx)(m,{}),Object(a.jsx)("div",{className:b.a.content,children:Object(a.jsxs)(E.d,{children:[Object(a.jsx)(E.b,{exact:!0,path:"/profile/:userId?",render:function(){return Object(a.jsx)(rt,{})}}),Object(a.jsx)(E.b,{path:"/login",component:Ot(xt)}),Object(a.jsx)(E.b,{path:"/users",component:Ot(gt)}),Object(a.jsx)(E.b,{path:"/dialogs",component:Ot(mt)})]})}),Object(a.jsx)(v,{})]}):Object(a.jsx)(L.a,{})}}]),n}(o.a.PureComponent),Et=Object(nt.d)(Object(q.b)((function(t){return{isInitialization:t.app.isInitialization}}),{appInitializeTC:function(){return function(t){var e=t(Object(jt.a)());Promise.all([e]).then((function(){t({type:"APP/INITIALIZE-SUCCESS",isInitialization:!0})})).catch((function(t){console.warn(t)}))}}}),E.g)(vt),Pt=n(138),_t={},St=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t;return t},It=n(140),At=n(145),Tt=n(139),yt=Object(nt.c)({profilePage:$,dialogsPage:Pt.a,sidebar:St,usersPage:It.a,auth:jt.b,app:ht,form:Tt.a}),Nt=Object(nt.e)(yt,Object(nt.a)(At.a));window.store=Nt,c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(p.a,{children:Object(a.jsx)(q.a,{store:Nt,children:Object(a.jsx)(Et,{})})})}),document.getElementById("root")),s()},39:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return l}));var a=n(4),s=n(19),i=n(68),c={data:{userId:null,login:null,email:null},isAuth:!1};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"AUTH/SET-USER-DATA":return Object(a.a)(Object(a.a)({},t),{},{data:e.data});case"AUTH/SET-IS-AUTH":return Object(a.a)(Object(a.a)({},t),{},{isAuth:e.isAuth});default:return t}};var r=function(t){return{type:"AUTH/SET-IS-AUTH",isAuth:t}},o=function(){return function(t){return s.a.authMe().then((function(e){if(0===e.resultCode){var n=e.data,a=n.id,s=n.login,i=n.email;t(function(t,e,n){return{type:"AUTH/SET-USER-DATA",data:{userId:t,login:e,email:n}}}(a,s,i)),t(r(!0))}else e.messages.length>0&&console.warn(e.messages[0])})).catch((function(t){console.warn(t)}))}},u=function(t,e,n){return function(a){s.a.logIn(t,e,n).then((function(t){if(0===t.resultCode)a(o());else if(1===t.resultCode){var e=t.messages[0];a(Object(i.a)("login",{_error:e}))}else t.messages.length>0&&console.warn(t.messages[0])})).catch((function(t){console.warn(t)}))}},l=function(){return function(t){s.a.logOut().then((function(e){0===e.resultCode?(t(u(null,null,!1)),t(r(!1))):e.messages.length>0&&console.warn(e.messages[0])})).catch((function(t){console.warn(t)}))}}},42:function(t,e,n){"use strict";var a=n(0),s=n.p+"static/media/Rolling-1s-231px.5238d0e6.svg",i=n(1),c=n.n(i).a.memo((function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("img",{src:s,alt:"preloader"})})}));e.a=c},48:function(t,e,n){t.exports={post:"Post_post__1RKKE",postMessageContainer:"Post_postMessageContainer__1ZeU_",postMessage:"Post_postMessage__1y_oZ",text:"Post_text__y7xHJ",like:"Post_like__3XQlz"}},59:function(t,e,n){t.exports={header:"Header_header__3VJ_h",logo:"Header_logo__21fB4",headUser:"Header_headUser__3LZZq",logOut:"Header_logOut__3X3a1"}},70:function(t,e,n){"use strict";e.a=n.p+"static/media/usersAvatar.d15d2aa0.jpg"},73:function(t,e,n){t.exports={fieldForm:"CustomField_fieldForm__1UmNf",error:"CustomField_error__30fIk",loginForm:"CustomField_loginForm__2ZBiY"}},75:function(t,e,n){t.exports={myPosts:"MyPosts_myPosts__1vdmU",container:"MyPosts_container__3jze1",title:"MyPosts_title__3s1MX"}},93:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s}));var a=function(t){return t?void 0:"Field is required"},s=function(t){return function(e){if(e&&e.length>t)return"Maximum length is ".concat(t," symbols")}}},97:function(t,e,n){t.exports={app:"App_app__2teHa",content:"App_content__134sW"}}},[[296,1,2]]]);
//# sourceMappingURL=main.63375ada.chunk.js.map