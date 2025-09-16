import { FaArrowRightLong, FaPlay } from 'react-icons/fa6'
import ButtonSecondary from './utilities/ButtonSecondary'
import ButtonPrimary from './utilities/ButtonPrimary'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import youLink from "../assets/Indeed Error.webm"

const OurStorySection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
    <div className='lg:px-8 px-3 mt-20'>
        <section data-aos="fade-right" data-aos-duration="2000" className="w-full text-center pb-20">
            <div className="items-start lg:items-center gap-6 "> 
                {/* Left Content */}
                <div className="">
                    <span className="text-[#1CA8CB] text-base font-medium sub-title mb-2">
                        Watch Our Story
                    </span>
                    <div className='flex justify-center'>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[3.5rem] leading-[2rem] w-[65%]">
                            Unforgettable Travel Experiences Get Your Guide
                        </h2>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="flex flex-col lg:flex-row gap-5 mt-5">
                        <Link to="/contactPage">
                        <ButtonSecondary buttonText="Contact Us"/>
                        </Link>

                        <Link to="/bookingPage">
                        <ButtonPrimary buttonText="Book Now"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* <div className='flex justify-center'>
            <div className='h-[500px] w-[90%] overflow-hidden bg-fixed bg-cover rounded-3xl bg-center bg-[url(https://turmet-react.vercel.app/assets/img/video-bg.jpg)] bg-black/40 bg-blend-overlay flex justify-center items-center'>    
                <div className='bg-[#1CA8CB] h-24 w-24 rounded-full flex justify-center items-center text-white'>
                    <FaPlay />
                </div>     
            </div>
        </div> */}

    <div className="flex justify-center">
            <div className="relative h-[500px] w-[90%] overflow-hidden rounded-3xl flex justify-center items-center">
                
                {/* Background Video */}
                <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={youLink} // pass your video link here
                loop
                muted
                playsInline
                />

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

                {/* Play Button */}
                {!isPlaying && (
                <button
                    onClick={handlePlay}
                    className="relative z-10 bg-[#1CA8CB] h-24 w-24 rounded-full flex justify-center items-center text-white hover:scale-110 transition"
                >
                    <FaPlay size={30} />
                </button>
                )}

                {/* Close/Stop Button */}
                {isPlaying && (
                <button
                    onClick={handlePause}
                    className="absolute top-5 right-5 z-10 bg-black/60 p-3 rounded-full text-white hover:bg-black/80"
                >
                    <FaTimes size={20} />
                </button>
                )}
            </div>
    </div>
    </div>
    </>
  )
}

export default OurStorySection
