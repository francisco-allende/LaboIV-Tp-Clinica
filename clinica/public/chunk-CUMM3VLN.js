import{a as ne,b as Z}from"./chunk-JKUAASGQ.js";import{a as Y}from"./chunk-E5ITSMUJ.js";import{a as ee}from"./chunk-DAF4DERI.js";import{a as G,b as J,c as Q}from"./chunk-TAME4DBA.js";import{a as q,b as K}from"./chunk-SCZ67AR2.js";import{a as W,b as X}from"./chunk-PAXTVJSM.js";import"./chunk-XE5KUILY.js";import{a as A}from"./chunk-RCHQO65C.js";import{P as U}from"./chunk-MT3VMLBQ.js";import"./chunk-3PKXA2GJ.js";import"./chunk-XCRSOGC7.js";import{$a as v,$b as b,Ab as s,Bb as _,Eb as C,Hb as x,Ib as d,Rb as p,Tb as B,Ub as I,Ya as F,_a as c,_b as V,ac as y,bc as D,cc as w,f as te,h as T,na as P,pb as h,rb as l,uc as $,vb as S,vc as j,wb as k,wc as N,xa as g,xb as O,ya as f,yb as H,yc as z,zb as r}from"./chunk-EWRZD5YS.js";var L=te(ne());var ae=(t,o)=>({"col-md-4":t,"col-md-3":o}),R=(t,o)=>({"col-md-2":t,"col-md-3":o}),E=t=>({"selected-row":t});function re(t,o){if(t&1&&_(0,"app-spinner",3),t&2){let e=d();l("loading",e.loading)}}function se(t,o){if(t&1){let e=C();r(0,"div",15),x("click",function(){let n=g(e).$implicit,a=d(2);return f(a.chooseEspecialidad(n))}),_(1,"img",16),s()}if(t&2){let e=o.$implicit,i=d(2);l("ngClass",b(3,E,e===i.selectedEspecialidad)),c(),l("src",i.especialidadesConImagen[e.toLowerCase()]||i.especialidadesConImagen.default,F)("alt","especialidad "+e)}}function ce(t,o){if(t&1){let e=C();r(0,"div",18),x("click",function(){let n=g(e).$implicit,a=d(3);return f(a.chooseMedico(n))}),_(1,"img",19),r(2,"div",20)(3,"p",21),p(4),s()()()}if(t&2){let e=o.$implicit,i=d(3);l("ngClass",b(5,E,e===i.selectedMedico)),c(),l("src",e.mainImg,F)("alt","especialista "+e.apellido),c(3),I("",e.nombre," ",e.apellido,"")}}function le(t,o){if(t&1&&(r(0,"div",6)(1,"div",10),O(2,ce,5,7,"div",17,k),s()()),t&2){let e=d(2);c(2),H(e.getMedicosPorEspecialidad(e.selectedEspecialidad))}}function de(t,o){if(t&1){let e=C();r(0,"div",18),x("click",function(){let n=g(e).$implicit,a=d(3);return f(a.choosePaciente(n))}),_(1,"img",19),r(2,"div",20)(3,"p",21),p(4),s()()()}if(t&2){let e=o.$implicit,i=d(3);l("ngClass",b(5,E,e===i.selectedPaciente)),c(),l("src",e.mainImg,F)("alt","paciente "+e.apellido),c(3),I("",e.nombre," ",e.apellido,"")}}function pe(t,o){if(t&1&&(r(0,"div",9)(1,"h2",5),p(2,"Paciente"),s(),r(3,"div",6)(4,"div",10),O(5,de,5,7,"div",17,k),s()()()),t&2){let e=d(2);l("ngClass",y(1,R,e.currentRol==="admin",e.currentRol!=="admin")),c(5),H(e.pacientes)}}function me(t,o){if(t&1){let e=C();r(0,"div",23),x("click",function(){let n=g(e).$implicit,a=d(3);return f(a.chooseDia(n))}),r(1,"div",24)(2,"h3"),p(3),D(4,"translateDayName"),D(5,"capitalizeFirstLetterPipe"),D(6,"setFechaWithSlashes"),s()()()}if(t&2){let e=o.$implicit,i=d(3);l("ngClass",b(9,E,e===i.selectedDia)),c(3),I("",w(5,5,w(4,3,e.dayName))," ",w(6,7,e.fecha),"")}}function ue(t,o){if(t&1&&h(0,me,7,11,"div",22),t&2){let e=d(2);l("ngForOf",e.getDiasDisponibles())}}function he(t,o){t&1&&(r(0,"div",24)(1,"h3"),p(2,"No quedan d\xEDas disponibles"),s()())}function _e(t,o){if(t&1&&_(0,"app-spinner",3),t&2){let e=d(3);l("loading",e.timeLoading)}}function ge(t,o){if(t&1){let e=C();r(0,"div",23),x("click",function(){let n=g(e).$implicit,a=d(4);return f(a.chooseHorario(n))}),r(1,"div",24)(2,"h3"),p(3),D(4,"horariosAmPmFormat"),s()()()}if(t&2){let e=o.$implicit,i=d(4);l("ngClass",b(4,E,e.time===(i.selectedHorario==null?null:i.selectedHorario.time))),c(3),B(" ",w(4,2,e.time)," ")}}function fe(t,o){if(t&1&&h(0,ge,5,6,"div",22),t&2){let e=d(3);l("ngForOf",e.timeSlotsDisponibles)}}function Ce(t,o){if(t&1&&(r(0,"div")(1,"div",10)(2,"div",6),h(3,_e,1,1,"app-spinner",3)(4,fe,1,1),s()()()),t&2){let e=d(2);c(3),S(3,e.timeLoading?3:4)}}function xe(t,o){t&1&&(r(0,"div")(1,"p"),p(2,"No hay horarios disponibles para el d\xEDa seleccionado."),s()())}function ve(t,o){if(t&1){let e=C();r(0,"div",4)(1,"h2",5),p(2,"Especialidad"),s(),r(3,"div",6),O(4,se,2,5,"div",7,k),s()(),r(6,"div",8)(7,"h2",5),p(8,"Especialista"),s(),h(9,le,4,0,"div",6),s(),h(10,pe,7,4,"div",9),r(11,"div",4)(12,"h2",5),p(13,"D\xEDas"),s(),r(14,"div",10)(15,"div",6),h(16,ue,1,1,"div",11)(17,he,3,0),s()()(),r(18,"div",4)(19,"h2",5),p(20,"Horarios"),s(),h(21,Ce,5,1,"div",12)(22,xe,3,0,"div",12),s(),_(23,"div",13),r(24,"div",5)(25,"button",14),x("click",function(){g(e);let n=d();return f(n.solicitar())}),p(26," Solicitar turno "),s()()}if(t&2){let e=d();l("ngClass",y(10,ae,e.currentRol==="admin",e.currentRol!=="admin")),c(4),H(e.especialidades),c(2),l("ngClass",y(13,R,e.currentRol==="admin",e.currentRol!=="admin")),c(3),S(9,e.selectedEspecialidad?9:-1),c(),S(10,e.currentRol=="admin"?10:-1),c(),l("ngClass",y(16,R,e.currentRol==="admin",e.currentRol!=="admin")),c(5),S(16,e.selectedMedico&&e.getDiasDisponibles().length>0?16:e.selectedMedico?17:-1),c(2),l("ngClass",y(19,R,e.currentRol==="admin",e.currentRol!=="admin")),c(3),l("ngIf",e.selectedDia),c(),l("ngIf",e.selectedDia&&e.timeSlotsDisponibles.length===0&&!e.timeLoading),c(3),l("disabled",!e.isValid())}}var ie=(()=>{let o=class o{constructor(i,n,a,m,u){this.userService=i,this.loginService=n,this.turnoService=a,this.especialidadService=m,this.toast=u,this.loading=!0,this.timeLoading=!1,this.pacientes=[],this.medicos=[],this.especialidades=[],this.selectedMedico=null,this.selectedEspecialidad="",this.selectedPaciente=null,this.selectedDia=null,this.selectedHorario=null,this.horariosDisponiblesByMedico=[],this.dias=[],this.horariosFiltrados=[],this.timeSlotsDisponibles=[],this.currentRol="",this.mySelf=null,this.especialidadesConImagen={traumatolog\u00EDa:"../../../../assets/traumatologia.png",neurolog\u00EDa:"../../../../assets/neurologia.png",oftalmolog\u00EDa:"../../../../assets/oftalmologia.jpg",cardiolog\u00EDa:"../../../../assets/cardiologia.jpg",pediatr\u00EDa:"../../../../assets/pediatria.jpg",default:"../../../../assets/cruz-roja.jpg"},this.choosePaciente=M=>this.selectedPaciente=M}ngOnInit(){this.getData(),this.especialidadService.getAllEspecialidades().subscribe(i=>{this.especialidades=i})}getData(){return T(this,null,function*(){try{this.medicos=yield this.userService.getAllEnabledUsersByRol("especialista");let i=this.loginService.getLoggedUser();this.mySelf=yield this.userService.getUserByEmail(i),this.currentRol=this.mySelf?.rol,this.currentRol=="admin"&&(this.pacientes=yield this.userService.getAllEnabledUsersByRol("paciente")),this.currentRol=="paciente"&&(this.selectedPaciente=this.mySelf)}catch(i){console.log(i)}finally{this.loading=!1}})}getMedicosPorEspecialidad(i){if(!this.medicos||!this.selectedEspecialidad)return;let n=this.selectedEspecialidad.toLowerCase();return this.medicos.filter(m=>m.especialidad?.map(u=>u.toLowerCase()).includes(n))}chooseEspecialidad(i){this.selectedEspecialidad=i,this.selectedMedico=null,this.selectedDia=null,this.selectedHorario=null,this.horariosDisponiblesByMedico=[]}chooseMedico(i){this.selectedMedico=i,this.selectedDia=null,this.selectedHorario=null,i&&i.horarios&&(this.horariosDisponiblesByMedico=i.horarios.filter(n=>n.estaDisponible))}chooseDia(i){return T(this,null,function*(){this.selectedDia=i,this.selectedHorario=null,this.timeSlotsDisponibles=yield this.getHorariosPorDia(this.selectedDia)})}chooseHorario(i){this.selectedHorario=i}getDiasDisponibles(){let i=new Set;return this.horariosDisponiblesByMedico.forEach(n=>{i.add(n)}),Array.from(i)}getHorariosPorDia(i){return T(this,null,function*(){let n=this.horariosDisponiblesByMedico.find(a=>a.fecha===i.fecha);if(n&&n.desde&&n.hasta){let a=this.getTimeSlotsByRange(n.desde,n.hasta);return yield this.checkDisponibilidad(a)}return[]})}checkDisponibilidad(i){return T(this,null,function*(){if(this.selectedMedico)try{this.timeLoading=!0;let n=yield this.turnoService.getTurnosFromEspecialista(this.selectedMedico.email);if(n&&n.length>0){let a=[];return n.forEach(u=>{u.fecha.timeSlot&&a.push(u.fecha.timeSlot)}),i.filter(u=>!a.some(M=>M.time===u.time&&!M.estaDisponible))}else return console.log("No se encontraron turnos para el especialista."),[]}catch(n){return console.error("Error al obtener los turnos del especialista:",n),[]}finally{this.timeLoading=!1}else return console.error("No se ha seleccionado un m\xE9dico."),[]})}getTimeSlotsByRange(i,n){let a=[],m=(0,L.default)(i,"HH:mm"),u=(0,L.default)(n,"HH:mm");for(;m<u;)a.push({time:m.format("HH:mm"),estaDisponible:!0}),m.add(30,"minutes");return a}isValid(){if(this.selectedMedico&&this.selectedEspecialidad&&this.selectedPaciente&&this.selectedHorario){let i=!1;this.selectedMedico.especialidad?.forEach(a=>{a.toLowerCase()==this.selectedEspecialidad.toLowerCase()&&(i=!0)});let n=!1;if(this.selectedMedico.horarios?.forEach(a=>{a.toString().toLowerCase()==this.selectedHorario?.toString().toLowerCase()&&(n=!0)}),i&&n)return!0}return!1}solicitar(){if(this.isValid())try{let i=this.setTurno();i&&(this.turnoService.altaTurno(i),this.updateTurnosDisponibles(i),this.toast.success("Turno cargado con \xE9xito! Ya podes visualizarlo en la secci\xF3n Mis Turnos"))}catch(i){console.log(i)}}setTurno(){if(this.selectedDia&&this.selectedHorario){let i=`${this.selectedDia.dayName}_${this.selectedDia.fecha}_${this.selectedHorario.time}`;return this.selectedHorario.estaDisponible=!1,this.selectedDia.timeSlot=this.selectedHorario,{id:`${this.selectedPaciente?.email}_${this.selectedMedico?.email}_${i}`,fecha:this.selectedDia,especialistaId:this.selectedMedico?.email?this.selectedMedico?.email:"",pacienteId:this.selectedPaciente?.email?this.selectedPaciente?.email:"",especialidad:this.selectedEspecialidad,estado:"pendiente",comentario:"",resenia:""}}return null}updateTurnosDisponibles(i){if(i&&i.fecha&&i.fecha.timeSlot&&i.fecha.timeSlot){let n=i.fecha.timeSlot.time,a=this.timeSlotsDisponibles.findIndex(m=>m.time===n);a!==-1&&this.timeSlotsDisponibles.splice(a,1)}}};o.\u0275fac=function(n){return new(n||o)(v(W),v(A),v(ee),v(Y),v(U))},o.\u0275cmp=P({type:o,selectors:[["app-solicitar-turno"]],standalone:!0,features:[V],decls:5,vars:1,consts:[[1,"container-fluid"],[1,"container","mt-4"],[1,"row"],[3,"loading"],[1,"text-center",3,"ngClass"],[1,"text-center"],[1,"scroll-container"],[1,"card","mb-sm-3","rounded-card",3,"ngClass"],[1,"col-md-3",3,"ngClass"],[3,"ngClass"],[1,"cards-container"],[1,"card","mb-3",3,"ngClass"],[4,"ngIf"],[1,"line"],[1,"btn","btn-success",3,"click","disabled"],[1,"card","mb-sm-3","rounded-card",3,"click","ngClass"],["width","70px","height","70px",1,"esp-img","card-img-top",3,"src","alt"],[1,"card","mb-sm-3","custom-card","rounded-card",3,"ngClass"],[1,"card","mb-sm-3","custom-card","rounded-card",3,"click","ngClass"],["width","70px","height","70px",1,"card-img-top",3,"src","alt"],[1,"card-body","text-center"],[1,"card-text"],["class","card mb-3",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"card","mb-3",3,"click","ngClass"],[1,"card-body"]],template:function(n,a){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),h(3,re,1,1,"app-spinner",3)(4,ve,27,22),s()()()),n&2&&(c(3),S(3,a.loading?3:4))},dependencies:[X,z,$,j,N,Z,J,G,Q],styles:['.container-fluid[_ngcontent-%COMP%]{height:90vh;background-color:#6ad8d4;background-image:url("./media/main_fondo-S2RK2XML.png");background-size:250px 250px;background-repeat:repeat;background-position:center;padding:20px}.container[_ngcontent-%COMP%]{background-color:#fff;border-radius:15px;box-shadow:0 4px 8px #0000001a;padding:20px}li[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover{cursor:pointer}.btn[_ngcontent-%COMP%]{border-radius:0!important;width:90px}.card-img-top[_ngcontent-%COMP%]{height:150px;object-fit:cover}.custom-card[_ngcontent-%COMP%]{width:250px;border-radius:10px;box-shadow:0 4px 8px #0000001a}.custom-card[_ngcontent-%COMP%]:hover, .card[_ngcontent-%COMP%]{cursor:pointer}.custom-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:10px}.custom-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{font-size:1em}.btn-success[_ngcontent-%COMP%]{width:300px}.line[_ngcontent-%COMP%]{width:100%;height:1px;background-color:#3d8282;margin-top:1em;margin-bottom:1em}.mb-1[_ngcontent-%COMP%]{font-size:medium}.selected-row[_ngcontent-%COMP%]{border:2px solid #007bff}.rounded-card[_ngcontent-%COMP%]{border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;width:150px;height:150px;margin:10px auto;box-shadow:0 4px 8px #0000001a}.custom-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:85px;height:85px;border-radius:50%;margin:10px auto}.esp-img[_ngcontent-%COMP%]{width:100%;height:100%}.scroll-container[_ngcontent-%COMP%]{max-height:650px;overflow-y:scroll;padding-right:15px;scroll-behavior:smooth}']});let t=o;return t})();var Be=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=P({type:o,selectors:[["app-solicitar-turno-container"]],standalone:!0,features:[V],decls:4,vars:0,consts:[[1,"container-fluid","m-0","p-0"]],template:function(n,a){n&1&&(r(0,"div",0),_(1,"app-navbar")(2,"app-solicitar-turno")(3,"app-footer"),s())},dependencies:[ie,q,K]});let t=o;return t})();export{Be as SolicitarTurnoContainerComponent};
