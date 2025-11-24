import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">  This is the recipe</h1>

      <p className="text-xl mb-4">Count: {count}</p>

      <button
        onClick={() => setCount(count + 2)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg transition-all"
      >
        Increase
      </button>
    </div>
  );
}
