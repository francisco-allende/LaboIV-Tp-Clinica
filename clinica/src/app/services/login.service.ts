import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, query, orderBy, limit, where, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendEmailVerification,  } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EspecialistaModel } from '../models/especialista';
import { PacienteModel } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser:string='';
  userRol:string='';

  constructor(public firestore: Firestore,
    public auth: Auth, 
    public toast: ToastrService,
    public router: Router) { }

    setLoggedUser = (email:string) => this.loggedUser = email;
    getLoggedUser = ():string => this.loggedUser;

    setUserRol = (rol:string) => this.userRol = rol;
    getUserRol = ():string => this.userRol;

    addToLogger(emailValue:string){
      try{
        let col = collection(this.firestore, 'logs');
        addDoc(col, { userEmail: emailValue, fecha: new Date()});
      }catch(error){
        console.error('Error en el add a los logs:', error);
      }
    }

    async getUserByEmail(email: string): Promise<any> {
      try {
        const col = collection(this.firestore, 'users');
        const q = query(col, where('email', '==', email));
        const querySnapshot = await getDocs(q);
  
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();
          this.setUserRol(userData['rol']);
          return { ...userData } as any;
        } else {
          return null;
        }
      } catch (error) {
        console.error("Error al obtener el usuario via email: ", error);
        return null;
      }
    }

    login(email:string, password:string){
      signInWithEmailAndPassword(this.auth, email, password).then((res)=> {
        if(res.user.email != null){
          this.setLoggedUser(res.user.email);
          this.toast.success(`Nos alegra verte de nuevo ${res.user.email}`);
          this.router.navigateByUrl('/home');
        } 
      }).catch((error) => {
        switch (error.code) {
          case "auth/invalid-credential":
            this.toast.error("Usuario inexistente o contraseña incorrecta"); 
            break;
          default:
            this.toast.error("Sucedió un error al intentar loguearse");
          break;
        }
        console.log(`error en el login: ${error.code}`)
      })
    }

    logOut(){
      signOut(this.auth).then(() => {
        this.setLoggedUser('');
      })
    }

    async register(newUser: any){

      createUserWithEmailAndPassword(this.auth, newUser.email, newUser.password).then((res)=> {
        if(res.user.email != null){
          this.setLoggedUser(res.user.email);
          let col = collection(this.firestore, 'users');
          if(newUser.rol == "paciente"){
            addDoc(col, { 
              nombre: newUser.nombre,
              apellido: newUser.apellido,
              edad: newUser.edad,
              dni: newUser.dni,
              obraSocial: newUser.obraSocial,
              email: newUser.email,
              password: newUser.password,
              imgPerfilFirst: newUser.imgPerfilFirst, 
              imgPerfilSecond: newUser.imgPerfilSecond, 
              rol:  newUser.rol
            });
          }else if(newUser.rol == "especialista"){
            addDoc(col, { 
              nombre: newUser.nombre,
              apellido: newUser.apellido,
              edad: newUser.edad,
              dni: newUser.dni,
              especialidad: newUser.especialidad,
              email: newUser.email,
              password: newUser.password,
              imgPerfil: newUser.imgPerfil,
              rol:  newUser.rol,
              estado:newUser.estado,
            });
          }else if(newUser.rol == "admin"){
            addDoc(col, { 
              nombre: newUser.nombre,
              apellido: newUser.apellido,
              edad: newUser.edad,
              dni: newUser.dni,
              email: newUser.email,
              password: newUser.password,
              imgPerfilAdmin: newUser.imgPerfilAdmin,
              rol:  newUser.rol,
            });
          }
          this.toast.success('Usuario creado con éxito', `Enviamos un mail de verificacion a ${res.user.email}`);
          this.router.navigateByUrl('/enviar_email');
          sendEmailVerification(res.user);
        } 
      }).catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            this.toast.error("Email invalido"); 
            break;
          case "auth/email-already-in-use":
            this.toast.error("Email ya en uso"); 
            break;
          default:
            this.toast.error("Sucedió un error inesperado"); 
            console.log(error)
            break;
        }
      });
    }
}
