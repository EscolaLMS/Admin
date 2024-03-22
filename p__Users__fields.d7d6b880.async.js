"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7355],{82061:function(V,h,e){var i=e(1413),s=e(67294),g=e(47046),_=e(84089),v=function(P,p){return s.createElement(_.Z,(0,i.Z)((0,i.Z)({},P),{},{ref:p,icon:g.Z}))},o=s.forwardRef(v);h.Z=o},47389:function(V,h,e){var i=e(1413),s=e(67294),g=e(27363),_=e(84089),v=function(P,p){return s.createElement(_.Z,(0,i.Z)((0,i.Z)({},P),{},{ref:p,icon:g.Z}))},o=s.forwardRef(v);h.Z=o},86615:function(V,h,e){var i=e(1413),s=e(45987),g=e(22270),_=e(55742),v=e(67294),o=e(90789),f=e(41550),P=e(85893),p=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],r=v.forwardRef(function(l,M){var a=l.fieldProps,E=l.options,u=l.radioType,d=l.layout,n=l.proFieldProps,j=l.valueEnum,O=(0,s.Z)(l,p);return(0,P.jsx)(f.Z,(0,i.Z)((0,i.Z)({valueType:u==="button"?"radioButton":"radio",ref:M,valueEnum:(0,g.h)(j,void 0)},O),{},{fieldProps:(0,i.Z)({options:E,layout:d},a),proFieldProps:n,filedConfig:{customLightMode:!0}}))}),R=v.forwardRef(function(l,M){var a=l.fieldProps,E=l.children;return(0,P.jsx)(_.ZP,(0,i.Z)((0,i.Z)({},a),{},{ref:M,children:E}))}),A=(0,o.G)(R,{valuePropName:"checked",ignoreWidth:!0}),c=A;c.Group=r,c.Button=_.ZP.Button,c.displayName="ProFormComponent",h.Z=c},5966:function(V,h,e){var i=e(97685),s=e(1413),g=e(45987),_=e(21770),v=e(75842),o=e(55241),f=e(97435),P=e(67294),p=e(41550),r=e(85893),R=["fieldProps","proFieldProps"],A=["fieldProps","proFieldProps"],c="text",l=function(d){var n=d.fieldProps,j=d.proFieldProps,O=(0,g.Z)(d,R);return(0,r.jsx)(p.Z,(0,s.Z)({valueType:c,fieldProps:n,filedConfig:{valueType:c},proFieldProps:j},O))},M=function(d){var n=(0,_.Z)(d.open||!1,{value:d.open,onChange:d.onOpenChange}),j=(0,i.Z)(n,2),O=j[0],Z=j[1];return(0,r.jsx)(v.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(J){var T,t=J.getFieldValue(d.name||[]);return(0,r.jsx)(o.Z,(0,s.Z)((0,s.Z)({getPopupContainer:function(x){return x&&x.parentNode?x.parentNode:x},onOpenChange:Z,content:(0,r.jsxs)("div",{style:{padding:"4px 0"},children:[(T=d.statusRender)===null||T===void 0?void 0:T.call(d,t),d.strengthText?(0,r.jsx)("div",{style:{marginTop:10},children:(0,r.jsx)("span",{children:d.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},d.popoverProps),{},{open:O,children:d.children}))}})},a=function(d){var n=d.fieldProps,j=d.proFieldProps,O=(0,g.Z)(d,A),Z=(0,P.useState)(!1),G=(0,i.Z)(Z,2),J=G[0],T=G[1];return n!=null&&n.statusRender&&O.name?(0,r.jsx)(M,{name:O.name,statusRender:n==null?void 0:n.statusRender,popoverProps:n==null?void 0:n.popoverProps,strengthText:n==null?void 0:n.strengthText,open:J,onOpenChange:T,children:(0,r.jsx)("div",{children:(0,r.jsx)(p.Z,(0,s.Z)({valueType:"password",fieldProps:(0,s.Z)((0,s.Z)({},(0,f.Z)(n,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(B){var x;n==null||(x=n.onBlur)===null||x===void 0||x.call(n,B),T(!1)},onClick:function(B){var x;n==null||(x=n.onClick)===null||x===void 0||x.call(n,B),T(!0)}}),proFieldProps:j,filedConfig:{valueType:c}},O))})}):(0,r.jsx)(p.Z,(0,s.Z)({valueType:"password",fieldProps:n,proFieldProps:j,filedConfig:{valueType:c}},O))},E=l;E.Password=a,E.displayName="ProFormComponent",h.Z=E},95486:function(V,h,e){var i=e(5574),s=e.n(i),g=e(14726),_=e(28248),v=e(55742),o=e(94315),f=e(45823),P=e(67294),p=e(80854),r=e(85893),R=function(c){var l=c.value,M=c.onChange,a=(0,P.useState)(!1),E=s()(a,2),u=E[0],d=E[1],n=(0,P.useCallback)(function(){d(!1)},[]),j=(0,P.useState)("code"),O=s()(j,2),Z=O[0],G=O[1];return(0,r.jsxs)("div",{children:[(0,r.jsx)(g.ZP,{type:"primary",onClick:function(){return d(!0)},size:"small",children:(0,r.jsx)(p.FormattedMessage,{id:"json_editor"})}),(0,r.jsxs)(_.Z,{title:"JSON",open:u,onOk:n,onCancel:n,destroyOnClose:!0,children:[(0,r.jsxs)(v.ZP.Group,{onChange:function(T){return G(T.target.value)},value:Z,children:[(0,r.jsx)(v.ZP,{value:"tree",children:"tree"}),(0,r.jsx)(v.ZP,{value:"view",children:"view"}),(0,r.jsx)(v.ZP,{value:"form",children:"form"}),(0,r.jsx)(v.ZP,{value:"code",children:"code"}),(0,r.jsx)(v.ZP,{value:"text",children:"text"})]}),(0,r.jsx)(o.A,{mode:Z,value:l,onChange:M},Z)]})]})};h.Z=R},80004:function(V,h,e){e.d(h,{ZP:function(){return de}});var i=e(15009),s=e.n(i),g=e(99289),_=e.n(g),v=e(5574),o=e.n(v),f=e(67294),P=e(51042),p=e(47389),r=e(82061),R=e(16894),A=e(2453),c=e(14726),l=e(83062),M=e(86738),a=e(80854),E=e(36309),u=e(97857),d=e.n(u),n=e(37476),j=e(5966),O=e(86615),Z=e(952),G=e(31199),J=e(75842),T=e(95486),t=e(85893),B=function(W){return W.BOOLEAN="boolean",W.NUMBER="number",W.VARCHAR="varchar",W.TEXT="text",W.JSON="json",W}(B||{}),x=function(L){var H=L.visible,X=L.onVisibleChange,se=L.onResponse,Q=L.class_type,w=L.name,F=w===void 0?"new":w,k=L.fields,q=k===void 0?[]:k,K=(0,a.useIntl)(),ee=J.Z.useForm(),Y=o()(ee,1),z=Y[0],te=(0,f.useCallback)(function(){var y=_()(s()().mark(function b(S){return s()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,E.kB)(d()(d()({},S),{},{class_type:Q,rules:JSON.stringify(S.rules),extra:JSON.stringify(S.extra)})).then(function(D){D.success&&se(D.data)});case 2:return m.abrupt("return",!1);case 3:case"end":return m.stop()}},b)}));return function(b){return y.apply(this,arguments)}}(),[z]);return(0,f.useEffect)(function(){if(F!=="new"){var y=q.find(function(b){return b.name===F});y&&z.setFieldsValue(y)}else z.resetFields()},[F,z,q]),(0,t.jsxs)(n.Y,{form:z,title:K.formatMessage({id:F==="new"?"newModelField":"editModelField",defaultMessage:F==="new"?"new Model Field":"edit Model Field"}),width:"800px",visible:H,onVisibleChange:X,onFinish:te,children:[(0,t.jsx)(j.Z,{required:!0,label:(0,t.jsx)(a.FormattedMessage,{id:"name",defaultMessage:"name"}),tooltip:(0,t.jsx)(a.FormattedMessage,{id:"name_tooltip",defaultMessage:"name_tooltip"}),rules:[{required:!0}],width:"md",name:"name"}),(0,t.jsx)(O.Z.Group,{rules:[{required:!0}],name:"type",label:(0,t.jsx)(a.FormattedMessage,{id:"type",defaultMessage:"type"}),tooltip:(0,t.jsx)(a.FormattedMessage,{id:"type_tooltip",defaultMessage:"type_tooltip"}),options:Object.keys(B).map(function(y){return{label:K.formatMessage({id:"model.".concat(B[y])}),value:B[y]}})}),(0,t.jsx)(j.Z,{width:"md",name:"default",label:(0,t.jsx)(a.FormattedMessage,{id:"default",defaultMessage:"default"}),tooltip:(0,t.jsx)(a.FormattedMessage,{id:"default_tooltip",defaultMessage:"default_tooltip"}),placeholder:K.formatMessage({id:"default"})}),(0,t.jsx)(Z.ZP.Item,{name:"rules",label:(0,t.jsxs)("span",{children:[(0,t.jsx)(a.FormattedMessage,{id:"rules",defaultMessage:"rules"})," ",(0,t.jsx)("a",{rel:"noreferrer",href:"https://laravel.com/docs/9.x/validation#available-validation-rules",target:"_blank",children:(0,t.jsx)(a.FormattedMessage,{id:"available-validation-rules",defaultMessage:"available-validation-rules"})})]}),tooltip:(0,t.jsx)(a.FormattedMessage,{id:"available-validation-rules-tooltip"}),valuePropName:"value",children:(0,t.jsx)(T.Z,{})}),(0,t.jsx)(G.Z,{width:"md",name:"visibility",label:(0,t.jsx)(a.FormattedMessage,{id:"visibility"}),tooltip:(0,t.jsx)(a.FormattedMessage,{id:"visibility_tooltip"}),placeholder:K.formatMessage({id:"visibility",defaultMessage:"visibility"}),min:1,max:1024,fieldProps:{step:1},rules:[{validator:function(){var y=_()(s()().mark(function S(U,m){return s()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(!(Math.pow(2,Math.ceil(Math.log2(m)))-m)){C.next=2;break}return C.abrupt("return",Promise.reject(new Error(K.formatMessage({id:"notPowerOfTwo",defaultMessage:"notPowerOfTwo"}))));case 2:return C.abrupt("return",Promise.resolve());case 3:case"end":return C.stop()}},S)}));function b(S,U){return y.apply(this,arguments)}return b}()}]}),(0,t.jsx)(Z.ZP.Item,{name:"extra",label:(0,t.jsx)(a.FormattedMessage,{id:"extra"}),tooltip:(0,t.jsx)(a.FormattedMessage,{id:"extra_tooltip"}),valuePropName:"value",children:(0,t.jsx)(T.Z,{})})]})},re=x,oe=[{title:(0,t.jsx)(a.FormattedMessage,{id:"name",defaultMessage:"name"}),dataIndex:"name",hideInSearch:!0,sorter:!0},{title:(0,t.jsx)(a.FormattedMessage,{id:"type",defaultMessage:"type"}),dataIndex:"type",sorter:!0},{title:(0,t.jsx)(a.FormattedMessage,{id:"default",defaultMessage:"default"}),dataIndex:"default",hideInSearch:!0}],le=function(L){var H=L.class_type,X=(0,f.useRef)(),se=(0,f.useState)(!1),Q=o()(se,2),w=Q[0],F=Q[1],k=(0,a.useIntl)(),q=(0,f.useState)(!1),K=o()(q,2),ee=K[0],Y=K[1],z=(0,f.useState)([]),te=o()(z,2),y=te[0],b=te[1],S=(0,f.useCallback)(function(){var U=_()(s()().mark(function m(D){var C,ae,$,N;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return C=D.class_type_to_remove,ae=D.name,F(!0),$=A.ZP.loading((0,t.jsx)(a.FormattedMessage,{id:"loading",defaultMessage:"loading"})),I.prev=3,I.next=6,(0,E.AK)({class_type:C,name:ae}).then(function(ne){F(!1),ne.success&&A.ZP.success(ne.message)});case 6:return $(),F(!1),(N=X.current)===null||N===void 0||N.reload(),I.abrupt("return",!0);case 12:return I.prev=12,I.t0=I.catch(3),$(),A.ZP.error((0,t.jsx)(a.FormattedMessage,{id:"error",defaultMessage:"error"})),F(!1),I.abrupt("return",!1);case 18:case"end":return I.stop()}},m,null,[[3,12]])}));return function(m){return U.apply(this,arguments)}}(),[X]);return(0,t.jsxs)(f.Fragment,{children:[(0,t.jsx)(re,{fields:y,onResponse:function(){var m;Y(!1),(m=X.current)===null||m===void 0||m.reload()},class_type:H,name:ee,visible:typeof ee=="string",onVisibleChange:function(m){return m===!1&&Y(!1)}}),(0,t.jsx)(R.ZP,{search:!1,headerTitle:k.formatMessage({id:"ModelFields",defaultMessage:"Model Fields"}),toolBarRender:function(){return[(0,t.jsxs)(c.ZP,{type:"primary",onClick:function(){return Y("new")},children:[(0,t.jsx)(P.Z,{})," ",(0,t.jsx)(a.FormattedMessage,{id:"new",defaultMessage:"new"})]},"new")]},loading:w,actionRef:X,rowKey:"id",request:function(m,D){var C=m.pageSize,ae=m.current,$=D&&Object.entries(D)[0];return F(!0),(0,E.XU)({page:ae,per_page:C,class_type:H,order_by:$&&$[0],order:$?$[1]==="ascend"?"ASC":"DESC":void 0}).then(function(N){return F(!1),N.success?(b(N.data),{data:N.data,total:N.data.length,success:!0}):[]})},columns:[].concat(oe,[{title:(0,t.jsx)(a.FormattedMessage,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",width:"10%",render:function(m,D){return[(0,t.jsx)(l.Z,{title:(0,t.jsx)(a.FormattedMessage,{id:"edit",defaultMessage:"edit"}),children:(0,t.jsx)(c.ZP,{type:"primary",icon:(0,t.jsx)(p.Z,{}),onClick:function(){return Y(D.name)}})},"edit"),(0,t.jsx)(M.Z,{title:(0,t.jsx)(a.FormattedMessage,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return D.name&&S({class_type_to_remove:H,name:D.name})},okText:(0,t.jsx)(a.FormattedMessage,{id:"yes",defaultMessage:"Yes"}),cancelText:(0,t.jsx)(a.FormattedMessage,{id:"no",defaultMessage:"No"}),children:(0,t.jsx)(l.Z,{title:(0,t.jsx)(a.FormattedMessage,{id:"delete",defaultMessage:"delete"}),children:(0,t.jsx)(c.ZP,{type:"primary",icon:(0,t.jsx)(r.Z,{}),danger:!0})})},"delete")]}}])})]})},de=le},80504:function(V,h,e){e.r(h);var i=e(26271),s=e(74453),g=e(67294),_=e(80854),v=e(80004),o=e(85893),f=function(){return(0,o.jsx)(s._z,{children:(0,o.jsxs)(i.ZP,{tabs:{type:"card",activeKey:"fields",onChange:function(r){return _.history.push("/users/".concat(r))}},children:[(0,o.jsx)(i.ZP.TabPane,{tab:(0,o.jsx)(_.FormattedMessage,{id:"list"})},"list"),(0,o.jsx)(i.ZP.TabPane,{tab:(0,o.jsx)(_.FormattedMessage,{id:"ModelFields"}),children:(0,o.jsx)(v.ZP,{class_type:"EscolaLms\\Auth\\Models\\User"})},"fields")]})})};h.default=f},36309:function(V,h,e){e.d(h,{AK:function(){return A},XU:function(){return P},kB:function(){return r}});var i=e(15009),s=e.n(i),g=e(97857),_=e.n(g),v=e(99289),o=e.n(v),f=e(80854);function P(l,M){return p.apply(this,arguments)}function p(){return p=o()(s()().mark(function l(M,a){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,f.request)("/api/model-fields",_()({method:"GET",params:M},a||{})));case 1:case"end":return u.stop()}},l)})),p.apply(this,arguments)}function r(l,M){return R.apply(this,arguments)}function R(){return R=o()(s()().mark(function l(M,a){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,f.request)("/api/admin/model-fields",_()({method:"POST",data:M},a||{})));case 1:case"end":return u.stop()}},l)})),R.apply(this,arguments)}function A(l,M){return c.apply(this,arguments)}function c(){return c=o()(s()().mark(function l(M,a){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,f.request)("/api/admin/model-fields",_()({method:"DELETE",data:M},a||{})));case 1:case"end":return u.stop()}},l)})),c.apply(this,arguments)}}}]);
