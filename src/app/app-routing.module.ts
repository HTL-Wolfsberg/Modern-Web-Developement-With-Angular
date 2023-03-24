import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { MitarbeitskontrolleComponent } from './components/mitarbeitskontrolle/mitarbeitskontrolle.component';

const routes: Routes = [
  { path: '', redirectTo: '/shoppingList', pathMatch: 'full' },
  { path: 'shoppingList', component: ShoppingListComponent },
  { path: 'overview', component: OverviewComponent },
  { path: '4bhwiiMitarbeitsKontrolle', component: MitarbeitskontrolleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
