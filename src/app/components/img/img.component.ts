import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>', this.img);

    //? code
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png'
/*   counter = 0;
  counterFn: number | undefined; */

  constructor(){
    //? Before Render
    //! No correr nada - NO async -- once time  (una sola vez)
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    //? Before -during Render
    //? changes inputs -- times
    console.log('constructor', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void{
    //? Before Render
    //? async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    /* this.counterFn = window.setInterval(()=>{
      this.counter += 1;
      console.log('run counter');
    }, 1000) */
  }

  ngAfterViewInit(){
    //? after render
    //? handler children (manipulamos los hijos)
  }

  ngOnDestroy(){
    //? Delete
    console.log('ngOnDestroy');
    /* window.clearInterval(this.counterFn); */

  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('loaded');
    this.loaded.emit(this.img)
  }
}
