import React from 'react';

export default function Footer() {
  return (
    <footer>
      <h3>{new Date().toLocaleTimeString()}</h3>
      <h2> We&apos;re currently open</h2>
    </footer>
  );
}
