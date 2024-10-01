import React, { useState } from 'react';
import Menu from '@/components/UI/menu/menu';
import './DemoTable.scss';

const MenuDemo: React.FC = () => {
  const [menuVisibility, setMenuVisibility] = useState([false, false, false, false]);
  const [position] = useState(['left', 'right', 'top', 'bottom']);

  const toggleMenu = (index: number) => {
    setMenuVisibility((prev) => {
      const newVisibility = [...prev];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента Menu</h1>
      <table>
        <thead>
          <tr>
            <th>Тип</th>
            <th>Компонент</th>
            <th>Состояние</th>
          </tr>
        </thead>
        <tbody>
          {position.map((pos, index) => (
            <tr key={index}>
              <td>{`Меню с открытием/закрытием (${pos})`}</td>
              <td>
                <button 
                  className="table-btn"
                  onClick={() => toggleMenu(index)}>
                  {menuVisibility[index] ? 'Скрыть меню' : 'Показать меню'}
                </button>
                <Menu
                  position={pos as 'left' | 'right' | 'top' | 'bottom'}
                  overlay={true}
                  isVisible={menuVisibility[index]}
                  onToggle={() => toggleMenu(index)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '10px', flexDirection: 'column', height: '100%' }}>
                    <h1>Menu Item 1</h1>
                    <h1>Menu Item 2</h1>
                    <h1>Menu Item 3</h1>
                  </div>
                </Menu>
              </td>
              <td>{menuVisibility[index] ? 'Открыто' : 'Закрыто'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuDemo;
