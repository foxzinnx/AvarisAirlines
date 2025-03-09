import { faCalendarDays, faMagnifyingGlass, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Main = () => {
    return(
        <div className="flex mt-20 w-full justify-center items-center px-4" data-aos="zoom-in">
            <div className="flex max-w-[1300px] w-full justify-center flex-col items-center">
                <Image 
                    src="/hero.png"
                    alt=""
                    height={1000}
                    width={1300}
                    className="rounded-3xl pl-4 lg:pl-0 md:pl-0 max-w-[600px] md:max-w-[1250px] lg:max-w-[1400px]"
                />
                
                <div className="max-w-[340px] md:max-w-[700px] pb-10 lg:max-w-[1210px] pl-7 p-5 w-full flex flex-col justify-start items-start relative rounded-3xl -mt-14 bg-white drop-shadow-md z-10">
                    <div className="flex justify-center md:justify-start lg:justify-start items-center gap-2 border-b-2 pb-2 border-b-neutral-200 w-full">
                        <div className="flex items-center gap-2 hover:bg-[#eeeeee] transition-all duration-300 rounded-2xl cursor-pointer p-2 px-4">
                            <FontAwesomeIcon icon={faPlaneDeparture} className="size-4" />
                            <p className="font-semibold">Voos</p>
                        </div>
                        <h1>|</h1>
                        <div className="flex items-center gap-2 hover:bg-[#eeeeee] transition-all duration-300 rounded-2xl cursor-pointer p-2 px-4">
                            <FontAwesomeIcon icon={faPlaneDeparture} className="size-4" />
                            <p className="font-semibold">Pacotes</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:flex-row py-2 px-4 mt-3 justify-start gap-4 items-start">
                        <div className="flex flex-col items-start">
                            <p className="font-medium">De</p>
                            <div className="flex p-3 px-4 mt-2 items-center gap-3 rounded-2xl border border-neutral-300">
                                <FontAwesomeIcon icon={faPlaneDeparture} className="size-5" />
                                <input placeholder="Rio de Janeiro (GIG)" className="w-full outline-none placeholder:font-medium" />
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="font-medium">Para</p>
                            <div className="flex p-3 px-4 mt-2 items-center gap-3 rounded-2xl border border-neutral-300">
                                <FontAwesomeIcon icon={faPlaneDeparture} className="size-5" />
                                <input placeholder="Escolha seu destino" className="w-full placeholder:font-medium outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="font-medium">Ida</p>
                            <div className="flex p-3 px-4 mt-2 items-center gap-3 rounded-2xl border border-neutral-300">
                                <FontAwesomeIcon icon={faCalendarDays} className="size-5" />
                                <input type="date" placeholder="Data" className="w-[12rem] lg:w-[6.5rem] no-datepicker placeholder:font-medium outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="font-medium">Volta</p>
                            <div className="flex p-3 px-4 mt-2 items-center gap-3 rounded-2xl border border-neutral-300">
                                <FontAwesomeIcon icon={faCalendarDays} className="size-5" />
                                <input type="date" placeholder="Data"  className="w-[12rem] lg:w-[6.5rem] no-datepicker placeholder:font-medium outline-none" />
                            </div>
                        </div>

                        <div className="flex p-4 gap-2 mt-7 cursor-pointer rounded-3xl w-full lg:w-[13rem] justify-center bg-red-500 items-center">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="size-6 text-white" />
                            <button className="flex cursor-pointer flex-nowrap outline-none border-none items-center text-white font-bold">Buscar Voos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}