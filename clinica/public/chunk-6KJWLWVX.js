import{a as y,b as de,c as me,d as k,e as ce,f as Me}from"./chunk-7SO7NGEO.js";import{a as Ve}from"./chunk-YGGNBDYX.js";import{a as we,b as Ee}from"./chunk-XW2RAFPW.js";import{a as Se,c as Ie}from"./chunk-HUVKKSNT.js";import{h as fe,j as he,k as Ce,l as ve,m as xe,n as be,r as Fe,s as ye}from"./chunk-KIGVSZDZ.js";import"./chunk-CC3LA27V.js";import{b as pe,c as ge,d as ue,e as _e}from"./chunk-Q2GRMTA4.js";import{b as Z,f as H,i as J}from"./chunk-7XIEKY6O.js";import{a as se}from"./chunk-XSDBD7LZ.js";import{a as I,b as h,d as M,e as K,g as Q,h as X,i as Y,j as ee,k as te,l as ie,m as ne,n as oe,o as re,p as ae,r as le,s as V,t as R}from"./chunk-FSRSBQOR.js";import{H as $,J as z}from"./chunk-6SOKX3XS.js";import"./chunk-IX6G3U3V.js";import{h as W}from"./chunk-2URDVIT7.js";import{Ab as F,Db as _,Eb as f,Mb as s,Nb as O,Ob as D,Sb as L,Tb as j,Ua as d,Ub as U,Va as x,Wb as S,ga as E,kb as g,mb as b,qa as C,ra as v,rb as c,sb as N,sc as B,tb as A,tc as q,ub as P,vb as r,wb as o,wc as G,xb as u}from"./chunk-TDWWCWZI.js";import{h as w}from"./chunk-DLDOR3YA.js";var Re=(()=>{let l=class l{constructor(t){this.dialogRef=t,this.newEspecialidad=""}onAdd(){this.dialogRef.close(this.newEspecialidad)}onCancel(){this.dialogRef.close()}};l.\u0275fac=function(i){return new(i||l)(x(fe))},l.\u0275cmp=E({type:l,selectors:[["app-add-especialidad-dialog"]],standalone:!0,features:[S],decls:10,vars:1,consts:[["mat-dialog-title","",1,"dialog-title"],["mat-dialog-content","",1,"dialog-content"],["matInput","","placeholder","Especialidad",3,"ngModelChange","ngModel"],["mat-dialog-actions","",1,"dialog-actions"],["mat-button","",1,"dialog-text",3,"click"]],template:function(i,a){i&1&&(r(0,"h1",0),s(1,"A\xF1adir Especialidad"),o(),r(2,"div",1)(3,"mat-form-field")(4,"input",2),U("ngModelChange",function(p){return j(a.newEspecialidad,p)||(a.newEspecialidad=p),p}),o()()(),r(5,"div",3)(6,"button",4),_("click",function(){return a.onCancel()}),s(7,"Cancelar"),o(),r(8,"button",4),_("click",function(){return a.onAdd()}),s(9,"A\xF1adir"),o()()),i&2&&(d(4),L("ngModel",a.newEspecialidad))},dependencies:[V,I,M,Q,ye,Fe,be,Ce,xe,ve,R,Ie,Se,Ee,we],styles:[".btn[_ngcontent-%COMP%]{border-radius:0!important}.dialog-title[_ngcontent-%COMP%]{text-align:center}.dialog-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:20px 0}.dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}.dialog-text[_ngcontent-%COMP%]{text-align:center}"]});let n=l;return n})();function De(n,l){if(n&1){let e=F();u(0,"img",11),r(1,"div",12)(2,"button",13),_("click",function(){C(e);let i=f();return v(i.router.navigateByUrl("/login"))}),s(3,"Volver al login"),o()()}}function Le(n,l){n&1&&(r(0,"div",16),s(1," El nombre no puede contener n\xFAmeros "),o())}function je(n,l){n&1&&(r(0,"div",16),s(1," El apellido no puede contener n\xFAmeros "),o())}function Ue(n,l){n&1&&(r(0,"div",16),s(1," Edad inv\xE1lida "),o())}function Be(n,l){n&1&&(r(0,"div",16),s(1," El DNI debe contener 8 n\xFAmeros "),o())}function qe(n,l){n&1&&(r(0,"div",16),s(1," La imagen debe ser formato .jpg, .png o .jpeg "),o())}function Ge(n,l){n&1&&(r(0,"div",16),s(1," La imagen debe ser formato .jpg, .png o .jpeg "),o())}function We(n,l){if(n&1){let e=F();r(0,"div",12)(1,"input",27),_("change",function(i){C(e);let a=f(2);return a.handleFileInput(i,"extraImg"),v(a.checkLoaded("extraImg"))}),o(),g(2,Ge,2,0,"div",16),o(),r(3,"div",12),u(4,"input",28),o()}if(n&2){let e=f(2);d(2),c(2,e.extraIMgLoaded&&e.registerForm.controls.extraImg.invalid&&(e.registerForm.controls.extraImg.dirty||e.registerForm.controls.extraImg.touched)?2:-1)}}function $e(n,l){if(n&1&&(r(0,"option",38),s(1),o()),n&2){let e=l.$implicit;b("value",e),d(),D(" ",e," ")}}function ze(n,l){if(n&1){let e=F();r(0,"div",34)(1,"div",35)(2,"select",36)(3,"option",37),s(4,"Especialidades"),o(),A(5,$e,2,2,"option",38,N),o(),r(7,"span",39),s(8),o(),r(9,"button",40),_("click",function(){let i=C(e).index,a=f(3);return v(a.eliminarEspecialidad(i))}),s(10,"Eliminar"),o()()()}if(n&2){let e,t=l.index,i=f(3);b("formGroupName",t),d(5),P(i.getEspecialidadesDisponibles()),d(3),O((e=i.especialidadesFormArray.controls[t].get("especialidad"))==null?null:e.value)}}function Ze(n,l){if(n&1){let e=F();r(0,"div",29),g(1,ze,11,2,"div",30),o(),u(2,"br"),r(3,"div",31)(4,"div",12)(5,"button",32),_("click",function(){C(e);let i=f(2);return v(i.agregarOtraEspecialidad())}),s(6," Poseo m\xE1s de una especialidad "),o()(),r(7,"div",12)(8,"button",33),_("click",function(){C(e);let i=f(2);return v(i.addEspecialidad())}),s(9," Sumar especialdiad al listado "),o()()()}if(n&2){let e=f(2);d(),b("ngForOf",e.especialidadesFormArray.controls)}}function He(n,l){n&1&&(r(0,"div"),s(1,"El correo electr\xF3nico es obligatorio."),o())}function Je(n,l){n&1&&(r(0,"div"),s(1,"El correo electr\xF3nico no es v\xE1lido."),o())}function Ke(n,l){if(n&1&&(r(0,"div",16),g(1,He,2,0,"div")(2,Je,2,0,"div"),o()),n&2){let e=f(2);d(),c(1,e.registerForm.controls.email.errors!=null&&e.registerForm.controls.email.errors.required?1:-1),d(),c(2,e.registerForm.controls.email.errors!=null&&e.registerForm.controls.email.errors.email?2:-1)}}function Qe(n,l){n&1&&(r(0,"div",16),s(1," La contrase\xF1a debe contener al menos 8 caracteres. "),o())}function Xe(n,l){n&1&&(r(0,"div",16),s(1," La contrase\xF1a no coincide "),o())}function Ye(n,l){if(n&1){let e=F();r(0,"form",14),_("ngSubmit",function(){C(e);let i=f();return v(i.createUser())}),r(1,"div")(2,"div",12),u(3,"input",15),g(4,Le,2,0,"div",16),o(),r(5,"div",12),u(6,"input",17),g(7,je,2,0,"div",16),o(),r(8,"div",12),u(9,"input",18),g(10,Ue,2,0,"div",16),o(),r(11,"div",12),u(12,"input",19),g(13,Be,2,0,"div",16),o(),r(14,"div",12)(15,"input",20),_("change",function(i){C(e);let a=f();return a.handleFileInput(i,"mainImg"),v(a.checkLoaded("mainImg"))}),o(),g(16,qe,2,0,"div",16),o(),g(17,We,5,1)(18,Ze,10,1),r(19,"div",12),u(20,"input",21),g(21,Ke,3,2,"div",16),o(),r(22,"div",12),u(23,"input",22),g(24,Qe,2,0,"div",16),o(),r(25,"div",12),u(26,"input",23),g(27,Xe,2,0,"div",16),o()(),r(28,"div",12)(29,"app-captcha",24),_("captchaValidated",function(i){C(e);let a=f();return v(a.handleCaptchaValidation(i))}),o()(),r(30,"div",25)(31,"div",12)(32,"button",26),s(33,"Crear cuenta"),o()(),r(34,"div",12)(35,"button",13),_("click",function(){C(e);let i=f();return v(i.router.navigateByUrl("/login"))}),s(36,"Volver al login"),o()()()()}if(n&2){let e=f();b("formGroup",e.registerForm),d(4),c(4,e.registerForm.controls.nombre.invalid&&(e.registerForm.controls.nombre.dirty||e.registerForm.controls.nombre.touched)?4:-1),d(3),c(7,e.registerForm.controls.apellido.invalid&&(e.registerForm.controls.apellido.dirty||e.registerForm.controls.apellido.touched)?7:-1),d(3),c(10,e.registerForm.controls.edad.invalid&&(e.registerForm.controls.edad.dirty||e.registerForm.controls.edad.touched)?10:-1),d(3),c(13,e.registerForm.controls.dni.invalid&&(e.registerForm.controls.dni.dirty||e.registerForm.controls.dni.touched)?13:-1),d(3),c(16,e.mainImgLoaded&&e.registerForm.controls.mainImg.invalid&&(e.registerForm.controls.mainImg.dirty||e.registerForm.controls.mainImg.touched)?16:-1),d(),c(17,e.view==="paciente"?17:-1),d(),c(18,e.view==="especialista"?18:-1),d(3),c(21,e.registerForm.controls.email.invalid&&(e.registerForm.controls.email.dirty||e.registerForm.controls.email.touched)?21:-1),d(3),c(24,e.registerForm.controls.password.invalid&&(e.registerForm.controls.password.dirty||e.registerForm.controls.password.touched)?24:-1),d(3),c(27,e.registerForm.controls.repeatPassword.invalid&&(e.registerForm.controls.repeatPassword.dirty||e.registerForm.controls.repeatPassword.touched)?27:-1),d(5),b("disabled",!e.isFormValid())}}var It=(()=>{let l=class l{constructor(t,i,a,m,p,T){this.fb=t,this.loginService=i,this.toast=a,this.especialidadService=m,this.dialog=p,this.router=T,this.view="paciente",this.showForm=!1,this.mainImgLoaded=!1,this.extraIMgLoaded=!1,this.imgsUploaded=!1,this.especialidades=[],this.showModal=!1,this.arrImages=[],this.urls=[],this.validToken=!1,this.myEspecialidades=[],this.faPlus=J,this.faMinus=H,this.storage=ge(),this.registerForm=this.fb.group({nombre:["",[h.required,y()]],apellido:["",[h.required,y()]],edad:[0,[h.required,de()]],dni:["",[h.required,me()]],obraSocial:["",[y()]],especialidades:this.fb.array([]),email:["",[h.required,h.email]],password:["",[h.required,h.minLength(8)]],repeatPassword:["",[h.required,h.minLength(8),ce()]],mainImg:["",[h.required,k()]],extraImg:["",k()]})}ngOnInit(){this.especialidadService.getAllEspecialidades().subscribe(t=>{this.especialidades=t,this.agregarOtraEspecialidad()})}get fc(){return this.registerForm.controls}switchView(t){this.view=t,this.showForm=!0}receiveValues(t){this.registerForm?.patchValue(t)}handleFileInput(t,i){return w(this,null,function*(){let a=this.registerForm?.get("dni")?.value.toString();a||(a=Math.floor(Math.random()*9e7)+1e7);try{let m=t.target;m.files&&m.files.length>0?this.arrImages.push({formControlName:i,dni:a,file:m.files[0]}):this.toast.error("Ups! No se pudo subir la imagen. Intente con otra.")}catch(m){console.log("error al subir la imagen: ",m)}})}uploadFile(){return w(this,null,function*(){if(this.ensureMaxTwoElements(),this.arrImages.length>0&&!this.imgsUploaded){for(let t=0;t<=this.arrImages.length;t++)if(this.arrImages[t]?.file){let i=Math.floor(Math.random()*1e6),a=`users/${this.arrImages[0].dni}/img_${this.arrImages[t].formControlName}_${this.arrImages[t].dni}_${i}`,m=ue(this.storage,a);yield _e(m,this.arrImages[t].file);let p=yield pe(m);this.urls.push({imgField:this.arrImages[t].formControlName,url:p}),this.imgsUploaded=!0}}})}ensureMaxTwoElements(){this.arrImages.length>2?this.arrImages.splice(0,this.arrImages.length-2):this.arrImages.length==2&&this.view=="especialista"&&this.arrImages.splice(0,1)}checkLoaded(t){this.registerForm?.get(t)?.value!=""&&(t==="mainImg"?this.mainImgLoaded=!0:t==="extraIMg"&&(this.extraIMgLoaded=!0))}createUser(){return w(this,null,function*(){if(this.isFormValid())try{yield this.uploadFile(),this.loginService.register(this.setNewUser()),this.router.navigateByUrl("/enviar_email")}catch(t){console.log(t)}})}setNewUser(){let{nombre:t,apellido:i,dni:a,edad:m,email:p,password:T,especialidad:et,obraSocial:Te,mainImg:tt,extraImg:it}=this.registerForm.value,ke=this.registerForm.get("especialidades").value;return this.myEspecialidades=ke.map(Ne=>Ne.especialidad),this.newUser={nombre:t,apellido:i,dni:a,edad:m,email:p,password:T,obraSocial:Te,mainImg:this.getImgUrl("mainImg"),extraImg:this.getImgUrl("extraImg"),especialidad:this.myEspecialidades,estado:this.view=="paciente"?"habilitado":"pendiente",rol:this.view},this.newUser}getImgUrl(t){let i=this.urls.find(a=>a.imgField==t);return i?i.url:""}addEspecialidad(){this.dialog.open(Re).afterClosed().subscribe(i=>{if(i){let a=i.toLowerCase().trim();this.especialidades.some(p=>p.toLowerCase().trim()===a)?(this.toast.error("La especialidad ya existe"),this.registerForm.get("especialidad")?.setErrors({exists:!0})):(this.especialidadService.altaEspecialidad(i),this.toast.success("Especialidad agregada exitosamente"))}})}get especialidadesFormArray(){return this.registerForm.get("especialidades")}getEspecialidadesDisponibles(){let t=this.especialidadesFormArray.value.map(a=>a.especialidad);return this.especialidades.filter(a=>!t.includes(a))}agregarOtraEspecialidad(){let t=this.especialidadesFormArray,i=t.controls.map(p=>p.get("especialidad")?.value),a=this.especialidades.filter(p=>!i.includes(p));if(a.length===0){this.toast.error("No hay especialidades disponibles para agregar.'");return}let m=this.fb.group({especialidad:[a[0],[y()]]});t.push(m)}eliminarEspecialidad(t){this.especialidadesFormArray.removeAt(t)}handleCaptchaValidation(t){this.validToken=t}isFormValid(){let t=!1;return this.registerForm.get("nombre")?.valid&&this.registerForm.get("apellido")?.valid&&this.registerForm.get("dni")?.valid&&this.registerForm.get("edad")?.valid&&this.registerForm.get("email")?.valid&&this.registerForm.get("password")?.valid&&this.registerForm.get("repeatPassword")?.valid&&this.registerForm.get("mainImg")?.valid&&this.validToken&&(this.view==="paciente"?t=this.registerForm.get("obraSocial")?.valid&&this.registerForm.get("extraImg")?.valid:this.view=="especialista"&&(t=this.registerForm.get("especialidades").controls.every(m=>m.valid))),t}};l.\u0275fac=function(i){return new(i||l)(x(le),x(z),x($),x(Ve),x(he),x(W))},l.\u0275cmp=E({type:l,selectors:[["app-register"]],standalone:!0,features:[S],decls:23,vars:3,consts:[[1,"container-fluid","m-0","p-0",3,"ngClass"],[1,"row","justify-content-center","align-items-top","h-100","form-container"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"card-title","text-center"],["role","group",1,"btn-switch","text-center"],["type","button",1,"btn","btn-outline-primary",3,"click"],["src","../../../assets/rol_paciente.png","width","100px","alt","paciente",1,"btn-image"],["src","../../../assets/rol_medico.png","width","100px","alt","especialista",1,"btn-image"],[3,"formGroup"],["src","../../../assets/logo.png","width","400px","alt","serpientes medicina",2,"padding-top","6em"],[1,"form-group"],["type","button",1,"btn","btn-primary","btn-block",3,"click"],[3,"ngSubmit","formGroup"],["type","text","placeholder","Nombre","formControlName","nombre","appAutofocus","",1,"form-control"],[1,"text-danger"],["type","text","placeholder","Apellido","formControlName","apellido",1,"form-control"],["type","number","placeholder","Edad","formControlName","edad",1,"form-control"],["type","number","placeholder","DNI","formControlName","dni",1,"form-control"],["type","file","formControlName","mainImg",1,"form-control",3,"change"],["type","email","placeholder","Email","formControlName","email",1,"form-control"],["type","password","placeholder","Contrase\xF1a","formControlName","password",1,"form-control"],["type","password","placeholder","Repita la contrase\xF1a","formControlName","repeatPassword",1,"form-control"],[3,"captchaValidated"],[1,"login-btns"],["type","submit",1,"btn","btn-success","btn-block",3,"disabled"],["type","file","formControlName","extraImg",1,"form-control",3,"change"],["type","text","placeholder","Obra Social","formControlName","obraSocial",1,"form-control"],["formArrayName","especialidades"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"form-group","text-center","d-flex","justify-content-evenly"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-primary",2,"margin-left","10px","margin-bottom","1em",3,"click"],[3,"formGroupName"],[1,"form-group",2,"display","flex","align-items","center","justify-content","space-evenly"],["formControlName","especialidad",1,"select-button"],["value","","disabled","","selected",""],[3,"value"],[1,"ml-2",2,"width","130px"],["type","button",1,"btn","btn-danger",2,"margin-left","10px","margin-bottom","1em",3,"click"]],template:function(i,a){i&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),s(6,"Registre su usuario"),o(),u(7,"br"),r(8,"div",6)(9,"button",7),_("click",function(){return a.switchView("paciente")}),u(10,"img",8)(11,"br"),r(12,"span"),s(13,"Paciente"),o()(),r(14,"button",7),_("click",function(){return a.switchView("especialista")}),u(15,"img",9)(16,"br"),r(17,"span"),s(18,"Especialista"),o()()(),g(19,De,4,0),u(20,"br")(21,"br"),g(22,Ye,37,12,"form",10),o()()()()()),i&2&&(b("ngClass",a.showForm?"vh-160":"vh-100"),d(19),c(19,a.showForm?-1:19),d(3),c(22,a.showForm?22:-1))},dependencies:[V,X,re,ae,I,Y,oe,M,K,R,ee,ne,te,ie,Me,Z,G,B,q,se],styles:['.container-fluid[_ngcontent-%COMP%]{background-color:#000;background-image:url("./media/fondo-celeste-V4ENMZBO.png");background-size:250px 250px;background-repeat:repeat;background-position:center;display:flex;flex-direction:column;align-items:center;padding:20px;margin:1%}.container-fluid[_ngcontent-%COMP%]{height:140vh;display:flex;align-items:center;justify-content:center}.form-container[_ngcontent-%COMP%]{margin-top:1em;margin-bottom:1em;justify-content:center}.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-bottom:1em}.card-body[_ngcontent-%COMP%]{padding:2em}.login-btns[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{margin-top:1em}.btn-switch[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn[_ngcontent-%COMP%]{border-radius:0!important}.btn-outline-primary[_ngcontent-%COMP%]{margin:.5em;width:250px}.form-container[_ngcontent-%COMP%]{background:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 10px #0000001a;width:90%;max-width:600px;text-align:center}.select-button[_ngcontent-%COMP%]{width:25px;height:40px;background-color:#add8e6}']});let n=l;return n})();export{It as RegisterComponent};