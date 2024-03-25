import {Directive, ElementRef, inject, Input, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[qpucHexagon]',
  standalone: true
})
export class HexagonDirective {

  @Input() qpucHexagon!:number;

  $element=inject(ElementRef)
  $renderer=inject(Renderer2)

  ngOnChanges(changes: SimpleChanges) {
    if (this.qpucHexagon>=+this.$element.nativeElement.outerText) {
      this.$renderer.addClass(this.$element.nativeElement,  'valid');
    }else if(this.$element.nativeElement.classList.contains('valid')){
      this.$element.nativeElement.classList.remove('valid')
    }
  }

}
