import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { CommonWrapper } from '@/styles/style';
import styled from 'styled-components';
import { Loginform } from '../../components/Login/LoginForm';
// import axios from 'axios';

export const LoginWrapper = styled.main`
  display: flex;
  width: 100%;
  flex-grow: 1;
  height: 94vh;
  .loginInn {
    flex: 1 0 auto;
    margin: 0 auto;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 40px 0;
    font-size: 15px;
  }
  // logo
  h2 {
    margin-bottom: 30px;
    cursor: pointer;
  }
  // email, password form
  form {
    width: 300px;
  }
  
  input {
    display: block;
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 0 0 4px 4px;
    line-height: 21px;
    resize: none;
    transition: 0.2s box-shadow, 0.2s background-color;
    padding: 14px 15px 14px;
    box-sizing: border-box;
    &:hover {
      background-color: #fafafa;
    }
    ${props =>
      props.clicked &&
      css`
        background: #f00;
        &:active {
          background: blue;
        }
        transform: translate(-50%, 50%) rotate(45deg);
      `}
  }
  input:first-child {
    border-radius: 4px 4px 0 0;
    border-bottom: none;
  }
  button {
    margin: 20px 0;
    width: 100%;
    padding: 15px 10px;
    font-size: 18px;
    min-height: 50px;
    background-color: var(--base-color-blue);
    border: none;
    color: #fff;
    user-select: none;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-weight: 700;
    transition: color 0.1s, background-color 0.1s, border-color 0.1s;
    border-radius: 4px;
    cursor: pointer;
  }
  section {
    text-align: center;
  }
  // sns 계정 line
  section .desc {
    margin: 35px 0 15px;
    color: #757575;
    font-size: 12px;
    line-height: 1.33;
  }
  // 아이콘
  section a {
    margin-right: 20px;
    color: inherit;
  }
  section a:last-child {
    margin: 0;
  }
  .help {
    margin-top: 24px;
    color: #c2c8cc;
    font-size: 13px;
    line-height: 18px;
    cursor: pointer;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  color: #757575;
  font-size: 10px;
  line-height: 20px;
  margin: -5px 0 25px;
  text-align: center;
  box-sizing: border-box;
  display: block;
  position: relative;
  bottom: 0;
  right: 0;
`;

function Login() {
  
  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <CommonWrapper>
        <LoginWrapper>
          <div className="loginInn">
            <h2>
              <Link href="/" legacyBehavior>
                <a>
                <img src="logo.jpg" alt="logo" />
                  
                </a>
              </Link>
            </h2>
            <Loginform/>
            <section>
              <p className="desc">SNS계정으로 간편 로그인/회원가입</p>
              <div className="snsLoginInn">
                <a>
                  <svg width="48" height="48">
                    <g fill="none">
                      <path
                        fill="#3B5998"
                        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M25.77 35V24h3.384v-3.385h-3.385v-2.538c-.012-.756.08-1.285 1.693-1.692h1.692V13h-3.385c-3.25 0-4.52 1.84-4.23 5.077v2.538H19V24h2.538v11h4.231z"
                      ></path>
                    </g>
                  </svg>
                </a>
                <a>
                  <svg width="48" height="48">
                    <g fill="none">
                      <path
                        fill="#FFEB00"
                        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
                      ></path>
                      <path
                        fill="#3C2929"
                        d="M24 11.277c8.284 0 15 5.306 15 11.85 0 6.545-6.716 11.85-15 11.85-.92 0-1.822-.066-2.697-.191l-6.081 4.105a.43.43 0 0 1-.674-.476l1.414-5.282C11.777 31.031 9 27.335 9 23.127c0-6.544 6.716-11.85 15-11.85zm6.22 8.407c-.416 0-.718.297-.718.707v5.939c0 .41.289.686.718.686.41 0 .718-.295.718-.686v-1.932l.515-.526 1.885 2.57c.277.374.426.54.691.568.037.003.075.005.112.005.154 0 .66-.04.716-.563.038-.293-.137-.52-.348-.796l-2.043-2.675 1.727-1.743.176-.196c.234-.26.353-.39.353-.587.009-.422-.34-.652-.687-.661-.274 0-.457.15-.57.262l-2.528 2.634v-2.3c0-.422-.288-.706-.717-.706zm-9.364 0c-.56 0-.918.432-1.067.837l-2.083 5.517a.84.84 0 0 0-.065.315c0 .372.31.663.706.663.359 0 .578-.162.69-.51l.321-.97h2.999l.313.982c.111.335.34.498.7.498.367 0 .655-.273.655-.62 0-.056-.017-.196-.081-.369l-2.019-5.508c-.187-.53-.577-.835-1.069-.835zm-2.92.064h-4.452c-.417 0-.642.337-.642.654 0 .3.168.652.642.652h1.51v5.21c0 .464.274.752.716.752.443 0 .718-.288.718-.751v-5.21h1.508c.474 0 .643-.352.643-.653 0-.317-.225-.654-.643-.654zm7.554-.064c-.442 0-.717.287-.717.75v5.707c0 .497.28.794.75.794h2.674c.434 0 .677-.321.686-.627a.642.642 0 0 0-.17-.479c-.122-.13-.3-.2-.516-.2h-1.99v-5.195c0-.463-.274-.75-.717-.75zm-4.628 1.306l.008.01 1.083 3.265h-2.192L20.842 21a.015.015 0 0 1 .028 0z"
                      ></path>
                    </g>
                  </svg>
                </a>
                <a>            
                    <svg width="48" height="48">
                      <g fill="none">
                        <path
                          fill="#00C63B"
                          d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M21 25.231V34h-7V15h7l6 8.769V15h7v19h-7l-6-8.769z"
                        ></path>
                      </g>
                    </svg>
                </a>
              </div>
            </section>
            <p className="help">로그인에 문제가 있으신가요?</p>
          </div>
        </LoginWrapper>
        <Footer>© bucketplace, Co., Ltd.. All Rights Reserved</Footer>
      </CommonWrapper>
    </>
  );
}

Login.getInitialProps = async ctx => {
  const pathname = ctx.pathname; //현재 경로

  return { pathname };
  
};

export default Login;
