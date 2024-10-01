import React, { useState } from 'react';
import Button from '@/components/UI/buttons/base/base';
import './DemoTable.scss';

const BaseButtonDemo: React.FC = () => {
  const [asyncActionStatus, setAsyncActionStatus] = useState<string | null>(null);

  const handleAsyncAction = async () => {
    setAsyncActionStatus('Выполняется действие опасности...');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setAsyncActionStatus('Опасное действие завершено!');
  };

  const handleSyncClick = () => {
    console.log('Обычный клик выполнен!');
    alert('Обычный клик выполнен!');
  };

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента Button</h1>
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
            <td>Обычная primary кнопка</td>
            <td>
              <Button label="Обычный клик" type="primary" onClick={handleSyncClick} />
            </td>
          </tr>

          <tr>
            <td>Асинхронная secondary кнопка</td>
            <td>
              <Button label="Загрузка" type="secondary" onClick={handleAsyncAction} />
            </td>
            <td>{asyncActionStatus}</td>
          </tr>

          <tr>
            <td>Отключенная danger кнопка</td>
            <td>
              <Button label="Выключенная кнопка" type="danger" disabled={true} />
            </td>
            <td>Отключена</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BaseButtonDemo;
