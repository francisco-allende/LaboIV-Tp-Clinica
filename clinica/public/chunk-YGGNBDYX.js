import{A as d,B as o,x as l,z as n}from"./chunk-6SOKX3XS.js";import{Y as c,ba as s,s as a}from"./chunk-TDWWCWZI.js";var j=(()=>{let e=class e{constructor(r){this.firestore=r}getAllEspecialidades(){let r=o(this.firestore,"especialidades");return n(r).pipe(a(t=>t.map(p=>p.especialidad)))}altaEspecialidad(r){try{let t=o(this.firestore,"especialidades");d(t,{especialidad:r})}catch(t){console.error("Error en el alta de especialidad:",t)}}};e.\u0275fac=function(t){return new(t||e)(s(l))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{j as a};
