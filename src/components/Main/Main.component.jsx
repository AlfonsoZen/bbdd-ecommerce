import World from "../World/World.component";

const Main = () => {
    return(
        <div className="bg-[#E7ECEF] h-[93%]">
            <div className="fixed my-[10%] p-5 flex justify-center flex-col text-[#272932] text-center">
                <h2 className="text-4xl font-black">Los mejores 
                    <span className="text-[#D8A47F]"> Audífonos,</span> <br /> al mejor <br />
                    <span className="text-[#D8A47F]"> Precio</span>
                </h2>
            </div>

            <div className="h-full z-[10]">
                <World/>
            </div>

            <div>
                <button className="absolute bottom-[9%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0F7173] px-7 py-4 rounded-2xl text-[#E7ECEF] font-bold active:bg-[#272932] max-w-32">
                    <p>Ver más</p>
                </button>
            </div>
        </div>
    )
}


export default Main;