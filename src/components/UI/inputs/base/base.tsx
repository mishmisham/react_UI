import React, { useState } from 'react';
import { InputMask } from '@react-input/mask';
import Eye from '@/assets/icons/Eye';
import CrossEye from '@/assets/icons/CrossEye';
import Loupe from '@/assets/icons/Loupe';
import './base.scss';

interface IInput<T = string> {
  label?: string;
  value?: T;
  error?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  dark?: boolean;
  hint?: string;
  big?: boolean;
  small?: boolean;
  full?: boolean;
  colored?: boolean;
  disabled?: boolean;
  placeholder?: string;
  min?: number | string;
  max?: number | string;
  theme?: 'primary' | 'secondary' | 'danger';
  type?: string;
  maska?: string;
  include?: boolean;
  clickInclude?: () => Promise<void>;
  labelStyle?: React.CSSProperties;
  onChange?: (value: T) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

const Input: React.FC<IInput> = ({
  label,
  value,
  error,
  maxLength,
  required,
  dark,
  hint,
  big,
  small,
  full,
  colored,
  disabled,
  placeholder,
  min,
  max,
  theme = 'primary',
  type = 'text',
  maska,
  include,
  clickInclude,
  labelStyle,
  onChange,
  onBlur,
  onFocus
}) => {
  const [currentInput, setCurrentInput] = useState(value || '');
  const [isHide, setIsHide] = useState(true);
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

  const toggleHide = () => setIsHide(!isHide);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCurrentInput(newValue);
    onChange && onChange(newValue);
  };

  const handleIncludeClick = () => {
    clickInclude && clickInclude();
  };

  // mish
  /*
    - Стоит добавить еще инпутам параметр name - бывает нужно
    например при отправке формы, чтобы определить какой инпут отправил

    - Длинные правила для переменных (например имена классов) лучше вынести в код
      const wrapperClassName = ...
  */

  return (
    <div
      className={`input ${dark ? 'dark' : ''} ${error ? 'error' : ''} ${
        disabled ? 'disabled' : ''
      } ${big ? 'big' : ''} ${full ? 'full' : ''} ${
        colored ? 'colored' : ''
      } ${small ? 'small' : ''} ${theme}`}
    >
      {(label || hint) && (
        <div className="text">
          {label && (
            <label className={required ? 'required' : ''} style={labelStyle} htmlFor={inputId}>
              {label}
            </label>
          )}
          {hint && <p>{hint}</p>}
        </div>
      )}
      <div className="input__container">
        {maska ? (
          <InputMask
            mask={maska}
            value={currentInput}
            placeholder={placeholder}
            disabled={disabled}
            onChange={handleInputChange}
            id={inputId}
            maxLength={maxLength}
            replacement={{ _: /\d/ }} // Пример замены символов, можно настроить под ваш случай
          />
        ) : (
          <input
            type={isHide && type === 'password' ? 'password' : 'text'}
            value={currentInput}
            placeholder={placeholder}
            disabled={disabled}
            onChange={handleInputChange}
            onBlur={onBlur}
            onFocus={onFocus}
            maxLength={maxLength}
            id={inputId}
            max={max ? `${max}` : undefined}
            min={min ? `${min}` : undefined}
          />
        )}
        {include && (
          <button className="include-icon" onClick={handleIncludeClick}>
            {/* {include} */}
            <Loupe />
          </button>
        )}
        {type === 'password' && !include && (
          <button className="password-icon" disabled={!currentInput} onClick={toggleHide}>
            {isHide ? <Eye /> : <CrossEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
