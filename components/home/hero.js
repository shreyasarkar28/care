import React from "react";
import 'antd/dist/antd.css';

import { Carousel } from 'antd';
import './hero.css';


function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  const contentStyle = { 
    height: '360px',
    color: '#000',
    lineHeight: '160px',
    textAlign: 'center',
    };


function AppHero()  {
    return(
        
        <Carousel afterChange={onChange}>
    
    <div className="heroImg1">
      <h1 style={contentStyle}>Best Medical Services</h1>
    </div>
    <div className="heroImg2">
      <h1 style={contentStyle}>Our Best Surgeons</h1>
    </div>
    <div className="heroImg3">
      <h1 style={contentStyle}>We Care About Your Health</h1>
    </div>
  </Carousel>

    );
}

export default AppHero;