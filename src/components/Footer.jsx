import { Link } from "react-router-dom";
import logo from '../assets/bd-logo.svg'
import fb from '../assets/bd_fb.svg'
import insta from '../assets/bd_insta.svg'
import linkedin from '../assets/bd_linkedin.svg'

export default function Footer() {
  return (
    <footer className="w-full bg-dark text-light py-20">
        <div className="container mx-auto mb-10 border-b border-[#D7D1CB] justify-between flex pb-8">
            <Link to='/'>
                <img src={logo} alt="Logo" />
            </Link>

            <ul className="flex gap-2">
                <li>
                    <Link to='/'>
                        <img className="text-light hover:text-blue" src={fb} alt="facebook" />
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <img src={insta} alt="Instagram" />
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <img src={linkedin} alt="Linkedin" />
                    </Link>
                </li>
                
            </ul>
        </div>

        <div className="container mx-auto md:flex">
            <div className="">
                <h3 className="font-medium text-light pb-4">UK Office</h3>
                <h3 className="font-medium text-light pb-4">
                    <Link className="block" to='tel:+ 44 (0) 193 232 00 64'>+ 44 (0) 193 232 00 64 </Link>
                    <Link className="block" to='mailto:info@bryant.dental'>info@bryant.dental</Link>
                </h3>
                <p>Hilltop Farm, Lyne Lane, Chertsey, KT16 0AW, UK</p>
            </div>

            <div className="md:pl-10 mt-10 md:mt-0">
                <h3 className="font-medium text-light pb-4">Australia Office</h3>
                <h3 className="font-medium text-light pb-4">
                    <Link className="block" to='tel:+ 62 (0) 7208 9592'>+ 62 (0) 7208 9592</Link>
                    <Link className="block" to='mailto:conciergeau@bryant.dental'>conciergeau@bryant.dental</Link>
                </h3>
                <p>Suite 18, 13U/175 Lower Gibbes, St Roseville NSW 2069</p>
            </div>
        </div>

        <div className="container mx-auto md:flex justify-between md:mt-16 mt-10 border-t border-[#777] md:border-t-0 pt-10">
            <div className="flex gap-4 text-light">
                <Link>Privacy Policy</Link>
                <Link>Cookie Policy</Link>   
                <Link>Terms and Conditions</Link>
            </div>
            <div className="text-[#777777]">
                <p>Bryant Medical Ltd | © All Rights Reserved.</p>
            </div>
        </div>

    </footer>
  )
}
