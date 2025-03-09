export const Viagens = () => {
    return(
        <div className="w-full flex justify-center mt-16 items-center py-20 px-4">
            <div className="max-w-[1300px] flex-col w-full flex justify-start px-2 lg:px-0 items-center ">
                <div className="flex items-center border-b-2 border-b-neutral-200 pb-4 w-full">
                    <h1 className="text-2xl font-semibold">Descubra seu destino ideal</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-20 w-full">
                    <div className="rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <img src="https://static.independent.co.uk/2024/09/26/15/iStock-1463288473-1.jpg" alt="" className="rounded-lg"/>
                        <div className="bg-white relative px-4 shadow-md p-3 pb-5 -mt-[4rem] rounded-md">
                            <p className="text-[1.3rem] font-semibold text-neutral-900">Los Angeles</p>
                            <p className="text-[13px] text-[#111]">Estados Unidos</p>

                            <div className="pt-6">
                                <p>A partir de</p>
                                <h1 className="text-[20px]">BRL <span className="font-bold text-[22px] text-red-500 drop-shadow-md">4.486,50</span></h1>
                                <p className="text-[13px] text-[#383838]">Sem taxas</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <img src="https://midias.eurodicas.com.br/wp-content/uploads/2019/04/mapa-da-espanha-1.jpg.webp" alt="" className="rounded-lg"/>
                        <div className="bg-white relative px-4 shadow-md pb-5 p-3 -mt-[4rem] rounded-md">
                            <p className="text-[1.3rem] font-semibold text-neutral-900">Málaga</p>
                            <p className="text-[13px] text-[#111]">Espanha</p>

                            <div className="pt-6">
                                <p>A partir de</p>
                                <h1 className="text-[20px]">BRL <span className="font-bold text-[22px] text-red-500 drop-shadow-md">7.448,92</span></h1>
                                <p className="text-[13px] text-[#383838]">Sem taxas</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <img src="https://einvestidor.estadao.com.br/wp-content/uploads/2024/08/adobestock-67849317_190820244705.jpeg.webp" alt="" className="rounded-lg"/>
                        <div className="bg-white relative px-4 pb-5 shadow-md p-3 -mt-[4rem] rounded-md">
                            <p className="text-[1.3rem] font-semibold text-neutral-900">Roma</p>
                            <p className="text-[13px] text-[#111]">Itália</p>

                            <div className="pt-6">
                                <p>A partir de</p>
                                <h1 className="text-[20px]">BRL <span className="font-bold text-[22px] text-red-500 drop-shadow-md">6.632,25</span></h1>
                                <p className="text-[13px] text-[#383838]">Sem taxas</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <img src="https://a.eu.mktgcdn.com/f/100004519/N2BB4ohwclor2uLoZ7XMHgJmxOZaMOokMdQqqXQAq3s.jpg" alt="" className="rounded-lg"/>
                        <div className="bg-white relative px-4 pb-5 shadow-md p-3 -mt-[4rem] rounded-md">
                            <p className="text-[1.3rem] font-semibold text-neutral-900">Paris</p>
                            <p className="text-[13px] text-[#111]">França</p>

                            <div className="pt-6">
                                <p>A partir de</p>
                                <h1 className="text-[20px]">BRL <span className="font-bold text-[22px] text-red-500 drop-shadow-md">6.986,51</span></h1>
                                <p className="text-[13px] text-[#383838]">Sem taxas</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <img src="https://investepiaui.com/wp-content/uploads/2023/09/Lisboa.jpg" alt="" className="rounded-lg"/>
                        <div className="bg-white relative px-4 pb-5 shadow-md p-3 -mt-[4rem] rounded-md">
                            <p className="text-[1.3rem] font-semibold text-neutral-900">Lisboa</p>
                            <p className="text-[13px] text-[#111]">Portugal</p>

                            <div className="pt-6">
                                <p>A partir de</p>
                                <h1 className="text-[20px]">BRL <span className="font-bold text-[22px] text-red-500 drop-shadow-md">7.724,23</span></h1>
                                <p className="text-[13px] text-[#383838]">Sem taxas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}