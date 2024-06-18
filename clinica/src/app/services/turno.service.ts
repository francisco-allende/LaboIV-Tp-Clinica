import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData , addDoc, query, getDocs, updateDoc, where} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { TurnoModel } from '../models/turno';
import { user } from '@angular/fire/auth';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private firestore:Firestore) {}

  getAllTurnos(): Observable<any[]> {
    const col = collection(this.firestore, 'turnos');
    return collectionData(col);
  }

  async getTurnosFromEspecialista(especialistaId:string): Promise<TurnoModel[] | undefined> {
    try{
      const col = collection(this.firestore, 'turnos');
      const q = query(col, where('especialistaId', '==', especialistaId));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const turnos: TurnoModel[] = [];
        querySnapshot.forEach((doc: any) => {
          turnos.push(doc.data());
        });
        return turnos;
      } else {
        return undefined;
      }
    }catch (error) {
      console.error("Error al obtener los turnos por paciente: ", error);
      return undefined;
    }
  }

  async getTurnosFromPaciente(pacienteId:string): Promise<TurnoModel[] | undefined> {
    try{
      const col = collection(this.firestore, 'turnos');
      const q = query(col, where('pacienteId', '==', pacienteId));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const turnos: TurnoModel[] = [];
        querySnapshot.forEach((doc: any) => {
          turnos.push(doc.data());
        });
        return turnos;
      } else {
        return undefined;
      }
    }catch (error) {
      console.error("Error al obtener los turnos por especialista: ", error);
      return undefined;
    }
  }

  altaTurno(turno:TurnoModel){
    try{
      const col = collection(this.firestore, 'turnos');
      addDoc(col, { 
        id: turno.id,
        fecha: turno.fecha,
        especialistaId: turno.especialistaId,
        pacienteId: turno.pacienteId,
        especialidad: turno.especialidad,
        estado: turno.estado, 
        comentario: turno.comentario,
        resenia: turno.resenia
      });
    }catch(error){
      console.error('Error en el alta del turno:', error);
    }
  }

  async update(turno:TurnoModel) {
    try {
      const col = collection(this.firestore, 'turnos');
      const q = query(col, where('id', '==', turno.id));

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, {   
          id: turno.id,
          fecha: turno.fecha,
          especialistaId: turno.especialistaId,
          pacienteId: turno.pacienteId,
          especialidad: turno.especialidad,
          estado: turno.estado,
          comentario: turno.comentario,
          resenia: turno.resenia, 
          });
      } 
    } catch (error) {
      console.error('Error actualizando el turno:', error);
      throw error;
    }
  }
}
