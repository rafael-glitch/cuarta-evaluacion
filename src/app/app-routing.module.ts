import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotaComponent} from '../app/components/nota/nota.component'
import {VernotasComponent} from '../app/components/vernotas/vernotas.component'

const routes: Routes = [
  {    path:'',component: NotaComponent  },
  {    path:'vernotas',component: VernotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
