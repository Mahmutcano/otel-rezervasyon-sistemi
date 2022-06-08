import React from "react";


const Navbar = () => {
  return (
    <>
      <div className="bg-hotel-color shadow-xl">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-white">
                {/* <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" /> */}
              </span>
              <p className="ml-3 font-medium text-white">
                <span className="hidden md:inline">
                  Otel Rezervasyon Sistemi
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="/"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-lg text-sm font-medium text-hotel-color bg-white hover:bg-hotel-color-50"
              >
                Yeni Rezervasyon
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
