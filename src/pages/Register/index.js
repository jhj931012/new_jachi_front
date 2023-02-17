import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { CommonWrapper } from '@/styles/style';
import { Forms } from '../../components/Register/Forms';
import styled from 'styled-components';

export const RegisterWrapper = styled.main`
  width: calc(100% - 30px);
  display: flex;
  padding-top: 40px;
  //////////////////////////// 공통작업
  input,
  select {
    background-color: #fff;
  }
  .text-danger {
    margin: 10px 0 0 5px;
    font-size: 13px;
    color: red;
  }
  /////////////////////////////

  section {
    width: 450px;
    margin: 60px auto;
    // 회원가입
    h3 { 
      font-size: 25px;
      font-weight: 700;
    }
    // sns 계정 로그인
    .sns-area {
      margin: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ededed;
      p {
        font-size: 12px;
        text-align: center;
        margin: 15px 0;
        color: #757575;
      }
      // sns logo 정렬
      ul {
        display: flex;
        justify-content: center;
        gap: 0 25px;
      }
    }
    form {
      h4 {
        color: #2f3438;
        line-height: 20px;
        font-weight: 400;
        padding-bottom: 5px;
      }
      .common-element {
        width: 100%;
        border-radius: 4px;
        line-height: 40px;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        color: #424242;
        transition: all 100ms ease;
        padding: 0 15px;
        font-size: 15px;
        &::placeholder {
          color: #bfbfbf;
        }
        &::hover {
          background-color: #fafafa;
          border-color: #bdbdbd;
        }
      }
      .section {
        padding-bottom: 30px;
      }
      p {
        font-size: 12px;
        padding-bottom: 10px;
        line-height: 18px;
        color: #828c94;
      }
      .section.email {
        div:nth-child(2) {
          display: flex;
          gap: 0 5px;
          flex: 1 0 auto;
          -webkit-box-flex: 1;
          span:nth-child(2) {
            line-height: 40px;
            color: #dbdbdb;
          }

          .select-area {
            position: relative;
            width: 100%;
            select {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
            }
            span {
              position: absolute;
              right: 10px;
              top: 0px;
            }
          }
        }
        .certified {
          padding: 10px 0;
          button {
            width: 100%;
            height: 45px;
            background-color: rgb(247, 248, 250);
            color: rgb(194, 200, 204);
            border: 1px solid rgb(218, 220, 224);
            font-weight: 700;
            border-radius: 4px;
            font-size: 17px;
            cursor: pointer;
          }
        }
      }
      .section-chk > div:nth-child(2) {
        padding: 18px;
        border: 1px solid #eaedef;
        font-size: 15px;
        background-color: #fff;
        div {
          display: flex;
          align-items: center;
          gap: 0 6px;
          input {
            width: 20px;
            height: 20px;
            border-radius: 100px;
            border-color: #c2c8cc;
          }
          span:nth-child(2) {
            display: flex;
            gap: 0 5px;g
            align-items: center;
          }
          span > strong {
            font-size: 14px;
            font-weight: 700;
            color: #2f3438;
          }
          span > span {
            font-size: 12px;
            color: #828c94;
          }
        }
        > div:nth-child(1) {
          padding-bottom: 18px;
          border-bottom: 1px solid #eaedef;
        }
        > div:nth-child(2) {
          padding-top: 18px;

          flex-direction: column;
          display: flex;
          align-items: flex-start;
          font-size: 12px;
          color: #2f3438;
          gap: 20px 0;
          > div span::after {
            content: '(필수)';
            display: flex;
            gap: 0 2px;
            font-size: 12px;
            color: #009fce;
          }
          > div:nth-child(n + 4) span::after {
            content: '(선택)';
            color: #828c94;
          }
        }
      }
      .submit {
        padding-top: 30px;
        button {
          width: 100%;
          font-size: 17px;
          line-height: 26px;
          padding: 11px 10px;
          background-color: var(--base-color-blue);
          border: 1px solid var(--base-color-blue);
          color: #fff;
          font-weight: 700;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
    .help {
      padding-top: 30px;
      color: #424242;
      font-size: 15px;
      display: flex;
      gap: 0 10px;
      justify-content: center;
      a {
        font-weight: 700;
        text-decoration: underline;
      }
    }
  }
`;

function Register() {
  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <CommonWrapper>
        <RegisterWrapper>
          <h2>
            <Link href="/" legacyBehavior>
              <a>
              <img src="logo.jpg" alt="logo" />
              </a>
            </Link>
          </h2>
          <section>
            <h3>회원가입</h3>
            <div className="sns-area">
              <p>SNS계정으로 간편하게 회원가입</p>
              <ul>
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
              </ul>
            </div>
            <div className="form-area">
              <Forms />
              <div className="help">
                <p>이미 아이디가 있으신가요?</p>
                <Link href="/Login" legacyBehavior>
                  <a>로그인</a>
                </Link>
              </div>
            </div>
          </section>
        </RegisterWrapper>
      </CommonWrapper>
    </>
  );
}

// 현재 페이지에서 사용할 공통 속성값을 지정
Register.getInitialProps = async ctx => {
  const pathname = ctx.pathname;

  return { pathname };
};

export default Register;
