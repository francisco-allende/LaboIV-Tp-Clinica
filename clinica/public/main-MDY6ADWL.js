import{a as W,c as _}from"./chunk-ZNRPQF5C.js";import{C as B,D as L,E as k,F as U,s as T,t as j,v as x,w as V,y as z}from"./chunk-FCOQOL3J.js";import{a as b,b as v,c as O,e as E,f as w,g as P}from"./chunk-USYCJER5.js";import{f as Y,g as p,h as A,m as H,n as R,p as Z,u as G}from"./chunk-NKSTYMZV.js";import"./chunk-WXI33M2S.js";import{$ as c,$a as g,Ea as d,Ob as M,Ua as F,Wa as u,Ya as h,Z as N,_a as f,bc as y,ea as m,fa as s,ja as C,ma as D,sb as S}from"./chunk-FEU3MYRR.js";var K=(o,e)=>{let t=s(U),r=s(L),i=s(w);return t.getLoggedUser()?!0:(r.error("Necesita estar logueado para acceder al sitio"),i.navigateByUrl("login"),!1)};var X=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",canActivate:[K],loadComponent:()=>import("./chunk-OGPCE6Z5.js").then(o=>o.HomeComponent)},{path:"login",loadComponent:()=>import("./chunk-7TNOSMFR.js").then(o=>o.LoginComponent)},{path:"register",loadComponent:()=>import("./chunk-KMQZ5VUE.js").then(o=>o.RegisterComponent)},{path:"enviar_email",loadComponent:()=>import("./chunk-2K2RITOD.js").then(o=>o.EnviarEmailComponent)},{path:"error",loadComponent:()=>import("./chunk-3FPEBYUP.js").then(o=>o.PageNotFoundComponent)},{path:"**",redirectTo:"error"}];var oe=(()=>{let e=class e extends R{constructor(r,i,n){super(r,i,n,s(u,{optional:!0}))}ngOnDestroy(){this.flush()}};e.\u0275fac=function(i){return new(i||e)(m(y),m(p),m(A))},e.\u0275prov=c({token:e,factory:e.\u0275fac});let o=e;return o})();function ie(){return new H}function ne(o,e,t){return new G(o,e,t)}var J=[{provide:A,useFactory:ie},{provide:R,useClass:oe},{provide:h,useFactory:ne,deps:[v,R,g]}],ae=[{provide:p,useFactory:()=>new Z},{provide:d,useValue:"BrowserAnimations"},...J],Me=[{provide:p,useClass:Y},{provide:d,useValue:"NoopAnimations"},...J];function Q(){return f("NgEagerAnimations"),[...ae]}var se="@",de=(()=>{let e=class e{constructor(r,i,n,a,l){this.doc=r,this.delegate=i,this.zone=n,this.animationType=a,this.moduleImpl=l,this._rendererFactoryPromise=null,this.scheduler=s(u,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-X6DYRKDI.js")).catch(i=>{throw new N(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let a=new n(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(r,i){let n=this.delegate.createRenderer(r,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new I(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let re=l.createRenderer(r,i);a.use(re)}).catch(l=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){F()},e.\u0275prov=c({token:e,factory:e.\u0275fac});let o=e;return o})(),I=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,i){this.delegate.insertBefore(e,t,r,i)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,i){this.delegate.setAttribute(e,t,r,i)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,i){this.delegate.setStyle(e,t,r,i)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(se)}};function $(o="animations"){return f("NgAsyncAnimations"),D([{provide:h,useFactory:(e,t,r)=>new de(e,t,r,o),deps:[y,v,g]},{provide:d,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ee={providers:[b(),Q(),k(),x(()=>V()),P(X),z(()=>B()),T(()=>j({projectId:"clinica-3c199",appId:"1:843286763763:web:20326de4d5d4168fcebf86",storageBucket:"clinica-3c199.appspot.com",apiKey:"AIzaSyARVYnrMWCFZLB64LouAFTOxtRpl__n98s",authDomain:"clinica-3c199.firebaseapp.com",messagingSenderId:"843286763763"})),W(()=>_()),$()]};var te=(()=>{let e=class e{constructor(){this.title="clinica"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=C({type:e,selectors:[["app-root"]],standalone:!0,features:[M],decls:1,vars:0,template:function(i,n){i&1&&S(0,"router-outlet")},dependencies:[E]});let o=e;return o})();O(te,ee).catch(o=>console.error(o));