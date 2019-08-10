import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishListMainPageComponent } from './components/wish-list-main-page/wish-list-main-page.component';

const routes: Routes = [
  { path: '', component: WishListMainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
