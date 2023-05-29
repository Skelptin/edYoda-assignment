import React from 'react'
import logo from '../assets/Logo.png'
import { MdKeyboardArrowDown} from "react-icons/md"
import { AiOutlineSearch } from "react-icons/ai"

function Navbar() {

    const NavbarItem = ({ title, classProps }) => {
        return (
            <li className={`ms-4 cursor-pointer `}>
                {title}
            </li>
        )
    }

    return (
        <nav className='w-full fixed font-[Raleway,"sans"] flex items-center justify-between flex-wrap bg-white p-5'>
            <div className='flex pr-8 relative left-[7%]'>
                <img src={logo} alt="Logo" />
                <ul className='text-black relative left-[20%] md:flex hidden list-none flex-row justify-between items-center  flex-initial'>
                    <p className='flex items-center font-[Raleway , "sans"]'>Courses <MdKeyboardArrowDown className='ml-2' /> </p>
                    <p className='flex items-center relative left-[30%] font-[Raleway,"sans"]'>Programs <MdKeyboardArrowDown className='ml-2' /> </p>
                </ul>

            </div>




            <ul className='text-black relative  px-20  font-[Raleway,"sans"] right-[7%] md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                <div className='relative right-[15%]'>
                    <AiOutlineSearch />
                </div>
                <p className='relative left-[20%]'>
                    Log In
                </p>
                <div className=''>
                    <li className='mx-10 font-bold gradient relative left-[70%] text-white py-1 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                        JOIN NOW
                    </li>
                </div>
            </ul>

        </nav>
    )
}

export default Navbar