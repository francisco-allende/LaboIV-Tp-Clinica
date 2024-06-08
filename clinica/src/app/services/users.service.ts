import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, query, orderBy, limit, where, getDocs, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { UserModel } from '../models/user';



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

   async update(user:UserModel) {
    try {
      const col = collection(this.firestore, 'users');
      const q = query(col, where('email', '==', user.email));

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, {   
          nombre: user.nombre,
          apellido: user.apellido,
          edad: user.edad,
          dni: user.dni,
          email: user.email,
          password: user.password,
          rol: user.rol,
          mainImg: user.mainImg, 
          extraImg: user.extraImg,
          obraSocial : user.obraSocial,
          especialidad: user.especialidad,
          estado : user.estado });
      } 
    } catch (error) {
      console.error('Error actualizando el usuario:', error);
      throw error;
    }
  }
}
