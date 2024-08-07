import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, query, orderBy, limit, where, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Auth, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendEmailVerification, onAuthStateChanged, User  } from '@angular/fire/auth';
import { browserLocalPersistence, browserSessionPersistence, setPersistence } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: BehaviorSubject<string | undefined | null> = new BehaviorSubject<string | undefined | null>(null);
  private loggedUserKey = 'loggedUserEmail';

  constructor(public firestore: Firestore,
    private auth: Auth, 
    private toast: ToastrService,
    private router: Router) 
    {
      this.configureAuthPersistence();
      onAuthStateChanged(this.auth, (user: User | null) => {
        if (user) {
          //this.loggedUser.next(user.email);
        } else {
          //this.loggedUser.next(null);
        }
      });
    }
  
    async configureAuthPersistence(): Promise<void> {
      try {
        await setPersistence(this.auth, browserLocalPersistence);
      } catch (error) {
        console.error('Error setting persistence:', error);
      }
    }

    setLoggedUser = (email:any) => this.loggedUser = email;
    getLoggedUser = ():any =>  localStorage.getItem(this.loggedUserKey);

    addToLogger(emailValue:string){
      try{
        let col = collection(this.firestore, 'logs');
        addDoc(col, { userEmail: emailValue, fecha: new Date()});
      }catch(error){
        console.error('Error en el add a los logs:', error);
      }
    }

    async getAllLogs():Promise<any>{
      try {
        let col = collection(this.firestore, 'logs');
        const querySnapshot = await getDocs(col);
        const logs:any = [];
        querySnapshot.forEach((doc) => {
            logs.push(doc.data());
        });
        return logs;
      } catch (error) {
          console.error('Error obteniendo los logs:', error);
          throw error;
      }
    }
    
    isEmailVerificated() : boolean | undefined{
      let u = getAuth()
      return u.currentUser?.emailVerified
    }

    async login(email:string, password:string){
      signInWithEmailAndPassword(this.auth, email, password).then((res)=> {
        if(res.user.email != null){
          if(this.isEmailVerificated()){
            this.addToLogger(res.user.email);
            this.setLoggedUser(res.user.email);
            localStorage.setItem(this.loggedUserKey, email);
            this.toast.success(`Nos alegra verte de nuevo ${res.user.email}`);
            this.router.navigateByUrl('/home');
          }else{
            this.toast.error('Debe validar su cuenta en su email para loguearse')
          }
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
        localStorage.removeItem(this.loggedUserKey);
        this.setLoggedUser('');
      })
    }

    async register(newUser: UserModel){

      createUserWithEmailAndPassword(this.auth, newUser.email, newUser.password).then((res)=> {
        if(res.user.email != null){
          this.setLoggedUser(res.user.email);
          let col = collection(this.firestore, 'users');
          addDoc(col, {
            nombre: newUser.nombre,
            apellido: newUser.apellido,
            edad: newUser.edad,
            dni: newUser.dni,
            email: newUser.email,
            password: newUser.password,
            rol: newUser.rol,
            mainImg: newUser.mainImg, 
            extraImg: newUser.extraImg ? newUser.extraImg : '',
            obraSocial : newUser.obraSocial,
            especialidad: newUser.especialidad,
            estado : newUser.estado,
            turnos: [],
            horarios: [],
            historiaClinica: []
          })
          
          this.toast.success('Usuario creado con éxito', `Enviamos un mail de verificacion a ${res.user.email}`);
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

    async getAllEasyLoginUsers():Promise<any> {

      const col = collection(this.firestore, 'users');
      
      try {
          const querySnapshot = await getDocs(col);
          const users:any = [];
          querySnapshot.forEach((doc) => {
              users.push(doc.data());
          });
      
          const enailsEasyLogin = ['medicodos@yopmail.com', 'pacientetres@yopmail.com', 'adminuno@yopmail.com', 'pacienteuno@yopmail.com', 'medicouno@yopmail.com', 'pacientedos@yopmail.com'];

          const usuariosFiltrados = users.filter((usuario: { email: string; }) => enailsEasyLogin.includes(usuario.email));
          
          return usuariosFiltrados;
      } catch (error) {
          console.error('Error obteniendo los usuarios:', error);
          throw error;
      }
    }
}
