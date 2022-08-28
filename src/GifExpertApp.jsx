import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

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
            <AddCategory />

            <button onClick={onAddCategory} >Add</button>
            {/* Gif List */}
            <ol>
                { categories.map( category => <li key={category}>{category}</li>) }
            </ol>
                {/* Gif Item */}
        </>
    )
}
