import{_ as d,i as c,o as p,c as m,b as o,j as l,v as i,k as u,p as _,e as g}from"./index-120dd710.js";const f={name:"LoginView",data(){return{username:"",password:""}},methods:{login(){localStorage.setItem("loggedin",JSON.stringify(!0)),c.push({name:"Home"})},validEmail(s){const e=/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;return s.match(e)!=null}}},a=s=>(_("data-v-ae9c8307"),s=s(),g(),s),h={class:""},w={class:"card p-5 m-4 bg-theme"},v=a(()=>o("h4",null,"Login",-1)),b={class:"form-group"},x={class:"form-group"},E=a(()=>o("label",{for:"user-email"},"User/Email",-1)),I={class:"form-group"},S=a(()=>o("label",{for:"user-password"},"Password",-1));function V(s,e,k,y,r,n){return p(),m("div",h,[o("div",w,[v,o("form",b,[o("div",x,[E,l(o("input",{id:"user-email",class:"form-control",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>r.username=t),autocomplete:"johndue@domail.com"},null,512),[[i,r.username]])]),o("div",I,[S,l(o("input",{id:"user-password",class:"form-control",type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>r.password=t),autocomplete:"current-password"},null,512),[[i,r.password]])]),o("button",{class:"btn bg-gold-6 text-light form-control mt-3",onClick:e[2]||(e[2]=u((...t)=>n.login&&n.login(...t),["prevent"]))},"Enter")])])])}const A=d(f,[["render",V],["__scopeId","data-v-ae9c8307"]]);export{A as default};
