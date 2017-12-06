import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@NgModule({
  imports: [
  BrowserModule,
  FormsModule
],
  declarations: [AppComponent, HeroesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
