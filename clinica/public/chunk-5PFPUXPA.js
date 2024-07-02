import{a as ot,b as at}from"./chunk-G5C6YSKJ.js";import{a as Y}from"./chunk-Q7SOMD2X.js";import{a as Z,c as it}from"./chunk-ZGC33XT2.js";import{a as L,b as V,c as $}from"./chunk-E4VBJUJN.js";import{a as et}from"./chunk-GSNWQ4FR.js";import{a as tt}from"./chunk-AT26J2S3.js";import{a as nt}from"./chunk-QHILSBCE.js";import{a as R,b as U}from"./chunk-XS3MNTZJ.js";import{a as W}from"./chunk-DEDYB2T4.js";import{a as N}from"./chunk-ZHVU5HJQ.js";import"./chunk-HUVKKSNT.js";import{h as K,i as X,j as q,l as J,m as Q}from"./chunk-KIGVSZDZ.js";import"./chunk-CC3LA27V.js";import"./chunk-7XIEKY6O.js";import{s as G}from"./chunk-FSRSBQOR.js";import{a as B}from"./chunk-4YPGSVQN.js";import{P as O}from"./chunk-KOE6HBMH.js";import"./chunk-IX6G3U3V.js";import"./chunk-2URDVIT7.js";import{Ab as x,Db as f,Eb as d,Mb as l,Ob as P,Pb as D,Qb as k,Rb as z,Sa as H,Ua as c,Va as h,Wb as w,Zb as p,_b as m,ga as b,kb as g,mb as y,qa as C,ra as u,rb as _,sb as I,tb as M,tc as j,ub as E,vb as s,wb as r,wc as A,xb as v}from"./chunk-TDWWCWZI.js";import"./chunk-FK6H3RFT.js";import{h as T}from"./chunk-DLDOR3YA.js";function pt(n,a){if(n&1&&(s(0,"p"),l(1),p(2,"capitalizeFirstLetterPipe"),p(3,"capitalizeFirstLetterPipe"),r()),n&2){let e=a.$implicit;c(),D("",m(2,2,e.key),": ",m(3,4,e.value),"")}}function mt(n,a){if(n&1&&(s(0,"h4"),l(1,"Datos Adicionales"),r(),M(2,pt,4,6,"p",null,I)),n&2){let e=d(2);c(2),E(e.data.historiaClinica.datosDinamicos)}}function _t(n,a){if(n&1){let e=x();s(0,"h2",0),l(1,"Historia Cl\xEDnica"),r(),s(2,"mat-dialog-content",1),v(3,"br"),s(4,"p"),l(5),p(6,"capitalizeFirstLetterPipe"),p(7,"setFechaWithSlashes"),p(8,"horariosAmPmFormat"),r(),s(9,"p"),l(10),r(),s(11,"p"),l(12),r(),s(13,"p"),l(14),r(),s(15,"p"),l(16),p(17,"capitalizeFirstLetterPipe"),r(),g(18,mt,4,0),s(19,"p"),l(20,"-------------------------------------------------------------"),r(),s(21,"div",2)(22,"div",3)(23,"button",4),f("click",function(){C(e);let o=d();return u(o.descargarHistoriaPDF())}),s(24,"mat-icon"),l(25,"download"),r(),l(26," Descargar PDF Historia "),r()(),s(27,"div",3)(28,"button",5),f("click",function(){C(e);let o=d();return u(o.onClose())}),l(29,"Cerrar"),r()()()()}if(n&2){let e=d();c(5),k(" ",m(6,8,e.data.historiaClinica.fecha.dayName)," ",m(7,10,e.data.historiaClinica.fecha.fecha)," ",m(8,12,e.data.historiaClinica.fecha.timeSlot.time)," "),c(5),P("Altura: ",e.data.historiaClinica.altura," cm"),c(2),P("Peso: ",e.data.historiaClinica.peso," kg"),c(2),P("Temperatura: ",e.data.historiaClinica.temperatura," \xB0C"),c(2),P("Presi\xF3n: ",m(17,14,e.data.historiaClinica.presion),""),c(2),_(18,e.data.historiaClinica.datosDinamicos&&e.data.historiaClinica.datosDinamicos.length>0?18:-1)}}function Ct(n,a){if(n&1){let e=x();s(0,"h2",6),l(1,"No hay historia cl\xEDnica disponible."),r(),s(2,"div",2)(3,"button",5),f("click",function(){C(e);let o=d();return u(o.onClose())}),l(4,"Ok"),r()()}}var st=(()=>{let a=class a{constructor(t,o,i){this.dialogRef=t,this.data=o,this.toast=i}onClose(){this.dialogRef.close()}descargarHistoriaPDF(){let t=new et,o=new Date,i=20,S=t.internal.pageSize.height-10;t.addImage("../../../../assets/logo.png","PNG",150,10,50,50),t.text(`Fecha de creaci\xF3n: ${o.toLocaleDateString("es-ES")}`,10,i),i+=10,t.text(`Nombre del paciente: ${this.data.paciente.nombre} ${this.data.paciente.apellido}`,10,i),i+=10,t.text(`DNI: ${this.data.paciente.dni}`,10,i),i+=10,t.text(`Obra Social: ${this.data.paciente.obraSocial||"-"}`,10,i),i+=10,t.text(`Especialidad del turno: ${this.data.turno.especialidad}`,10,i),i+=10,t.text(`Diagn\xF3stico: ${this.data.turno.resenia}`,10,i),i+=20,t.text("Historia Cl\xEDnica:",10,i),i+=10,this.data.historiaClinica&&this.data.historiaClinica.altura>0?(t.text(`Fecha: ${this.data.historiaClinica.fecha.fecha}`,15,i),i+=10,t.text(`Altura: ${this.data.historiaClinica.altura} cm`,15,i),i+=10,t.text(`Peso: ${this.data.historiaClinica.peso} kgs`,15,i),i+=10,t.text(`Temperatura: ${this.data.historiaClinica.temperatura} \xBAC`,15,i),i+=10,t.text(`Presi\xF3n: ${this.data.historiaClinica.presion}`,15,i),i+=10,this.data.historiaClinica.datosDinamicos&&this.data.historiaClinica.datosDinamicos.length>0&&(t.text("Datos Din\xE1micos:",15,i),i+=10,this.data.historiaClinica.datosDinamicos.forEach(F=>{t.text(`${F.key}: ${F.value}`,20,i),i+=10})),i+=20):(t.text("No hay datos de historia cl\xEDnica disponibles.",15,i),i+=10),t.save(`Historia_Clinica_${this.data.paciente.nombre}_${this.data.paciente.apellido}.pdf`)}};a.\u0275fac=function(o){return new(o||a)(h(K),h(X),h(O))},a.\u0275cmp=b({type:a,selectors:[["app-show-one-hisoria-clinica"]],standalone:!0,features:[w],decls:2,vars:1,consts:[["mat-dialog-title","",1,"dialog-title"],[1,"dialog-content"],["mat-dialog-actions","",1,"dialog-actions"],[1,"dialog-button-row"],["mat-button","",1,"text-center","btn","btn-success",3,"click"],["mat-button","",1,"text-center","btn","btn-primary",3,"click"],[1,"text-center",2,"padding","1em"]],template:function(o,i){o&1&&g(0,_t,30,16)(1,Ct,5,0),o&2&&_(0,i.data.historiaClinica&&i.data.historiaClinica.altura>0?0:1)},dependencies:[it,G,tt,Z,$,V,L,J,Q],styles:[".dialog-title[_ngcontent-%COMP%]{text-align:center;padding-top:1em}.dialog-text[_ngcontent-%COMP%]{text-align:center}.dialog-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:20px 0;color:#000;overflow-y:auto}.dialog-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding-bottom:1em}.my-divider[_ngcontent-%COMP%]{border-top:1px solid #ccc;margin:10px 0}.dialog-button-row[_ngcontent-%COMP%]{margin-bottom:1em}"]});let n=a;return n})();function ut(n,a){if(n&1&&v(0,"app-spinner",3),n&2){let e=d();y("loading",e.loading)}}function ht(n,a){if(n&1){let e=x();s(0,"div",6),f("click",function(){let o=C(e).$implicit,i=d(3);return u(i.showData(o))}),s(1,"div",7),v(2,"img",8),s(3,"div",9)(4,"div",10),l(5),r()()()()}if(n&2){let e=a.$implicit,t=d(3);c(2),y("src",t.selectedImages[e.email],H),c(3),D("",e.nombre," ",e.apellido,"")}}function gt(n,a){if(n&1&&v(0,"app-spinner",3),n&2){let e=d(4);y("loading",e.loadTurnos)}}function ft(n,a){if(n&1){let e=x();s(0,"button",16),f("click",function(){C(e);let o=d().$implicit,i=d(5);return u(i.showResenia(o))}),l(1,"Ver Rese\xF1a"),r()}}function xt(n,a){if(n&1){let e=x();s(0,"button",16),f("click",function(){C(e);let o=d().$implicit,i=d(5);return u(i.showComentario(o))}),l(1,"Ver Comentario del paciente"),r()}}function vt(n,a){if(n&1){let e=x();s(0,"button",16),f("click",function(){C(e);let o=d().$implicit,i=d(5);return u(i.verHistoriaClinica(o,o.historiaClinica))}),l(1,"Ver Historia Clinica del turno"),r()}}function Pt(n,a){if(n&1&&(s(0,"div",14)(1,"p")(2,"strong"),l(3,"Fecha:"),r(),l(4),p(5,"capitalizeFirstLetterPipe"),p(6,"setFechaWithSlashes"),p(7,"horariosAmPmFormat"),r(),s(8,"p")(9,"strong"),l(10,"Especialidad:"),r(),l(11),r(),s(12,"p")(13,"strong"),l(14,"Estado:"),r(),l(15),p(16,"capitalizeFirstLetterPipe"),r(),s(17,"div",4),g(18,ft,2,0,"button",15)(19,xt,2,0,"button",15)(20,vt,2,0,"button",15),r()()),n&2){let e=a.$implicit;c(4),k(" ",m(5,8,e.fecha.dayName)," ",m(6,10,e.fecha.fecha)," ",m(7,12,e.fecha.timeSlot.time),""),c(7),P(" ",e.especialidad,""),c(4),P(" ",m(16,14,e.estado),""),c(3),_(18,e.resenia!=""?18:-1),c(),_(19,e.comentario!=""?19:-1),c(),_(20,e.historiaClinica.altura>0&&e.historiaClinica.peso>0?20:-1)}}function St(n,a){if(n&1){let e=x();s(0,"div",11)(1,"h2"),l(2),r(),g(3,Pt,21,16,"div",12),r(),s(4,"app-paginacion",13),f("pageChanged",function(o){C(e);let i=d(4);return u(i.setPage(o))}),r()}if(n&2){let e=d(4);c(2),z("Turnos de ",e.selectedPaciente.nombre," ",e.selectedPaciente.apellido," con ",e.mySelf==null?null:e.mySelf.nombre," ",e.mySelf==null?null:e.mySelf.apellido,""),c(),y("ngForOf",e.pagedTurnos),c(),y("currentPage",e.currentPage)("totalPages",e.totalPages)}}function bt(n,a){if(n&1&&g(0,gt,1,1,"app-spinner",3)(1,St,5,7),n&2){let e=d(3);_(0,e.loadTurnos?0:1)}}function yt(n,a){if(n&1&&(s(0,"div",4),M(1,ht,6,3,"div",5,I),r(),g(3,bt,2,1)),n&2){let e=d(2);c(),E(e.pacientes),c(2),_(3,e.selectedPaciente?3:-1)}}function wt(n,a){n&1&&(s(0,"h1",17),l(1,"A\xFAn no tienes pacientes"),r())}function Tt(n,a){if(n&1&&g(0,yt,4,1)(1,wt,2,0),n&2){let e=d();_(0,!e.loading&&e.count>0?0:1)}}var lt=(()=>{let a=class a{constructor(t,o,i,S,F){this.userService=t,this.loginService=o,this.toast=i,this.turnoService=S,this.dialog=F,this.mySelf=null,this.loading=!0,this.loadTurnos=!1,this.turnos=[],this.pacientes=[],this.selectedPacienteTurnos=[],this.selectedImages={},this.count=1,this.currentPage=1,this.pageSize=2}ngOnInit(){this.getData()}getData(){return T(this,null,function*(){try{let t=this.loginService.getLoggedUser();this.mySelf=yield this.userService.getUserByEmail(t),this.turnos=yield this.turnoService.getTurnosFromEspecialista(t),yield this.mapPacientes(),this.pacientes&&(this.count=this.pacientes.length)}catch(t){console.log(t)}finally{this.loading=!1}})}mapPacientes(){return T(this,null,function*(){let t=new Map;if(this.turnos&&this.turnos.length>0){let o=this.turnos.map(i=>T(this,null,function*(){let S=yield this.userService.getUserByEmail(i.pacienteId);S&&!t.has(S.email)&&t.set(S.email,S)}));yield Promise.all(o),this.pacientes=Array.from(t.values()),this.pacientes.forEach(i=>{this.selectedImages[i.email]=i.mainImg})}})}toggleImage(t){this.selectedImages[t.email]===t.mainImg?t.extraImg&&(this.selectedImages[t.email]=t.extraImg):this.selectedImages[t.email]=t.mainImg}showData(t){this.selectPaciente(t)}verHistoriaClinica(t,o){this.dialog.open(st,{width:"600px",data:{turno:t,paciente:this.selectedPaciente,historiaClinica:o}})}selectPaciente(t){this.selectedPaciente=t,this.loadTurnosForPaciente()}loadTurnosForPaciente(){return T(this,null,function*(){try{this.loadTurnos=!0,this.selectedPacienteTurnos=this.turnos?.filter(t=>t.especialistaId==this.mySelf?.email&&t.pacienteId==this.selectedPaciente?.email)}catch(t){console.log(t)}finally{this.loadTurnos=!1}})}showResenia(t){let o=t.resenia;this.dialog.open(ot,{width:"400px",data:{resenia:o}})}showComentario(t){let o=t.comentario;t.estado=="finalizado"&&this.dialog.open(at,{width:"400px",data:{calificacion:o}})}get pagedTurnos(){let t=(this.currentPage-1)*this.pageSize;return this.selectedPacienteTurnos?.slice(t,t+this.pageSize)}get totalPages(){return this.selectedPacienteTurnos?Math.ceil(this.selectedPacienteTurnos.length/this.pageSize):0}setPage(t){this.currentPage=t}};a.\u0275fac=function(o){return new(o||a)(h(N),h(B),h(O),h(nt),h(q))},a.\u0275cmp=b({type:a,selectors:[["app-listado-pacientes"]],standalone:!0,features:[w],decls:5,vars:1,consts:[[1,"container-fluid"],[1,"container","mt-4"],[1,"row","justify-content-center"],[3,"loading"],[1,"d-flex","justify-content-evenly"],[1,"user-card"],[1,"user-card",3,"click"],[1,"image-container"],["alt","User Image",1,"user-image",3,"src"],[1,"overlay"],[1,"user-name"],[1,"patient-details"],["class","turno-card",4,"ngFor","ngForOf"],[3,"pageChanged","currentPage","totalPages"],[1,"turno-card"],[1,"btn","btn-info"],[1,"btn","btn-info",3,"click"],[1,"text-center",2,"background-color","white"]],template:function(o,i){o&1&&(s(0,"div",0)(1,"div",1)(2,"div",2),g(3,ut,1,1,"app-spinner",3)(4,Tt,2,1),r()()()),o&2&&(c(3),_(3,i.loading?3:4))},dependencies:[Y,W,A,j,V,L,$],styles:['.container-fluid[_ngcontent-%COMP%]{height:85vh;background-color:#6ad8d4;background-image:url("./media/main_fondo-S2RK2XML.png");background-size:250px 250px;background-repeat:repeat;background-position:center;padding:20px}.mt-4[_ngcontent-%COMP%]{height:800px}.user-card[_ngcontent-%COMP%]{position:relative;margin:1em}.image-container[_ngcontent-%COMP%]{position:relative;display:inline-block}.user-image[_ngcontent-%COMP%]{border-radius:50%;width:200px;height:200px;object-fit:cover;display:block}.overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#0006;color:#fff;opacity:0;transition:opacity .3s ease}.image-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}.user-name[_ngcontent-%COMP%]{margin-bottom:.5em;font-size:1.2em}button[_ngcontent-%COMP%]:hover, .user-card[_ngcontent-%COMP%]:hover{cursor:pointer}.patient-details[_ngcontent-%COMP%]{margin-top:20px;background-color:#add8e6}.turno-card[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 6px #0000001a;text-align:left;margin:10px;padding:16px}']});let n=a;return n})();var ie=(()=>{let a=class a{};a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=b({type:a,selectors:[["app-pacientes-container"]],standalone:!0,features:[w],decls:4,vars:0,consts:[[1,"container-fluid","m-0","p-0"]],template:function(o,i){o&1&&(s(0,"div",0),v(1,"app-navbar")(2,"app-listado-pacientes")(3,"app-footer"),r())},dependencies:[lt,R,U]});let n=a;return n})();export{ie as PacientesContainerComponent};