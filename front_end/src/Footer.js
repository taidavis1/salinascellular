import {React} from "react"
import { faPhone , faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer(){
    return(
        <footer className="bg-sky-100 cursor-pointer">
            <div className="mx-auto max-w-screen-xl px-6 pb-6 pt-8 lg:pt-16">
                <div className="flex flex-col text-center space-y-5 lg:space-y-0 lg:flex-row justify-center space-x-0 lg:space-x-6">
                    <div className="text-xl font-mono p-4 border-2 hover:opacity-60 border-green-500">
                        <FontAwesomeIcon className="text-green-500" icon={faPhone}></FontAwesomeIcon>
                        <a href="tel:8317588178" className="mx-2">Contáctanos</a>
                    </div>
                    <div className="text-xl font-mono hover:opacity-60  p-4 border-2 border-blue-400">
                        <FontAwesomeIcon className="text-blue-400" icon={faLocationDot} />
                        <a target="_blank" href="https://www.google.com/maps/dir//549+E+Market+St+Salinas,+CA+93905/@36.6773244,-121.6358335,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x808df8991de3fe57:0x17c3593185b0e5a2" className="mx-2">Ubicación</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};