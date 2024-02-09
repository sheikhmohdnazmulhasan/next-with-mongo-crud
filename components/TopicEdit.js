"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TopicEdit = ({ id, title, description }) => {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ newTitle, newDescription })
            });

            if (!res.ok) {
                throw new Error('Failed to update Topic');
            }

            router.refresh();

            router.push('/')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                <input className='border border-slate-500 py-2 px-4' placeholder='Topic Title' type="text" name="" id="" defaultValue={newTitle} onChange={(event) => setNewTitle(event.target.value)} />
                <input className='border border-slate-500 py-2 px-4' placeholder='Topic Description' type="text" name="" id="" defaultValue={newDescription} onChange={(event) => setNewDescription(event.target.value)} />
                <button type='submit' className='bg-green-500 py-2 px-4 w-fit'>Edit Topic</button>
            </form>
        </div>
    );
};

export default TopicEdit;