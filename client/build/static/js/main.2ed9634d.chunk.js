(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{309:function(e,t,a){e.exports=a(671)},671:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),c=a.n(i),l=a(251),o=a(673),s=a(674),u=a(675),m=a(25),p=a(31),d=a(32),h=a(35),g=a(33),E=a(36),f=a(17),b=a(69),y=a.n(b),v=a(5),C=a.n(v),O=a(102),j=a.n(O),N=a(104),P=a.n(N),w=a(103),S=a.n(w),k=a(106),T=a.n(k),A=a(28),D=a.n(A),x=a(243),F=a.n(x),R=a(29),_=a.n(R),I=a(105),M=a.n(I),B=a(98),L=a.n(B),q=a(99),U=a.n(q),Q=a(34),J=a.n(Q),W=a(100),z=a.n(W),V=a(101),H=a.n(V),Y=a(47),G=a.n(Y),X=a(45),K=a.n(X),Z=a(30),$=a.n(Z),ee=a(160),te=a.n(ee),ae=a(162),ne=a.n(ae),re=a(161),ie=a.n(re),ce=a(159),le=a.n(ce),oe=a(239),se=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).handleFirstPageButtonClick=function(e){a.props.onChangePage(e,0)},a.handleBackButtonClick=function(e){a.props.onChangePage(e,a.props.page-1)},a.handleNextButtonClick=function(e){a.props.onChangePage(e,a.props.page+1)},a.handleLastPageButtonClick=function(e){a.props.onChangePage(e,Math.max(0,Math.ceil(a.props.count/a.props.rowsPerPage)-1))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.count,n=e.page,i=e.rowsPerPage,c=e.theme;return r.a.createElement("div",{className:t.root},r.a.createElement($.a,{onClick:this.handleFirstPageButtonClick,disabled:0===n,"aria-label":"First Page"},"rtl"===c.direction?r.a.createElement(le.a,null):r.a.createElement(te.a,null)),r.a.createElement($.a,{onClick:this.handleBackButtonClick,disabled:0===n,"aria-label":"Previous Page"},"rtl"===c.direction?r.a.createElement(ie.a,null):r.a.createElement(ne.a,null)),r.a.createElement($.a,{onClick:this.handleNextButtonClick,disabled:n>=Math.ceil(a/i)-1,"aria-label":"Next Page"},"rtl"===c.direction?r.a.createElement(ne.a,null):r.a.createElement(ie.a,null)),r.a.createElement($.a,{onClick:this.handleLastPageButtonClick,disabled:n>=Math.ceil(a/i)-1,"aria-label":"Last Page"},"rtl"===c.direction?r.a.createElement(te.a,null):r.a.createElement(le.a,null)))}}]),t}(r.a.Component),ue=Object(f.withStyles)(function(e){return{root:{flexShrink:0,color:e.palette.text.secondary,marginLeft:2.5*e.spacing.unit}}},{withTheme:!0})(se),me=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={page:0,rowsPerPage:5},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({page:0,rowsPerPage:e.target.value})},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.classes,n=t,i=this.state,c=i.rowsPerPage,l=i.page,o=c-Math.min(c,n.length-l*c);return r.a.createElement(K.a,{className:a.root},r.a.createElement("div",{className:a.tableWrapper},r.a.createElement(L.a,{className:a.table},r.a.createElement(oe.a,null,r.a.createElement(G.a,null,r.a.createElement(J.a,{component:"th",scope:"row"},"Quantity"),r.a.createElement(J.a,{align:"right"}," Time "))),r.a.createElement(U.a,null,n.slice(l*c,l*c+c).map(function(e){return r.a.createElement(G.a,{key:e.timestamp},r.a.createElement(J.a,{component:"th",scope:"row"},e.quantity,"gm"),r.a.createElement(J.a,{align:"right"},new Date(e.timestamp).toLocaleString()))}),o>0&&r.a.createElement(G.a,{style:{height:48*o}},r.a.createElement(J.a,{colSpan:6}))),r.a.createElement(z.a,null,r.a.createElement(G.a,null,r.a.createElement(H.a,{rowsPerPageOptions:[5,10,25],colSpan:3,count:n.length,rowsPerPage:c,page:l,SelectProps:{native:!0},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage,ActionsComponent:ue}))))))}}]),t}(r.a.Component),pe=Object(f.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},table:{minWidth:500},tableWrapper:{overflowX:"auto"}}})(me),de=a(70),he=a(114),ge=a.n(he),Ee=a(240),fe=a.n(Ee),be=a(163),ye=a.n(be),ve=a(241),Ce=a.n(ve);ye.a.fcRoot(ge.a,fe.a);var Oe=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).state={timeseriesDs:{type:"timeseries",renderAt:"container",width:"600",height:"400",dataSource:{chart:{},caption:{text:"Smart Jar"},yAxis:[{plot:{value:"Jar Quantity Value",type:"column"},title:"Jar Quantity Value (in thousand)"}],data:{}}}},a.createDataTable=a.createDataTable.bind(Object(de.a)(Object(de.a)(a))),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"createDataTable",value:function(e){var t=e.reverse().map(function(e){return[Ce()(e.timestamp).format("DD-MMM-YY"),e.quantity]}),a=(new ge.a.DataStore).createDataTable(t,[{name:"Time",type:"date",format:"%d-%b-%y"},{name:"Jar Quantity Value",type:"number"}]),n=Object.assign({},this.state.timeseriesDs);n.dataSource.data=a,this.setState({timeseriesDs:n})}},{key:"componentDidMount",value:function(){this.createDataTable(this.props.data)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ye.a,this.state.timeseriesDs))}}]),t}(n.Component),je=a(242),Ne=a.n(je);var Pe=Object(f.withStyles)(function(e){return{root:{width:"100%"},warning:{color:Ne.a[700]},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"33.33%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:"".concat(e.spacing.unit,"px ").concat(2*e.spacing.unit,"px")},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}}}})(function(e){var t=e.classes,a=e.item,n=e.refill,i=a||{},c=i.itemName,l=i.details,o=l[0],s=o.quantity<700?"warning":"root",u="warning"===s?"Please refill the container":"Enough Quantity in the container";return r.a.createElement("div",{className:t.root},r.a.createElement(j.a,null,r.a.createElement(S.a,{expandIcon:r.a.createElement(F.a,null)},r.a.createElement("div",{className:t.column},r.a.createElement(D.a,{className:C()(t[s],t.heading)},c)),r.a.createElement("div",{className:t.column},r.a.createElement(D.a,{className:t.secondaryHeading},o.quantity,"gm"))),r.a.createElement(P.a,{className:t.details},r.a.createElement("div",{className:t.column},r.a.createElement(pe,{data:l})),r.a.createElement("div",{className:C()(t.column,t.helper)},r.a.createElement(D.a,{variant:"caption",className:t[s]},u)),r.a.createElement("div",{className:t.column},r.a.createElement(Oe,{data:l}))),r.a.createElement(M.a,null),r.a.createElement(T.a,null,r.a.createElement(_.a,{size:"small",color:"primary",onClick:function(){return n(c)},disabled:"warning"!==s},"Refill"))))}),we=a(244),Se=a(68),ke=a.n(Se),Te=a(107),Ae=a.n(Te),De=a(111),xe=a.n(De),Fe=a(109),Re=a.n(Fe),_e=a(110),Ie=a.n(_e),Me=a(108),Be=a.n(Me),Le=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={itemName:"",quantity:""},a.handleChange=function(e){a.setState(Object(we.a)({},e.target.name,e.target.value))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(Ae.a,{open:this.props.open,onClose:this.props.handleFormClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(Be.a,{id:"form-dialog-title"},"Subscribe"),r.a.createElement(Re.a,null,r.a.createElement(Ie.a,null,"To update or add new item in list enter the name and value in gm(max value 1000)."),r.a.createElement(ke.a,{autoFocus:!0,margin:"dense",id:"itemName",name:"itemName",label:"Item Name",type:"text",onChange:this.handleChange,fullWidth:!0}),r.a.createElement(ke.a,{margin:"dense",id:"quantity",label:"Quantity",name:"quantity",type:"number",max:1e3,onChange:this.handleChange,fullWidth:!0})),r.a.createElement(xe.a,null,r.a.createElement(_.a,{onClick:function(t){return e.props.handleFormClose(t)},color:"secondary"},"Cancel"),r.a.createElement(_.a,{disabled:!(this.state.quantity&&this.state.itemName),onClick:function(t){return e.props.handleFormClose(t,{itemName:e.state.itemName,quantity:e.state.quantity})},color:"primary"},"Update Value")))}}]),t}(r.a.Component),qe=a(112),Ue=a.n(qe),Qe=a(245),Je=a.n(Qe),We=(a(71),a(164),"ADD_CONTAINER_REQUEST"),ze="ADD_CONTAINER_SUCCESS",Ve="ADD_CONTAINER_FAILURE",He="UPDATE_CONTAINER_REQUEST",Ye="UPDATE_CONTAINER_SUCCESS",Ge="UPDATE_CONTAINER_FAILURE",Xe="DELETE_CONTAINER",Ke="DELETE_ALL_CONTAINERS",Ze="SELECT_CONTAINER",$e=a(165),et=a.n($e),tt=function(){var e=localStorage.getItem("id_token");return{headers:{Authorization:e?"Bearer ".concat(e):""}}},at=function(e,t){var a=tt();return et.a.post(e,t,a)},nt=function(e){return new Promise(function(t,a){(function(e,t){var a=tt();return et.a.get(e,a)})(e).then(function(e){var n=e.data,r=n.success,i=n.data;if(!r)return a(e);t({container:{list:i||[]}})}).catch(function(e){a(new Error("Error: ",e))})})};function rt(e,t){return{type:t,isFetching:!0,payload:e}}function it(e,t){return{type:t,isFetching:!0,payload:e}}function ct(e,t){return{type:t,isFetching:!0,payload:e}}var lt=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={editing:!1,formOpen:!1},a.refill=function(e){a.props.addContainer(e,1e3)},a.handleModal=function(e,t){a.setState({formOpen:!a.state.formOpen}),t&&t.itemName&&t.quantity&&a.props.addContainer(t)},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.list,n=t.classes;return r.a.createElement("div",{className:n.root},r.a.createElement(y.a,{container:!0,spacing:16},a.map(function(t){return r.a.createElement(y.a,{item:!0,md:12,key:t.itemName},r.a.createElement(Pe,{item:t,refill:e.refill}))})),r.a.createElement(Ue.a,{color:"secondary",className:n.fab,onClick:this.handleModal},r.a.createElement(Je.a,null)),r.a.createElement(Le,{open:this.state.formOpen,handleFormClose:this.handleModal}))}}]),t}(r.a.Component),ot=Object(f.withStyles)(function(e){return{root:{flexGrow:1},paper:{width:"100%"},control:{padding:2*e.spacing.unit},fab:{position:"fixed",bottom:5,right:5}}})(lt),st=[{path:"/",name:"ContainerComponent",component:Object(m.connect)(function(e){return{selected:!!e.container.selected&&!!e.container.selected.name,list:e.container.list}},{addContainer:function(e){return function(t){return t(rt(e,We)),at("/api/v1/containers/addContainer",e).then(function(e){var a=e.data,n=a.success,r=a.data,i=a.error;if(!n)return t(it(i,Ve)),Promise.reject(r);t(ct(r,ze))}).catch(Promise.reject)}},findContainer:function(e){return function(t){return t(rt(e,We)),at("/api/v1/containers",e).then(function(e){var a=e.data,n=a.success,r=a.data,i=a.error;if(!n)return t(it(i,Ve)),Promise.reject(r);t(ct(r,ze))}).catch(Promise.reject)}}})(ot)}],ut=a(21),mt=a(246),pt=a.n(mt),dt=a(247),ht={isFetching:!1,isEditing:!1,list:[]};var gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case We:return Object.assign({},e,{isFetching:!0});case ze:var a=e.list;return e.list.indexOf(t.payload.itemName)?a=a.map(function(e){return e.itemName===t.payload.itemName?t.payload:e}):a.push(t.payload),Object.assign({},e,{isFetching:!1,list:a});case Ve:case Ge:return Object.assign({},e,{isFetching:!1,errorMessage:t.payload.errorMessage});case Ye:return Object.assign({},e,{isFetching:!1,list:t.payload});case He:return Object.assign({},e,{isFetching:!0});case Ze:return Object.assign({},e,{isFetching:!1,selected:t.payload});case Xe:return Object.assign({},e,{isFetching:!1,selected:{},list:t.payload});case Ke:return Object.assign({},e,{isFetching:!1,selected:{},list:[]});default:return e}},Et=a(248),ft=Object(ut.combineReducers)({container:gt,form:Et.reducer}),bt=a(249),yt=[dt.a,pt.a],vt={},Ct=Object(l.a)();nt("/api/v1/containers").then(function(e){return Object(ut.createStore)(ft,e,Object(bt.composeWithDevTools)(ut.applyMiddleware.apply(void 0,yt)))}).catch(function(e){return Object(ut.createStore)(ft,vt,ut.applyMiddleware.apply(void 0,yt))}).then(function(e){c.a.render(r.a.createElement(m.Provider,{store:e},r.a.createElement(o.a,{history:Ct},r.a.createElement(s.a,null,st.map(function(e,t){return r.a.createElement(u.a,{path:e.path,key:t,component:e.component})})))),document.getElementById("root"))})}},[[309,2,1]]]);
//# sourceMappingURL=main.2ed9634d.chunk.js.map