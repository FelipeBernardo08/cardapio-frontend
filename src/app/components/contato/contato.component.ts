import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contato: Array<any> = [
    {
      titulo: 'Whatsapp',
      link: 'https://wa.me/5517981500256',
      image: '../../../assets/whatsapp.png',
      class: 'img-whatsapp botao-contato'
    },
    {
      titulo: 'Ifood',
      link: 'https://www.ifood.com.br/delivery/sao-jose-do-rio-preto-sp/delicias-da-cheiloca-distrito-industrial-waldemar-de-oliveira-verdi/de93e0d1-7075-4f19-98bc-3180d0ff9b36?utm_medium=share',
      image: '../../../assets/ifood.png',
      class: 'img-ifood botao-contato'
    }
  ]

  goTo(link: string): void {
    window.open(link, '_blank');
  }

}
