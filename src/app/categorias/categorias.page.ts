import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  productosEco = [
    {
      title: 'Sustitutos',
      content: 'Bebidas y proteínas',
      image: '/assets/img/dairy.jpg',
    },
    {
      title: 'Orgánicos',
      content: 'Frutas y verduras',
      image: '/assets/img/vegetables.jpg',
    },
    {
      title: 'Panadería',
      content: 'Sin gluten / sin azúcar',
      image: '/assets/img/bread.jpg',
    },
    {
      title: 'Despensa',
      content: 'Granos y harinas',
      image: '/assets/img/grains.jpg',
    },
    {
      title: 'Amigables',
      content: 'Biodegradables y reciclados',
      image: '/assets/img/recycle.jpg',
    },
    {
      title: 'Cuidado',
      content: 'Corporal y belleza',
      image: '/assets/img/beauty.jpg',

    },
    {
      title: 'Farmacia',
      content: 'Homeopáticos',
      image: '/assets/img/medicine.jpg',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
