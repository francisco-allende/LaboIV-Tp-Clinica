import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

const STORAGE_KEY = "current-user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public firestore: Firestore,
    public auth: Auth, 
    public toast: ToastrService,
    public router: Router) { }

  
  addToLogger(emailValue:string){
    try{
      let col = collection(this.firestore, 'logs');
      addDoc(col, { userEmail: emailValue, fecha: new Date()});
    }catch(error){
      console.error('Error en el add a los logs:', error);
    }
  }

  login(userData: {user: string, password: string}) {
    const userDataString = JSON.stringify(userData);
    localStorage.setItem(STORAGE_KEY , userDataString);
  }

  getUser() {
    const userData = localStorage.getItem(STORAGE_KEY);
    return userData ? JSON.parse(userData) : null;
  }

}