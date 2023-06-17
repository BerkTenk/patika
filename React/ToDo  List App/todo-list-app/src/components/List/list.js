import React, { useState } from 'react'

function List({ todos }) {
    const [filterTodo, setFilterTodo] = useState("");
    const filtered = todos.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterTodo.toLocaleLowerCase())
        );
    });
    return (
        <div>
            <input placeholder='Filter ' value={filterTodo} onChange={(e) => setFilterTodo(e.target.value)} />
            <ul className='list'>
                {filtered.map((todo, i) => (
                    <li key={i}>
                        <span>{todo.todoName}</span>
                        
                    </li>
                ))}
            </ul>
            <p>{filtered.length} items left </p>
        </div>
    )
}

export default List