import React from 'react'
import Dark from '../assets/images/darkvslight.svg'

function MainLayouts() {
    return (
        <div>
            <header className='bg-stone-50'>
                <div className=' max-w-[1440px] mx-auto flex items-center justify-between '>
                    <div>
                        <h3 className='items-center font-extrabold text-2xl'>
                            Where in the world?
                        </h3>
                    </div>

                    <div className='flex items-center gap-2'>
                        <img className='cursor-pointer w-[20px] h-[20px]' src={Dark} alt="dark vs ligh svg images" />
                        <h3>Dark Mode</h3>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default MainLayouts