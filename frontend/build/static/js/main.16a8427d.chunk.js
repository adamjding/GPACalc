(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(e,t,a){},56:function(e,t,a){e.exports=a(90)},61:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),o=a.n(l),s=(a(61),a(17)),c=a(18),i=a(20),u=a(19),d=a(21),m=(a(40),a(41),a(22)),h=a(24),g=a(16),p=a.n(g),E=a(25),b=a(28),f=a(23),v=a(12),C=a(14),w=a(5),k=a(29),S=a(32),j=a(26),y=a.n(j),O=a(27),I=a.n(O),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(b.a)({},e,t.target.value))}},a.handleSubmit=function(){var e=Object(E.a)(p.a.mark((function e(t){var n,r,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({loading:!0}),n={email:a.state.email,password:a.state.password},e.prev=3,e.next=6,y.a.post("/api/login",n);case 6:r=e.sent,l=r.data.token,localStorage.setItem("jwtToken",l),a.setState({loading:!1,loggedIn:!0}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0),a.setState({loading:!1,error:"Login Failed"});case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:"",loading:!1,loggedIn:!1,error:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("jwtToken");e&&(console.log("token",e),I()(e)&&this.setState({loggedIn:!0}))}},{key:"render",value:function(){return!0===this.state.loggedIn?r.a.createElement(h.c,{to:"/home"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(v.a.Body,null,r.a.createElement("p",null,"Back to ",r.a.createElement(m.Link,{to:"/"},"Home")),r.a.createElement(w.a,{onSubmit:this.handleSubmit},r.a.createElement(w.a.Group,{controlId:"formGroupEmail"},r.a.createElement(w.a.Label,null,"Email address"),r.a.createElement(w.a.Control,{type:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleChange("email")})),r.a.createElement(w.a.Group,{controlId:"formGroupPassword"},r.a.createElement(w.a.Label,null,"Password"),r.a.createElement(w.a.Control,{type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange("password")})),this.state.loading?r.a.createElement(C.a,{variant:"primary",disabled:!0},r.a.createElement(k.a,{as:"span",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):r.a.createElement(C.a,{variant:"primary",type:"submit"},"Submit")),this.state.error?r.a.createElement(S.a,{variant:"danger"},this.state.error):r.a.createElement(r.a.Fragment,null)))))}}]),t}(r.a.Component),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(b.a)({},e,t.target.value))}},a.handleSubmit=function(){var e=Object(E.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.setState({loading:!0}),a.state.password==a.state.password2){e.next=6;break}a.setState({loading:!1,msg:"Passwords don't match"}),e.next=18;break;case 6:return n={name:a.state.name,email:a.state.email,password:a.state.password,totalCredits:a.state.totalCredits,earnedCredits:a.state.earnedCredits},e.prev=7,e.next=10,y.a.post("/api/register",n);case 10:e.sent,a.setState({loading:!1,msg:"Registration Successful."}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(7),console.log(e.t0),a.setState({loading:!1,msg:"Registration Failed."});case 18:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t){return e.apply(this,arguments)}}(),a.state={name:"",email:"",password:"",password2:"",loading:!1,error:"",totalCredits:0,earnedCredits:0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("jwtToken");e&&(console.log("token",e),console.log(e),I()(e)&&this.setState({loggedIn:!0}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(v.a.Body,null,r.a.createElement("p",null,"Back to ",r.a.createElement(m.Link,{to:"/"},"Home")),r.a.createElement(w.a,{onSubmit:this.handleSubmit},r.a.createElement(w.a.Group,{controlId:"formGroupEmail"},r.a.createElement(w.a.Label,null,"Name"),r.a.createElement(w.a.Control,{type:"text",placeholder:"Enter name",value:this.state.name,onChange:this.handleChange("name")})),r.a.createElement(w.a.Group,{controlId:"formGroupEmail"},r.a.createElement(w.a.Label,null,"Email address"),r.a.createElement(w.a.Control,{type:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleChange("email")})),r.a.createElement(w.a.Group,{controlId:"formGroupPassword"},r.a.createElement(w.a.Label,null,"Password"),r.a.createElement(w.a.Control,{type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange("password")})),r.a.createElement(w.a.Group,{controlId:"formGroupPassword"},r.a.createElement(w.a.Label,null,"Confirm Password"),r.a.createElement(w.a.Control,{type:"password",placeholder:"Confirm Password",value:this.state.password2,onChange:this.handleChange("password2")})),this.state.loading?r.a.createElement(C.a,{variant:"primary",disabled:!0},r.a.createElement(k.a,{as:"span",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):r.a.createElement(C.a,{variant:"primary",type:"submit"},"Submit")),this.state.msg?r.a.createElement(S.a,{variant:"danger"},this.state.msg):r.a.createElement(r.a.Fragment,null)))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).logout=function(e){e.preventDefault(),localStorage.removeItem("jwtToken"),a.setState({loggedIn:!1})},a.handleChange=function(e){return function(t){a.setState(Object(b.a)({},e,t.target.value)),console.log(e+" "+t.target.value)}},a.handleSubmit=function(){var e=Object(E.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({loading:!0}),n={courseName:a.state.courseName,grade:a.state.grade,creditHours:a.state.creditHours},console.log("TOKEN: "+localStorage.getItem("jwtToken")),e.prev=4,e.next=7,y.a.post("/api/addCourse",n,{headers:{Authorization:"bearer "+localStorage.getItem("jwtToken")}});case 7:r=e.sent,a.setState({loading:!1}),a.setState({earnedCredits:r.data.earnedCredits,totalCredits:r.data.totalCredits}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("Course could not be added"),a.setState({loading:!1});case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),a.state={loading:!0,user:null,loggedIn:!1,courses:[],courseName:"",grade:"",creditHours:0,earnedCredits:1,totalCredits:1,username:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(this.state),t=localStorage.getItem("jwtToken")){e.next=6;break}this.setState({loading:!1,loggedIn:!1}),e.next=19;break;case 6:if(!this.state.loading){e.next=19;break}return e.prev=7,this.setState({loading:!1,loggedIn:!0,user:I()(t)}),e.next=11,y.a.get("/api/grades",{headers:{Authorization:"Bearer ".concat(t)}});case 11:a=e.sent,this.setState({earnedCredits:a.data.earnedCredits,totalCredits:a.data.totalCredits}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(7),console.log(e.t0),this.setState({loading:!1,loggedIn:!0,user:I()(t),msg:"The protected route failed :( Check console for errors"});case 19:case"end":return e.stop()}}),e,this,[[7,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading||this.state.loggedIn?this.state.loading?r.a.createElement(k.a,{as:"span",size:"lg",role:"status","aria-hidden":"true"}):r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement("h2",{class:"results text-center"},(this.state.earnedCredits/this.state.totalCredits).toFixed(2)),r.a.createElement("h2",{class:"text-center"},this.state.user.name+"'s GPA"),r.a.createElement(C.a,{variant:"primary",onClick:this.logout},"Logout")),r.a.createElement(v.a,null,r.a.createElement(v.a.Body,null,r.a.createElement("h2",{class:"text-center"},"Add Course"),r.a.createElement(w.a,null,r.a.createElement(w.a.Group,{controlId:"formGroupEmail"},r.a.createElement(w.a.Label,null,"Course Name"),r.a.createElement(w.a.Control,{type:"text",placeholder:"Enter Course Name",value:this.state.courseName,onChange:this.handleChange("courseName")})),r.a.createElement(w.a.Group,{controlId:"formGroupEmail"},r.a.createElement(w.a.Label,null,"Grade"),r.a.createElement(w.a.Control,{type:"text",placeholder:"Enter A, B, C, D, F",value:this.state.grade,onChange:this.handleChange("grade")})),r.a.createElement(w.a.Group,{controlId:"formGroupPassword"},r.a.createElement(w.a.Label,null,"Credit Hours"),r.a.createElement(w.a.Control,{type:"text",placeholder:"Enter credit hours",value:this.state.creditHours,onChange:this.handleChange("creditHours")})),r.a.createElement(C.a,{variant:"primary",onClick:this.handleSubmit},"Submit"))))):r.a.createElement(h.c,{to:"/login"})}}]),t}(n.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{class:"navbar navbar-light bg-light"},r.a.createElement("span",{class:"navbar-brand mb-0 h1"},"GPA CALCULATOR"))}}]),t}(r.a.Component),B=a(38),N=function(e){function t(e){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.BrowserRouter,null,r.a.createElement(P,null),r.a.createElement("div",{className:"auth-box"},r.a.createElement(h.g,null,r.a.createElement(h.d,{path:"/login"},r.a.createElement(x,null)),r.a.createElement(h.d,{path:"/register"},r.a.createElement(G,null)),r.a.createElement(h.d,{path:"/home"},r.a.createElement(L,null)),r.a.createElement(h.d,{path:"/"},r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(v.a.Body,null,r.a.createElement(B.LinkContainer,{to:"/login"},r.a.createElement(C.a,{variant:"primary",size:"lg",block:!0},"Login")),r.a.createElement(B.LinkContainer,{to:"/register"},r.a.createElement(C.a,{variant:"primary",size:"lg",block:!0},"Register")))))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.16a8427d.chunk.js.map