import menuLogo from '../../assets/menu.svg'
import shopLogo from '../../assets/earphones.svg'

const Nav = () => {
    return(
        <>
            <div className="flex justify-center align-middle bg-[#272932] text-[#E7ECEF] drop-shadow-md md:hidden">
                <div className='py-6 flex'>
                    <img src={shopLogo} alt="logo" className='w-10' />
                    <h1 className="text-3xl font-black">BBDD SHOP</h1>
                </div>

                <div className='absolute right-2 flex my-5 cursor-pointer'>
                    <img src={menuLogo} alt="menu"/>
                </div>
            </div>

            <div className="hidden md:flex align-middle bg-[#272932] text-[#E7ECEF] drop-shadow-md w-[100%]">
                <div className='pl-8 py-6 flex row gap-3'>
                    <img src={shopLogo} alt="logo" className='w-10' />
                    <h1 className="text-3xl font-black">BBDD SHOP</h1>
                </div>

                <div className='absolute flex right-0 pt-7 px-10 text-lg'>
                    <ul className='flex row gap-5'>
                        <li className='cursor-pointer hover:border-b-2'><a href="#products-section">Home</a></li>
                        <li className='cursor-pointer hover:border-b-2'><a href="">Tienda</a></li>
                        <li className='cursor-pointer hover:border-b-2'><a href="">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav;