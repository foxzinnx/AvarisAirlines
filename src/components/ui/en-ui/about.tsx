"use client"

import { faLock, faMoneyCheckDollar, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const About = () => {
    // Se você estiver usando "use client" no topo deste arquivo, adicione esta lógica
    // para detectar o tamanho da tela
    const [isMobile, setIsMobile] = useState(true);
    
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);
    
    // Defina o tamanho do ícone com base no dispositivo
    const iconSize = isMobile ? { width: '34px', height: '34px', minWidth: '34px' } 
                              : { width: '48px', height: '48px', minWidth: '48px' };
    
    return (
        <div className="flex px-4 py-10 mt-20 md:mt-24 lg:mt-28 w-full justify-center items-center">
            <div className="max-w-[1300px] w-full flex flex-col justify-center items-center">
                <div className="text-center px-4">
                    <h1 className="font-bold text-3xl md:text-3xl text-[#131313]">Why choose Avaris?</h1>
                    <p className="pt-2 text-center text-sm font-medium md:text-base">We offer the best experience and comfort for your travels at affordable prices.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pt-10 lg:pt-16 w-full">
                    <div className="flex gap-4 flex-col items-center max-w-full sm:max-w-md mx-auto">
                        <div className="p-4 md:p-5 rounded-full bg-red-500">
                            <div className="p-2 md:p-3 rounded-full bg-red-500">
                                <FontAwesomeIcon 
                                    icon={faMoneyCheckDollar} 
                                    className="size-8 md:size-12 text-white" 
                                    style={iconSize}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center py-2">
                            <h2 className="font-bold text-xl md:text-[1.2rem] text-center">Prices that fit your budget</h2>
                            <p className="pt-1 text-center text-sm md:text-[15px]">We combine quality and affordability so you can travel more, paying less.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 flex-col items-center max-w-full sm:max-w-md mx-auto">
                        <div className="p-4 md:p-5 rounded-full bg-red-500">
                            <div className="p-2 md:p-3 rounded-full bg-red-500">
                                <FontAwesomeIcon 
                                    icon={faLock} 
                                    className="size-8 md:size-12 text-white" 
                                    style={iconSize}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center py-2">
                            <h2 className="font-bold text-xl md:text-[1.2rem] text-center">Safety first</h2>
                            <p className="text-center text-sm md:text-[15px] pt-1">Our modern fleet and highly trained team ensure that you reach your destination with complete peace of mind.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 flex-col items-center max-w-full sm:max-w-md mx-auto md:col-span-2 lg:col-span-1">
                        <div className="p-4 md:p-5 rounded-full bg-red-500">
                            <div className="p-2 md:p-3 rounded-full bg-red-500">
                                <FontAwesomeIcon 
                                    icon={faPlane} 
                                    className="size-8 md:size-12 text-white" 
                                    style={iconSize}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center py-2">
                            <h2 className="font-bold text-xl md:text-[1.2rem] text-center">Comfort that soars high</h2>
                            <p className="text-center text-sm md:text-[15px] pt-1">We offer spacious seats, in-flight entertainment, and excellent onboard service to make your trip unforgettable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};