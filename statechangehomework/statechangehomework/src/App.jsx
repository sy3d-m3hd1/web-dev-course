import React, { useState } from 'react';

// Fixed and simplified React component that demonstrates state changes.
// This version avoids Tailwind and uses plain inline styles so it works
// in any basic Create React App / Vite React project without extra setup.

export default function StateChangeProject() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState('');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20, maxWidth: 480 }}>
      <h1 style={{ marginBottom: 18 }}>React State Change Project</h1>

      {/* Counter */}
      <section style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12 }}>
        <h2>Counter</h2>
        <p style={{ fontSize: 28, margin: '8px 0' }}>{count}</p>
        <button onClick={() => setCount(c => c + 1)}>Increase</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>Reset</button>
      </section>

      {/* Light Toggle */}
      <section style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12 }}>
        <h2>Light Switch</h2>
        <p style={{ margin: '8px 0' }}>{isOn ? '💡 Light is ON' : '🌑 Light is OFF'}</p>
        <button onClick={() => setIsOn(prev => !prev)}>Toggle Light</button>
      </section>

      {/* Live Text Input */}
      <section style={{ border: '1px solid #ddd', padding: 12 }}>
        <h2>Type Your Name</h2>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter name..."
          style={{ padding: 6, width: '100%', boxSizing: 'border-box' }}
        />
        <p style={{ marginTop: 8 }}>Hello, {name || '___'}!</p>
      </section>
    </div>
  );
}
