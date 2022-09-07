import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponente } from './components/inicio-componente/inicio-componente.component';
import { ResultadoComponente } from './components/resultado-componente/resultado-componente.component';

@NgModule({
  declarations: [AppComponent, InicioComponente, ResultadoComponente],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
