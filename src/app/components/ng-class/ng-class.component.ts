import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  alerta: string = 'alert-danger';
  carga: boolean;
  propiedades = {
    'danger': false
  }

  constructor() { 
    this.carga = false;
  }

  ngOnInit(): void {
  }

  loading(){
    this.carga = true;
    setTimeout(() => {
      this.carga = false;
    }, 1000);
  }

}
