import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";

const Navbar = () => {
    const [show, setShow] = useState(false);
    return(
        <nav>
            <div className="logo">ABHI</div>
            <div className={show ? "navLinks showmenu" : "navLinks"}> 
                <div className="links">
                    {
                        
                    }
                </div>
            </div>
        </nav>
    );
};