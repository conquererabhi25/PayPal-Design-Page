import "../Navbar"
import Navbar from "../Navbar"
import HeroSection from "../HeroSection"
import Capabilities from "../Capabilities"
import Services from "../Services"
import PaymentOptimize from "../PaymentOptimize"
import BussinessPartners from "../BussinessPartners"
import Testimonial from "../Testimonial"
import Blog from "../Blog"
import Teams from "../Teams"
import Bussiness from "../BussinessSection"
import Footer from "../Footer"


const LandingPage =()=>(
    <div className="h-screen overflow-x-hidden">
        <Navbar/>
        <HeroSection/>
        <Capabilities/>
        <Services/>
        <PaymentOptimize/>
        <BussinessPartners/>
        <Testimonial/>
        <Blog/>
        <Teams/>
        <Bussiness/>
        <Footer/>
    </div>
)

export default LandingPage