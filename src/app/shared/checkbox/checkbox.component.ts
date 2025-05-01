import { Component, forwardRef, Injector, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements OnInit,ControlValueAccessor {

  valor: boolean = false;
  disabled = false;
  ngControl: NgControl | null = null;

  constructor(private injector: Injector){
  }
  ngOnInit(): void {
    try {
      this.ngControl = this.injector.get(NgControl, null);
      if (this.ngControl) {
        this.ngControl.valueAccessor = this;
      }
    } catch {}
  }

  onChange = (value: any) => {
  };
  onTouched = () => {};

  writeValue(val: boolean): void {
    this.valor = !!val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onCheckboxChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valor = input.checked;
    this.onChange(this.valor); // notifica a Angular del nuevo valor booleano
  }

}
