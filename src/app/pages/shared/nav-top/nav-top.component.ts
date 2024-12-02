import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-nav-top',
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './nav-top.component.html',
  styleUrl: './nav-top.component.scss'
})
export class NavTopComponent {

}
