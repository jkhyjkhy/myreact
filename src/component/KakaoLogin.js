import React from "react";
function KakaoLogin (props)
{
    const REST_API_KEY = "86dfd716f3aa0c801ce8403f9c7e940b"
    const REDIRECT_URI = "http://localhost:3000/kakaoLogin"
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    // const KakaoLoginClickHandler = () => {
    //     Kakao.Auth.login
    // }


    return (
        <>
        <a href={KAKAO_AUTH_URL}>Kakao Login</a>
        </>
    )

}

export default KakaoLogin;