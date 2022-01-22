import React, {useState} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
        //     id: Math.floor(Math.random()*10000),
            text:input,
        });
        
        setInput('');
    };
    
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Add a todo' 
                value = {input} 
                name = 'text' 
                className='todo-input'
                //onChange={handleChange}
            />
            <button className='todo-button-item'> Add todo item</button>
            
        </form>
    )
    // line 30: <button className='todo-button-folder'> Add todo folder</button>
    ;
}

export default TodoForm;

