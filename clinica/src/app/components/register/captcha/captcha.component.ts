import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ReCaptchaV3Service, RecaptchaModule } from "ng-recaptcha";
import { CaptchaService } from '../../../services/captcha.service';
import { faL } from '@fortawesome/free-solid-svg-icons';
import {  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createCanvas } from 'canvas';

@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [RecaptchaModule, ReactiveFormsModule, FormsModule],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.css'
})
export class CaptchaComponent {
  invalid:boolean = false;
  wasClicked:boolean = false;
  captchaText: string = '';
  enteredCaptcha: string = '';
  captcha: any = [];
  generateCaptcha: any;
  captchaForDirective: any;
  @Output() captchaValidated = new EventEmitter<boolean>();
  @ViewChild('captchaCanvas') captchaCanvasRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createCaptcha();
  }

  onChange(value: any) {
    if (value.length === 6) {
      setTimeout(() => {
        this.captchaForDirective = this.enteredCaptcha;
      }, 200);
    }
  }

  validateCaptcha() {
    const captchaVerified = this.enteredCaptcha === this.captcha;
    this.wasClicked = true;
    if(captchaVerified){
      this.invalid = false;
      this.captchaValidated.emit(captchaVerified);
    }else{
      this.invalid = true;
    }
  }

  createCaptcha() {
    this.generateCaptcha = true;

    const canvas = createCanvas(150, 50);
    const context = canvas.getContext('2d');

    context.font = '30px Arial';
    context.fillStyle = 'black';

    const captcha = [];
    for (let q = 0; q < 6; q++) {
      if (q % 2 === 0) {
        captcha[q] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      } else {
        captcha[q] = Math.floor(Math.random() * 10 + 0).toString();
      }
    }
    const theCaptcha = captcha.join('');
    this.captcha = theCaptcha;

    context.fillText(theCaptcha, 10, 35);

    const captchaImage = new Image();
    captchaImage.src = canvas.toDataURL();

    const captchaCanvas = this.captchaCanvasRef.nativeElement;
    const ctx = captchaCanvas.getContext('2d');
    ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
    captchaImage.onload = () => {
      ctx.drawImage(captchaImage, 0, 0);
    };
  }

  newCaptcha(captcha: any) {
    this.captcha = captcha;
  }

  captchaResultDirective(captchaResult: any) {
    this.captchaValidated.emit(captchaResult);
  }
}
