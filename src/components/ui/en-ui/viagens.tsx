export const Viagens = () => {
    return(
        <div className="w-full flex justify-center mt-16 items-center py-20 px-4">
            <div className="max-w-[1300px] flex-col w-full flex justify-start px-2 lg:px-0 items-center ">
                <div className="flex items-center border-b-2 border-b-neutral-200 pb-4 w-full">
                    <h1 className="text-2xl font-semibold">Discover your ideal destination.</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-20 w-full">
                    <div className="rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <img src="https://latinexclusive.com/sites/default/files/styles/magazine_post_header_1170x790/public/guanabara_bay.jpg?itok=vaP2pPj4" alt="" className="rounded-lg"/>
                        <div className="bg-white relative px-4 shadow-md p-3 pb-5 -mt-[4rem] rounded-md">
                            <p className="text-[1.3rem] font-semibold text-neutral-900">Rio de Janeiro</p>
                            <p className="text-[13px] text-[#111]">Brazil</p>

                            <div className="pt-6">
                                <p>Starting from</p>
                                <h1 className="text-[20px]">USD <span className="font-bold text-[22px] text-red-500 drop-shadow-md">836.00</span></h1>
                                <p className="text-[13px] text-[#383838]">No taxes</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <img src="https://midias.eurodicas.com.br/wp-content/uploads/2019/04/mapa-da-espanha-1.jpg.webp" alt="" className="rounded-lg"/>
                        <div className="bg-white relative px-4 shadow-md pb-5 p-3 -mt-[4rem] rounded-md">
                            <p className="text-[1.3rem] font-semibold text-neutral-900">Málaga</p>
                            <p className="text-[13px] text-[#111]">Spain</p>

                            <div className="pt-6">
                                <p>Starting from</p>
                                <h1 className="text-[20px]">USD <span className="font-bold text-[22px] text-red-500 drop-shadow-md">568.00</span></h1>
                                <p className="text-[13px] text-[#383838]">No taxes</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <img src="/argentina.png" alt="" className="rounded-lg"/>
                        <div className="bg-white relative px-4 pb-5 shadow-md p-3 -mt-[4rem] rounded-md">
                            <p className="text-[1.3rem] font-semibold text-neutral-900">Buenos Aires</p>
                            <p className="text-[13px] text-[#111]">Argentina</p>

                            <div className="pt-6">
                                <p>Starting from</p>
                                <h1 className="text-[20px]">USD <span className="font-bold text-[22px] text-red-500 drop-shadow-md">816.00</span></h1>
                                <p className="text-[13px] text-[#383838]">No taxes</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <img src="https://a.eu.mktgcdn.com/f/100004519/N2BB4ohwclor2uLoZ7XMHgJmxOZaMOokMdQqqXQAq3s.jpg" alt="" className="rounded-lg"/>
                        <div className="bg-white relative px-4 pb-5 shadow-md p-3 -mt-[4rem] rounded-md">
                            <p className="text-[1.3rem] font-semibold text-neutral-900">Paris</p>
                            <p className="text-[13px] text-[#111]">France</p>

                            <div className="pt-6">
                                <p>Starting from</p>
                                <h1 className="text-[20px]">USD <span className="font-bold text-[22px] text-red-500 drop-shadow-md">1,450.00</span></h1>
                                <p className="text-[13px] text-[#383838]">No taxes</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <img src="https://investepiaui.com/wp-content/uploads/2023/09/Lisboa.jpg" alt="" className="rounded-lg"/>
                        <div className="bg-white relative px-4 pb-5 shadow-md p-3 -mt-[4rem] rounded-md">
                            <p className="text-[1.3rem] font-semibold text-neutral-900">Lisboa</p>
                            <p className="text-[13px] text-[#111]">Portugal</p>

                            <div className="pt-6">
                                <p>Starting from</p>
                                <h1 className="text-[20px]">USD <span className="font-bold text-[22px] text-red-500 drop-shadow-md">1,114.00</span></h1>
                                <p className="text-[13px] text-[#383838]">No taxes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}