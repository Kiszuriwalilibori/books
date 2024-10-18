"use strict";(self.webpackChunkbooks=self.webpackChunkbooks||[]).push([[783],{8783:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var i=n(9379),r=n(5544),o=n(5043),s=n(8222),a=n.n(s),u=n(7508),l=n(3516),c=n(3216),d=n(7861),f=n(5664),h=n(7309),b=n(9668),m=n(8049),v=n(4558);var k=n(579);var w=(0,u.Ng)((function(e){return{isLoading:e.loading.isLoading}}),(function(e){return{fetchFromFavorites:function(){return e((function(e){try{var t=new b.v_((function(e){return e.kind===v.XI})).getAll();e((0,m.storeBooks)(t)),e((0,m.setIsFromNetwork)(!1))}catch(i){var n=i instanceof Error?i.message:"Podczas pr\xf3by pobrania ulubionych wyst\u0105pi\u0142 b\u0142\u0105d";e((0,m.showError)({isError:!0,errorMessage:n}))}}))}}}))((function(e){var t=(0,c.Zp)(),n=e.fetchFromFavorites,i=e.isLoading,r=(0,h.cs)().favoriteBooks;return(0,k.jsx)(f.$n,{disabled:!r.areNotEmpty()||i,className:"button--favorites",onClick:function(){n(),t(d.A.books)},children:"Ulubione"})})),p=n(45),j=n(8780),g=["isDisabled","label","name"];function y(e){e.target.focus()}var A,x=function(e){var t=e.isDisabled,n=e.label,r=e.name,o=(0,p.A)(e,g);return(0,k.jsx)(f.m_,{role:"tooltip",title:"Nie mniej ni\u017c dwa znaki w tym jeden alfanumeryczny",placement:"top",children:(0,k.jsx)(j.A,(0,i.A)({disabled:t,"aria-label":"input field for ".concat(r," field"),label:n,id:r,size:"small",variant:"outlined",onMouseEnter:y},o))})},E=n(3555),C=n.n(E),S=n(6665),T=n.n(S),N="https://www.googleapis.com/books/v1/volumes?q=",F="&maxResults=40",R="&startIndex=",L=function(e){return N+e.keyword+F+v.MD+R},O=function(e){var t={inauthor:e.authors,intitle:e.title,subject:e.subject},n=C().flow(C().toPairs,C().filter((function(e){return!(""===e[1])})),C().map((function(e){return T()(e,":")})),C().join("+"));return N+n(t)+F+v.MD+R},z=function(e){return e.keyword?L(e):O(e)},D=n(3029),I=n(2901),W=n(6408);!function(e){e.authors="Autor",e.title="Tytu\u0142",e.subject="Etykiety"}(A||(A={}));var M,U,V,P=[{name:W.C.authors,placeholder:A.authors},{name:W.C.title,placeholder:A.title},{name:W.C.subject,placeholder:A.subject}],B=new(function(){function e(t){(0,D.A)(this,e),this.fields=void 0,this.fields=t}return(0,I.A)(e,[{key:"getPlaceholder",value:function(e){return this.fields.filter((function(t){return t.name===e}))[0].placeholder}},{key:"getSearchFieldsWithInitialValues",get:function(){var e={};for(var t in this.fields)e[this.fields[t].name]="";return e}},{key:"getFields",get:function(){return this.fields}}]),e}())(P),J=n(7273),Y=n.n(J),H=n(4320),K=n.n(H),$=n(4467);!function(e){e.KEYWORD="keyword",e.AUTHORS="authors",e.TITLE="title",e.SUBJECT="subject"}(V||(V={}));var q=(M={},(0,$.A)(M,V.AUTHORS,"Autor"),(0,$.A)(M,V.TITLE,"Tytu\u0142"),(0,$.A)(M,V.SUBJECT,"Etykiety"),(0,$.A)(M,V.KEYWORD,"S\u0142owo kluczowe"),M),_=(U={},(0,$.A)(U,V.AUTHORS,""),(0,$.A)(U,V.TITLE,""),(0,$.A)(U,V.SUBJECT,""),(0,$.A)(U,V.KEYWORD,""),U),G={isValid:!0,message:""},X=function(e){var t,n=G,i=[],r=Y()(e);if(!K()(r))for(var o in r)if(!1===((t=r[o]).length>=2&&/\d|[A-z]/.test(t))){var s=B.getPlaceholder(o);n={isValid:!1,message:"Nieprawid\u0142owe dane w polu "+s},i.push(s)}return!1===n.isValid&&(n.message="Nieprawid\u0142owe warto\u015bci w polach: "+i.join(", ")),n},Z=function(e){var t="https://www.googleapis.com/books/v1/volumes?q=",n="&maxResults=1",i={inauthor:e.authors,intitle:e.title,subject:e.subject},r=C().flow(C().toPairs,C().filter((function(e){return!(""===e[1])})),C().map((function(e){return T()(e,":")})),C().join("+"));return e.keyword?t+e.keyword+n:t+r(i)+n},Q=function(e){if(e.keyword){var t=(0,i.A)({},e);for(var n in delete t.keyword,t)t[n]||delete t[n];return t}},ee=n(2606),te=n(2442),ne=function(){var e=a()(),t=o.useState(G),n=(0,r.A)(t,2),s=n[0],c=n[1],d=o.useState(""),b=(0,r.A)(d,2),m=b[0],v=b[1],p=o.useState(""),j=(0,r.A)(p,2),g=j[0],y=j[1],A=(0,h.Jv)(void 0),E=(0,r.A)(A,2),C=E[0],S=E[1],T=(0,h.N4)((function(e){return e.loading.isLoading}),u.bN),N=(0,u.d4)(te.tp),F=(0,h.Yo)(),R=(0,l.Wx)({initialValues:_,onSubmit:function(e){var t=X(e);c(t),t.isValid&&(v(z(e)),y(Z(e)),S(Q(e)))}}),L=R.values,O=R.handleSubmit,D=R.getFieldProps,I=R.handleReset,W=o.useCallback((function(){return""===Object.values(L).join("")}),[L]),M=o.useCallback((function(){c(G),I(null)}),[]);return o.useEffect((function(){var e=new AbortController;return g&&m&&F(g,m,e,C),function(){return null===e||void 0===e?void 0:e.abort()}}),[g,m,C]),(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(ee.LN,{maxWidth:!1,disableGutters:!0,sx:{alignItems:"unset"},children:[(0,k.jsx)(f.M9,{}),(0,k.jsx)(f.Fc,{shouldRender:!s.isValid,alertMessage:s.message}),(0,k.jsxs)(ee.kW,{id:e,children:[(0,k.jsx)(ee.OM,{children:Object.values(V).map((function(e){return(0,k.jsx)(x,(0,i.A)({isDisabled:T,label:q[e]},D(e)),a()())}))}),(0,k.jsxs)(ee.aL,{children:[(0,k.jsx)(f.$n,{form:e,disabled:T||W()||!N,onClick:O,className:"button--ok",type:"submit",children:"Szukaj"}),(0,k.jsx)(f.$n,{disabled:T||W(),onClick:M,className:"button--problem",type:"reset",children:"Wyczy\u015b\u0107"}),(0,k.jsx)(w,{})]})]})]})})}}}]);
//# sourceMappingURL=783.eb26f306.chunk.js.map