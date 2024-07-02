import{F as b,J as c,K as l,M as h,N as w,O as u}from"./chunk-KOE6HBMH.js";import{Y as y,ba as f}from"./chunk-TDWWCWZI.js";import{a as m,h as n}from"./chunk-DLDOR3YA.js";var R=(()=>{let s=class s{constructor(r){this.firestore=r,this.userRol="",this.setUserRol=o=>this.userRol=o,this.getUserRol=()=>this.userRol}getAllUsers(){return n(this,null,function*(){let r=c(this.firestore,"users");try{let o=yield l(r),e=[];return o.forEach(t=>{e.push(t.data())}),e}catch(o){throw console.error("Error obteniendo los usuarios:",o),o}})}getUserByEmail(r){return n(this,null,function*(){try{let o=c(this.firestore,"users"),e=h(o,u("email","==",r)),t=yield l(e);if(t.empty)return null;{let a=t.docs[0].data();return this.setUserRol(a.rol),m({},a)}}catch(o){return console.error("Error al obtener el usuario via email: ",o),null}})}getNameAndSurnameByEmail(r){return n(this,null,function*(){try{let o=c(this.firestore,"users"),e=h(o,u("email","==",r)),t=yield l(e);if(t.empty)return"";{let a=t.docs[0].data();this.setUserRol(a.rol);let p=m({},a);return`${p.nombre} ${p.apellido}`}}catch(o){return console.error("Error al obtener el usuario via email: ",o),""}})}getAllEnabledUsersByRol(r){return n(this,null,function*(){try{let o=c(this.firestore,"users"),e=h(o,u("rol","==",r),u("estado","==","habilitado")),t=yield l(e);if(t.empty)return null;{let i=[];return t.forEach(a=>{i.push(a.data())}),i}}catch(o){return console.error("Error al obtener usuarios por rol: ",o),null}})}update(r){return n(this,null,function*(){try{let o=c(this.firestore,"users"),e=h(o,u("email","==",r.email)),t=yield l(e);if(!t.empty){let i=t.docs[0].ref;yield w(i,{nombre:r.nombre,apellido:r.apellido,edad:r.edad,dni:r.dni,email:r.email,password:r.password,rol:r.rol,mainImg:r.mainImg,extraImg:r.extraImg,obraSocial:r.obraSocial,especialidad:r.especialidad,estado:r.estado,turnos:r.turnos,horarios:r.horarios,historiaClinica:r.historiaClinica})}}catch(o){throw console.error("Error actualizando el usuario:",o),o}})}};s.\u0275fac=function(o){return new(o||s)(f(b))},s.\u0275prov=y({token:s,factory:s.\u0275fac,providedIn:"root"});let d=s;return d})();export{R as a};
