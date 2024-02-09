import Link from 'next/link';
import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const getTopics = async () => {
    try {

        const res = await fetch('http://localhost:3000/api/topics', { cache: 'no-store' });

        if (!res.ok) {
            throw new Error('Failed to fetch topics');
        }

        return res.json();

    } catch (err) {
        console.log(err);
    }
}

const TopicList = async () => {

    const { topics } = await getTopics();


    return (
        <>
            {topics.map((t) => <div key={t._id} className='flex justify-between border p-4 border-slate-700 items-start gap-5 my-2'>
                <div className="">
                    <h2 className='text-xl font-bold'>{t?.title}</h2>
                    <p>{t?.description}</p>
                </div>
                <div className="flex gap-4">
                    <Link href={`/edit-topic/${t._id}`}><CiEdit size={24} /></Link>
                    <MdDelete size={24} />
                </div>
            </div>)}
        </>
    );
};

export default TopicList;