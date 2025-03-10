"use client"

import { useState, useEffect } from 'react';
import { About } from "@/components/ui/about";
import { Avarisplus } from "@/components/ui/avarisplus";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Main } from "@/components/ui/main";
import { MaisInfo } from "@/components/ui/maisinfo";
import { Viagens } from "@/components/ui/viagens";
import { WorldMap } from "@/components/ui/world-map";
import { LoadingScreen } from "@/components/ui/loading-screen";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('img');
      let loadedImages = 0;
      const totalImages = images.length;
      
      if (totalImages === 0) {
        setIsLoading(false);
        return;
      }
      
      const imageLoaded = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          setIsLoading(false);
        }
      };
      
      images.forEach(img => {
        if (img.complete) {
          imageLoaded();
        } else {
          img.addEventListener('load', imageLoaded);
          img.addEventListener('error', imageLoaded); 
        }
      });
    };
    
    const timer = setTimeout(() => {
      checkImagesLoaded();
      
      const safetyTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      
      return () => clearTimeout(safetyTimeout);
    }, 100);
    
    const maxTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(maxTimeout);
    };
  }, []);
  
  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={`overflow-x-hidden lg:overflow-x-visible ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <Header />
        <Main />
        <About />
        <Viagens />
        <Avarisplus />
        <WorldMap />
        <MaisInfo />
        <Footer />
      </div>
    </>
  );
}