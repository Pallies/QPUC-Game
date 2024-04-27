import {Directive, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[qpucRectangle]',
  standalone: true,
})
export class RectangleDirective implements OnChanges {
  @Input() qpucRectangle!: boolean|undefined;
  @Output() next: EventEmitter<boolean> = new EventEmitter<boolean>()
  height: number = 100;
  el: ElementRef;
  timerId!: number;
  init: boolean = false

  constructor(private elementRef: ElementRef) {
    this.el = elementRef;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['qpucRectangle'].currentValue==undefined) {
      if (this.timerId) {
        window.clearInterval(this.timerId);
      }
      this.height = 100;
      this.el.nativeElement.style.setProperty('--height-after', (this.height + '%'))
      return;
    }
    this.qpucRectangle && this.height>=0 ? this.startTimer() : this.cancelTimer();
  }

  private startTimer() {
    this.timerId = setInterval(() => {
      if (this.height <= 0) {
        clearInterval(this.timerId);
        this.next.emit(true);
      }
      this.el.nativeElement.style.setProperty('--height-after', (--this.height + '%'));
    }, 97);
  }

  private cancelTimer() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
    if (this.height < 0) {
      this.next.emit(true);
    }
  }
}
