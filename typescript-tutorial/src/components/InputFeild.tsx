import React, { useRef } from 'react'
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='input' onSubmit={handleAdd}>
            <input
                ref={inputRef}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className='inputBox'
                type="input"
                placeholder="Enter a task" />
            <button
                className='inputButton'
                type="submit"
                onSubmit={(e) => { handleAdd(e); inputRef.current?.blur(); }}>
                Add
            </button>
        </form>
    )
}

export default InputFeild
