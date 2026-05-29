import { useEffect, useState } from 'react';

const Input = ({ type, placeholder, value, newTaskDescription, newTaskTitle, onChange, handleAddTask, setAddingTask, setNewTaskDescription, setNewTaskTitle }) => {
    const [showSave, setShowSave] = useState(false);

    useEffect(() => {
        if (newTaskTitle !== "" && newTaskDescription !== "") setShowSave(true);
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                handleAddTask();
                setNewTaskTitle("");
                setNewTaskDescription("");
                setAddingTask(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [newTaskTitle, newTaskDescription, handleAddTask, setAddingTask, setNewTaskTitle, setNewTaskDescription]);

    return (
        <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-2">
            <input className="border rounded px-3 py-2" type="text" placeholder="Task Title" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} />
            <input className="border rounded px-3 py-2 md:col-span-2" type="text" placeholder="Task Description" value={newTaskDescription} onChange={(e) => setNewTaskDescription(e.target.value)} />
            <div className="md:col-span-3 text-right">
                <button className="bg-gray-100 px-3 py-1 rounded mr-2" onClick={() => { setNewTaskTitle(""); setNewTaskDescription(""); setAddingTask(false) }}>Cancel</button>
                {showSave && (
                    <button className="bg-indigo-600 text-white px-3 py-1 rounded" onClick={() => {
                        handleAddTask(newTaskTitle, newTaskDescription);
                        setNewTaskTitle("");
                        setNewTaskDescription("");
                        setAddingTask(false)
                    }}>Save</button>
                )}
            </div>
        </div>
    );
}

export default Input;