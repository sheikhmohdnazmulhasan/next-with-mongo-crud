"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const AddTopic = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();

    const handleAddTopic = async (event) => {
        event.preventDefault();

        if (!title || !description) {
            alert('title and description required');
            return
        }

        try {

            const res = await fetch('http://localhost:3000/api/topics', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ title, description })
            });

            if (res.ok) {
                router.refresh()
                router.push('/');

            } else {
                throw new Error('failed to create new topics');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form className='flex flex-col gap-3' onSubmit={handleAddTopic}>
                <input className='border border-slate-500 py-2 px-4' placeholder='Topic Title' type="text" name="" id="" onChange={(event) => setTitle(event.target.value)} />
                <input className='border border-slate-500 py-2 px-4' placeholder='Topic Description' type="text" name="" id="" onChange={(event) => setDescription(event.target.value)} />
                <button type='submit' className='bg-green-500 py-2 px-4 w-fit'>Add Topic</button>
            </form>
        </div>
    );
};

export default AddTopic;