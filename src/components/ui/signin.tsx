"use client"

import Image from "next/image";
import "../../app/or.css"
import Link from "next/link";
import { useState } from "react";

export const SignIn = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    
    const [emailTouched, setEmailTouched] = useState(false);
    const [senhaTouched, setSenhaTouched] = useState(false);
    
    
    const handleEmailBlur = () => {
        setEmailTouched(true);
    };
    
    const handleSenhaBlur = () => {
        setSenhaTouched(true);
    };
    
    return(
        <div className="max-w-full min-h-screen flex justify-center items-center bg-[#f3f3f3] px-4 relative overflow-x-hidden">

            <div 
                style={{ 
                backgroundImage: "url('/wall.png')", 
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.15,
                zIndex: 1
                }}
            />
                    
            <div className="flex justify-center z-9999 rounded-lg drop-shadow-lg items-center border-t-8 border-t-red-500 bg-white max-w-md">
                <div className="flex flex-col justify-center p-11 items-center">
                    <div className="flex flex-col items-center">
                        <Image
                            src={"/avarislogo.png"}
                            alt=""
                            height={70}
                            width={70}
                        />
                        <p className="font-bold text-[1.6rem] pt-4">Bem-Vindo</p>
                        <p className="text-[#333333] text-[15px] font-medium">Acesse sua conta para continuar</p>
                    </div>

                    <div className="mt-6 flex flex-col gap-2">
                        <h1 className="text-[14.5px] font-medium">Email</h1>
                        <div className={`border-2 ${emailTouched && !email ? 'border-red-500' : 'border-neutral-300'} rounded-md h-12 flex items-center w-[330px]`}>
                            <input 
                                type="email" 
                                placeholder="email@mail.com" 
                                className={`w-full h-full rounded-md px-2 placeholder:text-[#808080] ${emailTouched && !email ? 'outline-red-500' : 'outline-neutral-400 focus:outline-2'} text-[15px]`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={handleEmailBlur}
                            />
                        </div>
                        {emailTouched && !email && (
                            <p className="text-red-500 text-[13px]">Insira um email</p>
                        )}
                    </div>

                    <div className="mt-6 flex flex-col gap-2">
                        <h1 className="text-[14.5px] font-medium">Senha</h1>
                        <div className={`border-2 ${senhaTouched && !senha ? 'border-red-500' : 'border-neutral-300'} rounded-md h-12 flex items-center w-[330px]`}>
                            <input 
                                type="password" 
                                placeholder="Senha" 
                                className={`w-full h-full rounded-md px-2 placeholder:text-[#808080] ${senhaTouched && !senha ? 'outline-red-500' : 'outline-neutral-400 focus:outline-2'} text-[15px]`}
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                onBlur={handleSenhaBlur}
                            />
                        </div>
                        {senhaTouched && !senha && (
                            <p className="text-red-500 text-[13px]">Insira uma senha</p>
                        )}
                    </div>

                    <div className="flex items-center justify-start w-full px-2 mt-6 gap-2">
                        <input type="checkbox" className="-mt-[1px]"/>
                        <label className="text-[13.5px] text-[#414141]">Manter-me conectado</label>
                    </div>

                    <Link href={"/pt"}>
                        <div className="mt-6 flex flex-col gap-2">
                            <div className="bg-red-500 cursor-pointer hover:bg-[#fc4242] transition-colors duration-300 rounded-md h-12 flex justify-center items-center w-[330px]">
                                <button className="text-white font-bold cursor-pointer text-[15.5px]">Entrar</button>
                            </div>
                        </div>
                    </Link>
                    

                    <div className="mt-5">
                        <p id="or">ou</p>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-2">
                        <div className="border border-neutral-300 hover:bg-neutral-100 cursor-pointer transition-colors duration-300 rounded-md h-12 flex gap-2 justify-center items-center w-[330px]">
                            <img src="https://img.icons8.com/?size=512&id=17949&format=png" alt="" width={30}/>
                            <p id="google">Faça login com Google</p>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center items-center">
                        <p id="entrar" className="text-[14px]">Não tem uma conta? <Link href={"/pt/signup"} className="text-red-500 font-bold text-[13.4px]" id="cadastro">Cadastre-se</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}