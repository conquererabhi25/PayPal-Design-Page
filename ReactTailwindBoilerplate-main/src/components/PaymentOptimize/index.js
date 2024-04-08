import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';


const PaymentOptimize =()=>(

<div className='bg-green-950 flex mb-5 h-96  flex-col sm:flex-row sm:mt-0'>
    <img src="https://t4.ftcdn.net/jpg/06/98/57/77/240_F_698577787_7BNpeZUHcw69RxwOncA3gqJxd8DFXHlv.jpg" alt="globe" className='opacity-75 w-full sm:w-1/2'/>
    <div className='sm:mt-20 mt-5 sm:ml-20 sm:w-64 w-full items-center p-3'>
        <h1 className='text-white lg:text-2xl text-lg sm:mb-5 mb-2'>Optimze your payment processing</h1>
        <p className='text-white text-xs sm:mb-5 mb-2'>Our minx of tool technology and relationships, and data can help you process more transactions successfully and capture more revenue.</p>
        <p className="sm:text-sm text-xs text-blue-400 hover:underline hover:font-bold cursor-pointer">Learn how to optimize payment processing <FontAwesomeIcon icon={faArrowRight}  className=''/></p>
    </div>
</div>
)

export default PaymentOptimize