import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(), 
    provideToastr(),
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({"projectId":"clinica-3c199","appId":"1:843286763763:web:20326de4d5d4168fcebf86","storageBucket":"clinica-3c199.appspot.com","apiKey":"AIzaSyARVYnrMWCFZLB64LouAFTOxtRpl__n98s","authDomain":"clinica-3c199.firebaseapp.com","messagingSenderId":"843286763763"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
