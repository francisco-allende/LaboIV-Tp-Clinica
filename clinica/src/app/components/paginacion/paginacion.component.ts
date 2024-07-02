import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CursorPointerDirective } from '../../directives/cursor-pointer.directive';

@Component({
  selector: 'app-paginacion',
  standalone: true,
  imports: [CursorPointerDirective],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.css'
})
export class PaginationComponent {

  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Output() pageChanged = new EventEmitter<number>();

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setPage(page: number) {
    this.pageChanged.emit(page);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChanged.emit(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.pageChanged.emit(this.currentPage - 1);
    }
  }
}
