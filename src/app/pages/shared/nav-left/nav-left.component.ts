import {Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {MatRipple} from "@angular/material/core";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-nav-left',
  imports: [
    CommonModule,
    MatList,
    MatListItem,
    MatRipple,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatLabel,
    MatFormField,
    MatIcon,
    MatInput,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './nav-left.component.html',
  styleUrl: './nav-left.component.scss'
})
export class NavLeftComponent {

}
