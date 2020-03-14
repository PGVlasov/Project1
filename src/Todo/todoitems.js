import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    },
    rem: {
        background: 'green',
        borderRadius: '4px',
        color: '#fff',
        border: 'none'
    },
    /*done: {
        textDecoration: 'line-through'
    }*/
}

function ToDoItem ({todo, index, onChange}) {
   /* console.log('todo', todo)*/ /*работает*/
  const classes = []

    if (todo.complited) {
        classes.push('done')/* должен зачеркнуться, не работает */
    } 


    return (
    <li style = {styles.li}>
        <span className ={classes.join(' ')}>
            <input 
            type = "checkbox"
            checked = {todo.complited} /* не работает*/
            style={styles.input} 
            onChange={() => onChange(todo.id)}
            />
        <strong>{ index + 1 }</strong>
        {todo.title}
        </span>

        <button style ={styles.rem}>&times;</button>
    </li>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ToDoItem