import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        // const category = newCategory.split(' ')
        //     .map(word => word.charAt(0)
        //     .toUpperCase() + word.slice(1)
        //     .toLowerCase()).join(' ');

        if (categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories]);
    }

    return (
        <>
           <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={e => onAddCategory(e)}
            />
            
            { categories.map( category => (
                    <GifGrid key={category}
                        category={ category }
                    />
                )
            )}
            {/* Gif Item */}
        </>
    )
}
