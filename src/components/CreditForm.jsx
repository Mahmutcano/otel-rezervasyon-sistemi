import React from "react";

const CreditForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-1  text-white">
      <h1 className="text-bold">Kredi Kartı Bilgileri</h1>
      <div className="w-full">
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
      <div className="w-full">
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
      <div className="flex gap-5">
        <div className="w-full">
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
        <div className="w-full">
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
  );
};

export default CreditForm;
