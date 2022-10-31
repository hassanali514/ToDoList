import { useState } from "react";

const ToDoList = () => {
    const [inputList,setInput] = useState('');
    const [list,setLIst] = useState([]);
    const handleInput = (event) => {
        setInput(event.target.value);
    }
    const handleAddClick = () => {
        setLIst((oldItems) => {
            return [
                ...oldItems,
                inputList
            ]
        })
        setInput('');
    }
    return (
        <>
            <input type='text' value={inputList} onChange={handleInput}/>
            <button onClick={handleAddClick}>ADD</button>
            <ul>
            {
                list.map((value) => {
                    return <li>{value}</li>
                })
            }
            </ul>
        </>
    )
}
export default ToDoList;