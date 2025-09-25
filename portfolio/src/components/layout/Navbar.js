export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 max-w-6xl mx-auto font-mono">
      <ul className="flex space-x-6 text-gray-800">
        <li><a href="#skills" className="hover:text-black hover:underline transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-black hover:underline transition">Projects</a></li>
        <li><a href="#cloud" className="hover:text-black hover:underline transition">Cloud Demo</a></li>
        <li><a href="#contact" className="hover:text-black hover:underline transition">Contact</a></li>
      </ul>
    </nav>
  );
}
