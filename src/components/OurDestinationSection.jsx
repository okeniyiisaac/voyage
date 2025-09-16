import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import OurDestinationCard from "./OurDestinationCard";
import ButtonSecondary from "./utilities/ButtonSecondary";
import { Link } from "react-router-dom";

const OurDestinationSection = () => {
    useEffect(() => {
          AOS.init();
        }, []);
  return (
    <section data-aos="fade-right" data-aos-duration="2000" className="w-full lg:px-8 px-3 mt-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"> 
            {/* Left Content */}
            <div className="flex-1">
                <span className="text-[#1CA8CB] text-base font-medium sub-title mb-2">
                    Our Destination
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[3.5rem] leading-[2rem]">
                    Our Top Location For <br /> You Property
                </h2>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0">
                <Link to="/destinationPage">
                <ButtonSecondary buttonText="Learn More"/>
                </Link>
            </div>
        </div>

        <div className="mt-10 mx-auto flex justify-center">
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                modules={[Autoplay]}
                speed={3000} // smooth transition (2.5s)
                autoplay={{
                    delay: 1000, // 3s
                    disableOnInteraction: false, // keeps autoplay after manual interaction
                }}
                loop={true} // enables infinite loop
                breakpoints={{
          // mobile
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // tablets
          600: {
            slidesPerView: 2,
            spaceBetween: 15,
          },

          // tablets
          740: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // small laptops
          800: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // desktops
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },

          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
                >
                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://i.postimg.cc/wj13qLjh/life-s-captured-sparks-wdmubbjp1z-Q-unsplash.jpg" destinationTitle="United States" />
                </SwiperSlide>

                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://i.postimg.cc/dVCTYp62/italy.jpg" destinationTitle="Italy" />
                </SwiperSlide>

                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://i.postimg.cc/fTJ8xWWM/France.jpg" destinationTitle="France"/>
                </SwiperSlide>

                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://i.postimg.cc/ZKBLWfjR/japan.jpg" destinationTitle="Japan" />
                </SwiperSlide>

                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://i.postimg.cc/YSn34Jcv/united-kingdom.jpg" destinationTitle="United Kingdom"/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://i.postimg.cc/zBHnyvSQ/Australia.jpg" destinationTitle="Australia"/>
                </SwiperSlide>

                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://i.postimg.cc/GpVDnrwx/Canada.jpg" destinationTitle="Canada"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default OurDestinationSection