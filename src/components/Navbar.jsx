import React from 'react'
import TopBar from './TopBar'
import { menuData } from '../Links'
import { Link, NavLink } from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
    <>
    <header>
    <div>
      <TopBar/>
    </div>
      <nav className='nav-bar md:px-24 flex items-center justify-between shadow-sm'>
          <div className="logo">
            <Link>
            <img src="https://saisaburihospitalbalakati.com/images/logo-grey.png" alt="logo" className='w-52'/>
            </Link>
          </div>
          <ul className='flex items-center gap-8'>
            {
               menuData.map((link,index)=>{
               return (
                    <>
                      <li key={index} className='py-3 relative border-b-2 border-white hover:border-b-2 flex items-center gap-1 group'>
                        <NavLink to={`/${link.link}`} >{link.name}</NavLink>
                        {
                       link.submenu && <span className='flex items-center mt-1 text-slate-600'><ion-icon name="caret-down-outline"></ion-icon></span>
                      
                        }
                        {
                          link.submenu && 
                          <ul className='absolute top-14 border hidden group-hover:block bg-white min-w-60 z-30'>
                            <div className='absolute h-3 w-3 bg-white -z-10 -top-1 left-2 rotate-45'></div>
                          {link.submenus.map((elem,)=>{
                            return (
                              <>
                                <li key={index} className='p-2 border-b hover:bg-slate-100 duration-300'>
                                  <NavLink className=''>{elem.name}</NavLink>
                                </li>
                              </>
                            )
                          })}
                          </ul>
                        }
                      </li>
                    </>
                )
               }) 
            }
          </ul>
          <div className='user-tab'>
              <Link className=''>
               Login
              </Link>
          </div>
      </nav>
    </header>

    </>
    
  )
}

export default Navbar