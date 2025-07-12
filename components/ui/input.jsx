import React from 'react';
import '../../app/globals.css'; // Adjust if located elsewhere

export function Input({ type = 'text', placeholder = '', className = '', ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input ${className}`}
      {...props}
    />
  );
}

