import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SiddhaComponent } from './siddha/siddha.component';
import { AyurvedhaComponent } from './ayurvedha/ayurvedha.component';
import { ThippiliComponent } from './siddha/thippili/thippili.component';
import { GandhakaComponent } from './siddha/gandhaka/gandhaka.component';
import { AswagandhaComponent } from './siddha/aswagandha/aswagandha.component';
import { LauhasavaComponent } from './siddha/lauhasava/lauhasava.component';
import { AshokarishtaComponent } from './siddha/ashokarishta/ashokarishta.component';
import { SaraswatarishtaComponent } from './siddha/saraswatarishta/saraswatarishta.component';
import { AbayaristamComponent } from './siddha/abayaristam/abayaristam.component';
import { DashamuulaarishttamComponent } from './siddha/dashamuulaarishttam/dashamuulaarishttam.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    SiddhaComponent,
    AyurvedhaComponent,
    ThippiliComponent,
    GandhakaComponent,
    AswagandhaComponent,
    LauhasavaComponent,
    AshokarishtaComponent,
    SaraswatarishtaComponent,
    AbayaristamComponent,
    DashamuulaarishttamComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
