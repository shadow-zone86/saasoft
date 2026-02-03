import{B as e}from"./BaseButton-CQcaiaMx.js";import"./vue.esm-bundler-P2GqSHaL.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const O={title:"Shared/BaseButton",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","primary-icon","default","icon","danger-icon"]},disabled:{control:"boolean"}}},a={args:{variant:"primary",type:"button"},render:t=>({components:{BaseButton:e},setup:()=>({args:t}),template:'<BaseButton v-bind="args" @click="() => {}">Добавить</BaseButton>'})},r={args:{variant:"default",type:"button"},render:t=>({components:{BaseButton:e},setup:()=>({args:t}),template:'<BaseButton v-bind="args" @click="() => {}">Отмена</BaseButton>'})},s={args:{variant:"primary-icon",type:"button",title:"Добавить учётную запись"},render:t=>({components:{BaseButton:e},setup:()=>({args:t}),template:'<BaseButton v-bind="args" @click="() => {}">+</BaseButton>'})},o={args:{variant:"icon",type:"button",title:"Действие"},render:t=>({components:{BaseButton:e},setup:()=>({args:t}),template:'<BaseButton v-bind="args" @click="() => {}">+</BaseButton>'})},n={args:{variant:"danger-icon",type:"button",title:"Удалить"},render:t=>({components:{BaseButton:e},setup:()=>({args:t}),template:'<BaseButton v-bind="args" @click="() => {}">🗑</BaseButton>'})},c={args:{variant:"primary",disabled:!0},render:t=>({components:{BaseButton:e},setup:()=>({args:t}),template:'<BaseButton v-bind="args">Недоступно</BaseButton>'})};var p,i,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    type: 'button'
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: '<BaseButton v-bind="args" @click="() => {}">Добавить</BaseButton>'
  })
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,B,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    type: 'button'
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: '<BaseButton v-bind="args" @click="() => {}">Отмена</BaseButton>'
  })
}`,...(d=(B=r.parameters)==null?void 0:B.docs)==null?void 0:d.source}}};var l,g,b;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary-icon',
    type: 'button',
    title: 'Добавить учётную запись'
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: '<BaseButton v-bind="args" @click="() => {}">+</BaseButton>'
  })
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,y,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    type: 'button',
    title: 'Действие'
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: '<BaseButton v-bind="args" @click="() => {}">+</BaseButton>'
  })
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var f,S,D;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'danger-icon',
    type: 'button',
    title: 'Удалить'
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: '<BaseButton v-bind="args" @click="() => {}">🗑</BaseButton>'
  })
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var I,P,x;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: '<BaseButton v-bind="args">Недоступно</BaseButton>'
  })
}`,...(x=(P=c.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const T=["Primary","Default","PrimaryIcon","Icon","DangerIcon","Disabled"];export{n as DangerIcon,r as Default,c as Disabled,o as Icon,a as Primary,s as PrimaryIcon,T as __namedExportsOrder,O as default};
