import { Component } from '@angular/core';
import { TopBarComponent } from "../../components/top-bar/top-bar.component";
import { UserProfileComponent } from "../../components/user-profile/user-profile.component";

@Component({
  selector: 'app-my-link-page',
  imports: [TopBarComponent,UserProfileComponent],
  templateUrl: './my-link-page.component.html',
  styleUrl: './my-link-page.component.scss'
})
export class MyLinkPageComponent {

}
