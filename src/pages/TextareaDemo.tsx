import React, { useState } from 'react';
import Textarea from '@/components/UI/inputs/textarea/textarea';
import './DemoTable.scss';

const TextareaDemo: React.FC = () => {
  const [description, setDescription] = useState('');
  const [feedback, setFeedback] = useState('');
  const [comments, setComments] = useState('');

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента Textarea</h1>
      <table>
        <thead>
          <tr>
            <th>Тип</th>
            <th>Компонент</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Текстовая область с ошибкой</td>
            <td>
              <Textarea
                label="Описание"
                value={description}
                placeholder="Введите описание"
                onChange={setDescription}
                required
                error="Это поле обязательно для заполнения"
              />
            </td>
          </tr>
          <tr>
            <td>Текстовая область с подсказкой</td>
            <td>
              <Textarea
                label="Отзыв"
                value={feedback}
                placeholder="Введите ваш отзыв"
                hint="Пожалуйста, поделитесь вашим мнением"
                onChange={setFeedback}
              />
            </td>
          </tr>
          <tr>
            <td>Авторасширяющаяся текстовая область</td>
            <td>
              <Textarea
                label="Комментарии"
                value={comments}
                autoExpand={true}
                placeholder="Введите ваши комментарии"
                onChange={setComments}
              />
            </td>
          </tr>
          <tr>
            <td>Выключенная текстовая область</td>
            <td>
              <Textarea label="Выключенное поле" placeholder="Это поле выключено" disabled={true} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TextareaDemo;
