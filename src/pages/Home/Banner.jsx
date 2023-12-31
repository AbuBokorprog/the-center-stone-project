import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-96 bg-center relative"
            src="/Image/Banner/banner5.jpg"
            alt=""
          />
          <div className="absolute top-12 lg:top-20 text-center left-20 lg:left-0 text-white">
            <p className="text-xl lg:text-2xl font-semibold">
              Essential Accessories
            </p>
            <h1 className="text-2xl lg:text-7xl font-bold mb-6 lg:mb-0">
              Golden Charms
            </h1>
            <div className="lg:px-40 hidden lg:block">
              <hr className="border-2 border-black" />
            </div>
            <p className="hidden lg:block lg:px-40 lg:py-5 lg:font-medium text-white">
              Our new spring collection model are based on the latest fashion
              trend. Refresh your style and create a new image with golden
              charms.
            </p>
            <div>
              <button className="btn btn-warning font-medium bg-yellow-500 text-white lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-96 bg-center relative grayscale lg:grayscale-0"
            src="/Image/Banner/banner15.jpg"
            alt=""
          />
          <div className="absolute top-20 lg:top-20 text-center left-24 lg:left-0 text-black">
            <p className="text-xl lg:text-2xl font-semibold">
              Hot of the season
            </p>
            <h1 className="text-2xl lg:text-7xl font-bold mb-6 lg:mb-4">
              Jewelry Shop
            </h1>

            <div className="lg:px-40 hidden lg:block">
              <hr className="border-2 border-black" />
            </div>
            <p className="hidden lg:block lg:px-40 lg:py-5 lg:font-medium text-black">
              Our shop is just a click away! Check out our finest jewelry
              collection for all your daily and evening look accessories. Be the
              latest trend!
            </p>
            {/* <div>
              <button className="btn btn-error font-medium bg-red-600 lg:px-10 border-0">
                View More
              </button>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-96 bg-center relative"
            src="/Image/Banner/banner14.jpg"
            alt=""
          />
          <div className="absolute top-12 lg:top-20 text-center left-20 lg:left-0 text-white">
            <p className="text-xl lg:text-2xl font-semibold">
              Essential Accessories
            </p>
            <h1 className="text-2xl lg:text-7xl font-bold mb-6 lg:mb-0">
              Golden Charms
            </h1>{" "}
            <div className="lg:px-40 hidden lg:block">
              <hr className="border-2 border-white" />
            </div>
            <p className="px-10 lg:px-40 lg:py-5 font-medium hidden lg:block text-white">
              Our new spring collection model are based on the latest fashion
              trend. Refresh your style and create a new image with golden
              charms.
            </p>
            <div>
              <button className="btn btn-warning font-medium bg-yellow-500 text-white lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-96 bg-center relative"
            src="/Image/Banner/banner17.jpg"
            alt=""
          />
          <div className="absolute top-12 lg:top-20 text-center left-24 lg:left-0 text-white">
            <p className="text-xl lg:text-2xl font-semibold">
              Hot of the season
            </p>
            <h1 className="text-2xl lg:text-7xl font-bold mb-6 lg:mb-0">
              Jewelry Shop
            </h1>{" "}
            <div className="lg:px-40 hidden lg:block">
              <hr className="border-2 border-white" />
            </div>
            <p className="hidden lg:block lg:px-40 lg:py-5 lg:font-medium text-white">
              Our shop is just a click away! Check out our finest jewelry
              collection for all your daily and evening look accessories. Be the
              latest trend!
            </p>
            <div>
              <button className="btn btn-warning font-medium bg-yellow-500 text-white lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover w-screen max-h-96 bg-center relative"
            src="/Image/Banner/banner6.jpg"
            alt=""
          />
          <div className="absolute top-12 lg:top-20 text-center left-20 lg:left-0 text-white">
            <p className="text-xl lg:text-2xl font-semibold">
              Ultimate ring models
            </p>
            <h1 className="lg:text-7xl font-bold">Wedding Ring</h1> <br />
            <div className="lg:px-40">
              <hr className="border-2 border-white hidden lg:block" />
            </div>
            <p className="hidden lg:block lg:px-40 lg:py-5 lg:font-medium text-white">
              We create quality pieces tailored for our customers. Choose our
              shop and well make your important moments in life even greater.
            </p>
            <div>
              <button className="btn btn-warning font-medium bg-yellow-500 text-white lg:px-10 border-0">
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
