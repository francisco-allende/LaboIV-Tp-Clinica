import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData , addDoc} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(private firestore:Firestore) {}

  getAllEspecialidades(): Observable<string[]> {
    const col = collection(this.firestore, 'especialidades');
    return collectionData(col).pipe(
      map(especialidades => especialidades.map(especialidad => especialidad['especialidad']))
    );
  }

  altaEspecialidad(especialidad:string){
    try{
      const col = collection(this.firestore, 'especialidades');
      addDoc(col, { especialidad: especialidad});
    }catch(error){
      console.error('Error en el alta de especialidad:', error);
    }
  }

}
