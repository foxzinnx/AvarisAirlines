"use client";

import { useState, useRef, useEffect } from "react";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showMenu && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);
  
  return (
    <div className="relative">
      <div 
        ref={buttonRef}
        className="flex cursor-pointer items-center gap-3 bg-red-500 p-2 px-3 rounded-3xl"
        onClick={() => setShowMenu(!showMenu)}
      >
        <FontAwesomeIcon 
          icon={faCircleUser} 
          className="size-6 text-white" 
          style={{ width: '24px', height: '24px' }} 
        />
        <FontAwesomeIcon 
          icon={faBars} 
          className="size-[18px] text-white" 
          style={{ width: '18px', height: '18px' }} 
        />
      </div>
      
      {showMenu && (
        <div ref={menuRef} className="absolute right-0 top-full mt-2 bg-white shadow-md rounded-md overflow-hidden z-50 w-52">
          <div className="py-1 text-[15.4px]">
            <div className="pb-2 border-b-2 border-b-neutral-200">
                <Link href={"/en/signup"}>
                  <p className="px-4 py-2 hover:bg-red-500 hover:text-white rounded-2xl hover:font-semibold transition-all text-[15px] duration-300 cursor-pointer">Sign Up</p>
                </Link>
                
                <Link href={"/en/signin"}>
                  <p className="px-4 py-2 hover:bg-red-500 hover:text-white rounded-2xl transition-all duration-300 hover:font-semibold text-[15px] cursor-pointer">Login</p>
                </Link>
                
            </div>
            <div className="pt-2">
                <p className="px-4 py-2 hover:bg-red-500 hover:text-white rounded-2xl transition-all duration-300 hover:font-semibold cursor-pointer">Offers</p>
                <p className="px-4 py-2 hover:bg-red-500 hover:text-white rounded-2xl transition-all duration-300 hover:font-semibold cursor-pointer">Flights</p>
                <p className="px-4 py-2 hover:bg-red-500 hover:text-white rounded-2xl transition-all duration-300 hover:font-semibold cursor-pointer">Destinations</p>
                <p className="px-4 py-2 hover:bg-red-500 hover:text-white rounded-2xl transition-all duration-300 hover:font-semibold cursor-pointer">Contact</p>
                <p className="px-4 py-2 hover:bg-red-500 hover:text-white rounded-2xl transition-all duration-300 hover:font-semibold cursor-pointer">Exit</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};