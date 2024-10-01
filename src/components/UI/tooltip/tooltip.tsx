import React, { useRef, useState, useEffect } from 'react';
import './tooltip.scss';

interface TooltipProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  content: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ position = 'top', children, content }) => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<'top' | 'bottom' | 'left' | 'right'>(
    position
  );

  const showTooltip = async () => {
    setVisible(true);
    await new Promise((resolve) => setTimeout(resolve, 0));
    adjustTooltipPosition();
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  const adjustTooltipPosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const { innerWidth: viewportWidth, innerHeight: viewportHeight } = window;

    const spaceAbove = triggerRect.top;
    const spaceBelow = viewportHeight - triggerRect.bottom;
    const spaceLeft = triggerRect.left;
    const spaceRight = viewportWidth - triggerRect.right;

    if (spaceBelow >= tooltipRect.height) {
      setTooltipPosition('bottom');
    } else if (spaceAbove >= tooltipRect.height) {
      setTooltipPosition('top');
    } else if (spaceRight >= tooltipRect.width) {
      setTooltipPosition('right');
    } else if (spaceLeft >= tooltipRect.width) {
      setTooltipPosition('left');
    } else {
      setTooltipPosition('bottom');
    }

    if (tooltipPosition === 'top' || tooltipPosition === 'bottom') {
      const tooltipLeft = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;

      if (tooltipLeft < 0) {
        tooltipRef.current.style.transform = `translate(${Math.abs(tooltipLeft)}px, 0)`;
      } else if (tooltipLeft + tooltipRect.width > viewportWidth) {
        const overflow = tooltipLeft + tooltipRect.width - viewportWidth;
        tooltipRef.current.style.transform = `translate(calc(-${overflow}px - 50%), 0)`;
      } else {
        tooltipRef.current.style.transform = 'translateX(-50%)';
      }
    }

    if (tooltipPosition === 'left' || tooltipPosition === 'right') {
      const tooltipTop = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;

      if (tooltipTop < 0) {
        tooltipRef.current.style.transform = `translateY(${Math.abs(tooltipTop)}px)`;
      } else if (tooltipTop + tooltipRect.height > viewportHeight) {
        const overflow = tooltipTop + tooltipRect.height - viewportHeight;
        tooltipRef.current.style.transform = `translateY(-${overflow}px)`;
      } else {
        tooltipRef.current.style.transform = 'translateY(-50%)';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', adjustTooltipPosition);
    return () => {
      window.removeEventListener('resize', adjustTooltipPosition);
    };
  }, [tooltipPosition]);

  return (
    <div
      ref={triggerRef}
      className="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          className={`tooltip ${tooltipPosition} ${visible ? 'visible' : ''}`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
