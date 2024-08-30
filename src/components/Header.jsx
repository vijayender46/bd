import { useState, useEffect } from "react";
import NavigationOverlay from "./NavigationOverlay";
import { Link } from "react-router-dom";
import logo from '../assets/bd-logo.svg'
import menuIcon from '../assets/menu-icon.svg'
import CurrencyDropdown from "./CurrencyDropdown";
import CartTop from "./CartTop";


export default function Header() {
  // const [isToggled, setIsToggled] = useState(false);
  // const handleClick = () => setIsToggled(!isToggled);

  // State to track if the menu is toggled
  const [isToggled, setIsToggled] = useState(false);

  // Function to toggle the menu open/close state
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  // Function to close the menu
  const handleClose = () => {
    setIsToggled(false);
  };

  useEffect(() => {
    if (isToggled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isToggled]);


  return (
    <header className="header flex items-center px-5">
        <div className="container mx-auto flex justify-between items-center">

          <div className="bd-hamburger cursor-pointer flex items-center">
            <div onClick={handleClick} className={`icon transition-transform duration-500 ease-in-out hover:rotate-12 ${
  isToggled ? 'rotate-1' : 'rotate-0 hover:rotate-180 duration-500'
}`}
>
              <img className="" src={menuIcon} alt="Menu" />
            </div>
            <p className="ml-2 text-light font-light text-sm">Shop</p>
          </div>

          <div className="bd-logo w-[120px] md:w-auto">
            <Link to='/'>
            <img src={logo} alt="Logo" />
            </Link>
          </div>
        

          <div className="headerCart flex">
            <CurrencyDropdown styles={'md:mr-5 mr-2 font-light text-sm text-light min-w-14'}/>
            <CartTop />
          </div>

        </div>
        <NavigationOverlay toggleState={isToggled} handleClose={handleClose} closeIcon={'x'} />
    </header>
  )
}
