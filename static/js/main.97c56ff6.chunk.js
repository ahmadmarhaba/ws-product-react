(this["webpackJsonpws-product-react"]=this["webpackJsonpws-product-react"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(8),s=n.n(c),o=(n(17),n(3)),r=n(2),i=(n(18),n(4)),l=n(1);var u=function(){var e="https://vast-glass-iron.glitch.me",t=Object(a.useState)(0),n=Object(r.a)(t,2),c=n[0],s=n[1],u=Object(a.useState)(null),h=Object(r.a)(u,2),j=h[0],b=h[1],p=Object(a.useState)(null),f=Object(r.a)(p,2),d=f[0],O=f[1],v=Object(a.useState)(null),x=Object(r.a)(v,2),g=x[0],m=x[1],y=Object(a.useState)(0),w=Object(r.a)(y,2),C=w[0],S=w[1],E=Object(a.useState)(null),N=Object(r.a)(E,2),D=N[0],L=N[1],I=Object(a.useState)(null),T=Object(r.a)(I,2),k=T[0],B=T[1],F=Object(a.useState)(null),G=Object(r.a)(F,2),H=G[0],z=G[1],A=Object(a.useState)(null),R=Object(r.a)(A,2),V=R[0],J=R[1],P=Object(a.useState)("Line"),_=Object(r.a)(P,2),M=_[0],q=_[1],K=Object(a.useState)(0),Q=Object(r.a)(K,2),U=Q[0],W=Q[1];function X(e){j.forEach((function(e){e.forEach((function(e){e.p.style=""}))}));var t=j.filter((function(t){return t[0].f.includes(e)||t[1].f.toLowerCase().includes(e)||t[2].f.includes(e)||t[3].f.includes(e)})),n=j.filter((function(t){return!t[0].f.includes(e)&&!t[1].f.toLowerCase().includes(e)&&!t[2].f.includes(e)&&!t[3].f.includes(e)}));t.length>0&&O((function(){var a=Object(o.a)(t);return e.length>0&&Object(o.a)(a).forEach((function(e){e.forEach((function(e){e.p.style="background-color:#baff9d;"}))})),[].concat(Object(o.a)(a),Object(o.a)(n))}))}return Object(a.useEffect)((function(){null===H&&fetch(e+"/events/hourly").then((function(e){return e.json()})).then((function(e){var t=[["Date","Events","Hour"]];e.forEach((function(e){t.push([new Date(e.date).toDateString(),parseInt(e.events),e.hour])})),z(t)})),null===V&&fetch(e+"/events/daily").then((function(e){return e.json()})).then((function(e){var t=[["Date","Events"]];e.forEach((function(e){t.push([new Date(e.date).toDateString(),parseInt(e.events)])})),J(t)})),null===D&&fetch(e+"/stats/hourly").then((function(e){return e.json()})).then((function(e){var t=[["date","hour","impressions","clicks","revenue"]];e.forEach((function(e){t.push([new Date(e.date).toDateString(),parseInt(e.hour),parseInt(e.impressions),parseInt(e.clicks),parseInt(e.revenue)])})),L(t)})),null===k&&fetch(e+"/stats/daily").then((function(e){return e.json()})).then((function(e){var t=[["date","impressions","clicks","revenue"]];e.forEach((function(e){t.push([new Date(e.date).toDateString(),parseInt(e.impressions),parseInt(e.clicks),parseInt(e.revenue)])})),B(t)})),null===j&&fetch(e+"/poi").then((function(e){return e.json()})).then((function(e){var t=[],n=[["Lat","Long","Name"]];e.forEach((function(e){t.push([{v:e.poi_id,f:e.poi_id.toString(),p:{style:""}},{v:e.name,f:e.name,p:{style:""}},{v:e.lat,f:e.lat.toString(),p:{style:""}},{v:e.lon,f:e.lon.toString(),p:{style:""}}]),n.push([e.lat,e.lon,e.name])})),O(t),b(t),m(n)}))})),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("ul",{className:"topNav",children:["General Chart Visualization","Data Table","Geo Visualization"].map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)("input",{type:"button",value:e,className:c===t?"selectedButton":"",onClick:function(){s(t)}})},t)}))}),0===c&&Object(l.jsxs)("div",{children:[Object(l.jsxs)("ul",{className:"leftNav",children:[Object(l.jsxs)("li",{children:[Object(l.jsxs)("label",{className:0===C?"selectedButton":"",children:[Object(l.jsx)("input",{type:"radio",value:0,name:"dataType",onChange:function(e){S(0)}})," Events"]}),Object(l.jsxs)("label",{className:1===C?"selectedButton":"",children:[Object(l.jsx)("input",{type:"radio",value:1,name:"dataType",onChange:function(e){S(1)}})," Stats"]})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),["Line","Bar","LineChart","BarChart"].map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)("input",{type:"button",value:e,className:U===t?"selectedButton":"",onClick:function(){q(e),W(t)}})},t)}))]}),Object(l.jsx)("div",{className:"view",children:1===C?Object(l.jsxs)(l.Fragment,{children:[k&&Object(l.jsx)(i.a,{chartType:M,width:"96%",height:"400px",data:k,options:{explorer:{},chart:{title:"Events Daily"}}}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),H&&Object(l.jsx)(i.a,{chartType:M,width:"96%",height:"400px",data:D,options:{explorer:{},chart:{title:"Events Hourly"}}})]}):Object(l.jsxs)(l.Fragment,{children:[V&&Object(l.jsx)(i.a,{chartType:M,width:"96%",height:"400px",data:V,options:{explorer:{},chart:{title:"Events Daily"}}}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),H&&Object(l.jsx)(i.a,{chartType:M,width:"96%",height:"400px",data:H,options:{explorer:{},chart:{title:"Events Hourly"}}})]})})]}),1===c&&j&&j.length&&Object(l.jsxs)("div",{className:"view noNav",children:[Object(l.jsx)("input",{type:"text",placeholder:"Search here...",onChange:function(e){X(e.target.value.toLowerCase())}}),Object(l.jsx)(i.a,{chartType:"Table",width:"100%",height:"100%",data:[["Id","Name","Latitude","Longitude"]].concat(Object(o.a)(d)),options:{showRowNumber:!1,allowHtml:!0}})]}),2===c&&j&&j.length&&Object(l.jsxs)("div",{className:"view noNav",children:[Object(l.jsx)("input",{type:"text",placeholder:"Search here...",onChange:function(e){X(e.target.value.toLowerCase())}}),Object(l.jsx)(i.a,{chartType:"GeoChart",width:"100%",height:"100%",data:g,options:{region:"CA",displayMode:"markers",colorAxis:{colors:["green","blue"]},backgroundColor:"#81d4fa",datalessRegionColor:"#f3f3f3",geochartVersion:11,resolution:"provinces",tooltip:{showColorCode:!0,trigger:"selection"},magnifyingGlass:{enable:!0,zoomFactor:25},explorer:!0}})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(u,{})),h()}},[[20,1,2]]]);
//# sourceMappingURL=main.97c56ff6.chunk.js.map