import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-green-50 text-gray-800 pt-12 pb-6 px-5 lg:px-14'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mb-8'>
                <div>
                    <h3 className='text-2xl font-bold text-green-700 mb-3'>Earthly Eats</h3>
                    <p className='text-sm font-medium text-gray-600'>
                        Fresh, healthy, and 100% organic products delivered to your
                        doorstep. Supporting local farmers and sustainable living.
                    </p>
                </div>

                <div>
                    <h4 className='font-semibold mb-3 text-green-700'>Quick Links</h4>
                    <ul className='space-y-2 text-sm'>
                        <li><a href="/" className='hover:text-green-600'>Home</a></li>
                        <li><a href="/" className='hover:text-green-600'>About Us</a></li>
                        <li><a href="/" className='hover:text-green-600'>Contact</a></li>
                        <li><a href="/" className='hover:text-green-600'>Products</a></li>
                    </ul>
                </div>
                

                    <div>
                        <h4 className='font-semibold text-green-700 mb-3'>Categories</h4>
                        <ul className='space-y-2 text-sm'>

                            <li><a href="/" className='hover:text-green-600'>Vegetables</a></li>
                            <li><a href="/" className='hover:text-green-600'>Fruits</a></li>
                            <li><a href="/" className='hover:text-green-600'>Daily Products</a></li>
                            <li><a href="/" className='hover:text-green-600'>Beverages</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className='font-semibold mb-3 text-green-700'>Contact</h4>
                        <p className='text-sm mb-2 text-gray-600'>Vytilla Broadway , Kochi ,Kerala</p>
                        <p className='text-sm mb-2 text-gray-600'>Email:earthlyeatsvytilla@gmail.com</p>
                        <p className='text-sm mb-4 text-gray-600'>Phone : 04824678412</p>
    
                    <div className='flex space-x-4'>
                        <a href="/" className='text-blue-500'><FaFacebook/></a>
                        <a href="/" className='text-pink-500'><FaInstagram/></a>
                        <a href="/" className='text-blue-700'><FaTwitter/></a>
                    </div>
                    </div>
                    </div>
        </footer>
    )
}

export default Footer;