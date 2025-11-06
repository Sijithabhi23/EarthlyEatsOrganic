import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
    {
        name: "Leonardo Di Caprio",
        comment: "The veggies were so fresh and packed beautifully. Love it!",
        img: "src/assets/img/ldc.png",
    },
    {
        name: "Robert Downey Jr",
        comment: "Quick delivery & top-notch quality. Highly recommend!",
        img: "src/assets/img/rdj.jpg",
    },
    {
        name: "Alia Bhatt",
        comment: "Finally, a brand I can trust for real organic produce.",
        img: "src/assets/img/alia.jpg",
    },
    {
        name: "Tom Cruise",
        comment: "Organic, fresh, and affordable. My family loves it!",
        img: "src/assets/img/tom.jpg",
    },
];



const Testimonial = () => {

    const settings = {

        clasname: "center",
        centerMode: true,
        infinte: true,
        centerPadding: "60px",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "40px",
                },
            },

            {
                breakpoints: 640,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ]
    }

    return (

        <section className='bg-white py-16 px-4'>

            <h2 className='text-3xl font-bold text-center text-gray-800 mb-10'>What our Customer Say ?</h2>

            <div className='slider-container max-w-6xl mx-auto'>
                {
                    <Slider {...settings}>
                        {
                            testimonials.map((item, index) => (
                                    <div key={index} className='px-4 mb-2'>
                                        <div className='bg-green-50 p-6 rounded-lg shadow-md text-center h-full '> 
                                            <img src={item.img} className='w-52 h-36 mx-auto rounded-full mb-5' />
                                        <p className='text-gray-700 italic mb-2'>{item.comment}</p>
                                        <h4 className='font-semibold text-green-600'>{item.name}</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                }
            </div>

        </section>

    )
}

export default Testimonial