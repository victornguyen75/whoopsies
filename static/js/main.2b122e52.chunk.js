(this.webpackJsonpwhoopsies=this.webpackJsonpwhoopsies||[]).push([[0],{548:function(e,t,i){"use strict";i.r(t);var n,a=i(0),l=i.n(a),r=i(12),o=i.n(r),s=i(36),c=i(56),d=i(14),f=i(15),u=i(586),b=i(16),p=Object(b.c)(u.a)(n||(n=Object(f.a)(["\n  margin: 10px;\n  padding: 10px;\n"])));var j,O=i(6);function h(e){for(var t=e.split(" "),i=0,n=0;n<t.length&&i<5;n+=1)t[n].length&&(i+=1);return t.splice(0,n).join(" ")}function x(e){var t=e.name,i={Card:p}.Card;return Object(O.jsx)(i,{children:h(t)})}x.defaultProps={name:"TBD"};var m=b.c.div(j||(j=Object(f.a)(["\n  border-radius: 4px;\n  background-color: lightgray;\n  padding: 5px 5px 1px 5px;\n  width: 245px;\n"])));function T(e){var t=e.header,i=e.tasks,n={List:m}.List,a="".concat(t," (").concat(i.length,")");return Object(O.jsxs)(n,{children:[Object(O.jsx)("b",{children:a}),i.map((function(e){return Object(O.jsx)(x,{name:e.name},e.id)}))]})}T.defaultProps={header:"TITLE NEEDED",tasks:[]};var v,I=i(596),g=Object(b.c)(I.a)(v||(v=Object(f.a)(["\n  position: absolute;\n  top: ",";\n  right: 1em;\n  z-index: 999;\n  transition: top 1s ease !important;\n"])),(function(e){return e.show?"1em":"-10em"}));function S(e){var t=e.text,i=e.show,n={Alert:g}.Alert,a=t.includes("Success")?"success":"error";return Object(O.jsx)(n,{show:i?"true":void 0,severity:a,children:t})}S.defaultProps={text:"",show:!1};var L=i(591),E=i(115),w=i.n(E);function y(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Whoopsies!"}),Object(O.jsxs)("p",{children:["An Issue Tracker for all your Oopsies! ",Object(O.jsx)(L.a,{variant:"outlined",color:"primary",startIcon:Object(O.jsx)(w.a,{}),children:Object(O.jsx)("a",{href:"https://docs.google.com/document/d/1FgaHyxg0d-MKl4OlfG0u36fmp6jM5nZxvI3ZeXUq4vs/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"SRS"})})]})]})}var C,N=i(592),k=Object(b.c)(N.a)(C||(C=Object(f.a)([""])));function D(e){var t=e.viewModel,i={Grid:k}.Grid,n=["TO DO","IN ANALYSIS","IN DEVELOPMENT","IN TESTING","DONE"].map((function(e){var n=t.tasks.filter((function(t){return e===t.status}));return Object(O.jsx)(i,{item:!0,children:Object(O.jsx)(T,{header:e,tasks:n})},e)}));return Object(O.jsxs)("div",{"data-testid":"dashboard-page-view",children:[Object(O.jsx)(y,{}),Object(O.jsx)(S,{show:t.showNotification,text:t.notificationText}),Object(O.jsx)(i,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:2,children:n})]})}D.defaultProps={viewModel:{tasks:[],showNotification:!1,notificationText:""}};var V=i(65),P=i(81),_=i.n(P),A=i(116),F=i.n(A);_.a.config.update({accessKeyId:Object({NODE_ENV:"production",PUBLIC_URL:"/whoopsies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AWS_ACCESS_KEY_ID,secretAccessKey:Object({NODE_ENV:"production",PUBLIC_URL:"/whoopsies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AWS_SECRET_ACCESS_KEY,region:"us-east-2",endpoint:"https://dynamodb.us-east-2.amazonaws.com"});var R=new _.a.DynamoDB.DocumentClient,M="Oopsies";function H(){var e={TableName:M};return new Promise((function(t,i){R.scan(e,(function(e,n){return e?i(new Error("Unable to scan table. ".concat(e))):t(n.Count+1)}))}))}function K(e,t){var i=t.name,n=t.description,a=t.status,l=t.priority,r=t.sprint,o=t.version,s=t.release,c=F()().format(),d={TableName:M,Item:{project:"Whoopsies!",id:e,name:i,description:n,status:a,priority:l,sprint:r,version:o,release:s,dateCreated:c,dateUpdated:c}};return new Promise((function(e,t){R.put(d,(function(i){return i?t(new Error("Unable to add item. ".concat(i))):e()}))}))}function W(){var e={TableName:M};return new Promise((function(t,i){R.scan(e,(function(e,n){return e?i(new Error("Unable to scan table. ".concat(e))):t(n.Items)}))}))}function U(){return{getLatestTaskId:H,addTaskToDatabase:K,getTasksFromDatabase:W}}function z(){var e={formLabel:"Task Creation Form",fields:[{fieldId:"name",fieldLabel:"Task Name",fieldType:"text",fieldValue:""},{fieldId:"status",fieldLabel:"Status",fieldType:"select",fieldOptions:["TO DO","IN ANALYSIS","IN DEVELOPMENT","IN TESTING","DONE"],fieldValue:"TO DO"},{fieldId:"priority",fieldLabel:"Priority",fieldType:"select",fieldOptions:["Cosmetic","Low","Medium","High","Showstopper"],fieldValue:"Cosmetic"},{fieldId:"sprint",fieldLabel:"Sprint",fieldType:"text",fieldValue:""},{fieldId:"version",fieldLabel:"Project Version",fieldType:"text",fieldValue:""},{fieldId:"release",fieldLabel:"Release Date",fieldType:"text",fieldValue:""},{fieldId:"description",fieldLabel:"Task Description",fieldType:"text-long",fieldValue:""},{fieldId:"create",fieldLabel:"Create",fieldType:"button",fieldValue:null},{fieldId:"reset",fieldLabel:"Reset the form after creating this task",fieldType:"checkbox",fieldValue:!0}]}.formLabel,t=Object(a.useState)([{fieldId:"name",fieldLabel:"Task Name",fieldType:"text",fieldValue:""},{fieldId:"status",fieldLabel:"Status",fieldType:"select",fieldOptions:["TO DO","IN ANALYSIS","IN DEVELOPMENT","IN TESTING","DONE"],fieldValue:"TO DO"},{fieldId:"priority",fieldLabel:"Priority",fieldType:"select",fieldOptions:["Cosmetic","Low","Medium","High","Showstopper"],fieldValue:"Cosmetic"},{fieldId:"sprint",fieldLabel:"Sprint",fieldType:"text",fieldValue:""},{fieldId:"version",fieldLabel:"Project Version",fieldType:"text",fieldValue:""},{fieldId:"release",fieldLabel:"Release Date",fieldType:"text",fieldValue:""},{fieldId:"description",fieldLabel:"Task Description",fieldType:"text-long",fieldValue:""},{fieldId:"create",fieldLabel:"Create",fieldType:"button",fieldValue:null},{fieldId:"reset",fieldLabel:"Reset the form after creating this task",fieldType:"checkbox",fieldValue:!0}]),i=Object(s.a)(t,2),n=i[0],l=i[1],r=Object(a.useState)([]),o=Object(s.a)(r,2);return{formLabel:e,resetFieldElements:[{fieldId:"name",fieldLabel:"Task Name",fieldType:"text",fieldValue:""},{fieldId:"status",fieldLabel:"Status",fieldType:"select",fieldOptions:["TO DO","IN ANALYSIS","IN DEVELOPMENT","IN TESTING","DONE"],fieldValue:"TO DO"},{fieldId:"priority",fieldLabel:"Priority",fieldType:"select",fieldOptions:["Cosmetic","Low","Medium","High","Showstopper"],fieldValue:"Cosmetic"},{fieldId:"sprint",fieldLabel:"Sprint",fieldType:"text",fieldValue:""},{fieldId:"version",fieldLabel:"Project Version",fieldType:"text",fieldValue:""},{fieldId:"release",fieldLabel:"Release Date",fieldType:"text",fieldValue:""},{fieldId:"description",fieldLabel:"Task Description",fieldType:"text-long",fieldValue:""},{fieldId:"create",fieldLabel:"Create",fieldType:"button",fieldValue:null},{fieldId:"reset",fieldLabel:"Reset the form after creating this task",fieldType:"checkbox",fieldValue:!0}],fieldElements:n,tasks:o[0],setFieldElements:l,setTasks:o[1]}}function G(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),i=t[0],n=t[1],l=Object(a.useState)(""),r=Object(s.a)(l,2),o=r[0],c=r[1];return{showNotification:i,notificationText:o,toggleNotification:Object(a.useCallback)((function(e){c(e),n(!0),setTimeout((function(){n(!1)}),5e3)}),[n,c])}}function B(e,t){var i=["Cosmetic","Low","Medium","High","Showstopper"];return i.indexOf(e.priority)>i.indexOf(t.priority)?-1:1}var Y,J,Z=i(598),q=i(594),X=Object(a.createContext)(null),Q=i(595),$=i(600),ee=Object(b.c)(Q.a)(Y||(Y=Object(f.a)(["\n  margin: 0 10px 10px 0 !important;\n"]))),te=Object(b.c)($.a)(J||(J=Object(f.a)(["\n  margin-left: 0px !important;\n"])));function ie(e){var t=e.fields,i=e.handleChange,n={TextField:ee,FormControlLabel:te},l=n.TextField,r=n.FormControlLabel,o=Object(a.useContext)(X);return Object(O.jsx)("form",{onSubmit:function(e){return o(e)},children:t.map((function(e){switch(e.fieldType){case"text":return Object(O.jsx)(l,{label:e.fieldLabel,value:e.fieldValue,size:"small",variant:"outlined",onChange:function(t){return i(e.fieldId,t)}},e.fieldId);case"text-long":return Object(O.jsx)(l,{label:e.fieldLabel,value:e.fieldValue,multiline:!0,fullWidth:!0,rows:5,size:"small",variant:"outlined",onChange:function(t){return i(e.fieldId,t)}},e.fieldId);case"select":return Object(O.jsx)(l,{label:e.fieldLabel,value:e.fieldValue,select:!0,size:"small",variant:"outlined",onChange:function(t){return i(e.fieldId,t)},children:e.fieldOptions.map((function(e){return Object(O.jsx)(q.a,{value:e,children:e},e)}))},e.fieldId);case"button":return Object(O.jsx)(L.a,{variant:"contained",color:"primary",type:"submit",size:"large",children:e.fieldLabel},e.fieldId);case"checkbox":return Object(O.jsx)(r,{label:e.fieldLabel,control:Object(O.jsx)(Z.a,{checked:e.fieldValue,onChange:function(t){return i(e.fieldId,t)},color:"primary"})},e.fieldId);default:return null}}))})}function ne(e){var t=e.viewModel;return Object(O.jsxs)("div",{"data-testid":"task-creation-page-view",children:[Object(O.jsx)(y,{}),Object(O.jsx)("h2",{children:t.formLabel}),Object(O.jsx)(S,{show:t.showNotification,text:t.notificationText}),Object(O.jsx)(ie,{fields:t.fieldElements,handleChange:t.handleChange})]})}ie.defaultProps={fields:[],handleChange:function(){}},ne.defaultProps={viewModel:{formLabel:"",fieldElements:[],showNotification:!1,notificationText:"",handleSubmit:function(){},handleChange:function(){}}};var ae=i(82),le=i.n(ae),re=i(117),oe=i(118);var se,ce,de,fe,ue,be=i(593),pe=i(550),je=i(599),Oe=i(119),he=i.n(Oe),xe=i(120),me=i.n(xe),Te=Object(b.c)(je.a)(se||(se=Object(f.a)(["\n  * {\n    text-decoration: inherit;\n    color: inherit;\n    cursor: auto;\n  }\n"]))),ve=Object(b.b)(ce||(ce=Object(f.a)(["\n  vertical-align: top;\n  font-size: 1.1rem !important;\n  margin-right: 8px;\n"]))),Ie=Object(b.c)(he.a)(de||(de=Object(f.a)(["\n  ","\n"])),ve),ge=Object(b.c)(me.a)(fe||(fe=Object(f.a)(["\n  ","\n"])),ve);function Se(){var e={Drawer:Te,DashboardIcon:Ie,CreateTaskIcon:ge},t=e.Drawer,i=e.DashboardIcon,n=e.CreateTaskIcon;return Object(O.jsx)(t,{variant:"permanent",children:Object(O.jsxs)(be.a,{children:[Object(O.jsx)(pe.a,{button:!0,children:Object(O.jsxs)(c.b,{to:"/whoopsies/dashboard",children:[Object(O.jsx)(i,{}),"Dashboard"]})}),Object(O.jsx)(pe.a,{button:!0,children:Object(O.jsxs)(c.b,{to:"/whoopsies/create-task",children:[Object(O.jsx)(n,{}),"Create Task"]})})]})})}var Le=b.c.main(ue||(ue=Object(f.a)(["\n  margin-left: 10em;\n"])));var Ee,we=function(){var e={Content:Le}.Content,t=Object(a.useState)(!0),i=Object(s.a)(t,2),n=i[0],l=i[1],r=function(e){var t=U().getTasksFromDatabase,i=z(),n=i.tasks,l=i.setTasks,r=G(),o=r.showNotification,s=r.notificationText,c=r.toggleNotification;return Object(a.useEffect)((function(){t().then((function(e){var t=Object(V.a)(e).sort(B);l(t),c("Successfully retrieved the tasks!")})).catch((function(e){c(e.toString())}))}),[e,t,l,c]),{tasks:n,showNotification:o,notificationText:s}}(n),o=function(){var e=U(),t=e.getLatestTaskId,i=e.addTaskToDatabase,n=z(),a=n.formLabel,l=n.resetFieldElements,r=n.fieldElements,o=n.setFieldElements,s=G(),c=s.showNotification,d=s.notificationText,f=s.toggleNotification,u=function(){var e=Object(oe.a)(le.a.mark((function e(n){var a,s,c;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={},s=r[r.length-1].fieldValue,r.forEach((function(e){Object.assign(a,Object(re.a)({},e.fieldId,e.fieldValue))})),e.prev=4,e.next=7,t();case 7:return c=e.sent,e.next=10,i(c,a);case 10:f("Successfully added the item!"),s&&o(l),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),f(e.t0.toString());case 17:return e.abrupt("return",Promise.resolve());case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}();return{formLabel:a,fieldElements:r,showNotification:c,notificationText:d,handleSubmit:u,handleChange:function(e,t){var i=Object(V.a)(r),n=i.findIndex((function(t){return e===t.fieldId}));i[n].fieldValue="reset"===e?t.target.checked:t.target.value,o(i)}}}();return Object(O.jsxs)(c.a,{basename:"/",children:[Object(O.jsx)(Se,{}),Object(O.jsxs)(e,{children:[Object(O.jsx)(d.a,{path:"/whoopsies/dashboard",children:Object(O.jsx)(D,{viewModel:r})}),Object(O.jsx)(d.a,{path:"/whoopsies/create-task",children:Object(O.jsx)(X.Provider,{value:function(e){o.handleSubmit(e).then((function(){return l(!n)}))},children:Object(O.jsx)(ne,{viewModel:o})})})]})]})},ye=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,602)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),l(e),r(e)}))};var Ce=Object(b.a)(Ee||(Ee=Object(f.a)(["\n    * {\n      font-family: 'PT Sans', sans-serif;\n    }\n  "])));o.a.render(Object(O.jsxs)(l.a.StrictMode,{children:[Object(O.jsx)(Ce,{}),Object(O.jsx)(we,{})]}),document.getElementById("root")),ye()},80:function(e,t){}},[[548,1,2]]]);
//# sourceMappingURL=main.2b122e52.chunk.js.map