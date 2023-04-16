"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[400],{6925:function(e,t,n){n.r(t);var i=n(4165),a=n(5861),r=n(9439),l=n(2791),s=n(7689),u=n(3999),c=n(2810),o=n(5434),d=n(9895),p=(n(8055),n(1786)),v=n(5094),f=n(3108),h=n(3373),x=n(9508),Z=n(184);t.default=function(){var e=(0,x.x)(),t=e.isLoading,n=e.isError,y=e.clearErrorHandler,V=e.sendRequest,m=(0,l.useState)(),T=(0,r.Z)(m,2),C=T[0],E=T[1],j=(0,s.UO)().placeId,N=(0,l.useContext)(f.V),I=(0,s.s0)(),A=(0,v.Z)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),b=(0,r.Z)(A,3),g=b[0],k=b[1],w=b[2];(0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("http://localhost:5000/api/places/".concat(j));case 3:t=e.sent,E(t),w({title:{value:t.title,isValid:!0},description:{value:t.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[V,j,w]);var H=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,V("http://localhost:5000/api/places/".concat(j),"PATCH",JSON.stringify({title:g.inputs.title.value,description:g.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer ".concat(N.token)});case 4:I("/".concat(N.userId,"/places")),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return t?(0,Z.jsx)("div",{className:"center",children:(0,Z.jsx)(d.Z,{})}):!C&&n?(0,Z.jsx)("div",{className:"center",style:{marginTop:"1rem"},children:(0,Z.jsx)(h.Z,{children:(0,Z.jsx)("h2",{children:"Could not find this place!"})})}):(0,Z.jsxs)(l.Fragment,{children:[(0,Z.jsx)(o.Z,{error:n,onClear:y}),!t&&C&&(0,Z.jsxs)("form",{className:"place-form",onSubmit:H,children:[(0,Z.jsx)(c.Z,{id:"title",type:"text",label:"Title",element:"input",validators:[(0,p.hg)()],initialValue:C.title,initialValid:!0,errorText:"Please enter a valid title!",onInput:k}),(0,Z.jsx)(c.Z,{id:"description",label:"Description",element:"textarea",validators:[(0,p.CP)(5)],initialValue:C.description,initialValid:!0,errorText:"Please enter a valid description! (atleast 5 characters)",onInput:k}),(0,Z.jsx)(u.Z,{type:"submit",disabled:!g.isValid,children:"UPDATE PLACE"})]})]})}},2810:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(9439),a=n(1413),r=n(2791),l=n(1786),s=n(184),u=function(e,t){switch(t.type){case"CHANGE":return(0,a.Z)((0,a.Z)({},e),{},{value:t.val,isValid:(0,l.Gu)(t.val,t.validators)});case"TOUCHED":return(0,a.Z)((0,a.Z)({},e),{},{isTouched:!0});default:return e}},c=function(e){var t=(0,r.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=(0,i.Z)(t,2),a=n[0],l=n[1],c=e.onInput,o=e.id,d=a.value,p=a.isValid;(0,r.useEffect)((function(){c(o,d,p)}),[o,d,p,c]);var v=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},f=function(){l({type:"TOUCHED"})},h="input"===e.element?(0,s.jsx)("input",{onChange:v,value:a.value,type:e.type,onBlur:f,placeholder:e.placeholder,id:e.id}):(0,s.jsx)("textarea",{value:a.value,rows:e.rows||3,id:e.id,onBlur:f,onChange:v});return(0,s.jsxs)("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid"),children:[(0,s.jsx)("label",{htmlFor:e.id,children:e.label}),h,!a.isValid&&a.isTouched&&(0,s.jsx)("p",{children:e.errorText})]})}},3373:function(e,t,n){n.d(t,{Z:function(){return a}});n(2791);var i=n(184),a=function(e){return(0,i.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},5094:function(e,t,n){var i=n(9439),a=n(4942),r=n(1413),l=n(2791),s=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var i in e.inputs)e.inputs[i]&&(n=i===t.inputId?n&&t.isValid:n&&e.inputs[i].isValid);return(0,r.Z)((0,r.Z)({},e),{},{inputs:(0,r.Z)((0,r.Z)({},e.inputs),{},(0,a.Z)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}};t.Z=function(e,t){var n=(0,l.useReducer)(s,{inputs:e,isValid:t}),a=(0,i.Z)(n,2),r=a[0],u=a[1];return[r,(0,l.useCallback)((function(e,t,n){u({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),(0,l.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},1786:function(e,t,n){n.d(t,{CP:function(){return c},Gu:function(){return d},Ox:function(){return o},hg:function(){return u}});var i=n(7762),a="REQUIRE",r="MINLENGTH",l="MAXLENGTH",s="EMAIL",u=function(){return{type:a}},c=function(e){return{type:r,val:e}},o=function(){return{type:s}},d=function(e,t){var n,u=!0,c=(0,i.Z)(t);try{for(c.s();!(n=c.n()).done;){var o=n.value;o.type===a&&(u=u&&e.trim().length>0),o.type===r&&(u=u&&e.trim().length>=o.val),o.type===l&&(u=u&&e.trim().length<=o.val),"MIN"===o.type&&(u=u&&+e>=o.val),"MAX"===o.type&&(u=u&&+e<=o.val),o.type===s&&(u=u&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){c.e(d)}finally{c.f()}return u}},8055:function(){}}]);
//# sourceMappingURL=400.d566e2a2.chunk.js.map