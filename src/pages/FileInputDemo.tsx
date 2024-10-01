import React, { useState } from 'react';
import DragAndDrop from '@/components/UI/inputs/file/file';
import './DemoTable.scss';

const DragAndDropDemo: React.FC = () => {
  const [singleFile, setSingleFile] = useState<File | null>(null);
  const [multipleFiles, setMultipleFiles] = useState<File[]>([]);

  const handleSingleFileUpload = (file: File) => {
    setSingleFile(file);
  };

  const handleMultipleFilesUpload = (files: File[]) => {
    setMultipleFiles(files);
  };

  const handleClearSingleFile = () => {
    setSingleFile(null);
  };

  const handleClearMultipleFiles = () => {
    setMultipleFiles([]);
  };

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента DragAndDrop</h1>
      <table>
        <thead>
          <tr>
            <th>Тип загрузки</th>
            <th>Компонент</th>
            <th>Статус:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Одиночный файл</td>
            <td>
              <DragAndDrop
                title="Загрузите изображение"
                extensions={['jpg', 'png']}
                maxFileSize={5}
                type="big"
                //@ts-ignore
                onFileUpload={handleSingleFileUpload}
                onClearFile={handleClearSingleFile}
              />
            </td>
            <td>{singleFile ? singleFile.name : 'Файл не загружен'}</td>
          </tr>
          <tr>
            <td>Множественные файлы</td>
            <td>
              <DragAndDrop
                title="Загрузите несколько изображений"
                extensions={['jpg', 'png']}
                maxFileSize={5}
                type="big"
                multiple
                //@ts-ignore
                onFileUpload={handleMultipleFilesUpload}
                onClearFile={handleClearMultipleFiles}
              />
            </td>
            <td>
              {multipleFiles.length > 0
                ? multipleFiles.map((file) => <p key={file.name}>{file.name}</p>)
                : 'Файлы не загружены'}
            </td>
          </tr>
          <tr>
            <td>Ограничение на формат файлов</td>
            <td>
              <DragAndDrop
                title="Загрузите документ (PDF)"
                extensions={['pdf']}
                maxFileSize={10}
                fileTypeName="документ"
                type="big"
                //@ts-ignore
                onFileUpload={handleSingleFileUpload}
                onClearFile={handleClearSingleFile}
              />
            </td>
            <td>{singleFile ? singleFile.name : 'Файл не загружен'}</td>
          </tr>
          <tr>
            <td>Маленькая загрузка с ограничением размера</td>
            <td>
              <DragAndDrop
                title="Загрузите изображение не больше 1 MB"
                extensions={['jpg', 'png']}
                maxFileSize={1}
                type="small"
                //@ts-ignore
                onFileUpload={handleSingleFileUpload}
                onClearFile={handleClearSingleFile}
              />
            </td>
            <td>{singleFile ? singleFile.name : 'Файл не загружен'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DragAndDropDemo;
