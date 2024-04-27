import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {NgClass, NgStyle} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ThemeStoreService} from "../../../store/theme-store.service";
import {Router} from "@angular/router";
import {BtnThemingService} from "./btn-theming.service";
import {VisibilityDirective} from "../../../../_core/directives/visibility.directive";

@Component({
  selector: 'qpuc-btn-theming',
  standalone: true,
  imports: [
    MatButtonModule,
    NgStyle,
    NgClass,
    VisibilityDirective
  ], animations: [
    trigger('selected', [
      state('select', style({
        backgroundColor: '#ffd600',
        color: '#000'
      })),
      state('not', style({
        backgroundColor: '#131432',
        color: '#ffd600'
      })),
      transition('select=>not', [animate('1s')]),
      transition('not=>select', [animate('1s')]),
    ]),
  ],
  template: `
    <div class="container"
         [visibility]="!visible"
    >
      <button mat-stroked-button color="accent"
              class="box"
              [@selected]="selected?'select':'not'"
              [disabled]="disabled"
              (click)="handleSelect();selected=true"
      >
        <p>{{ theme.split('et')[0]}}</p>
        <p>et</p>
        <p>{{ theme.split('et')[1]}}</p>
        <div class="box_content">
        </div>
      </button>
    </div>
  `,
  styleUrl: './btn-theming.component.scss'
})
export class BtnThemingComponent {

  @Input() visible!: boolean ;
  @Input() disabled!: boolean ;
  @Input('theming') theme!: string;

  @Output() disabledChanges=new EventEmitter<void>();
  $themeStore=inject(ThemeStoreService);
  $audioThemes=inject(BtnThemingService)

  $router=inject(Router);
  selected = false;


  handleSelect() {
    if(!this.selected){
      this.disabledChanges.emit()
      this.$audioThemes.selectedTheme();
      this.$themeStore.selectedTheme(this.theme);
    }
  }
}
