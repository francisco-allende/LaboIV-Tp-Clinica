import{a as R,b as z,c as j}from"./chunk-IHR6FYAD.js";import"./chunk-STOCAUF7.js";import{m as D}from"./chunk-6XXJ4WYK.js";import"./chunk-FSE6CKWK.js";import{a as A}from"./chunk-XBK3HTM3.js";import{a as O}from"./chunk-ZUA55XGQ.js";import{a as P,b as L}from"./chunk-BBSLOO33.js";import{a as I,b as V}from"./chunk-LOM3YR3D.js";import"./chunk-F2BWO3NQ.js";import{a as k}from"./chunk-OSX6DZ4Y.js";import{P as y}from"./chunk-QWFAWHVU.js";import"./chunk-WXI33M2S.js";import"./chunk-K3IIDNEN.js";import{Cb as u,Db as c,Mb as l,Nb as f,Ub as b,Wa as d,Xa as _,g as C,kb as T,la as x,mb as v,qb as S,rb as w,sb as M,tb as E,ua as p,ub as o,va as m,vb as r,wb as F,zb as h}from"./chunk-4VRYZ7GX.js";function K(n,a){if(n&1&&F(0,"app-spinner",3),n&2){let e=c();v("loading",e.loading)}}function U(n,a){n&1&&(o(0,"td",10),l(1,"No se encontraron resultados"),r())}function X(n,a){if(n&1){let e=h();o(0,"button",16),u("click",function(){p(e);let i=c().$implicit,s=c(3);return m(s.changeState(i,"cancelado"))}),l(1," Cancelar "),r()}}function q(n,a){if(n&1){let e=h();o(0,"button",17),u("click",function(){p(e);let i=c().$implicit,s=c(3);return m(s.showMotivo(i.comentario))}),l(1," Ver motivo "),r()}}function G(n,a){if(n&1){let e=h();o(0,"tr",6)(1,"td"),l(2),r(),o(3,"td",12),u("click",function(){let i=p(e).$implicit,s=c(3);return m(s.setFilter("especialista",i.especialistaId))}),l(4),r(),o(5,"td",12),u("click",function(){let i=p(e).$implicit,s=c(3);return m(s.setFilter("especialidad",i.especialidad))}),l(6),r(),o(7,"td"),l(8),r(),o(9,"td",13),l(10),r(),o(11,"td")(12,"div",14),T(13,X,2,0,"button",15)(14,q,2,0),r()()()}if(n&2){let e=a.$implicit,t=c(3);d(2),f(e.fecha),d(2),f(t.userMap[e.especialistaId]),d(2),f(e.especialidad),d(2),f(t.userMap[e.pacienteId]),d(2),f(e.estado),d(3),S(13,e.estado=="pendiente"?13:14)}}function H(n,a){if(n&1&&M(0,G,15,6,"tr",6,w),n&2){let e=c(2);E(e.pagedTurnos)}}function J(n,a){if(n&1){let e=h();o(0,"app-listado-filtros",4),u("filterApplied",function(i){p(e);let s=c();return m(s.onFilterApplied(i))})("filtersCleared",function(){p(e);let i=c();return m(i.onFiltersCleared())}),r(),o(1,"table",5)(2,"thead")(3,"tr",6)(4,"th",7),l(5,"Fecha"),r(),o(6,"th",7),l(7,"Especialista"),r(),o(8,"th",7),l(9,"Especialidad"),r(),o(10,"th",7),l(11,"Paciente"),r(),o(12,"th",8),l(13,"Estado"),r(),o(14,"th",9),l(15,"Modificar Estado"),r()()(),o(16,"tbody"),T(17,U,2,0,"td",10)(18,H,2,0),r()(),o(19,"app-paginacion",11),u("pageChanged",function(i){p(e);let s=c();return m(s.setPage(i))}),r()}if(n&2){let e=c();v("currentRol",e.currentRol)("turnos",e.turnos)("filteredTurnos",e.filteredTurnos)("userMap",e.userMap)("especialidadFilter",e.especialidadFilter)("especialistaFilter",e.especialistaFilter),d(17),S(17,(e.pagedTurnos==null?null:e.pagedTurnos.length)===0?17:18),d(2),v("currentPage",e.currentPage)("totalPages",e.totalPages)}}var $=(()=>{let a=class a{constructor(t,i,s,g,N){this.userService=t,this.loginService=i,this.turnoService=s,this.toast=g,this.dialog=N,this.loading=!0,this.currentRol="admin",this.turnos=[],this.filteredTurnos=[],this.userMap={},this.currentPage=1,this.pageSize=10,this.especialidadFilter="",this.especialistaFilter=""}ngOnInit(){this.turnoService.getAllTurnos().subscribe(t=>{this.turnos=t,this.filteredTurnos=this.turnos,this.getData()})}getData(){return C(this,null,function*(){try{if(this.turnos&&this.turnos.length>0)for(let t of this.turnos)this.userMap[t.especialistaId]||(this.userMap[t.especialistaId]=yield this.userService.getNameAndSurnameByEmail(t.especialistaId)),this.userMap[t.pacienteId]||(this.userMap[t.pacienteId]=yield this.userService.getNameAndSurnameByEmail(t.pacienteId))}catch(t){console.log(t)}finally{this.loading=!1}})}setFilter(t,i){t==="especialidad"?this.especialidadFilter=i:t==="especialista"&&(this.especialistaFilter=this.userMap[i])}onFilterApplied(t){this.especialidadFilter=t.especialidadFilter,this.especialistaFilter=t.especialistaFilter,this.applyFilters()}onFiltersCleared(){this.especialidadFilter="",this.especialistaFilter="",this.filteredTurnos=this.turnos}applyFilters(){this.filteredTurnos=this.turnos?.filter(t=>{let i=this.especialidadFilter?t.especialidad.includes(this.especialidadFilter):!0,s=this.especialistaFilter?this.userMap[t.especialistaId].includes(this.especialistaFilter):!0;return i&&s})}changeState(t,i){return C(this,null,function*(){this.dialog.open(R,{width:"400px",data:{motivo:""}}).afterClosed().subscribe(g=>C(this,null,function*(){g&&(t.estado=i,t.comentario=g,yield this.turnoService.update(t))}))})}showMotivo(t){this.dialog.open(z,{width:"400px",data:{motivo:t}})}get pagedTurnos(){let t=(this.currentPage-1)*this.pageSize;return this.filteredTurnos?.slice(t,t+this.pageSize)}get totalPages(){return this.filteredTurnos?Math.ceil(this.filteredTurnos.length/this.pageSize):0}setPage(t){this.currentPage=t}};a.\u0275fac=function(i){return new(i||a)(_(I),_(k),_(O),_(y),_(D))},a.\u0275cmp=x({type:a,selectors:[["app-listar-turnos"]],standalone:!0,features:[b],decls:5,vars:1,consts:[[1,"container-fluid"],[1,"container","mt-4"],[1,"row","container"],[3,"loading"],[3,"filterApplied","filtersCleared","currentRol","turnos","filteredTurnos","userMap","especialidadFilter","especialistaFilter"],[1,"table","table-striped","table-light","container"],[1,"text-center"],["scope","col"],["scope","col",2,"width","120px"],["scope","col",1,"td-modify-state"],["colspan","6",1,"td-no-results"],[3,"pageChanged","currentPage","totalPages"],[1,"td-clickeable",3,"click"],[2,"width","120px"],[1,"td-modify-state"],[1,"btn","btn-dark"],[1,"btn","btn-dark",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(i,s){i&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),T(3,K,1,1,"app-spinner",3)(4,J,20,9),r()()()),i&2&&(d(3),S(3,s.loading?3:4))},dependencies:[V,j,A],styles:['.container-fluid[_ngcontent-%COMP%]{height:90vh;background-color:#6ad8d4;background-image:url("./media/main_fondo-S2RK2XML.png");background-size:250px 250px;background-repeat:repeat;background-position:center;padding:20px}.mt-4[_ngcontent-%COMP%]{background-color:#add8e6;height:800px}table[_ngcontent-%COMP%]{margin-top:1em}.td-modify-state[_ngcontent-%COMP%]{width:250px}.td-clickeable[_ngcontent-%COMP%]:hover{opacity:.6;cursor:pointer}.td-no-results[_ngcontent-%COMP%]{background-color:#fff;text-align:center;font-size:medium;padding-top:1em;padding-bottom:1em}']});let n=a;return n})();var pt=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=x({type:a,selectors:[["app-turnos-container"]],standalone:!0,features:[b],decls:4,vars:0,consts:[[1,"container-fluid","m-0","p-0"]],template:function(i,s){i&1&&(o(0,"div",0),F(1,"app-navbar")(2,"app-listar-turnos")(3,"app-footer"),r())},dependencies:[P,L,$]});let n=a;return n})();export{pt as TurnosContainerComponent};
