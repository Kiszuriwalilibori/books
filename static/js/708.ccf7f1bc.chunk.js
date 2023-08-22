"use strict";(self.webpackChunkgoogle_books_finder=self.webpackChunkgoogle_books_finder||[]).push([[708],{708:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var r=t(1413),o=t(9439),a=t(2791),i=t(364),s=t(7689),u=t(2506),l=t(8033),c=(0,t(5229).Z)((function(e){return{root:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center","& .MuiTextField-root":{margin:"8px",width:"25ch",boxShadow:"0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16),0 8px 8px rgba(0,0,0,0.20);"},"& .MuiInputBase-root":{color:"white !important",fontFamily:"Open Sans, sans-serif !important",backgroundColor:"rgba(122, 194, 33, 0.8)"},"& .MuiFormLabel-root":{color:"white !important",fontFamily:"Montserrat"},"& .MuiOutlinedInput-notchedOutline":{border:"3px solid",borderColor:"rgb(122, 194, 33)!important"}}}})),d=t(948),f=t(369),m=t(6354),b=t(5861),p=t(4687),h=t.n(p),x=t(4467);var v=t(184);var g=(0,i.$j)(null,(function(e){return{fetchFromFavorites:function(){return e(function(){var e=(0,b.Z)(h().mark((function e(n){var t,r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new l.X4((function(e){return"books#volume"===e.kind})),r={data:l.ZB.Run(t.getAllItems())},n((0,x.fetchBooksFromFavorites)(r)),n((0,x.setIsFromNetwork)(!1));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}}}))((function(e){var n=(0,m.EY)(),t=e.fetchFromFavorites,r=(0,m.rc)().favorites;return(0,v.jsx)(f.zx,{disabled:!r.containsBooks(),className:"button--favorites",onClick:function(){t(),n.books()},children:"Ulubione"})})),j=a.memo((function(){return(0,v.jsx)("header",{className:"search__logo",children:"Google Books Finder"})})),w=t(5987),k=t(1537),Z=["label"];function y(e){e.target.focus()}var T,C,F,S=function(e){var n=e.label,t=(0,w.Z)(e,Z);return(0,v.jsx)(f.u,{title:"Nie mniej ni\u017c dwa znaki w tym jeden alfanumeryczny",arrow:!0,children:(0,v.jsx)(k.Z,(0,r.Z)({label:n,id:e.name,size:"small",variant:"outlined",onMouseEnter:y},t))})},_=t(871),z=t.n(_),I=t(2809),N=t.n(I),E=function(e){return"https://www.googleapis.com/books/v1/volumes?q="+z().flow(z().toPairs,z().filter((function(e){return!(""===e[1])})),z().map((function(e){return N()(e,":")})),z().join("+"))(e)+"&maxResults=40&startIndex="},O=function(e){return{inauthor:e.authors,intitle:e.title,subject:e.subject}},A=t(7790),B=t.n(A),M=t(6364),U=t.n(M),R=t(4942);!function(e){e.AUTHORS="authors",e.TITLE="title",e.SUBJECT="subject"}(F||(F={}));var H=(T={},(0,R.Z)(T,F.AUTHORS,"Autor"),(0,R.Z)(T,F.TITLE,"Tytu\u0142"),(0,R.Z)(T,F.SUBJECT,"Etykiety"),T),L=(C={},(0,R.Z)(C,F.AUTHORS,""),(0,R.Z)(C,F.TITLE,""),(0,R.Z)(C,F.SUBJECT,""),C),P={valid:!0,message:""},J=function(e){var n,t=P,r=[],o=B()(e);if(!U()(o))for(var a in o)if(!1===((n=o[a]).length>=2&&/\d|[A-z]/.test(n))){var i=l.HO.getPlaceholder(a);t={valid:!1,message:"Nieprawid\u0142owe dane w polu "+i},r.push(i)}return!1===t.valid&&(t.message="Nieprawid\u0142owe warto\u015bci w polach: "+r.join(", ")),t},W=t(3402),G=(0,i.$j)(null,null)((0,W.mP)((function(){var e=c(),n=a.useState(P),t=(0,o.Z)(n,2),i=t[0],m=t[1],b=(0,s.s0)(),p=a.useMemo((0,l.bI)(b),[b]),h=(0,u.TA)({initialValues:L,onSubmit:function(e){var n=J(e);m(n),n.valid&&(b(d.Z.connecting),(0,l.wA)(E(O(e)),p))}}),x=h.values,w=h.handleSubmit,k=h.getFieldProps,Z=h.handleReset,y=a.useCallback((function(){return""===Object.values(x).join("")}),[x]),T=a.useCallback((function(){m(P),Z(null)}),[]);return(0,v.jsxs)(f._z,{maxWidth:!1,disableGutters:!0,sx:{alignItems:"unset"},children:[(0,v.jsx)(j,{}),(0,v.jsx)(f.bZ,{renderCondition:!i.valid,message:i.message}),(0,v.jsx)("form",{className:e.root,id:"search__form",children:Object.values(F).map((function(e){return(0,v.jsx)(S,(0,r.Z)({label:H[e]},k(e)),e)}))}),(0,v.jsxs)("div",{className:"search__buttons",children:[(0,v.jsx)(f.zx,{disabled:y(),onClick:w,className:"button--ok",type:"submit",children:"Szukaj"}),(0,v.jsx)(f.zx,{disabled:y(),onClick:T,className:"button--problem",type:"reset",children:"Wyczy\u015b\u0107"}),(0,v.jsx)(g,{})]})]})})))}}]);
//# sourceMappingURL=708.ccf7f1bc.chunk.js.map