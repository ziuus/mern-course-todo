import React, { useState } from 'react';

 const Counter = () => {
        const [count, setCount] = useState(0);
        const increment = () => {        
                setCount(count + 1);
        }
        const decrement = () => {
                setCount(count - 1);
        }
        return (
                <div className="p-4 bg-white rounded-lg shadow-sm inline-block">
                        <h1 className="text-lg font-medium">Counter</h1>
                        <p className="text-xl font-semibold">Count: {count}</p>
                        <div className="flex gap-2 mt-2">
                            <button className="px-3 py-1 bg-indigo-600 text-white rounded" onClick={increment}>Increment</button>
                            <button className="px-3 py-1 bg-gray-100 rounded" onClick={decrement}>Decrement</button>
                            <button className="px-3 py-1 bg-red-100 text-red-700 rounded" onClick={() => setCount(0)}>Reset</button>
                        </div>

                </div>
        )
}
export default Counter;