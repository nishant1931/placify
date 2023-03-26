"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[814],{8109:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var t=r(4165),c=r(5861),s=r(9439),a=r(2791),i=r(3373),o=r(3999),l=r(5434),d=r(9895),u=r(184),h=function(e){var n=(0,a.useRef)(),r=e.center,t=e.zoom;return(0,a.useEffect)((function(){new window.ol.Map({target:n.current,layers:[new window.ol.layer.Tile({source:new window.ol.source.OSM})],view:new window.ol.View({center:window.ol.proj.fromLonLat([r.lng,r.lat]),zoom:t})})}),[r,t]),(0,u.jsx)("div",{ref:n,className:"map ".concat(e.className),style:e.style})},f=r(2921),p=r(3108),m=r(9508),x=function(e){var n=(0,a.useState)(!1),r=(0,s.Z)(n,2),x=r[0],j=r[1],v=(0,a.useState)(!1),w=(0,s.Z)(v,2),Z=w[0],E=w[1],C=(0,a.useContext)(p.V),_=function(){return j(!1)},N=(0,m.x)(),g=N.isLoading,k=N.isError,y=N.clearErrorHandler,L=N.sendRequest,D=function(){return E(!1)},A=function(){var n=(0,c.Z)((0,t.Z)().mark((function n(){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return E(!1),n.prev=1,n.next=4,L("".concat("http://localhost:5000/api","/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer ".concat(C.token)});case 4:e.onDelete(e.id),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(){return n.apply(this,arguments)}}();return(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)(l.Z,{error:k,onClear:y}),(0,u.jsx)(f.Z,{show:x,onCancel:_,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,u.jsx)(o.Z,{onClick:_,children:"CLOSE"}),children:(0,u.jsx)("div",{className:"map-container",children:(0,u.jsx)(h,{center:e.coordinates,zoom:14})})}),(0,u.jsx)(f.Z,{header:"Are you sure ?",show:Z,onCancel:D,footerClass:"place-item__modal-actions",footer:(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)(o.Z,{inverse:!0,onClick:D,children:"CANCEL"}),(0,u.jsx)(o.Z,{inverse:!0,onClick:A,children:"DELETE"})]}),children:(0,u.jsx)("p",{children:"Are you sure want to proceed and delete this place? This can't be undone thereafter."})}),(0,u.jsx)("li",{className:"place-item",children:(0,u.jsxs)(i.Z,{className:"place-item__content",children:[g&&(0,u.jsx)(d.Z,{asOverlay:!0}),(0,u.jsx)("div",{className:"place-item__image",children:(0,u.jsx)("img",{src:"/".concat(e.image),alt:e.title})}),(0,u.jsxs)("div",{className:"place-item__info",children:[(0,u.jsx)("h2",{children:e.title}),(0,u.jsx)("h3",{children:e.address}),(0,u.jsx)("p",{children:e.description})]}),(0,u.jsxs)("div",{className:"place-item__actions",children:[(0,u.jsx)(o.Z,{inverse:!0,onClick:function(){return j(!0)},children:"VIEW ON MAP"}),C.userId===e.creatorId&&(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)(o.Z,{to:"/places/".concat(e.id),children:"EDIT PLACE"}),(0,u.jsx)(o.Z,{danger:!0,onClick:function(){E(!0)},children:"DELETE PLACE"})]})]})]})})]})},j=function(e){return e.items&&0===e.items.length?(0,u.jsx)("div",{className:"center",children:(0,u.jsx)(i.Z,{children:(0,u.jsx)("h2",{children:"No places found for this user!"})})}):(0,u.jsx)("ul",{className:"place-list",children:e.items.map((function(n){return(0,u.jsx)(x,{id:n._id,image:n.image,title:n.title,description:n.description,address:n.address,creatorId:n.creator,coordinates:n.location,onDelete:e.onDeletePlace},n._id)}))})},v=r(7689),w=function(){var e=(0,a.useState)([]),n=(0,s.Z)(e,2),r=n[0],i=n[1],o=(0,v.UO)().userId,h=(0,m.x)(),f=h.isLoading,p=h.isError,x=h.clearErrorHandler,w=h.sendRequest;(0,a.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w("".concat("http://localhost:5000/api","/places/user/").concat(o));case 3:n=e.sent,i(n.places.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[w,o]);return(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)(l.Z,{error:p,onClear:x}),f&&(0,u.jsx)("div",{className:"center",children:(0,u.jsx)(d.Z,{})}),!f&&r&&(0,u.jsx)(j,{onDeletePlace:function(e){i((function(n){return n.filter((function(n){return n._id!==e}))}))},items:r})]})}},3373:function(e,n,r){r.d(n,{Z:function(){return c}});r(2791);var t=r(184),c=function(e){return(0,t.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}}}]);
//# sourceMappingURL=814.6f85c871.chunk.js.map