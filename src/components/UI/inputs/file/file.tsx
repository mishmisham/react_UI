import React, { useState, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import './file.scss';

interface DragAndDropProps {
  title?: string;
  extensions?: string[];
  maxFileSize?: number;
  type?: 'small' | 'big';
  value?: File[] | File; // in progress
  multiple?: boolean;
  fileTypeName?: string;
  onFileUpload: (files: File | File[]) => void;
  onClearFile: () => void;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({
  title,
  extensions,
  maxFileSize = 0,
  type = 'big',
  multiple = false,
  fileTypeName,
  onFileUpload,
  onClearFile
}) => {
  const [file, setFile] = useState<File | File[] | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [fileLoaded, setFileLoaded] = useState(false);
  const [error, setError] = useState<{ message: string; type: string } | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  const fileSizeValidate = (file: File): boolean => {
    if (maxFileSize === 0) return true;
    if (file.size / 1024 / 1024 > maxFileSize) {
      setError({
        message: 'Размер файла превышает установленное ограничение',
        type: 'maxSize'
      });
      return false;
    }
    return true;
  };

  const fileExtValidate = (file: File): boolean => {
    if (!extensions || extensions.length < 1) return true;
    const fileExt = file.name.split('.').pop() ?? '';
    if (!extensions.includes(fileExt)) {
      setError({
        message: 'Формат файла не поддерживается',
        type: 'extension'
      });
      return false;
    }
    return true;
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setError(null);

      if (!multiple) {
        if (acceptedFiles.length > 1) return;
        const singleFile = acceptedFiles[0];
        setFile(singleFile);
        setFileLoaded(true);
        onFileUpload(singleFile);

        if (singleFile.type.includes('image') && previewRef.current) {
          previewRef.current.style.background = `linear-gradient(180deg, #515365 0%, rgba(81, 83, 101, 0) 100%), url(${URL.createObjectURL(
            singleFile
          )}) no-repeat center/cover`;
        }

        if (!fileSizeValidate(singleFile) || !fileExtValidate(singleFile)) return;
      } else {
        const validFiles = acceptedFiles.filter(
          (file) => fileSizeValidate(file) && fileExtValidate(file)
        );
        setFiles((prev) => [...prev, ...validFiles]);
        setFileLoaded(true);
        onFileUpload([...files, ...validFiles]);
      }
    },
    [multiple, files, onFileUpload]
  );

  const handleClear = () => {
    setFile(null);
    setFileLoaded(false);
    setError(null);
    if (previewRef.current) {
      previewRef.current.style.background = '#515365';
    }
    onClearFile();
  };

  const handleRemove = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFileUpload(updatedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple });

  const extensionsText = extensions?.join(', ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {title && <div className="drag-drop__title" dangerouslySetInnerHTML={{ __html: title }} />}
      <div style={type === 'big' ? { width: '100%' } : {}} {...getRootProps()}>
        <input {...getInputProps()} />
        {type === 'big' && (
          <div className="drag-drop">
            <div className="drag-drop__desc">
              Перетащите <span>{fileTypeName || 'изображение'}</span> сюда или нажмите на кнопку
            </div>
            <div className="drag-drop__ext">
              {extensions?.length && (
                <div>
                  Поддерживаемые форматы: <span>{extensionsText}</span>
                </div>
              )}
              {maxFileSize && (
                <div>
                  Максимальный размер {multiple ? 'файлов' : 'файла'} {maxFileSize} MB
                </div>
              )}
            </div>
            {(!multiple && !fileLoaded) || multiple ? (
              <div className="drag-drop__btn">
                <span>Загрузить файл</span>
              </div>
            ) : null}
            {!multiple && fileLoaded && (
              <div className="preview" ref={previewRef}>
                <div className="preview-info">
                  <div className="preview-container">
                    <button onClick={handleClear}>✖</button>
                    {file && !Array.isArray(file) && (
                      <>
                        <span className="preview-info__name">{file.name}</span>
                        <span className="preview-info__size">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </>
                    )}
                  </div>
                  {error && <p className="preview-message">{error.message}</p>}
                </div>
              </div>
            )}
            {multiple &&
              files.length > 0 &&
              files.map((file, index) => (
                <div
                  key={index}
                  className="preview"
                  style={{ backgroundImage: `url(${URL.createObjectURL(file)})` }}
                >
                  <div className="preview-info">
                    <div className="preview-container">
                      <button onClick={() => handleRemove(index)}>✖</button>
                      <span className="preview-info__name">{file.name}</span>
                      <span className="preview-info__size">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
        {type === 'small' && (
          <div className="drag-drop">
            {!fileLoaded ? (
              <div>
                Перетащите или <span>Загрузите</span> файл
              </div>
            ) : (
              <div className="preview small" ref={previewRef}>
                <div className="preview-info">
                  <div className="preview-container">
                    <button onClick={handleClear}>✖</button>
                    {file && !Array.isArray(file) && (
                      <>
                        <span className="preview-info__name">{file.name}</span>
                        <span className="preview-info__size">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </>
                    )}
                  </div>
                  {error && <p className="preview-message">{error.message}</p>}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;
