
import Search from './Search';
import Logo from './Logo';
import UserArea from './UserArea';
import UserArea2 from './UserArea2';
import Nav from './Nav';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HeaderWrap, CateWrap } from './Header.styles';
import { CATE_LIST } from '../../constants/Header';
import { Router } from 'next/router';





  


function Header() {
  const [remove, setRemove] = useState(true);
  const [scroll, setScroll] = useState(false);

  
  const accessToken = typeof window !== 'undefined' ? localStorage.getItem('LOGIN_USERNAME') : null;
  
  function handleScroll() {
    if (window.pageYOffset >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  useEffect(() => {


    
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  if(accessToken==null){
  return (
    <>
      <HeaderWrap className={scroll ? 'fixed-header' : ''}>
        <div className="top">
          <Logo />
          <Nav />
          <div className="top-right">
            <Search />
            <UserArea />
          </div>
        </div>
      </HeaderWrap>
    </>
  );
}
return (
  <>
    <HeaderWrap className={scroll ? 'fixed-header' : ''}>
      <div className="top">
        <Logo />
        <Nav />
        <div className="top-right">
          <Search />
          <UserArea2 />
        </div>
      </div>
    </HeaderWrap>
  </>
);

}
export default Header;
