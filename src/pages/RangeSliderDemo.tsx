import React, { useState } from 'react';
import RangeSlider from '@/components/UI/inputs/slider/slider';
import './DemoTable.scss';

const SliderInputDemo: React.FC = () => {
  const [range1, setRange1] = useState({ min: 24, max: 30 });
  const [range2, setRange2] = useState({ min: 0, max: 100 });
  const [range3, setRange3] = useState({ min: 0, max: 100 });

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента RangeSlider</h1>
      <table>
        <thead>
          <tr>
            <th>Тип</th>
            <th>Компонент</th>
            <th>Выбрано:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Стандартный слайдер</td>
            <td>
              <RangeSlider
                min={24}
                max={30}
                onChange={({ min, max }) => setRange1({ min, max })}
                theme="primary"
                singleRange={true}
                presetValues={{ min: 27, max: 30 }}
              />
            </td>
            <td>{`Min: ${range1.min}, Max: ${range1.max}`}</td>
          </tr>
          <tr>
            <td>Слайдер с предустановленными значениями</td>
            <td>
              <RangeSlider
                min={0}
                max={100}
                onChange={({ min, max }) => setRange2({ min, max })}
                presetValues={{ min: 20, max: 80 }}
                theme="secondary"
              />
            </td>
            <td>{`Min: ${range2.min}, Max: ${range2.max}`}</td>
          </tr>
          <tr>
            <td>Слайдер с темой</td>
            <td>
              <RangeSlider
                min={0}
                max={100}
                onChange={({ min, max }) => setRange3({ min, max })}
                theme="danger"
                disabled
              />
            </td>
            <td>{`Min: ${range3.min}, Max: ${range3.max}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SliderInputDemo;
