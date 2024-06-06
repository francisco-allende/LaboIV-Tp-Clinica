import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, query, orderBy, limit, where, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userRol:string='';

  constructor(private firestore: Firestore) { }

  setUserRol = (rol:string) => this.userRol = rol;
  getUserRol = ():string => this.userRol;

  async getAllUsers():Promise<any> {

    const col = collection(this.firestore, 'users');
    
    try {
        const querySnapshot = await getDocs(col);
        const users:any = [];
        querySnapshot.forEach((doc) => {
            users.push(doc.data());
        });
        return users;
    } catch (error) {
        console.error('Error obteniendo los usuarios:', error);
        throw error;
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
}
