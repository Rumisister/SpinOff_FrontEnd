import React, { useRef, useState } from 'react';
import { Input } from '../../atoms';
import {
  Container,
  InsertIcon,
  InsertIconContainer,
  InsertPosterContainer,
} from './styles';
import { InsertedPosterList, CreatePostMainPoster } from '..';

function CreatePostLeftSide() {
  const [fileList, setFileList] = useState([]);
  const arrayKey = useRef(0);

  const onFileChange = ({ target: { files } }) => {
    if (fileList.length + files.length > 5) {
      alert('파일은 5개까지만 등록 가능합니다');
      return;
    }
    if (files.length) {
      setImageFromFile({
        files: files,
        setImageUrl: ({ file, result }) =>
          setFileList(prev => [
            ...prev,
            { id: arrayKey.current, file: file, url: result },
          ]),
      });
    }
  };
  const onFileRemove = id => {
    console.log(id + '삭제');
    setFileList(prev => [...prev.filter(f => f.id !== id)]);
  };
  const setImageFromFile = ({ files, setImageUrl }) => {
    Object.values(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = function () {
        setImageUrl({ file: file, result: reader.result });
        arrayKey.current++;
      };
      reader.readAsDataURL(file);
    });
  };
  return (
    <Container>
      <CreatePostMainPoster src={fileList[0]?.url} />
      <InsertPosterContainer>
        <InsertIconContainer>
          <InsertIcon />
          <Input
            multiple={true}
            type="file"
            accept="image/*"
            Style={{ display: 'none' }}
            onChange={onFileChange}
          />
        </InsertIconContainer>
        <InsertedPosterList fileList={fileList} onRemove={onFileRemove} />
      </InsertPosterContainer>
    </Container>
  );
}

export default CreatePostLeftSide;
