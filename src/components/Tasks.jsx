import React, { useState } from 'react';
import Card from './TaskCard';
import Input from './Input';



const initialTasks = [
        { id: 1, title: "Design Homepage", description: "Create wireframes and mockups for the new homepage.", completed: false },
        { id: 2, title: "Fix Login Bug", description: "Resolve the issue where users cannot log in with Google.", completed: true },
];

export const Tasks = () => {
        const [newTaskTitle, setNewTaskTitle] = useState("");
        const [newTaskDescription, setNewTaskDescription] = useState("");
        const [addingTask, setAddingTask] = useState(false);
        const [tasks, setTasks] = useState(initialTasks);
        const handleAddTask = () => {
                const newTask = {
                        id: Date.now(),
                        title: newTaskTitle,
                        description: newTaskDescription,
                        completed: false,
                };
                setTasks([...tasks, newTask]);
        }
        const updateTaskStatus = (id, completed) => {
                setTasks(tasks.map(task => task.id === id ? { ...task, completed } : task));
                setTasks(tasks.filter(task => task.id !== id));

        }


        return (
                <>
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl font-semibold">Tasks</h1>
                    <button className="bg-indigo-600 text-white px-3 py-1 rounded" onClick={() => setAddingTask(true)}>+</button>
                </div>
                {addingTask && (
                        <Input type="text" placeholder="Task Title" value={newTaskTitle} newTaskDescription={newTaskDescription} onChange={(e) => setNewTaskTitle(e.target.value)}  handleAddTask={handleAddTask} setNewTaskTitle={setNewTaskTitle} setNewTaskDescription={setNewTaskDescription} setAddingTask={setAddingTask} />
                )}
                <ul className="space-y-3">
                        {tasks.map(task => (
                                <li key={task.id}>
                                        <Card task={task} updateTaskStatus={updateTaskStatus}/>
                                </li>
                        ))}
                        
                </ul>
                </>
        );  
}