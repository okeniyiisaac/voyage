import { FaMinus, FaPlus } from 'react-icons/fa6'
import { useState } from 'react'
import { destinationLinks } from '../DropdownLinks';
import { Link } from 'react-router-dom';

const DestinationMobileNav = () => {
    const [showMobileDropdown, setShowDropdown] = useState(false);

    const displayMobileMenu = () => {
    setShowDropdown(!showMobileDropdown);
  }


  return (
    <div className='relative' onClick={displayMobileMenu}>
        <div className="flex justify-between items-center">
            <li>Destination</li>
            <span className='flex items-center'>{showMobileDropdown ? <FaMinus /> : <FaPlus />}</span>
        </div>

        {/* {showMobileDropdown && <article className="p-4 space-y-4">
            {destinationLinks.map((link, value) => (
            <div key={value} className="w-full hover:text-[#1CA8CB]">
                {link.name}
            </div>))}
        </article>} */}

        {showMobileDropdown && <div className="w-full">
            <ul className="text-[1rem] text-white p-4">
                <Link to="/destinationPage">
                    <li className="hover:text-[#1CA8CB] mb-4">Destination</li>
                </Link>
                <Link to="/destinationDetails">
                    <li className="hover:text-[#1CA8CB]">Destination Details</li>
                </Link>
            </ul>
        </div>}
    </div>
  );
};

export default DestinationMobileNav;
