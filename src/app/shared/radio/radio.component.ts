import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() value!: string;
  @Input() name!: string;

  selectedValue: string | null = null;
  disabled = false;

  ngControl: NgControl | null = null;

  constructor(private injector: Injector) { }

  ngOnInit(): void {
    try {
      this.ngControl = this.injector.get(NgControl, null);
      if (this.ngControl) {
        this.ngControl.valueAccessor = this;
      }
    } catch { }
  }
  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(val: string): void {
    this.selectedValue = val;
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

  select() {
    if (!this.disabled) {
      this.selectedValue = this.value;
      this.onChange(this.value);
      this.onTouched();
    }
  }

  isChecked(): boolean {
    return this.value === this.selectedValue;
  }


}
