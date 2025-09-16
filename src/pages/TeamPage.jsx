import React, { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaFacebookF, FaArrowUp } from "react-icons/fa6";
import GlobalHeader from "../Components/GlobalHeader";
import FooterSection from "../Components/FooterSection";

const teamMembers = [
  {
    id: 1,
    name: "Isaac Brown",
    role: "Tourist Guide",
    img: "https://turmet-react.vercel.app/assets/img/team/02.jpg",
  },
  {
    id: 2,
    name: "Isreal Sophia",
    role: "Tourist Guide",
    img: "https://turmet-react.vercel.app/assets/img/team/01.jpg",
  },
  {
    id: 3,
    name: "Theresa Web",
    role: "Tourist Guide",
    img: "https://turmet-react.vercel.app/assets/img/team/03.jpg",
  },
  {
    id: 4,
    name: "Floyd Miles",
    role: "Tourist Guide",
    img: "https://turmet-react.vercel.app/assets/img/team/04.jpg",
  },
  {
    id: 5,
    name: "Courtney Henry",
    role: "Tourist Guide",
    img: "https://turmet-react.vercel.app/assets/img/team/05.jpg",
  },
  {
    id: 6,
    name: "Cody Fisher",
    role: "Tourist Guide",
    img: "https://turmet-react.vercel.app/assets/img/team/06.jpg",
  },
  {
    id: 7,
    name: "Guy Hawkins",
    role: "Tourist Guide",
    img: "https://turmet-react.vercel.app/assets/img/team/07.jpg",
  },
  {
    id: 8,
    name: "Guy Hawkins",
    role: "Tourist Guide",
    img: "https://turmet-react.vercel.app/assets/img/team/08.jpg",
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
                <h3 className="font-[630] text-[1.23rem] text-gray-900">{member.name}</h3>
                <p className="text-gray-500 text-[1.2rem]">{member.role}</p>
              </div>

             <div className="bg-white rounded-2xl shadow-lg overflow-visible relative">
  {/* Share button with hover social menu */}
  <div className=" absolute bottom-8 right-2 group">
    <button className="bg-cyan-500 p-2 rounded-full w-9 h-9 sm:w-10 sm:h-10 text-white hover:bg-cyan-600 transition">
      <FiShare2 size={20} className="w-5 h-5 items-center"/>
    </button>

    {/* Hidden menu (shows above the share button) */}
    <div
      className="absolute right-0 bottom-full mb-2 flex flex-col gap-2 
                 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
                 transition-all duration-500 origin-bottom-right"
    >
      <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-teal-500/70">
        <FaXTwitter size={16} />
      </a>
      <a href="#" className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-2 rounded-full hover:bg-teal-500/70">
        <FaInstagram size={16} />
      </a>
      <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-teal-500/70">
        <FaLinkedinIn size={16} />
      </a>
      <a href="#" className="bg-[#1CA8CB] text-white p-2 rounded-full hover:bg-teal-500/70">
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