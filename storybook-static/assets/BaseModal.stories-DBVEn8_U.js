import{d as C,w as T,b as N,f as $,g as D,h as F,T as L,j as q,o as n,c as p,k as o,l as I,r as u,t as U,p as m,a as c}from"./vue.esm-bundler-P2GqSHaL.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B}from"./BaseButton-CQcaiaMx.js";const j=["aria-labelledby"],K={key:0,class:"base-modal__header"},O={id:"base-modal-title",class:"base-modal__title"},z={class:"base-modal__body"},A={key:1,class:"base-modal__footer"},E=C({__name:"BaseModal",props:{modelValue:{type:Boolean},title:{}},emits:["update:modelValue"],setup(e,{emit:a}){const S=e,x=a;function f(){x("update:modelValue",!1)}function i(t){t.key==="Escape"&&f()}return T(()=>S.modelValue,t=>{t?(document.body.style.overflow="hidden",document.addEventListener("keydown",i)):(document.body.style.overflow="",document.removeEventListener("keydown",i))},{immediate:!0}),N(()=>{document.removeEventListener("keydown",i),document.body.style.overflow=""}),(t,v)=>(n(),$(q,{to:"body"},[D(L,{name:"base-modal"},{default:F(()=>[e.modelValue?(n(),p("div",{key:0,class:"base-modal",role:"dialog","aria-modal":"true","aria-labelledby":e.title?"base-modal-title":void 0},[o("div",{class:"base-modal__backdrop","aria-hidden":"true",onClick:f}),o("div",{class:"base-modal__box",onClick:v[0]||(v[0]=I(()=>{},["stop"]))},[e.title||t.$slots.title?(n(),p("header",K,[u(t.$slots,"title",{},()=>[o("h2",O,U(e.title),1)],!0)])):m("",!0),o("div",z,[u(t.$slots,"default",{},void 0,!0)]),t.$slots.footer?(n(),p("footer",A,[u(t.$slots,"footer",{},void 0,!0)])):m("",!0)])],8,j)):m("",!0)]),_:3})]))}}),d=W(E,[["__scopeId","data-v-ec6170d7"]]);E.__docgenInfo={exportName:"default",displayName:"BaseModal",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"title"},{name:"default"},{name:"footer"}],sourceFiles:["/Users/romansokolovskiy/Documents/forest/saasoft/src/shared/ui/BaseModal/ui/BaseModal.vue"]};const P={title:"Shared/BaseModal",component:d,tags:["autodocs"],argTypes:{title:{control:"text"}}},s={args:{title:"Заголовок модального окна"},render:e=>({components:{BaseModal:d,BaseButton:B},setup:()=>{const a=c(!1);return{args:e,open:a}},template:`
      <div>
        <BaseButton variant="primary" type="button" @click="open = true">Открыть</BaseButton>
        <BaseModal v-bind="args" v-model="open">
          <p style="margin: 0;">
            Контент модального окна. Закройте по клику на оверлей или по Escape.
          </p>
        </BaseModal>
      </div>
    `})},r={args:{title:"Удалить учётную запись?"},render:e=>({components:{BaseModal:d,BaseButton:B},setup:()=>{const a=c(!1);return{args:e,open:a}},template:`
      <div>
        <BaseButton variant="default" type="button" @click="open = true">Открыть</BaseButton>
        <BaseModal v-bind="args" v-model="open">
          <p style="margin: 0;">
            Учётная запись будет удалена. Это действие нельзя отменить.
          </p>
          <template #footer>
            <BaseButton variant="default" type="button" @click="open = false">Отмена</BaseButton>
            <BaseButton variant="primary" type="button" @click="open = false">Удалить</BaseButton>
          </template>
        </BaseModal>
      </div>
    `})},l={render:()=>({components:{BaseModal:d,BaseButton:B},setup:()=>({open:c(!1)}),template:`
      <div>
        <BaseButton variant="primary" type="button" @click="open = true">Открыть</BaseButton>
        <BaseModal v-model="open">
          <template #title>
            <div style="display:flex; align-items:center; gap:8px;">
              <span aria-hidden="true">🔒</span>
              <span style="font-weight: 600;">Кастомный заголовок</span>
            </div>
          </template>
          <p style="margin: 0;">
            Пример кастомного заголовка через слот.
          </p>
        </BaseModal>
      </div>
    `})};var y,b,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Заголовок модального окна'
  },
  render: args => ({
    components: {
      BaseModal,
      BaseButton
    },
    setup: () => {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <BaseButton variant="primary" type="button" @click="open = true">Открыть</BaseButton>
        <BaseModal v-bind="args" v-model="open">
          <p style="margin: 0;">
            Контент модального окна. Закройте по клику на оверлей или по Escape.
          </p>
        </BaseModal>
      </div>
    \`
  })
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var k,_,M;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Удалить учётную запись?'
  },
  render: args => ({
    components: {
      BaseModal,
      BaseButton
    },
    setup: () => {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <BaseButton variant="default" type="button" @click="open = true">Открыть</BaseButton>
        <BaseModal v-bind="args" v-model="open">
          <p style="margin: 0;">
            Учётная запись будет удалена. Это действие нельзя отменить.
          </p>
          <template #footer>
            <BaseButton variant="default" type="button" @click="open = false">Отмена</BaseButton>
            <BaseButton variant="primary" type="button" @click="open = false">Удалить</BaseButton>
          </template>
        </BaseModal>
      </div>
    \`
  })
}`,...(M=(_=r.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var h,w,V;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BaseModal,
      BaseButton
    },
    setup: () => {
      const open = ref(false);
      return {
        open
      };
    },
    template: \`
      <div>
        <BaseButton variant="primary" type="button" @click="open = true">Открыть</BaseButton>
        <BaseModal v-model="open">
          <template #title>
            <div style="display:flex; align-items:center; gap:8px;">
              <span aria-hidden="true">🔒</span>
              <span style="font-weight: 600;">Кастомный заголовок</span>
            </div>
          </template>
          <p style="margin: 0;">
            Пример кастомного заголовка через слот.
          </p>
        </BaseModal>
      </div>
    \`
  })
}`,...(V=(w=l.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const Q=["Default","WithFooter","CustomTitleSlot"];export{l as CustomTitleSlot,s as Default,r as WithFooter,Q as __namedExportsOrder,P as default};
