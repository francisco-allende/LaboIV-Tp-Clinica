export interface TimeSlot {
    time: string;
    estaDisponible: boolean;
  }

export interface DayModel{
    dayName: string;
    desde: string;
    hasta: string;
    fecha: string;
    estaDisponible: boolean;
    timeSlot: TimeSlot;
    timeSlots?: TimeSlot[]
}