"use strict";(self.webpackChunkgoogle_books_finder=self.webpackChunkgoogle_books_finder||[]).push([[490],{7760:function(e,i,l){l.r(i),l.d(i,{default:function(){return u}});var n=l(2791),s=l(9466),a=l(5787),t=l(3239),o=(0,a.Z)({root:{color:"rgba(122, 194, 33, 0.8);"}})(t.Z),r=l(6470),d=l(184),c=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.X8,{label:"Connecting..."}),(0,d.jsx)(s.Z,{maxWidth:!1,disableGutters:!0,children:(0,d.jsx)(o,{thickness:5,size:100})})]})},u=n.memo(c)},4490:function(e,i,l){l.r(i),l.d(i,{default:function(){return S}});var n=l(1413),s=l(4569),a=l.n(s),t=l(364),o=l(8404),r=l(3426),d=l(6666),c=l.n(d),u=l(184),v=function(e){return e.map((function(e,i,l){return(0,u.jsxs)("li",{className:"details__item list__item",children:[Object.values(e).map((function(e,i,l){return e+(i===l.length-1?"":":\xa0")})),(n=i,s=l,n===s.length-1?"\xa0":",\xa0")]},c()());var n,s}))},b=function(e){var i=e.ISBNData,l=e.label;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{id:"ISBN",className:"details__header details__strong",children:l+":\xa0"}),(0,u.jsx)("ul",{"aria-labelledby":"ISBN",className:"details__list list",children:v(i)}),(0,u.jsx)("br",{})]})},h=function(e){var i=e.node,l=e.preProcess,n=e.label;return(0,u.jsxs)("p",{className:"details__item",children:[(0,u.jsx)("strong",{className:"details__strong",children:n+": "}),l?l(i):i]})},j=function(e){var i=e.linkToCover,l=e.label;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{className:"details__image",src:i,alt:l}),(0,u.jsx)("br",{})]})},m=function(e){var i=e.node;return(0,u.jsx)("h1",{className:"details__title",children:i})},x=l(2791);var g=function(e){var i=e.replace("<p>","").replace("</p>","");return function(e){return e.includes(" ")?e.match(/ /gi).length:0}(i)>5?i.split(" ").slice(0,4).join(" ")+"...":i},_=function(e){var i=e.description,l=(0,x.useMemo)((function(){return g(i)}),[i]);return(0,u.jsxs)("section",{className:"details__description",children:[(0,u.jsx)("h2",{className:"details__strong",children:"Opis"}),(0,u.jsxs)("details",{className:"details__item",children:[(0,u.jsx)("summary",{children:l}),i]})]})},f=l(3433),p=function(e){return(0,f.Z)(Object.values(e).map((function(e,i,l){return i-1===l.length?e:e+"\xa0"})))},k=function(e){var i=e.price,l=e.label;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h3",{className:"details__header details__strong",children:l+":\xa0"}),(0,u.jsxs)("p",{className:"details__item list__item",children:[" ",p(i)]}),(0,u.jsx)("br",{})]})},N=function(e,i,l){return e&&"object"===typeof e?(0,f.Z)(Object.values(e).map((function(e,i,l){return i===l.length-1?e+"\xa0":e+",\xa0"}))):i===l.length-1?e+"\xa0":e+",\xa0"},y=function(e){var i=e.label,l=e.authors;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{id:"authors",className:"details__header details__strong",children:i+":\xa0"}),(0,u.jsx)("ul",{children:l.map((function(e,i,l){return(0,u.jsx)("li",{className:"details__item list__item ",children:N(e,i,l)},c()())}))}),(0,u.jsx)("br",{})]})},I=function(e){var i=e.label,l=e.categories;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{id:"categories",className:"details__header details__strong",children:i+":\xa0"}),(0,u.jsx)("ul",{"aria-labelledby":"categories",className:"details__list list",children:l.map((function(e,i,l){return(0,u.jsx)("li",{className:"details__item list__item ",children:N(e,i,l)},c()())}))}),(0,u.jsx)("br",{})]})},T=function(e){var i="";switch(e){case!0:i="Tak";break;case!1:i="Nie";break;case"BOOK":i="Ksi\u0105\u017cka";break;case"MAGAZINE":i="Magazyn";break;case"ALLOWED":i="Tak";break;case"NOT_ALLOWED":i="Nie";break;case"FOR_SALE":i="Tak";break;case"NOT_FOR_SALE":i="Nie";break;case"ALLOWED_FOR_ACCESSIBILITY":i="Tak";break;default:i="Nie"}return i},P=l(3767),L=function(e){var i,l,n,s,a,t,o,d,c=e.volumeInfo,v=e.saleInfo,x=e.accessInfo;return(0,u.jsxs)("article",{"aria-label":"Book details",children:[(null===c||void 0===c?void 0:c.title)&&(0,u.jsx)(m,{node:c.title}),(null===c||void 0===c||null===(i=c.imageLinks)||void 0===i||null===(l=i.smallThumbnail)||void 0===l?void 0:l.linkToCover)&&(0,u.jsx)(j,{linkToCover:null===c||void 0===c||null===(n=c.imageLinks)||void 0===n||null===(s=n.smallThumbnail)||void 0===s?void 0:s.linkToCover,label:"zdj\u0119cie ok\u0142adki"}),(null===c||void 0===c||null===(a=c.authors)||void 0===a?void 0:a.length)&&(0,u.jsx)(y,{authors:null===c||void 0===c?void 0:c.authors,label:"Autorzy"}),(null===c||void 0===c?void 0:c.publisher)&&(0,u.jsx)(h,{node:null===c||void 0===c?void 0:c.publisher,label:"Wydawca"}),(null===c||void 0===c?void 0:c.publishedDate)&&(0,u.jsx)(h,{node:null===c||void 0===c?void 0:c.publishedDate,label:"Data wydania"}),(null===c||void 0===c?void 0:c.language)&&(0,u.jsx)(h,{node:null===c||void 0===c?void 0:c.language,label:"J\u0119zyk"}),(null===c||void 0===c?void 0:c.pageCount)&&(0,u.jsx)(h,{node:null===c||void 0===c?void 0:c.pageCount,label:"Stron"}),(null===c||void 0===c||null===(t=c.categories)||void 0===t?void 0:t.length)&&(0,u.jsx)(I,{categories:c.categories,label:"Kategorie"}),(null===c||void 0===c||null===(o=c.description)||void 0===o?void 0:o.length)>0&&(0,u.jsx)(_,{description:null===c||void 0===c?void 0:c.description}),(null===c||void 0===c||null===(d=c.industryIdentifiers)||void 0===d?void 0:d.length)&&(0,u.jsx)(b,{ISBNData:null===c||void 0===c?void 0:c.industryIdentifiers,label:"ISBN"}),(null===c||void 0===c?void 0:c.printType)&&(0,u.jsx)(h,{node:null===c||void 0===c?void 0:c.printType,label:"Rodzaj druku",preProcess:T}),(null===v||void 0===v?void 0:v.saleability)&&(0,u.jsx)(h,{node:null===v||void 0===v?void 0:v.saleability,label:"Dost\u0119pna w sprzeda\u017cy",preProcess:T}),(null===v||void 0===v?void 0:v.isEbook)&&(0,u.jsx)(h,{node:null===v||void 0===v?void 0:v.isEbook,label:"Jest e-bookiem",preProcess:T}),(null===x||void 0===x?void 0:x.textToSpeechPermission)&&(0,u.jsx)(h,{node:null===x||void 0===x?void 0:x.textToSpeechPermission,label:"Przygotowana do czytnik\xf3w tekstu",preProcess:T}),(null===v||void 0===v?void 0:v.listPrice)&&"object"===typeof(null===v||void 0===v?void 0:v.listPrice)&&Object.keys(null===v||void 0===v?void 0:v.listPrice).length&&(0,u.jsx)(k,{price:null===v||void 0===v?void 0:v.listPrice,label:"Cena katalogowa"}),(null===v||void 0===v?void 0:v.retailPrice)&&"object"===typeof(null===v||void 0===v?void 0:v.retailPrice)&&Object.keys(null===v||void 0===v?void 0:v.retailPrice).length&&(0,u.jsx)(k,{price:null===v||void 0===v?void 0:v.retailPrice,label:"Cena detaliczna"}),(0,u.jsxs)(P.Z,{spacing:2,sx:{paddingTop:5},children:[(null===v||void 0===v?void 0:v.buyLink)&&(0,u.jsx)("a",{tabIndex:-1,className:"no-text-decoration",href:null===v||void 0===v?void 0:v.buyLink,children:(0,u.jsx)(r.Z,{className:"button--ok button--centered button--no-underline button--long",children:"Do sklepu"})}),(null===x||void 0===x?void 0:x.webReaderLink)&&(0,u.jsx)("a",{tabIndex:-1,className:"no-text-decoration",href:null===x||void 0===x?void 0:x.webReaderLink,children:(0,u.jsx)(r.Z,{className:"button--ok button--centered button--no-underline button--long",children:"Przeczytaj fragment"})})]})]})},O=l(7760),z=l(9466),C=l(1193),Z=l(6470),B=l(8747),S=function(){var e=(0,t.v9)(B.IG),i=(0,o.a)([e],(function(){return a()(e)}),{staleTime:6e4,cacheTime:6e4,select:function(e){return e.data},enabled:Boolean(e)}),l=i.isLoading,s=i.error,r=i.data;return(0,C.s9)()?(0,u.jsx)(Z.Bc,{errorMessage:"No Internet connection available"}):e?l?(0,u.jsx)(O.default,{}):s?(0,u.jsx)(Z.Bc,{errorMessage:s.message}):r&&r.volumeInfo?(0,u.jsx)(z.Z,{maxWidth:!1,disableGutters:!0,children:(0,u.jsxs)("section",{className:"details-container details",children:[(0,u.jsx)(Z.Xm,{}),(0,u.jsx)(L,(0,n.Z)({},r))]})}):null:(0,u.jsx)(Z.Bc,{errorMessage:"Nie dostarczono URL szukanej ksi\u0105\u017cki"})}},9466:function(e,i,l){var n=l(6934),s=l(1614),a=(0,n.ZP)(s.Z)((function(e){e.theme;return{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}));i.Z=a}}]);
//# sourceMappingURL=490.9a001b85.chunk.js.map