import React from 'react';
import { App} from './App';

export function Article() {
    return (
        <div>
            {articleData ? (
                <div>
                    <h1>{articleData.title}</h1>
                    <p>{articleData.content}</p>
                    <p>{articleData.tags}</p> 
                    <button>Back to Wiki List</button>               
                    </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );

}