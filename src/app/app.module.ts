import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Menupage } from "../pages/menupage/menupage";
import { Portefeuille } from "../pages/portefeuille/portefeuille";
import { Soldec } from "../pages/soldec/soldec";
import { Demanderv } from "../pages/demanderv/demanderv";
import { Doperation } from "../pages/doperation/doperation";
import { Viremenc } from "../pages/viremenc/viremenc";
import { Courdevisesj } from "../pages/courdevisesj/courdevisesj";
import { Demander } from "../pages/demander/demander";
import { Soldecpf } from "../pages/soldecpf/soldecpf";
import { Doperationpf } from "../pages/doperationpf/doperationpf";
import { Transfertpf } from "../pages/transfertpf/transfertpf";
import { Ttransfertpf } from "../pages/ttransfertpf/ttransfertpf";
import { Banktowallet } from "../pages/banktowallet/banktowallet";
import { Reglementpf } from "../pages/reglementpf/reglementpf";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Menupage,
    Portefeuille,
    Soldec,
    Demanderv,
    Doperation ,
    Viremenc,
    Courdevisesj ,
    Demander,
     Soldecpf,
     Doperationpf,
     Transfertpf,
     Ttransfertpf,
     Banktowallet,
     Reglementpf
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Menupage,
    Portefeuille,
    Soldec,
    Demanderv,
    Doperation ,
    Viremenc,
    Courdevisesj ,
    Demander,
    Soldecpf,
     Doperationpf,
     Transfertpf,
     Ttransfertpf,
     Banktowallet,
     Reglementpf
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
