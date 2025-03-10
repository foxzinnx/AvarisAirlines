"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const LanguageSelector = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  const redirectToEnglish = () => {
    window.location.href = "/pt";
  };
  
  return (
    <div className="relative">
      <div 
        className="flex gap-1 cursor-pointer hover:bg-neutral-100 transition-colors duration-300 rounded-full lg:rounded-3xl md:rounded-3xl border border-neutral-400 p-2 md:px-3 lg:px-3 items-center"
        onClick={toggleDropdown}
      >
        <FontAwesomeIcon
          icon={faGlobe}
          className="size-[17px] lg:size-[15px] text-[#0f0f0f]"
          style={{ width: '17px', height: '17px', minWidth: '17px' }}
        />
        <p className="text-[14px] font-medium hidden md:hidden lg:flex">English</p>
      </div>
      
      {showDropdown && (
        <div className="absolute mt-1 py-1 w-32 bg-white rounded-2xl shadow-lg z-10 border border-gray-200">
          <div 
            className="px-10 flex justify-center font-medium rounded-2xl items-center gap-2 py-2 text-sm text-[#0f0f0f] hover:bg-gray-100 cursor-pointer"
            onClick={redirectToEnglish}
          >
            <FontAwesomeIcon
                icon={faGlobe}
                className="size-[17px] lg:size-[15px] text-[#0f0f0f]"
                style={{ width: '17px', height: '17px', minWidth: '17px' }}
            />
            Portuguese
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;