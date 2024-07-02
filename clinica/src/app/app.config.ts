import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY, } from 'ng-recaptcha';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import firebaseConfigBackup from './enviroments/backup';
import firebaseConfigMain from './enviroments/main';


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      RecaptchaV3Module
    ),
    {provide: RECAPTCHA_V3_SITE_KEY , useValue: '6Lc8cPMpAAAAAAQr6pkQIW6qsin3w2mwbbadP4pv'},
    provideHttpClient(),
    provideAnimations(), 
    provideToastr(),
    provideCharts(withDefaultRegisterables()),
    provideAuth(() => getAuth()), 
    provideRouter(routes, withViewTransitions(
    )), 
    provideFirestore(() => getFirestore()), 
    provideFirebaseApp(() => initializeApp(firebaseConfigBackup)), 
    provideStorage(() => getStorage()), provideAnimationsAsync()
    ],
};
