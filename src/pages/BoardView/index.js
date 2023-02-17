// import React from 'react'
// import { MainBlock } from '@/components/CommunityMain/main.styles'
// import Header from '@/components/Header/Header'
// import Footer from '@/components/Footer'
// import {BoardView} from '@/components/Board/BoardView'
// import styled from 'styled-components';
// import Head from 'next/head'

// export const BoardViewWrapper = styled.main`
// .Board {
//   text-align: center;
// }

// body {
//   font-family: system-ui;
//   background: #4170B7;
//   color: white;
//   text-align: center;
// }

// .board-container {
//   margin: 0 auto;
//   width: 80%;
//   height: 600px;
//   border: 1px solid #333;
//   padding: 10px 0 30px 0;
//   border-radius: 5px;
//   margin-bottom : 10px;
// }
// .submit-button {
//   width: 95px;
//   height: 40px;
//   font-size: 17px;
//   padding: 9px 20px;
//   border: none;
//   color: #fff;
//   background-color: var(--base-color-blue);
//   border-radius: 5px;
//   margin-right:10px;
//   margin-bottom:10px;
// }
// `
// let style = {
//     margin:"20px 540px 20px", // [미완] 가운데 넣는 요소찾기
//     display:"inline-block",
//     width:"80%",
//     height:"40px",
// }

// function BoardViews() {
//     return(
//         <MainBlock>
//             <Header/>
//               <h2 style={style} >게시물</h2>
//               <BoardViewWrapper>
//                 <BoardView/>
//               </BoardViewWrapper>
//             <Footer/>
//         </MainBlock>
//     )
// }

// BoardView.getInitialProps = async ctx => {
//     const pathname = ctx.pathname;
//     return { pathname };
//   };

// export default BoardViews;