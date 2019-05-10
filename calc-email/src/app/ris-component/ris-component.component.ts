import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ris-component',
  templateUrl: './ris-component.component.html',
  styleUrls: ['./ris-component.component.css']
})
export class RisComponentComponent implements OnInit {

  @Input() risultato: number;
  @Input() arrayNumeri: number[];
  myForm: FormGroup;

  hideEmail: Boolean = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'email': ['example@email.com', Validators.email]
    });
  }

  ngOnInit() {
  }

  toggleVar(){
    if(!this.hideEmail){
      this.hideEmail = true;
    }
    else {
      this.hideEmail = false;
    }
  }

  onSubmit(value: string){
    if(this.myForm.valid) {
      console.log('Mail inviata a: ' + this.myForm.controls['email'].value);
    }
    else {
      console.log('Non hai inserito una mail valida');
    }
  }

}
