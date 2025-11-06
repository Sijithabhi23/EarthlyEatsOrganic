import React from 'react'
import img from "../assets/img/about.jpg"
const About = () => {
    return (

        <section className='bg-white px-5 py-16 lg:px-20'>

            <div className='flex flex-col-reverse lg:flex-row items-center gap-10'>
                
            <div className='lg:w-1/2'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>About Us</h2>

                <p className='text-green-600 font-semibold mb-3'>Fresh , Local , Organic</p>

                <p className='text-gray-600 mb-4'>At NatureHarvest, we believe in bringing you the freshest organic
                    produce directly from our partnered farmers. Our mission is to
                    promote healthy living, sustainable farming, and fair trade for
                    local communities.</p>

                <p className='text-gray-600 mb-6'>We carefully select farms that follow natural practices — no
                    chemicals, no shortcuts. Just pure, wholesome food delivered
                    straight to your doorstep.</p>

                <button className='bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 cursor-pointer'>Learn More</button>

            </div>

            <div className='lg:w-1/2'>
                <img src={img} alt="loading.." className='w-full h-auto rounded-full shadow-lg' />
            </div>
        </div>
        </section>
    )
}

export default About