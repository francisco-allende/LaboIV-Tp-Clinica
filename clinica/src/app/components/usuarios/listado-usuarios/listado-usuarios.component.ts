import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {
  users:any[] = [];
  loading: boolean = false;

  constructor(public usersService: UsersService) {}

  ngOnInit(): void{
    this.getEsp();
    this.populateTable();
  }
  
  async getEsp(){
    this.users =  await this.usersService.getAllUsers()
  }

  async populateTable(){
   }

   loadData(arr:any, gameName:string){
   
   }
}
