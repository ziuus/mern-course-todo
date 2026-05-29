const Card = ({ task,updateTaskStatus}) => {
        return (
                <>
                        <div className="card bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                                <h2 className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-900'} text-lg font-medium`}>{task.title}</h2>
                                <p className={`${task.completed ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{task.description}</p>
                        </div>
                        <div className="buttons mt-2 flex gap-2">
                                <button
                                        className={`px-3 py-1 ${task.completed ? 'bg-indigo-300' : 'bg-yellow-500'} text-white rounded`}
                                        onClick={() => updateTaskStatus(task.id, !task.completed)}
                                        aria-label={task.completed ? 'Mark task as incomplete' : 'Mark task as complete'}
                                        type="button"
                                >
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke={task.completed ? 'white' : 'red'}
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-circle-check-big-icon lucide-circle-check-big"
                                                aria-hidden="true"
                                        >
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                <path d="m9 11 3 3L22 4" />
                                        </svg>
                                </button>
                        </div>
                </>
        );
}

export default Card;