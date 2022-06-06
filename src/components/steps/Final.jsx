import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const Final = () => {
  return (
          <div className="p-10 m-10 bg-hotel-brand-color rounded-3xl">
      <div className="flex flex-col items-center">
        <div className="wrapper text-green-500">
          <BsFillCheckCircleFill size={50} value={{color: 'red'}} />
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Rezervasyon Tamamlandı
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Ödemen Yapıldı
        </div>
        <a className="mt-10" href="/user/dashboard">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            Kapat
          </button>
        </a>
      </div>
    </div>
  )
}

export default Final