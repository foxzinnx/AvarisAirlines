import { faLock, faMoneyCheckDollar, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const About = () => {
    return (
        <div className="flex px-4 py-10 mt-20 md:mt-24 lg:mt-28 w-full justify-center items-center">
            <div className="max-w-[1300px] w-full flex flex-col justify-center items-center">
                <div className="text-center px-4">
                    <h1 className="font-bold text-3xl md:text-3xl text-[#131313]">Porque escolher a Avaris?</h1>
                    <p className="pt-2 text-center text-sm font-medium md:text-base">Oferecemos a melhor experiência e conforto em suas viagens com preços acessíveis.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pt-10 lg:pt-16 w-full">
                    <div className="flex gap-4 flex-col items-center max-w-full sm:max-w-md mx-auto">
                        <div className="p-4 md:p-5 rounded-full bg-red-500">
                            <div className="p-2 md:p-3 rounded-full bg-red-500">
                                <FontAwesomeIcon icon={faMoneyCheckDollar} className="size-8 md:size-12 text-white" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center py-2">
                            <h2 className="font-bold text-xl md:text-[1.2rem] text-center">Preços que cabem no seu bolso</h2>
                            <p className="pt-1 text-center text-sm md:text-[15px]">Combinamos qualidade e acessibilidade para que você possa viajar mais, pagando menos.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 flex-col items-center max-w-full sm:max-w-md mx-auto">
                        <div className="p-4 md:p-5 rounded-full bg-red-500">
                            <div className="p-2 md:p-3 rounded-full bg-red-500">
                                <FontAwesomeIcon icon={faLock} className="size-8 md:size-12 text-white" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center py-2">
                            <h2 className="font-bold text-xl md:text-[1.2rem] text-center">Segurança em primeiro lugar</h2>
                            <p className="text-center text-sm md:text-[15px] pt-1">Nossa frota moderna e equipe altamente treinada garantem que você chegue ao seu destino com total tranquilidade.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 flex-col items-center max-w-full sm:max-w-md mx-auto md:col-span-2 lg:col-span-1">
                        <div className="p-4 md:p-5 rounded-full bg-red-500">
                            <div className="p-2 md:p-3 rounded-full bg-red-500">
                                <FontAwesomeIcon icon={faPlane} className="size-8 md:size-12 text-white" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center py-2">
                            <h2 className="font-bold text-xl md:text-[1.2rem] text-center">Conforto que voa alto</h2>
                            <p className="text-center text-sm md:text-[15px] pt-1">Oferecemos assentos espaçosos, entretenimento a bordo e serviço de bordo de excelência para tornar sua viagem inesquecível.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};