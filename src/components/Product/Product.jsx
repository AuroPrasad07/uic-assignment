import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="about-product">
      <div className="product-tour">
        <h2>Product Tour</h2>
        <div className="product-img">
          <img
            src="https://payroll.my/media/kunena/attachments/344/sample.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="video-tour">
        <span>Video Tour</span>
        <div className="videos">
          <div className="video-left">
            <iframe
              width="300"
              height="155"
              src="https://www.youtube.com/embed/SVLR5XVTGj0?si=kCyHzoA33O15KJ-n"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="300"
              height="155"
              src="https://www.youtube.com/embed/SVLR5XVTGj0?si=kCyHzoA33O15KJ-n"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="300"
              height="155"
              src="https://www.youtube.com/embed/SVLR5XVTGj0?si=kCyHzoA33O15KJ-n"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="300"
              height="155"
              src="https://www.youtube.com/embed/SVLR5XVTGj0?si=kCyHzoA33O15KJ-n"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-right">
            <iframe
              width="660"
              height="415"
              src="https://www.youtube.com/embed/SVLR5XVTGj0?si=kCyHzoA33O15KJ-n"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
