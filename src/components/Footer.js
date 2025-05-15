import React from 'react';

export default function Footer() {
  return (
    <div>
      <h3>{new Date().toLocaleTimeString()}</h3>
      <h2> We&apos;re currently open</h2>
    </div>
  );
}
