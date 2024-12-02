import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavTopComponent} from "./pages/shared/nav-top/nav-top.component";
import {NavLeftComponent} from "./pages/shared/nav-left/nav-left.component";
import {ViewDashboardComponent} from "./pages/dashboard/view-dashboard/view-dashboard.component";
import {FooterComponent} from "./pages/shared/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavTopComponent, NavLeftComponent, ViewDashboardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'certihalal-spa-19';
}
