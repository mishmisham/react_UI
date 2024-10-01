import React, { useEffect, useState } from 'react';
import './base.scss';
import Checkmark from '@/assets/icons/Checkmark';

interface ICheckboxProps {
  position?: 'right' | 'left';
  disabled?: boolean;
  theme?: 'primary' | 'secondary' | 'danger';
  value?: boolean;
  observeValue?: boolean;
  modelValue?: boolean;
  partIsChecked?: boolean;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  position = 'right',
  disabled = false,
  theme = 'primary',
  value,
  observeValue,
  modelValue,
  partIsChecked = false,
  onChange,
  children
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (observeValue !== undefined) {
      setChecked(observeValue);
    } else if (modelValue !== undefined) {
      setChecked(modelValue);
    } else if (value !== undefined) {
      setChecked(value);
    }
  }, [observeValue, modelValue, value]);

  const handleChange = () => {
    if (!disabled) {
      const newChecked = !checked;
      setChecked(newChecked);

      if (onChange) {
        onChange(newChecked);
      }
    }
  };

  return (
    <button
      className={`checkbox ${checked ? 'checked' : ''} ${position} ${theme}`}
      disabled={disabled}
      onClick={handleChange}
    >
      <div className="box">
        {partIsChecked && !observeValue ? (
          <span className="part-checked-indicator">···</span>
        ) : (
          <Checkmark />
        )}
      </div>
      <span className="text">{children}</span>
    </button>
  );
};

export default Checkbox;
