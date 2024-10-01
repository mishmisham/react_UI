import React, { useState } from 'react';
import Switcher from '@/components/UI/checkboxes/switch/switch';
import './DemoTable.scss';

const SwitchDemo: React.FC = () => {
  const [switchValue1, setSwitchValue1] = useState<boolean>(false);
  const [switchValue2, setSwitchValue2] = useState<boolean>(true);
  const [switchValue3, setSwitchValue3] = useState<boolean>(false);

  const handleSwitch1 = (newValue: boolean) => {
    setSwitchValue1(newValue);
  };

  const handleSwitch2 = (newValue: boolean) => {
    setSwitchValue2(newValue);
  };

  const handleSwitch3 = (newValue: boolean) => {
    setSwitchValue3(newValue);
  };

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента Switch</h1>
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
            <td>Базовый primary переключатель</td>
            <td>
              <Switcher
                value={switchValue1}
                onClick={() => handleSwitch1(!switchValue1)}
                onChange={handleSwitch1}
              />
            </td>
            <td>{switchValue1 ? 'Включен' : 'Выключен'}</td>
          </tr>

          <tr>
            <td>Переключатель secondary с включенным состоянием</td>
            <td>
              <Switcher
                value={switchValue2}
                theme="secondary"
                onClick={() => handleSwitch2(!switchValue2)}
                onChange={handleSwitch2}
              />
            </td>
            <td>{switchValue2 ? 'Включен' : 'Выключен'}</td>
          </tr>

          <tr>
            <td>Выключенный danger переключатель</td>
            <td>
              <Switcher
                value={switchValue3}
                theme="danger"
                onClick={() => handleSwitch3(!switchValue3)}
                disabled={true}
              />
            </td>
            <td>Отключен</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SwitchDemo;
