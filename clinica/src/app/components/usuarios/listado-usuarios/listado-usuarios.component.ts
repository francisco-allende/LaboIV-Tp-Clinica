import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [SpinnerComponent],
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

  get pagedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.users.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.users.length / this.pageSize);
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  async changeState(user:UserModel, state:string){
    user.estado = state;
    await this.usersService.update(user);
  }
}
