import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories(['Valorant', ...categories]);
    }

    return (
        <>
            {/* Title */}
           <h1>GifExpertApp</h1>

            {/* Input */}

            <button onClick={onAddCategory} >Add</button>
            {/* Gif List */}
            <ol>
                { categories.map( category => <li key={category}>{category}</li>) }
            </ol>
                {/* Gif Item */}
        </>
    )
}
