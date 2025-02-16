import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
    <nav className="bg-white shadow p-4 flex gap-4">
        <Link to="/" className="text-blue-600">Home</Link>
        <Link to="/about" className="text-blue-600">About</Link>
        <Link to="/projects" className="text-blue-600">Projects</Link>
        <Link to="/contact" className="text-blue-600">Contact</Link>
    </nav>
    );
}
