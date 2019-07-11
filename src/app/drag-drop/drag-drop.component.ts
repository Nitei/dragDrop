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
  private arrayForms: object[] = [];
  private newForm = {
    id: 0,
    idx: 0,
    first: ''
  };

  constructor(
    private formsBackService: FormsBackService
  ) { }

  ngOnInit() {
    this.initFillArrayForms();
  }
  drop( event: CdkDragDrop<any> ) {
    moveItemInArray( this.arrayForms, event.previousIndex, event.currentIndex );
    this.arrayForms = this.formsBackService.Indizador( this.arrayForms )
  }
  private nuevoFormulario() {
    this.newForm.id = this.arrayForms.length + 1;
    this.arrayForms.push( { ...this.newForm } )
    this.formsBackService.Indizador( this.arrayForms )
  }
  private fillArrayForms() {
    this.arrayForms = this.formsBackService.jaBackForms;
  }
  public initFillArrayForms() {
    this.fillArrayForms();
  }


}
