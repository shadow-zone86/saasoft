import{d as I,o as d,c as u,g as k,k as B,a as P}from"./vue.esm-bundler-P2GqSHaL.js";import{B as q}from"./BaseInput-BihJ6q_a.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S={class:"password-input"},E=["title"],N={key:0,class:"password-input__icon","aria-hidden":"true"},$={key:1,class:"password-input__icon password-input__icon--hidden","aria-hidden":"true"},x=I({__name:"PasswordInput",props:{modelValue:{},placeholder:{},error:{type:Boolean},disabled:{type:Boolean},maxlength:{}},emits:["update:modelValue","blur"],setup(a){const r=P(!1);return(p,e)=>(d(),u("div",S,[k(q,{"model-value":a.modelValue,type:r.value?"text":"password",placeholder:a.placeholder,error:a.error,disabled:a.disabled,maxlength:a.maxlength,class:"password-input__field","onUpdate:modelValue":e[0]||(e[0]=n=>p.$emit("update:modelValue",n)),onBlur:e[1]||(e[1]=n=>p.$emit("blur"))},null,8,["model-value","type","placeholder","error","disabled","maxlength"]),B("button",{type:"button",class:"password-input__toggle",title:r.value?"Скрыть пароль":"Показать пароль",tabindex:"-1",onClick:e[2]||(e[2]=n=>r.value=!r.value)},[r.value?(d(),u("span",N,"👁")):(d(),u("span",$,"👁‍🗨"))],8,E)]))}}),C=D(x,[["__scopeId","data-v-5533faa5"]]);x.__docgenInfo={exportName:"default",displayName:"PasswordInput",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"maxlength",required:!1,type:{name:"number"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"blur"}],sourceFiles:["/Users/romansokolovskiy/Documents/forest/saasoft/src/shared/ui/PasswordInput/ui/PasswordInput.vue"]};const O={title:"Shared/PasswordInput",component:C,tags:["autodocs"],argTypes:{error:{control:"boolean"},disabled:{control:"boolean"},maxlength:{control:"number"}}},o={args:{modelValue:"",placeholder:"Пароль"}},s={args:{modelValue:"••••••••",placeholder:"Пароль"}},t={args:{modelValue:"",placeholder:"Обязательное поле",error:!0}},l={args:{modelValue:"пароль",placeholder:"Пароль",disabled:!0}};var m,i,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: 'Пароль'
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var g,h,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    modelValue: '••••••••',
    placeholder: 'Пароль'
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,V,_;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: 'Обязательное поле',
    error: true
  }
}`,...(_=(V=t.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var y,v,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    modelValue: 'пароль',
    placeholder: 'Пароль',
    disabled: true
  }
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const T=["Default","WithValue","Error","Disabled"];export{o as Default,l as Disabled,t as Error,s as WithValue,T as __namedExportsOrder,O as default};
