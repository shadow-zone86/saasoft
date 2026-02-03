import{d as _,c as o,t as p,p as k,F as q,q as C,n as E,o as r}from"./vue.esm-bundler-P2GqSHaL.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";const F=["value","disabled"],N={key:0,value:"",disabled:""},A=["value"],O=_({__name:"BaseSelect",props:{modelValue:{},options:{},placeholder:{},error:{type:Boolean},disabled:{type:Boolean}},emits:["update:modelValue","change"],setup(e){return(c,i)=>(r(),o("select",{value:e.modelValue,disabled:e.disabled,class:E([{"base-select--error":e.error},"base-select"]),onChange:i[0]||(i[0]=a=>{c.$emit("update:modelValue",a.target.value),c.$emit("change")})},[e.placeholder?(r(),o("option",N,p(e.placeholder),1)):k("",!0),(r(!0),o(q,null,C(e.options,a=>(r(),o("option",{key:a.value,value:a.value},p(a.label),9,A))),128))],42,F))}}),I=x(O,[["__scopeId","data-v-06399511"]]);O.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"BaseSelectOption"}]}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"change"}],sourceFiles:["/Users/romansokolovskiy/Documents/forest/saasoft/src/shared/ui/BaseSelect/ui/BaseSelect.vue"]};const $={title:"Shared/BaseSelect",component:I,tags:["autodocs"],argTypes:{error:{control:"boolean"},disabled:{control:"boolean"}}},d=[{value:"ldap",label:"LDAP"},{value:"local",label:"Локальная"}],s={args:{modelValue:"",options:d,placeholder:"Выберите тип"}},l={args:{modelValue:"local",options:d,placeholder:"Выберите тип"}},t={args:{modelValue:"",options:d,placeholder:"Выберите тип",error:!0}},n={args:{modelValue:"local",options:d,disabled:!0}};var u,m,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: typeOptions,
    placeholder: 'Выберите тип'
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,h,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    modelValue: 'local',
    options: typeOptions,
    placeholder: 'Выберите тип'
  }
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var V,f,v;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: typeOptions,
    placeholder: 'Выберите тип',
    error: true
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,B,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    modelValue: 'local',
    options: typeOptions,
    disabled: true
  }
}`,...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const z=["Default","WithValue","Error","Disabled"];export{s as Default,n as Disabled,t as Error,l as WithValue,z as __namedExportsOrder,$ as default};
