import React from 'react';
import CartWidget from "./CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import { useAppContext } from './Context/CartContext';


const Navbar = () => {

    return(
        
		<header id="mainheader">
			<nav className="navbar">
				<div className="container topnav">
					<div className="logo">
					<Link to="/Home">
                        M.G MADERA Y HIERRO 
                    </Link>
					</div>
                <ul>
                    <li>
                    <Link to="/Home">
                        Home
                    </Link>
                    </li>
                    

                    <li>
                    <Link to="/productos">
                        Productos
                    </Link>
                    </li>

                    <li>
                    <Link to="/Contacto">
                        Contacto
                    </Link>
                    </li>

                    <li>
                        <Link>
                        <CartWidget />
                        </Link>
                    </li>
                </ul>
			</div>
		</nav>
	</header>

		)
	}	

export default Navbar;
