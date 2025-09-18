import { FaMinus, FaPlus } from 'react-icons/fa6'
import { useState } from 'react'
import { tourLinks } from '../DropdownLinks';
import { Link } from 'react-router-dom';

const TourMobileNav = () => {
    const [showMobileDropdown, setShowDropdown] = useState(false);

    const displayMobileMenu = () => {
    setShowDropdown(!showMobileDropdown);
  }


  return (
    <div className='relative' onClick={displayMobileMenu}>
        <div className="flex justify-between items-center">
            <li>Tour</li>
            <span className='flex items-center'>{showMobileDropdown ? <FaMinus /> : <FaPlus />}</span>
        </div>

        {/* {showMobileDropdown && <article className="p-4 space-y-4">
            {tourLinks.map((link, value) => (
            <div key={value} className="w-full hover:text-[#1CA8CB]">
                {link.name}
            </div>))}
        </article>} */}

            {showMobileDropdown && <div className="w-full">
                <ul className="text-[1rem] text-white p-4">
                    <Link to="/tourPage">
                        <li className="hover:text-[#1CA8CB] mb-4">Tour</li>
                    </Link>
                    <Link to="/tourDetails">
                        <li className="hover:text-[#1CA8CB]">Tour Details</li>
                    </Link>
                </ul>
            </div>}
    </div>
  );
};

export default TourMobileNav;
