// App.jsx
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    const items = ["apple", "banana", "cherry"];
    return (
        <div>
            <h1>My Fruits</h1>
            <ul>
                {items.map((i) => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
            <p>
                This is normal React JSX  it compiles to DOM nodes.
            </p>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<App />);
