import{a as ne,b as re,c as le}from"./chunk-ZGC33XT2.js";import{a as te,b as ie,c as ae}from"./chunk-E4VBJUJN.js";import{a as T}from"./chunk-GSNWQ4FR.js";import{a as oe}from"./chunk-AT26J2S3.js";import{a as se}from"./chunk-6ODF7MUU.js";import{a as U}from"./chunk-NDYST4XC.js";import{h as K,i as Q,l as X,m as Y,o as Z,r as ee}from"./chunk-KIGVSZDZ.js";import{E as q}from"./chunk-CC3LA27V.js";import{s as J}from"./chunk-FSRSBQOR.js";import{H as G}from"./chunk-6SOKX3XS.js";import{$a as B,Ab as M,Db as v,Eb as _,Mb as c,Ob as b,Pb as H,Qb as O,Sb as z,Tb as N,Ua as m,Ub as R,Va as f,Wb as W,Zb as x,_b as g,ga as k,ia as j,kb as $,mb as V,qa as u,ra as C,rb as I,sb as w,tb as y,ub as F,vb as l,wb as s,xb as L,ya as A}from"./chunk-TDWWCWZI.js";import{h as D}from"./chunk-DLDOR3YA.js";function de(n,r){if(n&1&&(l(0,"p"),c(1),x(2,"capitalizeFirstLetterPipe"),x(3,"capitalizeFirstLetterPipe"),s()),n&2){let i=r.$implicit;m(),H("",g(2,2,i.key),": ",g(3,4,i.value),"")}}function he(n,r){if(n&1&&(l(0,"h4"),c(1,"Datos Adicionales"),s(),y(2,de,4,6,"p",null,w)),n&2){let i=_().$implicit;m(2),F(i.datosDinamicos)}}function fe(n,r){if(n&1&&(l(0,"p"),c(1),x(2,"capitalizeFirstLetterPipe"),x(3,"setFechaWithSlashes"),x(4,"horariosAmPmFormat"),s(),l(5,"p"),c(6),s(),l(7,"p"),c(8),s(),l(9,"p"),c(10),s(),l(11,"p"),c(12),x(13,"capitalizeFirstLetterPipe"),s(),$(14,he,4,0),l(15,"p"),c(16,"-------------------------------------------------------------"),s()),n&2){let i=r.$implicit;m(),O(" ",g(2,8,i.fecha.dayName)," ",g(3,10,i.fecha.fecha)," ",g(4,12,i.fecha.timeSlot.time)," "),m(5),b("Altura: ",i.altura," cm"),m(2),b("Peso: ",i.peso," kg"),m(2),b("Temperatura: ",i.temperatura," \xB0C"),m(2),b("Presi\xF3n: ",g(13,14,i.presion),""),m(2),I(14,i.datosDinamicos&&i.datosDinamicos.length>0?14:-1)}}function _e(n,r){if(n&1&&(l(0,"mat-option",8),c(1),s()),n&2){let i=r.$implicit;V("value",i),m(),H(" ",i.nombre," ",i.apellido," ")}}function xe(n,r){if(n&1){let i=M();l(0,"h2",0),c(1,"Historia Cl\xEDnica"),s(),l(2,"mat-dialog-content",1),L(3,"br"),y(4,fe,17,16,null,null,w),l(6,"div",2)(7,"div",3)(8,"button",4),v("click",function(){u(i);let a=_();return C(a.descargarHistoriaPDF())}),l(9,"mat-icon"),c(10,"download"),s(),c(11," Descargar PDF Historia "),s()(),l(12,"div",5)(13,"mat-form-field",6)(14,"mat-label"),c(15,"Seleccione un especialista"),s(),l(16,"mat-select",7),R("valueChange",function(a){u(i);let e=_();return N(e.especialistaSeleccionado,a)||(e.especialistaSeleccionado=a),C(a)}),y(17,_e,2,3,"mat-option",8,w),s()(),l(19,"button",9),v("click",function(){u(i);let a=_();return C(a.descargarPorEspecialistaPDF())}),l(20,"mat-icon"),c(21,"download"),s(),c(22," PDF Historia por especialista "),s()(),l(23,"div",3)(24,"button",10),v("click",function(){u(i);let a=_();return C(a.onClose())}),c(25,"Cerrar"),s()()()()}if(n&2){let i=_();m(4),F(i.paciente.historiaClinica),m(12),z("value",i.especialistaSeleccionado),m(),F(i.especialistas)}}function ge(n,r){if(n&1){let i=M();l(0,"h2",11),c(1,"No hay historia cl\xEDnica disponible."),s(),l(2,"div",2)(3,"button",10),v("click",function(){u(i);let a=_();return C(a.onClose())}),c(4,"Ok"),s()()}}var je=(()=>{let r=class r{constructor(t,a,e,S,d){this.dialogRef=t,this.paciente=a,this.userService=e,this.turnosService=S,this.toast=d,this.especialistas=[],this.loadEspecialistas()}onClose(){this.dialogRef.close()}loadEspecialistas(){return D(this,null,function*(){this.especialistas=yield this.userService.getAllEnabledUsersByRol("especialista"),console.log(this.especialistas)})}descargarHistoriaPDF(){let t=new T,a=new Date,e=20,S=t.internal.pageSize.height-10,d=()=>{e>=S&&(t.addPage(),e=10)};t.addImage("../../../../assets/logo.png","PNG",150,10,50,50),t.text(`Fecha de creaci\xF3n: ${a.toLocaleDateString("es-ES")}`,10,e),e+=10,t.text(`Nombre del paciente: ${this.paciente.nombre} ${this.paciente.apellido}`,10,e),e+=10,t.text(`DNI: ${this.paciente.dni}`,10,e),e+=10,t.text(`Obra Social: ${this.paciente.obraSocial||"-"}`,10,e),e+=10,e+=10,t.text("Historia Cl\xEDnica:",10,e),e+=10,this.paciente.historiaClinica&&this.paciente.historiaClinica.length>0?this.paciente.historiaClinica.forEach(p=>{d(),t.text(`Fecha: ${p.fecha.fecha}`,15,e),e+=10,d(),t.text(`Altura: ${p.altura} cm`,15,e),e+=10,d(),t.text(`Peso: ${p.peso} kgs`,15,e),e+=10,d(),t.text(`Temperatura: ${p.temperatura} \xBAC`,15,e),e+=10,d(),t.text(`Presi\xF3n: ${p.presion}`,15,e),e+=10,p.datosDinamicos&&p.datosDinamicos.length>0&&(d(),t.text("Datos Din\xE1micos:",15,e),e+=10,p.datosDinamicos.forEach(E=>{d(),t.text(`${E.key}: ${E.value}`,20,e),e+=10})),e+=20}):(t.text("No hay datos de historia cl\xEDnica disponibles.",15,e),e+=10),t.save(`Historia_Clinica_${this.paciente.nombre}_${this.paciente.apellido}.pdf`)}descargarPorEspecialistaPDF(){return D(this,null,function*(){let a=(yield this.turnosService.getTurnosFromPaciente(this.paciente.email))?.filter(h=>h.especialistaId===this.especialistaSeleccionado?.email);if(a?.length===0){this.toast.info("No hay turnos con el especialista seleccionado");return}let e=new T,S="../../../../assets/logo.png",d=e.internal.pageSize.height-10,p=()=>{o>=d&&(e.addPage(),o=10)};e.addImage(S,"JPEG",10,10,50,30),e.setFontSize(18),e.text("Informe de Historia Cl\xEDnica por Especialista",70,20);let E=new Date().toLocaleDateString();e.setFontSize(12),e.text(`Fecha de emisi\xF3n: ${E}`,70,30);let o=50;e.text(`Nombre Paciente: ${this.paciente.nombre} ${this.paciente.apellido}`,10,o),o+=10,e.text(`DNI: ${this.paciente.dni}`,10,o),o+=10,e.text(`Obra Social: ${this.paciente.obraSocial||"-"}`,10,o),o+=20,e.text("Turnos:",10,o),o+=10,a?.forEach(h=>{let P=this.especialistas?.find(pe=>pe.email===h.especialistaId),ce=P?`${P.nombre} ${P.apellido}`:"Desconocido";p(),e.text(`Fecha: ${h.fecha.fecha}`,10,o),o+=10,p(),e.text(`Especialista: ${ce}`,10,o),o+=10,p(),e.text(`Especialialidad: ${h.especialidad}`,10,o),o+=10,p(),e.text(`Estado del turno: ${h.estado}`,10,o),o+=10,h.comentario!=""&&(p(),e.text(`Comentario del paciente: ${h.comentario}`,10,o),o+=10),h.resenia!=""&&(p(),e.text(`Diagn\xF3stico: ${h.resenia}`,10,o),o+=10),o+=10}),e.save(`Historia_Clinica_${this.paciente.nombre}_${this.paciente.apellido}_Especialista_${this.especialistaSeleccionado?.nombre}_${this.especialistaSeleccionado?.apellido}.pdf`)})}};r.\u0275fac=function(a){return new(a||r)(f(K),f(Q),f(U),f(se),f(G))},r.\u0275cmp=k({type:r,selectors:[["app-show-historia-clinica"]],standalone:!0,features:[W],decls:2,vars:1,consts:[["mat-dialog-title","",1,"dialog-title"],[1,"dialog-content"],["mat-dialog-actions","",1,"dialog-actions"],[1,"dialog-button-row"],["mat-button","",1,"text-center","btn","btn-success",3,"click"],[1,"dialog-button-row","d-flex","justify-content-evenly"],["appearance","fill",1,"me-3"],[3,"valueChange","value"],[3,"value"],["mat-button","",1,"btn","btn-dark",2,"height","45px","margin-top","0.5em",3,"click"],["mat-button","",1,"text-center","btn","btn-primary",3,"click"],[1,"text-center",2,"padding","1em"]],template:function(a,e){a&1&&$(0,xe,26,1)(1,ge,5,0),a&2&&I(0,e.paciente.historiaClinica&&e.paciente.historiaClinica.length>0?0:1)},dependencies:[q,le,ee,Z,re,J,oe,ne,ae,ie,te,X,Y],styles:[".dialog-title[_ngcontent-%COMP%]{text-align:center;padding-top:1em}.dialog-text[_ngcontent-%COMP%]{text-align:center}.dialog-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:20px 0;color:#000;overflow-y:auto}.dialog-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding-bottom:1em}.my-divider[_ngcontent-%COMP%]{border-top:1px solid #ccc;margin:10px 0}.dialog-button-row[_ngcontent-%COMP%]{margin-bottom:1em}"]});let n=r;return n})();var Ve=(()=>{let r=class r{constructor(t,a){this.el=t,this.renderer=a,this.setStyle()}setStyle(){let t={"border-radius":"50%",width:"200px",height:"200px","object-fit":"cover","margin-top":"1em","margin-bottom":"2em"};this.renderer.setStyle(this.el.nativeElement,"border-radius",t["border-radius"]),this.renderer.setStyle(this.el.nativeElement,"width",t.width),this.renderer.setStyle(this.el.nativeElement,"height",t.height),this.renderer.setStyle(this.el.nativeElement,"object-fit",t["object-fit"]),this.renderer.setStyle(this.el.nativeElement,"margin-top",t["margin-top"]),this.renderer.setStyle(this.el.nativeElement,"margin-bottom",t["margin-bottom"])}};r.\u0275fac=function(a){return new(a||r)(f(A),f(B))},r.\u0275dir=j({type:r,selectors:[["","appRoundedImg",""]],standalone:!0});let n=r;return n})();export{je as a,Ve as b};