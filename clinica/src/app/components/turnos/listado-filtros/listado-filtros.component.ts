import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TurnoModel } from '../../../models/turno';

@Component({
  selector: 'app-listado-filtros',
  standalone: true,
  imports: [],
  templateUrl: './listado-filtros.component.html',
  styleUrl: './listado-filtros.component.css'
})
export class ListadoFiltrosComponent {

  @Input() currentRol:string | undefined= '';
  @Input() turnos:TurnoModel[] | undefined = [];
  @Input() filteredTurnos: TurnoModel[] | undefined = [];
  @Input() userMap: { [email: string]: string } = {};
  @Input() especialidadFilter: string = '';
  @Input() especialistaFilter: string = '';
  @Input() pacienteFilter: string = '';
  @Output() filterApplied = new EventEmitter<{ especialidadFilter: string, especialistaFilter: string, pacienteFilter:string }>();
  @Output() filtersCleared = new EventEmitter<void>();


  setFilter(filterType: string, filterValue: string) {
    if (filterType === 'especialidad') {
      this.especialidadFilter = filterValue;
    } else if (filterType === 'especialista') {
      this.especialistaFilter = this.userMap[filterValue];
    }else if(filterType == 'paciente'){
      this.pacienteFilter = this.userMap[filterValue];
    }
  }

  applyFilters() {
    this.filterApplied.emit({ especialidadFilter: this.especialidadFilter, especialistaFilter: this.especialistaFilter, pacienteFilter: this.pacienteFilter });
  }

  clearFilters() {
    this.especialidadFilter = '';
    this.especialistaFilter = '';
    this.pacienteFilter = '';
    this.filtersCleared.emit();
  }
}
