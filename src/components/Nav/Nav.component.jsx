import menuLogo from '../../assets/menu.svg'
import shopLogo from '../../../public/earphones.svg'

const Nav = () => {
    return(
        <>
            <div className="flex justify-center align-middle bg-[#272932] text-[#E7ECEF] drop-shadow-md md:hidden">
                <div className='py-6'>
                    <h1 className="text-3xl font-black">VAISSHOP</h1>
                </div>

                <div className='absolute right-2 flex my-5 cursor-pointer'>
                    <img src={menuLogo} alt="menu"/>
                </div>
            </div>

            <div className="sm:hidden md:flex align-middle bg-[#272932] text-[#E7ECEF] drop-shadow-md w-[100%]">
                <div className='py-6 flex row'>
                    <img src={shopLogo} alt="logo" className='w-10' />
                    <h1 className="text-3xl font-black">VAISSHOP</h1>
                </div>

                <div className='absolute flex right-0 '>
                    <ul className='flex row gap-5'>
                        <li className='cursor-pointer hover:border-b-2'>Home</li>
                        <li className='cursor-pointer hover:border-b-2'>Tienda</li>
                        <li className='cursor-pointer hover:border-b-2'>Contacto</li>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Nav;