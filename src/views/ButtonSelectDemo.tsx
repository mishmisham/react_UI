import React from 'react';
import ButtonSelect from '@/components/UI/buttons/select/select';
import './DemoTable.scss';

const ButtonSelectDemo: React.FC = () => {
  const options = [
    { id: 1, name: 'Опция 1', action: () => alert('Вы выбрали Опцию 1') },
    { id: 2, name: 'Опция 2', action: () => alert('Вы выбрали Опцию 2') },
    { id: 3, name: 'Опция 3', action: () => alert('Вы выбрали Опцию 3') }
  ];

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента ButtonSelect</h1>
      <table>
        <thead>
          <tr>
            <th>Тип</th>
            <th>Компонент</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Кнопка выбора с темой primary</td>
            <td>
              <ButtonSelect theme="primary" options={options}>
                Выбрать опцию
              </ButtonSelect>
            </td>
          </tr>

          <tr>
            <td>Кнопка выбора с темой secondary</td>
            <td>
              <ButtonSelect theme="secondary" options={options}>
                Выбрать опцию
              </ButtonSelect>
            </td>
          </tr>

          <tr>
            <td>Кнопка выбора с темой danger</td>
            <td>
              <ButtonSelect theme="danger" options={options} disabled>
                Выбрать опцию
              </ButtonSelect>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ButtonSelectDemo;
