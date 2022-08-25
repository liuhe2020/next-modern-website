import Image from 'next/image';
import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='flex justify-between items-center navbar'>
      <div className='relative w-10 h-10'>
        <Image
          src={logo}
          alt='modern-website'
          layout='fill'
          objectFit='contain'
        />
      </div>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? 'text-secondary' : 'text-primary'
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <div className='w-10 h-10 relative z-10'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            layout='fill'
            objectFit='contain'
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } fixed top-0 left-0 w-screen h-screen bg-white`}
        >
          <ul className='list-none flex justify-center items-center flex-1 flex-col'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-3xl ${
                  active === nav.title ? 'text-secondary' : 'text-primary'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-10'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
