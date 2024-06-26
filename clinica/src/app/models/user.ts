import { DayModel } from "./day";
import { HistoriaClinicaModel } from "./historia-clinica";

export interface UserModel{
    nombre: string;
    apellido: string;
    edad: number;
    dni: string;
    email: string;
    password: string;
    rol:string;
    mainImg: string; 
    extraImg?: string;
    obraSocial? : string;
    especialidad?: string[];
    estado : string;
    turnos?: string[]; //array de ids de turnos del paciente
    horarios?: DayModel []; //horarios del especialista
    historiaClinica?: HistoriaClinicaModel[]; // historia clínica del paciente
}