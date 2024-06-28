import { animate, query, style, transition, trigger } from "@angular/animations";

export const routeTransition = trigger('routeTransition' ,[
    
  transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        query(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 })
        ], { optional: true }),
        query(':leave', [
          animate('200ms ease', style({ transform: 'translateX(-100%)', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('200ms ease', style({ transform: 'translateX(0)', opacity: 1 }))
        ], { optional: true })
      ])
      
])