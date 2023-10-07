import React from "react";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* Best Seller Product */}
      <section>
        <h2 className="text-center text-5xl font-semibold">
          Best Seller Product
        </h2>
        <p>TODO</p>
      </section>
      {/* Section 3 */}
      <section className="py-20">
        <div className="flex flex-row-reverse gap-10 justify-center items-center">
          <div className="grid grid-cols-2 w-1/2 gap-2">
            <div>
              <img
                className="w-72 rounded-s-xl"
                src="/src/assets/Image/pexels-manuel-gamboa-14559459.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-72 rounded-e-xl"
                src="/src/assets/Image/pexels-kate-photo-1028927.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 text-right">
            <h3 className="text-6xl font-bold">
              Perfect Match for Every Occasion
            </h3>
            <p className="font-semibold py-4 text-4xl">
              coordinate with other pieces from the collection for a classic
              look.
            </p>
            <div className="mx-auto text-center">
              <button className="btn btn-error bg-red-600 px-10">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Collection */}
      <section className="py-20">
        <h2 className="text-center text-5xl font-semibold">Collection</h2>
        <p className="text-center text-2xl px-32 py-6">
          Inspired by our multi-ethnic life, we create fine jewelry to share our
          wonderful tales…
        </p>
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <div className="">
            <img src="/src/assets/Image/pexels-湉双-陈-2876035.jpg" alt="" />
          </div>
          <div>
            <img
              src="/src/assets/Image/cat-han-7EaQT4M8aFc-unsplash.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/src/assets/Image/cat-han-BJ3grTerqY4-unsplash.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/src/assets/Image/cat-han-gNMuWRsRVEU-unsplash.jpg"
              alt=""
            />
          </div>
          <div>
            <img src="/src/assets/Image/pexels-redwolf-14030660.jpg" alt="" />
          </div>
          <div>
            <img
              src="/src/assets/Image/pexels-arsham-haghani-3387577.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/src/assets/Image/sour-moha-k47viB7Dt8I-unsplash.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              src="/src/assets/Image/sama-hosseini-6seIjO8gX2w-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Meet People */}
      <section className="py-20">
        <div className="text-center px-40 pb-5">
          <p className="text-sm font-medium pb-1 font-serif italic">
            TEAM MEMBERS
          </p>
          <h2 className="text-5xl font-semibold pb-3">
            Meet <span className="italic">the</span> People
          </h2>
          <hr className="border-2 border-black rounded-xl" />
          <p className="font-medium py-2">
            At The Center Stone, we believe that every piece of jewelry tells a
            unique story. Behind each exquisite creation is a team of passionate
            and skilled individuals who pour their heart and soul into crafting
            timeless treasures for you.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div>
            <img src="/src/assets/Image/owner.jpg" alt="" />
            <div className="text-center">
              <h4 className="text-4xl">Michael</h4>
              <p>Owner</p>
            </div>
          </div>
          <div>
            <img src="/src/assets/Image/product-manager.jpg" alt="" />
            <div className="text-center">
              <h4 className="text-4xl">Isabella</h4>
              <p>Product Manager</p>
            </div>
          </div>
          <div>
            <img src="/src/assets/Image/makeup-artist.jpg" alt="" />
            <div className="text-center">
              <h4 className="text-4xl">Olivia</h4>
              <p>Make up artist</p>
            </div>
          </div>
          <div>
            <img src="/src/assets/Image/photograper.jpg" alt="" />
            <div className="text-center">
              <h4 className="text-4xl">Thomas</h4>
              <p>Photographer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
