export const MaisInfo = () => {
    return (
        <div className="w-full flex justify-center items-center mt-8 md:mt-16 px-4 md:px-6 py-10 md:py-20">
            <div className="max-w-[1300px] p-4 md:p-10 py-10 md:py-20 w-full flex flex-col bg-red-500 rounded-xl md:rounded-2xl">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-2 justify-between items-center px-2 md:px-4 w-full">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <img src="/icon.png" alt="" className="w-32 md:w-40 lg:w-[160px] pb-3 md:pb-5"/>
                        <h1 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl">Your journey starts here</h1>
                        <p className="text-white text-base md:text-[17px] pt-1 font-medium">Get ready for your trip</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4 md:gap-7 mt-6 lg:mt-0">
                        <div className="flex items-center group cursor-pointer transform transition-all duration-300 border-b border-b-neutral-200 pb-4 w-full max-w-[500px] gap-3">
                            <img src="/passport.png" alt="" className="w-14 md:w-16 lg:w-[75px]"/>
                            <div className="flex w-full flex-col items-start">
                                <h1 className="text-base md:text-lg lg:text-[19px] font-semibold text-white">Don't forget the documentation</h1>
                                <p className="flex items-start text-xs md:text-sm lg:text-[14px] text-[#f5f5f5]">Make sure to bring a valid ID, and if necessary, a passport and visa.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center border-b border-b-neutral-200 pb-4 w-full max-w-[500px] gap-3">
                            <img src="/checkin.png" alt="" className="w-14 md:w-16 lg:w-[75px]"/>
                            <div className="flex w-full flex-col items-start">
                                <h1 className="text-base md:text-lg lg:text-[19px] font-semibold text-white">Check in</h1>
                                <p className="flex items-start text-xs md:text-sm lg:text-[14px] text-[#f5f5f5]">Check in online to avoid lines at the airport.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center pb-4 w-full max-w-[500px] gap-3">
                            <img src="/hour.png" alt="" className="w-14 md:w-16 lg:w-[75px]"/>
                            <div className="flex w-full flex-col items-start">
                                <h1 className="text-base md:text-lg lg:text-[19px] font-semibold text-white">Arrival Time</h1>
                                <p className="flex items-start text-xs md:text-sm lg:text-[14px] text-[#f5f5f5]">Arrive early to avoid any unforeseen issues (it is recommended to arrive 2 hours before for domestic flights and 3 hours for international flights).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}