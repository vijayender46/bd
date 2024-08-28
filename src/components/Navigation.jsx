import { Link } from "react-router-dom";
import { menuItems } from "../constants";

function Navigation(handleClose) {
    return (
        <nav className="font-medium">
        <ul className="flex-col flex text-center">
          {menuItems.map((item) => (
            <li key={item.id} className="my-2">
              <Link to={item.link} className="text-3xl tracking-normal hover:tracking-widest text-dark hover:text-blue ease-in-out duration-500" onClick={handleClose}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
}

export default Navigation;