import React from 'react'
import styled from 'styled-components';
import { MainBlock } from '@/components/CommunityMain/main.styles';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import {BoardList} from '@/components/Board/BoardList';

export const BoardListWrapper = styled.main`
BoardList {
    text-align: center;
  }

.item hr{
  margin-bottom: 15px;
  padding: 0px;
  height: 1px;
  border: none;
  background-color: rgb(234, 237, 239);
}

.item{
  position : relative;
  width:100%;
  height:250px;
  padding:20px;
}

.title{
  font-size:20px;
  font-weight:bold;
  position : relative;
  width:100%;
  margin-bottom:10px;
}

.content{
  position : relative;
  width:100%;
  height:120px;
}

.nickname{
  width:80%;
  float:left;
}

.regdate{
  width:20%;
  float:left;
}
`
 
function BoardLists() {
    return(
        <MainBlock>
            <Header/>
            <BoardListWrapper>
              <h2>게시물 목록</h2>
                <BoardList/>
            </BoardListWrapper>
            <Footer/>
        </MainBlock>
    )
}

BoardList.getInitialProps = async ctx => {
    const pathname = ctx.pathname;
  
    return { pathname };
  };

export default BoardLists;