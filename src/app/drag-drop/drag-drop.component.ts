import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormsBackService } from '../forms-back.service/forms-back.service';
import { CdkDragSortEvent } from '@angular/cdk/drag-drop';
import { Formulario } from './formulario.interface';

@Component( {
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: [ './drag-drop.component.sass' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DragDropComponent implements OnInit {
  private arrayForms: Formulario[];
  private newForm: Formulario = {
    id: 0,
    idx: 0,
    nombre: '',
    color: '',
  };

  constructor(
    private formsBackService: FormsBackService
  ) { }

  ngOnInit() {
    this.initFillArrayForms();
  }

  private drop( event: CdkDragSortEvent<Formulario> ) {
    const {
      previousIndex: idxElementoOrigen,
      currentIndex: idxElementoDestino
    } = event;
    const idxElementoArrastrado: number = this.arrayForms[ idxElementoOrigen ].idx;
    const idxElementoSoltado: number = this.arrayForms[ idxElementoDestino ].idx;

    // Guardamos el index del elemento arrastrado para evitar que al intercambiar los index se guarden mal, sucede así:
    /*    Arrastramos patata ha melon idx:0 a idx:2
                                           ┌────────────────── Intercambio (automatico) ───────────┐
                      ┌─  propiedades ─┐   │ 1º patata a melon  -  2º melon a patata (automatico)  │
    Posición en array  - │ idx -  nombre  │ - │ 1º paso de idx     -  2º paso de idx (automatico)     │ - Resultado (no deseado)
          0             0     patata  o┐          0   o┐                 0 <┐                               0
          1             1     piña     │          1    │                 1  │                               1
          2             2     melon   <┘          0   <┘                 0 o┘                               0

    Para evitar que se sobreescriban los indices deben ser guardados en variables para ser tomados como referencia.
    */

    this.arrayForms[ idxElementoOrigen ].idx = idxElementoSoltado;
    this.arrayForms[ idxElementoDestino ].idx = idxElementoArrastrado;
    this.arrayForms.sort( ( a: Formulario, b: Formulario ) => a.idx - b.idx );

    /*
    Así es como se haría en javascript pero para evitar peticiones pesadas quizas sería mejor que esta lógica
    estuviese en el back de forma que solo habria que pasar el event.previousIndex y event.currentIndex
    el back asignaría los nuevos index, nos devolvería la lista de formularios y el front la ordenaría por la propiedad
    idx.

    Así se enviaría una sola petición al back por cada cambio efectivo con un peso mínimo.
    */

    const formsIDandIDXsortedByID =
      this.arrayForms
        .map( a => ( { id: a.id, idx: a.idx } ) )
        .sort( ( a, b ) => a.id - b.id );

    console.log( formsIDandIDXsortedByID );

    this.formsBackService.sendToServer( formsIDandIDXsortedByID );
  }
  private nuevoFormulario() {
    this.newForm.id = this.arrayForms.length + 1;
    this.arrayForms.push( { ...this.newForm } )
  }
  private fillArrayForms() {
    this.arrayForms = this.formsBackService.jaBackForms;
    this.arrayForms.sort( ( a: Formulario, b: Formulario ) => a.idx - b.idx );
  }
  public initFillArrayForms() {
    this.fillArrayForms();
  }


}
