(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{100:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),s=(t(97),t(98),t(99),t(100),t(19)),o=t(20),m=t(22),i=t(21),u=t(155),d=t(156),E=t(157),h=t(158),f=t(159),p=t(160),g=t(9),b=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))};function N(e){var a=e.dish;e.onClick;return r.a.createElement(u.a,null,r.a.createElement(g.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",src:""+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,{className:"strong"},r.a.createElement("h5",null,a.name)))))}var v=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.id},r.a.createElement(N,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},y=t(161),O=t(162),w=t(163),M=t(27);function L(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(b,null):n?r.a.createElement("h4",null,n):r.a.createElement(M.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:""+a.image,alt:a.name}),r.a.createElement(y.a,null,r.a.createElement(h.a,null,a.name),a.designation?r.a.createElement(O.a,null,a.designation):null,r.a.createElement(w.a,null,a.description))))}var k=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(L,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(L,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(L,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))},j=t(18),S=t(164),C=t(165),D=t(166),F=t(167),x=t(168),A=t(169),I=t(170),T=t(171),R=t(182),_=t(172),q=t(173),P=t(174),H=t(175),G=t(176),U=t(177),W=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).toggleNav=n.toggleNav.bind(Object(j.a)(n)),n.toggleModal=n.toggleModal.bind(Object(j.a)(n)),n.handleLogin=n.handleLogin.bind(Object(j.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(S.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(C.a,{onClick:this.toggleNav}),r.a.createElement(D.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(F.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(x.a,{navbar:!0},r.a.createElement(A.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(A.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(A.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(A.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))))),r.a.createElement(x.a,{className:"ml-auto",navbar:!0},r.a.createElement(A.a,null,r.a.createElement(I.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))),r.a.createElement(T.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!")))),r.a.createElement(R.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(_.a,{toggle:this.toggleModal},"Login"),r.a.createElement(q.a,null,r.a.createElement(P.a,{onSubmit:this.handleLogin},r.a.createElement(H.a,null,r.a.createElement(G.a,{htmlFor:"username"},"Username"),r.a.createElement(U.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(H.a,null,r.a.createElement(G.a,{htmlFor:"password"},"Password"),r.a.createElement(U.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(H.a,{check:!0},r.a.createElement(G.a,{check:!0},r.a.createElement(U.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(I.a,{type:"submit",value:"submit",color:"primary"},"Login"))))))}}]),t}(n.Component);var Y=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},B=t(178),K=t(179),J=t(8),z=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Thank you for your feedback!"+JSON.stringify(e)),this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this,a=function(e){return e&&e.length},t=function(e){return function(a){return!a||a.length<=e}},n=function(e){return function(a){return a&&a.length>=e}};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"/"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(J.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(B.a,{className:"form-group"},r.a.createElement(G.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(K.a,{md:10},r.a.createElement(J.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:a,minLength:n(3),maxLength:t(15)}}),r.a.createElement(J.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(B.a,{className:"form-group"},r.a.createElement(G.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(K.a,{md:10},r.a.createElement(J.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:a,minLength:n(3),maxLength:t(15)}}),r.a.createElement(J.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(B.a,{className:"form-group"},r.a.createElement(G.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(K.a,{md:10},r.a.createElement(J.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:a,minLength:n(3),maxLength:t(15),isNumber:function(e){return!isNaN(Number(e))}}}),r.a.createElement(J.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 numbers ",maxLength:"Must be 15 numbers or less ",isNumber:"Must be a number "}}))),r.a.createElement(B.a,{className:"form-group"},r.a.createElement(G.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(K.a,{md:10},r.a.createElement(J.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:a,validEmail:function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)}}}),r.a.createElement(J.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required ",validEmail:"Invalid Email Address"}}))),r.a.createElement(B.a,{className:"form-group"},r.a.createElement(K.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(G.a,{check:!0},r.a.createElement(J.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(K.a,{md:{size:3,offset:1}},r.a.createElement(J.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(B.a,{className:"form-group"},r.a.createElement(G.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(K.a,{md:10},r.a.createElement(J.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(B.a,{className:"form-group"},r.a.createElement(K.a,{md:{size:10,offset:2}},r.a.createElement(I.a,{type:"submit",color:"primary"},"Send Feedback"),r.a.createElement("span",null," "),r.a.createElement(I.a,{type:"reset",onClick:function(){return e.props.resetFeedbackForm()}},"Cancel")))))))}}]),t}(n.Component),Z=t(180),$=t(181);function Q(e){var a=e.leader;return r.a.createElement("div",null,r.a.createElement(Z.a,{tag:"li",className:"m-1"},r.a.createElement(Z.a,{left:!0,middle:!0},r.a.createElement(Z.a,{object:!0,src:""+a.image,alt:a.name})),r.a.createElement(Z.a,{body:!0,className:"ml-5"},r.a.createElement(Z.a,{heading:!0},a.name),r.a.createElement("p",null,a.designation),r.a.createElement("p",null,a.description))))}var V=function(e){return e.leaders.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.leaders.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.leaders.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement($.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(y.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(y.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(Z.a,{list:!0},r.a.createElement(M.Stagger,{in:!0},e.leaders.leaders.map((function(e){return r.a.createElement(M.Fade,{in:!0},r.a.createElement("div",{key:e.id},r.a.createElement(Q,{leader:e})))})))))))},X=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).toggleModal=n.toggleModal.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n.state={isModalOpen:!1},n}return Object(o.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(I.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"))),r.a.createElement(R.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(_.a,{toggle:this.toggleModal},"Login"),r.a.createElement(q.a,null,r.a.createElement(J.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(B.a,{className:"form-group"},r.a.createElement(G.a,{htmlFor:"rating",md:12},"Rating"),r.a.createElement(K.a,null,r.a.createElement(J.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(B.a,{className:"form-group"},r.a.createElement(G.a,{htmlFor:"author",md:12},"Your Name"),r.a.createElement(K.a,{md:12},r.a.createElement(J.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:function(e){return e&&e.length},minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:function(e){return function(a){return!a||a.length<=e}}(15)}}),r.a.createElement(J.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(B.a,{className:"form-group"},r.a.createElement(G.a,{htmlFor:"comment",md:12},"Comment"),r.a.createElement(K.a,{md:12},r.a.createElement(J.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"}))),r.a.createElement(B.a,{className:"form-group"},r.a.createElement(K.a,{md:2},r.a.createElement(I.a,{type:"submit",color:"primary"},"Submit")))))))}}]),t}(n.Component);function ee(e){var a=e.dish;return r.a.createElement(M.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{top:!0,src:""+a.image,alt:a.name}),r.a.createElement(y.a,null,r.a.createElement(h.a,null,a.name),r.a.createElement(w.a,null,a.description))))}function ae(e){var a=e.comments,t=e.postComment,n=e.dishId;return null!=a?r.a.createElement("div",null,r.a.createElement("h4",null,"Comments"),r.a.createElement("div",{className:"list-unstyled"},r.a.createElement(M.Stagger,{in:!0},a.map((function(e){return r.a.createElement(M.Fade,{in:!0},r.a.createElement("div",{key:e.id},r.a.createElement("li",null,r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,r.a.createElement("span",null),", ",r.a.createElement("span",null,new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e.date)))))))})))),r.a.createElement(X,{dishId:n,postComment:t})):r.a.createElement("div",null)}var te=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement(p.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(ee,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(ae,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})))):r.a.createElement("div",null)},ne=t(10),re=t(25),le=t(53),ce=function(){return{type:"DISHES_LOADING"}},se=function(e){return{type:"DISHES_FAILED",payload:e}},oe=function(e){return{type:"ADD_DISHES",payload:e}},me=function(e){return{type:"COMMENTS_FAILED",payload:e}},ie=function(e){return{type:"ADD_COMMENTS",payload:e}},ue=function(){return{type:"PROMOS_LOADING"}},de=function(e){return{type:"PROMOS_FAILED",payload:e}},Ee=function(e){return{type:"ADD_PROMOS",payload:e}},he=function(){return{type:"LEADERS_LOADING"}},fe=function(e){return{type:"LEADERS_FAILED",payload:e}},pe=function(e){return{type:"ADD_LEADERS",payload:e}},ge=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement("div",null,r.a.createElement(le.TransitionGroup,null,r.a.createElement(le.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ne.d,{location:this.props.location},r.a.createElement(ne.b,{path:"/home",component:function(){return r.a.createElement(k,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(ne.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(V,{leaders:e.props.leaders})}}),r.a.createElement(ne.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(v,{dishes:e.props.dishes})}}),r.a.createElement(ne.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(te,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(ne.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(z,{postFeedback:e.props.postFeedback,resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(ne.a,{to:"/home"}))))),r.a.createElement(Y,null))}}]),t}(n.Component),be=Object(ne.g)(Object(re.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch("comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},postFeedback:function(a,t,n,r,l,c,s){return e(function(e,a,t,n,r,l,c){return function(s){var o={firstname:e,lastname:a,telnum:t,email:n,agree:r,contactType:l,message:c};return o.date=(new Date).toISOString(),fetch("feedback",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return s({type:"ADD_FEEDBACK",payload:e})})).catch((function(e){console.log("post feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(a,t,n,r,l,c,s))},fetchDishes:function(){e((function(e){return e(ce(!0)),fetch("dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(oe(a))})).catch((function(a){return e(se(a.message))}))}))},resetFeedbackForm:function(){e(J.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch("comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ie(a))})).catch((function(a){return e(me(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(ue()),fetch("promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Ee(a))})).catch((function(a){return e(de(a.message))}))}))},fetchLeaders:function(){return e((function(e){return e(he()),fetch("leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(pe(a))})).catch((function(a){return e(fe(a.message))}))}))}}}))(ge)),Ne=(t(153),t(6)),ve=t(26),ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(Ne.a)(Object(Ne.a)({},e),{},{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(Ne.a)(Object(Ne.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(Ne.a)(Object(Ne.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(Ne.a)(Object(Ne.a)({},e),{},{errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(Ne.a)(Object(Ne.a)({},e),{},{errMess:a.payload});case"ADD_COMMENT":var t=a.payload;return Object(Ne.a)(Object(Ne.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(Ne.a)(Object(Ne.a)({},e),{},{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(Ne.a)(Object(Ne.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(Ne.a)(Object(Ne.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(Ne.a)(Object(Ne.a)({},e),{},{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(Ne.a)(Object(Ne.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"LEADERS_FAILED":return Object(Ne.a)(Object(Ne.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},Le=t(90),ke=t(91),je=t.n(ke),Se={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Ce=Object(ve.createStore)(Object(ve.combineReducers)(Object(Ne.a)({dishes:ye,comments:Oe,promotions:we,leaders:Me},Object(J.createForms)({feedback:Se}))),Object(ve.applyMiddleware)(Le.a,je.a)),De=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(re.Provider,{store:Ce},r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(be,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,a,t){e.exports=t(154)}},[[92,1,2]]]);
//# sourceMappingURL=main.b6bb852b.chunk.js.map