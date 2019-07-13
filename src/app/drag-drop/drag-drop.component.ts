import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormsBackService } from '../forms-back.service/forms-back.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component( {
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: [ './drag-drop.component.sass' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DragDropComponent implements OnInit {
  arrayForms: object[] = [];
  originalArr;
  private newForm = {
    id: 0,
    idx: 0,
    nombre: ''
  };

  constructor(
    private formsBackService: FormsBackService
  ) { }

  ngOnInit() {
    this.initFillArrayForms();
  }



  drop( event: CdkDragDrop<any> ) {

    const arrAnterior: any = this.arrayForms[ event.previousIndex ];
    const arrActual: any = this.arrayForms[ event.currentIndex ];
    const idxAnterior: any = this.arrayForms[ event.previousIndex ].idx;
    const idxActual: any = this.arrayForms[ event.currentIndex ].idx;

    arrAnterior.idx = idxActual;
    arrActual.idx = idxAnterior;
    this.arrayForms.sort( ( a: any, b: any ) => a.idx - b.idx );

    // this.arrayForms = this.formsBackService.Indizador( this.arrayForms )
  }
  private nuevoFormulario() {
    this.newForm.id = this.arrayForms.length + 1;
    this.arrayForms.push( { ...this.newForm } )
    this.formsBackService.Indizador( this.arrayForms )
  }
  private fillArrayForms() {
    this.arrayForms = this.formsBackService.jaBackForms;
    this.originalArr = this.arrayForms.map( e => e );
  }
  public initFillArrayForms() {
    this.fillArrayForms();
  }


}
