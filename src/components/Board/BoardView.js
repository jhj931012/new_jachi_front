// import {useEffect, useState} from 'react';
// import parse from 'html-react-parser';
// import BaordWriting from './BoardWriting';
// import { getValue } from '@mui/system';



// export const BoardView = () => {

//   const API_BASE_URL = 'http://localhost:8080/jachi/board/post';
  
//   const ACCESS_TOKEN = getToken();

//   const headerInfo = {
//     'content-type': 'application/json' 
//     , 'Authorization': 'Bearer' + ACCESS_TOKEN 
//   };
  
//   const [viewContent, setViewContent] = useState({
//     title: '',
//     content: '',
//     author:'',
//     regdate:'',
//   })

//   useEffect(() => {
//     fetch({API_BASE_URL}/{id}, {
//         method: 'GET',
//         headers: headerInfo
//     })
//         .then(res => {   
//           return res.json(); 
//         })
//         .then(result => {
//             console.log(result);
//             setViewContent(result.posts)
//             // console.log('Check :', inputListData)
//         });

//   }, []);


  
//     return (
//       <>
//         {viewContent && viewContent.map( ({title, content}) => (
//             <div className="Board">
//             <div className='board-container'>
//               <div>
//               <label>{title}</label>
               
//               </div>
//               <div>
//               <label>{constent}</label>
//               </div>
              
//             </div> 
//             {/*[미완] 로그인시 수정 취소 버튼 생성하게 만들기 */}
//             <a href="/BoardList">
//             <button className="submit-button" 
//               onClick="href=/">수정</button>
//             </a>
//             <a href="/BoardList">
//             <button className="submit-button" 
//               onClick="href=/">취소</button>
//             </a>
//           </div>     
//         ))}
//       </>     
//       );
//   };
