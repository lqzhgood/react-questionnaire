"use strict";(self.webpackChunkreact_questionnaire=self.webpackChunkreact_questionnaire||[]).push([[510],{37404:function(e,t,n){n.d(t,{YT:function(){return Ze},I0:function(){return je},PS:function(){return ge}});var l,r=n(4942),i=n(56068),a=n(1413),s=n(72791),o={title:"\u8f93\u5165\u6846\u6807\u9898",placeholder:"\u8bf7\u8f93\u5165"},c=n(16921),u=n(86005),d=n(80184),h=c.Z.Paragraph,x=function(e){var t=(0,a.Z)((0,a.Z)({},o),e),n=t.title,l=t.placeholder;return(0,d.jsxs)("div",{children:[(0,d.jsx)(h,{strong:!0,children:n}),(0,d.jsx)("div",{children:(0,d.jsx)(u.Z,{placeholder:l})})]})},m=n(29439),f=n(5353),v=function(e){var t=e.title,n=e.placeholder,l=e.onChange,r=e.disabled,i=f.Z.useForm(),a=(0,m.Z)(i,1)[0];return(0,s.useEffect)((function(){a.setFieldsValue({title:t,placeholder:n})}),[t,n]),(0,d.jsxs)(f.Z,{disabled:r,layout:"vertical",initialValues:{title:t,placeholder:n},onValuesChange:function(e,t){l&&l(t)},form:a,children:[(0,d.jsx)(f.Z.Item,{label:"\u6807\u9898",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:(0,d.jsx)(u.Z,{})}),(0,d.jsx)(f.Z.Item,{label:"\u8f93\u5165\u6846\u63d0\u793a",name:"placeholder",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:(0,d.jsx)(u.Z,{})})]})},p={title:"\u8f93\u5165\u6846",type:i.J.Input,Component:x,PropsForm:v,StatChart:null,defaultProps:o},Z={title:"\u591a\u884c\u8f93\u5165\u6846\u6807\u9898",placeholder:"\u8bf7\u8f93\u5165"},j=c.Z.Paragraph,g=function(e){var t=(0,a.Z)((0,a.Z)({},Z),e),n=t.title,l=t.placeholder;return(0,d.jsxs)("div",{children:[(0,d.jsx)(j,{strong:!0,children:n}),(0,d.jsx)("div",{children:(0,d.jsx)(u.Z.TextArea,{placeholder:l})})]})},b=function(e){var t=e.title,n=e.placeholder,l=e.onChange,r=e.disabled,i=f.Z.useForm(),a=(0,m.Z)(i,1)[0];return(0,s.useEffect)((function(){a.setFieldsValue({title:t,placeholder:n})}),[t,n]),(0,d.jsxs)(f.Z,{disabled:r,layout:"vertical",initialValues:{title:t,placeholder:n},onValuesChange:function(e,t){l&&l(t)},form:a,children:[(0,d.jsx)(f.Z.Item,{label:"\u6807\u9898",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:(0,d.jsx)(u.Z,{})}),(0,d.jsx)(f.Z.Item,{label:"\u8f93\u5165\u6846\u63d0\u793a",name:"placeholder",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:(0,d.jsx)(u.Z.TextArea,{})})]})},C={title:"\u8f93\u5165\u6846",type:i.J.Textarea,Component:g,PropsForm:b,StatChart:null,defaultProps:Z},P={text:"\u4e00\u884c\u6807\u9898",level:1,isCenter:!1},V=c.Z.Title,I=function(e){var t=(0,a.Z)((0,a.Z)({},P),e),n=t.text,l=t.level,r=void 0===l?1:l,i=t.isCenter;return(0,d.jsx)(V,{level:r,style:{textAlign:i?"center":"start",marginBottom:0,fontSize:function(e){switch(e){case 1:return"24px";case 2:return"20px";default:return"16px"}}(r)},children:n})},k=n(71673),y=n(89862),F=function(e){var t=e.text,n=e.level,l=e.isCenter,r=e.onChange,i=e.disabled,a=f.Z.useForm(),o=(0,m.Z)(a,1)[0];return(0,s.useEffect)((function(){o.setFieldsValue({text:t,level:n,isCenter:l})}),[t,n,l]),(0,d.jsxs)(f.Z,{disabled:i,layout:"vertical",initialValues:{text:t,level:n,isCenter:l},onValuesChange:function(e,t){r&&r(t)},form:o,children:[(0,d.jsx)(f.Z.Item,{label:"\u6807\u9898",name:"text",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:(0,d.jsx)(u.Z,{})}),(0,d.jsx)(f.Z.Item,{label:"\u5c42\u7ea7",name:"level",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:(0,d.jsx)(k.Z,{options:[{value:1,text:1},{value:2,text:2},{value:3,text:3}]})}),(0,d.jsx)(f.Z.Item,{name:"isCenter",valuePropName:"checked",children:(0,d.jsx)(y.Z,{children:"\u5c45\u4e2d\u663e\u793a"})})]})},q={title:"\u6807\u9898",type:i.J.Title,Component:I,PropsForm:F,StatChart:null,defaultProps:P},J={text:"\u4e00\u884c\u6bb5\u843d",isCenter:!1},T=c.Z.Paragraph,S=function(e){var t=(0,a.Z)((0,a.Z)({},J),e),n=t.text,l=void 0===n?"":n,r=t.isCenter,i=void 0!==r&&r,s=l.split("\n");return(0,d.jsx)(T,{style:{textAlign:i?"center":"start",marginBottom:"0px"},children:s.map((function(e,t){return(0,d.jsxs)("span",{children:[e,t!==s.length-1&&(0,d.jsx)("br",{})]},t)}))})},w=function(e){var t=e.text,n=e.isCenter,l=e.onChange,r=e.disabled,i=f.Z.useForm(),a=(0,m.Z)(i,1)[0];return(0,s.useEffect)((function(){a.setFieldsValue({text:t,isCenter:n})}),[t,n]),(0,d.jsxs)(f.Z,{disabled:r,layout:"vertical",initialValues:{text:t,isCenter:n},onValuesChange:function(e,t){l&&l(t)},form:a,children:[(0,d.jsx)(f.Z.Item,{label:"\u6bb5\u843d\u5185\u5bb9",name:"text",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5185\u5bb9"}],children:(0,d.jsx)(u.Z.TextArea,{})}),(0,d.jsx)(f.Z.Item,{name:"isCenter",valuePropName:"checked",children:(0,d.jsx)(y.Z,{children:"\u5c45\u4e2d\u663e\u793a"})})]})},E={title:"\u6bb5\u843d",type:i.J.Paragraph,Component:S,PropsForm:w,StatChart:null,defaultProps:J},N={title:"\u6807\u9898",desc:"\u63cf\u8ff0"},A=c.Z.Title,L=c.Z.Paragraph,z=function(e){var t=(0,a.Z)((0,a.Z)({},N),e),n=t.title,l=void 0===n?"":n,r=t.desc,i=(void 0===r?"":r).split("\n");return(0,d.jsxs)("div",{style:{textAlign:"center"},children:[(0,d.jsx)(A,{style:{fontSize:"24px"},children:l}),(0,d.jsxs)(L,{children:[" ",i.map((function(e,t){return(0,d.jsxs)("span",{children:[e,t!==i.length-1&&(0,d.jsx)("br",{})]},t)}))]})]})},K=function(e){var t=e.title,n=e.desc,l=e.onChange,r=e.disabled,i=f.Z.useForm(),a=(0,m.Z)(i,1)[0];return(0,s.useEffect)((function(){a.setFieldsValue({title:t,desc:n})}),[t,n]),(0,d.jsxs)(f.Z,{disabled:r,layout:"vertical",initialValues:{title:t,desc:n},onValuesChange:function(e,t){l&&l(t)},form:a,children:[(0,d.jsx)(f.Z.Item,{label:"\u6807\u9898",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:(0,d.jsx)(u.Z,{})}),(0,d.jsx)(f.Z.Item,{label:"\u63cf\u8ff0",name:"desc",children:(0,d.jsx)(u.Z.TextArea,{})})]})},R={title:"\u8f93\u5165\u6846",type:i.J.Info,Component:z,PropsForm:K,StatChart:null,defaultProps:N},_={title:"\u5355\u9009\u6807\u9898",isVertical:!1,options:[{value:"v1",label:"\u9009\u98791"},{value:"v2",label:"\u9009\u98792"},{value:"v3",label:"\u9009\u98793"}],value:""},B=n(74424),O=n(31773),D=c.Z.Paragraph,G=function(e){var t=(0,a.Z)((0,a.Z)({},_),e),n=t.title,l=void 0===n?"":n,r=t.isVertical,i=void 0!==r&&r,s=t.options,o=void 0===s?[]:s,c=t.value,u=void 0===c?"":c;return(0,d.jsxs)("div",{children:[(0,d.jsx)(D,{strong:!0,children:l}),(0,d.jsx)(B.ZP.Group,{value:u,children:(0,d.jsx)(O.Z,{direction:i?"vertical":"horizontal",children:o.map((function(e){var t=e.value,n=e.label;return(0,d.jsx)(B.ZP,{value:t,children:n},t)}))})})]})},M=n(2641),U=n(68747),Y=n(79286),$=n(25984),H=function(e){var t=e.title,n=e.isVertical,l=e.options,r=void 0===l?[]:l,i=e.value,a=e.onChange,o=e.disabled,c=f.Z.useForm(),h=(0,m.Z)(c,1)[0];return(0,s.useEffect)((function(){h.setFieldsValue({title:t,isVertical:n,options:r,value:i})}),[t,n,r,i]),(0,d.jsxs)(f.Z,{disabled:o,layout:"vertical",initialValues:{title:t,isVertical:n,options:r,value:i},onValuesChange:function(e,t){a&&a(t)},form:h,children:[(0,d.jsx)(f.Z.Item,{label:"\u6807\u9898",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:(0,d.jsx)(u.Z,{})}),(0,d.jsx)(f.Z.Item,{label:"\u9009\u9879",children:(0,d.jsx)(f.Z.List,{name:"options",children:function(e,t){var n=t.add,l=t.remove;return(0,d.jsxs)(d.Fragment,{children:[e.map((function(e,t){var n=e.key,r=e.name;return(0,d.jsxs)(O.Z,{align:"baseline",children:[(0,d.jsx)(f.Z.Item,{name:[r,"label"],rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9009\u9879"},{validator:function(e,t){var n=h.getFieldsValue().options;return 1===(void 0===n?[]:n).filter((function(e){return e.label===t})).length?Promise.resolve():Promise.reject("\u548c\u5176\u4ed6\u9009\u9879\u91cd\u590d\u4e86")}}],children:(0,d.jsx)(u.Z,{placeholder:"\u8bf7\u8f93\u5165\u9009\u9879"})}),t>1&&(0,d.jsx)(M.ZP,{icon:(0,d.jsx)(U.Z,{}),onClick:function(){return l(r)}})]},n)})),(0,d.jsx)(f.Z.Item,{children:(0,d.jsx)(M.ZP,{type:"link",onClick:function(){r.some((function(e){return!e.label}))||n({value:(0,$.x0)(),label:""})},icon:(0,d.jsx)(Y.Z,{}),block:!0,children:"\u6dfb\u52a0\u9009\u9879"})})]})}})}),(0,d.jsx)(f.Z.Item,{name:"isVertical",valuePropName:"checked",children:(0,d.jsx)(y.Z,{children:"\u5782\u76f4\u6392\u5217"})}),(0,d.jsx)(f.Z.Item,{label:"\u9ed8\u8ba4\u9009\u4e2d",name:"value",children:(0,d.jsx)(k.Z,{options:r.filter((function(e){return e.label}))})})]})},Q=n(20601),W=n(73909),X=n(21041),ee=n(41048),te=n(35667),ne=n(31065),le=n(25850),re=function(e){var t=e.data,n=void 0===t?[]:t,l=(0,s.useMemo)((function(){return n.reduce((function(e,t){return e+t.count}),0)}),[n]);return(0,d.jsx)("div",{style:{width:"400px",height:"400px",margin:"auto"},children:(0,d.jsx)(Q.h,{width:"100%",height:"100%",children:(0,d.jsxs)(W.u,{children:[(0,d.jsx)(X.b,{data:n,dataKey:"count",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8",label:function(e){return"".concat(e.name,": ").concat((0,le.T3)(e.count/l))},children:n.map((function(e,t){return(0,d.jsx)(ee.b,{fill:ne.OJ[t]},t)}))}),(0,d.jsx)(te.u,{})]})})})},ie={title:"\u5355\u9009",type:i.J.Radio,Component:G,PropsForm:H,StatChart:re,defaultProps:_},ae={title:"\u591a\u9009\u6807\u9898",isVertical:!1,list:[{value:"v1",label:"\u9009\u98791",checked:!1},{value:"v2",label:"\u9009\u98792",checked:!1},{value:"v3",label:"\u9009\u98793",checked:!1}]},se=c.Z.Paragraph,oe=function(e){var t=(0,a.Z)((0,a.Z)({},ae),e),n=t.title,l=void 0===n?"":n,r=t.isVertical,i=void 0!==r&&r,s=t.list,o=void 0===s?[]:s;return(0,d.jsxs)("div",{children:[(0,d.jsx)(se,{strong:!0,children:l}),(0,d.jsx)(O.Z,{direction:i?"vertical":"horizontal",children:o.map((function(e){var t=e.value,n=e.label,l=e.checked;return(0,d.jsx)(y.Z,{value:t,checked:l,children:n},t)}))})]})},ce=function(e){var t=e.title,n=e.isVertical,l=e.list,r=void 0===l?[]:l,i=e.onChange,a=e.disabled,o=f.Z.useForm(),c=(0,m.Z)(o,1)[0];return(0,s.useEffect)((function(){c.setFieldsValue({title:t,isVertical:n,list:r})}),[t,n,r]),(0,d.jsxs)(f.Z,{disabled:a,layout:"vertical",initialValues:{title:t,isVertical:n,list:r},onValuesChange:function(e,t){i&&i(t)},form:c,children:[(0,d.jsx)(f.Z.Item,{label:"\u591a\u9009\u6807\u9898",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:(0,d.jsx)(u.Z,{})}),(0,d.jsx)(f.Z.List,{name:"list",children:function(e,t){var n=t.add,l=t.remove;return(0,d.jsxs)(d.Fragment,{children:[e.map((function(e,t){var n=e.key,r=e.name;return(0,d.jsxs)(O.Z,{align:"baseline",children:[(0,d.jsx)(f.Z.Item,{name:[r,"checked"],valuePropName:"checked",children:(0,d.jsx)(y.Z,{})}),(0,d.jsx)(f.Z.Item,{name:[r,"label"],rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9009\u9879"},{validator:function(e,t){var n=c.getFieldsValue().list;return 1===(void 0===n?[]:n).filter((function(e){return e.label===t})).length?Promise.resolve():Promise.reject("\u548c\u5176\u4ed6\u9009\u9879\u91cd\u590d\u4e86")}}],children:(0,d.jsx)(u.Z,{placeholder:"\u8bf7\u8f93\u5165\u9009\u9879"})}),t>0&&(0,d.jsx)(M.ZP,{icon:(0,d.jsx)(U.Z,{}),onClick:function(){return l(r)}})]},n)})),(0,d.jsx)(f.Z.Item,{children:(0,d.jsx)(M.ZP,{type:"link",onClick:function(){r.some((function(e){return!e.label}))||n({value:(0,$.x0)(),label:"",checked:!1})},icon:(0,d.jsx)(Y.Z,{}),block:!0,children:"\u6dfb\u52a0\u9009\u9879"})})]})}}),(0,d.jsx)(f.Z.Item,{name:"isVertical",valuePropName:"checked",children:(0,d.jsx)(y.Z,{children:"\u5782\u76f4\u5bf9\u9f50"})})]})},ue=n(38725),de=n(82839),he=n(90466),xe=n(12891),me=n(27281),fe=n(23782),ve=function(e){var t=e.data,n=void 0===t?[]:t;return(0,d.jsx)("div",{style:{width:"400px",height:"400px",margin:"auto"},children:(0,d.jsx)(Q.h,{width:"100%",height:"100%",children:(0,d.jsxs)(ue.v,{width:150,height:40,data:n,children:[(0,d.jsx)(de.q,{strokeDasharray:"3 3"}),(0,d.jsx)(he.K,{dataKey:"name"}),(0,d.jsx)(xe.B,{}),(0,d.jsx)(te.u,{}),(0,d.jsx)(me.D,{}),(0,d.jsx)(fe.$,{dataKey:"count",fill:"#8884d8"})]})})})},pe={title:"\u591a\u9009",type:i.J.Checkbox,Component:oe,PropsForm:ce,StatChart:ve,defaultProps:ae},Ze=function(e){return e.Text="\u6587\u672c\u663e\u793a",e.Input="\u7528\u6237\u8f93\u5165",e.Select="\u7528\u6237\u9009\u62e9",e}({}),je=[{groupName:Ze.Text,components:[q,E,R]},{groupName:Ze.Input,components:[p,C]},{groupName:Ze.Select,components:[ie,pe]}],ge=(l={},(0,r.Z)(l,i.J.Input,p),(0,r.Z)(l,i.J.Textarea,C),(0,r.Z)(l,i.J.Title,q),(0,r.Z)(l,i.J.Paragraph,E),(0,r.Z)(l,i.J.Info,R),(0,r.Z)(l,i.J.Radio,ie),(0,r.Z)(l,i.J.Checkbox,pe),l)},42573:function(e,t,n){var l=n(59434);t.Z=function(){var e=(0,l.v9)((function(e){return e.components.present})),t=e.componentList,n=e.selectedId,r=e.copiedComponent,i=t.find((function(e){return e.fe_id===n}));return{componentList:t,selectedId:n,selectedComponent:i,copiedComponent:r}}},15401:function(e,t,n){var l=n(59434);t.Z=function(){return(0,l.v9)((function(e){return e.pageInfo}))}},70675:function(e,t,n){var l=n(72791),r=n(57689),i=n(12768),a=n(28641),s=n(59434),o=n(83825),c=n(41853);t.Z=function(){var e=(0,r.UO)().id,t=void 0===e?"":e,n=(0,s.I0)(),u=(0,a.Z)((function(e){if(!e)throw new Error("\u6ca1\u6709\u95ee\u5377 id");return(0,i.VR)(e)}),{manual:!0}),d=u.data,h=u.loading,x=u.error,m=u.run;return(0,l.useEffect)((function(){m(t)}),[t]),(0,l.useEffect)((function(){if(d){var e=d.componentList,t=void 0===e?[]:e,l=d.id,r=d.title,i=d.desc,a=d.isPublished,s=d.js,u=d.css,h="";t.length>0&&(h=t[0].fe_id),n((0,o.ne)({selectedId:h,componentList:t,copiedComponent:null})),n((0,c.wO)({id:l,title:r,desc:i,isPublished:a,js:s,css:u}))}}),[d]),{loading:h,error:x}}}}]);
//# sourceMappingURL=510.6277183a.chunk.js.map