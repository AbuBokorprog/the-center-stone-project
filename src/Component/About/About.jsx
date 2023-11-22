import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <img
          src="/Image/Banner/banner15.jpg"
          className="max-h-96 w-full"
          alt=""
        />
        <h2 className="text-6xl font-semibold my-6 mx-auto text-center">
          Our Story
        </h2>
      </div>
      <div className="">
        <div className="lg:flex justify-evenly mb-4">
          <div className="lg:w-1/2">
            <img
              className="w-full"
              src="https://www.aquazzura.com/eshop/pub/media/Inspiration/2023/rs23jewelry/1920x1080_72dpi_0009_AQUAZURRA_IBIZA_F07_0699.jpg"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 lg:text-right">
            <h3 className="text-2xl lg:text-5xl font-semibold">
              Gold Rose Collection
            </h3>
            <p className="py-4">
              Brute instructior cu mea, pro ad facer scaevola accommodare. Augue
              legendos inimicus sed et, ad est alterum equidem. Mei ad idque
              forensibus, ad est alii oratio voluptua. Eam at simul lobortis,
              sit graece option urbanitas id. Usu eu mentitum laboramus
              democritum, pri et graeco phaedrum temporibus. Erat solet et sea,
              ad mel natum sonet, vel et inani mnesarchum. Usu eu mentium pri
              et.
            </p>
          </div>
        </div>
        <div className="lg:flex justify-evenly gap-2">
          <div className="lg:w-1/2">
            <h3 className="text-2xl lg:text-5xl font-semibold">
              Contact Us or Visit
            </h3>
            <p className="py-4">
              Quo ad facer evertitur scriptorem, ad aeque munere gubergren sit
              Cum volumus ut mea illud impedit disput atio mea in.
            </p>
            <form>
              <div className="grid grid-cols-2 gap-2">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type your name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email:</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type your email"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Subject:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type your subject"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Message:</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Message"
                    rows={1}
                  ></textarea>
                </div>
              </div>
              <div className=" text-center my-2">
                <button className="btn btn-warning px-32 lg:px-44 text-center">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2">
            <img
              className="w-full"
              src="https://www.fashiongonerogue.com/wp-content/uploads/2021/12/Minimal-Look-Model-Gold-Rings-Necklaces-Jewelry.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
