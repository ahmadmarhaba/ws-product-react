(this["webpackJsonpws-product-react"]=this["webpackJsonpws-product-react"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(14),s=n.n(a),r=(n(25),n(7)),o=n(3),i=(n(26),n(11)),l=n(16),u=n(17),j=n(1);var h=function(e){return e.children},b=function(){return Object(j.jsxs)("div",{className:"loading",children:[Object(j.jsx)("span",{children:"Loading"}),Object(j.jsx)("img",{src:"/ws-product-react/loading.gif",alt:"..."})]})},d=function(){return Object(j.jsx)("div",{className:"loading error",children:Object(j.jsx)("span",{children:"Too many calls been made. Try again later."})})},p=function(){var e="https://ahmadmarhaba-ws-product-nodejs.herokuapp.com",t=Object(c.useState)(0),n=Object(o.a)(t,2),a=n[0],s=n[1],p=Object(c.useState)(null),O=Object(o.a)(p,2),f=O[0],x=O[1],m=Object(c.useState)(null),g=Object(o.a)(m,2),v=g[0],y=g[1],S=Object(c.useState)(null),E=Object(o.a)(S,2),w=E[0],C=E[1],N=Object(c.useState)(0),I=Object(o.a)(N,2),D=I[0],T=I[1],k=Object(c.useState)(null),L=Object(o.a)(k,2),F=L[0],B=L[1],A=Object(c.useState)(null),M=Object(o.a)(A,2),G=M[0],P=M[1],z=Object(c.useState)(null),H=Object(o.a)(z,2),R=H[0],_=H[1],Z=Object(c.useState)(null),J=Object(o.a)(Z,2),K=J[0],U=J[1],W=Object(c.useState)("Line"),X=Object(o.a)(W,2),Y=X[0],q=X[1],V=Object(c.useState)(0),Q=Object(o.a)(V,2),$=Q[0],ee=Q[1],te=Object(c.useState)(!1),ne=Object(o.a)(te,2),ce=ne[0],ae=ne[1],se=Object(c.useState)(!1),re=Object(o.a)(se,2),oe=re[0],ie=re[1],le=Object(c.useState)(!1),ue=Object(o.a)(le,2),je=ue[0],he=ue[1],be=Object(c.useState)(!1),de=Object(o.a)(be,2),pe=de[0],Oe=de[1],fe=Object(c.useState)(!1),xe=Object(o.a)(fe,2),me=xe[0],ge=xe[1];Object(c.useEffect)((function(){null===R&&fetch(e+"/events/hourly").then((function(e){return e.json()})).then((function(e){if("Error"!==e.response){var t=[["Date","Events","Hour"]];e.forEach((function(e){t.push([new Date(e.date).toDateString(),parseInt(e.events),e.hour])})),_(t)}else ae(!0)})).catch((function(e){console.error(e)}))}),[R]),Object(c.useEffect)((function(){null===K&&fetch(e+"/events/daily").then((function(e){return e.json()})).then((function(e){if("Error"!==e.response){var t=[["Date","Events"]];e.forEach((function(e){t.push([new Date(e.date).toDateString(),parseInt(e.events)])})),U(t)}else ie(!0)})).catch((function(e){console.error(e)}))}),[K]),Object(c.useEffect)((function(){null===F&&fetch(e+"/stats/hourly").then((function(e){return e.json()})).then((function(e){if("Error"!==e.response){var t=[["date","hour","impressions","clicks","revenue"]];e.forEach((function(e){t.push([new Date(e.date).toDateString(),parseInt(e.hour),parseInt(e.impressions),parseInt(e.clicks),parseInt(e.revenue)])})),B(t)}else he(!0)})).catch((function(e){console.error(e)}))}),[F]),Object(c.useEffect)((function(){null===G&&fetch(e+"/stats/daily").then((function(e){return e.json()})).then((function(e){if("Error"!==e.response){var t=[["date","impressions","clicks","revenue"]];e.forEach((function(e){t.push([new Date(e.date).toDateString(),parseInt(e.impressions),parseInt(e.clicks),parseInt(e.revenue)])})),P(t)}else Oe(!0)})).catch((function(e){console.error(e)}))}),[G]),Object(c.useEffect)((function(){null===f&&fetch(e+"/poi").then((function(e){return e.json()})).then((function(e){if("Error"!==e.response){var t=[];e.forEach((function(e){t.push([{v:e.poi_id,f:e.poi_id.toString(),p:{style:""}},{v:e.name,f:e.name,p:{style:""}},{v:e.lat,f:e.lat.toString(),p:{style:""}},{v:e.lon,f:e.lon.toString(),p:{style:""}}])})),y(t),x(t),C(e)}else ge(!0)})).catch((function(e){console.error(e)}))}),[f]);var ve=Object(c.useRef)(),ye=Object(c.useState)(null),Se=Object(o.a)(ye,2),Ee=Se[0],we=Se[1],Ce=Object(c.useState)(10),Ne=Object(o.a)(Ce,2),Ie=Ne[0],De=Ne[1],Te=(null!=w&&w.length>0?w.slice(0,2e3):[]).map((function(e){return{type:"Feature",properties:{cluster:!1,poiId:e.poi_id,name:e.name},geometry:{type:"Point",coordinates:[parseFloat(e.lon),parseFloat(e.lat)]}}})),ke=Object(l.a)({points:Te,bounds:Ee,zoom:Ie,options:{radius:75,maxZoom:20}}),Le=ke.clusters,Fe=ke.supercluster,Be={center:{lat:51.231487,lng:-99.306211},zoom:5};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("ul",{className:"topNav",children:[Object(j.jsx)("li",{children:Object(j.jsx)("span",{children:"WS Product React"})}),["General Charts","Data Table","Geo Map"].map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)("input",{type:"button",value:e,className:a===t?"selectedButton":"",onClick:function(){s(t)}})},t)}))]}),Object(j.jsxs)("div",{className:"view ".concat(0!==a?"noNav":""),children:[0===a&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"leftNav",children:[Object(j.jsx)("h3",{children:"Data Type"}),Object(j.jsxs)("li",{children:[Object(j.jsxs)("label",{className:0===D?"selectedButton":"",children:[Object(j.jsx)("input",{type:"radio",value:0,name:"dataType",onChange:function(e){T(0)}})," Events"]}),Object(j.jsxs)("label",{className:1===D?"selectedButton":"",children:[Object(j.jsx)("input",{type:"radio",value:1,name:"dataType",onChange:function(e){T(1)}})," Stats"]})]}),Object(j.jsx)("h3",{children:"Data Visual"}),["Line","Bar","LineChart","BarChart"].map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)("input",{type:"button",value:e,className:$===t?"selectedButton":"",onClick:function(){q(e),ee(t)}})},t)}))]}),Object(j.jsx)("div",{className:"dataContain",children:1===D?Object(j.jsxs)(j.Fragment,{children:[G?Object(j.jsx)(i.a,{chartType:Y,width:"96%",height:"400px",data:G,options:{explorer:{},chart:{title:"Events Daily"}}}):pe?Object(j.jsx)(d,{}):Object(j.jsx)(b,{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),F?Object(j.jsx)(i.a,{chartType:Y,width:"96%",height:"400px",data:F,options:{explorer:{},chart:{title:"Events Hourly"}}}):je?Object(j.jsx)(d,{}):Object(j.jsx)(b,{})]}):Object(j.jsxs)(j.Fragment,{children:[K?Object(j.jsx)(i.a,{chartType:Y,width:"96%",height:"400px",data:K,options:{explorer:{},chart:{title:"Events Daily"}}}):oe?Object(j.jsx)(d,{}):Object(j.jsx)(b,{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),R?Object(j.jsx)(i.a,{chartType:Y,width:"96%",height:"400px",data:R,options:{explorer:{},chart:{title:"Events Hourly"}}}):ce?Object(j.jsx)(d,{}):Object(j.jsx)(b,{})]})})]}),1===a&&Object(j.jsx)(j.Fragment,{children:f&&f.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"text",placeholder:"Search here...",onChange:function(e){!function(e){f.forEach((function(e){e.forEach((function(e){e.p.style=""}))}));var t=f.filter((function(t){return t[0].f.includes(e)||t[1].f.toLowerCase().includes(e)||t[2].f.includes(e)||t[3].f.includes(e)})),n=f.filter((function(t){return!t[0].f.includes(e)&&!t[1].f.toLowerCase().includes(e)&&!t[2].f.includes(e)&&!t[3].f.includes(e)}));y((function(){var c=Object(r.a)(t);return e.length>0&&Object(r.a)(c).forEach((function(e){e.forEach((function(e){e.p.style="background-color:#baff9d;"}))})),[].concat(Object(r.a)(c),Object(r.a)(n))}))}(e.target.value.toLowerCase())}}),Object(j.jsx)(i.a,{chartType:"Table",width:"100%",height:"100%",data:[["Id","Name","Latitude","Longitude"]].concat(Object(r.a)(v)),options:{showRowNumber:!1,allowHtml:!0}})]}):me?Object(j.jsx)(d,{}):Object(j.jsx)(b,{})}),2===a&&Le&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u.a,{bootstrapURLKeys:{key:"AIzaSyAKm8MCGBPYCd9mwXqXtHYf_vFM2BtglIA"},defaultCenter:Be.center,defaultZoom:Be.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var t=e.map;ve.current=t},onChange:function(e){var t=e.zoom,n=e.bounds;De(t),we([n.nw.lng,n.se.lat,n.se.lng,n.nw.lat])},children:Le.map((function(e){var t=Object(o.a)(e.geometry.coordinates,2),n=t[0],c=t[1],a=e.properties,s=a.cluster,r=a.point_count;return s?Object(j.jsx)(h,{lat:c,lng:n,children:Object(j.jsx)("div",{className:"cluster-marker",style:{width:"".concat(10+r/Te.length*20,"px"),height:"".concat(10+r/Te.length*20,"px")},onClick:function(){var t=Math.min(Fe.getClusterExpansionZoom(e.id),20);ve.current.setZoom(t),ve.current.panTo({lat:c,lng:n})},children:r})},"cluster-".concat(e.id)):Object(j.jsx)(h,{lat:c,lng:n,children:Object(j.jsxs)("button",{className:"poi-marker",children:[Object(j.jsx)("img",{src:"https://img.icons8.com/plasticine/100/000000/place-marker.png",alt:"poi doesn't pay"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:e.properties.name}),Object(j.jsx)("li",{children:"Latitude: "+c}),Object(j.jsx)("li",{children:"Longitude: "+n})]})]})},"poi-".concat(e.properties.poiId))}))})})]}),Object(j.jsx)("div",{className:"footer",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["My Github ",Object(j.jsx)("a",{href:"https://github.com/ahmadmarhaba",children:"Ahmad Marhaba"})," "]}),Object(j.jsxs)("li",{children:["Page ".concat(a+1," / 3")," "]})]})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(p,{})),O()}},[[30,1,2]]]);
//# sourceMappingURL=main.8b2bd6fa.chunk.js.map