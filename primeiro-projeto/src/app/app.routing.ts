import { RotasLoginComponent } from './rotas-login/rotas-login.component';
import { Routes, RouterModule } from '@angular/router';
import { RotasHomeComponent } from './rotas-home/rotas-home.component';
import { RotasCursosComponent } from './rotas-cursos/rotas-cursos.component';
import { ModuleWithProviders } from '@angular/core';
import { RotasCursoDetalheComponent } from './rotas-curso-detalhe/rotas-curso-detalhe.component';

const APP_ROUTES: Routes = [
    { path: "", component: RotasHomeComponent },
    { path: "login", component: RotasLoginComponent },
    { path: "cursos", component: RotasCursosComponent },
    { path: "curso/:id", component: RotasCursoDetalheComponent }
];
//forRoot - Rotas principais da aplicação
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);