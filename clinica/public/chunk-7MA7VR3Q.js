import{i as D,n as k,o as B,r as A,s as H}from"./chunk-SSCLPC2F.js";import{a as O,b as V,c as j}from"./chunk-TAME4DBA.js";import{$a as v,Ab as o,Bb as E,Eb as S,Hb as w,Ib as p,Rb as a,Tb as m,Ub as I,Vb as T,_a as l,_b as b,bc as c,cc as s,ea as P,na as f,oa as M,pb as g,vb as _,wb as C,xa as u,xb as x,ya as h,yb as y,zb as n}from"./chunk-EWRZD5YS.js";var z=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=M({type:e}),e.\u0275inj=P({imports:[D,D]});let t=e;return t})();function N(t,e){if(t&1&&(n(0,"p"),a(1),c(2,"capitalizeFirstLetterPipe"),c(3,"capitalizeFirstLetterPipe"),o()),t&2){let i=e.$implicit;l(),I("",s(2,2,i.key),": ",s(3,4,i.value),"")}}function R(t,e){if(t&1&&(n(0,"h4"),a(1,"Datos Adicionales"),o(),x(2,N,4,6,"p",null,C)),t&2){let i=p().$implicit;l(2),y(i.datosDinamicos)}}function $(t,e){if(t&1&&(n(0,"p"),a(1),c(2,"capitalizeFirstLetterPipe"),c(3,"setFechaWithSlashes"),c(4,"horariosAmPmFormat"),o(),n(5,"p"),a(6),o(),n(7,"p"),a(8),o(),n(9,"p"),a(10),o(),n(11,"p"),a(12),c(13,"capitalizeFirstLetterPipe"),o(),g(14,R,4,0),n(15,"p"),a(16,"-------------------------------------------------------------"),o()),t&2){let i=e.$implicit;l(),T(" ",s(2,8,i.fecha.dayName)," ",s(3,10,i.fecha.fecha)," ",s(4,12,i.fecha.timeSlot.time)," "),l(5),m("Altura: ",i.altura," cm"),l(2),m("Peso: ",i.peso," kg"),l(2),m("Temperatura: ",i.temperatura," \xB0C"),l(2),m("Presi\xF3n: ",s(13,14,i.presion),""),l(2),_(14,i.datosDinamicos&&i.datosDinamicos.length>0?14:-1)}}function W(t,e){if(t&1){let i=S();n(0,"h2",0),a(1,"Historia Cl\xEDnica"),o(),n(2,"mat-dialog-content",1),E(3,"br"),x(4,$,17,16,null,null,C),n(6,"div",2)(7,"button",3),w("click",function(){u(i);let r=p();return h(r.onClose())}),a(8,"Ok"),o()()()}if(t&2){let i=p();l(4),y(i.historiaClinica)}}function G(t,e){if(t&1){let i=S();n(0,"h2",4),a(1,"No hay historia cl\xEDnica disponible."),o(),n(2,"div",2)(3,"button",3),w("click",function(){u(i);let r=p();return h(r.onClose())}),a(4,"Ok"),o()()}}var ot=(()=>{let e=class e{constructor(d,r){this.dialogRef=d,this.historiaClinica=r}onClose(){this.dialogRef.close()}};e.\u0275fac=function(r){return new(r||e)(v(k),v(B))},e.\u0275cmp=f({type:e,selectors:[["app-show-historia-clinica"]],standalone:!0,features:[b],decls:2,vars:1,consts:[["mat-dialog-title","",1,"dialog-title"],[1,"dialog-content"],["mat-dialog-actions","",1,"dialog-actions"],["mat-button","",1,"text-center","btn","btn-primary",3,"click"],[1,"text-center",2,"padding","1em"]],template:function(r,F){r&1&&g(0,W,9,0)(1,G,5,0),r&2&&_(0,F.historiaClinica&&F.historiaClinica.length>0?0:1)},dependencies:[z,j,V,O,A,H],styles:[".dialog-title[_ngcontent-%COMP%]{text-align:center;padding-top:1em}.dialog-text[_ngcontent-%COMP%]{text-align:center}.dialog-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:20px 0;color:#000;overflow-y:auto}.dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-bottom:1em}.my-divider[_ngcontent-%COMP%]{border-top:1px solid #ccc;margin:10px 0}"]});let t=e;return t})();export{ot as a};
