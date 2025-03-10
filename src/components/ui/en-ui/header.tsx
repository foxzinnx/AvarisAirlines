;import Image from "next/image";
import "../../../app/li.css";
import { UserMenu } from "./usermenu";
import LanguageSelector from "./language";

export const Header = () => {

    return(
        <header className="fixed top-0 right-0 left-0 z-50 bg-white px-6 py-5 w-full">
            <div className="max-w-[1400px] mx-auto w-full flex justify-between items-center">
                <Image 
                    src="/logoblack.png.png"
                    alt=""
                    width={130}
                    height={130}
                    className="max-w-[120px] lg:max-w-[130px]"
                />
                
                <div className="flex justify-center items-center">
                    <ul className="hidden md:flex lg:flex items-center px-4 gap-10">
                        <li>Home</li>
                        <li>Flights</li>
                        <li>Offers</li>
                        <li>Destinations</li>
                        <li>Contact</li>
                        <li className="hidden md:hidden lg:flex">About us</li>
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <LanguageSelector />
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}