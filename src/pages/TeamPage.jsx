import React, { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaFacebookF, FaArrowUp } from "react-icons/fa6";
import GlobalHeader from "../Components/GlobalHeader";
import FooterSection from "../Components/FooterSection";
import team1 from "../assets/imgs/team1.png"
import team2 from "../assets/imgs/team2.png"
import team3 from "../assets/imgs/team3.png"
import team4 from "../assets/imgs/team4.png"
import team5 from "../assets/imgs/team5.png"
import team6 from "../assets/imgs/team6.png"
import team7 from "../assets/imgs/team7.png"
import team8 from "../assets/imgs/team8.png"

const teamMembers = [
  {
    id: 1,
    name: "Emmanuel Omowaye",
    role: "Front-End Developer",
    img: team1,
  },
  {
    id: 6,
    name: "Omolola Odusanya",
    role: "Front-End Developer",
    img: team6,
  },
  {
    id: 2,
    name: "Olanrewaju Iluyemi",
    role: "Front-End Developer",
    img: team2,
  },
  {
    id: 3,
    name: "Kayode Oluwatobiloba",
    role: "Front-End Developer",
    img: team3,
  },
  {
    id: 4,
    name: "Isaac Okeniyi",
    role: "Front-End Developer",
    img: team4,
  },
  {
    id: 5,
    name: "Usama Omodara",
    role: "Front-End Developer",
    img: team5,
  },
  
  {
    id: 7,
    name: "Kazeem Aderonmu",
    role: "Front-End Developer",
    img: team7,
  },
  {
    id: 8,
    name: "Marvellous Ibigbami",
    role: "Front-End Developer",
    img: team8,
  },
];

const TeamPage = () => {

  const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / windowHeight) * 100;
        setScrollPercentage(scrolled);
        setIsVisible(scrollTop > 200); // show only after scrolling down
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
  return (
    <div>
      <GlobalHeader headerTitle="Team" headerLink="Team"/>
    <section className="py-10 px-6 sm:px-10 lg:px-16 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-8 max-w-8xl mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-lg overflow-visible relative w-full max-w-xs mx-auto"
          >
            {/* Image */}
            <div className="h-65 sm:h-72 md:h-80 rounded-2xl overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating white box */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 translate-y-1/2 
                            bg-white rounded-2xl shadow-md px-4 py-6 flex items-center justify-between w-[85%]">
              <div>
                <h3 className="font-[600] text-[1rem] text-gray-900">{member.name}</h3>
                <p className="text-gray-500 text-[.8rem]">{member.role}</p>
              </div>

             <div className="bg-white rounded-2xl shadow-lg overflow-visible relative">
  {/* Share button with hover social menu */}
  <div className=" absolute bottom-8 right-2 group">
    <button className="bg-[#1CA8CB] p-2 rounded-full w-9 h-9 sm:w-10 sm:h-10 text-white hover:bg-[#1CA8CB] transition">
      <FiShare2 size={20} className="w-5 h-5 items-center"/>
    </button>

    {/* Hidden menu (shows above the share button) */}
    <div
      className="absolute right-0 bottom-full mb-2 flex flex-col gap-2 
                 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
                 transition-all duration-500 origin-bottom-right"
    >
      <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-[#1CA8CB]">
        <FaXTwitter size={16} />
      </a>
      <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-[#1CA8CB]">
        <FaInstagram size={16} />
      </a>
      <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-[#1CA8CB]">
        <FaLinkedinIn size={16} />
      </a>
      <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-[#1CA8CB]">
        <FaFacebookF size={16} />
      </a>
    </div>
  </div>

</div>
</div>
          </div>
        ))}

      </div>
    </section>
    <FooterSection></FooterSection>
    <>
          {isVisible && (
            <div
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 cursor-pointer flex items-center justify-center 
              w-14 h-14 rounded-full bg-[#1CA8CB] shadow-xl border z-[2000]"
            >
              {/* Circular Progress */}
              <svg className="absolute w-16 h-16 -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#e5e7eb" // light gray bg circle
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#113D48" // Tailwind blue
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 28 - (scrollPercentage / 100) * 2 * Math.PI * 28
                  }`}
                  className="transition-all duration-200"
                />
              </svg>
    
              {/* Icon */}
              <FaArrowUp className="w-5 h-5 text-white relative z-[2000]"/>
            </div>
          )}
          </>
    </div>
  );
};

export default TeamPage;