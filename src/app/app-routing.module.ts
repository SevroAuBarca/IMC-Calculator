import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponente } from './components/inicio-componente/inicio-componente.component';
import { ResultadoComponente } from './components/resultado-componente/resultado-componente.component';

const routes: Routes = [
  { path: '', component: InicioComponente },
  { path: 'resultado/:valor', component: ResultadoComponente },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
