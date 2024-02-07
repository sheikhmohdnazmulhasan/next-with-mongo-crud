import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul className='flex gap-4'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/'}>About</Link>
                </li>
                <li>
                    <Link href={'/'}>Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;