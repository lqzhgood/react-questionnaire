"use strict";(self.webpackChunkreact_questionnaire=self.webpackChunkreact_questionnaire||[]).push([[746],{37746:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(29439),c=r(72791),s="FilterableProductTable_container__2JPxg",a=r(80184),i=[{category:"Fruits",price:"$1",stocked:!0,name:"Apple"},{category:"Fruits",price:"$1",stocked:!0,name:"Dragonfruit"},{category:"Fruits",price:"$2",stocked:!1,name:"Passionfruit"},{category:"Vegetables",price:"$2",stocked:!0,name:"Spinach"},{category:"Vegetables",price:"$4",stocked:!1,name:"Pumpkin"},{category:"Vegetables",price:"$1",stocked:!0,name:"Peas"}];function o(e){var t=e.filterText,r=e.inStockOnly,n=e.setFilterText,c=e.setInStockOnly;return(0,a.jsxs)("form",{children:[(0,a.jsx)("input",{type:"text",placeholder:"Search...",value:t,onChange:function(e){return n(e.target.value.toLowerCase().trim())}}),(0,a.jsx)("br",{}),(0,a.jsxs)("label",{htmlFor:"hasStock",children:[(0,a.jsx)("input",{type:"checkbox",id:"hasStock",checked:r,onChange:function(e){return c(e.target.checked)}}),"Only show products in stock"]})]})}function l(e){var t=e.category;return(0,a.jsx)("tr",{children:(0,a.jsx)("th",{colSpan:2,children:t})})}function u(e){var t=e.product;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{style:{color:t.stocked?void 0:"red"},children:t.name}),(0,a.jsx)("td",{children:t.price})]})}function d(e){var t=e.list,r=e.filterText,n=e.inStockOnly,c=[],s=null;return t.forEach((function(e){r&&!e.name.toLowerCase().includes(r)||n&&!e.stocked||(e.category!==s&&(c.push((0,a.jsx)(l,{category:e.category},e.category)),s=e.category),c.push((0,a.jsx)(u,{product:e},e.name)))})),(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Price"})]})}),(0,a.jsx)("tbody",{children:c})]})}var h=function(){var e=(0,c.useState)(""),t=(0,n.Z)(e,2),r=t[0],l=t[1],u=(0,c.useState)(!1),h=(0,n.Z)(u,2),x=h[0],k=h[1];return(0,a.jsxs)("div",{className:s,children:[(0,a.jsx)(o,{filterText:r,inStockOnly:x,setFilterText:l,setInStockOnly:k}),(0,a.jsx)(d,{list:i,filterText:r,inStockOnly:x})]})}}}]);
//# sourceMappingURL=746.66d71e29.chunk.js.map