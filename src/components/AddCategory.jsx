import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('One Punch');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    }

    return (
        <form onSubmit={ onSubmit }>
            <input type="text" 
              placeholder="Search gifs"
              value={ inputValue }
              onChange={ onInputChange }
            />
        </form>
    )
}
