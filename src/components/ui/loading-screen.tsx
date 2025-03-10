"use client"

import Image from "next/image";
import React, { useEffect } from 'react';

export const LoadingScreen = () => {

    useEffect(() => {
        // pode rolar n man
        const scrollY = window.scrollY;
        
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        
        return () => {
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          window.scrollTo(0, scrollY);
        };
      }, []);

    return(
        <div className="fixed inset-0 bg-red-500 flex flex-col justify-center overflow-y-hidden overflow-x-hidden items-center">
            <div className="relative">
                <Image
                    src="/avião.png"
                    alt="Avião"
                    width={200}
                    height={150}
                    priority
                />
                
                <div className="flex mt-1 justify-center space-x-2">
                    <div className="h-3 w-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                    <div className="h-3 w-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="h-3 w-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
            </div>
        </div>
    );
} 