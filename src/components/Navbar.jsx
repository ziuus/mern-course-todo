import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white px-4 py-3">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold">Todo App</h1>
                <div>
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/about" className="hover:text-gray-300 ml-4">About</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;