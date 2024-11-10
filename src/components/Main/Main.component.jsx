import World from "../World/World.component";

const Main = () => {
    return (
        <>
            <div className="md:hidden bg-[#fff] h-[93vh]">
                <div className="absolute my-[2%] p-5 flex justify-center flex-col text-[#272932] text-center w-full">
                    <h2 className="text-4xl font-black">Los mejores
                        <span className="text-[#D8A47F]"> Audífonos,</span> <br /> al mejor <br />
                        <span className="text-[#D8A47F]"> Precio</span>
                    </h2>
                </div>

                <div className="h-full z-[10]">
                    <World />
                </div>

                <div>
                    <button className="absolute bottom-[9%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0F7173] px-7 py-4 rounded-2xl text-[#E7ECEF] font-bold active:bg-[#272932] max-w-32">
                        <a href="#products-section">Ver más</a>
                    </button>
                </div>
            </div>

            <div className="hidden h-[90vh] md:flex flex-col md:flex-row md:h-[90vh] bg-[#fff]">
                <div className="basis-6/12 flex flex-col justify-center content-end items-center">
                    <div className="text-[#272932] text-4xl md:text-5xl text-center font-black ml-[10%] mb-8">
                        <h2>Los mejores
                            <span className="text-[#D8A47F]"> Audífonos, </span>
                            al mejor
                            <span className="text-[#D8A47F]"> Precio.</span>
                        </h2>
                    </div>

                    <button className="bg-[#0F7173] px-6 py-4 rounded-2xl text-[#E7ECEF] font-bold active:bg-[#272932] ml-[10%]">
                        <a href="#products-section">Ver más</a>
                    </button>
                </div>

                <div className="basis-6/12">
                    <World />
                </div>
            </div>
        </>
    )
}

export default Main;