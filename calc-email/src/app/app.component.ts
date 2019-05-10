import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  risultato: number;
  numero1: number;
  numero2: number;
  arrayNumeri: number[];

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'numero1': ['0', Validators.required], 'numero2': ['0', Validators.required]
    });
  }

  somma() {
    if(this.myForm.valid) {
      this.numero1 = Number(this.myForm.controls['numero1'].value);
      this.numero2 = Number(this.myForm.controls['numero2'].value);
      this.risultato = Number(this.myForm.controls['numero1'].value) + Number(this.myForm.controls['numero2'].value);

      this.vettoreNumeri(this.numero1, this.numero2);
    }

    return false;
  }

  sottrazione() {
    if(this.myForm.valid) {
      this.numero1 = Number(this.myForm.controls['numero1'].value);
      this.numero2 = Number(this.myForm.controls['numero2'].value);
      this.risultato = Number(this.myForm.controls['numero1'].value) - Number(this.myForm.controls['numero2'].value);

      this.vettoreNumeri(this.numero1, this.numero2);
    }

    return false;
  }

  moltiplicazione() {
    if(this.myForm.valid) {
      this.numero1 = Number(this.myForm.controls['numero1'].value);
      this.numero2 = Number(this.myForm.controls['numero2'].value);
      this.risultato = Number(this.myForm.controls['numero1'].value) * Number(this.myForm.controls['numero2'].value);

      this.vettoreNumeri(this.numero1, this.numero2);
    }

    return false;
  }

  divisione() {
    if(this.myForm.valid) {
      this.numero1 = Number(this.myForm.controls['numero1'].value);
      this.numero2 = Number(this.myForm.controls['numero2'].value);
      this.risultato = Number(this.myForm.controls['numero1'].value) / Number(this.myForm.controls['numero2'].value);

      this.vettoreNumeri(this.numero1, this.numero2);
    }

    return false;
  }

  vettoreNumeri(n1: number, n2:number){

      if (n1 > n2) {
          let a = n2;
          n2 = n1;
          n1 = a;
      }

      this.arrayNumeri = new Array<number>();

      for(let i = n1; i <=n2; i++)
      {
          this.arrayNumeri.push(i);
      }
  }

}
