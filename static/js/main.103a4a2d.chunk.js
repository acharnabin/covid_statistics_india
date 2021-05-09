(this.webpackJsonpsiteone=this.webpackJsonpsiteone||[]).push([[0],{108:function(e,c,t){},109:function(e,c,t){},110:function(e,c,t){},111:function(e,c,t){},241:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t.n(a),r=t(90),n=t.n(r),i=(t(108),t(109),t(100)),l=(t(110),t(255)),o=t(259),d=t(257),j=t(260),b=t(261),h=t(262),m=t(263),x=t(264),O=(t(111),t(2)),g=function(e){return Object(O.jsxs)(l.a,{container:!0,spacing:1,direction:"row",justify:"center",alignItems:"center",children:[Object(O.jsx)(l.a,{item:!0,xs:!0,spacing:3,className:"grid-item",children:Object(O.jsxs)(d.a,{className:"cards card-confirm p-3",elevation:3,children:[Object(O.jsx)("p",{className:"text-black-50",children:"Confirmed"}),Object(O.jsx)("h2",{style:{color:"#03a9f4"},children:e.confirm})]})}),Object(O.jsx)(l.a,{item:!0,xs:!0,spacing:3,children:Object(O.jsxs)(d.a,{className:"cards card-active p-3",elevation:3,children:[Object(O.jsx)("p",{className:"text-black-50",children:"Active"}),Object(O.jsx)("h2",{style:{color:"#f44336"},children:e.active})]})}),Object(O.jsx)(l.a,{item:!0,xs:!0,spacing:3,children:Object(O.jsxs)(d.a,{className:"cards card-recovered p-3",elevation:3,children:[Object(O.jsx)("p",{className:"text-black-50",children:"Recovered"}),Object(O.jsx)("h2",{style:{color:"#4caf50"},children:e.recovered})]})}),Object(O.jsx)(l.a,{item:!0,xs:!0,spacing:3,children:Object(O.jsxs)(d.a,{className:"cards card-death p-3",elevation:3,children:[Object(O.jsx)("p",{className:"text-black-50",children:"Deaths"}),Object(O.jsx)("h2",{style:{color:"#607d8b"},children:e.deaths})]})})]})},f=t(98),u=function(e){return Object(O.jsx)("div",{className:"countrychart ",children:Object(O.jsx)(f.a,{data:{labels:["Active","confirmed","death","recovered"],datasets:[{label:"Active",data:[e.active,e.confirm,e.deaths,e.recovered],backgroundColor:["#ff5722","#1e88e5","#9c27b0","#00c853"],borderColor:["#ff5722","#1e88e5","#9c27b0","#00c853"]}]}})})},v=t(97),p=t.n(v),N=t(258),y=t(265),w=Object(N.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function C(){var e=w();return Object(O.jsx)("div",{className:e.root,children:Object(O.jsx)(y.a,{})})}var k=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],s=c[1];return Object(a.useEffect)((function(){p.a.get("https://api.covid19india.org/data.json").then((function(e){if(200!==e.status||null==e)return[];var c=e.data.statewise;s(c)})).catch((function(e){console.error(e.massage)})),console.log(t)}),[]),Object(O.jsxs)("div",{className:"Home",children:[Object(O.jsx)("h4",{className:"home-title text-center",children:"Covid-19 India overview"}),0===t.length?Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(C,{})}):Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(l.a,{container:!0,spacing:2,direction:"row ",justify:"center","align-items":"center",children:[Object(O.jsx)(l.a,{item:!0,xs:12,md:6,className:"home_card",children:Object(O.jsx)(g,{active:t[0].active,recovered:t[0].recovered,deaths:t[0].deaths,confirm:t[0].confirmed})}),Object(O.jsx)(l.a,{item:!0,xs:12,md:6,className:"home_countryChart",style:{padding:50},children:Object(O.jsx)(u,{active:t[0].active,recovered:t[0].recovered,deaths:t[0].deaths,confirm:t[0].confirmed})}),Object(O.jsx)(l.a,{container:!0,spacing:3,direction:"row",justify:"center",alignItems:"center",className:"home_section2 mt-2 mb-2",children:Object(O.jsx)(l.a,{item:!0,xs:12,md:12,sm:12,className:"home_statedata ",children:Object(O.jsx)(o.a,{component:d.a,className:"table",children:Object(O.jsxs)(j.a,{stickyHeader:!0,className:"","aria-label":"simple table",children:[Object(O.jsx)(b.a,{children:Object(O.jsxs)(h.a,{className:"table-top-row",children:[Object(O.jsx)(m.a,{className:"row-text",style:{backgroundColor:"#e8f5e9"},children:"State"}),Object(O.jsx)(m.a,{className:"row-text ",style:{backgroundColor:"#b0bec5"},align:"right",children:"Death"}),Object(O.jsx)(m.a,{className:"row-text",style:{backgroundColor:"#b2ebf2"},align:"right",children:"Confirmed"}),Object(O.jsx)(m.a,{className:"row-text",style:{backgroundColor:"#c8e6c9"},align:"right",children:"Recoverd"}),Object(O.jsx)(m.a,{className:"row-text ",style:{backgroundColor:"#ffcdd2"},align:"right",children:"Active"})]})}),Object(O.jsx)(x.a,{className:"table-body",children:t.map((function(e,c){return Object(O.jsxs)(h.a,{children:[Object(O.jsx)(m.a,{component:"th",scope:"object",style:{color:""},children:e.state}),Object(O.jsx)(m.a,{style:{color:"#263238"},align:"right",children:e.deaths}),Object(O.jsx)(m.a,{style:{color:"#01579b"},align:"right",children:e.confirmed}),Object(O.jsx)(m.a,{style:{color:"#1b5e20"},align:"right",children:e.recovered}),Object(O.jsx)(m.a,{style:{color:"#b71c1c"},align:"right",children:e.active})]},c)}))})]})})})})]})})]})},I=function(){return Object(O.jsx)("div",{className:"app",children:Object(O.jsx)(k,{})})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,267)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,r=c.getLCP,n=c.getTTFB;t(e),a(e),s(e),r(e),n(e)}))},F=(t(239),t(99));n.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(F.a,{children:Object(O.jsx)(I,{})})}),document.getElementById("root")),A()}},[[241,1,2]]]);
//# sourceMappingURL=main.103a4a2d.chunk.js.map