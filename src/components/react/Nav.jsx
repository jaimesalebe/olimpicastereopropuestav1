import React, { useState } from 'react'
import MenuBurger from './MenuBurger';
import links from '../../config/links.json';


const Nav = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <header className=' bg-neutral-900 shadow shadow-zinc-900 text-white w-full px-9 p-4 flex flex-wrap justify-between items-center'>
            <h1 className='font-bold text-xl'>
                <a href="/">Olimpica Stereo</a>
            </h1>
            <MenuBurger menu={menu} handleMenu={handleMenu}  classPropieties={"sm:hidden w-6"} />
            <nav className={`${menu ? 'h-96 opacity-100' : 'h-0 opacity-0'} sm:h-auto sm:opacity-100 overflow-hidden transition-all flex w-full sm:flex flex-col flex-nowrap justify-center items-center sm:w-auto`}>
                <ul className='flex flex-col flex-nowrap justify-end items-center sm:flex-row'>
                    {links.map(link => (
                        <li className='px-2 my-2 sm:my-0 hover:font-bold hover:text-orange-500' key={link.name}><a href={link.url}>{link.name}</a></li>
                    ))}
                </ul>
            </nav>

        </header>
    )
}

export default Nav