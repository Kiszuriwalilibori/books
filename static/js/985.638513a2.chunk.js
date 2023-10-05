"use strict";(self.webpackChunkgoogle_books_finder=self.webpackChunkgoogle_books_finder||[]).push([[985],{4985:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var r=n(1413),i=n(9439),o=n(2791),a=n(7689),s=n(2506),l=(0,n(5229).Z)((function(e){return{root:{display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center",alignItems:"center","& .MuiTextField-root":{margin:"8px",width:"25ch",boxShadow:"0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16),0 8px 8px rgba(0,0,0,0.20);"},"& .MuiInputBase-root":{color:"white !important",fontFamily:"Open Sans, sans-serif !important",backgroundColor:"rgba(122, 194, 33, 0.8)"},"& .MuiFormLabel-root":{color:"white !important",fontFamily:"Montserrat"},"& .MuiOutlinedInput-notchedOutline":{border:"3px solid",borderColor:"rgb(122, 194, 33)!important"}}}})),u=n(948),c=n(9466),d=n(364),f=n(6470),h=n(1219),m=n(5861),p=n(4687),b=n.n(p),x=n(1193),g=n(4467);var v=n(184);var j=(0,d.$j)(null,(function(e){return{fetchFromFavorites:function(){return e(function(){var e=(0,m.Z)(b().mark((function e(t){var n,r;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new x.X4((function(e){return"books#volume"===e.kind})),r={data:x.$$.Run(n.getAllItems())},t((0,g.fetchBooksFromFavorites)(r)),t((0,g.setIsFromNetwork)(!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=(0,a.s0)(),n=e.fetchFromFavorites,r=(0,h.rc)().favorites;return(0,v.jsx)(f.zx,{disabled:!r.containsBooks(),className:"button--favorites",onClick:function(){n(),t(u.Z.books)},children:"Ulubione"})})),k=o.memo((function(){return(0,v.jsx)("header",{className:"search__logo",children:"Google Books Finder"})})),w=n(5987),y=n(1537),Z=["label"];function F(e){e.target.focus()}var T,C=function(e){var t=e.label,n=(0,w.Z)(e,Z);return(0,v.jsx)(f.u,{title:"Nie mniej ni\u017c dwa znaki w tym jeden alfanumeryczny",placement:"top",children:(0,v.jsx)(y.Z,(0,r.Z)({label:t,id:e.name,size:"small",variant:"outlined",onMouseEnter:F},n))})},S=n(871),_=n.n(S),I=n(2809),N=n.n(I),z=function(e){var t={inauthor:e.authors,intitle:e.title,subject:e.subject};return"https://www.googleapis.com/books/v1/volumes?q="+_().flow(_().toPairs,_().filter((function(e){return!(""===e[1])})),_().map((function(e){return N()(e,":")})),_().join("+"))(t)+"&maxResults=40&startIndex="},E=n(5671),A=n(3144),O=n(9714);!function(e){e.authors="Autor",e.title="Tytu\u0142",e.subject="Etykiety"}(T||(T={}));var B,M,R,U=[{name:O.a.authors,placeholder:T.authors},{name:O.a.title,placeholder:T.title},{name:O.a.subject,placeholder:T.subject}],V=new(function(){function e(t){(0,E.Z)(this,e),this.fields=void 0,this.fields=t}return(0,A.Z)(e,[{key:"getPlaceholder",value:function(e){return this.fields.filter((function(t){return t.name===e}))[0].placeholder}},{key:"getSearchFieldsWithInitialValues",get:function(){var e={};for(var t in this.fields)e[this.fields[t].name]="";return e}},{key:"getFields",get:function(){return this.fields}}]),e}())(U),P=n(7790),H=n.n(P),L=n(6364),W=n.n(L),J=n(4942);!function(e){e.AUTHORS="authors",e.TITLE="title",e.SUBJECT="subject"}(R||(R={}));var $=(B={},(0,J.Z)(B,R.AUTHORS,"Autor"),(0,J.Z)(B,R.TITLE,"Tytu\u0142"),(0,J.Z)(B,R.SUBJECT,"Etykiety"),B),D=(M={},(0,J.Z)(M,R.AUTHORS,""),(0,J.Z)(M,R.TITLE,""),(0,J.Z)(M,R.SUBJECT,""),M),G={isValid:!0,message:""},X=function(e){var t,n=G,r=[],i=H()(e);if(!W()(i))for(var o in i)if(!1===((t=i[o]).length>=2&&/\d|[A-z]/.test(t))){var a=V.getPlaceholder(o);n={isValid:!1,message:"Nieprawid\u0142owe dane w polu "+a},r.push(a)}return!1===n.isValid&&(n.message="Nieprawid\u0142owe warto\u015bci w polach: "+r.join(", ")),n},q=n(5374),K=function(){var e=l(),t=o.useState(G),n=(0,i.Z)(t,2),d=n[0],h=n[1],m=(0,a.s0)(),p=(0,q.l)(),b=(0,s.TA)({initialValues:D,onSubmit:function(e){var t=X(e);h(t),t.isValid&&(m(u.Z.connecting),p(z(e)))}}),x=b.values,g=b.handleSubmit,w=b.getFieldProps,y=b.handleReset,Z=o.useCallback((function(){return""===Object.values(x).join("")}),[x]),F=o.useCallback((function(){h(G),y(null)}),[]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.X8,{label:"Search Page"}),(0,v.jsxs)(c.Z,{maxWidth:!1,disableGutters:!0,sx:{alignItems:"unset"},children:[(0,v.jsx)(k,{}),(0,v.jsx)(f.bZ,{shouldRender:!d.isValid,alertMessage:d.message}),(0,v.jsxs)("form",{className:e.root,id:"search__form",children:[(0,v.jsx)("div",{className:"search__inputs",children:Object.values(R).map((function(e){return(0,v.jsx)(C,(0,r.Z)({label:$[e]},w(e)),e)}))}),(0,v.jsxs)("div",{className:"search__buttons",children:[(0,v.jsx)(f.zx,{form:"search__form",disabled:Z(),onClick:g,className:"button--ok",type:"submit",children:"Szukaj"}),(0,v.jsx)(f.zx,{disabled:Z(),onClick:F,className:"button--problem",type:"reset",children:"Wyczy\u015b\u0107"}),(0,v.jsx)(j,{})]})]})]})]})}},9466:function(e,t,n){var r=n(6934),i=n(1614),o=(0,r.ZP)(i.Z)((function(e){e.theme;return{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}));t.Z=o}}]);
//# sourceMappingURL=985.638513a2.chunk.js.map