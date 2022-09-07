import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-componente',
  templateUrl: './inicio-componente.component.html',
  styleUrls: ['./inicio-componente.component.css'],
})
export class InicioComponente implements OnInit {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'Masculino';

  cambiarAltura(event: any) {
    // console.log(event.target.value);
    this.altura = event.target.value;
  }

  masculino() {
    this.sexo = 'Masculino';
  }

  femenino() {
    this.sexo = 'Femenino';
  }

  calcularBMI() {
    const BMI = this.peso / Math.pow(this.altura / 100, 2);
    console.log(BMI.toFixed(1));

    this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
