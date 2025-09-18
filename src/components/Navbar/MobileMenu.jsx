import DestinationMobileNav from './MobileNav/DestinationMobileNav';
import TourMobileNav from './MobileNav/TourMobileNav';
import PagesMobileNav from './MobileNav/PagesMobileNav';
import BlogMobileNav from './MobileNav/BlogMobileNav';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookingButton from '../utilities/BookingButton';

const MobileMenu = () => {
    useEffect(() => {
            AOS.init();
          }, []);

  return (
    <section className='fixed lg:hidden block inset-0 w-full z-50 text-[14px]' data-aos="fade-left" data-aos-duration="500">
    <div className="grid font-medium bg-black pt-32 pb-10 px-5">
        <ul className="grid p-5 text-white cursor-pointer space-y-10">
          <Link to="/">
          <li>
            Home
          </li>
          </Link>
          <Link to="aboutPage">
          <li>
            About Us
          </li>
          </Link>
          <DestinationMobileNav/>
          <TourMobileNav/>
          <PagesMobileNav/>
          <BlogMobileNav/>
          <Link to="/contactPage">
          <li>
            Contact Us
          </li>
          </Link>
        </ul>

        <div className="">
          <Link to="/bookingPage">
          <BookingButton buttonText="Book Now"/>
          </Link>
        </div>
    </div>
    </section>
  )
}

export default MobileMenu