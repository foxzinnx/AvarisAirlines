export const Avarisplus = () => {
    return(
        <div className="w-full flex justify-center items-center mt-5 px-4 py-20">
            <div className="max-w-[1300px] w-full bg-red-500 flex flex-col md:flex-row overflow-hidden rounded-lg">
                <div className="md:w-1/2 p-8 flex flex-col justify-center order-2 md:order-0 lg:order-0">
                    <h1 className="font-bold text-white text-3xl">Venha ser Avaris Plus</h1>
                    <p className="text-white text-lg mt-4">Nosso plano plus garante viagens com até 75% de desconto</p>
                    <button className="mt-6 cursor-pointer bg-white text-red-500 font-bold py-3 px-6 rounded-lg w-fit">
                        Saiba mais
                    </button>
                </div>
                
                <div className="md:w-1/2 h-72 md:h-96 overflow-hidden self-end relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-500/30 to-transparent z-10"></div>
                    
                    <img
                        src="https://petapixel.com/assets/uploads/2022/05/how-to-take-photos-out-of-an-airplane-window-featured.jpg"
                        alt="Vista de avião"
                        className="w-full h-full object-cover transform -scale-x-100"
                    />
                </div>
            </div>
        </div>
    );
};