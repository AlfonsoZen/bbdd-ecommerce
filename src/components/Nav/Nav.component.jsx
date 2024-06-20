import menuLogo from '../../assets/menu.svg'

const Nav = () => {
    return(
        <div className="flex justify-center bg-[#272932] text-[#E7ECEF] drop-shadow-md">
            
            <div className='py-6'>
                <h1 className="text-3xl font-black">VAISSTORE</h1>
            </div>

            <div className='absolute py-5 right-5'>
                <img src={menuLogo} alt="menu"/>
            </div>
        </div>
    )
}

export default Nav;