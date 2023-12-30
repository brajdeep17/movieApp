import React, { useState } from "react";

const VideoTitle = ({ overview, title }) => {

const [show, setShow] = useState(false)
const handleShow = () => {
  setShow(!show)
}

  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-4xl font-bold">{title}</h1>
      {
        show ? <p className="py-6 text-lg w-1/3">{overview}</p> : <></>
      }
      <div className="py-6">
        {/* <button className="bg-white text-black font-bold p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:opacity-70">
          ▶️ Play
        </button> */}
        <button onClick = {handleShow} className="bg-white mx-1 text-black font-bold p-4 px-8 text-xl bg-opacity-50 rounded-lg hover:opacity-70">
          {show ? "Hide" : "Show"} Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
