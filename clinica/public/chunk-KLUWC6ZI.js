import{a as F,b as L}from"./chunk-7RROMLKU.js";import{a as M}from"./chunk-AIKLBKEJ.js";import{a as T}from"./chunk-II4I56BR.js";import"./chunk-F2BWO3NQ.js";import"./chunk-AAQ23JA4.js";import"./chunk-QWFAWHVU.js";import"./chunk-WXI33M2S.js";import"./chunk-K3IIDNEN.js";import{Cb as g,Db as c,Gb as U,Mb as n,Nb as d,Ua as E,Ub as v,Wa as s,Xa as I,g as b,kb as h,la as f,mb as P,ob as C,qb as S,rb as y,sb as k,tb as w,ua as p,ub as t,va as u,vb as i,wb as _,zb as x}from"./chunk-4VRYZ7GX.js";function O(a,r){if(a&1&&_(0,"img",10),a&2){let e=c().$implicit;P("src",e.extraImg,E)}}function z(a,r){a&1&&n(0," - ")}function A(a,r){if(a&1){let e=x();t(0,"button",12),g("click",function(){p(e);let l=c().$implicit,m=c(2);return u(m.changeState(l,"habilitado"))}),n(1," Habilitar "),i()}}function $(a,r){if(a&1){let e=x();t(0,"button",13),g("click",function(){p(e);let l=c().$implicit,m=c(2);return u(m.changeState(l,"deshabilitado"))}),n(1," Desabilitar "),i()}}function N(a,r){if(a&1&&(t(0,"tr",3)(1,"td"),_(2,"img",10),i(),t(3,"td"),h(4,O,1,1,"img",10)(5,z,1,0),i(),t(6,"td"),n(7),i(),t(8,"td"),n(9),i(),t(10,"td"),n(11),i(),t(12,"td"),n(13),i(),t(14,"td"),n(15),i(),t(16,"td"),n(17),i(),t(18,"td"),n(19),i(),t(20,"td"),n(21),i(),t(22,"td"),h(23,A,2,0,"button",11)(24,$,2,0),i()()),a&2){let e=r.$implicit;s(2),U("src",e.mainImg,E),s(2),S(4,e.extraImg?4:5),s(3),d(e.nombre),s(2),d(e.apellido),s(2),d(e.dni),s(2),d(e.email),s(2),d(e.rol),s(2),d(e.obraSocial?e.obraSocial:"-"),s(2),d(e.especialidad?e.especialidad:"-"),s(2),d(e.estado),s(2),S(23,e.estado=="pendiente"||e.estado=="deshabilitado"?23:e.estado=="habilitado"?24:-1)}}function j(a,r){if(a&1){let e=x();t(0,"li",7)(1,"a",8),g("click",function(){let l=p(e).$implicit,m=c(2);return u(m.setPage(l))}),n(2),i()()}if(a&2){let e=r.$implicit,o=c(2);C("active",o.currentPage===e),s(2),d(e)}}function B(a,r){if(a&1){let e=x();t(0,"table",2)(1,"thead")(2,"tr",3)(3,"th",4),n(4,"Imagen perfil"),i(),t(5,"th",4),n(6,"Imagen extra"),i(),t(7,"th",4),n(8,"Nombre"),i(),t(9,"th",4),n(10,"Apellido"),i(),t(11,"th",4),n(12,"DNI"),i(),t(13,"th",4),n(14,"Email"),i(),t(15,"th",4),n(16,"Rol"),i(),t(17,"th",4),n(18,"Obra social"),i(),t(19,"th",4),n(20,"Especialidad"),i(),t(21,"th",5),n(22,"Estado"),i(),t(23,"th",4),n(24,"Acciones"),i()()(),t(25,"tbody"),k(26,N,25,11,"tr",3,y),i()(),t(28,"ul",6)(29,"li",7)(30,"a",8),g("click",function(){p(e);let l=c();return u(l.previousPage())}),n(31,"Anterior"),i()(),k(32,j,3,3,"li",9,y),t(34,"li",7)(35,"a",8),g("click",function(){p(e);let l=c();return u(l.nextPage())}),n(36,"Siguiente"),i()()()}if(a&2){let e=c();s(26),w(e.pagedUsers),s(3),C("disabled",e.currentPage===1),s(3),w(e.pages),s(2),C("disabled",e.currentPage===e.totalPages)}}var V=(()=>{let r=class r{constructor(o){this.usersService=o,this.users=[],this.loading=!0,this.currentPage=1,this.pageSize=10}ngOnInit(){this.getData()}getData(){return b(this,null,function*(){try{this.users=yield this.usersService.getAllUsers()}catch(o){console.log(o)}finally{this.loading=!1}})}get pagedUsers(){let o=(this.currentPage-1)*this.pageSize;return this.users.slice(o,o+this.pageSize)}get totalPages(){return Math.ceil(this.users.length/this.pageSize)}get pages(){return Array.from({length:this.totalPages},(o,l)=>l+1)}setPage(o){this.currentPage=o}nextPage(){this.currentPage<this.totalPages&&this.currentPage++}previousPage(){this.currentPage>1&&this.currentPage--}changeState(o,l){return b(this,null,function*(){o.estado=l,yield this.usersService.update(o)})}};r.\u0275fac=function(l){return new(l||r)(I(T))},r.\u0275cmp=f({type:r,selectors:[["app-listado-usuarios"]],standalone:!0,features:[v],decls:3,vars:2,consts:[[1,"container-fluid"],[3,"loading"],[1,"table","table-striped","table-dark","container"],[1,"text-center"],["scope","col"],["scope","col",2,"width","112px"],[1,"pagination","justify-content-center"],[1,"page-item"],[1,"page-link",3,"click"],[1,"page-item",3,"active"],["width","50px","height","50px",3,"src"],[1,"btn","btn-success"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(l,m){l&1&&(t(0,"div",0),_(1,"app-spinner",1),h(2,B,37,4),i()),l&2&&(s(),P("loading",m.loading),s(),S(2,m.loading?-1:2))},dependencies:[M],styles:['.container-fluid[_ngcontent-%COMP%]{height:85vh;background-color:#6ad8d4;background-image:url("./media/main_fondo-S2RK2XML.png");background-size:250px 250px;background-repeat:repeat;background-position:center;padding:20px}table[_ngcontent-%COMP%]{margin-top:1em}li[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover{cursor:pointer}.btn[_ngcontent-%COMP%]{border-radius:0!important;width:90px}.btn-danger[_ngcontent-%COMP%]{padding-left:0;padding-right:0}']});let a=r;return a})();var Z=(()=>{let r=class r{};r.\u0275fac=function(l){return new(l||r)},r.\u0275cmp=f({type:r,selectors:[["app-usuarios-container"]],standalone:!0,features:[v],decls:4,vars:0,consts:[[1,"container-fluid","m-0","p-0"]],template:function(l,m){l&1&&(t(0,"div",0),_(1,"app-navbar")(2,"app-listado-usuarios")(3,"app-footer"),i())},dependencies:[V,F,L]});let a=r;return a})();export{Z as UsuariosContainerComponent};