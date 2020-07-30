import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibModule } from './lib/lib.module';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
