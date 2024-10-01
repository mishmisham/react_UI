import React, { useState } from 'react';
import TreeSelect from '@/components/UI/inputs/tree/tree';
import './DemoTable.scss';

const treeData = [
  {
    id: '1',
    label: 'Node 1',
    children: [
      {
        id: '1-1',
        label: 'Node 1-1',
        children: [
          { id: '1-1-1', label: 'Node 1-1-1' },
          { id: '1-1-2', label: 'Node 1-1-2' }
        ]
      },
      { id: '1-2', label: 'Node 1-2', disabled: true }
    ]
  },
  {
    id: '2',
    label: 'Node 2',
    children: [
      { id: '2-1', label: 'Node 2-1' },
      { id: '2-2', label: 'Node 2-2' }
    ]
  }
];

const TreeSelectDemo: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelectChange = (selected: string[]) => {
    setSelectedItems(selected);
  };

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента TreeSelect</h1>
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
            <td>Древовидный селект с поиском и дизейблом пунктов</td>
            <td>
              <TreeSelect
                label="Выберите элементы"
                placeholder="Поиск среди элементов дерева"
                data={treeData}
                onChange={handleSelectChange}
              />
            </td>
            <td>Выбрано: {selectedItems.join(', ')}</td>
          </tr>

          <tr>
            <td>Выключеный древовидный селект</td>
            <td>
              <TreeSelect
                label="Выберите элементы"
                placeholder="Поиск среди элементов дерева"
                data={treeData}
                onChange={handleSelectChange}
                disabled
              />
            </td>
            <td>Отключено</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TreeSelectDemo;
