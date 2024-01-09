import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent_Factory } from './components/productos/productos.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EditarComponent } from './components/editar/editar.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent_Factory},
  {path: 'editar/:id', component: EditarComponent},
  {path: 'nuevo', component: NuevoComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ProductosComponent_Factory, NuevoComponent, EditarComponent, PagenotfoundComponent]
