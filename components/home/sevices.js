import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card,Button } from "antd";
import "../home/services.css";
import doctor1 from '../../assets/images/doctor1.jpg';
import doctor2 from '../../assets/images/doctor2.jpg';
import doctor3 from '../../assets/images/doctor3.jpg';

const { Meta } = Card;


export default function AppServices() {
  var settings = {
    dots: true,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="container-fluid">
      <div className="titleHolder">
        <h1>Provided Services</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet. qui suscipit atque fugiat officia corporis rerum eaque
          neque totam animi, sapiente culpa. Architecto!
        </p>
      </div>
      <div className="site-card-wrapper">
        <Slider {...settings}>
       <div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={doctor2} />}>
                <Meta title="DR. MARRY LOU" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                <Button type="primary">BOOK APPOINTMENT</Button>
               </Card>
        </div>
        <div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={doctor3} />}>
                <Meta title="DR. MARRY LOU" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                <Button type="primary">BOOK APPOINTMENT</Button>
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={doctor2} />}>
                <Meta title="DR. MARRY LOU" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                <Button type="primary">BOOK APPOINTMENT</Button>
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={doctor1}/>}>
                <Meta title="DR. MARRY LOU" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                <Button type="primary">BOOK APPOINTMENT</Button>
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={doctor2} />}>
                <Meta title="DR. MARRY LOU" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                <Button type="primary">BOOK APPOINTMENT</Button>
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={doctor1} />}>
                <Meta title="DR. MARRY LOU" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                <Button type="primary">BOOK APPOINTMENT</Button>
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={doctor3} />}>
                <Meta title="DR. MARRY LOU" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                <Button type="primary">BOOK APPOINTMENT</Button>
               </Card>
        </div>
        </Slider>
      </div>
    </div>
  );
}
