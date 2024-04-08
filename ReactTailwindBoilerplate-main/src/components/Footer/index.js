
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight, faCopyright, faQuoteLeftAlt } from '@fortawesome/free-solid-svg-icons';


const Footer =()=>(
    <div className="p-5 mb-10">
        <img src="https://cdn.shopify.com/s/files/1/0388/3771/4989/files/PAYPAL_LOGO_480x480.png?v=1650301781" alt="logo" className="h-16 mb-5"/>
      <div className="flex justify-between mb-3">
      <ul className="flex cursor-pointer flex-wrap">
            <li className="sm:text-sm text-xs ml-4 sm:ml-0  text-bold text-blue-950 hover:underline font-bold">Help</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Contact</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Fees</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Security</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Apps</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Shop</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Enterprice</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Partners</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Feedback</li>
        </ul>
        <img src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg" alt="flag" className="size-5"/>
      </div>
        <hr/>
        <div className="flex justify-between mt-3 cursor-pointer ">
        <ul className="flex flex-wrap text-start">
            <li className="sm:text-sm text-xs text-blue-950 ml-4 sm:ml-0 hover:underline font-bold">About</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Newsroom</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Jobs</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Investor Relations</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline  font-bold">Values in Action</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Public Policy</li>
            <li  className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Sitemap</li>
           
        </ul>
        <ul className="flex flex-col text-start md:flex-row md:flex-wrap">
            <li className="sm:text-sm text-xs  text-gray-400 ml-4"><FontAwesomeIcon icon={faCopyright}/> 1999-2022</li>
            <li className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Accessibility</li>
            <li className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Privacy</li>
            <li className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold">Cookies</li>
            <li className="sm:text-sm text-xs text-blue-950 ml-4 hover:underline font-bold"> Legal</li>
        </ul>
        </div>
    </div>
)

export default Footer