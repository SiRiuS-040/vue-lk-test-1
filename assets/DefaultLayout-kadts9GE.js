import{f as k,d as h,g as S,r as M,o as p,c as f,a as s,b as t,w as u,U as n,e,I as l,B as c,h as d,i as _,j as y,n as E,_ as g,k as I,u as R,l as O,m as A,p as N,t as U,q as B}from"./index-ONC0lTlH.js";import{L as $}from"./LangSelect-DYz9TfuH.js";const C=k("appMenu",{state:()=>({isOpen:!1}),getters:{},actions:{triggerMenuState(){this.isOpen=!this.isOpen}}}),w={class:"app-menu__header"},x={class:"app-menu__nav navigation-1"},T={class:"app-menu__footer"},z=h({__name:"AppMenu",setup(L){const i=C(),m=S();return(r,a)=>{const o=M("router-link");return p(),f("div",{class:E(["app-menu",{"is-open":e(i).isOpen}])},[s("div",w,[a[1]||(a[1]=s("span",null,"Demo LK",-1)),t(d,{theme:e(c).CLEAR,class:"app-menu__menu-close",onClick:a[0]||(a[0]=v=>e(i).triggerMenuState())},{default:u(()=>[t(n,{icon:e(l).CLOSE},null,8,["icon"])]),_:1},8,["theme"])]),s("ul",x,[s("li",null,[t(o,{class:"app-menu__nav-item",to:"/"},{default:u(()=>[t(n,{icon:e(l).USER_MINI},null,8,["icon"]),a[2]||(a[2]=_("Profile "))]),_:1})]),s("li",null,[t(o,{class:"app-menu__nav-item",to:"/vehicles"},{default:u(()=>[t(n,{icon:e(l).RIM},null,8,["icon"]),a[3]||(a[3]=_("Vehicles "))]),_:1})]),s("li",null,[t(o,{class:"app-menu__nav-item",to:"/components"},{default:u(()=>[t(n,{icon:e(l).TRASH},null,8,["icon"]),a[4]||(a[4]=_(" Components "))]),_:1})])]),s("div",T,[t(d,{theme:e(c).CLEAR,class:"app-menu__footer-control",onClick:y(e(m).logout,["prevent"])},{default:u(()=>[t(n,{icon:e(l).LOGOUT},null,8,["icon"]),a[5]||(a[5]=_(" Logout "))]),_:1},8,["theme","onClick"])])],2)}}}),D=g(z,[["__scopeId","data-v-f99e9493"]]),V={class:"default-layout"},b={class:"default-layout__wrapper"},H={class:"default-layout__content"},P={class:"default-layout__header"},Z={class:"default-layout__header-info"},j={class:"default-layout__header-user"},q={class:"default-layout__header-user-avatar-wrapper"},F=["src"],G={class:"text-3"},K={class:"default-layout__main"},Q=h({__name:"DefaultLayout",setup(L){const i=I();R();const m=C(),r=S();return(a,o)=>(p(),f("div",V,[s("div",b,[t(D,{class:"default-layout__app-menu"}),s("div",H,[s("div",P,[s("div",Z,[t(d,{format:e(O).SQUARE,theme:e(c).OUTLINE,onClick:o[0]||(o[0]=y(v=>e(i).push({name:"NewEmployee"}),["prevent"]))},{default:u(()=>[t(n,{icon:e(l).PLUS},null,8,["icon"])]),_:1},8,["format","theme"]),s("span",j,[s("span",q,[e(r).avatar?(p(),f("img",{key:0,src:e(r).avatar,alt:"Аватар",class:"default-layout__header-user-avatar"},null,8,F)):(p(),A(n,{key:1,icon:e(l).USER,size:e(N).SIZE_32},null,8,["icon","size"]))]),s("span",G,U(e(r).userName),1)]),t($)]),t(d,{theme:e(c).CLEAR,class:"default-layout__header-burger",onClick:o[1]||(o[1]=v=>e(m).triggerMenuState())},{default:u(()=>[t(n,{icon:e(l).MORE_HORIZONTAL},null,8,["icon"])]),_:1},8,["theme"])]),s("div",K,[B(a.$slots,"default",{},void 0,!0)])])])]))}}),X=g(Q,[["__scopeId","data-v-b5a63c44"]]);export{X as default};
