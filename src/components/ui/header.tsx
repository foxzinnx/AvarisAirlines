import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "../../app/li.css";

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
                        <li>Início</li>
                        <li>Voos</li>
                        <li>Promoções</li>
                        <li>Destinos</li>
                        <li>Contato</li>
                        <li className="hidden md:hidden lg:flex">Sobre nós</li>
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex gap-1 cursor-pointer hover:bg-neutral-100 transition-colors duration-300 rounded-full lg:rounded-3xl md:rounded-3xl border border-neutral-400 p-2 md:px-3 lg:px-3 items-center">
                        <FontAwesomeIcon icon={faGlobe} className="size-[17px] lg:size-[15px] text-[#0f0f0f]" />
                        <p className="text-[14px] font-medium hidden md:hidden lg:flex">Português</p>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 bg-red-500 p-2 px-3 rounded-3xl">
                        <FontAwesomeIcon icon={faCircleUser} className="size-6 text-white" />
                        <FontAwesomeIcon icon={faBars} className="size-[18px] text-white" />
                    </div>
                </div>
            </div>
        </header>
    );
}