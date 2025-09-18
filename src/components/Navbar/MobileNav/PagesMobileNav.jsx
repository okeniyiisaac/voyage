import { FaMinus, FaPlus } from 'react-icons/fa6'
import { useState } from 'react'
import { pagesLinks } from '../DropdownLinks';
import { Link } from 'react-router-dom';

const PagesMobileNav = () => {
    const [showMobileDropdown, setShowDropdown] = useState(false);

    const displayMobileMenu = () => {
    setShowDropdown(!showMobileDropdown);
  }


  return (
    <div className='relative' onClick={displayMobileMenu}>
        <div className="flex justify-between items-center">
            <li>Pages</li>
            <span className='flex items-center'>{showMobileDropdown ? <FaMinus /> : <FaPlus />}</span>
        </div>

        {/* {showMobileDropdown && <article className="p-4 space-y-4">
            {pagesLinks.map((link, value) => (
            <div key={value} className="w-full hover:text-[#1CA8CB]">
                {link.name}
            </div>))}
        </article>} */}

        {showMobileDropdown && <div className="w-full">
            <ul className="text-[1rem] text-white p-4">
                <Link to="/activitiesPage">
                    <li className="hover:text-[#1CA8CB] mb-4">Activites</li>
                </Link>
                <Link to="/activitiesDetails">
                    <li className="hover:text-[#1CA8CB] mb-4">Activities Details</li>
                </Link>
                <Link to="/teamPage">
                    <li className="hover:text-[#1CA8CB] mb-4">Our Team</li>
                </Link>
                <Link to="/teamDetails">
                    <li className="hover:text-[#1CA8CB] mb-4">Team Details</li>
                </Link>
                <Link to="/faqpage">
                    <li className="hover:text-[#1CA8CB]">Our FAQ</li>
                </Link>
            </ul>
        </div>}
    </div>
  );
};

export default PagesMobileNav;
