import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        const category = newCategory.split(' ')
            .map(word => word.charAt(0)
            .toUpperCase() + word.slice(1)
            .toLowerCase()).join(' ');

        if (categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories]);
    }

    return (
        <>
            {/* Title */}
           <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={e => onAddCategory(e)}
            />

            {/* Gif List */}
            <ol>
                { categories.map( category => <li key={category}>{category}</li>) }
            </ol>
                {/* Gif Item */}
        </>
    )
}
