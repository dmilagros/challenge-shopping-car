(this["webpackJsonpdriven-challenge"]=this["webpackJsonpdriven-challenge"]||[]).push([[0],{22:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(16),r=n.n(a),s=(n(22),n(5)),o=n(3),u=n.n(o),d=n(6),j=n(4),l=(n(24),n(25),n.p+"static/media/iconAdd.7717d0e8.svg"),b=n.p+"static/media/iconSubtract.f20aa2ac.svg",h=n.p+"static/media/iconDelete.2c79e9ef.svg",x=(n(26),n(0)),O=function(t){var e=t.type,n=t.icon,c=t.textLink,i=t.textButton,a=t.name,r=t.handleClick;return Object(x.jsx)("div",{children:Object(x.jsxs)("button",{className:"link"===e?"link":"button",onClick:r,children:[Object(x.jsxs)("div",{className:"icon-button text-link",children:[n&&Object(x.jsx)("img",{src:n,alt:a}),c&&Object(x.jsxs)("p",{children:[c," "]})]}),i&&Object(x.jsxs)("p",{children:[i," "]})]})})},p=function(t){var e=t.title,n=t.quantity,c=t.totalPerProduct,i=t.image,a=t.handleDecreaseQuantity,r=t.handleIncreaseQuantity,s=t.handleRemoveItem;return Object(x.jsxs)("div",{className:"article",children:[Object(x.jsx)("div",{className:"article-img",children:Object(x.jsx)("img",{src:i,alt:e,width:"80",height:""})}),Object(x.jsxs)("div",{className:"article-description",children:[Object(x.jsxs)("div",{className:"product-description",children:[Object(x.jsx)("p",{children:e}),Object(x.jsx)("h3",{children:"Cantidad"}),Object(x.jsxs)("div",{className:"product-quantity",children:[Object(x.jsx)(O,{type:"link",textButton:"Pagar",icon:b,handleClick:a}),Object(x.jsx)("h2",{children:n}),Object(x.jsx)(O,{type:"link",textButton:"Pagar",icon:l,handleClick:r})]})]}),Object(x.jsxs)("div",{className:"product-price",children:[Object(x.jsx)("p",{children:c}),Object(x.jsx)(O,{type:"link",textLink:"Quitar producto",icon:h,handleClick:s})]})]})]})},m=(n(28),function(t){var e=t.isHidden;return Object(x.jsx)("div",{className:e?"hidden":"divider"})}),f=n(17),v=n.n(f),g=function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("".concat("https://60c6708619aa1e001769f49c.mockapi.io/api","/shopping-cart/list"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=(n(47),function(){return Object(x.jsx)("div",{className:"container-loader",children:Object(x.jsx)("div",{className:"loader"})})});var y=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(0),r=Object(j.a)(a,2),o=r[0],l=r[1],b=Object(c.useState)(40),h=Object(j.a)(b,2),f=h[0],v=h[1],y=Object(c.useState)(!0),N=Object(j.a)(y,2),C=N[0],F=N[1],P=function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F(!0),t.next=3,g();case 3:e=t.sent,i(e.data),setTimeout((function(){F(!1)}),200);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function S(){var t=0;n.forEach((function(e,n){t-=e.price*e.amount})),l(Math.abs(t.toFixed(2)))}function w(){var t=0;n.forEach((function(e,n){t+=e.price*e.amount})),l(Math.abs(t.toFixed(2)))}return Object(c.useEffect)((function(){P()}),[]),Object(c.useEffect)((function(){S(),w()}),[n]),C?Object(x.jsx)(k,{}):Object(x.jsx)("div",{className:"app",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:"Carrito de compras"}),Object(x.jsx)(m,{}),n.length>0?n.map((function(t){return Object(x.jsxs)("div",{children:[Object(x.jsx)(p,{image:t.image,title:t.name,quantity:t.amount,totalPerProduct:"S/.".concat((t.amount*t.price).toFixed(2)),handleDecreaseQuantity:function(){return function(t,e){var c=n.map((function(n){return n.id===t&&n.amount>1?Object(s.a)(Object(s.a)({},n),{},{amount:e-1}):n}));i(c),S()}(t.id,t.amount)},handleIncreaseQuantity:function(){return function(t,e){var c=n.map((function(n){return n.id===t?Object(s.a)(Object(s.a)({},n),{},{amount:e+1}):n}));i(c),w()}(t.id,t.amount)},handleRemoveItem:function(){return function(t){var e=n.filter((function(e){return e.id!==t}));i(e),1===n.length&&v(0)}(t.id)}}),Object(x.jsx)(m,{})]},t.id)})):Object(x.jsx)("p",{className:"empty",children:"Oh no! Tu carrito est\xe1 vac\xedo "}),Object(x.jsxs)("div",{className:"subtotal",children:[Object(x.jsx)("p",{children:"Subtotal:"}),Object(x.jsx)("p",{children:o.toFixed(2)})]}),Object(x.jsx)(m,{isHidden:"true"}),Object(x.jsxs)("div",{className:"envio",children:[Object(x.jsx)("p",{children:"Envio:"}),Object(x.jsxs)("p",{children:[f.toFixed(2)," "]})]}),Object(x.jsx)(m,{}),Object(x.jsxs)("div",{className:"total",children:[Object(x.jsx)("p",{children:"Total:"}),Object(x.jsxs)("p",{children:[(f+o).toFixed(2)," "]})]}),Object(x.jsx)(O,{type:"button",textButton:"Pagar"}),Object(x.jsx)("div",{className:"empty-shopping-cart",children:Object(x.jsx)(O,{type:"link",textLink:"Limpiar carrito",handleClick:function(){i([]),v(0)}})})]})})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),a(t),r(t)}))};r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),N()}},[[48,1,2]]]);
//# sourceMappingURL=main.cb28df3d.chunk.js.map