import React, { useState } from 'react';
import Select from '@/components/UI/inputs/select/select';
import './DemoTable.scss';

const mockOptions = [
  {
    id: 1,
    name: 'Option 1',
    image: 'https://via.placeholder.com/30',
    description: 'Description for Option 1'
  },
  {
    id: 2,
    name: 'Option 2',
    image: 'https://via.placeholder.com/30',
    description: 'Description for Option 2'
  },
  { id: 3, name: 'Option 3', description: 'Description for Option 3' },
  { id: 4, name: 'Option 4', image: 'https://via.placeholder.com/30' },
  { id: 5, name: 'Option 5', description: 'Description for Option 5' }
];

const SelectDemo: React.FC = () => {
  const [selectedValue1, setSelectedValue1] = useState<number | string | null>(null);
  const [selectedValue2, setSelectedValue2] = useState<number | string | null>(null);
  const [selectedValue3, setSelectedValue3] = useState<number | string | null>(null);

  const handleSelect1 = (item: any) => {
    setSelectedValue1(item ? item.id : null);
  };

  const handleSelect2 = (item: any) => {
    setSelectedValue2(item ? item.id : null);
  };

  const handleSelect3 = (item: any) => {
    setSelectedValue3(item ? item.id : null);
  };

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента Select</h1>
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
            <td>Базовый селект с ошибкой</td>
            <td>
              <Select
                label="Базовый селект"
                placeholder="Выберите вариант"
                options={mockOptions}
                onSelect={handleSelect1}
                error={'Текст ошибки'}
                required
              />
            </td>
            <td>{selectedValue1 ? `Выбрано: ${selectedValue1}` : 'None'}</td>
          </tr>

          <tr>
            <td>Селект с описанием</td>
            <td>
              <Select
                label="Селект с описанием"
                placeholder="Выберите вариант"
                options={mockOptions}
                enableOptionDescription={true}
                optionDescriptionParams={[{ path: 'description' }]}
                onSelect={handleSelect2}
              />
            </td>
            <td>{selectedValue2 ? `Выбрано: ${selectedValue2}` : 'None'}</td>
          </tr>

          <tr>
            <td>Селект без изображений</td>
            <td>
              <Select
                label="Селект без изображений"
                placeholder="Выберите вариант"
                options={mockOptions.filter((option) => !option.image)}
                onSelect={handleSelect3}
              />
            </td>
            <td>{selectedValue3 ? `Выбрано: ${selectedValue3}` : 'None'}</td>
          </tr>

          <tr>
            <td>Выключенный селект</td>
            <td>
              <Select
                label="Выключенный селект"
                placeholder="Нельзя выбрать"
                options={mockOptions}
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

export default SelectDemo;
