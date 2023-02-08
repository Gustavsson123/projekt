import React from 'react'
import { Todo } from '../model'
import { AiFillEdit } from 'react-icons/ai'

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    return (
        <form className='todosSingle'>
            <span className="todosSingleText">
                {todo.todo}
                <div className="icon">
                    <span className="icon">
                        <AiFillEdit />
                    </span>
                    <span className="icon"></span>
                    <span className="icon"></span>
                </div>
            </span>
        </form>
    )
}

export default SingleTodo
