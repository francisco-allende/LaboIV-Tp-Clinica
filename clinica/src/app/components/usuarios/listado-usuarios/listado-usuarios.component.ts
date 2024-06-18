import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { PaginationComponent } from '../../paginacion/paginacion.component';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [SpinnerComponent, PaginationComponent],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {
  users:UserModel[] = [];
  loading: boolean = true;
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(public usersService: UserService) {}

  ngOnInit(): void{
    this.getData();
  }
  
  async getData(){
    try{
      this.users =  await this.usersService.getAllUsers();
    }catch(error){
      console.log(error)
    }finally{
      this.loading = false;
    }
  }

  async changeState(user:UserModel, state:string){
    user.estado = state;
    await this.usersService.update(user);
  }

  get pagedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.users?.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    if(this.users){
      return Math.ceil(this.users.length / this.pageSize);
    } else {
      return 0;
    }
  }

  setPage(page: number) {
    this.currentPage = page;
  }
}
