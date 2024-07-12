import {Menu, X} from "lucide-react"
import { useState } from "react";
import logoi from "../assets/logoi.png";
import { navItems } from "../constants";
import './hero-animations.css';
const NavBar = () => {
    const [moblieDrawerOpen, setMoblieDrawerOpen] = useState(false);
    const toggleNavbar = ( ) => {
        setMoblieDrawerOpen(!moblieDrawerOpen)
    };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex items-center justify-between">
                <div className=" flex items-center flex-shrink-0"> 
                    <img className="h-10 w-10 mr-2" src={logoi} alt="logo" />
                    <span className="text-xl tracking-tight">itechplace</span>
                </div>
                <ul className=" hidden lg:flex ml-14 space-x-12 ">      
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a className="hover:text-blue-500" href={item.href}>{item.label}</a>
                    </li>
                ))}
                </ul>
                <div className=" hidden lg:flex justify-center space-x-12 items-center">
                    <a href="https://www.instagram.com/itechplace?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="py-2 px-3 border rounded-md button-scale-on-hover hover:text-blue-500 hover:border-blue-500">Instagram </a>
                    <a href="https://api.whatsapp.com/send/?phone=5511976247505&text&type=phone_number&app_absent=0wa.me/5511976247505" className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md button-scale-on-hover hover:text-stone-950"> Fale Conosco Aqui</a>
                </div>

                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {moblieDrawerOpen ? <X/> : <Menu/> }
                    </button>
                </div>
            </div>
                    {moblieDrawerOpen && (
                        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                            <ul>
                                {navItems.map((item,index) => (
                                    <li key={index} className="py-4">
                                        <a className="hover:text-blue-500" href={item.href}>{item.label}</a>

                                    </li>
                                ))}
                            </ul>
                            <div className="flex space-x-6">
                                <a href="https://www.instagram.com/itechplace?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="py-2 px-3 border rounded-md">
                                    Instagram
                                </a>
                                <a href="https://api.whatsapp.com/send/?phone=5511976247505&text&type=phone_number&app_absent=0wa.me/5511976247505" className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800"> 
                                Fale Conosco</a>
                            </div>
                        </div>
                    )}
        </div>
    </nav>
  )
}

export default NavBar
