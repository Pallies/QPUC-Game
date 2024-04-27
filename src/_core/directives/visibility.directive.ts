import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[visibility]',
  standalone: true
})
export class VisibilityDirective implements OnChanges {

  @Input() visibility!: boolean;

  constructor(private el: ElementRef,private Renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.visibility ?
      this.Renderer.setStyle(this.el.nativeElement, 'visibility', 'visible') :
      this.Renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');
  }

}
