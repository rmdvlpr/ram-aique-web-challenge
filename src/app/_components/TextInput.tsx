import React from 'react';
import '@/styles/home.scss';

interface TextBoxProps {
    label: string;  
    isRequired?: boolean;
    type: 'text' | 'password' | 'email' | 'number';
    placeholder?: string
  }

function TextInput({ label, isRequired, type, placeholder } : TextBoxProps) {
  return (
    <div className="inputBox">
      <input 
        type={type}
        required={isRequired} 
        placeholder={placeholder}
        
      />
      <span>
        {label}
        {isRequired && '*'}
      </span>
    </div>
  );
}

export default TextInput;
