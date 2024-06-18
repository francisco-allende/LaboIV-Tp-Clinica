import{a as w,b as H,c as J,d as Q,e as Y,f as Z,g as tt,h as et,i as it,j as nt,k as ot,l as k,m as E}from"./chunk-LULE3TDV.js";import{a as W,d as G,g as K,q as U,r as X}from"./chunk-FSE6CKWK.js";import{a as at}from"./chunk-FFQKB5I6.js";import{a as N,b as $}from"./chunk-7RROMLKU.js";import{a as q}from"./chunk-AIKLBKEJ.js";import{a as z}from"./chunk-II4I56BR.js";import"./chunk-F2BWO3NQ.js";import{a as B}from"./chunk-AAQ23JA4.js";import{P as A}from"./chunk-QWFAWHVU.js";import"./chunk-WXI33M2S.js";import"./chunk-K3IIDNEN.js";import{Cb as p,Db as d,Mb as l,Nb as g,Qb as L,Rb as O,Sb as R,Ub as C,Wa as c,Xa as m,g as S,kb as y,la as x,mb as T,nc as j,ob as b,qb as F,rb as P,sb as I,tb as D,ua as u,ub as r,va as _,vb as n,wb as h,zb as v}from"./chunk-4VRYZ7GX.js";var lt=(()=>{let o=class o{constructor(t){this.dialogRef=t,this.cancelReason=""}onConfirm(){this.dialogRef.close(this.cancelReason)}onCancel(){this.dialogRef.close()}};o.\u0275fac=function(e){return new(e||o)(m(w))},o.\u0275cmp=x({type:o,selectors:[["app-cancel-turno-dialog"]],standalone:!0,features:[C],decls:10,vars:1,consts:[["mat-dialog-title","",1,"dialog-title"],["mat-dialog-content","",1,"dialog-content"],["appearance","fill",1,"w-100"],["matInput","","placeholder","Motivo de la cancelaci\xF3n","rows","5",3,"ngModelChange","ngModel"],["mat-dialog-actions","",1,"dialog-actions"],["mat-button","",1,"dialog-text",3,"click"]],template:function(e,s){e&1&&(r(0,"h1",0),l(1,"Cancelar Turno"),n(),r(2,"div",1)(3,"mat-form-field",2)(4,"textarea",3),R("ngModelChange",function(M){return O(s.cancelReason,M)||(s.cancelReason=M),M}),n()()(),r(5,"div",4)(6,"button",5),p("click",function(){return s.onCancel()}),l(7,"Cancelar"),n(),r(8,"button",5),p("click",function(){return s.onConfirm()}),l(9,"Confirmar"),n()()),e&2&&(c(4),L("ngModel",s.cancelReason))},dependencies:[tt,Q,Z,Y,ot,nt,et,it,E,k,j,U,W,G,K,X],styles:[".dialog-title[_ngcontent-%COMP%]{text-align:center}.dialog-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:20px 0;width:100%}.dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}.dialog-text[_ngcontent-%COMP%]{text-align:center}"]});let a=o;return a})();var st=(()=>{let o=class o{constructor(t,e){this.dialogRef=t,this.data=e}onClose(){this.dialogRef.close()}};o.\u0275fac=function(e){return new(e||o)(m(w),m(H))},o.\u0275cmp=x({type:o,selectors:[["app-show-motivo-dialog"]],standalone:!0,features:[C],decls:8,vars:1,consts:[["mat-dialog-title","",1,"dialog-title"],["mat-dialog-content","",1,"dialog-content"],["mat-dialog-actions","",1,"dialog-actions"],["mat-button","",1,"dialog-text",3,"click"]],template:function(e,s){e&1&&(r(0,"h1",0),l(1,"Motivo de Cancelaci\xF3n"),n(),r(2,"div",1)(3,"p"),l(4),n()(),r(5,"div",2)(6,"button",3),p("click",function(){return s.onClose()}),l(7,"Ok"),n()()),e&2&&(c(4),g(s.data.motivo))},dependencies:[E,k],styles:[".dialog-title[_ngcontent-%COMP%]{text-align:center;padding-top:1em}.dialog-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:20px 0;height:100px}.dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-bottom:1em}.dialog-text[_ngcontent-%COMP%]{text-align:center}"]});let a=o;return a})();function pt(a,o){if(a&1&&h(0,"app-spinner",3),a&2){let i=d();T("loading",i.loading)}}function mt(a,o){a&1&&(r(0,"td",18),l(1,"No se encontraron resultados"),n())}function ut(a,o){if(a&1){let i=v();r(0,"button",27),p("click",function(){u(i);let e=d().$implicit,s=d(3);return _(s.changeState(e,"cancelado"))}),l(1," Cancelar "),n()}}function _t(a,o){if(a&1){let i=v();r(0,"button",12),p("click",function(){u(i);let e=d().$implicit,s=d(3);return _(s.showMotivo(e.comentario))}),l(1," Ver motivo "),n()}}function gt(a,o){if(a&1){let i=v();r(0,"tr",14)(1,"td"),l(2),n(),r(3,"td",23),p("click",function(){let e=u(i).$implicit,s=d(3);return _(s.setFilter("especialista",e.especialistaId))}),l(4),n(),r(5,"td",23),p("click",function(){let e=u(i).$implicit,s=d(3);return _(s.setFilter("especialidad",e.especialidad))}),l(6),n(),r(7,"td"),l(8),n(),r(9,"td",24),l(10),n(),r(11,"td")(12,"div",25),y(13,ut,2,0,"button",26)(14,_t,2,0),n()()()}if(a&2){let i=o.$implicit,t=d(3);c(2),g(i.fecha),c(2),g(t.userMap[i.especialistaId]),c(2),g(i.especialidad),c(2),g(t.userMap[i.pacienteId]),c(2),g(i.estado),c(3),F(13,i.estado=="pendiente"?13:14)}}function ft(a,o){if(a&1&&I(0,gt,15,6,"tr",14,P),a&2){let i=d(2);D(i.pagedTurnos)}}function xt(a,o){if(a&1){let i=v();r(0,"li",20)(1,"a",21),p("click",function(){let e=u(i).$implicit,s=d(2);return _(s.setPage(e))}),l(2),n()()}if(a&2){let i=o.$implicit,t=d(2);b("active",t.currentPage===i),c(2),g(i)}}function Ct(a,o){if(a&1){let i=v();r(0,"div",4)(1,"div",5)(2,"label",6),l(3,"Especialista:"),n(),h(4,"input",7),n(),r(5,"div",5)(6,"label",8),l(7,"Especialidad:"),n(),h(8,"input",9),n(),r(9,"div",10)(10,"button",11),p("click",function(){u(i);let e=d();return _(e.applyFilters())}),l(11,"Filtrar"),n()(),r(12,"div",10)(13,"button",12),p("click",function(){u(i);let e=d();return _(e.clearFilters())}),l(14,"Ver todos"),n()()(),r(15,"table",13)(16,"thead")(17,"tr",14)(18,"th",15),l(19,"Fecha"),n(),r(20,"th",15),l(21,"Especialista"),n(),r(22,"th",15),l(23,"Especialidad"),n(),r(24,"th",15),l(25,"Paciente"),n(),r(26,"th",16),l(27,"Estado"),n(),r(28,"th",17),l(29,"Modificar Estado"),n()()(),r(30,"tbody"),y(31,mt,2,0,"td",18)(32,ft,2,0),n()(),r(33,"ul",19)(34,"li",20)(35,"a",21),p("click",function(){u(i);let e=d();return _(e.previousPage())}),l(36,"Anterior"),n()(),I(37,xt,3,3,"li",22,P),r(39,"li",20)(40,"a",21),p("click",function(){u(i);let e=d();return _(e.nextPage())}),l(41,"Siguiente"),n()()()}if(a&2){let i=d();c(4),T("value",i.especialistaFilter),c(4),T("value",i.especialidadFilter),c(2),T("disabled",!i.especialidadFilter&&!i.especialistaFilter),c(21),F(31,(i.pagedTurnos==null?null:i.pagedTurnos.length)===0?31:32),c(3),b("disabled",i.currentPage===1),c(3),D(i.pages),c(2),b("disabled",i.currentPage===i.totalPages)}}var ct=(()=>{let o=class o{constructor(t,e,s,f,M){this.userService=t,this.loginService=e,this.turnoService=s,this.toast=f,this.dialog=M,this.loading=!0,this.turnos=[],this.filteredTurnos=[],this.userMap={},this.currentPage=1,this.pageSize=10,this.especialidadFilter="",this.especialistaFilter=""}ngOnInit(){this.turnoService.getAllTurnos().subscribe(t=>{this.turnos=t,this.filteredTurnos=this.turnos,this.getData()})}getData(){return S(this,null,function*(){try{if(this.turnos&&this.turnos.length>0)for(let t of this.turnos)this.userMap[t.especialistaId]||(this.userMap[t.especialistaId]=yield this.userService.getNameAndSurnameByEmail(t.especialistaId)),this.userMap[t.pacienteId]||(this.userMap[t.pacienteId]=yield this.userService.getNameAndSurnameByEmail(t.pacienteId))}catch(t){console.log(t)}finally{this.loading=!1}})}setFilter(t,e){t==="especialidad"?this.especialidadFilter=e:t==="especialista"&&(this.especialistaFilter=this.userMap[e])}applyFilters(){this.filteredTurnos=this.turnos?.filter(t=>{let e=this.especialidadFilter?t.especialidad.includes(this.especialidadFilter):!0,s=this.especialistaFilter?this.userMap[t.especialistaId].includes(this.especialistaFilter):!0;return e&&s})}clearFilters(){this.especialidadFilter="",this.especialistaFilter="",this.filteredTurnos=this.turnos}changeState(t,e){return S(this,null,function*(){this.dialog.open(lt,{width:"400px",data:{motivo:""}}).afterClosed().subscribe(f=>S(this,null,function*(){f&&(t.estado=e,t.comentario=f,yield this.turnoService.update(t))}))})}showMotivo(t){this.dialog.open(st,{width:"400px",data:{motivo:t}})}get pagedTurnos(){let t=(this.currentPage-1)*this.pageSize;return this.filteredTurnos?.slice(t,t+this.pageSize)}get totalPages(){return this.turnos?Math.ceil(this.turnos.length/this.pageSize):0}get pages(){return Array.from({length:this.totalPages},(t,e)=>e+1)}setPage(t){this.currentPage=t}nextPage(){this.currentPage<this.totalPages&&this.currentPage++}previousPage(){this.currentPage>1&&this.currentPage--}};o.\u0275fac=function(e){return new(e||o)(m(z),m(B),m(at),m(A),m(J))},o.\u0275cmp=x({type:o,selectors:[["app-listar-turnos"]],standalone:!0,features:[C],decls:5,vars:1,consts:[[1,"container-fluid"],[1,"container","mt-4"],[1,"row","container"],[3,"loading"],[1,"filter-container","d-flex","justify-content-center","my-4"],[1,"filter","mx-3"],["for","filter-especialista",1,"form-label"],["type","text","id","filter-especialista","readonly","",1,"form-control",3,"value"],["for","filter-especialidad",1,"form-label"],["type","text","id","filter-especialidad","readonly","",1,"form-control",3,"value"],[1,"filter","mx-3","d-flex","align-items-end"],[1,"btn","btn-primary",3,"click","disabled"],[1,"btn","btn-secondary",3,"click"],[1,"table","table-striped","table-light","container"],[1,"text-center"],["scope","col"],["scope","col",2,"width","120px"],["scope","col",1,"td-modify-state"],["colspan","6",1,"td-no-results"],[1,"pagination","justify-content-center"],[1,"page-item"],[1,"page-link",3,"click"],[1,"page-item",3,"active"],[1,"td-clickeable",3,"click"],[2,"width","120px"],[1,"td-modify-state"],[1,"btn","btn-success"],[1,"btn","btn-success",3,"click"]],template:function(e,s){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),y(3,pt,1,1,"app-spinner",3)(4,Ct,42,8),n()()()),e&2&&(c(3),F(3,s.loading?3:4))},dependencies:[q],styles:['.container-fluid[_ngcontent-%COMP%]{height:90vh;background-color:#6ad8d4;background-image:url("./media/main_fondo-S2RK2XML.png");background-size:250px 250px;background-repeat:repeat;background-position:center;padding:20px}.mt-4[_ngcontent-%COMP%]{background-color:#add8e6;height:800px}table[_ngcontent-%COMP%]{margin-top:1em}.td-modify-state[_ngcontent-%COMP%]{width:250px}.td-clickeable[_ngcontent-%COMP%]:hover{opacity:.6;cursor:pointer}.td-no-results[_ngcontent-%COMP%]{background-color:#fff;text-align:center;font-size:medium;padding-top:1em;padding-bottom:1em}.filter-container[_ngcontent-%COMP%]{max-width:800px;margin:auto}.filter[_ngcontent-%COMP%]{text-align:center}']});let a=o;return a})();var Gt=(()=>{let o=class o{};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=x({type:o,selectors:[["app-turnos-container"]],standalone:!0,features:[C],decls:4,vars:0,consts:[[1,"container-fluid","m-0","p-0"]],template:function(e,s){e&1&&(r(0,"div",0),h(1,"app-navbar")(2,"app-listar-turnos")(3,"app-footer"),n())},dependencies:[N,$,ct]});let a=o;return a})();export{Gt as TurnosContainerComponent};