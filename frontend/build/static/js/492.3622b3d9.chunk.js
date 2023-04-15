"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[492],{1099:function(e,t,n){n.r(t);var i=n(4165),a=n(5861),r=n(9439),l=n(2791),s=(n(8055),n(2810)),u=n(1786),o=n(3999),c=n(5094),d=n(9508),p=n(3108),v=n(5434),f=n(9895),h=n(7689),x=n(7212),m=n(184);t.default=function(){var e=(0,d.x)(),t=e.isLoading,n=e.isError,Z=e.clearErrorHandler,g=e.sendRequest,y=(0,c.Z)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),j=(0,r.Z)(y,2),V=j[0],T=j[1],C=(0,l.useContext)(p.V),E=(0,h.s0)(),I=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,(n=new FormData).append("title",V.inputs.title.value),n.append("description",V.inputs.description.value),n.append("address",V.inputs.address.value),n.append("image",V.inputs.image.value),e.next=9,g("http://localhost:5000/api/places","POST",n,{Authorization:"Bearer ".concat(C.token)});case 9:E("/"),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsxs)(l.Fragment,{children:[(0,m.jsx)(v.Z,{error:n,onClear:Z}),t&&(0,m.jsx)(f.Z,{asOverlay:!0}),(0,m.jsxs)("form",{className:"place-form",onSubmit:I,children:[(0,m.jsx)(s.Z,{id:"title",element:"input",type:"text",label:"Title",onInput:T,validators:[(0,u.hg)()],errorText:"Please enter a valid title!"}),(0,m.jsx)(s.Z,{id:"description",element:"textarea",label:"Description",onInput:T,validators:[(0,u.CP)(5)],errorText:"Please enter a valid description! (atleast 5 characters)"}),(0,m.jsx)(s.Z,{id:"address",element:"input",label:"Address",onInput:T,validators:[(0,u.hg)()],errorText:"Please enter a valid address!"}),(0,m.jsx)(x.Z,{onInput:T,errorText:"Please provide an image",id:"image"}),(0,m.jsx)(o.Z,{type:"submit",disabled:!V.isValid,children:"ADD PLACE"})]})]})}},7212:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(9439),a=n(2791),r=n(3999),l=n(184),s=function(e){var t=(0,a.useRef)(),n=(0,a.useState)(),s=(0,i.Z)(n,2),u=s[0],o=s[1],c=(0,a.useState)(),d=(0,i.Z)(c,2),p=d[0],v=d[1],f=(0,a.useState)(!1),h=(0,i.Z)(f,2),x=h[0],m=h[1];(0,a.useEffect)((function(){if(u){var e=new FileReader;e.onload=function(){v(e.result)},e.readAsDataURL(u)}}),[u]);return(0,l.jsxs)("div",{className:"form-control",children:[(0,l.jsx)("input",{id:e.id,style:{display:"none"},type:"file",accept:".jpg, .png, .jpeg",ref:t,onChange:function(t){var n,i=x;t.target.files&&1===t.target.files.length?(n=t.target.files[0],o(n),m(!0),i=!0):(m(!1),i=!1),e.onInput(e.id,n,i)}}),(0,l.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,l.jsx)("div",{className:"image-upload__preview",children:p?(0,l.jsx)("img",{src:p,alt:"preview"}):(0,l.jsx)("p",{children:"Please pick an image."})}),(0,l.jsx)(r.Z,{type:"button",onClick:function(){t.current.click()},children:"PICK IMAGE"}),!x&&(0,l.jsx)("p",{children:e.errorText})]})]})}},2810:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(9439),a=n(1413),r=n(2791),l=n(1786),s=n(184),u=function(e,t){switch(t.type){case"CHANGE":return(0,a.Z)((0,a.Z)({},e),{},{value:t.val,isValid:(0,l.Gu)(t.val,t.validators)});case"TOUCHED":return(0,a.Z)((0,a.Z)({},e),{},{isTouched:!0});default:return e}},o=function(e){var t=(0,r.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=(0,i.Z)(t,2),a=n[0],l=n[1],o=e.onInput,c=e.id,d=a.value,p=a.isValid;(0,r.useEffect)((function(){o(c,d,p)}),[c,d,p,o]);var v=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},f=function(){l({type:"TOUCHED"})},h="input"===e.element?(0,s.jsx)("input",{onChange:v,value:a.value,type:e.type,onBlur:f,placeholder:e.placeholder,id:e.id}):(0,s.jsx)("textarea",{value:a.value,rows:e.rows||3,id:e.id,onBlur:f,onChange:v});return(0,s.jsxs)("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid"),children:[(0,s.jsx)("label",{htmlFor:e.id,children:e.label}),h,!a.isValid&&a.isTouched&&(0,s.jsx)("p",{children:e.errorText})]})}},5094:function(e,t,n){var i=n(9439),a=n(4942),r=n(1413),l=n(2791),s=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var i in e.inputs)e.inputs[i]&&(n=i===t.inputId?n&&t.isValid:n&&e.inputs[i].isValid);return(0,r.Z)((0,r.Z)({},e),{},{inputs:(0,r.Z)((0,r.Z)({},e.inputs),{},(0,a.Z)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}};t.Z=function(e,t){var n=(0,l.useReducer)(s,{inputs:e,isValid:t}),a=(0,i.Z)(n,2),r=a[0],u=a[1];return[r,(0,l.useCallback)((function(e,t,n){u({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),(0,l.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},1786:function(e,t,n){n.d(t,{CP:function(){return o},Gu:function(){return d},Ox:function(){return c},hg:function(){return u}});var i=n(7762),a="REQUIRE",r="MINLENGTH",l="MAXLENGTH",s="EMAIL",u=function(){return{type:a}},o=function(e){return{type:r,val:e}},c=function(){return{type:s}},d=function(e,t){var n,u=!0,o=(0,i.Z)(t);try{for(o.s();!(n=o.n()).done;){var c=n.value;c.type===a&&(u=u&&e.trim().length>0),c.type===r&&(u=u&&e.trim().length>=c.val),c.type===l&&(u=u&&e.trim().length<=c.val),"MIN"===c.type&&(u=u&&+e>=c.val),"MAX"===c.type&&(u=u&&+e<=c.val),c.type===s&&(u=u&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){o.e(d)}finally{o.f()}return u}},8055:function(){}}]);
//# sourceMappingURL=492.3622b3d9.chunk.js.map