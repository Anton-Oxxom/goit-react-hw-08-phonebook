"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[724],{7724:function(t,e,n){n.r(e),n.d(e,{default:function(){return A}});var a=n(4942),s=n(1413),i=n(9439),r=n(2791),c=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var a=63&n[t];e+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return e},o=n(8099),l=n(1686),u=n.n(l),m="ContactForm_section__Yogoh",d="ContactForm_title__jZguf",_="ContactForm_label__-cVXI",h="ContactForm_input__Bl93P",f="ContactForm_button__eSwX9",x=n(3329),C=function(){var t=(0,r.useState)({name:"",number:""}),e=(0,i.Z)(t,2),n=e[0],l=e[1],C=(0,o.wY)().data,j=(0,o.Tn)(),p=(0,i.Z)(j,2),b=p[0],v=p[1],N=v.isSuccess,g=v.isLoading,L=function(t){var e=t.currentTarget,n=e.name,i=e.value;l((function(t){return(0,s.Z)((0,s.Z)({},t),{},(0,a.Z)({},n,i))}))},w=function(){l({name:"",number:""})};(0,r.useEffect)((function(){N&&w()}),[N]);var F=n.name,Z=n.number;return(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)("h2",{className:d,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432 \u043a\u043d\u0438\u0433\u0443"}),(0,x.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=(0,s.Z)({id:c()},n);if(C.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return w(),u().Notify.failure("".concat(e.name," is already in phonebook"));b(e)},children:[(0,x.jsxs)("label",{className:_,children:["\u0406\u043c'\u044f",(0,x.jsx)("input",{className:h,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:F,onChange:L})]}),(0,x.jsxs)("label",{className:_,children:["\u041d\u043e\u043c\u0435\u0440",(0,x.jsx)("input",{className:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:Z,onChange:L})]}),(0,x.jsx)("button",{type:"submit",className:f,disabled:g,children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]})]})},j=n(1405),p=n(643),b="ContactsListItem_item__VnwkN",v="ContactsListItem_name__jhG1M",N="ContactsListItem_number__jtk+m",g="ContactsListItem_button__gfbnW",L=function(t){var e=t.id,n=t.name,a=t.number,s=(0,o.Nt)(),r=(0,i.Z)(s,2),c=r[0],l=r[1].isLoading;return(0,x.jsxs)("li",{id:e,className:b,children:[(0,x.jsx)("span",{className:v,children:n}),":"," ",(0,x.jsx)("span",{className:N,children:a}),(0,x.jsx)("button",{className:g,onClick:function(){return c(e)},disabled:l,children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})},w={section:"ContactsList_section__IE6+j",title:"ContactsList_title__Nc-fb",list:"ContactsList_list__mmE3Y",text:"ContactsList_text__URA4K"},F=function(){var t=(0,o.wY)(),e=t.data,n=t.isLoading,a=t.isSuccess,s=(0,j.v9)((function(t){return t.filter})),i=""===s?e:e.filter((function(t){return t.name.toLowerCase().includes(s.toLowerCase())}));return(0,x.jsxs)("div",{className:w.section,children:[(0,x.jsx)("h2",{className:w.title,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430"}),(0,x.jsxs)("ul",{className:w.list,children:[n&&(0,x.jsx)("div",{className:w.loader,children:(0,x.jsx)(p._P,{height:"200",width:"200",color:"#0031f9",ariaLabel:"loading"})}),a&&i.map((function(t){var e=t.id,n=t.name,a=t.number;return(0,x.jsx)(L,{id:e,name:n,number:a},e)})),i&&0===i.length&&(0,x.jsx)("span",{className:w.text,children:" \u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e "})]})]})},Z=n(9030),k={section:"ContactsFilter_section__4Ctst",title:"ContactsFilter_title__G0Uie",list:"ContactsFilter_list__avU5N",text:"ContactsFilter_text__g40TF"},y=function(){var t=(0,j.I0)(),e=(0,j.v9)((function(t){return t.contacts.filter}));return(0,x.jsxs)("div",{className:k.section,children:[(0,x.jsx)("h2",{className:k.title,children:"\u0417\u043d\u0430\u0439\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0437\u0430 \u0456\u043c'\u044f\u043c"}),(0,x.jsx)("input",{className:k.input,onChange:function(e){t((0,Z.M6)(e.currentTarget.value))},value:e})]})};function A(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(C,{}),(0,x.jsx)(y,{}),(0,x.jsx)(F,{})]})}}}]);
//# sourceMappingURL=724.35030dd4.chunk.js.map