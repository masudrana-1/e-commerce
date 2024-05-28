import Link from 'next/link';
import React from 'react';
import Menu from './Menu';

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
                {/* mobile  */}
            <div className='h-full flex items-center justify-between'>
                <Link href="/">
                    <div className='text-2xl tracking-wide'>Wwwshops</div>
                </Link>
                <Menu/>
            </div>

            {/* big screen  */}
            <div className='hidden md:flex items-center justify-between gap-8 h-full'>
                {/* left side  */}
                <div>
                    
                </div>

                {/* right side  */}
                <div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;