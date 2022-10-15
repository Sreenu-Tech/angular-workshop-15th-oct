import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CountryStateComponent } from './caching/country-state/country-state.component';
import { FormsModule } from '@angular/forms';
import { CachingInterceptor } from './caching/caching.interceptor';
import { SecurityComponent } from './security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryStateComponent,
    SecurityComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CachingInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
