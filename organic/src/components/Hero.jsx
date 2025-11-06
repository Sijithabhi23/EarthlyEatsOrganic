import React from 'react'
import img from "../assets/img/hero.png"
const Hero = () => {
    return (
        <section className='min-h-[90vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center px-5 lg:px-14 bg-gradient-to-r from-[#d7e8dc] to-[#c4dbce]'>
            <div className="text-center mt-12 md:text-start md:mt-0 space-y-5 max-w-xl">
                <h3 className='text-sm md:text-lg text-gray-700'>Fresh From Farm to Your Plate</h3>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">Healthy Eating , <br />
                    the <span className='text-green-600'>organic</span> Way
                </h1>
                <p className="text-gray-600">
                    Discover fresh , organic , and handipicked vegetables
                    directly from local farms to you
                </p>
                <button className='bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition duration-300 cursor-pointer'>Explore Menu</button>
            </div>

            <div className='w-4/5 md:w-2/5'>
                <img src={img} alt="loading" className='rounded-full border-white' />
            </div>

        </section>
    )
}

export default Hero