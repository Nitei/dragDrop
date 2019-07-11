import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormsBackService } from '../forms-back.service/forms-back.service';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragDropComponent implements OnInit {
  private arrayForms: object[];

  constructor(
    private formsBackService: FormsBackService
  ) { }

  ngOnInit() {
    this.initFillArrayForms();
  }
  private fillArrayForms() {
    this.arrayForms = this.formsBackService.jaBackForms;
  }
  public initFillArrayForms() {
    this.fillArrayForms();
  }


}
