import React, { useEffect, useState } from 'react';
import './switch.scss';
import SwitchActive from '@/assets/icons/SwitchActive';
import SwitchDisabled from '@/assets/icons/SwitchDisabled';

interface ISwitcherProps {
  value?: boolean;
  defaultValue?: boolean;
  disabled?: boolean;
  theme?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  onChange?: (value: boolean) => void;
}

const Switcher: React.FC<ISwitcherProps> = ({
  value,
  defaultValue = false,
  disabled = false,
  theme = 'primary',
  onClick,
  onChange
}) => {
  const [isActive, setIsActive] = useState<boolean>(defaultValue);

  useEffect(() => {
    if (value !== undefined) {
      setIsActive(value);
    }
  }, [value]);

  const toggleSwitch = () => {
    if (!disabled) {
      const newActiveState = !isActive;
      setIsActive(newActiveState);
      onClick?.();
      if (onChange) {
        onChange(newActiveState);
      }
    }
  };

  return (
    <div
      className={`switch ${isActive ? 'active' : ''} ${disabled ? 'disabled' : ''} ${theme}`}
      onClick={toggleSwitch}
    >
      <div className="switch__icon">
        {isActive ? (
          <SwitchActive className="untouchable" />
        ) : (
          <SwitchDisabled className="untouchable" />
        )}
      </div>
    </div>
  );
};

export default Switcher;
