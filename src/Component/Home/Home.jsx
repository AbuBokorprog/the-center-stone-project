import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import BestProduct from "./BestProduct";

const Home = () => {
  const [best, setBest] = useState([]);
  useEffect(() => {
    fetch(`/bestProduct.json`)
      .then((res) => res.json())
      .then((data) => {
        setBest(data);
      });
  }, []);
  return (
    <div>
      <Banner></Banner>
      {/* Best Seller Product */}
      <section>
        <h2 className="text-center text-5xl pb-8 font-semibold">
          Best Seller Product
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {best.map((b) => (
            <BestProduct key={b.id} best={b}></BestProduct>
          ))}
        </div>
      </section>
      {/* Section 3 */}
      <section className="py-20">
        <div className="flex flex-row-reverse gap-10 justify-center items-center">
          <div className="grid grid-cols-2 w-1/2 gap-2">
            <div>
              <img
                className="w-72 rounded-s-xl"
                src="/Image/pexels-manuel-gamboa-14559459.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-72 rounded-e-xl"
                src="/Image/pexels-kate-photo-1028927.jpg"
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
        <div className="px-40">
          <h2 className="text-center text-5xl pb-2 font-semibold">
            Collection
          </h2>
          <hr className="border-2 border-black" />
          <p className="text-center text-2xl py-2">
            Inspired by our multi-ethnic life, we create fine jewelry to share
            our wonderful tales…
          </p>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <div className="">
            <img src="/Image/pexels-湉双-陈-2876035.jpg" alt="" />
          </div>
          <div>
            <img src="/Image/cat-han-7EaQT4M8aFc-unsplash.jpg" alt="" />
          </div>
          <div>
            <img src="/Image/cat-han-BJ3grTerqY4-unsplash.jpg" alt="" />
          </div>
          <div>
            <img src="/Image/cat-han-gNMuWRsRVEU-unsplash.jpg" alt="" />
          </div>
          <div>
            <img src="/Image/pexels-redwolf-14030660.jpg" alt="" />
          </div>
          <div>
            <img src="/Image/pexels-arsham-haghani-3387577.jpg" alt="" />
          </div>
          <div>
            <img src="/Image/sour-moha-k47viB7Dt8I-unsplash.jpg" alt="" />
          </div>

          <div>
            <img src="/Image/sama-hosseini-6seIjO8gX2w-unsplash.jpg" alt="" />
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
            <img src="/Image/owner.jpg" alt="" />
            <div className="text-center">
              <h4 className="text-4xl">Michael</h4>
              <p>Owner</p>
            </div>
          </div>
          <div>
            <img src="/Image/product-manager.jpg" alt="" />
            <div className="text-center">
              <h4 className="text-4xl">Isabella</h4>
              <p>Product Manager</p>
            </div>
          </div>
          <div>
            <img src="/Image/makeup-artist.jpg" alt="" />
            <div className="text-center">
              <h4 className="text-4xl">Olivia</h4>
              <p>Make up artist</p>
            </div>
          </div>
          <div>
            <img src="/Image/photograper.jpg" alt="" />
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
