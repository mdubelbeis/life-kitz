import React, { useEffect, useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  id: 'primary' | 'tertiary' | 'default';
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type, id, onClick }) => {
  const [buttonStyles, setButtonStyles] = useState<string>('');

  const buttonText = {
    primary: 'text-white',
    tertiary: 'text-primary border-none',
    default: 'text-primary',
  };

  const buttonBgColor = {
    primary: 'bg-primary',
    tertiary: 'bg-white',
    default: 'border-0 underline bg-white shadow-none',
  };

  const buttonColor = {
    primary: 'hover:bg-primary-dark',
    tertiary: 'hover:bg-slate-100',
    default: 'hover:bg-slate-100 hover:text-primary-dark',
  };

  useEffect(() => {
    if (id === 'primary') {
      setButtonStyles(
        `${buttonText.primary} ${buttonColor.primary} ${buttonBgColor.primary}`
      );
    } else if (id === 'tertiary') {
      setButtonStyles(
        `${buttonText.tertiary} ${buttonColor.tertiary} ${buttonBgColor.tertiary}`
      );
    } else {
      setButtonStyles(
        `${buttonText.default} ${buttonColor.default} ${buttonBgColor.default}`
      );
    }
  }, [id]);

  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn shadow-lg ${buttonStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
