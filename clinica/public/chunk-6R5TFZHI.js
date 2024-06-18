import{a as R}from"./chunk-FFQKB5I6.js";import{a as F,b as $}from"./chunk-7RROMLKU.js";import{a as H}from"./chunk-AIKLBKEJ.js";import{a as V}from"./chunk-II4I56BR.js";import"./chunk-F2BWO3NQ.js";import{a as O}from"./chunk-AAQ23JA4.js";import{P as I}from"./chunk-QWFAWHVU.js";import"./chunk-WXI33M2S.js";import"./chunk-K3IIDNEN.js";import{Cb as g,Db as d,Mb as s,Nb as T,Pb as M,Ua as b,Ub as w,Wa as c,Xa as x,g as k,kb as E,la as y,mb as h,qb as P,rb as v,sb as C,tb as S,ua as u,ub as o,va as _,vb as r,wb as m,zb as f}from"./chunk-4VRYZ7GX.js";function L(t,i){if(t&1&&m(0,"app-spinner",3),t&2){let e=d();h("loading",e.loading)}}function j(t,i){if(t&1){let e=f();o(0,"div",13),g("click",function(){let n=u(e).$implicit,l=d(2);return _(l.chooseMedico(n))}),m(1,"img",14),o(2,"div",15)(3,"p",16),s(4),r(),o(5,"p",16),s(6,"M\xE9dico especializado en "),o(7,"strong"),s(8),r()()()()}if(t&2){let e=i.$implicit;c(),h("src",e.mainImg,b)("alt","especialista "+e.apellido),c(3),M("",e.nombre," ",e.apellido,""),c(4),T(e.especialidad)}}function D(t,i){if(t&1){let e=f();o(0,"div",17),g("click",function(){let n=u(e).$implicit,l=d(2);return _(l.chooseEspecialidad(n))}),o(1,"div",18)(2,"h3"),s(3),r()()()}if(t&2){let e=i.$implicit;c(3),T(e)}}function A(t,i){if(t&1&&(o(0,"div",10)(1,"a",19)(2,"div",20)(3,"h5",21),s(4),r(),m(5,"img",22),r()()()),t&2){let e=d(2);c(4),M("",e.mySelf==null?null:e.mySelf.nombre," ",e.mySelf==null?null:e.mySelf.apellido,""),c(),h("src",e.mySelf==null?null:e.mySelf.mainImg,b)("alt","paciente "+(e.mySelf==null?null:e.mySelf.apellido))}}function K(t,i){if(t&1){let e=f();o(0,"div",23),g("click",function(){let n=u(e).$implicit,l=d(3);return _(l.choosePaciente(n))}),o(1,"a",19)(2,"div",20)(3,"h4",21),s(4),r(),m(5,"img",22),r()()()}if(t&2){let e=i.$implicit;c(4),M("",e==null?null:e.nombre," ",e==null?null:e.apellido,""),c(),h("src",e==null?null:e.mainImg,b)("alt","paciente "+(e==null?null:e.apellido))}}function N(t,i){if(t&1&&(o(0,"div",6),C(1,K,6,4,"div",10,v),r()),t&2){let e=d(2);c(),S(e.pacientes)}}function X(t,i){if(t&1){let e=f();o(0,"div",17),g("click",function(){let n=u(e).$implicit,l=d(2);return _(l.chooseHorario(n))}),o(1,"div",18)(2,"h3"),s(3),r()()()}if(t&2){let e=i.$implicit;c(3),T(e)}}function Y(t,i){if(t&1){let e=f();o(0,"div",4)(1,"h2",5),s(2,"Especialista"),r(),o(3,"div",6),C(4,j,9,5,"div",7,v),r()(),o(6,"div",8)(7,"h2",5),s(8,"Especialidad"),r(),C(9,D,4,1,"div",9,v),r(),o(11,"div",4)(12,"h2",5),s(13,"Paciente"),r(),E(14,A,6,4,"div",10)(15,N,3,0),r(),o(16,"div",8)(17,"h2",5),s(18,"Horarios"),r(),o(19,"div",6),C(20,X,4,1,"div",9,v),r()(),m(22,"div",11),o(23,"div",5)(24,"button",12),g("click",function(){u(e);let n=d();return _(n.solicitar())}),s(25," Solicitar turno "),r()()}if(t&2){let e=d();c(4),S(e.medicos),c(5),S(e.selectedMedico==null?null:e.selectedMedico.especialidad),c(5),P(14,e.currentRol=="paciente"?14:e.currentRol=="admin"?15:-1),c(6),S(e.selectedMedico==null?null:e.selectedMedico.horarios),c(4),h("disabled",!e.isValid())}}var U=(()=>{let i=class i{constructor(a,n,l,z){this.userService=a,this.loginService=n,this.turnoService=l,this.toast=z,this.loading=!0,this.pacientes=[],this.medicos=[],this.selectedMedico=null,this.selectedEspecialidad="",this.selectedPaciente=null,this.selectedHorario="",this.currentRol="",this.mySelf=null,this.chooseMedico=p=>this.selectedMedico=p,this.chooseEspecialidad=p=>this.selectedEspecialidad=p,this.choosePaciente=p=>this.selectedPaciente=p,this.chooseHorario=p=>this.selectedHorario=p}ngOnInit(){this.getData()}getData(){return k(this,null,function*(){try{this.medicos=yield this.userService.getAllEnabledUsersByRol("especialista");let a=this.loginService.getLoggedUser().value;this.mySelf=yield this.userService.getUserByEmail(a),this.currentRol=this.mySelf?.rol,this.currentRol=="admin"&&(this.pacientes=yield this.userService.getAllEnabledUsersByRol("paciente"))}catch(a){console.log(a)}finally{this.loading=!1}})}isValid(){if(this.selectedMedico&&this.selectedEspecialidad&&this.selectedPaciente&&this.selectedHorario){let a=!1;this.selectedMedico.especialidad?.forEach(l=>{l.toLowerCase()==this.selectedEspecialidad.toLowerCase()&&(a=!0)});let n=!1;if(this.selectedMedico.horarios?.forEach(l=>{l.toString().toLowerCase()==this.selectedHorario.toString().toLowerCase()&&(n=!0)}),a&&n)return!0}return!1}solicitar(){if(this.isValid())try{this.turnoService.altaTurno(this.setTurno()),this.toast.success("Turno cargado con \xE9xito! Ya podes visualizarlo en la secci\xF3n Mis Turnos")}catch(a){console.log(a)}}setTurno(){return{id:`${this.selectedPaciente?.email}_${this.selectedMedico?.email}_${this.selectedHorario.toString()}`,fecha:this.selectedHorario,especialistaId:this.selectedMedico?.email?this.selectedMedico?.email:"",pacienteId:this.selectedPaciente?.email?this.selectedPaciente?.email:"",especialidad:this.selectedEspecialidad,estado:"pendiente",comentario:"",rese\u00F1a:""}}};i.\u0275fac=function(n){return new(n||i)(x(V),x(O),x(R),x(I))},i.\u0275cmp=y({type:i,selectors:[["app-solicitar-turno"]],standalone:!0,features:[w],decls:5,vars:1,consts:[[1,"container-fluid"],[1,"container","mt-4"],[1,"row"],[3,"loading"],[1,"col-md-3"],[1,"text-center"],[1,"cards-container"],[1,"card","custom-card","mb-sm-3"],[1,"col-md-3","text-center"],[1,"card","mb-3"],[1,"list-group","mb-3"],[1,"line"],[1,"btn","btn-success",3,"click","disabled"],[1,"card","custom-card","mb-sm-3",3,"click"],["width","70px","height","70px",1,"card-img-top",3,"src","alt"],[1,"card-body","text-center"],[1,"card-text"],[1,"card","mb-3",3,"click"],[1,"card-body"],[1,"list-group-item","list-group-item-action"],[1,"d-flex","w-100","justify-content-between"],[1,"mb-1"],["width","70px","height","70px",3,"src","alt"],[1,"list-group","mb-3",3,"click"]],template:function(n,l){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),E(3,L,1,1,"app-spinner",3)(4,Y,26,2),r()()()),n&2&&(c(3),P(3,l.loading?3:4))},dependencies:[H],styles:['.container-fluid[_ngcontent-%COMP%]{height:90vh;background-color:#6ad8d4;background-image:url("./media/main_fondo-S2RK2XML.png");background-size:250px 250px;background-repeat:repeat;background-position:center;padding:20px}.container[_ngcontent-%COMP%]{background-color:#fff;border-radius:15px;box-shadow:0 4px 8px #0000001a;padding:20px}li[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover{cursor:pointer}.btn[_ngcontent-%COMP%]{border-radius:0!important;width:90px}.card-img-top[_ngcontent-%COMP%]{height:150px;object-fit:cover}.custom-card[_ngcontent-%COMP%]{width:250px;border-radius:10px;box-shadow:0 4px 8px #0000001a}.custom-card[_ngcontent-%COMP%]:hover, .card[_ngcontent-%COMP%]{cursor:pointer}.custom-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;margin:10px auto}.custom-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:10px}.custom-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{font-size:1em}.cards-container[_ngcontent-%COMP%]{max-height:630px;overflow-y:auto}.btn-success[_ngcontent-%COMP%]{width:300px}.line[_ngcontent-%COMP%]{width:100%;height:1px;background-color:#3d8282;margin-top:1em;margin-bottom:1em}']});let t=i;return t})();var oe=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=y({type:i,selectors:[["app-solicitar-turno-container"]],standalone:!0,features:[w],decls:4,vars:0,consts:[[1,"container-fluid","m-0","p-0"]],template:function(n,l){n&1&&(o(0,"div",0),m(1,"app-navbar")(2,"app-solicitar-turno")(3,"app-footer"),r())},dependencies:[U,F,$]});let t=i;return t})();export{oe as SolicitarTurnoContainerComponent};
