(this.webpackJsonpauthentication=this.webpackJsonpauthentication||[]).push([[0],{19:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t(1),o=t.n(a),i=t(10),c=t.n(i),s=(t(19),t(5)),u=t(3),l=t(2);function d(){var n=Object(u.a)(["\n\n  .button {\n    background-color: ",";\n    transition: all 0.30s linear;\n      &:hover{\n      box-shadow: ",";\n    }\n  }\n\n  .submit-button {\n    border: ",";\n    color: ",";\n    background-color: ",";\n    &:hover\xa0{\n      background-color: ",";\n      color: ","\n    }\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    background-color: ",";\n    color: ",";\n    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n    transition: all 0.30s linear;\n  }\n\n  .form {\n    box-shadow: ",";\n    transition: all .3s linear;\n  }\n\n  .underline {\n    background-color: ",";\n  }\n\n  \n  input {\n    background-color: ",";\n    color: ",";\n    transition: all 0.30s linear;\n    position: relative;\n    ::placeholder{\n      color: ",";\n      font-weight: 300;\n      transition: color 0.30s linear;\n    }\n  }\n  "]);return d=function(){return n},n}var p=Object(l.b)(d(),(function(n){return n.theme.button.background}),(function(n){return n.theme.button.shadow}),(function(n){return n.theme.button.border}),(function(n){return n.theme.input.borderColor}),(function(n){return n.theme.button.background}),(function(n){return n.theme.button.hover.backgroundColor}),(function(n){return n.theme.button.hover.text}),(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return n.theme.form.shadow}),(function(n){return n.theme.input.borderColor}),(function(n){return n.theme.input.background}),(function(n){return n.theme.text}),(function(n){return n.theme.text})),b={body:"#FFF",text:"#363537",toggleBorder:"#FFF",background:"#363537",button:{background:"#FFF",shadow:"0 0 3px rgba(0, 0, 0, .7)",border:"1px solid #363537",hover:{text:"#FFF",backgroundColor:"#363537"}},form:{shadow:"0 0 7px #7f807f"},input:{borderColor:"#363537",shadow:"0 0 5px #363537",background:"#d3d3d3"}},f={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999",button:{background:"#363537",shadow:"0 0 3px rgba(0, 0, 0, 1)",border:"1px solid #00fbff",hover:{text:"#363537",backgroundColor:"#00fbff"}},form:{shadow:"0px 0 7px #000"},input:{borderColor:"#00fbff",shadow:"0 0 5px rgba(0, 251, 255, 1)",background:"#414142"}},h=t(4);function j(){var n=Object(u.a)(["\n  margin: 0;\n  padding-left: 15px\n"]);return j=function(){return n},n}function x(){var n=Object(u.a)(["\n  font-size: 12px;\n  padding: 5px;\n  transform: translateX(100%);\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: 1px solid black;\n  background-color: #fff;\n  z-index: 10;\n"]);return x=function(){return n},n}var g=l.c.div(x()),O=l.c.ul(j());var m=function(n){var e=n.type,t=n.conditions;return Object(r.jsx)(g,{children:"email"===e?Object(r.jsx)("p",{children:"This must be a valid email address"}):"password"===e?Object(r.jsxs)(O,{children:[!t.hasEnoughCharacter&&Object(r.jsx)("li",{children:"Password is too short (minimum is 8 characters)"}),!t.hasOneUpperCase&&Object(r.jsx)("li",{children:"Password needs at least one upper case letter"}),!t.hasOneLowerCase&&Object(r.jsx)("li",{children:"Password needs at least one lower case letter"}),!t.hasOneDigit&&Object(r.jsx)("li",{children:"Password needs at least 1 number"}),!t.hasOneSpecialCharacter&&Object(r.jsx)("li",{children:"Password needs at least 1 special character (!, @, #, $, %, ^, &, ^, *)"}),!t.containsNoSpace&&Object(r.jsx)("li",{children:"Password must not contain any space"})]}):Object(r.jsx)("p",{children:"The password does not match"})})},v=t.p+"static/media/eye-solid.637d0a25.svg",w=t.p+"static/media/eye-closed-solid.977da11a.svg";function C(){var n=Object(u.a)(["\n  display: block;\n  height: 2px;\n  opacity: 0;\n  width: 0%;\n  transition: all .3s linear\n"]);return C=function(){return n},n}function y(){var n=Object(u.a)(["\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n"]);return y=function(){return n},n}function S(){var n=Object(u.a)(["\n  padding: 10px;\n  border: ",";\n  :focus{\n    outline: none;\n    & + .underline{\n      opacity: 1;\n      width: 100%;\n    }\n  }\n"]);return S=function(){return n},n}function k(){var n=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: space-around;\n  position: relative;\n  margin: 10px 0 5px 0;\n  position: relative;\n"]);return k=function(){return n},n}var F=l.c.div(k()),P=l.c.input(S(),(function(n){return"none"===n.status?"1px solid transparent":"valid"===n.status?"1px solid green":"1px solid red"})),R=l.c.img(y()),z=l.c.span(C());var I=function(n){var e=n.originalType,t=n.placeholder,o=n.value,i=n.saveInput,c=n.emailRegex,u=n.passwordRegex,l=n.inputPurpose,d=n.password1,p=Object(a.useState)(!1),b=Object(s.a)(p,2),f=b[0],j=b[1],x=Object(a.useState)(e),g=Object(s.a)(x,2),O=g[0],C=g[1],y=Object(a.useState)("none"),S=Object(s.a)(y,2),k=S[0],I=S[1],T=Object(a.useState)(!1),N=Object(s.a)(T,2),A=N[0],D=N[1],U=Object(a.useState)({hasEnoughCharacter:!1,hasOneUpperCase:!1,hasOneLowerCase:!1,hasOneDigit:!1,hasOneSpecialCharacter:!1,containsNoSpace:!1}),X=Object(s.a)(U,2),E=X[0],L=X[1],Z=/^.{8,}/,B=/[A-Z]/,$=/[a-z]/,J=/[0-9]/,H=/[!@#$%^&^*]/,M=/[\s]/,Y=function(n,e){"confirm-password"!==l?""===e?I("none"):""===e||n.test(e)?""!==e&&n.test(e)&&I("valid"):I("invalid"):I(""===e?"none":""!==e&&d!==e?"invalid":"valid")},q=function(n){i(n),Y("password"===e?u:c,n),function(n){Z.test(n)?L((function(n){return Object(h.a)(Object(h.a)({},n),{},{hasEnoughCharacter:!0})})):L((function(n){return Object(h.a)(Object(h.a)({},n),{},{hasEnoughCharacter:!1})})),B.test(n)?L((function(n){return Object(h.a)(Object(h.a)({},n),{},{hasOneUpperCase:!0})})):L((function(n){return Object(h.a)(Object(h.a)({},n),{},{hasOneUpperCase:!1})})),$.test(n)?L((function(n){return Object(h.a)(Object(h.a)({},n),{},{hasOneLowerCase:!0})})):L((function(n){return Object(h.a)(Object(h.a)({},n),{},{hasOneLowerCase:!1})})),J.test(n)?L((function(n){return Object(h.a)(Object(h.a)({},n),{},{hasOneDigit:!0})})):L((function(n){return Object(h.a)(Object(h.a)({},n),{},{hasOneDigit:!1})})),H.test(n)?L((function(n){return Object(h.a)(Object(h.a)({},n),{},{hasOneSpecialCharacter:!0})})):L((function(n){return Object(h.a)(Object(h.a)({},n),{},{hasOneSpecialCharacter:!1})})),M.test(n)?L((function(n){return Object(h.a)(Object(h.a)({},n),{},{containsNoSpace:!1})})):L((function(n){return Object(h.a)(Object(h.a)({},n),{},{containsNoSpace:!0})}))}(n),function(n){""===n?D(!1):"password"===l?u.test(n)?D(!1):D(!0):"email"===l?c.test(n)?D(!1):D(!0):D(d!==n)}(n)};return Object(r.jsxs)(F,{className:"inputContainer",children:[Object(r.jsx)(P,{type:O,placeholder:t,autoComplete:"off",value:o,onChange:function(n){return q(n.target.value)},status:k}),Object(r.jsx)(z,{className:"underline"}),"password"===e&&Object(r.jsx)(R,{onClick:function(){return"text"===O?C("password"):"password"===O&&C("text"),void j((function(n){return!n}))},src:f?v:w,alt:"Icon visible password"}),A&&Object(r.jsx)(m,{active:A,type:l,conditions:E})]})};function T(){var n=Object(u.a)(["\n  font-size: 22px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin: 0 0 5px 0;\n"]);return T=function(){return n},n}var N=l.c.h2(T());var A=function(n){var e=n.value;return Object(r.jsx)(N,{children:e})};function D(){var n=Object(u.a)(["\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 5px;\n  font-size: 14px;\n  cursor: pointer;\n"]);return D=function(){return n},n}var U=l.c.button(D());var X=function(n){var e=n.value,t=n.type;return Object(r.jsx)(U,{className:"submit-button",type:t,children:e})},E=t.p+"static/media/chevron-right-black.e32c85b2.svg",L=t.p+"static/media/chevron-right-white.0c61e753.svg";function Z(){var n=Object(u.a)(["\n  font-size: 16;\n  margin: 0 5px 0 0;\n"]);return Z=function(){return n},n}function B(){var n=Object(u.a)(["\n  transform: translateX(0) \n"]);return B=function(){return n},n}function $(){var n=Object(u.a)(["\n  font-size: 14px;\n  padding: 4px 4px 4px 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  position: relative;\n  align-self: flex-end;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: box-shadow .2s linear;\n"]);return $=function(){return n},n}function J(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 10px;\n  padding: 20px;\n  transform: ",";\n  opacity: ",";\n"]);return J=function(){return n},n}var H=l.c.div(J(),(function(n){return n.active?"translateX(50%)":"translateX(-200px)"}),(function(n){return n.active?"1":"0"})),M=l.c.div($()),Y=l.c.img(B()),q=l.c.p(Z());var G=function(n){var e=n.active,t=n.handleConnectDisplayChange,o=n.handleOnSubmitSignin,i=n.theme,c=n.emailRegex,u=n.passwordRegex,l=Object(a.useState)(""),d=Object(s.a)(l,2),p=d[0],b=d[1],f=Object(a.useState)(""),h=Object(s.a)(f,2),j=h[0],x=h[1];return Object(r.jsxs)(H,{className:"form",active:e,children:[Object(r.jsx)(A,{value:"Sign In"}),Object(r.jsx)(I,{originalType:"text",inputPurpose:"email",placeholder:"Email",autoComplete:"off",value:p,saveInput:b,emailRegex:c}),Object(r.jsx)(I,{originalType:"password",inputPurpose:"password",placeholder:"Password",autoComplete:"off",value:j,saveInput:x,passwordRegex:u}),Object(r.jsx)("a",{href:"#",children:"Forgot your password ?"}),Object(r.jsx)(X,{value:"Confirm",type:"submit",onClick:function(){return o(p,j)}}),Object(r.jsxs)(M,{className:"button",onClick:function(){return t()},children:[Object(r.jsx)(q,{children:"Sign Up"}),Object(r.jsx)(Y,{src:"light"===i?E:L,alt:"Icon to SignUp"})]})]})},K=t.p+"static/media/chevron-left-black.8e8852b8.svg",Q=t.p+"static/media/chevron-left-white.65578f22.svg";function V(){var n=Object(u.a)(["\n  font-size: 16;\n  margin: 0 0 0 5px;\n"]);return V=function(){return n},n}function W(){var n=Object(u.a)(["\n  transform: translateX(0) \n"]);return W=function(){return n},n}function _(){var n=Object(u.a)(["\n  font-size: 14px;\n  padding: 4px 6px 4px 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  position: relative;\n  background-color: #fff;\n  align-self: flex-start;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: box-shadow .2s linear;\n"]);return _=function(){return n},n}function nn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 10px;\n  padding: 20px;\n  transform: ",";\n  opacity: ",";\n"]);return nn=function(){return n},n}var en=l.c.div(nn(),(function(n){return n.active?"translateX(-50%)":"translateX(200px)"}),(function(n){return n.active?"1":"0"})),tn=l.c.div(_()),rn=l.c.img(W()),an=l.c.p(V());var on=function(n){var e=n.active,t=n.handleConnectDisplayChange,o=n.handleOnSubmitSignup,i=n.theme,c=n.emailRegex,u=n.passwordRegex,l=Object(a.useState)(""),d=Object(s.a)(l,2),p=d[0],b=d[1],f=Object(a.useState)(""),h=Object(s.a)(f,2),j=h[0],x=h[1],g=Object(a.useState)(""),O=Object(s.a)(g,2),m=O[0],v=O[1];return Object(r.jsxs)(en,{className:"form",active:e,children:[Object(r.jsx)(A,{value:"Create your account"}),Object(r.jsx)(I,{originalType:"text",inputPurpose:"email",placeholder:"email",autoComplete:"off",value:p,saveInput:b,emailRegex:c}),Object(r.jsx)(I,{originalType:"password",inputPurpose:"password",placeholder:"Password",autoComplete:"off",value:j,saveInput:x,passwordRegex:u}),Object(r.jsx)(I,{originalType:"password",inputPurpose:"confirm-password",placeholder:"Confirm password",autoComplete:"off",value:m,saveInput:v,passwordRegex:u,password1:j}),Object(r.jsx)(X,{value:"Confirm",type:"submit",onClick:function(){return o(p,j,m)}}),Object(r.jsxs)(tn,{className:"button",onClick:function(){return t()},children:[Object(r.jsx)(rn,{src:"light"===i?K:Q,alt:"Icon link to SignIn"}),Object(r.jsx)(an,{children:"Sign In"})]})]})};function cn(){var n=Object(u.a)(["\n  ","\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: none;\n"]);return cn=function(){return n},n}function sn(){var n=Object(u.a)(["\n  width: 100vw;\n  height: calc(100vh - 50px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: none;\n  position: relative;\n  overflow-x: hidden;\n"]);return sn=function(){return n},n}function un(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  ","\n  box-shadow: none;\n  padding: 0 10px\n"]);return un=function(){return n},n}var ln=l.c.div(un(),""),dn=l.c.div(sn()),pn=l.c.div(cn(),"");var bn=function(){var n=Object(a.useState)("light"),e=Object(s.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)("signin"),c=Object(s.a)(i,2),u=c[0],d=c[1],h=Object(a.useState)({email:"",password:""}),j=Object(s.a)(h,2),x=j[0],g=j[1],O=/^[a-zA-Z0-9.-]{2,20}@([a-zA-Z0-9]{2,15})+(\.[a-zA-Z]{2,3})+((\.[a-zA-Z]{2,3})?)+$/,m=/^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&^*])(?!.*[\s])(?!.*[<>]).*$/,v=function(){d("signin"===u?"signup":"signin")},w=function(n,e){return n.test(e)},C=function(n,e){g({email:n,password:e})};return Object(r.jsx)(l.a,{theme:"light"===t?b:f,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{}),Object(r.jsx)(ln,{children:Object(r.jsx)("button",{onClick:function(){o("light"===t?"dark":"light")},children:"Switch Theme"})}),Object(r.jsx)(dn,{children:Object(r.jsxs)(pn,{children:[Object(r.jsx)(G,{handleOnSubmitSignin:function(n,e){w(m,e)&&w(O,n)?n===x.email&&e===x.password?console.log("Nice, you are logged in"):console.log("It seems your email or password do not match what we have on database"):console.log("The credentials do not match the regex")},handleConnectDisplayChange:v,active:"signin"===u,theme:t,emailRegex:O,passwordRegex:m}),Object(r.jsx)(on,{registerUser:C,handleOnSubmitSignup:function(n,e,t){(function(n,e){return!!w(m,n)&&n===e})(e,t)&&w(O,n)?C(n,t):console.log("The credentials do not match the regex")},handleConnectDisplayChange:v,active:"signup"===u,theme:t,emailRegex:O,passwordRegex:m})]})})]})})},fn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),o(n),i(n)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(bn,{})}),document.getElementById("root")),fn()}},[[22,1,2]]]);
//# sourceMappingURL=main.85d8e93f.chunk.js.map