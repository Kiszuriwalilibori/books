"use strict";(self.webpackChunkgoogle_books_finder=self.webpackChunkgoogle_books_finder||[]).push([[402],{3402:function(n,r,e){e.d(r,{dk:function(){return c},T5:function(){return s},mP:function(){return l},Ur:function(){return d},GG:function(){return v}});e(2791);var t=e(6561),o=e(184);new t.S;var i=e(1413),a=e(7475);var c=function(n){return function(r){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Xm,{}),(0,o.jsx)(n,(0,i.Z)({},r))]})}},u=e(4717);var s=function(n){return function(r){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,(0,i.Z)({},r)),(0,o.jsx)(u.z5,{})]})}};var l=function(n){return function(r){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.dM,{}),(0,o.jsx)(n,(0,i.Z)({},r))]})}};var d=function(n){return function(r){return(0,o.jsx)("div",{className:"table__container",children:(0,o.jsx)(n,(0,i.Z)({},r))})}},f=e(1087),x=e(948);var v=function(n){return function(r){return(0,o.jsx)(f.rU,{to:x.Z.search,style:{textDecoration:"none"},children:(0,o.jsx)(n,(0,i.Z)({},r))})}}},4717:function(n,r,e){e.d(r,{SB:function(){return T},my:function(){return O},vx:function(){return A},z5:function(){return U}});var t=e(364),o=e(5787),i=e(1537),a=(0,o.Z)({root:{caretColor:"black",backgroundColor:"#FFDD40","& input":{color:"black"},"& .MuiFormLabel-root":{fontSize:"11px",maxWidth:"90%",whiteSpace:"normal",color:"black",marginLeft:"-6px","@media only screen and (max-width: 640px)":{fontSize:"calc(8px + 3 * ((100vw - 320px) / 320))"}},"& .MuiOutlinedInput-notchedOutline":{border:"1px solid #FFDD40",borderColor:"#FFDD40 !important"}}})(i.Z),c=e(3433),u=e(6666),s=e.n(u),l=e(184),d=function(n){var r=n.textContent;return(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"cell-regular",children:r})})},f=e(8747),x=e(6969),v=e(5861),h=e(4687),p=e.n(h),j=e(9478),m=e(4467),k=e(8033),g=function(n){var r=n.id,e=n.type,t=n.clickHandler,o=k.EK.createIconButton(e),i=k.EK.createIconButtonImage(e),a=k.EK.getTooltipText(e),c=k.EK.getItemProp(e),u=k.EK.getAriaLabel(e);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o,{"aria-label":u,itemProp:c,"data-content":r,onClick:t,className:"tooltip",children:[(0,l.jsx)("span",{className:"tooltiptext",children:a}),(0,l.jsx)(i,{})]})})},b=(0,t.$j)(null,(function(n){return{thunkAddBookToFavorites:function(r){var e=r.redirect,t=r.id,o=r.favorites;return n(function(n){var r=n.redirect,e=n.id,t=n.favorites;return function(){var n=(0,v.Z)(p().mark((function n(o,i){var a;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=j.i_+e,fetch(a).then((function(n){return n.json()})).then((function(n){if(n)try{t.add(e,n),o((0,m.toggleSnackBar)((0,k.QO)("addedToFavorites",n.volumeInfo.title)))}catch(i){o((0,m.showError)({isError:!0,errorMessage:"An attempt to add item to local storage caused error"})),r.error()}else r.not_found()})).catch((function(n){var e={isError:!0,errorMessage:n.message};o((0,m.showError)(e)),r.error()}));case 2:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}()}({redirect:e,id:t,favorites:o}))}}}))((function(n){var r=n.id,e=n.thunkAddBookToFavorites,t=(0,x.EY)(),o=(0,x.rc)().favorites,i=(0,x.R_)(e,{redirect:t,favorites:o});return(0,l.jsx)(g,{type:"addToFavorites",id:r,clickHandler:function(n){return i(n.target)}})})),C=function(n){var r=n.id,e=(0,x.EY)(),t=(0,x.R_)(k.Bj,{redirect:e});return(0,l.jsx)(g,{type:"goToShop",id:r,clickHandler:function(n){t(n.target)}})},F=e(3727),w=function(n){var r=n.id,e=(0,F.wQ)().openModal,t=(0,x.R_)(e);return(0,l.jsx)(g,{type:"removeBook",id:r,clickHandler:function(n){t(n.target)}})},y=e(8573),B=e.n(y),_=e(2791),Z=function(n){var r=n.id,e=(0,x.WZ)().removeBook,t=(0,x.rc)().favorites,o=_.useCallback(B()((function(n){var r,o,i=null===n||void 0===n||null===(r=n.closest("button"))||void 0===r||null===(o=r.dataset)||void 0===o?void 0:o.content;i&&(t.remove(i),e({id:i}))}),200),[e]);return(0,l.jsx)(g,{type:"removeBookFromFavorites",id:r,clickHandler:function(n){return o(n.target)}})},z=function(n){var r=n.redirect,e=n.id;return function(){var n=(0,v.Z)(p().mark((function n(t){var o;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=j.i_+e,t((0,m.fetchDetails)(o)),r.individualBook();case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},E=(0,t.$j)(null,(function(n){return{thunkFetchIndividualBook:function(r){var e=r.redirect,t=r.id;n(z({redirect:e,id:t}))}}}))((function(n){var r=n.id,e=n.thunkFetchIndividualBook,t=(0,x.EY)(),o=(0,x.R_)(e,{redirect:t});return(0,l.jsx)(g,{type:"showFullInfo",id:r,clickHandler:function(n){o(n.target)}})})),I=(0,t.$j)((function(n){return{isFromFavorites:!n.dataSource.isNetwork}}),{})((function(n){var r=n.textContent,e=n.bookID,o=n.isFromFavorites,i=n.title,a=(0,t.v9)(f.n8);return(0,l.jsx)("td",{role:"group","aria-label":"language and options for book ".concat(i),children:(0,l.jsxs)("div",{className:"cell-withButtons",children:[(0,l.jsx)("span",{children:r}),(0,l.jsx)(C,{id:e}),(0,l.jsx)(w,{id:e}),(0,l.jsx)(E,{id:e}),a&&(0,l.jsx)(b,{id:e}),o&&(0,l.jsx)(Z,{id:e})]})},s()())})),D=e(4489),N=function(n,r,e){var t=(0,c.Z)(e),o=t.pop();return D.z.withButtons[r]?(0,l.jsx)(I,{title:t[0],textContent:n,index:r,bookID:o},s()()):function(n,r){return n===r.length-1}(r,e)?null:(0,l.jsx)(d,{textContent:n},s()())},S=function(n){return n.map((function(n,r){return(0,l.jsx)("tr",{children:n.map(N)},r)}))},T=(0,t.$j)((function(n){return{pageContent:n.books.currentPageBooksData}}),{})((function(n){var r=n.pageContent;return r&&r.length?(0,l.jsx)("tbody",{children:S(r)}):null})),M=e(1413),H=e(1134),R=function(){var n=(0,F.pC)().areFiltersVisible,r=(0,H.cI)(),e=r.register,t=r.getValues,o=(0,x.WZ)().filterBooks;return n?(0,l.jsx)("tr",{id:"FiltrationArea",children:D.z.headers.map((function(n,r){return(0,l.jsx)("td",{children:(0,l.jsx)(a,(0,M.Z)((0,M.Z)({label:"filtruj po "+n,id:n,size:"small",variant:"outlined",margin:"none"},e(n)),{},{onChange:function(r){e(n).onChange(r),o(function(n){for(var r in n)""===n[r]&&delete n[r];return n}(t()))},onMouseEnter:function(n){n.target.focus()}}))},s()())}))}):null},O=_.memo(R),P=e(7475),A=function(){var n=(0,t.I0)(),r=(0,x.ix)((function(n){return n.books.isSortOrderDescending}),t.wU),e=(0,x.ix)((function(n){return n.books.currentSortColumn}),t.wU),o=_.useCallback((function(r){n({type:"THROTTLED_SORT",payload:r.target.cellIndex})}),[]);return(0,l.jsx)("tr",{onClick:o,children:D.z.headers.map((function(n,t){return(0,l.jsx)(P.u,{title:"Sortuj po "+n,placement:"top-start",children:(0,l.jsx)("th",{role:"columnheader",className:"header__cell ".concat(D.z.classes[t]),children:e===t?" "+n+(o=r,(o?" \u2191":" \u2193")+" "):" "+n+" "})},s()());var o}))})},K=e(5326),U=function(){var n=(0,x.WZ)().removeBook,r=(0,F.wQ)(),e=r.closeModal,t=r.target,o=r.isVisible,i=_.useCallback((function(){t&&n(t),e()}),[t,e,n]),a=_.useCallback((function(){e()}),[e]);return(0,l.jsx)(K.Z,{open:o,"aria-labelledby":"Remove Book Warning","aria-describedby":"modal-modal-description",role:"dialog",children:(0,l.jsxs)("div",{className:"PageContainer",children:[(0,l.jsx)("div",{className:"CustomBox",children:(0,l.jsx)("p",{children:"Jeste\u015b bliski usuni\u0119cia jednej z ksi\u0105\u017cek. Czy na pewno?"})}),(0,l.jsxs)("div",{className:"search__buttons",children:[(0,l.jsx)(P.zx,{onClick:i,className:"button--problem",type:"submit",children:"Usu\u0144"}),(0,l.jsx)(P.zx,{onClick:a,className:"button--ok",type:"reset",children:"Pozostaw"})]})]})})}}}]);
//# sourceMappingURL=402.8f29fa2f.chunk.js.map