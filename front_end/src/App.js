import logo from './logo.svg';
import AppData from './Data/AppData.js';
import './App.css';
import Footer from './Footer.js';
import hpic from './img/Screenshot 2023-11-24 132812.png';
import DropDown from './Components/DropDown';

function App() {
  return (
    <main className='relative overflow-x-hidden'>

      <div className = "w-screen bg-pagebp lg:bg-pageb bg-no-repeat bg-center bg-cover h-screen relative">
      </div>

      <div className="mx-auto space-y-2 px-2 py-8 lg:py-12 bg-white/90">
        <div className='text-center'>
          <h1 className = "text-xl lg:text-3xl italic font-Monterast capitalize font-bold">Dirección de Salinas Cellular</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className=' overflow-hidden'>
            <img className='w-full h-full hover:scale-110 cursor-pointer ease-in-out transition-all duration-1000' src={hpic} />
          </div>
          <div>
            <iframe className='w-full p-2 lg:p-5 h-full' style={{border: "0"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.882570445944!2d-121.63840842372078!3d36.67732437228234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808df8991de3fe57%3A0x17c3593185b0e5a2!2s549%20E%20Market%20St%2C%20Salinas%2C%20CA%2093905!5e0!3m2!1sen!2sus!4v1700866834600!5m2!1sen!2sus"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <div className="mx-auto space-y-6 py-8 px-4 lg:py-12 bg-[#333B29]">
        <div className='text-center text-white space-y-2'>
          <h1 className = "text-xl lg:text-3xl italic font-Monterast capitalize font-bold">Tipo de Cambio Hoy Dia</h1>
          <h2 className = "text-md lg:text-lg italic font-Roboto tracking-wider capitalize font-bold">*En Cantidad de $500 mas de $500 Varea el Tipo de Cambio!</h2>
        </div>
        <div className=' justify-center flex'>
          <DropDown />
        </div>
        <div className = "flex text-white capitalize font-Monterast text-lg tracking-wider justify-center items-center">
            <div className = "grid grid-cols-2">
              {AppData.map((a , index) => (
                <>
                  <div key = {index} className = "border-2 px-12 py-4 text-center italic">{a.name}</div>
                  <div key = {index} className = "border-2 px-12 py-4 text-center">{a.price}</div>
                </>
              ))}
            </div>
        </div>
      </div>

      <div className="mx-auto py-8 px-4 lg:py-12 bg-white">

        <div className='text-center text-black space-y-2'>
          <h1 className = "text-2xl lg:text-4xl italic font-Monterast capitalize font-bold">quién somos</h1>
        </div>

        <div className=" mb-4 md:mb-12 mx-auto max-w-screen-xl cursor-pointer">
                <div className="grid grid-cols-1 text-justify md:gap-8">
                    <div className="col-span-2 group p-4 space-y-4 lg:space-y-8">
                        {/* <img className=" ease-in-out transition-opacity duration-150 delay-150 group-hover:opacity-60" src={hpic}></img> */}
                    </div>
                    <div className="p-4 space-y-4 lg:space-y-8 lg:text-justify lg:grid justify-center text-center">
                        <div className=" lg:flex lg:justify-center lg:items-center">
                            <div className="grid grid-cols-1 space-y-5">
                                <div className="">
                                   <ul className="space-y-2 text-xl font-Catamaran">
                                        <li>
                                            <a className="transition text-black " target="_blank"  rel="noreferrer" href = "https://www.google.com/maps/dir//549+E+Market+St+Salinas,+CA+93905/@36.6773244,-121.6358335,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808df8991de3fe57:0x17c3593185b0e5a2!2m2!1d-121.6358335!2d36.6773244?entry=ttu">
                                              Ubicación: 549 E Market St, Salinas, CA 93905
                                            </a>
                                        </li>
                                        <li>
                                            <a className="transition text-black " href="tel:8317588178">
                                                Telefono#: (831) 758-8178
                                            </a>
                                        </li>
                                   </ul>
                                </div>
                                <hr></hr>
                                <div>
                                    <div className="font-semibold text-xl font-Catamaran">Horario:</div>
                                    <ul className="space-y-4 text-lg mt-4">
                                        <li>
                                            <span className="">
                                                Lunes - Sabado: 10:00 am - 07:00 pm
                                            </span>
                                        </li>
                                        
                                        <li>
                                            <span href="" className=" transition">
                                                Domingo: 10:00 am - 06:00 pm
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
