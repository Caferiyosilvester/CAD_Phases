import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'dhayanandh',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'ganesh',
      email: 'ganesh@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
    products: [
      {
        // _id: '1',
        name: 'Striped Top',
        slug: 'Tops',
        category: 'Tops',
        image: '/images/156813401_g2.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Only',
        rating: 4.5,
        numReviews: 10,
        description: 'Keep it cool and trendy in this co-ord set top from ONLY.',
      },
      {
        // _id: '2',
        name: 'Knit Pullover',
        slug: 'Pullovers',
        category: 'Pullovers',
        image: '/images/213702901_g2.jpg',
        price: 250,
        countInStock: 60,
        brand: 'Only',
        rating: 4.0,
        numReviews: 10,
        description: 'This cozy and stylish pullover from ONLY will be your go-to piece this season.',
      },
      {
        // _id: '3',
        name: 'Blue Top',
        slug: 'Tops',
        category: 'Tops',
        image: '/images/240136901_g2.jpg',
        price: 25,
        countInStock: 0,
        brand: 'Only',
        rating: 4.5,
        numReviews: 14,
        description: 'Top in all over printed woven fabric with a round neckline, 3/4 batwing sleeves with narrow elastication, and small keyhole at back.',
      },
      {
        //  _id: '4',
        name: 'Purple Knit Top',
        slug: 'Tops',
        category: 'Tops',
        image: '/images/282162301_g1.jpg',
        price: 65,
        countInStock: 5,
        brand: 'Only',
        rating: 4.5,
        numReviews: 10,
        description: 'Short, fitted top in a knit weave with a collar, V-neck and buttons down the front. ',
      },
    ],
  };
  export default data;