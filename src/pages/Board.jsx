import React from "react";

const Board = () => {
  return (
    <div>
      <div className="p-6 py-12 bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl md:text-6xl tracking-tighter font-bold">
              Board of Directors
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-center text-xl my-5 md:w-1/2 border-b-2">
          Our success is a result of working together as a team, building on our
          technical knowledge and creative flair, and offering our clients a
          full range of services.
        </p>
      </div>
      <div className="conatiner mx-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="mx-auto p-5">
          <a href="#" className="block overflow-hidden rounded-2xl">
            <img
              alt="Office"
              src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg"
              className="object-cover w-[22rem] h-56"
            />

            <div className="p-4 bg-gray-900">
              <h5 className="text-3xl md:text-4xl text-yellow-400">
                John Doe
              </h5>


            </div>
          </a>
        </div>
        <div className="mx-auto p-5">
          <a href="#" className="block overflow-hidden rounded-2xl">
            <img
              alt="Office"
              src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg"
              className="object-cover w-[22rem] h-56"
            />

            <div className="p-4 bg-gray-900">
              <h5 className="text-3xl md:text-4xl text-yellow-400">
                John Doe
              </h5>


            </div>
          </a>
        </div>

        <div className="mx-auto p-5">
          <a href="#" className="block overflow-hidden rounded-2xl">
            <img
              alt="Office"
              src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg"
              className="object-cover w-[22rem] h-56"
            />

            <div className="p-4 bg-gray-900">
              <h5 className="text-3xl md:text-4xl text-yellow-400">
                Jane Doe
              </h5>


            </div>
          </a>
        </div>

        <div className="mx-auto p-5">
          <a href="#" className="block overflow-hidden rounded-2xl">
            <img
              alt="Office"
              src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg"
              className="object-cover w-[22rem] h-56"
            />

            <div className="p-4 bg-gray-900">
              <h5 className="text-3xl md:text-4xl text-yellow-400">John Doe</h5>


            </div>
          </a>
        </div>

        <div className="mx-auto p-5">
          <a href="#" className="block overflow-hidden rounded-2xl">
            <img
              alt="Office"
              src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg"
              className="object-cover w-[22rem] h-56"
            />

            <div className="p-4 bg-gray-900">
              <h5 className="text-3xl md:text-4xl text-yellow-400">Jane Doe</h5>


            </div>
          </a>
        </div>

        <div className="mx-auto p-5">
          <a href="#" className="block overflow-hidden rounded-2xl">
            <img
              alt="Office"
              src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg"
              className="object-cover w-[22rem] h-56"
            />

            <div className="p-4 bg-gray-900">
              <h5 className="text-3xl md:text-4xl text-yellow-400">John Doe</h5>

            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Board;
