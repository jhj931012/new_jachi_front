import React, { useState } from 'react';
import { AGREE_DATA } from '@/constants/Register';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { BASE_URL, USER } from "../../config/host-config";



export const Forms = () => {

  
  // const API_BASE_URL = BASE_URL + USER;

  // const registerHandler = e => {
  //     e.preventDefault();

  //     // 이메일입력태그, 비번입력태그
  //     const $email = document.getElementById('email');
  //     const $password = document.getElementById('password');
  //     const $nickname = document.getElementById('username');

  //     // 서버에 로그인 요청
  //     fetch(`${API_BASE_URL}/signup`, {
  //         method: 'POST',
  //         headers: { 'content-type': 'application/json' },
  //         body: JSON.stringify({
  //             email: $email.value,
  //             password: $password.value,
  //             nickname: $nickname.value
  //         })
  //     })
  //     .then(res => res.json())
  //     .then(result => {
  //         //console.log(result);
  //         if (result.message) {
  //             // 로그인 실패
  //             alert(result.message);
  //         } else {
  //             alert('회원가입 성공!');

  //             // 발급받은 토큰을 저장, 회원정보 저장
  //             // 브라우저가 제공 로컬스토리지(브라우저가 종료되어도 남아있음)
  //             // 세션스토리지(브라우저종료되면 사라짐)
  //             localStorage.setItem('ACCESS_TOKEN', result.token);
  //             localStorage.setItem('LOGIN_USERNAME', result.userName);

  //             window.location.href='/Login';
  //         }
  //     });
  // };

  // 체크된 아이템 담을 배열
  const [checkItem, setCheckItem] = useState([]);
  // 체크박스 단일 선택
  const handleSingleChk = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItem(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열(필터)
      setCheckItem(checkItem.filter(el => el !== id));
    }
  };
  // 체크박스 전체 선택
  const handleAllChk = checked => {
    if (checked) {
       // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      AGREE_DATA.forEach(el => idArray.push(el.id));
      setCheckItem(idArray);
    } else {
       // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItem([]);
    }
  };
  // 입력 검증 yup,  / 최소,최대 입력값 / 입력되지 않으면 required(메시지)
  const validationSchema = yup.object().shape({
    email: yup.string().required('이메일을 입력해주세요.'),
    password: yup
      .string()
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
      .max(20, '비밀번호는 최대 20자 이하여야 합니다.')
      .required('비밀번호를 입력해주세요.')
      .matches(
        /^[a-z]+[a-z0-9]{8,}$/,
        '비밀번호는 영문자와 숫자를 포함하여야 합니다.',
      ),
    confirm_password: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
    nickname: yup
      .string()
      .min(2, '별명은 최소 2자 이상이어야 합니다')
      .max(15, '별명은 최대 15자 이하여야 합니다.')
      .required('별명을 입력해주세요.'),
  });

  const API_BASE_URL = BASE_URL + USER;

  
  const formik = useFormik({
    // 회원가입 form, 최초 값, form에서 관리할 객체들
    initialValues: {
      email: '',
      password: '',
      confirm_password: '',
      nickname: '',
    },

  
    // 유효성 검사
    validationSchema,

    //submit 이벤트 발생 시 실행할 로직 기재
    onSubmit: values => {
      alert(JSON.stringify(values, ['email','password', 'nickname'], 2));
      fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values, null, 2)
    })
    .then(res => res.json())
    .then(result => {
        //console.log(result);
        if (result.message) {
            // 로그인 실패
            alert(result.message);
        } else {
            alert('회원가입 성공!');

            // 발급받은 토큰을 저장, 회원정보 저장
            // 브라우저가 제공 로컬스토리지(브라우저가 종료되어도 남아있음)
            // 세션스토리지(브라우저종료되면 사라짐)
            

            window.location.href='/';
        }
    });
    }


     
    });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} >
        <fieldset>
          <div className="section email">
            <h4>이메일</h4>
            <div>
              <span>
                <input
                  className="common-element email-id"
                  type="text"
                  placeholder="이메일"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email} 
                  {...formik.getFieldProps('email')}
                />
              </span>
              
              
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
            <div className="certified ">
              <button>이메일 인증하기</button>
            </div>
          </div>
          <div className="section password">
            <h4>비밀번호</h4>
            <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
            <input
              type="password"
              className="common-element"
              placeholder="비밀번호"
              title="password"
              name="password"
              {...formik.getFieldProps('password')}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="section">
            <h4>비밀번호 확인</h4>
            <input
              type="password"
              className="common-element"
              placeholder="비밀번호 확인"
              title="confirm_password"
              name="confirm_password"
              {...formik.getFieldProps('confirm_password')}
              onChange={formik.handleChange}
              value={formik.values.confirm_password}
            />
            {formik.touched.confirm_password &&
            formik.errors.confirm_password ? (
              <div className="text-danger">
                {formik.errors.confirm_password}
              </div>
            ) : null}
          </div>
          <div className="section">
            <h4>닉네임</h4>
            <p>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</p>
            <input
              type="type"
              className="common-element"
              placeholder="별명 (2~15자)"
              title="nickname"
              name="nickname"
              {...formik.getFieldProps('nickname')}
              onChange={formik.handleChange}
              value={formik.values.nickname}
            />
            {formik.touched.nickname && formik.errors.nickname ? (
              <div className="text-danger">{formik.errors.nickname}</div>
            ) : null}
          </div>
          <div className="section-chk">
            <h4>약관동의</h4>
            <div>
              <div>
                <input
                  type="checkbox"
                  className="common-element"
                  name="select-all"
                  onChange={e => handleAllChk(e.target.checked)}
                  checked={
                    checkItem.length === AGREE_DATA.length ? true : false
                  }
                />
                
                <span>
                  <strong>전체동의</strong>
                  <span>선택항목에 대한 동의 포함</span>
                </span>
              </div>
              <div>
                {AGREE_DATA.map((data, i) => (
                  <div key={i}>
                    <input
                      type="checkbox"
                      title={'checkbox' + (i + 1)}
                      name={`select-${data.id}`}
                      className="common-element"
                      onChange={e => handleSingleChk(e.target.checked, data.id)}
                      checked={checkItem.includes(data.id) ? true : false}
                    />
                    <span>{data.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="submit">
            <button type="submit">회원가입하기</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
