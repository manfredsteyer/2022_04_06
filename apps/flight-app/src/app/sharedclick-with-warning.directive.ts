/* eslint-disable @angular-eslint/directive-selector */
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[clickWithWarning]'
})
export class SharedclickWithWarningDirective {

  @Input() warning = 'Sure?';
  @Output() clickWithWarning = new EventEmitter<void>();

  @HostBinding('class') hostClass = 'btn btn-danger';

  @HostListener('click', ['$event'])
  handleClick($event: MouseEvent): void {
    if ($event.shiftKey || confirm(this.warning)) {
      this.clickWithWarning.emit();
    }
  }

  // constructor() { }

}
