(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4173,2803],{63434:function(me,oe,t){"use strict";var O=t(1413),ae=t(45987),T=t(22270),x=t(84567),r=t(67294),c=t(90789),E=t(41550),j=t(85893),N=["options","fieldProps","proFieldProps","valueEnum"],J=r.forwardRef(function(Q,b){var k=Q.options,A=Q.fieldProps,_=Q.proFieldProps,re=Q.valueEnum,ee=(0,ae.Z)(Q,N);return(0,j.jsx)(E.Z,(0,O.Z)({ref:b,valueType:"checkbox",valueEnum:(0,T.h)(re,void 0),fieldProps:(0,O.Z)({options:k},A),lightProps:(0,O.Z)({labelFormatter:function(){return(0,j.jsx)(E.Z,(0,O.Z)({ref:b,valueType:"checkbox",mode:"read",valueEnum:(0,T.h)(re,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,O.Z)({options:k},A),proFieldProps:_},ee))}},ee.lightProps),proFieldProps:_},ee))}),V=r.forwardRef(function(Q,b){var k=Q.fieldProps,A=Q.children;return(0,j.jsx)(x.Z,(0,O.Z)((0,O.Z)({ref:b},k),{},{children:A}))}),U=(0,c.G)(V,{valuePropName:"checked"}),B=U;B.Group=J,oe.Z=B},88280:function(me,oe,t){"use strict";t.d(oe,{Z:function(){return Be}});var O=t(4942),ae=t(97685),T=t(45987),x=t(74165),r=t(15861),c=t(1413),E=t(87462),j=t(67294),N=t(42110),J=t(78026),V=function(Y,le){return j.createElement(J.Z,(0,E.Z)({},Y,{ref:le,icon:N.Z}))},U=j.forwardRef(V),B=U,Q=t(97462),b=t(952),k=t(10915),A=t(48171),_=t(53914),re=t(22270),ee=t(60249),ve=t(14726),ne=t(75842),ie=t(21770),q=t(88306),fe=t(8880),e=t(72717),g=t(85893),Ve=["onTableChange","maxLength","formItemProps","recordCreatorProps","rowKey","controlled","defaultValue","onChange","editableFormRef"],Oe=["record","position","creatorButtonText","newRecordType","parentKey","style"],Ze=j.createContext(void 0);function De(a){var Y=a.children,le=a.record,ge=a.position,he=a.newRecordType,G=a.parentKey,ye=(0,j.useContext)(Ze);return j.cloneElement(Y,(0,c.Z)((0,c.Z)({},Y.props),{},{onClick:function(){var pe=(0,r.Z)((0,x.Z)().mark(function Re(Ee){var Ce,je,se,ue;return(0,x.Z)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,(Ce=(je=Y.props).onClick)===null||Ce===void 0?void 0:Ce.call(je,Ee);case 2:if(ue=D.sent,ue!==!1){D.next=5;break}return D.abrupt("return");case 5:ye==null||(se=ye.current)===null||se===void 0||se.addEditRecord(le,{position:ge,newRecordType:he,parentKey:G});case 6:case"end":return D.stop()}},Re)}));function de(Re){return pe.apply(this,arguments)}return de}()}))}function Se(a){var Y,le,ge=(0,k.YB)(),he=a.onTableChange,G=a.maxLength,ye=a.formItemProps,pe=a.recordCreatorProps,de=a.rowKey,Re=a.controlled,Ee=a.defaultValue,Ce=a.onChange,je=a.editableFormRef,se=(0,T.Z)(a,Ve),ue=(0,j.useRef)(void 0),xe=(0,j.useRef)(),D=(0,j.useRef)();(0,j.useImperativeHandle)(se.actionRef,function(){return xe.current},[xe.current]);var Ae=(0,ie.Z)(function(){return a.value||Ee||[]},{value:a.value,onChange:a.onChange}),Ie=(0,ae.Z)(Ae,2),C=Ie[0],we=Ie[1],ce=j.useMemo(function(){return typeof de=="function"?de:function(s,y){return s[de]||y}},[de]),w=(0,A.J)(function(s){if(typeof s=="number"&&!a.name){if(s>=C.length)return s;var y=C&&C[s];return ce==null?void 0:ce(y,s)}if((typeof s=="string"||s>=C.length)&&a.name){var n=C.findIndex(function(i,d){var o;return(ce==null||(o=ce(i,d))===null||o===void 0?void 0:o.toString())===(s==null?void 0:s.toString())});if(n!==-1)return n}return s});(0,j.useImperativeHandle)(je,function(){var s=function(i){var d,o;if(i==null)throw new Error("rowIndex is required");var u=w(i),v=[a.name,(d=u==null?void 0:u.toString())!==null&&d!==void 0?d:""].flat(1).filter(Boolean);return(o=D.current)===null||o===void 0?void 0:o.getFieldValue(v)},y=function(){var i,d=[a.name].flat(1).filter(Boolean);if(Array.isArray(d)&&d.length===0){var o,u=(o=D.current)===null||o===void 0?void 0:o.getFieldsValue();return Array.isArray(u)?u:Object.keys(u).map(function(v){return u[v]})}return(i=D.current)===null||i===void 0?void 0:i.getFieldValue(d)};return(0,c.Z)((0,c.Z)({},D.current),{},{getRowData:s,getRowsData:y,setRowData:function(i,d){var o,u;if(i==null)throw new Error("rowIndex is required");var v=w(i),F=[a.name,(o=v==null?void 0:v.toString())!==null&&o!==void 0?o:""].flat(1).filter(Boolean),Z=Object.assign({},(0,c.Z)((0,c.Z)({},s(i)),d||{})),m=(0,fe.Z)({},F,Z);return(u=D.current)===null||u===void 0||u.setFieldsValue(m),!0}})},[w,a.name,D.current]),(0,j.useEffect)(function(){a.controlled&&(C||[]).forEach(function(s,y){var n;(n=D.current)===null||n===void 0||n.setFieldsValue((0,O.Z)({},"".concat(ce(s,y)),s))},{})},[(0,_.ZP)(C),a.controlled]),(0,j.useEffect)(function(){if(a.name){var s;D.current=a==null||(s=a.editable)===null||s===void 0?void 0:s.form}},[(Y=a.editable)===null||Y===void 0?void 0:Y.form,a.name]);var f=pe||{},l=f.record,M=f.position,h=f.creatorButtonText,$=f.newRecordType,R=f.parentKey,S=f.style,W=(0,T.Z)(f,Oe),H=M==="top",P=(0,j.useMemo)(function(){return typeof G=="number"&&G<=(C==null?void 0:C.length)?!1:pe!==!1&&(0,g.jsx)(De,{record:(0,re.h)(l,C==null?void 0:C.length,C)||{},position:M,parentKey:(0,re.h)(R,C==null?void 0:C.length,C),newRecordType:$,children:(0,g.jsx)(ve.ZP,(0,c.Z)((0,c.Z)({type:"dashed",style:(0,c.Z)({display:"block",margin:"10px 0",width:"100%"},S),icon:(0,g.jsx)(B,{})},W),{},{children:h||ge.getMessage("editableTable.action.add","\u6DFB\u52A0\u4E00\u884C\u6570\u636E")}))})},[pe,G,C==null?void 0:C.length]),z=(0,j.useMemo)(function(){return P?H?{components:{header:{wrapper:function(y){var n,i=y.className,d=y.children;return(0,g.jsxs)("thead",{className:i,children:[d,(0,g.jsxs)("tr",{style:{position:"relative"},children:[(0,g.jsx)("td",{colSpan:0,style:{visibility:"hidden"},children:P}),(0,g.jsx)("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(n=se.columns)===null||n===void 0?void 0:n.length,children:P})]})]})}}}}:{tableViewRender:function(y,n){var i,d;return(0,g.jsxs)(g.Fragment,{children:[(i=(d=a.tableViewRender)===null||d===void 0?void 0:d.call(a,y,n))!==null&&i!==void 0?i:n,P]})}}:{}},[H,P]),K=(0,c.Z)({},a.editable),L=(0,A.J)(function(s,y){var n,i,d;if((n=a.editable)===null||n===void 0||(i=n.onValuesChange)===null||i===void 0||i.call(n,s,y),(d=a.onValuesChange)===null||d===void 0||d.call(a,y,s),a.controlled){var o;a==null||(o=a.onChange)===null||o===void 0||o.call(a,y)}});return(a!=null&&a.onValuesChange||(le=a.editable)!==null&&le!==void 0&&le.onValuesChange||a.controlled&&a!==null&&a!==void 0&&a.onChange)&&(K.onValuesChange=L),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Ze.Provider,{value:xe,children:(0,g.jsx)(e.Z,(0,c.Z)((0,c.Z)((0,c.Z)({search:!1,options:!1,pagination:!1,rowKey:de,revalidateOnFocus:!1},se),z),{},{tableLayout:"fixed",actionRef:xe,onChange:he,editable:(0,c.Z)((0,c.Z)({},K),{},{formProps:(0,c.Z)({formRef:D},K.formProps)}),dataSource:C,onDataSourceChange:function(y){if(we(y),a.name&&M==="top"){var n,i=(0,fe.Z)({},[a.name].flat(1).filter(Boolean),y);(n=D.current)===null||n===void 0||n.setFieldsValue(i)}}}))}),a.name?(0,g.jsx)(Q.Z,{name:[a.name],children:function(y){var n,i;if(!ue.current)return ue.current=C,null;var d=(0,q.Z)(y,[a.name].flat(1)),o=d==null?void 0:d.find(function(u,v){var F;return!(0,ee.A)(u,(F=ue.current)===null||F===void 0?void 0:F[v])});return ue.current=C,o&&(a==null||(n=a.editable)===null||n===void 0||(i=n.onValuesChange)===null||i===void 0||i.call(n,o,d)),null}}):null]})}function Me(a){var Y=b.ZP.useFormInstance();return a.name?(0,g.jsx)(ne.Z.Item,(0,c.Z)((0,c.Z)({style:{maxWidth:"100%"}},a==null?void 0:a.formItemProps),{},{name:a.name,shouldUpdate:function(ge,he){var G=[a.name].flat(1);try{return JSON.stringify((0,q.Z)(ge,G))!==JSON.stringify((0,q.Z)(he,G))}catch(ye){return!0}},children:(0,g.jsx)(Se,(0,c.Z)((0,c.Z)({},a),{},{editable:(0,c.Z)((0,c.Z)({},a.editable),{},{form:Y})}))})):(0,g.jsx)(Se,(0,c.Z)({},a))}Me.RecordCreator=De;var Be=Me},19411:function(me,oe,t){"use strict";t.d(oe,{ZP:function(){return B}});var O=t(15009),ae=t.n(O),T=t(99289),x=t.n(T),r=t(17578),c=t(2800),E=t.n(c),j=t(67294),N=t(80854),J=t(85893),V=function(b){var k=b.attrs,A=k.href,_=A.split("/").pop();return(0,J.jsx)("p",{children:(0,J.jsx)("a",{rel:"noreferrer",href:A,target:"_blank",children:_})})},U=function(b){var k=b.value,A=b.onChange,_=b.directory,re=_===void 0?"/wysiwyg":_,ee=(0,N.useIntl)();return(0,J.jsx)("div",{className:"form-wysiwyg-markdown",children:(0,J.jsx)(E(),{excludeBlockMenuItems:["Sketch"],embeds:[{matcher:function(){return!0},component:V}],uploadImage:function(){var ve=x()(ae()().mark(function ne(ie){var q,fe;return ae()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,r.ws)(ie,re);case 2:if(q=g.sent,!q.success){g.next=8;break}if(!ie.type.includes("image/")){g.next=7;break}return fe=q.data[0].name.includes("/")?q.data[0].name:"".concat(re).concat(q.data[0].name),g.abrupt("return",(0,r.pV)(fe,1e3));case 7:return g.abrupt("return",q.data[0].url);case 8:throw new Error("Error while uploading");case 9:case"end":return g.stop()}},ne)}));return function(ne){return ve.apply(this,arguments)}}(),defaultValue:k||"",onChange:function(ne){return A&&A(ne())},placeholder:ee.formatMessage({id:"wysiwyg_placeholder"})})})},B=U},63740:function(me,oe,t){"use strict";t.r(oe),t.d(oe,{default:function(){return ce}});var O=t(26271),ae=t(74453),T=t(75081),x=t(67294),r=t(80854),c=t(15009),E=t.n(c),j=t(97857),N=t.n(j),J=t(99289),V=t.n(J),U=t(5574),B=t.n(U),Q=t(58638),b=t(952),k=t(24739),A=t(31199),_=t(78957),re=t(96074),ee=t(14726),ve=t(38751),ne=t(3598),ie=t(7014),q=t(37476),fe=t(89974),e=t(85893),g=function(f){var l=f.quiz_id,M=f.visible,h=f.onVisibleChange,$=b.ZP.useForm(),R=B()($,1),S=R[0],W=(0,x.useCallback)(function(){var H=V()(E()().mark(function P(z){var K,L,s;return E()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return K=z.category_ids,n.prev=1,n.next=4,(0,ne.qp)({quiz_id:l,category_ids:K});case 4:L=n.sent,L instanceof Blob&&(s=document.createElement("a"),s.href=window.URL.createObjectURL(L),s.download="quiz_".concat(l,"_questions_by_category_id.xlsx"),document.body.appendChild(s),s.click(),document.body.removeChild(s)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.error(n.t0);case 11:return n.prev=11,h(!1),n.finish(11);case 14:case"end":return n.stop()}},P,null,[[1,8,11,14]])}));return function(P){return H.apply(this,arguments)}}(),[l]);return(0,e.jsx)(q.Y,{title:(0,e.jsx)(r.FormattedMessage,{id:"exportQuestions"}),form:S,visible:M,onVisibleChange:h,onFinish:W,children:(0,e.jsx)(b.ZP.Item,{name:"category_ids",label:(0,e.jsx)(r.FormattedMessage,{id:"categories"}),required:!0,rules:[{required:!0,message:(0,e.jsx)(r.FormattedMessage,{id:"field_required"})}],children:(0,e.jsx)(fe.b,{multiple:!0,type:"question"})})})},Ve=function(){var f=(0,ie.O)(),l=f.competencyChallenge.data,M=(0,x.useState)(!1),h=B()(M,2),$=h[0],R=h[1],S=(0,x.useState)(!1),W=B()(S,2),H=W[0],P=W[1],z=(0,x.useState)(),K=B()(z,2),L=K[0],s=K[1],y=(0,r.useIntl)(),n=(0,x.useCallback)(function(){return R(!0)},[]),i=(0,x.useCallback)(function(){(l==null?void 0:l.quiz_id)!==void 0&&(P(!0),(0,ne.E8)(l==null?void 0:l.quiz_id).then(function(o){o.success&&s(o.data)}).finally(function(){return P(!1)}))},[l==null?void 0:l.quiz_id]),d=(0,x.useCallback)(function(){var o=V()(E()().mark(function u(v){return E()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if((l==null?void 0:l.quiz_id)!==void 0){Z.next=2;break}return Z.abrupt("return");case 2:P(!0),(0,ne.Lz)(l==null?void 0:l.quiz_id,N()(N()({},v),{},{value:"diagnostic-test"})).then(function(m){m.success&&s(m.data)}).finally(function(){return P(!1)});case 4:case"end":return Z.stop()}},u)}));return function(u){return o.apply(this,arguments)}}(),[]);return(0,x.useEffect)(function(){i()},[i]),L?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(g,{visible:$,onVisibleChange:R,quiz_id:L.id}),(0,e.jsxs)("div",{style:{position:"relative",paddingBottom:"64px"},children:[(0,e.jsx)(b.ZP,{submitter:{render:function(u,v){var F=B()(v,2),Z=F[0],m=F[1];return(0,e.jsxs)(_.Z,{style:{position:"absolute",bottom:0,left:0},children:[Z,m]})}},initialValues:L,onFinish:d,children:(0,e.jsxs)(k.UW,{children:[(0,e.jsx)(A.Z,{name:"max_attempts",label:(0,e.jsx)(r.FormattedMessage,{id:"max_attempts"}),tooltip:(0,e.jsx)(r.FormattedMessage,{id:"max_attempts"}),placeholder:y.formatMessage({id:"max_attempts",defaultMessage:"max_attempts"})}),(0,e.jsx)(A.Z,{name:"max_execution_time",label:(0,e.jsx)(r.FormattedMessage,{id:"max_execution_time"}),tooltip:(0,e.jsx)(r.FormattedMessage,{id:"max_execution_time"}),placeholder:y.formatMessage({id:"max_execution_time",defaultMessage:"max_execution_time"})})]})}),(0,e.jsx)(re.Z,{}),(0,e.jsx)(ve.i,{questions:L.questions,quizId:L.id,onAdded:i,onEdited:i,onRemoved:i,tableHeader:(0,e.jsx)(r.FormattedMessage,{id:"questions"}),tableLoading:H,questionsCategory:{type:"question"},customToolbarElements:[(0,e.jsxs)(ee.ZP,{type:"primary",icon:(0,e.jsx)(Q.Z,{}),onClick:n,children:[" ",(0,e.jsx)(r.FormattedMessage,{id:"exportQuestionsByCategory"})]},"export_by_category")]})]})]}):(0,e.jsx)(T.Z,{})},Oe=t(13769),Ze=t.n(Oe),De=t(5966),Se=t(64317),Me=t(52688),Be=t(90672),a=t(2453),Y=t(86273),le=t(23535),ge=t(44167),he=t(19411),G=t(21711),ye=t(31472),pe=["authors","category"],de=Object.values(ye.Fh).map(function(w){return{value:w,label:(0,e.jsx)(r.FormattedMessage,{id:"CompetencyChallenges.types.".concat(w)})}}),Re=function(){var f=(0,ie.O)(),l=f.competencyChallenge,M=f.categoryDepths,h=f.refreshData,$=(0,r.useParams)(),R=Number($.id),S=(0,r.useIntl)(),W=b.ZP.useForm(),H=B()(W,1),P=H[0],z=b.ZP.useWatch("type",P),K=Number.isNaN(R),L=(0,x.useMemo)(function(){if(!(l!=null&&l.data))return{};var n=l==null?void 0:l.data,i=n.authors,d=n.category,o=Ze()(n,pe);return N()(N()({},o),{},{authors:i.map(function(u){var v=u.id;return v}),category_id:d==null?void 0:d.id})},[l==null?void 0:l.data]),s=(0,x.useCallback)(function(){var n=V()(E()().mark(function i(d){var o,u,v,F,Z,m,te,X;return E()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return o=d.name,u=d.type,v=d.is_active,F=v===void 0?!1:v,Z=d.is_highlighted,m=Z===void 0?!1:Z,te=d.category_id,I.prev=1,I.next=4,(0,G.v8)({name:o,is_active:F,is_highlighted:m,type:u,category_id:te});case 4:if(X=I.sent,X.success){I.next=8;break}return a.ZP.error(X.message),I.abrupt("return");case 8:return a.ZP.success(S.formatMessage({id:X.message})),r.history.push("/competency-challenges/".concat(X.data.id,"/main")),I.next=12,h();case 12:I.next=17;break;case 14:I.prev=14,I.t0=I.catch(1),a.ZP.error(S.formatMessage({id:"error"}));case 17:case"end":return I.stop()}},i,null,[[1,14]])}));return function(i){return n.apply(this,arguments)}}(),[]),y=(0,x.useCallback)(function(){var n=V()(E()().mark(function i(d){var o,u,v,F;return E()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.prev=0,o=P.getFieldsValue(["image_url","image_path"]),u=o.image_url,v=o.image_path,m.next=4,(0,G.dA)(R,N()(N()({},d),{},{image_url:u,image_path:v}));case 4:if(F=m.sent,F.success){m.next=8;break}return a.ZP.error(F.message),m.abrupt("return");case 8:return a.ZP.success(S.formatMessage({id:F.message})),m.next=11,h();case 11:m.next=16;break;case 13:m.prev=13,m.t0=m.catch(0),a.ZP.error(S.formatMessage({id:"error"}));case 16:case"end":return m.stop()}},i,null,[[0,13]])}));return function(i){return n.apply(this,arguments)}}(),[R]);return(0,e.jsxs)(b.ZP,{form:P,initialValues:L,onFinish:K?s:y,onValuesChange:function(i){(i==null?void 0:i.type)==="complex"&&P.setFieldValue("category",null)},children:[(0,e.jsxs)(b.ZP.Group,{title:(0,e.jsx)(r.FormattedMessage,{id:"CompetencyChallenges.base"}),children:[(0,e.jsx)(De.Z,{width:"md",name:"name",label:(0,e.jsx)(r.FormattedMessage,{id:"name"}),placeholder:S.formatMessage({id:"name"}),required:!0,rules:[{required:!0,message:S.formatMessage({id:"field_required"})}]}),(0,e.jsx)(Se.Z,{width:"md",name:"type",label:(0,e.jsx)(r.FormattedMessage,{id:"type"}),options:de,required:!0,rules:[{required:!0,message:S.formatMessage({id:"field_required"})}]}),z==="simple"&&(0,e.jsx)(b.ZP.Item,{name:"category_id",required:!0,label:(0,e.jsx)(r.FormattedMessage,{id:"category"}),rules:[{required:!0,message:S.formatMessage({id:"field_required"})}],children:(0,e.jsx)(Y.Z,{enabledDepth:M.role})}),(0,e.jsx)(Me.Z,{name:"is_active",label:(0,e.jsx)(r.FormattedMessage,{id:"is_active"})}),(0,e.jsx)(Me.Z,{name:"is_highlighted",label:(0,e.jsx)(r.FormattedMessage,{id:"is_highlighted"}),tooltip:(0,e.jsx)(r.FormattedMessage,{id:"CompetencyChallenges.highlighted"})})]}),!K&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(b.ZP.Group,{title:(0,e.jsx)(r.FormattedMessage,{id:"CompetencyChallenges.additional"}),children:[(0,e.jsx)(b.ZP.Item,{name:"description",label:(0,e.jsx)(r.FormattedMessage,{id:"description"}),valuePropName:"value",style:{width:440},children:(0,e.jsx)(he.ZP,{directory:"competency-challenges/".concat(R)})}),(0,e.jsx)(Be.Z,{width:"lg",name:"summary",label:(0,e.jsx)(r.FormattedMessage,{id:"summary"})}),(0,e.jsx)(b.ZP.Item,{name:"authors",label:(0,e.jsx)(r.FormattedMessage,{id:"author"}),style:{width:"100%",maxWidth:440},children:(0,e.jsx)(ge.Z,{multiple:!0})})]}),(0,e.jsx)(le.Z,{wrapInForm:!1,folder:"/competency-challenges/".concat(R),title:"image",action:"/api/admin/competency-challenges/".concat(R,"?_method=PATCH"),src_name:"image_url",form_name:"image",getUploadedSrcField:function(i){return i.file.response.data.image_url},setPath:function(i){return P.setFieldsValue(i)}})]})]})},Ee=t(47389),Ce=t(82061),je=t(88280),se=t(83062),ue=t(86738),xe=["scale_min","category_id"],D=[{title:(0,e.jsx)(r.FormattedMessage,{id:"ID"}),dataIndex:"id",editable:!1,render:function(f,l){if(typeof l.id!="string")return"-";var M=l.id.split("-"),h=B()(M,2),$=h[0],R=h[1];return $==="new"?"-":R}},{title:(0,e.jsx)(r.FormattedMessage,{id:"min_points"}),dataIndex:"scale_min",valueType:"digit",formItemProps:{rules:[{required:!0,message:(0,e.jsx)(r.FormattedMessage,{id:"field_required"})},{type:"number",min:0,max:100,message:(0,e.jsx)(r.FormattedMessage,{id:"number_between",values:{min:0}})}]},fieldProps:{min:0}},{title:(0,e.jsx)(r.FormattedMessage,{id:"category"}),dataIndex:"category_id",render:function(f,l){return l.category_name},formItemProps:{rules:[{required:!0,message:(0,e.jsx)(r.FormattedMessage,{id:"field_required"})}]},renderFormItem:function(f,l,M){var h,$=((h=M.getFieldValue("table"))!==null&&h!==void 0?h:[]).map(function(R){return R.category_id});return(0,e.jsx)(fe.b,{disabledNodes:$})}}],Ae=function(f){return f.map(function(l){var M=l.id,h=l.scale_min,$=l.category;return{id:"old-".concat(M),scale_min:h,category_id:$.id,category_name:$.name_with_breadcrumbs}})},Ie=function(){var f,l,M=(0,ie.O)(),h=M.competencyChallenge,$=M.refreshData,R=(0,r.useParams)(),S=Number(R.id),W=(f=h==null||(l=h.data)===null||l===void 0?void 0:l.scales)!==null&&f!==void 0?f:[],H=(0,x.useState)([]),P=B()(H,2),z=P[0],K=P[1],L=(0,r.useIntl)(),s=(0,x.useRef)(),y=(0,x.useRef)(),n=(0,x.useRef)(),i=(0,x.useMemo)(function(){return Ae(W)},[W]),d=(0,x.useMemo)(function(){return[].concat(D,[{valueType:"option",title:(0,e.jsx)(r.FormattedMessage,{id:"options"}),render:function(u,v,F,Z){return[(0,e.jsx)(se.Z,{title:(0,e.jsx)(r.FormattedMessage,{id:"edit",defaultMessage:"edit"}),children:(0,e.jsx)(ee.ZP,{type:"primary",icon:(0,e.jsx)(Ee.Z,{}),onClick:function(){return Z==null?void 0:Z.startEditable(v.id)}})},"edit"),(0,e.jsx)(ue.Z,{title:(0,e.jsx)(r.FormattedMessage,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:V()(E()().mark(function m(){var te,X,be,I,Pe,Fe,Te,$e;return E()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(typeof v.id=="string"){p.next=2;break}return p.abrupt("return");case 2:if(te=v.id.split("-"),X=B()(te,2),be=X[0],I=X[1],be!=="new"){p.next=7;break}return Te=(Pe=s.current)===null||Pe===void 0?void 0:Pe.getFieldValue("table"),(Fe=s.current)===null||Fe===void 0||Fe.setFieldValue("table",Te.filter(function(Ne){var We=Ne.id;return We!==v.id})),p.abrupt("return");case 7:return p.next=9,(0,G.sm)(+I);case 9:if($e=p.sent,!$e.success){p.next=13;break}return p.next=13,$();case 13:case"end":return p.stop()}},m)})),okText:(0,e.jsx)(r.FormattedMessage,{id:"ok"}),cancelText:(0,e.jsx)(r.FormattedMessage,{id:"cancel"}),children:(0,e.jsx)(se.Z,{title:(0,e.jsx)(r.FormattedMessage,{id:"delete",defaultMessage:"delete"}),children:(0,e.jsx)(ee.ZP,{type:"primary",icon:(0,e.jsx)(Ce.Z,{}),danger:!0})})},"delete")]}}])},[]);return(0,e.jsx)(b.ZP,{formRef:s,initialValues:{table:i},submitter:!1,children:(0,e.jsx)(je.Z,{rowKey:function(u){return u.id},editableFormRef:y,controlled:!0,actionRef:n,name:"table",columns:d,recordCreatorProps:{creatorButtonText:(0,e.jsx)(r.FormattedMessage,{id:"CompetencyChallenges.addNewRow"}),disabled:z.length>0,record:function(u){return{id:"new-".concat(u)}}},editable:{onlyOneLineEditorAlertMessage:L.formatMessage({id:"CompetencyChallenges.onlyOneRowIsEditable"}),onSave:function(){var o=V()(E()().mark(function v(F,Z){var m,te,X,be,I,Pe,Fe,Te,$e;return E()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(m=Z.scale_min,te=Z.category_id,X=Ze()(Z,xe),typeof X.id=="string"){p.next=3;break}return p.abrupt("return");case 3:if(be=X.id.split("-"),I=B()(be,2),Pe=I[0],Fe=I[1],Pe!=="new"){p.next=12;break}return p.next=7,(0,G.Qd)({scale_min:m,category_id:te,competency_challenge_id:S});case 7:if(Te=p.sent,!Te.success){p.next=11;break}return p.next=11,$();case 11:return p.abrupt("return");case 12:return p.next=14,(0,G.U_)(+Fe,{scale_min:m,category_id:te,competency_challenge_id:S});case 14:if($e=p.sent,!$e.success){p.next=18;break}return p.next=18,$();case 18:return p.abrupt("return");case 19:case"end":return p.stop()}},v)}));function u(v,F){return o.apply(this,arguments)}return u}(),deletePopconfirmMessage:(0,e.jsx)(r.FormattedMessage,{id:"deleteQuestion"}),actionRender:function(u,v,F){if(typeof u.id!="string")return[];var Z=u.id.split("-"),m=B()(Z,1),te=m[0];return te==="new"?[F.save,F.delete]:[F.save,F.cancel]},type:"single",editableKeys:z,onChange:K}})})},C=function(){var f,l=(0,ie.O)(),M=l.competencyChallenge,h=(0,r.useIntl)(),$=(0,r.useParams)(),R=$.id,S=$.tab,W=S===void 0?"main":S,H=R==="new",P=(0,x.useMemo)(function(){var z;return H?h.formatMessage({id:"CompetencyChallenges.new_challenge"}):(z=M.data)!==null&&z!==void 0&&z.name?M.data.name:h.formatMessage({id:"menu.Competency challenges"})},[h,(f=M.data)===null||f===void 0?void 0:f.name]);return(0,e.jsx)(ae._z,{title:P,header:{breadcrumb:{items:[{path:"competency-challenges",breadcrumbName:h.formatMessage({id:"menu.Competency challenges"})},{path:String(R),breadcrumbName:P},{path:W,breadcrumbName:h.formatMessage({id:"CompetencyChallenges.".concat(W)})}]}},children:(0,e.jsxs)(O.ZP,{bodyStyle:{padding:"24px"},tabs:{type:"card",cardProps:{loading:M.loading&&(0,e.jsx)(T.Z,{})},activeKey:W,onChange:function(K){r.history.push("/competency-challenges/".concat(R,"/").concat(K))}},children:[(0,e.jsx)(O.ZP.TabPane,{tab:(0,e.jsx)(r.FormattedMessage,{id:"CompetencyChallenges.main"}),children:(0,e.jsx)(Re,{})},"main"),(0,e.jsx)(O.ZP.TabPane,{tab:(0,e.jsx)(r.FormattedMessage,{id:"CompetencyChallenges.scales"}),disabled:H,children:(0,e.jsx)(Ie,{})},"scales"),(0,e.jsx)(O.ZP.TabPane,{tab:(0,e.jsx)(r.FormattedMessage,{id:"CompetencyChallenges.diagnostic-test"}),disabled:H,children:(0,e.jsx)(Ve,{})},"diagnostic-test")]})})},we=function(){return(0,e.jsx)(ie.F,{children:(0,e.jsx)(C,{})})},ce=we},64599:function(me,oe,t){var O=t(96263);function ae(T,x){var r=typeof Symbol!="undefined"&&T[Symbol.iterator]||T["@@iterator"];if(!r){if(Array.isArray(T)||(r=O(T))||x&&T&&typeof T.length=="number"){r&&(T=r);var c=0,E=function(){};return{s:E,n:function(){return c>=T.length?{done:!0}:{done:!1,value:T[c++]}},e:function(U){throw U},f:E}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var j=!0,N=!1,J;return{s:function(){r=r.call(T)},n:function(){var U=r.next();return j=U.done,U},e:function(U){N=!0,J=U},f:function(){try{!j&&r.return!=null&&r.return()}finally{if(N)throw J}}}}me.exports=ae,me.exports.__esModule=!0,me.exports.default=me.exports}}]);
