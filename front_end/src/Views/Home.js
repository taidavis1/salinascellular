import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate} from "@fortawesome/free-solid-svg-icons";
import telBack from "../img/telBack.png";
import ButtonHome from "../Components/ButtonHome.js";
import Cricket from "../img/Cricket.png";
import Att from "../img/att.jpg";
import Boost from "../img/Boost.png";
import Jbl from "../img/jbl.png";

export default function Home() {
    return (
        <section style = {{fontFamily: 'Helvetica Neue'}}>
            <div className = "w-screen bg-pageb bg-no-repeat bg-center bg-cover h-[550px] relative">
                <div className=" absolute w-full top-1/3 lg:top-1/2">
                    <div className=" flex justify-center lg:p-0 p-5 text-center">
                        <div className=" bg-[#FFFFFF] shadow-md lg:shadow-lg rounded-full flex py-2 w-full space-x-4 lg:space-x-6 justify-center place-items-center text-center lg:w-[550px] lg:py-7">
                            <FontAwesomeIcon className=" lg:text-4xl text-orange-400" icon={faCertificate} />
                            <span style={{fontFamily: "Arial"}}  className=" tracking-wide font-bold text-2xl lg:text-4xl ">Salinas Cellular</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-black w-screen p-6 lg:p-12 text-white">
                <div className=" flex flex-col text-center justify-center space-y-5 lg:space-y-8">
                    <div className="">
                        <span className=" tracking-normal leading-none font-bold text-4xl lg:text-7xl capitalize">servicios de dinero</span>
                    </div>
                    <div className=" flex justify-center">
                        <div className="lg:w-1/3">
                            <span className=" tracking-tight text-xl lg:text-4xl">
                                Podemos enviar a diferentes empresas en México, hasta 25 compañías distintas como Elektra, Bancoppel y más
                            </span>
                        </div>
                    </div>
                    <ButtonHome name = "Mande con nosotros" />
                </div>
            </div>
            <div className=" bg-white lg:py-12 lg:px-24">
                <div className=" grid lg:grid-cols-2 lg:gap-6">
                    <div className=" flex flex-col py-6 lg:py-16 space-y-4 lg:space-y-6">
                        <div className=" text-center">
                            <h1 className="tracking-normal leading-none font-bold text-4xl lg:text-7xl capitalize">Telefonos liberados</h1>
                        </div>
                       <div className=" text-center lg:px-0 px-8">
                            <span className=" text-xl lg:text-2xl">
                                Descubre nuestra exclusiva colección de teléfonos de última generación, incluyendo iPhones, 
                                Samsungs y Motorolas, y enriquece tu experiencia tecnológica con nuestra amplia gama de 
                                accesorios únicos para todo tipo de dispositivos.
                            </span>
                       </div>
                        <ButtonHome name = "Seleccion de Telefonos" />
                    </div>
                    <div className=" flex">
                        <img src={telBack} />
                    </div>
                </div>
            </div>
            <div className=" bg-black p-6 text-center space-y-2 lg:space-y-8 text-white">
                <h1 className=" lg:mt-4 tracking-normal leading-none font-bold text-4xl lg:text-7xl capitalize">Boost mobile cricket & AT&T</h1>
                <div className=" flex justify-center">
                    <div className=" grid lg:grid-cols-2 lg:gap-12 max-w-screen-lg">
                        <div className=" grid grid-cols-2 p-6 gap-2 lg:gap-4">
                            <div className=" flex flex-col space-y-2 lg:space-y-4">
                                <img className=" rounded-lg" src={Cricket} />
                                <img className=" rounded-lg" src={Att} />
                            </div>
                            <div className=" flex items-center">
                                <img className=" rounded-full" src={Boost} />
                            </div>
                        </div>
                        <div className=" flex lg:space-y-4 flex-col justify-center">
                            <ButtonHome name = "Seleccion de Servicios" />
                            <span className=" text-xl lg:text-2xl">
                                ¡Ven y descubre la comodidad de activar y adquirir teléfonos con nosotros, 
                                ofreciendo opciones de operadoras 
                                líderes como Cricket, Boost Mobile y AT&T, todo en un solo lugar para tu conveniencia!
                            </span>                        
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-white lg:py-12 lg:px-24">
                <div className=" grid lg:grid-cols-2 lg:gap-6">
                    <div className=" flex">
                        <img src={Jbl} />
                    </div>
                    <div className=" flex flex-col py-6 lg:py-16 space-y-2 lg:space-y-4">
                        <div className="">
                            <h1 className="tracking-normal leading-none font-bold text-4xl lg:text-7xl capitalize text-center">JBL</h1>
                        </div>
                       <div className=" flex justify-center">
                            <div className="text-center lg:px-0 px-6 lg:w-3/4">
                                <span className=" text-xl lg:text-2xl">
                                    Explora lo último en sonido con nuestra gama de altavoces y auriculares JBL, y más, 
                                    ¡perfectos para elevar tu experiencia auditiva a un nivel superior
                                </span>
                            </div>
                       </div>
                        <ButtonHome name = "Seleccion de bocinas" />
                    </div>
                </div>
            </div>
            <div className=" bg-pagebg w-screen relative bg-center h-[400px] lg:h-[550px] bg-cover bg-no-repeat"></div>
            <div className=" bg-white py-6 px-2 lg:py-12 lg:px-24">
                <div className=" flex flex-col space-y-4 lg:space-y-6 lg:justify-center text-center">
                    <h1 className="tracking-normal leading-none font-bold text-4xl lg:text-7xl capitalize text-center">Donde Estamos?</h1>
                    <div className=" flex justify-center">
                        <div className=" lg:w-1/3 lg:px-0 px-5 text-center">
                            <span className="text-xl lg:text-2xl">
                                Bienvenidos a Salinas Cellular! Ubicados en 
                                549 E Market St, Salinas, CA 93906, 
                                somos tu destino ideal para todas tus necesidades de telefonía móvil.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}