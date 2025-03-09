import { faBars, faCircleUser, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
    return(
        <div className="flex justify-center items-center w-full bg-[#EFEFEE] px-6 mt-36 py-16">
            <div className="max-w-[1300px] w-full flex flex-col gap-8">
                {/* Primeira seção com space-between */}
                <div className="w-full flex justify-between border-b-2 border-b-[#e0e0e0] pb-10 lg:pb-20 pt-4 flex-col lg:flex-row gap-10 lg:gap-0 items-center">
                    <div className="flex items-center gap-4">
                        <img src="/logoblack.png.png" alt="" width={170} className="drop-shadow-lg"/>
                        {/* <h1 className="text-2xl text-[#8a8a8a] pt-1">|</h1>
                        <p>Official website</p> */}
                    </div>
                    
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h1 className="font-medium">Follow us!</h1>
                        <div className="flex items-center pt-2 lg:pt-0 gap-2">
                            <img src="/insta.png" alt="" width={34}/>
                            <img src="/tiktok.png" alt="" width={26}/>
                            <img src="/linkedin.png" alt="" width={30}/>
                            <img src="/face.png" alt="" width={30}/>
                        </div>
                    </div>
                </div>
                
                {/* Segunda seção com os links */}
                <div className="w-full grid grid-cols-2 px-2 lg:grid-cols-4 border-b-2 border-b-[#dfdfdf] pt-10 justify-start pb-12 items-start gap-20 lg:gap-28">
                    <div className="flex flex-col gap-7">
                        <h1 className="font-bold text-red-500 text-[20px]">About Avaris Airlines</h1>
                        <div className="flex flex-col gap-3 justify-start font-light text-[14.5px]">
                            <p className="hover:scale-105 hover:text-red-500 hover:font-medium transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Who we are</p>
                            <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">News</p>
                            <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Work with us</p>
                            <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Highlights</p>
                            <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Accessibility</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-7">
                            <h1 className="font-bold text-red-500 text-[20px]">Legal Information</h1>
                            <div className="flex flex-col gap-3 justify-start items-start font-light text-[14px]">
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Terms and Conditions</p>
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Privacy Policy</p>
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Legal Information</p>
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Safety Tips</p>
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Transport Contract</p>
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Accessibility Plan</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-7">
                            <h1 className="font-bold text-red-500 text-[20px]">Other Services</h1>
                            <div className="flex flex-col gap-3 justify-start items-start font-light text-[14px]">
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Avaris Plus</p>
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Vacation Packages</p>
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Hotels</p>
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Avaris Cargo</p>
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Avaris Corporate</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-7">
                            <h1 className="font-bold text-red-500 text-[20px]">Help</h1>
                            <div className="flex flex-col gap-3 justify-start items-start font-light text-[14.5px]">
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Contact us</p>
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">Reports</p>
                                <p className="hover:scale-105 hover:text-red-500 hover:font-medium  transition-transform duration-300 cursor-pointer hover:drop-shadow-md">FAQs</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <p className="pt-4 text-[14px]">Copyright © Avaris Airlines 2025</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1 rounded-full lg:rounded-3xl md:rounded-3xl border border-neutral-400 p-2 md:px-3 lg:px-3 items-center">
                            <FontAwesomeIcon icon={faGlobe} className="size-[17px] lg:size-[15px] text-[#0f0f0f]" />
                            <p className="text-[14px] font-medium hidden md:hidden lg:flex">English</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}