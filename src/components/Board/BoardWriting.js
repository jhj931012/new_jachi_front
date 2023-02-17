import {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const BoardWriting = props => {

  const API_BASE_URL = 'http://localhost:8080/jachi/board/post';

  // 게시판 저장 데이터
  const [content, setContent] = useState({
    title: '',
    content: '',
    author : ''
  })

  const author = localStorage.getItem('LOGIN_USERNAME');
  

  const titleHandler = e => {
    setContent({
      ...content, title: e.target.value, author
    });
  };

  const contentHandler = (event, editor) => {
    const data = editor.getData();
        
        console.log({ event, editor, data });
        setContent({
          ...content, content: data
        })
          console.log(content);
  };



  // 인풋 내용이 변할 때 값을 뷰 스테이트에 업데이트 해 주는 기능
  const getValue = e => {
      const {name, value} = e.target;
      setContent({...content,
        [name]: value})
      };
      
  const insertHandler = () => {
    console.log('content: ',content);
    fetch(`${API_BASE_URL}/write`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(content),
      credentials: 'include'
  })
  .then(res => res.json()) 
  .then(result => {
      console.log(result);
      if (result.message) {       
          alert(result.message);
      } else {
          alert('저장 성공!');
          window.location.href='/BoardList'
      }
  });
  };
  const cancelHandler = () => {
    window.location.href='/'
  };

    return (
        <div className="BoardWriting">
          <div className='form-wrapper'>  
          <input className="title-input" type='text' placeholder='제목'
             onChange={titleHandler} value={content.title} id='title'/>
             <CKEditor
               editor={ClassicEditor}
               config={{
                placeholder: "글을 입력해보세요!",
              }}
              onReady={editor => {
              console.log('Editor is ready to use!', editor);
           }}
 
             onChange={ contentHandler }
        value={content.content}
        id='content'
             onBlur={(event, editor) => {
             console.log('Blur.', editor);
          }}
             onFocus={(event, editor) => {
             console.log('Focus.', editor);
          }}        
        />
          </div> 
          <div>
          <button className="submit-button" onClick={insertHandler}>작성</button>   
          <button className="submit-button" onClick={cancelHandler}>취소</button>
          </div>
        </div>
      );
  }

  export default BoardWriting;