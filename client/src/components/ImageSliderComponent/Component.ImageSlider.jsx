import React from "react";
import style from "./Style.ImageSlider.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ImageSlider = () => {
  return (
    <>
      <AliceCarousel innerWidth={1} className={style.slider} mouseTracking autoPlay autoPlayInterval={9000} infinite>
        <div className={style.main}>
          <img alt="" src="https://images.unsplash.com/photo-1639064565697-c44c8b0c17fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
          className="sliderimg sliderBlock"/>
        </div>
        <div className={style.main}>
          <img alt="" src="https://images.unsplash.com/photo-1517651468335-5164984ba2c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1812&q=80" 
          className="sliderimg sliderBlock"/>
        </div>
        <div className={style.main}>
          <img alt="" src="https://images.unsplash.com/photo-1594232352231-11a0958d131c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
          className="sliderimg sliderBlock"/>
        </div>
        <div className={style.main}>
          <img alt="" src="https://images.unsplash.com/photo-1585589266882-2cb137ba7db6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80" 
          className="sliderimg sliderBlock"/>
        </div>
        <div className={style.main}>
          <img alt="" src="https://wallpapercave.com/wp/wp2524463.jpg" 
          className="sliderimg sliderBlock"/>
        </div>
        <div className={style.main}>
          <img alt="" src="https://images.unsplash.com/photo-1571863706194-8c6ba42cc074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1846&q=80" 
          className="sliderimg sliderBlock"/>
        </div>
        <div className={style.main}>
          <img alt="" src="https://images.unsplash.com/photo-1620396159302-e9334733d178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80" 
          className="sliderimg sliderBlock"/>
        </div>
        <div className={style.main}>
          <img alt="" src="https://images.unsplash.com/photo-1552257128-c1a71b6736d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" 
          className="sliderimg sliderBlock"/>
        </div>
        <div className={style.main}>
          <img alt="" src="https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80" 
          className="sliderimg sliderBlock"/>
        </div>
      </AliceCarousel>
    </>
  );
};

export default ImageSlider;
