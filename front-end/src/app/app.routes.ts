import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CatchPageComponent } from './pages/catch-page/catch-page.component';

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
