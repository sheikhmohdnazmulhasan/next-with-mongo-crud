import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul className='flex justify-between max-w-3xl mx-auto my-4 bg-slate-600 p-3 text-white'>
                <li>
                    <Link className='text-2xl font-bold' href={'/'}>Nazmu's</Link>
                </li>
                <li>
                    <Link className='bg-white p-2 text-black' href={'/add-topic'}>Add Topic</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;