(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{300:function(e,t,n){e.exports={usersPage:"Users_usersPage__3EiO7",container:"Users_container__1wJvV"}},301:function(e,t,n){e.exports={user:"User_user__u-ni-",userAvatar:"User_userAvatar__2YTUN",userData:"User_userData__15nCn",name:"User_name__32ePm",status:"User_status__2z335",location:"User_location__1EDt4"}},302:function(e,t,n){e.exports={paginator:"Paginator_paginator__2h5rT",currentPage:"Paginator_currentPage__2jLvZ"}},306:function(e,t,n){"use strict";n.r(t);var s=n(4),r=n(36),a=n(37),o=n(41),u=n(40),c=n(0),i=n(12),l=n(140),g=n(1),j=n.n(g),p=n(300),b=n.n(p),d=n(42),f=n(301),h=n.n(f),P=n(11),C=n(70),m=j.a.memo((function(e){return Object(c.jsxs)("div",{className:h.a.user,children:[Object(c.jsx)("div",{className:h.a.userAvatar,children:Object(c.jsx)(P.b,{to:"/profile/"+e.user.id,children:Object(c.jsx)("img",{src:null!==e.user.photos.small?e.user.photos.small:C.a,alt:"avatar"})})}),Object(c.jsxs)("div",{className:h.a.userData,children:[Object(c.jsx)("span",{className:h.a.name,children:e.user.name}),Object(c.jsx)("span",{className:h.a.status,children:null!==e.user.status?e.user.status:"I have not status"})]}),Object(c.jsxs)("div",{children:[e.user.followed?Object(c.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unFollowTC(e.user.id)},children:"unfollow"}):Object(c.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.followTC(e.user.id)},children:"follow"}),Object(c.jsx)("button",{children:"message"})]})]})})),O=n(96),_=n(302),x=n.n(_),v=j.a.memo((function(e){for(var t=Object(g.useState)(1),n=Object(O.a)(t,2),s=n[0],r=n[1],a=Math.ceil(e.totalCount/e.pageSize),o=[],u=1;u<=a;u++)o.push(u);var i=Math.ceil(a/10),l=10*(s-1)+1,j=10*s;return Object(c.jsxs)("div",{className:x.a.paginator,children:[s>1&&Object(c.jsx)("button",{onClick:function(){return r(s-1)},children:"<"}),o.filter((function(e){return e>=l&&e<=j})).map((function(t,n){return Object(c.jsx)("span",{onClick:function(){e.onClickCurrentPage(t)},className:e.currentPage===t?x.a.currentPage:"",children:t},n)})),i>s&&Object(c.jsx)("button",{onClick:function(){return r(s+1)},children:">"})]})})),w=j.a.memo((function(e){return Object(c.jsxs)("div",{className:b.a.usersPage,children:[Object(c.jsx)(v,{totalCount:e.totalCount,pageSize:e.pageSize,onClickCurrentPage:e.onClickCurrentPage,currentPage:e.currentPage}),e.isFetching?Object(c.jsx)(d.a,{}):Object(c.jsx)("div",{className:b.a.container,children:e.usersPage.map((function(t){return Object(c.jsx)(m,{user:t,followingInProgress:e.followingInProgress,followTC:e.followTC,unFollowTC:e.unFollowTC},t.id)}))})]})})),k=n(105),T=n(9),U=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onClickCurrentPage=function(t){e.props.getUsersTC(t,e.props.pageSize)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTC(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(c.jsx)(j.a.Fragment,{children:Object(c.jsx)(w,Object(s.a)(Object(s.a)({},this.props),{},{onClickCurrentPage:this.onClickCurrentPage}))})}}]),n}(j.a.PureComponent);t.default=Object(T.d)(Object(i.b)((function(e){return{usersPage:e.usersPage.users,pageSize:e.usersPage.pageSize,totalCount:e.usersPage.totalCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress,disableButton:e.usersPage.disableButton}}),{getUsersTC:l.c,followTC:l.b,unFollowTC:l.d}),k.a)(U)}}]);
//# sourceMappingURL=4.ed5437b5.chunk.js.map