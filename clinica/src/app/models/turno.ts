import { DayModel } from "./day";
import { HistoriaClinicaModel } from "./historia-clinica";

export interface TurnoModel {
    id: string; //El id es paciente + especialista + fecha o random num
    fecha: DayModel;
    especialistaId: string; // es el email
    pacienteId: string; // es el email
    especialidad: string;
    estado: string; // 'pendiente', 'confirmado', 'cancelado', 'rechazado', 'finalizado'
    comentario: string;
    resenia: string;
    historiaClinica: HistoriaClinicaModel;
}
