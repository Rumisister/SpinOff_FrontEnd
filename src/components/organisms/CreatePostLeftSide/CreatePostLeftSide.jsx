import React, { useRef } from 'react';
import { Input } from '../../atoms';
import {
  Container,
  InsertIcon,
  InsertIconContainer,
  InsertPosterContainer,
} from './styles';
import { InsertedPosterList, CreatePostMainPoster } from '../../molecules';
import { useDispatch, useSelector } from 'react-redux';
import { addImages } from '../../../store/Post/action';

function CreatePostLeftSide() {
  const fileList = useSelector(state => state.postReducer.images);
  const dispatch = useDispatch();
  //const [fileList, setFileList] = useState([]);
  const arrayKey = useRef(0);
  console.log(fileList);
  const onFileChange = ({ target: { files } }) => {
    if (fileList.length + files.length > 5) {
      alert('파일은 5개까지만 등록 가능합니다');
      return;
    }
    if (files.length) {
      setImageFromFile({
        files: files,
        setImageUrl: ({ file, result }) =>
          dispatch(
            addImages({ id: arrayKey.current, file: file, url: result }),
          ),
      });
    }
  };

  const setImageFromFile = ({ files, setImageUrl }) => {
    Object.values(files).forEach(file => {
      const reader = new FileReader();
      console.log(file);
      console.log('파일 @@@@@@@@');
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
        <InsertedPosterList fileList={fileList} />
      </InsertPosterContainer>
    </Container>
  );
}

export default CreatePostLeftSide;
