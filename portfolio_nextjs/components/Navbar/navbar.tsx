"use client"
import { useEffect, useState } from "react";
import "./navbar.css"
const Navbar = () => {
//scrolling hide/show
const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > prevScrollPos) { //on scroll down
        document.querySelector('.navbar-wrapper')?.classList.add('hide');
        } else { //on scroll up
        document.querySelector('.navbar-wrapper')?.classList.remove('hide');
        }
        setPrevScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        // to avoid memory leaks
        window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
    return(
        <nav className="navbar-wrapper flex justify-center gap-8 p-2">
            <div className="button">About</div>
            <div className="button">Skills</div>
            <div className="button">Projects</div>
            <div className="button">Contact</div>
        </nav>
    )
}
export default Navbar;