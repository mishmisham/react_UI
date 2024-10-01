import React, { useState, useEffect } from 'react';
import './menu.scss';

interface SideMenuProps {
  position?: 'left' | 'right' | 'top' | 'bottom';
  overlay?: boolean;
  children?: React.ReactNode;
  isVisible?: boolean;
  onToggle?: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  position = 'left',
  overlay = true,
  children,
  isVisible = false,
  onToggle
}) => {
  const [localVisible, setLocalVisible] = useState(isVisible);

  useEffect(() => {
    setLocalVisible(isVisible);
  }, [isVisible]);

  const handleOverlayClick = () => {
    setLocalVisible(false);
    if (onToggle) onToggle();
  };

  return (
    <div>
      <div className={overlay && localVisible ? 'overlay' : ''} onClick={handleOverlayClick} />
      <div className={`side-menu ${localVisible ? 'visible' : ''} ${position}`}>
        <div className={`menu-content ${localVisible ? 'open' : ''}`}>{children}</div>
      </div>
    </div>
  );
};

export default SideMenu;
