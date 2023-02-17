import {useEffect, useState} from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';

export const BoardList = props => {

  const getToken = typeof window !== 'undefined' ? localStorage.getItem('ACCESS_TOKEN') : null;
  // const accessToken = typeof window !== 'undefined' ? localStorage.getItem('LOGIN_USERNAME') : null;

  const API_BASE_URL = 'http://localhost:8080/jachi/board';
  
  const ACCESS_TOKEN = getToken;

  const headerInfo = {
    'content-type': 'application/json' 
    , 'Authorization': 'Bearer' + ACCESS_TOKEN 
  };

  // useState를 이용해 입력한 내용을 state에 저장, inputdata
  const [inputListData, setInputListData] = useState([{
    id : '',
    title: '',
    content: '',
    author:'',
    createDate:'',
    // reply:'',
  }])

  useEffect(() => {
    fetch(API_BASE_URL, {
        method: 'GET',
        headers: headerInfo
    })
        .then(res => {   
          return res.json(); 
        })
        .then(result => {
            console.log(result);
            setInputListData(result.posts)
            // console.log('Check :', inputListData)
            
        });
  }, []);

    return (
      <>
          {inputListData && inputListData.map(({title, content, author, createDate}) => (
            <Link href="/BoardList" legacyBehavior>
              <a>
                <div className='item'>
                <hr/>
                <div className='title'>
                   {title}   
                </div>
                <div className='content' >
                  {parse(content)}
                </div>
                <div className='nickname'>
                  {author}
                </div>
                <div className='regdate'>
                  {createDate}
                </div>
                </div>
                      </a>
                      </Link>
                      
                       
                )
                )}     
            
            </>
      );
  };



  