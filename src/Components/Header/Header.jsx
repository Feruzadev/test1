import React from 'react'
import "../Style/Header.css"
import headerLogo from "../Img/logo-black.png.png"
import { NavLink } from 'react-router-dom'
import { Button } from '@material-tailwind/react'

export default function Header() {
  return (
    <header className="steel-gradient pt-[20px] pb-[20px]">
      <div className='pl-[20px] pr-[20px]'>
        <div className='wrapper flex items-center justify-between'>
          <img className='w-[180px] h-[48px]' src={headerLogo} alt="" />
          <div className='flex items-center justify-between gap-[32px] text-[15px] plus-jakarta-sans font-bold'>
            <NavLink className=" hover:text-green-600">
              Home
            </NavLink>
            <NavLink className=" hover:text-green-600">
              TeeSpace
            </NavLink>
            <NavLink className=" hover:text-green-600">
              Shop
            </NavLink>
            <NavLink className=" hover:text-green-600">
              Blog
            </NavLink>
            <NavLink className=" hover:text-green-600">
              Pages
            </NavLink>
            <svg className=' hover:text-green-600' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" /></g></svg>
          </div>
          <div className='flex items-center justify-center gap-[32px]'>
            <svg  className=' hover:text-green-600' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.298 9.566H4.702a1.96 1.96 0 0 0-1.535.744a1.94 1.94 0 0 0-.363 1.66l1.565 6.408a3.9 3.9 0 0 0 1.4 2.072c.682.519 1.517.8 2.376.8h7.708c.859 0 1.694-.281 2.376-.8a3.9 3.9 0 0 0 1.4-2.072l1.565-6.407a1.94 1.94 0 0 0-1.044-2.208a2 2 0 0 0-.854-.197M8.087 13.46v3.895M12 13.46v3.895m3.913-3.895v3.895m2.935-7.789a6.8 6.8 0 0 0-2.006-4.82A6.86 6.86 0 0 0 12 2.75a6.86 6.86 0 0 0-4.842 1.996a6.8 6.8 0 0 0-2.005 4.82" /></svg>
            <Button>
              Sign up
            </Button>
          </div>
        </div>

      </div>
    </header>

  )
}
