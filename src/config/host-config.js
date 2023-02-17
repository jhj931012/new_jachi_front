
import { useEffect } from "react";


// 브라우저가 현재 클라이언트 호스트 이름 얻어오기



let hostname = window.location.hostname;
console.log('hostname-client:', hostname);

let backendHost; // 백엔드 호스트 이름

if (hostname === 'localhost') {
    backendHost = 'http://localhost:8080';
} else if (hostname === 'jachi230217.s3-website.ap-northeast-2.amazonaws.com') {
    backendHost = 'http://52.79.234.202';
}

export const BASE_URL = backendHost;
export const BOARD = '/jachi/board/post';
export const BOARDList = '/jachi/board';
export const USER = '/jachi/user';