import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ElementPage = () => {
    const {id} = useParams()
    console.log(id)
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h2>hello java script{data.data.length}</h2>
        </div>
    );
};

export default ElementPage;