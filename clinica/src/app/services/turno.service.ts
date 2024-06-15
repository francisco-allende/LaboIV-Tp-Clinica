import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData , addDoc, query, getDocs, updateDoc, where} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { TurnoModel } from '../models/turno';
import { user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private firestore:Firestore) {}

  getAllTurnos(): Observable<any[]> {
    const col = collection(this.firestore, 'turnos');
    return collectionData(col);
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
        reseña: turno.reseña
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
          reseña: turno.reseña, 
          });
      } 
    } catch (error) {
      console.error('Error actualizando el turno:', error);
      throw error;
    }
  }
}
