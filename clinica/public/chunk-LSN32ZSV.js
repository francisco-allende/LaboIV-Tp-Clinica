import{a as L}from"./chunk-XBK3HTM3.js";import{a as k,b as F}from"./chunk-YJULBCCL.js";import{a as T}from"./chunk-AIKLBKEJ.js";import{a as M}from"./chunk-II4I56BR.js";import"./chunk-F2BWO3NQ.js";import"./chunk-OSX6DZ4Y.js";import"./chunk-QWFAWHVU.js";import"./chunk-WXI33M2S.js";import"./chunk-K3IIDNEN.js";import{Cb as S,Db as m,Gb as U,Mb as n,Nb as c,Ua as E,Ub as v,Wa as s,Xa as y,g as b,kb as x,la as u,mb as h,qb as f,rb as P,sb as w,tb as I,ua as g,ub as e,va as _,vb as t,wb as p,zb as C}from"./chunk-4VRYZ7GX.js";function V(a,o){if(a&1&&p(0,"img",9),a&2){let i=m().$implicit;h("src",i.extraImg,E)}}function z(a,o){a&1&&n(0," - ")}function A(a,o){if(a&1){let i=C();e(0,"button",11),S("click",function(){g(i);let l=m().$implicit,d=m(2);return _(d.changeState(l,"habilitado"))}),n(1," Habilitar "),t()}}function $(a,o){if(a&1){let i=C();e(0,"button",12),S("click",function(){g(i);let l=m().$implicit,d=m(2);return _(d.changeState(l,"deshabilitado"))}),n(1," Desabilitar "),t()}}function N(a,o){if(a&1&&(e(0,"tr",5)(1,"td"),p(2,"img",9),t(),e(3,"td"),x(4,V,1,1,"img",9)(5,z,1,0),t(),e(6,"td"),n(7),t(),e(8,"td"),n(9),t(),e(10,"td"),n(11),t(),e(12,"td"),n(13),t(),e(14,"td"),n(15),t(),e(16,"td"),n(17),t(),e(18,"td"),n(19),t(),e(20,"td"),n(21),t(),e(22,"td"),x(23,A,2,0,"button",10)(24,$,2,0),t()()),a&2){let i=o.$implicit;s(2),U("src",i.mainImg,E),s(2),f(4,i.extraImg?4:5),s(3),c(i.nombre),s(2),c(i.apellido),s(2),c(i.dni),s(2),c(i.email),s(2),c(i.rol),s(2),c(i.obraSocial?i.obraSocial:"-"),s(2),c(i.especialidad?i.especialidad:"-"),s(2),c(i.estado),s(2),f(23,i.estado=="pendiente"||i.estado=="deshabilitado"?23:i.estado=="habilitado"?24:-1)}}function R(a,o){if(a&1){let i=C();e(0,"table",4)(1,"thead")(2,"tr",5)(3,"th",6),n(4,"Imagen perfil"),t(),e(5,"th",6),n(6,"Imagen extra"),t(),e(7,"th",6),n(8,"Nombre"),t(),e(9,"th",6),n(10,"Apellido"),t(),e(11,"th",6),n(12,"DNI"),t(),e(13,"th",6),n(14,"Email"),t(),e(15,"th",6),n(16,"Rol"),t(),e(17,"th",6),n(18,"Obra social"),t(),e(19,"th",6),n(20,"Especialidad"),t(),e(21,"th",7),n(22,"Estado"),t(),e(23,"th",6),n(24,"Acciones"),t()()(),e(25,"tbody"),w(26,N,25,11,"tr",5,P),t()(),e(28,"app-paginacion",8),S("pageChanged",function(l){g(i);let d=m();return _(d.setPage(l))}),t()}if(a&2){let i=m();s(26),I(i.pagedUsers),s(2),h("currentPage",i.currentPage)("totalPages",i.totalPages)}}var D=(()=>{let o=class o{constructor(r){this.usersService=r,this.users=[],this.loading=!0,this.currentPage=1,this.pageSize=10}ngOnInit(){this.getData()}getData(){return b(this,null,function*(){try{this.users=yield this.usersService.getAllUsers()}catch(r){console.log(r)}finally{this.loading=!1}})}changeState(r,l){return b(this,null,function*(){r.estado=l,yield this.usersService.update(r)})}get pagedUsers(){let r=(this.currentPage-1)*this.pageSize;return this.users?.slice(r,r+this.pageSize)}get totalPages(){return this.users?Math.ceil(this.users.length/this.pageSize):0}setPage(r){this.currentPage=r}};o.\u0275fac=function(l){return new(l||o)(y(M))},o.\u0275cmp=u({type:o,selectors:[["app-listado-usuarios"]],standalone:!0,features:[v],decls:5,vars:2,consts:[[1,"container-fluid"],[1,"container","mt-4"],[1,"row","container"],[3,"loading"],[1,"table","table-striped","table-light","container"],[1,"text-center"],["scope","col"],["scope","col",2,"width","112px"],[3,"pageChanged","currentPage","totalPages"],["width","50px","height","50px",3,"src"],[1,"btn","btn-success"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(l,d){l&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),p(3,"app-spinner",3),x(4,R,29,2),t()()()),l&2&&(s(3),h("loading",d.loading),s(),f(4,d.loading?-1:4))},dependencies:[T,L],styles:['.container-fluid[_ngcontent-%COMP%]{height:90vh;background-color:#6ad8d4;background-image:url("./media/main_fondo-S2RK2XML.png");background-size:250px 250px;background-repeat:repeat;background-position:center;padding:20px}.mt-4[_ngcontent-%COMP%]{background-color:#add8e6;height:800px}table[_ngcontent-%COMP%]{margin-top:1em}li[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover{cursor:pointer}.btn[_ngcontent-%COMP%]{border-radius:0!important;width:90px}.btn-danger[_ngcontent-%COMP%]{padding-left:0;padding-right:0}']});let a=o;return a})();var Z=(()=>{let o=class o{};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=u({type:o,selectors:[["app-usuarios-container"]],standalone:!0,features:[v],decls:4,vars:0,consts:[[1,"container-fluid","m-0","p-0"]],template:function(l,d){l&1&&(e(0,"div",0),p(1,"app-navbar")(2,"app-listado-usuarios")(3,"app-footer"),t())},dependencies:[D,k,F]});let a=o;return a})();export{Z as UsuariosContainerComponent};
