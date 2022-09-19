import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
//Hook 기반 api를 import : SPA를 만드는 구조중 하나
import '../App.css';
import Request from './Request';
// import {Home, Intro, Request, Loginform} from 'component';
import Home from "./Home";
import Intro from "./Intro";
import Loginform from './Loginform';
import Registerform from './Registerform';
import Dashboard from './Dashboard/Dashboard';
import Dashview from './Dashboard/Dashview';
import Postmodal  from './Dashboard/Postmodal';
import { Button } from 'bootstrap';
import WeatherCheck from './WeatherCheck';
import KakaoLogin from './KakaoLogin';

function MainFile (){
// Link to 뒤에는 url이 들어감


return (
  <BrowserRouter> 
        <ul>
          <li>
            <Link to="/"><button>Home</button></Link>
              <ul>
                <li>
                <Link to="/Login"><button>Login</button></Link>
                <ul>
                  <li>
                    <Link to="/kakaoLogin"><button>With Kakao</button></Link>
                  </li>
                </ul>
                </li>
              </ul>
          </li>
          <li>
            <Link to="/About"><button>About</button></Link>
          </li>
          <li>
            <Link to="/Dashboard"><button>Dashboard</button></Link>
          </li>
          <li>
            <Link to="/Table"><button>ShowTables</button></Link>
          </li>
          <li>
            <Link to="/Signup"><button>Signup</button></Link>
          </li>
          <li>
            <Link to="/WeatherCheck"><button>WeatherCheck</button></Link>
          </li>
        </ul>
        
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Signup" element={<Registerform/>}/>
        <Route path="/Login" element={<Loginform/>} />
        <Route path="/About" element={ <Intro/> } />
        <Route path="/Dashboard" element={ <Dashboard/> } />
        <Route path="/Table" element={<Request/>} />
        <Route path="/Dashboard/:board_num" element={<Dashview/>} />
        <Route path="/WeatherCheck" element={<WeatherCheck/>}/>
        <Route path="/kakaoLogin" element={<KakaoLogin/>}/>
        </Routes>
        
      </BrowserRouter>
    );
}
//여기부터 각 페이지(버튼)별 정보가 담김
// ++ Deprecated functions, please don't care about this.

// function Head(){
//   return (
//     <Home/>
//   );
// }

// function About() {
//   return (
//     <Intro/>
//   );
// }

// function Table(){
//   return(
//     <Request/>
//   );
// }

export default MainFile;