"use strict";(self.webpackChunkgoogle_books_finder=self.webpackChunkgoogle_books_finder||[]).push([[508],{508:function(e,i,l){l.r(i),l.d(i,{default:function(){return D}});var n=l(1413),s=l(4569),t=l.n(s),a=l(2003),o=l(364),r=l(8404),d=l(3767),c=l(3426),u=l(6666),v=l.n(u),b=l(184),h=function(e){return e.map((function(e,i,l){return(0,b.jsxs)("li",{className:"details__item list__item",children:[Object.values(e).map((function(e,i,l){return e+(i===l.length-1?"":":\xa0")})),(n=i,s=l,n===s.length-1?"\xa0":",\xa0")]},v()());var n,s}))},j=function(e){var i=e.ISBNData,l=e.label;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("p",{id:"ISBN",className:"details__header details__strong",children:l+":\xa0"}),(0,b.jsx)("ul",{"aria-labelledby":"ISBN",className:"details__list list",children:h(i)}),(0,b.jsx)("br",{})]})},x=function(e){var i=e.content,l=e.preProcess,n=e.label;return(0,b.jsxs)("p",{className:"details__item",children:[(0,b.jsx)("strong",{className:"details__strong",children:n+": "}),l?l(i):i]})},m=function(e){var i=e.linkToCover;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("img",{className:"details__image",src:i,alt:"zdj\u0119cie ok\u0142adki"}),(0,b.jsx)("br",{})]})},g=function(e){var i=e.title;return(0,b.jsx)("h1",{className:"details__title",children:i})},_=l(2791);var p=function(e){var i=e.replace("<p>","").replace("</p>","");return function(e){return e.includes(" ")?e.match(/ /gi).length:0}(i)>5?i.split(" ").slice(0,4).join(" ")+"...":i},k=function(e){var i=e.description,l=(0,_.useMemo)((function(){return p(i)}),[i]);return(0,b.jsxs)("section",{className:"details__description",children:[(0,b.jsx)("h2",{className:"details__strong",children:"Opis"}),(0,b.jsxs)("details",{className:"details__item",children:[(0,b.jsx)("summary",{children:l}),i]})]})},f=l(3433),N=function(e){return(0,f.Z)(Object.values(e).map((function(e,i,l){return i-1===l.length?e:e+"\xa0"})))},y=function(e){var i=e.price,l=e.label;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h3",{className:"details__header details__strong",children:l+":\xa0"}),(0,b.jsxs)("p",{className:"details__item list__item",children:[" ",N(i)]}),(0,b.jsx)("br",{})]})},T=function(e,i,l){return e&&"object"===typeof e?(0,f.Z)(Object.values(e).map((function(e,i,l){return i===l.length-1?e+"\xa0":e+",\xa0"}))):i===l.length-1?e+"\xa0":e+",\xa0"},I=function(e){var i=e.label,l=e.authors;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("p",{id:"authors",className:"details__header details__strong",children:i+":\xa0"}),(0,b.jsx)("ul",{children:l.map((function(e,i,l){return(0,b.jsx)("li",{className:"details__item list__item ",children:T(e,i,l)},v()())}))}),(0,b.jsx)("br",{})]})},L=function(e){var i=e.label,l=e.categories;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("p",{id:"categories",className:"details__header details__strong",children:i+":\xa0"}),(0,b.jsx)("ul",{"aria-labelledby":"categories",className:"details__list list",children:l.map((function(e,i,l){return(0,b.jsx)("li",{className:"details__item list__item ",children:T(e,i,l)},v()())}))}),(0,b.jsx)("br",{})]})},P=function(e){var i="";switch(e){case!0:i="Tak";break;case!1:i="Nie";break;case"BOOK":i="Ksi\u0105\u017cka";break;case"MAGAZINE":i="Magazyn";break;case"ALLOWED":i="Tak";break;case"NOT_ALLOWED":i="Nie";break;case"FOR_SALE":i="Tak";break;case"NOT_FOR_SALE":i="Nie";break;case"ALLOWED_FOR_ACCESSIBILITY":i="Tak";break;default:i="Nie"}return i},O=l(7014),z=function(e){var i,l,n,s,t,a,r,u,v=e.volumeInfo,h=e.saleInfo,_=e.accessInfo,p=(0,o.v9)(O.YW);return console.log(null===_||void 0===_?void 0:_.webReaderLink),(0,b.jsxs)("article",{"aria-label":"Book details",children:[(null===v||void 0===v?void 0:v.title)&&(0,b.jsx)(g,{title:v.title}),(null===v||void 0===v||null===(i=v.imageLinks)||void 0===i||null===(l=i.smallThumbnail)||void 0===l?void 0:l.linkToCover)&&(0,b.jsx)(m,{linkToCover:null===v||void 0===v||null===(n=v.imageLinks)||void 0===n||null===(s=n.smallThumbnail)||void 0===s?void 0:s.linkToCover}),(null===v||void 0===v||null===(t=v.authors)||void 0===t?void 0:t.length)&&(0,b.jsx)(I,{authors:null===v||void 0===v?void 0:v.authors,label:"Autorzy"}),(null===v||void 0===v?void 0:v.publisher)&&(0,b.jsx)(x,{content:null===v||void 0===v?void 0:v.publisher,label:"Wydawca"}),(null===v||void 0===v?void 0:v.publishedDate)&&(0,b.jsx)(x,{content:null===v||void 0===v?void 0:v.publishedDate,label:"Data wydania"}),(null===v||void 0===v?void 0:v.language)&&(0,b.jsx)(x,{content:null===v||void 0===v?void 0:v.language,label:"J\u0119zyk"}),(null===v||void 0===v?void 0:v.pageCount)&&(0,b.jsx)(x,{content:null===v||void 0===v?void 0:v.pageCount,label:"Stron"}),(null===v||void 0===v||null===(a=v.categories)||void 0===a?void 0:a.length)&&(0,b.jsx)(L,{categories:v.categories,label:"Kategorie"}),(null===v||void 0===v||null===(r=v.description)||void 0===r?void 0:r.length)>0&&(0,b.jsx)(k,{description:null===v||void 0===v?void 0:v.description}),(null===v||void 0===v||null===(u=v.industryIdentifiers)||void 0===u?void 0:u.length)&&(0,b.jsx)(j,{ISBNData:null===v||void 0===v?void 0:v.industryIdentifiers,label:"ISBN"}),(null===v||void 0===v?void 0:v.printType)&&(0,b.jsx)(x,{content:null===v||void 0===v?void 0:v.printType,label:"Rodzaj druku",preProcess:P}),(null===h||void 0===h?void 0:h.saleability)&&(0,b.jsx)(x,{content:null===h||void 0===h?void 0:h.saleability,label:"Dost\u0119pna w sprzeda\u017cy",preProcess:P}),(null===h||void 0===h?void 0:h.isEbook)&&(0,b.jsx)(x,{content:null===h||void 0===h?void 0:h.isEbook,label:"Jest e-bookiem",preProcess:P}),(null===_||void 0===_?void 0:_.textToSpeechPermission)&&(0,b.jsx)(x,{content:null===_||void 0===_?void 0:_.textToSpeechPermission,label:"Przygotowana do czytnik\xf3w tekstu",preProcess:P}),(null===h||void 0===h?void 0:h.listPrice)&&"object"===typeof(null===h||void 0===h?void 0:h.listPrice)&&Object.keys(null===h||void 0===h?void 0:h.listPrice).length&&(0,b.jsx)(y,{price:null===h||void 0===h?void 0:h.listPrice,label:"Cena katalogowa"}),(null===h||void 0===h?void 0:h.retailPrice)&&"object"===typeof(null===h||void 0===h?void 0:h.retailPrice)&&Object.keys(null===h||void 0===h?void 0:h.retailPrice).length&&(0,b.jsx)(y,{price:null===h||void 0===h?void 0:h.retailPrice,label:"Cena detaliczna"}),(0,b.jsxs)(d.Z,{spacing:2,sx:{paddingTop:5},children:[(null===h||void 0===h?void 0:h.buyLink)&&(0,b.jsx)("a",{tabIndex:-1,className:"no-text-decoration",href:null===h||void 0===h?void 0:h.buyLink,children:(0,b.jsx)(c.Z,{disabled:!p,className:"button--ok button--centered button--no-underline button--long",children:"Do sklepu"})}),(null===_||void 0===_?void 0:_.webReaderLink)&&(0,b.jsx)("a",{tabIndex:-1,className:"no-text-decoration",href:null===_||void 0===_?void 0:_.webReaderLink,children:(0,b.jsx)(c.Z,{disabled:!p,className:"button--ok button--centered button--no-underline button--long",children:"Przeczytaj fragment"})})]})]})},w=l(6165),B=l(1427),C=l(1774),S=l(8747),D=function(){var e=(0,o.v9)(S.IG),i=(0,r.a)([e],(function(){return t()(e)}),{staleTime:6e4,cacheTime:6e4,select:function(e){return e.data},enabled:Boolean(e)}),l=i.isLoading,s=i.error,d=i.data;return(0,B.s9)()?(0,b.jsx)(C.Bc,{errorMessage:"No Internet connection available"}):e?l?(0,b.jsx)(C.TF,{areDetailsLoading:!0}):s?(0,b.jsx)(C.Bc,{errorMessage:s.message}):d&&d.volumeInfo?(0,b.jsx)(a.Z,{in:!0,children:(0,b.jsx)(w._z,{maxWidth:!1,disableGutters:!0,children:(0,b.jsxs)("section",{className:"details-container details",children:[(0,b.jsx)(C.Xm,{}),(0,b.jsx)(z,(0,n.Z)({},d))]})})}):null:(0,b.jsx)(C.Bc,{errorMessage:"Nie dostarczono URL szukanej ksi\u0105\u017cki"})}}}]);
//# sourceMappingURL=508.1b0da481.chunk.js.map