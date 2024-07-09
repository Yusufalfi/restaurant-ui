

import imgHero1 from '../public/p2.png'
import imgHero2 from '../public/p1.png'
import imgHero3 from '../public/p10.png'

import BigBurger from '../public/assets/burger/p2.png';
import TripleBurger from '../public/assets/burger/p9.png';
import BeefBurger from '../public/assets/burger/newsBurger.png';
import CheseBurger from '../public/assets/burger/newBurgr2.jpg';

import ChickenOne from '../public/assets/chicken/chicken1.jpg';
import ChickenTwo from '../public/assets/chicken/paket2.png';
import ChickenThree from '../public/assets/chicken/riceChicken.png';
import ChickenFour from '../public/assets/chicken/tripleChicken.png';

import PizzaOne  from '../public/assets/pizza/p1.png';
import PizzaTwo  from '../public/assets/pizza/p10.png';
import PizzaThree  from '../public/assets/pizza/p6.png';
import PizzaFour  from '../public/assets/pizza/p11.png';

import mieTelor from '../public/mieTelor.png'
import kebab from '../public/kebab.png'





export const data = [
  {
    id: 1,
    title: "Start your day With Good Food Good Mood",
    image: imgHero1,
  },
  {
    id: 2,
    title: "We deliver your order with fast",
    image: imgHero2,
  },
  {
    id: 3,
    title: "The best pizza to share with your family",
    image: imgHero3,
  },
];


export const ourMenu = [
    {
    id: 1,
    image: BigBurger,
    name: 'Burger',
    price: 10.20,
  },
  {
    id: 2,
    image: mieTelor,
    name: 'Noodles',
    price: 14.20,
    
  },
  {
    id: 3,
    image: kebab,
    name: 'Kebab',
    price: 15.10,
  },
  {
    id: 4,
    image: PizzaThree,
    name: 'Pizza',
    price: 12.08,
  },
]

// data Product Menu //
export const menuBurger = [
  {
    id: 1,
    image: BigBurger,
    name: 'Big Burger',
    price: 10.20,
    description:'Two layers of savory beef served with special sauce, fresh lettuce, cheese, pickled cucumber, onions, sandwiched between sesame-studded buns.',
  },
  {
    id: 2,
    image: TripleBurger,
    name: 'Triple Cheeseburger',
    price: 14.20,
    description:'A combination of burger buns with 3 layers of savory meat from 100% Australian beef and 3 layers of cheese, tomato sauce, pickles, chopped onions and mustard.',
  },
  {
    id: 3,
    image: BeefBurger,
    name: 'Beef Burger',
    price: 15.10,
    description:'Burger bun, 100% beef, tomato sauce, pickled cucumber, chopped onions and mustard.',
  },
  {
    id: 4,
    image: CheseBurger,
    name: 'Cheese Beef Burger',
    price: 12.08,
    description:'Burger with patty filled with macaroni & cheese and real beef, Stroganoff sauce, topped with onions, served on a soft black sesame burger bun.',
  },

];


// data Product Menu //
export const menuChicken = [
  {
    id: 5,
    image: ChickenOne,
    name: 'Chicken Crispy',
    price: 10.20,
    description:'Two layers of savory beef served with special sauce, fresh lettuce, cheese, pickled cucumber, onions, sandwiched between sesame-studded buns.',
  },
  {
    id: 6,
    image: ChickenTwo,
    name: 'Chicken Original',
    price: 14.20,
    description:'A combination of burger buns with 3 layers of savory meat from 100% Australian beef and 3 layers of cheese, tomato sauce, pickles, chopped onions and mustard.',
  },
  {
    id: 7,
    image: ChickenThree,
    name: 'Rice Chicken',
    price: 15.10,
    description:'Burger bun, 100% beef, tomato sauce, pickled cucumber, chopped onions and mustard.',
  },
  {
    id: 8,
    image: ChickenFour,
    name: 'TripleChicken original',
    price: 12.08,
    description:'Burger with patty filled with macaroni & cheese and real beef, Stroganoff sauce, topped with onions, served on a soft black sesame burger bun.',
  },

];

export const menuPizza = [
  {
    id: 6,
    image: PizzaOne,
    name: 'Pizza Tomato',
    price: 10.20,
    description:'Generous Cheddar Cheese Sauce Topped with Pepperoni, Mozzarella Cheese and Special Pizza Sauce.',
  },
  {
    id: 7,
    image: PizzaTwo,
    name: 'Pizza With Beef',
    price: 14.20,
    description:'Smoked Chicken, Corn, Mozzarella Cheese, Honey Mustard Sauce and Extra Mayonnaise Sauce',
  },
  {
    id: 8,
    image: PizzaThree,
    name: 'Pizza Special Chicken',
    price: 15.10,
    description:'Daging Sapi Asap, Daging Ayam Asap, Burger Sapi, Jamur, Nanas, Paprika dan Keju Mozzarella',
  },
  {
    id: 9,
    image: PizzaFour,
    name: 'Pizza Mushroom',
    price: 12.08,
    description:'Topped with beef pepperoni, minced beef, onion, mushroom, and mozzarella cheese.',
  },

];