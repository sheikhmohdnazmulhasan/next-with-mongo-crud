import React from 'react';

const page = () => {
    return (
        <div>
            <form className='flex flex-col gap-3'>
                <input className='border border-slate-500 py-2 px-4' placeholder='Topic Title' type="text" name="" id="" />
                <input className='border border-slate-500 py-2 px-4' placeholder='Topic Description' type="text" name="" id="" />
                <button className='bg-green-500 py-2 px-4 w-fit'>Add Topic</button>
            </form>
        </div>
    );
};

export default page;