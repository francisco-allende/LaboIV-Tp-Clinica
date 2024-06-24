import { DayModel } from "./day";

export interface HistoriaClinicaModel {
    fecha: DayModel; 
    altura: number; 
    peso: number; 
    temperatura: number; 
    presion: string; 
    datosDinamicos?: { key: string, value: string }[]; 
  }
  