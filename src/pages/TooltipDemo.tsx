import React, { useState } from 'react';
import Tooltip from '@/components/UI/tooltip/tooltip';
import './DemoTable.scss';

const TooltipDemo: React.FC = () => {
  const [tooltipStatus, setTooltipStatus] = useState<string | null>(null);

  const handleTooltipHover = (status: string) => {
    setTooltipStatus(status);
  };

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента Tooltip</h1>

      <table>
        <thead>
          <tr>
            <th>Тип</th>
            <th>Компонент</th>
            <th>Статус:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Тултип</td>
            <td>
              <Tooltip content="Этот тултип умеет определить позицию самостоятельно">
                <button
                  onMouseEnter={() => handleTooltipHover('Тултип активен')}
                  onMouseLeave={() => handleTooltipHover('')}
                >
                  Наведи на меня
                </button>
              </Tooltip>
            </td>
            <td>{tooltipStatus}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TooltipDemo;
