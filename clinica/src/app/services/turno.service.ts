import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData , addDoc} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { TurnoModel } from '../models/turno';

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
}
