import { reactive } from 'vue';

export const store = reactive (
    {
        links : ['All Product', 'Apple', 'Food', 'Orange', 'Vegetable'],
        products : [
            {
                title: 'Fress Apple',
                image: "./assets/img/s5.jpg" ,
                price: '$18',
            },
            {
                title: 'Fress Cobies',
               image: '../assets/img/s2.jpg',
                price: '$17',
            },
            {
                title: 'Fresh Watermelon',
               image: '../assets/img/s8.jpg',
                price: '$15',
            },
            {
                title: 'Organic Juice',
               image: '../assets/img/s1.jpg',
                price: '$15',
            },
            {
                title: 'Fresh Blueberries',
               image: '../assets/img/s4.jpg',
                price: '$14',
            },
            {
                title: 'Organic Letus',
               image: '../assets/img/s10.jpg',
                price: '$23',
            },
            {
                title: 'Red Gajor',
               image: '../assets/img/s9.jpg',
                price: '$26',
            },
            {
                title: 'Naga Pepper',
               image: '../assets/img/s7.jpg',
                price: '$21',
            },
        ]
    }
    
);