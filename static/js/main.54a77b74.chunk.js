(this["webpackJsonpws-product-react"]=this["webpackJsonpws-product-react"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(8),o=n.n(a),s=(n(17),n(3)),i=n(2),r=(n(18),n(6)),l=n(1);var u=function(){var t="https://vast-glass-iron.glitch.me",e=Object(c.useState)(0),n=Object(i.a)(e,2),a=n[0],o=n[1],u=Object(c.useState)(null),h=Object(i.a)(u,2),f=h[0],j=h[1],b=Object(c.useState)(null),d=Object(i.a)(b,2),p=d[0],O=d[1],v=Object(c.useState)(null),g=Object(i.a)(v,2),m=g[0],x=g[1],w=Object(c.useState)(null),y=Object(i.a)(w,2),C=y[0],S=y[1],E=Object(c.useState)(null),N=Object(i.a)(E,2),L=N[0],D=N[1],T=Object(c.useState)("Line"),k=Object(i.a)(T,2),B=k[0],F=k[1],I=Object(c.useState)(0),G=Object(i.a)(I,2),z=G[0],A=G[1];function H(t){f.forEach((function(t){t.forEach((function(t){t.p.style=""}))}));var e=f.filter((function(e){return e[0].f.includes(t)||e[1].f.toLowerCase().includes(t)||e[2].f.includes(t)||e[3].f.includes(t)})),n=f.filter((function(e){return!e[0].f.includes(t)&&!e[1].f.toLowerCase().includes(t)&&!e[2].f.includes(t)&&!e[3].f.includes(t)}));e.length>0&&O((function(){var c=Object(s.a)(e);return t.length>0&&Object(s.a)(c).forEach((function(t){t.forEach((function(t){t.p.style="background-color:#baff9d;"}))})),[].concat(Object(s.a)(c),Object(s.a)(n))}))}return Object(c.useEffect)((function(){null===C&&fetch(t+"/events/hourly",{mode:"cors"}).then((function(t){return t.json()})).then((function(t){var e=[["Date","Events","Hour"]];t.forEach((function(t){e.push([new Date(t.date).toDateString(),parseInt(t.events),t.hour])})),S(e)}))}),[C]),Object(c.useEffect)((function(){null===L&&fetch(t+"/events/daily",{mode:"cors"}).then((function(t){return t.json()})).then((function(t){var e=[["Date","Events"]];t.forEach((function(t){e.push([new Date(t.date).toDateString(),parseInt(t.events)])})),D(e)}))}),[L]),Object(c.useEffect)((function(){null===f&&fetch(t+"/poi",{mode:"cors"}).then((function(t){return t.json()})).then((function(t){var e=[],n=[["Lat","Long","Name"]];t.forEach((function(t){e.push([{v:t.poi_id,f:t.poi_id.toString(),p:{style:""}},{v:t.name,f:t.name,p:{style:""}},{v:t.lat,f:t.lat.toString(),p:{style:""}},{v:t.lon,f:t.lon.toString(),p:{style:""}}]),n.push([t.lat,t.lon,t.name])})),O(e),j(e),x(n)}))}),[f]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("ul",{className:"topNav",children:["General Chart Visualization","Data Table","Geo Visualization"].map((function(t,e){return Object(l.jsx)("li",{children:Object(l.jsx)("input",{type:"button",value:t,className:a===e?"selectedButton":"",onClick:function(){o(e)}})},e)}))}),0===a&&Object(l.jsxs)("div",{children:[Object(l.jsx)("ul",{className:"leftNav",children:["Line","Bar","LineChart","BarChart"].map((function(t,e){return Object(l.jsx)("li",{children:Object(l.jsx)("input",{type:"button",value:t,className:z===e?"selectedButton":"",onClick:function(){F(t),A(e)}})},e)}))}),Object(l.jsxs)("div",{className:"view",children:[L&&Object(l.jsx)(r.a,{chartType:B,width:"100%",height:"400px",data:L,options:{chart:{title:"Events Daily"}}}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),C&&Object(l.jsx)(r.a,{chartType:B,width:"100%",height:"400px",data:C,options:{chart:{title:"Events Hourly"}}})]})]}),1===a&&f&&f.length&&Object(l.jsxs)("div",{className:"view noNav",children:[Object(l.jsx)("input",{type:"text",placeholder:"Search here...",onChange:function(t){H(t.target.value.toLowerCase())}}),Object(l.jsx)(r.a,{chartType:"Table",width:"100%",height:"100%",data:[["Id","Name","Latitude","Longitude"]].concat(Object(s.a)(p)),options:{showRowNumber:!1,allowHtml:!0}})]}),2===a&&f&&f.length&&Object(l.jsxs)("div",{className:"view noNav",children:[Object(l.jsx)("input",{type:"text",placeholder:"Search here...",onChange:function(t){H(t.target.value.toLowerCase())}}),Object(l.jsx)(r.a,{chartType:"GeoChart",width:"100%",height:"100%",data:m,options:{region:"CA",displayMode:"markers",colorAxis:{colors:["green","blue"]},backgroundColor:"#81d4fa",datalessRegionColor:"#f3f3f3",geochartVersion:11,resolution:"provinces",tooltip:{showColorCode:!0,trigger:"selection"},magnifyingGlass:{enable:!0,zoomFactor:15},explorer:!0}})]})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),o(t),s(t)}))};o.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(u,{})),h()}},[[20,1,2]]]);
//# sourceMappingURL=main.54a77b74.chunk.js.map