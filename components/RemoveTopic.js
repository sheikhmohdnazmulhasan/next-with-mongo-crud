"use client"

import { useRouter } from 'next/navigation';
import React from 'react';
import { MdDelete } from 'react-icons/md';

const RemoveTopic = ({ id }) => {
    const router = useRouter();

    const deleteTopic = async () => {
        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, { method: "DELETE" });

            if (res.ok) {
                router.refresh();
            }
        };
    }

    return (
        <div onClick={deleteTopic} className='cursor-pointer'>
            <MdDelete size={24} />
        </div>
    );
};

export default RemoveTopic;