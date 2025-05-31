import { Routes } from '@angular/router';
import { MyLinkPageComponent } from "./pages/my-link-page/my-link-page.component";
import { HomeComponent } from "./pages/home/home.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";

export const routes: Routes = [
    {
        path: '',
        component: MyLinkPageComponent 
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    }
];
