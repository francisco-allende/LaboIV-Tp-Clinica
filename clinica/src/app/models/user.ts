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
    turnos?: string[]; //array de ids de turnos
    horarios?:Date []| string [];
}