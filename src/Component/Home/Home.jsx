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
      {/* Flex Model */}
      <section className="py-20">
        <div>
          <h2 className="text-center text-5xl font-semibold pb-5">About Us</h2>
        </div>
        <div className="flex gap-10 justify-center items-center">
          <div className="grid grid-cols-2 w-1/2 gap-2">
            <div>
              <img
                className="w-72"
                src="/src/assets/Image/pexels-manuel-gamboa-14559459.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-72"
                src="/src/assets/Image/pexels-kate-photo-1028927.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="text-4xl font-semibold">The Center Stone</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              perspiciatis quis quidem deserunt temporibus, magni dicta,
              voluptatum porro, eligendi harum odio consequatur fuga excepturi
              vitae nemo odit architecto laboriosam. Iure assumenda sequi
              dolorem! Rem eos nobis suscipit voluptates corrupti! Delectus
              corporis excepturi libero beatae tenetur!
            </p>
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
    </div>
  );
};

export default Home;
