import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FormComponent } from './research/form/form.component';
import { ResultsComponent } from './research/results/results.component';
import { ResearchComponent } from './research/research.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FormComponent, ResultsComponent, ResearchComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
