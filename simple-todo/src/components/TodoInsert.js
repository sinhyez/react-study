import React from 'react';
import {MdAdd} from 'react-icons/md';

const TodoInsert = () => {
    return(
        <form className="todo-insert">
            <input placeholder="Insert to Todo" />
            <button>
                <MdAdd />
            </button>
        </form>
    );
}

export default TodoInsert;
