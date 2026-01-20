import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div className="pb-16">
      <h1
        className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold  bg-linear-to-r from-gray-950
      to bg-gray-400 bg-clip-text text-transparent py-6 md:py-16 "
      >
        {/* Title */}
        See the magic. Try now
      </h1>

      <div className="text-center mb-24">
        <input type="file" id="upload2" hidden />
        <label
          htmlFor="upload2"
          className=" inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-linear-to-r from-violet-600 to bg-fuchsia-500 m-auto hover:scale-105 transition-all  duration-700"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-white text-sm">Upload your image</p>
        </label>
      </div>
    </div>
  )
}

export default Upload
