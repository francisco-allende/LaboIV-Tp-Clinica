import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor(private recaptchaService: ReCaptchaV3Service, private http: HttpClient, private toast:ToastrService) { }
  
  getToken(): Observable<any> {
    return new Observable(observer => {
      this.recaptchaService.execute('homepage').subscribe({
        next: (token) => {
          observer.next(token); 
          this.validateToken(token);
          observer.complete(); 
        },
        error: (error) => {
          console.error('Error al ejecutar el CAPTCHA', error);
          observer.error(error); 
        }
      });
    });
  }

  validateToken(token: string): Promise<boolean> {
    const secretKey = '6Lc8cPMpAAAAAJ9F_atT7w3Eo_qTl3brS5KnTV9v';
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    return new Promise((resolve, reject) => {
      this.http.post(verifyUrl, {}).subscribe(
        (response: any) => {
          if (response.success) {
            this.toast.success('Captcha validado con éxito');
            resolve(true);
          } else {
            this.toast.error('Fallo en la validación del captcha');
            console.error('Fallo en la validación del captcha: ', response['error-codes']);
            resolve(false);
          }
        },
        error => {
          console.error('Error al validar el captcha: ', error);
          reject(error);
        }
      );
    });
  }
}
