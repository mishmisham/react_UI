import React, { useState, useRef, useEffect } from 'react';
import Chevron from '@/assets/icons/Chevron';
import './select.scss';

interface IButtonSelect {
  theme?: 'primary' | 'secondary' | 'danger';
  options: { id: number; name: string; action?: () => void }[];
  children?: React.ReactNode;
  disabled?: boolean;
}

const ButtonSelect: React.FC<IButtonSelect> = ({
  theme = 'primary',
  options,
  children,
  disabled = false
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    if (!disabled) {
      setOpen(!open);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`button-select ${disabled ? 'disabled' : ''}`} onClick={toggleOpen} ref={ref}>
      <button
        className={`button ${theme} ${open ? 'open' : ''} ${disabled ? 'disabled' : ''}`}
        disabled={disabled}
      >
        {children}
        <Chevron />
      </button>
      <div className={`list ${open ? 'open' : ''}`}>
        {!disabled &&
          options.map((item) => (
            <div key={item.id} className="list__item" onClick={item.action}>
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ButtonSelect;
