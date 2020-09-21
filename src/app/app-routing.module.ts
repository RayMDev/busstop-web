import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusStopComponent } from './bus-stop/bus-stop.component';

const routes: Routes = [{
  path: 'busStop',
  component: BusStopComponent
},
{
  path: '',
  redirectTo: 'busStop',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
