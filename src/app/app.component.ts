import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Menupage } from "../pages/menupage/menupage";
import { Soldec } from "../pages/soldec/soldec";
import { Demander } from "../pages/demander/demander";
import { Demanderv } from "../pages/demanderv/demanderv";
import { Doperation } from "../pages/doperation/doperation";
import { Viremenc } from "../pages/viremenc/viremenc";
import { Courdevisesj } from "../pages/courdevisesj/courdevisesj";
import { Soldecpf } from "../pages/soldecpf/soldecpf";
import { Doperationpf } from "../pages/doperationpf/doperationpf";
import { Transfertpf } from "../pages/transfertpf/transfertpf";
import { Ttransfertpf } from "../pages/ttransfertpf/ttransfertpf";
import { Banktowallet } from "../pages/banktowallet/banktowallet";
import { Reglementpf } from "../pages/reglementpf/reglementpf";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Menupage;

 // pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
  
}
  Solde_du_compte(){
    this.nav.setRoot(Soldec);
  }
  
  Dernieres_operations(){
    this.nav.setRoot(Doperation);
  }
  
 Virement_entre_comptes(){
    this.nav.setRoot(Viremenc);
  }
  
  Demande_de_releves(){
    this.nav.setRoot(Demander);
  }
  
  Demande_de_Rv(){
    this.nav.setRoot( Demanderv);
  }
  
  Cours_des_devises_du_jour(){
    this.nav.setRoot(Courdevisesj);
  }

            Solde_du_comptepf(){
             this.nav.setRoot(Soldecpf);
  
         }
            Dernieres_operationspf(){
                this.nav.setRoot(Doperationpf);
  
            }
             Transfert(){
                 this.nav.setRoot(Transfertpf);
  
             }
             Transfert_entre_comptes_PME(){
                 this.nav.setRoot(Ttransfertpf);
  
             }
             Bank_to_Wallet(){
                 this.nav.setRoot(Banktowallet);
  
             }
             Reglements(){
                 this.nav.setRoot(Reglementpf);
  
             }
            
            go_home(){
      this.nav.setRoot(Menupage);
            }

}