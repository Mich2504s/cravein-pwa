import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: './images/HamPiz.jpg',
    altText: 'Antojo de Hamburguesa?',
    caption: 'Ver ubicaciones',
    header: 'Antojo de Hamburguesa?'
  },
  {
    src: './images/Tacos.jpg',
    altText: 'Antojo de unos tacos?',
    caption: 'Ver ubicaciones',
    header: 'Antojo de unos tacos?'
  },
  {
    src: './images/Pizza.jpg',
    altText: 'Antojo de una pizza?',
    caption: 'Ver ubicaciones',
    header: 'Antojo de una pizza?'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;