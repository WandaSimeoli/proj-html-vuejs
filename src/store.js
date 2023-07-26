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
                newPrice: '$16',
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
                price: '$20',
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
        articles : [
            {
                image: 'img/blo1-390x250.jpg',
                author: 'Gogrin',
                date:'17 Dec 2022',
                title: 'Where I live,I am surrounded by fresh, organic food, so I eat really well.',
                preview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusantium nihil laboriosam earum dolore suscipit'
            },
            {
                image: 'img/blo2-390x250.jpg',
                author: 'Gogrin',
                date:'16 Dec 2022',
                title: 'What we get at home is 100% organic food. We are also 90% vegetarian.',
                preview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusantium nihil laboriosam earum dolore suscipit'
            },
            {
                image: 'img/blo3-390x250.jpg',
                author: 'Gogrin',
                date:'15 Dec 2022',
                title: 'If we as a society are willing to have a preference for organic food farmer.',
                preview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusantium nihil laboriosam earum dolore suscipit'
            },
        ],
        logos :[ 'img/brand1.png', 'img/brand4.png','img/brand3.png','img/brand1.png','img/brand2.png',]
    },
   
);