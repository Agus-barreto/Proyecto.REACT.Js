import React from 'react';
import CartWidget from "./CartWidget/CartWidget";
import { Link } from 'react-router-dom';


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

                    <li><CartWidget /></li>
                </ul>
			</div>
		</nav>
	</header>

		)
	}	

export default Navbar;
