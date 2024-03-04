import React from 'react'

const TopBar = () => {
  return (
    <>
    <div className="top-bar flex items-center justify-between px-24 bg-sky-900 text-white">
        <div className='py-2 flex items-center gap-1'>
        <ion-icon name="location"></ion-icon>
            <p className='text-sm'>Panchayat Road, Puran padhan, Balakati, Pin-752100</p>
        </div>
        <div className='py-2 flex items-center gap-1'>
        <ion-icon name="call"></ion-icon>
            <p className="text-sm">+919438782020</p>
        </div>
    </div>
    </>
  )
}

export default TopBar