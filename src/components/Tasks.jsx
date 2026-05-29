import React, { useState } from 'react';
import Card from './TaskCard';
import { LucideKey } from 'lucide-react';



const initialTasks = [
        { id: 1, title: "Design Homepage", description: "Create wireframes and mockups for the new homepage.", completed: false },
        { id: 2, title: "Fix Login Bug", description: "Resolve the issue where users cannot log in with Google.", completed: true },
];

export const Tasks = () => {
        const [searchTerm, setSearchTerm] = useState("");
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
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                                <input className="border rounded px-3 py-2" type="text" placeholder="Task Title" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} />
                                <input className="border rounded px-3 py-2 md:col-span-2" type="text" placeholder="Task Description" value={newTaskDescription} onChange={(e) => setNewTaskDescription(e.target.value)} />
                                <div className="md:col-span-3 text-right">
                                    <button className="bg-gray-100 px-3 py-1 rounded mr-2" onClick={() => { setNewTaskTitle(""); setNewTaskDescription(""); setAddingTask(false) }}>Cancel</button>
                                    <button className="bg-indigo-600 text-white px-3 py-1 rounded" onClick={() => {
                                        handleAddTask(newTaskTitle);
                                        setNewTaskTitle("");
                                        setNewTaskDescription("");
                                        setAddingTask(false)
                                }}>Save</button>
                                </div>
                        </div>
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