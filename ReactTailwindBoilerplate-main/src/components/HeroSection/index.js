import Counter from '../counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

const HeroSection =()=>(
    <div className="bg-slate-100 flex flex-col ">
    <div className="flex flex-col item-center sm:flex-row p-12 sm:h-1/2 h-full  lg:h-96 mb-28  bg-blue-950 sm:justify-between">
    <div className="flex flex-col items-start lg:w-1/2 w-64  sm:ml-28 md:ml-12 md:w-72 lg:ml-40">
        <h1 className="lg:text-4xl lg:mt-24  sm:text-xl text-white text-xl">Capture the full potential <br/>of commerce</h1>
        <p className="text-white mt-4 text-sm">Paypal helps businesses to find active buyers,<br/>increase conversion across channels, and scale into new markets</p>
        <button type="button" className="bg-white text-blue-900 w-15 px-2 h-8 text-md rounded-2xl mt-4  hover:bg-blue-800 hover:text-white transition-all duration-300">Contact Sales</button>
    </div>
           
            {/* Overlapping Images */}
            <div className='w-1/2 sm:mr-16 '>
            <div className="relative mr-24 sm:mt-2 cursor-pointer">
               <div className="absolute h-48 w-48 lg:h-72 lg:w-96 sm:w-72 sm:h-52  lg:top-10 sm:top-20  md:top-8 top-9 left-28 z-10">
                 <img
                    src="https://img.freepik.com/free-photo/young-handsome-bearded-man-outside-street_1303-22229.jpg?t=st=1712121573~exp=1712125173~hmac=7e6ecbbaf9305086fb67975ff90fca80afeddff2783d48fdb71819832916faa5&w=996"
                     alt="services"
                       className="h-full filter saturate-200 transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
             </div>

  <div className="absolute lg:w-80 lg:h-80 h-48 w-48 sm:h-64 sm:w-64 top-24 left-0 z-20 ">
    <img
      src="https://i.ibb.co/6yc3sXY/Picsart-24-04-03-10-54-26-233.png"
      alt="services"
      className="h-full filter saturate-200 transition-transform duration-300 ease-in-out transform hover:scale-110"
    />
  </div>
</div>
            </div>

            {/* Counter parent container */}
        </div>
        <div className="mt-36 sm:mt-0 cursor-pointer rounded-tl-md animate-bounce rounded-tr-md border-gray-300 bg-white w-48 text-center h-8 pt-2 ml-auto lg:mr-72 sm:mr-16 shadow-t-md md:shadow-t-lg">
         <p className="text-sm transition-all duration-300 hover:-translate-y-1 ">PayPal Assistant   <FontAwesomeIcon icon={faArrowUpFromBracket}  className='ml-6 '/></p>
        </div>

        <div className="flex  sm:flex-row mt-10 sm:justify-center lg:w-full lg:ml-40">
        <div className="flex flex-col items-center sm:flex-row justify-between sm:w-3/4 md:w-[90vw] lg:w-[70vw]">
    <h3 className="lg:text-3xl sm:text-2xl text-lg text-center flex-wrap  sm:flex-nowrap mb-4  sm:mr-20 lg:mr-5 sm:w-52 lg:w-72 md:w-[35vw]" >
      PayPal is trusted by businesses and customers around the world
    </h3>
    <Counter />
  </div>
</div>
    </div>
) 


export default HeroSection