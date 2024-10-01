import React, { useState } from 'react';
import Checkbox from '@/components/UI/checkboxes/base/base';
import './DemoTable.scss';

const CheckboxDemo: React.FC = () => {
  const [checkboxValue1, setCheckboxValue1] = useState<boolean>(false);
  const [checkboxValue2, setCheckboxValue2] = useState<boolean>(true);
  const [checkboxValue3, setCheckboxValue3] = useState<boolean>(false);

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента Checkbox</h1>
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
            <td>Базовый primary чекбокс</td>
            <td>
              <Checkbox
                value={checkboxValue1}
                onChange={(newValue) => setCheckboxValue1(newValue)}
              />
            </td>
            <td>{checkboxValue1 ? 'Отмечен' : 'Не отмечен'}</td>
          </tr>

          <tr>
            <td>Чекбокс secondary с отмеченным состоянием</td>
            <td>
              <Checkbox
                value={checkboxValue2}
                theme="secondary"
                onChange={(newValue) => setCheckboxValue2(newValue)}
              />
            </td>
            <td>{checkboxValue2 ? 'Отмечен' : 'Не отмечен'}</td>
          </tr>

          <tr>
            <td>Отключенный danger чекбокс</td>
            <td>
              <Checkbox
                value={checkboxValue3}
                theme="danger"
                disabled={true}
                onChange={(newValue) => setCheckboxValue3(newValue)}
              />
            </td>
            <td>Отключен</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckboxDemo;
