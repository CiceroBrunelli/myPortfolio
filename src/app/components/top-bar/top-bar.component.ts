import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  imports: [RouterModule,ToggleSwitchModule,FormsModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  currentLang = 'pt';
  isPortuguese = this.currentLang === 'pt';

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('app-lang');
    this.currentLang = savedLang || 'pt';
    this.translate.use(this.currentLang);
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'pt' ? 'en' : 'pt';
    this.translate.use(this.currentLang);
    localStorage.setItem('app-lang', this.currentLang);
  }

}
