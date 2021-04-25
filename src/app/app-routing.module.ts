import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AyurvedhaComponent } from './ayurvedha/ayurvedha.component';
import { HomeComponent } from './home/home.component';
import { SiddhaComponent } from './siddha/siddha.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ThippiliComponent } from './siddha/thippili/thippili.component';
import { SaraswatarishtaComponent } from './siddha/saraswatarishta/saraswatarishta.component';
import { LauhasavaComponent } from './siddha/lauhasava/lauhasava.component';
import { GandhakaComponent } from './siddha/gandhaka/gandhaka.component';
import { DashamuulaarishttamComponent } from './siddha/dashamuulaarishttam/dashamuulaarishttam.component';
import { AswagandhaComponent } from './siddha/aswagandha/aswagandha.component';
import { AshokarishtaComponent } from './siddha/ashokarishta/ashokarishta.component';
import { AbayaristamComponent } from './siddha/abayaristam/abayaristam.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'siddha',component:SiddhaComponent},
  /*
  children:[
    { path:'thippili',component:ThippiliComponent},
    { path:'saraswatarishta',component:SaraswatarishtaComponent},
    { path:'lauhasava',component:LauhasavaComponent},
    { path:'gandhaka',component:GandhakaComponent},
    { path:'dashamuulaarishttam',component:DashamuulaarishttamComponent},
    { path:'aswagandha',component:AswagandhaComponent},
    { path:'ashokarishta',component:AshokarishtaComponent},
    { path:'abayaristam',component:AbayaristamComponent},
  ]},
  */
  {path:'siddha/thippili',component:ThippiliComponent},
  {path:'siddha/saraswatarishta',component:SaraswatarishtaComponent},
  {path:'siddha/lauhasava',component:LauhasavaComponent},
  {path:'siddha/gandhaka',component:GandhakaComponent},
  {path:'siddha/dashamuulaarishttam',component:DashamuulaarishttamComponent},
  {path:'siddha/aswagandha',component:AswagandhaComponent},
  {path:'siddha/ashokarishta',component:AshokarishtaComponent},
  {path:'siddha/abayaristam',component:AbayaristamComponent},
  {path:'ayurvedha',component:AyurvedhaComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [SiddhaComponent,AyurvedhaComponent]