import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, query, orderBy, limit, where, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser:string='';

  constructor(public firestore: Firestore,
    public auth: Auth, 
    public toast: ToastrService,
    public router: Router) { }

    setLoggedUser = (email:string) => this.loggedUser = email;
    getLoggedUser = ():string => this.loggedUser;

    addToLogger(emailValue:string){
      try{
        let col = collection(this.firestore, 'logs');
        addDoc(col, { userEmail: emailValue, fecha: new Date()});
      }catch(error){
        console.error('Error en el add a los logs:', error);
      }
    }

    login(userLogin:UserModel){
      signInWithEmailAndPassword(this.auth, userLogin.email, userLogin.password).then((res)=> {
        if(res.user.email != null){
          this.toast.success(`Nos alegra verte de nuevo ${res.user.email}`);
          this.router.navigateByUrl('/home');
        } 
      }).catch((error) => {
        switch (error.code) {
          case "auth/invalid-credential":
            this.toast.error("Usuario inexistente"); 
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

    getUser(){
      return true;
    }

    register(newUser:UserModel){
      createUserWithEmailAndPassword(this.auth, newUser.email, newUser.password).then((res)=> {
        if(res.user.email != null){
          this.toast.success('Usuario creado con éxito', `Bienvenido ${res.user.email}!`);
          this.router.navigateByUrl('/home');
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
