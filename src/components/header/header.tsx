
"use client";
import {useState, useEffect} from "react";
import { Button, Navbar } from "flowbite-react";
import { Link} from "react-scroll";

const Header = () => {
  const [changeBackground, setChangeBackground] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 800) {
        setChangeBackground(true);
      } else {
        setChangeBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  return (
    <div className={`w-full fixed top-0 ${changeBackground? 'bg-gradient-to-r from-black to-gray-500': 'bg-gradient-none bg-white md:border-b md:border-gray-300'} py-4 z-30 shadow-xl`}>
        <Navbar fluid rounded className="bg-transparent w-full md:w-4/5 md:mx-auto">
        <Navbar.Brand href="/" className="h-10 w-44">
          <img src="/logo.svg" className="h-full w-full object-none object-center bg-center " alt="Flowbite React Logo" />
          
        </Navbar.Brand> 
        <div className="flex md:order-2 ">
            <Button className="text-xl py-2 bg-gradient-to-r from-black to-gray-500 font-bold hover:bg-gradient-to-l transition-all">Contact Us</Button>
            <Navbar.Toggle className={`${changeBackground? 'bg-white': ''}`}/>
        </div>
        <Navbar.Collapse >
            <Navbar.Link  active className={`cursor-pointer text-lg ${changeBackground? "text-gray-400": ""}`} >
              <Link to="home" smooth={true} duration={1000} className="text-lg">Home</Link>
            </Navbar.Link>
            <Navbar.Link className={`cursor-pointer text-lg ${changeBackground? "text-gray-400": ""}`}>
              <Link to="services" smooth={true} duration={1000} className="text-lg">Services</Link>
            </Navbar.Link>
            <Navbar.Link  className={`cursor-pointer text-lg ${changeBackground? "text-gray-400": ""}`}>
              <Link to="projects" smooth={true} duration={1000} className="text-lg">Projects</Link>
            </Navbar.Link>
            <Navbar.Link className={`cursor-pointer text-lg ${changeBackground? "text-gray-400": ""}`}>
              <Link to="news" smooth={true} duration={1000} className="text-lg">News</Link>
            </Navbar.Link>
            <Navbar.Link className={`cursor-pointer text-lg ${changeBackground? "text-gray-400": ""}`}>
              <Link to="testimonials" smooth={true} duration={1000} className="text-lg">Testimonials</Link>
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>

    </div>
  );
}

export default Header;
