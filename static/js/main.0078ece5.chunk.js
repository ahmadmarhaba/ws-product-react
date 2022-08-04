(this["webpackJsonpws-product-react"]=this["webpackJsonpws-product-react"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(14),s=n.n(c),r=(n(26),n(7)),o=n(3),i=(n(27),n(11)),l=n(17),u=n(15),j=n(18),h=n(2);var p=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))},d=function(e){return e.children},b=function(){var e="https://vast-glass-iron.glitch.me",t=Object(a.useState)(0),n=Object(o.a)(t,2),c=n[0],s=n[1],b=Object(a.useState)(null),f=Object(o.a)(b,2),O=f[0],v=f[1],m=Object(a.useState)(null),x=Object(o.a)(m,2),g=x[0],y=x[1],w=Object(a.useState)(null),S=Object(o.a)(w,2),C=(S[0],S[1]),E=Object(a.useState)(0),I=Object(o.a)(E,2),N=I[0],L=I[1],D=Object(a.useState)(null),k=Object(o.a)(D,2),T=k[0],F=k[1],B=Object(a.useState)(null),A=Object(o.a)(B,2),z=A[0],G=A[1],H=Object(a.useState)(null),M=Object(o.a)(H,2),P=M[0],R=M[1],_=Object(a.useState)(null),Z=Object(o.a)(_,2),J=Z[0],K=Z[1],U=Object(a.useState)("Line"),W=Object(o.a)(U,2),X=W[0],Y=W[1],q=Object(a.useState)(0),V=Object(o.a)(q,2),Q=V[0],$=V[1];Object(a.useEffect)((function(){null===P&&fetch(e+"/events/hourly").then((function(e){return e.json()})).then((function(e){var t=[["Date","Events","Hour"]];e.forEach((function(e){t.push([new Date(e.date).toDateString(),parseInt(e.events),e.hour])})),R(t)})),null===J&&fetch(e+"/events/daily").then((function(e){return e.json()})).then((function(e){var t=[["Date","Events"]];e.forEach((function(e){t.push([new Date(e.date).toDateString(),parseInt(e.events)])})),K(t)})),null===T&&fetch(e+"/stats/hourly").then((function(e){return e.json()})).then((function(e){var t=[["date","hour","impressions","clicks","revenue"]];e.forEach((function(e){t.push([new Date(e.date).toDateString(),parseInt(e.hour),parseInt(e.impressions),parseInt(e.clicks),parseInt(e.revenue)])})),F(t)})),null===z&&fetch(e+"/stats/daily").then((function(e){return e.json()})).then((function(e){var t=[["date","impressions","clicks","revenue"]];e.forEach((function(e){t.push([new Date(e.date).toDateString(),parseInt(e.impressions),parseInt(e.clicks),parseInt(e.revenue)])})),G(t)})),null===O&&fetch(e+"/poi").then((function(e){return e.json()})).then((function(e){var t=[],n=[];e.forEach((function(e){t.push([{v:e.poi_id,f:e.poi_id.toString(),p:{style:""}},{v:e.name,f:e.name,p:{style:""}},{v:e.lat,f:e.lat.toString(),p:{style:""}},{v:e.lon,f:e.lon.toString(),p:{style:""}}]),n.push([e.lat,e.lon,e.name])})),y(t),v(t),C(n)}))}));var ee=Object(a.useRef)(),te=Object(a.useState)(null),ne=Object(o.a)(te,2),ae=ne[0],ce=ne[1],se=Object(a.useState)(10),re=Object(o.a)(se,2),oe=re[0],ie=re[1],le=Object(u.a)("https://vast-glass-iron.glitch.me/poi",{fetcher:p}),ue=le.data,je=le.error,he=(ue&&!je?ue.slice(0,2e3):[]).map((function(e){return{type:"Feature",properties:{cluster:!1,poiId:e.poi_id,name:e.name},geometry:{type:"Point",coordinates:[parseFloat(e.lon),parseFloat(e.lat)]}}})),pe=Object(l.a)({points:he,bounds:ae,zoom:oe,options:{radius:75,maxZoom:20}}),de=pe.clusters,be=pe.supercluster,fe={center:{lat:51.231487,lng:-99.306211},zoom:5};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("ul",{className:"topNav",children:[Object(h.jsx)("li",{children:Object(h.jsx)("span",{children:"WS Product React"})}),["General Charts","Data Table","Geo Map"].map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)("input",{type:"button",value:e,className:c===t?"selectedButton":"",onClick:function(){s(t)}})},t)}))]}),0===c&&Object(h.jsxs)("div",{children:[Object(h.jsxs)("ul",{className:"leftNav",children:[Object(h.jsx)("h3",{children:"Data Type"}),Object(h.jsxs)("li",{children:[Object(h.jsxs)("label",{className:0===N?"selectedButton":"",children:[Object(h.jsx)("input",{type:"radio",value:0,name:"dataType",onChange:function(e){L(0)}})," Events"]}),Object(h.jsxs)("label",{className:1===N?"selectedButton":"",children:[Object(h.jsx)("input",{type:"radio",value:1,name:"dataType",onChange:function(e){L(1)}})," Stats"]})]}),Object(h.jsx)("h3",{children:"Data Visual"}),["Line","Bar","LineChart","BarChart"].map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)("input",{type:"button",value:e,className:Q===t?"selectedButton":"",onClick:function(){Y(e),$(t)}})},t)}))]}),Object(h.jsx)("div",{className:"view",children:1===N?Object(h.jsxs)(h.Fragment,{children:[z?Object(h.jsx)(i.a,{chartType:X,width:"96%",height:"400px",data:z,options:{explorer:{},chart:{title:"Events Daily"}}}):Object(h.jsx)("div",{children:"Loading chart..."}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),P?Object(h.jsx)(i.a,{chartType:X,width:"96%",height:"400px",data:T,options:{explorer:{},chart:{title:"Events Hourly"}}}):Object(h.jsx)("div",{children:"Loading chart..."})]}):Object(h.jsxs)(h.Fragment,{children:[J?Object(h.jsx)(i.a,{chartType:X,width:"96%",height:"400px",data:J,options:{explorer:{},chart:{title:"Events Daily"}}}):Object(h.jsx)("div",{children:"Loading chart..."}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),P?Object(h.jsx)(i.a,{chartType:X,width:"96%",height:"400px",data:P,options:{explorer:{},chart:{title:"Events Hourly"}}}):Object(h.jsx)("div",{children:"Loading chart..."})]})})]}),1===c&&Object(h.jsx)("div",{className:"view noNav",children:O&&O.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",{type:"text",placeholder:"Search here...",onChange:function(e){!function(e){O.forEach((function(e){e.forEach((function(e){e.p.style=""}))}));var t=O.filter((function(t){return t[0].f.includes(e)||t[1].f.toLowerCase().includes(e)||t[2].f.includes(e)||t[3].f.includes(e)})),n=O.filter((function(t){return!t[0].f.includes(e)&&!t[1].f.toLowerCase().includes(e)&&!t[2].f.includes(e)&&!t[3].f.includes(e)}));t.length>0&&y((function(){var a=Object(r.a)(t);return e.length>0&&Object(r.a)(a).forEach((function(e){e.forEach((function(e){e.p.style="background-color:#baff9d;"}))})),[].concat(Object(r.a)(a),Object(r.a)(n))}))}(e.target.value.toLowerCase())}}),Object(h.jsx)(i.a,{chartType:"Table",width:"100%",height:"100%",data:[["Id","Name","Latitude","Longitude"]].concat(Object(r.a)(g)),options:{showRowNumber:!1,allowHtml:!0}})]}):Object(h.jsx)("div",{children:"Loading table..."})}),2===c&&de&&Object(h.jsx)("div",{className:"view noNav",children:Object(h.jsx)(j.a,{bootstrapURLKeys:{key:"AIzaSyAKm8MCGBPYCd9mwXqXtHYf_vFM2BtglIA"},defaultCenter:fe.center,defaultZoom:fe.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var t=e.map;ee.current=t},onChange:function(e){var t=e.zoom,n=e.bounds;ie(t),ce([n.nw.lng,n.se.lat,n.se.lng,n.nw.lat])},children:de.map((function(e){var t=Object(o.a)(e.geometry.coordinates,2),n=t[0],a=t[1],c=e.properties,s=c.cluster,r=c.point_count;return s?Object(h.jsx)(d,{lat:a,lng:n,children:Object(h.jsx)("div",{className:"cluster-marker",style:{width:"".concat(10+r/he.length*20,"px"),height:"".concat(10+r/he.length*20,"px")},onClick:function(){var t=Math.min(be.getClusterExpansionZoom(e.id),20);ee.current.setZoom(t),ee.current.panTo({lat:a,lng:n})},children:r})},"cluster-".concat(e.id)):Object(h.jsx)(d,{lat:a,lng:n,children:Object(h.jsxs)("button",{className:"poi-marker",children:[Object(h.jsx)("img",{src:"https://img.icons8.com/plasticine/100/000000/place-marker.png",alt:"poi doesn't pay"}),Object(h.jsx)("span",{children:e.properties.name})]})},"poi-".concat(e.properties.poiId))}))})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(b,{})),f()}},[[31,1,2]]]);
//# sourceMappingURL=main.0078ece5.chunk.js.map