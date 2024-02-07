import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const TopicList = () => {
    return (
        <div className='flex justify-between border p-4 border-slate-700 items-center gap-5 my-2'>
            <div className="">
                <h2 className='text-xl font-bold'>Topic Title</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eius.</p>
            </div>
            <div className="flex gap-4">
                <CiEdit size={24}/>
                <MdDelete size={24}/>
            </div>
        </div>
    );
};

export default TopicList;