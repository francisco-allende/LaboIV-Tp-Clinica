import{a as oe,b as Z}from"./chunk-AZTL4HB5.js";import{a as X,b as G,c as J}from"./chunk-E4VBJUJN.js";import{a as Q}from"./chunk-6ODF7MUU.js";import{b as Y,c as W}from"./chunk-TEBHIWMK.js";import{a as q}from"./chunk-DEDYB2T4.js";import{a as U}from"./chunk-NDYST4XC.js";import{a as K}from"./chunk-YGGNBDYX.js";import"./chunk-7XIEKY6O.js";import{H as N,J as A}from"./chunk-6SOKX3XS.js";import"./chunk-IX6G3U3V.js";import"./chunk-2URDVIT7.js";import{Ab as g,Db as C,Eb as d,Mb as p,Ob as B,Pb as k,Sa as w,Ua as c,Va as x,Wb as I,Xb as S,Yb as b,Zb as y,_b as D,ga as E,kb as m,mb as l,qa as _,ra as f,rb as v,sb as P,sc as L,tb as F,tc as $,ub as O,uc as j,vb as r,wb as s,wc as z,xb as u}from"./chunk-TDWWCWZI.js";import{f as te,h as T}from"./chunk-DLDOR3YA.js";var R=te(oe());var ae=(t,n)=>({"col-md-4":t,"col-md-3":n}),H=(t,n)=>({"col-md-2":t,"col-md-3":n}),M=t=>({"selected-row":t});function re(t,n){if(t&1&&u(0,"app-spinner",3),t&2){let i=d();l("loading",i.loading)}}function se(t,n){if(t&1){let i=g();r(0,"div",15),C("click",function(){let o=_(i).$implicit,a=d(2);return f(a.chooseEspecialidad(o))}),u(1,"img",16),s()}if(t&2){let i=n.$implicit,e=d(2);l("ngClass",S(3,M,i===e.selectedEspecialidad)),c(),l("src",e.especialidadesConImagen[i.toLowerCase()]||e.especialidadesConImagen.default,w)("alt","especialidad "+i)}}function ce(t,n){if(t&1){let i=g();r(0,"div",18),C("click",function(){let o=_(i).$implicit,a=d(3);return f(a.chooseMedico(o))}),u(1,"img",19),r(2,"div",20)(3,"p",21),p(4),s()()()}if(t&2){let i=n.$implicit,e=d(3);l("ngClass",S(5,M,i===e.selectedMedico)),c(),l("src",i.mainImg,w)("alt","especialista "+i.apellido),c(3),k("",i.nombre," ",i.apellido,"")}}function le(t,n){if(t&1&&(r(0,"div",6)(1,"div",10),F(2,ce,5,7,"div",17,P),s()()),t&2){let i=d(2);c(2),O(i.getMedicosPorEspecialidad(i.selectedEspecialidad))}}function de(t,n){if(t&1){let i=g();r(0,"div",18),C("click",function(){let o=_(i).$implicit,a=d(3);return f(a.choosePaciente(o))}),u(1,"img",19),r(2,"div",20)(3,"p",21),p(4),s()()()}if(t&2){let i=n.$implicit,e=d(3);l("ngClass",S(5,M,i===e.selectedPaciente)),c(),l("src",i.mainImg,w)("alt","paciente "+i.apellido),c(3),k("",i.nombre," ",i.apellido,"")}}function pe(t,n){if(t&1&&(r(0,"div",9)(1,"h2",5),p(2,"Paciente"),s(),r(3,"div",6)(4,"div",10),F(5,de,5,7,"div",17,P),s()()()),t&2){let i=d(2);l("ngClass",b(1,H,i.currentRol==="admin",i.currentRol!=="admin")),c(5),O(i.pacientes)}}function me(t,n){if(t&1){let i=g();r(0,"div",23),C("click",function(){let o=_(i).$implicit,a=d(3);return f(a.chooseDia(o))}),r(1,"div",24)(2,"h3"),p(3),y(4,"translateDayName"),y(5,"capitalizeFirstLetterPipe"),y(6,"setFechaWithSlashes"),s()()()}if(t&2){let i=n.$implicit,e=d(3);l("ngClass",S(9,M,i===e.selectedDia)),c(3),k("",D(5,5,D(4,3,i.dayName))," ",D(6,7,i.fecha),"")}}function ue(t,n){if(t&1&&m(0,me,7,11,"div",22),t&2){let i=d(2);l("ngForOf",i.getDiasDisponibles())}}function he(t,n){t&1&&(r(0,"div",24)(1,"h3"),p(2,"No quedan d\xEDas disponibles"),s()())}function _e(t,n){if(t&1&&u(0,"app-spinner",3),t&2){let i=d(3);l("loading",i.timeLoading)}}function fe(t,n){if(t&1){let i=g();r(0,"div",23),C("click",function(){let o=_(i).$implicit,a=d(4);return f(a.chooseHorario(o))}),r(1,"div",24)(2,"h3"),p(3),y(4,"horariosAmPmFormat"),s()()()}if(t&2){let i=n.$implicit,e=d(4);l("ngClass",S(4,M,i.time===(e.selectedHorario==null?null:e.selectedHorario.time))),c(3),B(" ",D(4,2,i.time)," ")}}function ge(t,n){if(t&1&&m(0,fe,5,6,"div",22),t&2){let i=d(3);l("ngForOf",i.timeSlotsDisponibles)}}function Ce(t,n){if(t&1&&(r(0,"div")(1,"div",10)(2,"div",6),m(3,_e,1,1,"app-spinner",3)(4,ge,1,1),s()()()),t&2){let i=d(2);c(3),v(3,i.timeLoading?3:4)}}function xe(t,n){t&1&&(r(0,"div")(1,"p"),p(2,"No hay horarios disponibles para el d\xEDa seleccionado."),s()())}function ve(t,n){if(t&1){let i=g();r(0,"div",4)(1,"h2",5),p(2,"Especialidad"),s(),r(3,"div",6),F(4,se,2,5,"div",7,P),s()(),r(6,"div",8)(7,"h2",5),p(8,"Especialista"),s(),m(9,le,4,0,"div",6),s(),m(10,pe,7,4,"div",9),r(11,"div",4)(12,"h2",5),p(13,"D\xEDas"),s(),r(14,"div",10)(15,"div",6),m(16,ue,1,1,"div",11)(17,he,3,0),s()()(),r(18,"div",4)(19,"h2",5),p(20,"Horarios"),s(),m(21,Ce,5,1,"div",12)(22,xe,3,0,"div",12),s(),u(23,"div",13),r(24,"div",5)(25,"button",14),C("click",function(){_(i);let o=d();return f(o.solicitar())}),p(26," Solicitar turno "),s()()}if(t&2){let i=d();l("ngClass",b(10,ae,i.currentRol==="admin",i.currentRol!=="admin")),c(4),O(i.especialidades),c(2),l("ngClass",b(13,H,i.currentRol==="admin",i.currentRol!=="admin")),c(3),v(9,i.selectedEspecialidad?9:-1),c(),v(10,i.currentRol=="admin"?10:-1),c(),l("ngClass",b(16,H,i.currentRol==="admin",i.currentRol!=="admin")),c(5),v(16,i.selectedMedico&&i.getDiasDisponibles().length>0?16:i.selectedMedico?17:-1),c(2),l("ngClass",b(19,H,i.currentRol==="admin",i.currentRol!=="admin")),c(3),l("ngIf",i.selectedDia),c(),l("ngIf",i.selectedDia&&i.timeSlotsDisponibles.length===0&&!i.timeLoading),c(3),l("disabled",!i.isValid())}}var ee=(()=>{let n=class n{constructor(e,o,a,h,V){this.userService=e,this.loginService=o,this.turnoService=a,this.especialidadService=h,this.toast=V,this.loading=!0,this.timeLoading=!1,this.pacientes=[],this.medicos=[],this.especialidades=[],this.selectedMedico=null,this.selectedEspecialidad="",this.selectedPaciente=null,this.selectedDia=null,this.selectedHorario=null,this.horariosDisponiblesByMedico=[],this.dias=[],this.horariosFiltrados=[],this.timeSlotsDisponibles=[],this.currentRol="",this.mySelf=null,this.especialidadesConImagen={traumatolog\u00EDa:"../../../../assets/traumatologia.png",neurolog\u00EDa:"../../../../assets/neurologia.png",oftalmolog\u00EDa:"../../../../assets/oftalmologia.jpg",cardiolog\u00EDa:"../../../../assets/cardiologia.jpg",pediatr\u00EDa:"../../../../assets/pediatria.jpg",default:"../../../../assets/cruz-roja.jpg"},this.choosePaciente=ie=>this.selectedPaciente=ie}ngOnInit(){this.getData(),this.especialidadService.getAllEspecialidades().subscribe(e=>{this.especialidades=e})}getData(){return T(this,null,function*(){try{this.medicos=yield this.userService.getAllEnabledUsersByRol("especialista");let e=this.loginService.getLoggedUser();this.mySelf=yield this.userService.getUserByEmail(e),this.currentRol=this.mySelf?.rol,this.currentRol=="admin"&&(this.pacientes=yield this.userService.getAllEnabledUsersByRol("paciente")),this.currentRol=="paciente"&&(this.selectedPaciente=this.mySelf)}catch(e){console.log(e)}finally{this.loading=!1}})}getMedicosPorEspecialidad(e){if(!this.medicos||!this.selectedEspecialidad)return;let o=this.selectedEspecialidad.toLowerCase();return this.medicos.filter(h=>h.especialidad?.map(V=>V.toLowerCase()).includes(o))}chooseEspecialidad(e){this.selectedEspecialidad=e,this.selectedMedico=null,this.selectedDia=null,this.selectedHorario=null,this.horariosDisponiblesByMedico=[]}chooseMedico(e){this.selectedMedico=e,this.selectedDia=null,this.selectedHorario=null,e&&e.horarios&&(this.horariosDisponiblesByMedico=e.horarios.filter(o=>{let a=(0,R.default)(o.fecha,"DD-MM-YYYY"),h=(0,R.default)().startOf("day");return o.estaDisponible&&a.isSameOrAfter(h)}))}chooseDia(e){return T(this,null,function*(){this.selectedDia=e,this.selectedHorario=null,this.timeSlotsDisponibles=yield this.getHorariosPorDia(this.selectedDia)})}chooseHorario(e){this.selectedHorario=e}getDiasDisponibles(){let e=new Set;return this.horariosDisponiblesByMedico.forEach(o=>{e.add(o)}),Array.from(e)}getHorariosPorDia(e){return T(this,null,function*(){let o=this.horariosDisponiblesByMedico.find(a=>a.fecha===e.fecha);return o&&o.desde&&o.hasta?this.getHorariosDisponiblesByMedico():[]})}getHorariosDisponiblesByMedico(){let e=[];return this.selectedMedico?.horarios?.forEach(o=>{o.fecha==this.selectedDia?.fecha&&o.timeSlots?.filter(a=>a.estaDisponible?e.push(a):void 0)}),e}isValid(){if(this.selectedMedico&&this.selectedEspecialidad&&this.selectedPaciente&&this.selectedHorario){let e=!1;this.selectedMedico.especialidad?.forEach(a=>{a.toLowerCase()==this.selectedEspecialidad.toLowerCase()&&(e=!0)});let o=!1;if(this.selectedMedico.horarios?.forEach(a=>{a.toString().toLowerCase()==this.selectedHorario?.toString().toLowerCase()&&(o=!0)}),e&&o)return!0}return!1}solicitar(){if(this.isValid())try{let e=this.setTurno();this.currentRol=="paciente"&&e&&this.mySelf?.turnos?.push(e.id),e&&(this.turnoService.altaTurno(e),this.updateTurnosDisponibles(e),this.toast.success("Turno cargado con \xE9xito! Ya podes visualizarlo en la secci\xF3n Mis Turnos"))}catch(e){console.log(e)}}setTurno(){if(this.selectedDia&&this.selectedHorario){this.ocuparHorarioAlMedico(),this.selectedDia.timeSlot=this.selectedHorario;let e=`${this.selectedDia.dayName}_${this.selectedDia.fecha}_${this.selectedHorario.time}`;return{id:`${this.selectedPaciente?.email}_${this.selectedMedico?.email}_${e}`,fecha:this.selectedDia,especialistaId:this.selectedMedico?.email?this.selectedMedico?.email:"",pacienteId:this.selectedPaciente?.email?this.selectedPaciente?.email:"",especialidad:this.selectedEspecialidad,estado:"pendiente",comentario:"",resenia:"",historiaClinica:{fecha:this.selectedDia,altura:0,peso:0,temperatura:0,presion:"",datosDinamicos:[]}}}return null}ocuparHorarioAlMedico(){this.selectedMedico&&(this.selectedMedico?.horarios?.forEach(e=>{e.fecha===this.selectedDia?.fecha&&e.timeSlots?.forEach(o=>{o.time===this.selectedHorario?.time&&(o.estaDisponible=!1,this.selectedHorario.estaDisponible=!1)})}),this.userService.update(this.selectedMedico))}updateTurnosDisponibles(e){if(e&&e.fecha&&e.fecha.timeSlot&&e.fecha.timeSlot){let o=e.fecha.timeSlot.time,a=this.timeSlotsDisponibles.findIndex(h=>h.time===o);a!==-1&&this.timeSlotsDisponibles.splice(a,1)}}};n.\u0275fac=function(o){return new(o||n)(x(U),x(A),x(Q),x(K),x(N))},n.\u0275cmp=E({type:n,selectors:[["app-solicitar-turno"]],standalone:!0,features:[I],decls:5,vars:1,consts:[[1,"container-fluid"],[1,"container","mt-4"],[1,"row"],[3,"loading"],[1,"text-center",3,"ngClass"],[1,"text-center"],[1,"scroll-container"],[1,"card","mb-sm-3","rounded-card",3,"ngClass"],[1,"col-md-3",3,"ngClass"],[3,"ngClass"],[1,"cards-container"],[1,"card","mb-3",3,"ngClass"],[4,"ngIf"],[1,"line"],[1,"btn","btn-success",3,"click","disabled"],[1,"card","mb-sm-3","rounded-card",3,"click","ngClass"],["width","70px","height","70px",1,"esp-img","card-img-top",3,"src","alt"],[1,"card","mb-sm-3","custom-card","rounded-card",3,"ngClass"],[1,"card","mb-sm-3","custom-card","rounded-card",3,"click","ngClass"],["width","70px","height","70px",1,"card-img-top",3,"src","alt"],[1,"card-body","text-center"],[1,"card-text"],["class","card mb-3",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"card","mb-3",3,"click","ngClass"],[1,"card-body"]],template:function(o,a){o&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),m(3,re,1,1,"app-spinner",3)(4,ve,27,22),s()()()),o&2&&(c(3),v(3,a.loading?3:4))},dependencies:[q,z,L,$,j,Z,G,X,J],styles:['.container-fluid[_ngcontent-%COMP%]{height:90vh;background-color:#6ad8d4;background-image:url("./media/main_fondo-S2RK2XML.png");background-size:250px 250px;background-repeat:repeat;background-position:center;padding:20px}.container[_ngcontent-%COMP%]{background-color:#fff;border-radius:15px;box-shadow:0 4px 8px #0000001a;padding:20px}li[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover{cursor:pointer}.btn[_ngcontent-%COMP%]{border-radius:0!important;width:90px}.card-img-top[_ngcontent-%COMP%]{height:150px;object-fit:cover}.custom-card[_ngcontent-%COMP%]{width:250px;border-radius:10px;box-shadow:0 4px 8px #0000001a}.custom-card[_ngcontent-%COMP%]:hover, .card[_ngcontent-%COMP%]{cursor:pointer}.custom-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:10px}.custom-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{font-size:1em}.btn-success[_ngcontent-%COMP%]{width:300px}.line[_ngcontent-%COMP%]{width:100%;height:1px;background-color:#3d8282;margin-top:1em;margin-bottom:1em}.mb-1[_ngcontent-%COMP%]{font-size:medium}.selected-row[_ngcontent-%COMP%]{border:2px solid #007bff}.rounded-card[_ngcontent-%COMP%]{border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;width:150px;height:150px;margin:10px auto;box-shadow:0 4px 8px #0000001a}.custom-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:85px;height:85px;border-radius:50%;margin:10px auto}.esp-img[_ngcontent-%COMP%]{width:100%;height:100%}.scroll-container[_ngcontent-%COMP%]{max-height:650px;overflow-y:scroll;padding-right:15px;scroll-behavior:smooth}']});let t=n;return t})();var je=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=E({type:n,selectors:[["app-solicitar-turno-container"]],standalone:!0,features:[I],decls:4,vars:0,consts:[[1,"container-fluid","m-0","p-0"]],template:function(o,a){o&1&&(r(0,"div",0),u(1,"app-navbar")(2,"app-solicitar-turno")(3,"app-footer"),s())},dependencies:[ee,Y,W]});let t=n;return t})();export{je as SolicitarTurnoContainerComponent};
