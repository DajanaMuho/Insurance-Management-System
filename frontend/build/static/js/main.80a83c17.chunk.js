(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{116:function(e,t,r){"use strict";r.r(t);var a=r(18),n=r.n(a),s=(r(68),r(69),r(70),r(14)),c=r(10),i=r(5),o=r.n(i),u=r(7),l=r(11),d=r(8),b=(r(19),r(1)),j=r(4),m=r(2),h=r(36).default;var p=function(e){var t=Object(b.useState)({name:"",addressEmail:"",location:"",licenseNumber:"",password:""}),r=Object(d.a)(t,2),a=r[0],n=r[1],s=Object(c.g)(),i=function(e){var t=e.currentTarget||e.target,r=t.name,s=t.value,c=Object(l.a)({},a);c[r]=s,n(c)},p=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,h.register(a);case 4:if(!e.sent){e.next=7;break}return e.abrupt("return",s.push("/auth/login"));case 7:alert("We couldn't register to the system!"),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(0),alert(e.t0.message),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(j.g,{className:"containerClass",children:Object(m.jsx)(j.A,{className:"rowClass",children:Object(m.jsx)(j.e,{md:"6",children:Object(m.jsx)(j.c,{children:Object(m.jsx)(j.d,{children:Object(m.jsxs)("form",{onSubmit:p,children:[Object(m.jsx)("p",{className:"h5 text-center py-4",children:"SIGN UP"}),Object(m.jsxs)("div",{className:"grey-text",children:[Object(m.jsx)(j.o,{label:"Name",name:"name",icon:"user",type:"text",validate:!0,error:"wrong",success:"right",value:a.name,onChange:i}),Object(m.jsx)(j.o,{label:"Location",name:"location",icon:"map-marker-alt",type:"text",validate:!0,error:"wrong",success:"right",value:a.location,onChange:i}),Object(m.jsx)(j.o,{label:"Business License Number",name:"licenseNumber",icon:"id-card",type:"text",validate:!0,error:"wrong",success:"right",value:a.licenseNumber,onChange:i}),Object(m.jsx)(j.o,{label:"Address Email",name:"addressEmail",icon:"envelope",type:"email",validate:!0,error:"wrong",success:"right",value:a.addressEmail,onChange:i}),Object(m.jsx)(j.o,{label:"Password",name:"password",icon:"lock",type:"password",validate:!0,value:a.password,onChange:i})]}),Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)(j.b,{className:"btn submit",type:"submit",children:" REGISTER "}),Object(m.jsx)("div",{className:"p-2",children:Object(m.jsxs)("p",{children:[" Already have an account? ",Object(m.jsx)("a",{href:"/auth/login",children:"Login"})," "]})})]})]})})})})})})},f=r(36).default;var O=function(e){var t=Object(b.useState)(""),r=Object(d.a)(t,2),a=r[0],n=r[1],s=Object(b.useState)(""),i=Object(d.a)(s,2),l=i[0],h=i[1],p=Object(c.g)(),O=function(e){var t=e.currentTarget||e.target,r=t.name,a=t.value;"email"===r?n(a):h(a)},x=function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,f.login({addressEmail:a,password:l});case 4:if(!(r=e.sent)){e.next=8;break}return localStorage.setItem("token",r),e.abrupt("return",p.push("/main/dashboard"));case 8:alert("We couldn't login to the system!"),e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),alert(e.t0.message),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(j.g,{className:"containerClass",children:Object(m.jsx)(j.A,{className:"rowClass",children:Object(m.jsx)(j.e,{md:"6",children:Object(m.jsx)(j.c,{children:Object(m.jsx)(j.d,{children:Object(m.jsxs)("form",{children:[Object(m.jsx)("p",{className:"h5 text-center mb-4",children:"SIGN IN"}),Object(m.jsxs)("div",{className:"grey-text",children:[Object(m.jsx)(j.o,{label:"Address Email",name:"email",icon:"envelope",type:"email",validate:!0,error:"wrong",success:"right",value:a,onChange:O}),Object(m.jsx)(j.o,{label:"Password",name:"password",icon:"lock",type:"password",validate:!0,value:l,onChange:O})]}),Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)(j.b,{className:"btn submit",onClick:x,children:"Login"}),Object(m.jsx)("div",{className:"p-2",children:Object(m.jsx)("a",{className:"p-4",href:"/auth/register",children:"Create new account"})})]})]})})})})})})},x=r(23);var g=function(e){Object(c.g)();var t=Object(b.useState)({dashboard:e.dashboardActive||!1,customers:e.customersActive||!1,devices:e.devicesActive||!1,profile:e.profileActive||!1}),r=Object(d.a)(t,2),a=r[0];return r[1],Object(m.jsx)("div",{children:Object(m.jsxs)(j.v,{className:"navbarBackground",dark:!0,expand:"md",scrolling:!0,fixed:"top",children:[Object(m.jsx)(j.w,{href:"/",children:Object(m.jsx)(j.u,{to:"/main/profile",className:a.profile,children:Object(m.jsx)(j.m,{className:"icon",icon:"user"})})}),Object(m.jsxs)(j.f,{navbar:!0,children:[Object(m.jsxs)(j.x,{left:!0,children:[Object(m.jsx)(j.t,{className:a.dashboard,children:Object(m.jsx)(j.u,{to:"/main/dashboard",children:"Dashboard"})}),Object(m.jsx)(j.t,{className:a.customers,children:Object(m.jsx)(j.u,{to:"/main/customers",children:"Customers"})}),Object(m.jsx)(j.t,{className:a.devices,children:Object(m.jsx)(j.u,{to:"/main/devices",children:"Devices"})})]}),Object(m.jsx)(j.x,{right:!0,children:Object(m.jsx)(j.t,{children:Object(m.jsx)(j.u,{to:"/auth/login",onClick:function(){return localStorage.removeItem("token"),void localStorage.removeItem("selectedCustomer")},children:Object(m.jsx)(j.m,{icon:"sign-out-alt"})})})})]})]})})},v=r(25).default;var w=function(e){var t=localStorage.getItem("token"),r=Object(b.useState)([]),a=Object(d.a)(r,2),n=a[0],s=a[1],c=localStorage.getItem("selectedCustomer"),i=Object(b.useState)(c?JSON.parse(c):{id:null,name:"Choose Customer"}),l=Object(d.a)(i,2),h=l[0],p=l[1],f=Object(b.useState)(!!localStorage.getItem("predictedValue")&&JSON.parse(localStorage.getItem("predictedValue"))),O=Object(d.a)(f,2),w=O[0],k=O[1],y=Object(b.useState)(localStorage.getItem("predictedAmount")?JSON.parse(localStorage.getItem("predictedAmount")):0),C=Object(d.a)(y,2),S=C[0],N=C[1],I=Object(b.useState)({labels:["Intensity08","Intensity09","Intensity10","Intensity11","Intensity12"],datasets:[{label:"Left Turn Intensity",fill:!0,lineTension:.3,backgroundColor:"rgba(175, 175, 65, .3)",borderColor:"rgb(175, 175, 65)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(86, 96, 64)",pointBackgroundColor:"rgb(78, 55, 3)",pointBorderWidth:10,pointHoverRadius:5,pointHoverBackgroundColor:"rgb(0, 0, 0)",pointHoverBorderColor:"rgba(220, 220, 220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:localStorage.getItem("left")?JSON.parse(localStorage.getItem("left")):[]}]}),_=Object(d.a)(I,2),A=_[0],B=_[1],E=Object(b.useState)({labels:["January","February","March","April","May","June","July"],datasets:[{label:"Annual Percentage Of Time On The Road",fill:!0,lineTension:.3,backgroundColor:"rgba(213, 248, 255, .3)",borderColor:"rgb(133, 179, 209, 1.00)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(0, 27, 67)",pointBackgroundColor:"rgb(0, 27, 67, .5)",pointBorderWidth:10,pointHoverRadius:5,pointHoverBackgroundColor:"rgb(0, 0, 0)",pointHoverBorderColor:"rgba(220, 220, 220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:localStorage.getItem("time")?JSON.parse(localStorage.getItem("time")):[]}]}),D=Object(d.a)(E,2),P=D[0],T=D[1],J=Object(b.useState)({labels:["Intensity08","Intensity09","Intensity10","Intensity11","Intensity12"],datasets:[{label:"Right Turn Intensity",fill:!0,lineTension:.3,backgroundColor:"rgba(251, 221, 118, .5)",borderColor:"rgb(249, 212, 85)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(111, 88, 0)",pointBackgroundColor:"rgb(41, 32, 2)",pointBorderWidth:10,pointHoverRadius:5,pointHoverBackgroundColor:"rgb(0, 0, 0)",pointHoverBorderColor:"rgba(220, 220, 220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:localStorage.getItem("right")?JSON.parse(localStorage.getItem("right")):[]}]}),M=Object(d.a)(J,2),L=M[0],G=M[1],R=Object(b.useState)({labels:["Accel.06miles","Accel.08miles","Accel.09miles","Accel.11miles","Accel.12miles","Accel.14miles"],datasets:[{label:"Sudden Acceleration",data:localStorage.getItem("acc")?JSON.parse(localStorage.getItem("acc")):[],backgroundColor:["rgba(72, 123, 177, .5)","rgba(175, 175, 65, .5)","rgba(175, 96, 65, .5)","rgba(172, 232, 120, .5)","rgba(90, 81, 2, .5)","rgba(251, 221, 118, .5)"]}]}),H=Object(d.a)(R,2),W=H[0],z=H[1],F=Object(b.useState)({labels:["Brake.06miles","Brake.08miles","Brake.09miles","Brake.11miles","Brake.12miles","Brake.14miles"],datasets:[{label:"Sudden Brakes",data:localStorage.getItem("brake")?JSON.parse(localStorage.getItem("brake")):[],backgroundColor:["rgba(72, 123, 177, .5)","rgba(175, 175, 65, .5)","rgba(175, 96, 65, .5)","rgba(172, 232, 120, .5)","rgba(90, 81, 2, .5)","rgba(251, 221, 118, .5)"]}]}),U=Object(d.a)(F,2),V=U[0],q=U[1],Y=function(){var e=Object(u.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getCustomers(t);case 3:r=e.sent,s(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(u.a)(o.a.mark((function e(t){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target,a={id:r.value,name:r.textContent},e.next=4,Q(a.id);case 4:localStorage.setItem("selectedCustomer",JSON.stringify(a)),p(a),window.location.reload(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(u.a)(o.a.mark((function e(r){var a,n,s,c,i,u,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getMachineGeneratedData(t,r);case 2:a=e.sent,n=[],s=[],c=[],i=[],u=[],l=!1,d=0,(a||[]).forEach((function(e){n.push(e.Left_turn_intensity08,e.Left_turn_intensity09,e.Left_turn_intensity10,e.Left_turn_intensity11,e.Left_turn_intensity12),s.push(e.Pct_drive_mon,e.Pct_drive_tue,e.Pct_drive_wed,e.Pct_drive_thr,e.Pct_drive_fri,e.Pct_drive_sat,e.Pct_drive_sun),c.push(e.Right_turn_intensity08,e.Right_turn_intensity09,e.Right_turn_intensity10,e.Right_turn_intensity11,e.Right_turn_intensity12),i.push(e.Accel_06miles,e.Accel_08miles,e.Accel_09miles,e.Accel_11miles,e.Accel_12miles,e.Accel_14miles),u.push(e.Brake_06miles,e.Brake_08miles,e.Brake_09miles,e.Brake_11miles,e.Brake_12miles,e.Brake_14miles),l=e.predictedClaimValue,d=e.predictedClaimAmount})),A.datasets[0].data=n,localStorage.setItem("left",JSON.stringify(n)),P.datasets[0].data=s,localStorage.setItem("time",JSON.stringify(s)),L.datasets[0].data=c,localStorage.setItem("right",JSON.stringify(c)),W.datasets[0].data=i,localStorage.setItem("acc",JSON.stringify(i)),V.datasets[0].data=u,localStorage.setItem("brake",JSON.stringify(u)),B(A),T(P),G(L),z(W),q(V),localStorage.setItem("predictedValue",JSON.stringify(l)),k(l),localStorage.setItem("predictedAmount",JSON.stringify(d)),N(d);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){Y()}),[n,A,P,L,W,V]),Object(m.jsxs)(j.g,{className:"dashboardGrid",children:[Object(m.jsx)(g,{dashboardActive:"active"}),Object(m.jsxs)(j.A,{className:"notification",children:[Object(m.jsxs)(j.i,{dropleft:!0,children:[Object(m.jsx)(j.l,{caret:!0,children:h.name}),Object(m.jsx)(j.k,{basic:!0,children:n.map((function(e){return Object(m.jsxs)(j.j,{value:e._id,active:h.id===e._id,onClick:function(e){return K(e)},children:[" ",e.firstName+"  "+e.lastName," "]})}))})]}),h.id&&Object(m.jsxs)("span",{className:"p-3",children:[" According to Machine Learning model there is a",Object(m.jsxs)("p",{className:w?"text-success d-inline":"text-danger d-inline",children:[" ",w?"higher":"lower"," "]}),"chance of customer making an insurance claim. Amount:  ",Object(m.jsx)("p",{className:"font-weight-bold d-inline ",children:S})]})]}),h.id&&Object(m.jsxs)(j.A,{children:[Object(m.jsx)(j.e,{children:Object(m.jsx)(x.b,{data:A,options:{responsive:!0}})}),Object(m.jsx)(j.e,{children:Object(m.jsx)(x.b,{data:P,options:{responsive:!0}})}),Object(m.jsx)(j.e,{children:Object(m.jsx)(x.b,{data:L,options:{responsive:!0}})})]}),h.id&&Object(m.jsxs)(j.A,{children:[Object(m.jsx)("div",{className:"w-100"}),Object(m.jsx)(j.e,{children:Object(m.jsx)(x.a,{data:W,options:{responsive:!0}})}),Object(m.jsx)(j.e,{children:Object(m.jsx)(x.a,{data:V,options:{responsive:!0}})})]})]})},k=r(25).default;var y=function(e){var t=Object(b.useState)(e.customer),r=Object(d.a)(t,2),a=r[0],n=r[1],s=Object(c.g)(),i=function(){return e.setShowModal(!e.showModal)},h=function(e){var t=e.currentTarget||e.target,r=t.name,s=t.value,c=Object(l.a)({},a);c[r]=s,n(c)},p=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,k.editCustomer(a,localStorage.getItem("token"));case 4:if(!e.sent){e.next=8;break}return i(),e.abrupt("return",s.push("/main/customers"));case 8:return e.abrupt("return",console.log("opps try again"));case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(j.g,{children:Object(m.jsxs)(j.p,{isOpen:e.showModal,centered:!0,children:[Object(m.jsx)(j.s,{children:"Add Customers"}),Object(m.jsx)(j.q,{children:Object(m.jsx)("form",{children:Object(m.jsxs)("div",{className:"grey-text",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(j.o,{label:"First Name",icon:"user",name:"firstName",value:a.firstName,type:"text",onChange:h,validate:!0,error:"wrong",success:"right"}),Object(m.jsx)(j.o,{label:"Last Name",icon:"user",name:"lastName",value:a.lastName,type:"email",onChange:h,validate:!0,error:"wrong",success:"right"})]}),Object(m.jsx)(j.o,{label:"Email Address",icon:"envelope",name:"addressEmail",value:a.addressEmail,onChange:h,type:"email",validate:!0,error:"wrong",success:"right"}),Object(m.jsx)(j.o,{label:"Phone Number",icon:"phone-alt",name:"phoneNumber",value:a.phoneNumber,onChange:h,type:"number",validate:!0,error:"wrong",success:"right"}),Object(m.jsx)(j.o,{label:"Age",icon:"sort-numeric-up",name:"age",value:a.age,type:"number",onChange:h,validate:!0,error:"wrong",success:"right"}),Object(m.jsxs)("div",{className:"md-form",children:[Object(m.jsx)(j.m,{icon:"venus-mars",size:"2x"}),Object(m.jsxs)("select",{onChange:h,name:"gender",className:"browser-default custom-select",children:[Object(m.jsx)("option",{disabled:!0,selected:!0,hidden:!0,children:" Gender"}),Object(m.jsx)("option",{value:"female",selected:"female"===a.gender,children:"Female"}),Object(m.jsx)("option",{value:"male",selected:"male"===a.gender,children:"Male"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(j.m,{icon:"ring",size:"2x"}),Object(m.jsxs)("select",{onChange:h,name:"martialStatus",className:"browser-default custom-select",children:[Object(m.jsx)("option",{disabled:!0,selected:!0,hidden:!0,children:"Martial Status"}),Object(m.jsx)("option",{value:"single",selected:"single"===a.martialStatus,children:"Single"}),Object(m.jsx)("option",{value:"married",selected:"married"===a.martialStatus,children:"Married"}),Object(m.jsx)("option",{value:"widowed",selected:"widowed"===a.martialStatus,children:"Widowed"}),Object(m.jsx)("option",{value:"divorced",selected:"divorced"===a.martialStatus,children:"Divorced"})]})]})]})})}),Object(m.jsxs)(j.r,{children:[Object(m.jsx)(j.b,{onClick:function(){return i()},children:"Close"}),Object(m.jsx)(j.b,{onClick:function(e){return p(e)},children:"Save changes"})]})]})})},C=r(25).default;var S=function(e){var t=Object(c.g)(),r=Object(b.useState)({columns:[{label:"First Name",field:"firstName",sort:"asc",width:150},{label:"Last Name",field:"lastName",sort:"asc",width:150},{label:"Email Address",field:"addressEmail",sort:"asc",width:150},{label:"Phone Number",field:"phoneNumber",sort:"asc",width:150},{label:"Gender",field:"gender",sort:"asc",width:150},{label:"Age",field:"age",sort:"asc",width:150},{label:"Martial Status",field:"martialStatus",sort:"asc",width:150},{label:"Action",field:"customer",sort:"asc",width:150}],rows:[]}),a=Object(d.a)(r,2),n=a[0],s=a[1],i=Object(b.useState)(!1),h=Object(d.a)(i,2),p=h[0],f=h[1],O=Object(b.useState)({firstName:"",lastName:"",addressEmail:"",phoneNumber:"",gender:"",age:"",martialStatus:""}),x=Object(d.a)(O,2),v=x[0],w=x[1],k=localStorage.getItem("token"),S=function(e){var t=e.currentTarget||e.target,r=n.rows.find((function(e){return e._id===t.id}));return w(r),f(!0)},N=function(){var e=Object(u.a)(o.a.mark((function e(r){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.currentTarget||r.target,e.next=3,C.deleteCustomerById(k,a.id);case 3:if(!(n=e.sent)){e.next=6;break}return e.abrupt("return",t.push("/main/customers"));case 6:alert(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getCustomers(k);case 2:t=e.sent,r=Object(l.a)({},n),t.forEach((function(e){e.customer=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(j.b,{size:"sm",id:e._id,onClick:function(e){return S(e)},children:[" ",Object(m.jsx)(j.m,{icon:"pencil-alt"}),"  "]}),Object(m.jsxs)(j.b,{size:"sm",id:e._id,onClick:function(e){N(e)},children:["  ",Object(m.jsx)(j.m,{icon:"trash-alt"}),"  "]})]})})),r.rows=t,s(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){I()}),[p,n,v]),Object(m.jsxs)("div",{children:[Object(m.jsx)(g,{customersActive:"active"}),Object(m.jsxs)("div",{className:"tableStyle",children:[Object(m.jsxs)(j.b,{onClick:function(){w({firstName:"",lastName:"",addressEmail:"",phoneNumber:"",gender:"",age:"",martialStatus:""}),f(!p)},children:[" ",Object(m.jsx)(j.m,{icon:"plus"})," "]}),Object(m.jsx)(j.h,{striped:!0,bordered:!0,hover:!0,data:n})]}),p&&Object(m.jsx)(y,{customer:v,setShowModal:f,showModal:p})]})},N=r(25).default;var I=function(e){var t=Object(b.useState)(e.selectedDevice),r=Object(d.a)(t,2),a=r[0],n=r[1],s=Object(c.g)(),i=function(){return e.setShowModal(!e.showModal)},h=function(e){var t=e.currentTarget||e.target,r=t.name,s=t.value,c=Object(l.a)({},a);c[r]=s,n(c)},p=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,N.editDevice(a,localStorage.getItem("token"));case 4:if(!e.sent){e.next=8;break}return i(),e.abrupt("return",s.push("/main/devices"));case 8:return e.abrupt("return",console.log("opps try again"));case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(j.g,{children:Object(m.jsxs)(j.p,{isOpen:e.showModal,centered:!0,children:[Object(m.jsx)(j.s,{children:"Add Devices"}),Object(m.jsx)(j.q,{children:Object(m.jsx)("form",{children:Object(m.jsxs)("div",{className:"grey-text",children:[Object(m.jsx)(j.o,{label:"Car Age",icon:"sort-numeric-up",name:"carAge",value:a.carAge,type:"number",onChange:h,validate:!0,error:"wrong",success:"right"}),Object(m.jsx)(j.o,{label:"License Plate",icon:"car",name:"licensePlate",value:a.licensePlate,type:"email",onChange:h,validate:!0,error:"wrong",success:"right"}),Object(m.jsxs)("div",{children:[Object(m.jsx)(j.m,{icon:"user",size:"2x"}),Object(m.jsxs)("select",{onChange:h,name:"customerId",className:"browser-default custom-select",children:[Object(m.jsx)("option",{disabled:!0,selected:!0,hidden:!0,children:"Customer"}),e.customers.map((function(e){return Object(m.jsxs)("option",{selected:e._id===a.customerId,value:e._id,children:[" ",e.firstName+"  "+e.lastName," "]})}))]})]})]})})}),Object(m.jsxs)(j.r,{children:[Object(m.jsx)(j.b,{color:"secondary",onClick:function(){return i()},children:"Close"}),Object(m.jsx)(j.b,{color:"primary",onClick:function(e){return p(e)},children:"Save changes"})]})]})})},_=r(25).default;var A=function(e){var t=Object(c.g)(),r=Object(b.useState)({columns:[{label:"Car Age",field:"carAge",sort:"asc",width:150},{label:"License Plate",field:"licensePlate",sort:"asc",width:150},{label:"Customer",field:"customerName",sort:"asc",width:150},{label:"Action",field:"device",sort:"asc",width:150}],rows:[]}),a=Object(d.a)(r,2),n=a[0],s=a[1],i=Object(b.useState)(!1),h=Object(d.a)(i,2),p=h[0],f=h[1],O=Object(b.useState)([]),x=Object(d.a)(O,2),v=x[0],w=x[1],k=Object(b.useState)({carAge:"",licensePlate:"",customerId:"",customerName:""}),y=Object(d.a)(k,2),C=y[0],S=y[1],N=localStorage.getItem("token"),A=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getCustomers(N);case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(e){var t=e.currentTarget||e.target,r=n.rows.find((function(e){return e._id===t.id}));return S(r),f(!0)},E=function(){var e=Object(u.a)(o.a.mark((function e(r){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.currentTarget||r.target,e.next=3,_.deleteDeviceById(N,a.id);case 3:if(!(n=e.sent)){e.next=6;break}return e.abrupt("return",t.push("/main/devices"));case 6:alert(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getDevices(N);case 2:return t=(t=e.sent).map(function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.customerId){e.next=5;break}return e.next=3,a=t.customerId,_.getCustomerById(N,a);case 3:r=e.sent,t.customerName=r.firstName+" "+r.lastName;case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()),r=Object(l.a)({},n),e.next=7,Promise.all(t);case 7:(t=e.sent).forEach((function(e){e.device=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(j.b,{size:"sm",id:e._id,onClick:function(e){return B(e)},children:["  ",Object(m.jsx)(j.m,{icon:"pencil-alt"}),"  "]}),Object(m.jsxs)(j.b,{size:"sm",id:e._id,onClick:function(e){E(e)},children:["  ",Object(m.jsx)(j.m,{icon:"trash-alt"}),"  "]})]})})),r.rows=t,s(r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){!0===p&&A(),D()}),[p,n,C]),Object(m.jsxs)("div",{children:[Object(m.jsx)(g,{devicesActive:"active"}),Object(m.jsxs)("div",{className:"tableStyle",children:[Object(m.jsxs)(j.b,{onClick:function(){S({carAge:"",licensePlate:"",customerId:""}),f(!p)},children:[" ",Object(m.jsx)(j.m,{icon:"plus"})," "]}),Object(m.jsx)(j.h,{striped:!0,bordered:!0,hover:!0,data:n})]}),p&&Object(m.jsx)(I,{setShowModal:f,selectedDevice:C,customers:v,showModal:p})]})},B=r(36).default;var E=function(e){var t=Object(b.useState)({}),r=Object(d.a)(t,2),a=r[0],n=r[1],s=Object(c.g)(),i=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getLoggedUser(localStorage.getItem("token"));case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,B.updateProfile(localStorage.getItem("token"),a);case 4:if(!e.sent){e.next=7;break}return e.abrupt("return",s.push("/main/profile"));case 7:alert("We couldn't edit your profile!"),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(0),alert(e.t0.message),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.currentTarget||e.target,r=t.name,s=t.value,c=Object(l.a)({},a);c[r]=s,n(c)};return Object(b.useEffect)((function(){i()}),[]),Object(m.jsxs)(j.g,{className:"containerClass",children:[Object(m.jsx)(g,{profileActive:"active"}),Object(m.jsx)(j.A,{className:"rowClass",children:Object(m.jsx)(j.e,{md:"6",children:Object(m.jsx)(j.c,{children:Object(m.jsx)(j.d,{children:Object(m.jsxs)("form",{children:[Object(m.jsx)("p",{className:"h5 text-center py-4",children:" Update Your Profile "}),Object(m.jsxs)("div",{className:"grey-text",children:[Object(m.jsx)(j.o,{label:"Name",name:"name",icon:"user",type:"text",validate:!0,error:"wrong",success:"right",value:a.name,onChange:p}),Object(m.jsx)(j.o,{label:"Location",name:"location",icon:"map-marker-alt",type:"text",validate:!0,error:"wrong",success:"right",value:a.location,onChange:p}),Object(m.jsx)(j.o,{label:"Business License Number",name:"licenseNumber",icon:"id-card",type:"text",validate:!0,error:"wrong",success:"right",value:a.licenseNumber,onChange:p}),Object(m.jsx)(j.o,{label:"Address Email",name:"addressEmail",icon:"envelope",type:"email",validate:!0,error:"wrong",success:"right",value:a.addressEmail,onChange:p}),Object(m.jsx)(j.o,{disabled:!0,label:"Password",name:"password",icon:"lock",type:"password",validate:!0,value:a.password,onChange:p})]}),Object(m.jsx)("div",{className:"text-center py-4 mt-3",children:Object(m.jsx)(j.b,{className:"btn submit",type:"submit",onClick:function(e){return h(e)},children:"Update"})})]})})})})})]})};var D=function(){var e=function(){return!!localStorage.getItem("token")};return Object(m.jsx)(s.a,{children:Object(m.jsxs)(c.d,{children:[Object(m.jsx)(c.b,{exact:!0,path:"/",render:function(){return e()?Object(m.jsx)(c.a,{to:"/main/dashboard"}):Object(m.jsx)(p,{})}}),Object(m.jsx)(c.b,{exact:!0,path:"/auth/register",render:function(){return e()?Object(m.jsx)(c.a,{to:"/main/dashboard"}):Object(m.jsx)(p,{})}}),Object(m.jsx)(c.b,{exact:!0,path:"/auth/login",render:function(){return e()?Object(m.jsx)(c.a,{to:"/main/dashboard"}):Object(m.jsx)(O,{})}}),Object(m.jsx)(c.b,{exact:!0,path:"/main",render:function(){return e()?Object(m.jsx)(w,{}):Object(m.jsx)(c.a,{to:"/auth/login"})}}),Object(m.jsx)(c.b,{exact:!0,path:"/main/dashboard",render:function(){return e()?Object(m.jsx)(w,{}):Object(m.jsx)(c.a,{to:"/auth/login"})}}),Object(m.jsx)(c.b,{exact:!0,path:"/main/customers",render:function(){return e()?Object(m.jsx)(S,{}):Object(m.jsx)(c.a,{to:"/auth/login"})}}),Object(m.jsx)(c.b,{exact:!0,path:"/main/devices",render:function(){return e()?Object(m.jsx)(A,{}):Object(m.jsx)(c.a,{to:"/auth/login"})}}),Object(m.jsx)(c.b,{exact:!0,path:"/main/profile",render:function(){return e()?Object(m.jsx)(E,{}):Object(m.jsx)(c.a,{to:"/auth/login"})}})]})})};n.a.render(Object(m.jsx)(D,{}),document.getElementById("root"))},19:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var a=r(5),n=r.n(a),s=r(7),c=r(13),i=r.n(c),o="https://api-dot-neon-azimuth-333320.uc.r.appspot.com",u=function(){var e=Object(s.a)(n.a.mark((function e(t,r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"POST",url:o+"/main/editCustomer",data:t,headers:{"auth-token":r}});case 2:if(a=e.sent,403!==a.data.statusCode){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"GET",url:o+"/main/getCustomers",headers:{"auth-token":t}});case 2:if(r=e.sent,403!==(a=r.data).statusCode){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(n.a.mark((function e(t,r){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"GET",url:o+"/main/getCustomerById?customerId=".concat(r),headers:{"auth-token":t}});case 2:if(a=e.sent,403!==(s=a.data).statusCode){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(n.a.mark((function e(t,r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"GET",url:o+"/main/deleteCustomer?customerId=".concat(r),headers:{"auth-token":t}});case 2:if(a=e.sent,403!==a.data.statusCode){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(n.a.mark((function e(t,r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"POST",url:o+"/main/editDevice",data:t,headers:{"auth-token":r}});case 2:if(a=e.sent,403!==a.data.statusCode){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"GET",url:o+"/main/getDevices",headers:{"auth-token":t}});case 2:if(r=e.sent,403!==(a=r.data).statusCode){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(n.a.mark((function e(t,r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"GET",url:o+"/main/deleteDevice?deviceId=".concat(r),headers:{"auth-token":t}});case 2:if(a=e.sent,403!==a.data.statusCode){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(n.a.mark((function e(t,r){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"GET",url:o+"/main/getMachineGeneratedData?customerId=".concat(r),headers:{"auth-token":t}});case 2:if(a=e.sent,403!==(s=a.data).statusCode&&103!==s.statusCode){e.next=6;break}return e.abrupt("return",[]);case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"POST",url:o+"/main/addMachineGeneratedData",headers:{"auth-token":t}});case 2:if(r=e.sent,403!==r.data.statusCode){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={editCustomer:u,getCustomers:l,editDevice:j,getDevices:m,getCustomerById:d,deleteCustomerById:b,deleteDeviceById:h,getMachineGeneratedData:p,addMachineGenerateData:f};t.default=O},36:function(e,t,r){"use strict";r.r(t);var a=r(5),n=r.n(a),s=r(7),c=r(13),i=r.n(c),o="https://api-dot-neon-azimuth-333320.uc.r.appspot.com",u=function(){var e=Object(s.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({method:"POST",url:o+"/register",data:t});case 3:if(r=e.sent,200!==r.data.statusCode){e.next=7;break}return e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"POST",url:o+"/login",data:t});case 2:if(r=e.sent,403!==(a=r.data).statusCode&&400!==a.statusCode){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"GET",url:o+"/getLoggedUser",headers:{"auth-token":t}});case 2:if(r=e.sent,403!==(a=r.data).statusCode&&400!==a.statusCode){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(n.a.mark((function e(t,r){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"POST",url:o+"/editInsuranceCompany",headers:{"auth-token":t},data:r});case 2:if(a=e.sent,403!==(s=a.data).statusCode&&400!==s.statusCode){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),j={register:u,login:l,getLoggedUser:d,updateProfile:b};t.default=j}},[[116,1,2]]]);
//# sourceMappingURL=main.80a83c17.chunk.js.map