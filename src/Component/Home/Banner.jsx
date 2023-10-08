import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="pb-20">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-screen bg-center relative"
            src="/src/assets/Image/Banner/banner5.jpg"
            alt=""
          />
          <div className="absolute top-36 text-center text-white">
            <p className="text-xl font-medium">Essential Accessories</p>
            <h1 className="text-7xl font-bold">Golden Charms</h1> <br />
            <div className="px-40">
              <hr className="border-2 border-black" />
            </div>
            <p className="px-40 py-5 font-medium text-white">
              Our new spring collection model are based on the latest fashion
              trend. Refresh your style and create a new image with golden
              charms.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-red-600 px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-screen bg-center relative"
            src="/src/assets/Image/Banner/banner15.jpg"
            alt=""
          />
          <div className="absolute top-36 text-center text-black">
            <p className="text-xl font-medium">Hot of the season</p>
            <h1 className="text-7xl font-bold">Jewelry Shop</h1> <br />
            <div className="px-40">
              <hr className="border-2 border-black" />
            </div>
            <p className="px-40 py-5 font-medium text-black">
              Our shop is just a click away! Check out our finest jewelry
              collection for all your daily and evening look accessories. Be the
              latest trend!
            </p>
            <div>
              <button className="btn btn-error font-medium bg-red-600 px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-screen bg-center relative"
            src="/src/assets/Image/Banner/banner16.jpg"
            alt=""
          />
          <div className="absolute top-36 text-center text-black">
            <p className="text-xl font-medium">Ultimate ring models</p>
            <h1 className="text-7xl font-bold">Wedding Ring</h1> <br />
            <div className="px-40">
              <hr className="border-2 border-black" />
            </div>
            <p className="px-40 py-5 font-medium text-black">
              We create quality pieces tailored for our customers. Choose our
              shop and we'll make your important moments in life even greater.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-red-600 px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-screen bg-center relative"
            src="/src/assets/Image/Banner/banner14.jpg"
            alt=""
          />
          <div className="absolute top-36 text-center text-white">
            <p className="text-xl font-medium">Essential Accessories</p>
            <h1 className="text-7xl font-bold">Golden Charms</h1> <br />
            <div className="px-40">
              <hr className="border-2 border-black" />
            </div>
            <p className="px-40 py-5 font-medium text-white">
              Our new spring collection model are based on the latest fashion
              trend. Refresh your style and create a new image with golden
              charms.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-red-600 px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-screen bg-center relative"
            src="/src/assets/Image/Banner/banner17.jpg"
            alt=""
          />
          <div className="absolute top-36 text-center text-white">
            <p className="text-xl font-medium">Hot of the season</p>
            <h1 className="text-7xl font-bold">Jewelry Shop</h1> <br />
            <div className="px-40">
              <hr className="border-2 border-black" />
            </div>
            <p className="px-40 py-5 font-medium text-white">
              Our shop is just a click away! Check out our finest jewelry
              collection for all your daily and evening look accessories. Be the
              latest trend!
            </p>
            <div>
              <button className="btn btn-error font-medium bg-red-600 px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-screen bg-center relative"
            src="/src/assets/Image/Banner/banner1.jpg"
            alt=""
          />
          <div className="absolute top-36 text-center text-black">
            <p className="text-xl font-medium">Ultimate ring models</p>
            <h1 className="text-7xl font-bold">Wedding Ring</h1> <br />
            <div className="px-40">
              <hr className="border-2 border-black" />
            </div>
            <p className="px-40 py-5 font-medium text-black">
              We create quality pieces tailored for our customers. Choose our
              shop and we'll make your important moments in life even greater.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-red-600 px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-screen bg-center relative"
            src="/src/assets/Image/Banner/banner10.jpg"
            alt=""
          />
          <div className="absolute top-36 text-center text-white">
            <p className="text-xl font-medium">Essential Accessories</p>
            <h1 className="text-7xl font-bold">Golden Charms</h1> <br />
            <div className="px-40">
              <hr className="border-2 border-white" />
            </div>
            <p className="px-40 py-5 font-medium text-white">
              Our new spring collection model are based on the latest fashion
              trend. Refresh your style and create a new image with golden
              charms.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-red-600 px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-screen bg-center relative"
            src="/src/assets/Image/Banner/banner6.jpg"
            alt=""
          />
          <div className="absolute top-36 text-center text-white">
            <p className="text-xl font-medium">Ultimate ring models</p>
            <h1 className="text-7xl font-bold">Wedding Ring</h1> <br />
            <div className="px-40">
              <hr className="border-2 border-white" />
            </div>
            <p className="px-40 py-5 font-medium text-white">
              We create quality pieces tailored for our customers. Choose our
              shop and we'll make your important moments in life even greater.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-red-600 px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-screen bg-center relative"
            src="/src/assets/Image/Banner/banner8.jpg"
            alt=""
          />
          <div className="absolute top-36 text-center text-white">
            <p className="text-xl font-medium">Hot of the season</p>
            <h1 className="text-7xl font-bold">Jewelry Shop</h1> <br />
            <div className="px-40">
              <hr className="border-2 border-white" />
            </div>
            <p className="px-40 py-5 font-medium text-white">
              Our shop is just a click away! Check out our finest jewelry
              collection for all your daily and evening look accessories. Be the
              latest trend!
            </p>
            <div>
              <button className="btn btn-error font-medium bg-red-600 px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
