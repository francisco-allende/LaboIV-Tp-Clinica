import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { routeTransition } from '../route-transitions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    routeTransition
  ]
})
export class AppComponent {
  outlet: RouterOutlet = new RouterOutlet;

  constructor(protected route:ActivatedRoute){}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
  title = 'clinica';
}
