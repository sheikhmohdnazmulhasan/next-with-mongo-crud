import TopicEdit from '@/components/TopicEdit';
import React from 'react';

async function getTopicById(id) {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, { cache: "no-store" });

        if (!res.ok) {
            throw new Error('Failed to load topic')
        }

        return res.json()

    } catch (error) {
        console.log(error);
    }
}

const EditTopic = async ({ params }) => {
    const { id } = params;
    const { topic } = await getTopicById(id);
    const { title, description } = topic;
    return <TopicEdit id={id} title={title} description={description} />
};

export default EditTopic;