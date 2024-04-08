import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Blog =()=>(
    <div className='flex flex-col items-center justify-center mb-10 mt-10 md:w-screen'>
    <div className="flex flex-col sm:flex-row items-center justify-center ">
       <div className="flex flex-col lg:mr-32 sm:mr-2 ">
        <div className='sm:w-96 w-72  mb-5'>
            <h1 className="sm:text-lg text-sm mb-2">Don't just consider inclusion on Global </h1>
            <p className="sm:text-sm  text-xs mb-2">What the VCP-DCV is, what to expect, and the recent and upcoming changes to the certification requirements.</p>
            <p className="text-sm text-blue-800 hover:underline hover:font-extrabold cursor-pointer">Read Case study <FontAwesomeIcon icon={faArrowRight}/></p>
        </div>
        <hr/>
        <div className='sm:w-96 w-72 mt-5'>
            <h1 className="sm:text-sm  text-xs mb-2">Terragrunt: Simplifying Infrastructure as Code for the cloud</h1>
            <p className="sm:text-sm  text-xs mb-2">What the VCP-DCV is, what to expect, and the recent and upcoming changes to the certification requirements.</p>
            <p className="text-sm text-blue-800 hover:underline hover:font-extrabold cursor-pointer">Read the Ebook <FontAwesomeIcon icon={faArrowRight}/></p>
        </div>
       </div>
       
       <div className='flex flex-col item-center justify-center sm:w-96 md:w-72 w-72 mt-8 '>
        <img src="https://t3.ftcdn.net/jpg/06/46/20/52/360_F_646205247_k4zVBz5tdHv5EUTfy56JxsTmB5nRip5c.jpg" alt="Plane" className='lg:w-96 lg:h-72 sm:w-80 sm:h-72 mb-5'/>
        <h1 className="sm:text-sm  text-xs mb-2">Experts share how to optimize your organization’s tech upskilling program</h1>
        <p className="sm:text-sm  text-xs mb-2">What the VCP-DCV is, what to expect,<br/> and the recent and upcoming changes to the certification requirements.</p>
            <p className="text-sm text-blue-800 hover:underline hover:font-extrabold cursor-pointer">Read the article <FontAwesomeIcon icon={faArrowRight}/></p>

       </div>

      
    </div>
     <div className='justify-center items-center flex flex-col sm:flex-row mt-16 bg-slate-100 p-3 lg:w-1/2 sm:w-[70vh]'>
     <p className='sm:text-sm text-xs'>Looking for an out-of-the-box commerce solution</p>
     <p className="sm:text-sm text-xs ml-4 text-blue-800 hover:underline hover:font-extrabold cursor-pointer">See how to get started today <FontAwesomeIcon icon={faArrowRight}/></p>
    </div>
    </div>
)


export default Blog