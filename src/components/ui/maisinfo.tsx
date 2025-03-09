export const MaisInfo = () => {
    return (
        <div className="w-full flex justify-center items-center mt-8 md:mt-16 px-4 md:px-6 py-10 md:py-20">
            <div className="max-w-[1300px] p-4 md:p-10 py-10 md:py-20 w-full flex flex-col bg-red-500 rounded-xl md:rounded-2xl">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-2 justify-between items-center px-2 md:px-4 w-full">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <img src="/icon.png" alt="" className="w-32 md:w-40 lg:w-[160px] pb-3 md:pb-5"/>
                        <h1 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl">Sua jornada começa aqui</h1>
                        <p className="text-white text-base md:text-[17px] pt-1 font-medium">Prepare-se para a sua viagem</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4 md:gap-7 mt-6 lg:mt-0">
                        <div className="flex items-center group cursor-pointer transform transition-all duration-300 border-b border-b-neutral-200 pb-4 w-full max-w-[500px] gap-3">
                            <img src="/passport.png" alt="" className="w-14 md:w-16 lg:w-[75px]"/>
                            <div className="flex w-full flex-col items-start">
                                <h1 className="text-base md:text-lg lg:text-[19px] font-semibold text-white">Não esqueça a documentação</h1>
                                <p className="flex items-start text-xs md:text-sm lg:text-[14px] text-[#f5f5f5]">Certifique-se de levar um documento de identidade válido e, se necessário, passaporte e visto.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center border-b border-b-neutral-200 pb-4 w-full max-w-[500px] gap-3">
                            <img src="/checkin.png" alt="" className="w-14 md:w-16 lg:w-[75px]"/>
                            <div className="flex w-full flex-col items-start">
                                <h1 className="text-base md:text-lg lg:text-[19px] font-semibold text-white">Faça seu check-in</h1>
                                <p className="flex items-start text-xs md:text-sm lg:text-[14px] text-[#f5f5f5]">Realize seu check-in online para evitar filas no aeroporto.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center pb-4 w-full max-w-[500px] gap-3">
                            <img src="/hour.png" alt="" className="w-14 md:w-16 lg:w-[75px]"/>
                            <div className="flex w-full flex-col items-start">
                                <h1 className="text-base md:text-lg lg:text-[19px] font-semibold text-white">Horário de Chegada</h1>
                                <p className="flex items-start text-xs md:text-sm lg:text-[14px] text-[#f5f5f5]">Chegue com antecedência para evitar imprevistos (recomenda-se 2h antes para voos domésticos e 3h para internacionais).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}