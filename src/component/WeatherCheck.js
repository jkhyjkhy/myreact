import React, { useEffect, useState } from 'react';
import {Button} from 'bootstrap';
import axios from 'axios';

function WeatherCheck (props)
{
    const [encodingKey,setEnKey] = useState('N7op8tCpKT%2FBI9zNgNSZiHSwnqtOHIl6Ya2r5AVQJqPpVD3K372cInOXQ8pJBZSFz3KTGaYJCKXqMeM9A%2Byu8g%3D%3D')
    const [decodingKey,setDeKey] = useState('N7op8tCpKT/BI9zNgNSZiHSwnqtOHIl6Ya2r5AVQJqPpVD3K372cInOXQ8pJBZSFz3KTGaYJCKXqMeM9A+yu8g==')
    const [totalLink,setLink] =useState('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst&?serviceKey=N7op8tCpKT%2FBI9zNgNSZiHSwnqtOHIl6Ya2r5AVQJqPpVD3K372cInOXQ8pJBZSFz3KTGaYJCKXqMeM9A%2Byu8g%3D%3D&numOfRows=10&pageNo=1&base_date=20210628&base_time=0600&nx=55&ny=127')
    

    return (
        <div height='100vh'>
            <article>Here is space for WeatherCheck</article>
        <iframe width='100%' height='1200'
        src ="https://www.kma.go.kr/w/image/vshrt/rain.do#"
        frameBorder="0">watch this!</iframe>
        </div>
    )

  
}

export default WeatherCheck;