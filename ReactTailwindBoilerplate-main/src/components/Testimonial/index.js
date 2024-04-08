import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faQuoteLeftAlt } from '@fortawesome/free-solid-svg-icons';


const Testimonial =()=>(

<div className='bg-blue-900 flex sm:mb-10 sm:mt-28 sm:h-80 items-center justify-center flex-col sm:flex-row h-80 '>
    
    <div className='text-start w-72 mt-40 sm:mt-3 md:ml-5'>
       <FontAwesomeIcon icon={faQuoteLeftAlt} className='text-white sm:text-4xl text-xl'/>
        <p className='text-white sm:text-md text-sm mb-3'>The truth must be told.We are here because of paypal.<br/>
        I am inspired by what paypal is daoing and we want to<br/> continue grow with PayPal.
        </p>
    <p className='sm:text-sm text-xs text-white'>Vipin Sahu</p>
    <p className='sm:text-sm text-xs text-white'>Co-founder</p>
    <p className='sm:text-sm text-xs text-white mt-3 font-bold'>WebKul</p>
    </div>
    <img src="
https://media.istockphoto.com/id/1284067940/photo/colorful-backlight-modern-gaming-keyboard.jpg?s=612x612&w=0&k=20&c=GaivdOIBp6adF86R4BZlnp8brm4zWwlKxb6xkZ0Z3Jk=" alt="service" className="filter saturate-200 h-28 w-48 ml-40 md:ml-20 lg:h-72 lg:w-96 sm:h-72 sm:w-64  mr-14 sm:ml-40 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 mb-28"/>
</div>
)

export default Testimonial