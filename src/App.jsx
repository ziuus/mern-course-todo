import './App.css';
import { Tasks } from './components/Tasks';


function App() {
  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-4xl">
            <Tasks />
        </div>
    </div>
  );
}

export default App;
