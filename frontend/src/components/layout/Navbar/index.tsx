export default function Navbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-bold text-blue-700">
        INDUS AI
      </h1>

      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-black">
          🔔
        </button>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
          A
        </div>
      </div>
    </header>
  );
}