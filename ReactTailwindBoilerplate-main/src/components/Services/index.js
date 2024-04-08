import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Services =()=>(
    <div className="flex flex-col justify-center h-fit lg:mt-10 sm:mt-2"> 
          
          {/*first image and info section */}
        <div className="flex flex-col sm:flex-row w-full items-center p-12 lg:h-96 sm:h-80 bg-slate-950 mb-0">
            <img src="
https://media.istockphoto.com/id/1183168799/photo/cropped-shot-of-female-barista-making-payment-by-customers-credit-card.jpg?s=612x612&w=0&k=20&c=aPk9tQWh7Q_s5pw9uO_2NuQmL4nfGGE6e69dlqO9Dbw=" alt="service" className="filter saturate-200 lg:h-80 lg:w-3/2 sm:h-64 lg:ml-40 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 lg:mt-36 sm:mt-48 aspect-auto"/>
            <div className="lg:w-64 lg:ml-36 sm:ml-16 sm:mt-16 mt-2">
                <h1 className="sm:text-2xl text-xl text-white leading-8 mb-3">Harness our powerful platform</h1>
                <p className="text-sm text-white mb-3">Accelerate growth and easily scale with our flexible and tools that can be customized for your exact use cases</p>
                <p className="text-sm text-blue-500 hover:underline hover:font-extrabold cursor-pointer">Learn about our platform <FontAwesomeIcon icon={faArrowRight}  className=''/></p>
            </div>
        </div>

        {/* Second Image and Data section */}
        <div className="w-screen flex flex-col items-center sm:flex-row sm:w-2/4 justify-between p-4  h-fit sm:ml-20  lg:ml-40 lg:mb-28 md:mb-10 sm:mb-0">
            <div className="w-screen lg:w-[30vw] sm:mt-20 mt-0 p-4 md:p-0 lg:ml-20">
                <h1 className="sm:text-2xl text-lg mb-3">Leverage our dedicated customer network</h1>
                <p className="text-sm mb-3">Accelerate growth and easily scale with our flexible and tools that can be customized for your exact use cases</p>
                <p className="text-sm  text-blue-800 hover:underline hover:font-extrabold cursor-pointer">Learn about our extensive network  <FontAwesomeIcon icon={faArrowRight}  className=''/></p>
            </div>
            <div>

           {/* Overlapping Images */}
            <div className="relative  sm:ml-16 lg:ml-0  mt-4 h-[30vh] mr-36 mb-2 md:h-[50vh]">
               <div className="absolute lg:h-72 h-36 w-48 sm:h-64 lg:w-96 sm:w-80 lg:top-10 sm:top-20 left-16 sm:left-20 z-10">
                 <img
                    src="https://newsroom.paypal-corp.com/image/Passkey_LifestyleV2.jpg"
                     alt="services"
                       className="h-full filter saturate-200 transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
    </div>

  <div className="absolute sm:w-48 h-24 w-28 sm:h-40 sm:top-64 top-14  sm:left-0 z-20">
    <img
      src="https://t4.ftcdn.net/jpg/06/60/88/21/240_F_660882161_bAdGH0Ub1thlJFYsorDt6boBHm7VNErl.jpg"
      alt="services"
      className="h-full filter saturate-200 transition-transform duration-300 ease-in-out transform hover:scale-110"
    />
  </div>
</div>

        
            </div>
        </div>
    </div>
)

export default Services