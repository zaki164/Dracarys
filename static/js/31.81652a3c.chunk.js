"use strict";(self.webpackChunkdracarys=self.webpackChunkdracarys||[]).push([[31],{8031:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var n=s(9806),r=s(7022),a=s(9743),i=s(2677),c=s(1632),o={_origin:"https://api.emailjs.com"},d=function(e,t,s){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},l=s(3144),u=s(5671),m=(0,l.Z)((function e(t){(0,u.Z)(this,e),this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"})),h=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,r){var a=new XMLHttpRequest;a.addEventListener("load",(function(e){var t=e.target,s=new m(t);200===s.status||"OK"===s.text?n(s):r(s)})),a.addEventListener("error",(function(e){var t=e.target;r(new m(t))})),a.open("POST",o._origin+e,!0),Object.keys(s).forEach((function(e){a.setRequestHeader(e,s[e])})),a.send(t)}))},p=function(e,t,s,n){var r=n||o._userID,a=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(s);d(r,e,t);var i=new FormData(a);return i.append("lib_version","3.10.0"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",r),h("/api/v1.0/email/send-form",i)},x=s(7945),j=s.n(x),f=s(184);j().init({once:!0});var v=function(){return(0,f.jsxs)("section",{className:"contact min-vh-100",children:[(0,f.jsx)("section",{className:"contact_img"}),(0,f.jsx)("main",{children:(0,f.jsx)(r.Z,{children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(i.Z,{xs:12,md:6,className:"pe-0 col","data-aos":"fade-up",children:(0,f.jsxs)("div",{className:"contact_message",children:[(0,f.jsx)("h4",{children:"Send Us A Message"}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p("service_7fme2pt","template_hgxnupl",e.target,"7QPSZq9EytY-ixOtW").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[(0,f.jsx)("input",{type:"text",placeholder:"Your Name",name:"name"}),(0,f.jsx)("input",{type:"email",placeholder:"Your Email Address",name:"email"}),(0,f.jsx)("input",{type:"text",placeholder:"Subject",name:"subject"}),(0,f.jsx)("textarea",{name:"message",cols:"30",rows:"10",placeholder:"How Can We Help ?"}),(0,f.jsx)("button",{className:"custom_button w-100",type:"submit",children:"Submit"})]})]})}),(0,f.jsx)(i.Z,{xs:12,md:6,className:"ps-0 col flex_center","data-aos":"fade-up",children:(0,f.jsxs)("div",{className:"contact_address",children:[(0,f.jsxs)("div",{className:"address",children:[(0,f.jsx)(n.G,{icon:c.opg}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Address"}),(0,f.jsx)("p",{className:"address_text",children:"Dracarys Center 8th floor, 379 Hudson St, New York, NY 10018 US"})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(n.G,{icon:c.j1w}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Lets Talk"}),(0,f.jsx)("p",{children:"+1 800 1236879"})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(n.G,{icon:c.FU$}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Sale Support"}),(0,f.jsx)("p",{children:"contact@example.com"})]})]})]})})]})})})]})}}}]);
//# sourceMappingURL=31.81652a3c.chunk.js.map