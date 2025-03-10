"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./loading.css"

export default function Page() {
    const router = useRouter();
    
    useEffect(() => {
        router.prefetch("/pt");
        router.prefetch("/en");
        
        const detectLocationAndRedirect = async () => {
            try {
                
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                
                
                const redirectTime = 1000; 
                
                
                if (data.country === 'BR') {
                    setTimeout(() => {
                        router.push("/pt");
                    }, redirectTime);
                } else {
                    setTimeout(() => {
                        router.push("/en");
                    }, redirectTime);
                }
            } catch (error) {
                console.error("Erro ao detectar localização:", error);
                setTimeout(() => {
                    router.push("/pt");
                }, 1000);
            }
        };
        
        detectLocationAndRedirect();
        
    }, [router]);
    
    return (
        <div className="min-h-screen bg-red-500 flex flex-col justify-center items-center">
            <div className="relative">
                <Image 
                    src="/avião.png"
                    alt="Avião"
                    width={200}
                    height={150}
                    priority
                    className="animate-pulse"
                    style={{
                        animation: "pulse 1.5s infinite ease-in-out, float 3s infinite ease-in-out"
                    }}
                />
                
                <div className="flex mt-3 justify-center space-x-2">
                    <div className="h-3 w-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                    <div className="h-3 w-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="h-3 w-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
            </div>
        </div>
    );
}