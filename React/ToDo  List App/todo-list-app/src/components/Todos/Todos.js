import React, { useState, useEffect } from 'react'
import Form from '../Form/form';
import List from '../List/list';
function Todos() {
    const [todos, setTodos] = useState([
        {
            todoName: "Learn JavaScript"

        },
        {
            todoName: "Learn React"
        },
        {
            todoName: "Have a life!"
        }
    ]);

    useEffect(() => {
        console.log(todos);
    }, [todos]);
    return (
        <div>
            <h1>todos</h1>
            <div id='container'>

                <Form addTodo={setTodos} todos={todos} />
                <List todos={todos} />

            </div>
        </div>
    )
}

export default Todos