import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  formulario = this.fb.group({
    check: [false,Validators.requiredTrue]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formulario.controls['check'].setValue(false)
    
    
    //this.formulario.controls['check'].disable()
  }

  submit(){
    console.log(this.formulario.value);
    console.log('formulario valido', this.formulario.valid);
  }


}
