import React from "react";

const Payment = () => {
  return (
    <div>
      <div className="relative grid sm:flex">
        <div className="mx-8 flex-1 bg-hotel-brand-color rounded-3xl">
          <div className="w-full p-10 bg-gradient-to-r from-hotel-color-100 to-hotel-brand-color rounded-2xl">
            <h1 className="text-3xl font-semibold text-hotel-color">
              Credit<i>Card</i>
            </h1>

            <span className="text-xs  text-hotel-color shadow-2xl">
              İsminiz
            </span>

            <div className="flex justify-between items-center pt-4">
              <div className="flex flex-col">
                <span className="text-xs text-hotel-color font-bold">
                  xxxx xxxx xxxx xxxx
                </span>
                <span className="text-xs text-hotel-color font-bold">
                  09/10
                </span>
              </div>
              <img
                src={`https://img.icons8.com/offices/80/000000/sim-card-chip.png`}
              />
            </div>
          </div>
        </div>
        <div className="mx-2 w-full flex-1 bg-hotel-brand-color rounded-3xl">
          <div className="bg-hotel-brand-color rounded-3xl">
            <div className="w-full p-10 bg-gradient-to-r from-hotel-color-100 to-hotel-brand-color rounded-2xl">
              <h1 className="text-3xl font-semibold text-hotel-color">
                İstanbul
              </h1>
              <div className="flex justify-center gap-5">
                <div className="rounded w-full border-gray-200 bg-white p-1">
                  <div className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-center">
                    XXX
                  </div>
                </div>
                <div className="rounded w-full border-gray-200 bg-white p-1">
                  <div className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-center">
                    XXX
                  </div>
                </div>
              </div>
              <div className="flex mt-2 justify-center gap-5">
                <div className="rounded w-full border-gray-200 bg-white p-1">
                  <div className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-center">
                    XXX
                  </div>
                </div>
                <div className="rounded w-full border-gray-200 bg-white p-1">
                  <div className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-center">
                    XXX
                  </div>
                </div>
              </div>
              <div className="flex mt-2 justify-center gap-5">
                <div className="rounded w-full border-gray-200 bg-white p-1">
                  <div className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-center">
                    XXX
                  </div>
                </div>
                <div className="rounded w-full border-gray-200 bg-white p-1">
                  <div className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-center">
                    XXX
                  </div>
                </div>
              </div>
              <div className="flex mt-2 justify-center gap-5">
                <div className="flex rounded w-full border-gray-200 bg-white p-1">
                  <input
                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-center"
                    placeholder="İndirim Kodu"
                  />
                  <button className="flex bg-hotel-color text-white py-2 px-10 rounded-xl font-normal  cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out">
                    xx
                  </button>
                </div>
              </div>
              <div className="flex mt-2 justify-center gap-5">
                <div className="rounded w-full border-gray-200 bg-white p-1">
                  <div className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-center">
                    XXX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid text-white  mt-5 rounded-2xl w-[440px] mx-8">
        <h1 className="mx-2 mt-5">Kredi Kartı Bilgileri</h1>
        <div className="mx-2 w-[420px] flex-1">
          <div className="mt-3 mb-2 h-6 text-xs font-bold leading-8 text-hotel-brand-color">
            Kart Üstündeki İsim
          </div>
          <div className="flex rounded border border-gray-200 bg-white p-1">
            <input
              name="creditCardName"
              type="text"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              placeholder="Kart Üstündeki İsim"
            />
          </div>
        </div>
        <div className="mx-2 w-[420px] flex-1">
          <div className="mt-3 mb-2 h-6 text-xs font-bold leading-8 text-hotel-brand-color">
            Kartın Numarası
          </div>
          <div className="flex rounded border border-gray-200 bg-white p-1">
            <input
              name="creditCardNumber"
              type="number"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              placeholder="Kartın Numarası"
            />
          </div>
        </div>
        <div className="flex">
          <div className="mx-2 w-[200px]">
            <div className="mt-3 mb-2 h-6 text-xs font-bold leading-8 text-hotel-brand-color">
              Kartın Son Kullanma
            </div>
            <div className="flex rounded border border-gray-200 bg-white p-1">
              <input
                name="creditCardNumber"
                type="date"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                placeholder="Kartın Numarası"
              />
            </div>
          </div>
          <div className="mx-2 w-[200px]">
            <div className="mt-3 mb-2 h-6 text-xs font-bold leading-8 text-hotel-brand-color">
              CVV
            </div>
            <div className="flex rounded border border-gray-200 bg-white p-1">
              <input
                name="creditCardNumber"
                type="number"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                placeholder="Kartın Numarası"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
