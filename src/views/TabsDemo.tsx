import React, { useState } from 'react';
import Tabs from '@/components/UI/tabs/tabs';
import './DemoTable.scss';

const TabsDemo: React.FC = () => {
  const [selectedTabPrimary, setSelectedTabPrimary] = useState<string>('tab1');
  const [selectedTabSecondary, setSelectedTabSecondary] = useState<string>('tab3');
  const [selectedTabDanger, setSelectedTabDanger] = useState<string>('tab1');
  const [asyncMessage, setAsyncMessage] = useState<string | null>(null);

  const handleTabChangePrimary = (newTab: string) => {
    setSelectedTabPrimary(newTab);
  };

  const handleTabChangeSecondary = (newTab: string) => {
    setSelectedTabSecondary(newTab);
  };

  const handleTabChangeDanger = (newTab: string) => {
    setSelectedTabDanger(newTab);
  };

  const asyncPreventFunction = async () => {
    setAsyncMessage('Идет проверка...');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setAsyncMessage('Проверка завершена!');
  };

  // mish
  // отдельный файлик)
  // а views тоже стоит распихать по одноименным папкам 
  const tabsData = [
    { title: 'Таб 1', value: 'tab1' },
    { title: 'Таб 2', value: 'tab2', disabled: true },
    { title: 'Таб 3', value: 'tab3' },
    { title: 'Скрытая вкладка', value: 'tab4', hidden: true }
  ];

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента Tabs</h1>

      <table>
        <thead>
          <tr>
            <th>Тип</th>
            <th>Компонент</th>
            <th>Статус активной вкладки:</th>
            <th>Дополнительно:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Таб primary</td>
            <td>
              <Tabs
                tabs={tabsData}
                defaultTab="tab1"
                theme="primary"
                onChangeTab={handleTabChangePrimary}
              />
            </td>
            <td>{selectedTabPrimary}</td>
          </tr>

          <tr>
            <td>Таб secondary с функцией перед переходом</td>
            <td>
              <Tabs
                tabs={tabsData}
                defaultTab="tab3"
                theme="secondary"
                onChangeTab={handleTabChangeSecondary}
                enablePreventFunction={true}
                preventFunction={asyncPreventFunction}
              />
            </td>
            <td>{selectedTabSecondary}</td>
            <td>{asyncMessage}</td>
          </tr>

          <tr>
            <td>Выключенный danger таб</td>
            <td>
              <Tabs
                tabs={tabsData}
                defaultTab="tab2"
                theme="danger"
                onChangeTab={handleTabChangeDanger}
              />
            </td>
            <td>{selectedTabDanger}</td>
            <td>Отключено</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabsDemo;
