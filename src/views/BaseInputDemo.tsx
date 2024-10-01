import React, { useState } from 'react';
import BaseInput from '@/components/UI/inputs/base/base';
import './DemoTable.scss';

const BaseInputDemo: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента Input</h1>
      <table>
        <thead>
          <tr>
            <th>Тип</th>
            <th>Компонент</th>
            <th>Введено:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Текстовое поле с ошибкой</td>
            <td>
              <BaseInput
                label="Email"
                value={email}
                placeholder="Введите ваш email"
                onChange={setEmail}
                theme="primary"
                required
                error="Это поле обязательно для заполнения"
              />
            </td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Поле пароля</td>
            <td>
              <BaseInput
                label="Пароль"
                value={password}
                type="password"
                placeholder="Введите ваш пароль"
                onChange={setPassword}
                theme="secondary"
                required
              />
            </td>
            <td>{password}</td>
          </tr>
          <tr>
            <td>Поле с маской (Телефон)</td>
            <td>
              <BaseInput
                label="Телефон"
                value={phone}
                maska="+0 (___) ___-__-__"
                placeholder="Введите ваш телефон"
                onChange={setPhone}
                required
              />
            </td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Текстовое поле с подсказкой</td>
            <td>
              <BaseInput
                label="Имя"
                value={name}
                placeholder="Введите ваше имя"
                hint="Пожалуйста, введите ваше полное имя"
                onChange={setName}
              />
            </td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Поле с иконкой включения</td>
            <td>
              <BaseInput
                label="Дополнительная функция"
                value={search}
                include={true}
                clickInclude={() => new Promise(() => alert('Функция включена'))}
                theme="danger"
                placeholder="Кликните на иконку"
                onChange={setSearch}
              />
            </td>
            <td>{search}</td>
          </tr>
          <tr>
            <td>Выключенное поле</td>
            <td>
              <BaseInput label="Выключенное поле" placeholder="Это поле выключено" disabled />
            </td>
            <td>Отключено</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BaseInputDemo;
