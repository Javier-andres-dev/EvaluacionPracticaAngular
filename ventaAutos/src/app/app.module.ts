import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [			
      AppComponent,
      FooterComponent,
      HeaderComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: '**', redirectTo: '/', pathMatch: 'full' },
    ]),
    HttpClientModule
  ],
  exports: [ HeaderComponent,FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
