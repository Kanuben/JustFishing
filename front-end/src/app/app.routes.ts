import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CatchPageComponent } from './catch-page/catch-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        canActivate: [authGuard],
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: HomepageComponent,
        canActivate: [authGuard],
    },
    {
        path: 'catchPage',
        component: CatchPageComponent,
        canActivate: [authGuard],
    }
];
