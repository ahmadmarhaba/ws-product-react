(this["webpackJsonpws-product-react"]=this["webpackJsonpws-product-react"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(14),s=n.n(c),r=(n(26),n(7)),o=n(3),i=(n(27),n(11)),l=n(17),u=n(15),j=n(18),h=n(2);var p=function(){return fetch.apply(void 0,arguments).then((function(t){return t.json()}))},d=function(t){return t.children},b=function(){var t="https://vast-glass-iron.glitch.me",e=Object(a.useState)(0),n=Object(o.a)(e,2),c=n[0],s=n[1],b=Object(a.useState)(null),f=Object(o.a)(b,2),O=f[0],v=f[1],m=Object(a.useState)(null),g=Object(o.a)(m,2),x=g[0],y=g[1],w=Object(a.useState)(null),S=Object(o.a)(w,2),C=(S[0],S[1]),E=Object(a.useState)(0),I=Object(o.a)(E,2),N=I[0],L=I[1],k=Object(a.useState)(null),D=Object(o.a)(k,2),T=D[0],B=D[1],F=Object(a.useState)(null),A=Object(o.a)(F,2),z=A[0],G=A[1],H=Object(a.useState)(null),M=Object(o.a)(H,2),_=M[0],P=M[1],R=Object(a.useState)(null),Z=Object(o.a)(R,2),J=Z[0],K=Z[1],U=Object(a.useState)("Line"),X=Object(o.a)(U,2),Y=X[0],q=X[1],W=Object(a.useState)(0),Q=Object(o.a)(W,2),V=Q[0],$=Q[1];Object(a.useEffect)((function(){null===_&&fetch(t+"/events/hourly").then((function(t){return t.json()})).then((function(t){var e=[["Date","Events","Hour"]];t.forEach((function(t){e.push([new Date(t.date).toDateString(),parseInt(t.events),t.hour])})),P(e)})),null===J&&fetch(t+"/events/daily").then((function(t){return t.json()})).then((function(t){var e=[["Date","Events"]];t.forEach((function(t){e.push([new Date(t.date).toDateString(),parseInt(t.events)])})),K(e)})),null===T&&fetch(t+"/stats/hourly").then((function(t){return t.json()})).then((function(t){var e=[["date","hour","impressions","clicks","revenue"]];t.forEach((function(t){e.push([new Date(t.date).toDateString(),parseInt(t.hour),parseInt(t.impressions),parseInt(t.clicks),parseInt(t.revenue)])})),B(e)})),null===z&&fetch(t+"/stats/daily").then((function(t){return t.json()})).then((function(t){var e=[["date","impressions","clicks","revenue"]];t.forEach((function(t){e.push([new Date(t.date).toDateString(),parseInt(t.impressions),parseInt(t.clicks),parseInt(t.revenue)])})),G(e)})),null===O&&fetch(t+"/poi").then((function(t){return t.json()})).then((function(t){var e=[],n=[];t.forEach((function(t){e.push([{v:t.poi_id,f:t.poi_id.toString(),p:{style:""}},{v:t.name,f:t.name,p:{style:""}},{v:t.lat,f:t.lat.toString(),p:{style:""}},{v:t.lon,f:t.lon.toString(),p:{style:""}}]),n.push([t.lat,t.lon,t.name])})),y(e),v(e),C(n)}))}));var tt=Object(a.useRef)(),et=Object(a.useState)(null),nt=Object(o.a)(et,2),at=nt[0],ct=nt[1],st=Object(a.useState)(10),rt=Object(o.a)(st,2),ot=rt[0],it=rt[1],lt=Object(u.a)("https://vast-glass-iron.glitch.me/poi",{fetcher:p}),ut=lt.data,jt=lt.error,ht=(ut&&!jt?ut.slice(0,2e3):[]).map((function(t){return{type:"Feature",properties:{cluster:!1,poiId:t.poi_id,name:t.name},geometry:{type:"Point",coordinates:[parseFloat(t.lon),parseFloat(t.lat)]}}})),pt=Object(l.a)({points:ht,bounds:at,zoom:ot,options:{radius:75,maxZoom:20}}),dt=pt.clusters,bt=pt.supercluster,ft={center:{lat:51.231487,lng:-99.306211},zoom:5};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("ul",{className:"topNav",children:["General Charts","Data Table","Geo Map"].map((function(t,e){return Object(h.jsx)("li",{children:Object(h.jsx)("input",{type:"button",value:t,className:c===e?"selectedButton":"",onClick:function(){s(e)}})},e)}))}),0===c&&Object(h.jsxs)("div",{children:[Object(h.jsxs)("ul",{className:"leftNav",children:[Object(h.jsxs)("li",{children:[Object(h.jsxs)("label",{className:0===N?"selectedButton":"",children:[Object(h.jsx)("input",{type:"radio",value:0,name:"dataType",onChange:function(t){L(0)}})," Events"]}),Object(h.jsxs)("label",{className:1===N?"selectedButton":"",children:[Object(h.jsx)("input",{type:"radio",value:1,name:"dataType",onChange:function(t){L(1)}})," Stats"]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),["Line","Bar","LineChart","BarChart"].map((function(t,e){return Object(h.jsx)("li",{children:Object(h.jsx)("input",{type:"button",value:t,className:V===e?"selectedButton":"",onClick:function(){q(t),$(e)}})},e)}))]}),Object(h.jsx)("div",{className:"view",children:1===N?Object(h.jsxs)(h.Fragment,{children:[z?Object(h.jsx)(i.a,{chartType:Y,width:"96%",height:"400px",data:z,options:{explorer:{},chart:{title:"Events Daily"}}}):Object(h.jsx)("div",{children:"Loading chart..."}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),_?Object(h.jsx)(i.a,{chartType:Y,width:"96%",height:"400px",data:T,options:{explorer:{},chart:{title:"Events Hourly"}}}):Object(h.jsx)("div",{children:"Loading chart..."})]}):Object(h.jsxs)(h.Fragment,{children:[J?Object(h.jsx)(i.a,{chartType:Y,width:"96%",height:"400px",data:J,options:{explorer:{},chart:{title:"Events Daily"}}}):Object(h.jsx)("div",{children:"Loading chart..."}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),_?Object(h.jsx)(i.a,{chartType:Y,width:"96%",height:"400px",data:_,options:{explorer:{},chart:{title:"Events Hourly"}}}):Object(h.jsx)("div",{children:"Loading chart..."})]})})]}),1===c&&O&&O.length&&Object(h.jsxs)("div",{className:"view noNav",children:[Object(h.jsx)("input",{type:"text",placeholder:"Search here...",onChange:function(t){!function(t){O.forEach((function(t){t.forEach((function(t){t.p.style=""}))}));var e=O.filter((function(e){return e[0].f.includes(t)||e[1].f.toLowerCase().includes(t)||e[2].f.includes(t)||e[3].f.includes(t)})),n=O.filter((function(e){return!e[0].f.includes(t)&&!e[1].f.toLowerCase().includes(t)&&!e[2].f.includes(t)&&!e[3].f.includes(t)}));e.length>0&&y((function(){var a=Object(r.a)(e);return t.length>0&&Object(r.a)(a).forEach((function(t){t.forEach((function(t){t.p.style="background-color:#baff9d;"}))})),[].concat(Object(r.a)(a),Object(r.a)(n))}))}(t.target.value.toLowerCase())}}),Object(h.jsx)(i.a,{chartType:"Table",width:"100%",height:"100%",data:[["Id","Name","Latitude","Longitude"]].concat(Object(r.a)(x)),options:{showRowNumber:!1,allowHtml:!0}})]}),2===c&&dt&&Object(h.jsx)("div",{className:"view noNav",children:Object(h.jsx)(j.a,{bootstrapURLKeys:{key:"AIzaSyAKm8MCGBPYCd9mwXqXtHYf_vFM2BtglIA"},defaultCenter:ft.center,defaultZoom:ft.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var e=t.map;tt.current=e},onChange:function(t){var e=t.zoom,n=t.bounds;it(e),ct([n.nw.lng,n.se.lat,n.se.lng,n.nw.lat])},children:dt.map((function(t){var e=Object(o.a)(t.geometry.coordinates,2),n=e[0],a=e[1],c=t.properties,s=c.cluster,r=c.point_count;return s?Object(h.jsx)(d,{lat:a,lng:n,children:Object(h.jsx)("div",{className:"cluster-marker",style:{width:"".concat(10+r/ht.length*20,"px"),height:"".concat(10+r/ht.length*20,"px")},onClick:function(){var e=Math.min(bt.getClusterExpansionZoom(t.id),20);tt.current.setZoom(e),tt.current.panTo({lat:a,lng:n})},children:r})},"cluster-".concat(t.id)):Object(h.jsx)(d,{lat:a,lng:n,children:Object(h.jsxs)("button",{className:"poi-marker",children:[Object(h.jsx)("img",{src:"https://img.icons8.com/plasticine/100/000000/place-marker.png",alt:"poi doesn't pay"}),Object(h.jsx)("span",{children:t.properties.name})]})},"poi-".concat(t.properties.poiId))}))})})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),s(t),r(t)}))};s.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(b,{})),f()}},[[31,1,2]]]);
//# sourceMappingURL=main.6ef90ec6.chunk.js.map