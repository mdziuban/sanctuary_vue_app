(function(e){function t(t){for(var n,c,o=t[0],l=t[1],i=t[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&f.push(s[c][0]),s[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},s={app:0},r=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),s={id:"app"};function r(e,t){var a=Object(n["v"])("router-view");return Object(n["q"])(),Object(n["e"])("div",s,[Object(n["h"])(a)])}a("91bd");var c=a("6b0d"),o=a.n(c);const l={},i=o()(l,[["render",r]]);var u=i,d=a("6c02"),f=(a("d3b7"),a("5502")),b=a("bc3a"),m=a.n(b),p=m.a.create({baseURL:"https://sanctuary-django.herokuapp.com",timeout:1e3}),h=a("0e44"),j=Object(f["a"])({state:function(){return{accessToken:null,refreshToken:null,PostData:"",ReplyData:"",UserData:"",SiteImages:null,username:null}},plugins:[Object(h["a"])({storage:window.sessionStorage})],mutations:{updateStorage:function(e,t){var a=t.access,n=t.refresh;e.accessToken=a,e.refreshToken=n},updateAccess:function(e,t){e.accessToken=t},destroyToken:function(e){e.accessToken=null,e.refreshToken=null,e.UserData=null,e.AdditionalData=null,e.PostData=null},saveUsername:function(e,t){e.username=t}},getters:{loggedIn:function(e){return null!=e.accessToken}},actions:{refreshToken:function(e){return new Promise((function(t,a){p.post("/api-token-refresh/",{refresh:e.state.refreshToken}).then((function(a){console.log("New access successfully generated"),e.commit("updateAccess",a.data.access),t(a.data.access)})).catch((function(e){console.log("error in refreshToken Task"),a(e)}))}))},userLogout:function(e){e.getters.loggedIn&&e.commit("destroyToken")},userLogin:function(e,t){return new Promise((function(a,n){p.post("/api-token/",{username:t.username,password:t.password}).then((function(n){e.commit("updateStorage",{access:n.data.access,refresh:n.data.refresh}),e.commit("saveUsername",{username:t.username}),a()})).catch((function(e){n(e)}))}))}}}),O={class:"posts bg-light text-dark"},g=Object(n["f"])("h1",{class:"text-center my-5"},"The Sanctuary",-1),v={class:"container",id:"app"},y={class:"row"},w={class:"col-4"},k={key:0,style:{position:"fixed"},class:"col-3 col-xxl-2 text-dark shadow"},x=["src"],_={class:"text-center"},D={class:"p-2"},P={class:"col-8"},U={class:""},T={class:"bg-light pe-1 pt-2 rounded row"},L={class:"col-2"},$=["src"],S={class:"col-9"},z={class:"list-group mt-3 row"},q={class:"card mb-1 rounded bg-gradient row",style:{"background-color":"#f9f9f9"}},C={class:"card-header",style:{display:"flex"}},I={class:"col-2"},R=["src"],A={class:"col-10 text-start px-3"},B={class:"card-title"},F={class:"card-body text-start"},V={class:"card-text"},N=Object(n["f"])("br",null,null,-1),M=Object(n["f"])("br",null,null,-1),E={class:"row my-2"},W=["onUpdate:modelValue"],G=["onClick"],H=["onClick"],J={class:"reply rounded shadow"},K={class:"card-header row my-1"},Q={class:"col-12 text-start"},X={class:"card-title"},Y={class:"card-body text-start bg-gradient"},Z={class:"card-text"},ee=Object(n["f"])("br",null,null,-1),te=Object(n["f"])("br",null,null,-1);function ae(e,t,a,s,r,c){var o=this,l=Object(n["v"])("Navbar"),i=Object(n["v"])("router-link");return Object(n["q"])(),Object(n["e"])("body",O,[Object(n["h"])(l),g,Object(n["f"])("article",v,[Object(n["f"])("div",y,[Object(n["f"])("div",w,[Object(n["h"])(i,{to:{name:"playerDetails"}},{default:Object(n["C"])((function(){return[e.UserData?(Object(n["q"])(),Object(n["e"])("div",k,[Object(n["f"])("img",{src:e.UserData.player.profilePic,class:"rounded img-thumbnail",alt:"Profil Pic"},null,8,x),Object(n["f"])("h2",_,Object(n["x"])(o.$store.state.username.username),1),Object(n["f"])("p",D,Object(n["x"])(e.UserData.player.bio),1)])):Object(n["d"])("",!0)]})),_:1})]),Object(n["f"])("div",P,[Object(n["f"])("div",U,[Object(n["f"])("div",T,[Object(n["f"])("div",L,[Object(n["f"])("img",{src:e.UserData.player.profilePic,class:"p-1 col-12 bg-light",alt:"Profil Pic"},null,8,$)]),Object(n["f"])("div",S,[Object(n["D"])(Object(n["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.newPost.text_content=e}),type:"text",class:"pe-1 py-2 my-1 col-12 rounded shadow",placeholder:"What's on your mind?"},null,512),[[n["z"],r.newPost.text_content]]),Object(n["f"])("button",{onClick:t[1]||(t[1]=function(e){return c.postFeed()}),class:"btn btn-outline-dark my-1"}," Post ")])]),Object(n["f"])("ul",z,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["u"])(e.PostData,(function(t){return Object(n["q"])(),Object(n["e"])("li",{key:t.id,class:"list-group-item"},[Object(n["f"])("div",q,[Object(n["f"])("div",C,[Object(n["f"])("div",I,[Object(n["f"])("img",{src:t.user.player.profilePic,class:"col-12"},null,8,R)]),Object(n["f"])("div",A,[Object(n["f"])("h3",B,Object(n["x"])(t.user.username),1),Object(n["f"])("p",null,Object(n["x"])(c.formatDate(t.created)),1)])]),Object(n["f"])("div",F,[Object(n["f"])("h5",V,[Object(n["g"])(Object(n["x"])(t.text_content),1),N,M,Object(n["f"])("p",null,Object(n["x"])(t.hashtags),1)]),Object(n["f"])("div",E,[Object(n["D"])(Object(n["f"])("input",{"onUpdate:modelValue":function(e){return t.content=e},class:"col-8",type:"text",placeholder:"Reply"},null,8,W),[[n["z"],t.content]]),Object(n["f"])("button",{onClick:function(e){return c.replyToPost(t)},class:"btn btn-outline-dark col-2"}," Reply ",8,G),Object(n["f"])("button",{class:"btn btn-secondary bg-gradient col-2",type:"button",onClick:function(e){return c.loadReplies(t.id)}}," Show Replies ",8,H)]),Object(n["D"])(Object(n["f"])("div",J,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["u"])(e.ReplyData,(function(e){return Object(n["q"])(),Object(n["e"])("div",{key:e.id},[Object(n["f"])("div",K,[Object(n["f"])("div",Q,[Object(n["f"])("h3",X,Object(n["x"])(e.username),1),Object(n["f"])("p",null,Object(n["x"])(c.formatDate(e.reply_created)),1)]),Object(n["f"])("div",Y,[Object(n["f"])("h5",Z,[Object(n["g"])(Object(n["x"])(e.text_content),1),ee,te])])])])})),128))],512),[[n["A"],t.id===r.postReplyShow]])])])])})),128))])])])])])])}var ne=a("3835"),se=(a("ac1f"),a("466d"),a("a15b"),a("1276"),Object(n["f"])("head",null,[Object(n["f"])("meta",{charset:"utf-8"}),Object(n["f"])("meta",{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"}),Object(n["f"])("title",null,"Unity WebGL Player | Farm Kit"),Object(n["f"])("link",{rel:"shortcut icon",href:"../../../public/TemplateData/favicon.ico"}),Object(n["f"])("link",{rel:"stylesheet",href:"../static/unity/TemplateData/style.css"})],-1)),re={class:"navbar navbar-expand-lg navbar-light bg-gradient",style:{"background-color":"#404c24"}},ce={class:"container-fluid"},oe=Object(n["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["f"])("span",{class:"navbar-toggler-icon"})],-1),le={class:"collapse navbar-collapse",id:"navbarNav"},ie={key:0,class:"navbar-nav"},ue={class:"nav-item"},de=Object(n["g"])("Logout"),fe=Object(n["f"])("li",{class:"nav-item"},[Object(n["f"])("a",{href:"https://sanctuary-django.herokuapp.com/playgame/",class:"btn btn-outline-dark text-light mx-3"},"Play Game")],-1);function be(e,t,a,s,r,c){var o=this,l=Object(n["v"])("router-link");return Object(n["q"])(),Object(n["e"])("body",null,[se,Object(n["f"])("nav",re,[Object(n["f"])("div",ce,[Object(n["h"])(l,{to:{name:"posts"},class:"navbar-brand text-light"},{default:Object(n["C"])((function(){return[Object(n["g"])("Welcome, "+Object(n["x"])(o.$store.state.username.username),1)]})),_:1}),oe,Object(n["f"])("div",le,[null!=e.accessToken?(Object(n["q"])(),Object(n["e"])("ul",ie,[Object(n["f"])("li",ue,[Object(n["h"])(l,{to:{name:"logout"},class:"btn btn-outline-dark text-light"},{default:Object(n["C"])((function(){return[de]})),_:1})]),fe])):Object(n["d"])("",!0)])])])])}var me={name:"Navbar",computed:Object(f["b"])(["accessToken"]),methods:{playGame:function(){p.get("/playgame/",{headers:{Authorization:"Bearer ".concat(this.$store.state.accessToken)}})}}};const pe=o()(me,[["render",be]]);var he=pe,je={name:"Posts",data:function(){return{replies:[],postReplyShow:"",newPost:{},userData:{},replyPost:{},isHidden:!1,replyContent:""}},components:{Navbar:he},computed:Object(f["b"])(["PostData","ReplyData","UserData"]),methods:{loadFeed:function(){var e=this;p.get("/postdetail/",{headers:{Authorization:"Bearer ".concat(this.$store.state.accessToken)}}).then((function(t){e.$store.state.PostData=t.data})).catch((function(e){return console.log(e)}))},postFeed:function(){var e=this,t=this.splitByHashtag(this.newPost.text_content),a=Object(ne["a"])(t,2),n=a[0],s=a[1],r={user:this.$store.state.UserData.id,text_content:s,hashtags:n},c={headers:{Authorization:"Bearer ".concat(this.$store.state.accessToken)}};p.post("/post/",r,c).then((function(){return e.loadFeed()})).then(this.newPost.text_content="")},replyToPost:function(e){var t=this,a={user:this.$store.state.UserData.id,text_content:e.content,post_id:e.id},n={headers:{Authorization:"Bearer ".concat(this.$store.state.accessToken)}};p.post("/replyadd/",a,n).then((function(){return t.loadReplies(e.id)})).then((function(){return e.content=""}))},loadReplies:function(e){var t=this;this.postReplyShow=e,p.get("/reply/",{headers:{Authorization:"Bearer ".concat(this.$store.state.accessToken)},params:{post_id:e}}).then((function(e){t.$store.state.ReplyData=e.data}))},getUser:function(){var e=this;p.get("/player/",{headers:{Authorization:"Bearer ".concat(this.$store.state.accessToken)},params:{username:this.$store.state.username.username}}).then((function(t){console.log(t),e.$store.state.UserData=t.data[0]}))},splitByHashtag:function(e){var t=e.match(/#(\w+)/g);t=t?t.join(" "):"";var a=e.split("#")[0];return[t,a]},formatDate:function(e){var t=new Date(e),a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat("default",a).format(t)}},created:function(){this.getUser(),this.loadFeed()}};a("6c62");const Oe=o()(je,[["render",ae]]);var ge=Oe,ve={class:"row"},ye={class:"col-sm-6"},we=["src"],ke={class:"col-sm-6"},xe={class:"row h-50 d-flex justify-content-center align-items-center"},_e=Object(n["f"])("div",{class:"row mb-3"},[Object(n["f"])("h1",{class:"text-center my-3"},"Welcome to Sanctuary")],-1),De={key:0},Pe={class:"row mb-3"},Ue={class:"col-sm-10"},Te={class:"row mb-3"},Le={class:"col-sm-10"},$e=Object(n["f"])("div",{class:"col-sm-10 d-grid mb-3"},[Object(n["f"])("input",{type:"submit",class:"btn btn-primary btn-lg",value:"Login"})],-1),Se={class:"row h-50 d-flex justify-content-center align-items-center"},ze={class:"row mb-3"},qe={class:"col-sm-10 d-grid mb-3"},Ce=Object(n["g"])("Register");function Ie(e,t,a,s,r,c){var o=Object(n["v"])("router-link");return Object(n["q"])(),Object(n["e"])("div",ve,[Object(n["f"])("div",ye,[Object(n["f"])("img",{src:e.SiteImages.image,class:"w-100",alt:"Waterfall"},null,8,we)]),Object(n["f"])("div",ke,[Object(n["f"])("div",xe,[_e,e.incorrectAuth?(Object(n["q"])(),Object(n["e"])("h4",De," The username or password you entered was incorrect. ")):Object(n["d"])("",!0),Object(n["f"])("form",{onSubmit:t[2]||(t[2]=Object(n["E"])((function(e){return c.login()}),["prevent"]))},[Object(n["f"])("div",Pe,[Object(n["f"])("div",Ue,[Object(n["D"])(Object(n["f"])("input",{type:"text",name:"username",class:"form-control",id:"user","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.username=e}),placeholder:"Username"},null,512),[[n["z"],r.username]])])]),Object(n["f"])("div",Te,[Object(n["f"])("div",Le,[Object(n["D"])(Object(n["f"])("input",{type:"password",name:"password",class:"form-control",id:"pass","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.password=e}),placeholder:"Password"},null,512),[[n["z"],r.password]])])]),$e],32),Object(n["f"])("div",Se,[Object(n["f"])("div",ze,[Object(n["f"])("div",qe,[Object(n["h"])(o,{to:{name:"register"},class:"btn btn-outline-secondary btn-lg"},{default:Object(n["C"])((function(){return[Ce]})),_:1})])])])])])])}var Re={name:"login",data:function(){return{username:"",password:"",incorrect:!1}},computed:Object(f["b"])(["SiteImages"]),methods:{login:function(){var e=this;this.$store.dispatch("userLogin",{username:this.username,password:this.password}).then((function(){e.$router.push({name:"posts"})})).catch((function(t){console.log(t),e.incorrect=!0}))},GetImages:function(){var e=this;p.get("/images/").then((function(t){return e.$store.state.SiteImages=t.data[0]}))}},created:function(){this.GetImages()}};const Ae=o()(Re,[["render",Ie]]);var Be=Ae,Fe={class:"logout"};function Ve(e,t,a,s,r,c){return Object(n["q"])(),Object(n["e"])("div",Fe)}var Ne={created:function(){var e=this;this.$store.dispatch("userLogout").then((function(){return e.$router.push({name:"posts"})}))}};const Me=o()(Ne,[["render",Ve]]);var Ee=Me,We={class:"bg-dark text-light bg-gradient vh-100"},Ge={class:"container"},He={class:"row justify-content-md-center"},Je={class:"col-md-5 p-3 login justify-content-md-center"},Ke=Object(n["f"])("h1",{class:"h3 mb-3 font-weight-normal text-center"}," Welcome to Sanctuary, Register to Continue. ",-1),Qe={key:0,style:{color:"red"}},Xe={class:"form-group my-3"},Ye=Object(n["f"])("label",{for:"user"},"Username",-1),Ze={class:"form-group my-3"},et=Object(n["f"])("label",{for:"pass1"},"Password",-1),tt={class:"form-group my-3"},at=Object(n["f"])("label",{for:"pass2"},"Password Again",-1),nt={class:"form-group my-3"},st=Object(n["f"])("label",{for:"email"},"Email",-1),rt={class:"form-group my-3"},ct=Object(n["f"])("label",{for:"first_name"},"First Name",-1),ot={class:"form-group my-3"},lt=Object(n["f"])("label",{for:"last_name"},"Last Name",-1),it=Object(n["f"])("button",{type:"submit",class:"btn btn-lg btn-primary btn-block"}," Register ",-1);function ut(e,t,a,s,r,c){return Object(n["q"])(),Object(n["e"])("div",We,[Object(n["f"])("div",Ge,[Object(n["f"])("div",He,[Object(n["f"])("div",Je,[Ke,r.noMatch?(Object(n["q"])(),Object(n["e"])("p",Qe,"Passwords did not match.")):Object(n["d"])("",!0),Object(n["f"])("form",{onSubmit:t[6]||(t[6]=Object(n["E"])((function(){return c.register&&c.register.apply(c,arguments)}),["prevent"]))},[Object(n["f"])("div",Xe,[Ye,Object(n["D"])(Object(n["f"])("input",{type:"text",name:"username",id:"user","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.username=e}),class:"form-control",placeholder:"Username"},null,512),[[n["z"],r.username]])]),Object(n["f"])("div",Ze,[et,Object(n["D"])(Object(n["f"])("input",{type:"password",name:"password1",id:"pass1","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.password1=e}),class:"form-control",placeholder:"Password"},null,512),[[n["z"],r.password1]])]),Object(n["f"])("div",tt,[at,Object(n["D"])(Object(n["f"])("input",{type:"password",name:"password2",id:"pass2","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.password2=e}),class:"form-control",placeholder:"Password Again"},null,512),[[n["z"],r.password2]])]),Object(n["f"])("div",nt,[st,Object(n["D"])(Object(n["f"])("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.email=e}),class:"form-control",placeholder:"Email"},null,512),[[n["z"],r.email]])]),Object(n["f"])("div",rt,[ct,Object(n["D"])(Object(n["f"])("input",{type:"text",name:"first_name",id:"first_name","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.first_name=e}),class:"form-control",placeholder:"First Name"},null,512),[[n["z"],r.first_name]])]),Object(n["f"])("div",ot,[lt,Object(n["D"])(Object(n["f"])("input",{type:"text",name:"last_name",id:"last_name","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.last_name=e}),class:"form-control",placeholder:"Last Name"},null,512),[[n["z"],r.last_name]])]),it],32)])])])])}var dt={name:"register",data:function(){return{username:"",password1:"",password2:"",email:"",last_name:"",first_name:"",noMatch:!1}},methods:{checkIfMatch:function(){return this.password1===this.password2&&""!=this.password1?void console.log("passwords matched"):(console.log("no match for passwords"),this.noMatch=!0,!1)},register:function(){var e=this;this.checkIfMatch();var t={username:this.username,password:this.password1,email:this.email,last_name:this.last_name,first_name:this.first_name};p.post("/register/",t).then((function(){return e.$router.push({name:"login"})}))}}};const ft=o()(dt,[["render",ut]]);var bt=ft,mt={key:0,class:"bg-dark text-light Min100"},pt={class:"container"},ht={class:"p-3 my-1"},jt={class:"row"},Ot={class:"col-6"},gt={class:"form-group"},vt=Object(n["f"])("label",null,"Username",-1),yt=["placeholder"],wt={class:"form-group"},kt=Object(n["f"])("label",null,"Email",-1),xt=["placeholder"],_t={class:"form-group"},Dt=Object(n["f"])("label",null,"First Name",-1),Pt=["placeholder"],Ut={class:"form-group"},Tt=Object(n["f"])("label",null,"Last Name",-1),Lt=["placeholder"],$t=Object(n["f"])("div",{class:"form-group"},[Object(n["f"])("button",{type:"submit",class:"btn btn-lg bg-dark bg-gradient text-light my-1"}," Update ")],-1),St={class:"col-6"},zt={class:"form-group"},qt=Object(n["f"])("label",{class:"my-1"},"Bio",-1),Ct=["placeholder"],It=Object(n["f"])("div",{class:"form-group"},[Object(n["f"])("button",{type:"submit",class:"btn btn-lg btn-dark bg-gradient my-1"}," Update Bio ")],-1),Rt={class:"row"},At=Object(n["f"])("h2",{class:"my-3"},"Profile Picture",-1),Bt=["src"],Ft={class:"col-6"},Vt={class:"align-items-end justify-content-center d-flex h-50"},Nt=Object(n["g"])("Return to Posts"),Mt=Object(n["f"])("footer",null,null,-1);function Et(e,t,a,s,r,c){var o=Object(n["v"])("Navbar"),l=Object(n["v"])("router-link");return r.dataLoaded?(Object(n["q"])(),Object(n["e"])("div",mt,[Object(n["h"])(o),Object(n["f"])("div",pt,[Object(n["f"])("h1",ht,Object(n["x"])(r.dataLoad.username),1),Object(n["f"])("div",jt,[Object(n["f"])("div",Ot,[Object(n["f"])("form",{onSubmit:t[4]||(t[4]=Object(n["E"])((function(){return c.UpdateProfile&&c.UpdateProfile.apply(c,arguments)}),["prevent"]))},[Object(n["f"])("div",gt,[vt,Object(n["D"])(Object(n["f"])("input",{type:"text",name:"username",id:"user","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.username=e}),class:"form-control my-1",placeholder:r.dataLoad.username},null,8,yt),[[n["z"],r.username]])]),Object(n["f"])("div",wt,[kt,Object(n["D"])(Object(n["f"])("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.email=e}),class:"form-control my-1",placeholder:r.dataLoad.email},null,8,xt),[[n["z"],r.email]])]),Object(n["f"])("div",_t,[Dt,Object(n["D"])(Object(n["f"])("input",{type:"text",name:"first_name",id:"first_name","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.first_name=e}),class:"form-control my-1",placeholder:r.dataLoad.first_name},null,8,Pt),[[n["z"],r.first_name]])]),Object(n["f"])("div",Ut,[Tt,Object(n["D"])(Object(n["f"])("input",{type:"text",name:"last_name",id:"last_name","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.last_name=e}),class:"form-control my-1",placeholder:r.dataLoad.last_name},null,8,Lt),[[n["z"],r.last_name]])]),$t],32)]),Object(n["f"])("div",St,[Object(n["f"])("form",{onSubmit:t[6]||(t[6]=Object(n["E"])((function(){return c.UpdateBio&&c.UpdateBio.apply(c,arguments)}),["prevent"]))},[Object(n["f"])("div",zt,[qt,Object(n["D"])(Object(n["f"])("textarea",{name:"bio",rows:"4",id:"bio","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.bio=e}),class:"form-control my-1",placeholder:r.dataLoad.player.bio},null,8,Ct),[[n["z"],r.bio]])]),It],32)])]),Object(n["f"])("div",Rt,[At,Object(n["f"])("img",{src:r.dataLoad.player.profilePic,class:"img-thumbnail col-6",alt:"Profil Pic"},null,8,Bt),Object(n["f"])("div",Ft,[Object(n["f"])("input",{type:"file",onChange:t[7]||(t[7]=function(){return c.OnFileSelected&&c.OnFileSelected.apply(c,arguments)})},null,32),Object(n["f"])("button",{onClick:t[8]||(t[8]=function(){return c.UploadImage&&c.UploadImage.apply(c,arguments)}),class:"btn btn-lg btn-dark bg-gradient my-2"}," Change Profile Picture "),Object(n["f"])("div",Vt,[Object(n["h"])(l,{to:{name:"posts"},class:"btn btn-lg btn-dark bg-gradient my-2"},{default:Object(n["C"])((function(){return[Nt]})),_:1})])])])]),Mt])):Object(n["d"])("",!0)}a("b0c0");var Wt={components:{Navbar:he},data:function(){return{dataLoad:{},username:null,email:null,first_name:null,last_name:null,bio:null,selectedImage:null,dataLoaded:!1}},computed:Object(f["b"])(["UserData"]),methods:{getUser:function(){var e=this;p.get("/player/",{headers:{Authorization:"Bearer ".concat(this.$store.state.accessToken)},params:{username:this.$store.state.username.username}}).then((function(t){e.dataLoad=t.data[0],e.dataLoaded=!0,e.valdiateData()}))},OnFileSelected:function(e){this.selectedImage=e.target.files[0]},UploadImage:function(){var e=this,t=new FormData;t.append("profilePic",this.selectedImage,this.selectedImage.name),p.patch("/update/"+this.dataLoad.id,t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(this.$store.state.accessToken)}}).then((function(){return e.$router.go()})).catch((function(e){console.log(e.response.data)}))},UpdateBio:function(){var e=this;console.log(this.first_name);var t=new FormData;t.append("bio",this.bio),p.patch("/update/"+this.dataLoad.id,t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(this.$store.state.accessToken)}}).then((function(){return e.$router.go()}))},UpdateProfile:function(){var e=this,t=new FormData;t.append("first_name",this.first_name),t.append("last_name",this.last_name),t.append("email",this.email),t.append("username",this.username),p.patch("/player/"+this.dataLoad.id,t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(this.$store.state.accessToken)}}).then((function(){return e.$router.go()}))},valdiateData:function(){this.username=this.dataLoad.username,this.email=this.dataLoad.email,this.first_name=this.dataLoad.first_name,this.last_name=this.dataLoad.last_name,this.bio=this.dataLoad.player.bio}},created:function(){this.getUser()}};a("662f");const Gt=o()(Wt,[["render",Et]]);var Ht=Gt,Jt=[{path:"/",name:"posts",component:ge,meta:{requiresLogin:!0}},{path:"/login/",name:"login",component:Be},{path:"/logout/",name:"logout",component:Ee,meta:{requiresLogin:!0}},{path:"/player/",name:"playerDetails",component:Ht,meta:{requiresLogin:!0}},{path:"/register/",name:"register",component:bt}],Kt=Object(d["a"])({history:Object(d["b"])("/"),routes:Jt});Kt.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresLogin}))?j.getters.loggedIn?a():a({name:"login"}):a()}));var Qt=Kt;a("ab8b");Object(n["c"])(u).use(Qt).use(j).mount("#app")},6543:function(e,t,a){},"662f":function(e,t,a){"use strict";a("efa2")},"6c62":function(e,t,a){"use strict";a("6543")},"813a":function(e,t,a){},"91bd":function(e,t,a){"use strict";a("813a")},efa2:function(e,t,a){}});
//# sourceMappingURL=app.518f445e.js.map