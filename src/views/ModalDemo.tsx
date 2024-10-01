import React, { useState } from 'react';
import Modal from '@/components/UI/modal/modal';
import './DemoTable.scss';

const ModalDemo: React.FC = () => {
  const [isOpenBasic, setIsOpenBasic] = useState(false);
  const [isOpenNoOverlay, setIsOpenNoOverlay] = useState(false);
  const [isOpenNested, setIsOpenNested] = useState(false);
  const [isOpenTopRight, setIsOpenTopRight] = useState(false);

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента Modal</h1>
      <table>
        <thead>
          <tr>
            <th>Тип</th>
            <th>Компонент</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Базовое модальное окно</td>
            <td>
              <button 
                  className="table-btn"
                  onClick={() => setIsOpenBasic(true)}>Открыть</button>
              <Modal
                isOpen={isOpenBasic}
                onClose={() => setIsOpenBasic(false)}
                title="Базовое окно"
              >
                <p>Это базовое модальное окно с дефолтными настройками.</p>
              </Modal>
            </td>
            <td>Обычное модальное окно с оверлеем.</td>
          </tr>
          <tr>
            <td>Модальное окно без оверлея</td>
            <td>
              <button 
                  className="table-btn"
                  onClick={() => setIsOpenNoOverlay(true)}>Открыть</button>
              <Modal
                isOpen={isOpenNoOverlay}
                onClose={() => setIsOpenNoOverlay(false)}
                overlay={false}
                title="Без оверлея"
              >
                <p>Модальное окно без фонового затемнения (оверлея).</p>
              </Modal>
            </td>
            <td>Открывается без затемняющего фона.</td>
          </tr>
          <tr>
            <td>Вложенное модальное окно</td>
            <td>
              <button 
                  className="table-btn"
                  onClick={() => setIsOpenNested(true)}>Открыть</button>
              <Modal
                isOpen={isOpenNested}
                onClose={() => setIsOpenNested(false)}
                title="Вложенное окно"
              >
                <p>Это модальное окно с другим окном внутри.</p>
                <button 
                  className="table-btn"
                  onClick={() => setIsOpenBasic(true)}>Открыть вложенное</button>
              </Modal>
            </td>
            <td>Модальное окно с возможностью открывать еще одно модальное окно внутри.</td>
          </tr>
          <tr>
            <td>Модальное окно в правом верхнем углу</td>
            <td>
              <button 
                  className="table-btn"
                  onClick={() => setIsOpenTopRight(true)}>Открыть</button>
              <Modal
                isOpen={isOpenTopRight}
                onClose={() => setIsOpenTopRight(false)}
                position="top-right"
                title="Окно в правом верхнем углу"
              >
                <p>Это модальное окно отображается в правом верхнем углу экрана.</p>
              </Modal>
            </td>
            <td>Модальное окно с кастомным позиционированием.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ModalDemo;
