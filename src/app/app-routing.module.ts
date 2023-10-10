import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WindowComponent } from './window/window.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { TableComponent } from './table/table.component';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';

const routes: Routes = [
  {
    path: '',
    component: WindowComponent
  },
  {
    path: 'main',
    component: DashboardComponent,
    children: [
      {path: 'tree', component: TreeComponent},
      {path: 'table', component: TableComponent},
      {path: 'weather', component: WeatherlistComponent}
    ]
  }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
