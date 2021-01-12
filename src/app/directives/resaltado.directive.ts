import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Resaltado]'
})
export class ResaltadoDirective {

  @Input() Resaltado:string = 'yellow';

  constructor(
    private el:ElementRef
  ) { 
    el.nativeElement.style.marginTop = '10px';
  }

  @HostListener('mouseenter') mouseEntro(){
    this.el.nativeElement.style.backgroundColor = this.Resaltado;
  }

  @HostListener('mouseleave') mouseLeave(){
    this.el.nativeElement.style.backgroundColor = null;
  }

}
