import React,{useState, useEffect} from 'react'
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
        <div id='container'>
            <h1>Todos</h1>
            <Form addTodo={setTodos} todos={todos} />
            <List todos={todos} />

        </div>
    )
}

export default Todos