"use strict";(self.webpackChunkgoogle_books_finder=self.webpackChunkgoogle_books_finder||[]).push([[467],{8635:function(l,e,i){i.r(e),i.d(e,{default:function(){return u}});var n=i(2791),o=i(5787),a=i(3239),s=(0,o.Z)({root:{color:"rgba(122, 194, 33, 0.8);"}})(a.Z),d=i(369),t=i(184),r=function(){return(0,t.jsx)(d._z,{maxWidth:!1,disableGutters:!0,children:(0,t.jsx)(s,{thickness:5,size:100})})},u=n.memo(r)},7467:function(l,e,i){i.r(e),i.d(e,{default:function(){return T}});var n=i(4569),o=i.n(n),a=i(364),s=i(8404),d=i(6666),t=i.n(d),r=i(184),u=function(l){var e=l.isbnDataArray,i=l.label;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"details__header details__strong",children:i+":\xa0"}),(0,r.jsx)("ul",{className:"details__list list",children:e.map((function(l,e,i){return(0,r.jsxs)("li",{className:"details__item list__item",children:[Object.values(l).map((function(l,e,i){return l+(e===i.length-1?"":":\xa0")})),(n=e,o=i,n===o.length-1?"\xa0":",\xa0")]},t()());var n,o}))}),(0,r.jsx)("br",{})]})},v=function(l){var e=l.node,i=l.callback,n=l.label;return(0,r.jsxs)("p",{className:"details__item",children:[(0,r.jsx)("strong",{className:"details__strong",children:n+": "}),i?i(l.node):e]})},c=function(l){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{className:"details__image",src:l.linkToCover,alt:l.label}),(0,r.jsx)("br",{})]})},f=function(l){var e=l.href,i=l.label;return(0,r.jsx)("a",{className:"details__link",href:e,children:i})},m=function(l){var e=l.node;return(0,r.jsx)("h1",{className:"details__title",children:e})},b=i(8033),h=function(l){var e=l.description;return(0,r.jsxs)("section",{className:"details__description",children:[(0,r.jsx)("h2",{className:"details__strong",children:"Opis"}),(0,r.jsxs)("details",{className:"details__item",children:[(0,r.jsx)("summary",{children:(0,b.H2)(e)}),e.replace("<p>","").replace("</p>","")]})]})},j=i(3433),_=function(l){var e=l.price,i=l.label;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"details__header details__strong",children:i+":\xa0"}),(0,r.jsxs)("p",{className:"details__item list__item",children:[" ",(0,j.Z)(Object.values(e).map((function(l,e,i){return e-1===i.length?l:l+"\xa0"})))]}),(0,r.jsx)("br",{})]})},x=function(l){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"details__header details__strong",children:l.label+":\xa0"}),(0,r.jsx)("ul",{className:"details__list list",children:l.authors.map((function(l,e,i){return(0,r.jsx)("li",{className:"details__item list__item ",children:"object"===typeof l&&null!==l?(0,j.Z)(Object.values(l).map((function(l,e,i){return e===i.length-1?l+"\xa0":l+",\xa0"}))):e===i.length-1?l+"\xa0":l+",\xa0"},t()())}))}),(0,r.jsx)("br",{})]})},k=function(l){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"details__header details__strong",children:l.label+":\xa0"}),(0,r.jsx)("ul",{className:"details__list list",children:l.categories.map((function(l,e,i){return(0,r.jsx)("li",{className:"details__item list__item ",children:"object"===typeof l&&null!==l?(0,j.Z)(Object.values(l).map((function(l,e,i){return e===i.length-1?l+"\xa0":l+",\xa0"}))):e===i.length-1?l+"\xa0":l+",\xa0"},t()())}))}),(0,r.jsx)("br",{})]})},g=function(l){var e="";switch(l){case!0:e="Tak";break;case!1:e="Nie";break;case"BOOK":e="Ksi\u0105\u017cka";break;case"MAGAZINE":e="Magazyn";break;case"ALLOWED":e="Tak";break;case"NOT_ALLOWED":e="Nie";break;case"FOR_SALE":e="Tak";break;case"NOT_FOR_SALE":e="Nie";break;case"ALLOWED_FOR_ACCESSIBILITY":e="Tak";break;default:e="Nie"}return e},I=function(l){var e,i,n,o,a,s,d,t,b,j,I,p,N,y,T,L,O,z,C,D,P,w,A,E,F,S,R,B,W,Z,G,K,J,M,H,U,X,Y,q,Q,V,$,ll,el,il,nl,ol=l.bookData;return(0,r.jsxs)("article",{children:[(null===ol||void 0===ol||null===(e=ol.volumeInfo)||void 0===e?void 0:e.title)&&(0,r.jsx)(m,{node:ol.volumeInfo.title}),(null===ol||void 0===ol||null===(i=ol.volumeInfo)||void 0===i||null===(n=i.imageLinks)||void 0===n||null===(o=n.smallThumbnail)||void 0===o?void 0:o.linkToCover)&&(0,r.jsx)(c,{linkToCover:null===ol||void 0===ol||null===(a=ol.volumeInfo)||void 0===a||null===(s=a.imageLinks)||void 0===s||null===(d=s.smallThumbnail)||void 0===d?void 0:d.linkToCover,label:"zdj\u0119cie ok\u0142adki"}),(null===ol||void 0===ol||null===(t=ol.volumeInfo)||void 0===t||null===(b=t.authors)||void 0===b?void 0:b.length)&&(0,r.jsx)(x,{authors:null===ol||void 0===ol||null===(j=ol.volumeInfo)||void 0===j?void 0:j.authors,label:"Autorzy"}),(null===ol||void 0===ol||null===(I=ol.volumeInfo)||void 0===I?void 0:I.publisher)&&(0,r.jsx)(v,{node:null===ol||void 0===ol||null===(p=ol.volumeInfo)||void 0===p?void 0:p.publisher,label:"Wydawca"}),(null===ol||void 0===ol||null===(N=ol.volumeInfo)||void 0===N?void 0:N.publishedDate)&&(0,r.jsx)(v,{node:null===ol||void 0===ol||null===(y=ol.volumeInfo)||void 0===y?void 0:y.publishedDate,label:"Data wydania"}),(null===ol||void 0===ol||null===(T=ol.volumeInfo)||void 0===T?void 0:T.language)&&(0,r.jsx)(v,{node:null===ol||void 0===ol||null===(L=ol.volumeInfo)||void 0===L?void 0:L.language,label:"J\u0119zyk"}),(null===ol||void 0===ol||null===(O=ol.volumeInfo)||void 0===O?void 0:O.pageCount)&&(0,r.jsx)(v,{node:null===ol||void 0===ol||null===(z=ol.volumeInfo)||void 0===z?void 0:z.pageCount,label:"Stron"}),(null===ol||void 0===ol||null===(C=ol.volumeInfo)||void 0===C||null===(D=C.categories)||void 0===D?void 0:D.length)&&(0,r.jsx)(k,{categories:ol.volumeInfo.categories,label:"Kategorie"}),(null===ol||void 0===ol||null===(P=ol.volumeInfo)||void 0===P||null===(w=P.description)||void 0===w?void 0:w.length)>0&&(0,r.jsx)(h,{description:null===ol||void 0===ol||null===(A=ol.volumeInfo)||void 0===A?void 0:A.description}),(null===ol||void 0===ol||null===(E=ol.volumeInfo)||void 0===E||null===(F=E.industryIdentifiers)||void 0===F?void 0:F.length)&&(0,r.jsx)(u,{isbnDataArray:null===ol||void 0===ol||null===(S=ol.volumeInfo)||void 0===S?void 0:S.industryIdentifiers,label:"ISBN"}),(null===ol||void 0===ol||null===(R=ol.volumeInfo)||void 0===R?void 0:R.printType)&&(0,r.jsx)(v,{node:null===ol||void 0===ol||null===(B=ol.volumeInfo)||void 0===B?void 0:B.printType,label:"Rodzaj druku",callback:g}),(null===ol||void 0===ol||null===(W=ol.saleInfo)||void 0===W?void 0:W.saleability)&&(0,r.jsx)(v,{node:null===ol||void 0===ol||null===(Z=ol.saleInfo)||void 0===Z?void 0:Z.saleability,label:"Dost\u0119pna w sprzeda\u017cy",callback:g}),(null===ol||void 0===ol||null===(G=ol.saleInfo)||void 0===G?void 0:G.isEbook)&&(0,r.jsx)(v,{node:null===ol||void 0===ol||null===(K=ol.saleInfo)||void 0===K?void 0:K.isEbook,label:"Jest e-bookiem",callback:g}),(null===ol||void 0===ol||null===(J=ol.accessInfo)||void 0===J?void 0:J.textToSpeechPermission)&&(0,r.jsx)(v,{node:null===ol||void 0===ol||null===(M=ol.accessInfo)||void 0===M?void 0:M.textToSpeechPermission,label:"Przygotowana do czytnik\xf3w tekstu",callback:g}),(null===ol||void 0===ol||null===(H=ol.saleInfo)||void 0===H?void 0:H.listPrice)&&"object"===typeof(null===ol||void 0===ol||null===(U=ol.saleInfo)||void 0===U?void 0:U.listPrice)&&Object.keys(null===ol||void 0===ol||null===(X=ol.saleInfo)||void 0===X?void 0:X.listPrice).length&&(0,r.jsx)(_,{price:null===ol||void 0===ol||null===(Y=ol.saleInfo)||void 0===Y?void 0:Y.listPrice,label:"Cena katalogowa"}),(null===ol||void 0===ol||null===(q=ol.saleInfo)||void 0===q?void 0:q.retailPrice)&&"object"===typeof(null===ol||void 0===ol||null===(Q=ol.saleInfo)||void 0===Q?void 0:Q.retailPrice)&&Object.keys(null===ol||void 0===ol||null===(V=ol.saleInfo)||void 0===V?void 0:V.retailPrice).length&&(0,r.jsx)(_,{price:null===ol||void 0===ol||null===($=ol.saleInfo)||void 0===$?void 0:$.retailPrice,label:"Cena detaliczna"}),(null===ol||void 0===ol||null===(ll=ol.saleInfo)||void 0===ll?void 0:ll.buyLink)&&(0,r.jsx)(f,{href:null===ol||void 0===ol||null===(el=ol.saleInfo)||void 0===el?void 0:el.buyLink,label:"Do sklepu"}),(null===ol||void 0===ol||null===(il=ol.accessInfo)||void 0===il?void 0:il.webReaderLink)&&(0,r.jsx)(f,{href:null===ol||void 0===ol||null===(nl=ol.accessInfo)||void 0===nl?void 0:nl.webReaderLink,label:"Przeczytaj fragment"})]})},p=i(8635),N=i(369),y=i(8747),T=function(){var l=(0,a.v9)(y.IG),e=(0,s.a)([l],(function(){return o()(l)}),{staleTime:6e4,select:function(l){return l.data}}),i=e.isLoading,n=e.error,d=e.data;return(0,b.s9)()?(0,r.jsx)(N.Bc,{error:"No Internet connection available"}):l?i?(0,r.jsx)(p.default,{}):n?(0,r.jsx)(N.Bc,{error:n.message}):d&&d.volumeInfo?(0,r.jsx)(N._z,{maxWidth:!1,disableGutters:!0,children:(0,r.jsxs)("section",{className:"details-container details",children:[(0,r.jsx)(N.Xm,{}),(0,r.jsx)(I,{bookData:d})]})}):null:(0,r.jsx)(N.Bc,{error:"Nie dostarczono URL szukanej ksi\u0105\u017cki"})}}}]);
//# sourceMappingURL=467.5cdc5ca1.chunk.js.map