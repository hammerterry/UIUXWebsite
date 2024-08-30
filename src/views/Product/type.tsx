import Item1 from '../../assets/item1.jpg';
import Item1_2 from '../../assets/item1_2.jpg';
import Item1_3 from '../../assets/item1_3.jpg';
import Item1_4 from '../../assets/item1_4.jpg';
import Item2 from '../../assets/item2.jpg';
import Item2_2 from '../../assets/item2_2.jpg';
import Item2_3 from '../../assets/item2_3.jpg';
import Item2_4 from '../../assets/item2_4.jpg';
import Item3 from '../../assets/item3.jpg';
import Item3_2 from '../../assets/item3_2.jpg';
import Item3_3 from '../../assets/item3_3.jpg';
import Item3_4 from '../../assets/item3_4.jpg';
import Item4 from '../../assets/item4.jpg';
import Item4_2 from '../../assets/item4_2.jpg';
import Item4_3 from '../../assets/item4_3.jpg';
import Item4_4 from '../../assets/item4_4.jpg';
import Item5 from '../../assets/item5.jpg';
import Item5_2 from '../../assets/item5_2.jpg';
import Item5_3 from '../../assets/item5_3.jpg';
import Item6 from '../../assets/item6.jpg';
import Item6_2 from '../../assets/item6_2.jpg';
import Item6_3 from '../../assets/item6_3.jpg';

export const itemList = [
  {
    id: 0,
    name: 'Lenox Bike',
    price: 9998,
    image: [Item1, Item1_2, Item1_3, Item1_4],
    isHot: true,
    descriptions:
      "Lenox electric bike \n 28'36V8Ah//250w 28' Aluminum 6061 frame \n 250w rear motor",
    category: 'Bike',
  },
  {
    id: 1,
    name: 'Elektrisk-ATV',
    price: 19998,
    image: [Item2, Item2_2, Item2_3, Item2_4],
    isHot: false,
    descriptions:
      '155 (L) x 93 (W) x 102 (H) cm. ... Seat height: 72 cm. \n 48V/1000watt with brush motor and rubber wheels with air in .\n Your electric ATV is intended for young people and adults,\n and can be used on fairly steep slopes.',
    category: 'Car',
  },
  {
    id: 2,
    name: 'EcoRide Electric folding bicycle',
    price: 5998,
    isHot: true,
    image: [Item3, Item3_2, Item3_3, Item3_4],
    descriptions:
      'Same bicycle as above, but foldable, 20 wheels and weight 12 kg. \n Folds in 60 seconds. \n Comes with carrying case. \n Dimensions: 93 x 70 x 53 cm.',
    category: 'Bike',
  },
  {
    id: 3,
    name: 'el-Moped Scooter',
    price: 39998,
    image: [Item4, Item4_2, Item4_3, Item4_4],
    descriptions:
      'Same bicycle as above, but foldable, 20 wheels and weight 12 kg. \n Folds in 60 seconds. \n Comes with carrying case. \n Dimensions: 93 x 70 x 53 cm.',
    category: 'Motor',
  },
  {
    id: 4,
    name: '6.7 HP Lawnmower',
    price: 49998,
    image: [Item5, Item5_2, Item5_3],
    descriptions:
      'Bio clip, page draft and collector. \nPerformance 2800 Rpm 200cc (6.7 hp). \n Self-propelled with rear-wheel drive . \n Manufacturer : Redback (Designed by Briggs & Stratton).',
    category: 'Lawnmower',
  },
  {
    id: 5,
    name: 'Star Binoculars. 60x & 150x',
    price: 59998,
    image: [Item6, Item6_2, Item6_3],
    descriptions:
      '127mm F1500. Computer-controlled telescope with built-in 42,900 objects. \n Magnification (with included eyepieces) : 60x,150x \n Highest magnification (practical) : 254x',
    category: 'Binoculars',
  },
];

export const highlightItemList = [
  {
    id: 0,
    name: 'Lenox Bike',
    price: 9998,
    image: [Item1],
    category: 'Bike',
  },
  {
    id: 1,
    name: 'Elektrisk-ATV',
    price: 19998,
    image: [Item2],
    category: 'Car',
  },
  {
    id: 2,
    name: 'EcoRide Electric folding bicycle',
    price: 5998,
    image: [Item3],
    category: 'Bike',
  },
];
