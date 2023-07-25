import { reactive } from 'vue';

export const store = reactive (
    {
        links : ['All Product', 'Apple', 'Food', 'Orange', 'Vegetable'],
        products : [
            {
                title: 'Fress Apple',
                image: "/img/s5.jpg" ,
                price: '$18',
                discount : false,
               
            },
            {
                title: 'Fress Cobies',
               image: '/img/s2.jpg',
                price: '$17',
                discount : true,
                newPrice: '$17',
                
            },
            {
                title: 'Fresh Watermelon',
               image: '/img/s8.jpg',
                price: '$20',
                discount : false,
            },
            {
                title: 'Organic Juice',
               image: '/img/s1.jpg',
                price: '$15',
                discount : true,
                newPrice: '$15',
            },
            {
                title: 'Fresh Blueberries',
               image: '/img/s4.jpg',
                price: '$19',
                discount : true,
                newPrice: '$14',
            },
            {
                title: 'Organic Letus',
               image: '/img/s10.jpg',
                price: '$23',
                discount : false,
            },
            {
                title: 'Red Gajor',
               image: '/img/s9.jpg',
                price: '$29',
                discount : true,
                newPrice: '$26',
            },
            {
                title: 'Naga Pepper',
               image: '/img/s7.jpg',
                price: '$21',
                discount : false,
            },
        ],
        counter :[
            {
             count : '20+',
             subtitle: 'Years of Experienced',
           
            },
            {
                count : '200+',
                subtitle: 'Everyday Online Delivery',
                counterImage:'img/counter-shap1.png',
               },
               {
                count : '20K',
                subtitle: 'Client Satisfaction',
                counterImage:'img/counter-shap1.png',
               },
               {
                count : '30+',
                subtitle: 'Award Winning',
                counterImage:'img/counter-shap1.png',
               },
        ],
    }
    
);