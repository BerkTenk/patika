import React, { useState } from 'react'

function List({ todos }) {
    function onClickCancel(e) {
        const listItem = e.target.parentNode;
        const list = listItem.parentNode;
        list.removeChild(listItem);
      }

      
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
                        
                        <input type='checkbox' className='cbx'/>
                        <span>{todo.todoName}</span>
                        <button onClick={onClickCancel}>X</button>
                        
                    </li>
                ))}
            </ul>
            <div className='btn'>
            <p>{filtered.length} items left </p>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
            </div>
        </div>
    )
}

export default List