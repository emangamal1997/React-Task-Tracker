import React from 'react'
import { useState } from "react"
const AddTask = ({onAdd}) => {
    const [text,setText]=useState('');
    const [day,setTime]=useState('');
    const [reminder,setReminder]=useState('false');
    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!text) {
          alert('Please add a task')
          return
        }
        onAdd({ text, day, reminder })
        setText('')
        setTime('')
        setReminder(false)
      }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div class="form-control">
                    <label>Task</label>
                    <input type="text" placeholder="Add Task" value={text} onChange={(e)=> setText(e.target.value)}/>
                </div>
                <div class="form-control">
                    <label>Time</label>
                    <input type="text" placeholder="Choose Time" value={day} onChange={(e)=> setTime(e.target.value)} />
                </div>
                <div class="form-control form-control-check">
                    <label>set time reminder</label>
                    <input type="checkbox" value={reminder}  onChange={(e) => setReminder(e.currentTarget.checked)}/>
                </div>
                    <input type="submit" value="save task" class="btn btn-block"/>
            </form>
        </div>
    )
}

export default AddTask
