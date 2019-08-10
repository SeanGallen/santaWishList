import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { WishListWriterComponent } from './components/wish-list-writer/wish-list-writer.component';
import { WishListRemovalComponent } from './components/wish-list-removal/wish-list-removal.component';
import { WishListShowAllComponent } from './components/wish-list-show-all/wish-list-show-all.component';
import { WishListUpdatesComponent } from './components/wish-list-updates/wish-list-updates.component';
import { WishListMainPageComponent } from './components/wish-list-main-page/wish-list-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WishListWriterComponent,
    WishListRemovalComponent,
    WishListShowAllComponent,
    WishListUpdatesComponent,
    WishListMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
