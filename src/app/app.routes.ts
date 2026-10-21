import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Eventos } from './pages/eventos/eventos';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "eventos",
        component: Eventos
    }
];
