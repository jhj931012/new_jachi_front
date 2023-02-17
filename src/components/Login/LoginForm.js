import React from "react";
import { BASE_URL, USER } from "../../config/host-config";
import Link from "next/link";

export const Loginform = () => {



    const User_Area = [
        {
          name: '비밀번호 재설정',
          path: '/',
          id: 1,
        },
        {
          name: '회원가입',
          path: '/Register',
          id: 2,
        },
      ];

    const API_BASE_URL = BASE_URL + USER;

    const loginHandler = e => {
        e.preventDefault();

        // 이메일입력태그, 비번입력태그
        const $email = document.getElementById('email');
        const $password = document.getElementById('password');

        // 서버에 로그인 요청
        fetch(`${API_BASE_URL}/signin`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                email: $email.value,
                password: $password.value
            })
        })
        .then(res => res.json())
        .then(result => {
            //console.log(result);
            if (result.message) {
                // 로그인 실패
                alert(result.message);
            } else {
                alert('로그인 성공!');

                // 발급받은 토큰을 저장, 회원정보 저장
                // 브라우저가 제공 로컬스토리지(브라우저가 종료되어도 남아있음)
                // 세션스토리지(브라우저종료되면 사라짐)
                localStorage.setItem('ACCESS_TOKEN', result.token);
                localStorage.setItem('LOGIN_USERNAME', result.nickname);

                window.location.href='/';
                console.log(result);
            }
        });
    };

    

    return (
      <div className="InputWrap">
        <form noValidate onSubmit={loginHandler}>
            <input
              id="email"
              label="email"
              placeholder="이메일"
              type="text"
              title="email"
            />
            <input
              id="password"
              label="password"
              placeholder="비밀번호"
              type="password"
              title="password"
            />
            <button type="submit">로그인</button>
            <section className="userArea">
              {User_Area.map(user => (
                <Link key={user.id} href={user.path} legacyBehavior>
                  <a>{user.name}</a>
                </Link>
              ))}
            </section>
          </form>
        </div>
    );
};




