import Link from 'next/link';
import styled from 'styled-components';

import { IoChevronDown } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { USER_AREA, USER_AREA_LOGIN } from '../../constants/Header';
import { useState } from 'react';
import { BASE_URL, BOARDList} from '@/config/host-config';

// const API_BASE_URL = BASE_URL + BOARDList;

// const list = () => {
//   fetch(`${API_BASE_URL}`, {
//     method: 'GET',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify(inputListData)
// })
// .then(res => res.json()) 
// .then(result => {
//     //console.log(result);
//     if (result.message) {       
//         alert(result.message);
//     } else {
//         alert('이동');
        
//     }
// });
// };



const logoutHandler = e => {
  localStorage.removeItem('ACCESS_TOKEN');
  localStorage.removeItem('LOGIN_USERNAME');
  window.location.href = '/';
};



export const UserAreaBlock = styled.div`
  display: flex;
  align-content: center;

  .LoginArea {
    display: flex;
    margin: 0px 10px 0 8px;
  }
  .LoginArea a {
    height: 18px;
    margin-top: 13px;
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
    color: #2f3438;
    padding: 0 10px;
    border-left: 1px solid #eaedef;
  }
  .LoginArea a:first-child {
    border-left: none;
  }
  .btn-area {
    position: relative;
    button {
      display: inline-block;
      font-size: 14px;
      line-height: 18px;
      height: 40px;
      border-radius: 4px;
      padding: 0 16px;
      box-sizing: border-box;
      text-align: center;
      color: #fff;
      background-color: var(--base-color-blue);
      overflow: hidden;
      border: none;
      outline: none;
      cursor: pointer;
      &:hover {
        background-color: #009fce;
      }

      span {
        margin-left: 6px;
        vertical-align: bottom;
      }
      svg {
        vertical-align: middle;
        font-size: 18px;
      }
    }
  }
  .ul-area {
    z-index: 900;
    width: 340px;
    padding: 8px;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-125px, 55px);
    box-shadow: rgb(63 71 77 / 20%) 0 4px 10px 0;
    border-radius: 6px;
    background-color: #fff;
    // opacity:1;

    li {
      padding: 15px;
      display: flex;
      gap: 0 12px;
      cursor: pointer;
      &:hover {
        background-color: rgb(247, 249, 250);
      }
      .title {
        display: flex;
        flex-direction: column;
        h3 {
          font-size: 15px;
          font-weight: 700;
          line-height: 21px;
          color: rgb(47, 52, 56);
        }
        p {
          font-size: 12px;
          line-height: 16px;
          color: rgb(130, 140, 148);
        }
      }
    }
  }
  .show-active {
    // opacity:1;
  }
`;

function UserArea2() {

  
  const router = useRouter();
  const [writeList, setWriteList] = useState(false);
  return (
    <UserAreaBlock>
      <div className="LoginArea">
        {USER_AREA_LOGIN.map(user => (
          <Link key={user.key} href={user.path} legacyBehavior>
            <a onClick={logoutHandler}>{user.name}</a>
          </Link>
        ))}
      </div>
      <div className="btn-area">
        <button
          type="button"
          onClick={() => {
            setWriteList(!writeList); // link props로 전달해야 함
          }}>
          게시판
          <span>
            <IoChevronDown />
          </span>
        </button>
        {writeList == true ? <WriteList writeList={writeList}></WriteList> : ''}
      </div>
    </UserAreaBlock>
  );
}

function WriteList({ writeList }) {
  return (
    // <div className="ul-area show">
    <div className={writeList ? 'ul-area show-active' : ''}>
      <ul>
        <Link href="/Board" legacyBehavior>
          <li>
            <div>
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                width="36"
                height="36"
              >
                <rect
                  x="6.54"
                  y="3.59"
                  width="27"
                  height="29"
                  rx="2.5"
                  transform="rotate(4 6.54 3.6)"
                  fill="#DBDBDB"
                  stroke="#000"
                ></rect>
                <rect
                  x="2.5"
                  y="1.5"
                  width="27"
                  height="29"
                  rx="2.5"
                  fill="#fff"
                  stroke="#000"
                ></rect>
                <rect
                  x="5"
                  y="4"
                  width="22"
                  height="22"
                  rx="1"
                  fill="#FFE2C7"
                ></rect>
                <path
                  d="M14 7l5 .45v3.5l-5-.45V7zm0 4.5V15l5 .45v-3.5l-5-.45zm6 .55v3.5l5 .45v-3.5l-5-.45zm5-.55V8l-5-.45v3.5l5 .45z"
                  fill="#fff"
                ></path>
                <path d="M5 19l22 2v7L5 26v-7z" fill="#E6A87C"></path>
                <path d="M5 3.45h5v16l-5 4v-20z" fill="#F1C8A3"></path>
              </svg>
            </div>
            <div className="title">
              <h3>글쓰기</h3>
              <p>자취러들과 일상을 공유하세요.</p>
            </div>
          </li>
        </Link>
        <Link href="/BoardList" legacyBehavior>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <g fill="none">
              <path d="M0 0h36v36H0z"></path>
              <path fill="#FFF6E6" d="M27.2 29.31H4.8V14.38h22.4"></path>
              <path fill="#EDE2CD" d="M27.2 17.18H4.8v-2.8h22.4"></path>
              <path stroke="#000" d="M4.8 29.31V14.38h22.4v14.93H4.8z"></path>
              <path
                fill="#FFF"
                d="M16 19.05a4.67 4.67 0 014.67 4.66v5.6h-9.34v-5.6A4.67 4.67 0 0116 19.05z"
              ></path>
              <path
                fill="#fff"
                d="M16 19.05a4.67 4.67 0 014.67 4.66v5.6h-9.34v-5.6A4.67 4.67 0 0116 19.05z"
              ></path>
              <path
                stroke="#000"
                d="M16 19.05a4.67 4.67 0 014.67 4.66v5.6h-9.34v-5.6A4.67 4.67 0 0116 19.05z"
              ></path>
              <path
                fill="#FBDEC1"
                d="M2.94 14.38a.9.9 0 01-.81-1.3l3.25-6.6a.9.9 0 01.8-.5h19.64c.34 0 .65.2.8.5l3.25 6.6a.9.9 0 01-.8 1.3H2.93z"
              ></path>
              <path
                fill="#E9C39D"
                d="M2.94 14.38a.9.9 0 01-.81-1.3l.74-1.5h26.26l.74 1.5a.9.9 0 01-.8 1.3H2.92z"
              ></path>
              <path
                stroke="#000"
                d="M2.94 14.38a.9.9 0 01-.81-1.3l3.25-6.6a.9.9 0 01.8-.5h19.64c.34 0 .65.2.8.5h0l3.25 6.6a.9.9 0 01-.8 1.3h0H2.93z"
              ></path>
              <g transform="translate(26 9)">
                <path fill="#fff" d="M0 5h8.07v12H0z"></path>
                <path fill="#ffdb92" d="M0 0h8v4H0z"></path>
                <path
                  d="M8.5 17.43H-.52 8.5L4 23.8l-4.52-6.37H8.5"
                  fill="#fff6e6"
                ></path>
                <path
                  d="M8.5 1v0A1.49 1.49 0 007-.5H1v0A1.5 1.5 0 00-.5 1l-.02 16.43L4 23.8l4.5-6.37z"
                  stroke="#000"
                ></path>
                <path fill="#000" d="M4 23l2-2H2z"></path>
                <rect
                  width="6"
                  height="2"
                  x="-14"
                  y="3"
                  stroke="#000"
                  rx="1"
                  transform="rotate(-90)"
                  ry="1"
                ></rect>
                <rect
                  width="5"
                  height="1"
                  x="-13.5"
                  y="3.5"
                  fill="#ffdb92"
                  rx=".5"
                  transform="rotate(-90)"
                  ry=".5"
                ></rect>
                <path fill="#000" d="M0 4h8v1H0z" opacity=".9"></path>
                <path d="M-.52 17.43H8.5" stroke="#000"></path>
              </g>
              <path fill="#000" d="M30 32l2-2h-4z"></path>
            </g>
          </svg>
          <div className="title">
            <h3>게시판 목록</h3>
            <p>다른 자취러들의 일상을 볼 수 있어요.</p>
          </div>
        </li>
        </Link>
      </ul>
    </div>
  );
}

export default UserArea2;
