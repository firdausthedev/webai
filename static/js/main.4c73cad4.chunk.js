(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t(21)},18:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var a,l,r,c=t(0),i=t.n(c),o=t(9),u=t.n(o),m=(t(18),t(1)),d=t(3),s=t(4),p=s.a.nav(a||(a=Object(d.a)(["\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.7rem 2rem;\n  z-index: 1;\n  width: 100%;\n  opacity: 0.9;\n  margin-bottom: 1.5rem;\n  ul {\n    list-style: none;\n    display: flex;\n  }\n  a {\n    color: white;\n    background: black;\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n    margin: 0 0.25rem;\n    font-size: 0.8rem;\n    text-decoration: none;\n    &:hover {\n      background: white;\n      color: black;\n      transition: 1s;\n    }\n  }\n\n  .title-wrapper {\n    padding: 0.1rem 1rem;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    h2 {\n      font-size: 1rem;\n    }\n    a {\n      margin-left: 1.3rem;\n    }\n  }\n  @media (max-width: 480px) {\n    flex-direction: column;\n    .title-wrapper {\n      border-radius: 10px;\n      margin-bottom: 1rem;\n      h2 {\n        font-size: 0.8rem;\n      }\n    }\n    a {\n      margin: 2rem 0.25rem;\n    }\n  }\n"]))),f=s.a.div(l||(l=Object(d.a)(["\n  background-color: rgba(230, 230, 230, 0.75);\n  color: black;\n"]))),g=function(e){var n=e.showModelFunc,t=e.showModelUpload;return i.a.createElement(f,{id:"navbar"},i.a.createElement(p,null,i.a.createElement("div",{className:"title-wrapper"},i.a.createElement("h2",null,"ImageAI"),i.a.createElement("a",{onClick:function(){return n(t)}},t?"Test":"Create"," Model")),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",null,"Help")))))},b=["svgRef"];function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function E(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var x,v=function(e){var n=e.svgRef,t=E(e,b);return i.a.createElement("svg",h({x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",ref:n},t),r||(r=i.a.createElement("path",{d:"M79.376,46.434C79.16,30.391,66.095,17.449,50,17.449c-16.095,0-29.16,12.941-29.376,28.984  c-9.563,0.383-17.203,8.539-17.203,18.195C3.421,74.406,11.252,83,20.982,83h14c3.177,0,11.25-5,11.25-21H40.08l10-12.277L60.08,62  h-6.348c0,17,7.931,21,11.25,21h14c9.747,0,17.597-8.582,17.597-18.371C96.579,54.973,88.938,46.816,79.376,46.434z"})))},y=i.a.forwardRef(function(e,n){return i.a.createElement(v,h({svgRef:n},e))});t.p;var j,O,w=s.a.div(x||(x=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 1100px;\n  margin: auto;\n\n  .main-upload {\n    display: flex;\n    margin-top: 2rem;\n\n    .image-select {\n      width: 300px;\n      height: 300px;\n      display: flex;\n      flex-direction: column;\n      margin-top: 8px;\n      color: black;\n\n      p {\n        font-weight: bolder;\n        margin-bottom: 1rem;\n      }\n      a {\n        text-decoration: none;\n        color: inherit;\n        padding: 1rem 0.5rem;\n        border-radius: 10px;\n\n        &:hover {\n          background: black;\n          color: white;\n          transition: 1s;\n        }\n      }\n\n      a:last-child {\n        background: red;\n        margin-top: 90px;\n        background: black;\n        color: white;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        svg {\n          width: 40px;\n          height: 25px;\n          fill: white;\n        }\n      }\n\n      a.active {\n        background-color: rgba(230, 230, 230, 0.75);\n\n        &:hover {\n          background: black;\n          color: white;\n          transition: 1s;\n        }\n      }\n    }\n  }\n\n  .image-upload {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    a {\n      text-decoration: none;\n      color: white;\n      background: black;\n      padding: 0.5rem;\n      border-radius: 10px;\n      width: 100px;\n      align-self: flex-end;\n      font-size: 0.8rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0.8rem;\n    }\n  }\n  .upload-box {\n    background: #0f2027;\n    background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);\n    background: linear-gradient(to right, #2c5364, #203a43, #0f2027);\n\n    color: white;\n    height: 300px;\n    margin-left: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n\n    p {\n      text-align: center;\n    }\n    p:first-child {\n      font-size: 1.5rem;\n      margin-bottom: 1rem;\n    }\n    p:last-child {\n      font-size: 0.8rem;\n    }\n  }\n  .upload-image {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    img {\n      width: 150px;\n      height: 150px;\n      border-radius: 10px;\n    }\n    .upload-image-btns {\n      display: flex;\n      margin-top: 15px;\n\n      a:first-child {\n        background: #ff5151;\n        margin-right: 20px;\n      }\n      a:last-child {\n        background: #77d970;\n      }\n    }\n  }\n  .upload-predict {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    p {\n      font-size: 1rem;\n    }\n    img {\n      width: 150px;\n      height: 150px;\n      border-radius: 10px;\n    }\n    a {\n      align-self: center;\n      margin-top: 15px;\n    }\n  }\n\n  .error {\n    display: block;\n    border: 1px solid #ff5151;\n    padding: 0.5rem 0.8rem;\n    text-align: center;\n    color: #ff5151;\n    border-radius: 5px;\n  }\n"]))),k=function(){var e=Object(c.useState)(["man","woman"]),n=Object(m.a)(e,2),t=n[0],a=n[1],l=Object(c.useState)(null),r=Object(m.a)(l,2),o=r[0],u=r[1],d=Object(c.useState)(!1),s=Object(m.a)(d,2),p=s[0],f=s[1],g=Object(c.useState)(!1),b=Object(m.a)(g,2),h=b[0],E=b[1],x=Object(c.useState)(0),v=Object(m.a)(x,2),j=v[0],O=v[1],k=Object(c.useState)(!0),C=Object(m.a)(k,2),S=C[0],N=C[1],z=Object(c.useState)(!1),L=Object(m.a)(z,2),M=L[0],R=L[1],H=Object(c.useState)(""),P=Object(m.a)(H,2),U=(P[0],P[1],i.a.useRef(null)),F=i.a.useRef(null),T="https://firdausthedev-webai.herokuapp.com",I=function(e){h||a(e)},V=function(){R(!0),setTimeout(function(){R(!1)},3e3)};return i.a.createElement(w,null,M&&i.a.createElement("p",{className:"error"},"Error. Something went wrong"),i.a.createElement("div",{className:"main-upload"},i.a.createElement("div",{className:"image-select"},i.a.createElement("p",null,"Select Model"),i.a.createElement("a",{onClick:function(){return I(["man","woman"])},className:"man"==t[0]?"active":""},"Man or Woman"),i.a.createElement("a",{onClick:function(){return I(["knife","scissor"])},className:"knife"===t[0]?"active":""},"Knife or Scissor"),i.a.createElement("a",{onClick:function(){return I(["cat","dog"])},className:"cat"===t[0]?"active":""},"Cat or Dog"),i.a.createElement("a",{onClick:function(){I(["custom","custom2"]),null==o&&F.current.click()}},"Upload model ",i.a.createElement(y,null),i.a.createElement("input",{id:"file-upload",type:"file",name:"file",accept:".pkl",style:{display:"none"},ref:F,onChange:function(e){if(e.target.files&&e.target.files.length>0){var n=e.target.files[0],t=new FormData;t.append("file",n),t.append("filename",n.name),fetch(T+"/uploadcmodel",{method:"POST",body:t}).then(function(e){e.json().then(function(e){e.success||(f(!1),u(null),V())})})}},onClick:function(e){e.target.value=null}}))),i.a.createElement("div",{className:"image-upload"},i.a.createElement("a",null,"My Uploads"),i.a.createElement("div",{className:"upload-box",onClick:function(e){null==o&&U.current.click()}},i.a.createElement("input",{id:"file-upload",type:"file",name:"file",accept:"image/*",style:{display:"none"},ref:U,onChange:function(e){e.target.files&&e.target.files.length>0&&u(e.target.files[0])},onClick:function(e){e.target.value=null}}),i.a.createElement("div",null,null==o?i.a.createElement("div",{className:"upload-info"},i.a.createElement("p",null,"UPLOAD IMAGE HERE"),i.a.createElement("p",null,"Accepting image files such as png, jpg and jpeg.")):0==p&&0==h?i.a.createElement("div",{className:"upload-image"},"model"!=t[0]?i.a.createElement("img",{src:URL.createObjectURL(o)}):i.a.createElement("p",null,o.name),i.a.createElement("p",null),i.a.createElement("div",{className:"upload-image-btns"},i.a.createElement("a",{onClick:function(e){u(null)}},"Clear"),i.a.createElement("a",{onClick:function(){var e=new FormData;e.append("file",o),e.append("filename",o.name),f(!0),fetch(T+"/uploadimage",{method:"POST",body:e}).then(function(e){e.json().then(function(e){var n=e.filename;console.log(e),1==e.success?fetch(T+"/predictimage/"+n+"/"+t[0]+".pkl",{method:"GET"}).then(function(e){e.json().then(function(e){var n=e.prob.model,t=e.prob.model2;console.log(e.prob),n>t?(O(n),N(!0)):(O(t),N(!1)),f(!1),E(!0),console.log(n)})}):(f(!1),u(null),V())})})}},"Upload"))):p?i.a.createElement("div",{className:"upload-loading"},i.a.createElement("p",null,"Loading...")):i.a.createElement("div",{className:"upload-predict"},i.a.createElement("p",null,"Prediction: ",(100*j).toFixed(2),"%"," ",S?t[0]:t[1]),i.a.createElement("img",{src:URL.createObjectURL(o)}),i.a.createElement("a",{onClick:function(){O(0),E(!1),u(null)}},"Close")))))))},C=t(2),S=["svgRef"];function N(){return(N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function z(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var L,M=function(e){var n=e.svgRef,t=z(e,S);return i.a.createElement("svg",N({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 115.28 122.88",style:{enableBackground:"new 0 0 115.28 122.88"},xmlSpace:"preserve",ref:n},t),j||(j=i.a.createElement("style",{type:"text/css"},".st0{fill-rule:evenodd;clip-rule:evenodd;}")),O||(O=i.a.createElement("g",null,i.a.createElement("path",{className:"st0",d:"M25.38,57h64.88V37.34H69.59c-2.17,0-5.19-1.17-6.62-2.6c-1.43-1.43-2.3-4.01-2.3-6.17V7.64l0,0H8.15 c-0.18,0-0.32,0.09-0.41,0.18C7.59,7.92,7.55,8.05,7.55,8.24v106.45c0,0.14,0.09,0.32,0.18,0.41c0.09,0.14,0.28,0.18,0.41,0.18 c22.78,0,58.09,0,81.51,0c0.18,0,0.17-0.09,0.27-0.18c0.14-0.09,0.33-0.28,0.33-0.41v-11.16H25.38c-4.14,0-7.56-3.4-7.56-7.56 V64.55C17.82,60.4,21.22,57,25.38,57L25.38,57z M35.34,67.55H57.6v5.1L43.31,87.57h14.83v5.48H33.96v-5.29L48.1,73H35.34V67.55 L35.34,67.55z M63.24,67.55h7.91v25.5h-7.91V67.55L63.24,67.55z M78,67.55H91.1c2.86,0,4.99,0.68,6.42,2.04 c1.42,1.36,2.13,3.29,2.13,5.8c0,2.58-0.78,4.59-2.33,6.04c-1.55,1.45-3.92,2.18-7.1,2.18H85.9v9.44H78V67.55L78,67.55z M85.9,78.45h1.94c1.53,0,2.61-0.27,3.22-0.8c0.62-0.53,0.93-1.2,0.93-2.03c0-0.8-0.27-1.48-0.81-2.04 c-0.53-0.56-1.54-0.84-3.03-0.84H85.9V78.45L85.9,78.45z M97.79,57h9.93c4.16,0,7.56,3.41,7.56,7.56v31.42 c0,4.15-3.41,7.56-7.56,7.56h-9.93v13.55c0,1.61-0.65,3.04-1.7,4.1c-1.06,1.06-2.49,1.7-4.1,1.7c-29.44,0-56.59,0-86.18,0 c-1.61,0-3.04-0.64-4.1-1.7c-1.06-1.06-1.7-2.49-1.7-4.1V5.85c0-1.61,0.65-3.04,1.7-4.1c1.06-1.06,2.53-1.7,4.1-1.7h58.72 C64.66,0,64.8,0,64.94,0c0.64,0,1.29,0.28,1.75,0.69h0.09c0.09,0.05,0.14,0.09,0.23,0.18l29.99,30.36c0.51,0.51,0.88,1.2,0.88,1.98 c0,0.23-0.05,0.41-0.09,0.65V57L97.79,57z M67.52,27.97V8.94l21.43,21.7H70.19c-0.74,0-1.38-0.32-1.89-0.78 C67.84,29.4,67.52,28.71,67.52,27.97L67.52,27.97z"}))))},R=i.a.forwardRef(function(e,n){return i.a.createElement(M,N({svgRef:n},e))});t.p;var H=s.a.div(L||(L=Object(d.a)(["\n  max-width: 1100px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n\n  .model-area {\n    display: flex;\n    margin-top: 2rem;\n  }\n\n  a {\n    text-decoration: none;\n    color: white;\n    background: black;\n    padding: 0.5rem;\n    border-radius: 10px;\n    width: 100px;\n    align-self: flex-end;\n    font-size: 0.8rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0.8rem;\n  }\n\n  .label-inputs {\n    display: flex;\n    flex-direction: column;\n\n    p {\n      padding: 1rem;\n      border-radius: 10px;\n      background-color: black;\n      color: white;\n      width: 200px;\n      font-weight: bolder;\n      font-size: 1rem;\n    }\n  }\n\n  .upload-input {\n    background: #0f2027;\n    background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);\n    background: linear-gradient(to right, #2c5364, #203a43, #0f2027);\n\n    color: white;\n    width: 100%;\n    height: 300px;\n    margin-left: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n\n    p {\n      text-align: center;\n    }\n    p:first-child {\n      font-size: 1.5rem;\n      margin-bottom: 1rem;\n    }\n    p:last-child {\n      font-size: 0.8rem;\n    }\n  }\n\n  .upload-image-btns {\n    display: flex;\n    margin-top: 15px;\n\n    a:first-child {\n      background: #ff5151;\n      margin-right: 20px;\n    }\n    a:last-child {\n      background: #77d970;\n    }\n  }\n\n  .upload-file {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    svg {\n      width: 100px;\n      fill: white;\n      margin-bottom: 15px;\n    }\n  }\n  .error {\n    display: block;\n    border: 1px solid #ff5151;\n    padding: 0.5rem 0.8rem;\n    text-align: center;\n    color: #ff5151;\n    border-radius: 5px;\n  }\n\n  .upload-completed {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n\n    a {\n      justify-self: center;\n      align-self: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 155px;\n    }\n  }\n"]))),P=function(e){e.showModelFunc;var n,t,a=Object(c.useState)(null),l=Object(m.a)(a,2),r=l[0],o=l[1],u=Object(c.useState)(null),d=Object(m.a)(u,2),s=d[0],p=d[1],f=Object(c.useState)(!1),g=Object(m.a)(f,2),b=g[0],h=g[1],E=Object(c.useState)(!1),x=Object(m.a)(E,2),v=x[0],y=x[1],j=Object(c.useState)(!1),O=Object(m.a)(j,2),w=O[0],k=O[1],S=Object(c.useState)(!1),N=Object(m.a)(S,2),z=N[0],L=N[1],M=Object(c.useState)(!1),P=Object(m.a)(M,2),U=P[0],F=P[1],T=Object(c.useState)(null),I=Object(m.a)(T,2),V=I[0],A=I[1],D=i.a.useRef(null),B=i.a.useRef(null),G="https://firdausthedev-webai.herokuapp.com",J=function(e,n){"1"===e&&n.target.files&&n.target.files.length>0&&o(n.target.files[0]),"2"===e&&n.target.files&&n.target.files.length>0&&p(n.target.files[0])},Z=function(e){"1"===e&&o(null),"2"===e&&p(null)},K=function(e){k(!0);var n="";"1"===e&&(n=r),"2"===e&&(n=s);var t=new FormData;t.append("file",n),t.append("filename",n.name),fetch(G+"/uploadfile",{method:"POST",body:t}).then(function(n){n.json().then(function(n){n.filename,n.success?("1"===e&&h(!0),"2"===e&&(y(!0),F(!1),fetch(G+"/trainmodel/"+r.name+"/"+s.name,{method:"GET"}).then(function(e){e.json().then(function(e){var n=e.filename;A(n),F(!0)})})),k(!1)):(console.log(n),_(),q())})})},W=function(e,n){null==e&&n.current.click()},_=function(){L(!0),setTimeout(function(){L(!1)},3e3)},q=function(){o(null),p(null),k(!1),h(!1),y(!1),F(!1),A(null)};return i.a.createElement(H,null,z&&i.a.createElement("p",{className:"error"},"Error. Something went wrong"),i.a.createElement("div",{className:"model-area"},i.a.createElement("div",{className:"label-inputs"},i.a.createElement("p",null,0==b?"First":"Second"," Label")),null==s&&0==b&&i.a.createElement("div",{className:"upload-input",onClick:function(){return W(r,D)}},i.a.createElement("input",(n={id:"file-upload",type:"file",name:"file",accept:"image/*",style:{display:"none"}},Object(C.a)(n,"accept",".zip"),Object(C.a)(n,"ref",D),Object(C.a)(n,"onChange",function(e){return J("1",e)}),Object(C.a)(n,"onClick",function(e){e.target.value=null}),n)),null==r&&i.a.createElement("div",{className:"upload-info"},i.a.createElement("p",null,"UPLOAD ZIP FILE HERE"),i.a.createElement("p",null,"Accepting .zip file containing 1000 images")),r&&!w&&null==s&&!b&&i.a.createElement("div",{className:"upload-file"},i.a.createElement(R,null),i.a.createElement("p",null,r.name),i.a.createElement("div",{className:"upload-image-btns"},i.a.createElement("a",{onClick:function(e){return Z("1")}},"Clear"),i.a.createElement("a",{onClick:function(){return K("1")}},"Upload"))),w&&i.a.createElement("p",null,"Loading...")),b&&!v&&i.a.createElement("div",{className:"upload-input",onClick:function(){return W(s,B)}},i.a.createElement("input",(t={id:"file-upload",type:"file",name:"file",accept:"image/*",style:{display:"none"}},Object(C.a)(t,"accept",".zip"),Object(C.a)(t,"ref",B),Object(C.a)(t,"onChange",function(e){return J("2",e)}),Object(C.a)(t,"onClick",function(e){e.target.value=null}),t)),null==s&&i.a.createElement("div",{className:"upload-info"},i.a.createElement("p",null,"UPLOAD ZIP FILE HERE"),i.a.createElement("p",null,"Accepting .zip file containing 1000 images")),s&&!w&&!v&&i.a.createElement("div",{className:"upload-file"},i.a.createElement(R,null),i.a.createElement("p",null,s.name),i.a.createElement("div",{className:"upload-image-btns"},i.a.createElement("a",{onClick:function(e){return Z("2")}},"Clear"),i.a.createElement("a",{onClick:function(){return K("2")}},"Upload"))),w&&i.a.createElement("p",null,"Loading...")),v&&!U&&i.a.createElement("div",{className:"upload-input"},i.a.createElement("div",{className:"upload-file"},i.a.createElement("p",null,"Training model.."),i.a.createElement("p",null,"This might take a while.."))),v&&U&&i.a.createElement("div",{className:"upload-input"},i.a.createElement("div",{className:"upload-completed"},i.a.createElement("p",null,"Training completed"),i.a.createElement("a",{onClick:function(){window.location.href=G+"/getmodel/"+V,q()}},"Download Model")))))},U=function(){var e=Object(c.useState)(!1),n=Object(m.a)(e,2),t=n[0],a=n[1],l=function(e){a(!e)};return i.a.createElement("div",null,i.a.createElement(g,{showModelFunc:l,showModelUpload:t}),t?i.a.createElement(P,{showModelFunc:l}):i.a.createElement(k,null))};u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(U,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.4c73cad4.chunk.js.map