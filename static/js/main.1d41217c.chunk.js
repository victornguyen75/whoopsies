(this.webpackJsonpwhoopsies=this.webpackJsonpwhoopsies||[]).push([[0],{124:function(e,t,n){},528:function(e,t,n){"use strict";n.r(t);var i=n(5),a=n(0),r=n.n(a),o=n(11),c=n.n(o),s=(n(124),n(74)),l=n(14),d=Object(a.createContext)(null),u=n(564),f=n(16),b=n(563),j=n(17);function h(){var e=Object(f.a)(["\n  margin-right: 1em;\n"]);return h=function(){return e},e}var p=Object(j.b)(b.a)(h());function x(e){var t=e.fields,n=e.handleSubmit,r={TextField:p}.TextField,o=Object(a.useContext)(d),c=t.map((function(e){return Object(i.jsx)(r,{label:e.fieldLabel,variant:"filled",size:"small",value:e.fieldValue,onChange:function(t){return o(e.fieldId,t)}},e.fieldId)}));return Object(i.jsxs)("form",{onSubmit:function(e){return n(e)},children:[c,Object(i.jsx)(u.a,{variant:"contained",color:"primary",type:"submit",size:"large",children:"Create"})]})}x.defaultProps={fields:[],handleSubmit:function(){}};var O=n(561),m=n(105),v=n.n(m),g=n(106),T=n.n(g);function w(){var e=Object(f.a)(["\n  ","\n"]);return w=function(){return e},e}function I(){var e=Object(f.a)(["\n  ","\n"]);return I=function(){return e},e}function y(){var e=Object(f.a)(["\n  background-color: #444;\n  color: white;\n  padding: 16px;\n  position: absolute;\n  top: ",";\n  right: 1em;\n  z-index: 999;\n  transition: top 1s ease;\n  width: 15em;\n"]);return y=function(){return e},e}function k(){var e=Object(f.a)(["\n  vertical-align: top;\n"]);return k=function(){return e},e}var N=Object(j.a)(k()),S=Object(j.b)(O.a)(y(),(function(e){return e.show?"1em":"-10em"})),L=Object(j.b)(v.a)(I(),N),D=Object(j.b)(T.a)(w(),N);function E(e){var t=e.text,n=e.show,a={NotificationCard:S,BellIcon:L,ErrorIcon:D},r=a.NotificationCard,o=a.BellIcon,c=a.ErrorIcon,s=t.includes("Success")?Object(i.jsx)(o,{}):Object(i.jsx)(c,{});return Object(i.jsxs)(r,{show:n?"true":void 0,children:[s,t]})}E.defaultProps={text:"",show:!1};var C=n(107),F=n.n(C);function P(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Whoopsies!"}),Object(i.jsxs)("p",{children:["An Issue Tracker for all your Oopsies! ",Object(i.jsx)(u.a,{variant:"outlined",color:"primary",startIcon:Object(i.jsx)(F.a,{}),children:Object(i.jsx)("a",{href:"https://docs.google.com/document/d/1FgaHyxg0d-MKl4OlfG0u36fmp6jM5nZxvI3ZeXUq4vs/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"SRS"})})]})]})}function V(e){var t=e.viewModel;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(P,{}),Object(i.jsx)("h2",{children:t.formLabel}),Object(i.jsx)(E,{show:t.showNotification,text:t.notificationText}),Object(i.jsx)(d.Provider,{value:t.handleChange,children:Object(i.jsx)(x,{fields:t.fields,handleSubmit:t.handleSubmit})})]})}V.defaultProps={viewModel:{formLabel:"",fields:[],showNotification:!1,notificationText:"",handleSubmit:function(){},handleChange:function(){}}};var M=n(108),B=n(110),z=n(54),A=n(71),G=n.n(A),U=n(109),K=n.n(U);G.a.config.update({region:"us-east-2",endpoint:"https://dynamodb.us-east-2.amazonaws.com",accessKeyId:"",secretAccessKey:""});var R=new G.a.DynamoDB.DocumentClient,J="Oopsies-test";function Z(e){var t=e.id,n=e.project,i=e.name,a=e.description,r=e.status,o=e.priority,c=e.sprint,s=e.release,l=K()().format(),d={TableName:J,Item:{project:n,id:parseInt(t,10),name:i,description:a,status:r,priority:o,sprint:c,release:s,dateCreated:l,dateUpdated:l}};return new Promise((function(e,t){R.put(d,(function(n){return n?t(new Error("Unable to add item. ".concat(n))):e()}))}))}function q(){var e={TableName:J};return new Promise((function(t,n){R.scan(e,(function(e,i){return e?n(new Error("Unable to scan table. ".concat(e))):t(i.Items)}))}))}function H(){return{addTaskToDatabase:Z,getTasksFromDatabase:q}}function W(){return{formLabel:"Task Creation Form",fields:[{fieldId:"id",fieldLabel:"Task ID",fieldType:"text",fieldValue:""},{fieldId:"project",fieldLabel:"Project Name",fieldType:"text",fieldValue:""},{fieldId:"name",fieldLabel:"Task Name",fieldType:"text",fieldValue:""},{fieldId:"description",fieldLabel:"Task Description",fieldType:"text",fieldValue:""},{fieldId:"status",fieldLabel:"Status",fieldType:"text",fieldValue:""},{fieldId:"priority",fieldLabel:"Priority",fieldType:"text",fieldValue:""},{fieldId:"sprint",fieldLabel:"Sprint",fieldType:"text",fieldValue:""},{fieldId:"release",fieldLabel:"Release Date",fieldType:"text",fieldValue:""}]}}var X=n(39);function Y(){var e=Object(a.useState)(W),t=Object(X.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)([]),o=Object(X.a)(r,2),c=o[0],s=o[1];return{formLabel:n.formLabel,fields:n.fields,tasks:c,fieldElements:n,setTasks:s,setFieldElements:i}}function _(){var e=Object(a.useState)(!1),t=Object(X.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),o=Object(X.a)(r,2),c=o[0],s=o[1];return{showNotification:n,notificationText:c,toggleNotification:Object(a.useCallback)((function(e){s(e),i(!0),setTimeout((function(){i(!1)}),3e3)}),[i,s])}}function Q(){var e=H().addTaskToDatabase,t=Y(),n=t.formLabel,i=t.fields,a=t.tasks,r=t.fieldElements,o=t.setTasks,c=t.setFieldElements,s=_(),l=s.showNotification,d=s.notificationText,u=s.toggleNotification;return{formLabel:n,fields:i,showNotification:l,notificationText:d,handleSubmit:function(t){t.preventDefault();var n={};r.fields.forEach((function(e){Object.assign(n,Object(z.a)({},e.fieldId,e.fieldValue))})),e(n).then((function(){o([].concat(Object(B.a)(a),[n])),u("Successfully added the item!")})).catch((function(e){u(e.toString())})),c(W)},handleChange:function(e,t){var n=Object(M.a)({},r),i=n.fields.findIndex((function(t){return e===t.fieldId}));n.fields[i].fieldValue=t.target.value,c(n)}}}function $(){var e=Object(f.a)(["\n  margin: 5px 0px;\n"]);return $=function(){return e},e}var ee=Object(j.b)(O.a)($());function te(e){var t=e.name,n=e.priority,a=e.release,r={Card:ee}.Card;return Object(i.jsxs)(r,{variant:"outlined",children:["Name: ",t,Object(i.jsx)("br",{}),"Priority: ",n,Object(i.jsx)("br",{}),"Release Date: ",a]})}function ne(){var e=Object(f.a)(["\n  border-radius: 4px;\n  background-color: lightgray;\n  padding: 1px 5px 1px 5px;\n"]);return ne=function(){return e},e}te.defaultProps={name:"TBD",priority:"",release:"TBD"};var ie=j.b.div(ne());function ae(e){var t=e.header,n=e.tasks,a={List:ie}.List,r="".concat(t," (").concat(n.length,")");return Object(i.jsxs)(a,{children:[Object(i.jsx)("b",{children:r}),n.map((function(e){return Object(i.jsx)(te,{name:e.name,priority:e.priority,release:e.release},e.id)}))]})}ae.defaultProps={header:"TITLE NEEDED",tasks:[]};var re=n(562);function oe(){var e=Object(f.a)(["\n  margin: 0px;\n"]);return oe=function(){return e},e}var ce=Object(j.b)(re.a)(oe());function se(e){var t=e.viewModel,n={Grid:ce}.Grid;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(P,{}),Object(i.jsx)(E,{show:t.showNotification,text:t.notificationText}),Object(i.jsx)(n,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:5,children:["TO DO","IN ANALYSIS","IN DEVELOPMENT","IN TESTING","DONE"].map((function(e){return Object(i.jsxs)(n,{item:!0,children:[" ",Object(i.jsx)(ae,{header:e,tasks:t.tasks})]},e)}))})]})}function le(){var e=H().getTasksFromDatabase,t=Y(),n=t.tasks,i=t.setTasks,r=_(),o=r.showNotification,c=r.notificationText,s=r.toggleNotification;return Object(a.useEffect)((function(){e().then((function(e){i(e),s("Successfully retrieved items!")})).catch((function(e){s(e.toString())}))}),[e,i,s]),{tasks:n,showNotification:o,notificationText:c}}se.defaultProps={viewModel:{tasks:[],showNotification:!1,notificationText:""}};var de=function(){return Object(i.jsx)(s.b,{basename:"/",children:Object(i.jsx)(s.a,{children:Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{path:"/whoopsies/create-task",children:Object(i.jsx)(V,{viewModel:Q()})}),Object(i.jsx)(l.b,{path:"/whoopsies/dashboard",children:Object(i.jsx)(se,{viewModel:le()})}),Object(i.jsx)(l.a,{from:"/whoopsies",to:"/whoopsies/create-task"})]})})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,566)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),r(e),o(e)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(de,{})}),document.getElementById("root")),ue()},70:function(e,t){}},[[528,1,2]]]);
//# sourceMappingURL=main.1d41217c.chunk.js.map