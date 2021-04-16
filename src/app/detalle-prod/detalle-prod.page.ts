import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';


@Component({
  selector: 'app-detalle-prod',
  templateUrl: './detalle-prod.page.html',
  styleUrls: ['./detalle-prod.page.scss'],
})
export class DetalleProdPage implements OnInit {

  constructor( public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create(
      {
      header: 'Finalizar compra',
      buttons: [{
        text: ' Ir a pagar',
        role: 'check',
        icon: 'cash-outline',
        handler: () => {
          window.alert('Será enviado a la pasarela de pago');
        }
      },
        {
        text: 'Seguir comprando',
        icon: 'glasses-outline',
        handler: () => {
          window.alert('Será enviado a la sección de productos');
        },
      },
        {
          text: 'Sacar del carrito',
          icon: 'trash-outline',
          handler: () => {
            window.alert('Este producto se ha borrado de su carro de compras');
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
        }]
      });
    await actionSheet.present();
  }
}
