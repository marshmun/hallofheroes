import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
  BrowserModule],
  declarations: [AppComponent, HeroesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
