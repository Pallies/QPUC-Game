import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {TakeOrLeaveService} from "./take-or-leave.service";
import {NgStyle} from "@angular/common";
import {VisibilityDirective} from "../../../../_core/directives/visibility.directive";

@Component({
  selector: 'qpuc-btn-take-leave',
  standalone: true,
  providers: [TakeOrLeaveService],
  imports: [
    MatButton,
    NgStyle,
  ],
  template: `
    <div>
        <span>
          <button mat-raised-button color="secondary"
                  (click)="$takeOrLeave.takeOrLeave(left?1:0);choice.emit()">Prends</button>

          <button mat-raised-button color="warn"
                  (click)="$takeOrLeave.takeOrLeave(right?1:0);choice.emit()">Laisse</button>
        </span>
    </div>
  `,
  styles: [`
    button {
      margin: 1rem;
    }
  `]
})
export class BtnTakeLeaveComponent implements OnInit {
  $takeOrLeave = inject(TakeOrLeaveService);


  @Input() right: boolean = false;
  @Input() left: boolean = false;
  @Output() choice: EventEmitter<void> = new EventEmitter<void>()

  ngOnInit(): void {
    if (this.right == this.left)
      throw new Error('right and left cannot be equal')
  }
}
