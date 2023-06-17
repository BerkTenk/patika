import React, { useState, useEffect } from 'react'
const initialFormValues = { todoName: "" };
function Form({ addTodo, todos }) {
    const [form, setForm] = useState({ initialFormValues });

    useEffect(() => {
        setForm(initialFormValues);
    }, [todos])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.todo === "") {
            return false;
        }
        addTodo([...todos, form]);
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input placeholder='What needs to be done?' name="todoName" value={form.todo} onChange={onChangeInput} />
            </div>
        </form>
    )
}

export default Form