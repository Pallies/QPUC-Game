import {
  Directive,
  ElementRef, EventEmitter,
  inject,
  Input,
  input,
  OnChanges, Output,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Directive({
  selector: '[qpucRectangle]',
  standalone: true
})
export class RectangleDirective implements OnChanges {

  @Input() qpucRectangle!: boolean;
  @Output() next = new EventEmitter<void>()
  height: number = 100;
  el = inject(ElementRef)
  timerId: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.qpucRectangle) {

      this.timerId = setInterval(() => {
        if (this.height <= 0)
          return this.next.emit()

        this.el.nativeElement.style.setProperty('--height-after', (--this.height + '%'));
      }, 100);
    } else {
      if (this.timerId)
        clearInterval(this.timerId);
    }
  }
}
