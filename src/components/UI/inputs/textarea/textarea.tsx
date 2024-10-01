import React, { useEffect, useRef } from 'react';
import './textarea.scss';

interface ITextareaProps {
  label?: string;
  value?: string;
  error?: string;
  maxLength?: number;
  minLength?: number;
  autoFocus?: boolean;
  required?: boolean;
  dark?: boolean;
  hint?: string;
  placeholder?: string;
  disabled?: boolean;
  autoExpand?: boolean;
  scrollable?: boolean;
  onChange?: (value: string) => void;
}

const Textarea: React.FC<ITextareaProps> = ({
  label,
  value,
  error,
  maxLength,
  minLength,
  autoFocus,
  required,
  dark,
  hint,
  placeholder,
  disabled,
  autoExpand,
  scrollable,
  onChange
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (autoExpand && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Устанавливаем высоту по контенту
    }
  }, [value, autoExpand]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div
      className={`textarea ${dark ? 'dark' : ''} ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}
    >
      {(label || hint) && (
        <div className="text">
          {label && <label className={required ? 'required' : ''}>{label}</label>}
          {hint && <p>{hint}</p>}
        </div>
      )}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        minLength={minLength}
        autoFocus={autoFocus}
        disabled={disabled}
        className={scrollable ? 'scrollable' : ''}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textarea;
