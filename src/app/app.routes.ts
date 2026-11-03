import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Eventos } from './pages/eventos/eventos';
import { Contratos } from './atividadeEntregaAula11/contratos/contratos';
import { Fornecedores } from './atividadeEntregaAula11/fornecedores/fornecedores';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "eventos",
        component: Eventos
    },
    {
        path: "contratos",
        component: Contratos
    },
    {
        path: "fornecedores",
        component: Fornecedores
    }
];
