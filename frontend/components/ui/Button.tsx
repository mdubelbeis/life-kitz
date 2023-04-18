import { useEffect, useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
}
const Button: React.FC<ButtonProps> = ({ children, type }) => {
  let [buttonStyling, setButtonStyling] = useState<string>(
    'py-3 px-5 rounded-lg'
  );

  useEffect(() => {
    if (type === 'submit') {
      // Primary
      setButtonStyling(
        (buttonStyling +=
          ' bg-slate-800 text-white hover:bg-white hover:text-slate-800')
      );
    }
    if (type === 'button') {
      // Secondary
      setButtonStyling((buttonStyling += ' bg-slate-400 hover:bg-slate-500'));
    }

    if (type === 'reset') {
      setButtonStyling((buttonStyling += ' bg-slate-400'));
    }
  }, []);

  return (
    <button type={type} className={buttonStyling}>
      {children}
    </button>
  );
};

export default Button;
