import{B as n,C as a,E as p,F as y,x as m}from"./chunk-IADXVK6T.js";import{$ as h,a as u,e as c,ea as f}from"./chunk-7S5IDYK3.js";var g=(()=>{let t=class t{constructor(o){this.firestore=o,this.userRol="",this.setUserRol=r=>this.userRol=r,this.getUserRol=()=>this.userRol}getAllUsers(){return c(this,null,function*(){let o=n(this.firestore,"users");try{let r=yield a(o),e=[];return r.forEach(s=>{e.push(s.data())}),e}catch(r){throw console.error("Error obteniendo los usuarios:",r),r}})}getUserByEmail(o){return c(this,null,function*(){try{let r=n(this.firestore,"users"),e=p(r,y("email","==",o)),s=yield a(e);if(s.empty)return null;{let l=s.docs[0].data();return this.setUserRol(l.rol),u({},l)}}catch(r){return console.error("Error al obtener el usuario via email: ",r),null}})}};t.\u0275fac=function(r){return new(r||t)(f(m))},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{g as a};
