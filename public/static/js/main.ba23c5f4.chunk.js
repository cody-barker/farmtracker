(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(26),r=a.n(c),s=(a(35),a(4)),i=a(3),j=a(1);var l=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Welcome to Farm Tracker"}),Object(j.jsx)("p",{children:"Helping you keep track of all your farms and all your crops."})]})},b=a(7),d=a(6),m=a(9),o=a(10);var h=function(e){var t=e.farm,a=t.id,n=t.name,c=t.city,r=t.state;return Object(j.jsx)("div",{id:"farm-card",children:Object(j.jsxs)(o.b,{to:"/farms/".concat(a),children:[Object(j.jsx)("h3",{children:n}),Object(j.jsxs)("p",{children:[c,", ",r]})]})})};var O=function(e){var t=e.allFarms,a=e.setAllFarms,c=t.map((function(e){return Object(j.jsx)(h,{farm:e},e.id)})),r=Object(n.useState)({farmName:"",farmCity:"",farmState:""}),i=Object(s.a)(r,2),l=i[0],o=i[1],O=l.farmName,u=l.farmCity,f=l.farmState,x={name:O,city:u,state:f};function p(e){o(Object(m.a)(Object(m.a)({},l),{},Object(d.a)({},e.target.name,e.target.value)))}return Object(j.jsxs)("div",{className:"farms-container",children:[Object(j.jsxs)("div",{className:"farm-cards-container",children:[Object(j.jsx)("h1",{children:"Farms"}),c]}),Object(j.jsxs)("div",{className:"add-a-farm-container",children:[Object(j.jsx)("h2",{children:"Add a Farm"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/farms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)}).then((function(e){return e.json()})).then((function(e){a([].concat(Object(b.a)(t),[e])),o(Object(m.a)(Object(m.a)({},l),{},{farmName:"",farmCity:"",farmState:""}))}))},children:[Object(j.jsxs)("label",{children:["Farm Name",Object(j.jsx)("input",{required:!0,onChange:p,name:"farmName",value:O,type:"text"})]}),Object(j.jsxs)("label",{children:["City",Object(j.jsx)("input",{onChange:p,name:"farmCity",value:u,type:"text"})]}),Object(j.jsxs)("label",{children:["State",Object(j.jsx)("input",{onChange:p,name:"farmState",value:f,type:"text"})]}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})]})]})};var u=function(e){var t=e.bed,a=e.allFarms,n=e.setAllFarms,c=t.id,r=t.sq_ft,s=t.crop,i=t.dtm,l=t.planting_date,d=t.harvest_date,m=Object(b.a)(a);return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:c}),Object(j.jsx)("td",{children:r}),Object(j.jsx)("td",{children:s}),Object(j.jsx)("td",{children:i}),Object(j.jsx)("td",{children:l}),Object(j.jsx)("td",{children:d}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{onClick:function(){fetch("/beds/".concat(c),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){for(var t=0;t<a.length;t++)m[t].beds=m[t].beds.filter((function(t){return t.id!==e.id}));n(m)}))},className:"delete",children:"Delete"})})]})};var f=function(e){var t=e.allFarms,a=e.setAllFarms,c=Object(i.q)().id;c=parseInt(c);var r=Object(n.useState)({sqFt:"",crop:"",dtm:"",plantingDate:"",harvestDate:""}),l=Object(s.a)(r,2),o=l[0],h=l[1],O=o.sqFt,u=o.crop,f=o.dtm,x=o.plantingDate,p=o.harvestDate,v={farm_id:c,sq_ft:O,crop:u,dtm:f,planting_date:x,harvest_date:p};function y(e){h(Object(m.a)(Object(m.a)({},o),{},Object(d.a)({},e.target.name,e.target.value)))}return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/beds",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}).then((function(e){return e.json()})).then((function(e){var n=t.map((function(t){return t.id===c?Object(m.a)(Object(m.a)({},t),{},{beds:[].concat(Object(b.a)(t.beds),[e])}):t}));a(n),h(Object(m.a)(Object(m.a)({},o),{},{sqFt:"",crop:"",dtm:"",plantingDate:"",harvestDate:""}))}))},children:[Object(j.jsxs)("label",{children:["Crop",Object(j.jsx)("input",{required:!0,onChange:y,name:"crop",value:u,type:"text"})]}),Object(j.jsxs)("label",{children:["Square Feet",Object(j.jsx)("input",{onChange:y,name:"sqFt",value:O,type:"number"})]}),Object(j.jsxs)("label",{children:["Days to Maturity",Object(j.jsx)("input",{onChange:y,name:"dtm",value:f,type:"number"})]}),Object(j.jsxs)("label",{children:["Planting Date",Object(j.jsx)("input",{onChange:y,name:"plantingDate",value:x,type:"date"})]}),Object(j.jsxs)("label",{children:["Harvest Date",Object(j.jsx)("input",{onChange:y,name:"harvestDate",value:p,type:"date"})]}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})};var x=function(e){var t=e.allFarms,a=e.setAllFarms,c=Object(i.q)().id;c=parseInt(c);var r,l=Object(i.o)(),d=Object(n.useState)(!1),m=Object(s.a)(d,2),o=m[0],h=m[1],O=t.find((function(e){return e.id===c})),x=[];return O&&(r=0===(x=O.beds.map((function(e){return Object(j.jsx)(u,{bed:e,allFarms:t,setAllFarms:a},e.id)}))).length?null:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Bed #"}),Object(j.jsx)("th",{children:"Sq Ft"}),Object(j.jsx)("th",{children:"Crop"}),Object(j.jsx)("th",{children:"DTM"}),Object(j.jsx)("th",{children:"Planting Date"}),Object(j.jsx)("th",{children:"Harvest Date"}),Object(j.jsx)("th",{children:"Delete"})]})}),Object(j.jsx)("tbody",{children:x})]})),O?Object(j.jsx)("div",{className:"farm-detail-container",children:Object(j.jsxs)("div",{className:"farm-detail",children:[Object(j.jsxs)("div",{className:"farm-name-location",children:[Object(j.jsx)("h2",{children:O.name}),Object(j.jsx)("p",{children:"City: ".concat(O.city)}),Object(j.jsx)("p",{children:"State: ".concat(O.state)})]}),Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)("a",{id:"edit-farm-button",href:"/farms/".concat(c,"/edit"),children:Object(j.jsxs)("button",{children:["Edit ",O.name]})})}),Object(j.jsx)("div",{className:"button-container",children:Object(j.jsxs)("button",{onClick:function(){fetch("/farms/".concat(c),{method:"DELETE"}).then(a(Object(b.a)(t).filter((function(e){return e.id!==c})))).then(l("/farms"))},className:"delete",children:["Delete ",O.name]})}),Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)("button",{onClick:function(){h(!o)},children:o?"Close Bed Form":"Add a Bed"})}),o?Object(j.jsx)(f,{allFarms:t,setAllFarms:a}):null,Object(j.jsx)("div",{className:"add-farm-form-container",children:O?r:"Loading..."})]})}):Object(j.jsx)("p",{className:"alert warning",children:"Loading..."})};var p=function(e){var t=e.allFarms,a=e.setAllFarms,c=Object(i.q)().id;c=parseInt(c);var r=Object(i.o)(),l=t.find((function(e){return e.id===c})),b=Object(n.useState)({farmName:"",farmCity:"",farmState:"",render:!1}),o=Object(s.a)(b,2),h=o[0],O=o[1],u=h.farmName,f=h.farmCity,x=h.farmState,p=h.render,v={name:u,city:f,state:x};function y(e){O(Object(m.a)(Object(m.a)({},h),{},Object(d.a)({},e.target.name,e.target.value)))}return l&&!p&&O(Object(m.a)(Object(m.a)({},h),{},{farmName:l.name,farmCity:l.city,farmState:l.state,render:!p})),l?Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{children:["Edit ",l.name]}),Object(j.jsx)("div",{className:"update-a-farm-container",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/farms/".concat(c),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}).then((function(e){return e.json()})).then((function(e){var n=t.map((function(t){return t.id===c?e:t}));a(n)})).then(r("/farms/".concat(c)))},children:[Object(j.jsxs)("label",{children:["Farm Name",Object(j.jsx)("input",{required:!0,onChange:y,name:"farmName",value:u,type:"text"})]}),Object(j.jsxs)("label",{children:["City",Object(j.jsx)("input",{onChange:y,name:"farmCity",value:f,type:"text"})]}),Object(j.jsxs)("label",{children:["State",Object(j.jsx)("input",{onChange:y,name:"farmState",value:x,type:"text"})]}),Object(j.jsx)("button",{className:"update-btn",type:"submit",children:"Submit"})]})})]}):Object(j.jsx)("p",{className:"alert warning",children:'"Loading..."'})};var v=function(){return Object(j.jsxs)("nav",{id:"navbar",children:[Object(j.jsx)(o.b,{to:"/",children:"Home"}),Object(j.jsx)(o.b,{to:"/farms",children:"Farms"})]})};a(37);var y=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){fetch("/farms").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(v,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/farms/:id/edit",element:Object(j.jsx)(p,{allFarms:a,setAllFarms:c})}),Object(j.jsx)(i.a,{path:"/farms/:id",element:Object(j.jsx)(x,{allFarms:a,setAllFarms:c})}),Object(j.jsx)(i.a,{path:"/farms",element:Object(j.jsx)(O,{allFarms:a,setAllFarms:c})}),Object(j.jsx)(i.a,{path:"/",element:Object(j.jsx)(l,{allFarms:a,setAllFarms:c})})]})]})};r.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(o.a,{children:Object(j.jsx)(y,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.ba23c5f4.chunk.js.map