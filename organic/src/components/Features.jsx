import React from 'react'

import {
    FaLeaf,
    FaShippingFast,
    FaHandsHelping,
    FaCheckCircle,
  } from "react-icons/fa";
  
  const features = [
    {
      icon: <FaLeaf className="text-green-600 text-4xl mb-3" size={45} />,
      title: "100% Organic",
      desc: "Our products are genuine and  grown without harmful chemicals or pesticides.",
    },
    {
      icon: <FaShippingFast className="text-green-600 text-4xl mb-3" size={45} />,
      title: "Fast Delivery",
      desc: "We deliver fresh produce at your doorstep within hours of harvesting.",
    },
    {
      icon: <FaHandsHelping className="text-green-600 text-4xl mb-3" size={45} />,
      title: "Farmer Support",
      desc: "Empowering local farmers with fair trade and sustainable practices.",
    },
    {
      icon: <FaCheckCircle className="text-green-600 text-4xl mb-3" size={45} />,
      title: "Quality Assured",
      desc: "Every item is checked for freshness and quality before delivery.",
    },
  ];



const categories = [
    "FOOD & DRINKS",
    "FRESH FRUITS",
    "VEGETABLES",
    "DRIED FOODS & NUTS",
  ];


  const products = [
    {
      image: "src/assets/img/product1.jpg",
      title: "Watermelon Juice",
      price: 39,
      category: "FOOD & DRINKS",
    },
    {
      image: "src/assets/img/product2.jpg",
      title: "Mango Smoothie",
      price: 70,
      oldPrice: 85,
      discount: 17,
      category: "FOOD & DRINKS",
    },
    {
      image: "src/assets/img/product3.jpg",
      title: "Grape Drink",
      price: 39,
      oldPrice: 55,
      discount: 29,
      category: "FOOD & DRINKS",
    },
    {
      image: "src/assets/img/product4.jpg",
      title: "Orange Juice",
      price: 59,
      oldPrice: 35,
      discount: 20,
      category: "FOOD & DRINKS",
    },
    {
      image: "src/assets/img/product5.jpg",
      title: "Organic Apple",
      price: 29,
      category: "FRESH FRUITS",
    },
    {
      image: "src/assets/img/product6.jpg",
      title: "Strawberries",
      price: 49,
      oldPrice: 65,
      discount: 20,
      category: "FRESH FRUITS",
    },
    {
      image: "src/assets/img/product7.jpg",
      title: "Pineapple",
      price: 59,
      category: "FRESH FRUITS",
    },
    {
      image: "src/assets/img/product8.jpg",
      title: "Broccoli",
      price: 99,
      oldPrice: 115,
      discount: 17,
      category: "VEGETABLES",
    },
    {
      image: "src/assets/img/product9.jpg",
      title: "Cucumber",
      price: 39,
      category: "VEGETABLES",
    },
    {
      image: "src/assets/img/product10.jpg",
      title: "Spinach",
      price: 89,
      oldPrice: 145,
      discount: 14,
      category: "VEGETABLES",
    },
    {
      image: "src/assets/img/product11.jpg",
      title: "Cauliflower",
      price: 79,
      category: "VEGETABLES",
    },
    {
      image: "src/assets/img/product12.jpg",
      title: "Organic Walnuts",
      price: 39,
      oldPrice: 52,
      discount: 25,
      category: "DRIED FOODS & NUTS",
    },
    {
      image: "src/assets/img/product13.jpg",
      title: "Raw Almonds",
      price: 33,
      oldPrice: 59,
      status: "soldout",
      category: "DRIED FOODS & NUTS",
    },
  ];
  

const steps = [
    {
      number: "01",
      title: "Place Your Order",
      desc: "Browse our organic range and place your order in a few easy clicks.",
    },
    {
      number: "02",
      title: "Harvest from Farm",
      desc: "We pick the freshest items straight from local organic farms.",
    },
    {
      number: "03",
      title: "Eco-Packaging",
      desc: "We use sustainable, hygienic packaging to ensure freshness.",
    },
    {
      number: "04",
      title: "Quick Delivery",
      desc: "Your order reaches your doorstep within hours, farm-fresh.",
    },
  ];

const testimonials = [
    {
      name: "Oliver Bennett",
      comment: "The veggies were so fresh and packed beautifully. Love it!",
      img: "src/assets/img/review1.jpg",
    },
    {
      name: "Amelia Brooks",
      comment: "Quick delivery & top-notch quality. Highly recommend!",
      img: "src/assets/img/review2.jpg",
    },
    {
      name: "Charlotte Harris",
      comment: "Finally, a brand I can trust for real organic produce.",
      img: "src/assets/img/review3.jpg",
    },
    {
      name: "James Walker",
      comment: "Organic, fresh, and affordable. My family loves it!",
      img: "src/assets/img/review4.jpg",
    },
  ];

const Features = () => {
  return (
   
    <section className='bg-white py-14 px-5 lg:px-14 text-center'>
        <h2 className='text-3xl font-bold mb-10 text-gray-800'>Why Choose Us</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          {features.map((feature , index) => (
            <div key={index} className='bg-gray-100 rounded-4xl p-6 shadow-md hover:shadow-xl'>
              <div className='flex justify-center text-4xl text-green-600 mb-3'>{feature.icon}</div>
              <h3 className='font-semibold mb-2 text-gray-700 text-xl'>{feature.title}</h3>
              <p className='text-gray-600'>{feature.desc}</p>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Features